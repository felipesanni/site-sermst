export type DiagnosticOriginInput = {
  originParam?: string
  utmSource?: string
  utmMedium?: string
  referrer?: string
  gclid?: string
  fbclid?: string
  hasOtherAttributionSignal?: boolean
  siteHost?: string
}

export type DiagnosticOrigin = {
  /** Existing CRM-compatible fields. Empty origem means no safe legacy value was identified. */
  origem: string
  suborigem: 'Pago' | 'Orgânico' | 'Não informado'
  classification: string
  referrerHost: string
}

export type DiagnosticAttributionSnapshot = {
  page: string
  referrer: string
  capturedAt: string
  origemParam: string
  origem: string
  suborigem: string
  sourceClassification: string
  referrerHost: string
  utm_source: string
  utm_medium: string
  utm_campaign: string
  utm_content: string
  utm_term: string
  gclid: string
  fbclid: string
  utm_id: string
  additionalParams: Record<string, string>
}

export type StoredDiagnosticAttribution = {
  first: DiagnosticAttributionSnapshot
  last: DiagnosticAttributionSnapshot
  currentPage: string
  diagnosticReferralPage: string
}

export const DIAGNOSTIC_ATTRIBUTION_SESSION_KEY = 'sermst_diagnostico_attribution_session_v1'

const EXTRA_UTM_OR_CLICK_ID = /^(utm_[a-z0-9_]+|gbraid|wbraid|dclid|msclkid|ttclid|twclid|li_fat_id|sccid|epik|yclid|gad_source|gad_campaignid)$/i
const KNOWN_QUERY_KEYS = new Set([
  'origem', 'utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'utm_id',
  'gclid', 'fbclid',
])

function foldText(value: string) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase()
}

function channelFrom(value: string) {
  const text = foldText(value)
  if (/instagram|(^|[^a-z])insta([^a-z]|$)|(^|[^a-z])ig([^a-z]|$)/.test(text)) return 'Instagram'
  if (/google|adwords|googleads|gads/.test(text)) return 'Google'
  if (/bing/.test(text)) return 'Bing'
  if (/facebook|(^|[^a-z])meta([^a-z]|$)/.test(text)) return 'Facebook'
  return ''
}

function mediumFrom(value: string): 'Pago' | 'Orgânico' | 'Não informado' {
  const text = foldText(value)
  if (/paid|pago|(^|[_\s-])(cpc|ppc|cpm|cpa|cpv)([_\s-]|$)|paid[_\s-]?(social|search)|ads?/.test(text)) return 'Pago'
  if (/organic|organico|seo|non[_\s-]?paid/.test(text)) return 'Orgânico'
  return 'Não informado'
}

function intentFromExplicitOrigin(value: string): 'Pago' | 'Orgânico' | 'Não informado' {
  const text = foldText(value)
  if (/pago|paid|cpc|ppc|cpm|cpa|cpv|ads?/.test(text)) return 'Pago'
  if (/organico|organic|seo/.test(text)) return 'Orgânico'
  return 'Não informado'
}

function classificationFor(channel: string, suborigin: DiagnosticOrigin['suborigem']) {
  const channelKey = channel === 'Instagram'
    ? 'instagram'
    : channel === 'Google'
      ? 'google'
      : channel === 'Bing'
        ? 'bing'
        : channel === 'Facebook'
          ? 'facebook'
          : ''

  if (!channelKey) return suborigin === 'Não informado' ? 'other' : 'other_' + (suborigin === 'Pago' ? 'paid' : 'organic')
  if (suborigin === 'Pago') return channelKey + '_paid'
  if (suborigin === 'Orgânico') return channelKey + '_organic'
  return channelKey + '_unspecified'
}

function isInternalHost(host: string, siteHost: string) {
  const normalizedHost = host.toLowerCase().replace(/^www\./, '')
  const normalizedSite = siteHost.toLowerCase().replace(/^www\./, '')
  return normalizedHost === normalizedSite || normalizedHost === 'sermst.com.br' || normalizedHost.endsWith('.sermst.com.br')
}

type ParsedReferrer = { kind: 'external' | 'internal'; host: string; url: URL }

function parseReferrer(value: string, siteHost: string): ParsedReferrer | null {
  try {
    const parsed = new URL(value)
    if (!['http:', 'https:'].includes(parsed.protocol) || !parsed.hostname) return null
    return {
      kind: isInternalHost(parsed.hostname, siteHost) ? 'internal' : 'external',
      host: parsed.hostname.toLowerCase(),
      url: parsed,
    }
  } catch {
    return null
  }
}

function searchEngineFromHost(host: string) {
  const normalizedHost = host.toLowerCase().replace(/^www\./, '')
  if (/^(?:[a-z0-9-]+\.)*google\.(?:com|[a-z]{2,3})(?:\.[a-z]{2})?$/.test(normalizedHost)) return 'Google'
  if (/(^|\.)bing\.com$/.test(normalizedHost)) return 'Bing'
  return ''
}

