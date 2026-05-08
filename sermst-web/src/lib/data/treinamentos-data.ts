export interface Training {
  slug: string;
  title: string;
  category: string;
  workload: string;
  targetAudience: string;
  summary: string;
  syllabus: string[];
}

export const trainingsData: Training[] = [
  {
    slug: 'nr-10-segurança-eletrica',
    title: 'NR-10 - Segurança em Eletricidade',
    category: 'Segurança',
    workload: '40h (Básico) / 40h (Complementar/SEP)',
    targetAudience: 'Eletricistas, manutentores e profissionais que interagem com energia elétrica.',
    summary: 'Capacitação obrigatória para prevenir acidentes elétricos, focada em segurança, normas técnicas e proteção de instalações.',
    syllabus: [
      'Introdução à segurança com eletricidade',
      'Riscos em instalações e serviços com eletricidade',
      'Técnicas de Análise de Risco',
      'Medidas de Controle do Risco Elétrico',
      'Equipamentos de Proteção Coletiva (EPC)',
      'Equipamentos de Proteção Individual (EPI)',
      'Rotinas de trabalho – Procedimentos',
      'Riscos Adicionais (Altura, Espaço Confinado)',
      'Prevenção e combate a incêndios',
      'Noções de Primeiros Socorros'
    ]
  },
  {
    slug: 'nr-35-trabalho-em-altura',
    title: 'NR-35 - Trabalho em Altura',
    category: 'Segurança',
    workload: '8h (Capacitação / Reciclagem)',
    targetAudience: 'Trabalhadores que executam atividades acima de 2 metros de altura.',
    summary: 'Treinamento focado em planejamento, organização e execução segura de trabalhos em altura utilizando sistemas de proteção e ancoragem.',
    syllabus: [
      'Normas e regulamentos aplicáveis ao trabalho em altura',
      'Análise de Risco e condições impeditivas',
      'Riscos potenciais inerentes ao trabalho em altura',
      'Equipamentos de Proteção Individual (seleção, inspeção e conservação)',
      'Sistemas, equipamentos e procedimentos de proteção coletiva',
      'Acidentes típicos em trabalhos em altura',
      'Condutas em situações de emergência',
      'Noções de técnicas de resgate e de primeiros socorros'
    ]
  },
  {
    slug: 'nr-33-espaco-confinado',
    title: 'NR-33 - Espaço Confinado',
    category: 'Segurança',
    workload: '16h (Vigias) / 40h (Supervisores)',
    targetAudience: 'Trabalhadores que entram em espaços confinados e supervisores de entrada.',
    summary: 'Gestão de segurança e saúde em trabalhos em espaços confinados, cobrindo monitoramento de gases, ventilação e resgate.',
    syllabus: [
      'Definições de espaços confinados',
      'Reconhecimento, avaliação e controle de riscos',
      'Operação de detectores de gases',
      'Procedimentos de entrada e Permissão de Entrada e Trabalho (PET)',
      'Programas de proteção respiratória',
      'Noções de resgate e primeiros socorros',
      'Legislação e normas técnicas de segurança',
      'Equipamentos de ventilação e iluminação'
    ]
  },
  {
    slug: 'nr-05-cipa-comissao-interna',
    title: 'NR-05 - CIPA (Comissão Interna)',
    category: 'Gestão',
    workload: '8h a 20h (Conforme Grau de Risco)',
    targetAudience: 'Integrantes da comissão (eleitos e indicados) e designados.',
    summary: 'Formação de multiplicadores de segurança interna, focada em análise de acidentes, vistorias e promoção da SIPAT.',
    syllabus: [
      'O ambiente e as condições de trabalho',
      'Metodologia de investigação e análise de acidentes',
      'Princípios gerais de higiene do trabalho',
      'Legislação trabalhista e previdenciária – SST',
      'Noções sobre inclusão de pessoas com deficiência',
      'Funcionamento da CIPA e atribuições dos membros',
      'Prevenção e combate ao assédio sexual e violência no trabalho',
      'Mapa de Riscos e Plano de Trabalho'
    ]
  },
  {
    slug: 'brigada-de-incendio-it17',
    title: 'Brigada de Incêndio (IT-17)',
    category: 'Emergência',
    workload: '8h (Nível Básico)',
    targetAudience: 'Funcionários de todos os setores designados para a brigada de emergência.',
    summary: 'Preparação para resposta rápida em situações de incêndio e emergências médicas, visando a preservação da vida e do patrimônio.',
    syllabus: [
      'Teoria do fogo e classes de incêndio',
      'Prevenção de incêndio e meios de propagação',
      'Agentes extintores e equipamentos de combate',
      'Abandono de área e comunicação de emergência',
      'Atendimento pré-hospitalar (Noções de Primeiros Socorros)',
      'Manobra de Heimlich e RCP',
      'Tratamento de queimaduras e fraturas',
      'Uso de EPIs de combate e simulação prática'
    ]
  },
  {
    slug: 'nr-11-transporte-movimentacao',
    title: 'NR-11 - Transporte e Movimentação',
    category: 'Operacional',
    workload: '16h (Operador) / 4h (Reciclagem)',
    targetAudience: 'Operadores de empilhadeira, paleteira elétrica, ponte rolante e guindastes.',
    summary: 'Treinamento rigoroso para operação segura de equipamentos de transporte de carga, focando em estabilidade, sinalização e inspeção de acessórios.',
    syllabus: [
      'Legislação e normas de segurança',
      'Conceitos de estabilidade física (Triângulo de Estabilidade)',
      'Inspeção diária (Checklist)',
      'Sinalização de segurança e isolamento de área',
      'Técnicas de empilhamento e desempilhamento',
      'Movimentação em rampas e docas',
      'Manutenção básica e recarga de baterias/GLP',
      'Prática de operação conduzida por instrutor'
    ]
  },
  {
    slug: 'nr-12-maquinas-equipamentos',
    title: 'NR-12 - Segurança em Máquinas',
    category: 'Segurança',
    workload: '8h a 16h (Conforme Complexidade)',
    targetAudience: 'Operadores de máquinas, mecânicos de manutenção e ajudantes de produção.',
    summary: 'Capacitação teórica e prática sobre os sistemas de segurança em máquinas, proteções fixas/móveis e dispositivos de intertravamento.',
    syllabus: [
      'Riscos mecânicos, elétricos e outros gerados por máquinas',
      'Sinalização e dispositivos de parada de emergência',
      'Sistemas de segurança (proteções físicas e sensores)',
      'Procedimentos de LOTO (Bloqueio e Etiquetagem)',
      'Distâncias de segurança conforme NBRs',
      'Princípios de higiene do trabalho aplicados a máquinas',
      'Métodos de trabalho seguro em manutenções',
      'Capacitação específica para o modelo de máquina da empresa'
    ]
  },
  {
    slug: 'nr-18-segurança-construcao-civil',
    title: 'NR-18 - Construção Civil',
    category: 'Construção',
    workload: '4h (Integração) / Periódicos Conforme Função',
    targetAudience: 'Pedreiros, ajudantes, carpinteiros e todos os colaboradores de canteiros de obra.',
    summary: 'Instruções básicas de segurança para o ambiente de construção civil, focando em riscos de queda, soterramento e choque elétrico.',
    syllabus: [
      'Informações sobre as condições e meio ambiente de trabalho',
      'Riscos inerentes à execução das atividades (Canteiro)',
      'Equipamentos de Proteção Coletiva (EPC) na obra',
      'Equipamentos de Proteção Individual (EPI) obrigatórios',
      'Uso seguro de andaimes e plataformas',
      'Proteções contra quedas de altura e de objetos',
      'Noções Básicas de Primeiros Socorros',
      'Organização e limpeza do canteiro (PCMAT/PGR)'
    ]
  },
  {
    slug: 'nr-20-inflamaveis-combustiveis',
    title: 'NR-20 - Líquidos Inflamáveis',
    category: 'Segurança',
    workload: '4h (Integração) / 8h (Básico) / 16h (Interm.)',
    targetAudience: 'Frentistas, operators de carga/descarga de combustível e funcionários de postos/depósitos.',
    summary: 'Capacitação para manuseio e armazenamento seguro de inflamáveis, prevenindo incêndios e explosões em áreas classificadas.',
    syllabus: [
      'Inflamáveis: características, propriedades e perigos',
      'Controle de fontes de ignição (Eletricidade estática)',
      'Fontes de ignição e proteção contra incêndios',
      'Procedimentos operacionais em áreas de risco',
      'Plano de Resposta a Emergências da Unidade',
      'Uso de extintores e canhões monitores',
      'Sinalização e identificação de produtos químicos',
      'Primeiros socorros em caso de contato ou inalação'
    ]
  }
];
