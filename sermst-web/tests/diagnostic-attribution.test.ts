import { describe, expect, it } from 'vitest'
import {
  buildDiagnosticAttributionSnapshot,
  buildDiagnosticConversionPageUrl,
  captureDiagnosticAttribution,
  normalizeDiagnosticOrigin,
  readDiagnosticAttribution,
} from '@/lib/diagnostic-attribution'

function createStorage() {
  const values = new Map<string, string>()
  return {
    getItem: (key: string) => values.get(key) ?? null,
    setItem: (key: string, value: string) => { values.set(key, value) },
  }
}

describe('normalizeDiagnosticOrigin', () => {
  it('identifies organic Instagram only from explicit evidence', () => {
    expect(normalizeDiagnosticOrigin({ utmSource: 'instagram', utmMedium: 'organic' })).toMatchObject({
      origem: 'Instagram', suborigem: 'Orgânico', classification: 'instagram_organic',
    })
  })

  it('identifies paid Instagram from its UTM medium', () => {
    expect(normalizeDiagnosticOrigin({ utmSource: 'instagram', utmMedium: 'paid_social' })).toMatchObject({
      origem: 'Instagram', suborigem: 'Pago', classification: 'instagram_paid',
    })
  })

  it('identifies organic Google and Bing from identifiable search referrers', () => {
    expect(normalizeDiagnosticOrigin({ referrer: 'https://www.google.com.br/search?q=sst' })).toMatchObject({
      origem: 'Google', suborigem: 'Orgânico', classification: 'google_organic', referrerHost: 'www.google.com.br',
    })
    expect(normalizeDiagnosticOrigin({ referrer: 'https://www.bing.com/search?q=sst' })).toMatchObject({
      origem: 'Bing', suborigem: 'Orgânico', classification: 'bing_organic', referrerHost: 'www.bing.com',
    })
  })

  it('uses explicit UTM source and medium when present', () => {
    expect(normalizeDiagnosticOrigin({ utmSource: 'google', utmMedium: 'organic' })).toMatchObject({
      origem: 'Google', suborigem: 'Orgânico', classification: 'google_organic',
    })
    expect(normalizeDiagnosticOrigin({ utmSource: 'google', utmMedium: 'cpc' })).toMatchObject({
      origem: 'Google', suborigem: 'Pago', classification: 'google_paid',
    })
  })

  it('classifies an external HTTP referrer without storing its path or query', () => {
    expect(normalizeDiagnosticOrigin({
      referrer: 'https://parceiro.example.com/artigo?email=private@example.com',
      siteHost: 'www.sermst.com.br',
    })).toMatchObject({
      origem: '', suborigem: 'Não informado', classification: 'referral', referrerHost: 'parceiro.example.com',
    })
  })

  it('does not treat an internal referrer as an acquisition source or direct access', () => {
    expect(normalizeDiagnosticOrigin({
      referrer: 'https://blog.sermst.com.br/artigo',
      siteHost: 'www.sermst.com.br',
    })).toMatchObject({ classification: 'unknown', referrerHost: '' })
  })

  it('recognizes the production root domain as internal on preview hosts', () => {
    expect(normalizeDiagnosticOrigin({
      referrer: 'https://sermst.com.br/saude/gestao-sst',
      siteHost: 'sermst-web-preview.vercel.app',
    })).toMatchObject({ classification: 'unknown', referrerHost: '' })
  })

  it('classifies a visit with no parameters or referrer as direct', () => {
    expect(normalizeDiagnosticOrigin({})).toMatchObject({
      origem: '', suborigem: 'Não informado', classification: 'direct',
    })
  })

  it('uses unknown when campaign evidence is insufficient to identify a source', () => {
    expect(normalizeDiagnosticOrigin({ utmMedium: 'paid_social' })).toMatchObject({
      origem: '', suborigem: 'Não informado', classification: 'unknown',
    })
  })

  it('uses explicit valid origin before conflicting UTM source and medium', () => {
    expect(normalizeDiagnosticOrigin({
      originParam: 'instagram_organico', utmSource: 'google', utmMedium: 'cpc',
    })).toMatchObject({
      origem: 'Instagram', suborigem: 'Orgânico', classification: 'instagram_organic',
    })
  })

  it('uses Google click ID as paid evidence when no source is supplied', () => {
    expect(normalizeDiagnosticOrigin({ gclid: 'gclid-example' })).toMatchObject({
      origem: 'Google', suborigem: 'Pago', classification: 'google_paid',
    })
  })

  it('does not guess a channel when click IDs conflict without a UTM source', () => {
    expect(normalizeDiagnosticOrigin({ gclid: 'gclid-example', fbclid: 'fbclid-example' })).toMatchObject({
      origem: '', suborigem: 'Não informado', classification: 'unknown',
    })
  })
})

