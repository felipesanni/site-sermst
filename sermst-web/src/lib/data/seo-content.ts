import { companyFacts } from '@/lib/company-facts';

// Centralized SEO and Regional Authority Matrix for SERMST (Grande SP Expansion)

export interface FAQItem {
  q: string;
  a: string;
}

export interface SEODocument {
  h1: string;
  seoTitle?: string;
  allowedLocalSlugs?: string[];
  hook: string;
  isClinico: boolean;
  fluxoCorporativo?: string[];
  content: {
    dor: string;
    solucao: string;
    beneficios: string[];
  };
  quandoRequerido?: string;
  documentosNecessarios?: string[];
  expectativaCusto?: string;
  geoOpt: {
    statistic?: string;
    expertQuote: {
      text: string;
      author: string;
      role: string;
    };
    faq: FAQItem[];
  };
}

export interface Localidade {
  nome: string;
  slug: string;
  unidadeReferencia: string;
  distanciaMedia: string;
  adjetivo: string;
  isHub?: boolean;
  contextoEmpresarial?: string;
  /** Parágrafo de perfil econômico único por cidade (anti-doorway, ~80 palavras) */
  perfilEconomico?: string;
  /** Setores econômicos predominantes com exposição a riscos SST */
  setoresPredominantes?: string[];
  /** Bairros industriais/comerciais atendidos */
  bairrosAtendidos?: string[];
  /** Por que a SERMST é especialmente relevante para está cidade */
  diferencialLocal?: string;
}

export interface DicionarioDetail {
  respostaCurta: string;
  ondeAparece: string;
  naoConfunda: string;
  aprofundamento: {
    href: string;
    title: string;
    description: string;
    label: string;
  };
  faq: FAQItem[];
}

export interface ContentBridgeLink {
  href: string;
  label: string;
  description: string;
}

interface EmpresarioCta {
  label: string;
  href: string;
  reason: string;
}

export interface EmpresarioDocument extends SEODocument {
  section:
    | "Regularização"
    | "Contratação e equipe"
    | "Documentos e rotina"
    | "Fiscalização e risco";
  summary: string;
  supportingLinks: ContentBridgeLink[];
  cta: EmpresarioCta;
  articleSections: Array<{
    title: string;
    paragraphs: string[];
  }>;
  practicalChecklistTitle: string;
  practicalChecklist: string[];
}

interface EmpresarioSeoStrategy {
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  funnelStage: "Topo" | "Topo/Meio" | "Meio";
  antiCannibalization: string;
  geoStrategy: string;
  cta: EmpresarioCta;
}

type EmpresarioBaseDocument = Omit<
  EmpresarioDocument,
  | "cta"
  | "articleSections"
  | "practicalChecklistTitle"
  | "practicalChecklist"
>;

export const localidades: Localidade[] = [
  {
    nome: "São Paulo",
    slug: "sao-paulo",
    unidadeReferencia: "Unidade Central (Largo do Paissandu)",
    distanciaMedia: "0 min",
    adjetivo: "paulistana",
    isHub: true,
    contextoEmpresarial:
      "A unidade central atende empresas de São Paulo com exames ocupacionais, PCMSO e suporte à organização da rotina de SST.",
    perfilEconomico:
      "A capital reúne empresas de serviços, tecnologia, saúde, varejo, logística, construção e indústria. Essa diversidade exige que o PGR, o PCMSO e os exames sejam definidos a partir de cada função, em vez de repetir um protocolo genérico para todos os empregados.",
    setoresPredominantes: [
      "Serviços e tecnologia: ergonomia, organização do trabalho e exames ocupacionais",
      "Construção civil: NR-18, trabalho em altura e gestão de riscos",
      "Saúde e farmacêutico: riscos biológicos, químicos e PCMSO",
      "Varejo e logística: admissões, ergonomia e motoristas profissionais",
      "Indústria de transformação: PGR, LTCAT e avaliações de exposição",
    ],
    bairrosAtendidos: [
      "Centro Histórico e Sé",
      "Brás, Mooca e Tatuapé",
      "Santo André e ABC Paulista",
      "Lapa, Pinheiros e Vila Madalena",
      "Brooklin, Santo Amaro e Jabaquara",
    ],
    diferencialLocal:
      "A unidade fica no Largo do Paissandu, 72, no Centro Histórico, e reúne atendimento clínico e exames complementares. Empresas com muitas admissões ou mais de um CNPJ podem centralizar encaminhamentos e documentos em um único fluxo.",
  },
  {
    nome: "Santo André",
    slug: "santo-andre",
    unidadeReferencia: "São Paulo (Centro)",
    distanciaMedia: "12 min",
    adjetivo: "andreense",
    contextoEmpresarial:
      "Histórico polo industrial do ABC. Exame admissional em Santo André com emissão de ASO e envio ágil para rotinas de eSocial.",
    perfilEconomico:
      "Santo André combina indústria, comércio, serviços e atividades ligadas ao corredor do ABC. Em operações metalúrgicas, químicas, logísticas ou de construção, os documentos de SST precisam acompanhar agentes, processos e mudanças reais da produção.",
    setoresPredominantes: [
      "Automotivo e autopeças: PGR, PCMSO e avaliações conforme os riscos",
      "Metal-mecânico: ruído, calor, agentes químicos e ergonomia",
      "Químico e petroquímico: LTCAT e avaliação de insalubridade ou periculosidade",
      "Comércio e serviços: exames ocupacionais e ergonomia",
      "Construção e infraestrutura: NR-18 e trabalho em altura",
    ],
    bairrosAtendidos: [
      "Centro e Jardim Bela Vista",
      "Capuava e região industrial",
      "Vila Humaitá e Jardim Mauá",
      "Utinga e bairros próximos",
      "Vila Luzita e Campestre",
    ],
    diferencialLocal:
      "A SERMST atende empresas de Santo André a partir da unidade central em São Paulo. O escopo pode reunir exames ocupacionais, PGR, PCMSO e laudos técnicos, conforme as funções e os agentes existentes na empresa.",
  },
  {
    nome: "São Bernardo",
    slug: "sao-bernardo",
    unidadeReferencia: "São Paulo (Centro)",
    distanciaMedia: "18 min",
    adjetivo: "saobernardense",
    contextoEmpresarial:
      "São Bernardo reúne montadoras, autopeças, metalurgia e operações logísticas que exigem atenção própria à saúde ocupacional. A SERMST atende essas empresas com exames, programas e avaliações técnicas.",
    perfilEconomico:
      "São Bernardo do Campo tem forte presença de montadoras, autopeças, metalurgia, logística e serviços. Nessas operações, ruído, produtos químicos, movimentação de materiais e ergonomia podem exigir avaliações técnicas e controles próprios por função.",
    setoresPredominantes: [
      "Montadoras e autopeças: LTCAT, S-2240 e avaliação de exposições",
      "Metalurgia: PGR, ruído, calor e agentes químicos",
      "Plásticos e químicos: PCMSO e controle de agentes",
      "Logística: exames ocupacionais e motoristas profissionais",
      "Construção e obras industriais: NR-18, NR-35 e análise de risco",
    ],
    bairrosAtendidos: [
      "Centro e Nova Petrópolis",
      "Rudge Ramos e região",
      "Demarchi e Assunção",
      "Paulicéia e bairros próximos",
      "Riacho Grande e Cooperativa",
    ],
    diferencialLocal:
      "Para empresas de São Bernardo, a análise pode incluir LTCAT, avaliações quantitativas, PGR e PCMSO. A documentação deve registrar método, equipamento, função, jornada e condições observadas, especialmente quando o cliente final também audita fornecedores.",
  },
  {
    nome: "São Caetano",
    slug: "sao-caetano",
    unidadeReferencia: "São Paulo (Centro)",
    distanciaMedia: "10 min",
    adjetivo: "sulsancaetanense",
    contextoEmpresarial:
      "Atendimento em saúde ocupacional para empresas de serviços, comércio, indústria e tecnologia em São Caetano do Sul.",
    perfilEconomico:
      "São Caetano do Sul reúne serviços, comércio, tecnologia, saúde e indústria. Mesmo em funções administrativas, a avaliação precisa considerar ergonomia e organização do trabalho; nas áreas operacionais, entram também os agentes e riscos próprios do processo.",
    setoresPredominantes: [
      "Serviços e consultorias: organização do trabalho e PCMSO",
      "Saúde e clínicas: avaliação de riscos biológicos",
      "Comércio varejista: ergonomia e exames ocupacionais",
      "Tecnologia e TI: avaliação ergonômica",
      "Educação: PCMSO e acompanhamento dos exames",
    ],
    bairrosAtendidos: [
      "Centro e Barcelona",
      "Nova Gerty e Cerâmica",
      "Divisa com Santo André",
      "Região próxima ao ABC industrial",
      "Fundação e Oswaldo Cruz",
    ],
    diferencialLocal:
      "O PCMSO deve ser orientado pelos riscos reais, e não apenas pelo CNAE ou pelo título do cargo. A SERMST atende empresas de São Caetano com exames, programas e avaliações adequados a cada operação.",
  },
  {
    nome: "Diadema",
    slug: "diadema",
    unidadeReferencia: "São Paulo (Centro)",
    distanciaMedia: "20 min",
    adjetivo: "diademense",
    contextoEmpresarial:
      "Diadema concentra empresas dos setores metalmecânico, químico e farmacêutico. A SERMST atende essas operações com exames complementares, PGR e documentação de SST.",
    perfilEconomico:
      "Diadema possui uma base industrial relevante, com empresas dos setores químico, farmacêutico, metal-mecânico, plástico e de embalagens. A variedade de processos exige atenção a agentes químicos, ruído, calor, movimentação de materiais e ergonomia.",
    setoresPredominantes: [
      "Indústria química e farmacêutica: LTCAT, PGR e agentes químicos",
      "Metal-mecânico e autopeças: avaliação de ruído e calor",
      "Plásticos e embalagens: ergonomia, químicos e PCMSO",
      "Alimentos e bebidas: higiene ocupacional e exames definidos pelo PCMSO",
      "Construção industrial: NR-18, NR-35 e CIPA",
    ],
    bairrosAtendidos: [
      "Centro e Piraporinha",
      "Taboão e região",
      "Eldorado e bairros próximos",
      "Casa Grande e Serraria",
      "Conceição e região industrial",
    ],
    diferencialLocal:
      "A caracterização de insalubridade depende da atividade, do agente, do anexo da NR-15 e da avaliação técnica. A SERMST realiza medições e elabora documentos com registro da metodologia e das condições encontradas na empresa.",
  },
  {
    nome: "Osasco",
    slug: "osasco",
    unidadeReferencia: "São Paulo (Centro)",
    distanciaMedia: "35 min",
    adjetivo: "osasquense",
    contextoEmpresarial:
      "Osasco reúne empresas de serviços, logística, comércio e tecnologia. A SERMST atende a região com exames admissionais e apoio à rotina ocupacional.",
    perfilEconomico:
      "Osasco reúne sedes de empresas financeiras, comércio, serviços, centros de distribuição e operações de logística. O fluxo ocupacional precisa atender tanto funções administrativas quanto equipes operacionais, sem aplicar os mesmos exames a riscos diferentes.",
    setoresPredominantes: [
      "Financeiro e seguros: ergonomia e organização do trabalho",
      "E-commerce e logística: exames ocupacionais e motoristas profissionais",
      "Varejo: ergonomia e admissões em volume",
      "Serviços de saúde: PCMSO e riscos biológicos",
      "Indústria: PGR, LTCAT e avaliações técnicas",
    ],
    bairrosAtendidos: [
      "Centro e Presidente Altino",
      "Km 18 e bairros próximos",
      "Jardim Elvira e Bela Vista",
      "Umuarama e região",
      "Baronesa e Vila Yara",
    ],
    diferencialLocal:
      "A SERMST atende empresas de Osasco com encaminhamento centralizado, exames ocupacionais e organização dos documentos para o eSocial. Os exames complementares são definidos pelo PCMSO conforme os riscos de cada função.",
  },
  {
    nome: "Guarulhos",
    slug: "guarulhos",
    unidadeReferencia: "São Paulo (Centro)",
    distanciaMedia: "25 min",
    adjetivo: "guarulhense",
    contextoEmpresarial:
      "Centro logístico aeroportuário nacional. Medicina do trabalho focada em transporte, logística e operações intensivas em Guarulhos.",
    perfilEconomico:
      "Guarulhos abriga o principal aeroporto internacional do Brasil e concentra transportadoras, distribuidores, centros logísticos, comércio e indústrias. A rotina de SST varia entre funções administrativas, armazenagem, movimentação de cargas, manutenção e condução profissional.",
    setoresPredominantes: [
      "Logística e transporte: toxicológico nas hipóteses legais e exames ocupacionais",
      "Aviação e aeroporto: PCMSO conforme as atividades em solo",
      "Autopeças e metal-mecânico: PGR, LTCAT e avaliações de exposição",
      "Distribuição e e-commerce: ergonomia e movimentação de materiais",
      "Indústria alimentícia: higiene ocupacional e PCMSO",
    ],
    bairrosAtendidos: [
      "Centro e Vila Galvão",
      "Cumbica e região aeroportuária",
      "Jardim Presidente Dutra e região logística",
      "Macedo e bairros próximos",
      "Pimentas e Bonsucesso",
    ],
    diferencialLocal:
      "Para transportadoras e operadores logísticos, a SERMST organiza exames ocupacionais e o toxicológico de longa janela nas situações previstas para motoristas profissionais, mantendo cada informação no fluxo correto.",
  },
  {
    nome: "Barueri",
    slug: "barueri",
    unidadeReferencia: "São Paulo (Centro)",
    distanciaMedia: "40 min",
    adjetivo: "barueriense",
    contextoEmpresarial:
      "Polo corporativo de Alphaville e Tamboré. ASO expresso, laudos digitais e organização de SST para empresas em crescimento.",
    perfilEconomico:
      "Barueri e a região de Alphaville concentram escritórios, empresas de tecnologia, serviços financeiros, comércio, centros logísticos e indústrias. Grupos com vários CNPJs precisam distinguir os riscos e documentos de cada estabelecimento, mesmo quando o RH é centralizado.",
    setoresPredominantes: [
      "Tecnologia e TI: ergonomia e organização do trabalho",
      "Serviços financeiros e seguros: PCMSO e gestão de exames",
      "Farmacêutico e ciências da vida: agentes químicos, LTCAT e PGR",
      "Varejo: admissões e gestão de múltiplos CNPJs",
      "Serviços corporativos: coordenação de SST por estabelecimento",
    ],
    bairrosAtendidos: [
      "Alphaville e região corporativa",
      "Tamboré e condomínios empresariais",
      "Centro de Barueri, comércio e serviços",
      "Jardim Belval e Industrial",
      "Bethaville e Jardim Tupanci",
    ],
    diferencialLocal:
      "A SERMST pode centralizar o acompanhamento do grupo sem misturar os documentos de cada estabelecimento. S-2210, S-2220 e S-2240 continuam seguindo fatos geradores, prazos e responsabilidades próprios.",
  },
];

export const estatisticasSERMST = {
  anosHistoria: companyFacts.history.value,
  empresasAtendidas: companyFacts.companiesServed.value,
  clinicasCredenciadas: "+500",
  vidasAtendidas: companyFacts.livesServed.value,
  economiaMultas: companyFacts.avoidedFines.value,
};

