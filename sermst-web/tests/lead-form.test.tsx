import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { LeadForm } from '@/components/forms/lead-form';

describe('LeadForm', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();
    window.history.replaceState({}, '', '/contato?utm_source=google');
  });

  it('envia o formulario com sucesso e mostra confirmacao', async () => {
    const user = userEvent.setup();
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), { status: 200 }),
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
          headers: { 'Content-Type': 'application/json' },
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
  });

  it('mostra erro amigavel quando a API falha', async () => {
    const user = userEvent.setup();
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ error: 'Falha ao enviar lead' }), { status: 502 }),
    );

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
  });
});
