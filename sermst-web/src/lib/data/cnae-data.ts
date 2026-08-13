import cnaeFullJson from './cnae-subclasses-full.json';
import cnaeRatJson from './cnae-rat-gilrat.json';

/**
 * Base completa de subclasses CNAE com duas referências independentes:
 * grau de risco oficial da NR-04 e RAT/GILRAT do Anexo V do Decreto 3.048.
 *
 * Fontes primárias usadas na geração desta base:
 * - IBGE / CONCLA: lista completa de subclasses CNAE 2.3
 * - NR-04, Quadro I (gov.br): relação oficial de classes CNAE x grau de risco
 * - Anexo V do Decreto 3.048/1999: alíquota RAT/GILRAT por subclasse CNAE
 *
 * Regra aplicada:
 * - a NR-04 define o grau de risco por CLASSE CNAE (5 dígitos)
 * - cada SUBCLASSE (7 dígitos) herda o grau da sua classe oficial
 * - o RAT/GILRAT é obtido separadamente pelo código exato da SUBCLASSE
 */

export type RatGilrat = 1 | 2 | 3;

export interface CnaeEntry {
  codigo: string;
  descricao: string;
  setor: string;
  grauRisco: 1 | 2 | 3 | 4;
  ratGilrat?: RatGilrat;
  nrsDestaque: string[];
  observacao?: string;
  classeCodigo?: string;
  secaoCodigo?: string;
  secaoDescricao?: string;
}

interface RawCnaeEntry extends CnaeEntry {
  observacao: string;
}

type RawRatBase = {
  meta: {
    sourceUrl: string;
    legalBasis: string;
    cnaeVersion: string;
    verifiedAt: string;
  };
  aliquotas: Record<string, RatGilrat>;
};

const rawCnaeData = cnaeFullJson as RawCnaeEntry[];
const ratBase = cnaeRatJson as RawRatBase;

export const ratGilratMeta = ratBase.meta;

export const cnaeData: CnaeEntry[] = rawCnaeData
  .map((entry) => ({
    ...entry,
    ratGilrat: ratBase.aliquotas[entry.codigo],
    observacao: entry.observacao || undefined,
  }))
  .sort((a, b) => a.codigo.localeCompare(b.codigo));

export function normalizeCnaeSearchText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}

export function matchesCnaeSearch(entry: CnaeEntry, query: string) {
  const normalizedQuery = normalizeCnaeSearchText(query);
  if (!normalizedQuery) return true;

  const codeQuery = query.replace(/\D/g, '');
  if (codeQuery.length >= 2 && entry.codigo.startsWith(codeQuery)) return true;

  const searchableText = normalizeCnaeSearchText(`${entry.descricao} ${entry.setor}`);
  return normalizedQuery.split(/\s+/).every((token) => searchableText.includes(token));
}

export function buscarCnae(query: string): CnaeEntry[] {
  const normalizedQuery = normalizeCnaeSearchText(query);
  if (normalizedQuery.length < 2) return [];

  return cnaeData
    .filter((entry) => matchesCnaeSearch(entry, query))
    .slice(0, 12);
}

export const grauRiscoInfo = {
  1: {
    label: 'Grau 1 - Baixo',
    cor: 'green',
    sesmt: 'SESMT interno obrigatório a partir de 501 empregados',
    descricao:
      'Atividades com menor exposição a riscos ocupacionais, comuns em rotinas administrativas, escritórios e operações leves.',
    examesPeriodicos:
      'A periodicidade dos exames deve seguir os riscos ocupacionais e o planejamento médico definido no PCMSO.',
  },
  2: {
    label: 'Grau 2 - Médio',
    cor: 'yellow',
    sesmt: 'SESMT interno obrigatório a partir de 501 empregados',
    descricao:
      'Atividades com exposição moderada a riscos físicos, químicos, biológicos ou ergonômicos, exigindo controle ocupacional mais frequente.',
    examesPeriodicos:
      'A periodicidade dos exames deve seguir os riscos ocupacionais e o planejamento médico definido no PCMSO.',
  },
  3: {
    label: 'Grau 3 - Alto',
    cor: 'orange',
    sesmt: 'SESMT interno obrigatório a partir de 101 empregados',
    descricao:
      'Atividades com risco ocupacional relevante, geralmente ligadas a saúde, logística, construção, indústria e operações com maior exposição.',
    examesPeriodicos: 'A periodicidade dos exames deve seguir os riscos ocupacionais e o planejamento médico definido no PCMSO.',
  },
  4: {
    label: 'Grau 4 - Muito alto',
    cor: 'red',
    sesmt: 'SESMT interno obrigatório a partir de 50 empregados, com composição mais exigente',
    descricao:
      'Atividades com grau de risco mais alto, que exigem controles compatíveis com os perigos e as exposições da operação.',
    examesPeriodicos:
      'A periodicidade dos exames deve seguir os riscos ocupacionais e o planejamento médico definido no PCMSO.',
  },
} as const;

export const nrsUniversais = ['NR-01 (PGR)', 'NR-07 (PCMSO)', 'NR-09', 'NR-28'];
