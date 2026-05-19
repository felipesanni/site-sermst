'use client';

import { useState, useRef, useEffect } from 'react';
import {
  Search,
  ArrowRight,
  ShieldCheck,
  AlertTriangle,
  AlertOctagon,
  ShieldAlert,
  X,
  Building2,
  Loader2,
} from 'lucide-react';
import { buscarCnae, cnaeData, grauRiscoInfo, type CnaeEntry } from '@/lib/data/cnae-data';
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

// ── Visual config por grau ───────────────────────────────────────────────────

const grauConfig = {
  1: {
    icon: ShieldCheck,
    bg: 'bg-emerald-50',
    border: 'border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-800',
    bar: 'bg-emerald-500',
    text: 'text-emerald-700',
    rat: '1%',
  },
  2: {
    icon: ShieldCheck,
    bg: 'bg-yellow-50',
    border: 'border-yellow-200',
    badge: 'bg-yellow-100 text-yellow-800',
    bar: 'bg-yellow-500',
    text: 'text-yellow-700',
    rat: '2%',
  },
  3: {
    icon: AlertTriangle,
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    badge: 'bg-orange-100 text-orange-800',
    bar: 'bg-orange-500',
    text: 'text-orange-700',
    rat: '3%',
  },
  4: {
    icon: AlertOctagon,
    bg: 'bg-red-50',
    border: 'border-red-200',
    badge: 'bg-red-100 text-red-800',
    bar: 'bg-red-500',
    text: 'text-red-700',
    rat: '3% + FAP',
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
}

function ResultCard({ entry, razaoSocial }: ResultCardProps) {
  const info = grauRiscoInfo[entry.grauRisco];
  const cfg = grauConfig[entry.grauRisco];

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
          <p className="mb-1 text-[11px] font-black uppercase tracking-wider text-slate-500">Alíquota RAT</p>
          <p className={`text-2xl font-black ${cfg.text}`}>{cfg.rat}</p>
          <p className="mt-1 text-xs text-slate-500">sobre a folha de pagamento</p>
        </div>
        <div className="rounded-2xl border border-white/60 bg-white/70 p-5">
          <p className="mb-1 text-[11px] font-black uppercase tracking-wider text-slate-500">SESMT obrigatório</p>
          <p className="text-sm font-semibold leading-snug text-brand-900">{info.sesmt}</p>
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

      {/* CTA */}
      <a
        href={`https://wa.me/5511915146447?text=Quero revisar as obrigações SST do CNAE ${entry.codigo} (${entry.descricao}) — Grau ${entry.grauRisco}${razaoSocial ? ` — Empresa: ${razaoSocial}` : ''}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex w-full items-center justify-center gap-3 rounded-2xl bg-brand-900 px-8 py-5 text-base font-black text-white shadow-lg transition-all hover:bg-brand-900/90 hover:shadow-xl sm:w-auto"
        onClick={() => {
          if (typeof window !== 'undefined') {
            (window as any).dataLayer = (window as any).dataLayer || [];
            (window as any).dataLayer.push({
              event: 'cnae_calculator_cta_click',
              cnae_codigo: entry.codigo,
              cnae_grau_risco: entry.grauRisco,
            });
          }
        }}
      >
        Revisar obrigações SST deste CNAE
        <ArrowRight className="h-5 w-5" />
      </a>

      <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-widest text-slate-400">
        *Consulta baseada no Quadro I da NR-04 e NR-07. Confirme com profissional habilitado.
      </p>
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
              <p className="text-xs leading-snug text-slate-600">{i.label.split(' — ')[1]}</p>
              <p className={`mt-2 text-lg font-black ${c.text}`}>RAT {c.rat}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// ── Componente principal ─────────────────────────────────────────────────────

type Tab = 'cnae' | 'cnpj';

export function CnaeCalculator() {
  const [tab, setTab] = useState<Tab>('cnae');

  // ── Estado aba CNAE ──
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<CnaeEntry[]>([]);
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<CnaeEntry | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
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
    setQuery(`${entry.codigo} — ${entry.descricao}`);
    setOpen(false);
    if (typeof window !== 'undefined') {
      (window as any).dataLayer = (window as any).dataLayer || [];
      (window as any).dataLayer.push({ event: 'cnae_calculator_result', cnae_codigo: entry.codigo, cnae_grau_risco: entry.grauRisco });
    }
  }

  function handleClearCnae() {
    setQuery('');
    setSelected(null);
    setResults([]);
    setOpen(false);
    inputRef.current?.focus();
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
      const r = await fetch(`https://brasilapi.com.br/api/cnpj/v1/${raw}`);
      if (!r.ok) throw new Error('not_found');
      const data = await r.json();

      const empresa = data?.razao_social ?? '';
      const codigoCnae = data?.cnae_fiscal != null ? cnaeToStr(data.cnae_fiscal) : '';
      const descCnae = data?.cnae_fiscal_descricao ?? '';

      setCnpjEmpresa(empresa);
      setCnpjCnaeStr(codigoCnae);
      setCnpjCnaeDesc(descCnae);

      // Tenta encontrar na base local
      const entry = codigoCnae ? findByCodigo(codigoCnae) : undefined;
      if (entry) {
        setCnpjEntry(entry);
        setCnpjStatus('found');
        if (typeof window !== 'undefined') {
          (window as any).dataLayer = (window as any).dataLayer || [];
          (window as any).dataLayer.push({ event: 'cnae_calculator_cnpj_result', cnae_codigo: entry.codigo, cnae_grau_risco: entry.grauRisco });
        }
      } else {
        setCnpjStatus('not_found');
      }
    } catch {
      setCnpjStatus('error');
    } finally {
      inFlight.current = false;
    }
  }

  function handleCNPJChange(v: string) {
    const formatted = fmtCNPJ(v);
    setCnpj(formatted);
    const raw = digits(formatted);
    if (raw.length < 14) {
      // Reset parcial enquanto digita
      if (cnpjStatus !== 'idle') {
        setCnpjStatus('idle');
        setCnpjEntry(null);
        setCnpjEmpresa('');
        lastCnpj.current = '';
      }
    } else {
      lookupCNPJ(raw);
    }
  }

  function handleClearCnpj() {
    setCnpj('');
    setCnpjStatus('idle');
    setCnpjEntry(null);
    setCnpjEmpresa('');
    setCnpjCnaeStr('');
    setCnpjCnaeDesc('');
    lastCnpj.current = '';
    inFlight.current = false;
  }

  function switchTab(t: Tab) {
    setTab(t);
    // Limpa estado da aba que saiu
    if (t === 'cnae') {
      handleClearCnpj();
    } else {
      handleClearCnae();
    }
  }

  const hasResult = tab === 'cnae' ? !!selected : cnpjStatus === 'found' && !!cnpjEntry;

  return (
    <section className="overflow-hidden bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <FadeIn direction="up">
          {/* Header */}
          <div className="mb-10 text-center">
            <span className="mb-4 inline-block rounded-full bg-brand-900/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-brand-900">
              Ferramenta gratuita
            </span>
            <h2 className="mb-3 text-3xl font-black leading-tight tracking-tighter text-brand-900 md:text-4xl">
              Calculadora CNAE × Grau de Risco
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              Descubra o grau de risco, as obrigações de SST e a alíquota de RAT da sua empresa — pesquisando pelo código CNAE ou pelo CNPJ.
            </p>
          </div>

          {/* Tabs */}
          <div className="mx-auto mb-6 flex max-w-2xl rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
            <button
              onClick={() => switchTab('cnae')}
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-black uppercase tracking-wide transition-all ${
                tab === 'cnae'
                  ? 'bg-brand-900 text-white shadow'
                  : 'text-slate-500 hover:text-brand-900'
              }`}
            >
              <Search className="h-4 w-4" />
              Código ou nome
            </button>
            <button
              onClick={() => switchTab('cnpj')}
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-black uppercase tracking-wide transition-all ${
                tab === 'cnpj'
                  ? 'bg-brand-900 text-white shadow'
                  : 'text-slate-500 hover:text-brand-900'
              }`}
            >
              <Building2 className="h-4 w-4" />
              CNPJ da empresa
            </button>
          </div>

          {/* ── Aba CNAE ── */}
          {tab === 'cnae' && (
            <div className="mx-auto max-w-2xl" ref={wrapperRef}>
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    if (selected) setSelected(null);
                  }}
                  onFocus={() => results.length > 0 && setOpen(true)}
                  placeholder="Ex: 4711301, restaurante, construção civil, TI..."
                  className="w-full rounded-2xl border-2 border-slate-200 bg-white py-4 pl-12 pr-12 text-base text-brand-900 placeholder-slate-400 shadow-sm transition-all focus:border-brand-900 focus:outline-none"
                />
                {query && (
                  <button
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
                            <p className="text-xs text-slate-500">{entry.codigo} · {entry.setor}</p>
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
            </div>
          )}

          {/* ── Aba CNPJ ── */}
          {tab === 'cnpj' && (
            <div className="mx-auto max-w-2xl">
              <div className="relative">
                <Building2 className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  inputMode="numeric"
                  value={cnpj}
                  onChange={(e) => handleCNPJChange(e.target.value)}
                  placeholder="00.000.000/0001-00"
                  maxLength={18}
                  className="w-full rounded-2xl border-2 border-slate-200 bg-white py-4 pl-12 pr-12 text-base text-brand-900 placeholder-slate-400 shadow-sm transition-all focus:border-brand-900 focus:outline-none"
                />
                {cnpj && (
                  <button
                    onClick={handleClearCnpj}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full p-1 text-slate-400 transition-colors hover:bg-slate-100 hover:text-brand-900"
                    aria-label="Limpar"
                  >
                    <X className="h-4 w-4" />
                  </button>
                )}
              </div>

              {/* Status do CNPJ */}
              {cnpjStatus === 'loading' && (
                <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Consultando Receita Federal...
                </div>
              )}
              {cnpjStatus === 'error' && (
                <p className="mt-3 text-center text-sm text-red-600">
                  Não foi possível consultar este CNPJ. Verifique o número e tente novamente.
                </p>
              )}
              {cnpjStatus === 'not_found' && (
                <div className="mt-4 rounded-2xl border border-orange-200 bg-orange-50 p-5 text-center">
                  {cnpjEmpresa && (
                    <p className="mb-1 font-semibold text-brand-900">{cnpjEmpresa}</p>
                  )}
                  <p className="text-sm text-slate-700">
                    CNAE principal: <strong>{cnpjCnaeStr}</strong>
                    {cnpjCnaeDesc && ` — ${cnpjCnaeDesc}`}
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    Este CNAE ainda não está na nossa base detalhada.{' '}
                    <a
                      href="https://wa.me/5511915146447?text=Quero consultar o grau de risco do CNAE da minha empresa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-brand-900 underline"
                    >
                      Fale com a SERMST
                    </a>{' '}
                    para uma análise completa.
                  </p>
                </div>
              )}
              {cnpjStatus === 'idle' && !cnpj && (
                <p className="mt-3 text-center text-sm text-slate-500">
                  Digite o CNPJ — o sistema consulta a Receita e preenche o CNAE automaticamente.
                </p>
              )}
            </div>
          )}
        </FadeIn>

        {/* ── Card de resultado ── */}
        {hasResult && (
          <FadeIn direction="up" delay={0.1}>
            {tab === 'cnae' && selected && <ResultCard entry={selected} />}
            {tab === 'cnpj' && cnpjEntry && (
              <ResultCard entry={cnpjEntry} razaoSocial={cnpjEmpresa || undefined} />
            )}
          </FadeIn>
        )}

        {/* ── Preview de graus (estado inicial) ── */}
        {!hasResult && cnpjStatus !== 'loading' && (
          <FadeIn direction="up" delay={0.15}>
            <GrauPreview />
          </FadeIn>
        )}
      </div>
    </section>
  );
}
  const hasResult = tab === 'cnae' ? !!selected : cnpjStatus === 'found' && !!cnpjEntry;

  return (
    <section className="overflow-hidden bg-slate-50 py-20">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <FadeIn direction="up">
          {/* Header */}
          <div className="mb-10 text-center">
            <span className="mb-4 inline-block rounded-full bg-brand-900/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-brand-900">
              Ferramenta gratuita
            </span>
            <h2 className="mb-3 text-3xl font-black leading-tight tracking-tighter text-brand-900 md:text-4xl">
              Calculadora CNAE × Grau de Risco
            </h2>
            <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-600 md:text-lg">
              Descubra o grau de risco, as obrigações de SST e a alíquota de RAT da sua empresa — pesquisando pelo código CNAE ou pelo CNPJ.
            </p>
          </div>

          {/* Tabs */}
          <div className="mx-auto mb-6 flex max-w-2xl rounded-2xl border border-slate-200 bg-white p-1.5 shadow-sm">
            <button
              onClick={() => switchTab('cnae')}
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-black uppercase tracking-wide transition-all ${
                tab === 'cnae'
                  ? 'bg-brand-900 text-white shadow'
                  : 'text-slate-500 hover:text-brand-900'
              }`}
            >
              <Search className="h-4 w-4" />
              Código ou nome
            </button>
            <button
              onClick={() => switchTab('cnpj')}
              className={`flex flex-1 items-center justify-center gap-2 rounded-xl py-3 text-sm font-black uppercase tracking-wide transition-all ${
                tab === 'cnpj'
                  ? 'bg-brand-900 text-white shadow'
                  : 'text-slate-500 hover:text-brand-900'
              }`}
            >
              <Building2 className="h-4 w-4" />
              CNPJ da empresa
            </button>
          </div>

          {/* ── Aba CNAE ── */}
          {tab === 'cnae' && (
            <div className="mx-auto max-w-2xl" ref={wrapperRef}>
              <div className="relative">
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    if (selected) setSelected(null);
                  }}
                  onFocus={() => results.length > 0 && setOpen(true)}
                  placeholder="Ex: 4711301, restaurante, construção civil, TI..."
                  className="w-full rounded-2xl border-2 border-slate-200 bg-white py-4 pl-12 pr-12 text-base text-brand-900 placeholder-slate-400 shadow-sm transition-all focus:border-brand-900 focus:outline-none"
                />
                {query && (
                  <button
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
                            <p className="text-xs text-slate-500">{entry.codigo} · {entry.setor}</p>
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
            </div>
          )}

          {/* ── Aba CNPJ ── */}
          {tab === 'cnpj' && (
            <div className="mx-auto max-w-2xl">
              <div className="relative">
                <Building2 className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  inputMode="numeric"
                  value={cnpj}
                  onChange={(e) => handleCNPJChange(e.target.value)}
                  placeholder="00.000.000/0001-00"
                  maxLength={18}
                  className="w-full rounded-2xl border-2 border-slate-200 bg-white py-4 pl-12 pr-12 text-base text-brand-900 placeholder-slate-400 shadow-sm transition-all focus:border-brand-900 focus:outline-none"
                />
                {cnpj && (
                  <button
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
                <p className="mt-3 text-center text-sm text-red-600">
                  Não foi possível consultar este CNPJ. Verifique o número e tente novamente.
                </p>
              )}
              {cnpjStatus === 'not_found' && (
                <div className="mt-4 rounded-2xl border border-orange-200 bg-orange-50 p-5 text-center">
                  {cnpjEmpresa && (
                    <p className="mb-1 font-semibold text-brand-900">{cnpjEmpresa}</p>
                  )}
                  <p className="text-sm text-slate-700">
                    CNAE principal: <strong>{cnpjCnaeStr}</strong>
                    {cnpjCnaeDesc && ` — ${cnpjCnaeDesc}`}
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    Este CNAE ainda não está na nossa base detalhada.{' '}
                    <a
                      href="https://wa.me/5511915146447?text=Quero consultar o grau de risco do CNAE da minha empresa"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-brand-900 underline"
                    >
                      Fale com a SERMST
                    </a>{' '}
                    para uma análise completa.
                  </p>
                </div>
              )}
              {cnpjStatus === 'idle' && !cnpj && (
                <p className="mt-3 text-center text-sm text-slate-500">
                  Digite o CNPJ — o sistema consulta a Receita e preenche o CNAE automaticamente.
                </p>
              )}
            </div>
          )}
        </FadeIn>

        {/* ── Card de resultado ── */}
        {hasResult && (
          <FadeIn direction="up" delay={0.1}>
            {tab === 'cnae' && selected && <ResultCard entry={selected} />}
            {tab === 'cnpj' && cnpjEntry && (
              <ResultCard entry={cnpjEntry} razaoSocial={cnpjEmpresa || undefined} />
            )}
          </FadeIn>
        )}

        {/* ── Preview de graus (estado inicial) ── */}
        {!hasResult && cnpjStatus !== 'loading' && (
          <FadeIn direction="up" delay={0.15}>
            <GrauPreview />
          </FadeIn>
        )}
      </div>
    </section>
  );
}

      </div>
    </section>
  );
}
