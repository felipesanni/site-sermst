'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  Check,
  CircleHelp,
  LoaderCircle,
  ShieldCheck,
} from 'lucide-react'
import { buildDiagnosticCrmFormAnswers } from '@/lib/diagnostico-crm-fields'
import styles from './diagnostico.module.css'

type DiagnosticClientProps = {
  calendarUrl: string
  privacyUrl: string
}

type CalendlyWindow = Window & {
  Calendly?: {
    initInlineWidget?: (options: { url: string; parentElement: HTMLElement; resize?: boolean }) => void
  }
}

type CalendlyMessage = {
  event?: unknown
  payload?: unknown
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

type AttributionSnapshot = {
  page: string
  referrer: string
  capturedAt: string
  origemParam: string
  origem: string
  suborigem: string
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

type StoredAttribution = {
  first: AttributionSnapshot
  last: AttributionSnapshot
}

type RememberedOpportunity = {
  opportunityId: string
  formAnswers: Record<string, string>
}

type CalendlyReferenceType = 'scheduled_events' | 'scheduled_event_invitees'

const ATTRIBUTION_KEY = 'sermst_diagnostico_attribution_v1'
const DIAGNOSTIC_FORM_STARTED_AT_KEY = 'sermst_diagnostico_form_started_at_v1'
const DIAGNOSTIC_OPPORTUNITY_KEY = 'sermst_diagnostico_opportunity_v1'
const TRACKED_QUERY_KEYS = new Set([
  'origem',
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'gclid',
  'fbclid',
  'utm_id',
])

const employeeOptions = [
  '1 a 10',
  '11 a 20',
  '21 a 50',
  '51 a 100',
  '101 a 250',
  '251 a 500',
  '501 a 1.000',
  'Mais de 1.000',
]

const segmentOptions = [
  'Indústria',
  'Construção',
  'Comércio / Varejo',
  'Serviços',
  'Logística / Transporte',
  'Alimentação / Restaurantes',
  'Saúde',
  'Educação',
  'Call Center / BPO',
  'Tecnologia',
  'Outros',
]

const roleOptions = [
  'Dono / Sócio',
  'Diretoria',
  'RH / DP',
  'Financeiro',
  'Administrativo',
  'SST / SESMT',
  'Gestor / Coordenação',
  'Outro',
]

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function phoneDigits(value: string) {
  const digits = value.replace(/\D/g, '')
  return digits.startsWith('55') && digits.length > 11 ? digits.slice(2) : digits
}

function formatPhone(value: string) {
  const digits = phoneDigits(value).slice(0, 11)
  if (!digits) return ''
  if (digits.length <= 2) return `(${digits}`

  const ddd = digits.slice(0, 2)
  const number = digits.slice(2)
  if (number.length <= 4) return `(${ddd}) ${number}`

  const splitAt = digits.length === 11 ? 5 : 4
  return `(${ddd}) ${number.slice(0, splitAt)}-${number.slice(splitAt)}`
}

function validPhone(value: string) {
  const digits = phoneDigits(value)
  return digits.length >= 10 && digits.length <= 11
}

function foldText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

function deriveOrigin(originParam: string, source: string, medium: string) {
  const originText = foldText(originParam)
  const sourceText = foldText(source)
  const mediumText = foldText(medium)
  const isInstagram = originText.includes('instagram') || sourceText === 'instagram' || !originParam
  const isPaid = originText.includes('pago') || mediumText.includes('paid')
  const isOrganic = originText.includes('organico') || mediumText.includes('organic')

  return {
    origem: isInstagram ? 'Instagram' : originParam,
    suborigem: isPaid ? 'Pago' : isOrganic || isInstagram ? 'Orgânico' : 'Não informado',
  }
}

function buildSnapshot(): AttributionSnapshot {
  const params = new URLSearchParams(window.location.search)
  const origemParam = params.get('origem')?.trim() || ''
  const utm_source = params.get('utm_source')?.trim() || ''
  const utm_medium = params.get('utm_medium')?.trim() || ''
  const additionalParams = Object.fromEntries(
    Array.from(params.entries()).filter(([key]) => !TRACKED_QUERY_KEYS.has(key)),
  )

  return {
    page: window.location.href,
    referrer: document.referrer || '',
    capturedAt: new Date().toISOString(),
    origemParam,
    ...deriveOrigin(origemParam, utm_source, utm_medium),
    utm_source,
    utm_medium,
    utm_campaign: params.get('utm_campaign')?.trim() || '',
    utm_content: params.get('utm_content')?.trim() || '',
    utm_term: params.get('utm_term')?.trim() || '',
    gclid: params.get('gclid')?.trim() || '',
    fbclid: params.get('fbclid')?.trim() || '',
    utm_id: params.get('utm_id')?.trim() || '',
    additionalParams,
  }
}

function hasCampaignSignal(snapshot: AttributionSnapshot) {
  return Boolean(
    snapshot.origemParam ||
      snapshot.utm_source ||
      snapshot.utm_medium ||
      snapshot.utm_campaign ||
      snapshot.utm_content ||
      snapshot.utm_term ||
      snapshot.gclid ||
      snapshot.fbclid ||
      snapshot.utm_id ||
      Object.keys(snapshot.additionalParams).length,
  )
}

function resolveAttribution(): StoredAttribution {
  const current = buildSnapshot()
  let stored: StoredAttribution | null = null

  try {
    const raw = window.localStorage.getItem(ATTRIBUTION_KEY)
    stored = raw ? (JSON.parse(raw) as StoredAttribution) : null
    if (!stored?.first?.capturedAt || !stored?.last?.capturedAt || !stored.first.page || !stored.last.page) stored = null
  } catch {
    stored = null
  }

  const next = stored
    ? hasCampaignSignal(current)
      ? { first: stored.first, last: current }
      : {
          first: stored.first,
          last: { ...stored.last, page: current.page },
        }
    : { first: current, last: current }

  try {
    window.localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(next))
  } catch {
    // Alguns navegadores bloqueiam storage privado; o formulário continua usando o snapshot atual.
  }

  return next
}

function pushDiagnosticEvent(
  event: string,
  attribution: StoredAttribution | null,
  extra: Record<string, unknown> = {},
) {
  if (typeof window === 'undefined') return

  const snapshot = attribution?.last
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event,
    page_path: '/diagnostico',
    origem: snapshot?.origem || 'Instagram',
    suborigem: snapshot?.suborigem || 'Orgânico',
    utm_source: snapshot?.utm_source || '',
    utm_medium: snapshot?.utm_medium || '',
    utm_campaign: snapshot?.utm_campaign || '',
    utm_content: snapshot?.utm_content || '',
    ...extra,
  })
}