export const servicosSEO: Record<string, SEODocument> = {
  "empresa-seguranca-do-trabalho": {
    h1: "Empresa de Segurança do Trabalho | Gestão de SST para Empresas",
    seoTitle: "Empresa de Segurança do Trabalho em São Paulo | SERMST",
    allowedLocalSlugs: ["sao-paulo"],
    hook:
      "A SERMST atende empresas que precisam organizar PGR, PCMSO, LTCAT, exames ocupacionais, treinamentos e eSocial em um fluxo de SST mais coerente, previsível e seguro para o RH.",
    isClinico: false,
    fluxoCorporativo: [
      "Diagnóstico da operação e leitura do CNAE e do grau de risco",
      "Definição do escopo técnico: exames, laudos, programas e treinamentos",
      "Implantação da rotina de SST com acompanhamento recorrente",
    ],
    quandoRequerido:
      "Faz sentido contratar uma empresa de Segurança do Trabalho quando a organização precisa estruturar ou reorganizar a rotina de SST, alinhar documentos com a operação real e reduzir risco de autuação, passivo trabalhista e falhas no eSocial.",
    content: {
      dor:
        "Muita empresa cresce com o SST fragmentado: exame em uma clínica, PGR com outro fornecedor, treinamento sem cronograma e eSocial saindo no improviso. O resultado aparece rápido: retrabalho no RH, documentos que não conversam entre si e uma operação mais exposta quando surge fiscalização, acidente ou auditoria.",
      solucao:
        "A SERMST centraliza a gestão técnica de Saúde e Segurança do Trabalho com visão corporativa. Em vez de péças soltas, a empresa passa a ter medicina ocupacional, engenharia de segurança, documentação obrigatória e rotina operacional trabalhando no mesmo sentido.",
      beneficios: [
        "Menos atrito entre RH, clínica, laudos e eSocial",
        "Mais coerência entre PGR, PCMSO, LTCAT, ASO e treinamentos",
        "Menos fragilidade documental e menos exposição trabalhista",
        "Acompanhamento técnico para empresas com rotina recorrente",
        "Base mais sólida para fiscalização, auditoria e crescimento da operação",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "A empresa não precisa de documento solto. Precisa de uma rotina de SST em que risco, exame, laudo e eSocial contem a mesma história.",
        author: "Equipe Técnica SERMST",
        role: "Medicina e Segurança do Trabalho",
      },
      faq: [
        {
          q: "O que uma empresa de Segurança do Trabalho faz?",
          a: "Ela ajuda a organizar a rotina de SST da empresa, conectando PGR, PCMSO, exames ocupacionais, laudos, treinamentos e suporte ao eSocial de acordo com a operação real do negócio.",
        },
        {
          q: "Qual a diferença entre empresa de Segurança do Trabalho e clínica ocupacional?",
          a: "A clínica ocupacional costuma ficar mais concentrada em exames e ASOs. Uma empresa de Segurança do Trabalho com escopo mais completo integra exames, engenharia, documentos, treinamentos e gestão de SST.",
        },
        {
          q: "Pequena empresa também precisa contratar esse tipo de serviço?",
          a: "Na maioria dos casos, sim. Mesmo empresas menores precisam cumprir obrigações de SST quando têm empregados, e a terceirização técnica costuma ser o caminho mais viável para manter conformidade sem montar estrutura própria.",
        },
        {
          q: "A SERMST atende só medicina ocupacional ou também segurança do trabalho?",
          a: "Atende os dois lados. A proposta é unir medicina ocupacional, engenharia de segurança, documentação obrigatória, treinamentos e apoio operacional dentro de uma mesma gestão.",
        },
      ],
    },
  },
  "exame-admissional-expresso": {
    h1: "Exame Admissional | Clínica de Medicina do Trabalho",
    hook:
      "Precisa de exame admissional com rapidez, validade para eSocial e menos impacto na rotina do RH A SERMST realiza exame admissional em São Paulo com laboratório próprio, liberação ágil de ASO e estrutura para empresas que não podem atrasar contratações.",
    isClinico: true,
    quandoRequerido:
      "O exame admissional é uma exigência da NR-07 e deve ser realizado antes que o empregado assuma suas atividades. Ele registra a conclusão de aptidão para a função e fornece os dados usados no evento S-2220 do eSocial.",
    documentosNecessarios: [
      "RG e CPF ou documento oficial com foto",
      "Guia de encaminhamento em papel ou digital",
      "CNPJ da empresa contratante",
    ],
    expectativaCusto:
      "O preço do exame admissional varia conforme os riscos do cargo e a necessidade de exames complementares, como audiometria, sangue, ECG ou outros. Solicite o orçamento corporativo para pacotes de atendimento ocupacional.",
    content: {
      dor:
        "Processos de contratação lentos, filas em clínicas terceirizadas e demora no ASO geram admissões travadas, retrabalho para o RH e perda de produtividade logo no início da operação.",
      solucao:
        "Com laboratório próprio, equipe médica especializada em medicina do trabalho e fluxo ocupacional orientado a urgência empresarial, a SERMST reduz burocracia e acelera a liberação do ASO sem abrir mão de conformidade.",
      beneficios: [
        "Liberação de ASO com mais velocidade operacional",
        "Clínica de medicina do trabalho centralizada",
        "Dados do ASO organizados para o S-2220",
        "Resultados integrados em um só fluxo para o RH",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Uma boa rotina de saúde ocupacional começa no admissional. Quando NR-07, exames e eSocial seguem o mesmo fluxo, o RH contrata com menos retrabalho.",
        author: "Diretor Médico",
        role: "Diretor Médico",
      },
      faq: [
        {
          q: "Qual clínica faz exame admissional mais rápido?",
          a: "A SERMST possui fluxo expresso e laboratório clínico próprio na unidade central de São Paulo, ágilizando o resultado final do ASO.",
        },
        {
          q: "O ASO admissional é válido por quanto tempo?",
          a: "O ASO admissional e específico para o momento da contratação. Depois da admissão, o colaborador passa a seguir o cronograma do PCMSO da empresa.",
        },
        {
          q: "Precisa agendar o exame de admissão?",
          a: "Recomendamos o contato prévio por WhatsApp para orientar o fluxo e reduzir espera, mas a SERMST também atende demandas de urgência empresarial.",
        },
        {
          q: "Quais exames são necessários na admissão?",
          a: "O exame clínico é obrigatório, e os complementares dependem dos riscos do cargo definidos no PCMSO da empresa.",
        },
      ],
    },
  },
  "pcmso-nr07-programa": {
    h1: "PCMSO (NR-07) | Gestão de Saúde Ocupacional Especializada",
    hook:
      "O PCMSO precisa refletir os riscos e as funções da empresa. A SERMST elabora e coordena o programa, define exames e periodicidades e mantém as informações alinhadas aos ASOs e ao eSocial.",
    isClinico: false,
    fluxoCorporativo: [
      "Diagnóstico e visita do médico do trabalho",
      "Elaboração do cronograma de exames",
      "Assinatura do médico responsável e entrega digital",
    ],
    quandoRequerido:
      "Como regra, organizações com empregados CLT precisam elaborar e implantar o PCMSO, que funciona como o eixo médico da NR-07. A própria NR-07 prevê dispensa de elaboração em cenários específicos para MEI, ME e EPP de grau de risco 1 ou 2, sem eliminar exames ocupacionais nem ASO.",
    content: {
      dor:
        "Um PCMSO genérico e desconectado da operação pode levar a exames inadequados, falhas no S-2220 e inconsistências na documentação ocupacional.",
      solucao:
        "A SERMST avalia o processo produtivo e organiza um programa coerente com os riscos, as funções, os exames ocupacionais e os registros enviados ao eSocial.",
      beneficios: [
        "Responsabilidade técnica médica definida",
        "Integração total com PGR e eSocial",
        "Cronograma de exames coerente com os riscos da função",
        "Registros médicos coerentes com os riscos ocupacionais",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Um PCMSO sério exige que o médico conheça a realidade operacional da empresa e não apenas assine um modelo pronto.",
        author: "Diretoria Clínica",
        role: "SERMST",
      },
      faq: [
        {
          q: "O que é o PCMSO?",
          a: "E o Programa de Controle Médico de Saúde Ocupacional previsto na NR-07. Ele organiza o monitoramento da saúde dos empregados conforme os riscos ocupacionais da empresa.",
        },
        {
          q: "O PCMSO é obrigatório?",
          a: "Como regra, sim, para organizações com empregados CLT. A NR-07 prevê dispensa de elaboração em cenários específicos para MEI, ME e EPP de grau de risco 1 ou 2, sem eliminar exames ocupacionais nem ASO.",
        },
        {
          q: "Quem assina o PCMSO?",
          a: "A organização deve indicar médico do trabalho responsável pelo PCMSO. Se não houver médico do trabalho na localidade, a NR-07 admite médico de outra especialidade como responsável pelo programa.",
        },
        {
          q: "Qual a validade do PCMSO?",
          a: "O programa não tem validade fixa anual. Ele precisa acompanhar a realidade da empresa e ser revisto quando mudam riscos, atividades, cargos ou protocolos médicos. O relatório analítico segue lógica anual, salvo as dispensas previstas.",
        },
        {
          q: "Vocês revisam PCMSO já existente?",
          a: "Sim. A SERMST pode revisar PCMSO antigo, realinhar o programa ao PGR vigente, ajustar a grade de exames e corrigir incoerências que afetam ASO e eSocial.",
        },
      ],
    },
  },
  "pgr-nr01-gerenciamento-riscos": {
    h1: "PGR (NR-01) | Engenharia de Segurança e Levantamento de Riscos",
    hook:
      "Sua empresa precisa de PGR coerente com a operação real, e não de um documento padrão. A SERMST realiza vistoria técnica, inventário de riscos e plano de ação com foco em conformidade, prevenção e sustentação do eSocial.",
    isClinico: false,
    fluxoCorporativo: [
      "Vistoria técnica pormenorizada em campo",
      "Levantamento e inventário de riscos ocupacionais",
      "Definição do plano de ação e entrega técnica",
    ],
    quandoRequerido:
      "O PGR é a base da gestão de riscos ocupacionais prevista pela NR-01. Ele deve refletir a operação real da empresa e ser revisto quando houver mudanças relevantes em processo, estrutura, layout ou exposição ocupacional.",
    content: {
      dor:
        "PGRs cópia e cola, feitos sem leitura real do ambiente, costumam falhar em auditorias, enfraquecem a prevenção e ainda alimentam o eSocial com informações inconsistentes.",
      solucao:
        "A SERMST avalia a operação em campo, analisa atividades, máquinas, agentes nocivos e medidas de controle para entregar um inventário de riscos claro e realmente utilizável.",
      beneficios: [
        "Inventário de riscos conforme NR-01",
        "PGR baseado na realidade operacional",
        "Plano de ação com cronograma definido",
        "Organização de documentos e operação",
        "Assessoria em fiscalizações e auditorias",
        "Gestão dinâmica do plano de ação",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Um PGR útil mostra os riscos encontrados, as medidas adotadas e o que ainda precisa ser feito.",
        author: "Diretoria Técnica",
        role: "SERMST",
      },
      faq: [
        {
          q: "O que mudou no PGR?",
          a: "O PGR integra o gerenciamento de riscos ocupacionais e exige inventário coerente, plano de ação e acompanhamento contínuo.",
        },
        {
          q: "Quem elabora o PGR?",
          a: "Profissionais qualificados em segurança do trabalho, como engenheiros e técnicos legalmente habilitados.",
        },
      ],
    },
  },
  "ltcat-laudo-tecnico-previdenciario": {
    h1: "LTCAT | Laudo Técnico de Condições Ambientais do Trabalho",
    hook:
      "Documentação sólida para aposentadoria especial, PPP e eSocial S-2240. A SERMST realiza medições quantitativas, enquadramento técnico e entrega de LTCAT com base consistente para obrigações previdenciárias.",
    isClinico: false,
    fluxoCorporativo: [
      "Visita técnica com coleta de dados quantitativos",
      "Análise técnica e enquadramento previdenciário",
      "Emissão do laudo assinado por engenheiro SST",
    ],
    quandoRequerido:
      "O LTCAT é indispensável para empresas com exposição a agentes nocivos que precisam sustentar aposentadoria especial, PPP e recolhimentos relacionados ao risco previdenciário.",
    content: {
      dor:
        "Laudos técnicos inconsistentes podem gerar recolhimento indevido, base frágil para PPP e exposição a discussões previdenciárias de alto custo.",
      solucao:
        "A SERMST combina medição técnica, critério de enquadramento e análise previdenciária para entregar um LTCAT consistente e bem fundamentado.",
      beneficios: [
        "Medições de ruído e calor certificadas",
        "Base técnica para o Perfil Profissiográfico Previdenciário",
        "Coerência entre LTCAT, PPP e eSocial",
        "Envio estruturado ao eSocial",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Quando o agente exige avaliação quantitativa, a medição em campo é parte importante da fundamentação do LTCAT.",
        author: "Diretoria Técnica",
        role: "SERMST",
      },
      faq: [
        {
          q: "Quando o LTCAT é obrigatório?",
          a: "O LTCAT entra quando a empresa precisa sustentar tecnicamente exposição a agentes nocivos para PPP, eSocial S-2240, auditoria previdenciária ou análise de aposentadoria especial.",
        },
        {
          q: "Quem pode elaborar e assinar o LTCAT?",
          a: "O LTCAT deve ser emitido por profissional legalmente habilitado para a responsabilidade técnica do laudo, normalmente engenheiro de segurança do trabalho ou médico do trabalho, conforme o escopo da avaliação.",
        },
        {
          q: "LTCAT tem validade fixa?",
          a: "O ponto principal não é um prazo genérico, mas a aderência à realidade. Sempre que processo, agente, intensidade de exposição, layout ou função mudam, o LTCAT precisa ser revisto para não sustentar PPP e S-2240 com base antiga.",
        },
        {
          q: "Qual a diferença entre PGR e LTCAT?",
          a: "O PGR organiza a gestão dos riscos ocupacionais. O LTCAT sustenta o enquadramento previdênciario ligado a exposição nociva.",
        },
        {
          q: "O S-2240 exige LTCAT atualizado?",
          a: "Os dados de exposição no eSocial devem ter base técnica consistente, e o LTCAT costuma ser uma das referências principais.",
        },
      ],
    },
  },
  "gestao-esocial-s2220-s2240": {
    h1: "Gestão completa de eSocial SST | S-2220 e S-2240",
    hook:
      "Gestão de eSocial SST para empresas que precisam controlar prazos, arquivos XML e erros de envio. A SERMST organiza S-2220 e S-2240 com processo, rastreabilidade e suporte ao RH.",
    isClinico: false,
    content: {
      dor:
        "Quando o eSocial SST fica sem dono, a empresa passa a conviver com atraso de evento, erro manual, retrabalho entre RH e SST e risco real de autuação.",
      solucao:
        "A SERMST estrutura a rotina de envio com software, protocolo, suporte e visibilidade operacional, ajudando a empresa a transformar obrigação digital em processo controlado.",
      beneficios: [
        "Redução do risco de autuação",
        "Protocolo de entrega XML",
        "Interface entre SST, RH e operação",
        "Monitoramento de péndências e prazos",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "No eSocial, cumprir o prazo e manter a qualidade técnica da informação são partes do mesmo processo.",
        author: "Governança Corporativa",
        role: "SERMST",
      },
      faq: [
        {
          q: "O que é o evento S-2220?",
          a: "E o evento de monitoramento da saúde do trabalhador, usado para registrar informações de ASO e exames ocupacionais.",
        },
        {
          q: "O que é o evento S-2240?",
          a: "E o evento de condições ambientais do trabalho, ligado a exposição a riscos e base técnica de SST.",
        },
      ],
    },
  },
  "audiometria-ocupacional-clinica": {
    h1: "Audiometria Ocupacional e Audiometria Tonal | Exames de Audição",
    seoTitle: "Audiometria Ocupacional | SERMST",
    hook:
      "A SERMST realiza audiometria ocupacional integrada ao PCMSO, com cabine e equipamentos adequados para acompanhar trabalhadores expostos a níveis de ruído que exigem controle médico.",
    isClinico: true,
    quandoRequerido:
      "A audiometria ocupacional é indicada para trabalhadores expostos a níveis de pressão sonora acima dos níveis de ação previstos nas normas. O acompanhamento inclui exames de referência e sequenciais nos momentos definidos pela NR-07.",
    content: {
      dor:
        "Perda auditiva ocupacional pode gerar processo, afastamento e custo elevado quando a empresa não monitora o trabalhador de forma consistente.",
      solucao:
        "A SERMST realiza audiometria com critério técnico, profissionais especializados e integração ao fluxo do ASO para dar mais consistência ao monitoramento ocupacional, inclusive quando a empresa precisa de audiometria tonal para compor o protocolo do PCMSO.",
      beneficios: [
        "Cabine acústica calibrada",
        "Resultado integrado ao ASO",
        "Audiometria tonal com critério ocupacional",
        "Avaliação de PAIR conforme norma",
        "Atendimento expresso",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Saúde auditiva e produtividade, prevenção e segurança laboral ao mesmo tempo.",
        author: "Diretor Médico",
        role: "SERMST",
      },
      faq: [
        {
          q: "Quanto tempo dura a audiometria?",
          a: "O exame costuma levar cerca de 15 a 20 minutos por colaborador, dependendo do fluxo e das condições de repouso auditivo.",
        },
        {
          q: "Audiometria ocupacional e audiometria tonal são a mesma coisa?",
          a: "Na rotina ocupacional, a audiometria costuma ser realizada como audiometria tonal, seguindo os critérios técnicos definidos pelo PCMSO e pela avaliação de exposição a ruído.",
        },
        {
          q: "Precisa de repouso auditivo?",
          a: "Sim. O trabalhador deve cumprir repouso auditivo para que o resultado tenha validade técnica.",
        },
      ],
    },
  },
  "exame-toxicologico-clt": {
    h1: "Exame Toxicológico | Empresas, Motoristas e Renovação CNH C, D e E",
    hook:
      "Exame toxicológico para empresas e condutores em São Paulo, com coleta para admissão, acompanhamento periódico, desligamento e exigências relacionadas à CNH nas categorias C, D e E. Preço de referência: R$ 200,00.",
    isClinico: true,
    fluxoCorporativo: [
      "Triagem da demanda e envio da guia",
      "Coleta do exame toxicológico",
      "Laudo liberado e apoio ao RH",
    ],
    quandoRequerido:
      "Na relação de emprego, o exame se aplica a motoristas profissionais no pré-admissional, a cada dois anos e seis meses e no desligamento. Essa exigência é independente do PCMSO, não integra o ASO e não define aptidão para o trabalho. Também há regras próprias para condutores com CNH C, D ou E.",
    expectativaCusto:
      "Preço de referência: R$ 200,00 por exame, com coleta organizada pela SERMST. Confirme o valor e o prazo no agendamento.",
    content: {
      dor:
        "Atrasos na coleta ou no resultado podem afetar a admissão, o desligamento e o planejamento da escala. Para o condutor, também podem adiar o cumprimento das exigências ligadas à CNH.",
      solucao:
        "A SERMST orienta os documentos, organiza a coleta e informa o prazo previsto para o resultado. O atendimento contempla empresas e condutores que precisam cumprir a exigência trabalhista ou as regras aplicáveis à CNH.",
      beneficios: [
        "Coleta rápida e discreta",
        "Preço transparente de R$ 200,00",
        "Atendimento para empresa e pessoa física",
        "Laudo com validade nacional",
        "Atendimento pré-admissional, periódico, no desligamento e para CNH C, D e E",
      ],
    },
    documentosNecessarios: [
      "Documento de identidade (RG ou CNH)",
      "Carteira Nacional de Habilitação (CNH): cat. C, D ou E",
      "Guia de exame emitida pela empresa",
    ],
    geoOpt: {
      statistic:
        "Empresas e condutores procuram o mesmo exame por motivos diferentes. A orientação precisa identificar se a exigência é trabalhista ou ligada à habilitação.",
      expertQuote: {
        text: "O exame toxicológico só ajuda de verdade quando a empresa trata prazo, documentação e liberação do motorista como parte da operação, não como detalhe burocrático.",
        author: "Diretor Médico",
        role: "SERMST",
      },
      faq: [
        {
          q: "Quanto custa o exame toxicológico na SERMST?",
          a: "Na SERMST, o preço de referência para realização do exame toxicológico ocupacional é R$ 200,00 por colaborador.",
        },
        {
          q: "Quem precisa fazer exame toxicológico?",
          a: "A exigência trabalhista alcança motoristas profissionais nas etapas previstas em lei. Condutores com CNH C, D ou E também estão sujeitos às regras de trânsito aplicáveis à habilitação.",
        },
        {
          q: "O que detecta o exame toxicológico?",
          a: "O exame toxicológico identifica o consumo de substâncias psicoativas em janela retroativa de longo prazo por meio de amostra biológica apropriada.",
        },
        {
          q: "Exame toxicológico serve para admissão e CNH?",
          a: "O mesmo tipo de análise pode atender finalidades trabalhistas e de trânsito, mas são processos distintos. Na relação de emprego, o exame é independente do PCMSO e do ASO.",
        },
        {
          q: "A SERMST atende pessoa física para exame toxicológico?",
          a: "Sim. Além do atendimento a empresas, a SERMST atende condutores que precisam realizar o exame para exigências relacionadas à CNH C, D ou E.",
        },
        {
          q: "Em quanto tempo sai o resultado do exame toxicológico?",
          a: "O prazo pode variar conforme laboratório e volume da demanda, mas a SERMST organiza o fluxo de coleta para reduzir atrasos e dar mais previsibilidade ao RH e ao motorista.",
        },
      ],
    },
  },
  "exames-complementares-laboratoriais": {
    h1: "Exames Complementares em SST | Laboratório Próprio",
    hook:
      "Exames complementares em medicina do trabalho com mais agilidade para o RH e menos deslocamento para o colaborador. A SERMST integra exames de sangue, visão, ECG, EEG e espirometria ao fluxo do ASO para acelerar a admissão e reforçar a conformidade.",
    isClinico: true,
    content: {
      dor:
        "Quando cada exame complementar acontece em um lugar diferente, o processo ocupa mais tempo, gera desgaste para o colaborador e atrasa a liberação do trabalhador para a operação.",
      solucao:
        "Com centralização ocupacional e laboratório clínico próprio, a SERMST reduz deslocamentos, organiza o fluxo do ASO e melhora a experiência do RH e do candidato.",
      beneficios: [
        "Coleta de sangue no local",
        "ECG e EEG com laudo ágil",
        "Espirometria ocupacional",
        "Acuidade visual digital",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Velocidade na contratação exige exame complementar bem encaixado no fluxo de SST.",
        author: "Diretor Médico",
        role: "SERMST",
      },
      faq: [
        {
          q: "Quais exames são os mais solicitados?",
          a: "Hemograma, glicemia, acuidade visual, ECG e EEG costumam aparecer com frequência em cargos operacionais, dependendo do risco.",
        },
      ],
    },
  },
  "treinamentos-nrs-cipa-brigada": {
    h1: "Treinamentos de NRs, CIPA e Brigada | Capacitação em SST",
    hook:
      "Treinamentos de NRs com conteúdo teórico e prático, emissão de certificados e controle das reciclagens. A SERMST oferece capacitação em CIPA, brigada e outros temas aplicáveis à operação.",
    isClinico: false,
    fluxoCorporativo: [
      "Mapeamento de necessidades",
      "Cronograma de treinamentos",
      "Gestão de certificados e reciclagens",
    ],
    quandoRequerido:
      "Os treinamentos são exigidos conforme os riscos da operação e as normas aplicáveis. Conteúdo, carga horária, parte prática e reciclagem variam de acordo com cada norma.",
    content: {
      dor:
        "Um certificado isolado não demonstra que o trabalhador recebeu a capacitação exigida. Conteúdo, instrutor, duração, prática e registro precisam ser compatíveis com a norma aplicável.",
      solucao:
        "A SERMST organiza o ciclo de treinamentos, os certificados e as reciclagens, com conteúdo teórico e prático adequado a cada tema.",
      beneficios: [
        "Catálogo amplo de NRs e temas obrigatórios",
        "Formação de CIPA e brigada de incêndio",
        "Certificados digitais com validação",
        "Treinamentos teóricos e práticos na empresa ou em local adequado",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "O treinamento precisa preparar a pessoa para a tarefa e deixar um registro confiável do conteúdo aplicado.",
        author: "Diretoria Técnica SERMST",
        role: "Gestão SST",
      },
      faq: [
        {
          q: "Quais NRs minha empresa precisa?",
          a: "A necessidade depende dos riscos e da operação. O PGR é um dos caminhos para definir as prioridades técnicas de treinamento.",
        },
        {
          q: "Vocês fazem treinamento de CIPA conforme a NR-05?",
          a: "Sim. A SERMST realiza treinamento de CIPA e do representante nomeado pela organização, com conteúdo e carga horária definidos pela NR-05.",
        },
        {
          q: "Os treinamentos podem ser feitos na minha empresa?",
          a: "Sim. A SERMST realiza treinamentos diretamente na sede do cliente ou em estrutura adequada de apoio.",
        },
        {
          q: "Como validar um certificado da SERMST?",
          a: "Os certificados emitidos podem ser validados por código único ou mecanismo digital de conferência.",
        },
      ],
    },
  },
  "pericia-trabalhista-assistente-tecnico": {
    h1: "Perícia Trabalhista | Assistente Técnico Especializado",
    hook:
      "Assistência técnica em perícias trabalhistas de insalubridade, periculosidade e doença ocupacional, com elaboração de quesitos, acompanhamento da diligência e análise dos documentos do caso.",
    isClinico: false,
    quandoRequerido:
      "Esse serviço costuma ser necessário quando a empresa está envolvida em processo trabalhista e precisa de assistência técnica qualificada para acompanhar a perícia judicial.",
    content: {
      dor:
        "Sem acompanhamento técnico, informações importantes sobre o ambiente, a função e as medidas de controle podem não ser apresentadas de forma clara durante a perícia.",
      solucao:
        "A SERMST auxilia na elaboração de quesitos, acompanha a diligência e prepara parecer técnico com base nos documentos e nas condições observadas.",
      beneficios: [
        "Elaboração de quesitos técnicos",
        "Acompanhamento na diligência",
        "Parecer técnico fundamentado",
        "Análise técnica dos pontos discutidos no processo",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Quesitos objetivos e documentação coerente ajudam o perito a compreender as condições reais de trabalho.",
        author: "Diretoria Técnica",
        role: "SERMST",
      },
      faq: [
        {
          q: "O assistente técnico pode falar com o perito?",
          a: "Sim. O assistente técnico pode acompanhar a diligência e atuar tecnicamente dentro dos limites processuais do caso.",
        },
      ],
    },
  },
};

