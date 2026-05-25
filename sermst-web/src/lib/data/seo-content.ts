// Centralized SEO and Regional Authority Matrix for SERMST (Grande SP Expansion)

export interface FAQItem {
  q: string;
  a: string;
}

export interface SEODocument {
  h1: string;
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
  /** ParÃ¡grafo de perfil econÃ´mico Ãºnico por cidade (anti-doorway, ~80 palavras) */
  perfilEconomico?: string;
  /** Setores econÃ´micos predominantes com exposiÃ§Ã£o a riscos SST */
  setoresPredominantes?: string[];
  /** Bairros industriais/comerciais atendidos */
  bairrosAtendidos?: string[];
  /** Por que a SERMST Ã© especialmente relevante para estÃ¡ cidade */
  diferencialLocal?: string;
}

export const localidades: Localidade[] = [
  {
    nome: "SÃ£o Paulo",
    slug: "sao-paulo",
    unidadeReferencia: "Unidade Central (Largo do Paissandu)",
    distanciaMedia: "0 min",
    adjetivo: "paulistana",
    isHub: true,
    contextoEmpresarial:
      "O principal hub de Medicina do Trabalho na capital. Atendemos empresas de SÃ£o Paulo com foco em exames admissionais rÃ¡pidos, PCMSO consistente e conformidade operacional.",
    perfilEconomico:
      "SÃ£o Paulo concentra o maior parque de serviÃ§os e indÃºstria do paÃ­s. Com mais de 12 milhÃµes de trabalhadores formais na Grande SÃ£o Paulo, a pressÃ£o por conformidade no eSocial SST Ã© constante â€” qualquer falha em S-2220 ou ASO gera passivo imediato. A diversidade de setores exige mÃ©dicos do trabalho familiarizados com riscos quÃ­micos, fÃ­sicos, ergonÃ´micos e psicossociais ao mesmo tempo.",
    setoresPredominantes: [
      "ServiÃ§os e tecnologia â€” alta rotatividade, exame admissional em escala",
      "ConstruÃ§Ã£o civil â€” NR-18, NR-35, laudos de insalubridade e periculosidade",
      "SaÃºde e farmacÃªutico â€” PCMSO rigoroso, exames complementares especÃ­ficos",
      "Varejo e logÃ­stica â€” admissional expresso, toxicolÃ³gico CLT para motoristas",
      "IndÃºstria de transformaÃ§Ã£o â€” PGR, LTCAT, agentes quÃ­micos e fÃ­sicos",
    ],
    bairrosAtendidos: [
      "Centro HistÃ³rico e SÃ©",
      "BrÃ¡s, Mooca e TatuapÃ©",
      "Santo AndrÃ© e ABC Paulista",
      "Lapa, Pinheiros e Vila Madalena",
      "Brooklin, Santo Amaro e Jabaquara",
    ],
    diferencialLocal:
      "Localizada no Largo do Paissandu, 72 â€” Centro HistÃ³rico â€” a SERMST atende sem agendamento. LaboratÃ³rio prÃ³prio, equipe mÃ©dica in loco e integraÃ§Ã£o direta com o eSocial. Para empresas paulistanas com alta rotatividade ou mÃºltiplos CNPJs, o fluxo corporativo centralizado elimina o retrabalho do RH.",
  },
  {
    nome: "Santo AndrÃ©",
    slug: "santo-andre",
    unidadeReferencia: "SÃ£o Paulo (Centro)",
    distanciaMedia: "12 min",
    adjetivo: "andreense",
    contextoEmpresarial:
      "HistÃ³rico polo industrial do ABC. Exame admissional em Santo AndrÃ© com emissÃ£o de ASO e envio Ã¡gil para rotinas de eSocial.",
    perfilEconomico:
      "Santo AndrÃ© Ã© um dos maiores polos industriais da AmÃ©rica Latina. Sede histÃ³rica de montadoras como Mercedes-Benz e de um denso parque metal-mecÃ¢nico, a cidade concentra trabalhadores expostos a agentes fÃ­sicos, quÃ­micos e biolÃ³gicos que exigem laudos especÃ­ficos de insalubridade, PGR atualizado e PCMSO adaptado Ã  atividade de risco. A conformidade com eSocial SST Ã© especialmente crÃ­tica para empresas do segmento automotivo e fornecedoras de indÃºstria pesada.",
    setoresPredominantes: [
      "Automotivo â€” admissional com audiometria, exames de sangue e avaliaÃ§Ã£o ergonÃ´mica",
      "Metal-mecÃ¢nico â€” insalubridade NR-15, PGR com agentes fÃ­sicos e quÃ­micos",
      "QuÃ­mico e petroquÃ­mico â€” LTCAT, laudo de periculosidade NR-16",
      "TÃªxtil e calÃ§adista â€” ergonomia NR-17, PCMSO com avaliaÃ§Ã£o musculoesquelÃ©tica",
      "ConstruÃ§Ã£o e infraestrutura â€” NR-18, trabalho em altura NR-35",
    ],
    bairrosAtendidos: [
      "Centro e Jardim Bela Vista",
      "Capuava â€” polo industrial",
      "Vila HumaitÃ¡ e Jardim MauÃ¡",
      "Utinga â€” polo tÃªxtil e metal",
      "Vila Luzita e Campestre",
    ],
    diferencialLocal:
      "Para indÃºstrias de Santo AndrÃ©, a SERMST oferece laudos de insalubridade e periculosidade com base tÃ©cnica sÃ³lida e defesa em eventual fiscalizaÃ§Ã£o. O fluxo expresso para exame admissional â€” com laboratÃ³rio prÃ³prio â€” evita que admissÃµes da linha de produÃ§Ã£o sejam travadas por fila em clÃ­nica genÃ©rica.",
  },
  {
    nome: "SÃ£o Bernardo",
    slug: "sao-bernardo",
    unidadeReferencia: "SÃ£o Paulo (Centro)",
    distanciaMedia: "18 min",
    adjetivo: "saobernardense",
    contextoEmpresarial:
      "CoraÃ§Ã£o automotivo do Brasil. Medicina do trabalho para empresas de SÃ£o Bernardo com agilidade, rigor tÃ©cnico e seguranÃ§a jurÃ­dica.",
    perfilEconomico:
      "SÃ£o Bernardo do Campo abriga a maior concentraÃ§Ã£o de montadoras do hemisfÃ©rio sul â€” Volkswagen, Mercedes-Benz, Scania, Ford e suas cadeias de fornecedores. Isso cria uma demanda intensa por LTCAT (Laudo TÃ©cnico das CondiÃ§Ãµes Ambientais de Trabalho), laudos de insalubridade e periculosidade e PCMSO adaptado a ambientes com ruÃ­do intenso, solventes e atividade fÃ­sica pesada. O eSocial S-2240 Ã© crÃ­tico para as indÃºstrias da cidade e exige base tÃ©cnica precisa.",
    setoresPredominantes: [
      "Montadoras e autopeÃ§as â€” LTCAT, S-2240, laudos de agentes fÃ­sicos e quÃ­micos",
      "MetalÃºrgico â€” insalubridade NR-15, periculosidade NR-16, PGR",
      "PetroquÃ­mico e plÃ¡sticos â€” PCMSO com exames complementares especÃ­ficos",
      "LogÃ­stica pesada â€” toxicolÃ³gico CLT, admissional para operadores",
      "ConstruÃ§Ã£o e obras industriais â€” NR-18, NR-35, APR",
    ],
    bairrosAtendidos: [
      "Centro e Nova PetrÃ³polis",
      "Rudge Ramos â€” polo universitÃ¡rio e serviÃ§os",
      "Demarchi e AssunÃ§Ã£o â€” indÃºstria",
      "PaulicÃ©ia â€” automotivo",
      "Riacho Grande e Cooperativa",
    ],
    diferencialLocal:
      "A SERMST tem experiÃªncia direta com as exigÃªncias tÃ©cnicas do setor automotivo â€” incluindo elaboraÃ§Ã£o de LTCAT para ambientes com ruÃ­do acima de 85 dB, dosimetria e avaliaÃ§Ã£o de agentes quÃ­micos em linha de produÃ§Ã£o. Para fornecedores de montadoras, o laudo precisa resistir Ã  auditoria do cliente final, nÃ£o apenas Ã  fiscalizaÃ§Ã£o do MinistÃ©rio do Trabalho.",
  },
  {
    nome: "SÃ£o Caetano",
    slug: "sao-caetano",
    unidadeReferencia: "SÃ£o Paulo (Centro)",
    distanciaMedia: "10 min",
    adjetivo: "sulsancaetanense",
    contextoEmpresarial:
      "Polo de serviÃ§os avanÃ§ados com o maior PIB per capita do Brasil. SaÃºde ocupacional orientada a prevenÃ§Ã£o, compliance e fluidez operacional.",
    perfilEconomico:
      "SÃ£o Caetano do Sul Ã© reconhecida pelo maior PIB per capita do Brasil â€” resultado de uma economia baseada em serviÃ§os especializados, saÃºde, tecnologia e comÃ©rcio de alto padrÃ£o. O perfil de risco ocupacional Ã© predominantemente ergonÃ´mico e psicossocial: lesÃµes por esforÃ§o repetitivo (LER/DORT), estresse ocupacional e doenÃ§as relacionadas ao trabalho sedentÃ¡rio. Empresas de SÃ£o Caetano precisam de PCMSO bem estruturado e monitoramento ativo da saÃºde dos colaboradores.",
    setoresPredominantes: [
      "ServiÃ§os e consultorias â€” PCMSO com Ãªnfase em riscos psicossociais (NR-01)",
      "SaÃºde e clÃ­nicas â€” PCMSO com avaliaÃ§Ã£o de riscos biolÃ³gicos",
      "ComÃ©rcio varejista â€” ergonomia NR-17, admissional expresso",
      "Tecnologia e TI â€” avaliaÃ§Ã£o ergonÃ´mica, LER/DORT",
      "EducaÃ§Ã£o e ensino superior â€” ASO periÃ³dico, gestÃ£o de saÃºde coletiva",
    ],
    bairrosAtendidos: [
      "Centro e Barcelona",
      "Nova Gerty e CerÃ¢mica",
      "Santo AndrÃ© border â€” indÃºstria de mÃ©dio porte",
      "MauÃ¡ â€” corredor industrial",
      "FundaÃ§Ã£o e Oswaldo Cruz",
    ],
    diferencialLocal:
      "Para empresas de serviÃ§os em SÃ£o Caetano, a SERMST oferece um PCMSO orientado ao perfil real do cargo â€” nÃ£o um modelo genÃ©rico. A avaliaÃ§Ã£o ergonÃ´mica e o monitoramento de riscos psicossociais (exigidos pela NR-01 atualizada) sÃ£o integrados ao programa, com documentaÃ§Ã£o que sustenta o eSocial sem retrabalho.",
  },
  {
    nome: "Diadema",
    slug: "diadema",
    unidadeReferencia: "SÃ£o Paulo (Centro)",
    distanciaMedia: "20 min",
    adjetivo: "diademense",
    contextoEmpresarial:
      "Polo metal-mecÃ¢nico, quÃ­mico e farmacÃªutico. Especialistas em exames complementares, PGR e documentaÃ§Ã£o de SST para indÃºstrias em Diadema.",
    perfilEconomico:
      "Diadema concentra um dos maiores parques industriais do ABC Paulista, com forte presenÃ§a de indÃºstrias quÃ­micas, farmacÃªuticas, de embalagens e metal-mecÃ¢nicas. O municÃ­pio tem alta incidÃªncia de processos trabalhistas relacionados a insalubridade e acidente de trabalho â€” o que torna a documentaÃ§Ã£o de SST um instrumento de defesa jurÃ­dica, nÃ£o apenas de compliance. PGR desatualizado ou laudo de insalubridade inconsistente Ã© passivo certo em Diadema.",
    setoresPredominantes: [
      "IndÃºstria quÃ­mica e farmacÃªutica â€” LTCAT, laudo de insalubridade, PGR com agentes quÃ­micos",
      "Metal-mecÃ¢nico e autopeÃ§as â€” NR-15, NR-16, avaliaÃ§Ã£o de ruÃ­do e calor",
      "PlÃ¡sticos e embalagens â€” agentes quÃ­micos, ergonomia, PCMSO",
      "AlimentÃ­cio e bebidas â€” higiene ocupacional, exames periÃ³dicos especÃ­ficos",
      "ConstruÃ§Ã£o industrial â€” NR-18, NR-35, CIPA",
    ],
    bairrosAtendidos: [
      "Centro e Piraporinha",
      "TaboÃ£o â€” polo metal-mecÃ¢nico",
      "Eldorado â€” indÃºstria quÃ­mica",
      "Casa Grande e Serraria",
      "ConceiÃ§Ã£o â€” corredor industrial",
    ],
    diferencialLocal:
      "Em Diadema, o laudo de insalubridade precisa ser elaborado por profissional habilitado e resistir Ã  contestaÃ§Ã£o judicial. A SERMST realiza a mediÃ§Ã£o dos agentes ambientais (ruÃ­do, temperatura, agentes quÃ­micos) com equipamentos calibrados e emite o laudo com base tÃ©cnica que sustenta defesa em reclamatÃ³ria trabalhista â€” nÃ£o apenas cumpre a formalidade da NR-15.",
  },
  {
    nome: "Osasco",
    slug: "osasco",
    unidadeReferencia: "SÃ£o Paulo (Centro)",
    distanciaMedia: "35 min",
    adjetivo: "osasquense",
    contextoEmpresarial:
      "Hub financeiro e de e-commerce em expansÃ£o. SoluÃ§Ãµes Ã¡geis em exame admissional e conformidade para o mercado dinÃ¢mico de Osasco.",
    perfilEconomico:
      "Osasco Ã© o segundo maior polo financeiro do estado de SÃ£o Paulo, com sede de grandes bancos, seguradoras e fintechs. Nos Ãºltimos anos, a cidade tambÃ©m se tornou referÃªncia em e-commerce e logÃ­stica de Ãºltima milha â€” setores com altÃ­ssima rotatividade de mÃ£o de obra. Essa combinaÃ§Ã£o exige um fluxo de exame admissional extremamente Ã¡gil: atraso de ASO em Osasco significa contrataÃ§Ã£o travada em operaÃ§Ãµes que nÃ£o param.",
    setoresPredominantes: [
      "Financeiro e seguros â€” PCMSO com risco ergonÃ´mico e psicossocial",
      "E-commerce e logÃ­stica â€” admissional expresso, toxicolÃ³gico CLT",
      "Varejo de grande porte â€” ergonomia NR-17, exame admissional em volume",
      "ServiÃ§os de saÃºde â€” PCMSO com riscos biolÃ³gicos",
      "IndÃºstria farmacÃªutica â€” agentes quÃ­micos, PGR, LTCAT",
    ],
    bairrosAtendidos: [
      "Centro e Presidente Altino",
      "Km 18 â€” polo logÃ­stico",
      "Jardim Elvira e Bela Vista",
      "Umuarama â€” corredor industrial",
      "Baronesa e Vila Yara",
    ],
    diferencialLocal:
      "Para operaÃ§Ãµes de e-commerce e logÃ­stica em Osasco, a SERMST oferece fluxo corporativo de admissional com liberaÃ§Ã£o Ã¡gil de ASO â€” sem agendamento, sem fila, com resultado integrado ao eSocial. Para o setor financeiro, o PCMSO inclui avaliaÃ§Ã£o de riscos ergonÃ´micos e psicossociais exigidos pela nova NR-01.",
  },
  {
    nome: "Guarulhos",
    slug: "guarulhos",
    unidadeReferencia: "SÃ£o Paulo (Centro)",
    distanciaMedia: "25 min",
    adjetivo: "guarulhense",
    contextoEmpresarial:
      "Centro logÃ­stico aeroportuÃ¡rio nacional. Medicina do trabalho focada em transporte, logÃ­stica e operaÃ§Ãµes intensivas em Guarulhos.",
    perfilEconomico:
      "Guarulhos abriga o maior aeroporto da AmÃ©rica Latina e um dos maiores polos logÃ­sticos do paÃ­s. A cidade concentra distribuidoras, operadores logÃ­sticos, transportadoras e indÃºstrias de autopeÃ§as que dependem do corredor Anhanguera-Bandeirantes. O setor de transporte exige exame toxicolÃ³gico obrigatÃ³rio (CLT art. 168) para motoristas profissionais â€” e o volume de admissÃµes em logÃ­stica gera demanda constante por ASO expresso.",
    setoresPredominantes: [
      "LogÃ­stica e transporte â€” toxicolÃ³gico CLT obrigatÃ³rio, admissional em volume",
      "AviaÃ§Ã£o e aeroporto â€” PCMSO com riscos especÃ­ficos de ground handling",
      "AutopeÃ§as e metal-mecÃ¢nico â€” NR-15, NR-16, LTCAT",
      "Distribuidoras e e-commerce â€” admissional expresso, ergonomia de operaÃ§Ã£o",
      "IndÃºstria alimentÃ­cia â€” higiene ocupacional, exames periÃ³dicos",
    ],
    bairrosAtendidos: [
      "Centro e Vila GalvÃ£o",
      "Cumbica â€” polo industrial aeroportuÃ¡rio",
      "Jardim Presidente Dutra â€” logÃ­stica",
      "Macedo â€” indÃºstria e autopeÃ§as",
      "Pimentas e Bonsucesso",
    ],
    diferencialLocal:
      "Para transportadoras e operadoras logÃ­sticas em Guarulhos, a SERMST realiza o exame toxicolÃ³gico de longa janela de detecÃ§Ã£o exigido pela CLT para motoristas de carga e passageiros â€” com laudo vÃ¡lido para o eSocial e em prazo compatÃ­vel com a rotina de contrataÃ§Ã£o intensiva do setor.",
  },
  {
    nome: "Barueri",
    slug: "barueri",
    unidadeReferencia: "SÃ£o Paulo (Centro)",
    distanciaMedia: "40 min",
    adjetivo: "barueriense",
    contextoEmpresarial:
      "Polo corporativo de Alphaville e TamborÃ©. ASO expresso, laudos digitais e organizaÃ§Ã£o de SST para empresas em crescimento.",
    perfilEconomico:
      "Barueri concentra o maior parque de multinacionais do estado de SÃ£o Paulo, especialmente nos condomÃ­nios empresariais de Alphaville e TamborÃ©. O perfil de RH nessas empresas Ã© sofisticado: departamentos estruturados, auditorias periÃ³dicas de conformidade e exigÃªncia de documentaÃ§Ã£o SST que integre com sistemas de gestÃ£o internacionais. O erro aqui nÃ£o Ã© falta de atenÃ§Ã£o â€” Ã© contar com fornecedores de SST que nÃ£o tÃªm estrutura tÃ©cnica para atender o padrÃ£o exigido.",
    setoresPredominantes: [
      "Tecnologia e TI â€” ergonomia NR-17, PCMSO com riscos psicossociais NR-01",
      "ServiÃ§os financeiros e seguros â€” PCMSO estruturado, gestÃ£o eSocial",
      "FarmacÃªutico e life sciences â€” agentes quÃ­micos, LTCAT, PGR",
      "Varejo e consumo premium â€” admissional expresso, gestÃ£o de mÃºltiplos CNPJs",
      "ServiÃ§os corporativos â€” gestÃ£o SST centralizada para grupos empresariais",
    ],
    bairrosAtendidos: [
      "Alphaville â€” multinacionais e corporativo",
      "TamborÃ© â€” condomÃ­nio empresarial",
      "Centro de Barueri â€” comÃ©rcio e serviÃ§os",
      "Jardim Belval e Industrial",
      "Bethaville e Jardim Tupanci",
    ],
    diferencialLocal:
      "Para grupos empresariais e multinacionais em Barueri, a SERMST oferece gestÃ£o SST centralizada com laudos digitais, PCMSO por CNPJ e dashboards de conformidade para o RH. A estrutura Ã© compatÃ­vel com auditorias internas de multinacionais e com os eventos SST do eSocial â€” S-2220, S-2240 e S-2210 gerenciados em um Ãºnico fluxo.",
  },
];

