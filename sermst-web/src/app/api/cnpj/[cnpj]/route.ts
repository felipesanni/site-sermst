import { NextResponse } from 'next/server';

type NormalizedCnpjPayload = {
  razaoSocial: string;
  cnaeFiscal: string;
  cnaeDescricao: string;
  source: 'brasilapi' | 'receitaws';
};

function onlyDigits(value: string) {
  return value.replace(/\D/g, '');
}

function normalizeBrasilApi(data: unknown): NormalizedCnpjPayload | null {
  const payload = data as {
    razao_social?: string;
    cnae_fiscal?: number | string;
    cnae_fiscal_descricao?: string;
  };

  const cnaeFiscal = payload.cnae_fiscal != null ? onlyDigits(String(payload.cnae_fiscal)).padStart(7, '0') : '';
  if (!payload.razao_social || !cnaeFiscal) return null;

  return {
    razaoSocial: payload.razao_social,
    cnaeFiscal,
    cnaeDescricao: payload.cnae_fiscal_descricao || '',
    source: 'brasilapi',
  };
}

function normalizeReceitaWs(data: unknown): NormalizedCnpjPayload | null {
  const payload = data as {
    nome?: string;
    status?: string;
    atividade_principal?: Array<{ code?: string; text?: string }>;
  };

  const primary = payload.atividade_principal?.[0];
  const cnaeFiscal = primary?.code ? onlyDigits(primary.code).padStart(7, '0') : '';

  if (payload.status === 'ERROR' || !payload.nome || !cnaeFiscal) return null;

  return {
    razaoSocial: payload.nome,
    cnaeFiscal,
    cnaeDescricao: primary?.text || '',
    source: 'receitaws',
  };
}

async function tryBrasilApi(cnpj: string) {
  const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`, {
    next: { revalidate: 0 },
    cache: 'no-store',
  });

  if (!response.ok) return null;
  return normalizeBrasilApi(await response.json());
}

async function tryReceitaWs(cnpj: string) {
  const response = await fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`, {
    headers: {
      Accept: 'application/json',
    },
    next: { revalidate: 0 },
    cache: 'no-store',
  });

  if (!response.ok) return null;
  return normalizeReceitaWs(await response.json());
}

export async function GET(_: Request, context: { params: Promise<{ cnpj: string }> }) {
  const { cnpj } = await context.params;
  const normalized = onlyDigits(cnpj);

  if (normalized.length !== 14) {
    return NextResponse.json({ error: 'CNPJ invalido.' }, { status: 400 });
  }

  try {
    const brasilApi = await tryBrasilApi(normalized);
    if (brasilApi) {
      return NextResponse.json(brasilApi);
    }

    const receitaWs = await tryReceitaWs(normalized);
    if (receitaWs) {
      return NextResponse.json(receitaWs);
    }

    return NextResponse.json({ error: 'CNPJ nao encontrado.' }, { status: 404 });
  } catch (error) {
    console.error('[CNPJ LOOKUP] Falha ao consultar APIs:', error);
    return NextResponse.json({ error: 'Nao foi possivel consultar este CNPJ.' }, { status: 502 });
  }
}
