import { NextResponse } from 'next/server';
import { isValidCnpj, onlyCnpjDigits } from '@/lib/cnpj';

// ── Helper: JSON com charset UTF-8 explícito ───────────────────────────────
const JSON_HEADERS = { 'Content-Type': 'application/json; charset=utf-8' } as const;
const SUCCESS_CACHE_CONTROL =
  'public, max-age=300, s-maxage=86400, stale-while-revalidate=604800';
const SHORT_CACHE_CONTROL = 'public, max-age=60, s-maxage=900';
const NO_STORE_CACHE_CONTROL = 'private, no-store, max-age=0';
const PROVIDER_CACHE_SECONDS = 86400;
const RATE_LIMIT_MAX_REQUESTS = 60;
const RATE_LIMIT_WINDOW_MS = 60_000;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

function jsonUtf8(
  body: unknown,
  status = 200,
  extraHeaders: Record<string, string> = {},
) {
  return NextResponse.json(body, {
    status,
    headers: { ...JSON_HEADERS, ...extraHeaders },
  });
}

type NormalizedCnpjPayload = {
  cnpj: string;
  razaoSocial: string;
  nomeFantasia: string;
  situacaoCadastral: string;
  dataAbertura: string;
  porte: string;
  naturezaJuridica: string;
  tipo: string;
  capitalSocial: number | null;
  dataSituacaoCadastral: string;
  motivoSituacaoCadastral: string;
  simplesNacional: boolean | null;
  mei: boolean | null;
  cnaeFiscal: string;
  cnaeDescricao: string;
  cnaesSecundarios: Array<{
    codigo: string;
    descricao: string;
  }>;
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

function normalizeDate(value?: string) {
  const date = value?.trim() || '';
  if (!date) return '';
  if (/^\d{4}-\d{2}-\d{2}$/.test(date)) return date;

  const match = date.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);
  return match ? `${match[3]}-${match[2]}-${match[1]}` : date;
}

function normalizeCapitalSocial(value?: string | number | null) {
  if (value == null || value === '') return null;
  if (typeof value === 'number') return Number.isFinite(value) ? value : null;

  const direct = Number(value);
  if (Number.isFinite(direct)) return direct;

  const sanitized = value.replace(/[^\d,.-]/g, '');
  const brazilianFormat = Number(sanitized.replace(/\./g, '').replace(',', '.'));
  return Number.isFinite(brazilianFormat) ? brazilianFormat : null;
}

function normalizeSecondaryActivities(
  activities?: Array<{
    codigo?: string | number;
    code?: string;
    descricao?: string;
    text?: string;
  }>,
  primaryCnae = '',
) {
  if (!activities?.length) return [];

  const uniqueActivities = new Map<string, string>();

  for (const activity of activities) {
    const rawCode = activity.codigo ?? activity.code;
    if (rawCode == null) continue;

    const codigo = onlyDigits(String(rawCode)).padStart(7, '0');
    if (!codigo || codigo === primaryCnae) continue;

    const descricao = (activity.descricao ?? activity.text ?? '').trim();
    if (!uniqueActivities.has(codigo)) uniqueActivities.set(codigo, descricao);
  }

  return Array.from(uniqueActivities, ([codigo, descricao]) => ({ codigo, descricao }));
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
    nome_fantasia?: string;
    descricao_situacao_cadastral?: string;
    data_inicio_atividade?: string;
    porte?: string;
    natureza_juridica?: string;
    cnpj?: string;
    descricao_identificador_matriz_filial?: string;
    capital_social?: string | number;
    data_situacao_cadastral?: string;
    motivo_situacao_cadastral?: string;
    opcao_pelo_simples?: boolean | null;
    opcao_pelo_mei?: boolean | null;
    cnae_fiscal?: number | string;
    cnae_fiscal_descricao?: string;
    cnaes_secundarios?: Array<{
      codigo?: string | number;
      descricao?: string;
    }>;
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
    cnpj: onlyCnpjDigits(payload.cnpj || ''),
    razaoSocial: payload.razao_social,
    nomeFantasia: payload.nome_fantasia?.trim() || '',
    situacaoCadastral: payload.descricao_situacao_cadastral?.trim() || '',
    dataAbertura: normalizeDate(payload.data_inicio_atividade),
    porte: payload.porte?.trim() || '',
    naturezaJuridica: payload.natureza_juridica?.trim() || '',
    tipo: payload.descricao_identificador_matriz_filial?.trim() || '',
    capitalSocial: normalizeCapitalSocial(payload.capital_social),
    dataSituacaoCadastral: normalizeDate(payload.data_situacao_cadastral),
    motivoSituacaoCadastral: payload.motivo_situacao_cadastral?.trim() || '',
    simplesNacional:
      typeof payload.opcao_pelo_simples === 'boolean' ? payload.opcao_pelo_simples : null,
    mei: typeof payload.opcao_pelo_mei === 'boolean' ? payload.opcao_pelo_mei : null,
    cnaeFiscal,
    cnaeDescricao: payload.cnae_fiscal_descricao || '',
    cnaesSecundarios: normalizeSecondaryActivities(
      payload.cnaes_secundarios,
      cnaeFiscal,
    ),
    source: 'brasilapi',
    endereco: normalizeAddress(payload),
  };
}

