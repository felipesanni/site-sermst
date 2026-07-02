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
    expect(llms).toContain('/servicos/pericia-trabalhista-assistente-tecnico/sao-paulo');
    expect(llms).toContain('santo-andre');
    expect(llms).toContain('barueri');
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
