import type { Metadata } from 'next';
import { describe, expect, it } from 'vitest';
import { metadata as homeMetadata } from '@/app/page';
import { metadata as nr01Metadata } from '@/app/normas/nr-01-pgr-atualizada/page';
import { metadata as nr37Metadata } from '@/app/normas/nr-37/page';
import { metadata as nr18Metadata } from '@/app/normas/nr-18-construcao-civil/page';
import { metadata as sesmtMetadata } from '@/app/normas/sesmt/page';
import { metadata as acidenteDeTrabalhoMetadata } from '@/app/saude/acidente-de-trabalho/page';
import { metadata as examePeriodicoMetadata } from '@/app/saude/importancia-do-exame-periodico/page';
import { metadata as ondeFazerAudiometriaMetadata } from '@/app/saude/onde-fazer-audiometria-ocupacional-sao-paulo/page';
import { generateMetadata as generateLocalServiceMetadata } from '@/app/servicos/[servico]/[regiao]/page';
import { generateMetadata as generateServiceMetadata } from '@/app/servicos/[servico]/page';

function getTitleText(title: Metadata['title']) {
  if (typeof title === 'string') return title;
  if (title && typeof title === 'object' && 'absolute' in title) return title.absolute ?? '';

  return '';
}

describe('SEO title length', () => {
  it('mantem curtos os titles apontados pela auditoria Ubersuggest', () => {
    const auditedPages = [
      { metadata: nr01Metadata, title: 'NR-01: PGR e riscos psicossociais | SERMST' },
      { metadata: nr18Metadata, title: 'NR-18 construção civil: resumo e PGR | SERMST' },
      { metadata: nr37Metadata, title: 'NR-37: plataformas de petróleo e gás | SERMST' },
      { metadata: sesmtMetadata, title: 'NR-4 e SESMT: quando é obrigatório | SERMST' },
      { metadata: acidenteDeTrabalhoMetadata, title: 'Acidente de trabalho: tipos e riscos | SERMST' },
    ];

    for (const { metadata, title } of auditedPages) {
      const pageTitle = getTitleText(metadata.title);
      const ogTitle = getTitleText(metadata.openGraph?.title);

      expect(pageTitle).toBe(title);
      expect(pageTitle.length).toBeLessThanOrEqual(60);
      expect(ogTitle).toBe(title);
      expect(ogTitle.length).toBeLessThanOrEqual(60);
    }
  });

  it('mantem curto o title do artigo de exame periodico', () => {
    const title = getTitleText(examePeriodicoMetadata.title);
    const ogTitle = getTitleText(examePeriodicoMetadata.openGraph?.title);

    expect(title).toBe('O que é o Exame Periódico Ocupacional | SERMST');
    expect(title.length).toBeLessThanOrEqual(60);
    expect(ogTitle.length).toBeLessThanOrEqual(60);
  });

  it('mantem title da home e evita duplicidade com exame admissional em Sao Paulo', async () => {
    const homeTitle = getTitleText(homeMetadata.title);
    const exameAdmissionalMetadata = await generateLocalServiceMetadata({
      params: Promise.resolve({
        servico: 'exame-admissional-expresso',
        regiao: 'sao-paulo',
      }),
    });
    const exameAdmissionalTitle = getTitleText(exameAdmissionalMetadata.title);

    expect(homeTitle).toBe('Clínica de Exame Admissional em São Paulo | SERMST');
    expect(exameAdmissionalTitle).toBe('Clínica de Exame Admissional em São Paulo');
    expect(homeTitle).not.toBe(exameAdmissionalTitle);
    expect(homeTitle.length).toBeLessThanOrEqual(60);
    expect(exameAdmissionalTitle.length).toBeLessThanOrEqual(60);
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

  it('evita duplicidade apontada pela auditoria entre paginas estaticas e comerciais', async () => {
    const audiometriaGuiaTitle = getTitleText(ondeFazerAudiometriaMetadata.title);
    const audiometriaServicoMetadata = await generateLocalServiceMetadata({
      params: Promise.resolve({
        servico: 'audiometria-ocupacional-clinica',
        regiao: 'sao-paulo',
      }),
    });
    const audiometriaServicoTitle = getTitleText(audiometriaServicoMetadata.title);

    const empresaBaseMetadata = await generateServiceMetadata({
      params: Promise.resolve({
        servico: 'empresa-seguranca-do-trabalho',
      }),
    });
    const empresaGeoMetadata = await generateLocalServiceMetadata({
      params: Promise.resolve({
        servico: 'empresa-seguranca-do-trabalho',
        regiao: 'sao-paulo',
      }),
    });

    expect(audiometriaGuiaTitle).toBe('Onde Fazer Audiometria Ocupacional em SP | SERMST');
    expect(audiometriaServicoTitle).toBe('Audiometria Ocupacional em São Paulo Centro | SERMST');
    expect(audiometriaGuiaTitle).not.toBe(audiometriaServicoTitle);
    expect(getTitleText(empresaBaseMetadata.title)).toBe('Empresa de Segurança do Trabalho em São Paulo | SERMST');
    expect(getTitleText(empresaGeoMetadata.title)).toBe('Empresa de Segurança do Trabalho no Centro de SP | SERMST');
    expect(getTitleText(empresaBaseMetadata.title)).not.toBe(getTitleText(empresaGeoMetadata.title));
  });
});
