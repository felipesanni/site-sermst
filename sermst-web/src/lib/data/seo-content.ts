// Centralized SEO and Regional Authority Matrix for SERMST (Grande SP Expansion)

export interface FAQItem {
  q: string;
  a: string;
}

export interface SEODocument {
  h1: string;
  hook: string;
  isClínico: boolean;
  fluxoCorporativo?: string[];
  content: {
    dor: string;
    solução: string;
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
  unidadeReferência: string;
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
  /** Por que a SERMST é especialmente relevante para esta cidade */
  diferencialLocal?: string;
}

export const localidades: Localidade[] = [
  {
    nome: "São Paulo",
    slug: "sao-paulo",
    unidadeReferência: "Unidade Central (Largo do Paissandu)",
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
    unidadeReferência: "São Paulo (Centro)",
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
    unidadeReferência: "São Paulo (Centro)",
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
    unidadeReferência: "São Paulo (Centro)",
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
    unidadeReferência: "São Paulo (Centro)",
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
    unidadeReferência: "São Paulo (Centro)",
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
    unidadeReferência: "São Paulo (Centro)",
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
    unidadeReferência: "São Paulo (Centro)",
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
  anosExperiência: "+40",
  empresasAtendidas: "+3.000",
  clínicasCredenciadas: "+500",
  vidasGeriadas: "+40k",
};

export const servicosSEO: Record<string, SEODocument> = {
  "exame-admissional-expresso": {
    h1: "Exame Admissional | Clínica de Medicina do Trabalho",
    hook:
      "Precisa de exame admissional com rapidez, validade para eSocial e menos impacto na rotina do RH? A SERMST realiza exame admissional em São Paulo com laboratório próprio, liberação ágil de ASO e estrutura para empresas que não podem atrasar contratacoes.",
    isClínico: true,
    quandoRequerido:
      "O exame admissional e uma exigencia legal da NR-07 (PCMSO) e deve ser realizado antes que o colaborador inicie suas funcoes. Alem de garantir a aptidão do funcionario, ele sustenta o envio correto do evento S-2220 ao eSocial e ajuda a evitar multas por falhas no processo de admissão.",
    documentosNecessarios: [
      "RG e CPF ou documento oficial com foto",
      "Guia de encaminhamento em papel ou digital",
      "CNPJ da empresa contratante",
    ],
    expectativaCusto:
      "O preço do exame admissional varia conforme os riscos do cargo e a necessidade de exames complementares, como audiometria, sangue, ECG ou outros. Solicite o orçamento corporativo para pacotes de atendimento ocupacional.",
    content: {
      dor:
        "Processos de contratação lentos, filas em clínicas terceirizadas e demora no ASO geram admissões travadas, retrabalho para o RH e perda de produtividade logo no inicio da operação.",
      solução:
        "Com laboratório próprio, equipe médica especializada em medicina do trabalho e fluxo ocupacional orientado a urgencia empresarial, a SERMST reduz burocracia e acelera a liberação do ASO sem abrir mao de conformidade.",
      beneficios: [
        "Liberação de ASO com mais velocidade operacional",
        "Clínica de medicina do trabalho centralizada",
        "ASO com validade plena para eSocial",
        "Resultados integrados em um so fluxo para o RH",
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
          q: "O ASO admissional e válido por quanto tempo?",
          a: "O ASO admissional e específico para o momento da contratação. Depois da admissão, o colaborador passa a seguir o cronograma do PCMSO da empresa.",
        },
        {
          q: "Precisa agendar o exame de admissão?",
          a: "Recomendamos o contato previo por WhatsApp para orientar o fluxo e reduzir espera, mas a SERMST também atende demandas de urgencia empresarial.",
        },
        {
          q: "Quais exames são necessarios na admissão?",
          a: "O exame clínico e obrigatório, e os complementares dependem dos riscos do cargo definidos no PCMSO da empresa.",
        },
      ],
    },
  },
  "pcmso-nr07-programa": {
    h1: "PCMSO (NR-07) | Gestão de Saúde Ocupacional Especializada",
    hook:
      "PCMSO não pode ser documento genérico. A SERMST elabora e coordena o PCMSO com base na realidade da sua empresa, definindo grade de exames, periodicidade, coerencia com riscos ocupacionais e sustentacao correta para o eSocial.",
    isClínico: false,
    fluxoCorporativo: [
      "Diagnóstico e visita do médico do trabalho",
      "Elaboração do cronograma de exames",
      "Assinatura do coordenador e entrega digital",
    ],
    quandoRequerido:
      "O PCMSO e obrigatório para empresas com empregados CLT e funciona como o eixo médico da NR-07. E ele que define quais exames cada trabalhador deve realizar de acordo com os riscos identificados na operação.",
    content: {
      dor:
        "PCMSO genérico, desconectado da operação e mal alinhado ao risco do cargo abre espaco para exames inadequados, falhas em S-2220, insegurança jurídica e passivos ocupacionais.",
      solução:
        "A SERMST trabalha com assessoria médica real, leitura do processo produtivo e construcao de um programa de saúde ocupacional que protege a empresa técnicamente, operacionalmente e jurídicamente.",
      beneficios: [
        "Coordenacao por médicos do trabalho especialistas",
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
          q: "O que e PCMSO?",
          a: "E o Programa de Controle Médico de Saúde Ocupacional, obrigatório para prevenir, monitorar e registrar a saúde do trabalhador conforme os riscos da empresa.",
        },
        {
          q: "Quem assina o PCMSO?",
          a: "O PCMSO deve ser assinado por médico do trabalho responsavel pela coordenacao do programa.",
        },
      ],
    },
  },
  "pgr-nr01-gerenciamento-riscos": {
    h1: "PGR (NR-01) | Engenharia de Segurança e Levantamento de Riscos",
    hook:
      "Sua empresa precisa de PGR coerente com a operação real, e não de um documento padrao. A SERMST realiza vistoria técnica, inventario de riscos e plano de acao com foco em conformidade, prevenção e sustentacao do eSocial.",
    isClínico: false,
    fluxoCorporativo: [
      "Vistoria técnica pormenorizada em campo",
      "Levantamento e inventario de riscos ocupacionais",
      "Definicao do plano de acao e entrega técnica",
    ],
    quandoRequerido:
      "O PGR e a base da gestão de riscos ocupacionais prevista pela NR-01. Ele deve refletir a operação real da empresa e ser revisto quando houver mudanças relevantes em processo, estrutura, layout ou exposição ocupacional.",
    content: {
      dor:
        "PGRs copia e cola, feitos sem leitura real do ambiente, costumam falhar em auditorias, enfraquecem a prevenção e ainda alimentam o eSocial com informações inconsistentes.",
      solução:
        "A SERMST faz engenharia de campo orientada a realidade da empresa, analisa atividades, maquinas, agentes nocivos e medidas de controle para entregar um inventario de riscos defensavel e realmente utilizavel.",
      beneficios: [
        "Inventario de riscos conforme NR-01",
        "PGR baseado na realidade operacional",
        "Plano de acao com cronograma definido",
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
          a: "O PGR integra o gerenciamento de riscos ocupacionais e exige inventario coerente, plano de acao e acompanhamento continuo.",
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
      "Documentação solida para aposentadoria especial, PPP e eSocial S-2240. A SERMST realiza médicoes quantitativas, enquadramento técnico e entrega de LTCAT com base consistente para obrigações previdênciarias.",
    isClínico: false,
    fluxoCorporativo: [
      "Visita técnica com coleta de dados quantitativos",
      "Analise técnica e enquadramento previdênciario",
      "Emissão do laudo assinado por engenheiro SST",
    ],
    quandoRequerido:
      "O LTCAT e indispensavel para empresas com exposição a agentes nocivos que precisam sustentar aposentadoria especial, PPP e recolhimentos relacionados ao risco previdênciario.",
    content: {
      dor:
        "Laudos técnicos inconsistentes podem gerar recolhimento indevido, base frágil para PPP e exposição a discussoes previdênciarias de alto custo.",
      solução:
        "A SERMST combina médicao técnica, critério de enquadramento e leitura jurídica do risco para entregar LTCAT mais consistente e defensavel.",
      beneficios: [
        "Médicoes de ruido e calor certificadas",
        "Base técnica para o Perfil Profissiografico Previdênciario",
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
    isClínico: false,
    content: {
      dor:
        "Quando o eSocial SST fica sem dono, a empresa passa a conviver com atraso de evento, erro manual, retrabalho entre RH e SST e risco real de multa automática.",
      solução:
        "A SERMST estrutura a rotina de envio com software, protocolo, suporte e visibilidade operacional, ajudando a empresa a transformar obrigação digital em processo controlado.",
      beneficios: [
        "Redução de multas automáticas",
        "Protocolo de entrega XML",
        "Interface entre SST, RH e operação",
        "Monitoramento de pendências e prazos",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "No eSocial, ágilidade no dado e tao importante quanto a qualidade técnica da informação.",
        author: "Governanca Corporativa",
        role: "SERMST",
      },
      faq: [
        {
          q: "O que e o evento S-2220?",
          a: "E o evento de monitoramento da saúde do trabalhador, usado para registrar informações de ASO e exames ocupacionais.",
        },
        {
          q: "E o evento S-2240?",
          a: "E o evento de condições ambientais do trabalho, ligado a exposição a riscos e base técnica de SST.",
        },
      ],
    },
  },
  "audiometria-ocupacional-clinica": {
    h1: "Audiometria Ocupacional | Exames de Audição",
    hook:
      "Proteja a audição da equipe e reduza exposição a passivos relacionados a ruido ocupacional. A SERMST realiza audiometria ocupacional integrada ao PCMSO com estrutura adequada e foco em validade técnica.",
    isClínico: true,
    quandoRequerido:
      "A audiometria ocupacional e indicada para funcoes expostas a ruido acima dos limites de tolerancia e costuma ser exigida em admissão, demissão e acompanhamentos periódicos.",
    content: {
      dor:
        "Perda auditiva ocupacional pode gerar processo, afastamento e custo elevado quando a empresa não monitora o trabalhador de forma consistente.",
      solução:
        "A SERMST realiza audiometria com critério técnico, profissionais especializados e integração ao fluxo do ASO para dar mais consistencia ao monitoramento ocupacional.",
      beneficios: [
        "Cabine acustica calibrada",
        "Resultado integrado ao ASO",
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
          q: "Precisa de repouso auditivo?",
          a: "Sim. O trabalhador deve cumprir repouso auditivo para que o resultado tenha validade técnica.",
        },
      ],
    },
  },
  "exame-toxicologico-clt": {
    h1: "Exame Toxicológico | Motoristas Profissionais CLT",
    hook:
      "Exame toxicológico ocupacional com ágilidade para transportadoras e operações que dependem de motoristas CLT. A SERMST organiza coleta, validade nacional do laudo e suporte para rotinas vinculadas ao eSocial.",
    isClínico: true,
    quandoRequerido:
      "O exame toxicológico e obrigatório em admissão, demissão e acompanhamentos previstos para motoristas profissionais das categorias C, D e E.",
    content: {
      dor:
        "Atraso no toxicológico trava contratação, expoe a empresa a risco regulatorio e compromete operações que dependem de motorista liberado rapidamente.",
      solução:
        "A SERMST organiza coleta eficiente, prazo curto e integração ocupacional para reduzir impacto logistico e acelerar a liberação do trabalhador.",
      beneficios: [
        "Coleta rápida e discreta",
        "Suporte para rotina ocupacional",
        "Laudo com validade nacional",
        "Faturamento corporativo",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Segurança nas estradas começa em um processo ocupacional bem controlado desde a contratação.",
        author: "Diretor Médico",
        role: "SERMST",
      },
      faq: [
        {
          q: "O que detecta o exame?",
          a: "O exame toxicológico identifica o consumo de substancias psicoativas em janela retroativa de longo prazo por meio de amostra biologica aprópriada.",
        },
      ],
    },
  },
  "exames-complementares-laboratoriais": {
    h1: "Exames Complementares em SST | Laboratório Próprio",
    hook:
      "Exames complementares em medicina do trabalho com mais ágilidade para o RH e menos deslocamento para o colaborador. A SERMST integra exames de sangue, visao, ECG, EEG e espirometria ao fluxo do ASO para acelerar a admissão e reforcar a conformidade.",
    isClínico: true,
    content: {
      dor:
        "Quando cada exame complementar acontece em um lugar diferente, o processo ocupa mais tempo, gera desgaste para o colaborador e atrasa a liberação do trabalhador para a operação.",
      solução:
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
    isClínico: false,
    fluxoCorporativo: [
      "Mapeamento de necessidades",
      "Cronograma de treinamentos",
      "Gestão de certificados e reciclagens",
    ],
    quandoRequerido:
      "Os treinamentos são exigidos conforme os riscos da operação e as normas aplicaveis ao negócio. A falta de formação ou reciclagem pode comprometer o eSocial e frágilizar a defesa da empresa em caso de acidente.",
    content: {
      dor:
        "Certificados sem consistencia técnica ou treinamentos superficiais não protegem o colaborador nem o CNPJ quando a empresa precisa provar sua rotina de prevenção.",
      solução:
        "A SERMST trabalha com metodologia voltada a adultos, instrutores experientes e organizacao do ciclo de treinamentos para transformar obrigação legal em proteção operacional.",
      beneficios: [
        "Catalogo amplo de NRs e temas obrigatórios",
        "Formação de CIPA e brigada de incendio",
        "Certificados digitais com validação",
        "Treinamentos teóricos e práticos in-company ou em hub",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Treinamento eficaz não é custo. E investimento em continuidade operacional e paz jurídica.",
        author: "Diretoria Técnica SERMST",
        role: "Gestão SST",
      },
      faq: [
        {
          q: "Quais NRs minha empresa precisa?",
          a: "A necessidade depende dos riscos e da operação. O PGR e um dos caminhos para definir as prioridades técnicas de treinamento.",
        },
        {
          q: "Os treinamentos podem ser feitos na minha empresa?",
          a: "Sim. A SERMST realiza treinamentos diretamente na sede do cliente ou em estrutura adequada de apoio.",
        },
        {
          q: "Como validar um certificado da SERMST?",
          a: "Os certificados emitidos podem ser validados por código único ou mecanismo digital de conferenca.",
        },
      ],
    },
  },
  "pericia-trabalhista-assistente-tecnico": {
    h1: "Pericia Trabalhista | Assistente Técnico Especializado",
    hook:
      "Defesa técnica para empresas que precisam responder melhor em pericias trabalhistas de insalubridade, periculosidade e doenca ocupacional. A SERMST atua com acompanhamento estrategico, quesitos técnicos e leitura critica do caso.",
    isClínico: false,
    quandoRequerido:
      "Esse serviço costuma ser necessario quando a empresa esta envolvida em processo trabalhista e precisa de assistencia técnica qualificada para acompanhar a perícia judicial.",
    content: {
      dor:
        "Laudos periciais desfavoraveis por falta de defesa técnica adequada podem elevar condenacoes e enfraquecer a posicao jurídica da empresa.",
      solução:
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
          a: "Sim. O assistente técnico pode acompanhar a diligencia e atuar técnicamente dentro dos limites processuais do caso.",
        },
      ],
    },
  },
};

// Helper para gerar entries de saúde com defaults consistentes
const saúdeEntry = (h1: string, hook: string, dor: string, solução: string): SEODocument => ({
  h1,
  hook,
  isClínico: false,
  content: {
    dor,
    solução,
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

export const saúdeSEO: Record<string, SEODocument> = {
  "importancia-do-exame-periodico": {
    h1: "Exame Periódico de Medicina do Trabalho",
    hook:
      "Exame periódico e parte central da vigilância médica ocupacional. Monitorar a saúde da equipe no tempo certo ajuda a reduzir afastamentos, sustentar o PCMSO e evitar frágilidades em auditorias e fiscalizações.",
    isClínico: true,
    content: {
      dor:
        "Empresas que deixam exame periódico vencer acumulam risco médico, operacional e jurídico ao mesmo tempo.",
      solução:
        "Com cronograma médico coerente e controle dos vencimentos, a empresa protege a saúde do trabalhador e melhora a disciplina de compliance ocupacional.",
      beneficios: [
        "Redução de custos com afastamentos",
        "Compliance com PCMSO NR-07",
        "Saúde corporativa em dia",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Prevencao consistente e uma das bases da sustentabilidade corporativa.",
        author: "Diretor Médico",
        role: "SERMST",
      },
      faq: [
        {
          q: "Qual a multa por atraso?",
          a: "O valor pode variar conforme o porte da empresa, o contexto da infracao e a quantidade de trabalhadores afetados.",
        },
      ],
    },
  },
  // ─── Conteúdos migrados do WordPress (redirects 301) ─────────────────────
  "o-que-e-saude-ocupacional": saúdeEntry(
    "O que é Saúde Ocupacional: guia completo para gestores",
    "Saúde ocupacional não é só ASO e exame periódico. É um sistema de prevenção que protege o trabalhador, a operação e o patrimônio da empresa contra afastamento, processo e multa.",
    "A maioria dos gestores trata saúde ocupacional como burocracia até o problema explodir — afastamento longo, perícia, ação judicial.",
    "Estruturar saúde ocupacional como rotina (não como reação) reduz afastamento, sustenta PCMSO e cria evidência técnica para defesa em fiscalização.",
  ),
  "exame-demissional-guia": saúdeEntry(
    "Exame Demissional: como funciona e por que ele protege a empresa",
    "O exame demissional é a última oportunidade da empresa documentar o estado de saúde do colaborador antes da rescisão. Sem ele, qualquer doença futura pode ser atribuída ao período trabalhado.",
    "Empresas que pulam ou atrasam demissional acumulam passivo: a falta de evidência abre espaço para ação trabalhista por doença ocupacional anos depois.",
    "Demissional feito no prazo e registrado corretamente no eSocial fecha o ciclo ocupacional do trabalhador e protege a empresa de reclamação retroativa.",
  ),
  "o-que-sao-epis": saúdeEntry(
    "O que são EPIs: o equipamento que protege o trabalhador e a empresa",
    "EPI (Equipamento de Proteção Individual) é exigência legal — fornecimento gratuito, treinamento de uso, fiscalização do uso e troca periódica. Falhar em qualquer parte é responsabilidade direta da empresa.",
    "Empresas que distribuem EPI sem treinamento, sem ficha de entrega e sem fiscalização de uso descobrem o problema só quando acontece o acidente — e a defesa cai por falta de evidência.",
    "EPI bem implementado tem três partes: o equipamento certo (CA válido), o trabalhador treinado (registro em ficha) e a fiscalização do uso (responsabilidade do encarregado e do SESMT).",
  ),
  "gestao-sst": saúdeEntry(
    "Gestão de SST: o que é e como organizar sem virar burocracia",
    "Gestão de Saúde e Segurança do Trabalho não é um documento — é um sistema. Conecta exame, laudo, treinamento e eSocial em fluxo único que sustenta operação e defende o CNPJ.",
    "Empresas tratam SST como pasta de arquivo. Resultado: documento existe, mas não reflete a operação real. Em fiscalização ou processo, isso desmonta.",
    "Gestão de SST bem feita é cíclica: identifica risco → atualiza PGR → ajusta PCMSO → documenta treinamento → envia eSocial → audita. Cada etapa alimenta a próxima.",
  ),
  "pcmso-programa-controle-medico": saúdeEntry(
    "PCMSO: o que é, quem precisa e como montar o programa",
    "O PCMSO define quais exames cada trabalhador precisa fazer e com qual frequência, por cargo e por risco. Sem ele válido, a empresa não tem base para os ASOs nem para o S-2220 no eSocial.",
    "PCMSO genérico, desatualizado ou assinado por médico sem especialização em medicina do trabalho não sustenta fiscalização — e elimina a proteção que o documento deveria oferecer.",
    "PCMSO correto é personalizado: reflete os riscos reais de cada cargo, define os exames e periodicidades corretos, e está alinhado com o PGR e com os eventos de SST do eSocial.",
  ),
  "aso-atestado-saude-ocupacional": saúdeEntry(
    "ASO: o que é, quando emitir e por que protege a empresa",
    "O Atestado de Saúde Ocupacional é a evidência jurídica de que a empresa avaliou a saúde do trabalhador. Sem ASO válido, qualquer doença futura pode ser atribuída ao período de trabalho.",
    "ASO feito fora do prazo, com campos faltando, ou por médico não habilitado não protege a empresa — mesmo que o exame tenha sido realizado. O documento precisa estar correto em forma e conteúdo.",
    "ASO correto tem: médico coordenador do PCMSO assinando, todos os campos preenchidos, via entregue ao trabalhador e envio do S-2220 ao eSocial dentro do prazo.",
  ),
  "medicina-do-trabalho-guia": saúdeEntry(
    "Medicina do Trabalho: o que é e o que toda empresa precisa saber",
    "Medicina do trabalho conecta saúde do trabalhador, segurança jurídica da empresa e conformidade com o eSocial. Quando bem estruturada, reduz afastamento, processo trabalhista e custo escondido.",
    "A maioria das empresas trata medicina do trabalho como burocracia pontual — faz exame admissional e esquece. O resultado aparece no processo trabalhista, no afastamento longo ou na autuação do MTE.",
    "Medicina do trabalho bem estruturada é preventiva: PCMSO alinhado com o PGR, exames no prazo, ASOs corretos, eSocial em dia e médico coordenador que acompanha a operação.",
  ),
};

// Helper para gerar entries de RH com defaults consistentes
const rhEntry = (h1: string, hook: string, dor: string, solução: string): SEODocument => ({
  h1,
  hook,
  isClínico: false,
  content: {
    dor,
    solução,
    beneficios: [
      "Decisão de RH com respaldo técnico e jurídico",
      "Documentação que sustenta auditoria e fiscalização",
      "Redução de retrabalho e exposição a passivo",
    ],
  },
  geoOpt: {
    expertQuote: {
      text: "RH bem informado decide melhor — e empresa bem documentada gasta menos com processo.",
      author: "Equipe SERMST",
      role: "Medicina e Segurança do Trabalho",
    },
    faq: [
      {
        q: "Onde isso se conecta com SST da empresa?",
        a: "Toda decisão de RH (admissão, demissão, mudança de função) tem peça de SST por trás — ASO, PCMSO, PGR. A SERMST integra os dois lados.",
      },
    ],
  },
});

export const rhDoresSEO: Record<string, SEODocument> = {
  "multa-esocial-s2220": {
    h1: "Como Evitar Multas do eSocial S-2220 e S-2240",
    hook:
      "O eSocial cruza dados de forma automática. Empresas que deixam saúde e segurança sem rotina definida se expõem a atraso de evento, erro operacional e risco crescente de multa.",
    isClínico: false,
    content: {
      dor:
        "A falta de envio, o envio fora do prazo ou a base técnica inconsistente nos eventos de SST pode gerar autuação, retrabalho e insegurança entre RH, operação e medicina ocupacional.",
      solução:
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
          a: "O evento deve seguir o prazo operacional aplicavel ao envio de informações de saúde do trabalhador, conforme a rotina e a obrigação da empresa.",
        },
      ],
    },
  },
  // ─── Guias migrados do WordPress (redirects 301) ─────────────────────────
  // função-encarregado tem página dedicada em /rh/função-encarregado/page.tsx
  "o-que-um-gerente-faz": rhEntry(
    "O que um gerente faz: funções, responsabilidades e impacto",
    "Gerente é o cargo que transforma estratégia da diretoria em execução real da equipe. Reúne planejamento, gente e indicador num só ponto de responsabilidade.",
    "Empresas familiares tratam o gerente como super-encarregado — perdem talento, perdem liderança e perdem produtividade quando o cargo não é estruturado com clareza.",
    "Gerente bem definido tem três entregáveis claros: resultado da área, desenvolvimento da equipe e segurança da operação. SST é parte do terceiro pilar.",
  ),
  "quando-demitir-funcionario": rhEntry(
    "Quando demitir um funcionário: guia para gestores",
    "Demissão é decisão técnica, não emocional. Feita certa, protege o time e o resultado. Feita errada, vira processo trabalhista, queda de moral e custo escondido.",
    "Gestor adia demissão por receio do passivo, ou demite por impulso sem documentação. Os dois caminhos custam caro.",
    "Demissão estruturada tem três etapas: documentação prévia (advertência, feedback formal), exame demissional em dia, e rescisão com base em fato — não opinião.",
  ),
  "carta-demissão": rhEntry(
    "Como fazer uma carta de demissão: modelo e cuidados",
    "A carta de demissão (rescisão) é peça jurídica. O conteúdo dela define obrigações trabalhistas, abre janela para passivo e fica no eSocial. Texto genérico custa caro.",
    "Carta mal redigida abre brecha para reclamação trabalhista posterior — alegação de motivo justo invalido, falta de aviso prévio, descumprimento de norma coletiva.",
    "Carta correta cita o fato (não a opinião), respeita o aviso prévio aplicável, lista verbas rescisórias e fecha o registro no eSocial e no exame demissional.",
  ),
  "carta-recomendacao": rhEntry(
    "Como fazer uma carta de recomendação: guia prático",
    "A carta de recomendação é uma escolha de gestão — quem você indica diz mais sobre você do que sobre o profissional. Honestidade controlada é o equilíbrio.",
    "Cartas genéricas (\"profissional dedicado\") não ajudam o ex-colaborador e não protegem o gestor. Cartas excessivas viram problema se a contratação seguinte fracassar.",
    "Carta de recomendação efetiva tem três peças: tempo e função real, contribuição mensurável, e contexto da saída (sem detratar nem inflar).",
  ),
  "lista-cnae-brasil": rhEntry(
    "Lista CNAE Brasil: o guia para empresas e empreendedores",
    "O CNAE define o enquadramento da empresa nos órgãos públicos — Receita, Previdência, Trabalho. Errar o CNAE muda alíquota, muda obrigação SST e muda risco de fiscalização.",
    "Empresas escolhem CNAE no abrir do CNPJ e nunca mais revisam. Quando a operação muda, o CNAE fica defasado — gera risco trabalhista e tributário escondido.",
    "Revisão de CNAE deve ser feita sempre que a operação muda significativamente. Cada CNAE tem grau de risco SST distinto, que muda PGR, PCMSO e adicional aplicável.",
  ),
  "evitar-processos-trabalhistas": rhEntry(
    "Como evitar processos trabalhistas: guia para empresas e RH",
    "Processo trabalhista raramente é surpresa. É consequência acumulada de pequenas falhas — registro de ponto inconsistente, EPI sem ficha, ASO atrasado, contrato genérico.",
    "Empresas só descobrem o tamanho do passivo na hora do processo. Aí o custo é múltiplo do que custaria prevenir com documentação correta.",
    "Prevenção tem três pilares: contrato e norma coletiva atualizados, registro de ponto e horário sem brecha, e SST documentada (PCMSO, PGR, treinamentos formais).",
  ),
  "treinamento-gerentes": rhEntry(
    "Como treinar gerentes: guia para desenvolver líderes de alto desempenho",
    "Gerente promovido sem treinamento vira problema na equipe e na operação. Treinar liderança é investimento que retorna em produtividade, retenção e segurança.",
    "Empresas familiares promovem o melhor técnico para gerente e descobrem tarde que liderar é outra competência — perdem o operador bom e ganham um gerente médio.",
    "Treinamento de gerente precisa cobrir gestão de gente, indicador, processo e segurança do trabalho — porque o gerente responde junto pela SST da equipe que comanda.",
  ),
};

export const dicionarioSEO: Record<string, SEODocument> = {
  "o-que-e-aso": {
    h1: "ASO: Tudo sobre o Atestado de Saúde Ocupacional",
    hook:
      "O ASO é um dos documentos centrais da medicina do trabalho. Ele registra a aptidão ocupacional do trabalhador e tem impacto direto em admissão, periódicos, demissão e rotina de eSocial.",
    isClínico: true,
    content: {
      dor:
        "Muitos gestores so percebem a importancia do ASO quando a contratação atrasa, o exame vence ou aparece uma inconsistencia em fiscalização.",
      solução:
        "Entender o que e o ASO, quem assina, quando ele se aplica e como ele se conecta ao PCMSO ajuda a empresa a contratar com mais segurança.",
      beneficios: [
        "Documentação ocupacional conforme NR-07",
        "Proteção jurídica em demissão e afastamento",
        "Conformidade com eventos SST do eSocial",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "O ASO é a prova de que a empresa cumpriu sua obrigação de vigilância médica.",
        author: "Diretor Médico",
        role: "SERMST",
      },
      faq: [
        {
          q: "Qual a validade do ASO admissional?",
          a: "O ASO admissional não tem prazo de validade fixo — ele documenta o estado de saúde na admissão. O próximo exame é o periódico, cuja frequência é definida no PCMSO conforme o cargo e o risco.",
        },
      ],
    },
  },
};
