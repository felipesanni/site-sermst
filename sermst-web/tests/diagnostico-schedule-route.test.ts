import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { POST } from '@/app/api/diagnostico/agendamento/route'

const request = (body: unknown) => new Request('http://localhost/api/diagnostico/agendamento', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(body),
})

describe('diagnostic schedule update', () => {
  beforeEach(() => {
    vi.stubEnv('DIAGNOSTICO_CRM_API_URL', 'https://crm.example.com/api/v1/leads')
    vi.stubEnv('DIAGNOSTICO_CRM_API_KEY', 'test-crm-key')
    vi.stubEnv('CALENDLY_API_TOKEN', '')
    vi.stubEnv('DIAGNOSTICO_MEETING_STAGE_ID', '')
  })

  afterEach(() => {
    vi.unstubAllEnvs()
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('moves the opportunity to meeting, then sets the due date to the meeting time', async () => {
    vi.stubEnv('DIAGNOSTICO_MEETING_STAGE_ID', 'opp-stage-4')
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ success: true }), { status: 200 }))
    vi.stubGlobal('fetch', fetchMock)

    const response = await POST(request({
      opportunityId: 'opp-123',
      data_reuniao: '2026-09-15T15:00:00.000Z',
      formAnswers: {
        funcionarios_clt: 'Sim',
        quant_funcionarios_clt: '51 a 100',
      },
    }))

    expect(response.status).toBe(200)
    expect(await response.json()).toMatchObject({ ok: true, opportunityId: 'opp-123' })
    expect(fetchMock).toHaveBeenNthCalledWith(1,
      'https://crm.example.com/api/v1/opportunities/opp-123',
      expect.objectContaining({
        method: 'PATCH',
        headers: expect.objectContaining({ Authorization: 'Bearer test-crm-key' }),
        body: JSON.stringify({
          stageId: 'teHUsURtaNw9zHEhAV7v',
          data_reuniao: '2026-09-15T15:00:00.000Z',
        }),
      }),
    )
    expect(fetchMock).toHaveBeenNthCalledWith(2,
      'https://crm.example.com/api/v1/opportunities/opp-123',
      expect.objectContaining({
        method: 'PATCH',
        body: JSON.stringify({ dueDate: '2026-09-15T15:00:00.000Z' }),
      }),
    )
  })

  it('accepts a numeric opportunity ID and normalizes it for the CRM PATCH', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ success: true }), { status: 200 }))
    vi.stubGlobal('fetch', fetchMock)

    const response = await POST(request({
      opportunityId: 184698,
      data_reuniao: '2026-09-15T15:00:00.000Z',
    }))

    expect(response.status).toBe(200)
    expect(await response.json()).toMatchObject({ ok: true, opportunityId: '184698' })
    expect(fetchMock).toHaveBeenNthCalledWith(1,
      'https://crm.example.com/api/v1/opportunities/184698',
      expect.objectContaining({
        method: 'PATCH',
        body: JSON.stringify({ stageId: 'teHUsURtaNw9zHEhAV7v', data_reuniao: '2026-09-15T15:00:00.000Z' }),
      }),
    )
    expect(fetchMock).toHaveBeenNthCalledWith(2,
      'https://crm.example.com/api/v1/opportunities/184698',
      expect.objectContaining({ method: 'PATCH', body: JSON.stringify({ dueDate: '2026-09-15T15:00:00.000Z' }) }),
    )
  })

  it('resolves the confirmed Calendly event before updating the opportunity', async () => {
    vi.stubEnv('CALENDLY_API_TOKEN', 'test-calendly-token')
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(new Response(JSON.stringify({ resource: { start_time: '2026-09-15T15:00:00.000Z' } }), { status: 200 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ success: true }), { status: 200 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ success: true }), { status: 200 }))
    vi.stubGlobal('fetch', fetchMock)

    const response = await POST(request({
      opportunityId: 'opp-123',
      calendlyEventUri: 'https://api.calendly.com/scheduled_events/event-123',
      formAnswers: { funcionarios_clt: 'Sim' },
    }))

    expect(response.status).toBe(200)
    expect(await response.json()).toMatchObject({ ok: true, data_reuniao: '2026-09-15T15:00:00.000Z' })
    expect(fetchMock).toHaveBeenNthCalledWith(1, 'https://api.calendly.com/scheduled_events/event-123', expect.objectContaining({
      headers: expect.objectContaining({ Authorization: 'Bearer test-calendly-token' }),
    }))
    expect(fetchMock).toHaveBeenNthCalledWith(2, 'https://crm.example.com/api/v1/opportunities/opp-123', expect.objectContaining({
      method: 'PATCH',
      body: JSON.stringify({ stageId: 'teHUsURtaNw9zHEhAV7v', data_reuniao: '2026-09-15T15:00:00.000Z' }),
    }))
    expect(fetchMock).toHaveBeenNthCalledWith(3, 'https://crm.example.com/api/v1/opportunities/opp-123', expect.objectContaining({
      method: 'PATCH',
      body: JSON.stringify({ dueDate: '2026-09-15T15:00:00.000Z' }),
    }))
  })

  it('reports a CRM error if the due date cannot be saved after moving to meeting', async () => {
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(new Response(JSON.stringify({ stageId: 'teHUsURtaNw9zHEhAV7v' }), { status: 200 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ error: 'Falha ao salvar vencimento' }), { status: 500 }))
    vi.stubGlobal('fetch', fetchMock)

    const response = await POST(request({
      opportunityId: 'opp-123',
      data_reuniao: '2026-09-15T15:00:00.000Z',
    }))

    expect(response.status).toBe(502)
    expect(await response.json()).toMatchObject({ error: 'Não foi possível atualizar o agendamento agora.' })
    expect(fetchMock).toHaveBeenCalledTimes(2)
  })

  it.each([
    { opportunityId: '', data_reuniao: '2026-09-15T15:00:00.000Z' },
    { opportunityId: 'opp-123', data_reuniao: '15/09/2026 12:00' },
    { opportunityId: 'opp/123', data_reuniao: '2026-09-15T15:00:00.000Z' },
  ])('rejects invalid schedule data: %j', async body => {
    const response = await POST(request(body))
    expect(response.status).toBe(400)
  })
})
