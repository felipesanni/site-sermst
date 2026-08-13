import type { MetadataRoute } from 'next';

// Agentes oficiais de descoberta e citação. Eles usam a mesma base técnica
// do SEO: HTML rastreável, URLs canônicas, links internos e conteúdo indexável.
const SEARCH_CRAWLERS = [
  'Googlebot',
  'Bingbot',
  'OAI-SearchBot',
  'Claude-SearchBot',
  'PerplexityBot',
  'Applebot',
];

// Acessos acionados por uma pessoa dentro de um assistente. Alguns provedores
// podem tratar essas requisições de forma diferente de um crawler automático.
const USER_REQUEST_AGENTS = [
  'ChatGPT-User',
  'Claude-User',
  'Perplexity-User',
];

// Controles de treinamento ou de outros usos de dados. Eles não substituem
// os crawlers de busca acima e não garantem citação em respostas generativas.
const MODEL_TRAINING_AGENTS = [
  'GPTBot',
  'ClaudeBot',
  'Google-Extended',
  'Applebot-Extended',
  'meta-externalagent',
  'cohere-ai',
];

const PUBLIC_CONTENT_AGENTS = [
  ...SEARCH_CRAWLERS,
  ...USER_REQUEST_AGENTS,
  ...MODEL_TRAINING_AGENTS,
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/cdn-cgi/'],
      },
      ...PUBLIC_CONTENT_AGENTS.map((bot) => ({
        userAgent: bot,
        allow: '/',
        disallow: ['/api/', '/cdn-cgi/'],
      })),
    ],
    sitemap: 'https://sermst.com.br/sitemap.xml',
    host: 'https://sermst.com.br',
  };
}
