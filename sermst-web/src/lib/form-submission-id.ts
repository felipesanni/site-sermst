const STORAGE_PREFIX = 'sermst:form-submission:v1:'
const memoryKeys = new Map<string, string>()
const REQUEST_KEY_TTL_MS = 30 * 24 * 60 * 60 * 1000

const NON_BUSINESS_KEYS = new Set([
  'attribution',
  'capturedAt',
  'captured_at',
  'conversion_page',
  'conversionPage',
  'form_started_at',
  'gclid',
  'gclid_first',
  'fbclid',
  'fbclid_first',
  'landing_page',
  'last_referrer',
  'original_referrer',
  'pageUrl',
  'receivedAt',
  'referer',
  'referrer',
  'request',
  'turnstile_token',
  'userAgent',
  'website',
  'cf-turnstile-response',
])

function normalizeScope(scope: string) {
  return scope.toLowerCase().replace(/[^a-z0-9_-]/g, '_').slice(0, 48) || 'form'
}

function businessValue(value: unknown): unknown {
  if (Array.isArray(value)) return value.map(businessValue)
  if (!value || typeof value !== 'object') return value

  return Object.fromEntries(
    Object.entries(value as Record<string, unknown>)
      .filter(([key]) => !NON_BUSINESS_KEYS.has(key) && !/^utm_/i.test(key) && !/^attribution_/i.test(key))
      .sort(([left], [right]) => left.localeCompare(right))
      .map(([key, entry]) => [key, businessValue(entry)]),
  )
}

function serialize(value: unknown) {
  return JSON.stringify(businessValue(value))
}

async function fingerprint(value: unknown) {
  const serialized = serialize(value)
  const cryptoApi = globalThis.crypto

  if (cryptoApi?.subtle && typeof TextEncoder !== 'undefined') {
    const digest = await cryptoApi.subtle.digest('SHA-256', new TextEncoder().encode(serialized))
    return Array.from(new Uint8Array(digest), byte => byte.toString(16).padStart(2, '0')).join('')
  }

  let hash = 2166136261
  for (let index = 0; index < serialized.length; index += 1) {
    hash ^= serialized.charCodeAt(index)
    hash = Math.imul(hash, 16777619)
  }
  return `fallback-${(hash >>> 0).toString(16)}`
}

function createRequestId() {
  const randomId =
    typeof globalThis.crypto?.randomUUID === 'function'
      ? globalThis.crypto.randomUUID()
      : `${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}-${Math.random().toString(36).slice(2)}`

  return `sermst_${randomId}`
}

export async function getFormSubmissionKey(scope: string, payload: unknown) {
  const normalizedScope = normalizeScope(scope)
  const payloadFingerprint = await fingerprint(payload)
  const storageKey = `${STORAGE_PREFIX}${normalizedScope}:${payloadFingerprint}`

  if (typeof window !== 'undefined') {
    try {
      const storedValue = window.localStorage.getItem(storageKey)
      if (storedValue) {
        let stored: { key?: unknown; createdAt?: unknown } | null = null
        try {
          stored = JSON.parse(storedValue) as { key?: unknown; createdAt?: unknown }
        } catch {
          window.localStorage.removeItem(storageKey)
        }
        const createdAt = Number(stored?.createdAt)
        if (
          typeof stored?.key === 'string' &&
          Number.isFinite(createdAt) &&
          Date.now() - createdAt < REQUEST_KEY_TTL_MS
        ) {
          return stored.key
        }
      }

      const requestKey = createRequestId()
      window.localStorage.setItem(storageKey, JSON.stringify({ key: requestKey, createdAt: Date.now() }))
      return requestKey
    } catch {
      // Storage may be unavailable in private browsing; retain retries in memory.
    }
  }

  const existingKey = memoryKeys.get(storageKey)
  if (existingKey) return existingKey

  const requestKey = createRequestId()
  memoryKeys.set(storageKey, requestKey)
  return requestKey
}

export async function clearFormSubmissionKey(scope: string, payload: unknown, requestKey: string) {
  const normalizedScope = normalizeScope(scope)
  const payloadFingerprint = await fingerprint(payload)
  const storageKey = `${STORAGE_PREFIX}${normalizedScope}:${payloadFingerprint}`

  memoryKeys.delete(storageKey)
  if (typeof window === 'undefined') return

  try {
    const storedValue = window.localStorage.getItem(storageKey)
    const stored = storedValue ? JSON.parse(storedValue) as { key?: unknown } : null
    if (stored?.key === requestKey) {
      window.localStorage.removeItem(storageKey)
    }
  } catch {
    // Storage may be unavailable; the current component can still finish safely.
  }
}
