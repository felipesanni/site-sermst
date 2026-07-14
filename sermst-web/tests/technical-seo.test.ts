import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import sitemap from '@/app/sitemap';
import robots from '@/app/robots';
import { empresarioSEO, localidades, servicosSEO } from '@/lib/data/seo-content';
import { buildLocalServiceCopy } from '@/lib/seo-copy';
import { buildFrequentFaqs } from '@/lib/faq';

const BASE_URL = 'https://sermst.com.br';

describe('technical SEO discovery files', () => {
  it('mantem a home ampla e encaminha intencoes especificas para paginas dedicadas', () => {
    const home = readFileSync(join(process.cwd(), 'src', 'app', 'page.tsx'), 'utf8');

    expect(home).toContain("title: 'Exames Ocupacionais e SST para Empresas | SERMST'");
    expect(home).toContain('Exames ocupacionais e SST');
    expect(home).toContain('/servicos/exame-admissional-expresso/sao-paulo');
    expect(home).toContain('/saude/exame-demissional');
    expect(home).toContain('/saude/exame-periodico-ocupacional');
    expect(home).toContain('/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo');
    expect(home).toContain('/servicos/gestao-esocial-s2220-s2240/sao-paulo');
    expect(home).not.toContain('Onde fazer exame admissional em São Paulo?');
    expect(home).not.toContain("'@type': 'FAQPage'");
    expect(home).toContain('Largo do Paissandu, 72');
  });

  it('libera apenas os endpoints necessarios para Clarity e Google Ads na CSP', () => {
    const nextConfig = readFileSync(join(process.cwd(), 'next.config.ts'), 'utf8');

    expect(nextConfig).toContain('https://*.clarity.ms');
    expect(nextConfig).toContain('https://c.bing.com');
    expect(nextConfig).toContain('https://ad.doubleclick.net');
    expect(nextConfig).toContain('https://pagead2.googlesyndication.com');
  });

  it('deixa o page view inicial com o gtag direto e as navegacoes internas com o tracker', () => {
    const tracker = readFileSync(
      join(process.cwd(), 'src', 'components', 'analytics', 'route-analytics-tracker.tsx'),
      'utf8',
    );
    const layout = readFileSync(join(process.cwd(), 'src', 'app', 'layout.tsx'), 'utf8');

    expect(layout).toContain('gtag/js?id=G-PZN2BZ7JFV');
    expect(layout).toContain("gtag('config', 'G-PZN2BZ7JFV');");
    expect(layout).not.toContain('send_page_view: false');
    expect(tracker).toContain("window.gtag('event', 'page_view'");
    expect(tracker).toContain('send_to: GA4_MEASUREMENT_ID');
    expect(tracker).toContain('hasSkippedInitialPageViewRef');
    expect(tracker).toContain('previousLocationRef.current === pageLocation');
  });

  it('mantem o user_engagement sob coleta automatica do GA4', () => {
    const tracker = readFileSync(
      join(process.cwd(), 'src', 'components', 'analytics', 'route-analytics-tracker.tsx'),
      'utf8',
    );
    const layout = readFileSync(join(process.cwd(), 'src', 'app', 'layout.tsx'), 'utf8');

    expect(layout).toContain("gtag('config', 'G-PZN2BZ7JFV');");
    expect(layout).not.toContain('send_page_view: false');
    expect(layout).not.toContain("gtag('event', 'user_engagement'");
    expect(tracker).not.toContain("window.gtag('event', 'user_engagement'");
  });

  it('permite indexacao, snippets completos e previews grandes ao Googlebot', () => {
    const layout = readFileSync(join(process.cwd(), 'src', 'app', 'layout.tsx'), 'utf8');

    expect(layout).toContain('googleBot: {');
    expect(layout).toContain("'max-video-preview': -1");
    expect(layout).toContain("'max-image-preview': 'large'");
    expect(layout).toContain("'max-snippet': -1");
    expect(layout).toContain('noimageindex: false');
  });

  it('inclui todas as paginas regionais canonicas no sitemap', () => {
    const urls = new Set(sitemap().map((item) => item.url));

    expect(urls).toContain(`${BASE_URL}/servicos`);

    for (const servico of Object.keys(servicosSEO)) {
      const data = servicosSEO[servico];
      const allowedLocalSlugs = data.allowedLocalSlugs ?? localidades.map((localidade) => localidade.slug);

      expect(urls).toContain(`${BASE_URL}/servicos/${servico}`);

      for (const localidade of localidades) {
        const url = `${BASE_URL}/servicos/${servico}/${localidade.slug}`;

        if (allowedLocalSlugs.includes(localidade.slug)) {
          expect(urls).toContain(url);
        } else {
          expect(urls).not.toContain(url);
        }
      }
    }

    expect(urls.size).toBeGreaterThanOrEqual(160);
  });

  it('mantem robots apontando para o sitemap canonico', () => {
    const config = robots();
    const rules = Array.isArray(config.rules) ? config.rules : [config.rules];

    expect(config.sitemap).toBe(`${BASE_URL}/sitemap.xml`);
    expect(config.host).toBe(BASE_URL);
    expect(rules).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          userAgent: '*',
          allow: '/',
          disallow: expect.arrayContaining(['/api/', '/cdn-cgi/']),
        }),
        expect.objectContaining({
          userAgent: 'GPTBot',
          allow: '/',
          disallow: expect.arrayContaining(['/api/', '/cdn-cgi/']),
        }),
        expect.objectContaining({
          userAgent: 'PerplexityBot',
          allow: '/',
          disallow: expect.arrayContaining(['/api/', '/cdn-cgi/']),
        }),
        expect.objectContaining({
          userAgent: 'ClaudeBot',
          allow: '/',
          disallow: expect.arrayContaining(['/api/', '/cdn-cgi/']),
        }),
        expect.objectContaining({
          userAgent: 'Claude-SearchBot',
          allow: '/',
          disallow: expect.arrayContaining(['/api/', '/cdn-cgi/']),
        }),
        expect.objectContaining({
          userAgent: 'Claude-User',
          allow: '/',
          disallow: expect.arrayContaining(['/api/', '/cdn-cgi/']),
        }),
        expect.objectContaining({
          userAgent: 'OAI-SearchBot',
          allow: '/',
          disallow: expect.arrayContaining(['/api/', '/cdn-cgi/']),
        }),
        expect.objectContaining({
          userAgent: 'Bingbot',
          allow: '/',
          disallow: expect.arrayContaining(['/api/', '/cdn-cgi/']),
        }),
        expect.objectContaining({
          userAgent: 'Applebot',
          allow: '/',
          disallow: expect.arrayContaining(['/api/', '/cdn-cgi/']),
        }),
        expect.objectContaining({
          userAgent: 'Google-Extended',
          allow: '/',
          disallow: expect.arrayContaining(['/api/', '/cdn-cgi/']),
        }),
      ]),
    );
    for (const rule of rules) {
      expect(rule).toEqual(
      expect.objectContaining({
        allow: '/',
        disallow: expect.arrayContaining(['/api/', '/cdn-cgi/']),
      }),
      );
    }
  });

  it('mantem llms.txt alinhado com sitemap, robots e cobertura geo', () => {
    const llms = readFileSync(join(process.cwd(), 'public', 'llms.txt'), 'utf8');

    expect(llms).toContain(`${BASE_URL}/sitemap.xml`);
    expect(llms).toContain(`${BASE_URL}/robots.txt`);
    expect(llms).toContain(`${BASE_URL}/servicos/{servico}/{regiao}`);
    expect(llms).toContain('Ultima atualizacao: 2026-07-13 (rev. 11)');
    expect(llms).toContain('Orientacoes para mecanismos de IA');
    expect(llms).toContain('As regras de acesso estao no robots.txt');
    expect(llms).toContain(`${BASE_URL}/servicos/empresa-seguranca-do-trabalho`);
    expect(llms).toContain(`${BASE_URL}/servicos/empresa-seguranca-do-trabalho/sao-paulo`);
    expect(llms).toContain(`${BASE_URL}/rh/calculadora-cnae-grau-de-risco`);
    expect(llms).toContain(`${BASE_URL}/saude/gestao-sst`);
    expect(llms).toContain(`${BASE_URL}/assinaturas`);
    for (const slug of Object.keys(empresarioSEO)) {
      expect(llms).toContain(`${BASE_URL}/empresario/${slug}`);
    }
    expect(llms).toContain(`${BASE_URL}/saude/exame-periodico-ocupacional`);
    expect(llms).toContain(`${BASE_URL}/saude/exame-demissional`);
    expect(llms).not.toContain(`${BASE_URL}/saude/importancia-do-exame-periodico`);
    expect(llms).toContain(`${BASE_URL}/saude/onde-fazer-audiometria-ocupacional-sao-paulo`);
    expect(llms).toContain(`${BASE_URL}/saude/doencas-ocupacionais`);
    expect(llms).toContain(`${BASE_URL}/saude/medico-do-trabalho`);
    expect(llms).toContain(`${BASE_URL}/normas/nr-06-epi`);
    expect(llms).toContain(`${BASE_URL}/normas/dds`);
    expect(llms).toContain(`${BASE_URL}/normas/sesmt`);
    expect(llms).toContain('/servicos/pericia-trabalhista-assistente-tecnico/sao-paulo');
    expect(llms).toContain('santo-andre');
    expect(llms).toContain('barueri');
  });

  it('prepara o IndexNow sem misturar a chave publica com a API privada do Bing', () => {
    const packageJson = JSON.parse(
      readFileSync(join(process.cwd(), 'package.json'), 'utf8'),
    ) as { scripts: Record<string, string> };
    const indexNowScript = readFileSync(
      join(process.cwd(), 'scripts', 'submit-indexnow.mjs'),
      'utf8',
    );
    const publicKey = readFileSync(
      join(process.cwd(), 'public', '8ebc0f4a388a422381f889c6be5d83c2.txt'),
      'utf8',
    ).trim();

    expect(publicKey).toBe('8ebc0f4a388a422381f889c6be5d83c2');
    expect(packageJson.scripts['indexnow:submit']).toBe('node scripts/submit-indexnow.mjs');
    expect(indexNowScript).toContain('https://api.indexnow.org/indexnow');
    expect(indexNowScript).toContain('A chave do IndexNow ainda não está publicada');
    expect(indexNowScript).toContain('entry.lastModified >= since');
    expect(indexNowScript).not.toContain('BING_WEBMASTER_API_KEY');
  });

  it('mantem links internos para paginas prioritarias apontadas pela auditoria sem poluir o footer', () => {
    const internalLinkSources = [
      readFileSync(join(process.cwd(), 'src', 'app', 'layout.tsx'), 'utf8'),
      readFileSync(join(process.cwd(), 'src', 'app', 'servicos', 'page.tsx'), 'utf8'),
      readFileSync(join(process.cwd(), 'src', 'app', 'saude', 'page.tsx'), 'utf8'),
      readFileSync(join(process.cwd(), 'src', 'app', 'rh', 'page.tsx'), 'utf8'),
      readFileSync(join(process.cwd(), 'src', 'app', 'normas', 'page.tsx'), 'utf8'),
      readFileSync(join(process.cwd(), 'src', 'app', 'dicionario', 'page.tsx'), 'utf8'),
    ].join('\n');
    const priorityLinks = [
      '/servicos/exame-admissional-expresso',
      '/servicos/empresa-seguranca-do-trabalho',
      '/servicos/audiometria-ocupacional-clinica',
      '/servicos/exame-toxicologico-clt',
      '/servicos/exames-complementares-laboratoriais',
      '/servicos/ltcat-laudo-tecnico-previdenciario',
      '/servicos/pcmso-nr07-programa',
      '/servicos/pericia-trabalhista-assistente-tecnico',
      '/servicos/pgr-nr01-gerenciamento-riscos',
      '/saude/exame-periodico-ocupacional',
      '/saude/onde-fazer-audiometria-ocupacional-sao-paulo',
      '/rh/cat-acidente-de-trabalho',
      '/saude/doencas-ocupacionais',
      '/saude/medico-do-trabalho',
      '/rh/riscos-psicossociais',
      '/rh/lei-15377-2026-vacinacao-hpv-exames-preventivos',
      '/rh/carta-recomendacao',
      '/normas/nr-05-cipa',
      '/normas/nr-06-epi',
      '/normas/dds',
      '/normas/sesmt',
      '/normas/nr-33-espaco-confinado',
      '/dicionario/o-que-e-ltcat',
      '/dicionario/o-que-e-ppp',
    ];

    for (const link of priorityLinks) {
      expect(internalLinkSources).toContain(link);
    }
  });

  it('mantem as acoes principais legiveis para agentes e tecnologias assistivas', () => {
    const mobileNavigation = readFileSync(
      join(process.cwd(), 'src', 'components', 'ui', 'mobile-navigation.tsx'),
      'utf8',
    );
    const layout = readFileSync(join(process.cwd(), 'src', 'app', 'layout.tsx'), 'utf8');

    expect(mobileNavigation).toContain('aria-expanded={isOpen}');
    expect(mobileNavigation).toContain('aria-controls="mobile-navigation-panel"');
    expect(mobileNavigation).toContain('role="dialog"');
    expect(mobileNavigation).toContain('<button');
    expect(layout).not.toContain('id="mobile-menu-open"');
  });

  it('mantem paginas informacionais priorizadas pelo benchmark no sitemap', () => {
    const urls = new Set(sitemap().map((item) => item.url));
    const benchmarkDrivenPages = [
      `${BASE_URL}/normas/nr-06-epi`,
      `${BASE_URL}/rh/cat-acidente-de-trabalho`,
      `${BASE_URL}/saude/doencas-ocupacionais`,
      `${BASE_URL}/saude/medico-do-trabalho`,
      `${BASE_URL}/normas/dds`,
      `${BASE_URL}/normas/sesmt`,
    ];

    for (const url of benchmarkDrivenPages) {
      expect(urls).toContain(url);
    }
  });

  it('publica apenas URLs canonicas no sitemap e lastmod somente nas paginas revisadas', () => {
    const entries = sitemap();
    const urls = entries.map((entry) => entry.url);

    expect(new Set(urls).size).toBe(urls.length);
    expect(urls).toContain(`${BASE_URL}/normas/o-que-e-nr-07`);
    expect(urls).toContain(`${BASE_URL}/saude/exame-demissional`);
    expect(urls).toContain(`${BASE_URL}/saude/exame-periodico-ocupacional`);
    expect(urls).not.toContain(`${BASE_URL}/saude/exame-demissional-guia`);
    expect(urls).not.toContain(`${BASE_URL}/saude/importancia-do-exame-periodico`);

    const nr07 = entries.find((entry) => entry.url === `${BASE_URL}/normas/o-que-e-nr-07`);
    const demissional = entries.find((entry) => entry.url === `${BASE_URL}/saude/exame-demissional`);
    const empresarioHub = entries.find((entry) => entry.url === `${BASE_URL}/empresario`);
    const unchanged = entries.find((entry) => entry.url === `${BASE_URL}/quem-somos`);

    expect(nr07?.lastModified).toBe('2026-07-13');
    expect(demissional?.lastModified).toBe('2026-07-13');
    expect(empresarioHub?.lastModified).toBe('2026-07-13');
    for (const slug of Object.keys(empresarioSEO)) {
      const article = entries.find(
        (entry) => entry.url === `${BASE_URL}/empresario/${slug}`,
      );
      expect(article?.lastModified).toBe('2026-07-13');
    }
    expect(unchanged?.lastModified).toBeUndefined();
  });

  it('nao completa FAQs editoriais com perguntas genericas por padrao', () => {
    const editorialFaq = [{ q: 'Qual é o prazo correto?', a: 'O prazo depende da regra aplicável.' }];
    const result = buildFrequentFaqs(editorialFaq, {
      context: 'article',
      topic: 'Exame ocupacional',
    });

    expect(result).toEqual(editorialFaq);
  });

  it('mantem copy local unica nas paginas geo prioritarias de Sao Bernardo', () => {
    const saoBernardo = localidades.find((localidade) => localidade.slug === 'sao-bernardo');

    expect(saoBernardo).toBeDefined();

    const admissionalCopy = buildLocalServiceCopy(
      servicosSEO['exame-admissional-expresso'],
      saoBernardo!,
    ).localParagraphs.join(' ');
    const audiometriaCopy = buildLocalServiceCopy(
      servicosSEO['audiometria-ocupacional-clinica'],
      saoBernardo!,
    ).localParagraphs.join(' ');

    expect(admissionalCopy).toContain('montadoras, autopeças, metalurgia');
    expect(audiometriaCopy).toContain('PCMSO de indústrias');
  });
});
