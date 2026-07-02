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
          q: "Quem assina o PCMSO?",
          a: "A organização deve indicar médico do trabalho responsável pelo PCMSO. Se não houver médico do trabalho na localidade, a NR-07 admite médico de outra especialidade como responsável pelo programa.",
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
    h1: "Treinamentos de NRs | Capacitação e Segurança do Trabalho",
    hook:
      "Treinamentos de NRs com foco em validade documental, aplicação prática e redução de risco operacional. A SERMST oferece capacitação para diferentes exigências regulamentares com controle de certificados e recertificações.",
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
    "Gestão de SST bem feita é cíclica: identifica risco â†’ atualiza PGR â†’ ajusta PCMSO â†’ documenta treinamento â†’ envia eSocial â†’ audita. Cada etapa alimenta a próxima.",
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
      "A sigla LTCAT aparece quando a empresa precisa documentar exposições ocupacionais com base técnica, revisar o PPP, sustentar dados do eSocial S-2240, responder auditoria previdenciária ou analisar possível enquadramento para aposentadoria especial.",
    naoConfunda:
      "LTCAT não é o mesmo que PGR, PPP nem laudo de insalubridade. Esta página explica a sigla e a função do laudo. A página de serviço é a que trata de elaboração, revisão e escopo técnico do LTCAT na empresa.",
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
        q: "LTCAT e laudo de insalubridade são iguais?",
        a: "Não. O LTCAT tem finalidade previdenciária. A insalubridade trabalhista segue critérios próprios, embora as avaliações técnicas possam se relacionar.",
      },
      {
        q: "PPP e LTCAT são a mesma coisa?",
        a: "Não. O PPP consolida o histórico previdenciário e laboral do trabalhador. O LTCAT é um dos documentos técnicos que podem sustentar as informações de exposição usadas nesse histórico.",
      },
    ],
  },
  "o-que-e-ppp": {
    respostaCurta:
      "PPP significa Perfil Profissiográfico Previdenciário. É o documento que consolida o histórico laboral do trabalhador, suas atividades e as informações sobre exposição a agentes nocivos para fins previdenciários.",
    ondeAparece:
      "O PPP aparece em pedidos previdenciários, desligamentos, auditorias e revisões do histórico de exposição. No fluxo atual, suas informações se conectam aos dados ambientais enviados ao eSocial, especialmente pelo evento S-2240.",
    naoConfunda:
      "PPP não é um laudo técnico. Ele consolida informações que precisam ter base consistente em documentos como o LTCAT e nos registros da empresa. Se os documentos contam histórias diferentes, a inconsistência aparece.",
    aprofundamento: {
      href: "/normas/ppp-eletronico",
      title: "Precisa entender PPP eletrônico, S-2240 e responsabilidades?",
      description:
        "Veja como o PPP funciona, quais informações entram no documento e por que LTCAT, PGR e eSocial precisam estar alinhados.",
      label: "Ler guia completo de PPP",
    },
    faq: [
      {
        q: "O que significa PPP?",
        a: "PPP significa Perfil Profissiográfico Previdenciário.",
      },
      {
        q: "PPP e LTCAT são a mesma coisa?",
        a: "Não. O PPP consolida o histórico laboral e previdenciário do trabalhador. O LTCAT fornece base técnica para caracterizar exposições a agentes nocivos.",
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