function buildCalendarTarget(baseUrl: string, formData: Record<string, FormDataEntryValue>) {
  if (!baseUrl) return ''

  try {
    const target = new URL(baseUrl, window.location.origin)
    if (!['https:', 'http:'].includes(target.protocol)) return ''
    const name = String(formData.nome || '').trim()
    const email = String(formData.email || '').trim()
    const telefone = String(formData.telefone || '').trim()

    // Calendários que aceitam os parâmetros comuns já abrem com os dados preenchidos.
    if (name && !target.searchParams.has('name')) target.searchParams.set('name', name)
    if (email && !target.searchParams.has('email')) target.searchParams.set('email', email)
    if (telefone && !target.searchParams.has('phone')) target.searchParams.set('phone', telefone)

    return target.toString()
  } catch {
    return ''
  }
}

function rememberOpportunityId(opportunityId: string, formAnswers: Record<string, string>): RememberedOpportunity {
  const remembered = { opportunityId, formAnswers }

  try {
    window.sessionStorage.setItem(DIAGNOSTIC_OPPORTUNITY_KEY, JSON.stringify({
      ...remembered,
      capturedAt: new Date().toISOString(),
    }))
  } catch {
    // O agendamento continua funcionando mesmo quando o armazenamento da sessão está bloqueado.
  }

  return remembered
}

function readRememberedOpportunity() : RememberedOpportunity | null {
  try {
    const stored = window.sessionStorage.getItem(DIAGNOSTIC_OPPORTUNITY_KEY)
    const parsed = stored ? JSON.parse(stored) as { opportunityId?: unknown; formAnswers?: unknown } : null
    if (typeof parsed?.opportunityId !== 'string' || !parsed.opportunityId.trim()) return null
    const formAnswers = parsed.formAnswers && typeof parsed.formAnswers === 'object' && !Array.isArray(parsed.formAnswers)
      ? Object.fromEntries(Object.entries(parsed.formAnswers).filter((entry): entry is [string, string] => typeof entry[1] === 'string'))
      : {}
    return { opportunityId: parsed.opportunityId, formAnswers }
  } catch {
    return null
  }
}

function normalizeScheduledDate(value: unknown) {
  if (typeof value !== 'string' || !value.trim() || !/[T ]\d{2}:\d{2}/.test(value)) return ''
  const timestamp = Date.parse(value)
  return Number.isFinite(timestamp) ? new Date(timestamp).toISOString() : ''
}

