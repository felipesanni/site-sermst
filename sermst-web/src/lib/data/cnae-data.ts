import cnaeFullJson from './cnae-subclasses-full.json';

/**
 * Base completa de subclasses CNAE com grau de risco oficial da NR-04.
 *
 * Fontes primárias usadas na geração desta base:
 * - IBGE / CONCLA: lista completa de subclasses CNAE 2.3
 * - NR-04, Quadro I (gov.br): relação oficial de classes CNAE x grau de risco
 *
 * Regra aplicada:
 * - a NR-04 define o grau de risco por CLASSE CNAE (5 dígitos)
 * - cada SUBCLASSE (7 dígitos) herda o grau da sua classe oficial
 */

export interface CnaeEntry {
  codigo: string;
  descricao: string;
  setor: string;
  grauRisco: 1 | 2 | 3 | 4;
  nrsDestaque: string[];
  observacao?: string;
  classeCodigo?: string;
  secaoCodigo?: string;
  secaoDescricao?: string;
}

interface RawCnaeEntry extends CnaeEntry {
  observacao: string;
}

const rawCnaeData = cnaeFullJson as RawCnaeEntry[];

export const cnaeData: CnaeEntry[] = rawCnaeData
  .map((entry) => ({
    ...entry,
    observacao: entry.observacao || undefined,
  }))
  .sort((a, b) => a.codigo.localeCompare(b.codigo));

export function buscarCnae(query: string): CnaeEntry[] {
  const q = query.trim().toLowerCase().replace(/[.\-\/]/g, '');
  if (!q || q.length < 2) return [];

  return cnaeData
    .filter((entry) => {
      const code = entry.codigo.replace(/[.\-\/]/g, '');
      return (
        code.startsWith(q) ||
        entry.descricao.toLowerCase().includes(q) ||
        entry.setor.toLowerCase().includes(q)
      );
    })
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
