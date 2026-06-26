import type { Metadata } from 'next';
import { describe, expect, it } from 'vitest';
import { metadata as examePeriodicoMetadata } from '@/app/saude/importancia-do-exame-periodico/page';
import { generateMetadata as generateLocalServiceMetadata } from '@/app/servicos/[servico]/[regiao]/page';

function getTitleText(title: Metadata['title']) {
  if (typeof title === 'string') return title;
  if (title && typeof title === 'object' && 'absolute' in title) return title.absolute ?? '';

  return '';
}

describe('SEO title length', () => {
  it('mantem curto o title do artigo de exame periodico', () => {
    const title = getTitleText(examePeriodicoMetadata.title);
    const ogTitle = getTitleText(examePeriodicoMetadata.openGraph?.title);

    expect(title).toBe('Exame Periódico Ocupacional | SERMST');
    expect(title.length).toBeLessThanOrEqual(60);
    expect(ogTitle.length).toBeLessThanOrEqual(60);
  });

  it('mantem curto o title das paginas regionais de audiometria', async () => {
    const regioes = ['santo-andre', 'sao-bernardo', 'sao-caetano', 'sao-paulo'];

    await Promise.all(
      regioes.map(async (regiao) => {
        const metadata = await generateLocalServiceMetadata({
          params: Promise.resolve({
            servico: 'audiometria-ocupacional-clinica',
            regiao,
          }),
        });
        const title = getTitleText(metadata.title);

        expect(title).toMatch(/^Audiometria Ocupacional em .+ \| SERMST$/);
        expect(title.length).toBeLessThanOrEqual(60);
      }),
    );
  });
});