// Helper para gerar entries de saúde com defaults consistentes
const saudeEntry = (h1: string, hook: string, dor: string, solucao: string): SEODocument => ({
  h1,
  hook,
  isClinico: false,
  content: {
    dor,
    solucao,
    beneficios: [
      "Coerência entre riscos, PCMSO e exames",
      "Registros organizados para o RH",
      "Menos divergências entre documentos e eventos",
    ],
  },
  geoOpt: {
    expertQuote: {
      text: "Saúde ocupacional precisa acompanhar os riscos e a rotina da empresa, não apenas gerar documentos.",
      author: "Equipe Técnica",
      role: "SERMST",
    },
    faq: [
      {
        q: "Onde isso se conecta com SST da empresa?",
        a: "Esse tema se conecta ao PCMSO, ao PGR ou ao eSocial. A SERMST pode revisar o que a empresa já possui e indicar os pontos que precisam de ajuste.",
      },
    ],
  },
});

export const saudeSEO: Record<string, SEODocument> = {
  "importancia-do-exame-periodico": {
    h1: "Exame periódico ocupacional: o que é, periodicidade e regras",
    seoTitle: "Exame Periódico Ocupacional | SERMST",
    hook:
      "Entenda o que é o exame periódico ocupacional, quem define a periodicidade, quais exames podem ser solicitados e como organizar as convocações.",
    isClinico: true,
    content: {
      dor:
        "Quando o exame periódico vence, o acompanhamento previsto no PCMSO fica incompleto e o RH precisa reorganizar as convocações.",
      solucao:
        "Com um cronograma coerente e controle dos vencimentos, o RH consegue convocar as pessoas no prazo e manter o acompanhamento previsto no PCMSO.",
      beneficios: [
        "Mais previsibilidade para o RH",
        "PCMSO mais coerente com a operação",
        "Menos divergências nos registros e menos retrabalho",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "O controle dos periódicos conecta a convocação do trabalhador, o acompanhamento médico e o registro no eSocial.",
        author: "Equipe Técnica SERMST",
        role: "SERMST",
      },
      faq: [
        {
          q: "O exame periódico ocupacional é obrigatório?",
          a: "Ele integra o acompanhamento médico ocupacional da empresa e precisa seguir o PCMSO, os riscos do cargo e a rotina real de saúde ocupacional.",
        },
        {
          q: "Quem define a periodicidade do exame periódico?",
          a: "A periodicidade deve seguir a NR-07, o PCMSO e a avaliação médica dos riscos ocupacionais da função, e não um intervalo copiado de outra empresa.",
        },
        {
          q: "O que acontece se a empresa deixa o exame periódico vencer?",
          a: "O acompanhamento previsto no PCMSO fica incompleto, podem surgir atrasos no eSocial e o RH precisa reorganizar as convocações e os registros.",
        },
      ],
    },
  },
  // Conteúdos migrados do WordPress com redirects 301
  "o-que-e-saude-ocupacional": saudeEntry(
    "O que é Saúde Ocupacional: guia completo para gestores",
    "Saúde ocupacional não se resume ao ASO. Ela reúne exames, programas e ações de prevenção ligados aos riscos do trabalho.",
    "Quando os exames são tratados como tarefas isoladas, o PCMSO deixa de acompanhar mudanças de função, riscos e afastamentos.",
    "Uma rotina organizada conecta PGR, PCMSO, exames e análise dos dados de saúde ocupacional.",
  ),
  "exame-demissional": saudeEntry(
    "Exame demissional: o que é e quando fazer",
    "O exame clínico demissional documenta o estado de saúde do trabalhador no encerramento do vínculo. Quando não houver dispensa, a NR-07 prevê realização em até 10 dias contados do término do contrato.",
    "Ignorar o prazo ou presumir uma dispensa sem conferir o exame clínico mais recente cria uma lacuna no monitoramento ocupacional e no histórico documental da empresa.",
    "O fluxo correto confere as janelas de 135 ou 90 dias, realiza o exame quando necessário, emite o ASO e mantém o eSocial coerente com o que de fato ocorreu.",
  ),
  "o-que-sao-epis": saudeEntry(
    "O que são EPIs: escolha, fornecimento e uso correto",
    "O uso de EPI envolve seleção adequada, fornecimento gratuito, orientação, higienização ou manutenção quando aplicável e substituição nas situações previstas pela NR-06.",
    "Entregar o equipamento sem orientar, registrar e acompanhar o uso deixa uma lacuna na prevenção e na documentação da empresa.",
    "A gestão deve considerar o EPI adequado ao risco, o CA, as limitações de uso, a orientação do trabalhador e os registros exigidos.",
  ),
  "gestao-sst": saudeEntry(
    "Gestão de SST: o que é e como organizar sem virar burocracia",
    "Gestão de Saúde e Segurança do Trabalho é um processo contínuo que conecta riscos, exames, laudos, treinamentos e informações do eSocial.",
    "Quando os documentos não refletem a operação, surgem inconsistências entre funções, exposições, exames e eventos.",
    "O ciclo passa por identificar riscos, planejar controles, ajustar o PCMSO, capacitar as equipes, registrar os fatos e revisar o que mudou.",
  ),
  "pcmso-programa-controle-medico": saudeEntry(
    "PCMSO: o que é, validade e quem precisa elaborar",
    "O PCMSO organiza o monitoramento da saúde ocupacional conforme os riscos de cada função. A NR-07 prevê cenários específicos de dispensa para pequenos negócios, sem eliminar exames nem ASO.",
    "PCMSO genérico ou desatualizado não reflete a operação real, fragiliza a vigilância médica e pode gerar inconsistências nos eventos de SST.",
    "O programa precisa refletir os riscos, definir exames e periodicidades coerentes e permanecer alinhado com o PGR e o eSocial.",
  ),
  "aso-atestado-saude-ocupacional": saudeEntry(
    "ASO: o que é, quando emitir e quais informações conferir",
    "O Atestado de Saúde Ocupacional registra a conclusão do exame clínico ocupacional e a aptidão para a função ou tarefa indicada.",
    "Prazo incorreto, campos ausentes ou divergências com o PCMSO reduzem a confiabilidade do registro e precisam ser corrigidos.",
    "ASO correto tem: dados do médico responsável pelo PCMSO, quando houver, assinatura do médico que realizou o exame clínico, campos preenchidos, disponibilização ao trabalhador e envio do S-2220 ao eSocial dentro do prazo.",
  ),
  "medicina-do-trabalho-guia": saudeEntry(
    "Medicina do Trabalho: o que é e o que toda empresa precisa saber",
    "Medicina do trabalho acompanha a relação entre saúde e atividade profissional por meio do PCMSO e dos exames ocupacionais.",
    "Quando a empresa faz apenas o admissional e não acompanha o programa, perde prazos e deixa de analisar mudanças e resultados ao longo do vínculo.",
    "A rotina deve manter PCMSO e PGR alinhados, realizar exames no prazo, emitir os ASOs e enviar as informações exigidas ao eSocial.",
  ),
  "insalubridade-o-que-e-adicional": saudeEntry(
    "Insalubridade: conceito, adicional e avaliação técnica",
    "A insalubridade depende do enquadramento da atividade ou da exposição nos anexos da NR-15 e não apenas do nome do cargo.",
    "Pagar ou retirar o adicional sem avaliação técnica pode gerar divergências na folha e nos documentos de SST.",
    "A análise deve distinguir os critérios trabalhistas da NR-15 dos critérios previdenciários usados no LTCAT e no PPP.",
  ),
};

