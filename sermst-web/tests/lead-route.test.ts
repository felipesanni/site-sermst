import { beforeEach, describe, expect, it, vi } from 'vitest';
import nodemailer from 'nodemailer';
import { POST } from '@/app/api/lead/route';

const deliveryEnvKeys = [
  'LEAD_WEBHOOK_URL',
  'SMTP_HOST',
  'SMTP_PORT',
  'SMTP_USER',
  'SMTP_PASS',
  'SMTP_FROM',
  'LEAD_NOTIFY_EMAIL',
  'TURNSTILE_SECRET_KEY',
] as const;

function buildLeadRequest(
  body: Record<string, unknown>,
  ip = '203.0.113.10',
  idempotencyKey?: string,
) {
  return new Request('http://localhost/api/lead', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'x-forwarded-for': ip,
      ...(idempotencyKey ? { 'Idempotency-Key': idempotencyKey } : {}),
    },
    body: JSON.stringify(body),
  });
}

function validPayload(overrides: Record<string, unknown> = {}) {
  return {
    nome: 'Maria Silva',
    empresa: 'Empresa Teste',
    email: 'maria@empresa.com',
    telefone: '11999999999',
    porte: '21-100',
    dor: 'esocial',
    mensagem: 'Precisamos revisar o eSocial da empresa.',
    form_started_at: String(Date.now() - 10_000),
    ...overrides,
  };
}

