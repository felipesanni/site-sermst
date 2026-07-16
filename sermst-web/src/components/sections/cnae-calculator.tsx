'use client';

import { FormEvent, useState, useRef, useEffect } from 'react';
import Script from 'next/script';
import {
  Search,
  ShieldCheck,
  AlertTriangle,
  AlertOctagon,
  ShieldAlert,
  X,
  Building2,
  Loader2,
  Users,
  UserCheck,
  CheckCircle2,
  AlertCircle,
} from 'lucide-react';
import { buscarCnae, cnaeData, grauRiscoInfo, type CnaeEntry } from '@/lib/data/cnae-data';
import { calculateNr05, getNr05ReferenceLabel } from '@/lib/nr05';
import { FadeIn } from '@/components/ui/fade-in';

// ── Helpers ──────────────────────────────────────────────────────────────────

function digits(v: string) {
  return v.replace(/\D/g, '');
}

function fmtCNPJ(v: string) {
  const d = digits(v).slice(0, 14);
  if (d.length <= 2) return d;
  if (d.length <= 5) return `${d.slice(0, 2)}.${d.slice(2)}`;
  if (d.length <= 8) return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5)}`;
  if (d.length <= 12) return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}/${d.slice(8)}`;
  return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}/${d.slice(8, 12)}-${d.slice(12)}`;
}

/** Converte código numérico da BrasilAPI em string 7 dígitos zero-padded */
function cnaeToStr(cod: number | string): string {
  return String(cod).replace(/\D/g, '').padStart(7, '0');
}

/** Busca entrada exata por código na nossa base local */
function findByCodigo(cod: string): CnaeEntry | undefined {
  const normalized = cod.replace(/\D/g, '').padStart(7, '0');
  return cnaeData.find((e) => e.codigo === normalized);
}

type AttributionSnapshot = {
  page: string;
  referrer: string;
  capturedAt: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  gclid: string;
  fbclid: string;
  utm_id: string;
};

type StoredAttribution = {
  first: AttributionSnapshot;
  last: AttributionSnapshot;
};

type LeadStatus = 'idle' | 'submitting' | 'success' | 'error';

const ATTRIBUTION_KEY = 'sermst_attribution_v1';
const FORM_STARTED_AT_KEY = 'sermst_form_started_at_v1';
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';

function buildSnapshot(): AttributionSnapshot {
  const params = new URLSearchParams(window.location.search);

  return {
    page: window.location.href,
    referrer: document.referrer || '',
    capturedAt: new Date().toISOString(),
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_content: params.get('utm_content') || '',
    utm_term: params.get('utm_term') || '',
    gclid: params.get('gclid') || '',
    fbclid: params.get('fbclid') || '',
    utm_id: params.get('utm_id') || '',
  };
}

function hasAttributionSignal(snapshot: AttributionSnapshot) {
  return Boolean(
    snapshot.utm_source ||
      snapshot.utm_medium ||
      snapshot.utm_campaign ||
      snapshot.utm_content ||
      snapshot.utm_term ||
      snapshot.gclid ||
      snapshot.fbclid ||
      snapshot.utm_id,
  );
}

function getPorteFromEmployees(employeeCount: number) {
  if (!Number.isFinite(employeeCount) || employeeCount < 1) return 'ate-20';
  if (employeeCount <= 20) return 'ate-20';
  if (employeeCount <= 100) return '21-100';
  if (employeeCount <= 500) return '101-500';
  return '500-mais';
}

// ── Visual config por grau ───────────────────────────────────────────────────

const grauConfig = {
  1: {
    icon: ShieldCheck,
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-800',
    bar: 'bg-emerald-500',
    text: 'text-emerald-700',
  },
  2: {
    icon: ShieldCheck,
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    badge: 'bg-yellow-100 text-yellow-800',
    bar: 'bg-yellow-500',
    text: 'text-yellow-700',
  },
  3: {
    icon: AlertTriangle,
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    badge: 'bg-orange-100 text-orange-800',
    bar: 'bg-orange-500',
    text: 'text-orange-700',
  },
  4: {
    icon: AlertOctagon,
    bg: 'bg-red-50',
    border: 'border-red-200',
    badge: 'bg-red-100 text-red-800',
    bar: 'bg-red-500',
    text: 'text-red-700',
  },
} as const;

// ── Sub-componentes ──────────────────────────────────────────────────────────

function GrauBarDisplay({ grau }: { grau: 1 | 2 | 3 | 4 }) {
  return (
    <div className="flex gap-1.5">
      {([1, 2, 3, 4] as const).map((g) => {
        const colorMap: Record<number, string> = {
          1: 'bg-emerald-500',
          2: 'bg-yellow-500',
          3: 'bg-orange-500',
          4: 'bg-red-500',
        };
        return (
          <div
            key={g}
            className={`h-3 flex-1 rounded-full transition-all duration-300 ${
              g <= grau ? colorMap[grau] : 'bg-slate-200'
            }`}
          />
        );
      })}
    </div>
  );
}

interface ResultCardProps {
  entry: CnaeEntry;
  razaoSocial?: string;
  employeeCount: string;
  consultantProfile: string;
  attribution: StoredAttribution | null;
  cnpj?: string;
  sourceMode: Tab;
}

function ResultCard({
  entry,
  razaoSocial,
  employeeCount,
  consultantProfile,
  attribution,
  cnpj,
  sourceMode,
}: ResultCardProps) {
  const info = grauRiscoInfo[entry.grauRisco];
  const cfg = grauConfig[entry.grauRisco];
  const employees = Number.parseInt(employeeCount, 10);
  const nr05 = Number.isFinite(employees) ? calculateNr05(entry.grauRisco, employees) : null;
  const nr05Reference = Number.isFinite(employees) ? getNr05ReferenceLabel(employees) : '';
  const ratLabel = entry.ratGilrat ? `${entry.ratGilrat}%` : 'Não disponível';
  const [status, setStatus] = useState<LeadStatus>('idle');
  const [error, setError] = useState('');

  async function handleLeadSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError('');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries()) as Record<string, string>;

    const nr05Summary =
      nr05?.kind === 'cipa'
        ? `CIPA obrigatória (${nr05.faixa}) com ${nr05.empregados.efetivos} efetivo(s) e ${nr05.empregados.suplentes} suplente(s) por lado.`
        : nr05?.kind === 'representante'
          ? 'Sem CIPA dimensionada nesta faixa; confirmar representante da NR-05 ou atendimento por SESMT.'
          : 'NR-05 ainda não calculada.';

    payload.porte = getPorteFromEmployees(employees);
    payload.dor = 'calculadora-risco';
    payload.empresa = payload.empresa || razaoSocial || '';
    payload.mensagem = [
      `Lead originado pela Calculadora de Risco.`,
      `Modo de consulta: ${sourceMode === 'cnpj' ? 'CNPJ' : 'CNAE'}.`,
      cnpj ? `CNPJ consultado: ${cnpj}.` : '',
      razaoSocial ? `Empresa identificada: ${razaoSocial}.` : '',
      `CNAE: ${entry.codigo} - ${entry.descricao}.`,
      `Setor: ${entry.setor}.`,
      `Grau de risco: ${entry.grauRisco}.`,
      Number.isFinite(employees) ? `Empregados no estabelecimento: ${employees}.` : '',
      consultantProfile ? `Perfil de quem consultou: ${consultantProfile}.` : '',
      nr05Summary,
      `RAT/GILRAT do CNAE consultado no Anexo V: ${ratLabel}. Validar pelo CNAE da atividade preponderante e pelo FAP da empresa.`,
      `Referência inicial de SESMT pelo grau consultado: ${info.sesmt}. Confirmar a atividade preponderante.`,
      `Exame periódico: ${info.examesPeriodicos}.`,
    ]
      .filter(Boolean)
      .join(' ');

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error || 'Não foi possível enviar a análise.');
      }

      setStatus('success');
      form.reset();

      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'risk_calculator_lead_generated',
          cnae_codigo: entry.codigo,
          cnae_grau_risco: entry.grauRisco,
          cnae_rat_gilrat: entry.ratGilrat || '',
          source_mode: sourceMode,
          consultant_profile: consultantProfile,
        });
      }
    } catch (submitError) {
      setStatus('error');
      setError(submitError instanceof Error ? submitError.message : 'Erro inesperado ao enviar.');
    }
  }

  return (
    <div className={`mx-auto mt-10 max-w-3xl rounded-[2.5rem] border-2 ${cfg.border} ${cfg.bg} p-8 shadow-sm`}>
      {/* Razão social (quando vinda do CNPJ) */}
      {razaoSocial && (
        <div className="mb-5 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/70 px-5 py-3">
          <Building2 className="h-4 w-4 shrink-0 text-slate-500" />
          <p className="text-sm font-semibold text-brand-900">{razaoSocial}</p>
        </div>
      )}

      {/* Header */}
      <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-slate-500">
            {entry.setor} · CNAE {entry.codigo}
          </p>
          <h3 className="text-xl font-black leading-snug text-brand-900 md:text-2xl">
            {entry.descricao}
          </h3>
        </div>
        <span className={`shrink-0 rounded-2xl px-5 py-2 text-lg font-black ${cfg.badge}`}>
          {info.label}
        </span>
      </div>

      {/* Risk bar */}
      <div className="mb-6">
        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">Nível de risco</p>
        <GrauBarDisplay grau={entry.grauRisco} />
      </div>

      {/* Info grid */}
      <div className="mb-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-2xl border border-white/60 bg-white/70 p-5">
          <p className="mb-1 text-[11px] font-black uppercase tracking-wider text-slate-500">RAT/GILRAT do CNAE</p>
          <p className={`text-2xl font-black ${cfg.text}`}>{ratLabel}</p>
          <p className="mt-1 text-xs text-slate-500">
            {entry.ratGilrat
              ? 'Alíquota do Anexo V. Aplique ao CNAE da atividade preponderante e considere o FAP.'
              : 'Este código não consta na tabela vigente do Anexo V. Confirme se o CNAE permanece ativo.'}
          </p>
        </div>
        <div className="rounded-2xl border border-white/60 bg-white/70 p-5">
          <p className="mb-1 text-[11px] font-black uppercase tracking-wider text-slate-500">Referência inicial de SESMT</p>
          <p className="text-sm font-semibold leading-snug text-brand-900">{info.sesmt}</p>
          <p className="mt-1 text-xs text-slate-500">Confirme a atividade preponderante e o Quadro II da NR-04.</p>
        </div>
        <div className="rounded-2xl border border-white/60 bg-white/70 p-5 sm:col-span-2">
          <p className="mb-1 text-[11px] font-black uppercase tracking-wider text-slate-500">Exame periódico</p>
          <p className="text-sm font-semibold text-brand-900">{info.examesPeriodicos}</p>
        </div>
      </div>

      {/* NRs */}
      {entry.nrsDestaque.length > 0 && (
        <div className="mb-6">
          <p className="mb-2 text-[11px] font-black uppercase tracking-wider text-slate-500">
            NRs relevantes para este setor
          </p>
          <div className="flex flex-wrap gap-2">
            {['NR-01 (PGR)', 'NR-07 (PCMSO)'].map((nr) => (
              <span key={nr} className="rounded-lg border border-white/60 bg-white/70 px-3 py-1 text-xs font-bold text-brand-900">
                {nr}
              </span>
            ))}
            {entry.nrsDestaque.map((nr) => (
              <span key={nr} className={`rounded-lg border border-white/60 px-3 py-1 text-xs font-bold ${cfg.badge}`}>
                {nr}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Observação */}
      {entry.observacao && (
        <div className={`mb-6 rounded-xl border ${cfg.border} bg-white/50 p-4`}>
          <div className="flex items-start gap-3">
            <ShieldAlert className={`mt-0.5 h-4 w-4 shrink-0 ${cfg.text}`} />
            <p className="text-sm leading-relaxed text-slate-700">{entry.observacao}</p>
          </div>
        </div>
      )}

      <p className="mb-8 text-sm leading-relaxed text-slate-600">{info.descricao}</p>

      <div className="mb-8 rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-sm">
        <div className="mb-4 flex items-start gap-3">
          <div className={`rounded-2xl p-3 ${cfg.badge}`}>
            <Users className="h-5 w-5" />
          </div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-wider text-slate-500">NR-05 · Dimensionamento de CIPA</p>
            <h4 className="mt-1 text-lg font-black text-brand-900">Este estabelecimento precisa de CIPA?</h4>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              A NR-05 considera o estabelecimento, não o total do grupo. A calculadora cruza o grau consultado com a quantidade de empregados e apresenta uma referência de CIPA ou representante. Confirme a atividade preponderante e se o estabelecimento é atendido por SESMT antes de concluir.
            </p>
          </div>
        </div>

        <div className="mb-5 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <p className="text-[11px] font-black uppercase tracking-wider text-slate-500">Enquadramento pelo Quadro I da NR-05</p>
          <p className="mt-1 text-sm font-semibold text-brand-900">
            {nr05Reference || 'Informe os empregados acima para ver o enquadramento no Quadro I da NR-05.'}
          </p>
        </div>

        {!employeeCount && (
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-sm leading-relaxed text-slate-600">
              Informe a quantidade de empregados no campo acima para calcular se este estabelecimento precisa de CIPA, quantos membros são exigidos por lado e se o caso é de representante da NR-05.
            </p>
          </div>
        )}

        {nr05?.kind === 'cipa' && (
          <div className="space-y-4">
            <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
              <div className="flex items-start gap-3">
                <div className="rounded-2xl bg-emerald-100 p-3 text-emerald-700">
                  <Users className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-black uppercase tracking-wider text-emerald-700">CIPA obrigatória</p>
                  <h5 className="mt-1 text-lg font-black text-brand-900">{nr05.faixa}</h5>
                  <p className="mt-2 text-sm leading-relaxed text-slate-700">{nr05.observacao}</p>
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-[11px] font-black uppercase tracking-wider text-slate-500">Lado dos empregados</p>
                <p className="mt-2 text-sm font-semibold text-brand-900">{nr05.empregados.efetivos} efetivo(s)</p>
                <p className="text-sm font-semibold text-brand-900">{nr05.empregados.suplentes} suplente(s)</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-[11px] font-black uppercase tracking-wider text-slate-500">Lado do empregador</p>
                <p className="mt-2 text-sm font-semibold text-brand-900">{nr05.empregador.efetivos} efetivo(s)</p>
                <p className="text-sm font-semibold text-brand-900">{nr05.empregador.suplentes} suplente(s)</p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-[11px] font-black uppercase tracking-wider text-slate-500">Composição mínima</p>
                <p className="mt-2 text-sm font-semibold text-brand-900">{nr05.total.efetivos} titular(es)</p>
                <p className="text-sm font-semibold text-brand-900">{nr05.total.suplentes} suplente(s)</p>
              </div>
            </div>
          </div>
        )}

        {nr05?.kind === 'representante' && (
          <div className="rounded-2xl border border-yellow-200 bg-yellow-50 p-4">
            <div className="flex items-start gap-3">
              <div className="rounded-2xl bg-yellow-100 p-3 text-yellow-700">
                <UserCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="text-[11px] font-black uppercase tracking-wider text-yellow-700">Representante da NR-05</p>
                <h5 className="mt-1 text-lg font-black text-brand-900">Nesta faixa, não há obrigação de CIPA completa</h5>
                <p className="mt-2 text-sm leading-relaxed text-slate-700">{nr05.observacao}</p>
              </div>
            </div>
          </div>
        )}

      </div>

      <div className="mb-8 rounded-[2rem] border border-white/70 bg-white/75 p-6 shadow-sm">
        <div className="mb-5">
          <p className="text-[11px] font-black uppercase tracking-wider text-accent-pink">Próximo passo</p>
          <h4 className="mt-1 text-lg font-black text-brand-900">Quer confirmar o enquadramento com a nossa equipe?</h4>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Ao enviar, a SERMST recebe o CNAE, o grau de risco, o enquadramento de CIPA e o número de empregados informados aqui. Assim, a conversa começa com o contexto do seu caso.
          </p>
        </div>

        <div className="mb-5 grid gap-3 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-[11px] font-black uppercase tracking-wider text-slate-500">O que a equipe já recebe</p>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-brand-900">CNAE, grau de risco, referências iniciais de RAT, SESMT e NR-05/CIPA e número de empregados.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-[11px] font-black uppercase tracking-wider text-slate-500">Por que funciona</p>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-brand-900">Sem apresentação genérica. A equipe responde direto com o que se aplica ao seu porte, setor e grau de risco.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
            <p className="text-[11px] font-black uppercase tracking-wider text-slate-500">Para quem é</p>
            <p className="mt-2 text-sm font-semibold leading-relaxed text-brand-900">Para quem precisa confirmar se faltam exames, laudos, eventos do eSocial, PGR, PCMSO ou outro requisito de SST.</p>
          </div>
        </div>

        {status === 'success' ? (
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-5">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
              <div>
                <p className="font-black text-brand-900">Recebemos. Em breve você tem retorno.</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">
                  A equipe recebeu seu contato e os dados informados na calculadora. Eles serão usados para conferir o enquadramento antes do retorno.
                </p>
                        <a
                  href="/assinaturas"
                  className="btn-primary-safe mt-4 inline-flex"
                >
                  Ver planos de SST por assinatura →
                </a>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleLeadSubmit} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
              <input
                name="nome"
                type="text"
                required
                placeholder="Seu nome"
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-brand-900 placeholder-slate-400 focus:border-brand-900 focus:outline-none"
              />
              <input
                name="email"
                type="email"
                required
                placeholder="E-mail"
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-brand-900 placeholder-slate-400 focus:border-brand-900 focus:outline-none"
              />
              <input
                name="telefone"
                type="tel"
                required
                placeholder="Telefone com DDD"
                className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-brand-900 placeholder-slate-400 focus:border-brand-900 focus:outline-none"
              />
            </div>


            <input type="hidden" name="empresa" value={razaoSocial || ''} />
            <input type="hidden" name="website" value="" />
            <input type="hidden" name="landing_page" value={attribution?.first.page || ''} />
            <input type="hidden" name="conversion_page" value={typeof window !== 'undefined' ? window.location.href : ''} />
            <input type="hidden" name="original_referrer" value={attribution?.first.referrer || ''} />
            <input type="hidden" name="form_started_at" value={typeof window !== 'undefined' ? window.sessionStorage.getItem(FORM_STARTED_AT_KEY) || '' : ''} />
            <input type="hidden" name="utm_source" value={attribution?.last.utm_source || ''} />
            <input type="hidden" name="utm_medium" value={attribution?.last.utm_medium || ''} />
            <input type="hidden" name="utm_campaign" value={attribution?.last.utm_campaign || ''} />
            <input type="hidden" name="utm_content" value={attribution?.last.utm_content || ''} />
            <input type="hidden" name="utm_term" value={attribution?.last.utm_term || ''} />
            <input type="hidden" name="utm_id" value={attribution?.last.utm_id || ''} />
            <input type="hidden" name="gclid" value={attribution?.last.gclid || ''} />
            <input type="hidden" name="fbclid" value={attribution?.last.fbclid || ''} />
            <input type="hidden" name="utm_source_first" value={attribution?.first.utm_source || ''} />
            <input type="hidden" name="utm_medium_first" value={attribution?.first.utm_medium || ''} />
            <input type="hidden" name="utm_campaign_first" value={attribution?.first.utm_campaign || ''} />
            <input type="hidden" name="utm_content_first" value={attribution?.first.utm_content || ''} />
            <input type="hidden" name="utm_term_first" value={attribution?.first.utm_term || ''} />
            <input type="hidden" name="utm_id_first" value={attribution?.first.utm_id || ''} />
            <input type="hidden" name="gclid_first" value={attribution?.first.gclid || ''} />
            <input type="hidden" name="fbclid_first" value={attribution?.first.fbclid || ''} />
            <input type="hidden" name="attribution_first_captured_at" value={attribution?.first.capturedAt || ''} />
            <input type="hidden" name="attribution_last_captured_at" value={attribution?.last.capturedAt || ''} />

            {TURNSTILE_SITE_KEY ? (
              <div className="space-y-2">
                <div
                  className="cf-turnstile"
                  data-sitekey={TURNSTILE_SITE_KEY}
                  data-theme="light"
                  data-size="normal"
                />
                <p className="text-xs text-slate-500">Proteção anti-spam ativa.</p>
              </div>
            ) : null}

            {status === 'error' && (
              <div className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                <p><strong>Não conseguimos enviar.</strong> {error}</p>
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="btn-primary-safe-lg flex w-full disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Enviando diagnóstico...
                </>
              ) : (
                'Receber diagnóstico deste enquadramento'
              )}
            </button>
          </form>
        )}
      </div>


      <div className="mt-4 space-y-2 text-center">
        <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
          *Resultado inicial baseado no CNAE consultado e nos Quadros da NR-04 e NR-05. Confirme a atividade preponderante e os dados do estabelecimento antes de tomar decisões operacionais ou fiscais.
        </p>
        <p className="mx-auto max-w-2xl text-xs leading-relaxed text-slate-500">
          A alíquota RAT/GILRAT exibida vem do Anexo V para o CNAE consultado. A apuração deve usar o CNAE da atividade econômica preponderante e o FAP da empresa, que pode reduzir ou majorar a alíquota conforme o histórico de acidentes.
        </p>
      </div>
    </div>
  );
}

// ── Preview de graus (estado vazio) ─────────────────────────────────────────

function GrauPreview() {
  return (
    <div className="mx-auto mt-10 max-w-3xl">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {([1, 2, 3, 4] as const).map((g) => {
          const c = grauConfig[g];
          const i = grauRiscoInfo[g];
          return (
            <div key={g} className={`rounded-2xl border-2 ${c.border} ${c.bg} p-4 text-center`}>
              <span className={`mb-2 inline-block rounded-xl px-3 py-1 text-sm font-black ${c.badge}`}>
                Grau {g}
              </span>
              <p className="text-xs leading-snug text-slate-600">{i.label.split(' - ')[1]}</p>
              <p className={`mt-2 text-sm font-black ${c.text}`}>NR-04 · SESMT e CIPA</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Componente principal ─────────────────────────────────────────────────────

type Tab = 'cnae' | 'cnpj';

const consultantProfiles = [
  'Empresário(a) / Sócio(a)',
  'Contador(a)',
  'Gestor(a) / Gerente',
  'Recursos Humanos / Departamento Pessoal',
  'Profissional de SST',
  'Outro',
] as const;

export function CnaeCalculator() {
  const [tab, setTab] = useState<Tab>('cnpj');
  const [showCnaeFallback, setShowCnaeFallback] = useState(false);
  const [employeeCount, setEmployeeCount] = useState('');
  const [consultantProfile, setConsultantProfile] = useState('');
  const [attribution, setAttribution] = useState<StoredAttribution | null>(null);

  // ── Estado aba CNAE ──
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<CnaeEntry[]>([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<CnaeEntry | null>(null);
  const [cnaeResultRequested, setCnaeResultRequested] = useState(false);
  const wrapperRef = useRef<HTMLFormElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // ── Estado aba CNPJ ──
  const [cnpj, setCnpj] = useState('');
  const [cnpjStatus, setCnpjStatus] = useState<'idle' | 'loading' | 'found' | 'not_found' | 'error'>('idle');
  const [cnpjEmpresa, setCnpjEmpresa] = useState('');
  const [cnpjCnaeStr, setCnpjCnaeStr] = useState(''); // código bruto da BrasilAPI
  const [cnpjCnaeDesc, setCnpjCnaeDesc] = useState(''); // descrição da BrasilAPI
  const [cnpjEntry, setCnpjEntry] = useState<CnaeEntry | null>(null);
  const inFlight = useRef(false);
  const lastCnpj = useRef('');
  const lastTrackedCnpjResult = useRef('');

  useEffect(() => {
    const current = buildSnapshot();
    const hasSignal = hasAttributionSignal(current);

    let next: StoredAttribution;
    try {
      const storedRaw = window.localStorage.getItem(ATTRIBUTION_KEY);
      const stored = storedRaw ? (JSON.parse(storedRaw) as StoredAttribution) : null;

      if (stored) {
        const shouldPromoteFirstTouch = hasSignal && !hasAttributionSignal(stored.first);
        next = {
          first: shouldPromoteFirstTouch ? current : stored.first,
          last: hasSignal
            ? current
            : {
                ...stored.last,
                page: window.location.href,
              },
        };
      } else {
        next = { first: current, last: current };
      }
    } catch {
      next = { first: current, last: current };
    }

    window.localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(next));
    if (!window.sessionStorage.getItem(FORM_STARTED_AT_KEY)) {
      window.sessionStorage.setItem(FORM_STARTED_AT_KEY, String(Date.now()));
    }
    setAttribution(next);
  }, []);

  // ── Busca CNAE por texto ──
  useEffect(() => {
    if (query.length >= 2) {
      const found = buscarCnae(query);
      setResults(found);
      setOpen(found.length > 0);
    } else {
      setResults([]);
      setOpen(false);
    }
  }, [query]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  function handleSelect(entry: CnaeEntry) {
    setSelected(entry);
    setCnaeResultRequested(false);
    setQuery(`${entry.codigo}: ${entry.descricao}`);
    setOpen(false);
  }

  function handleClearCnae() {
    setQuery('');
    setSelected(null);
    setCnaeResultRequested(false);
    setResults([]);
    setOpen(false);
    inputRef.current?.focus();
  }

  function handleCnaeSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const employees = Number.parseInt(employeeCount, 10);
    if (!selected || !Number.isFinite(employees) || employees < 1 || !consultantProfile) return;

    setCnaeResultRequested(true);
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cnae_calculator_cnpj_result',
      cnae_codigo: selected.codigo,
      cnae_grau_risco: selected.grauRisco,
      cnae_rat_gilrat: selected.ratGilrat || '',
      employee_count: employees,
      consultant_profile: consultantProfile,
      source_mode: 'cnae',
    });
  }

  // ── Busca CNPJ via BrasilAPI ──
  async function lookupCNPJ(raw: string) {
    if (raw.length !== 14 || raw === lastCnpj.current || inFlight.current) return;
    inFlight.current = true;
    lastCnpj.current = raw;
    setCnpjStatus('loading');
    setCnpjEntry(null);
    setCnpjEmpresa('');
    setCnpjCnaeStr('');
    setCnpjCnaeDesc('');

    try {
      const r = await fetch(`/api/cnpj/${raw}`);
      if (!r.ok) throw new Error('not_found');
      const data = await r.json();

      const empresa = data?.razaoSocial ?? '';
      const codigoCnae = data?.cnaeFiscal != null ? cnaeToStr(data.cnaeFiscal) : '';
      const descCnae = data?.cnaeDescricao ?? '';

      setCnpjEmpresa(empresa);
      setCnpjCnaeStr(codigoCnae);
      setCnpjCnaeDesc(descCnae);

      // Tenta encontrar na base local
      const entry = codigoCnae ? findByCodigo(codigoCnae) : undefined;
      if (entry) {
        setCnpjEntry(entry);
        setCnpjStatus('found');
      } else {
        setCnpjStatus('not_found');
      }
    } catch {
      setCnpjStatus('error');
      lastCnpj.current = '';
    } finally {
      inFlight.current = false;
    }
  }

  function handleCNPJChange(v: string) {
    const formatted = fmtCNPJ(v);
    setCnpj(formatted);
    const raw = digits(formatted);

    if (cnpjStatus !== 'idle' && raw !== lastCnpj.current) {
      setCnpjStatus('idle');
      setCnpjEntry(null);
      setCnpjEmpresa('');
      setCnpjCnaeStr('');
      setCnpjCnaeDesc('');
      lastCnpj.current = '';
      lastTrackedCnpjResult.current = '';
    }
  }

  function handleCnpjSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const raw = digits(cnpj);
    const employees = Number.parseInt(employeeCount, 10);
    if (raw.length !== 14 || !Number.isFinite(employees) || employees < 1 || !consultantProfile) return;

    lookupCNPJ(raw);
  }

  function handleClearCnpj() {
    setCnpj('');
    setCnpjStatus('idle');
    setCnpjEntry(null);
    setCnpjEmpresa('');
    setCnpjCnaeStr('');
    setCnpjCnaeDesc('');
    lastCnpj.current = '';
    lastTrackedCnpjResult.current = '';
    inFlight.current = false;
  }

  function handleConsultantProfileChange(value: string) {
    setConsultantProfile(value);
    if (value && typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'cnae_calculator_profile_selected',
        consultant_profile: value,
      });
    }
  }

  const employees = Number.parseInt(employeeCount, 10);
  const hasEmployeeCount = Number.isFinite(employees) && employees > 0;
  const hasConsultantProfile = consultantProfile.length > 0;
  const hasValidCnpj = digits(cnpj).length === 14;
  const hasResolvedEntry = tab === 'cnae' ? !!selected && cnaeResultRequested : cnpjStatus === 'found' && !!cnpjEntry;
  const canSearchCnae = !!selected && hasEmployeeCount && hasConsultantProfile && !cnaeResultRequested;
  const canSearchCnpj =
    hasValidCnpj &&
    hasEmployeeCount &&
    hasConsultantProfile &&
    (cnpjStatus === 'idle' || cnpjStatus === 'error');
  const hasResult =
    tab === 'cnae'
      ? !!selected && cnaeResultRequested && hasEmployeeCount && hasConsultantProfile
      : hasValidCnpj && cnpjStatus === 'found' && !!cnpjEntry && hasEmployeeCount && hasConsultantProfile;

  useEffect(() => {
    if (tab !== 'cnpj' || !hasResult || !cnpjEntry) return;

    const resultKey = `${digits(cnpj)}:${cnpjEntry.codigo}`;
    if (lastTrackedCnpjResult.current === resultKey) return;
    lastTrackedCnpjResult.current = resultKey;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cnae_calculator_cnpj_result',
      cnae_codigo: cnpjEntry.codigo,
      cnae_grau_risco: cnpjEntry.grauRisco,
      cnae_rat_gilrat: cnpjEntry.ratGilrat || '',
      employee_count: Number.parseInt(employeeCount, 10),
      consultant_profile: consultantProfile,
      source_mode: 'cnpj',
    });
  }, [cnpj, cnpjEntry, consultantProfile, employeeCount, hasResult, tab]);

  return (
    <>
      {TURNSTILE_SITE_KEY ? (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="afterInteractive"
        />
      ) : null}
      <section className="overflow-hidden bg-slate-50 py-12 md:py-16">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <FadeIn direction="up">
            <div className="mb-8 text-center">
              <span className="mb-4 inline-block rounded-full bg-accent-pink px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white">
                Consulta gratuita • resultado na hora
              </span>
              <p className="mb-3 text-3xl font-black leading-tight tracking-tighter text-brand-900 md:text-4xl">
                CNAE, Grau de Risco, FAT, RAT e CIPA!
              </p>
              <p className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
                Além das principais obrigações de saúde e segurança do trabalho aplicáveis.
              </p>
            </div>

            <div className="mx-auto mb-8 max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
              <div className="flex flex-col gap-4 border-b border-slate-100 pb-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-brand-900 p-2 text-white">
                    <Building2 className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-wide text-brand-900">
                      {tab === 'cnae' ? 'Busca por CNAE' : 'CNPJ da empresa'} <span className="text-red-500">*</span>
                    </p>
                    <p className="text-xs text-slate-500">
                      {tab === 'cnae'
                        ? 'Selecione a atividade econômica para consultar o enquadramento'
                        : 'Consulta automática pelo cadastro da Receita Federal'}
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => {
                    if (!showCnaeFallback) {
                      setShowCnaeFallback(true);
                      setTab('cnae');
                      return;
                    }

                    setShowCnaeFallback(false);
                    handleClearCnae();
                    setTab('cnpj');
                  }}
                  className="text-sm font-bold text-slate-500 underline decoration-slate-300 underline-offset-4 transition-colors hover:text-brand-900"
                >
                  {showCnaeFallback ? 'Ocultar busca por CNAE' : 'Não tenho o CNPJ agora'}
                </button>
              </div>

            {showCnaeFallback && tab === 'cnae' && (
              <form className="mt-4" ref={wrapperRef} onSubmit={handleCnaeSearch}>
                <div className="relative">
                  <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    ref={inputRef}
                    type="text"
                    required
                    value={query}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      if (selected) {
                        setSelected(null);
                        setCnaeResultRequested(false);
                      }
                    }}
                    onFocus={() => results.length > 0 && setOpen(true)}
                    placeholder="Ex: 4711301, restaurante, construcao civil, TI..."
                    className="w-full rounded-2xl border-2 border-slate-200 bg-white py-4 pl-12 pr-12 text-base text-brand-900 placeholder-slate-400 shadow-sm transition-all focus:border-brand-900 focus:outline-none"
                  />
                  {query && (
                    <button
                      type="button"
                      onClick={handleClearCnae}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-brand-900"
                      aria-label="Limpar"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                  {open && results.length > 0 && (
                    <ul className="absolute z-20 mt-2 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl">
                      {results.map((entry) => (
                        <li key={entry.codigo}>
                          <button
                            type="button"
                            onClick={() => handleSelect(entry)}
                            className="flex w-full items-start gap-3 px-4 py-3 text-left transition-colors hover:bg-slate-50"
                          >
                            <span className={`mt-0.5 shrink-0 rounded-lg px-2 py-0.5 text-[11px] font-black ${grauConfig[entry.grauRisco].badge}`}>
                              GR {entry.grauRisco}
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-brand-900">{entry.descricao}</p>
                              <p className="text-xs text-slate-500">{entry.codigo} - {entry.setor}</p>
                            </div>
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
                {query.length >= 2 && results.length === 0 && !selected && (
                  <p className="mt-3 text-center text-sm text-slate-500">
                    Nenhum CNAE encontrado para <strong>&quot;{query}&quot;</strong>. Tente uma descrição diferente ou o código de 7 dígitos.
                  </p>
                )}
                <div className="mt-4 rounded-2xl bg-slate-50 p-4 shadow-none">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-500">
                        Quantidade de funcionários <span className="text-red-500">*</span>
                      </span>
                      <input
                        type="number"
                        min={1}
                        inputMode="numeric"
                        required
                        value={employeeCount}
                        onChange={(e) => setEmployeeCount(e.target.value.replace(/\D/g, '').slice(0, 6))}
                        placeholder="Ex: 28"
                        className="w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-base font-semibold text-brand-900 placeholder-slate-400 focus:border-brand-900 focus:outline-none"
                      />
                    </label>
                    <label className="block">
                      <span className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-500">
                        Seu perfil <span className="text-red-500">*</span>
                      </span>
                      <select
                        value={consultantProfile}
                        onChange={(e) => handleConsultantProfileChange(e.target.value)}
                        required
                        className="w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-base font-semibold text-brand-900 focus:border-brand-900 focus:outline-none"
                      >
                        <option value="" disabled>Selecione</option>
                        {consultantProfiles.map((profile) => (
                          <option key={profile} value={profile}>{profile}</option>
                        ))}
                      </select>
                    </label>
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={!canSearchCnae}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-900 px-5 py-4 text-base font-black text-white shadow-sm transition-all hover:bg-brand-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none"
                >
                  {cnaeResultRequested ? 'Resultado exibido' : 'Buscar e ver resultado'}
                </button>
              </form>
            )}

            {tab === 'cnpj' && (
              <form className="mt-4" onSubmit={handleCnpjSearch}>
                <div className="relative">
                  <Building2 className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    inputMode="numeric"
                    required
                    aria-required="true"
                    value={cnpj}
                    onChange={(e) => handleCNPJChange(e.target.value)}
                    placeholder="00.000.000/0001-00"
                    maxLength={18}
                    className="w-full rounded-2xl border-2 border-slate-200 bg-white py-4 pl-12 pr-12 text-base text-brand-900 placeholder-slate-400 shadow-sm transition-all focus:border-brand-900 focus:outline-none"
                  />
                  {cnpj && (
                    <button
                      type="button"
                      onClick={handleClearCnpj}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-brand-900"
                      aria-label="Limpar"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  )}
                </div>

                {cnpjStatus === 'loading' && (
                  <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Consultando Receita Federal...
                  </div>
                )}
                {cnpjStatus === 'error' && (
                  <div className="mt-3 rounded-xl border border-red-200 bg-red-50 p-4 text-center">
                    <p className="text-sm text-red-600">
                      Não foi possível consultar este CNPJ. Verifique o número e tente novamente.
                    </p>
                    <a
                      href="/contato?origem=calculadora-cnae"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-brand-900 underline underline-offset-4 hover:text-accent-pink"
                    >
                      Falar com a SERMST para enquadramento manual
                    </a>
                  </div>
                )}
                {cnpjStatus === 'not_found' && (
                  <div className="mt-4 rounded-2xl border border-orange-200 bg-orange-50 p-5 text-center">
                    {cnpjEmpresa && (
                      <p className="mb-1 font-semibold text-brand-900">{cnpjEmpresa}</p>
                    )}
                    <p className="text-sm text-slate-700">
                      CNAE principal: <strong>{cnpjCnaeStr}</strong>
                      {cnpjCnaeDesc && `: ${cnpjCnaeDesc}`}
                    </p>
                    <p className="mt-2 text-xs text-slate-500">
                      Este CNAE ainda não está na nossa base detalhada. Solicite uma análise completa:
                    </p>
                    <div className="mt-3 flex flex-col items-center gap-2">
                      <a
                        href="https://wa.me/5511915146447?text=Ol%C3%A1!%20Consultei%20meu%20CNPJ%20na%20calculadora%20da%20SERMST%20e%20meu%20CNAE%20n%C3%A3o%20foi%20encontrado.%20Preciso%20de%20an%C3%A1lise%20de%20enquadramento."
                        target="_blank"
                        rel="noopener"
                        className="btn-whatsapp btn-whatsapp-solid inline-flex text-sm"
                      >
                        Solicitar análise pelo WhatsApp
                      </a>
                      <a
                        href="/contato?origem=calculadora-cnae-not-found"
                        className="text-xs font-bold text-brand-900 underline underline-offset-4 hover:text-accent-pink transition-colors"
                      >
                        ou enviar por formulário
                      </a>
                    </div>
                  </div>
                )}
                <div className="mt-4 grid gap-4 rounded-2xl bg-slate-50 p-4 shadow-none sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-500">
                      Quantidade de funcionários <span className="text-red-500">*</span>
                    </span>
                    <input
                      type="number"
                      min={1}
                      inputMode="numeric"
                      required
                      value={employeeCount}
                      onChange={(e) => setEmployeeCount(e.target.value.replace(/\D/g, '').slice(0, 6))}
                      placeholder="Ex: 28"
                      className="w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-base font-semibold text-brand-900 placeholder-slate-400 focus:border-brand-900 focus:outline-none"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-xs font-black uppercase tracking-wider text-slate-500">
                      Seu perfil <span className="text-red-500">*</span>
                    </span>
                    <select
                      value={consultantProfile}
                      onChange={(e) => handleConsultantProfileChange(e.target.value)}
                      required
                      className="w-full rounded-2xl border-2 border-slate-200 bg-white px-4 py-3 text-base font-semibold text-brand-900 focus:border-brand-900 focus:outline-none"
                    >
                      <option value="" disabled>Selecione</option>
                      {consultantProfiles.map((profile) => (
                        <option key={profile} value={profile}>{profile}</option>
                      ))}
                    </select>
                  </label>
                </div>
                <button
                  type="submit"
                  disabled={!canSearchCnpj}
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-900 px-5 py-4 text-base font-black text-white shadow-sm transition-all hover:bg-brand-800 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 disabled:shadow-none"
                >
                  {cnpjStatus === 'loading'
                    ? 'Consultando...'
                    : cnpjStatus === 'found'
                      ? 'Resultado exibido'
                      : cnpjStatus === 'not_found'
                        ? 'CNPJ consultado'
                        : 'Buscar e ver resultado'}
                </button>
              </form>
            )}
            </div>
          </FadeIn>

          {hasResolvedEntry && !hasResult && (
            <FadeIn direction="up" delay={0.05}>
              <div className="mx-auto mt-6 max-w-2xl rounded-2xl border border-slate-200 bg-white px-5 py-4 text-center shadow-sm">
                <p className="text-sm font-bold text-brand-900">
                  Preencha todos os campos obrigatórios para visualizar o resultado da consulta.
                </p>
              </div>
            </FadeIn>
          )}

          {hasResult && (
            <FadeIn direction="up" delay={0.1}>
              {tab === 'cnae' && selected && (
                <ResultCard
                  entry={selected}
                  employeeCount={employeeCount}
                  consultantProfile={consultantProfile}
                  attribution={attribution}
                  sourceMode={tab}
                />
              )}
              {tab === 'cnpj' && cnpjEntry && (
                <ResultCard
                  entry={cnpjEntry}
                  razaoSocial={cnpjEmpresa || undefined}
                  employeeCount={employeeCount}
                  consultantProfile={consultantProfile}
                  attribution={attribution}
                  cnpj={cnpj}
                  sourceMode={tab}
                />
              )}
            </FadeIn>
          )}

          {!hasResolvedEntry && cnpjStatus !== 'loading' && (
            <FadeIn direction="up" delay={0.15}>
              <GrauPreview />
            </FadeIn>
          )}
        </div>
      </section>
    </>
  );
}
