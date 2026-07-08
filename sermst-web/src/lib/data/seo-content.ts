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

export interface EmpresarioDocument extends SEODocument {
  section:
    | "Regularizacao"
    | "Contratacao e equipe"
    | "Documentos e rotina"
    | "Fiscalizacao e risco";
  summary: string;
  supportingLinks: ContentBridgeLink[];
  primaryKeyword: string;
  secondaryKeywords: string[];
  searchIntent: string;
  funnelStage: "Topo" | "Topo/Meio" | "Meio";
  antiCannibalization: string;
  geoStrategy: string;
  cta: {
    label: string;
    href: string;
    reason: string;
  };
  articleSections: Array<{
    title: string;
    paragraphs: string[];
  }>;
  practicalChecklistTitle: string;
  practicalChecklist: string[];
}

type EmpresarioBaseDocument = Omit<
  EmpresarioDocument,
  | "primaryKeyword"
  | "secondaryKeywords"
  | "searchIntent"
  | "funnelStage"
  | "antiCannibalization"
  | "geoStrategy"
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
      "O principal hub de Medicina do Trabalho na capital. Atendemos empresas de São Paulo com foco em exames admissionais rápidos, PCMSO consistente e conformidade operacional.",
    perfilEconomico:
      "São Paulo concentra o maior parque de serviços e indústria do país. Com mais de 12 milhões de trabalhadores formais na Grande São Paulo, a pressão por conformidade no eSocial SST é constante — qualquer falha em S-2220 ou ASO gera passivo imediato. A diversidade de setores exige médicos do trabalho familiarizados com riscos químicos, físicos, ergonômicos e psicossociais ao mesmo tempo.",
    setoresPredominantes: [
      "Serviços e tecnologia — alta rotatividade, exame admissional em escala",
      "Construção civil — NR-18, NR-35, laudos de insalubridade e periculosidade",
      "Saúde e farmacêutico — PCMSO rigoroso, exames complementares específicos",
      "Varejo e logística — admissional expresso, toxicológico CLT para motoristas",
      "Indústria de transformação — PGR, LTCAT, agentes químicos e físicos",
    ],
    bairrosAtendidos: [
      "Centro Histórico e Sé",
      "Brás, Mooca e Tatuapé",
      "Santo André e ABC Paulista",
      "Lapa, Pinheiros e Vila Madalena",
      "Brooklin, Santo Amaro e Jabaquara",
    ],
    diferencialLocal:
      "Localizada no Largo do Paissandu, 72 — Centro Histórico — a SERMST atende sem agendamento. Laboratório próprio, equipe médica in loco e integração direta com o eSocial. Para empresas paulistanas com alta rotatividade ou múltiplos CNPJs, o fluxo corporativo centralizado elimina o retrabalho do RH.",
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
      "Santo André é um dos maiores polos industriais da América Latina. Sede histórica de montadoras como Mercedes-Benz e de um denso parque metal-mecânico, a cidade concentra trabalhadores expostos a agentes físicos, químicos e biológicos que exigem laudos específicos de insalubridade, PGR atualizado e PCMSO adaptado à atividade de risco. A conformidade com eSocial SST é especialmente crítica para empresas do segmento automotivo e fornecedoras de indústria pesada.",
    setoresPredominantes: [
      "Automotivo — admissional com audiometria, exames de sangue e avaliação ergonômica",
      "Metal-mecânico — insalubridade NR-15, PGR com agentes físicos e químicos",
      "Químico e petroquímico — LTCAT, laudo de periculosidade NR-16",
      "Têxtil e calçadista — ergonomia NR-17, PCMSO com avaliação musculoesquelética",
      "Construção e infraestrutura — NR-18, trabalho em altura NR-35",
    ],
    bairrosAtendidos: [
      "Centro e Jardim Bela Vista",
      "Capuava — polo industrial",
      "Vila Humaitá e Jardim Mauá",
      "Utinga — polo têxtil e metal",
      "Vila Luzita e Campestre",
    ],
    diferencialLocal:
      "Para indústrias de Santo André, a SERMST oferece laudos de insalubridade e periculosidade com base técnica sólida e defesa em eventual fiscalização. O fluxo expresso para exame admissional — com laboratório próprio — evita que admissões da linha de produção sejam travadas por fila em clínica genérica.",
  },
  {
    nome: "São Bernardo",
    slug: "sao-bernardo",
    unidadeReferencia: "São Paulo (Centro)",
    distanciaMedia: "18 min",
    adjetivo: "saobernardense",
    contextoEmpresarial:
      "Coração automotivo do Brasil. Medicina do trabalho para empresas de São Bernardo com agilidade, rigor técnico e segurança jurídica.",
    perfilEconomico:
      "São Bernardo do Campo abriga a maior concentração de montadoras do hemisfério sul — Volkswagen, Mercedes-Benz, Scania, Ford e suas cadeias de fornecedores. Isso cria uma demanda intensa por LTCAT (Laudo Técnico das Condições Ambientais de Trabalho), laudos de insalubridade e periculosidade e PCMSO adaptado a ambientes com ruído intenso, solventes e atividade física pesada. O eSocial S-2240 é crítico para as indústrias da cidade e exige base técnica precisa.",
    setoresPredominantes: [
      "Montadoras e autopeças — LTCAT, S-2240, laudos de agentes físicos e químicos",
      "Metalúrgico — insalubridade NR-15, periculosidade NR-16, PGR",
      "Petroquímico e plásticos — PCMSO com exames complementares específicos",
      "Logística pesada — toxicológico CLT, admissional para operadores",
      "Construção e obras industriais — NR-18, NR-35, APR",
    ],
    bairrosAtendidos: [
      "Centro e Nova Petrópolis",
      "Rudge Ramos — polo universitário e serviços",
      "Demarchi e Assunção — indústria",
      "Paulicéia — automotivo",
      "Riacho Grande e Cooperativa",
    ],
    diferencialLocal:
      "A SERMST tem experiência direta com as exigências técnicas do setor automotivo — incluindo elaboração de LTCAT para ambientes com ruído acima de 85 dB, dosimetria e avaliação de agentes químicos em linha de produção. Para fornecedores de montadoras, o laudo precisa resistir à auditoria do cliente final, não apenas à fiscalização do Ministério do Trabalho.",
  },
  {
    nome: "São Caetano",
    slug: "sao-caetano",
    unidadeReferencia: "São Paulo (Centro)",
    distanciaMedia: "10 min",
    adjetivo: "sulsancaetanense",
    contextoEmpresarial:
      "Polo de serviços avançados com o maior PIB per capita do Brasil. Saúde ocupacional orientada a prevenção, compliance e fluidez operacional.",
    perfilEconomico:
      "São Caetano do Sul é reconhecida pelo maior PIB per capita do Brasil — resultado de uma economia baseada em serviços especializados, saúde, tecnologia e comércio de alto padrão. O perfil de risco ocupacional é predominantemente ergonômico e psicossocial: lesões por esforço repetitivo (LER/DORT), estresse ocupacional e doenças relacionadas ao trabalho sedentário. Empresas de São Caetano precisam de PCMSO bem estruturado e monitoramento ativo da saúde dos colaboradores.",
    setoresPredominantes: [
      "Serviços e consultorias — PCMSO com ênfase em riscos psicossociais (NR-01)",
      "Saúde e clínicas — PCMSO com avaliação de riscos biológicos",
      "Comércio varejista — ergonomia NR-17, admissional expresso",
      "Tecnologia e TI — avaliação ergonômica, LER/DORT",
      "Educação e ensino superior — ASO periódico, gestão de saúde coletiva",
    ],
    bairrosAtendidos: [
      "Centro e Barcelona",
      "Nova Gerty e Cerâmica",
      "Santo André border — indústria de médio porte",
      "Mauá — corredor industrial",
      "Fundação e Oswaldo Cruz",
    ],
    diferencialLocal:
      "Para empresas de serviços em São Caetano, a SERMST oferece um PCMSO orientado ao perfil real do cargo — não um modelo genérico. A avaliação ergonômica e o monitoramento de riscos psicossociais (exigidos pela NR-01 atualizada) são integrados ao programa, com documentação que sustenta o eSocial sem retrabalho.",
  },
  {
    nome: "Diadema",
    slug: "diadema",
    unidadeReferencia: "São Paulo (Centro)",
    distanciaMedia: "20 min",
    adjetivo: "diademense",
    contextoEmpresarial:
      "Polo metal-mecânico, químico e farmacêutico. Especialistas em exames complementares, PGR e documentação de SST para indústrias em Diadema.",
    perfilEconomico:
      "Diadema concentra um dos maiores parques industriais do ABC Paulista, com forte presença de indústrias químicas, farmacêuticas, de embalagens e metal-mecânicas. O município tem alta incidência de processos trabalhistas relacionados a insalubridade e acidente de trabalho — o que torna a documentação de SST um instrumento de defesa jurídica, não apenas de compliance. PGR desatualizado ou laudo de insalubridade inconsistente é passivo certo em Diadema.",
    setoresPredominantes: [
      "Indústria química e farmacêutica — LTCAT, laudo de insalubridade, PGR com agentes químicos",
      "Metal-mecânico e autopeças — NR-15, NR-16, avaliação de ruído e calor",
      "Plásticos e embalagens — agentes químicos, ergonomia, PCMSO",
      "Alimentício e bebidas — higiene ocupacional, exames periódicos específicos",
      "Construção industrial — NR-18, NR-35, CIPA",
    ],
    bairrosAtendidos: [
      "Centro e Piraporinha",
      "Taboão — polo metal-mecânico",
      "Eldorado — indústria química",
      "Casa Grande e Serraria",
      "Conceição — corredor industrial",
    ],
    diferencialLocal:
      "Em Diadema, o laudo de insalubridade precisa ser elaborado por profissional habilitado e resistir à contestação judicial. A SERMST realiza a medição dos agentes ambientais (ruído, temperatura, agentes químicos) com equipamentos calibrados e emite o laudo com base técnica que sustenta defesa em reclamatória trabalhista — não apenas cumpre a formalidade da NR-15.",
  },
  {
    nome: "Osasco",
    slug: "osasco",
    unidadeReferencia: "São Paulo (Centro)",
    distanciaMedia: "35 min",
    adjetivo: "osasquense",
    contextoEmpresarial:
      "Hub financeiro e de e-commerce em expansão. Soluções ágeis em exame admissional e conformidade para o mercado dinâmico de Osasco.",
    perfilEconomico:
      "Osasco é o segundo maior polo financeiro do estado de São Paulo, com sede de grandes bancos, seguradoras e fintechs. Nos últimos anos, a cidade também se tornou referência em e-commerce e logística de última milha — setores com altíssima rotatividade de mão de obra. Essa combinação exige um fluxo de exame admissional extremamente ágil: atraso de ASO em Osasco significa contratação travada em operações que não param.",
    setoresPredominantes: [
      "Financeiro e seguros — PCMSO com risco ergonômico e psicossocial",
      "E-commerce e logística — admissional expresso, toxicológico CLT",
      "Varejo de grande porte — ergonomia NR-17, exame admissional em volume",
      "Serviços de saúde — PCMSO com riscos biológicos",
      "Indústria farmacêutica — agentes químicos, PGR, LTCAT",
    ],
    bairrosAtendidos: [
      "Centro e Presidente Altino",
      "Km 18 — polo logístico",
      "Jardim Elvira e Bela Vista",
      "Umuarama — corredor industrial",
      "Baronesa e Vila Yara",
    ],
    diferencialLocal:
      "Para operações de e-commerce e logística em Osasco, a SERMST oferece fluxo corporativo de admissional com liberação ágil de ASO — sem agendamento, sem fila, com resultado integrado ao eSocial. Para o setor financeiro, o PCMSO inclui avaliação de riscos ergonômicos e psicossociais exigidos pela nova NR-01.",
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
      "Guarulhos abriga o maior aeroporto da América Latina e um dos maiores polos logísticos do país. A cidade concentra distribuidoras, operadores logísticos, transportadoras e indústrias de autopeças que dependem do corredor Anhanguera-Bandeirantes. O setor de transporte exige exame toxicológico obrigatório (CLT art. 168) para motoristas profissionais — e o volume de admissões em logística gera demanda constante por ASO expresso.",
    setoresPredominantes: [
      "Logística e transporte — toxicológico CLT obrigatório, admissional em volume",
      "Aviação e aeroporto — PCMSO com riscos específicos de ground handling",
      "Autopeças e metal-mecânico — NR-15, NR-16, LTCAT",
      "Distribuidoras e e-commerce — admissional expresso, ergonomia de operação",
      "Indústria alimentícia — higiene ocupacional, exames periódicos",
    ],
    bairrosAtendidos: [
      "Centro e Vila Galvão",
      "Cumbica — polo industrial aeroportuário",
      "Jardim Presidente Dutra — logística",
      "Macedo — indústria e autopeças",
      "Pimentas e Bonsucesso",
    ],
    diferencialLocal:
      "Para transportadoras e operadoras logísticas em Guarulhos, a SERMST realiza o exame toxicológico de longa janela de detecção exigido pela CLT para motoristas de carga e passageiros — com laudo válido para o eSocial e em prazo compatível com a rotina de contratação intensiva do setor.",
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
      "Barueri concentra o maior parque de multinacionais do estado de São Paulo, especialmente nos condomínios empresariais de Alphaville e Tamboré. O perfil de RH nessas empresas é sofisticado: departamentos estruturados, auditorias periódicas de conformidade e exigência de documentação SST que integre com sistemas de gestão internacionais. O erro aqui não é falta de atenção — é contar com fornecedores de SST que não têm estrutura técnica para atender o padrão exigido.",
    setoresPredominantes: [
      "Tecnologia e TI — ergonomia NR-17, PCMSO com riscos psicossociais NR-01",
      "Serviços financeiros e seguros — PCMSO estruturado, gestão eSocial",
      "Farmacêutico e life sciences — agentes químicos, LTCAT, PGR",
      "Varejo e consumo premium — admissional expresso, gestão de múltiplos CNPJs",
      "Serviços corporativos — gestão SST centralizada para grupos empresariais",
    ],
    bairrosAtendidos: [
      "Alphaville — multinacionais e corporativo",
      "Tamboré — condomínio empresarial",
      "Centro de Barueri — comércio e serviços",
      "Jardim Belval e Industrial",
      "Bethaville e Jardim Tupanci",
    ],
    diferencialLocal:
      "Para grupos empresariais e multinacionais em Barueri, a SERMST oferece gestão SST centralizada com laudos digitais, PCMSO por CNPJ e dashboards de conformidade para o RH. A estrutura é compatível com auditorias internas de multinacionais e com os eventos SST do eSocial — S-2220, S-2240 e S-2210 gerenciados em um único fluxo.",
  },
];

