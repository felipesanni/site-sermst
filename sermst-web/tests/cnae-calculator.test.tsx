import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CnaeCalculator } from '@/components/sections/cnae-calculator';
import { buscarCnae, cnaeData, grauRiscoInfo, ratGilratMeta } from '@/lib/data/cnae-data';
import { calculateNr05 } from '@/lib/nr05';

const sampleEntry = cnaeData[0];

describe('CnaeCalculator', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();
    window.dataLayer = [];
    window.history.replaceState({}, '', '/rh/calculadora-cnae-grau-de-risco');
  });

  it('consulta o CNPJ, encontra o CNAE e mostra o enquadramento de NR-05', async () => {
    const user = userEvent.setup();
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(
        JSON.stringify({
          razaoSocial: 'Empresa da Calculadora',
          cnaeFiscal: sampleEntry.codigo,
          cnaeDescricao: sampleEntry.descricao,
        }),
        { status: 200 },
      ),
    );

    render(<CnaeCalculator />);

    const searchButton = screen.getByRole('button', { name: /Buscar e ver resultado/i });
    expect(searchButton).toBeDisabled();

    await user.type(screen.getByPlaceholderText('00.000.000/0001-00'), '12345678000195');
    expect(searchButton).toBeDisabled();
    expect(fetchMock).not.toHaveBeenCalled();
    expect(screen.queryByText('Empresa da Calculadora')).not.toBeInTheDocument();

    await user.type(screen.getByPlaceholderText('Ex: 28'), '100');
    expect(searchButton).toBeDisabled();
    expect(screen.queryByText('Empresa da Calculadora')).not.toBeInTheDocument();

    await user.selectOptions(screen.getByRole('combobox', { name: /Seu perfil/i }), 'Contador(a)');
    expect(searchButton).toBeEnabled();
    expect(fetchMock).not.toHaveBeenCalled();
    expect(screen.queryByText('Empresa da Calculadora')).not.toBeInTheDocument();
    expect(window.dataLayer).not.toContainEqual(
      expect.objectContaining({ event: 'cnae_calculator_cnpj_result' }),
    );

    await user.click(searchButton);

    expect(await screen.findByText('Empresa da Calculadora')).toBeInTheDocument();
    await waitFor(() => {
      expect(
        window.dataLayer.filter((item) => item.event === 'cnae_calculator_cnpj_result'),
      ).toEqual([
        expect.objectContaining({
          event: 'cnae_calculator_cnpj_result',
          conversion_stage: 'microconversao',
          cnae_codigo: sampleEntry.codigo,
          cnae_grau_risco: sampleEntry.grauRisco,
          employee_count: 100,
          consultant_profile: 'Contador(a)',
          source_mode: 'cnpj',
          audience_segment: 'contador',
        }),
      ]);
    });
    expect(screen.getByText(sampleEntry.descricao)).toBeInTheDocument();
    expect(screen.getByText(/CIPA obrigatória/i)).toBeInTheDocument();
    expect(screen.getAllByText(/100 empregados/i)).not.toHaveLength(0);
  });

  it('avisa quando nao consegue consultar o CNPJ', async () => {
    const user = userEvent.setup();
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('network down'));

    render(<CnaeCalculator />);

    await user.type(screen.getByPlaceholderText('00.000.000/0001-00'), '12345678000195');
    await user.type(screen.getByPlaceholderText('Ex: 28'), '10');
    await user.selectOptions(screen.getByRole('combobox', { name: /Seu perfil/i }), 'Gestor(a) / Gerente');
    await user.click(screen.getByRole('button', { name: /Buscar e ver resultado/i }));

    await waitFor(() => {
      expect(
        screen.getByText(/Não foi possível consultar este CNPJ/i),
      ).toBeInTheDocument();
    });
  });

  it('exibe o resultado por CNAE somente apos o clique e usa o evento unico', async () => {
    const user = userEvent.setup();
    render(<CnaeCalculator />);

    await user.click(screen.getByRole('button', { name: /Não tenho o CNPJ agora/i }));
    const searchButton = screen.getByRole('button', { name: /Buscar e ver resultado/i });
    expect(searchButton).toBeDisabled();

    await user.type(
      screen.getByPlaceholderText(/4711301, restaurante, construcao civil/i),
      sampleEntry.codigo,
    );
    await user.click(await screen.findByText(sampleEntry.descricao));
    await user.type(screen.getByPlaceholderText('Ex: 28'), '40');
    await user.selectOptions(
      screen.getByRole('combobox', { name: /Seu perfil/i }),
      'Recursos Humanos / Departamento Pessoal',
    );

    expect(searchButton).toBeEnabled();
    expect(window.dataLayer).not.toContainEqual(
      expect.objectContaining({ event: 'cnae_calculator_cnpj_result' }),
    );

    await user.click(searchButton);

    expect(
      await screen.findByRole('heading', { level: 3, name: sampleEntry.descricao }),
    ).toBeInTheDocument();
    expect(
      window.dataLayer.filter((item) => item.event === 'cnae_calculator_cnpj_result'),
    ).toEqual([
      expect.objectContaining({
        event: 'cnae_calculator_cnpj_result',
        conversion_stage: 'microconversao',
        cnae_codigo: sampleEntry.codigo,
        source_mode: 'cnae',
        employee_count: 40,
        consultant_profile: 'Recursos Humanos / Departamento Pessoal',
        audience_segment: 'rh_dp',
      }),
    ]);
  });

  it.each([
    {
      profile: 'Contador(a)',
      employees: '12',
      cta: 'Quero conhecer a parceria para contadores',
      href: '/parcerias/contadores',
    },
    {
      profile: 'Empresário(a) / Sócio(a)',
      employees: '20',
      cta: 'Ver planos de SST para minha empresa',
      href: '/assinaturas',
    },
    {
      profile: 'Gestor(a) / Gerente',
      employees: '20',
      cta: 'Comparar planos de SST para a operação',
      href: '/assinaturas',
    },
    {
      profile: 'Recursos Humanos / Departamento Pessoal',
      employees: '30',
      cta: 'Ver o guia prático para RH e DP',
      href: '/rh',
    },
    {
      profile: 'Profissional de SST',
      employees: '30',
      cta: 'Consultar a biblioteca técnica de SST',
      href: '/normas',
    },
  ])('personaliza o proximo passo para $profile', async ({ profile, employees, cta, href }) => {
    const user = userEvent.setup();
    render(<CnaeCalculator />);

    await user.click(screen.getByRole('button', { name: /Não tenho o CNPJ agora/i }));
    await user.type(
      screen.getByPlaceholderText(/4711301, restaurante, construcao civil/i),
      sampleEntry.codigo,
    );
    await user.click(await screen.findByText(sampleEntry.descricao));
    await user.type(screen.getByPlaceholderText('Ex: 28'), employees);
    await user.selectOptions(screen.getByRole('combobox', { name: /Seu perfil/i }), profile);
    await user.click(screen.getByRole('button', { name: /Buscar e ver resultado/i }));

    const ctaLink = await screen.findByRole('link', { name: cta });
    expect(ctaLink).toHaveAttribute('href', href);
    ctaLink.addEventListener('click', (event) => event.preventDefault(), { once: true });
    await user.click(ctaLink);
    expect(window.dataLayer).toContainEqual(
      expect.objectContaining({
        event: 'cnae_calculator_personalized_cta_click',
        conversion_stage: 'intencao',
      }),
    );
  });

  it.each([
    {
      profile: 'Gestor(a) / Gerente',
      cta: 'Quero uma avaliação objetiva de SST',
    },
    {
      profile: 'Empresário(a) / Sócio(a)',
      cta: 'Quero uma avaliação gratuita da minha empresa',
    },
  ])('mantem a avaliacao gratuita acima de 20 funcionarios para $profile', async ({ profile, cta }) => {
    const user = userEvent.setup();
    render(<CnaeCalculator />);

    await user.click(screen.getByRole('button', { name: /Não tenho o CNPJ agora/i }));
    await user.type(
      screen.getByPlaceholderText(/4711301, restaurante, construcao civil/i),
      sampleEntry.codigo,
    );
    await user.click(await screen.findByText(sampleEntry.descricao));
    await user.type(screen.getByPlaceholderText('Ex: 28'), '21');
    await user.selectOptions(
      screen.getByRole('combobox', { name: /Seu perfil/i }),
      profile,
    );
    await user.click(screen.getByRole('button', { name: /Buscar e ver resultado/i }));

    expect(
      await screen.findByRole('button', { name: cta }),
    ).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Seu nome')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('E-mail')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Telefone com DDD')).toBeInTheDocument();
  });

  it('envia lead no modo CNAE com uma identificacao de empresa valida', async () => {
    const user = userEvent.setup();
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), { status: 200 }),
    );

    render(<CnaeCalculator />);

    await user.click(screen.getByRole('button', { name: /N.o tenho o CNPJ agora/i }));
    await user.type(
      screen.getByPlaceholderText(/4711301, restaurante, construcao civil/i),
      sampleEntry.codigo,
    );
    await user.click(await screen.findByText(sampleEntry.descricao));
    await user.type(screen.getByPlaceholderText('Ex: 28'), '21');
    await user.selectOptions(
      screen.getByRole('combobox', { name: /Seu perfil/i }),
      'Gestor(a) / Gerente',
    );
    await user.click(screen.getByRole('button', { name: /Buscar e ver resultado/i }));

    await user.type(screen.getByPlaceholderText('Seu nome'), 'Teste CNAE');
    await user.type(screen.getByPlaceholderText('E-mail'), 'teste@example.com');
    await user.type(screen.getByPlaceholderText('Telefone com DDD'), '11999999999');
    await user.click(screen.getByRole('button', { name: /avalia..o objetiva de SST/i }));

    await waitFor(() => expect(fetchMock).toHaveBeenCalledWith('/api/lead', expect.any(Object)));

    const request = fetchMock.mock.calls.at(-1)?.[1] as RequestInit;
    const payload = JSON.parse(String(request.body));
    expect(payload.empresa).toContain(`consulta por CNAE ${sampleEntry.codigo}`);
    expect(payload.empresa).not.toBe('');
    expect(payload.mensagem).toContain('Modo de consulta: CNAE.');
    await waitFor(() => {
      expect(window.dataLayer).toContainEqual(
        expect.objectContaining({
          event: 'risk_calculator_lead_generated',
          conversion_stage: 'conversao_comercial',
        }),
      );
    });
  });

  it('remove a opcao de perfil generico', () => {
    render(<CnaeCalculator />);

    expect(screen.queryByRole('option', { name: 'Outro' })).not.toBeInTheDocument();
  });

  it('mantem os limites iniciais de SESMT alinhados ao Quadro II da NR-04', () => {
    expect(grauRiscoInfo[1].sesmt).toContain('501 empregados');
    expect(grauRiscoInfo[2].sesmt).toContain('501 empregados');
    expect(grauRiscoInfo[3].sesmt).toContain('101 empregados');
    expect(grauRiscoInfo[4].sesmt).toContain('50 empregados');
  });

  it('busca CNAE sem depender de acentos ou pontuacao', () => {
    const withoutAccents = buscarCnae('construcao civil');
    const withAccents = buscarCnae('construção civil');

    expect(withoutAccents.map((entry) => entry.codigo)).toEqual(
      withAccents.map((entry) => entry.codigo),
    );
    expect(withoutAccents.some((entry) => entry.codigo === '4330401')).toBe(true);
    expect(buscarCnae('47.11-3/01')[0]?.codigo).toBe('4711301');
  });

  it('mantem RAT GILRAT separado do grau de risco da NR-04', () => {
    const trigo = cnaeData.find((entry) => entry.codigo === '0111303');
    const sementes = cnaeData.find((entry) => entry.codigo === '4623106');
    const cnaeExtinto = cnaeData.find((entry) => entry.codigo === '5812302');

    expect(trigo).toMatchObject({ grauRisco: 3, ratGilrat: 2 });
    expect(sementes).toMatchObject({ grauRisco: 2, ratGilrat: 3 });
    expect(cnaeExtinto?.ratGilrat).toBeUndefined();
    expect(cnaeData.filter((entry) => entry.ratGilrat).length).toBe(1331);
    expect(ratGilratMeta.cnaeVersion).toBe('2.3');
  });

  it('nao presume atendimento por SESMT quando o Quadro I nao dimensiona CIPA', () => {
    expect(calculateNr05(1, 80)?.kind).toBe('representante');
    expect(calculateNr05(4, 19)?.kind).toBe('representante');
  });

  it('mantem o grau 3 alinhado a todas as faixas do Quadro I da NR-05', () => {
    const cases = [
      { employees: 20, efetivos: 1, suplentes: 1 },
      { employees: 30, efetivos: 1, suplentes: 1 },
      { employees: 51, efetivos: 2, suplentes: 1 },
      { employees: 81, efetivos: 2, suplentes: 1 },
      { employees: 101, efetivos: 2, suplentes: 1 },
      { employees: 121, efetivos: 3, suplentes: 2 },
      { employees: 141, efetivos: 4, suplentes: 2 },
      { employees: 301, efetivos: 5, suplentes: 4 },
      { employees: 501, efetivos: 6, suplentes: 4 },
      { employees: 1001, efetivos: 8, suplentes: 6 },
      { employees: 2501, efetivos: 10, suplentes: 8 },
      { employees: 5001, efetivos: 12, suplentes: 8 },
      { employees: 10001, efetivos: 14, suplentes: 10 },
    ];

    expect(calculateNr05(3, 19)?.kind).toBe('representante');

    for (const { employees, efetivos, suplentes } of cases) {
      const result = calculateNr05(3, employees);

      expect(result?.kind).toBe('cipa');
      if (result?.kind !== 'cipa') continue;

      expect(result.empregados).toEqual({ efetivos, suplentes });
      expect(result.empregador).toEqual({ efetivos, suplentes });
      expect(result.total).toEqual({
        efetivos: efetivos * 2,
        suplentes: suplentes * 2,
      });
    }
  });
});
