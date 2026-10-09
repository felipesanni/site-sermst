import { beforeEach, describe, expect, it } from 'vitest';
import { clearFormSubmissionKey, getFormSubmissionKey } from '@/lib/form-submission-id';

describe('form idempotency keys', () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    window.localStorage.clear();
  });

  it('reuses the key for the same business request and ignores attribution/timing changes', async () => {
    const firstPayload = {
      nome: 'Pessoa Teste',
      email: 'pessoa@example.com',
      telefone: '5511999999999',
      utm_source: 'instagram',
      form_started_at: '1000',
    };
    const first = await getFormSubmissionKey('diagnostico', firstPayload);
    const retry = await getFormSubmissionKey('diagnostico', {
      ...firstPayload,
      utm_source: 'google',
      form_started_at: '2000',
    });

    expect(retry).toBe(first);
    expect(first).toMatch(/^sermst_/);
    expect([...Array(window.localStorage.length)].map((_, index) => window.localStorage.key(index)).join(' '))
      .not.toContain('pessoa@example.com');
    expect([...Array(window.localStorage.length)].map((_, index) => window.localStorage.getItem(window.localStorage.key(index) || '')).join(' '))
      .not.toContain('5511999999999');
  });

  it('replaces a corrupted local idempotency value', async () => {
    const payload = { company: 'Empresa A' }
    const originalKey = await getFormSubmissionKey('contact', payload)
    const storageKey = window.localStorage.key(0)
    expect(storageKey).toBeTruthy()
    window.localStorage.setItem(storageKey || '', '{')

    const recoveredKey = await getFormSubmissionKey('contact', payload)
    expect(recoveredKey).not.toBe(originalKey)
    expect(JSON.parse(window.localStorage.getItem(storageKey || '') || '{}')).toMatchObject({ key: recoveredKey })
  });
  it('uses a new key for changed business data and clears an accepted request', async () => {
    const original = { company: 'Empresa A', plan: 'essencial' };
    const first = await getFormSubmissionKey('subscription', original);
    const changed = await getFormSubmissionKey('subscription', { ...original, plan: 'total' });

    expect(changed).not.toBe(first);
    await clearFormSubmissionKey('subscription', original, first);
    expect(await getFormSubmissionKey('subscription', original)).not.toBe(first);
  });
});