function hasExplicitOrigin(value: string) {
  const text = foldText(value.trim())
  return Boolean(text && !['unknown', 'desconhecido', 'nao informado'].includes(text))
}

export function normalizeDiagnosticOrigin(input: DiagnosticOriginInput): DiagnosticOrigin {
  const originParam = input.originParam?.trim() || ''
  const utmSource = input.utmSource?.trim() || ''
  const utmMedium = input.utmMedium?.trim() || ''
  const siteHost = input.siteHost?.trim() || 'sermst.com.br'
  const parsedReferrer = parseReferrer(input.referrer?.trim() || '', siteHost)
  const externalReferrer = parsedReferrer?.kind === 'external' ? parsedReferrer : null
  const internalReferrer = parsedReferrer?.kind === 'internal'
  const noSuborigin = 'Não informado' as const

  if (hasExplicitOrigin(originParam)) {
    const explicitText = foldText(originParam)
    if (/^(direct|direto|acesso direto)$/.test(explicitText)) {
      return { origem: '', suborigem: noSuborigin, classification: 'direct', referrerHost: '' }
    }

    const channel = channelFrom(originParam)
    const explicitIntent = intentFromExplicitOrigin(originParam)
    const suborigem = explicitIntent !== noSuborigin ? explicitIntent : mediumFrom(utmMedium)

    return {
      origem: channel || originParam,
      suborigem,
      classification: classificationFor(channel, suborigem),
      referrerHost: '',
    }
  }

  if (utmSource) {
    const channel = channelFrom(utmSource) || utmSource
    const suborigem = mediumFrom(utmMedium)
    return {
      origem: channel,
      suborigem,
      classification: classificationFor(channel, suborigem),
      referrerHost: '',
    }
  }

  if (input.gclid?.trim() && input.fbclid?.trim()) {
    return { origem: '', suborigem: noSuborigin, classification: 'unknown', referrerHost: '' }
  }

  if (input.gclid?.trim()) {
    return { origem: 'Google', suborigem: 'Pago', classification: 'google_paid', referrerHost: '' }
  }

  if (externalReferrer) {
    const searchEngine = searchEngineFromHost(externalReferrer.host)
    if (searchEngine) {
      return {
        origem: searchEngine,
        suborigem: 'Orgânico',
        classification: searchEngine.toLowerCase() + '_organic',
        referrerHost: externalReferrer.host,
      }
    }

    return {
      origem: '',
      suborigem: noSuborigin,
      classification: 'referral',
      referrerHost: externalReferrer.host,
    }
  }

  if (input.hasOtherAttributionSignal || utmMedium || input.fbclid?.trim() || internalReferrer) {
    return { origem: '', suborigem: noSuborigin, classification: 'unknown', referrerHost: '' }
  }

  return { origem: '', suborigem: noSuborigin, classification: 'direct', referrerHost: '' }
}

function sanitizePageUrl(value: string) {
  try {
    const parsed = new URL(value)
    return `${parsed.origin}${parsed.pathname || '/'}`
  } catch {
    return ''
  }
}

function pathFromPageUrl(value: string) {
  try {
    return new URL(value, 'https://sermst.com.br').pathname || '/'
  } catch {
    return ''
  }
}

export function getInternalReferralPage(referrer: string, siteHost = 'sermst.com.br') {
  const parsed = parseReferrer(referrer, siteHost)
  return parsed?.kind === 'internal' ? parsed.url.pathname || '/' : ''
}

export function buildDiagnosticAttributionSnapshot(input: {
  href: string
  referrer?: string
  siteHost?: string
}): DiagnosticAttributionSnapshot {
  const pageUrl = new URL(input.href, 'https://sermst.com.br')
  const params = pageUrl.searchParams
  const origemParam = params.get('origem')?.trim() || ''
  const utm_source = params.get('utm_source')?.trim() || ''
  const utm_medium = params.get('utm_medium')?.trim() || ''
  const utm_campaign = params.get('utm_campaign')?.trim() || ''
  const utm_content = params.get('utm_content')?.trim() || ''
  const utm_term = params.get('utm_term')?.trim() || ''
  const gclid = params.get('gclid')?.trim() || ''
  const fbclid = params.get('fbclid')?.trim() || ''
  const utm_id = params.get('utm_id')?.trim() || ''
  const additionalParams = Object.fromEntries(
    Array.from(params.entries()).filter(([key, value]) =>
      !KNOWN_QUERY_KEYS.has(key.toLowerCase()) && EXTRA_UTM_OR_CLICK_ID.test(key) && Boolean(value.trim()),
    ),
  )
  const origin = normalizeDiagnosticOrigin({
    originParam: origemParam,
    utmSource: utm_source,
    utmMedium: utm_medium,
    referrer: input.referrer || '',
    gclid,
    fbclid,
    hasOtherAttributionSignal: Boolean(utm_campaign || utm_content || utm_term || utm_id || Object.keys(additionalParams).length),
    siteHost: input.siteHost || pageUrl.hostname,
  })
  const referrer = parseReferrer(input.referrer || '', input.siteHost || pageUrl.hostname)
  const safeReferrer = referrer?.kind === 'external'
    ? `${referrer.url.origin}/`
    : referrer?.kind === 'internal'
      ? `${referrer.url.origin}${referrer.url.pathname}`
      : ''

  return {
    page: sanitizePageUrl(pageUrl.toString()),
    referrer: safeReferrer,
    capturedAt: new Date().toISOString(),
    origemParam,
    origem: origin.origem,
    suborigem: origin.suborigem,
    sourceClassification: origin.classification,
    referrerHost: origin.referrerHost,
    utm_source,
    utm_medium,
    utm_campaign,
    utm_content,
    utm_term,
    gclid,
    fbclid,
    utm_id,
    additionalParams,
  }
}

