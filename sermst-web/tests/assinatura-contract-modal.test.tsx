import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { AssinaturaPlans } from '@/app/assinaturas/assinatura-plans';

describe('AssinaturaPlans contract flow', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();
    window.history.replaceState({}, '', '/assinaturas?utm_source=google');
  });

  it('consulta CNPJ, permite trocar endereco por CEP e envia a simulacao', async () => {
    const user = userEvent.setup();
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockImplementation(async (input, init) => {
      const url = String(input);

      if (url.startsWith('/api/cnpj/')) {
        return new Response(
          JSON.stringify({
            razaoSocial: 'Empresa Assinatura',
            cnaeFiscal: '6201501',
            cnaeDescricao: 'Desenvolvimento de software',
            source: 'brasilapi',
            endereco: {
              cep: '01311-000',
              logradouro: 'Avenida Paulista',
              numero: '1000',
              complemento: '',
              bairro: 'Bela Vista',
              cidade: 'Sao Paulo',
              estado: 'SP',
            },
          }),
          { status: 200 },
        );
      }

      if (url.startsWith('/api/cep/')) {
        return new Response(
          JSON.stringify({
            cep: '01001-000',
            logradouro: 'Praca da Se',
            complemento: '',
            bairro: 'Se',
            cidade: 'Sao Paulo',
            estado: 'SP',
            source: 'viacep',
          }),
          { status: 200 },
        );
      }

      if (url === '/api/lead') {
        return new Response(JSON.stringify({ ok: true }), { status: 200 });
      }

      return new Response(JSON.stringify({ error: 'not mocked', init }), { status: 404 });
    });

    render(<AssinaturaPlans />);

    await user.type(screen.getByLabelText(/^CNPJ da empresa$/i), '12345678000195');

    expect(await screen.findByText('Empresa Assinatura')).toBeInTheDocument();

    await user.click(screen.getByLabelText(/Solicitar contratação do Plano Essencial/i));
    expect(await screen.findByText(/Endereço encontrado pelo CNPJ/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Adicionar filial/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /Não, é outro endereço/i }));
    await user.clear(screen.getByLabelText(/^CEP \*$/i));
    await user.type(screen.getByLabelText(/^CEP \*$/i), '01001000');

    expect(await screen.findByDisplayValue('Praca da Se')).toBeInTheDocument();

    await user.type(screen.getByLabelText(/^Número \*$/i), '10');
    await user.type(screen.getByLabelText(/Nome do contato/i), 'Maria Silva');
    await user.type(screen.getByLabelText(/Cargo/i), 'RH');
    await user.type(screen.getByLabelText(/E-mail profissional/i), 'maria@empresa.com');
    await user.type(screen.getByLabelText(/WhatsApp/i), '11999999999');
    await user.selectOptions(screen.getByLabelText(/Melhor dia de pagamento/i), '10');
    await user.click(screen.getByRole('checkbox'));
    await user.click(screen.getByRole('button', { name: /Enviar solicitação de contratação/i }));

    expect(await screen.findByText(/Solicitação enviada/i)).toBeInTheDocument();

    const leadCall = fetchMock.mock.calls.find(([url]) => String(url) === '/api/lead');
    expect(leadCall).toBeTruthy();

    const payload = JSON.parse(String(leadCall?.[1]?.body));
    expect(payload).toMatchObject({
      empresa: 'Empresa Assinatura',
      dor: 'assinatura-sst',
      utm_source: 'google',
    });
    expect(payload.mensagem).toContain('Plano escolhido: Plano Essencial');
    expect(payload.mensagem).toContain('Endereço principal: Praca da Se');

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith('/api/cep/01001000');
    });
  });
});
