import type { MetadataRoute } from 'next';

// Crawlers de IA explicitamente permitidos — o conteúdo da SERMST deve ser
// citável por LLMs (ChatGPT, Claude, Perplexity, Gemini etc.).
// Ver também: https://sermst.com.br/llms.txt
const AI_CRAWLERS = [
  'GPTBot',
  'OAI-SearchBot',
  'ChatGPT-User',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'Applebot-Extended',
  'meta-externalagent',
  'cohere-ai',
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/cdn-cgi/'],
      },
      ...AI_CRAWLERS.map((bot) => ({
        userAgent: bot,
        allow: '/',
        disallow: ['/api/', '/cdn-cgi/'],
      })),
    ],
    sitemap: 'https://sermst.com.br/sitemap.xml',
    host: 'https://sermst.com.br',
  };
}
