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
      alt: 'Imagem institucional de saúde corporativa e medicina do trabalho da SERMST',
    },
    operationTeam: {
      src: '/images/site/sermst-operacao-atendimento.jpg',
      alt: 'Equipe e operação de atendimento da SERMST em medicina e segurança do trabalho',
    },
  },
} as const satisfies Record<string, Record<string, SiteImage>>;

export const imageSeoStandard = {
  naming: 'usar nomes em minusculo, com hifens, sem acentos e com contexto semantico',
  alt: 'descrever a imagem com contexto real da pagina, sem keyword stuffing e sem repetir o titulo inteiro',
  decorative: 'usar alt vazio apenas quando a imagem for puramente decorativa',
  sizing: 'definir sizes em imagens com fill e priorizar formatos leves',
  sitemap: 'incluir imagens relevantes no sitemap das paginas principais',
} as const;