saudeSEO["insalubridade-o-que-e-adicional"].seoTitle =
  "Insalubridade: quem tem direito e como calcular | SERMST";

const dicionarioEntry = (h1: string, hook: string, dor: string, solucao: string): SEODocument => ({
  h1,
  hook,
  isClinico: false,
  content: {
    dor,
    solucao,
    beneficios: [
      "Definição clara com contexto de RH e SST",
      "Ligação prática com eSocial, exames e documentos",
      "Contexto para interpretar a obrigação antes de agir",
    ],
  },
  geoOpt: {
    expertQuote: {
      text: "O significado da sigla é apenas o começo; a aplicação depende da atividade, dos riscos e da regra vigente.",
      author: "Equipe Técnica SERMST",
      role: "Medicina e Segurança do Trabalho",
    },
    faq: [
      {
        q: "Por que esse termo importa para a empresa?",
        a: "Porque ele normalmente aparece ligado a exame ocupacional, documento obrigatório, eSocial, rotina de RH ou risco trabalhista. Entender o termo ajuda a decidir melhor e mais cedo.",
      },
    ],
  },
});

export const dicionarioSEO: Record<string, SEODocument> = {
  "o-que-e-aso": dicionarioEntry(
    "O que é ASO: significado do atestado de saúde ocupacional",
    "ASO é o Atestado de Saúde Ocupacional, documento emitido ao fim do exame ocupacional para registrar se o trabalhador está apto ou inapto para a função.",
    "Muita empresa associa o ASO apenas à admissão, embora ele também seja emitido nos demais exames ocupacionais previstos na NR-07 e forneça dados para o eSocial.",
    "Entender o ASO no contexto certo ajuda a ligar exame, PCMSO, eSocial e responsabilidade da empresa sem confundir com atestado médico comum.",
  ),
  "o-que-e-pcmso": dicionarioEntry(
    "O que é PCMSO? Significado da sigla e para que serve",
    "PCMSO significa Programa de Controle Médico de Saúde Ocupacional. Previsto na NR-07, ele organiza o monitoramento da saúde dos empregados conforme os riscos ocupacionais.",
    "A sigla PCMSO aparece em exames admissionais, ASOs, rotinas do RH e documentos de SST. Entender seu significado ajuda a não confundir o programa com uma simples lista padronizada de exames.",
    "O PCMSO conecta os riscos ocupacionais identificados no PGR ao planejamento médico da empresa. Para entender validade, obrigatoriedade, dispensa e estrutura do programa, consulte o guia completo de PCMSO.",
  ),
  "o-que-e-pgr": dicionarioEntry(
    "O que significa PGR? Entenda a sigla do programa de gerenciamento de riscos",
    "PGR significa Programa de Gerenciamento de Riscos. Previsto na NR-01, ele organiza a identificação, a avaliação e o controle dos riscos ocupacionais da empresa.",
    "Muita empresa ainda confunde o significado da sigla PGR com documento padrão ou com simples troca de nome do antigo PPRA, o que enfraquece a coerência técnica da rotina de SST.",
    "Entender a sigla PGR ajuda a ligar risco real da operação, inventário de riscos, plano de ação e documentos que conversam com o eSocial.",
  ),
  "o-que-e-ltcat": dicionarioEntry(
    "O que significa LTCAT? Entenda a sigla e a função do laudo previdenciário",
    "LTCAT significa Laudo Técnico das Condições Ambientais do Trabalho. Ele serve para caracterizar exposição a agentes nocivos e dar base técnica ao PPP, ao eSocial S-2240 e à análise de aposentadoria especial.",
    "Sem entender o papel do LTCAT, a empresa mistura insalubridade, PPP, PGR e obrigação previdenciária, gerando documento inconsistente justamente onde o risco jurídico costuma ser maior.",
    "A definição correta ajuda a separar o que é laudo previdenciário, o que é gestão de risco ocupacional e o que é enquadramento trabalhista, evitando erro técnico e retrabalho.",
  ),
  "o-que-e-ppp": dicionarioEntry(
    "O que é PPP: significado do perfil profissiográfico previdenciário",
    "PPP é o Perfil Profissiográfico Previdenciário, documento que consolida histórico laboral, agentes nocivos e informações previdenciárias do trabalhador.",
    "Muita empresa só descobre a importância do PPP quando surge desligamento, pedido de aposentadoria especial ou exigência de retificação documental.",
    "Com a definição certa, fica mais fácil entender por que PPP, LTCAT, S-2240 e histórico de exposição precisam contar a mesma história.",
  ),
};

dicionarioSEO["o-que-e-ltcat"].seoTitle =
  "O que significa LTCAT? Sigla e função do laudo | SERMST";
dicionarioSEO["o-que-e-ppp"].seoTitle =
  "O que é PPP? Significado e para que serve | SERMST";
dicionarioSEO["o-que-e-pcmso"].seoTitle =
  "O que é PCMSO? Significado da sigla e para que serve | SERMST";
dicionarioSEO["o-que-e-aso"].seoTitle =
  "O que é ASO? Significado, quando emitir e para que serve | SERMST";
dicionarioSEO["o-que-e-pgr"].seoTitle =
  "O que significa PGR? Sigla e função do programa | SERMST";

export const dicionarioDetails: Record<string, DicionarioDetail> = {
  "o-que-e-aso": {
    respostaCurta:
      "ASO significa Atestado de Saúde Ocupacional. É o documento emitido após o exame ocupacional para registrar se o trabalhador está apto ou inapto para exercer determinada função.",
    ondeAparece:
      "O RH encontra o ASO na admissão, nos exames periódicos, no retorno ao trabalho, na mudança de risco ocupacional e no desligamento. O documento também sustenta o envio das informações de monitoramento da saúde ao eSocial.",
    naoConfunda:
      "ASO não é atestado médico comum. O atestado comum normalmente justifica uma ausência por motivo de saúde. O ASO registra a conclusão de aptidão ocupacional para uma função e considera os riscos relacionados ao trabalho.",
    aprofundamento: {
      href: "/saude/aso-atestado-saude-ocupacional",
      title: "Precisa entender quando emitir o ASO, os campos obrigatórios e o eSocial?",
      description:
        "Veja quando cada exame ocupacional deve ocorrer, o que precisa constar no ASO e como o documento se conecta ao evento S-2220 sem confundir definição com guia completo.",
      label: "Ler guia completo de ASO",
    },
    faq: [
      {
        q: "O que significa ASO?",
        a: "ASO significa Atestado de Saúde Ocupacional.",
      },
      {
        q: "ASO e atestado médico são a mesma coisa?",
        a: "Não. O ASO registra aptidão ocupacional para uma função. O atestado médico comum costuma justificar ausência por motivo de saúde.",
      },
      {
        q: "ASO serve só para admissão?",
        a: "Não. O ASO também aparece em exames periódicos, retorno ao trabalho, mudança de risco ocupacional e demissão.",
      },
    ],
  },
  "o-que-e-pcmso": {
    respostaCurta:
      "PCMSO significa Programa de Controle Médico de Saúde Ocupacional. Previsto na NR-07, ele organiza o planejamento médico e o monitoramento da saúde dos empregados conforme os riscos ocupacionais.",
    ondeAparece:
      "O PCMSO aparece quando a empresa precisa definir exames admissionais, periódicos, de retorno, de mudança de risco e demissionais. Ele também precisa conversar com o PGR, com os ASOs e com os eventos de SST enviados ao eSocial.",
    naoConfunda:
      "PCMSO não é uma lista padrão de exames. O programa precisa refletir os riscos reais da organização. A NR-07 prevê dispensa de elaboração em cenários específicos para MEI, ME e EPP, sem eliminar exames ocupacionais nem ASO.",
    aprofundamento: {
      href: "/saude/pcmso-programa-controle-medico",
      title: "Precisa entender validade, obrigatoriedade ou dispensa do PCMSO?",
      description:
        "Veja quem precisa elaborar o programa, quando pode haver dispensa prevista na NR-07 e como funciona a validade do PCMSO.",
      label: "Ler guia completo de PCMSO",
    },
    faq: [
      {
        q: "O que significa PCMSO?",
        a: "PCMSO significa Programa de Controle Médico de Saúde Ocupacional.",
      },
      {
        q: "PCMSO é obrigatório?",
        a: "Como regra, sim, para empresas com empregados CLT. A NR-07 prevê dispensa de elaboração em cenários específicos para MEI, ME e EPP de grau de risco 1 ou 2, sem eliminar exames ocupacionais nem ASO.",
      },
      {
        q: "Quem assina o PCMSO?",
        a: "A organização deve indicar médico responsável pelo programa. Em regra, esse papel recai sobre médico do trabalho, observadas as hipóteses previstas na NR-07.",
      },
      {
        q: "PCMSO tem validade fixa?",
        a: "O programa não tem um vencimento anual automático. Ele precisa acompanhar a realidade da empresa e ser revisto quando mudam riscos, cargos, atividades ou protocolos médicos.",
      },
      {
        q: "Dispensa de PCMSO elimina os exames ocupacionais?",
        a: "Não. Mesmo quando a dispensa de elaboração se aplica, os exames ocupacionais e a emissão do ASO continuam obrigatórios.",
      },
    ],
  },
  "o-que-e-pgr": {
    respostaCurta:
      "PGR significa Programa de Gerenciamento de Riscos. Previsto na NR-01, ele organiza a identificação dos perigos, a avaliação dos riscos ocupacionais e o plano de ação da empresa.",
    ondeAparece:
      "A sigla PGR aparece na rotina de prevenção, em auditorias, fiscalizações e na revisão dos documentos de SST. O programa orienta medidas de controle e serve de base para alinhar treinamentos, PCMSO e informações ocupacionais.",
    naoConfunda:
      "PGR não é apenas um arquivo pronto nem um novo nome para qualquer documento antigo. Ele reúne o inventário de riscos e o plano de ação do gerenciamento de riscos ocupacionais. O guia da NR-01 detalha a atualização, o inventário e o acompanhamento das medidas.",
    aprofundamento: {
      href: "/normas/nr-01-pgr-atualizada",
      title: "Precisa entender a NR-01 atualizada, obrigatoriedade e plano de ação?",
      description:
        "Veja como a NR-01 estrutura o PGR, quando revisar o documento é o que a empresa precisa fazer na prática.",
      label: "Ler guia completo de PGR",
    },
    faq: [
      {
        q: "O que significa PGR?",
        a: "PGR significa Programa de Gerenciamento de Riscos.",
      },
      {
        q: "PGR substituiu o PPRA?",
        a: "O gerenciamento de riscos ocupacionais da NR-01 passou a ser estruturado pelo PGR. A empresa precisa analisar a operação atual, e não apenas trocar o nome de um documento antigo.",
      },
    ],
  },
  "o-que-e-ltcat": {
    respostaCurta:
      "LTCAT significa Laudo Técnico das Condições Ambientais do Trabalho. É o documento técnico-previdenciário usado para caracterizar exposição a agentes nocivos e sustentar o PPP, o eSocial S-2240 e análises ligadas à aposentadoria especial.",
    ondeAparece:
      "A sigla LTCAT aparece quando a empresa precisa documentar exposições ocupacionais com base técnica, revisar o PPP, sustentar dados do eSocial S-2240, responder auditoria previdenciária, validar se o laudo é obrigatório ou analisar possível enquadramento para aposentadoria especial.",
    naoConfunda:
      "LTCAT não é o mesmo que PGR, PPP nem laudo de insalubridade. O laudo tem finalidade previdenciária e registra tecnicamente a exposição a agentes nocivos. A elaboração e a revisão dependem das condições reais de trabalho e do escopo da avaliação.",
    aprofundamento: {
      href: "/servicos/ltcat-laudo-tecnico-previdenciario/sao-paulo",
      title: "Precisa elaborar ou revisar o LTCAT da empresa?",
      description:
        "Veja quando o LTCAT é necessário, como ele se conecta ao PPP e ao S-2240 e como a SERMST estrutura a avaliação previdenciária com base técnica consistente.",
      label: "Ver página completa de LTCAT",
    },
    faq: [
      {
        q: "O que significa LTCAT?",
        a: "LTCAT significa Laudo Técnico das Condições Ambientais do Trabalho.",
      },
      {
        q: "Para que serve o LTCAT?",
        a: "O LTCAT serve para caracterizar tecnicamente a exposição a agentes nocivos e dar base ao PPP, ao eSocial S-2240 e à análise previdenciária ligada à aposentadoria especial.",
      },
      {
        q: "LTCAT é obrigatório para toda empresa?",
        a: "Não de forma automática para qualquer cenário. A necessidade aparece quando a empresa precisa sustentar tecnicamente informações previdenciárias e ambientais ligadas à exposição ocupacional, especialmente em PPP, S-2240 e aposentadoria especial.",
      },
      {
        q: "LTCAT e laudo de insalubridade são iguais?",
        a: "Não. O LTCAT tem finalidade previdenciária. A insalubridade trabalhista segue critérios próprios, embora as avaliações técnicas possam se relacionar.",
      },
      {
        q: "PPP e LTCAT são a mesma coisa?",
        a: "Não. O PPP consolida o histórico previdenciário e laboral do trabalhador. O LTCAT é um dos documentos técnicos que podem sustentar as informações de exposição usadas nesse histórico.",
      },
      {
        q: "Quem assina o LTCAT?",
        a: "O laudo deve ser emitido por profissional habilitado para a responsabilidade técnica da avaliação, normalmente engenheiro de segurança do trabalho ou médico do trabalho.",
      },
      {
        q: "LTCAT vence?",
        a: "Mais importante do que falar em vencimento fixo é saber se o documento ainda retrata a operação real. Mudança de processo, agente nocivo, intensidade de exposição, função ou layout pede revisão.",
      },
    ],
  },
  "o-que-e-ppp": {
    respostaCurta:
      "PPP é o Perfil Profissiográfico Previdenciário. O documento reúne histórico laboral, atividades exercidas e informações sobre exposição a agentes nocivos, servindo de base para desligamento, revisão previdenciária e análise de aposentadoria especial.",
    ondeAparece:
      "O documento PPP aparece quando a empresa precisa entregar o histórico ocupacional do trabalhador em desligamentos, revisões previdenciárias, auditorias e análises de aposentadoria especial. No fluxo atual, ele também precisa conversar com os dados ambientais enviados ao eSocial, especialmente pelo S-2240.",
    naoConfunda:
      "PPP não é laudo técnico nem sinônimo de eSocial. Ele consolida informações que precisam estar sustentadas por documentos como LTCAT e registros internos da empresa. O S-2240 transmite parte da base ambiental, mas o PPP é o documento final que precisa contar a mesma história sem contradição.",
    aprofundamento: {
      href: "/normas/ppp-eletronico",
      title: "Precisa entender PPP eletrônico, S-2240, obrigatoriedade e responsabilidades?",
      description:
        "Veja como o PPP funciona na prática, quem precisa emitir, quando entregar o documento é por que LTCAT, PGR e eSocial precisam estar alinhados.",
      label: "Ler guia completo de PPP",
    },
    faq: [
      {
        q: "O que significa PPP?",
        a: "PPP significa Perfil Profissiográfico Previdenciário.",
      },
      {
        q: "PPP é obrigatório?",
        a: "O PPP é exigido quando a empresa precisa manter e fornecer o histórico previdenciário e ocupacional do trabalhador conforme a legislação aplicável, especialmente em contextos de desligamento, exposição ocupacional e análise previdenciária.",
      },
      {
        q: "Quem deve emitir o PPP?",
        a: "A emissão do PPP é responsabilidade da empresa, com base nas informações ocupacionais e previdenciárias que ela mantém e nos documentos técnicos que sustentam esse histórico.",
      },
      {
        q: "PPP e LTCAT são a mesma coisa?",
        a: "Não. O PPP consolida o histórico laboral e previdenciário do trabalhador. O LTCAT fornece base técnica para caracterizar exposições a agentes nocivos.",
      },
      {
        q: "PPP e S-2240 são a mesma coisa?",
        a: "Não. O S-2240 é o evento do eSocial que leva informações ambientais. O PPP é o documento previdenciário que precisa refletir esse histórico com base técnica consistente.",
      },
      {
        q: "PPP entra em aposentadoria especial?",
        a: "Sim. O PPP é uma das peças centrais nas análises de aposentadoria especial porque consolida histórico laboral, agentes nocivos e dados que precisam estar sustentados por LTCAT e demais registros.",
      },
      {
        q: "PPP é a mesma coisa que documento de aposentadoria?",
        a: "Não. O PPP é um documento previdenciário importante para esse tipo de análise, mas ele não substitui sozinho a avaliação completa do caso nem elimina a necessidade de coerência com LTCAT, eSocial e demais registros.",
      },
    ],
  },
};

