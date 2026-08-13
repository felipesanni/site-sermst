import type { EmpresarioSection } from '@/lib/data/empresario-content';

export interface EmpresarioJourneyLink {
  title: string;
  description: string;
  href: string;
  label: string;
}

export interface EmpresarioJourney {
  awareness: EmpresarioJourneyLink;
  conversion: EmpresarioJourneyLink;
}

const journeysBySection: Record<EmpresarioSection, EmpresarioJourney> = {
  'Abertura e cadastro': {
    awareness: {
      title: 'Descubra o que a atividade da empresa muda na prática',
      description:
        'Consulte o CNAE pelo CNPJ e veja o grau de risco e as primeiras referências de SST para a operação.',
      href: '/rh/calculadora-cnae-grau-de-risco',
      label: 'Consultar CNAE e grau de risco',
    },
    conversion: {
      title: 'A empresa já tem funcionários?',
      description:
        'Compare os planos para reunir documentos, exames, vencimentos e eSocial em uma rotina acompanhada.',
      href: '/assinaturas',
      label: 'Ver planos de SST',
    },
  },
  'MEI, impostos e dinheiro': {
    awareness: {
      title: 'Entenda o que muda quando o negócio passa a ter funcionários',
      description:
        'Veja como admissão, folha, eSocial e saúde ocupacional entram na rotina de quem emprega.',
      href: '/rh',
      label: 'Continuar para RH e eSocial',
    },
    conversion: {
      title: 'Vai contratar ou já tem uma equipe?',
      description:
        'Conheça os planos mensais para organizar as obrigações de SST de acordo com o porte da empresa.',
      href: '/assinaturas',
      label: 'Conhecer os planos',
    },
  },
  'Funcionários e gestão': {
    awareness: {
      title: 'Veja como documentos, exames e eSocial se conectam',
      description:
        'Entenda como a gestão de SST transforma obrigações separadas em uma rotina coerente para a empresa.',
      href: '/saude/gestao-sst',
      label: 'Entender a gestão de SST',
    },
    conversion: {
      title: 'Organize a rotina em um plano mensal',
      description:
        'Compare o que está incluído em cada plano e simule o valor pelo número de funcionários.',
      href: '/assinaturas',
      label: 'Ver planos e valores',
    },
  },
  'Licenças e fiscalização': {
    awareness: {
      title: 'Entenda como chegam notificações trabalhistas',
      description:
        'Conheça o DET, os prazos de ciência e a importância de localizar documentos quando uma cobrança chega.',
      href: '/rh/domicilio-eletronico-trabalhista-det',
      label: 'Conhecer o DET',
    },
    conversion: {
      title: 'Prepare a documentação antes de uma cobrança',
      description:
        'Veja como manter documentos, exames, vencimentos e eventos de SST em uma rotina acompanhada.',
      href: '/assinaturas',
      label: 'Ver planos de SST',
    },
  },
};

const journeyOverrides: Partial<Record<string, EmpresarioJourney>> = {
  'mei-pode-ter-funcionario': {
    awareness: {
      title: 'Entenda o ASO e a etapa do exame admissional',
      description:
        'Veja para que serve o ASO, quando o exame deve acontecer e como ele se relaciona com a função do empregado.',
      href: '/saude/aso-atestado-saude-ocupacional',
      label: 'Entender o ASO',
    },
    conversion: {
      title: 'Precisa fazer uma admissão em São Paulo?',
      description:
        'Conheça o atendimento para exame admissional e organize essa etapa antes do início das atividades.',
      href: '/saude/clinica-exame-admissional-sao-paulo',
      label: 'Ver exame admissional',
    },
  },
  'folha-de-pagamento': {
    awareness: {
      title: 'Veja como os exames ocupacionais entram no eSocial',
      description:
        'Entenda a relação entre ASO, PCMSO e S-2220 e por que a folha não cobre sozinha essa rotina.',
      href: '/rh/multa-esocial-s2220',
      label: 'Entender o S-2220',
    },
    conversion: {
      title: 'Organize os eventos de SST no eSocial',
      description:
        'Conheça o serviço para acompanhar S-2210, S-2220, S-2221 e S-2240 com os documentos de origem.',
      href: '/servicos/gestao-esocial-s2220-s2240',
      label: 'Conhecer o serviço',
    },
  },
  'direitos-trabalhistas': {
    awareness: {
      title: 'Entenda como a prevenção reduz o risco trabalhista',
      description:
        'Veja como documentos, liderança, jornada e segurança do trabalho ajudam a evitar conflitos recorrentes.',
      href: '/rh/evitar-processos-trabalhistas',
      label: 'Continuar a leitura',
    },
    conversion: {
      title: 'Organize a rotina de SST da equipe',
      description:
        'Compare planos para acompanhar documentos, exames, vencimentos e eSocial ao longo do ano.',
      href: '/assinaturas',
      label: 'Ver planos de SST',
    },
  },
  'alvara-de-funcionamento': journeysBySection['Abertura e cadastro'],
  'vigilancia-sanitaria': journeysBySection['Abertura e cadastro'],
};

export function getEmpresarioJourney(
  slug: string,
  section: EmpresarioSection,
): EmpresarioJourney {
  return journeyOverrides[slug] ?? journeysBySection[section];
}
