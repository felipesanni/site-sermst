'use client';

import { FormEvent, useRef, useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  Building2,
  Check,
  CheckCircle2,
  Clipboard,
  Copy,
  FileText,
  Loader2,
  MapPin,
  Printer,
  RotateCcw,
  Search,
  ShieldCheck,
} from 'lucide-react';
import { formatCnpj, isValidCnpj, onlyCnpjDigits } from '@/lib/cnpj';

type CnpjResult = {
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
  consultedAt: string;
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

type LookupStatus =
  | 'idle'
  | 'loading'
  | 'success'
  | 'not_found'
  | 'rate_limited'
  | 'unavailable';

type CopyStatus = 'cnpj' | 'summary' | null;

function formatDate(value: string) {
  if (!value) return 'Não informada';
  const match = value.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  return match ? `${match[3]}/${match[2]}/${match[1]}` : value;
}

function formatCnae(value: string) {
  const digits = value.replace(/\D/g, '').padStart(7, '0');
  if (digits.length !== 7) return value;
  return `${digits.slice(0, 2)}.${digits.slice(2, 4)}-${digits.slice(4, 5)}/${digits.slice(5)}`;
}

function formatCurrency(value: number | null) {
  if (value == null) return 'Não informado';
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);
}

function formatOption(value: boolean | null) {
  if (value == null) return 'Não informado';
  return value ? 'Optante' : 'Não optante';
}

function formatDateTime(value: string) {
  if (!value) return '';
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return '';
  return new Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'short',
    timeStyle: 'short',
    timeZone: 'America/Sao_Paulo',
  }).format(date);
}

function formatAddress(result: CnpjResult) {
  if (!result.endereco) return '';

  const street = [result.endereco.logradouro, result.endereco.numero]
    .filter(Boolean)
    .join(', ');
  const district = [result.endereco.bairro, result.endereco.cidade, result.endereco.estado]
    .filter(Boolean)
    .join(' — ');
  const parts = [street, result.endereco.complemento, district];
  if (result.endereco.cep) parts.push(`CEP ${result.endereco.cep}`);
  return parts.filter(Boolean).join(' · ');
}

