import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import {
  buildDiagnosticCrmFormAnswers,
  DIAGNOSTICO_CRM_SCHEDULING_STAGE_ID,
} from '@/lib/diagnostico-crm-fields'

export const runtime = 'nodejs'

const JSON_HEADERS = { 'Content-Type': 'application/json; charset=utf-8' } as const
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()
const RATE_LIMIT = 5
const WINDOW_MS = 60_000
const MIN_SUBMIT_MS = 4_000
const SCHEDULING_STAGE_ID = process.env.DIAGNOSTICO_SCHEDULING_STAGE_ID || DIAGNOSTICO_CRM_SCHEDULING_STAGE_ID

type DiagnosticPayload = {
  nome?: string
  empresa?: string
  telefone?: string
  email?: string
  funcionarios_clt?: string
  prestador_sst?: string
  segmento?: string
  cargo?: string
  origem?: string
  lead_type?: string
  porte?: string
  dor?: string
  website?: string
  landing_page?: string
  conversion_page?: string
  original_referrer?: string
  form_started_at?: string
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_content?: string
  utm_term?: string
  gclid?: string
  fbclid?: string
  utm_id?: string
  utm_source_first?: string
  utm_medium_first?: string
  utm_campaign_first?: string
  utm_content_first?: string
  utm_term_first?: string
  gclid_first?: string
  fbclid_first?: string
  utm_id_first?: string
  attribution_first_captured_at?: string
  attribution_last_captured_at?: string
  attribution_additional?: string
}

const EMPLOYEE_BANDS = new Set([
  '1 a 10',
  '11 a 20',
  '21 a 50',
  '51 a 100',
  '101 a 250',
  '251 a 500',
  '501 a 1.000',
  'Mais de 1.000',
])

const PRESTADOR_OPTIONS = new Set(['Sim', 'Não', 'Não sei informar'])
const SEGMENT_OPTIONS = new Set([
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
])
const ROLE_OPTIONS = new Set([
  'Dono / Sócio',
  'Diretoria',
  'RH / DP',
  'Financeiro',
  'Administrativo',
  'SST / SESMT',
  'Gestor / Coordenação',
  'Outro',
])

function jsonResponse(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: JSON_HEADERS })
}

function checkRateLimit(ip: string) {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + WINDOW_MS })
    return true
  }

  if (entry.count >= RATE_LIMIT) return false
  entry.count += 1
  return true
}

function required(value: unknown) {
  return typeof value === 'string' && value.trim().length > 0
}

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
}

function isPhone(value: string) {
  const raw = value.replace(/\D/g, '')
  const digits = raw.startsWith('55') && raw.length > 11 ? raw.slice(2) : raw
  return digits.length >= 10 && digits.length <= 11
}

function normalizePhone(value: string) {
  const raw = value.replace(/\D/g, '')
  const digits = raw.startsWith('55') && raw.length > 11 ? raw.slice(2) : raw
  return `+55${digits}`
}

function foldText(value: string) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
}