export const rhDoresSEO: Record<string, SEODocument> = {
  "multa-esocial-s2220": {
    h1: "Como Evitar Multas do eSocial S-2220 e S-2240",
    hook:
      "O eSocial cruza dados de forma automática. Empresas que deixam saúde e segurança sem rotina definida se expõem a atraso de evento, erro operacional e risco crescente de multa.",
    isClinico: false,
    content: {
      dor:
        "A falta de envio, o envio fora do prazo ou a base técnica inconsistente nos eventos de SST pode gerar autuação, retrabalho e insegurança entre RH, operação e medicina ocupacional.",
      solucao:
        "Com processo, plataforma e rotina organizada, a empresa ganha previsibilidade para cumprir prazos e reduzir falhas no fluxo entre ASO, laudos e envios.",
      beneficios: [
        "Protocolos de envio seguros",
        "Integração via XML",
        "Redução de erros manuais",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "No eSocial, prazos, dados corretos e uma rotina bem definida reduzem erros e retrabalho.",
        author: "Governança Corporativa",
        role: "SERMST",
      },
      faq: [
        {
          q: "Qual o prazo do S-2220?",
          a: "O evento deve seguir o prazo operacional aplicável ao envio de informações de saúde do trabalhador, conforme a rotina e a obrigação da empresa.",
        },
        {
          q: "Erro no S-2240 pode afetar PPP e aposentadoria especial?",
          a: "Sim. Quando a base ambiental do S-2240 está errada ou inconsistente, isso pode contaminar o PPP, enfraquecer a coerência documental e abrir risco previdenciário e trabalhista.",
        },
        {
          q: "O S-2240 depende de LTCAT?",
          a: "Os dados ambientais do S-2240 precisam de base técnica consistente. Em cenários com agentes nocivos e exposição previdenciária, o LTCAT costuma ser uma das referências principais para sustentar esse envio.",
        },
      ],
    },
  },
  // Guias migrados do WordPress com redirects 301
  // função-encarregado tem página dedicada em /rh/funcao-encarregado/page.tsx
  "cat-acidente-de-trabalho": {
    h1: "CAT: como emitir a Comunicação de Acidente de Trabalho e evitar passivo",
    seoTitle: "CAT: como emitir e evitar passivo trabalhista | SERMST",
    hook:
      "A CAT é um dos documentos mais pesquisados quando a empresa já está diante de acidente, afastamento ou suspeita de doença ocupacional. Emitir fora do prazo, omitir informações ou simplesmente não emitir abre risco previdenciário, trabalhista e fiscal ao mesmo tempo.",
    isClinico: false,
    content: {
      dor:
        "Muita empresa descobre a importância da CAT tarde demais: depois do acidente, com o RH sob pressão, liderança tentando entender responsabilidade e medo real de multa ou processo.",
      solucao:
        "Quando o RH entende quando a CAT é obrigatória, quem pode emitir, qual o prazo e como ela conversa com ASO, afastamento, INSS e investigação interna, a empresa reage com mais rapidez e menos exposição.",
      beneficios: [
        "Redução de erro em acidente e afastamento",
        "Mais segurança na rotina entre RH, liderança e medicina do trabalho",
        "Base documental melhor para INSS, eSocial e defesa trabalhista",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Acidente sem CAT bem tratada vira problema duplicado: operacional no presente e jurídico no futuro.",
        author: "Equipe Técnica SERMST",
        role: "Saúde e Segurança do Trabalho",
      },
      faq: [
        {
          q: "Qual o prazo para emitir a CAT?",
          a: "Regra geral, a CAT deve ser emitida até o primeiro dia útil seguinte ao acidente. Em caso de morte, a comunicação deve ser imediata.",
        },
        {
          q: "Se a empresa não emitir a CAT, o trabalhador pode emitir?",
          a: "Sim. O próprio trabalhador, dependentes, sindicato, médico assistente ou autoridade pública podem registrar a CAT quando a empresa se omite.",
        },
      ],
    },
  },
  "riscos-psicossociais": {
    h1: "Riscos psicossociais: o que a NR-01 exige da sua empresa",
    hook:
      "Riscos psicossociais deixaram de ser tema abstrato de RH. Com a atualização da NR-01, passaram a entrar no radar real do PGR, da liderança e da responsabilidade da empresa sobre organização do trabalho, pressão excessiva, assédio e adoecimento mental.",
    isClinico: false,
    content: {
      dor:
        "Burnout, absenteísmo e conflitos de equipe ainda são tratados por muitas empresas apenas como questões de clima organizacional. A NR-01 exige que os fatores ligados ao trabalho também sejam considerados na gestão de riscos.",
      solucao:
        "Traduzir risco psicossocial em processo ajuda a empresa a sair do improviso: mapear exposições, revisar liderança, ajustar rotina, registrar evidências e alinhar PGR, PCMSO e governança de SST.",
      beneficios: [
        "Mais clareza sobre o que revisar no PGR",
        "Menos improviso em temas de assédio, sobrecarga e adoecimento mental",
        "Integração entre RH, liderança e documentação de SST",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Risco psicossocial não se resolve com palestra isolada. Ele precisa entrar no diagnóstico real da operação.",
        author: "Diretoria Técnica SERMST",
        role: "Governança SST",
      },
      faq: [
        {
          q: "Toda empresa precisa tratar risco psicossocial no PGR?",
          a: "Toda empresa precisa avaliar se a organização do trabalho, a forma de cobrança, a sobrecarga, o assédio ou outros fatores estão gerando risco psicossocial relevante. O tratamento pode mudar conforme o contexto, mas ignorar o tema não é uma opcao segura.",
        },
        {
          q: "Risco psicossocial é a mesma coisa que burnout?",
          a: "Não. Burnout é uma possível consequência. Risco psicossocial é o conjunto de fatores da organização do trabalho que pode levar a adoecimento, conflito, queda de desempenho e exposição jurídica.",
        },
      ],
    },
  },
};

const empresarioEntry = (
  section: EmpresarioDocument["section"],
  h1: string,
  hook: string,
  dor: string,
  solucao: string,
  summary: string,
  supportingLinks: ContentBridgeLink[],
  faq: FAQItem[],
  seoTitle?: string,
): EmpresarioBaseDocument => ({
  h1,
  ...(seoTitle ? { seoTitle } : {}),
  hook,
  isClinico: false,
  section,
  summary,
  supportingLinks,
  content: {
    dor,
    solucao,
    beneficios: [
      "Mais clareza sobre o que ainda falta para a empresa operar com menos risco",
      "Integração entre rotina empresarial, RH e exigências de SST",
      "Menos chance de descobrir obrigações só quando já existe multa, atraso ou passivo",
    ],
  },
  geoOpt: {
    expertQuote: {
      text: "Empresa regularizada não é a que tem mais papel. É a que consegue provar, operar e contratar sem improviso.",
      author: "Equipe Técnica SERMST",
      role: "RH, Medicina e Segurança do Trabalho",
    },
    faq,
  },
});

const legacyEmpresarioSections: EmpresarioDocument["section"][] = [
  "Regularização",
  "Contratação e equipe",
  "Documentos e rotina",
  "Fiscalização e risco",
];