export const estatisticasSERMST = {
  anosExperiencia: "+40",
  empresasAtendidas: "+3.000",
  clinicasCredenciadas: "+500",
  vidasGeriadas: "+40k",
};

export const servicosSEO: Record<string, SEODocument> = {
  "exame-admissional-expresso": {
    h1: "Exame Admissional | ClÃ­nica de Medicina do Trabalho",
    hook:
      "Precisa de exame admissional com rapidez, validade para eSocial e menos impacto na rotina do RH A SERMST realiza exame admissional em SÃ£o Paulo com laboratÃ³rio prÃ³prio, liberaÃ§Ã£o Ã¡gil de ASO e estrutura para empresas que nÃ£o podem atrasar contrataÃ§Ãµes.",
    isClinico: true,
    quandoRequerido:
      "O exame admissional e uma exigencia legal da NR-07 (PCMSO) e deve ser realizado antes que o colaborador inicie suas funÃ§Ãµes. Alem de garantir a aptidÃ£o do funcionÃ¡rio, ele sustenta o envio correto do evento S-2220 ao eSocial e ajuda a evitar multas por falhas no processo de admissÃ£o.",
    documentosNecessarios: [
      "RG e CPF ou documento oficial com foto",
      "Guia de encaminhamento em papel ou digital",
      "CNPJ da empresa contratante",
    ],
    expectativaCusto:
      "O preÃ§o do exame admissional varia conforme os riscos do cargo e a necessidade de exames complementares, como audiometria, sangue, ECG ou outros. Solicite o orÃ§amento corporativo para pacotes de atendimento ocupacional.",
    content: {
      dor:
        "Processos de contrataÃ§Ã£o lentos, filas em clÃ­nicas terceirizadas e demora no ASO geram admissÃµes travadas, retrabalho para o RH e perda de produtividade logo no inicio da operaÃ§Ã£o.",
      solucao:
        "Com laboratÃ³rio prÃ³prio, equipe mÃ©dica especializada em medicina do trabalho e fluxo ocupacional orientado a urgÃªncia empresarial, a SERMST reduz burocracia e acelera a liberaÃ§Ã£o do ASO sem abrir mao de conformidade.",
      beneficios: [
        "LiberaÃ§Ã£o de ASO com mais velocidade operacional",
        "ClÃ­nica de medicina do trabalho centralizada",
        "ASO com validade plena para eSocial",
        "Resultados integrados em um so fluxo para o RH",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Uma gestÃ£o de saÃºde ocupacional eficiente comeÃ§a no admissional. Integrar NR-07 e eSocial Ã© a chave para seguranÃ§a jurÃ­dica e ritmo de contrataÃ§Ã£o.",
        author: "Diretor MÃ©dico",
        role: "Diretor MÃ©dico",
      },
      faq: [
        {
          q: "Qual clÃ­nica faz exame admissional mais rÃ¡pido",
          a: "A SERMST possui fluxo expresso e laboratÃ³rio clÃ­nico prÃ³prio na unidade central de SÃ£o Paulo, Ã¡gilizando o resultado final do ASO.",
        },
        {
          q: "O ASO admissional e vÃ¡lido por quanto tempo",
          a: "O ASO admissional e especÃ­fico para o momento da contrataÃ§Ã£o. Depois da admissÃ£o, o colaborador passa a seguir o cronograma do PCMSO da empresa.",
        },
        {
          q: "Precisa agendar o exame de admissÃ£o",
          a: "Recomendamos o contato prÃ©vio por WhatsApp para orientar o fluxo e reduzir espera, mas a SERMST tambÃ©m atende demandas de urgÃªncia empresarial.",
        },
        {
          q: "Quais exames sÃ£o necessÃ¡rios na admissÃ£o",
          a: "O exame clÃ­nico Ã© obrigatÃ³rio, e os complementares dependem dos riscos do cargo definidos no PCMSO da empresa.",
        },
      ],
    },
  },
  "pcmso-nr07-programa": {
    h1: "PCMSO (NR-07) | GestÃ£o de SaÃºde Ocupacional Especializada",
    hook:
      "PCMSO nÃ£o pode ser documento genÃ©rico. A SERMST elabora e coordena o PCMSO com base na realidade da sua empresa, definindo grade de exames, periodicidade, coerÃªncia com riscos ocupacionais e sustentaÃ§Ã£o correta para o eSocial.",
    isClinico: false,
    fluxoCorporativo: [
      "DiagnÃ³stico e visita do mÃ©dico do trabalho",
      "ElaboraÃ§Ã£o do cronograma de exames",
      "Assinatura do coordenador e entrega digital",
    ],
    quandoRequerido:
      "O PCMSO Ã© obrigatÃ³rio para empresas com empregados CLT e funciona como o eixo mÃ©dico da NR-07. E ele que define quais exames cada trabalhador deve realizar de acordo com os riscos identificados na operaÃ§Ã£o.",
    content: {
      dor:
        "PCMSO genÃ©rico, desconectado da operaÃ§Ã£o e mal alinhado ao risco do cargo abre espaco para exames inadequados, falhas em S-2220, inseguranÃ§a jurÃ­dica e passivos ocupacionais.",
      solucao:
        "A SERMST trabalha com assessoria mÃ©dica real, leitura do processo produtivo e construcao de um programa de saÃºde ocupacional que protege a empresa tecnicamente, operacionalmente e juridicamente.",
      beneficios: [
        "Coordenacao por mÃ©dicos do trabalho especialistas",
        "IntegraÃ§Ã£o total com PGR e eSocial",
        "Cronograma de exames coerente com os riscos da funÃ§Ã£o",
        "SeguranÃ§a jurÃ­dica contra doenÃ§as ocupacionais",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Um PCMSO sÃ©rio exige que o mÃ©dico conheca a realidade operacional do cliente e nÃ£o apenas assine um modelo pronto.",
        author: "Diretoria ClÃ­nica",
        role: "SERMST",
      },
      faq: [
        {
          q: "O que e PCMSO",
          a: "E o Programa de Controle MÃ©dico de SaÃºde Ocupacional, obrigatÃ³rio para prevenir, monitorar e registrar a saÃºde do trabalhador conforme os riscos da empresa.",
        },
        {
          q: "Quem assina o PCMSO",
          a: "O PCMSO deve ser assinado por mÃ©dico do trabalho responsÃ¡vel pela coordenaÃ§Ã£o do programa.",
        },
      ],
    },
  },
  "pgr-nr01-gerenciamento-riscos": {
    h1: "PGR (NR-01) | Engenharia de SeguranÃ§a e Levantamento de Riscos",
    hook:
      "Sua empresa precisa de PGR coerente com a operaÃ§Ã£o real, e nÃ£o de um documento padrÃ£o. A SERMST realiza vistoria tÃ©cnica, inventÃ¡rio de riscos e plano de acao com foco em conformidade, prevenÃ§Ã£o e sustentaÃ§Ã£o do eSocial.",
    isClinico: false,
    fluxoCorporativo: [
      "Vistoria tÃ©cnica pormenorizada em campo",
      "Levantamento e inventÃ¡rio de riscos ocupacionais",
      "Definicao do plano de acao e entrega tÃ©cnica",
    ],
    quandoRequerido:
      "O PGR e a base da gestÃ£o de riscos ocupacionais prevista pela NR-01. Ele deve refletir a operaÃ§Ã£o real da empresa e ser revisto quando houver mudanÃ§as relevantes em processo, estrutura, layout ou exposiÃ§Ã£o ocupacional.",
    content: {
      dor:
        "PGRs copia e cola, feitos sem leitura real do ambiente, costumam falhar em auditorias, enfraquecem a prevenÃ§Ã£o e ainda alimentam o eSocial com informaÃ§Ãµes inconsistentes.",
      solucao:
        "A SERMST faz engenharia de campo orientada a realidade da empresa, analisa atividades, maquinas, agentes nocivos e medidas de controle para entregar um inventÃ¡rio de riscos defensÃ¡vel e realmente utilizÃ¡vel.",
      beneficios: [
        "Inventario de riscos conforme NR-01",
        "PGR baseado na realidade operacional",
        "Plano de acao com cronograma definido",
        "Blindagem de patrimÃ´nio e operaÃ§Ã£o",
        "Assessoria em fiscalizaÃ§Ãµes e auditorias",
        "GestÃ£o dinamica do plano de acao",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "PGR nÃ£o Ã© papel. E gestÃ£o de risco real para evitar acidente, retrabalho e multa.",
        author: "Diretoria TÃ©cnica",
        role: "SERMST",
      },
      faq: [
        {
          q: "O que mudou no PGR",
          a: "O PGR integra o gerenciamento de riscos ocupacionais e exige inventÃ¡rio coerente, plano de acao e acompanhamento continuo.",
        },
        {
          q: "Quem elabora o PGR",
          a: "Profissionais qualificados em seguranÃ§a do trabalho, como engenheiros e tÃ©cnicos legalmente habilitados.",
        },
      ],
    },
  },
  "ltcat-laudo-tecnico-previdenciario": {
    h1: "LTCAT | Laudo TÃ©cnico de CondiÃ§Ãµes Ambientais do Trabalho",
    hook:
      "DocumentaÃ§Ã£o solida para aposentadoria especial, PPP e eSocial S-2240. A SERMST realiza mediÃ§Ãµes quantitativas, enquadramento tÃ©cnico e entrega de LTCAT com base consistente para obrigaÃ§Ãµes previdenciÃ¡rias.",
    isClinico: false,
    fluxoCorporativo: [
      "Visita tÃ©cnica com coleta de dados quantitativos",
      "Analise tÃ©cnica e enquadramento previdÃªnciario",
      "EmissÃ£o do laudo assinado por engenheiro SST",
    ],
    quandoRequerido:
      "O LTCAT e indispensavel para empresas com exposiÃ§Ã£o a agentes nocivos que precisam sustentar aposentadoria especial, PPP e recolhimentos relacionados ao risco previdÃªnciario.",
    content: {
      dor:
        "Laudos tÃ©cnicos inconsistentes podem gerar recolhimento indevido, base frÃ¡gil para PPP e exposiÃ§Ã£o a discussoes previdenciÃ¡rias de alto custo.",
      solucao:
        "A SERMST combina mÃ©dicao tÃ©cnica, critÃ©rio de enquadramento e leitura jurÃ­dica do risco para entregar LTCAT mais consistente e defensÃ¡vel.",
      beneficios: [
        "MÃ©dicoes de ruido e calor certificadas",
        "Base tÃ©cnica para o Perfil Profissiografico PrevidÃªnciario",
        "SeguranÃ§a do negÃ³cio e compliance",
        "Envio estruturado ao eSocial",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "LTCAT sem mÃ©dicao quantitativa em campo costuma enfraquecer a defesa tÃ©cnica da empresa.",
        author: "Diretoria TÃ©cnica",
        role: "SERMST",
      },
      faq: [
        {
          q: "Qual a diferenÃ§a entre PGR e LTCAT",
          a: "O PGR organiza a gestÃ£o dos riscos ocupacionais. O LTCAT sustenta o enquadramento previdÃªnciario ligado a exposiÃ§Ã£o nociva.",
        },
        {
          q: "O S-2240 exige LTCAT atualizado",
          a: "Os dados de exposiÃ§Ã£o no eSocial devem ter base tÃ©cnica consistente, e o LTCAT costuma ser uma das referÃªncias principais.",
        },
      ],
    },
  },
  "gestao-esocial-s2220-s2240": {
    h1: "GestÃ£o completa de eSocial SST | S-2220 e S-2240",
    hook:
      "GestÃ£o de eSocial SST para empresas que querem parar de correr atras de prazo, XML e erro de envio. A SERMST organiza S-2220 e S-2240 com processo, rastreabilidade e suporte para uma rotina de compliance mais segura.",
    isClinico: false,
    content: {
      dor:
        "Quando o eSocial SST fica sem dono, a empresa passa a conviver com atraso de evento, erro manual, retrabalho entre RH e SST e risco real de multa automÃ¡tica.",
      solucao:
        "A SERMST estrutura a rotina de envio com software, protocolo, suporte e visibilidade operacional, ajudando a empresa a transformar obrigaÃ§Ã£o digital em processo controlado.",
      beneficios: [
        "ReduÃ§Ã£o de multas automÃ¡ticas",
        "Protocolo de entrega XML",
        "Interface entre SST, RH e operaÃ§Ã£o",
        "Monitoramento de pendÃªncias e prazos",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "No eSocial, agilidade no dado e tao importante quanto a qualidade tÃ©cnica da informaÃ§Ã£o.",
        author: "Governanca Corporativa",
        role: "SERMST",
      },
      faq: [
        {
          q: "O que e o evento S-2220",
          a: "E o evento de monitoramento da saÃºde do trabalhador, usado para registrar informaÃ§Ãµes de ASO e exames ocupacionais.",
        },
        {
          q: "E o evento S-2240",
          a: "E o evento de condiÃ§Ãµes ambientais do trabalho, ligado a exposiÃ§Ã£o a riscos e base tÃ©cnica de SST.",
        },
      ],
    },
  },
  "audiometria-ocupacional-clinica": {
    h1: "Audiometria Ocupacional | Exames de AudiÃ§Ã£o",
    hook:
      "Proteja a audiÃ§Ã£o da equipe e reduza exposiÃ§Ã£o a passivos relacionados a ruido ocupacional. A SERMST realiza audiometria ocupacional integrada ao PCMSO com estrutura adequada e foco em validade tÃ©cnica.",
    isClinico: true,
    quandoRequerido:
      "A audiometria ocupacional e indicada para funÃ§Ãµes expostas a ruido acima dos limites de tolerancia e costuma ser exigida em admissÃ£o, demissÃ£o e acompanhamentos periÃ³dicos.",
    content: {
      dor:
        "Perda auditiva ocupacional pode gerar processo, afastamento e custo elevado quando a empresa nÃ£o monitora o trabalhador de forma consistente.",
      solucao:
        "A SERMST realiza audiometria com critÃ©rio tÃ©cnico, profissionais especializados e integraÃ§Ã£o ao fluxo do ASO para dar mais consistencia ao monitoramento ocupacional.",
      beneficios: [
        "Cabine acustica calibrada",
        "Resultado integrado ao ASO",
        "AvaliaÃ§Ã£o de PAIR conforme norma",
        "Atendimento expresso",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "SaÃºde auditiva e produtividade, prevenÃ§Ã£o e seguranÃ§a laboral ao mesmo tempo.",
        author: "Diretor MÃ©dico",
        role: "SERMST",
      },
      faq: [
        {
          q: "Quanto tempo dura a audiometria",
          a: "O exame costuma levar cerca de 15 a 20 minutos por colaborador, dependendo do fluxo e das condiÃ§Ãµes de repouso auditivo.",
        },
        {
          q: "Precisa de repouso auditivo",
          a: "Sim. O trabalhador deve cumprir repouso auditivo para que o resultado tenha validade tÃ©cnica.",
        },
      ],
    },
  },
  "exame-toxicologico-clt": {
    h1: "Exame ToxicolÃ³gico | Motoristas Profissionais CLT",
    hook:
      "Exame toxicolÃ³gico ocupacional com agilidade para transportadoras e operaÃ§Ãµes que dependem de motoristas CLT. A SERMST organiza coleta, validade nacional do laudo e suporte para rotinas vinculadas ao eSocial.",
    isClinico: true,
    quandoRequerido:
      "O exame toxicolÃ³gico Ã© obrigatÃ³rio em admissÃ£o, demissÃ£o e acompanhamentos previstos para motoristas profissionais das categorias C, D e E.",
    content: {
      dor:
        "Atraso no toxicolÃ³gico trava contrataÃ§Ã£o, expÃµe a empresa a risco regulatÃ³rio e compromete operaÃ§Ãµes que dependem de motorista liberado rapidamente.",
      solucao:
        "A SERMST organiza coleta eficiente, prazo curto e integraÃ§Ã£o ocupacional para reduzir impacto logÃ­stico e acelerar a liberaÃ§Ã£o do trabalhador.",
      beneficios: [
        "Coleta rÃ¡pida e discreta",
        "Suporte para rotina ocupacional",
        "Laudo com validade nacional",
        "Faturamento corporativo",
      ],
    },
    documentosNecessarios: [
      "Documento de identidade (RG ou CNH)",
      "Carteira Nacional de HabilitaÃ§Ã£o (CNH) â€” cat. C, D ou E",
      "Guia de exame emitida pela empresa",
    ],
    geoOpt: {
      expertQuote: {
        text: "SeguranÃ§a nas estradas comeÃ§a em um processo ocupacional bem controlado desde a contrataÃ§Ã£o.",
        author: "Diretor MÃ©dico",
        role: "SERMST",
      },
      faq: [
        {
          q: "O que detecta o exame",
          a: "O exame toxicolÃ³gico identifica o consumo de substÃ¢ncias psicoativas em janela retroativa de longo prazo por meio de amostra biolÃ³gica apropriada.",
        },
      ],
    },
  },
  "exames-complementares-laboratoriais": {
    h1: "Exames Complementares em SST | LaboratÃ³rio PrÃ³prio",
    hook:
      "Exames complementares em medicina do trabalho com mais agilidade para o RH e menos deslocamento para o colaborador. A SERMST integra exames de sangue, visao, ECG, EEG e espirometria ao fluxo do ASO para acelerar a admissÃ£o e reforcar a conformidade.",
    isClinico: true,
    content: {
      dor:
        "Quando cada exame complementar acontece em um lugar diferente, o processo ocupa mais tempo, gera desgaste para o colaborador e atrasa a liberaÃ§Ã£o do trabalhador para a operaÃ§Ã£o.",
      solucao:
        "Com centralizaÃ§Ã£o ocupacional e laboratÃ³rio clÃ­nico prÃ³prio, a SERMST reduz deslocamentos, organiza o fluxo do ASO e melhora a experiÃªncia do RH e do candidato.",
      beneficios: [
        "Coleta de sangue no local",
        "ECG e EEG com laudo Ã¡gil",
        "Espirometria ocupacional",
        "Acuidade visual digital",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Velocidade na contrataÃ§Ã£o exige exame complementar bem encaixado no fluxo de SST.",
        author: "Diretor MÃ©dico",
        role: "SERMST",
      },
      faq: [
        {
          q: "Quais exames sÃ£o os mais solicitados",
          a: "Hemograma, glicemia, acuidade visual, ECG e EEG costumam aparecer com frequÃªncia em cargos operacionais, dependendo do risco.",
        },
      ],
    },
  },
  "treinamentos-nrs-cipa-brigada": {
    h1: "Treinamentos de NRs | CapacitaÃ§Ã£o e SeguranÃ§a do Trabalho",
    hook:
      "Treinamentos de NRs com foco em validade documental, aplicaÃ§Ã£o prÃ¡tica e reduÃ§Ã£o de risco operacional. A SERMST oferece capacitaÃ§Ã£o para diferentes exigÃªncias regulamentares com controle de certificados e recertificaÃ§Ãµes.",
    isClinico: false,
    fluxoCorporativo: [
      "Mapeamento de necessidades",
      "Cronograma de treinamentos",
      "GestÃ£o de certificados e reciclagens",
    ],
    quandoRequerido:
      "Os treinamentos sÃ£o exigidos conforme os riscos da operaÃ§Ã£o e as normas aplicaveis ao negÃ³cio. A falta de formaÃ§Ã£o ou reciclagem pode comprometer o eSocial e frÃ¡gilizar a defesa da empresa em caso de acidente.",
    content: {
      dor:
        "Certificados sem consistencia tÃ©cnica ou treinamentos superficiais nÃ£o protegem o colaborador nem o CNPJ quando a empresa precisa provar sua rotina de prevenÃ§Ã£o.",
      solucao:
        "A SERMST trabalha com metodologia voltada a adultos, instrutores experientes e organizacao do ciclo de treinamentos para transformar obrigaÃ§Ã£o legal em proteÃ§Ã£o operacional.",
      beneficios: [
        "Catalogo amplo de NRs e temas obrigatÃ³rios",
        "FormaÃ§Ã£o de CIPA e brigada de incendio",
        "Certificados digitais com validaÃ§Ã£o",
        "Treinamentos teÃ³ricos e prÃ¡ticos in-company ou em hub",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Treinamento eficaz nÃ£o Ã© custo. E investimento em continuidade operacional e paz jurÃ­dica.",
        author: "Diretoria TÃ©cnica SERMST",
        role: "GestÃ£o SST",
      },
      faq: [
        {
          q: "Quais NRs minha empresa precisa",
          a: "A necessidade depende dos riscos e da operaÃ§Ã£o. O PGR e um dos caminhos para definir as prioridades tÃ©cnicas de treinamento.",
        },
        {
          q: "Os treinamentos podem ser feitos na minha empresa",
          a: "Sim. A SERMST realiza treinamentos diretamente na sede do cliente ou em estrutura adequada de apoio.",
        },
        {
          q: "Como validar um certificado da SERMST",
          a: "Os certificados emitidos podem ser validados por cÃ³digo Ãºnico ou mecanismo digital de conferenca.",
        },
      ],
    },
  },
  "pericia-trabalhista-assistente-tecnico": {
    h1: "Pericia Trabalhista | Assistente TÃ©cnico Especializado",
    hook:
      "Defesa tÃ©cnica para empresas que precisam responder melhor em pericias trabalhistas de insalubridade, periculosidade e doenca ocupacional. A SERMST atua com acompanhamento estrategico, quesitos tÃ©cnicos e leitura critica do caso.",
    isClinico: false,
    quandoRequerido:
      "Esse serviÃ§o costuma ser necessario quando a empresa estÃ¡ envolvida em processo trabalhista e precisa de assistencia tÃ©cnica qualificada para acompanhar a perÃ­cia judicial.",
    content: {
      dor:
        "Laudos periciais desfavoraveis por falta de defesa tÃ©cnica adequada podem elevar condenacoes e enfraquecer a posicao jurÃ­dica da empresa.",
      solucao:
        "A SERMST atua com peritos experientes, construcao de quesitos, acompanhamento de diligencia e parecer tÃ©cnico mais alinhado aos interesses defensivos da empresa.",
      beneficios: [
        "ElaboraÃ§Ã£o de quesitos tÃ©cnicos",
        "Acompanhamento na diligencia",
        "Parecer tÃ©cnico fundamentado",
        "Prevencao de passivos",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Pericia se vence com leitura tÃ©cnica, quesito bem feito e acompanhamento inteligente do caso.",
        author: "Diretoria TÃ©cnica",
        role: "SERMST",
      },
      faq: [
        {
          q: "O assistente tÃ©cnico pode falar com o perito",
          a: "Sim. O assistente tÃ©cnico pode acompanhar a diligencia e atuar tecnicamente dentro dos limites processuais do caso.",
        },
      ],
    },
  },
};

