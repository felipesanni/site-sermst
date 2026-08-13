import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import {
  empresarioKeywordTargets,
  empresarioSEO,
  empresarioSections,
} from '@/lib/data/seo-content';
import { getEmpresarioJourney } from '@/lib/data/empresario-journey';
import nextConfig from '../next.config';

describe('hub Empresario de topo de funil', () => {
  it('publica apenas temas amplos com demanda validada', () => {
    const contentSlugs = Object.keys(empresarioSEO).sort();
    const keywordSlugs = Object.keys(empresarioKeywordTargets).sort();

    expect(contentSlugs).toEqual(keywordSlugs);
    expect(contentSlugs).toHaveLength(15);

    for (const target of Object.values(empresarioKeywordTargets)) {
      expect(target.monthlyVolume).toBeGreaterThanOrEqual(1_900);
      expect(target.keyword.trim().length).toBeGreaterThan(2);
    }
  });

  it('mantem o conteudo informacional e sem atalhos comerciais', () => {
    for (const document of Object.values(empresarioSEO)) {
      const publicCopy = JSON.stringify(document);

      expect(document).not.toHaveProperty('cta');
      expect(document.officialSources.length).toBeGreaterThanOrEqual(1);
      expect(document.articleSections.length).toBeGreaterThanOrEqual(3);
      expect(document.practicalChecklist.length).toBeGreaterThanOrEqual(5);
      expect(document.geoOpt.faq.length).toBeGreaterThanOrEqual(3);
      expect(publicCopy).not.toMatch(
        /solicitar (proposta|orçamento)|fale com a sermst|chame no whatsapp|topo de funil|volume de busca|palavra-chave|promessa editorial|para onde este hub leva/i,
      );
      expect(publicCopy).not.toMatch(/[—–]/);

      for (const link of document.supportingLinks) {
        expect(link.href).toMatch(/^\/empresario\//);
      }
    }
  });

  it('mantem todos os artigos dentro das secoes publicas do guia', () => {
    for (const document of Object.values(empresarioSEO)) {
      expect(empresarioSections).toContain(document.section);
    }
  });

  it('oferece uma passagem contextual para conscientizacao e conversao', () => {
    for (const [slug, document] of Object.entries(empresarioSEO)) {
      const journey = getEmpresarioJourney(slug, document.section);
      const publicCopy = JSON.stringify(journey);

      expect(journey.awareness.href).toMatch(/^\/(rh|saude|normas)(\/|$)/);
      expect(journey.awareness.href).not.toMatch(/^\/empresario\//);
      expect(journey.conversion.href).toMatch(
        /^\/(assinaturas($|\/)|servicos\/|saude\/clinica-)/,
      );
      expect(journey.awareness.label.trim()).not.toHaveLength(0);
      expect(journey.conversion.label.trim()).not.toHaveLength(0);
      expect(publicCopy).not.toMatch(/[â€”â€“]/);
    }
  });

  it('explica o cluster e suas fontes com dados estruturados', () => {
    const hubSource = readFileSync(
      join(process.cwd(), 'src', 'app', 'empresario', 'page.tsx'),
      'utf8',
    );
    const articleSource = readFileSync(
      join(process.cwd(), 'src', 'app', 'empresario', '[slug]', 'page.tsx'),
      'utf8',
    );

    expect(hubSource).toContain("'@type': 'CollectionPage'");
    expect(hubSource).toContain("'@type': 'ItemList'");
    expect(hubSource).toContain('itemListElement: posts.map');
    expect(articleSource).toContain("'@type': 'Article'");
    expect(articleSource).toContain('citation: data.officialSources.map');
    expect(articleSource).toContain("'https://sermst.com.br/empresario#collection'");
    expect(articleSource).toContain('Conteúdo da equipe SERMST');
    expect(articleSource).toContain('<time dateTime={data.lastReviewedAt}>');
    expect(articleSource).toContain('isAccessibleForFree: true');
  });

  it('redireciona as URLs antigas para o novo cluster informacional', async () => {
    const redirects = (await nextConfig.redirects?.()) ?? [];
    const migrationMap = {
      '/empresario/cnpj-ativo-significa-empresa-regularizada':
        '/empresario/cnpj-ativo-o-que-significa',
      '/empresario/nota-fiscal-mei-nao-significa-empresa-regularizada':
        '/empresario/nota-fiscal-mei',
      '/empresario/simples-nacional-nao-elimina-obrigacoes-da-empresa':
        '/empresario/simples-nacional',
      '/empresario/alvara-de-funcionamento-nao-basta':
        '/empresario/alvara-de-funcionamento',
      '/empresario/folha-de-pagamento-nao-e-a-unica-obrigacao':
        '/empresario/folha-de-pagamento',
      '/empresario/vigilancia-sanitaria-e-documentos-da-empresa':
        '/empresario/vigilancia-sanitaria',
      '/empresario/empresa-pequena-com-funcionario-quais-obrigacoes':
        '/empresario/mei-pode-ter-funcionario',
      '/empresario/primeiro-funcionario-o-que-muda-na-pratica':
        '/empresario/mei-pode-ter-funcionario',
      '/empresario/documentos-obrigatorios-empresa-com-funcionarios':
        '/empresario/direitos-trabalhistas',
      '/empresario/contador-cuida-de-tudo': '/empresario/o-que-faz-um-contador',
      '/empresario/fiscalizacao-empresa-o-que-podem-cobrar':
        '/empresario/direitos-trabalhistas',
      '/empresario/empresa-regularizada-com-funcionarios':
        '/empresario/cnpj-ativo-o-que-significa',
    };

    for (const [source, destination] of Object.entries(migrationMap)) {
      expect(redirects).toEqual(
        expect.arrayContaining([
          expect.objectContaining({ source, destination, permanent: true }),
        ]),
      );
    }
  });
});