export function CnpjConsultation() {
  const [cnpj, setCnpj] = useState('');
  const [status, setStatus] = useState<LookupStatus>('idle');
  const [validationMessage, setValidationMessage] = useState('');
  const [result, setResult] = useState<CnpjResult | null>(null);
  const [copied, setCopied] = useState<CopyStatus>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleChange(value: string) {
    setCnpj(formatCnpj(value));
    setValidationMessage('');
    setCopied(null);
    if (status !== 'idle') {
      setStatus('idle');
      setResult(null);
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const normalized = onlyCnpjDigits(cnpj);

    if (!isValidCnpj(normalized)) {
      setValidationMessage('Digite um CNPJ válido com 14 números.');
      inputRef.current?.focus();
      return;
    }

    setStatus('loading');
    setValidationMessage('');
    setResult(null);

    try {
      const response = await fetch(`/api/cnpj/${normalized}`);

      if (response.status === 404) {
        setStatus('not_found');
        return;
      }

      if (response.status === 429) {
        setStatus('rate_limited');
        return;
      }

      if (!response.ok) {
        setStatus('unavailable');
        return;
      }

      const data = (await response.json()) as CnpjResult;
      setResult(data);
      setStatus('success');

      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'cnpj_consulta',
        cnpj_status: data.situacaoCadastral || 'nao_informada',
        cnpj_source: data.source,
        conversion_stage: 'microconversao',
      });
    } catch {
      setStatus('unavailable');
    }
  }

  async function copyCnpj() {
    if (!result || !navigator.clipboard) return;
    await navigator.clipboard.writeText(formatCnpj(result.cnpj));
    setCopied('cnpj');
  }

  async function copySummary() {
    if (!result || !navigator.clipboard) return;

    const lines = [
      'Resumo da consulta CNPJ',
      `CNPJ: ${formatCnpj(result.cnpj)}`,
      `Razão social: ${result.razaoSocial}`,
      result.nomeFantasia ? `Nome fantasia: ${result.nomeFantasia}` : '',
      `Situação cadastral: ${result.situacaoCadastral || 'Não informada'}`,
      result.dataSituacaoCadastral
        ? `Data da situação: ${formatDate(result.dataSituacaoCadastral)}`
        : '',
      `Data de abertura: ${formatDate(result.dataAbertura)}`,
      `Porte: ${result.porte || 'Não informado'}`,
      `Capital social: ${formatCurrency(result.capitalSocial)}`,
      `CNAE principal: ${formatCnae(result.cnaeFiscal)} — ${result.cnaeDescricao || 'Descrição não informada'}`,
      `Simples Nacional: ${formatOption(result.simplesNacional)}`,
      `MEI: ${formatOption(result.mei)}`,
      address ? `Endereço: ${address}` : '',
      `Fonte: ${result.source === 'brasilapi' ? 'BrasilAPI' : 'ReceitaWS'}`,
      'Resumo informativo. Não substitui comprovante oficial.',
    ].filter(Boolean);

    await navigator.clipboard.writeText(lines.join('\n'));
    setCopied('summary');
  }

  function printSummary() {
    window.print();
  }

  function openRiskCalculator() {
    if (!result) return;

    try {
      window.sessionStorage.setItem(
        'sermst_cnpj_funnel_v1',
        JSON.stringify({
          cnpj: result.cnpj,
          cnae: result.cnaeFiscal,
          empresa: result.razaoSocial,
        }),
      );
    } catch {
      // A navegação continua mesmo quando o armazenamento do navegador está bloqueado.
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cnpj_risco',
      cnae_codigo: result.cnaeFiscal,
      source_page: 'consulta_cnpj',
      conversion_stage: 'descida_funil',
    });
  }

  function resetLookup() {
    setCnpj('');
    setStatus('idle');
    setValidationMessage('');
    setResult(null);
    setCopied(null);
    inputRef.current?.focus();
  }

  const address = result ? formatAddress(result) : '';
  const isActive = result?.situacaoCadastral.toLocaleUpperCase('pt-BR') === 'ATIVA';

  return (
    <section aria-labelledby="consulta-cnpj-ferramenta" className="relative overflow-hidden bg-brand-900 pb-16 pt-6 text-white md:pb-24 md:pt-10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(227,27,69,0.22),transparent_38%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative z-10 mx-auto w-full max-w-[1040px] px-6 lg:px-8">
        <div className="mb-8 max-w-3xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/80">
            <ShieldCheck className="h-4 w-4 text-accent-pink" aria-hidden="true" />
            Consulta pública e gratuita
          </span>
          <h1 id="consulta-cnpj-ferramenta" className="h1-standard text-white md:text-6xl">
            Consulta CNPJ grátis
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
            Digite o CNPJ para conferir os principais dados do cartão CNPJ: situação
            cadastral, razão social, abertura, atividades e endereço.
          </p>
        </div>

        <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white text-slate-900 shadow-[0_32px_80px_-28px_rgba(0,0,0,0.55)]">
          <form onSubmit={handleSubmit} noValidate className="p-6 md:p-9">
            <label htmlFor="cnpj-consulta" className="block text-sm font-black uppercase tracking-[0.12em] text-brand-900">
              CNPJ da empresa
            </label>
            <div className="mt-3 grid gap-3 sm:grid-cols-[1fr_auto]">
              <div className="relative">
                <Building2 className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" aria-hidden="true" />
                <input
                  ref={inputRef}
                  id="cnpj-consulta"
                  name="cnpj"
                  type="text"
                  inputMode="numeric"
                  autoComplete="off"
                  value={cnpj}
                  onChange={(event) => handleChange(event.target.value)}
                  placeholder="00.000.000/0001-00"
                  maxLength={18}
                  aria-describedby="cnpj-ajuda cnpj-erro"
                  aria-invalid={Boolean(validationMessage)}
                  className="h-14 w-full rounded-2xl border-2 border-slate-200 bg-white py-3 pl-12 pr-4 text-lg font-bold text-brand-900 shadow-sm transition-colors placeholder:font-medium placeholder:text-slate-400 focus:border-brand-900 focus:outline-none"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'loading'}
                className="btn-primary-safe h-14 min-w-48 text-base disabled:cursor-wait disabled:opacity-70"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                    Consultando
                  </>
                ) : (
                  <>
                    <Search className="h-5 w-5" aria-hidden="true" />
                    Consultar CNPJ
                  </>
                )}
              </button>
            </div>
            <p id="cnpj-ajuda" className="mt-3 text-sm text-slate-500">
              Você pode digitar com ou sem pontos, barra e hífen.
            </p>
            <p id="cnpj-erro" role="alert" className="mt-2 min-h-5 text-sm font-bold text-red-600">
              {validationMessage}
            </p>
          </form>

          <div aria-live="polite" aria-atomic="true">
            {status === 'loading' ? (
              <div className="border-t border-slate-100 bg-slate-50 px-6 py-10 text-center md:px-9">
                <Loader2 className="mx-auto h-8 w-8 animate-spin text-accent-pink" aria-hidden="true" />
                <p className="mt-3 font-bold text-brand-900">Buscando os dados públicos da empresa…</p>
              </div>
            ) : null}

            {status === 'not_found' || status === 'rate_limited' || status === 'unavailable' ? (
              <div className="border-t border-amber-200 bg-amber-50 px-6 py-7 md:px-9">
                <p className="font-black text-amber-950">
                  {status === 'not_found'
                    ? 'Não encontramos este CNPJ nas fontes consultadas.'
                    : status === 'rate_limited'
                      ? 'Muitas consultas foram feitas em pouco tempo.'
                      : 'A consulta está temporariamente indisponível.'}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-amber-900">
                  {status === 'not_found'
                    ? 'Confira o número e tente novamente. Se ele estiver correto, faça a conferência no canal oficial da REDESIM.'
                    : status === 'rate_limited'
                      ? 'Aguarde um minuto antes de tentar novamente ou faça a consulta pelo canal oficial.'
                      : 'As fontes públicas podem limitar ou interromper o acesso por alguns minutos. Tente novamente em instantes ou use a REDESIM.'}
                </p>
                <a
                  href="https://www.gov.br/empresas-e-negocios/pt-br/redesim/comprovantes/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex font-black text-brand-900 underline decoration-brand-900/25 underline-offset-4 hover:text-accent-pink"
                >
                  Consultar no canal oficial
                </a>
              </div>
            ) : null}

            {status === 'success' && result ? (
              <div className="cnpj-print-area border-t border-slate-200 bg-slate-50 p-6 md:p-9">
                <div className="flex flex-col gap-5 border-b border-slate-200 pb-7 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <span
                        className={
                          isActive
                            ? 'inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-emerald-800'
                            : 'inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-black uppercase tracking-wider text-amber-900'
                        }
                      >
                        <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                        Situação {result.situacaoCadastral || 'não informada'}
                      </span>
                      {result.tipo ? (
                        <span className="text-xs font-black uppercase tracking-wider text-slate-500">
                          {result.tipo}
                        </span>
                      ) : null}
                    </div>
                    <h2 className="mt-4 text-2xl font-black leading-tight text-brand-900 md:text-3xl">
                      {result.razaoSocial}
                    </h2>
                    {result.nomeFantasia ? (
                      <p className="mt-2 text-base font-semibold text-slate-600">
                        Nome fantasia: {result.nomeFantasia}
                      </p>
                    ) : null}
                  </div>
                  <button
                    type="button"
                    onClick={copyCnpj}
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-black text-brand-900 transition-colors hover:border-brand-900 hover:bg-brand-900 hover:text-white"
                  >
                    {copied === 'cnpj' ? <Check className="h-4 w-4" /> : <Clipboard className="h-4 w-4" />}
                    {copied === 'cnpj' ? 'CNPJ copiado' : formatCnpj(result.cnpj)}
                  </button>
                </div>

                <dl className="grid gap-4 py-7 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <dt className="text-xs font-black uppercase tracking-wider text-slate-500">Data de abertura</dt>
                    <dd className="mt-2 font-black text-brand-900">{formatDate(result.dataAbertura)}</dd>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <dt className="text-xs font-black uppercase tracking-wider text-slate-500">Porte</dt>
                    <dd className="mt-2 font-black text-brand-900">{result.porte || 'Não informado'}</dd>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <dt className="text-xs font-black uppercase tracking-wider text-slate-500">Capital social</dt>
                    <dd className="mt-2 font-black text-brand-900">
                      {formatCurrency(result.capitalSocial)}
                    </dd>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <dt className="text-xs font-black uppercase tracking-wider text-slate-500">
                      Data da situação cadastral
                    </dt>
                    <dd className="mt-2 font-black text-brand-900">
                      {formatDate(result.dataSituacaoCadastral)}
                    </dd>
                  </div>
                  {result.motivoSituacaoCadastral ? (
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:col-span-2">
                      <dt className="text-xs font-black uppercase tracking-wider text-slate-500">
                        Motivo da situação cadastral
                      </dt>
                      <dd className="mt-2 font-black text-brand-900">
                        {result.motivoSituacaoCadastral}
                      </dd>
                    </div>
                  ) : null}
                  <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:col-span-2">
                    <dt className="text-xs font-black uppercase tracking-wider text-slate-500">Atividade principal (CNAE)</dt>
                    <dd className="mt-2 font-black text-brand-900">
                      {formatCnae(result.cnaeFiscal)} — {result.cnaeDescricao || 'Descrição não informada'}
                    </dd>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <dt className="text-xs font-black uppercase tracking-wider text-slate-500">
                      Simples Nacional
                    </dt>
                    <dd className="mt-2 font-black text-brand-900">
                      {formatOption(result.simplesNacional)}
                    </dd>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-5">
                    <dt className="text-xs font-black uppercase tracking-wider text-slate-500">MEI</dt>
                    <dd className="mt-2 font-black text-brand-900">{formatOption(result.mei)}</dd>
                  </div>
                  {result.cnaesSecundarios.length ? (
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:col-span-2">
                      <dt className="text-xs font-black uppercase tracking-wider text-slate-500">
                        Atividades secundárias ({result.cnaesSecundarios.length})
                      </dt>
                      <dd className="mt-3">
                        <ul className="space-y-2 text-sm font-semibold leading-relaxed text-brand-900">
                          {result.cnaesSecundarios.map((activity) => (
                            <li key={activity.codigo} className="border-l-2 border-slate-200 pl-3">
                              {formatCnae(activity.codigo)} —{' '}
                              {activity.descricao || 'Descrição não informada'}
                            </li>
                          ))}
                        </ul>
                      </dd>
                    </div>
                  ) : null}
                  {result.naturezaJuridica ? (
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:col-span-2">
                      <dt className="text-xs font-black uppercase tracking-wider text-slate-500">Natureza jurídica</dt>
                      <dd className="mt-2 font-black text-brand-900">{result.naturezaJuridica}</dd>
                    </div>
                  ) : null}
                  {address ? (
                    <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:col-span-2">
                      <dt className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-slate-500">
                        <MapPin className="h-4 w-4 text-accent-pink" aria-hidden="true" />
                        Endereço cadastrado
                      </dt>
                      <dd className="mt-2 font-semibold leading-relaxed text-brand-900">{address}</dd>
                    </div>
                  ) : null}
                </dl>

                <div className="cnpj-no-print flex flex-wrap gap-3 border-t border-slate-200 pt-6">
                  <button
                    type="button"
                    onClick={copySummary}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-black text-brand-900 transition-colors hover:border-brand-900 hover:bg-brand-900 hover:text-white"
                  >
                    {copied === 'summary' ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {copied === 'summary' ? 'Resumo copiado' : 'Copiar resumo'}
                  </button>
                  <button
                    type="button"
                    onClick={printSummary}
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-black text-brand-900 transition-colors hover:border-brand-900 hover:bg-brand-900 hover:text-white"
                  >
                    <Printer className="h-4 w-4" aria-hidden="true" />
                    Imprimir resumo
                  </button>
                  <button
                    type="button"
                    onClick={resetLookup}
                    className="inline-flex items-center gap-2 px-2 py-3 text-sm font-black text-brand-900 hover:text-accent-pink"
                  >
                    <RotateCcw className="h-4 w-4" aria-hidden="true" />
                    Consultar outro CNPJ
                  </button>
                </div>

                <p className="mt-5 text-xs leading-relaxed text-slate-500">
                  Resumo informativo. Não substitui o comprovante oficial de inscrição e situação
                  cadastral.
                </p>

                <div className="cnpj-no-print mt-7 rounded-2xl border border-slate-200 bg-white p-6">
                  <div className="flex items-start gap-4">
                    <div className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-brand-900 sm:flex">
                      <FileText className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                        Se a empresa tem funcionários
                      </p>
                      <h3 className="mt-1 text-lg font-black text-brand-900">
                        Quer entender o grau de risco deste CNAE?
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        A calculadora usa o CNAE da empresa como ponto de partida para mostrar
                        referências de grau de risco, CIPA e SESMT.
                      </p>
                      <Link
                        href="/rh/calculadora-cnae-grau-de-risco"
                        onClick={openRiskCalculator}
                        className="mt-4 inline-flex items-center gap-2 text-sm font-black text-brand-900 underline decoration-brand-900/20 underline-offset-4 hover:text-accent-pink"
                      >
                        Consultar grau de risco
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="mt-5 text-sm text-slate-500">
                  <p>
                    Fonte da resposta: {result.source === 'brasilapi' ? 'BrasilAPI' : 'ReceitaWS'}
                    {formatDateTime(result.consultedAt)
                      ? ` · consulta realizada em ${formatDateTime(result.consultedAt)}`
                      : ''}
                    .
                  </p>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