export const estatisticasSERMST = {
  anosExperiencia: "+40",
  empresasAtendidas: "+3.000",
  clinicasCredenciadas: "+500",
  vidasGeriadas: "+40k",
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
        "A SERMST centraliza a gestão técnica de Saúde e Segurança do Trabalho com visão corporativa. Em vez de peças soltas, a empresa passa a ter medicina ocupacional, engenharia de segurança, documentação obrigatória e rotina operacional trabalhando no mesmo sentido.",
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
      "O exame admissional é uma exigência legal da NR-07 (PCMSO) e deve ser realizado antes que o colaborador inicie suas funções. Além de garantir a aptidão do funcionário, ele sustenta o envio correto do evento S-2220 ao eSocial e ajuda a evitar multas por falhas no processo de admissão.",
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
        "ASO com validade plena para eSocial",
        "Resultados integrados em um só fluxo para o RH",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Uma gestão de saúde ocupacional eficiente começa no admissional. Integrar NR-07 e eSocial é a chave para segurança jurídica e ritmo de contratação.",
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
      "PCMSO não pode ser documento genérico. A SERMST elabora e coordena o PCMSO com base na realidade da sua empresa, definindo grade de exames, periodicidade, coerência com riscos ocupacionais e sustentação correta para o eSocial.",
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
        "PCMSO genérico, desconectado da operação e mal alinhado ao risco do cargo abre espaco para exames inadequados, falhas em S-2220, insegurança jurídica e passivos ocupacionais.",
      solucao:
        "A SERMST trabalha com assessoria médica real, leitura do processo produtivo e construcao de um programa de saúde ocupacional que protege a empresa tecnicamente, operacionalmente e juridicamente.",
      beneficios: [
        "Responsabilidade técnica médica definida",
        "Integração total com PGR e eSocial",
        "Cronograma de exames coerente com os riscos da função",
        "Segurança jurídica contra doenças ocupacionais",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Um PCMSO sério exige que o médico conheca a realidade operacional do cliente e não apenas assine um modelo pronto.",
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
      "Sua empresa precisa de PGR coerente com a operação real, e não de um documento padrão. A SERMST realiza vistoria técnica, inventário de riscos e plano de acao com foco em conformidade, prevenção e sustentação do eSocial.",
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
        "A SERMST faz engenharia de campo orientada a realidade da empresa, analisa atividades, máquinas, agentes nocivos e medidas de controle para entregar um inventário de riscos defensável e realmente utilizável.",
      beneficios: [
        "Inventário de riscos conforme NR-01",
        "PGR baseado na realidade operacional",
        "Plano de ação com cronograma definido",
        "Blindagem de patrimônio e operação",
        "Assessoria em fiscalizações e auditorias",
        "Gestão dinamica do plano de acao",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "PGR não é papel. E gestão de risco real para evitar acidente, retrabalho e multa.",
        author: "Diretoria Técnica",
        role: "SERMST",
      },
      faq: [
        {
          q: "O que mudou no PGR?",
          a: "O PGR integra o gerenciamento de riscos ocupacionais e exige inventário coerente, plano de acao e acompanhamento continuo.",
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
        "A SERMST combina medição técnica, critério de enquadramento e leitura jurídica do risco para entregar LTCAT mais consistente e defensável.",
      beneficios: [
        "Medições de ruído e calor certificadas",
        "Base técnica para o Perfil Profissiográfico Previdenciário",
        "Segurança do negócio e compliance",
        "Envio estruturado ao eSocial",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "LTCAT sem médicao quantitativa em campo costuma enfraquecer a defesa técnica da empresa.",
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
      "Gestão de eSocial SST para empresas que querem parar de correr atras de prazo, XML e erro de envio. A SERMST organiza S-2220 e S-2240 com processo, rastreabilidade e suporte para uma rotina de compliance mais segura.",
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
        "Monitoramento de pendências e prazos",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "No eSocial, agilidade no dado e tao importante quanto a qualidade técnica da informação.",
        author: "Governanca Corporativa",
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
      "Proteja a audição da equipe e reduza exposição a passivos relacionados a ruído ocupacional. A SERMST realiza audiometria ocupacional e audiometria tonal integrada ao PCMSO, com estrutura adequada, cabine calibrada e foco em validade técnica.",
    isClinico: true,
    quandoRequerido:
      "A audiometria ocupacional, normalmente realizada no formato de audiometria tonal, é indicada para funções expostas a ruído acima dos limites de tolerância e costuma ser exigida em admissão, demissão e acompanhamentos periódicos.",
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
      "Exame toxicológico com atendimento ágil em São Paulo, laudo válido em todo o Brasil e suporte tanto para empresas quanto para pessoa física. A SERMST atende demandas ocupacionais de admissão e demissão, além de renovação de CNH para condutores das categorias C, D e E, com preço transparente de R$ 200,00.",
    isClinico: true,
    fluxoCorporativo: [
      "Triagem da demanda e envio da guia",
      "Coleta do exame toxicológico",
      "Laudo liberado e apoio ao RH",
    ],
    quandoRequerido:
      "O exame toxicológico aparece em dois cenários principais nesta página: na rotina ocupacional de empresas que contratam ou desligam motoristas e na renovação de CNH de condutores das categorias C, D e E. Por isso, a SERMST atende tanto pessoa jurídica quanto pessoa física que precisa regularizar essa exigência.",
    expectativaCusto:
      "Preço do exame toxicológico: R$ 200,00 por colaborador. Valor indicado para atendimento da demanda ocupacional com coleta organizada pela SERMST.",
    content: {
      dor:
        "Quando o exame toxicológico atrasa, a admissão para, a escala da frota fica descoberta e o RH assume risco operacional e regulatório ao mesmo tempo. Do lado da pessoa física, atrasar a renovação da exigência para CNH C, D ou E também trava a regularização do condutor e gera dor desnecessária.",
      solucao:
        "A SERMST organiza a coleta do exame toxicológico com fluxo claro, orientação documental e atendimento que funciona tanto para RH quanto para pessoa física. Assim, empresa e condutor ganham previsibilidade de prazo, preço definido e uma condução mais simples da exigência ocupacional ou da renovação da CNH C, D e E.",
      beneficios: [
        "Coleta rápida e discreta",
        "Preço transparente de R$ 200,00",
        "Atendimento para empresa e pessoa física",
        "Laudo com validade nacional",
        "Atendimento para admissão, demissão e renovação de CNH C, D e E",
      ],
    },
    documentosNecessarios: [
      "Documento de identidade (RG ou CNH)",
      "Carteira Nacional de Habilitação (CNH) — cat. C, D ou E",
      "Guia de exame emitida pela empresa",
    ],
    geoOpt: {
      statistic:
        "Buscas por “exame toxicológico” chegam a 74 mil por mês no Brasil, enquanto “exame toxicológico cnh” alcança 27,1 mil buscas mensais.",
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
          a: "Nesta página, a demanda mais comum vem de dois públicos: empresas que precisam do exame toxicológico ocupacional para motoristas e condutores pessoa física com CNH nas categorias C, D e E que precisam cumprir a exigência ligada à renovação da habilitação.",
        },
        {
          q: "O que detecta o exame toxicológico?",
          a: "O exame toxicológico identifica o consumo de substâncias psicoativas em janela retroativa de longo prazo por meio de amostra biológica apropriada.",
        },
        {
          q: "Exame toxicológico serve para admissão e CNH?",
          a: "Sim. A SERMST atende tanto empresas que precisam do exame na admissão ou demissão quanto pessoa física que busca o exame para exigências ligadas à CNH das categorias C, D e E.",
        },
        {
          q: "A SERMST atende pessoa física para exame toxicológico?",
          a: "Sim. Além do atendimento ocupacional para empresas, a SERMST também atende pessoa física que precisa realizar o exame toxicológico para regularizar demandas ligadas à CNH C, D ou E.",
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
      "Exames complementares em medicina do trabalho com mais agilidade para o RH e menos deslocamento para o colaborador. A SERMST integra exames de sangue, visao, ECG, EEG e espirometria ao fluxo do ASO para acelerar a admissão e reforcar a conformidade.",
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
      "Treinamentos de NRs com foco em validade documental, aplicação prática e redução de risco operacional. A SERMST oferece capacitação em CIPA, brigada e outras exigências regulamentares com controle de certificados e recertificações.",
    isClinico: false,
    fluxoCorporativo: [
      "Mapeamento de necessidades",
      "Cronograma de treinamentos",
      "Gestão de certificados e reciclagens",
    ],
    quandoRequerido:
      "Os treinamentos são exigidos conforme os riscos da operação e as normas aplicáveis ao negócio. A falta de formação ou reciclagem pode comprometer o eSocial e fragilizar a defesa da empresa em caso de acidente.",
    content: {
      dor:
        "Certificados sem consistência técnica ou treinamentos superficiais não protegem o colaborador nem o CNPJ quando a empresa precisa provar sua rotina de prevenção.",
      solucao:
        "A SERMST trabalha com metodologia voltada a adultos, instrutores experientes e organização do ciclo de treinamentos para transformar obrigação legal em proteção operacional.",
      beneficios: [
        "Catálogo amplo de NRs e temas obrigatórios",
        "Formação de CIPA e brigada de incêndio",
        "Certificados digitais com validação",
        "Treinamentos teóricos e práticos in-company ou em hub",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Treinamento eficaz não é custo. É investimento em continuidade operacional e paz jurídica.",
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
          a: "Sim. A SERMST realiza treinamento de CIPA e de designado da NR-05 com carga horária compatível com o grau de risco da empresa e emissão de certificado.",
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
    h1: "Pericia Trabalhista | Assistente Técnico Especializado",
    hook:
      "Defesa técnica para empresas que precisam responder melhor em perícias trabalhistas de insalubridade, pericuosidade e doenca ocupacional. A SERMST atua com acompanhamento estrategico, quesitos técnicos e leitura critica do caso.",
    isClinico: false,
    quandoRequerido:
      "Esse serviço costuma ser necessario quando a empresa está envolvida em processo trabalhista e precisa de assistencia técnica qualificada para acompanhar a perícia judicial.",
    content: {
      dor:
        "Laudos periciais desfavoraveis por falta de defesa técnica adequada podem elevar condenacoes e enfraquecer a posicao jurídica da empresa.",
      solucao:
        "A SERMST atua com peritos experientes, construcao de quesitos, acompanhamento de diligencia e parecer técnico mais alinhado aos interesses defensivos da empresa.",
      beneficios: [
        "Elaboração de quesitos técnicos",
        "Acompanhamento na diligencia",
        "Parecer técnico fundamentado",
        "Prevencao de passivos",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Pericia se vence com leitura técnica, quesito bem feito e acompanhamento inteligente do caso.",
        author: "Diretoria Técnica",
        role: "SERMST",
      },
      faq: [
        {
          q: "O assistente técnico pode falar com o perito?",
          a: "Sim. O assistente técnico pode acompanhar a diligencia e atuar tecnicamente dentro dos limites processuais do caso.",
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
      "Conformidade com NR-07 e PCMSO",
      "Documentação técnica que sustenta auditoria",
      "Redução de passivo trabalhista por SST mal feito",
    ],
  },
  geoOpt: {
    expertQuote: {
      text: "Saúde ocupacional bem feita é blindagem de patrimônio, não papelada.",
      author: "Equipe Técnica",
      role: "SERMST",
    },
    faq: [
      {
        q: "Onde isso se conecta com SST da empresa?",
        a: "Esse tema toca diretamente PCMSO, PGR ou eSocial — a SERMST faz auditoria gratuita do que sua empresa tem hoje e mostra onde está exposta.",
      },
    ],
  },
});

export const saudeSEO: Record<string, SEODocument> = {
  "importancia-do-exame-periodico": {
    h1: "Exame periódico ocupacional: o que é, periodicidade e regras",
    seoTitle: "Exame Periódico Ocupacional | SERMST",
    hook:
      "Entenda o que é o exame periódico ocupacional, quem define a periodicidade, quais exames podem entrar e por que atrasar isso aumenta o risco da empresa.",
    isClinico: true,
    content: {
      dor:
        "Empresas que deixam exame periódico vencer acumulam risco médico, operacional e jurídico ao mesmo tempo.",
      solucao:
        "Com cronograma médico coerente e controle dos vencimentos, a empresa protege a saúde do trabalhador e melhora a disciplina de compliance ocupacional.",
      beneficios: [
        "Mais previsibilidade para o RH",
        "PCMSO mais coerente com a operação",
        "Menos fragilidade documental e menos retrabalho",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Exame periódico bem organizado não é detalhe administrativo. É parte da defesa médica e documental da empresa.",
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
          a: "A empresa fica mais exposta a falhas de compliance, retrabalho do RH, fragilidade documental e dificuldade de provar que monitorou a saúde ocupacional no tempo certo.",
        },
      ],
    },
  },
  // â”€â”€â”€ Conteúdos migrados do WordPress (redirects 301) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  "o-que-e-saude-ocupacional": saudeEntry(
    "O que é Saúde Ocupacional: guia completo para gestores",
    "Saúde ocupacional não é só ASO e exame periódico. É um sistema de prevenção que protege o trabalhador, a operação e o patrimônio da empresa contra afastamento, processo e multa.",
    "A maioria dos gestores trata saúde ocupacional como burocracia até o problema explodir — afastamento longo, perícia, ação judicial.",
    "Estruturar saúde ocupacional como rotina (não como reação) reduz afastamento, sustenta PCMSO e cria evidência técnica para defesa em fiscalização.",
  ),
  "exame-demissional": saudeEntry(
    "Exame demissional: o que e quando fazer",
    "O exame demissional é a última oportunidade da empresa documentar o estado de saúde do colaborador antes da rescisão. Sem ele, qualquer doença futura pode ser atribuída ao período trabalhado.",
    "Empresas que pulam ou atrasam demissional acumulam passivo: a falta de evidência abre espaço para ação trabalhista por doença ocupacional anos depois.",
    "Demissional feito no prazo e registrado corretamente no eSocial fecha o ciclo ocupacional do trabalhador e protege a empresa de reclamação retroativa.",
  ),
  "o-que-sao-epis": saudeEntry(
    "O que são EPIs: o equipamento que protege o trabalhador e a empresa",
    "EPI (Equipamento de Proteção Individual) é exigência legal — fornecimento gratuito, treinamento de uso, fiscalização do uso e troca periódica. Falhar em qualquer parte é responsabilidade direta da empresa.",
    "Empresas que distribuem EPI sem treinamento, sem ficha de entrega e sem fiscalização de uso descobrem o problema só quando acontece o acidente — e a defesa cai por falta de evidência.",
    "EPI bem implementado tem três partes: o equipamento certo (CA válido), o trabalhador treinado (registro em ficha) e a fiscalização do uso (responsabilidade do encarregado e do SESMT).",
  ),
  "gestao-sst": saudeEntry(
    "Gestão de SST: o que é e como organizar sem virar burocracia",
    "Gestão de Saúde e Segurança do Trabalho não é um documento — é um sistema. Conecta exame, laudo, treinamento e eSocial em fluxo único que sustenta operação e defende o CNPJ.",
    "Empresas tratam SST como pasta de arquivo. Resultado: documento existe, mas não reflete a operação real. Em fiscalização ou processo, isso desmonta.",
    "Gestão de SST bem feita é cíclica: identifica risco -> atualiza PGR -> ajusta PCMSO -> documenta treinamento -> envia eSocial -> audita. Cada etapa alimenta a próxima.",
  ),
  "pcmso-programa-controle-medico": saudeEntry(
    "PCMSO: o que é, validade e quem precisa elaborar",
    "O PCMSO organiza o monitoramento da saúde ocupacional conforme os riscos de cada função. A NR-07 prevê cenários específicos de dispensa para pequenos negócios, sem eliminar exames nem ASO.",
    "PCMSO genérico ou desatualizado não reflete a operação real, fragiliza a vigilância médica e pode gerar inconsistências nos eventos de SST.",
    "PCMSO correto é personalizado: reflete riscos reais, define exames e periodicidades coerentes e permanece alinhado com PGR e eSocial.",
  ),
  "aso-atestado-saude-ocupacional": saudeEntry(
    "ASO: o que é, quando emitir e por que protege a empresa",
    "O Atestado de Saúde Ocupacional é a evidência jurídica de que a empresa avaliou a saúde do trabalhador. Sem ASO válido, qualquer doença futura pode ser atribuída ao período de trabalho.",
    "ASO feito fora do prazo, com campos faltando, ou por médico não habilitado não protege a empresa — mesmo que o exame tenha sido realizado. O documento precisa estar correto em forma e conteúdo.",
    "ASO correto tem: dados do médico responsável pelo PCMSO, quando houver, assinatura do médico que realizou o exame clínico, campos preenchidos, disponibilização ao trabalhador e envio do S-2220 ao eSocial dentro do prazo.",
  ),
  "medicina-do-trabalho-guia": saudeEntry(
    "Medicina do Trabalho: o que é e o que toda empresa precisa saber",
    "Medicina do trabalho conecta saúde do trabalhador, segurança jurídica da empresa e conformidade com o eSocial. Quando bem estruturada, reduz afastamento, processo trabalhista e custo escondido.",
    "A maioria das empresas trata medicina do trabalho como burocracia pontual — faz exame admissional e esquece. O resultado aparece no processo trabalhista, no afastamento longo ou na autuação do MTE.",
    "Medicina do trabalho bem estruturada é preventiva: PCMSO alinhado com o PGR, exames no prazo, ASOs corretos, eSocial em dia e responsabilidade técnica médica definida.",
  ),
  "insalubridade-o-que-e-adicional": saudeEntry(
    "Insalubridade: o que e, quem tem direito, adicional e calculo",
    "Insalubridade é um daqueles temas que parecem simples até bater na folha, no laudo ou no processo. Mistura direito do trabalhador, custo para a empresa e uma parte tecnica que muita gente subestima.",
    "E comum ver empresa pagando adicional sem laudo, calculando sobre base errada ou cortando a verba sem prova de neutralizacao. O problema quase sempre reaparece depois, em pericia, reclamatoria ou passivo acumulado.",
    "Quando a empresa entende o que e conceito, o que e enquadramento pela NR-15, onde entra o laudo e como isso conversa com LTCAT, PGR, PCMSO e eSocial, a decisao fica muito mais segura.",
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
      "Definicao clara com contexto de RH e SST",
      "Ligacao pratica com eSocial, exames e documentos",
      "Mais segurança para decidir antes de contratar ou corrigir",
    ],
  },
  geoOpt: {
    expertQuote: {
      text: "Quando o gestor entende o termo certo, ele erra menos na decisao operacional.",
      author: "Equipe Técnica SERMST",
      role: "Medicina e Seguranca do Trabalho",
    },
    faq: [
      {
        q: "Por que esse termo importa para a empresa?",
        a: "Porque ele normalmente aparece ligado a exame ocupacional, documento obrigatorio, eSocial, rotina de RH ou risco trabalhista. Entender o termo ajuda a decidir melhor e mais cedo.",
      },
    ],
  },
});

export const dicionarioSEO: Record<string, SEODocument> = {
  "o-que-e-aso": dicionarioEntry(
    "O que é ASO: significado do atestado de saúde ocupacional",
    "ASO é o Atestado de Saúde Ocupacional, documento emitido ao fim do exame ocupacional para registrar se o trabalhador está apto ou inapto para a função.",
    "Muita empresa trata o ASO como simples papel de admissão, mas ele é uma das evidências mais importantes da rotina ocupacional, do eSocial e da defesa jurídica da empresa.",
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
      "PGR não é apenas um arquivo pronto nem um novo nome para qualquer documento antigo. Esta página explica a sigla e a função do programa. A leitura completa sobre atualização da NR-01, inventário e plano de ação fica na página principal de NR-01.",
    aprofundamento: {
      href: "/normas/nr-01-pgr-atualizada",
      title: "Precisa entender a NR-01 atualizada, obrigatoriedade e plano de ação?",
      description:
        "Veja como a NR-01 estrutura o PGR, quando revisar o documento e o que a empresa precisa fazer na prática.",
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
      "LTCAT não é o mesmo que PGR, PPP nem laudo de insalubridade. Esta página explica a sigla, a função do laudo e dúvidas comuns como obrigatoriedade, assinatura e revisão. A página de serviço é a que trata de elaboração, revisão e escopo técnico do LTCAT na empresa.",
    aprofundamento: {
      href: "/servicos/ltcat-laudo-tecnico-previdenciario/sao-paulo",
      title: "Precisa elaborar ou revisar o LTCAT da empresa?",
      description:
        "Veja quando o LTCAT é necessário, como ele se conecta ao PPP e ao S-2240 e como a SERMST estrutura a avaliação previdenciária com base técnica mais defensável.",
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
        "Veja como o PPP funciona na prática, quem precisa emitir, quando entregar o documento e por que LTCAT, PGR e eSocial precisam estar alinhados.",
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
        "Eliminacao de erros manuais",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "No eSocial, compliance digital e disciplina operacional caminham juntos.",
        author: "Governanca Corporativa",
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
  // â”€â”€â”€ Guias migrados do WordPress (redirects 301) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
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
        "Empresas sabem que burnout, absenteísmo e conflito de equipe existem, mas ainda tratam o tema como clima organizacional isolado. Quando a NR-01 entra na conversa, percebem que o assunto também é compliance.",
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
        author: "Diretoria Tecnica SERMST",
        role: "Governanca SST",
      },
      faq: [
        {
          q: "Toda empresa precisa tratar risco psicossocial no PGR?",
          a: "Toda empresa precisa avaliar se a organização do trabalho, a forma de cobrança, a sobrecarga, o assédio ou outros fatores estao gerando risco psicossocial relevante. O tratamento pode mudar conforme o contexto, mas ignorar o tema nao e uma opcao segura.",
        },
        {
          q: "Risco psicossocial é a mesma coisa que burnout?",
          a: "Não. Burnout é uma possível consequência. Risco psicossocial é o conjunto de fatores da organização do trabalho que pode levar a adoecimento, conflito, queda de desempenho e exposicao juridica.",
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
      "Ponte natural entre rotina empresarial, RH e exigencias de SST",
      "Menos chance de descobrir obrigacoes so quando ja existe multa, atraso ou passivo",
    ],
  },
  geoOpt: {
    expertQuote: {
      text: "Empresa regularizada nao e a que tem mais papel. E a que consegue provar, operar e contratar sem improviso.",
      author: "Equipe Tecnica SERMST",
      role: "RH, Medicina e Seguranca do Trabalho",
    },
    faq,
  },
});

export const empresarioSections: EmpresarioDocument["section"][] = [
  "Regularizacao",
  "Contratacao e equipe",
  "Documentos e rotina",
  "Fiscalizacao e risco",
];

const empresarioBaseSEO = {
  "cnpj-ativo-significa-empresa-regularizada": empresarioEntry(
    "Regularizacao",
    "CNPJ ativo significa empresa regularizada?",
    "Muita empresa confunde CNPJ ativo com empresa em dia. O cadastro pode estar regular na Receita e, ainda assim, a operacao seguir exposta em contratacao, documentos trabalhistas e rotina de SST.",
    "O dono consulta o CNPJ, ve a situacao ativa e assume que o negocio esta regularizado. O problema e que essa leitura ignora contratacao, exames ocupacionais, eSocial, programas obrigatorios e documentos que so aparecem quando a empresa cresce ou contrata.",
    "O caminho seguro e separar status cadastral de regularizacao operacional. A empresa precisa entender o que continua sob responsabilidade dela quando ja tem funcionario, terceirizado recorrente ou rotina com risco ocupacional.",
    "Explica por que CNPJ ativo nao basta e abre a porta para regularizacao real da empresa.",
    [
      {
        href: "/rh/calculadora-cnae-grau-de-risco",
        label: "Ver risco da atividade pelo CNAE",
        description: "Bom proximo passo para quem saiu da consulta CNPJ e quer entender se a operacao ja exige estrutura maior.",
      },
      {
        href: "/saude/pcmso-programa-controle-medico",
        label: "Entender onde entra o PCMSO",
        description: "Ajuda a mostrar onde a regularizacao deixa de ser cadastro e passa a exigir rotina ocupacional.",
      },
      {
        href: "/rh/domicilio-eletronico-trabalhista-det",
        label: "Entender onde o eSocial comeca a apertar",
        description: "Ponte para empresa que ja percebe impacto entre funcionario, documento, DET e rotina operacional.",
      },
    ],
    [
      {
        q: "CNPJ ativo na consulta da Receita Federal significa que a empresa esta regularizada por completo?",
        a: "Nao. CNPJ ativo mostra situacao cadastral, mas nao prova que a empresa esta em dia com rotina trabalhista, documentacao ocupacional, eSocial ou exigencias ligadas a funcionarios.",
      },
      {
        q: "Consulta CNPJ e situacao cadastral ativa resolvem as obrigacoes da empresa com funcionario?",
        a: "E comum faltar exame admissional, ASO, fluxo de eSocial, revisao de PGR ou PCMSO, alem de documentos internos que o empresario so descobre quando aparece fiscalizacao ou atraso de contratacao.",
      },
    ],
    "CNPJ ativo significa empresa regularizada? | SERMST",
  ),
  "nota-fiscal-mei-nao-significa-empresa-regularizada": empresarioEntry(
    "Regularizacao",
    "Emitir nota fiscal MEI nao significa que sua empresa esta 100% regular",
    "Emitir nota fiscal mostra que o negocio esta operando, mas nao garante que ele esta pronto para contratar, registrar funcionario ou sustentar as obrigacoes que surgem quando a empresa cresce.",
    "Muitos negocios passam a emitir nota, vender mais e contratar ajuda sem perceber que a realidade operacional mudou. O que era simples como MEI começa a gerar exigencias trabalhistas, ocupacionais e documentais que nao aparecem na emissao da nota.",
    "O conteudo precisa ajudar o empresario a entender o ponto de virada: faturar e emitir nota nao e o mesmo que estar preparado para lidar com primeiro funcionario, ASO, eSocial, PGR ou PCMSO quando a operacao deixa de ser individual.",
    "Usa o universo de nota fiscal MEI para puxar crescimento, transicao e obrigacoes quando aparece equipe.",
    [
      {
        href: "/saude/clinica-exame-admissional-sao-paulo",
        label: "Ver o exame admissional",
        description: "Mostra o primeiro passo pratico quando o MEI deixa de operar sozinho e passa a contratar.",
      },
      {
        href: "/rh/declaracao-inexistencia-risco-dir",
        label: "Entender quando existe simplificacao",
        description: "Ajuda a esclarecer quando pequenos negocios podem simplificar e quando a operacao ja saiu dessa faixa.",
      },
      {
        href: "/saude/pcmso-programa-controle-medico",
        label: "Entender quando o PCMSO entra",
        description: "Ponte para empresa que percebeu que emitir nota nao resolve a rotina com equipe.",
      },
    ],
    [
      {
        q: "Emitir nota fiscal MEI significa que a empresa esta pronta para contratar?",
        a: "Nao necessariamente. Quando entra funcionario, aparecem obrigacoes trabalhistas, exames ocupacionais, eSocial e outros documentos que nao estao resolvidos so porque a nota esta sendo emitida.",
      },
      {
        q: "Emitir nota fiscal de servico MEI muda algo quando o negocio comeca a ter equipe?",
        a: "Quando o negocio cresce, contrata ajuda, organiza rotina de atendimento ou passa a operar com mais risco, a empresa comeca a precisar de estrutura alem da parte fiscal.",
      },
    ],
    "Nota fiscal MEI nao significa empresa regularizada | SERMST",
  ),
  "simples-nacional-nao-elimina-obrigacoes-da-empresa": empresarioEntry(
    "Regularizacao",
    "Simples Nacional nao elimina obrigacoes da empresa",
    "Entrar no Simples Nacional reduz complexidade tributaria em varios cenarios, mas nao apaga responsabilidades da empresa com funcionarios, documentos, exames e rotina operacional.",
    "Muita empresa interpreta o Simples como sinonimo de operacao simplificada em tudo. O resultado e perigoso: o negocio fica mais leve no imposto, mas continua exposto quando ignora obrigacoes de RH, SST, eSocial e documentacao obrigatoria.",
    "A proposta aqui e traduzir a diferenca entre simplificacao tributaria e responsabilidade empresarial. O empresario precisa entender o que continua existindo quando ha equipe, risco ocupacional ou exigencia de prova documental.",
    "Usa um tema de altissimo interesse empresarial para mostrar o que continua obrigatorio mesmo em empresa pequena.",
    [
      {
        href: "/rh",
        label: "Ver o que muda no RH da empresa",
        description: "Bom destino para aprofundar o que continua existindo quando ha funcionario, mesmo no Simples.",
      },
      {
        href: "/saude/aso-atestado-saude-ocupacional",
        label: "Entender por que o ASO continua obrigatorio",
        description: "Ajuda a mostrar uma obrigacao que o regime tributario nao elimina.",
      },
      {
        href: "/saude/gestao-sst",
        label: "Entender onde a gestao ocupacional entra",
        description: "Ponte para quem descobriu que simplificacao tributaria nao resolve a camada ocupacional.",
      },
    ],
    [
      {
        q: "Empresa do Simples Nacional pode ignorar obrigacoes de SST?",
        a: "Nao. O enquadramento tributario nao elimina por si so as obrigacoes ligadas a funcionario, rotina ocupacional, eSocial e documentacao que a empresa precisa sustentar.",
      },
      {
        q: "Simples Nacional, consulta optantes e boleto resolvem a parte operacional da empresa?",
        a: "Ele simplifica principalmente a parte tributaria. A operacao com equipe continua exigindo cuidados proprios de RH, seguranca, saude ocupacional e prova documental.",
      },
    ],
    "Simples Nacional nao elimina obrigacoes da empresa | SERMST",
  ),
  "alvara-de-funcionamento-nao-basta": empresarioEntry(
    "Regularizacao",
    "Alvara de funcionamento nao basta: o que sua empresa precisa manter em dia",
    "Ter alvara ajuda a empresa a funcionar formalmente, mas nao encerra o tema da regularizacao. Quando existem funcionarios, rotina operacional e risco ocupacional, outras exigencias continuam de pe.",
    "Muita empresa organiza prefeitura, aluguel, fachada e licenca basica, mas esquece a parte que comeca depois: documentacao de equipe, exames, evidencias de rotina e organizacao minima para suportar fiscalizacao.",
    "Esse conteudo deve mostrar que alvara e so uma camada da legalidade. A regularizacao completa de quem ja opera com equipe passa por admissao, documentos internos, saude ocupacional e coerencia da rotina.",
    "Aproveita uma busca ampla de regularizacao para puxar a conversa para o que acontece depois da licenca.",
    [
      {
        href: "/rh/domicilio-eletronico-trabalhista-det",
        label: "Entender o DET na pratica",
        description: "Ajuda a ligar licenca e funcionamento com fiscalizacao real da rotina da empresa.",
      },
      {
        href: "/saude/clinica-exame-admissional-sao-paulo",
        label: "Ver o que muda na admissao",
        description: "Ponte direta para quando a empresa abre, organiza o espaco e passa a contratar.",
      },
      {
        href: "/saude/clinica-exame-admissional-sao-paulo",
        label: "Entender a etapa do admissional",
        description: "Leva para a pagina que explica a primeira exigencia pratica quando a empresa passa a contratar.",
      },
    ],
    [
      {
        q: "Ter alvara de funcionamento significa que a empresa esta regular para contratar funcionario?",
        a: "Nao. O alvara ajuda na operacao do estabelecimento, mas a contratacao exige outras rotinas e documentos que nao estao resolvidos pela licenca de funcionamento.",
      },
      {
        q: "Dispensa de alvara ou licenca de funcionamento elimina outras obrigacoes da empresa?",
        a: "Quando a empresa ja esta operando, costumam aparecer exigencias ligadas a equipe, admissao, eSocial, saude ocupacional, fiscalizacao e provas de rotina.",
      },
    ],
    "Alvara de funcionamento nao basta | SERMST",
  ),
  "folha-de-pagamento-nao-e-a-unica-obrigacao": empresarioEntry(
    "Documentos e rotina",
    "Folha de pagamento nao e a unica obrigacao de quem tem funcionario",
    "Pagar salario e processar folha resolve uma parte do problema. O que muita empresa descobre tarde e que a rotina com funcionario envolve exames, admissao, eventos, documentos e controles que nao aparecem so no fechamento do mes.",
    "O empresario sente que a folha esta em ordem e assume que o resto acompanha. So que varias exposicoes surgem fora do payroll: ASO atrasado, evento ocupacional inconsistente, exame nao realizado ou documentacao de funcao desconectada da realidade.",
    "O papel desta pagina e mostrar que ter funcionario abre uma rotina mais ampla do que holerite e encargos. E justamente ai que RH, SST e evidencia documental comecam a se encontrar.",
    "Usa um tema empresarial recorrente para mostrar as obrigacoes invisiveis que nascem junto da folha.",
    [
      {
        href: "/saude/aso-atestado-saude-ocupacional",
        label: "Entender o ASO fora da folha",
        description: "Explica uma das obrigacoes que nao aparece no fechamento do mes, mas protege a empresa.",
      },
      {
        href: "/rh/multa-esocial-s2220",
        label: "Entender onde o eSocial comeca a falhar",
        description: "Ponte clara para quem ja enxerga problema entre folha, evento ocupacional e rotina de exames.",
      },
      {
        href: "/rh/multa-esocial-s2220",
        label: "Ver o risco de multa no eSocial",
        description: "Aprofunda o risco operacional quando a empresa acha que folha de pagamento basta.",
      },
    ],
    [
      {
        q: "Se a folha de pagamento esta em dia, a empresa pode assumir que esta regular?",
        a: "Nao. A folha cobre uma parte importante, mas nao garante que admissao, exames, eventos ocupacionais e documentacao da equipe estejam corretos.",
      },
      {
        q: "Quais obrigacoes ficam fora da folha de pagamento e ainda geram risco?",
        a: "Exame admissional, ASO, prazos do eSocial, documentos de funcao, programas ocupacionais e evidencias de rotina sao pontos que frequentemente ficam separados da visao da folha.",
      },
    ],
    "Folha de pagamento nao e a unica obrigacao | SERMST",
  ),
  "vigilancia-sanitaria-e-documentos-da-empresa": empresarioEntry(
    "Fiscalizacao e risco",
    "Vigilancia sanitaria e documentos da empresa: onde pequenas empresas mais erram",
    "Segmentos como alimentacao, estetica e saude costumam se preocupar com licenca e vistoria, mas ignoram que equipe, documentos e rotina ocupacional tambem entram na exposicao do negocio.",
    "O erro mais comum nao e faltar completamente um documento. E tratar a exigencia de vigilancia sanitaria como se ela esgotasse a regularizacao da empresa, enquanto a parte de funcionarios segue improvisada.",
    "Esse conteudo precisa funcionar como ponte para segmentos sensiveis, mostrando que restaurante, clinica, salao, padaria e outros negocios precisam olhar operacao, pessoas e documentos em conjunto.",
    "Boa pagina de transicao entre regulacao setorial e obrigacoes que levam a RH e SST.",
    [
      {
        href: "/rh/calculadora-cnae-grau-de-risco",
        label: "Ver o risco do segmento pelo CNAE",
        description: "Ajuda restaurante, clinica, salao e padaria a entender se a atividade ja pede mais cuidado ocupacional.",
      },
      {
        href: "/saude/gestao-sst",
        label: "Entender quando a rotina ocupacional muda",
        description: "Leva a conversa para quem ja percebe risco operacional em atividade com equipe.",
      },
      {
        href: "/saude/medicina-do-trabalho-guia",
        label: "Entender a medicina do trabalho",
        description: "Ponte educativa para segmentos que nunca ligaram vigilancia sanitaria com rotina ocupacional.",
      },
    ],
    [
      {
        q: "Vigilancia sanitaria resolve todas as obrigacoes da empresa?",
        a: "Nao. Ela cobre uma parte importante da operacao em determinados segmentos, mas nao substitui exigencias ligadas a funcionario, rotina trabalhista e saude ocupacional.",
      },
      {
        q: "Restaurante, clinica, padaria e salao precisam olhar o que alem da vigilancia sanitaria?",
        a: "Restaurantes, padarias, clinicas, saloes, negocios de estetica e outras operacoes com equipe e atendimento presencial costumam sentir isso com mais intensidade.",
      },
    ],
    "Vigilancia sanitaria e documentos da empresa | SERMST",
  ),
  "empresa-pequena-com-funcionario-quais-obrigacoes": empresarioEntry(
    "Contratacao e equipe",
    "Empresa pequena com funcionario: quais obrigacoes muita gente esquece",
    "Quando a empresa e pequena, o dono tende a supor que as exigencias tambem sao pequenas. Na pratica, a presenca de funcionario ja aciona responsabilidades que nao desaparecem por causa do porte.",
    "Muitos negocios so percebem isso quando a admissao trava, o contador pede exame, o eSocial exige coerencia ou a empresa descobre que o simples tamanho do negocio nao elimina a necessidade de rotina.",
    "A pagina deve ajudar o empresario a enxergar o minimo obrigatorio de quem ja opera com equipe: admissao correta, documentos, exames, rotinas basicas e nocao de risco.",
    "Conteudo ponte direto entre empresario, contratacao e obrigacoes ocultas de SST.",
    [
      {
        href: "/saude/clinica-exame-admissional-sao-paulo",
        label: "Ver a primeira exigencia da contratacao",
        description: "Ajuda a traduzir a primeira dor pratica da empresa pequena que vai contratar.",
      },
      {
        href: "/rh/declaracao-inexistencia-risco-dir",
        label: "Entender quando existe simplificacao",
        description: "Mostra que nem toda empresa pequena com funcionario fica no mesmo enquadramento.",
      },
      {
        href: "/saude/pcmso-programa-controle-medico",
        label: "Entender quando o PCMSO passa a ser tema",
        description: "Ponte para quando o leitor descobre que a empresa pequena precisa estruturar mais do que imaginava.",
      },
    ],
    [
      {
        q: "Empresa pequena com funcionario realmente precisa se preocupar com exames e documentos ocupacionais?",
        a: "Sim. O porte pode mudar o enquadramento em alguns pontos, mas a existencia de funcionario continua trazendo responsabilidades que a empresa precisa entender e sustentar.",
      },
      {
        q: "Quais obrigacoes da empresa pequena com funcionario mais costumam ser esquecidas?",
        a: "Achar que o contador ou a folha resolvem tudo. Na pratica, varias obrigacoes dependem da operacao, do cargo, dos riscos e da disciplina de documentos e exames.",
      },
    ],
    "Empresa pequena com funcionario: quais obrigacoes | SERMST",
  ),
  "primeiro-funcionario-o-que-muda-na-pratica": empresarioEntry(
    "Contratacao e equipe",
    "Contratei meu primeiro funcionario: o que muda na pratica",
    "O primeiro funcionario muda o jogo da empresa. A partir dali, o negocio deixa de ter apenas rotina fiscal e passa a carregar responsabilidades trabalhistas, documentais e ocupacionais que o dono nem sempre conhece.",
    "Esse momento costuma ser cheio de improviso. O empresario quer contratar rapido, o contador pede documentos, o candidato espera retorno, e varias exigencias aparecem ao mesmo tempo sem explicacao clara.",
    "O conteudo precisa organizar essa transicao: o que muda antes da admissao, o que precisa estar pronto, e quais erros fazem a empresa comecar sua rotina de equipe ja exposta.",
    "Pagina central de meio de funil para ligar crescimento do negocio a exame admissional, ASO e rotina minima de SST.",
    [
      {
        href: "/saude/clinica-exame-admissional-sao-paulo",
        label: "Entender o exame admissional",
        description: "Destino natural para quem ja esta no momento da primeira contratacao e quer entender a etapa correta.",
      },
      {
        href: "/saude/aso-atestado-saude-ocupacional",
        label: "Entender o ASO admissional",
        description: "Mostra um dos documentos mais importantes no comeco da relacao de trabalho.",
      },
      {
        href: "/rh",
        label: "Ver as rotinas que nascem com o primeiro funcionario",
        description: "Ajuda a aprofundar as demais rotinas que aparecem junto da primeira contratacao.",
      },
    ],
    [
      {
        q: "O primeiro funcionario muda a rotina da empresa de forma relevante?",
        a: "Sim. A partir do momento em que existe colaborador formal, a empresa passa a precisar de admissao organizada, documentos, exames e coerencia entre operacao e obrigacoes.",
      },
      {
        q: "O que costuma aparecer primeiro quando a empresa vai contratar o primeiro funcionario?",
        a: "Normalmente aparecem pedidos de exame admissional, ASO, dados para registro e duvidas sobre quais documentos a empresa precisa ter para nao comecar errado.",
      },
    ],
    "Primeiro funcionario: o que muda na pratica | SERMST",
  ),
  "documentos-obrigatorios-empresa-com-funcionarios": empresarioEntry(
    "Documentos e rotina",
    "Documentos obrigatorios para empresa com funcionarios: checklist pratico",
    "Quem tem equipe precisa de mais do que contrato social, CNPJ e folha. Existe uma camada de documentos operacionais e ocupacionais que muita empresa so descobre quando a rotina aperta.",
    "O problema nao e apenas faltar papel. E nao entender quais documentos sustentam admissao, saude ocupacional, evidencias de funcao e defesa em fiscalizacao ou passivo trabalhista.",
    "Essa pagina deve organizar o mapa basico do que a empresa com funcionario precisa acompanhar para nao depender de memoria, improviso ou orientacao fragmentada.",
    "Boa pagina checklist para capturar buscas amplas e distribuir autoridade para RH, SST e servicos.",
    [
      {
        href: "/saude/pcmso-programa-controle-medico",
        label: "Entender onde o PCMSO entra",
        description: "Ajuda a explicar onde a documentacao medica entra de forma estruturada no checklist da empresa.",
      },
      {
        href: "/rh/calculadora-cnae-grau-de-risco",
        label: "Ver o que depende do risco da atividade",
        description: "Ponte para a parte do checklist que depende da leitura real da operacao.",
      },
      {
        href: "/rh/multa-esocial-s2220",
        label: "Ver o risco de falha no eSocial",
        description: "Mostra o custo pratico de manter documento, exame e rotina desconectados.",
      },
    ],
    [
      {
        q: "Quais documentos obrigatorios a empresa com funcionarios mais esquece?",
        a: "Muita empresa esquece justamente o que nao aparece no dia a dia financeiro: exames ocupacionais, ASO, rotinas de eSocial, programas ligados ao risco e registros coerentes com a funcao real.",
      },
      {
        q: "Por que organizar documentos da empresa com funcionarios nao e so tarefa do contador?",
        a: "Porque varios desses documentos dependem da operacao, do cargo, dos riscos e da rotina real da empresa. Sem esse contexto, a documentacao fica incompleta ou fragil.",
      },
    ],
    "Documentos obrigatorios para empresa com funcionarios: checklist | SERMST",
  ),
  "contador-cuida-de-tudo": empresarioEntry(
    "Documentos e rotina",
    "O contador cuida de tudo? O que continua sendo responsabilidade da empresa",
    "O contador e decisivo para a rotina empresarial, mas existe um erro comum: transferir para ele responsabilidades que dependem da operacao real da empresa, do cargo do funcionario e da organizacao interna do negocio.",
    "Quando isso acontece, a empresa fica esperando o contador puxar temas que exigem informacao operacional, risco ocupacional, agenda de admissao, revisao de funcao ou decisao interna.",
    "A pagina deve reposicionar esse papel: mostrar onde a contabilidade ajuda, onde o RH entra e o que continua sendo responsabilidade do dono para a empresa nao operar no piloto automatico.",
    "Conteudo forte para alinhar expectativa do empresario e abrir espaco para rotina ocupacional bem feita.",
    [
      {
        href: "/rh/o-que-um-gerente-faz",
        label: "Ver como distribuir responsabilidades internas",
        description: "Ajuda a distribuir melhor o que fica com lideranca, RH, contabilidade e direcao.",
      },
      {
        href: "/saude/gestao-sst",
        label: "Entender a gestao de SST",
        description: "Mostra por que a parte ocupacional nao se sustenta so com contabilidade.",
      },
      {
        href: "/rh/domicilio-eletronico-trabalhista-det",
        label: "Entender onde a rotina digital comeca a cobrar",
        description: "Ponte para quando o problema ja passou da teoria e entrou na operacao da empresa.",
      },
    ],
    [
      {
        q: "O contador cuida de tudo sozinho quando a empresa tem funcionario?",
        a: "Nao. Ele ajuda em partes fundamentais, mas varias obrigacoes dependem de informacao da operacao, do cargo e da rotina real da empresa.",
      },
      {
        q: "Onde a empresa erra quando acha que o contador cuida de tudo?",
        a: "Ela deixa de alimentar corretamente exames, documentos internos, dados ocupacionais e definicoes que so podem sair da propria operacao.",
      },
    ],
    "O contador cuida de tudo? | SERMST",
  ),
  "fiscalizacao-empresa-o-que-podem-cobrar": empresarioEntry(
    "Fiscalizacao e risco",
    "Fiscalizacao na empresa: o que podem cobrar alem de imposto",
    "Muitos empresarios associam fiscalizacao apenas a imposto ou nota fiscal. Na pratica, dependendo da rotina da empresa, outras cobrancas entram em cena: equipe, documentos, evidencias, saude ocupacional e coerencia operacional.",
    "O problema e que o dono normalmente pensa nisso tarde. So quando recebe notificacao, ve atraso interno ou percebe que nao sabe exatamente o que teria para apresentar se alguem cobrasse a rotina da empresa.",
    "O papel desta pagina e tirar a fiscalizacao do campo abstrato e mostrar o que o negocio precisa manter organizado para nao depender de sorte nem de memoria.",
    "Boa pauta para tocar dor real e levar para rotas de RH, DET, eSocial e documentacao ocupacional.",
    [
      {
        href: "/rh/domicilio-eletronico-trabalhista-det",
        label: "Ler o guia do DET",
        description: "Aproxima a dor de fiscalizacao da rotina digital que varias empresas ainda negligenciam.",
      },
      {
        href: "/rh/cat-acidente-de-trabalho",
        label: "Ver como a CAT entra na rotina",
        description: "Mostra como documentacao e reacao a eventos criticos entram no radar da empresa.",
      },
      {
        href: "/saude/gestao-sst",
        label: "Entender onde o risco ocupacional entra",
        description: "Ajuda a aprofundar a camada ocupacional quando o leitor percebe que a exposicao vai alem da fiscalizacao.",
      },
    ],
    [
      {
        q: "Fiscalizacao na empresa pode cobrar coisas alem de imposto e nota fiscal?",
        a: "Sim. Dependendo da atividade e da rotina da empresa, podem entrar no radar documentos, processos internos, exigencias trabalhistas e evidencias ligadas a funcionarios e operacao.",
      },
      {
        q: "O que a fiscalizacao pode cobrar quando a empresa tem funcionario?",
        a: "E descobrir tarde que a empresa nao tem clareza sobre o que precisa apresentar, provar ou manter organizado para sustentar a propria rotina.",
      },
    ],
    "Fiscalizacao na empresa: o que podem cobrar | SERMST",
  ),
  "empresa-regularizada-com-funcionarios": empresarioEntry(
    "Fiscalizacao e risco",
    "Checklist de empresa regularizada com funcionarios: o que nao pode faltar",
    "Quando a empresa ja tem equipe, regularizacao deixa de ser ideia abstrata e vira sistema: admissao, documentos, exames, organizacao de rotina, coerencia de funcao e resposta a fiscalizacao.",
    "Muitos negocios sabem que falta alguma coisa, mas nao conseguem enxergar o conjunto. O resultado e tratar urgencias isoladas sem construir uma base minima que sustente a operacao.",
    "Essa pagina funciona como sintese do cluster: reunir o que o empresario precisa olhar quando ja entendeu que CNPJ, alvara, nota e folha nao esgotam a realidade de quem opera com funcionarios.",
    "Pagina de consolidacao para amarrar o cluster inteiro em formato de checklist e distribuir links para RH, saude e servicos.",
    [
      {
        href: "/rh",
        label: "Ver o hub de RH",
        description: "Bom destino para aprofundar o lado operacional da empresa que ja tem equipe.",
      },
      {
        href: "/saude",
        label: "Ver o hub de Saude",
        description: "Ajuda a aprofundar exames, ASO, PCMSO e outros temas ocupacionais que completam a regularizacao.",
      },
      {
        href: "/saude/clinica-exame-admissional-sao-paulo",
        label: "Entender como a admissao entra no processo",
        description: "Ajuda a conectar a visao integrada da empresa com a primeira rotina pratica de contratacao.",
      },
    ],
    [
      {
        q: "O que define uma empresa realmente regularizada quando ela ja tem funcionario?",
        a: "Nao e so ter cadastro ou folha em dia. E conseguir manter operacao, documentos, exames, eventos e evidencias coerentes com a realidade da equipe e do negocio.",
      },
      {
        q: "Qual o checklist minimo de uma empresa regularizada com funcionarios?",
        a: "Porque quando a empresa trata cada exigencia separadamente, ela acumula retrabalho e abre brecha exatamente nos pontos que mais pesam em contratacao, fiscalizacao e passivo.",
      },
    ],
    "Checklist de empresa regularizada com funcionarios | SERMST",
  ),
};

const empresarioStrategicMap: Record<
  keyof typeof empresarioBaseSEO,
  Pick<
    EmpresarioDocument,
    | "primaryKeyword"
    | "secondaryKeywords"
    | "searchIntent"
    | "funnelStage"
    | "antiCannibalization"
    | "geoStrategy"
    | "cta"
  >
> = {
  "cnpj-ativo-significa-empresa-regularizada": {
    primaryKeyword: "cnpj ativo significa empresa regularizada",
    secondaryKeywords: [
      "empresa regularizada",
      "cnpj ativo empresa regular",
      "como saber se a empresa esta regularizada",
    ],
    searchIntent: "Informacional ampla com transicao para regularizacao operacional",
    funnelStage: "Topo/Meio",
    antiCannibalization:
      "Nao disputar termos de consulta cadastral pura como 'cnpj consulta' ou 'receita federal cnpj'. A pagina deve vencer apenas a duvida interpretativa sobre o que CNPJ ativo realmente significa.",
    geoStrategy:
      "Sem geo no slug. Reforcar no corpo e links internos que a ajuda pratica e voltada a empresas de Sao Paulo quando a dor vira admissao, exames e eSocial.",
    cta: {
      label: "Descobrir o risco pelo CNAE",
      href: "/rh/calculadora-cnae-grau-de-risco",
      reason: "Boa ponte para transformar a duvida cadastral em leitura operacional real.",
    },
  },
  "nota-fiscal-mei-nao-significa-empresa-regularizada": {
    primaryKeyword: "nota fiscal mei",
    secondaryKeywords: [
      "mei nota fiscal",
      "emitir nota fiscal mei",
      "mei empresa regularizada",
    ],
    searchIntent: "Informacional ampla com ponte para crescimento e primeiro funcionario",
    funnelStage: "Topo/Meio",
    antiCannibalization:
      "Nao disputar termos tutoriais de emissao de nota. A pagina deve focar na virada do MEI que cresce e passa a ter obrigacoes alem da nota fiscal.",
    geoStrategy:
      "Sem geo primario. Inserir contexto local apenas nas pontes de servico e nas provas de atendimento em Sao Paulo.",
    cta: {
      label: "Ver exame admissional",
      href: "/saude/clinica-exame-admissional-sao-paulo",
      reason: "Conecta crescimento do MEI ao primeiro momento concreto de contratacao.",
    },
  },
  "simples-nacional-nao-elimina-obrigacoes-da-empresa": {
    primaryKeyword: "simples nacional",
    secondaryKeywords: [
      "simples nacional empresa",
      "obrigacoes da empresa simples nacional",
      "simples nacional funcionario",
    ],
    searchIntent: "Informacional ampla sobre enquadramento com ponte para obrigacoes empresariais",
    funnelStage: "Topo/Meio",
    antiCannibalization:
      "Nao disputar consultas tributarias como 'simples nacional consulta optantes'. A URL deve responder ao mito de que o Simples elimina exigencias operacionais.",
    geoStrategy:
      "Tema nacional. Usar Sao Paulo apenas nas rotas de apoio e servicos, nunca como foco principal da URL.",
    cta: {
      label: "Entender o que muda no RH",
      href: "/rh",
      reason: "Leva a leitura tributaria para a camada operacional sem parecer salto artificial.",
    },
  },
  "alvara-de-funcionamento-nao-basta": {
    primaryKeyword: "alvara de funcionamento",
    secondaryKeywords: [
      "empresa regularizada alvara",
      "alvara empresa regular",
      "o que empresa precisa manter em dia",
    ],
    searchIntent: "Informacional ampla sobre licenca e regularizacao complementar",
    funnelStage: "Topo/Meio",
    antiCannibalization:
      "Nao disputar guias de emissao de alvara ou consulta municipal. A intencao aqui e mostrar o que continua pendente depois da licenca.",
    geoStrategy:
      "Pode citar exigencias que variam por cidade, mas sem prometer cobertura normativa municipal detalhada. Sao Paulo entra nas pontes de servico.",
    cta: {
      label: "Entender o DET",
      href: "/rh/domicilio-eletronico-trabalhista-det",
      reason: "Ajuda a sair de licenca e entrar em fiscalizacao operacional real.",
    },
  },
  "folha-de-pagamento-nao-e-a-unica-obrigacao": {
    primaryKeyword: "folha de pagamento",
    secondaryKeywords: [
      "obrigacoes de quem tem funcionario",
      "empresa com funcionario obrigacoes",
      "folha de pagamento nao basta",
    ],
    searchIntent: "Informacional de meio com foco em rotina alem do payroll",
    funnelStage: "Meio",
    antiCannibalization:
      "Nao disputar paginas de calculo de folha ou rotinas contabeis puras. A pagina deve vencer a intencao de quem ja desconfia que a folha nao cobre tudo.",
    geoStrategy:
      "Sem geo no tema principal. Concentrar localidade nas rotas de servico e exemplos praticos.",
    cta: {
      label: "Entender a multa do S-2220",
      href: "/rh/multa-esocial-s2220",
      reason: "Faz a ponte mais direta entre folha, evento ocupacional e falha real de rotina.",
    },
  },
  "vigilancia-sanitaria-e-documentos-da-empresa": {
    primaryKeyword: "vigilancia sanitaria",
    secondaryKeywords: [
      "documentos da empresa",
      "empresa pequena vigilancia sanitaria",
      "restaurante clinica salao documentos",
    ],
    searchIntent: "Informacional ampla por segmento com transicao para risco operacional",
    funnelStage: "Topo/Meio",
    antiCannibalization:
      "Nao disputar conteudo juridico puro sobre licenca sanitaria. A URL deve focar no erro de achar que vigilancia sanitaria resolve toda a regularizacao.",
    geoStrategy:
      "Boa pagina para inserir exemplos locais de setores fortes em Sao Paulo, mantendo a tese valida nacionalmente.",
    cta: {
      label: "Calcular risco pelo CNAE",
      href: "/rh/calculadora-cnae-grau-de-risco",
      reason: "Ajuda negocios por segmento a ligar atividade economica a exigencia ocupacional.",
    },
  },
  "empresa-pequena-com-funcionario-quais-obrigacoes": {
    primaryKeyword: "empresa pequena com funcionario",
    secondaryKeywords: [
      "empresa pequena obrigacoes",
      "quais obrigacoes empresa pequena tem",
      "empresa pequena funcionario obrigacoes",
    ],
    searchIntent: "Informacional de meio para empresario com dor ja concreta",
    funnelStage: "Meio",
    antiCannibalization:
      "Esta URL deve ser dona do tema 'empresa pequena com funcionario'. Nao repetir a mesma promessa em 'primeiro funcionario' nem em 'empresa regularizada com funcionarios'.",
    geoStrategy:
      "Tema nacional com potencial de captacao ampla. Destinos comerciais ficam geo-orientados em Sao Paulo.",
    cta: {
      label: "Entender o exame admissional",
      href: "/saude/clinica-exame-admissional-sao-paulo",
      reason: "Leva da duvida geral para a primeira obrigacao tangivel da empresa pequena.",
    },
  },
  "primeiro-funcionario-o-que-muda-na-pratica": {
    primaryKeyword: "primeiro funcionario",
    secondaryKeywords: [
      "contratei meu primeiro funcionario",
      "o que muda ao contratar primeiro funcionario",
      "primeira contratacao empresa",
    ],
    searchIntent: "Informacional de meio com forte intencao de acao",
    funnelStage: "Meio",
    antiCannibalization:
      "Esta e a URL principal para a virada da primeira contratacao. Nao deve competir com a pagina mais ampla de 'empresa pequena com funcionario' nem com checklists documentais.",
    geoStrategy:
      "Excelente candidata a internal links com paginas locais de exame admissional em Sao Paulo, sem geo no slug principal.",
    cta: {
      label: "Entender o exame admissional",
      href: "/saude/clinica-exame-admissional-sao-paulo",
      reason: "A dor costuma sair da teoria quando a empresa percebe que a contratacao exige etapa ocupacional concreta.",
    },
  },
  "documentos-obrigatorios-empresa-com-funcionarios": {
    primaryKeyword: "documentos obrigatorios para empresa com funcionarios",
    secondaryKeywords: [
      "empresa com funcionarios documentos",
      "checklist empresa com funcionario",
      "documentos trabalhistas e ocupacionais empresa",
    ],
    searchIntent: "Informacional de meio em formato checklist",
    funnelStage: "Meio",
    antiCannibalization:
      "Esta pagina deve ser a dona do tema documental. A pagina 'empresa regularizada com funcionarios' fica como checklist sintese do cluster, nao como lista de documentos detalhada.",
    geoStrategy:
      "Sem geo no foco principal. Pontes locais entram nos servicos que resolvem documentos em Sao Paulo.",
    cta: {
      label: "Entender o PCMSO",
      href: "/saude/pcmso-programa-controle-medico",
      reason: "Ajuda a aprofundar a parte documental que costuma parecer abstrata para o empresario.",
    },
  },
  "contador-cuida-de-tudo": {
    primaryKeyword: "o contador cuida de tudo",
    secondaryKeywords: [
      "contador cuida de tudo empresa",
      "responsabilidade da empresa e do contador",
      "contador e obrigacoes trabalhistas",
    ],
    searchIntent: "Informacional de meio para alinhar responsabilidade operacional",
    funnelStage: "Topo/Meio",
    antiCannibalization:
      "Nao disputar paginas institucionais sobre contabilidade. A URL deve vencer a objecao comportamental de empresarios que terceirizam tudo para o contador.",
    geoStrategy:
      "Tema sem geo. Reforcar proximidade local so na hora de sugerir apoio tecnico da SERMST em Sao Paulo.",
    cta: {
      label: "Entender a gestao de SST",
      href: "/saude/gestao-sst",
      reason: "Explica por que a camada ocupacional nao se sustenta so com contabilidade.",
    },
  },
  "fiscalizacao-empresa-o-que-podem-cobrar": {
    primaryKeyword: "fiscalizacao na empresa",
    secondaryKeywords: [
      "o que fiscalizacao pode cobrar",
      "fiscalizacao empresa funcionario",
      "empresa o que pode ser cobrado alem de imposto",
    ],
    searchIntent: "Informacional de meio orientada por risco e prova documental",
    funnelStage: "Meio",
    antiCannibalization:
      "Nao disputar conteudo tributario ou fiscal puro. A proposta e vencer a intencao de quem quer entender cobrancas ligadas a operacao, equipe e documentos.",
    geoStrategy:
      "Boa pagina para costurar DET e eSocial com exemplos locais, sem perder relevancia nacional.",
    cta: {
      label: "Ler guia do DET",
      href: "/rh/domicilio-eletronico-trabalhista-det",
      reason: "Aproxima a dor da fiscalizacao de um ponto concreto e atual da rotina empresarial.",
    },
  },
  "empresa-regularizada-com-funcionarios": {
    primaryKeyword: "empresa regularizada com funcionarios",
    secondaryKeywords: [
      "checklist empresa regularizada",
      "empresa com funcionarios regularizada",
      "o que nao pode faltar empresa com funcionario",
    ],
    searchIntent: "Informacional de sintese com alta capacidade de distribuicao interna",
    funnelStage: "Meio",
    antiCannibalization:
      "Esta e a pagina consolidada do cluster. Nao deve roubar a intencao especifica de 'documentos obrigatorios', 'primeiro funcionario' ou 'empresa pequena com funcionario'.",
    geoStrategy:
      "Serve como pagina nacional de amarracao. Os CTAs e links internos podem carregar a ancoragem comercial local em Sao Paulo.",
    cta: {
      label: "Ver o hub de RH",
      href: "/rh",
      reason: "A pagina fecha o cluster e deve empurrar o leitor para aprofundar a rotina operacional da empresa com equipe.",
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
        title: "Consulta CNPJ e situacao cadastral nao mostram a operacao inteira",
        paragraphs: [
          "CNPJ ativo resolve uma pergunta bem especifica: a empresa existe formalmente e nao esta baixada ou inapta naquele momento. So isso. O erro aparece quando o empresario transforma esse status em sinal de que toda a operacao esta coberta.",
          "Na rotina real, a dor quase nunca nasce no cadastro. Ela nasce quando entra funcionario, quando o contador pede informacoes que a operacao nao tem, quando o exame admissional atrasa ou quando a empresa percebe que nunca organizou direito o que precisaria provar.",
        ],
      },
      {
        title: "Empresa regularizada e mais do que CNPJ ativo",
        paragraphs: [
          "Empresa regularizada nao e a que juntou mais documento. E a que consegue contratar, manter rotina e responder a cobrancas sem improvisar toda vez. Por isso, a pergunta certa nao e so se o CNPJ esta ativo. E se a empresa sabe o que precisa sustentar quando a equipe cresce.",
          "Esse raciocinio abre uma ponte natural para RH, eSocial, exames e programas ocupacionais. Nao porque o assunto mudou de repente, mas porque a empresa saiu da fase cadastral e entrou na fase operacional.",
        ],
      },
    ],
    practicalChecklistTitle: "O que vale revisar antes de assumir que a empresa esta em ordem",
    practicalChecklist: [
      "Separar status cadastral de rotina trabalhista e ocupacional.",
      "Mapear se ja existe funcionario, terceirizado recorrente ou contratacao proxima.",
      "Conferir se admissao, exames, eSocial e documentos basicos acompanham a realidade da operacao.",
    ],
  },
  "nota-fiscal-mei-nao-significa-empresa-regularizada": {
    articleSections: [
      {
        title: "Emitir nota fiscal MEI nao significa que a empresa esta pronta para crescer",
        paragraphs: [
          "Muita gente vive esse momento sem perceber a mudanca. O negocio comeca pequeno, a emissao de nota entra na rotina, o faturamento sobe e alguem passa a ajudar na pratica. A empresa continua se enxergando como simples, mas a operacao ja nao e mais tao simples assim.",
          "Quando o MEI ou o pequeno negocio sai da fase individual, o ponto sensivel deixa de ser a nota. O que pesa passa a ser contratacao, funcao, exame, organizacao minima e coerencia entre o que a empresa faz e o que ela precisa manter em dia.",
        ],
      },
      {
        title: "Quando o MEI comeca a ter equipe, a nota deixa de ser o centro do problema",
        paragraphs: [
          "Nem sempre a empresa chama isso de primeiro funcionario. As vezes e alguem que comecou a ajudar todo dia, um atendimento que cresceu, uma demanda que deixou de caber no dono. E justamente nesse ponto que surgem exigencias que antes nao existiam.",
          "Se a empresa espera a dor ficar urgente, o assunto entra torto: admissao em cima da hora, contador cobrando informacao, exame corrido e decisao tomada sem contexto. Melhor entender essa transicao antes.",
        ],
      },
    ],
    practicalChecklistTitle: "Sinais de que o negocio ja saiu da fase do MEI individual",
    practicalChecklist: [
      "A operacao depende de ajuda frequente e nao apenas eventual.",
      "Ja existe pressao para contratar, registrar ou organizar escala.",
      "A empresa comecou a precisar de rotina, documento e previsibilidade alem da emissao de nota.",
    ],
  },
  "simples-nacional-nao-elimina-obrigacoes-da-empresa": {
    articleSections: [
      {
        title: "Simples Nacional simplifica imposto, nao a operacao inteira",
        paragraphs: [
          "A confusao e comum porque o nome induz a uma sensacao de alivio total. So que o Simples Nacional simplifica principalmente a camada tributaria. Quando existe equipe, funcao, risco ocupacional ou necessidade de prova documental, a empresa continua tendo deveres proprios.",
          "Por isso, varios empresarios so descobrem o limite do Simples quando a contratacao aperta ou quando surge uma exigencia que a parte fiscal nao cobre. O regime ajuda, mas nao substitui processo.",
        ],
      },
      {
        title: "Consulta, boleto e enquadramento nao resolvem o dia a dia com funcionario",
        paragraphs: [
          "Uma empresa pode ser enxuta, pagar menos tributo e ainda assim precisar de disciplina em admissao, exames, eSocial e documentos. Isso varia com o tipo de atividade, com a funcao do colaborador e com a realidade da rotina.",
          "O ponto pratico aqui e tirar a ilusao de que o enquadramento resolve o resto sozinho. Nao resolve. Ele apenas muda uma parte da conta.",
        ],
      },
    ],
    practicalChecklistTitle: "Perguntas que ajudam a separar tributacao de operacao",
    practicalChecklist: [
      "A empresa ja tem funcionario ou vai contratar nos proximos meses?",
      "Existe alguma atividade com risco ocupacional, atendimento presencial ou rotina operacional mais sensivel?",
      "Os documentos e exames da equipe dependem de alguem puxando no improviso?",
    ],
  },
  "alvara-de-funcionamento-nao-basta": {
    articleSections: [
      {
        title: "Alvara de funcionamento libera a operacao, mas nao fecha a regularizacao",
        paragraphs: [
          "Licenca, prefeitura, endereco e funcionamento formal sao etapas importantes. O problema e parar nelas. Depois que a empresa abre e passa a operar com gente, rotina e pressao do dia a dia, aparecem exigencias que nao vieram no pacote do alvara.",
          "E por isso que muita empresa parece regular na fachada, mas tropeça na primeira admissao, na primeira cobranca ou na primeira necessidade de provar como funciona internamente.",
        ],
      },
      {
        title: "Depois da licenca de funcionamento, a empresa entra em outra camada de obrigacao",
        paragraphs: [
          "Enquanto a empresa esta concentrada em abrir, o foco costuma ser documento externo. Quando ela comeca a rodar com funcionario, o foco passa a incluir documento interno, exame, evento, rotina e coerencia entre funcao e operacao.",
          "Nao e exagero. E o ciclo normal de quem deixou de estar apenas autorizado a funcionar e passou a precisar sustentar esse funcionamento.",
        ],
      },
    ],
    practicalChecklistTitle: "Depois do alvara, o que merece atencao imediata",
    practicalChecklist: [
      "Entender se ja existe obrigacao ligada a equipe, admissao ou eSocial.",
      "Verificar se a empresa sabe quem cuida de documentos internos e exames.",
      "Conferir se o funcionamento formal veio acompanhado de rotina operacional minima.",
    ],
  },
  "folha-de-pagamento-nao-e-a-unica-obrigacao": {
    articleSections: [
      {
        title: "Folha de pagamento em dia nao significa rotina completa",
        paragraphs: [
          "A folha costuma virar o simbolo de organizacao porque e uma entrega visivel, mensal e sensivel para a empresa. Mas ela fotografa apenas uma parte da relacao com o funcionario. O resto fica espalhado em admissao, ASO, exames, eventos e evidencia documental.",
          "Quando ninguem olha para essa camada, a empresa acredita que esta em ordem porque o salario saiu e os encargos foram pagos. So descobre a lacuna quando alguma exigencia aparece fora do fechamento do mes.",
        ],
      },
      {
        title: "O que fica fora da folha de pagamento costuma gerar o atrito mais caro",
        paragraphs: [
          "Nao e raro ver empresa com payroll rodando e admissao desorganizada, exame atrasado ou informacao ocupacional inconsistente. A folha continua certa. O problema e que ela nunca prometeu resolver isso tudo.",
          "Por isso esse conteudo precisa reposicionar a conversa: ter funcionario e maior do que processar pagamento. E quando o empresario entende isso, a ponte para RH e SST deixa de soar distante.",
        ],
      },
    ],
    practicalChecklistTitle: "Tres pontos para revisar alem do fechamento da folha",
    practicalChecklist: [
      "Se o fluxo de admissao esta alinhado com exame e ASO.",
      "Se as informacoes ocupacionais conversam com o que a empresa envia ou prepara para o eSocial.",
      "Se a funcao real do colaborador bate com a documentacao que a empresa guarda.",
    ],
  },
  "vigilancia-sanitaria-e-documentos-da-empresa": {
    articleSections: [
      {
        title: "Quem depende de vigilancia sanitaria costuma olhar menos para a parte interna da empresa",
        paragraphs: [
          "Restaurante, padaria, clinica, salao e outros negocios regulados por vigilancia sanitaria vivem sob pressao de vistoria, licenca e padrao de atendimento. Isso puxa a energia da empresa para um lado bem visivel da conformidade.",
          "O que fica para tras e a parte interna da equipe: funcao, rotina, exame, documento e risco ocupacional. O empresario sente que esta cuidando da regularizacao, mas esta olhando apenas um pedaço dela.",
        ],
      },
      {
        title: "Restaurante, clinica, padaria e salao nao conseguem separar licenca de rotina da equipe",
        paragraphs: [
          "Nesses segmentos, a falha raramente aparece isolada. Quando a empresa esta correndo atras de licenca, tambem costuma estar correndo atras de escala, admissao, treinamento e organizacao. Se cada frente anda sozinha, a exposicao aumenta.",
          "O ponto deste conteudo e juntar as pecas. Nao para transformar tudo em SST de uma vez, mas para mostrar que vigilancia sanitaria nao elimina a necessidade de olhar a equipe e a documentacao por inteiro.",
        ],
      },
    ],
    practicalChecklistTitle: "Onde pequenas empresas desses segmentos mais escorregam",
    practicalChecklist: [
      "Tratam licenca e vistoria como se resolvessem toda a regularizacao.",
      "Crescem a equipe sem reorganizar documentos e rotina.",
      "Misturam urgencia de atendimento ao cliente com improviso na parte interna da operacao.",
    ],
  },
  "empresa-pequena-com-funcionario-quais-obrigacoes": {
    articleSections: [
      {
        title: "Empresa pequena com funcionario nao tem obrigacao pequena por definicao",
        paragraphs: [
          "Empresa pequena costuma operar perto do limite. O dono concentra decisao, o contador segura a parte fiscal e a equipe faz varias coisas ao mesmo tempo. Nesse cenario, e comum achar que as exigencias tambem serao pequenas.",
          "Nao funciona assim. A presenca de funcionario ja muda o jogo. Talvez a empresa tenha menos camadas, menos gente e menos formalidade interna. Mas continua tendo obrigações que precisam de dono e de rotina.",
        ],
      },
      {
        title: "O maior risco da empresa pequena nao e o porte. E descobrir tudo tarde",
        paragraphs: [
          "Quando tudo depende da memoria ou da correria da semana, a empresa pequena acumula buracos sem perceber. A admissao vira urgencia, o exame fica para depois, o documento some e o empresario sente que esta sempre resolvendo o assunto tarde demais.",
          "Esse conteudo tem forca porque conversa com a realidade de quem nao tem estrutura grande, mas ja precisa operar com mais responsabilidade do que imaginava.",
        ],
      },
    ],
    practicalChecklistTitle: "Base minima para empresa pequena que ja tem equipe",
    practicalChecklist: [
      "Saber como a admissao vai acontecer antes de abrir a vaga.",
      "Entender quais documentos dependem da funcao e da atividade exercida.",
      "Criar um fluxo simples para nao descobrir obrigacao apenas quando o problema aparece.",
    ],
  },
  "primeiro-funcionario-o-que-muda-na-pratica": {
    articleSections: [
      {
        title: "Contratar o primeiro funcionario muda a rotina mais do que parece",
        paragraphs: [
          "Antes disso, a empresa responde por si mesma. Depois disso, ela passa a responder tambem pela entrada de outra pessoa na operacao. Parece uma mudanca pequena no papel. Na pratica, muda prazo, responsabilidade, documento e ritmo.",
          "E exatamente por isso que o primeiro funcionario costuma trazer ansiedade. O dono quer crescer, nao quer perder o candidato e ao mesmo tempo descobre que precisa organizar etapas que nunca fizeram parte da rotina anterior.",
        ],
      },
      {
        title: "O erro mais comum na primeira contratacao e deixar tudo para a semana da admissao",
        paragraphs: [
          "Quando o processo comeca tarde, tudo entra em modo urgencia: exame, ASO, dados de registro, alinhamento com contador e definicao do cargo. O risco nao e apenas burocratico. E comecar a relacao de trabalho de forma desorganizada.",
          "Por isso, essa pagina precisa funcionar quase como um aviso tranquilo: contratar o primeiro funcionario nao precisa virar caos, mas exige preparacao que muita empresa nunca recebeu de forma clara.",
        ],
      },
    ],
    practicalChecklistTitle: "O que muda antes mesmo do primeiro dia de trabalho",
    practicalChecklist: [
      "A empresa passa a precisar de um fluxo claro de admissao.",
      "Exame admissional e ASO deixam de ser detalhe e viram etapa concreta.",
      "Cargo, rotina e documentacao precisam bater desde o inicio.",
    ],
  },
  "documentos-obrigatorios-empresa-com-funcionarios": {
    articleSections: [
      {
        title: "Documentos obrigatorios para empresa com funcionarios nao sao so papel",
        paragraphs: [
          "Muita empresa pensa em documentos como uma pilha de arquivos que alguem precisa guardar. So que, quando ha funcionario, documento e menos sobre arquivo e mais sobre prova. Prova de que a admissao foi feita direito, de que a funcao esta clara e de que a rotina ocupacional nao esta solta.",
          "Essa diferenca importa porque muda a forma de organizar a empresa. O que antes parecia detalhe administrativo passa a ser parte da defesa operacional do negocio.",
        ],
      },
      {
        title: "Checklist de documentos so funciona quando orienta acao e nao so nome de sigla",
        paragraphs: [
          "Empresario nao precisa decorar sigla sem contexto. Precisa entender para que cada camada de documento serve, quando ela entra e quem precisa alimentar aquela informacao para que o papel nao vire enfeite.",
          "Esse e o ponto que separa texto util de lista seca. O conteudo deve ajudar a enxergar o mapa e nao apenas despejar termos tecnicos.",
        ],
      },
    ],
    practicalChecklistTitle: "Perguntas praticas para organizar a base documental",
    practicalChecklist: [
      "A empresa sabe quais documentos dependem do risco e da funcao real?",
      "Existe alguem garantindo que exames, ASO e eventos nao andem separados?",
      "Os registros acompanham o que acontece de fato na operacao?",
    ],
  },
  "contador-cuida-de-tudo": {
    articleSections: [
      {
        title: "O contador e parte da solucao, mas nao substitui a operacao da empresa",
        paragraphs: [
          "A confusao geralmente nao vem de ma fe. Vem de uma expectativa mal colocada. O empresario terceiriza a contabilidade, ganha seguranca na parte fiscal e imagina que o resto tambem sera puxado automaticamente.",
          "So que varias informacoes criticas nao nascem no escritorio contabil. Elas nascem no cargo real, na forma como a equipe trabalha, na urgencia da admissao, no risco da atividade e nas decisoes do proprio negocio.",
        ],
      },
      {
        title: "Quando o empresario acha que o contador cuida de tudo, nasce um ponto cego",
        paragraphs: [
          "Quando ninguem dentro da empresa se reconhece como dono do tema, o contador passa a receber informacao incompleta, tarde ou sem contexto. A falha nem sempre explode na hora. Ela vai se acumulando em detalhe mal alimentado.",
          "Esse conteudo funciona bem porque mexe numa objecao real do empresario sem atacar a contabilidade. O ajuste e de responsabilidade, nao de culpa.",
        ],
      },
    ],
    practicalChecklistTitle: "O que continua sendo responsabilidade da empresa",
    practicalChecklist: [
      "Descrever com clareza cargo, rotina e mudancas na operacao.",
      "Avisar contratacao, urgencia e alteracoes com antecedencia suficiente.",
      "Nao presumir que exame, documento e informacao ocupacional surgem sozinhos da parte contabil.",
    ],
  },
  "fiscalizacao-empresa-o-que-podem-cobrar": {
    articleSections: [
      {
        title: "Fiscalizacao na empresa nao se resume a imposto, nota e prefeitura",
        paragraphs: [
          "Quando se fala em fiscalizacao, muita gente pensa so em imposto, nota e prefeitura. Essa visao e incompleta. Dependendo da atividade e da estrutura da empresa, o que entra no radar inclui equipe, processo, documento e prova do que a operacao faz de verdade.",
          "O problema e que quase ninguem se organiza pensando nisso antes. A empresa segue tocando a rotina ate o dia em que percebe que nao saberia exatamente o que mostrar se fosse cobrada.",
        ],
      },
      {
        title: "O que a fiscalizacao pode cobrar depende do que a empresa consegue provar",
        paragraphs: [
          "Fiscalizacao nao precisa ser tratada como fantasma. Ela funciona melhor como teste de maturidade. Se uma cobranca simples ja desmonta a organizacao interna, o problema nao esta na visita. Esta no que a empresa ainda nao estruturou.",
          "Essa pagina e boa para trazer a dor para o concreto, porque ela tira o tema do campo abstrato e aproxima de itens verificaveis.",
        ],
      },
    ],
    practicalChecklistTitle: "Antes de qualquer cobranca chegar, vale checar",
    practicalChecklist: [
      "Se a empresa sabe quais documentos apresentaria primeiro.",
      "Se os fluxos de equipe e operacao estao minimamente organizados.",
      "Se existe clareza sobre o que depende de RH, de saude ocupacional e de decisao interna.",
    ],
  },
  "empresa-regularizada-com-funcionarios": {
    articleSections: [
      {
        title: "Empresa regularizada com funcionarios precisa de encaixe entre cadastro, rotina e prova",
        paragraphs: [
          "Muitos empresarios carregam a sensacao de que falta alguma coisa, mas nao conseguem nomear o que e. Isso acontece porque a empresa ja passou da fase de um documento ou outro. Agora ela precisa de encaixe entre admissao, funcao, exame, evento e prova.",
          "Por isso, essa pagina nao deve repetir todas as anteriores. Ela serve para juntar o raciocinio: CNPJ, nota, Simples, alvara e folha importam, mas nenhum deles sozinho fecha a conta de quem opera com funcionarios.",
        ],
      },
      {
        title: "A empresa mais exposta nem sempre e a mais baguncada por fora",
        paragraphs: [
          "As vezes o negocio parece organizado por fora. Tem contador, tem folha, tem licenca, tem gente trabalhando. O que falta e a costura entre essas partes. E e justamente essa falta de costura que transforma urgencia pequena em problema recorrente.",
          "A sintese do cluster precisa mostrar isso de forma clara: regularizacao com funcionarios e sistema, nao colecao de tarefas espalhadas.",
        ],
      },
    ],
    practicalChecklistTitle: "O que nao pode faltar numa leitura integrada da empresa",
    practicalChecklist: [
      "Admissao e documentos precisam conversar com a operacao real.",
      "Exames e rotina ocupacional nao podem ficar soltos da agenda da empresa.",
      "A empresa precisa saber para onde olhar quando a dor sai do cadastro e entra na equipe.",
    ],
  },
};

export const empresarioSEO: Record<string, EmpresarioDocument> = Object.fromEntries(
  Object.entries(empresarioBaseSEO).map(([slug, data]) => [
    slug,
    {
      ...data,
      ...empresarioStrategicMap[slug as keyof typeof empresarioBaseSEO],
      ...empresarioNarrativeMap[slug as keyof typeof empresarioBaseSEO],
    },
  ]),
) as Record<string, EmpresarioDocument>;
