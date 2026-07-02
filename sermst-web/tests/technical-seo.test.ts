import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import sitemap from '@/app/sitemap';
import robots from '@/app/robots';
import { localidades, servicosSEO } from '@/lib/data/seo-content';
import { buildLocalServiceCopy } from '@/lib/seo-copy';

const BASE_URL = 'https://sermst.com.br';

describe('technical SEO discovery files', () => {
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
          userAgent: 'OAI-SearchBot',
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
    expect(llms).toContain('Ultima atualizacao: 2026-07-02');
    expect(llms).toContain('Orientacoes para mecanismos de IA');
    expect(llms).toContain(`${BASE_URL}/servicos/empresa-seguranca-do-trabalho`);
    expect(llms).toContain(`${BASE_URL}/servicos/empresa-seguranca-do-trabalho/sao-paulo`);
    expect(llms).toContain(`${BASE_URL}/rh/calculadora-cnae-grau-de-risco`);
    expect(llms).toContain(`${BASE_URL}/saude/importancia-do-exame-periodico`);
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

  it('mantem links internos para paginas prioritarias apontadas pela auditoria', () => {
    const layout = readFileSync(join(process.cwd(), 'src', 'app', 'layout.tsx'), 'utf8');
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
      '/saude/importancia-do-exame-periodico',
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
      expect(layout).toContain(link);
    }
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

    expect(admissionalCopy).toContain('rotina mais industrial');
    expect(audiometriaCopy).toContain('rotina fabril');
  });
});