function extractScheduledDate(value: unknown, depth = 0): string {
  if (depth > 4 || !value) return ''
  if (typeof value === 'string') return normalizeScheduledDate(value)
  if (typeof value !== 'object') return ''
  if (Array.isArray(value)) {
    for (const item of value) {
      const result = extractScheduledDate(item, depth + 1)
      if (result) return result
    }
    return ''
  }

  const record = value as Record<string, unknown>
  for (const key of ['start_time', 'startTime', 'date_time', 'dateTime', 'date_and_time', 'dateAndTime', 'data_reuniao', 'scheduled_at', 'scheduledAt']) {
    const result = normalizeScheduledDate(record[key])
    if (result) return result
  }

  for (const key of ['event', 'scheduled_event', 'scheduledEvent', 'details', 'data', 'payload']) {
    const result = extractScheduledDate(record[key], depth + 1)
    if (result) return result
  }

  return ''
}

function extractScheduledDateFromUrl(value: unknown): string {
  if (typeof value !== 'string') return ''

  let decoded = value
  try {
    decoded = decodeURIComponent(value)
  } catch {
    // Mantém o valor original quando a URL contém uma sequência incompleta.
  }

  const match = decoded.match(/(?:\/|date=)(\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2})?(?:Z|[+-]\d{2}:\d{2}))/)
  return match ? normalizeScheduledDate(match[1]) : ''
}

function extractCalendlyUri(value: unknown, type: CalendlyReferenceType, depth = 0): string {
  if (depth > 5 || !value) return ''

  if (typeof value === 'string') {
    try {
      const parsed = new URL(value)
      if (parsed.protocol !== 'https:' || parsed.hostname !== 'api.calendly.com') return ''
      const expectedPath = type === 'scheduled_events' ? '/scheduled_events/' : '/scheduled_event_invitees/'
      return parsed.pathname.startsWith(expectedPath) ? parsed.toString() : ''
    } catch {
      return ''
    }
  }

  if (typeof value !== 'object') return ''
  if (Array.isArray(value)) {
    for (const item of value) {
      const result = extractCalendlyUri(item, type, depth + 1)
      if (result) return result
    }
    return ''
  }

  const record = value as Record<string, unknown>
  for (const key of ['uri', 'event', 'scheduled_event', 'scheduledEvent', 'invitee', 'scheduled_event_invitee', 'scheduledEventInvitee', 'payload', 'data']) {
    const result = extractCalendlyUri(record[key], type, depth + 1)
    if (result) return result
  }

  return ''
}

function FieldLabel({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor}>
      {children} <span className={styles.requiredMark}>*</span>
    </label>
  )
}

