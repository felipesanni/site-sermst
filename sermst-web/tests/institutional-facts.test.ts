import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { describe, expect, it } from 'vitest';
import { companyFacts } from '@/lib/company-facts';

describe('institutional facts', () => {
  it('mantem os numeros oficiais em uma unica fonte', () => {
    expect(companyFacts.history.phrase).toBe('mais de 55 anos de história');
    expect(companyFacts.livesServed.phrase).toBe('mais de 150 mil vidas atendidas');
    expect(companyFacts.companiesServed.phrase).toBe('mais de 3.500 empresas atendidas');
    expect(companyFacts.accreditedClinics.phrase).toBe(
      'mais de 900 clínicas credenciadas em todo o Brasil',
    );
    expect(companyFacts.avoidedFines.phrase).toBe(
      'mais de R$ 35 milhões economizados pelos clientes em multas',
    );
  });

  it('nao mantem os numeros institucionais antigos nas fontes publicas', () => {
    const publicSources = [
      ['src', 'lib', 'company-facts.ts'],
      ['src', 'lib', 'data', 'seo-content.ts'],
      ['src', 'app', 'page.tsx'],
      ['src', 'app', 'layout.tsx'],
      ['src', 'app', 'quem-somos', 'page.tsx'],
      ['src', 'app', 'a-clinica', 'page.tsx'],
      ['src', 'app', 'contato', 'page.tsx'],
      ['src', 'app', 'normas', '[slug]', 'page.tsx'],
      ['src', 'app', 'rh', 'funcao-encarregado', 'page.tsx'],
      ['public', 'llms.txt'],
    ]
      .map((segments) => readFileSync(join(process.cwd(), ...segments), 'utf8'))
      .join('\n');

    expect(publicSources).not.toMatch(/\b1983\b|\+3\.000|mais de 3\.000 empresas/i);
  });
});
