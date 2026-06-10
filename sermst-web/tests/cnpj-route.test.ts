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

  it('normaliza resposta da BrasilAPI quando ela responde primeiro', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          razao_social: 'Empresa BrasilAPI',
          cnae_fiscal: '6201501',
          cnae_fiscal_descricao: 'Desenvolvimento de software',
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
      razaoSocial: 'Empresa BrasilAPI',
      cnaeFiscal: '6201501',
      cnaeDescricao: 'Desenvolvimento de software',
      source: 'brasilapi',
    });
  });

  it('faz fallback para ReceitaWS quando a BrasilAPI nao encontra o CNPJ', async () => {
    vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce(new Response(null, { status: 404 }))
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            nome: 'Empresa ReceitaWS',
            atividade_principal: [{ code: '47.11-3-01', text: 'Comércio varejista' }],
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
      razaoSocial: 'Empresa ReceitaWS',
      cnaeFiscal: '4711301',
      cnaeDescricao: 'Comércio varejista',
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
});
