'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import type { CnaeEntry } from '@/lib/data/cnae-data';

const ratPorGrau: Record<number, string> = { 1: '1%', 2: '2%', 3: '3%', 4: '3% + FAP' };

const grauBadge: Record<number, string> = {
  1: 'bg-emerald-100 text-emerald-800',
  2: 'bg-yellow-100 text-yellow-800',
  3: 'bg-orange-100 text-orange-800',
  4: 'bg-red-100 text-red-800',
};

const PAGE_SIZE = 100;
const CALC_URL = '/rh/calculadora-cnae-grau-de-risco';

interface CnaeTableProps {
  data: CnaeEntry[];
}

export function CnaeTable({ data }: CnaeTableProps) {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase().replace(/[.\-/]/g, '');
    if (!q) return data;
    return data.filter((entry) => {
      const code = entry.codigo.replace(/[.\-/]/g, '');
      return (
        code.startsWith(q) ||
        entry.descricao.toLowerCase().includes(q) ||
        entry.setor.toLowerCase().includes(q)
      );
    });
  }, [query, data]);

  const handleQuery = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  const isSearching = query.trim().length > 0;
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paginated = isSearching
    ? filtered
    : filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  useEffect(() => {
    const searchTerm = query.trim();
    if (searchTerm.length < 2) return;

    const timeout = window.setTimeout(() => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'cnae_list_search',
        search_term: searchTerm,
        result_count: filtered.length,
      });
    }, 500);

    return () => window.clearTimeout(timeout);
  }, [filtered.length, query]);

  const trackCalculatorClick = (placement: string) => {
    if (typeof window === 'undefined') return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'cnae_list_to_calculator',
      placement,
      has_search: isSearching,
      result_count: filtered.length,
    });
  };

  return (
    <div className="not-prose space-y-6">

      {/* ── CTA antes da tabela ── */}
      <div className="flex flex-col gap-4 rounded-2xl border border-blue-200 bg-blue-50 p-5 sm:flex-row sm:items-center">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-black text-blue-900">
            Consulte sua atividade. Depois confirme a situação real da empresa.
          </p>
          <p className="mt-1 text-xs text-blue-700">
            Uma empresa pode ter vários CNAEs. Use a tabela como referência e consulte seu CNPJ na calculadora para identificar o CNAE principal oficial e obter referências iniciais de grau de risco, CIPA, SESMT e NRs relevantes.
          </p>
        </div>
        <Link
          href={CALC_URL}
          onClick={() => trackCalculatorClick('table_intro')}
          className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-bold text-white hover:bg-blue-700 transition-colors whitespace-nowrap"
        >
          Consultar meu CNPJ
          <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>

      {/* ── Busca ── */}
      <div className="relative">
        <input
          type="search"
          placeholder="Buscar por código, atividade ou setor…"
          value={query}
          onChange={(e) => handleQuery(e.target.value)}
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 pl-10 text-sm shadow-sm focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200"
        />
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>

      {/* ── Contador ── */}
      <p className="text-xs text-slate-500">
        {isSearching
          ? `${filtered.length} resultado${filtered.length !== 1 ? 's' : ''} para "${query}"`
          : `${data.length.toLocaleString('pt-BR')} subclasses — página ${page} de ${totalPages}`}
      </p>

      {isSearching && filtered.length > 0 && (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 p-5">
          <p className="text-sm font-black text-rose-950">
            Encontrou sua atividade? Agora confirme o CNAE principal cadastrado no CNPJ.
          </p>
          <p className="mt-1 text-xs leading-relaxed text-rose-800">
            O resultado abaixo é uma referência. Para descobrir as obrigações reais da empresa, comece uma consulta nova pelo CNPJ. A calculadora identifica o cadastro oficial e mostra o enquadramento completo.
          </p>
          <Link
            href={CALC_URL}
            onClick={() => trackCalculatorClick('search_results')}
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-rose-700 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-rose-800"
          >
            Confirmar CNAE pelo CNPJ
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      )}

      {/* ── Tabela ── */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 shadow-sm">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-slate-900 text-white">
              <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wider whitespace-nowrap">Código</th>
              <th className="px-4 py-3 text-left text-xs font-black uppercase tracking-wider">Atividade econômica</th>
              <th className="hidden px-4 py-3 text-left text-xs font-black uppercase tracking-wider sm:table-cell">Setor</th>
              <th className="px-4 py-3 text-center text-xs font-black uppercase tracking-wider whitespace-nowrap">Grau</th>
              <th className="px-4 py-3 text-center text-xs font-black uppercase tracking-wider whitespace-nowrap">RAT ref.*</th>
            </tr>
          </thead>
          <tbody>
            {paginated.length === 0 ? (
              <tr>
                <td colSpan={5} className="px-4 py-8 text-center text-slate-400 text-sm">
                  Nenhum resultado para &ldquo;{query}&rdquo;.
                </td>
              </tr>
            ) : (
              paginated.map((entry, i) => (
                <tr key={entry.codigo} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                  <td className="px-4 py-3 font-mono text-xs font-bold text-slate-700 whitespace-nowrap">{entry.codigo}</td>
                  <td className="px-4 py-3 text-slate-800 leading-snug">{entry.descricao}</td>
                  <td className="hidden px-4 py-3 text-slate-500 sm:table-cell text-xs">{entry.setor}</td>
                  <td className="px-4 py-3 text-center">
                    <span className={`inline-block rounded-lg px-2.5 py-1 text-xs font-black ${grauBadge[entry.grauRisco]}`}>
                      {entry.grauRisco}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center text-xs font-bold text-slate-700 whitespace-nowrap">{ratPorGrau[entry.grauRisco]}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <p className="text-xs leading-relaxed text-slate-500">
        * A faixa de RAT é uma referência inicial. A alíquota RAT/GILRAT deve ser confirmada pela atividade econômica preponderante e pelo FAP da empresa.
      </p>

      {/* ── CTA depois da tabela ── */}
      <div className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 sm:flex-row sm:items-center">
        <p className="flex-1 text-sm text-slate-700">
          <span className="font-bold">Encontrou uma atividade parecida com a sua?</span> Confirme o CNAE principal oficial pelo CNPJ antes de avaliar grau de risco, CIPA, SESMT e NRs do setor.
        </p>
        <Link
          href={CALC_URL}
          onClick={() => trackCalculatorClick('table_footer')}
          className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-4 py-2.5 text-sm font-bold text-white hover:bg-slate-700 transition-colors whitespace-nowrap"
        >
          Consultar pelo CNPJ →
        </Link>
      </div>

      {/* ── Paginação ── */}
      {!isSearching && totalPages > 1 && (
        <div className="flex items-center justify-between gap-2">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            ← Anterior
          </button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => i + 1)
              .filter((p) => p === 1 || p === totalPages || Math.abs(p - page) <= 2)
              .reduce<(number | '...')[]>((acc, p, idx, arr) => {
                if (idx > 0 && p - (arr[idx - 1] as number) > 1) acc.push('...');
                acc.push(p);
                return acc;
              }, [])
              .map((p, idx) =>
                p === '...' ? (
                  <span key={`ellipsis-${idx}`} className="px-2 py-2 text-slate-400 text-sm">…</span>
                ) : (
                  <button
                    key={p}
                    onClick={() => setPage(p as number)}
                    className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                      page === p ? 'bg-slate-900 text-white' : 'border border-slate-200 text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {p}
                  </button>
                )
              )}
          </div>

          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Próxima →
          </button>
        </div>
      )}
    </div>
  );
}
