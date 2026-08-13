import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CnpjConsultation } from '@/components/sections/cnpj-consultation';

describe('CnpjConsultation', () => {
  beforeEach(() => {
    window.dataLayer = [];
    window.sessionStorage.clear();
  });

  it('valida o dígito verificador antes de chamar a API', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch');
    render(<CnpjConsultation />);

    fireEvent.change(screen.getByLabelText('CNPJ da empresa'), {
      target: { value: '11.111.111/1111-11' },
    });
    await userEvent.click(screen.getByRole('button', { name: 'Consultar CNPJ' }));

    expect(await screen.findByRole('alert')).toHaveTextContent(
      'Digite um CNPJ válido com 14 números.',
    );
    expect(fetchMock).not.toHaveBeenCalled();
  });

  it('mostra os dados cadastrais retornados e registra a microconversão', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          cnpj: '12345678000195',
          razaoSocial: 'Empresa de Teste Ltda.',
          nomeFantasia: 'Empresa Teste',
          situacaoCadastral: 'ATIVA',
          dataAbertura: '2020-05-14',
          porte: 'MICRO EMPRESA',
          naturezaJuridica: 'Sociedade Empresária Limitada',
          tipo: 'MATRIZ',
          capitalSocial: 150000,
          dataSituacaoCadastral: '2020-05-14',
          motivoSituacaoCadastral: '',
          simplesNacional: true,
          mei: false,
          cnaeFiscal: '6201501',
          cnaeDescricao: 'Desenvolvimento de programas de computador',
          cnaesSecundarios: [
            { codigo: '6202300', descricao: 'Desenvolvimento de software customizável' },
          ],
          source: 'brasilapi',
          consultedAt: '2026-07-27T18:00:00.000Z',
          endereco: {
            cep: '01311-000',
            logradouro: 'Avenida Paulista',
            numero: '1000',
            complemento: '',
            bairro: 'Bela Vista',
            cidade: 'São Paulo',
            estado: 'SP',
          },
        }),
        { status: 200 },
      ),
    );
    window.dataLayer = [];
    render(<CnpjConsultation />);

    await userEvent.type(screen.getByLabelText('CNPJ da empresa'), '12345678000195');
    await userEvent.click(screen.getByRole('button', { name: 'Consultar CNPJ' }));

    expect(await screen.findByRole('heading', { name: 'Empresa de Teste Ltda.' })).toBeVisible();
    expect(screen.getByText('Situação ATIVA')).toBeVisible();
    expect(screen.getByText(/62\.01-5\/01/)).toBeVisible();
    expect(screen.getByText('R$ 150.000,00')).toBeVisible();
    expect(screen.getByText('Atividades secundárias (1)')).toBeVisible();
    expect(screen.getByText(/Desenvolvimento de software customizável/)).toBeVisible();
    expect(screen.getAllByText('Optante')).toHaveLength(1);
    expect(screen.getByText(/Avenida Paulista/)).toBeVisible();
    await waitFor(() => {
      expect(window.dataLayer).toContainEqual(
        expect.objectContaining({
          event: 'cnpj_consulta',
          cnpj_status: 'ATIVA',
          conversion_stage: 'microconversao',
        }),
      );
    });
  });

  it('permite imprimir e leva o CNPJ para a calculadora sem enviá-lo ao dataLayer', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          cnpj: '12345678000195',
          razaoSocial: 'Empresa de Teste Ltda.',
          nomeFantasia: '',
          situacaoCadastral: 'ATIVA',
          dataAbertura: '2020-05-14',
          porte: 'ME',
          naturezaJuridica: '',
          tipo: 'MATRIZ',
          capitalSocial: null,
          dataSituacaoCadastral: '',
          motivoSituacaoCadastral: '',
          simplesNacional: null,
          mei: null,
          cnaeFiscal: '6201501',
          cnaeDescricao: 'Desenvolvimento de programas de computador',
          cnaesSecundarios: [],
          source: 'brasilapi',
          consultedAt: '2026-07-27T18:00:00.000Z',
        }),
        { status: 200 },
      ),
    );
    const printMock = vi.spyOn(window, 'print').mockImplementation(() => undefined);
    render(<CnpjConsultation />);

    await userEvent.type(screen.getByLabelText('CNPJ da empresa'), '12345678000195');
    await userEvent.click(screen.getByRole('button', { name: 'Consultar CNPJ' }));
    await screen.findByRole('heading', { name: 'Empresa de Teste Ltda.' });

    await userEvent.click(screen.getByRole('button', { name: 'Imprimir resumo' }));
    expect(printMock).toHaveBeenCalledOnce();

    const riskLink = screen.getByRole('link', { name: 'Consultar grau de risco' });
    riskLink.addEventListener('click', (event) => event.preventDefault(), { once: true });
    await userEvent.click(riskLink);
    expect(JSON.parse(window.sessionStorage.getItem('sermst_cnpj_funnel_v1') || '{}')).toEqual({
      cnpj: '12345678000195',
      cnae: '6201501',
      empresa: 'Empresa de Teste Ltda.',
    });
    expect(window.dataLayer).toContainEqual({
      event: 'cnpj_risco',
      cnae_codigo: '6201501',
      source_page: 'consulta_cnpj',
      conversion_stage: 'descida_funil',
    });
    expect(window.dataLayer.some((item) => 'cnpj' in item)).toBe(false);
  });

  it('explica quando o limite temporário de consultas é atingido', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(JSON.stringify({ error: 'Muitas consultas.' }), { status: 429 }),
    );
    render(<CnpjConsultation />);

    await userEvent.type(screen.getByLabelText('CNPJ da empresa'), '12345678000195');
    await userEvent.click(screen.getByRole('button', { name: 'Consultar CNPJ' }));

    expect(
      await screen.findByText('Muitas consultas foram feitas em pouco tempo.'),
    ).toBeVisible();
  });

  it('orienta o usuário quando nenhuma fonte encontra o CNPJ', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(JSON.stringify({ error: 'CNPJ nao encontrado.' }), { status: 404 }),
    );
    render(<CnpjConsultation />);

    await userEvent.type(screen.getByLabelText('CNPJ da empresa'), '12345678000195');
    await userEvent.click(screen.getByRole('button', { name: 'Consultar CNPJ' }));

    expect(
      await screen.findByText('Não encontramos este CNPJ nas fontes consultadas.'),
    ).toBeVisible();
    expect(screen.getByRole('link', { name: 'Consultar no canal oficial' })).toHaveAttribute(
      'href',
      'https://www.gov.br/empresas-e-negocios/pt-br/redesim/comprovantes/',
    );
  });
});
