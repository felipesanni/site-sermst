import { NextResponse } from 'next/server'
import {
  DIAGNOSTICO_CRM_MEETING_STAGE_ID,
} from '@/lib/diagnostico-crm-fields'

export const runtime = 'nodejs'

const JSON_HEADERS = { 'Content-Type': 'application/json; charset=utf-8' } as const

function jsonResponse(body: unknown, status = 200) {
  return NextResponse.json(body, { status, headers: JSON_HEADERS })
}

function isIsoDate(value: unknown): value is string {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/.test(value)) return false
  return Number.isFinite(Date.parse(value))
}

function normalizeOpportunityId(value: unknown): string | null {
  if (typeof value === 'string') {
    const normalized = value.trim()
    return /^[A-Za-z0-9._:-]{1,200}$/.test(normalized) ? normalized : null
  }

  if (typeof value === 'number' && Number.isSafeInteger(value) && value > 0) {
    return String(value)
  }

  return null
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
  let data: { opportunityId?: unknown; data_reuniao?: unknown; calendlyEventUri?: unknown; calendlyInviteeUri?: unknown }

  try {
    data = (await request.json()) as { opportunityId?: unknown; data_reuniao?: unknown; formAnswers?: unknown; calendlyEventUri?: unknown; calendlyInviteeUri?: unknown }
  } catch {
    return jsonResponse({ error: 'Não foi possível ler os dados do agendamento.' }, 400)
  }

  const opportunityId = normalizeOpportunityId(data?.opportunityId)
  if (!opportunityId) {
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
    const opportunityUrl = buildOpportunityUrl(leadsUrl, opportunityId)
    const headers = {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    }
    const stageResponse = await fetch(opportunityUrl, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({
        stageId: DIAGNOSTICO_CRM_MEETING_STAGE_ID,
        data_reuniao: dataReuniao,
      }),
      signal: AbortSignal.timeout(10000),
    })

    if (!stageResponse.ok) {
      console.error('[DIAGNOSTICO_SCHEDULE] CRM não moveu a oportunidade para Reunião', stageResponse.status)
      return jsonResponse({ error: 'Não foi possível atualizar o agendamento agora.' }, 502)
    }

    // O CRM limpa o vencimento ao entrar em Reunião. Grave-o depois da
    // mudança de etapa para manter a data de vencimento alinhada à reunião.
    const dueDateResponse = await fetch(opportunityUrl, {
      method: 'PATCH',
      headers,
      body: JSON.stringify({ dueDate: dataReuniao }),
      signal: AbortSignal.timeout(10000),
    })

    if (!dueDateResponse.ok) {
      console.error('[DIAGNOSTICO_SCHEDULE] CRM não atualizou o vencimento', dueDateResponse.status)
      return jsonResponse({ error: 'Não foi possível atualizar o agendamento agora.' }, 502)
    }

    return jsonResponse({ ok: true, opportunityId, data_reuniao: dataReuniao })
  } catch (error) {
    console.error('[DIAGNOSTICO_SCHEDULE] CRM falhou', error)
    return jsonResponse({ error: 'Não foi possível atualizar o agendamento agora.' }, 502)
  }
}