export function DiagnosticoClient({ calendarUrl, privacyUrl }: DiagnosticClientProps) {
  const [attribution, setAttribution] = useState<StoredAttribution | null>(null)
  const [conversionPage, setConversionPage] = useState('')
  const [formStartedAt, setFormStartedAt] = useState('')
  const [step, setStep] = useState<1 | 2>(1)
  const formRef = useRef<HTMLFormElement>(null)
  const stepHeadingRef = useRef<HTMLHeadingElement>(null)
  const stepChangedRef = useRef(false)
  const [employeeBand, setEmployeeBand] = useState('')
  const [phoneValue, setPhoneValue] = useState('')
  const [status, setStatus] = useState<FormStatus>('idle')
  const [error, setError] = useState('')
  const [scheduleTarget, setScheduleTarget] = useState('')
  const formStartTrackedRef = useRef(false)
  const pageViewTrackedRef = useRef(false)
  const scheduleViewTrackedRef = useRef(false)
  const scheduleCompletedRef = useRef(false)
  const selectedScheduledDateRef = useRef('')
  const rememberedOpportunityRef = useRef<RememberedOpportunity | null>(null)
  const successRef = useRef<HTMLDivElement>(null)
  const calendarEmbedRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (status === 'success') successRef.current?.focus()
  }, [status])

  useEffect(() => {
    const next = resolveAttribution()
    const startedAt = String(Date.now())

    try {
      const storedStartedAt = window.sessionStorage.getItem(DIAGNOSTIC_FORM_STARTED_AT_KEY)
      const effectiveStartedAt = storedStartedAt || startedAt
      if (!storedStartedAt) {
        window.sessionStorage.setItem(DIAGNOSTIC_FORM_STARTED_AT_KEY, startedAt)
      }
      setFormStartedAt(effectiveStartedAt)
    } catch {
      setFormStartedAt(startedAt)
    }

    setAttribution(next)
    setConversionPage(window.location.href)
    if (!pageViewTrackedRef.current) {
      pushDiagnosticEvent('diagnostico_page_view', next)
      pageViewTrackedRef.current = true
    }
  }, [])

  function trackFormStart() {
    if (formStartTrackedRef.current) return
    formStartTrackedRef.current = true
    pushDiagnosticEvent('diagnostico_form_start', attribution)
  }

  useEffect(() => {
    if (stepChangedRef.current) stepHeadingRef.current?.focus()
  }, [step])

  function changeStep(next: 1 | 2) {
    stepChangedRef.current = true
    setStep(next)
    setStatus('idle')
    setError('')
  }

  function validateStep(which: 1 | 2) {
    const fields = formRef.current?.querySelectorAll<HTMLInputElement | HTMLSelectElement>(`[data-step="${which}"] [required]`)
    if (!fields) return false
    for (const field of fields) {
      const value = field.value.trim()
      const message = !value
        ? 'Preencha este campo.'
        : field.name === 'email' && !EMAIL_PATTERN.test(value)
          ? 'Confira o e-mail informado.'
          : field.name === 'telefone' && !validPhone(value)
            ? 'Informe um telefone válido com DDD.'
            : ''
      field.setCustomValidity(message)
      if (!field.checkValidity() || message) {
        field.reportValidity()
        field.focus()
        return false
      }
    }
    return true
  }

  function trackCta(placement: string) {
    pushDiagnosticEvent('diagnostico_cta_click', attribution, { placement })
  }

  useEffect(() => {
    if (!scheduleTarget || !calendarEmbedRef.current) return

    const parentElement = calendarEmbedRef.current
    let observedIframe: HTMLIFrameElement | null = null
    let observer: MutationObserver | null = null
    let scriptElement = document.querySelector<HTMLScriptElement>('script[src="https://assets.calendly.com/assets/external/widget.js"]')
    let scriptLoadHandler: (() => void) | null = null

    const trackScheduleView = () => {
      if (scheduleViewTrackedRef.current) return
      scheduleViewTrackedRef.current = true
      pushDiagnosticEvent('diagnostico_schedule_view', attribution)
    }

    const handleCalendlyMessage = (messageEvent: MessageEvent<CalendlyMessage>) => {
      if (messageEvent.origin !== 'https://calendly.com' || typeof messageEvent.data?.event !== 'string') return

      const scheduledDate = extractScheduledDate(messageEvent.data)
      if (messageEvent.data.event === 'calendly.date_and_time_selected') {
        selectedScheduledDateRef.current = scheduledDate || extractScheduledDateFromUrl(observedIframe?.src)
        return
      }
      if (messageEvent.data.event !== 'calendly.event_scheduled') return
      if (scheduleCompletedRef.current) return

      scheduleCompletedRef.current = true
      const dataReuniao = scheduledDate || selectedScheduledDateRef.current || extractScheduledDateFromUrl(observedIframe?.src)
      const calendlyEventUri = extractCalendlyUri(messageEvent.data, 'scheduled_events')
      const calendlyInviteeUri = extractCalendlyUri(messageEvent.data, 'scheduled_event_invitees')
      pushDiagnosticEvent('diagnostico_schedule_complete', attribution, {
        ...(dataReuniao ? { data_reuniao: dataReuniao } : {}),
        calendly_event_reference: calendlyEventUri ? 'received' : 'missing',
      })

      const rememberedOpportunity = rememberedOpportunityRef.current || readRememberedOpportunity()
      if (!rememberedOpportunity?.opportunityId || (!dataReuniao && !calendlyEventUri && !calendlyInviteeUri)) {
        pushDiagnosticEvent('diagnostico_schedule_update_pending', attribution, {
          reason: !rememberedOpportunity?.opportunityId ? 'opportunity_id_missing' : 'scheduled_date_missing',
        })
        return
      }

      void fetch('/api/diagnostico/agendamento', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          opportunityId: rememberedOpportunity.opportunityId,
          ...(dataReuniao ? { data_reuniao: dataReuniao } : {}),
          ...(calendlyEventUri ? { calendlyEventUri } : {}),
          ...(calendlyInviteeUri ? { calendlyInviteeUri } : {}),
          formAnswers: rememberedOpportunity.formAnswers,
        }),
        signal: AbortSignal.timeout(10000),
      }).then(async response => {
        if (!response.ok) throw new Error('schedule_update_failed')
        const result = await response.json().catch(() => ({})) as { data_reuniao?: string }
        pushDiagnosticEvent('diagnostico_opportunity_updated', attribution, {
          opportunity_id: rememberedOpportunity.opportunityId,
          data_reuniao: result.data_reuniao || dataReuniao || '',
        })
      }).catch(() => {
        pushDiagnosticEvent('diagnostico_schedule_update_error', attribution, {
          opportunity_id: rememberedOpportunity.opportunityId,
        })
      })
    }

    window.addEventListener('message', handleCalendlyMessage)

    const attachIframeTracking = () => {
      const iframe = parentElement.querySelector('iframe')
      if (!iframe || iframe === observedIframe) return Boolean(iframe)
      observedIframe = iframe
      iframe.addEventListener('load', trackScheduleView, { once: true })
      return true
    }

    const initializeWidget = () => {
      const calendly = (window as CalendlyWindow).Calendly
      if (!calendly?.initInlineWidget) return
      calendly.initInlineWidget({ url: scheduleTarget, parentElement, resize: true })
      attachIframeTracking()
    }

    parentElement.replaceChildren()
    observer = new MutationObserver(() => {
      if (attachIframeTracking()) observer?.disconnect()
    })
    observer.observe(parentElement, { childList: true, subtree: true })

    if ((window as CalendlyWindow).Calendly?.initInlineWidget) {
      initializeWidget()
    } else {
      if (!scriptElement) {
        scriptElement = document.createElement('script')
        scriptElement.src = 'https://assets.calendly.com/assets/external/widget.js'
        scriptElement.async = true
        document.body.appendChild(scriptElement)
      }
      scriptLoadHandler = initializeWidget
      scriptElement.addEventListener('load', scriptLoadHandler)
    }

    return () => {
      window.removeEventListener('message', handleCalendlyMessage)
      observer?.disconnect()
      if (scriptElement && scriptLoadHandler) scriptElement.removeEventListener('load', scriptLoadHandler)
      parentElement.replaceChildren()
    }
  }, [attribution, scheduleTarget])

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'submitting') return

    if (step === 1) {
      if (validateStep(1)) {
        pushDiagnosticEvent('diagnostico_form_step_complete', attribution, { step: 1 })
        changeStep(2)
      }
      return
    }
    if (!validateStep(1)) { changeStep(1); return }
    if (!validateStep(2)) return

    const form = event.currentTarget
    const formData = new FormData(form)
    const payload = Object.fromEntries(formData.entries())
    const nationalPhoneDigits = phoneDigits(String(payload.telefone || ''))
    const normalizedPhone = nationalPhoneDigits ? `+55${nationalPhoneDigits}` : ''
    payload.telefone = normalizedPhone

    if (nationalPhoneDigits.length < 10 || nationalPhoneDigits.length > 11) {
      setStatus('error')
      setError('Informe um telefone válido com DDD.')
      form.querySelector<HTMLInputElement>('[name="telefone"]')?.focus()
      return
    }

    setStatus('submitting')
    setError('')

    try {
      const response = await fetch('/api/diagnostico', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
        signal: AbortSignal.timeout(20000),
      })
      const data = (await response.json().catch(() => ({}))) as {
        error?: string
        calendarUrl?: string
        opportunityId?: string | null
      }

      if (!response.ok) {
        throw new Error(data.error || 'Não foi possível registrar seus dados.')
      }

      const questionnaireAnswers = buildDiagnosticCrmFormAnswers({
        funcionarios_clt: 'Sim',
        quant_funcionarios_clt: String(payload.funcionarios_clt || ''),
        necessita_contrato: 'Sim',
        necessita_reuniao: 'Sim',
        prestador_sst: String(payload.prestador_sst || ''),
        segmento: String(payload.segmento || ''),
      })

      if (data.opportunityId) {
        rememberedOpportunityRef.current = rememberOpportunityId(data.opportunityId, questionnaireAnswers)
      } else {
        rememberedOpportunityRef.current = null
        try { window.sessionStorage.removeItem(DIAGNOSTIC_OPPORTUNITY_KEY) } catch { /* storage bloqueado */ }
      }

      const destination = buildCalendarTarget(data.calendarUrl || calendarUrl, payload)
      pushDiagnosticEvent('diagnostico_form_submit', attribution, {
        lead_type: 'diagnostico-sst',
        funcionarios_clt: payload.funcionarios_clt,
        prestador_sst: payload.prestador_sst,
        segmento: payload.segmento,
        cargo: payload.cargo,
      })

      if (destination) {
        setScheduleTarget(destination)
      }

      setStatus('success')
      form.reset()
      setEmployeeBand('')
      setPhoneValue('')
    } catch (submitError) {
      setStatus('error')
      pushDiagnosticEvent('diagnostico_form_error', attribution, { reason: 'submission_failed' })
      setError(submitError instanceof Error && submitError.name !== 'TimeoutError' && submitError.name !== 'TypeError' ? submitError.message : 'A conexão demorou a responder. Seus campos foram mantidos; tente enviar novamente.')
    }
  }

  return (
    <div className={`${styles.page} diagnostico-page`}>
      <section className={styles.hero} aria-labelledby="diagnostico-title">
        <div className={styles.heroCopy}>
          <span className={styles.eyebrow}><span aria-hidden="true" /> SERMST · Diagnóstico gratuito de SST</span>
          <h1 id="diagnostico-title">Sua operação de SST pode estar custando mais e dando mais trabalho do que deveria.</h1>
          <p className={styles.heroText}>Faça um diagnóstico gratuito da sua operação de Saúde e Segurança do Trabalho. Identifique custos, gargalos e riscos que merecem atenção e saiba por onde começar.</p>
          <a className={styles.primaryCta} href="#diagnostico-form" onClick={() => trackCta('hero')}>Quero meu diagnóstico gratuito <ArrowDown size={18} aria-hidden="true" /></a>
          <div className={styles.heroNote}>
            <span className={styles.noteMark} aria-hidden="true">↳</span>
            <p>Uma conversa prática com quem entende de SST e conhece a <strong>realidade de quem administra uma empresa.</strong></p>
          </div>
        </div>

        <section id="diagnostico-form" className={styles.formCard} aria-label="Solicitação de diagnóstico">
          {status === 'success' ? (
            <div className={styles.successCard} role="status" tabIndex={-1} ref={successRef}>
              <span className={styles.successIcon}><Check size={30} aria-hidden="true" /></span>
              <span className={styles.kicker}>Solicitação recebida</span>
              <h2>{scheduleTarget ? 'Agora, escolha o melhor horário.' : 'Seu diagnóstico foi solicitado.'}</h2>
              <p>{scheduleTarget ? 'Estamos abrindo a agenda para você conversar com nosso time.' : 'Nosso time entrará em contato para combinar o horário da conversa.'}</p>
              {scheduleTarget && <div ref={calendarEmbedRef} className={styles.calendarEmbed} aria-label="Agenda do diagnóstico">
                <p className={styles.calendarLoading}>Carregando agenda...</p>
              </div>}
            </div>
          ) : (
            <>
              <ol className={styles.progress} aria-label="Etapas do formulário">
                <li aria-current={step === 1 ? 'step' : undefined} data-done={step === 2}><span>{step === 2 ? <Check size={13} aria-hidden="true" /> : '1'}</span> Sua empresa</li>
                <li aria-current={step === 2 ? 'step' : undefined}><span>2</span> Seu contato</li>
              </ol>
              <h2 className={styles.formTitle} ref={stepHeadingRef} tabIndex={-1}>{step === 1 ? 'Solicite seu diagnóstico' : 'Com quem vamos conversar?'}</h2>
              <p className={styles.formIntro}>{step === 1 ? '2 etapas. Depois, escolha um horário.' : 'Última etapa: seu contato para solicitar a conversa.'}</p>
              <form ref={formRef} className={styles.form} noValidate onSubmit={onSubmit} onChange={event => {
                const field = event.target
                if (field instanceof HTMLInputElement || field instanceof HTMLSelectElement) field.setCustomValidity('')
                trackFormStart()
              }} aria-busy={status === 'submitting'}>
                <fieldset data-step="1" hidden={step !== 1} disabled={status === 'submitting'}>
                  <legend className={styles.srOnly}>Sua empresa</legend>
                  <div className={styles.field}>
                    <FieldLabel htmlFor="diagnostico-empresa">Empresa</FieldLabel>
                    <input id="diagnostico-empresa" name="empresa" required autoComplete="organization" maxLength={240} placeholder="Nome da sua empresa" />
                  </div>
                  <div className={styles.field}>
                    <FieldLabel htmlFor="diagnostico-funcionarios">Funcionários CLT</FieldLabel>
                    <select id="diagnostico-funcionarios" name="funcionarios_clt" required value={employeeBand} onChange={event => setEmployeeBand(event.target.value)}>
                      <option value="" disabled>Selecione uma faixa</option>
                      {employeeOptions.map(option => <option key={option}>{option}</option>)}
                    </select>
                  </div>
                  <div className={styles.field}>
                    <FieldLabel htmlFor="diagnostico-prestador">Já possui fornecedor de SST?</FieldLabel>
                    <select id="diagnostico-prestador" name="prestador_sst" required defaultValue="">
                      <option value="" disabled>Selecione uma opção</option>
                      <option>Sim</option><option>Não</option><option>Não sei informar</option>
                    </select>
                  </div>
                  <div className={styles.field}>
                    <FieldLabel htmlFor="diagnostico-segmento">Segmento da empresa</FieldLabel>
                    <select id="diagnostico-segmento" name="segmento" required defaultValue="">
                      <option value="" disabled>Selecione o segmento</option>
                      {segmentOptions.map(option => <option key={option}>{option}</option>)}
                    </select>
                  </div>
                </fieldset>
                <fieldset data-step="2" hidden={step !== 2} disabled={status === 'submitting'}>
                  <legend className={styles.srOnly}>Seu contato</legend>
                  <div className={styles.field}>
                    <FieldLabel htmlFor="diagnostico-nome">Nome completo</FieldLabel>
                    <input id="diagnostico-nome" name="nome" required autoComplete="name" maxLength={240} placeholder="Como podemos chamar você?" />
                  </div>
                  <div className={styles.field}>
                    <FieldLabel htmlFor="diagnostico-cargo">Cargo / função</FieldLabel>
                    <select id="diagnostico-cargo" name="cargo" required defaultValue="">
                      <option value="" disabled>Selecione seu cargo</option>
                      {roleOptions.map(option => <option key={option}>{option}</option>)}
                    </select>
                  </div>
                  <div className={styles.field}>
                    <FieldLabel htmlFor="diagnostico-telefone">WhatsApp / telefone</FieldLabel>
                    <input id="diagnostico-telefone" name="telefone" type="tel" required inputMode="tel" autoComplete="tel" placeholder="(11) 99999-9999" maxLength={15} value={phoneValue} onChange={event => setPhoneValue(formatPhone(event.target.value))} />
                  </div>
                  <div className={styles.field}>
                    <FieldLabel htmlFor="diagnostico-email">E-mail</FieldLabel>
                    <input id="diagnostico-email" name="email" type="email" required autoComplete="email" placeholder="voce@empresa.com.br" maxLength={240} pattern={EMAIL_PATTERN.source} title="Informe um e-mail válido, como voce@empresa.com.br" />
                  </div>
                </fieldset>
                {status === 'error' && <div className={styles.errorMessage} role="alert"><CircleHelp size={18} aria-hidden="true" /><span><strong>Não conseguimos enviar.</strong> {error}</span></div>}
                  <input type="hidden" name="lead_type" value="diagnostico-sst" />
                  <input type="hidden" name="porte" value={employeeBand} />
                  <input type="hidden" name="dor" value="diagnostico-sst" />
                  <input type="hidden" name="origem" value={attribution?.last.origemParam || ''} />
                  <input type="hidden" name="landing_page" value={attribution?.first.page || ''} />
                  <input type="hidden" name="conversion_page" value={conversionPage} />
                  <input type="hidden" name="original_referrer" value={attribution?.first.referrer || ''} />
                  <input type="hidden" name="form_started_at" value={formStartedAt} />
                  <input type="hidden" name="utm_source" value={attribution?.last.utm_source || ''} />
                  <input type="hidden" name="utm_medium" value={attribution?.last.utm_medium || ''} />
                  <input type="hidden" name="utm_campaign" value={attribution?.last.utm_campaign || ''} />
                  <input type="hidden" name="utm_content" value={attribution?.last.utm_content || ''} />
                  <input type="hidden" name="utm_term" value={attribution?.last.utm_term || ''} />
                  <input type="hidden" name="gclid" value={attribution?.last.gclid || ''} />
                  <input type="hidden" name="fbclid" value={attribution?.last.fbclid || ''} />
                  <input type="hidden" name="utm_id" value={attribution?.last.utm_id || ''} />
                  <input type="hidden" name="utm_source_first" value={attribution?.first.utm_source || ''} />
                  <input type="hidden" name="utm_medium_first" value={attribution?.first.utm_medium || ''} />
                  <input type="hidden" name="utm_campaign_first" value={attribution?.first.utm_campaign || ''} />
                  <input type="hidden" name="utm_content_first" value={attribution?.first.utm_content || ''} />
                  <input type="hidden" name="utm_term_first" value={attribution?.first.utm_term || ''} />
                  <input type="hidden" name="gclid_first" value={attribution?.first.gclid || ''} />
                  <input type="hidden" name="fbclid_first" value={attribution?.first.fbclid || ''} />
                  <input type="hidden" name="utm_id_first" value={attribution?.first.utm_id || ''} />
                  <input type="hidden" name="attribution_first_captured_at" value={attribution?.first.capturedAt || ''} />
                  <input type="hidden" name="attribution_last_captured_at" value={attribution?.last.capturedAt || ''} />
                  <input type="hidden" name="attribution_additional" value={JSON.stringify(attribution?.last.additionalParams || {})} />
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" hidden aria-hidden="true" />
                <button className={styles.submitButton} type="submit" disabled={status === 'submitting'}>
                  {status === 'submitting' ? <><LoaderCircle size={18} className="animate-spin" aria-hidden="true" /> Enviando solicitação...</> : step === 1 ? <>Continuar para meu contato <ArrowRight size={18} aria-hidden="true" /></> : <>Agendar meu diagnóstico <ArrowRight size={18} aria-hidden="true" /></>}
                </button>
                {step === 1 ? <p className={styles.formFootnote}><ShieldCheck size={14} aria-hidden="true" /> Sem documentos ou informações financeiras.</p> : <>
                  <button className={styles.backButton} type="button" onClick={() => changeStep(1)} disabled={status === 'submitting'}>← Voltar aos dados da empresa</button>
                </>}
              </form>
            </>
          )}
        </section>
      </section>

      <section className={styles.promiseStrip} aria-label="Proposta da conversa">
        <p><strong>Primeiro, entender.</strong> Depois, decidir.</p>
        <span>Custos · Riscos · Operação</span>
      </section>

      <section className={styles.scope} aria-labelledby="scope-title">
        <div className={styles.scopeIntro}>
          <span className={styles.kicker}>O que vale colocar na mesa</span>
          <h2 id="scope-title">O problema nem sempre está na conta. <em>Às vezes, está na rotina.</em></h2>
          <p>Você não precisa dominar Saúde e Segurança do Trabalho. Mas precisa entender pelo que paga, o que está coberto e o que continua sobrando para sua equipe.</p>
        </div>
        <div className={styles.scopeRows}>
          {[
            ['01', 'O custo faz sentido?', 'Vamos avaliar se gastos e exames merecem uma segunda análise. Economizar só é bom quando não deixa sua empresa exposta.'],
            ['02', 'O que pode estar passando?', 'Documentos, exames, vencimentos e obrigações: entender quais pontos precisam de atenção e o que já está bem cuidado.'],
            ['03', 'Onde o trabalho emperra?', 'Admissões demoradas, pedidos de exame e retrabalho. Olhar o que toma tempo de você, do RH e do DP.'],
            ['04', 'Seu fornecedor acompanha?', 'Ver se a estrutura atual atende sua operação. Reconhecer o que funciona também faz parte do diagnóstico.'],
          ].map(([number, title, text]) => <article key={number} className={styles.scopeRow}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}
        </div>
      </section>

      <section className={styles.manifesto} aria-labelledby="manifesto-title">
        <span className={styles.kicker}>Nosso compromisso com a conversa</span>
        <h2 id="manifesto-title">“Se estiver tudo certo,<br /><em>vamos dizer que está tudo certo.</em>”</h2>
        <p>Você não precisa chegar querendo trocar de fornecedor. A SERMST começa entendendo sua operação e o que já funciona. Se houver espaço para melhorar, conversamos sobre ele. A decisão é sua.</p>
        <span className={styles.signature}>SERMST <span>Gestão Ocupacional</span></span>
      </section>

      <section className={styles.closing} aria-labelledby="closing-title">
        <div><span className={styles.kicker}>Antes de solicitar</span><h2 id="closing-title">Uma conversa prática.<br />Sem chegar com tudo pronto.</h2>
          <a className={styles.primaryCta} href="#diagnostico-form" onClick={() => trackCta('closing')}>Solicitar diagnóstico gratuito <ArrowRight size={18} aria-hidden="true" /></a>
        </div>
        <div className={styles.faq}>
          <details open><summary>O que acontece no diagnóstico?</summary><p>Um especialista conversa com você sobre a operação atual, esclarece dúvidas e aponta o que merece atenção. Se for preciso aprofundar a análise de documentos, combinamos o próximo passo.</p></details>
          <details><summary>Preciso enviar documentos antes?</summary><p>Não. Começamos pela conversa. Você não precisa informar CNPJ, faturamento ou quanto paga ao fornecedor neste formulário.</p></details>
          <details><summary>Já tenho fornecedor. Faz sentido participar?</summary><p>Sim. A proposta é uma segunda visão sobre sua operação, sem compromisso de troca. Se o trabalho atual estiver bem feito, isso será reconhecido.</p></details>
          <details><summary>Minha empresa é pequena. Posso solicitar?</summary><p>Sim. O diagnóstico é para empresas com funcionários. O número de pessoas ajuda a entender sua estrutura e não impede a solicitação.</p></details>
        </div>
      </section>

      <footer className={styles.footer}><span>SERMST Gestão Ocupacional</span><div><a href={privacyUrl}>Política de Privacidade</a><span>© {new Date().getFullYear()} SERMST</span></div></footer>
    </div>
  )
}