describe('POST /api/lead', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    for (const key of deliveryEnvKeys) {
      delete process.env[key];
    }
  });

  it('não declara sucesso quando nenhum canal de entrega está configurado', async () => {
    const response = await POST(buildLeadRequest(validPayload(), '203.0.113.11'));

    expect(response.status).toBe(503);
    await expect(response.json()).resolves.toMatchObject({
      ok: false,
      received: true,
      delivered: false,
      status: 'delivery_not_configured',
    });
  });

  it('preserva a proposta estruturada e reconhece confirmação explícita do CRM no webhook', async () => {
    process.env.LEAD_WEBHOOK_URL = 'https://webhook.example/leads';
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ crm_confirmed: true, crm_id: 'crm-real-123' }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }),
    );

    const response = await POST(buildLeadRequest(
      validPayload({
        empresa: 'Empresa Corporativa',
        dor: 'proposta-corporativa-sst',
        lead_type: 'assinatura-corporativa',
        porte: '100 funcionários',
        plano_assinatura: 'Plano Essencial',
        funcionarios: '100',
        cnpj: '12345678000195',
        cnae: '6201501',
        grau_risco: '2',
        assinatura: {
          plano: { id: 'essencial', nome: 'Plano Essencial', funcionarios: 100 },
          responsavel: { nome: 'Maria Silva', email: 'maria@empresa.com', cargo: 'Diretora de RH' },
          empresa: {
            cnpj: '12345678000195',
            razao_social: 'Empresa Corporativa',
            cnae: '6201501',
            grau_risco: '2',
            endereco_principal: { cidade: 'São Paulo', estado: 'SP' },
          },
        },
        utm_source: 'google',
        utm_campaign: 'proposta-sst',
      }),
      '203.0.113.18',
      'sub_test_123',
    ));

    const webhookPayload = JSON.parse(String(fetchMock.mock.calls[0]?.[1]?.body));
    expect(fetchMock.mock.calls[0]?.[1]?.headers).toMatchObject({
      'Idempotency-Key': 'sub_test_123',
    });
    expect(fetchMock.mock.calls[0]?.[1]?.signal).toBeInstanceOf(AbortSignal);
    expect(webhookPayload).toMatchObject({
      leadType: 'assinatura-corporativa',
      subscription: {
        plano: { id: 'essencial', nome: 'Plano Essencial', funcionarios: 100 },
        responsavel: { nome: 'Maria Silva', email: 'maria@empresa.com', cargo: 'Diretora de RH' },
        empresa: {
          cnpj: '12345678000195',
          razao_social: 'Empresa Corporativa',
          cnae: '6201501',
          endereco_principal: { cidade: 'São Paulo', estado: 'SP' },
        },
      },
      attribution: { lastTouch: { utm_source: 'google', utm_campaign: 'proposta-sst' } },
    });
    await expect(response.json()).resolves.toEqual({
      ok: true,
      received: true,
      delivered: true,
      deliveryChannels: ['webhook'],
      crmConfirmed: true,
      deliveryStatus: 'crm_confirmed',
      crmId: 'crm-real-123',
    });
  });

  it('trata webhook 2xx sem confirmação explícita como entrega, não como lead confirmado', async () => {
    process.env.LEAD_WEBHOOK_URL = 'https://webhook.example/leads';
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), { status: 200 }),
    );

    const response = await POST(buildLeadRequest(validPayload(), '203.0.113.19'));

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      ok: true,
      received: true,
      delivered: true,
      deliveryChannels: ['webhook'],
      crmConfirmed: false,
      deliveryStatus: 'delivery_accepted',
    });
  });

  it('recognizes the current CRM success contract only when it returns an opportunity ID', async () => {
    process.env.LEAD_WEBHOOK_URL = 'https://webhook.example/leads';
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ success: true, opportunityId: 'opp-123' }), { status: 201 }),
    );

    const confirmed = await POST(buildLeadRequest(validPayload(), '203.0.113.20', 'contact_req_1'));
    expect(confirmed.status).toBe(200);
    await expect(confirmed.json()).resolves.toMatchObject({
      delivered: true,
      crmConfirmed: true,
      crmId: 'opp-123',
      deliveryStatus: 'crm_confirmed',
    });
  });

  it('does not treat a generic success body without the CRM opportunity ID as CRM confirmation', async () => {
    process.env.LEAD_WEBHOOK_URL = 'https://webhook.example/leads';
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ success: true }), { status: 200 }),
    );

    const response = await POST(buildLeadRequest(validPayload(), '203.0.113.22', 'contact_req_no_id'));

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toMatchObject({
      delivered: true,
      crmConfirmed: false,
      deliveryStatus: 'delivery_accepted',
    });
  });

  it('accepts an explicit middleware CRM confirmation even when it has no CRM ID', async () => {
    process.env.LEAD_WEBHOOK_URL = 'https://webhook.example/leads';
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ crm_confirmed: true }), { status: 200 }),
    );

    const response = await POST(buildLeadRequest(validPayload(), '203.0.113.23', 'contact_req_confirmed'));

    expect(response.status).toBe(200);
    const receipt = await response.json();
    expect(receipt).toMatchObject({
      crmConfirmed: true,
      deliveryStatus: 'crm_confirmed',
    });
    expect(receipt).not.toHaveProperty('crmId');
  });
  it('rejects malformed idempotency keys instead of silently dropping them', async () => {
    process.env.LEAD_WEBHOOK_URL = 'https://webhook.example/leads';
    const fetchMock = vi.spyOn(globalThis, 'fetch');

    const response = await POST(buildLeadRequest(validPayload(), '203.0.113.21', 'bad key'));

    expect(response.status).toBe(400);
    expect(fetchMock).not.toHaveBeenCalled();
  });
  it('envia candidatura de parceiro em um email personalizado', async () => {
    process.env.SMTP_HOST = 'smtp.example.com';
    process.env.SMTP_PORT = '587';
    process.env.SMTP_USER = 'site@sermst.com.br';
    process.env.SMTP_PASS = 'test-password';
    process.env.SMTP_FROM = 'SERMST Site <site@sermst.com.br>';
    process.env.LEAD_NOTIFY_EMAIL = 'parcerias@sermst.com.br';

    const sendMailMock = vi.fn().mockResolvedValue({ messageId: 'test-id' });
    vi.spyOn(nodemailer, 'createTransport').mockReturnValue({
      sendMail: sendMailMock,
    } as never);

    const response = await POST(
      buildLeadRequest(
        validPayload({
          nome: 'Felipe Sannino',
          empresa: 'Consultoria Ocupacional',
          email: 'felipe@example.com',
          telefone: '11999998888',
          porte: 'equipe-6-mais',
          dor: 'profissional-sst',
          mensagem: 'Atuo com SST e já tenho relacionamento com empresas.',
          lead_type: 'parceiro-comercial',
          conversion_page: 'https://sermst.com.br/parcerias/comerciais',
          utm_source: 'linkedin',
          utm_medium: 'job-posting',
        }),
        '203.0.113.17',
      ),
    );

    expect(response.status).toBe(200);
    expect(sendMailMock).toHaveBeenCalledOnce();

    const mail = sendMailMock.mock.calls[0][0] as {
      subject: string;
      replyTo: string;
      text: string;
      html: string;
    };

    expect(mail.replyTo).toBe('felipe@example.com');
    expect(mail.subject).toContain(
      Buffer.from(
        'Programa de Parceiros | Nova candidatura: Felipe Sannino',
      ).toString('base64'),
    );
    expect(mail.text).toContain('Profissional de SST');
    expect(mail.text).toContain('Já possui uma equipe com 6 ou mais pessoas');
    expect(mail.html).toContain('Nova candidatura recebida');
    expect(mail.html).toContain('Responder por e-mail');
    expect(mail.html).toContain('Profissional de SST');
    expect(mail.html).toContain('Já possui uma equipe com 6 ou mais pessoas');
    expect(mail.html).not.toContain('profissional-sst');
    expect(mail.html).not.toContain('equipe-6-mais');
  });

  it('bloqueia payload sem campos obrigatorios', async () => {
    const response = await POST(buildLeadRequest(validPayload({ email: '' }), '203.0.113.12'));

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({
      error: 'Campo obrigatório ausente: email',
    });
  });

  it('ignora bots no honeypot sem quebrar a experiencia', async () => {
    const response = await POST(
      buildLeadRequest(validPayload({ website: 'https://spam.example' }), '203.0.113.13'),
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({ ok: true });
  });

  it('barra conteudo com padrao claro de spam', async () => {
    const response = await POST(
      buildLeadRequest(validPayload({ mensagem: 'seo service com backlink e casino' }), '203.0.113.14'),
    );

    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({
      error: 'Nao foi possivel validar o conteudo enviado.',
    });
  });

  it('aplica rate limit por IP para evitar abuso', async () => {
    process.env.LEAD_WEBHOOK_URL = 'https://webhook.example/leads';
    vi.spyOn(globalThis, 'fetch').mockImplementation(async () => new Response(JSON.stringify({ ok: true }), { status: 200 }));
    const ip = '203.0.113.15';

    for (let attempt = 0; attempt < 5; attempt += 1) {
      const response = await POST(buildLeadRequest(validPayload(), ip));
      expect(response.status).toBe(200);
    }

    const blockedResponse = await POST(buildLeadRequest(validPayload(), ip));

    expect(blockedResponse.status).toBe(429);
    await expect(blockedResponse.json()).resolves.toEqual({
      error: 'Muitas requisições. Tente novamente em alguns instantes.',
    });
  });

  it('retorna 502 quando entrega externa falha depois de tentar enviar', async () => {
    process.env.LEAD_WEBHOOK_URL = 'https://webhook.example/leads';
    const fetchMock = vi
      .spyOn(globalThis, 'fetch')
      .mockRejectedValue(new Error('network down'));

    const response = await POST(buildLeadRequest(validPayload(), '203.0.113.16'));

    expect(fetchMock).toHaveBeenCalled();
    expect(response.status).toBe(502);
    await expect(response.json()).resolves.toMatchObject({
      ok: false,
      received: true,
      delivered: false,
      status: 'delivery_failed',
      error:
        'Nao foi possivel concluir o envio agora. Tente novamente em instantes ou fale com a SERMST pelo WhatsApp.',
    });

    delete process.env.LEAD_WEBHOOK_URL;
  });
});