// Helper para gerar entries de saÃºde com defaults consistentes
const saudeEntry = (h1: string, hook: string, dor: string, solucao: string): SEODocument => ({
  h1,
  hook,
  isClinico: false,
  content: {
    dor,
    solucao,
    beneficios: [
      "Conformidade com NR-07 e PCMSO",
      "DocumentaÃ§Ã£o tÃ©cnica que sustenta auditoria",
      "ReduÃ§Ã£o de passivo trabalhista por SST mal feito",
    ],
  },
  geoOpt: {
    expertQuote: {
      text: "SaÃºde ocupacional bem feita Ã© blindagem de patrimÃ´nio, nÃ£o papelada.",
      author: "Equipe TÃ©cnica",
      role: "SERMST",
    },
    faq: [
      {
        q: "Onde isso se conecta com SST da empresa",
        a: "Esse tema toca diretamente PCMSO, PGR ou eSocial â€” a SERMST faz auditoria gratuita do que sua empresa tem hoje e mostra onde estÃ¡ exposta.",
      },
    ],
  },
});

export const saudeSEO: Record<string, SEODocument> = {
  "importancia-do-exame-periodico": {
    h1: "Exame PeriÃ³dico de Medicina do Trabalho",
    hook:
      "Exame periÃ³dico e parte central da vigilÃ¢ncia mÃ©dica ocupacional. Monitorar a saÃºde da equipe no tempo certo ajuda a reduzir afastamentos, sustentar o PCMSO e evitar fragilidades em auditorias e fiscalizaÃ§Ãµes.",
    isClinico: true,
    content: {
      dor:
        "Empresas que deixam exame periÃ³dico vencer acumulam risco mÃ©dico, operacional e jurÃ­dico ao mesmo tempo.",
      solucao:
        "Com cronograma mÃ©dico coerente e controle dos vencimentos, a empresa protege a saÃºde do trabalhador e melhora a disciplina de compliance ocupacional.",
      beneficios: [
        "ReduÃ§Ã£o de custos com afastamentos",
        "Compliance com PCMSO NR-07",
        "SaÃºde corporativa em dia",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Prevencao consistente e uma das bases da sustentabilidade corporativa.",
        author: "Diretor MÃ©dico",
        role: "SERMST",
      },
      faq: [
        {
          q: "Qual a multa por atraso",
          a: "O valor pode variar conforme o porte da empresa, o contexto da infracao e a quantidade de trabalhadores afetados.",
        },
      ],
    },
  },
  // â”€â”€â”€ ConteÃºdos migrados do WordPress (redirects 301) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  "o-que-e-saude-ocupacional": saudeEntry(
    "O que Ã© SaÃºde Ocupacional: guia completo para gestores",
    "SaÃºde ocupacional nÃ£o Ã© sÃ³ ASO e exame periÃ³dico. Ã‰ um sistema de prevenÃ§Ã£o que protege o trabalhador, a operaÃ§Ã£o e o patrimÃ´nio da empresa contra afastamento, processo e multa.",
    "A maioria dos gestores trata saÃºde ocupacional como burocracia atÃ© o problema explodir â€” afastamento longo, perÃ­cia, aÃ§Ã£o judicial.",
    "Estruturar saÃºde ocupacional como rotina (nÃ£o como reaÃ§Ã£o) reduz afastamento, sustenta PCMSO e cria evidÃªncia tÃ©cnica para defesa em fiscalizaÃ§Ã£o.",
  ),
  "exame-demissional-guia": saudeEntry(
    "Exame Demissional: como funciona e por que ele protege a empresa",
    "O exame demissional Ã© a Ãºltima oportunidade da empresa documentar o estado de saÃºde do colaborador antes da rescisÃ£o. Sem ele, qualquer doenÃ§a futura pode ser atribuÃ­da ao perÃ­odo trabalhado.",
    "Empresas que pulam ou atrasam demissional acumulam passivo: a falta de evidÃªncia abre espaÃ§o para aÃ§Ã£o trabalhista por doenÃ§a ocupacional anos depois.",
    "Demissional feito no prazo e registrado corretamente no eSocial fecha o ciclo ocupacional do trabalhador e protege a empresa de reclamaÃ§Ã£o retroativa.",
  ),
  "o-que-sao-epis": saudeEntry(
    "O que sÃ£o EPIs: o equipamento que protege o trabalhador e a empresa",
    "EPI (Equipamento de ProteÃ§Ã£o Individual) Ã© exigÃªncia legal â€” fornecimento gratuito, treinamento de uso, fiscalizaÃ§Ã£o do uso e troca periÃ³dica. Falhar em qualquer parte Ã© responsabilidade direta da empresa.",
    "Empresas que distribuem EPI sem treinamento, sem ficha de entrega e sem fiscalizaÃ§Ã£o de uso descobrem o problema sÃ³ quando acontece o acidente â€” e a defesa cai por falta de evidÃªncia.",
    "EPI bem implementado tem trÃªs partes: o equipamento certo (CA vÃ¡lido), o trabalhador treinado (registro em ficha) e a fiscalizaÃ§Ã£o do uso (responsabilidade do encarregado e do SESMT).",
  ),
  "gestao-sst": saudeEntry(
    "GestÃ£o de SST: o que Ã© e como organizar sem virar burocracia",
    "GestÃ£o de SaÃºde e SeguranÃ§a do Trabalho nÃ£o Ã© um documento â€” Ã© um sistema. Conecta exame, laudo, treinamento e eSocial em fluxo Ãºnico que sustenta operaÃ§Ã£o e defende o CNPJ.",
    "Empresas tratam SST como pasta de arquivo. Resultado: documento existe, mas nÃ£o reflete a operaÃ§Ã£o real. Em fiscalizaÃ§Ã£o ou processo, isso desmonta.",
    "GestÃ£o de SST bem feita Ã© cÃ­clica: identifica risco â†’ atualiza PGR â†’ ajusta PCMSO â†’ documenta treinamento â†’ envia eSocial â†’ audita. Cada etapa alimenta a prÃ³xima.",
  ),
  "pcmso-programa-controle-medico": saudeEntry(
    "PCMSO: o que Ã©, quem precisa e como montar o programa",
    "O PCMSO define quais exames cada trabalhador precisa fazer e com qual frequÃªncia, por cargo e por risco. Sem ele vÃ¡lido, a empresa nÃ£o tem base para os ASOs nem para o S-2220 no eSocial.",
    "PCMSO genÃ©rico, desatualizado ou assinado por mÃ©dico sem especializaÃ§Ã£o em medicina do trabalho nÃ£o sustenta fiscalizaÃ§Ã£o â€” e elimina a proteÃ§Ã£o que o documento deveria oferecer.",
    "PCMSO correto Ã© personalizado: reflete os riscos reais de cada cargo, define os exames e periodicidades corretos, e estÃ¡ alinhado com o PGR e com os eventos de SST do eSocial.",
  ),
  "aso-atestado-saude-ocupacional": saudeEntry(
    "ASO: o que Ã©, quando emitir e por que protege a empresa",
    "O Atestado de SaÃºde Ocupacional Ã© a evidÃªncia jurÃ­dica de que a empresa avaliou a saÃºde do trabalhador. Sem ASO vÃ¡lido, qualquer doenÃ§a futura pode ser atribuÃ­da ao perÃ­odo de trabalho.",
    "ASO feito fora do prazo, com campos faltando, ou por mÃ©dico nÃ£o habilitado nÃ£o protege a empresa â€” mesmo que o exame tenha sido realizado. O documento precisa estar correto em forma e conteÃºdo.",
    "ASO correto tem: mÃ©dico coordenador do PCMSO assinando, todos os campos preenchidos, via entregue ao trabalhador e envio do S-2220 ao eSocial dentro do prazo.",
  ),
  "medicina-do-trabalho-guia": saudeEntry(
    "Medicina do Trabalho: o que Ã© e o que toda empresa precisa saber",
    "Medicina do trabalho conecta saÃºde do trabalhador, seguranÃ§a jurÃ­dica da empresa e conformidade com o eSocial. Quando bem estruturada, reduz afastamento, processo trabalhista e custo escondido.",
    "A maioria das empresas trata medicina do trabalho como burocracia pontual â€” faz exame admissional e esquece. O resultado aparece no processo trabalhista, no afastamento longo ou na autuaÃ§Ã£o do MTE.",
    "Medicina do trabalho bem estruturada Ã© preventiva: PCMSO alinhado com o PGR, exames no prazo, ASOs corretos, eSocial em dia e mÃ©dico coordenador que acompanha a operaÃ§Ã£o.",
  ),
  "insalubridade-o-que-e-adicional": saudeEntry(
    "Insalubridade: o que e, quem tem direito, adicional e calculo",
    "Insalubridade e um daqueles temas que parecem simples ate bater na folha, no laudo ou no processo. Mistura direito do trabalhador, custo para a empresa e uma parte tecnica que muita gente subestima.",
    "E comum ver empresa pagando adicional sem laudo, calculando sobre base errada ou cortando a verba sem prova de neutralizacao. O problema quase sempre reaparece depois, em pericia, reclamatoria ou passivo acumulado.",
    "Quando a empresa entende o que e conceito, o que e enquadramento pela NR-15, onde entra o laudo e como isso conversa com LTCAT, PGR, PCMSO e eSocial, a decisao fica muito mais segura.",
  ),
};

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
      "Mais seguranca para decidir antes de contratar ou corrigir",
    ],
  },
  geoOpt: {
    expertQuote: {
      text: "Quando o gestor entende o termo certo, ele erra menos na decisao operacional.",
      author: "Equipe Tecnica SERMST",
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
    "O que e ASO: significado do atestado de saude ocupacional",
    "ASO e o Atestado de Saude Ocupacional, documento emitido ao fim do exame ocupacional para registrar se o trabalhador esta apto ou inapto para a funcao.",
    "Muita empresa trata o ASO como simples papel de admissao, mas ele e uma das evidencias mais importantes da rotina ocupacional e da defesa juridica da empresa.",
    "Entender o ASO no contexto certo ajuda a ligar exame, PCMSO, eSocial e responsabilidade da empresa sem confundir com atestado medico comum.",
  ),
  "o-que-e-pcmso": dicionarioEntry(
    "O que e PCMSO: significado do programa de controle medico",
    "PCMSO e o Programa de Controle Medico de Saude Ocupacional. Ele define quais exames cada cargo precisa realizar e com qual periodicidade.",
    "Quando o RH nao entende o que e PCMSO, o programa vira arquivo parado e a empresa perde o controle sobre exames, ASOs e prazos do eSocial.",
    "Com a definicao certa, fica mais facil enxergar o PCMSO como base da vigilancia medica ocupacional, e nao como documento burocratico isolado.",
  ),
  "o-que-e-pgr": dicionarioEntry(
    "O que e PGR: significado do programa de gerenciamento de riscos",
    "PGR e o Programa de Gerenciamento de Riscos exigido pela NR-01. Ele organiza a identificacao, avaliacao e controle dos riscos ocupacionais da empresa.",
    "Muita empresa ainda confunde PGR com documento padrao ou com o antigo PPRA, o que enfraquece a coerencia tecnica da rotina de SST.",
    "Entender o PGR ajuda a conectar risco real da operacao com laudos, exames, treinamentos e eventos do eSocial.",
  ),
  "o-que-e-ltcat": dicionarioEntry(
    "O que e LTCAT: significado do laudo tecnico das condicoes ambientais do trabalho",
    "LTCAT e o Laudo Tecnico das Condicoes Ambientais do Trabalho, usado para documentar agentes nocivos e sustentar PPP e aposentadoria especial.",
    "Sem entender o papel do LTCAT, a empresa mistura conceitos trabalhistas e previdenciarios e gera documento inconsistente para pericia, PPP e eSocial.",
    "A definicao correta ajuda a separar o que e insalubridade trabalhista, o que e exposicao previdenciaria e onde o LTCAT entra de fato.",
  ),
  "o-que-e-ppp": dicionarioEntry(
    "O que e PPP: significado do perfil profissiografico previdenciario",
    "PPP e o Perfil Profissiografico Previdenciario, documento que consolida historico laboral, agentes nocivos e informacoes previdenciarias do trabalhador.",
    "Muita empresa so descobre a importancia do PPP quando surge desligamento, pedido de aposentadoria especial ou exigencia de retificacao documental.",
    "Com a definicao certa, fica mais facil entender por que PPP, LTCAT, S-2240 e historico de exposicao precisam contar a mesma historia.",
  ),
};

