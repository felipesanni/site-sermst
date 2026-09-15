import { NextResponse } from 'next/server'
import {
  buildDiagnosticCrmFormAnswers,
  DIAGNOSTICO_CRM_MEETING_STAGE_ID,
} from '@/lib/diagnostico-crm-fields'

export const runtime = 'nodejs'

const JSON_HEADERS = { 'Content-Type': 'application/json; charset=utf-8' } as const
const MEETING_STAGE_ID = process.env.DIAGNOSTICO_MEETING_STAGE_ID || DIAGNOSTICO_CRM_MEETING_STAGE_ID

function jsonResponse(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: JSON_HEADERS })
}

function isIsoDate(value: unknown): value is string {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/.test(value)) return false
  return Number.isFinite(Date.parse(value))
}

function isOpportunityId(value: unknown): value is string {
  return typeof value === 'string' && /^[A-Za-z0-9._:-]{1,200}$/.test(value)
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return Boolean(value) && typeof value === 'object' && !Array.isArray(value)
}

function buildOpportunityUrl(leadsUrl: string, opportunityId: string) {
  const baseUrl = leadsUrl.replace(/\/leads\/?$/i, '')
  return `${baseUrl}/opportunities/${encodeURIComponent(opportunityId)}`
}

function isCalendlyUri(value: unknown, resource: 'scheduled_events' | 'scheduled_event_invitees'): value is string {
  if (typeof value !== 'string') return false

  try {
    const parsed = new URL(value)
    const path = resource === 'scheduled_events' ? '/scheduled_events/' : '/scheduled_event_invitees/'
    return parsed.protocol === 'https:' && parsed.hostname === 'api.calendly.com' && parsed.pathname.startsWith(path) && parsed.pathname.length > path.length
  } catch {
    return false
  }
}

async function resolveCalendlyStartTime(eventUri: string) {
  const token = process.env.CALENDLY_API_TOKEN?.trim()
  if (!token) return ''

  const response = await fetch(eventUri, {
    headers: { Authorization: `Bearer ${token}`, Accept: 'application/json' },
    signal: AbortSignal.timeout(10000),
  })
  if (!response.ok) {
    console.error('[DIAGNOSTICO_SCHEDULE] Calendly respondeu', response.status)
    return ''
  }

  const body = await response.json().catch(() => null) as { resource?: { start_time?: unknown } } | null
  return isIsoDate(body?.resource?.start_time) ? body.resource.start_time : ''
}

export async function POST(request: Request) {
  let data: { opportunityId?: unknown; data_reuniao?: unknown; formAnswers?: unknown; calendlyEventUri?: unknown; calendlyInviteeUri?: unknown }

  try {
    data = (await request.json()) as { opportunityId?: unknown; data_reuniao?: unknown; formAnswers?: unknown; calendlyEventUri?: unknown; calendlyInviteeUri?: unknown }
  } catch {
    return jsonResponse({ error: 'Não foi possível ler os dados do agendamento.' }, 400)
  }

  if (!isOpportunityId(data?.opportunityId)) {
    return jsonResponse({ error: 'A oportunidade do diagnóstico não foi identificada.' }, 400)
  }

  if (data?.data_reuniao !== undefined && !isIsoDate(data.data_reuniao)) {
    return jsonResponse({ error: 'A data da reunião precisa estar em ISO 8601.' }, 400)
  }

  let dataReuniao = isIsoDate(data?.data_reuniao) ? data.data_reuniao : ''

  if (!dataReuniao && isCalendlyUri(data?.calendlyEventUri, 'scheduled_events')) {
    try {
      dataReuniao = await resolveCalendlyStartTime(data.calendlyEventUri)
    } catch (error) {
      console.error('[DIAGNOSTICO_SCHEDULE] Calendly falhou', error)
    }
  }

  if (!dataReuniao) {
    return jsonResponse({ error: 'A data da reunião precisa estar em ISO 8601.' }, 502)
  }

  const leadsUrl = process.env.DIAGNOSTICO_CRM_API_URL
  const apiKey = process.env.DIAGNOSTICO_CRM_API_KEY
  if (!leadsUrl || !apiKey) {
    console.error('[DIAGNOSTICO_SCHEDULE] integração do CRM não configurada')
    return jsonResponse({ error: 'Não foi possível atualizar o agendamento agora.' }, 502)
  }

  try {
    const updatePayload: Record<string, unknown> = {
      stageId: MEETING_STAGE_ID,
      data_reuniao: dataReuniao,
      dueDate: dataReuniao,
    }

    if (isRecord(data.formAnswers)) {
      updatePayload.formAnswers = {
        ...data.formAnswers,
        ...buildDiagnosticCrmFormAnswers({ data_reuniao: dataReuniao }),
      }
    } else {
      updatePayload.formAnswers = buildDiagnosticCrmFormAnswers({ data_reuniao: dataReuniao })
    }

    const crmResponse = await fetch(buildOpportunityUrl(leadsUrl, data.opportunityId), {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatePayload),
      signal: AbortSignal.timeout(10000),
    })

    if (!crmResponse.ok) {
      console.error('[DIAGNOSTICO_SCHEDULE] CRM respondeu', crmResponse.status)
      return jsonResponse({ error: 'Não foi possível atualizar o agendamento agora.' }, 502)
    }

    return jsonResponse({ ok: true, opportunityId: data.opportunityId, data_reuniao: dataReuniao })
  } catch (error) {
    console.error('[DIAGNOSTICO_SCHEDULE] CRM falhou', error)
    return jsonResponse({ error: 'Não foi possível atualizar o agendamento agora.' }, 502)
  }
}
