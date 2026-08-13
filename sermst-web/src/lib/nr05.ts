export type GrauRisco = 1 | 2 | 3 | 4;

type Nr05Bracket = {
  min: number;
  max: number;
  efetivos?: number;
  suplentes?: number;
};

type CipaCounts = {
  efetivos: number;
  suplentes: number;
};

export type Nr05Result =
  | {
      kind: 'cipa';
      faixa: string;
      empregados: CipaCounts;
      empregador: CipaCounts;
      total: CipaCounts;
      observacao: string;
    }
  | {
      kind: 'representante';
      observacao: string;
    };

const NR05_BRACKETS: Nr05Bracket[] = [
  { min: 0, max: 19 },
  { min: 20, max: 29 },
  { min: 30, max: 50 },
  { min: 51, max: 80 },
  { min: 81, max: 100 },
  { min: 101, max: 120 },
  { min: 121, max: 140 },
  { min: 141, max: 300 },
  { min: 301, max: 500 },
  { min: 501, max: 1000 },
  { min: 1001, max: 2500 },
  { min: 2501, max: 5000 },
  { min: 5001, max: 10000 },
];

const NR05_TABLE: Record<GrauRisco, Nr05Bracket[]> = {
  1: [
    { min: 0, max: 19 },
    { min: 20, max: 29 },
    { min: 30, max: 50 },
    { min: 51, max: 80 },
    { min: 81, max: 100, efetivos: 1, suplentes: 1 },
    { min: 101, max: 120, efetivos: 1, suplentes: 1 },
    { min: 121, max: 140, efetivos: 1, suplentes: 1 },
    { min: 141, max: 300, efetivos: 1, suplentes: 1 },
    { min: 301, max: 500, efetivos: 2, suplentes: 2 },
    { min: 501, max: 1000, efetivos: 4, suplentes: 3 },
    { min: 1001, max: 2500, efetivos: 5, suplentes: 4 },
    { min: 2501, max: 5000, efetivos: 6, suplentes: 5 },
    { min: 5001, max: 10000, efetivos: 8, suplentes: 6 },
  ],
  2: [
    { min: 0, max: 19 },
    { min: 20, max: 29 },
    { min: 30, max: 50 },
    { min: 51, max: 80, efetivos: 1, suplentes: 1 },
    { min: 81, max: 100, efetivos: 1, suplentes: 1 },
    { min: 101, max: 120, efetivos: 2, suplentes: 1 },
    { min: 121, max: 140, efetivos: 2, suplentes: 1 },
    { min: 141, max: 300, efetivos: 3, suplentes: 2 },
    { min: 301, max: 500, efetivos: 4, suplentes: 3 },
    { min: 501, max: 1000, efetivos: 5, suplentes: 4 },
    { min: 1001, max: 2500, efetivos: 6, suplentes: 5 },
    { min: 2501, max: 5000, efetivos: 8, suplentes: 6 },
    { min: 5001, max: 10000, efetivos: 10, suplentes: 8 },
  ],
  3: [
    { min: 0, max: 19 },
    { min: 20, max: 29, efetivos: 1, suplentes: 1 },
    { min: 30, max: 50, efetivos: 1, suplentes: 1 },
    { min: 51, max: 80, efetivos: 2, suplentes: 1 },
    { min: 81, max: 100, efetivos: 2, suplentes: 1 },
    { min: 101, max: 120, efetivos: 2, suplentes: 1 },
    { min: 121, max: 140, efetivos: 3, suplentes: 2 },
    { min: 141, max: 300, efetivos: 4, suplentes: 2 },
    { min: 301, max: 500, efetivos: 5, suplentes: 4 },
    { min: 501, max: 1000, efetivos: 6, suplentes: 4 },
    { min: 1001, max: 2500, efetivos: 8, suplentes: 6 },
    { min: 2501, max: 5000, efetivos: 10, suplentes: 8 },
    { min: 5001, max: 10000, efetivos: 12, suplentes: 8 },
  ],
  4: [
    { min: 0, max: 19 },
    { min: 20, max: 29, efetivos: 1, suplentes: 1 },
    { min: 30, max: 50, efetivos: 2, suplentes: 1 },
    { min: 51, max: 80, efetivos: 3, suplentes: 2 },
    { min: 81, max: 100, efetivos: 3, suplentes: 2 },
    { min: 101, max: 120, efetivos: 4, suplentes: 2 },
    { min: 121, max: 140, efetivos: 4, suplentes: 2 },
    { min: 141, max: 300, efetivos: 4, suplentes: 3 },
    { min: 301, max: 500, efetivos: 5, suplentes: 4 },
    { min: 501, max: 1000, efetivos: 6, suplentes: 5 },
    { min: 1001, max: 2500, efetivos: 9, suplentes: 7 },
    { min: 2501, max: 5000, efetivos: 11, suplentes: 8 },
    { min: 5001, max: 10000, efetivos: 13, suplentes: 10 },
  ],
};

function formatFaixa(min: number, max: number) {
  return `${min} a ${max} empregados`;
}

function getBracket(grau: GrauRisco, employeeCount: number) {
  if (employeeCount <= 10000) {
    return NR05_TABLE[grau].find((item) => employeeCount >= item.min && employeeCount <= item.max) ?? null;
  }

  const base = NR05_TABLE[grau][NR05_TABLE[grau].length - 1];
  const incrementGroups = Math.ceil((employeeCount - 10000) / 2500);
  const increment = grau <= 2 ? 1 : 2;

  return {
    min: 10001,
    max: employeeCount,
    efetivos: (base.efetivos ?? 0) + incrementGroups * increment,
    suplentes: (base.suplentes ?? 0) + incrementGroups * increment,
  };
}

export function calculateNr05(grau: GrauRisco, employeeCount: number): Nr05Result | null {
  if (!Number.isFinite(employeeCount) || employeeCount < 1) return null;

  const bracket = getBracket(grau, employeeCount);
  if (!bracket) return null;

  if (bracket.efetivos && bracket.suplentes) {
    return {
      kind: 'cipa',
      faixa: employeeCount > 10000 ? 'Acima de 10.000 empregados' : formatFaixa(bracket.min, bracket.max),
      empregados: {
        efetivos: bracket.efetivos,
        suplentes: bracket.suplentes,
      },
      empregador: {
        efetivos: bracket.efetivos,
        suplentes: bracket.suplentes,
      },
      total: {
        efetivos: bracket.efetivos * 2,
        suplentes: bracket.suplentes * 2,
      },
      observacao:
        'A NR-05 dimensiona a CIPA por estabelecimento, com número equivalente de representantes do empregador e dos empregados.',
    };
  }

  return {
    kind: 'representante',
    observacao:
      'Quando o estabelecimento não se enquadra no Quadro I e não é atendido por SESMT, a NR-05 exige a nomeação de um representante da organização. O MEI é dispensado dessa nomeação.',
  };
}

export function getNr05ReferenceLabel(employeeCount: number) {
  if (!Number.isFinite(employeeCount) || employeeCount < 1) return '';

  const match = NR05_BRACKETS.find((item) => employeeCount >= item.min && employeeCount <= item.max);
  if (match) return formatFaixa(match.min, match.max);
  return 'Acima de 10.000 empregados';
}
