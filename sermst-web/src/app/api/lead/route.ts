import { NextResponse } from 'next/server';

/**
 * POST /api/lead
 *
 * Recebe submissoes do formulario de lead (/contato) e:
 * 1. Valida campos obrigatorios e honeypot anti-spam
 * 2. Loga no console do servidor (todos os leads ficam no log da Vercel)
 * 3. Envia email para LEAD_NOTIFY_EMAIL se SMTP estiver configurado
 * 4. Posta em LEAD_WEBHOOK_URL se configurado (CRM, Make, Zapier, n8n)
 *
 * Variaveis de ambiente esperadas (configurar no Vercel/host):
 * - LEAD_NOTIFY_EMAIL - destinatario (ex.: comercial@sermst.com.br)
 * - LEAD_WEBHOOK_URL  - URL para POST do payload (CRM/Zapier)
 * - RESEND_API_KEY    - opcional, se usar Resend para envio de email
 *
 * Hoje funciona como recebedor + log + webhook. Integracao de email pode
 * ser plugada depois sem alterar o frontend.
 */

interface LeadPayload {
  nome?: string;
  empresa?: string;
  email?: string;
  telefone?: string;
  porte?: string;
  dor?: string;
  mensagem?: string;
  website?: string;
  landing_page?: string;
  conversion_page?: string;
  original_referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  fbclid?: string;
  utm_source_first?: string;
  utm_medium_first?: string;
  utm_campaign_first?: string;
  utm_content_first?: string;
  utm_term_first?: string;
  gclid_first?: string;
  fbclid_first?: string;
  attribution_first_captured_at?: string;
  attribution_last_captured_at?: string;
}

const REQUIRED = ['nome', 'empresa', 'email', 'telefone', 'porte', 'dor'] as const;

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export async function POST(req: Request) {
  let data: LeadPayload;

  try {
    data = (await req.json()) as LeadPayload;
  } catch {
    return NextResponse.json({ error: 'Payload invalido.' }, { status: 400 });
  }

  // Honeypot para bots que preenchem campos invisiveis.
  if (data.website && data.website.trim() !== '') {
    return NextResponse.json({ ok: true });
  }

  for (const field of REQUIRED) {
    if (!data[field] || String(data[field]).trim() === '') {
      return NextResponse.json(
        { error: `Campo obrigatorio ausente: ${field}` },
        { status: 400 }
      );
    }
  }

  if (!isEmail(String(data.email))) {
    return NextResponse.json({ error: 'E-mail invalido.' }, { status: 400 });
  }

  const lead = {
    nome: String(data.nome).trim(),
    empresa: String(data.empresa).trim(),
    email: String(data.email).trim().toLowerCase(),
    telefone: String(data.telefone).trim(),
    porte: String(data.porte).trim(),
    dor: String(data.dor).trim(),
    mensagem: data.mensagem ? String(data.mensagem).trim() : '',
    attribution: {
      landingPage: data.landing_page ? String(data.landing_page).trim() : '',
      conversionPage: data.conversion_page ? String(data.conversion_page).trim() : '',
      originalReferrer: data.original_referrer ? String(data.original_referrer).trim() : '',
      lastTouch: {
        utm_source: data.utm_source ? String(data.utm_source).trim() : '',
        utm_medium: data.utm_medium ? String(data.utm_medium).trim() : '',
        utm_campaign: data.utm_campaign ? String(data.utm_campaign).trim() : '',
        utm_content: data.utm_content ? String(data.utm_content).trim() : '',
        utm_term: data.utm_term ? String(data.utm_term).trim() : '',
        gclid: data.gclid ? String(data.gclid).trim() : '',
        fbclid: data.fbclid ? String(data.fbclid).trim() : '',
        capturedAt: data.attribution_last_captured_at
          ? String(data.attribution_last_captured_at).trim()
          : '',
      },
      firstTouch: {
        utm_source: data.utm_source_first ? String(data.utm_source_first).trim() : '',
        utm_medium: data.utm_medium_first ? String(data.utm_medium_first).trim() : '',
        utm_campaign: data.utm_campaign_first ? String(data.utm_campaign_first).trim() : '',
        utm_content: data.utm_content_first ? String(data.utm_content_first).trim() : '',
        utm_term: data.utm_term_first ? String(data.utm_term_first).trim() : '',
        gclid: data.gclid_first ? String(data.gclid_first).trim() : '',
        fbclid: data.fbclid_first ? String(data.fbclid_first).trim() : '',
        capturedAt: data.attribution_first_captured_at
          ? String(data.attribution_first_captured_at).trim()
          : '',
      },
    },
    receivedAt: new Date().toISOString(),
    userAgent: req.headers.get('user-agent') ?? '',
    referer: req.headers.get('referer') ?? '',
  };

  console.log('[LEAD]', JSON.stringify(lead));

  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(lead),
      });
    } catch (err) {
      console.error('[LEAD] Webhook falhou:', err);
    }
  }

  const resendKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.LEAD_NOTIFY_EMAIL;
  if (resendKey && notifyTo) {
    try {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'SERMST Site <site@sermst.com.br>',
          to: [notifyTo],
          subject: `Novo lead: ${lead.empresa} (${lead.dor})`,
          text:
            `Nome: ${lead.nome}\n` +
            `Empresa: ${lead.empresa}\n` +
            `E-mail: ${lead.email}\n` +
            `Telefone: ${lead.telefone}\n` +
            `Porte: ${lead.porte}\n` +
            `Dor: ${lead.dor}\n` +
            `Mensagem: ${lead.mensagem || '(vazio)'}\n` +
            `Landing page: ${lead.attribution.landingPage || '(vazio)'}\n` +
            `Pagina de conversao: ${lead.attribution.conversionPage || '(vazio)'}\n` +
            `Referrer original: ${lead.attribution.originalReferrer || '(vazio)'}\n` +
            `UTM source: ${lead.attribution.lastTouch.utm_source || '(vazio)'}\n` +
            `UTM medium: ${lead.attribution.lastTouch.utm_medium || '(vazio)'}\n` +
            `UTM campaign: ${lead.attribution.lastTouch.utm_campaign || '(vazio)'}\n` +
            `UTM content: ${lead.attribution.lastTouch.utm_content || '(vazio)'}\n` +
            `UTM term: ${lead.attribution.lastTouch.utm_term || '(vazio)'}\n` +
            `GCLID: ${lead.attribution.lastTouch.gclid || '(vazio)'}\n` +
            `FBCLID: ${lead.attribution.lastTouch.fbclid || '(vazio)'}\n` +
            `Primeira origem UTM source: ${lead.attribution.firstTouch.utm_source || '(vazio)'}\n` +
            `Primeira origem UTM medium: ${lead.attribution.firstTouch.utm_medium || '(vazio)'}\n` +
            `Primeira origem UTM campaign: ${lead.attribution.firstTouch.utm_campaign || '(vazio)'}\n` +
            `\nRecebido em: ${lead.receivedAt}\n` +
            `Origem: ${lead.referer}`,
        }),
      });
    } catch (err) {
      console.error('[LEAD] Resend falhou:', err);
    }
  }

  return NextResponse.json({ ok: true });
}
