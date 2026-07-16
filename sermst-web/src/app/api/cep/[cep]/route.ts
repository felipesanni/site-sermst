import { NextResponse } from 'next/server';

const JSON_HEADERS = { 'Content-Type': 'application/json; charset=utf-8' } as const;

function jsonUtf8(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: JSON_HEADERS });
}

function onlyDigits(value: string) {
  return value.replace(/\D/g, '');
}

function formatCep(value: string) {
  const digits = onlyDigits(value).slice(0, 8);
  if (digits.length <= 5) return digits;
  return `${digits.slice(0, 5)}-${digits.slice(5)}`;
}

type ViaCepPayload = {
  cep?: string;
  logradouro?: string;
  complemento?: string;
  bairro?: string;
  localidade?: string;
  uf?: string;
  erro?: boolean;
};

export async function GET(_: Request, context: { params: Promise<{ cep: string }> }) {
  const { cep } = await context.params;
  const normalized = onlyDigits(cep);

  if (normalized.length !== 8 || /^(\d)\1{7}$/.test(normalized)) {
    return jsonUtf8({ error: 'CEP invalido.' }, 400);
  }

  try {
    const response = await fetch(`https://viacep.com.br/ws/${normalized}/json/`, {
      headers: { Accept: 'application/json' },
      next: { revalidate: 0 },
      cache: 'no-store',
    });

    if (!response.ok) {
      return jsonUtf8({ error: 'CEP nao encontrado.' }, 404);
    }

    const data = (await response.json()) as ViaCepPayload;
    if (data.erro) {
      return jsonUtf8({ error: 'CEP nao encontrado.' }, 404);
    }

    return jsonUtf8({
      cep: formatCep(data.cep || normalized),
      logradouro: data.logradouro || '',
      complemento: data.complemento || '',
      bairro: data.bairro || '',
      cidade: data.localidade || '',
      estado: data.uf || '',
      source: 'viacep',
    });
  } catch (error) {
    console.error('[CEP LOOKUP] Falha ao consultar ViaCEP:', error);
    return jsonUtf8({ error: 'Nao foi possivel consultar este CEP.' }, 502);
  }
}
