import { describe, expect, it } from 'vitest';
import { empresarioSEO } from '@/lib/data/seo-content';

describe('public copy boundary', () => {
  it('nao mistura a estrategia interna de SEO com o conteudo publico de empresario', () => {
    const internalStrategyFields = [
      'primaryKeyword',
      'secondaryKeywords',
      'searchIntent',
      'funnelStage',
      'antiCannibalization',
      'geoStrategy',
    ];

    for (const document of Object.values(empresarioSEO)) {
      for (const field of internalStrategyFields) {
        expect(document).not.toHaveProperty(field);
      }

      expect(document).not.toHaveProperty('cta');

      expect(JSON.stringify(document)).not.toMatch(
        /promessa editorial|para onde este hub leva|papel deste hub|intenção transacional|fortalece o cluster/i,
      );
    }
  });
});
