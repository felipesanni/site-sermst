import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { AssinaturaPlans } from '@/app/assinaturas/assinatura-plans';

describe('AssinaturaPlans contract flow', () => {
  beforeEach(() => {
    vi.restoreAllMocks();
    window.localStorage.clear();
    window.sessionStorage.clear();
    window.history.replaceState({}, '', '/assinaturas?utm_source=google');
  });

  it('calcula os valores mensais com as faixas definidas na tabela comercial', async () => {
    const user = userEvent.setup();

    render(<AssinaturaPlans />);

    expect(screen.getByText(/R\$\s*331/)).toBeInTheDocument();
    expect(screen.getByText(/R\$\s*372/)).toBeInTheDocument();
    expect(screen.getByText(/R\$\s*506/)).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: '20' }));

    expect(screen.getByText(/R\$\s*471/)).toBeInTheDocument();
    expect(screen.getByText(/R\$\s*542/)).toBeInTheDocument();
    expect(screen.getByText(/R\$\s*696/)).toBeInTheDocument();
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

    await user.click(screen.getByLabelText(/Contratar o Plano Essencial/i));
    expect(await screen.findByText(/Endereço encontrado pelo CNPJ/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Adicionar filial/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /Não, é outro endereço/i }));
    await user.clear(screen.getByLabelText(/^CEP \*$/i));
    await user.type(screen.getByLabelText(/^CEP \*$/i), '01001000');

    expect(await screen.findByDisplayValue('Praca da Se')).toBeInTheDocument();

    await user.type(screen.getByLabelText(/^Número \*$/i), '10');
    await user.type(screen.getByLabelText(/Nome completo/i), 'Maria Silva');
    await user.type(screen.getByLabelText(/E-mail corporativo/i), 'maria@empresa.com');
    await user.type(screen.getByLabelText(/Telefone\/WhatsApp/i), '11999999999');
    await user.type(screen.getByLabelText(/^Cargo/i), 'RH');
    await user.type(screen.getByLabelText(/Data de pagamento preferida/i), '10');
    await user.type(screen.getByLabelText(/E-mail do financeiro/i), 'financeiro@empresa.com');
    await user.click(screen.getByRole('checkbox'));
    await user.click(screen.getByRole('button', { name: /Confirmar envio/i }));

    expect(await screen.findByText(/Contratação enviada/i)).toBeInTheDocument();

    const leadCall = fetchMock.mock.calls.find(([url]) => String(url) === '/api/lead');
    expect(leadCall).toBeTruthy();

    const payload = JSON.parse(String(leadCall?.[1]?.body));
    expect(payload).toMatchObject({
      empresa: 'Empresa Assinatura',
      dor: 'assinatura-sst',
      utm_source: 'google',
      email_financeiro: 'financeiro@empresa.com',
    });
    expect(payload.mensagem).toContain('Plano escolhido: Plano Essencial');
    expect(payload.mensagem).toContain('Itens incluídos no contrato');
    expect(payload.mensagem).toContain('Endereço principal: Praca da Se');

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalledWith('/api/cep/01001000');
    });
  }, 20000);

  it('encaminha empresas com 100 ou mais funcionários para uma proposta comercial', async () => {
    const user = userEvent.setup();
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), { status: 200 }),
    );

    render(<AssinaturaPlans />);

    await user.click(screen.getByRole('button', { name: '100' }));

    expect(screen.getAllByText('Sob consulta')).toHaveLength(3);
    expect(screen.queryByText(/^Simulação mensal$/i)).not.toBeInTheDocument();
    expect(screen.getByText(/A partir de 100 funcionários/i)).toBeInTheDocument();

    const commercialButtons = screen.getAllByRole('button', {
      name: /Solicitar proposta comercial para o Plano/i,
    });
    expect(commercialButtons).toHaveLength(3);

    await user.click(
      screen.getByRole('button', {
        name: 'Solicitar proposta comercial para o Plano Essencial',
      }),
    );

    expect(
      await screen.findByRole('dialog', { name: 'Proposta corporativa de SST' }),
    ).toBeInTheDocument();

    await user.type(screen.getByLabelText(/^Empresa/i), 'Empresa Corporativa');
    await user.type(screen.getByLabelText(/^Nome completo/i), 'João da Silva');
    await user.type(screen.getByLabelText(/^Cargo/i), 'Diretor de RH');
    await user.type(screen.getByLabelText(/^E-mail corporativo/i), 'joao@empresa.com');
    await user.type(screen.getByLabelText(/^Telefone ou WhatsApp/i), '11999999999');
    await user.click(screen.getByRole('checkbox'));
    await user.click(screen.getByRole('button', { name: /Enviar para o comercial/i }));

    expect(await screen.findByText('Solicitação recebida')).toBeInTheDocument();
    expect(screen.getByText(/entrará em contato o mais rápido possível/i)).toBeInTheDocument();

    const leadCall = fetchMock.mock.calls.find(([url]) => String(url) === '/api/lead');
    expect(leadCall).toBeTruthy();

    const payload = JSON.parse(String(leadCall?.[1]?.body));
    expect(payload).toMatchObject({
      empresa: 'Empresa Corporativa',
      nome: 'João da Silva',
      email: 'joao@empresa.com',
      telefone: '11999999999',
      funcionarios: '100',
      plano_assinatura: 'Plano Essencial',
      lead_type: 'assinatura-corporativa',
    });
    expect(payload.mensagem).toContain('Funcionários informados: 100');
  });
});