const empresarioBaseSEO = {
  "cnpj-ativo-significa-empresa-regularizada": empresarioEntry(
    "Regularização",
    "CNPJ ativo significa empresa regularizada?",
    "Muita empresa confunde CNPJ ativo com empresa em dia. O cadastro pode estar regular na Receita e, ainda assim, a operação seguir exposta em contratação, documentos trabalhistas e rotina de SST.",
    "O dono consulta o CNPJ, vê a situação ativa e assume que o negócio está regularizado. O problema é que essa leitura ignora contratação, exames ocupacionais, eSocial, programas obrigatórios e documentos que só aparecem quando a empresa cresce ou contrata.",
    "O caminho seguro é separar status cadastral de regularização operacional. A empresa precisa entender o que continua sob responsabilidade dela quando já tem funcionário, terceirizado recorrente ou rotina com risco ocupacional.",
    "Mostra quais rotinas continuam pendentes mesmo quando o CNPJ aparece como ativo.",
    [
      {
        href: "/rh/calculadora-cnae-grau-de-risco",
        label: "Ver risco da atividade pelo CNAE",
        description: "Bom próximo passo para quem saiu da consulta CNPJ e quer entender se a operação já exige estrutura maior.",
      },
      {
        href: "/saude/pcmso-programa-controle-medico",
        label: "Entender onde entra o PCMSO",
        description: "Ajuda a mostrar onde a regularização deixa de ser cadastro e passa a exigir rotina ocupacional.",
      },
      {
        href: "/rh/domicilio-eletronico-trabalhista-det",
        label: "Entender onde o eSocial começa a apertar",
        description: "Ajuda a conectar a situação cadastral com documentos, DET e rotina operacional.",
      },
    ],
    [
      {
        q: "CNPJ ativo na consulta da Receita Federal significa que a empresa está regularizada por completo?",
        a: "Não. CNPJ ativo mostra situação cadastral, mas não prova que a empresa está em dia com rotina trabalhista, documentação ocupacional, eSocial ou exigências ligadas a funcionários.",
      },
      {
        q: "Consulta CNPJ e situação cadastral ativa resolvem as obrigações da empresa com funcionário?",
        a: "É comum faltar exame admissional, ASO, fluxo de eSocial, revisão de PGR ou PCMSO, além de documentos internos que o empresário só descobre quando aparece fiscalização ou atraso de contratação.",
      },
    ],
    "CNPJ ativo significa empresa regularizada? | SERMST",
  ),
  "nota-fiscal-mei-nao-significa-empresa-regularizada": empresarioEntry(
    "Regularização",
    "Emitir nota fiscal não regulariza todas as obrigações do MEI",
    "Emitir nota fiscal mostra que o negócio está operando, mas não garante que ele está pronto para contratar, registrar funcionário ou sustentar as obrigações que surgem quando a empresa cresce.",
    "Muitos negócios passam a emitir nota, vender mais e contratar ajuda sem perceber que a realidade operacional mudou. O que era simples como MEI começa a gerar exigências trabalhistas, ocupacionais e documentais que não aparecem na emissão da nota.",
    "Faturar e emitir nota não é o mesmo que estar preparado para receber o primeiro funcionário. Quando a operação deixa de ser individual, entram registro, exame admissional, eSocial e outras rotinas.",
    "Ajuda o MEI que está crescendo a reconhecer quando precisa organizar a contratação e os documentos da equipe.",
    [
      {
        href: "/saude/clinica-exame-admissional-sao-paulo",
        label: "Ver o exame admissional",
        description: "Mostra o primeiro passo prático quando o MEI deixa de operar sozinho e passa a contratar.",
      },
      {
        href: "/rh/declaracao-inexistencia-risco-dir",
        label: "Entender quando existe simplificação",
        description: "Ajuda a esclarecer quando pequenos negócios podem simplificar e quando a operação já saiu dessa faixa.",
      },
      {
        href: "/saude/pcmso-programa-controle-medico",
        label: "Entender quando o PCMSO entra",
        description: "Explica quando o PCMSO passa a fazer parte da rotina da empresa com empregados.",
      },
    ],
    [
      {
        q: "Emitir nota fiscal MEI significa que a empresa está pronta para contratar?",
        a: "Não necessariamente. Quando entra funcionário, aparecem obrigações trabalhistas, exames ocupacionais, eSocial e outros documentos que não estão resolvidos só porque a nota está sendo emitida.",
      },
      {
        q: "Emitir nota fiscal de serviço MEI muda algo quando o negócio começa a ter equipe?",
        a: "Quando o negócio cresce, contrata ajuda, organiza rotina de atendimento ou passa a operar com mais risco, a empresa começa a precisar de estrutura além da parte fiscal.",
      },
    ],
    "Nota fiscal MEI não significa empresa regularizada | SERMST",
  ),
  "simples-nacional-nao-elimina-obrigacoes-da-empresa": empresarioEntry(
    "Regularização",
    "Simples Nacional não elimina obrigações da empresa",
    "Entrar no Simples Nacional reduz complexidade tributária em vários cenários, mas não apaga responsabilidades da empresa com funcionários, documentos, exames e rotina operacional.",
    "Muita empresa interpreta o Simples como sinônimo de operação simplificada em tudo. O regime trata da esfera tributária, mas não substitui as rotinas de RH, SST, eSocial e documentação.",
    "A proposta aqui é traduzir a diferença entre simplificação tributária e responsabilidade empresarial. O empresário precisa entender o que continua existindo quando há equipe, risco ocupacional ou exigência de prova documental.",
    "Separa a simplificação tributária das obrigações que surgem quando a empresa tem empregados.",
    [
      {
        href: "/rh",
        label: "Ver o que muda no RH da empresa",
        description: "Bom destino para aprofundar o que continua existindo quando há funcionário, mesmo no Simples.",
      },
      {
        href: "/saude/aso-atestado-saude-ocupacional",
        label: "Entender por que o ASO continua obrigatório",
        description: "Ajuda a mostrar uma obrigação que o regime tributário não elimina.",
      },
      {
        href: "/saude/gestao-sst",
        label: "Entender onde a gestão ocupacional entra",
        description: "Mostra como a rotina ocupacional se organiza além da parte tributária.",
      },
    ],
    [
      {
        q: "Empresa do Simples Nacional pode ignorar obrigações de SST?",
        a: "Não. O enquadramento tributário não elimina por si só as obrigações ligadas a funcionário, rotina ocupacional, eSocial e documentação que a empresa precisa sustentar.",
      },
      {
        q: "Simples Nacional, consulta optantes e boleto resolvem a parte operacional da empresa?",
        a: "Ele simplifica principalmente a parte tributária. A operação com equipe continua exigindo cuidados próprios de RH, segurança, saúde ocupacional e prova documental.",
      },
    ],
    "Simples Nacional não elimina obrigações da empresa | SERMST",
  ),
  "alvara-de-funcionamento-nao-basta": empresarioEntry(
    "Regularização",
    "Alvará de funcionamento não basta: o que sua empresa precisa manter em dia",
    "Ter alvará ajuda a empresa a funcionar formalmente, mas não encerra o tema da regularização. Quando existem funcionários, rotina operacional e risco ocupacional, outras exigências continuam de pé.",
    "Muita empresa organiza prefeitura, aluguel, fachada e licença básica, mas esquece a parte que começa depois: documentação de equipe, exames, evidências de rotina e organização mínima para suportar fiscalização.",
    "O alvará cobre uma camada do funcionamento. Empresas com equipe também precisam organizar admissão, documentos internos, saúde ocupacional e os registros da rotina.",
    "Explica o que precisa ser acompanhado depois que a licença de funcionamento já foi obtida.",
    [
      {
        href: "/rh/domicilio-eletronico-trabalhista-det",
        label: "Entender o DET na prática",
        description: "Ajuda a ligar licença e funcionamento com fiscalização real da rotina da empresa.",
      },
      {
        href: "/saude/clinica-exame-admissional-sao-paulo",
        label: "Ver o que muda na admissão",
        description: "Mostra o que muda quando a empresa abre o espaço e passa a contratar.",
      },
      {
        href: "/saude/clinica-exame-admissional-sao-paulo",
        label: "Entender a etapa do admissional",
        description: "Veja como funciona o exame exigido antes de o novo funcionário iniciar as atividades.",
      },
    ],
    [
      {
        q: "Ter alvará de funcionamento significa que a empresa está regular para contratar funcionário?",
        a: "Não. O alvará ajuda na operação do estabelecimento, mas a contratação exige outras rotinas e documentos que não estão resolvidos pela licença de funcionamento.",
      },
      {
        q: "Dispensa de alvará ou licença de funcionamento elimina outras obrigações da empresa?",
        a: "Quando a empresa já está operando, costumam aparecer exigências ligadas a equipe, admissão, eSocial, saúde ocupacional, fiscalização e provas de rotina.",
      },
    ],
    "Alvará de funcionamento não basta | SERMST",
  ),
  "folha-de-pagamento-nao-e-a-unica-obrigacao": empresarioEntry(
    "Documentos e rotina",
    "Folha de pagamento não é a única obrigação de quem tem funcionário",
    "Pagar salário e processar a folha resolve uma parte da rotina. A relação com o funcionário também envolve admissão, exames, eventos do eSocial, documentos e controles que não aparecem no fechamento do mês.",
    "O empresário sente que a folha está em ordem e assume que o resto acompanha. Só que várias exposições surgem fora do payroll: ASO atrasado, evento ocupacional inconsistente, exame não realizado ou documentação de função desconectada da realidade.",
    "Ter funcionário exige uma rotina mais ampla do que holerite e encargos. É nesse ponto que RH, SST e documentação precisam trabalhar juntos.",
    "Reúne as obrigações que costumam ficar fora da visão de quem acompanha apenas a folha.",
    [
      {
        href: "/saude/aso-atestado-saude-ocupacional",
        label: "Entender o ASO fora da folha",
        description: "Explica uma obrigação que não aparece no fechamento do mês, mas precisa ser registrada corretamente.",
      },
      {
        href: "/rh/multa-esocial-s2220",
        label: "Entender onde o eSocial começa a falhar",
        description: "Explica como folha, eventos ocupacionais e rotina de exames precisam permanecer alinhados.",
      },
      {
        href: "/rh/multa-esocial-s2220",
        label: "Ver o risco de multa no eSocial",
        description: "Aprofunda o risco operacional quando a empresa acha que folha de pagamento basta.",
      },
    ],
    [
      {
        q: "Se a folha de pagamento está em dia, a empresa pode assumir que está regular?",
        a: "Não. A folha cobre uma parte importante, mas não garante que admissão, exames, eventos ocupacionais e documentação da equipe estejam corretos.",
      },
      {
        q: "Quais obrigações ficam fora da folha de pagamento e ainda geram risco?",
        a: "Exame admissional, ASO, prazos do eSocial, documentos de função, programas ocupacionais e evidências de rotina são pontos que frequentemente ficam separados da visão da folha.",
      },
    ],
    "Folha de pagamento não é a única obrigação | SERMST",
  ),
  "vigilancia-sanitaria-e-documentos-da-empresa": empresarioEntry(
    "Fiscalização e risco",
    "Vigilância sanitária e documentos da empresa: onde pequenas empresas mais erram",
    "Segmentos como alimentação, estética e saúde costumam se preocupar com licença e vistoria, mas ignoram que equipe, documentos e rotina ocupacional também entram na exposição do negócio.",
    "O erro mais comum não é faltar completamente um documento. É tratar a exigência de vigilância sanitária como se ela esgotasse a regularização da empresa, enquanto a parte de funcionários segue improvisada.",
    "Restaurantes, clínicas, salões, padarias e outros negócios regulados precisam olhar operação, pessoas e documentos em conjunto.",
    "Mostra como a licença sanitária convive com as obrigações trabalhistas e ocupacionais da equipe.",
    [
      {
        href: "/rh/calculadora-cnae-grau-de-risco",
        label: "Ver o risco do segmento pelo CNAE",
        description: "Ajuda restaurante, clínica, salão e padaria a entender se a atividade já pede mais cuidado ocupacional.",
      },
      {
        href: "/saude/gestao-sst",
        label: "Entender quando a rotina ocupacional muda",
        description: "Leva a conversa para quem já percebe risco operacional em atividade com equipe.",
      },
      {
        href: "/saude/medicina-do-trabalho-guia",
        label: "Entender a medicina do trabalho",
        description: "Explica a relação entre vigilância sanitária e rotina ocupacional.",
      },
    ],
    [
      {
        q: "Vigilância sanitária resolve todas as obrigações da empresa?",
        a: "Não. Ela cobre uma parte importante da operação em determinados segmentos, mas não substitui exigências ligadas a funcionário, rotina trabalhista e saúde ocupacional.",
      },
      {
        q: "Restaurante, clínica, padaria e salão precisam olhar o que além da vigilância sanitária?",
        a: "Além das regras sanitárias, esses negócios precisam organizar admissão, exames ocupacionais, treinamentos, eSocial e documentos coerentes com as atividades da equipe.",
      },
    ],
    "Vigilância sanitária e documentos da empresa | SERMST",
  ),
  "empresa-pequena-com-funcionario-quais-obrigacoes": empresarioEntry(
    "Contratação e equipe",
    "Empresa pequena com funcionário: quais obrigações muita gente esquece",
    "Quando a empresa é pequena, o dono tende a supor que as exigências também são pequenas. Na prática, a presença de funcionário já aciona responsabilidades que não desaparecem por causa do porte.",
    "Muitos negócios só percebem isso quando a admissão trava, o contador pede exame, o eSocial exige coerência ou a empresa descobre que o simples tamanho do negócio não elimina a necessidade de rotina.",
    "O ponto de partida é organizar admissão, documentos, exames, rotinas básicas e a avaliação dos riscos da atividade.",
    "Apresenta as primeiras obrigações de uma pequena empresa que já tem funcionários.",
    [
      {
        href: "/saude/clinica-exame-admissional-sao-paulo",
        label: "Ver a primeira exigência da contratação",
        description: "Explica a primeira etapa ocupacional da empresa pequena que vai contratar.",
      },
      {
        href: "/rh/declaracao-inexistencia-risco-dir",
        label: "Entender quando existe simplificação",
        description: "Mostra que nem toda empresa pequena com funcionário fica no mesmo enquadramento.",
      },
      {
        href: "/saude/pcmso-programa-controle-medico",
        label: "Entender quando o PCMSO passa a ser tema",
        description: "Mostra quando a empresa pequena precisa estruturar o acompanhamento médico ocupacional.",
      },
    ],
    [
      {
        q: "Empresa pequena com funcionário realmente precisa se preocupar com exames e documentos ocupacionais?",
        a: "Sim. O porte pode mudar o enquadramento em alguns pontos, mas a existência de funcionário continua trazendo responsabilidades que a empresa precisa entender e sustentar.",
      },
      {
        q: "Quais obrigações da empresa pequena com funcionário mais costumam ser esquecidas?",
        a: "Achar que o contador ou a folha resolvem tudo. Na prática, várias obrigações dependem da operação, do cargo, dos riscos e da disciplina de documentos e exames.",
      },
    ],
    "Empresa pequena com funcionário: quais obrigações | SERMST",
  ),
  "primeiro-funcionario-o-que-muda-na-pratica": empresarioEntry(
    "Contratação e equipe",
    "Contratei meu primeiro funcionário: o que muda na prática",
    "O primeiro funcionário muda o jogo da empresa. A partir dali, o negócio deixa de ter apenas rotina fiscal e passa a carregar responsabilidades trabalhistas, documentais e ocupacionais que o dono nem sempre conhece.",
    "Esse momento costuma ser cheio de improviso. O empresário quer contratar rápido, o contador pede documentos, o candidato espera retorno, e várias exigências aparecem ao mesmo tempo sem explicação clara.",
    "Antes da admissão, a empresa precisa definir o cargo, organizar os dados do registro e realizar o exame ocupacional no momento correto.",
    "Orienta os primeiros passos entre a decisão de contratar, o exame admissional e o início do vínculo.",
    [
      {
        href: "/saude/clinica-exame-admissional-sao-paulo",
        label: "Entender o exame admissional",
        description: "Destino natural para quem já está no momento da primeira contratação e quer entender a etapa correta.",
      },
      {
        href: "/saude/aso-atestado-saude-ocupacional",
        label: "Entender o ASO admissional",
        description: "Mostra a função do ASO no começo da relação de trabalho.",
      },
      {
        href: "/rh",
        label: "Ver as rotinas que nascem com o primeiro funcionário",
        description: "Ajuda a aprofundar as demais rotinas que aparecem junto da primeira contratação.",
      },
    ],
    [
      {
        q: "O primeiro funcionário muda a rotina da empresa de forma relevante?",
        a: "Sim. A partir do momento em que existe colaborador formal, a empresa passa a precisar de admissão organizada, documentos, exames e coerência entre operação e obrigações.",
      },
      {
        q: "O que costuma aparecer primeiro quando a empresa vai contratar o primeiro funcionário?",
        a: "Normalmente aparecem pedidos de exame admissional, ASO, dados para registro e dúvidas sobre os documentos que precisam estar prontos antes do início das atividades.",
      },
    ],
    "Primeiro funcionário: o que muda na prática | SERMST",
  ),
  "documentos-obrigatorios-empresa-com-funcionarios": empresarioEntry(
    "Documentos e rotina",
    "Documentos obrigatórios para empresa com funcionários: checklist prático",
    "Quem tem equipe precisa de mais do que contrato social, CNPJ e folha. Existe uma camada de documentos operacionais e ocupacionais que muita empresa só descobre quando a rotina aperta.",
    "O problema não é apenas faltar papel. É não entender quais documentos sustentam a admissão, a saúde ocupacional, as atividades exercidas e a resposta a uma fiscalização.",
    "O checklist organiza o que a empresa precisa acompanhar para não depender da memória ou de orientações fragmentadas.",
    "Reúne os principais documentos e indica onde cada um entra na rotina de RH e SST.",
    [
      {
        href: "/saude/pcmso-programa-controle-medico",
        label: "Entender onde o PCMSO entra",
        description: "Ajuda a explicar onde a documentação médica entra no checklist da empresa.",
      },
      {
        href: "/rh/calculadora-cnae-grau-de-risco",
        label: "Ver o que depende do risco da atividade",
        description: "Mostra quais itens do checklist dependem da atividade e dos riscos reais da operação.",
      },
      {
        href: "/rh/multa-esocial-s2220",
        label: "Ver o risco de falha no eSocial",
        description: "Mostra o efeito prático de manter documentos, exames e eventos desconectados.",
      },
    ],
    [
      {
        q: "Quais documentos obrigatórios a empresa com funcionários mais esquece?",
        a: "É comum esquecer exames ocupacionais, ASOs, eventos do eSocial, programas ligados aos riscos e registros coerentes com a função real.",
      },
      {
        q: "Por que organizar documentos da empresa com funcionários não é só tarefa do contador?",
        a: "Porque vários desses documentos dependem da operação, do cargo, dos riscos e da rotina real da empresa. Sem esse contexto, a documentação fica incompleta ou frágil.",
      },
    ],
    "Documentos obrigatórios para empresa com funcionários: checklist | SERMST",
  ),
  "contador-cuida-de-tudo": empresarioEntry(
    "Documentos e rotina",
    "O contador cuida de tudo? O que continua sendo responsabilidade da empresa",
    "O contador é decisivo para a rotina empresarial, mas há responsabilidades que dependem da operação real, do cargo do funcionário e da organização interna do negócio.",
    "Quando isso acontece, a empresa fica esperando o contador puxar temas que exigem informação operacional, risco ocupacional, agenda de admissão, revisão de função ou decisão interna.",
    "A contabilidade, o RH e a gestão precisam saber quais informações cada área produz e quem acompanha os prazos internos.",
    "Ajuda a distribuir responsabilidades sem tratar a contabilidade como responsável por toda a operação.",
    [
      {
        href: "/rh/o-que-um-gerente-faz",
        label: "Ver como distribuir responsabilidades internas",
        description: "Ajuda a distribuir o que fica com liderança, RH, contabilidade e direção.",
      },
      {
        href: "/saude/gestao-sst",
        label: "Entender a gestão de SST",
        description: "Mostra por que a parte ocupacional não se sustenta só com contabilidade.",
      },
      {
        href: "/rh/domicilio-eletronico-trabalhista-det",
        label: "Entender onde a rotina digital começa a cobrar",
        description: "Explica como avisos, prazos e comunicações oficiais entram na rotina da empresa.",
      },
    ],
    [
      {
        q: "O contador cuida de tudo sozinho quando a empresa tem funcionário?",
        a: "Não. Ele ajuda em partes fundamentais, mas várias obrigações dependem de informação da operação, do cargo e da rotina real da empresa.",
      },
      {
        q: "Onde a empresa erra quando acha que o contador cuida de tudo?",
        a: "Ela deixa de alimentar corretamente exames, documentos internos, dados ocupacionais e definições que só podem sair da própria operação.",
      },
    ],
    "O contador cuida de tudo? | SERMST",
  ),
  "fiscalizacao-empresa-o-que-podem-cobrar": empresarioEntry(
    "Fiscalização e risco",
    "Fiscalização na empresa: o que podem cobrar além de imposto",
    "Muitos empresários associam fiscalização apenas a imposto ou nota fiscal. Na prática, dependendo da rotina da empresa, outras cobranças entram em cena: equipe, documentos, evidências, saúde ocupacional e coerência operacional.",
    "O problema é deixar a organização para depois da notificação. Nessa hora, a empresa precisa localizar documentos, responsáveis e evidências dentro do prazo recebido.",
    "Antes de uma notificação, a empresa deve saber onde estão os documentos, quem responde por cada rotina e quais evidências demonstram o que ocorre na operação.",
    "Mostra quais registros podem ser solicitados e como DET, eSocial, RH e SST se conectam.",
    [
      {
        href: "/rh/domicilio-eletronico-trabalhista-det",
        label: "Ler o guia do DET",
        description: "Mostra como a fiscalização também se relaciona com comunicações e prazos recebidos pelo DET.",
      },
      {
        href: "/rh/cat-acidente-de-trabalho",
        label: "Ver como a CAT entra na rotina",
        description: "Mostra como documentação e reação a acidentes entram na rotina da empresa.",
      },
      {
        href: "/saude/gestao-sst",
        label: "Entender onde o risco ocupacional entra",
        description: "Explica quais riscos e documentos ocupacionais podem ser analisados além das obrigações fiscais.",
      },
    ],
    [
      {
        q: "Fiscalização na empresa pode cobrar coisas além de imposto e nota fiscal?",
        a: "Sim. Dependendo da atividade e da rotina da empresa, podem entrar no radar documentos, processos internos, exigências trabalhistas e evidências ligadas a funcionários e operação.",
      },
      {
        q: "O que a fiscalização pode cobrar quando a empresa tem funcionário?",
        a: "Isso varia conforme a atividade e o objeto da fiscalização. PGR, PCMSO, ASOs, registros de treinamento, entrega de EPI, dados do eSocial e documentos de jornada estão entre os itens que podem ser solicitados quando aplicáveis.",
      },
    ],
    "Fiscalização na empresa: o que podem cobrar | SERMST",
  ),
  "empresa-regularizada-com-funcionarios": empresarioEntry(
    "Fiscalização e risco",
    "Checklist de empresa regularizada com funcionários: o que não pode faltar",
    "Quando a empresa já tem equipe, regularização deixa de ser ideia abstrata e vira sistema: admissão, documentos, exames, organização de rotina, coerência de função e resposta a fiscalização.",
    "Muitos negócios tratam urgências isoladas sem construir uma base que mantenha cadastro, documentos, exames e eventos coerentes.",
    "CNPJ, alvará, nota e folha são importantes, mas não encerram a rotina de uma empresa com funcionários. O checklist reúne as outras frentes que precisam de acompanhamento.",
    "Oferece uma visão integrada de cadastro, contratação, documentos, saúde ocupacional e eSocial.",
    [
      {
        href: "/rh",
        label: "Ver conteúdos de RH",
        description: "Bom destino para aprofundar o lado operacional da empresa que já tem equipe.",
      },
      {
        href: "/saude",
        label: "Ver conteúdos de Saúde",
        description: "Ajuda a aprofundar exames, ASO, PCMSO e outros temas ocupacionais que completam a regularização.",
      },
      {
        href: "/saude/clinica-exame-admissional-sao-paulo",
        label: "Entender como a admissão entra no processo",
        description: "Ajuda a conectar a visão integrada da empresa com a primeira rotina prática de contratação.",
      },
    ],
    [
      {
        q: "O que define uma empresa realmente regularizada quando ela já tem funcionário?",
        a: "Não é só ter cadastro ou folha em dia. É manter operação, documentos, exames, eventos e evidências coerentes com a realidade da equipe e do negócio.",
      },
      {
        q: "Qual o checklist mínimo de uma empresa regularizada com funcionários?",
        a: "O checklist deve considerar cadastro e licenças, admissão, exames e ASOs, PGR e PCMSO quando aplicáveis, treinamentos, EPI, eventos do eSocial e responsáveis por cada prazo.",
      },
    ],
    "Checklist de empresa regularizada com funcionários | SERMST",
  ),
};

