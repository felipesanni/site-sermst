import { readFileSync } from 'node:fs';
import { describe, expect, it } from 'vitest';
import type { Metadata } from 'next';
import sitemap from '@/app/sitemap';
import { generateStaticParams as generateRhStaticParams } from '@/app/rh/[slug]/page';
import { generateMetadata as generateServiceMetadata } from '@/app/servicos/[servico]/page';
import { generateMetadata as generateLocalServiceMetadata } from '@/app/servicos/[servico]/[regiao]/page';
import { localidades, servicosSEO } from '@/lib/data/seo-content';

const BASE_URL = 'https://sermst.com.br';

function getTitleText(title: Metadata['title']) {
  if (typeof title === 'string') return title;
  if (title && typeof title === 'object' && 'absolute' in title) return title.absolute ?? '';

  return '';
}

function getCanonical(metadata: Metadata) {
  const canonical = metadata.alternates?.canonical;

  if (typeof canonical === 'string') return canonical;
  if (canonical instanceof URL) return canonical.toString();

  return '';
}

function isIndexFollow(metadata: Metadata) {
  if (!metadata.robots) return true;
  if (typeof metadata.robots === 'string') return metadata.robots.includes('index') && metadata.robots.includes('follow');

  return metadata.robots.index !== false && metadata.robots.follow !== false;
}

describe('SEO guardrails de indexacao e duplicidade', () => {
  it('mantem sitemap limpo, unico e sem URLs tecnicas ou placeholders', () => {
    const urls = sitemap().map((item) => item.url);
    const uniqueUrls = new Set(urls);

    expect(uniqueUrls.size).toBe(urls.length);

    for (const url of urls) {
      expect(url.startsWith(BASE_URL)).toBe(true);
      expect(url).not.toContain('/api/');
      expect(url).not.toContain('[');
      expect(url).not.toContain(']');
      expect(url).not.toContain('{');
      expect(url).not.toContain('}');
      expect(url).not.toContain('//servicos');
    }
  });

  it('evita gerar dinamicamente paginas RH que ja possuem rota estatica propria', () => {
    expect(generateRhStaticParams()).not.toContainEqual({ slug: 'cat-acidente-de-trabalho' });
  });

  it('mantem paginas de servico indexaveis com canonical igual ao destino do sitemap', async () => {
    for (const servico of Object.keys(servicosSEO)) {
      const serviceUrl = `${BASE_URL}/servicos/${servico}`;
      const serviceMetadata = await generateServiceMetadata({
        params: Promise.resolve({ servico }),
      });

      expect(getCanonical(serviceMetadata)).toBe(serviceUrl);
      expect(isIndexFollow(serviceMetadata)).toBe(true);
      expect(getTitleText(serviceMetadata.title)).not.toBe('');
      expect(serviceMetadata.description).toBeTruthy();

      const data = servicosSEO[servico];
      const allowedLocalSlugs = data.allowedLocalSlugs ?? localidades.map((localidade) => localidade.slug);

      for (const localidade of localidades.filter((local) => allowedLocalSlugs.includes(local.slug))) {
        const localUrl = `${BASE_URL}/servicos/${servico}/${localidade.slug}`;
        const localMetadata = await generateLocalServiceMetadata({
          params: Promise.resolve({ servico, regiao: localidade.slug }),
        });

        expect(getCanonical(localMetadata)).toBe(localUrl);
        expect(isIndexFollow(localMetadata)).toBe(true);
        expect(getTitleText(localMetadata.title)).not.toBe('');
        expect(localMetadata.description).toBeTruthy();
      }
    }
  });

  it('evita title e description duplicados nas paginas de servico e geo SEO', async () => {
    const seenTitles = new Map<string, string>();
    const seenDescriptions = new Map<string, string>();

    const assertUniqueMetadata = (url: string, metadata: Metadata) => {
      const title = getTitleText(metadata.title);
      const description = String(metadata.description ?? '');

      expect(title.length, `${url} title curto demais`).toBeGreaterThan(20);
      expect(title.length, `${url} title longo demais`).toBeLessThanOrEqual(70);
      expect(description.length, `${url} description curta demais`).toBeGreaterThan(80);
      expect(description.length, `${url} description longa demais`).toBeLessThanOrEqual(240);

      expect(seenTitles.get(title), `${url} duplica title de ${seenTitles.get(title)}`).toBeUndefined();
      expect(
        seenDescriptions.get(description),
        `${url} duplica description de ${seenDescriptions.get(description)}`,
      ).toBeUndefined();

      seenTitles.set(title, url);
      seenDescriptions.set(description, url);
    };

    for (const servico of Object.keys(servicosSEO)) {
      const serviceUrl = `${BASE_URL}/servicos/${servico}`;
      const serviceMetadata = await generateServiceMetadata({
        params: Promise.resolve({ servico }),
      });

      assertUniqueMetadata(serviceUrl, serviceMetadata);

      const data = servicosSEO[servico];
      const allowedLocalSlugs = data.allowedLocalSlugs ?? localidades.map((localidade) => localidade.slug);

      for (const localidade of localidades.filter((local) => allowedLocalSlugs.includes(local.slug))) {
        const localUrl = `${BASE_URL}/servicos/${servico}/${localidade.slug}`;
        const localMetadata = await generateLocalServiceMetadata({
          params: Promise.resolve({ servico, regiao: localidade.slug }),
        });

        assertUniqueMetadata(localUrl, localMetadata);
      }
    }
  });

  it('mantem schema de servicos forte para Google e IA antes do deploy', () => {
    const servicePageSource = readFileSync('src/app/servicos/[servico]/page.tsx', 'utf8');
    const localServicePageSource = readFileSync('src/app/servicos/[servico]/[regiao]/page.tsx', 'utf8');

    for (const source of [servicePageSource, localServicePageSource]) {
      expect(source).toContain("'@type': 'Service'");
      expect(source).toContain("'@id'");
      expect(source).toContain('mainEntityOfPage');
      expect(source).toContain('https://sermst.com.br/#organization');
      expect(source).toContain('areaServed');
      expect(source).toContain('availableChannel');
      expect(source).toContain('potentialAction');
    }
  });

  it('mantem schemas de calculadora e treinamentos validos para auditorias externas', () => {
    const calculatorPageSource = readFileSync('src/app/rh/calculadora-cnae-grau-de-risco/page.tsx', 'utf8');
    const trainingPageSource = readFileSync('src/app/treinamentos/[slug]/page.tsx', 'utf8');

    expect(calculatorPageSource).not.toContain("'@type': ['SoftwareApplication', 'WebApplication']");
    expect(calculatorPageSource).toContain("'@type': 'WebPage'");
    expect(calculatorPageSource).toContain('calculatorPageSchema');

    expect(trainingPageSource).toContain("'@type': 'CourseInstance'");
    expect(trainingPageSource).toContain('courseWorkload: training.workload');
  });
});
