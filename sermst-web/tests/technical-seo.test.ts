import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import sitemap from '@/app/sitemap';
import robots from '@/app/robots';
import { localidades, servicosSEO } from '@/lib/data/seo-content';

const BASE_URL = 'https://sermst.com.br';

describe('technical SEO discovery files', () => {
  it('inclui todas as paginas regionais canonicas no sitemap', () => {
    const urls = new Set(sitemap().map((item) => item.url));

    expect(urls).toContain(`${BASE_URL}/servicos`);

    for (const servico of Object.keys(servicosSEO)) {
      expect(urls).toContain(`${BASE_URL}/servicos/${servico}`);

      for (const localidade of localidades) {
        expect(urls).toContain(`${BASE_URL}/servicos/${servico}/${localidade.slug}`);
      }
    }

    expect(urls.size).toBeGreaterThanOrEqual(160);
  });

  it('mantem robots apontando para o sitemap canonico', () => {
    const config = robots();

    expect(config.sitemap).toBe(`${BASE_URL}/sitemap.xml`);
    expect(config.host).toBe(BASE_URL);
    expect(config.rules).toEqual(
      expect.objectContaining({
        userAgent: '*',
        allow: '/',
        disallow: expect.arrayContaining(['/api/', '/cdn-cgi/']),
      }),
    );
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
});