const empresarioStrategicMap: Record<keyof typeof empresarioBaseSEO, EmpresarioSeoStrategy> = {
  "cnpj-ativo-significa-empresa-regularizada": {
    primaryKeyword: "cnpj ativo significa empresa regularizada",
    secondaryKeywords: [
      "empresa regularizada",
      "cnpj ativo empresa regular",
      "como saber se a empresa está regularizada",
    ],
    searchIntent: "Informacional ampla com transição para regularização operacional",
    funnelStage: "Topo/Meio",
    antiCannibalization:
      "Não disputar termos de consulta cadastral pura como 'cnpj consulta' ou 'receita federal cnpj'. A página deve vencer apenas a dúvida interpretativa sobre o que CNPJ ativo realmente significa.",
    geoStrategy:
      "Sem geo no slug. Reforcar no corpo e links internos que a ajuda prática e voltada a empresas de São Paulo quando a dor vira admissão, exames e eSocial.",
    cta: {
      label: "Descobrir o risco pelo CNAE",
      href: "/rh/calculadora-cnae-grau-de-risco",
      reason: "A calculadora apresenta o grau de risco e referências iniciais de SST a partir do CNAE da empresa.",
    },
  },
  "nota-fiscal-mei-nao-significa-empresa-regularizada": {
    primaryKeyword: "nota fiscal mei",
    secondaryKeywords: [
      "mei nota fiscal",
      "emitir nota fiscal mei",
      "mei empresa regularizada",
    ],
    searchIntent: "Informacional ampla com ponte para crescimento e primeiro funcionário",
    funnelStage: "Topo/Meio",
    antiCannibalization:
      "Não disputar termos tutoriais de emissão de nota. A página deve focar na virada do MEI que cresce e passa a ter obrigações além da nota fiscal.",
    geoStrategy:
      "Sem geo primario. Inserir contexto local apenas nas pontes de serviço e nas provas de atendimento em São Paulo.",
    cta: {
      label: "Ver exame admissional",
      href: "/saude/clinica-exame-admissional-sao-paulo",
      reason: "O exame admissional deve ser organizado antes de o primeiro empregado iniciar as atividades.",
    },
  },
  "simples-nacional-nao-elimina-obrigacoes-da-empresa": {
    primaryKeyword: "simples nacional",
    secondaryKeywords: [
      "simples nacional empresa",
      "obrigações da empresa simples nacional",
      "simples nacional funcionário",
    ],
    searchIntent: "Informacional ampla sobre enquadramento com ponte para obrigações empresariais",
    funnelStage: "Topo/Meio",
    antiCannibalization:
      "Não disputar consultas tributarias como 'simples nacional consulta optantes'. A URL deve responder ao mito de que o Simples elimina exigências operacionais.",
    geoStrategy:
      "Tema nacional. Usar São Paulo apenas nas rotas de apoio e serviços, nunca como foco principal da URL.",
    cta: {
      label: "Entender o que muda no RH",
      href: "/rh",
      reason: "O guia de RH reúne as rotinas trabalhistas e ocupacionais que continuam existindo no Simples Nacional.",
    },
  },
  "alvara-de-funcionamento-nao-basta": {
    primaryKeyword: "alvará de funcionamento",
    secondaryKeywords: [
      "empresa regularizada alvará",
      "alvará empresa regular",
      "o que empresa precisa manter em dia",
    ],
    searchIntent: "Informacional ampla sobre licença e regularização complementar",
    funnelStage: "Topo/Meio",
    antiCannibalization:
      "Não disputar guias de emissão de alvará ou consulta municipal. A intenção aqui e mostrar o que continua pendente depois da licença.",
    geoStrategy:
      "Pode citar exigências que variam por cidade, mas sem prometer cobertura normativa municipal detalhada. São Paulo entra nas pontes de serviço.",
    cta: {
      label: "Entender o DET",
      href: "/rh/domicilio-eletronico-trabalhista-det",
      reason: "O DET concentra comunicações oficiais da inspeção do trabalho e exige acompanhamento periódico.",
    },
  },
  "folha-de-pagamento-nao-e-a-unica-obrigacao": {
    primaryKeyword: "folha de pagamento",
    secondaryKeywords: [
      "obrigações de quem tem funcionário",
      "empresa com funcionário obrigações",
      "folha de pagamento não basta",
    ],
    searchIntent: "Informacional de meio com foco em rotina além do payroll",
    funnelStage: "Meio",
    antiCannibalization:
      "Não disputar páginas de cálculo de folha ou rotinas contabeis puras. A página deve vencer a intenção de quem já desconfia que a folha não cobre tudo.",
    geoStrategy:
      "Sem geo no tema principal. Concentrar localidade nas rotas de serviço e exemplos praticos.",
    cta: {
      label: "Entender a multa do S-2220",
      href: "/rh/multa-esocial-s2220",
      reason: "O S-2220 registra informações dos exames ocupacionais e precisa permanecer alinhado ao ASO e ao PCMSO.",
    },
  },
  "vigilancia-sanitaria-e-documentos-da-empresa": {
    primaryKeyword: "vigilância sanitária",
    secondaryKeywords: [
      "documentos da empresa",
      "empresa pequena vigilância sanitária",
      "restaurante clínica salão documentos",
    ],
    searchIntent: "Informacional ampla por segmento com transição para risco operacional",
    funnelStage: "Topo/Meio",
    antiCannibalization:
      "Não disputar conteúdo jurídico puro sobre licença sanitária. A URL deve focar no erro de achar que vigilância sanitária resolve toda a regularização.",
    geoStrategy:
      "Boa página para inserir exemplos locais de setores fortes em São Paulo, mantendo a tese valida nacionalmente.",
    cta: {
      label: "Calcular risco pelo CNAE",
      href: "/rh/calculadora-cnae-grau-de-risco",
      reason: "O guia mostra como a atividade econômica e os riscos da operação influenciam as exigências ocupacionais.",
    },
  },
  "empresa-pequena-com-funcionario-quais-obrigacoes": {
    primaryKeyword: "empresa pequena com funcionário",
    secondaryKeywords: [
      "empresa pequena obrigações",
      "quais obrigações empresa pequena tem",
      "empresa pequena funcionário obrigações",
    ],
    searchIntent: "Informacional de meio para empresário com dor já concreta",
    funnelStage: "Meio",
    antiCannibalization:
      "Esta URL deve ser dona do tema 'empresa pequena com funcionário'. Não repetir a mesma promessa em 'primeiro funcionário' nem em 'empresa regularizada com funcionários'.",
    geoStrategy:
      "Tema nacional com potencial de captacao ampla. Destinos comerciais ficam geo-orientados em São Paulo.",
    cta: {
      label: "Entender o exame admissional",
      href: "/saude/clinica-exame-admissional-sao-paulo",
      reason: "O exame admissional é uma das primeiras etapas que a pequena empresa precisa organizar ao contratar.",
    },
  },
  "primeiro-funcionario-o-que-muda-na-pratica": {
    primaryKeyword: "primeiro funcionário",
    secondaryKeywords: [
      "contratei meu primeiro funcionário",
      "o que muda ao contratar primeiro funcionário",
      "primeira contratação empresa",
    ],
    searchIntent: "Informacional de meio com forte intenção de ação",
    funnelStage: "Meio",
    antiCannibalization:
      "Está e a URL principal para a virada da primeira contratação. Não deve competir com a página mais ampla de 'empresa pequena com funcionário' nem com checklists documentais.",
    geoStrategy:
      "Excelente candidata a internal links com páginas locais de exame admissional em São Paulo, sem geo no slug principal.",
    cta: {
      label: "Entender o exame admissional",
      href: "/saude/clinica-exame-admissional-sao-paulo",
      reason: "Antes do início das atividades, a empresa precisa definir a função e organizar o exame admissional.",
    },
  },
  "documentos-obrigatorios-empresa-com-funcionarios": {
    primaryKeyword: "documentos obrigatórios para empresa com funcionários",
    secondaryKeywords: [
      "empresa com funcionários documentos",
      "checklist empresa com funcionário",
      "documentos trabalhistas e ocupacionais empresa",
    ],
    searchIntent: "Informacional de meio em formato checklist",
    funnelStage: "Meio",
    antiCannibalization:
      "Esta página deve ser a dona do tema documental. A página 'empresa regularizada com funcionários' fica como checklist síntese do cluster, não como lista de documentos detalhada.",
    geoStrategy:
      "Sem geo no foco principal. Pontes locais entram nos serviços que resolvem documentos em São Paulo.",
    cta: {
      label: "Entender o PCMSO",
      href: "/saude/pcmso-programa-controle-medico",
      reason: "O guia do PCMSO explica quais informações médicas e ocupacionais precisam ser organizadas pela empresa.",
    },
  },
  "contador-cuida-de-tudo": {
    primaryKeyword: "o contador cuida de tudo",
    secondaryKeywords: [
      "contador cuida de tudo empresa",
      "responsabilidade da empresa e do contador",
      "contador e obrigações trabalhistas",
    ],
    searchIntent: "Informacional de meio para alinhar responsabilidade operacional",
    funnelStage: "Topo/Meio",
    antiCannibalization:
      "Não disputar páginas institucionais sobre contabilidade. A URL deve vencer a objeção comportamental de empresários que terceirizam tudo para o contador.",
    geoStrategy:
      "Tema sem geo. Reforcar proximidade local só na hora de sugerir apoio técnico da SERMST em São Paulo.",
    cta: {
      label: "Entender a gestao de SST",
      href: "/saude/gestao-sst",
      reason: "A gestão de SST depende de informações da operação, dos cargos e dos riscos que não nascem na contabilidade.",
    },
  },
  "fiscalizacao-empresa-o-que-podem-cobrar": {
    primaryKeyword: "fiscalização na empresa",
    secondaryKeywords: [
      "o que fiscalização pode cobrar",
      "fiscalização empresa funcionário",
      "empresa o que pode ser cobrado além de imposto",
    ],
    searchIntent: "Informacional de meio orientada por risco e prova documental",
    funnelStage: "Meio",
    antiCannibalization:
      "Não disputar conteúdo tributário ou fiscal puro. A proposta e vencer a intenção de quem quer entender cobranças ligadas a operação, equipe e documentos.",
    geoStrategy:
      "Boa página para conectar DET e eSocial com exemplos locais, sem perder relevância nacional.",
    cta: {
      label: "Ler guia do DET",
      href: "/rh/domicilio-eletronico-trabalhista-det",
      reason: "O guia do DET explica como acompanhar notificações, prazos e comunicações da inspeção do trabalho.",
    },
  },
  "empresa-regularizada-com-funcionarios": {
    primaryKeyword: "empresa regularizada com funcionários",
    secondaryKeywords: [
      "checklist empresa regularizada",
      "empresa com funcionários regularizada",
      "o que não pode faltar empresa com funcionário",
    ],
    searchIntent: "Informacional de síntese com alta capacidade de distribuição interna",
    funnelStage: "Meio",
    antiCannibalization:
      "Esta é a página consolidada do tema. Não deve disputar a intenção específica de 'documentos obrigatórios', 'primeiro funcionário' ou 'empresa pequena com funcionário'.",
    geoStrategy:
      "Serve como página nacional de conexão. Os CTAs e links internos podem direcionar para o atendimento local em São Paulo.",
    cta: {
      label: "Ver conteúdos de RH",
      href: "/rh",
      reason: "O guia de RH reúne admissão, documentos, eSocial e outras rotinas ligadas à equipe.",
    },
  },
};

const empresarioNarrativeMap: Record<
  keyof typeof empresarioBaseSEO,
  Pick<EmpresarioDocument, "articleSections" | "practicalChecklistTitle" | "practicalChecklist">
