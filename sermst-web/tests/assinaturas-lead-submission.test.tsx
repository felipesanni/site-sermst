import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { AssinaturaPlans } from '@/app/assinaturas/assinatura-plans';

async function openCommercialModal(user: ReturnType<typeof userEvent.setup>) {
  await user.click(screen.getByRole('button', { name: '100' }));
  await user.click(screen.getAllByRole('button', { name: /Solicitar proposta comercial/i })[0]);

  await user.type(screen.getByLabelText(/Empresa/), 'Empresa QA');
  await user.type(screen.getByLabelText(/Nome completo/), 'Pessoa QA');
  await user.type(screen.getByLabelText(/^Cargo/), 'Diretora de RH');
  await user.type(screen.getByLabelText(/E-mail corporativo/), 'PESSOA@EXAMPLE.COM');
  await user.type(screen.getByLabelText(/Telefone ou WhatsApp/), '(11) 99999-8888');
  await user.type(screen.getAllByLabelText(/^CNPJ/).at(-1)!, '12.345.678/0001-95');
  await user.click(screen.getByRole('checkbox'));
}

describe('subscription commercial lead submission', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();
    window.dataLayer = [];
    window.history.replaceState({}, '', '/assinaturas?utm_source=google');
  });

  it('sends the selected plan and normalized company fields, then reports accepted delivery without a CRM conversion', async () => {
    const user = userEvent.setup();
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify({
      ok: true,
      delivered: true,
      crmConfirmed: false,
      deliveryStatus: 'delivery_accepted',
    }), { status: 202 }));
    render(<AssinaturaPlans />);

    await openCommercialModal(user);
    await user.click(screen.getByRole('button', { name: /Enviar para o comercial/i }));

    expect(await screen.findByText('Solicitação recebida')).toBeInTheDocument();
    expect(fetchMock).toHaveBeenCalledOnce();

    const options = fetchMock.mock.calls[0][1];
    expect(options?.headers).toMatchObject({
      'Content-Type': 'application/json',
      'Idempotency-Key': expect.stringMatching(/^sermst_/),
    });
    const payload = JSON.parse(String(options?.body));
    expect(payload).toMatchObject({
      empresa: 'Empresa QA',
      nome: 'Pessoa QA',
      email: 'pessoa@example.com',
      cnpj: '12345678000195',
      lead_type: 'assinatura-corporativa',
      assinatura: {
        plano: { id: expect.any(String), funcionarios: 100 },
        empresa: { cnpj: '12345678000195' },
      },
    });
    expect(window.dataLayer?.map(item => item.event)).toContain('subscription_lead_delivery_accepted');
    expect(window.dataLayer?.map(item => item.event)).not.toContain('subscription_lead_confirmed');
    expect(JSON.stringify(window.dataLayer)).not.toContain('PESSOA@EXAMPLE.COM');
    expect(JSON.stringify(window.dataLayer)).not.toContain('12345678000195');
  });

  it('reuses the same key after failure and emits the canonical event only after CRM confirmation', async () => {
    const user = userEvent.setup();
    let leadAttempts = 0;
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockImplementation(async input => {
      if (String(input) !== '/api/lead') return new Response('{}', { status: 404 });
      leadAttempts += 1;
      if (leadAttempts === 1) {
        return new Response(JSON.stringify({ error: 'Tente novamente.' }), { status: 502 });
      }
      return new Response(JSON.stringify({
        ok: true,
        delivered: true,
        crmConfirmed: true,
        crmId: 'crm-private-id',
        deliveryStatus: 'crm_confirmed',
      }), { status: 200 });
    });
    render(<AssinaturaPlans />);

    await openCommercialModal(user);
    await user.click(screen.getByRole('button', { name: /Enviar para o comercial/i }));
    expect(await screen.findByRole('alert')).toHaveTextContent('Tente novamente');

    await user.click(screen.getByRole('button', { name: /Enviar para o comercial/i }));
    await waitFor(() => expect(screen.getByText('Solicitação recebida')).toBeInTheDocument());

    const firstHeaders = fetchMock.mock.calls[0][1]?.headers as Record<string, string>;
    const retryHeaders = fetchMock.mock.calls[1][1]?.headers as Record<string, string>;
    expect(retryHeaders['Idempotency-Key']).toBe(firstHeaders['Idempotency-Key']);
    expect(window.dataLayer?.map(item => item.event)).toEqual(['subscription_lead_confirmed']);
    expect(JSON.stringify(window.dataLayer)).not.toContain('crm-private-id');
    expect(JSON.stringify(window.dataLayer)).not.toContain('Pessoa QA');
  });
});