function normalizeOrigin(originParam: string, source: string, medium: string) {
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

function parseAdditionalParams(value: string | undefined) {
  if (!value) return {}

  try {
    const parsed = JSON.parse(value) as unknown
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {}
    return parsed as Record<string, string>
  } catch {
    return {}
  }
}

function escapeHtml(value: unknown) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function buildDiagnosticLead(data: DiagnosticPayload, request: Request) {
  const receivedAt = new Date().toISOString()
  const origemParam = String(data.origem || '').trim()
  const utmSource = String(data.utm_source || '').trim()
  const utmMedium = String(data.utm_medium || '').trim()
  const origin = normalizeOrigin(origemParam, utmSource, utmMedium)

  return {
    lead_type: 'diagnostico-sst',
    nome: String(data.nome || '').trim(),
    empresa: String(data.empresa || '').trim(),
    telefone: normalizePhone(String(data.telefone || '').trim()),
    email: String(data.email || '').trim().toLowerCase(),
    funcionarios_clt: String(data.funcionarios_clt || '').trim(),
    prestador_sst: String(data.prestador_sst || '').trim(),
    segmento: String(data.segmento || '').trim(),
    cargo: String(data.cargo || '').trim(),
    origem: origin.origem,
    suborigem: origin.suborigem,
    origem_parametro: origemParam,
    attribution: {
      landing_page: String(data.landing_page || '').trim(),
      conversion_page: String(data.conversion_page || '').trim(),
      original_referrer: String(data.original_referrer || '').trim(),
      first_touch: {
        utm_source: String(data.utm_source_first || '').trim(),
        utm_medium: String(data.utm_medium_first || '').trim(),
        utm_campaign: String(data.utm_campaign_first || '').trim(),
        utm_content: String(data.utm_content_first || '').trim(),
        utm_term: String(data.utm_term_first || '').trim(),
        gclid: String(data.gclid_first || '').trim(),
        fbclid: String(data.fbclid_first || '').trim(),
        utm_id: String(data.utm_id_first || '').trim(),
        captured_at: String(data.attribution_first_captured_at || '').trim(),
      },
      last_touch: {
        origem: origin.origem,
        suborigem: origin.suborigem,
        origem_parametro: origemParam,
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: String(data.utm_campaign || '').trim(),
        utm_content: String(data.utm_content || '').trim(),
        utm_term: String(data.utm_term || '').trim(),
        gclid: String(data.gclid || '').trim(),
        fbclid: String(data.fbclid || '').trim(),
        utm_id: String(data.utm_id || '').trim(),
        captured_at: String(data.attribution_last_captured_at || '').trim(),
      },
      additional_params: parseAdditionalParams(data.attribution_additional),
    },
    received_at: receivedAt,
    request: {
      user_agent: request.headers.get('user-agent') || '',
      referer: request.headers.get('referer') || '',
    },
  }
}

function buildCrmApiLead(lead: ReturnType<typeof buildDiagnosticLead>) {
  const lastTouch = lead.attribution.last_touch
  const formAnswers = buildDiagnosticCrmFormAnswers({
    funcionarios_clt: 'Sim',
    quant_funcionarios_clt: lead.funcionarios_clt,
    necessita_contrato: 'Sim',
    necessita_reuniao: 'Sim',
    prestador_sst: lead.prestador_sst,
    segmento: lead.segmento,
  })

  return {
    name: lead.nome,
    phone: lead.telefone,
    email: lead.email,
    company: lead.empresa,
    title: `Diagnóstico de SST | ${lead.empresa}`,
    value: 0,
    ...(lead.origem_parametro ? { leadSource: lead.origem_parametro } : {}),
    pageUrl: lead.attribution.conversion_page || lead.attribution.landing_page,
    ...formAnswers,
    cargo: lead.cargo,
    utm_source: lastTouch.utm_source || 'sermst-diagnostico',
    utm_medium: lastTouch.utm_medium,
    utm_campaign: lastTouch.utm_campaign,
    utm_content: lastTouch.utm_content,
    utm_term: lastTouch.utm_term,
    utm_id: lastTouch.utm_id,
    gclid: lastTouch.gclid,
    fbclid: lastTouch.fbclid,
  }
}

function extractOpportunityId(payload: unknown): string {
  if (!payload || typeof payload !== 'object' || Array.isArray(payload)) return ''

  const record = payload as Record<string, unknown>
  const data = record.data && typeof record.data === 'object' && !Array.isArray(record.data)
    ? record.data as Record<string, unknown>
    : null
  const result = record.result && typeof record.result === 'object' && !Array.isArray(record.result)
    ? record.result as Record<string, unknown>
    : null
  const opportunity = record.opportunity && typeof record.opportunity === 'object' && !Array.isArray(record.opportunity)
    ? record.opportunity as Record<string, unknown>
    : null
  const dataOpportunity = data?.opportunity && typeof data.opportunity === 'object' && !Array.isArray(data.opportunity)
    ? data.opportunity as Record<string, unknown>
    : null
  const resultOpportunity = result?.opportunity && typeof result.opportunity === 'object' && !Array.isArray(result.opportunity)
    ? result.opportunity as Record<string, unknown>
    : null

  const candidates = [
    record.opportunityId,
    record.opportunity_id,
    opportunity?.id,
    data?.opportunityId,
    data?.opportunity_id,
    dataOpportunity?.id,
    result?.opportunityId,
    result?.opportunity_id,
    resultOpportunity?.id,
  ]

  return candidates.find((value): value is string => typeof value === 'string' && value.trim().length > 0)?.trim() || ''
}

function buildOpportunityUrl(leadsUrl: string, opportunityId: string) {
  const baseUrl = leadsUrl.replace(/\/leads\/?$/i, '')
  return `${baseUrl}/opportunities/${encodeURIComponent(opportunityId)}`
}

function buildNotificationEmail(lead: ReturnType<typeof buildDiagnosticLead>) {
  const row = (label: string, value: unknown) =>
    `<tr><td style="padding:8px 10px;font-weight:700;color:#0b133c;vertical-align:top">${label}</td><td style="padding:8px 10px;color:#334155">${escapeHtml(value || '—')}</td></tr>`

  return `<!doctype html><html lang="pt-BR"><body style="margin:0;background:#f5f7fb;font-family:Arial,sans-serif;color:#0b133c"><table width="100%" cellpadding="0" cellspacing="0" style="max-width:680px;margin:24px auto;background:#fff;border:1px solid #e1e7f0;border-radius:14px;overflow:hidden"><tr><td style="background:#0b133c;padding:24px 28px;color:#fff"><strong style="font-size:20px">Novo diagnóstico SST</strong><div style="margin-top:6px;color:#cbd5e1;font-size:13px">Lead específico do funil /diagnostico</div></td></tr><tr><td style="padding:22px 28px"><table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">${row('Nome', lead.nome)}${row('Empresa', lead.empresa)}${row('WhatsApp / telefone', lead.telefone)}${row('E-mail', lead.email)}${row('Funcionários CLT', lead.funcionarios_clt)}${row('Prestador de SST', lead.prestador_sst)}${row('Segmento', lead.segmento)}${row('Cargo / função', lead.cargo)}</table></td></tr><tr><td style="padding:22px 28px;background:#f8fafc"><table width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse">${row('Origem', lead.origem)}${row('Suborigem', lead.suborigem)}${row('Parâmetro de origem', lead.origem_parametro)}${row('UTM source', lead.attribution.last_touch.utm_source)}${row('UTM medium', lead.attribution.last_touch.utm_medium)}${row('UTM campaign', lead.attribution.last_touch.utm_campaign)}${row('UTM content', lead.attribution.last_touch.utm_content)}${row('Página', lead.attribution.conversion_page)}</table></td></tr></table></body></html>`
}

async function sendNotificationEmail(lead: ReturnType<typeof buildDiagnosticLead>) {
  const smtpHost = process.env.SMTP_HOST
  const smtpUser = process.env.SMTP_USER
  const smtpPass = process.env.SMTP_PASS
  const notifyTo = process.env.DIAGNOSTICO_NOTIFY_EMAIL
  const smtpPort = Number(process.env.SMTP_PORT || 587)

  if (!smtpHost || !smtpUser || !smtpPass || !notifyTo) return false

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    connectionTimeout: 5000,
    greetingTimeout: 5000,
    socketTimeout: 8000,
    auth: { user: smtpUser, pass: smtpPass },
  })

  await transporter.sendMail({
    from: process.env.SMTP_FROM || smtpUser,
    to: notifyTo,
    replyTo: lead.email,
    subject: `Novo diagnóstico SST | ${lead.empresa}`,
    text: `Novo diagnóstico SST\n\nNome: ${lead.nome}\nEmpresa: ${lead.empresa}\nTelefone: ${lead.telefone}\nE-mail: ${lead.email}\nFuncionários CLT: ${lead.funcionarios_clt}\nPrestador: ${lead.prestador_sst}\nSegmento: ${lead.segmento}\nCargo: ${lead.cargo}\nOrigem: ${lead.origem} / ${lead.suborigem}\nUTM campaign: ${lead.attribution.last_touch.utm_campaign}`,
    html: buildNotificationEmail(lead),
  })

  return true
}