// Helper para gerar entries de RH com defaults consistentes
const rhEntry = (h1: string, hook: string, dor: string, solucao: string): SEODocument => ({
  h1,
  hook,
  isClinico: false,
  content: {
    dor,
    solucao,
    beneficios: [
      "DecisÃ£o de RH com respaldo tÃ©cnico e jurÃ­dico",
      "DocumentaÃ§Ã£o que sustenta auditoria e fiscalizaÃ§Ã£o",
      "ReduÃ§Ã£o de retrabalho e exposiÃ§Ã£o a passivo",
    ],
  },
  geoOpt: {
    expertQuote: {
      text: "RH bem informado decide melhor â€” e empresa bem documentada gasta menos com processo.",
      author: "Equipe SERMST",
      role: "Medicina e SeguranÃ§a do Trabalho",
    },
    faq: [
      {
        q: "Onde isso se conecta com SST da empresa",
        a: "Toda decisÃ£o de RH (admissÃ£o, demissÃ£o, mudanÃ§a de funÃ§Ã£o) tem peÃ§a de SST por trÃ¡s â€” ASO, PCMSO, PGR. A SERMST integra os dois lados.",
      },
    ],
  },
});

export const rhDoresSEO: Record<string, SEODocument> = {
  "multa-esocial-s2220": {
    h1: "Como Evitar Multas do eSocial S-2220 e S-2240",
    hook:
      "O eSocial cruza dados de forma automÃ¡tica. Empresas que deixam saÃºde e seguranÃ§a sem rotina definida se expÃµem a atraso de evento, erro operacional e risco crescente de multa.",
    isClinico: false,
    content: {
      dor:
        "A falta de envio, o envio fora do prazo ou a base tÃ©cnica inconsistente nos eventos de SST pode gerar autuaÃ§Ã£o, retrabalho e inseguranÃ§a entre RH, operaÃ§Ã£o e medicina ocupacional.",
      solucao:
        "Com processo, plataforma e rotina organizada, a empresa ganha previsibilidade para cumprir prazos e reduzir falhas no fluxo entre ASO, laudos e envios.",
      beneficios: [
        "Protocolos de envio seguros",
        "IntegraÃ§Ã£o via XML",
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
          q: "Qual o prazo do S-2220",
          a: "O evento deve seguir o prazo operacional aplicavel ao envio de informaÃ§Ãµes de saÃºde do trabalhador, conforme a rotina e a obrigaÃ§Ã£o da empresa.",
        },
      ],
    },
  },
  // â”€â”€â”€ Guias migrados do WordPress (redirects 301) â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
  // funÃ§Ã£o-encarregado tem pÃ¡gina dedicada em /rh/funcao-encarregado/page.tsx
  "cat-acidente-de-trabalho": {
    h1: "CAT: como emitir a Comunicacao de Acidente de Trabalho e evitar passivo",
    hook:
      "A CAT e um dos documentos mais pesquisados quando a empresa ja esta diante de acidente, afastamento ou suspeita de doenca ocupacional. Emitir fora do prazo, omitir informacoes ou simplesmente nao emitir abre risco previdenciario, trabalhista e fiscal ao mesmo tempo.",
    isClinico: false,
    content: {
      dor:
        "Muita empresa descobre a importancia da CAT tarde demais: depois do acidente, com o RH sob pressao, lideranca tentando entender responsabilidade e medo real de multa ou processo.",
      solucao:
        "Quando o RH entende quando a CAT e obrigatoria, quem pode emitir, qual o prazo e como ela conversa com ASO, afastamento, INSS e investigacao interna, a empresa reage com mais rapidez e menos exposicao.",
      beneficios: [
        "Reducao de erro em acidente e afastamento",
        "Mais seguranca na rotina entre RH, lideranca e medicina do trabalho",
        "Base documental melhor para INSS, eSocial e defesa trabalhista",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Acidente sem CAT bem tratada vira problema duplicado: operacional no presente e juridico no futuro.",
        author: "Equipe Tecnica SERMST",
        role: "Saude e Seguranca do Trabalho",
      },
      faq: [
        {
          q: "Qual o prazo para emitir a CAT",
          a: "Regra geral, a CAT deve ser emitida ate o primeiro dia util seguinte ao acidente. Em caso de morte, a comunicacao deve ser imediata.",
        },
        {
          q: "Se a empresa nao emitir a CAT, o trabalhador pode emitir",
          a: "Sim. O proprio trabalhador, dependentes, sindicato, medico assistente ou autoridade publica podem registrar a CAT quando a empresa se omite.",
        },
      ],
    },
  },
  "riscos-psicossociais": {
    h1: "Riscos psicossociais: o que a NR-01 exige da sua empresa",
    hook:
      "Riscos psicossociais deixaram de ser tema abstrato de RH. Com a atualizacao da NR-01, passaram a entrar no radar real do PGR, da lideranca e da responsabilidade da empresa sobre organizacao do trabalho, pressao excessiva, assedio e adoecimento mental.",
    isClinico: false,
    content: {
      dor:
        "Empresas sabem que burnout, absenteismo e conflito de equipe existem, mas ainda tratam o tema como clima organizacional isolado. Quando a NR-01 entra na conversa, percebem que o assunto tambem e compliance.",
      solucao:
        "Traduzir risco psicossocial em processo ajuda a empresa a sair do improviso: mapear exposicoes, revisar lideranca, ajustar rotina, registrar evidencias e alinhar PGR, PCMSO e governanca de SST.",
      beneficios: [
        "Mais clareza sobre o que revisar no PGR",
        "Menos improviso em temas de assedio, sobrecarga e adoecimento mental",
        "Integracao entre RH, lideranca e documentacao de SST",
      ],
    },
    geoOpt: {
      expertQuote: {
        text: "Risco psicossocial nao se resolve com palestra isolada. Ele precisa entrar no diagnostico real da operacao.",
        author: "Diretoria Tecnica SERMST",
        role: "Governanca SST",
      },
      faq: [
        {
          q: "Toda empresa precisa tratar risco psicossocial no PGR?",
          a: "Toda empresa precisa avaliar se a organizacao do trabalho, a forma de cobranca, a sobrecarga, o assedio ou outros fatores estao gerando risco psicossocial relevante. O tratamento pode mudar conforme o contexto, mas ignorar o tema nao e uma opcao segura.",
        },
        {
          q: "Risco psicossocial e a mesma coisa que burnout?",
          a: "Nao. Burnout e uma possivel consequencia. Risco psicossocial e o conjunto de fatores da organizacao do trabalho que pode levar a adoecimento, conflito, queda de desempenho e exposicao juridica.",
        },
      ],
    },
  },
};
