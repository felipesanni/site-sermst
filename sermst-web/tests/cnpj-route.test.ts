import { describe, expect, it, vi } from 'vitest';
import { GET } from '@/app/api/cnpj/[cnpj]/route';

function buildContext(cnpj: string) {
  return {
    params: Promise.resolve({ cnpj }),
  };
}

describe('GET /api/cnpj/[cnpj]', () => {
  it('rejeita CNPJ invalido antes de consultar APIs externas', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch');
    const response = await GET(new Request('http://localhost/api/cnpj/123'), buildContext('123'));

    expect(fetchMock).not.toHaveBeenCalled();
    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({ error: 'CNPJ invalido.' });
  });

  it('não aceita números extras depois de um CNPJ válido', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch');
    const response = await GET(
      new Request('http://localhost/api/cnpj/1234567800019599'),
      buildContext('1234567800019599'),
    );

    expect(fetchMock).not.toHaveBeenCalled();
    expect(response.status).toBe(400);
  });

  it('normaliza resposta da BrasilAPI quando ela responde primeiro', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          razao_social: 'Empresa BrasilAPI',
          cnpj: '12345678000195',
          nome_fantasia: 'Empresa Tech',
          descricao_situacao_cadastral: 'ATIVA',
          data_inicio_atividade: '2020-05-14',
          porte: 'MICRO EMPRESA',
          natureza_juridica: 'Sociedade Empresária Limitada',
          descricao_identificador_matriz_filial: 'MATRIZ',
          capital_social: 150000,
          data_situacao_cadastral: '2020-05-14',
          opcao_pelo_simples: true,
          opcao_pelo_mei: false,
          cnae_fiscal: '6201501',
          cnae_fiscal_descricao: 'Desenvolvimento de software',
          cnaes_secundarios: [
            { codigo: '6202300', descricao: 'Desenvolvimento de software customizavel' },
          ],
          cep: '01311000',
          logradouro: 'Avenida Paulista',
          numero: '1000',
          complemento: '10 andar',
          bairro: 'Bela Vista',
          municipio: 'Sao Paulo',
          uf: 'SP',
        }),
        { status: 200 },
      ),
    );

    const response = await GET(
      new Request('http://localhost/api/cnpj/12345678000195'),
      buildContext('12.345.678/0001-95'),
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      cnpj: '12345678000195',
      razaoSocial: 'Empresa BrasilAPI',
      nomeFantasia: 'Empresa Tech',
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
      cnaeDescricao: 'Desenvolvimento de software',
      cnaesSecundarios: [
        { codigo: '6202300', descricao: 'Desenvolvimento de software customizavel' },
      ],
      source: 'brasilapi',
      consultedAt: expect.any(String),
      endereco: {
        cep: '01311-000',
        logradouro: 'Avenida Paulista',
        numero: '1000',
        complemento: '10 andar',
        bairro: 'Bela Vista',
        cidade: 'Sao Paulo',
        estado: 'SP',
      },
    });
    expect(response.headers.get('cache-control')).toContain('s-maxage=86400');
    expect(globalThis.fetch).toHaveBeenCalledWith(
      expect.stringContaining('brasilapi.com.br/api/cnpj/v1/'),
      expect.objectContaining({ next: { revalidate: 86400 } }),
    );
  });

  it('faz fallback para ReceitaWS quando a BrasilAPI nao encontra o CNPJ', async () => {
    vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce(new Response(null, { status: 404 }))
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            nome: 'Empresa ReceitaWS',
            cnpj: '12.345.678/0001-95',
            fantasia: 'Loja Exemplo',
            situacao: 'ATIVA',
            abertura: '14/05/2020',
            porte: 'ME',
            natureza_juridica: 'Sociedade Empresária Limitada',
            tipo: 'MATRIZ',
            capital_social: 'R$ 50.000,00',
            data_situacao: '14/05/2020',
            simples: { optante: false },
            simei: { optante: true },
            atividade_principal: [{ code: '47.11-3-01', text: 'Comercio varejista' }],
            atividades_secundarias: [
              { code: '47.12-1-00', text: 'Comercio varejista de mercadorias' },
            ],
            cep: '01001-000',
            logradouro: 'Praca da Se',
            numero: '10',
            bairro: 'Se',
            municipio: 'Sao Paulo',
            uf: 'SP',
          }),
          { status: 200 },
        ),
      );

    const response = await GET(
      new Request('http://localhost/api/cnpj/12345678000195'),
      buildContext('12345678000195'),
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      cnpj: '12345678000195',
      razaoSocial: 'Empresa ReceitaWS',
      nomeFantasia: 'Loja Exemplo',
      situacaoCadastral: 'ATIVA',
      dataAbertura: '2020-05-14',
      porte: 'ME',
      naturezaJuridica: 'Sociedade Empresária Limitada',
      tipo: 'MATRIZ',
      capitalSocial: 50000,
      dataSituacaoCadastral: '2020-05-14',
      motivoSituacaoCadastral: '',
      simplesNacional: false,
      mei: true,
      cnaeFiscal: '4711301',
      cnaeDescricao: 'Comercio varejista',
      cnaesSecundarios: [
        { codigo: '4712100', descricao: 'Comercio varejista de mercadorias' },
      ],
      source: 'receitaws',
      consultedAt: expect.any(String),
      endereco: {
        cep: '01001-000',
        logradouro: 'Praca da Se',
        numero: '10',
        complemento: '',
        bairro: 'Se',
        cidade: 'Sao Paulo',
        estado: 'SP',
      },
    });
  });

  it('faz fallback para ReceitaWS quando a BrasilAPI falha por rede', async () => {
    vi.spyOn(globalThis, 'fetch')
      .mockRejectedValueOnce(new Error('SELF_SIGNED_CERT_IN_CHAIN'))
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            nome: 'Empresa ReceitaWS',
            atividade_principal: [{ code: '82.19-9-99', text: 'Servicos administrativos' }],
          }),
          { status: 200 },
        ),
      );

    const response = await GET(
      new Request('http://localhost/api/cnpj/12345678000195'),
      buildContext('12345678000195'),
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toMatchObject({
      razaoSocial: 'Empresa ReceitaWS',
      cnaeFiscal: '8219999',
      source: 'receitaws',
    });
  });

  it('faz fallback para ReceitaWS quando a BrasilAPI aplica limite de requisicoes', async () => {
    vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce(new Response(null, { status: 429 }))
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            nome: 'Empresa ReceitaWS',
            atividade_principal: [{ code: '47.11-3-01', text: 'Comercio varejista' }],
          }),
          { status: 200 },
        ),
      );

    const response = await GET(
      new Request('http://localhost/api/cnpj/12345678000195'),
      buildContext('12345678000195'),
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toMatchObject({
      razaoSocial: 'Empresa ReceitaWS',
      cnaeFiscal: '4711301',
      source: 'receitaws',
    });
  });

  it('retorna 404 quando nenhuma fonte encontra o CNPJ', async () => {
    vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce(new Response(null, { status: 404 }))
      .mockResolvedValueOnce(new Response(null, { status: 404 }));

    const response = await GET(
      new Request('http://localhost/api/cnpj/12345678000195'),
      buildContext('12345678000195'),
    );

    expect(response.status).toBe(404);
    await expect(response.json()).resolves.toEqual({ error: 'CNPJ nao encontrado.' });
  });

  it('retorna 502 quando acontece falha de rede durante a consulta', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('timeout'));

    const response = await GET(
      new Request('http://localhost/api/cnpj/12345678000195'),
      buildContext('12345678000195'),
    );

    expect(response.status).toBe(502);
    await expect(response.json()).resolves.toEqual({
      error: 'Nao foi possivel consultar este CNPJ.',
    });
  });

  it('limita rajadas de consulta pelo mesmo cliente', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch');
    const request = () =>
      GET(
        new Request('http://localhost/api/cnpj/123', {
          headers: { 'x-forwarded-for': '203.0.113.90' },
        }),
        buildContext('123'),
      );

    for (let index = 0; index < 60; index += 1) {
      const response = await request();
      expect(response.status).toBe(400);
    }

    const limitedResponse = await request();
    expect(limitedResponse.status).toBe(429);
    expect(limitedResponse.headers.get('retry-after')).toBeTruthy();
    expect(fetchMock).not.toHaveBeenCalled();
  });
});
