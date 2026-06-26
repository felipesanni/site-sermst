'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import {
  AlertCircle,
  ArrowRight,
  BadgeCheck,
  Building2,
  CalendarClock,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  ClipboardCheck,
  Loader2,
  ShieldCheck,
  X,
} from 'lucide-react';
import { AssinaturaContractModal } from './assinatura-contract-modal';
import { cnaeData, grauRiscoInfo, type CnaeEntry } from '@/lib/data/cnae-data';

type PlanId = 'base' | 'essencial' | 'total';

type PriceBand = {
  from: number;
  to?: number;
  monthlyPerEmployee: number;
};

type Plan = {
  id: PlanId;
  title: string;
  eyebrow: string;
  description: string;
  minimum: number;
  bands: PriceBand[];
  features: string[];
  includedItems: string[];
  bestFor: string;
};

type AddressPayload = {
  cep: string;
  logradouro: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  estado: string;
};

type CnpjLookupResponse = {
  razaoSocial: string;
  cnaeFiscal: string;
  cnaeDescricao: string;
  source: 'brasilapi' | 'receitaws';
  endereco?: AddressPayload;
};

type CnpjStatus = 'idle' | 'loading' | 'found' | 'error';

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

const employeeShortcuts = [1, 5, 10, 20, 50, 100, 300, 500, 1000];
const ATTRIBUTION_KEY = 'sermst_attribution_v1';
const FORM_STARTED_AT_KEY = 'sermst_form_started_at_v1';

const baseIncludedItems = [
  'PGR - Programa de Gerenciamento de Riscos',
  'PCMSO - Programa de Controle Médico de Saúde Ocupacional',
  'LTCAT - Laudo Técnico das Condições Ambientais de Trabalho',
  'Exames clínicos ocupacionais na sede da SERMST (exceto exames complementares)',
  'Portal do Cliente - Software de Gestão',
  'Gestão de vencimentos de periódicos',
  'Mensageria do eSocial (S-2210, S-2220, S-2221, S-2240)',
];

const essencialIncludedItems = [
  'PPP - Perfil Profissiográfico Previdenciário',
  'CAT - Comunicado de Acidente de Trabalho',
  'Curso de CIPA para o representante da empresa',
  'Consultoria em SST',
  'Apoio para auditorias e fiscalizações',
  'Avaliação dos fatores psicossociais',
];

const totalIncludedItems = [
  '5 consultas com clínico geral ao longo do ano',
  '1 palestra online ao vivo com psicóloga para a equipe',
  '1 treinamento online sobre gestão estratégica',
  '1 treinamento online sobre gestão de pessoas',
  '1 treinamento online sobre empreendedorismo',
];

const plans: Plan[] = [
  {
    id: 'base',
    eyebrow: 'Entrada organizada',
    title: 'Plano Base',
    description:
      'Para empresas que precisam organizar a documentação obrigatória, exames clínicos e rotina digital de SST.',
    minimum: 149,
    bestFor: 'Empresas pequenas, operação simples e baixa complexidade ocupacional.',
    bands: [
      { from: 2, to: 10, monthlyPerEmployee: 15 },
      { from: 11, to: 30, monthlyPerEmployee: 12 },
      { from: 31, to: 100, monthlyPerEmployee: 9 },
      { from: 101, to: 300, monthlyPerEmployee: 7 },
      { from: 301, monthlyPerEmployee: 5.5 },
    ],
    features: baseIncludedItems,
    includedItems: baseIncludedItems,
  },
  {
    id: 'essencial',
    eyebrow: 'Mais indicado',
    title: 'Plano Essencial',
    description:
      'Para empresas que querem o Base completo com PPP, CAT, CIPA, consultoria e apoio em fiscalização.',
    minimum: 229,
    bestFor: 'Empresas em crescimento, RH sem tempo e contratos com admissões recorrentes.',
    bands: [
      { from: 2, to: 10, monthlyPerEmployee: 22 },
      { from: 11, to: 30, monthlyPerEmployee: 18 },
      { from: 31, to: 100, monthlyPerEmployee: 14 },
      { from: 101, to: 300, monthlyPerEmployee: 11 },
      { from: 301, monthlyPerEmployee: 8.5 },
    ],
    features: ['Tudo do Plano Base', ...essencialIncludedItems],
    includedItems: [...baseIncludedItems, ...essencialIncludedItems],
  },
  {
    id: 'total',
    eyebrow: 'Gestão completa',
    title: 'Plano Gestão Total',
    description:
      'Para empresas que querem somar SST, saúde, liderança e desenvolvimento da equipe em um plano anual.',
    minimum: 329,
    bestFor: 'Operações com mais funcionários, múltiplas funções, fiscalização ou maior exposição trabalhista.',
    bands: [
      { from: 2, to: 10, monthlyPerEmployee: 30 },
      { from: 11, to: 30, monthlyPerEmployee: 25 },
      { from: 31, to: 100, monthlyPerEmployee: 20 },
      { from: 101, to: 300, monthlyPerEmployee: 16 },
      { from: 301, monthlyPerEmployee: 12 },
    ],
    features: ['Tudo do Plano Essencial', ...totalIncludedItems],
    includedItems: [...baseIncludedItems, ...essencialIncludedItems, ...totalIncludedItems],
  },
];

