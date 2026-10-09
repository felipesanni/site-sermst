import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { LeadForm } from '@/components/forms/lead-form';

describe('LeadForm', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();
    window.dataLayer = [];
    window.history.replaceState({}, '', '/contato?utm_source=google');
  });

  it('envia o formulario com sucesso e mostra confirmacao', async () => {
    const user = userEvent.setup();
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ ok: true, delivered: true, crmConfirmed: true }), { status: 200 }),
    );

    render(<LeadForm />);

    await user.type(screen.getByLabelText(/Seu nome/i), 'Maria Silva');
    await user.type(screen.getByLabelText(/^Empresa$/i), 'Empresa Teste');
    await user.type(screen.getByLabelText(/^E-mail$/i), 'maria@empresa.com');
    await user.type(screen.getByLabelText(/Telefone/i), '11999999999');
    await user.selectOptions(screen.getByLabelText(/Quantos funcionários/i), '21-100');
    await user.selectOptions(screen.getByLabelText(/principal demanda/i), 'esocial');
    await user.click(screen.getByRole('button', { name: /Quero receber contato da SERMST/i }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith(
        '/api/lead',
        expect.objectContaining({
          method: 'POST',
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
            'Idempotency-Key': expect.stringMatching(/^sermst_/),
          }),
        }),
      );
    });

    expect(await screen.findByText(/Recebemos sua mensagem/i)).toBeInTheDocument();

    const payload = JSON.parse(String(fetchMock.mock.calls[0]?.[1]?.body));
    expect(payload).toMatchObject({
      nome: 'Maria Silva',
      empresa: 'Empresa Teste',
      utm_source: 'google',
    });
    expect(window.dataLayer).toContainEqual(expect.objectContaining({ event: 'sermst_lead_generated', form_name: 'contato_sermst' }));
    expect(JSON.stringify(window.dataLayer)).not.toContain('maria@empresa.com');
  });

  it('mostra erro amigavel quando a API falha', async () => {
    const user = userEvent.setup();
    const fetchMock = vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce(new Response(JSON.stringify({ error: 'Falha ao enviar lead' }), { status: 502 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ ok: true, delivered: true, crmConfirmed: false }), { status: 202 }));

    render(<LeadForm />);

    await user.type(screen.getByLabelText(/Seu nome/i), 'Maria Silva');
    await user.type(screen.getByLabelText(/^Empresa$/i), 'Empresa Teste');
    await user.type(screen.getByLabelText(/^E-mail$/i), 'maria@empresa.com');
    await user.type(screen.getByLabelText(/Telefone/i), '11999999999');
    await user.selectOptions(screen.getByLabelText(/Quantos funcionários/i), '21-100');
    await user.selectOptions(screen.getByLabelText(/principal demanda/i), 'esocial');
    await user.click(screen.getByRole('button', { name: /Quero receber contato da SERMST/i }));

    expect(await screen.findByText(/Não conseguimos enviar/i)).toBeInTheDocument();
    expect(screen.getByText(/Falha ao enviar lead/i)).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /Quero receber contato da SERMST/i }));
    expect(await screen.findByText(/Recebemos sua mensagem/i)).toBeInTheDocument();
    const firstKey = fetchMock.mock.calls[0]?.[1]?.headers as Record<string, string>;
    const retryKey = fetchMock.mock.calls[1]?.[1]?.headers as Record<string, string>;
    expect(retryKey['Idempotency-Key']).toBe(firstKey['Idempotency-Key']);
    expect(window.dataLayer).toContainEqual(expect.objectContaining({ event: 'sermst_lead_delivery_accepted' }));
    expect(window.dataLayer).not.toContainEqual(expect.objectContaining({ event: 'sermst_lead_generated' }));
  });

  it('apresenta a candidatura seletiva do parceiro comercial', () => {
    render(<LeadForm variant="commercial-partner" />);

    expect(
      screen.getByRole('heading', {
        name: /Conte como você pretende desenvolver essa oportunidade/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Profissão, empresa ou operação atual/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Como você pretende operar/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Qual perfil mais combina com você/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Enviar minha candidatura/i })).toBeInTheDocument();
    expect(document.querySelector('input[name="lead_type"]')).toHaveValue('parceiro-comercial');
  });
});