function hasAttributionSignal(snapshot: DiagnosticAttributionSnapshot) {
  return Boolean(
    (snapshot.origemParam && hasExplicitOrigin(snapshot.origemParam)) ||
    snapshot.utm_source || snapshot.utm_medium || snapshot.utm_campaign || snapshot.utm_content ||
    snapshot.utm_term || snapshot.gclid || snapshot.fbclid || snapshot.utm_id || snapshot.referrerHost ||
    Object.keys(snapshot.additionalParams).length,
  )
}

function isStoredAttribution(value: unknown): value is StoredDiagnosticAttribution {
  if (!value || typeof value !== 'object' || Array.isArray(value)) return false
  const record = value as Record<string, unknown>
  const isSnapshot = (candidate: unknown) => {
    if (!candidate || typeof candidate !== 'object' || Array.isArray(candidate)) return false
    const snapshot = candidate as Record<string, unknown>
    return typeof snapshot.page === 'string' && typeof snapshot.capturedAt === 'string' &&
      typeof snapshot.sourceClassification === 'string' && typeof snapshot.additionalParams === 'object' &&
      snapshot.additionalParams !== null && !Array.isArray(snapshot.additionalParams)
  }
  return isSnapshot(record.first) && isSnapshot(record.last) &&
    typeof record.currentPage === 'string' && typeof record.diagnosticReferralPage === 'string'
}

export function readDiagnosticAttribution(storage: Pick<Storage, 'getItem'>): StoredDiagnosticAttribution | null {
  try {
    const raw = storage.getItem(DIAGNOSTIC_ATTRIBUTION_SESSION_KEY)
    if (!raw) return null
    const parsed: unknown = JSON.parse(raw)
    return isStoredAttribution(parsed) ? parsed : null
  } catch {
    return null
  }
}

export function captureDiagnosticAttribution(input: {
  storage: Pick<Storage, 'getItem' | 'setItem'>
  href: string
  referrer?: string
  siteHost?: string
  isClientNavigation: boolean
}): StoredDiagnosticAttribution {
  const siteHost = input.siteHost || new URL(input.href, 'https://sermst.com.br').hostname
  const pagePath = pathFromPageUrl(input.href)
  const stored = readDiagnosticAttribution(input.storage)
  const samePageReload = Boolean(stored && pathFromPageUrl(stored.currentPage) === pagePath)
  const effectiveReferrer = input.isClientNavigation || samePageReload ? '' : input.referrer || ''
  const current = buildDiagnosticAttributionSnapshot({ href: input.href, referrer: effectiveReferrer, siteHost })
  const internalReferrerPage = input.isClientNavigation ? '' : getInternalReferralPage(input.referrer || '', siteHost)
  const isDiagnosticPage = pagePath.replace(/\/+$/, '') === '/diagnostico'

  const next: StoredDiagnosticAttribution = stored
    ? {
        first: stored.first,
        last: hasAttributionSignal(current) ? current : stored.last,
        currentPage: pagePath,
        diagnosticReferralPage: isDiagnosticPage && pathFromPageUrl(stored.currentPage).replace(/\/+$/, '') !== '/diagnostico'
          ? pathFromPageUrl(stored.currentPage) || internalReferrerPage
          : stored.diagnosticReferralPage,
      }
    : {
        first: current,
        last: current,
        currentPage: pagePath,
        diagnosticReferralPage: isDiagnosticPage ? internalReferrerPage : '',
      }

  try {
    input.storage.setItem(DIAGNOSTIC_ATTRIBUTION_SESSION_KEY, JSON.stringify(next))
  } catch {
    // Se o navegador bloquear armazenamento de sessão, a captura atual ainda pode ser usada no formulário.
  }

  return next
}

export function buildDiagnosticConversionPageUrl(href: string, referralPage: string) {
  try {
    const url = new URL(href)
    const query = new URLSearchParams()
    for (const [key, value] of url.searchParams.entries()) {
      if ((KNOWN_QUERY_KEYS.has(key.toLowerCase()) || EXTRA_UTM_OR_CLICK_ID.test(key)) && value.trim()) {
        query.append(key, value)
      }
    }
    if (referralPage && referralPage.startsWith('/') && !referralPage.startsWith('//')) {
      query.set('journey_referral_page', referralPage)
    }
    url.search = query.toString()
    url.hash = ''
    return url.toString()
  } catch {
    return href
  }
}