const RECOMMENDED_PLAN_ID: PlanId = 'essencial';

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  maximumFractionDigits: 0,
});

function digits(value: string) {
  return value.replace(/\D/g, '');
}

function formatCnpj(value: string) {
  const d = digits(value).slice(0, 14);
  if (d.length <= 2) return d;
  if (d.length <= 5) return `${d.slice(0, 2)}.${d.slice(2)}`;
  if (d.length <= 8) return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5)}`;
  if (d.length <= 12) return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}/${d.slice(8)}`;
  return `${d.slice(0, 2)}.${d.slice(2, 5)}.${d.slice(5, 8)}/${d.slice(8, 12)}-${d.slice(12)}`;
}

function normalizeCnaeCode(value: string | number) {
  return digits(String(value)).padStart(7, '0');
}

function findCnaeEntry(value: string) {
  const normalized = normalizeCnaeCode(value);
  return cnaeData.find((entry) => entry.codigo === normalized) ?? null;
}

function clampEmployees(value: number) {
  if (!Number.isFinite(value)) return 1;
  return Math.min(Math.max(Math.round(value), 1), 10000);
}

function calculateMonthly(plan: Plan, employees: number) {
  const normalized = clampEmployees(employees);
  let total = plan.minimum;

  for (const band of plan.bands) {
    if (normalized < band.from) continue;

    const bandEnd = band.to ?? normalized;
    const countedEmployees = Math.min(normalized, bandEnd) - band.from + 1;
    if (countedEmployees > 0) {
      total += countedEmployees * band.monthlyPerEmployee;
    }
  }

  return Math.round(total);
}

function hasAddress(address?: AddressPayload) {
  return Boolean(address?.cep || address?.logradouro || address?.bairro || address?.cidade || address?.estado);
}

function getCompanyReading(employees: number, cnaeEntry: CnaeEntry | null) {
  if (cnaeEntry) {
    const risk = grauRiscoInfo[cnaeEntry.grauRisco];
    return `CNPJ localizado: CNAE ${cnaeEntry.codigo}, ${risk.label}. O plano já segue com porte, risco e dados da empresa para contratação.`;
  }

  if (employees <= 5) {
    return 'Empresa pequena: o foco é tirar a SST do improviso e organizar o mínimo obrigatório sem inflar o contrato.';
  }

  if (employees <= 20) {
    return 'Empresa em crescimento: já faz sentido estruturar acompanhamento, vencimentos e rotina de exames, não só documentos avulsos.';
  }

  if (employees <= 75) {
    return 'Operação recorrente: a dor costuma estar em admissões, periódicos, eSocial e controle de prazos pelo RH.';
  }

  if (employees <= 300) {
    return 'Empresa média: o plano organiza governança mensal, reduz retrabalho e dá previsibilidade por função ou unidade.';
  }

  return 'Contrato corporativo: a proposta precisa considerar unidades, turnos, volume de exames, cargos críticos e implantação por fases.';
}

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