> = {
  "cnpj-ativo-significa-empresa-regularizada": {
    articleSections: [
      {
        title: "Consulta CNPJ e situação cadastral não mostram a operação inteira",
        paragraphs: [
          "CNPJ ativo resolve uma pergunta bem específica: a empresa existe formalmente e não está baixada ou inapta naquele momento. Só isso. O erro aparece quando o empresário transforma esse status em sinal de que toda a operação está coberta.",
          "Na rotina, o problema quase nunca nasce no cadastro. Ele aparece quando entra um empregado, quando o contador pede informações que a operação não tem, quando o exame admissional atrasa ou quando a empresa percebe que não organizou os registros necessários.",
        ],
      },
      {
        title: "Empresa regularizada é mais do que CNPJ ativo",
        paragraphs: [
          "Empresa regularizada não é a que juntou mais documento. É a que consegue contratar, manter rotina e responder a cobranças sem improvisar toda vez. Por isso, a pergunta certa não é só se o CNPJ está ativo. É se a empresa sabe o que precisa sustentar quando a equipe cresce.",
          "Quando a empresa sai da fase cadastral e entra na fase operacional, RH, eSocial, exames e programas ocupacionais passam a fazer parte da rotina.",
        ],
      },
    ],
    practicalChecklistTitle: "O que vale revisar antes de assumir que a empresa está em ordem",
    practicalChecklist: [
      "Separar status cadastral de rotina trabalhista e ocupacional.",
      "Mapear se já existe funcionário, terceirizado recorrente ou contratação próxima.",
      "Conferir se admissão, exames, eSocial e documentos básicos acompanham a realidade da operação.",
    ],
  },
  "nota-fiscal-mei-nao-significa-empresa-regularizada": {
    articleSections: [
      {
        title: "Emitir nota fiscal MEI não significa que a empresa está pronta para crescer",
        paragraphs: [
          "Muita gente vive esse momento sem perceber a mudança. O negócio começa pequeno, a emissão de nota entra na rotina, o faturamento sobe e alguém passa a ajudar na prática. A empresa continua se enxergando como simples, mas a operação já não é tão simples assim.",
          "Quando o MEI ou o pequeno negócio sai da fase individual, o ponto sensível deixa de ser a nota. O que pesa passa a ser contratação, função, exame, organização mínima e coerência entre o que a empresa faz e o que ela precisa manter em dia.",
        ],
      },
      {
        title: "Quando o MEI começa a ter equipe, a nota deixa de ser o centro do problema",
        paragraphs: [
          "Nem sempre a empresa chama isso de primeiro funcionário. Às vezes é alguém que começou a ajudar todo dia, um atendimento que cresceu ou uma demanda que deixou de caber no dono. É justamente nesse ponto que surgem exigências que antes não existiam.",
          "Se a empresa espera a situação ficar urgente, o processo começa desorganizado: admissão em cima da hora, contador cobrando informação, exame corrido e decisão tomada sem contexto. É melhor preparar essa transição antes.",
        ],
      },
    ],
    practicalChecklistTitle: "Sinais de que o negócio já saiu da fase do MEI individual",
    practicalChecklist: [
      "A operação depende de ajuda frequente e não apenas eventual.",
      "Já existe pressão para contratar, registrar ou organizar escala.",
      "A empresa começou a precisar de rotina, documentos e previsibilidade além da emissão de nota.",
    ],
  },
  "simples-nacional-nao-elimina-obrigacoes-da-empresa": {
    articleSections: [
      {
        title: "Simples Nacional simplifica imposto, não a operação inteira",
        paragraphs: [
          "A confusão é comum porque o nome induz a uma sensação de alívio total. O Simples Nacional simplifica principalmente a parte tributária. Quando existe equipe, função, risco ocupacional ou necessidade de registros, a empresa continua tendo deveres próprios.",
          "Por isso, vários empresários só descobrem o limite do Simples quando a contratação aperta ou quando surge uma exigência que a parte fiscal não cobre. O regime ajuda, mas não substitui processo.",
        ],
      },
      {
        title: "Consulta, boleto e enquadramento não resolvem o dia a dia com funcionário",
        paragraphs: [
          "Uma empresa pode ser enxuta, pagar menos tributo e ainda assim precisar de disciplina em admissão, exames, eSocial e documentos. Isso varia com o tipo de atividade, com a função do colaborador e com a realidade da rotina.",
          "O ponto prático é separar o enquadramento tributário das demais responsabilidades. O regime muda uma parte da rotina, mas não substitui as obrigações ligadas aos empregados e à operação.",
        ],
      },
    ],
    practicalChecklistTitle: "Perguntas que ajudam a separar tributação de operação",
    practicalChecklist: [
      "A empresa já tem funcionário ou vai contratar nos próximos meses?",
      "Existe alguma atividade com risco ocupacional, atendimento presencial ou rotina operacional mais sensível?",
      "Os documentos e exames da equipe dependem de alguém puxando no improviso?",
    ],
  },
  "alvara-de-funcionamento-nao-basta": {
    articleSections: [
      {
        title: "Alvará de funcionamento libera a operação, mas não fecha a regularização",
        paragraphs: [
          "Licença, prefeitura, endereço e funcionamento formal são etapas importantes. O problema é parar nelas. Depois que a empresa abre e passa a operar com gente, rotina e pressão do dia a dia, aparecem exigências que não vieram no pacote do alvará.",
          "É por isso que muita empresa parece regular na fachada, mas tropeça na primeira admissão, na primeira cobrança ou na primeira necessidade de demonstrar como funciona internamente.",
        ],
      },
      {
        title: "Depois da licença de funcionamento, a empresa entra em outra camada de obrigação",
        paragraphs: [
          "Enquanto a empresa está concentrada em abrir, o foco costuma ser documento externo. Quando ela começa a rodar com funcionário, o foco passa a incluir documento interno, exame, evento, rotina e coerência entre função e operação.",
          "Esse é o ciclo normal de quem deixou de estar apenas autorizado a funcionar e passou a precisar manter a operação organizada.",
        ],
      },
    ],
    practicalChecklistTitle: "Depois do alvará, o que merece atenção imediata",
    practicalChecklist: [
      "Entender se já existe obrigação ligada a equipe, admissão ou eSocial.",
      "Verificar se a empresa sabe quem cuida de documentos internos e exames.",
      "Conferir se o funcionamento formal veio acompanhado de rotina operacional mínima.",
    ],
  },
  "folha-de-pagamento-nao-e-a-unica-obrigacao": {
    articleSections: [
      {
        title: "Folha de pagamento em dia não significa rotina completa",
        paragraphs: [
          "A folha costuma virar o símbolo de organização porque é uma entrega visível, mensal e sensível para a empresa. Mas ela mostra apenas uma parte da relação com o funcionário. O restante fica distribuído entre admissão, ASO, exames, eventos e registros.",
          "Quando ninguém olha para essa camada, a empresa acredita que está em ordem porque o salário saiu e os encargos foram pagos. Só descobre a lacuna quando alguma exigência aparece fora do fechamento do mês.",
        ],
      },
      {
        title: "O que fica fora da folha de pagamento costuma gerar o atrito mais caro",
        paragraphs: [
          "Não é raro encontrar uma empresa com a folha em dia e, ao mesmo tempo, com admissão desorganizada, exame atrasado ou informação ocupacional inconsistente. A folha pode estar correta sem cobrir essas outras tarefas.",
          "Manter empregados exige mais do que processar pagamentos. RH, saúde ocupacional e segurança do trabalho precisam fazer parte do mesmo fluxo.",
        ],
      },
    ],
    practicalChecklistTitle: "Três pontos para revisar além do fechamento da folha",
    practicalChecklist: [
      "Se o fluxo de admissão está alinhado com exame e ASO.",
      "Se as informações ocupacionais conversam com o que a empresa envia ou prepara para o eSocial.",
      "Se a função real do colaborador bate com a documentação que a empresa guarda.",
    ],
  },
  "vigilancia-sanitaria-e-documentos-da-empresa": {
    articleSections: [
      {
        title: "Quem depende de vigilância sanitária costuma olhar menos para a parte interna da empresa",
        paragraphs: [
          "Restaurante, padaria, clínica, salão e outros negócios regulados pela vigilância sanitária precisam acompanhar vistoria, licença e padrão de atendimento. Essa frente costuma receber mais atenção por ser muito visível na operação.",
          "O que pode ficar para trás é a parte interna da equipe: função, rotina, exame, documento e risco ocupacional. Nesse caso, a empresa cuida da licença, mas deixa outra parte da organização sem acompanhamento.",
        ],
      },
      {
        title: "Restaurante, clínica, padaria e salão não conseguem separar licença de rotina da equipe",
        paragraphs: [
          "Nesses segmentos, a falha raramente aparece isolada. Quando a empresa está correndo atrás de licença, também costuma estar correndo atrás de escala, admissão, treinamento e organização. Se cada frente anda sozinha, a exposição aumenta.",
          "A licença sanitária e a rotina de SST cumprem finalidades diferentes. Uma não elimina a necessidade de organizar a outra, especialmente quando há empregados expostos a riscos próprios da atividade.",
        ],
      },
    ],
    practicalChecklistTitle: "Onde pequenas empresas desses segmentos mais escorregam",
    practicalChecklist: [
      "Tratam licença e vistoria como se resolvessem toda a regularização.",
      "Crescem a equipe sem reorganizar documentos e rotina.",
      "Misturam urgência de atendimento ao cliente com improviso na parte interna da operação.",
    ],
  },
  "empresa-pequena-com-funcionario-quais-obrigacoes": {
    articleSections: [
      {
        title: "Empresa pequena com funcionário não tem obrigação pequena por definição",
        paragraphs: [
          "Empresa pequena costuma operar perto do limite. O dono concentra decisões, o contador cuida da parte fiscal e a equipe faz várias coisas ao mesmo tempo. Nesse cenário, é comum presumir que as exigências também serão pequenas.",
          "Não funciona assim. A presença de funcionário já muda o jogo. Talvez a empresa tenha menos camadas, menos gente e menos formalidade interna. Mas continua tendo obrigações que precisam de dono e de rotina.",
        ],
      },
      {
        title: "O maior risco da empresa pequena não é o porte. É descobrir tudo tarde",
        paragraphs: [
          "Quando tudo depende da memória ou da correria da semana, a empresa pequena acumula buracos sem perceber. A admissão vira urgência, o exame fica para depois, o documento some e o empresário sente que está sempre resolvendo o assunto tarde demais.",
          "Uma rotina simples, com responsáveis e prazos definidos, ajuda a empresa pequena a cumprir essas etapas sem depender apenas da memória ou da urgência.",
        ],
      },
    ],
    practicalChecklistTitle: "Base mínima para empresa pequena que já tem equipe",
    practicalChecklist: [
      "Saber como a admissão vai acontecer antes de abrir a vaga.",
      "Entender quais documentos dependem da função e da atividade exercida.",
      "Criar um fluxo simples para não descobrir obrigação apenas quando o problema aparece.",
    ],
  },
  "primeiro-funcionario-o-que-muda-na-pratica": {
    articleSections: [
      {
        title: "Contratar o primeiro funcionário muda a rotina mais do que parece",
        paragraphs: [
          "Antes disso, a empresa responde apenas pela própria atividade. Depois, passa a responder também pela entrada de outra pessoa na operação. Na prática, mudam os prazos, as responsabilidades, os documentos e o ritmo da rotina.",
          "É exatamente por isso que o primeiro funcionário costuma trazer ansiedade. O dono quer crescer, não quer perder o candidato e ao mesmo tempo descobre que precisa organizar etapas que nunca fizeram parte da rotina anterior.",
        ],
      },
      {
        title: "O erro mais comum na primeira contratação é deixar tudo para a semana da admissão",
        paragraphs: [
          "Quando o processo começa tarde, tudo vira urgência: exame, ASO, dados de registro, alinhamento com o contador e definição do cargo. O problema não é apenas burocrático. É começar a relação de trabalho de forma desorganizada.",
          "A contratação fica mais simples quando cargo, documentos, exame admissional e data de início são definidos com antecedência.",
        ],
      },
    ],
    practicalChecklistTitle: "O que muda antes mesmo do primeiro dia de trabalho",
    practicalChecklist: [
      "A empresa passa a precisar de um fluxo claro de admissão.",
      "Exame admissional e ASO deixam de ser detalhe e viram etapa concreta.",
      "Cargo, rotina e documentação precisam bater desde o início.",
    ],
  },
  "documentos-obrigatorios-empresa-com-funcionarios": {
    articleSections: [
      {
        title: "Documentos obrigatórios precisam refletir a rotina da empresa",
        paragraphs: [
          "Muita empresa pensa em documentos como uma pilha de arquivos que alguém precisa guardar. Quando há empregados, os registros também demonstram como a admissão foi feita, qual é a função e de que forma a rotina ocupacional foi organizada.",
          "Isso muda a forma de trabalhar. O documento deixa de ser apenas um arquivo administrativo e passa a acompanhar as decisões e os fatos da operação.",
        ],
      },
      {
        title: "Checklist de documentos só funciona quando orienta ação e não só nome de sigla",
        paragraphs: [
          "Empresário não precisa decorar sigla sem contexto. Precisa entender para que cada camada de documento serve, quando ela entra e quem precisa alimentar aquela informação para que o papel não vire enfeite.",
          "Uma lista útil explica a finalidade de cada documento, quem fornece as informações e em que momento o registro precisa ser criado ou atualizado.",
        ],
      },
    ],
    practicalChecklistTitle: "Perguntas práticas para organizar a base documental",
    practicalChecklist: [
      "A empresa sabe quais documentos dependem do risco e da função real?",
      "Existe alguém garantindo que exames, ASO e eventos não andem separados?",
      "Os registros acompanham o que acontece de fato na operação?",
    ],
  },
  "contador-cuida-de-tudo": {
    articleSections: [
      {
        title: "O contador é parte da solução, mas não substitui a operação da empresa",
        paragraphs: [
          "A confusão geralmente não vem de má-fé. Vem de uma expectativa mal colocada. O empresário terceiriza a contabilidade, ganha segurança na parte fiscal e imagina que o resto também será puxado automaticamente.",
          "Várias informações importantes não nascem no escritório contábil. Elas vêm do cargo real, da forma como a equipe trabalha, da urgência da admissão, do risco da atividade e das decisões do próprio negócio.",
        ],
      },
      {
        title: "Quando o empresário acha que o contador cuida de tudo, nasce um ponto cego",
        paragraphs: [
          "Quando ninguém dentro da empresa se reconhece como dono do tema, o contador passa a receber informação incompleta, tarde ou sem contexto. A falha nem sempre explode na hora. Ela vai se acumulando em detalhe mal alimentado.",
          "O ajuste necessário é de responsabilidade, não de culpa. A empresa precisa definir quem fornece cada informação, quem acompanha o prazo e quando o contador deve ser acionado.",
        ],
      },
    ],
    practicalChecklistTitle: "O que continua sendo responsabilidade da empresa",
    practicalChecklist: [
      "Descrever com clareza cargo, rotina e mudanças na operação.",
      "Avisar contratações, urgências e alterações com antecedência suficiente.",
      "Não presumir que exame, documento e informação ocupacional surjam sozinhos da parte contábil.",
    ],
  },
  "fiscalizacao-empresa-o-que-podem-cobrar": {
    articleSections: [
      {
        title: "Fiscalização na empresa não se resume a imposto, nota e prefeitura",
        paragraphs: [
          "Quando se fala em fiscalização, muita gente pensa só em imposto, nota e prefeitura. Essa visão é incompleta. Dependendo da atividade e da estrutura da empresa, o que entra no radar inclui equipe, processo, documento e prova do que a operação faz de verdade.",
          "O problema é que quase ninguém se organiza pensando nisso antes. A empresa segue tocando a rotina até o dia em que percebe que não saberia exatamente o que mostrar se fosse cobrada.",
        ],
      },
      {
        title: "O que a fiscalização pode cobrar depende do que a empresa consegue provar",
        paragraphs: [
          "Fiscalização não precisa ser tratada como fantasma. Ela funciona melhor como teste de maturidade. Se uma cobrança simples já desmonta a organização interna, o problema não está na visita. Está no que a empresa ainda não estruturou.",
          "Para sair do campo abstrato, vale listar os documentos, responsáveis e evidências que a empresa precisaria apresentar em uma fiscalização.",
        ],
      },
    ],
    practicalChecklistTitle: "Antes de qualquer cobrança chegar, vale checar",
    practicalChecklist: [
      "Se a empresa sabe quais documentos apresentaria primeiro.",
      "Se os fluxos de equipe e operação estão minimamente organizados.",
      "Se existe clareza sobre o que depende de RH, de saúde ocupacional e de decisão interna.",
    ],
  },
  "empresa-regularizada-com-funcionarios": {
    articleSections: [
      {
        title: "Empresa regularizada com funcionários precisa de encaixe entre cadastro, rotina e prova",
        paragraphs: [
          "Muitos empresários têm a sensação de que falta alguma coisa, mas não conseguem nomear o que é. Isso acontece quando a empresa já não precisa apenas de documentos isolados, mas de conexão entre admissão, função, exame, evento e registro.",
          "CNPJ, nota fiscal, Simples Nacional, alvará e folha de pagamento são importantes, mas nenhum deles cobre sozinho a rotina de uma empresa com empregados.",
        ],
      },
      {
        title: "A empresa mais exposta nem sempre é a mais bagunçada por fora",
        paragraphs: [
          "Às vezes o negócio parece organizado por fora. Tem contador, folha, licença e gente trabalhando. O que falta é a conexão entre essas partes, e essa ausência transforma pequenas urgências em problemas recorrentes.",
          "Regularização com empregados depende de um sistema simples de responsabilidades, prazos e registros, não de tarefas espalhadas.",
        ],
      },
    ],
    practicalChecklistTitle: "O que não pode faltar numa leitura integrada da empresa",
    practicalChecklist: [
      "Admissão e documentos precisam conversar com a operação real.",
      "Exames e rotina ocupacional não podem ficar soltos da agenda da empresa.",
      "A empresa precisa saber quem responde por cada obrigação quando passa a ter empregados.",
    ],
  },
};

const legacyEmpresarioSEO: Record<string, EmpresarioDocument> = Object.fromEntries(
  Object.entries(empresarioBaseSEO).map(([slug, data]) => [
    slug,
    {
      ...data,
      cta: empresarioStrategicMap[slug as keyof typeof empresarioBaseSEO].cta,
      ...empresarioNarrativeMap[slug as keyof typeof empresarioBaseSEO],
    },
  ]),
) as Record<string, EmpresarioDocument>;

void legacyEmpresarioSections;
void legacyEmpresarioSEO;

export {
  empresarioKeywordTargets,
  empresarioSEO,
  empresarioSections,
} from '@/lib/data/empresario-content';
