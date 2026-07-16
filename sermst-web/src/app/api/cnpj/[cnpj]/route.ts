import { NextResponse } from 'next/server';

// ── Helper: JSON com charset UTF-8 explícito ───────────────────────────────
const JSON_HEADERS = { 'Content-Type': 'application/json; charset=utf-8' } as const;
function jsonUtf8(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: JSON_HEADERS });
}


type NormalizedCnpjPayload = {
  razaoSocial: string;
  cnaeFiscal: string;
  cnaeDescricao: string;
  source: 'brasilapi' | 'receitaws';
  endereco?: {
    cep: string;
    logradouro: string;
    numero: string;
    complemento: string;
    bairro: string;
    cidade: string;
    estado: string;
  };
};

function onlyDigits(value: string) {
  return value.replace(/\D/g, '');
}

function formatCep(value: string) {
  const digits = onlyDigits(value).slice(0, 8);
  if (digits.length <= 5) return digits;
  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

function normalizeAddress(payload: {
  cep?: string | number;
  logradouro?: string;
  numero?: string | number;
  complemento?: string;
  bairro?: string;
  municipio?: string;
  uf?: string;
}) {
  const cep = payload.cep != null ? formatCep(String(payload.cep)) : '';
  const logradouro = payload.logradouro ? String(payload.logradouro).trim() : '';
  const numero = payload.numero != null ? String(payload.numero).trim() : '';
  const complemento = payload.complemento ? String(payload.complemento).trim() : '';
  const bairro = payload.bairro ? String(payload.bairro).trim() : '';
  const cidade = payload.municipio ? String(payload.municipio).trim() : '';
  const estado = payload.uf ? String(payload.uf).trim().toUpperCase() : '';

  if (!cep && !logradouro && !bairro && !cidade && !estado) return undefined;

  return {
    cep,
    logradouro,
    numero,
    complemento,
    bairro,
    cidade,
    estado,
  };
}

function normalizeBrasilApi(data: unknown): NormalizedCnpjPayload | null {
  const payload = data as {
    razao_social?: string;
    cnae_fiscal?: number | string;
    cnae_fiscal_descricao?: string;
    cep?: string | number;
    logradouro?: string;
    numero?: string | number;
    complemento?: string;
    bairro?: string;
    municipio?: string;
    uf?: string;
  };

  const cnaeFiscal = payload.cnae_fiscal != null ? onlyDigits(String(payload.cnae_fiscal)).padStart(7, '0') : '';
  if (!payload.razao_social || !cnaeFiscal) return null;

  return {
    razaoSocial: payload.razao_social,
    cnaeFiscal,
    cnaeDescricao: payload.cnae_fiscal_descricao || '',
    source: 'brasilapi',
    endereco: normalizeAddress(payload),
  };
}

function normalizeReceitaWs(data: unknown): NormalizedCnpjPayload | null {
  const payload = data as {
    nome?: string;
    status?: string;
    atividade_principal?: Array<{ code?: string; text?: string }>;
    cep?: string;
    logradouro?: string;
    numero?: string;
    complemento?: string;
    bairro?: string;
    municipio?: string;
    uf?: string;
  };

  const primary = payload.atividade_principal?.[0];
  const cnaeFiscal = primary?.code ? onlyDigits(primary.code).padStart(7, '0') : '';

  if (payload.status === 'ERROR' || !payload.nome || !cnaeFiscal) return null;

  return {
    razaoSocial: payload.nome,
    cnaeFiscal,
    cnaeDescricao: primary?.text || '',
    source: 'receitaws',
    endereco: normalizeAddress(payload),
  };
}

async function tryBrasilApi(cnpj: string) {
  const response = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${cnpj}`, {
    headers: {
      Accept: 'application/json',
      'User-Agent': 'SERMST-CNPJ-Lookup/1.0',
    },
    signal: AbortSignal.timeout(8000),
    next: { revalidate: 0 },
    cache: 'no-store',
  });

  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`BrasilAPI respondeu HTTP ${response.status}.`);
  return normalizeBrasilApi(await response.json());
}

async function tryReceitaWs(cnpj: string) {
  const response = await fetch(`https://www.receitaws.com.br/v1/cnpj/${cnpj}`, {
    headers: {
      Accept: 'application/json',
      'User-Agent': 'SERMST-CNPJ-Lookup/1.0',
    },
    signal: AbortSignal.timeout(8000),
    next: { revalidate: 0 },
    cache: 'no-store',
  });

  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`ReceitaWS respondeu HTTP ${response.status}.`);
  return normalizeReceitaWs(await response.json());
}

export async function GET(_: Request, context: { params: Promise<{ cnpj: string }> }) {
  const { cnpj } = await context.params;
  const normalized = onlyDigits(cnpj);

  if (normalized.length !== 14) {
    return jsonUtf8({ error: 'CNPJ invalido.' }, 400);
  }

  const providers = [
    { name: 'BrasilAPI', lookup: () => tryBrasilApi(normalized) },
    { name: 'ReceitaWS', lookup: () => tryReceitaWs(normalized) },
  ];
  let unavailableProviders = 0;

  for (const provider of providers) {
    try {
      const result = await provider.lookup();
      if (result) return jsonUtf8(result);
    } catch (error) {
      unavailableProviders += 1;
      console.warn(`[CNPJ LOOKUP] ${provider.name} indisponivel; tentando fallback.`, error);
    }
  }

  if (unavailableProviders === providers.length) {
    return jsonUtf8({ error: 'Nao foi possivel consultar este CNPJ.' }, 502);
  }

  return jsonUtf8({ error: 'CNPJ nao encontrado.' }, 404);
}