export function AssinaturaPlans() {
  const [employees, setEmployees] = useState(10);
  const [cnpj, setCnpj] = useState('');
  const [cnpjStatus, setCnpjStatus] = useState<CnpjStatus>('idle');
  const [cnpjError, setCnpjError] = useState('');
  const [cnpjInfo, setCnpjInfo] = useState<CnpjLookupResponse | null>(null);
  const [companyName, setCompanyName] = useState('');
  const [selectedPlanId, setSelectedPlanId] = useState<PlanId | null>(null);
  const [attribution, setAttribution] = useState<StoredAttribution | null>(null);
  const [conversionPage, setConversionPage] = useState('');
  const [formStartedAt, setFormStartedAt] = useState('');
  const inFlightCnpj = useRef(false);
  const lastCnpj = useRef('');

  const normalizedEmployees = clampEmployees(employees);
  const cnaeEntry = useMemo(
    () => (cnpjInfo?.cnaeFiscal ? findCnaeEntry(cnpjInfo.cnaeFiscal) : null),
    [cnpjInfo],
  );

  const pricing = useMemo(
    () =>
      plans.map((plan) => {
        const monthly = calculateMonthly(plan, normalizedEmployees);
        const annualPix = Math.round(monthly * 12 * 0.95);
        const perEmployee = Math.max(1, Math.round(monthly / normalizedEmployees));

        return {
          ...plan,
          monthly,
          annualPix,
          perEmployee,
          isRecommended: plan.id === RECOMMENDED_PLAN_ID,
        };
      }),
    [normalizedEmployees],
  );

  const selectedPlan = selectedPlanId
    ? pricing.find((plan) => plan.id === selectedPlanId) ?? null
    : null;

  useEffect(() => {
    const current = buildSnapshot();
    const hasSignal = hasAttributionSignal(current);
    let next: StoredAttribution;
    let nextFormStartedAt = String(Date.now());

    try {
      const storedRaw = window.localStorage.getItem(ATTRIBUTION_KEY);
      const stored = storedRaw ? (JSON.parse(storedRaw) as StoredAttribution) : null;

      if (stored) {
        const shouldPromoteFirstTouch = hasSignal && !hasAttributionSignal(stored.first);
        next = {
          first: shouldPromoteFirstTouch ? current : stored.first,
          last: hasSignal ? current : { ...stored.last, page: window.location.href },
        };
      } else {
        next = { first: current, last: current };
      }

      window.localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(next));
      nextFormStartedAt = window.sessionStorage.getItem(FORM_STARTED_AT_KEY) || nextFormStartedAt;
      if (!window.sessionStorage.getItem(FORM_STARTED_AT_KEY)) {
        window.sessionStorage.setItem(FORM_STARTED_AT_KEY, nextFormStartedAt);
      }
    } catch {
      next = { first: current, last: current };
    }

    setAttribution(next);
    setConversionPage(window.location.href);
    setFormStartedAt(nextFormStartedAt);
  }, []);

  async function lookupCnpj(raw: string) {
    if (raw.length !== 14 || raw === lastCnpj.current || inFlightCnpj.current) return;

    inFlightCnpj.current = true;
    lastCnpj.current = raw;
    setCnpjStatus('loading');
    setCnpjError('');
    setCnpjInfo(null);

    try {
      const response = await fetch(`/api/cnpj/${raw}`);
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data?.error || 'CNPJ não encontrado.');
      }

      const data = (await response.json()) as CnpjLookupResponse;
      setCnpjInfo(data);
      setCompanyName(data.razaoSocial || companyName);
      setCnpjStatus('found');

      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
          event: 'subscription_cnpj_lookup_success',
          cnae_codigo: data.cnaeFiscal,
          cnae_source: data.source,
        });
      }
    } catch (error) {
      setCnpjStatus('error');
      setCnpjError(error instanceof Error ? error.message : 'Não foi possível consultar este CNPJ.');
    } finally {
      inFlightCnpj.current = false;
    }
  }

  function handleCnpjChange(value: string) {
    const formatted = formatCnpj(value);
    const raw = digits(formatted);
    setCnpj(formatted);

    if (raw.length < 14) {
      if (cnpjStatus !== 'idle') {
        setCnpjStatus('idle');
        setCnpjError('');
        setCnpjInfo(null);
        lastCnpj.current = '';
      }
      return;
    }

    lookupCnpj(raw);
  }

  function clearCnpj() {
    setCnpj('');
    setCnpjStatus('idle');
    setCnpjError('');
    setCnpjInfo(null);
    setCompanyName('');
    lastCnpj.current = '';
    inFlightCnpj.current = false;
  }

  return (
    <section id="planos" className="bg-slate-50 px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 max-w-3xl">
          <span className="kicker">Calculadora de planos</span>
          <h2 className="mb-5 text-3xl font-black leading-tight text-brand-900 md:text-5xl">
            Escolha o plano, qualifique pelo CNPJ e envie a contratação
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            A quantidade de funcionários define o valor inicial. O CNPJ preenche razão social,
            CNAE, grau de risco e endereço para acelerar o pedido.
          </p>
        </div>

        <div className="mb-10 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm lg:p-8">
          <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="subscription-cnpj"
                  className="mb-3 block text-sm font-black uppercase tracking-[0.18em] text-accent-pink"
                >
                  CNPJ da empresa
                </label>
                <div className="relative">
                  <Building2 className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                  <input
                    id="subscription-cnpj"
                    type="text"
                    inputMode="numeric"
                    value={cnpj}
                    onChange={(event) => handleCnpjChange(event.target.value)}
                    placeholder="00.000.000/0001-00"
                    maxLength={18}
                    className="w-full rounded-2xl border-2 border-slate-200 bg-white py-4 pl-12 pr-12 text-base font-semibold text-brand-900 placeholder-slate-400 shadow-sm transition-all focus:border-brand-900 focus:outline-none"
                  />
                  {cnpjStatus === 'loading' ? (
                    <Loader2 className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 animate-spin text-slate-400" />
                  ) : cnpj ? (
                    <button
                      type="button"
                      onClick={clearCnpj}
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-brand-900"
                      aria-label="Limpar CNPJ"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  ) : null}
                </div>

                {cnpjStatus === 'found' && cnpjInfo ? (
                  <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                      <div>
                        <p className="font-black text-brand-900">{cnpjInfo.razaoSocial}</p>
                        <p className="mt-1 text-sm leading-relaxed text-emerald-900">
                          CNAE {cnpjInfo.cnaeFiscal}
                          {cnpjInfo.cnaeDescricao ? ` - ${cnpjInfo.cnaeDescricao}` : ''}
                          {cnaeEntry ? ` · ${grauRiscoInfo[cnaeEntry.grauRisco].label}` : ''}
                        </p>
                        {hasAddress(cnpjInfo.endereco) ? (
                          <p className="mt-1 text-sm leading-relaxed text-emerald-900">
                            Endereço encontrado para revisar no formulário de contratação.
                          </p>
                        ) : null}
                      </div>
                    </div>
                  </div>
                ) : null}

                {cnpjStatus === 'error' ? (
                  <div className="mt-4 flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                    <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
                    <p>{cnpjError || 'Não foi possível consultar este CNPJ. Você ainda pode continuar manualmente.'}</p>
                  </div>
                ) : null}

                {cnpjStatus === 'idle' && !cnpj ? (
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    Opcional, mas recomendado: o CNPJ já leva razão social, CNAE, grau de risco e endereço para o atendimento.
                  </p>
                ) : null}
              </div>

              <div>
                <label
                  htmlFor="employees"
                  className="mb-3 block text-sm font-black uppercase tracking-[0.18em] text-accent-pink"
                >
                  Quantos funcionários sua empresa possui?
                </label>

                <div className="flex items-stretch overflow-hidden rounded-2xl border border-slate-200 bg-slate-50">
                  <button
                    type="button"
                    onClick={() => setEmployees((current) => clampEmployees(current - 1))}
                    className="flex w-14 shrink-0 items-center justify-center border-r border-slate-200 bg-white text-brand-900 transition hover:bg-slate-100"
                    aria-label="Diminuir número de funcionários"
                  >
                    <ChevronDown className="h-5 w-5" />
                  </button>
                  <input
                    id="employees"
                    type="number"
                    min={1}
                    max={10000}
                    value={normalizedEmployees}
                    onChange={(event) => setEmployees(clampEmployees(Number(event.target.value)))}
                    className="min-w-0 flex-1 bg-transparent px-4 py-5 text-center text-5xl font-black text-brand-900 outline-none"
                  />
                  <button
                    type="button"
                    onClick={() => setEmployees((current) => clampEmployees(current + 1))}
                    className="flex w-14 shrink-0 items-center justify-center border-l border-slate-200 bg-white text-brand-900 transition hover:bg-slate-100"
                    aria-label="Aumentar número de funcionários"
                  >
                    <ChevronUp className="h-5 w-5" />
                  </button>
                </div>

                <p className="mt-3 text-sm font-semibold text-slate-500">
                  Simulação para {normalizedEmployees} funcionário{normalizedEmployees === 1 ? '' : 's'}.
                </p>
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                Atalhos de porte
              </p>
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-5">
                {employeeShortcuts.map((shortcut) => {
                  const isActive = shortcut === normalizedEmployees;
                  return (
                    <button
                      key={shortcut}
                      type="button"
                      onClick={() => setEmployees(shortcut)}
                      className={
                        isActive
                          ? 'rounded-xl border border-accent-pink bg-accent-pink px-3 py-3 text-sm font-black text-white shadow-lg shadow-accent-pink/20 transition-all'
                          : 'rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-sm font-black text-brand-900 transition-all hover:-translate-y-0.5 hover:border-brand-900 hover:bg-white'
                      }
                      aria-pressed={isActive}
                    >
                      {shortcut}
                    </button>
                  );
                })}
              </div>

              <div className="mt-6 rounded-2xl border border-brand-900/10 bg-slate-50 p-5">
                <p className="text-xs font-black uppercase tracking-[0.18em] text-slate-500">
                  Leitura do porte da empresa
                </p>
                <p className="mt-2 font-semibold leading-relaxed text-brand-900">
                  {getCompanyReading(normalizedEmployees, cnaeEntry)}
                </p>
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <CalendarClock className="mb-3 h-5 w-5 text-accent-pink" />
                  <p className="text-sm font-black text-brand-900">Mensal ou anual</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">Anual à vista mantém 5% de desconto na simulação.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <ClipboardCheck className="mb-3 h-5 w-5 text-accent-pink" />
                  <p className="text-sm font-black text-brand-900">Dados conferidos</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">CNAE, unidades, cargos e exames seguem no pedido.</p>
                </div>
                <div className="rounded-2xl border border-slate-200 bg-white p-4">
                  <BadgeCheck className="mb-3 h-5 w-5 text-accent-pink" />
                  <p className="text-sm font-black text-brand-900">Filiais no fluxo</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">O formulário aceita CNPJ/endereço de outras unidades.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricing.map((plan) => (
            <article
              key={plan.id}
              className={
                plan.isRecommended
                  ? 'relative flex h-full flex-col rounded-[2rem] border-2 border-accent-pink bg-white p-8 shadow-2xl shadow-accent-pink/10'
                  : 'flex h-full flex-col rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm'
              }
            >
              {plan.isRecommended ? (
                <div className="absolute -top-4 left-8 rounded-full bg-accent-pink px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white shadow-lg">
                  Recomendado
                </div>
              ) : null}

              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <span className="mb-3 block text-xs font-black uppercase tracking-[0.18em] text-accent-pink">
                    {plan.eyebrow}
                  </span>
                  <h3 className="text-3xl font-black text-brand-900">{plan.title}</h3>
                </div>
                <div
                  className={
                    plan.isRecommended
                      ? 'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-pink text-white'
                      : 'flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-slate-50 text-brand-900'
                  }
                >
                  <ShieldCheck className="h-6 w-6" />
                </div>
              </div>

              <p className="mb-6 leading-relaxed text-slate-600">{plan.description}</p>

              <div className="mb-6 border-y border-slate-100 py-6">
                <p className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                  Simulação mensal
                </p>
                <p className="mt-2 text-4xl font-black text-brand-900">
                  {formatter.format(plan.monthly)}
                  <span className="ml-1 text-base font-bold text-slate-500">/mês</span>
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
                  Média de {formatter.format(plan.perEmployee)} por funcionário. Anual à vista:{' '}
                  <strong className="text-brand-900">{formatter.format(plan.annualPix)}</strong>.
                </p>
              </div>

              <p className="mb-6 rounded-2xl bg-slate-50 p-4 text-sm font-semibold leading-relaxed text-slate-700">
                {plan.bestFor}
              </p>

              <ul className="mb-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm font-medium leading-relaxed text-slate-700">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-pink" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
                <button
                  type="button"
                  onClick={() => setSelectedPlanId(plan.id)}
                  className={plan.isRecommended ? 'btn-primary-safe w-full' : 'btn-outline-safe w-full'}
                  aria-label={`Contratar o ${plan.title}`}
                >
                  Contratar agora
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedPlan ? (
        <AssinaturaContractModal
          key={`${selectedPlan.id}-${normalizedEmployees}`}
          plan={selectedPlan}
          employees={normalizedEmployees}
          initialCnpj={cnpj}
          initialCnpjInfo={cnpjInfo}
          initialCompanyName={companyName}
          attribution={attribution}
          conversionPage={conversionPage}
          formStartedAt={formStartedAt}
          onClose={() => setSelectedPlanId(null)}
        />
      ) : null}
    </section>
  );
}
