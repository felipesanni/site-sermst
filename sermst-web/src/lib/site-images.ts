export type SiteImage = {
  src: string;
  alt: string;
};

export const siteImages = {
  home: {
    heroClinic: {
      src: '/images/site/hero/sermst-hero-clinica-ocupacional.jpg',
      alt: 'Recepção da clínica ocupacional da SERMST em São Paulo',
    },
    ownerPortrait: {
      src: '/images/site/sermst-empresario-gestao-ocupacional.jpg',
      alt: 'Empresário em retrato institucional representando gestão ocupacional e previsibilidade empresarial',
    },
    medicalStructure: {
      src: '/images/site/sermst-estrutura-medicina-ocupacional.png',
      alt: 'Ilustração de estrutura de medicina ocupacional e atendimento corporativo da SERMST',
    },
    clinicOperations: {
      src: '/images/site/sermst-clinica-ocupacional-sao-paulo.jpg',
      alt: 'Ambiente clínico da SERMST preparado para exames ocupacionais em São Paulo',
    },
    occupationalLab: {
      src: '/images/site/sermst-laboratorio-ocupacional-sao-paulo.jpg',
      alt: 'Laboratório ocupacional da SERMST com estrutura para exames complementares',
    },
    clinicalService: {
      src: '/images/site/sermst-atendimento-ocupacional-clinica.jpg',
      alt: 'Atendimento ocupacional da SERMST em rotina clínica corporativa',
    },
  },
  institutional: {
    corporateHealthHero: {
      src: '/images/site/sermst-saude-corporativa.jpg',
      alt: 'Clínica de medicina do trabalho SERMST — equipe e estrutura para exames ocupacionais em São Paulo',
    },
    operationTeam: {
      src: '/images/site/sermst-operacao-atendimento.jpg',
      alt: 'Equipe e operação de atendimento da SERMST em medicina e segurança do trabalho',
    },
  },
} as const satisfies Record<string, Record<string, SiteImage>>;

/** Fotos de destaque por artigo (slug → imagem) */
export const articleImages: Record<string, SiteImage> = {
  // Hub Saúde
  'importancia-do-exame-periodico': {
    src: '/images/articles/exame-periodico.jpg',
    alt: 'Médico realizando exame periódico em trabalhador em clínica ocupacional',
  },
  'o-que-e-saude-ocupacional': {
    src: '/images/articles/saude-ocupacional.jpg',
    alt: 'Profissional de saúde em ambiente corporativo representando saúde ocupacional',
  },
  'exame-demissional-guia': {
    src: '/images/articles/exame-demissional.jpg',
    alt: 'Consulta médica ocupacional para exame demissional em clínica',
  },
  'o-que-sao-epis': {
    src: '/images/articles/epis-seguranca.jpg',
    alt: 'Equipamentos de proteção individual EPI dispostos para uso em ambiente de trabalho',
  },
  'gestao-sst': {
    src: '/images/articles/gestao-sst.jpg',
    alt: 'Equipe discutindo gestão de saúde e segurança do trabalho em reunião corporativa',
  },
  'pcmso-programa-controle-medico': {
    src: '/images/articles/pcmso-programa.jpg',
    alt: 'Documentação e programação de controle médico de saúde ocupacional PCMSO',
  },
  'aso-atestado-saude-ocupacional': {
    src: '/images/articles/aso-atestado.jpg',
    alt: 'Atestado de saúde ocupacional ASO em rotina de medicina do trabalho',
  },
  'medicina-do-trabalho-guia': {
    src: '/images/articles/medicina-trabalho.jpg',
    alt: 'Médico do trabalho em consulta clínica ocupacional com profissional',
  },
  'insalubridade-o-que-e-adicional': {
    src: '/images/site/safety-equipment.jpg',
    alt: 'Ambiente de trabalho com exposicao a agentes insalubres e avaliacao tecnica de SST',
  },
  // Normas
  'normas-regulamentadoras': {
    src: '/images/articles/normas-nr.jpg',
    alt: 'Equipamento de segurança do trabalho relacionado a normas regulamentadoras',
  },
};

export const imageSeoStandard = {
  naming: 'usar nomes em minusculo, com hifens, sem acentos e com contexto semantico',
  alt: 'descrever a imagem com contexto real da pagina, sem keyword stuffing e sem repetir o titulo inteiro',
  decorative: 'usar alt vazio apenas quando a imagem for puramente decorativa',
  sizing: 'definir sizes em imagens com fill e priorizar formatos leves',
  sitemap: 'incluir imagens relevantes no sitemap das paginas principais',
} as const;