describe('diagnostic attribution session', () => {
  it('preserves Google organic through an article, internal navigation and the diagnostic CTA', () => {
    const storage = createStorage()
    captureDiagnosticAttribution({
      storage, href: 'https://sermst.com.br/saude/gestao-sst',
      referrer: 'https://www.google.com.br/search?q=gestao+sst', siteHost: 'sermst.com.br', isClientNavigation: false,
    })
    captureDiagnosticAttribution({ storage, href: 'https://sermst.com.br/solucoes', siteHost: 'sermst.com.br', isClientNavigation: true })
    captureDiagnosticAttribution({ storage, href: 'https://sermst.com.br/diagnostico', siteHost: 'sermst.com.br', isClientNavigation: true })

    expect(readDiagnosticAttribution(storage)).toMatchObject({
      first: { page: 'https://sermst.com.br/saude/gestao-sst', origem: 'Google', sourceClassification: 'google_organic' },
      last: { origem: 'Google', sourceClassification: 'google_organic', referrer: 'https://www.google.com.br/' },
      currentPage: '/diagnostico', diagnosticReferralPage: '/solucoes',
    })
  })

  it('does not replace a known source during full internal page loads', () => {
    const storage = createStorage()
    captureDiagnosticAttribution({
      storage, href: 'https://sermst.com.br/saude/gestao-sst', referrer: 'https://www.google.com.br/search?q=gestao+sst',
      siteHost: 'sermst.com.br', isClientNavigation: false,
    })
    captureDiagnosticAttribution({
      storage, href: 'https://sermst.com.br/solucoes', referrer: 'https://sermst.com.br/saude/gestao-sst',
      siteHost: 'sermst.com.br', isClientNavigation: false,
    })
    captureDiagnosticAttribution({
      storage, href: 'https://sermst.com.br/diagnostico', referrer: 'https://sermst.com.br/solucoes',
      siteHost: 'sermst.com.br', isClientNavigation: false,
    })

    expect(readDiagnosticAttribution(storage)).toMatchObject({
      first: { page: 'https://sermst.com.br/saude/gestao-sst', sourceClassification: 'google_organic' },
      last: { sourceClassification: 'google_organic', referrer: 'https://www.google.com.br/' },
      diagnosticReferralPage: '/solucoes',
    })
  })

  it('preserves Bing organic and the initial landing page across multiple articles', () => {
    const storage = createStorage()
    captureDiagnosticAttribution({
      storage, href: 'https://sermst.com.br/saude/gestao-sst', referrer: 'https://www.bing.com/search?q=gestao+sst',
      siteHost: 'sermst.com.br', isClientNavigation: false,
    })
    captureDiagnosticAttribution({ storage, href: 'https://sermst.com.br/solucoes', siteHost: 'sermst.com.br', isClientNavigation: true })
    captureDiagnosticAttribution({ storage, href: 'https://sermst.com.br/servicos', siteHost: 'sermst.com.br', isClientNavigation: true })
    captureDiagnosticAttribution({ storage, href: 'https://sermst.com.br/diagnostico', siteHost: 'sermst.com.br', isClientNavigation: true })

    expect(readDiagnosticAttribution(storage)).toMatchObject({
      first: { page: 'https://sermst.com.br/saude/gestao-sst', sourceClassification: 'bing_organic' },
      last: { sourceClassification: 'bing_organic' },
      diagnosticReferralPage: '/servicos',
    })
  })

  it('preserves Instagram campaign UTMs and Google Ads click IDs', () => {
    const instagram = createStorage()
    captureDiagnosticAttribution({
      storage: instagram,
      href: 'https://sermst.com.br/saude/gestao-sst?utm_source=instagram&utm_medium=paid_social&utm_campaign=sst_q4',
      siteHost: 'sermst.com.br', isClientNavigation: false,
    })
    captureDiagnosticAttribution({ storage: instagram, href: 'https://sermst.com.br/diagnostico', siteHost: 'sermst.com.br', isClientNavigation: true })
    expect(readDiagnosticAttribution(instagram)?.last).toMatchObject({
      origem: 'Instagram', sourceClassification: 'instagram_paid', utm_source: 'instagram', utm_campaign: 'sst_q4',
    })

    const googleAds = createStorage()
    captureDiagnosticAttribution({
      storage: googleAds, href: 'https://sermst.com.br/saude/gestao-sst?gclid=click-123',
      siteHost: 'sermst.com.br', isClientNavigation: false,
    })
    captureDiagnosticAttribution({ storage: googleAds, href: 'https://sermst.com.br/diagnostico', siteHost: 'sermst.com.br', isClientNavigation: true })
    expect(readDiagnosticAttribution(googleAds)?.last).toMatchObject({
      origem: 'Google', sourceClassification: 'google_paid', gclid: 'click-123',
    })
  })

  it('keeps direct as direct without inventing a campaign source', () => {
    const storage = createStorage()
    captureDiagnosticAttribution({
      storage, href: 'https://sermst.com.br/diagnostico', siteHost: 'sermst.com.br', isClientNavigation: false,
    })
    expect(readDiagnosticAttribution(storage)).toMatchObject({
      first: { sourceClassification: 'direct', origem: '', utm_source: '', gclid: '' },
      last: { sourceClassification: 'direct', origem: '', utm_source: '', gclid: '' },
      diagnosticReferralPage: '',
    })
  })

  it('classifies an internal referrer without a captured journey as unknown and keeps its page path', () => {
    const storage = createStorage()
    captureDiagnosticAttribution({
      storage, href: 'https://sermst.com.br/diagnostico', referrer: 'https://sermst.com.br/saude/gestao-sst?private=1',
      siteHost: 'sermst.com.br', isClientNavigation: false,
    })
    expect(readDiagnosticAttribution(storage)).toMatchObject({
      first: { sourceClassification: 'unknown', referrer: 'https://sermst.com.br/saude/gestao-sst' },
      diagnosticReferralPage: '/saude/gestao-sst',
    })
  })

  it('starts a clean attribution record for a new session instead of reusing an older session', () => {
    const priorSession = createStorage()
    captureDiagnosticAttribution({
      storage: priorSession, href: 'https://sermst.com.br/artigo', referrer: 'https://www.google.com/',
      siteHost: 'sermst.com.br', isClientNavigation: false,
    })
    const newSession = createStorage()
    captureDiagnosticAttribution({
      storage: newSession, href: 'https://sermst.com.br/diagnostico', siteHost: 'sermst.com.br', isClientNavigation: false,
    })

    expect(readDiagnosticAttribution(newSession)).toMatchObject({
      first: { sourceClassification: 'direct', page: 'https://sermst.com.br/diagnostico' },
      last: { sourceClassification: 'direct' },
    })
  })

  it('stores only allowlisted campaign parameters and preserves the diagnostic referral path in the existing page URL field', () => {
    const snapshot = buildDiagnosticAttributionSnapshot({
      href: 'https://sermst.com.br/diagnostico?utm_source=google&utm_creative=var-a&gclid=click-1&wbraid=click-2&email=private@example.com',
      siteHost: 'sermst.com.br',
    })
    expect(snapshot.page).toBe('https://sermst.com.br/diagnostico')
    expect(snapshot.additionalParams).toEqual({ utm_creative: 'var-a', wbraid: 'click-2' })

    const conversionPage = buildDiagnosticConversionPageUrl(
      'https://sermst.com.br/diagnostico?utm_source=google&email=private@example.com#form',
      '/saude/gestao-sst',
    )
    expect(conversionPage).toContain('utm_source=google')
    expect(conversionPage).toContain('journey_referral_page=%2Fsaude%2Fgestao-sst')
    expect(conversionPage).not.toContain('email=')
    expect(conversionPage).not.toContain('#form')
  })
})