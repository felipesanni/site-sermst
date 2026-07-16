import { describe, expect, it, vi } from 'vitest';
import { GET } from '@/app/api/cep/[cep]/route';

function buildContext(cep: string) {
  return {
    params: Promise.resolve({ cep }),
  };
}

describe('GET /api/cep/[cep]', () => {
  it('rejeita CEP invalido antes de consultar o ViaCEP', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch');
    const response = await GET(new Request('http://localhost/api/cep/123'), buildContext('123'));

    expect(fetchMock).not.toHaveBeenCalled();
    expect(response.status).toBe(400);
    await expect(response.json()).resolves.toEqual({ error: 'CEP invalido.' });
  });

  it('normaliza resposta do ViaCEP', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(
        JSON.stringify({
          cep: '01001-000',
          logradouro: 'Praca da Se',
          complemento: 'lado impar',
          bairro: 'Se',
          localidade: 'Sao Paulo',
          uf: 'SP',
        }),
        { status: 200 },
      ),
    );

    const response = await GET(
      new Request('http://localhost/api/cep/01001000'),
      buildContext('01001-000'),
    );

    expect(response.status).toBe(200);
    await expect(response.json()).resolves.toEqual({
      cep: '01001-000',
      logradouro: 'Praca da Se',
      complemento: 'lado impar',
      bairro: 'Se',
      cidade: 'Sao Paulo',
      estado: 'SP',
      source: 'viacep',
    });
  });

  it('retorna 404 quando o ViaCEP informa erro', async () => {
    vi.spyOn(globalThis, 'fetch').mockResolvedValueOnce(
      new Response(JSON.stringify({ erro: true }), { status: 200 }),
    );

    const response = await GET(
      new Request('http://localhost/api/cep/99999998'),
      buildContext('99999998'),
    );

    expect(response.status).toBe(404);
    await expect(response.json()).resolves.toEqual({ error: 'CEP nao encontrado.' });
  });

  it('retorna 502 quando a consulta ao ViaCEP falha', async () => {
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('timeout'));

    const response = await GET(
      new Request('http://localhost/api/cep/01001000'),
      buildContext('01001000'),
    );

    expect(response.status).toBe(502);
    await expect(response.json()).resolves.toEqual({
      error: 'Nao foi possivel consultar este CEP.',
    });
  });
});