function normalizeReceitaWs(data: unknown): NormalizedCnpjPayload | null {
  const payload = data as {
    nome?: string;
    status?: string;
    cnpj?: string;
    fantasia?: string;
    situacao?: string;
    abertura?: string;
    porte?: string;
    natureza_juridica?: string;
    tipo?: string;
    capital_social?: string | number;
    data_situacao?: string;
    motivo_situacao?: string;
    atividades_secundarias?: Array<{ code?: string; text?: string }>;
    simples?: { optante?: boolean };
    simei?: { optante?: boolean };
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
    cnpj: onlyCnpjDigits(payload.cnpj || ''),
    razaoSocial: payload.nome,
    nomeFantasia: payload.fantasia?.trim() || '',
    situacaoCadastral: payload.situacao?.trim() || '',
    dataAbertura: normalizeDate(payload.abertura),
    porte: payload.porte?.trim() || '',
    naturezaJuridica: payload.natureza_juridica?.trim() || '',
    tipo: payload.tipo?.trim() || '',
    capitalSocial: normalizeCapitalSocial(payload.capital_social),
    dataSituacaoCadastral: normalizeDate(payload.data_situacao),
    motivoSituacaoCadastral: payload.motivo_situacao?.trim() || '',
    simplesNacional:
      typeof payload.simples?.optante === 'boolean' ? payload.simples.optante : null,
    mei: typeof payload.simei?.optante === 'boolean' ? payload.simei.optante : null,
    cnaeFiscal,
    cnaeDescricao: primary?.text || '',
    cnaesSecundarios: normalizeSecondaryActivities(
      payload.atividades_secundarias,
      cnaeFiscal,
    ),
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
    next: { revalidate: PROVIDER_CACHE_SECONDS },
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
    next: { revalidate: PROVIDER_CACHE_SECONDS },
  });

  if (response.status === 404) return null;
  if (!response.ok) throw new Error(`ReceitaWS respondeu HTTP ${response.status}.`);
  return normalizeReceitaWs(await response.json());
}

function getClientKey(request: Request) {
  return (
    request.headers.get('cf-connecting-ip') ||
    request.headers.get('x-real-ip') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    'unknown'
  );
}

function checkRateLimit(clientKey: string) {
  const now = Date.now();
  const current = rateLimitStore.get(clientKey);

  if (!current || current.resetAt <= now) {
    const next = { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS };
    rateLimitStore.set(clientKey, next);
    return { allowed: true, remaining: RATE_LIMIT_MAX_REQUESTS - 1, resetAt: next.resetAt };
  }

  current.count += 1;
  if (rateLimitStore.size > 5_000) {
    for (const [key, entry] of rateLimitStore) {
      if (entry.resetAt <= now) rateLimitStore.delete(key);
    }
  }

  return {
    allowed: current.count <= RATE_LIMIT_MAX_REQUESTS,
    remaining: Math.max(0, RATE_LIMIT_MAX_REQUESTS - current.count),
    resetAt: current.resetAt,
  };
}

export async function GET(request: Request, context: { params: Promise<{ cnpj: string }> }) {
  const rateLimit = checkRateLimit(getClientKey(request));
  const rateLimitHeaders = {
    'X-RateLimit-Limit': String(RATE_LIMIT_MAX_REQUESTS),
    'X-RateLimit-Remaining': String(rateLimit.remaining),
    'X-RateLimit-Reset': String(Math.ceil(rateLimit.resetAt / 1000)),
  };

  if (!rateLimit.allowed) {
    return jsonUtf8(
      { error: 'Muitas consultas em pouco tempo. Tente novamente em instantes.' },
      429,
      {
        ...rateLimitHeaders,
        'Cache-Control': NO_STORE_CACHE_CONTROL,
        'Retry-After': String(Math.max(1, Math.ceil((rateLimit.resetAt - Date.now()) / 1000))),
      },
    );
  }

  const { cnpj } = await context.params;
  const normalized = onlyCnpjDigits(cnpj);

  if (!isValidCnpj(normalized)) {
    return jsonUtf8({ error: 'CNPJ invalido.' }, 400, {
      ...rateLimitHeaders,
      'Cache-Control': NO_STORE_CACHE_CONTROL,
    });
  }

  const providers = [
    { name: 'BrasilAPI', lookup: () => tryBrasilApi(normalized) },
    { name: 'ReceitaWS', lookup: () => tryReceitaWs(normalized) },
  ];
  let unavailableProviders = 0;

  for (const provider of providers) {
    try {
      const result = await provider.lookup();
      if (result) {
        return jsonUtf8({
          ...result,
          cnpj: result.cnpj || normalized,
          consultedAt: new Date().toISOString(),
        }, 200, {
          ...rateLimitHeaders,
          'Cache-Control': SUCCESS_CACHE_CONTROL,
        });
      }
    } catch (error) {
      unavailableProviders += 1;
      console.warn(`[CNPJ LOOKUP] ${provider.name} indisponivel; tentando fallback.`, error);
    }
  }

  if (unavailableProviders === providers.length) {
    return jsonUtf8({ error: 'Nao foi possivel consultar este CNPJ.' }, 502, {
      ...rateLimitHeaders,
      'Cache-Control': NO_STORE_CACHE_CONTROL,
    });
  }

  return jsonUtf8({ error: 'CNPJ nao encontrado.' }, 404, {
    ...rateLimitHeaders,
    'Cache-Control': SHORT_CACHE_CONTROL,
  });
}