export async function POST(request: Request) {
  const ip =
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    request.headers.get('x-real-ip') ||
    'unknown'

  if (!checkRateLimit(ip)) {
    return jsonResponse({ error: 'Muitas tentativas. Tente novamente em alguns instantes.' }, 429)
  }

  let data: DiagnosticPayload
  try {
    data = (await request.json()) as DiagnosticPayload
  } catch {
    return jsonResponse({ error: 'Não foi possível ler os dados enviados.' }, 400)
  }

  if (!data || typeof data !== 'object' || Array.isArray(data) || Object.values(data).some((value) => typeof value !== 'string')) {
    return jsonResponse({ error: 'Confira os dados enviados.' }, 400)
  }

  if (data.website && data.website.trim()) {
    return jsonResponse({ ok: true, calendarUrl: process.env.CALENDAR_URL || '' })
  }

  const requiredFields: Array<keyof DiagnosticPayload> = [
    'nome',
    'empresa',
    'telefone',
    'email',
    'funcionarios_clt',
    'prestador_sst',
    'segmento',
    'cargo',
  ]

  const missingField = requiredFields.find((field) => !required(data[field]))
  if (missingField) {
    return jsonResponse({ error: 'Preencha todos os campos obrigatórios.' }, 400)
  }

  const nome = String(data.nome).trim()
  const empresa = String(data.empresa).trim()
  const email = String(data.email).trim().toLowerCase()
  const telefone = String(data.telefone).trim()
  const funcionarios = String(data.funcionarios_clt).trim()
  const prestador = String(data.prestador_sst).trim()
  const segmento = String(data.segmento).trim()
  const cargo = String(data.cargo).trim()

  if (!isEmail(email)) return jsonResponse({ error: 'Confira o e-mail informado.' }, 400)
  if (!isPhone(telefone)) return jsonResponse({ error: 'Informe um telefone válido com DDD.' }, 400)
  if (!EMPLOYEE_BANDS.has(funcionarios) || !PRESTADOR_OPTIONS.has(prestador) || !SEGMENT_OPTIONS.has(segmento) || !ROLE_OPTIONS.has(cargo)) {
    return jsonResponse({ error: 'Confira as opções selecionadas no formulário.' }, 400)
  }

  const formStartedAt = Number(data.form_started_at || 0)
  if (!Number.isFinite(formStartedAt) || formStartedAt <= 0 || Date.now() - formStartedAt < MIN_SUBMIT_MS) {
    return jsonResponse({ error: 'Aguarde alguns segundos antes de enviar.' }, 400)
  }

  if ([nome, empresa, email, telefone].some((value) => value.length > 240)) {
    return jsonResponse({ error: 'Alguns campos ultrapassam o limite permitido.' }, 400)
  }

  const lead = buildDiagnosticLead(data, request)

  const crmApiUrl = process.env.DIAGNOSTICO_CRM_API_URL
  const crmApiKey = process.env.DIAGNOSTICO_CRM_API_KEY
  const crmWebhookUrl = process.env.DIAGNOSTICO_CRM_WEBHOOK_URL || process.env.CRM_WEBHOOK_URL
  const crmDestination = crmApiUrl || crmWebhookUrl
  let deliveryAttempted = false
  let deliverySucceeded = false
  let opportunityId = ''

  if (crmApiUrl && !crmApiKey) {
    console.error('[DIAGNOSTICO_LEAD] DIAGNOSTICO_CRM_API_KEY não configurada')
    return jsonResponse({ error: 'Não foi possível registrar o diagnóstico agora. Tente novamente em instantes.' }, 502)
  }

  if (crmDestination) {
    deliveryAttempted = true
    try {
      const crmResponse = await fetch(crmDestination, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(crmApiUrl && crmApiKey ? { Authorization: `Bearer ${crmApiKey}` } : {}),
        },
        body: JSON.stringify(crmApiUrl ? buildCrmApiLead(lead) : lead),
        signal: AbortSignal.timeout(10000),
      })
      let crmResponseBody: unknown = null
      try {
        crmResponseBody = await crmResponse.json()
      } catch {
        // Algumas integrações confirmam sucesso sem corpo JSON.
      }
      if (crmResponse.ok) {
        deliverySucceeded = true
        if (crmApiUrl) {
          opportunityId = extractOpportunityId(crmResponseBody)

          if (opportunityId) {
            const stageResponse = await fetch(buildOpportunityUrl(crmApiUrl, opportunityId), {
              method: 'PATCH',
              headers: {
                Authorization: `Bearer ${crmApiKey}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ stageId: SCHEDULING_STAGE_ID }),
              signal: AbortSignal.timeout(10000),
            })

            if (!stageResponse.ok) {
              console.error('[DIAGNOSTICO_LEAD] CRM não moveu a oportunidade para Agendamento', stageResponse.status)
              deliverySucceeded = false
            }
          } else {
            console.error('[DIAGNOSTICO_LEAD] CRM não devolveu o opportunityId da oportunidade criada')
            deliverySucceeded = false
          }
        }
      } else console.error('[DIAGNOSTICO_LEAD] CRM respondeu', crmResponse.status)
    } catch (error) {
      console.error('[DIAGNOSTICO_LEAD] CRM falhou', error)
      deliverySucceeded = false
    }
    if (!deliverySucceeded) {
      return jsonResponse({ error: 'Não foi possível registrar o diagnóstico agora. Seus campos foram mantidos; tente novamente em instantes.' }, 502)
    }
  }

  if (process.env.DIAGNOSTICO_NOTIFY_EMAIL) {
    deliveryAttempted = true
    try {
      if (await sendNotificationEmail(lead)) deliverySucceeded = true
    } catch (error) {
      console.error('[DIAGNOSTICO_LEAD] e-mail de notificação falhou', error)
    }
  }

  if (!deliveryAttempted || !deliverySucceeded) {
    return jsonResponse({ error: 'Não foi possível registrar o diagnóstico agora. Tente novamente em instantes.' }, 502)
  }

  return jsonResponse({
    ok: true,
    calendarUrl: process.env.CALENDAR_URL || process.env.NEXT_PUBLIC_CALENDAR_URL || '',
    opportunityId: opportunityId || null,
  })
}
