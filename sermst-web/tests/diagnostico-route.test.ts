import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { POST } from '@/app/api/diagnostico/route'

let requestNumber = 0
const payload = () => ({
  nome: 'Pessoa QA', empresa: 'Empresa QA', telefone: '+55 (11) 99999-1111',
  email: 'qa@example.com', funcionarios_clt: '51 a 100', prestador_sst: 'Sim',
  segmento: 'Serviços', cargo: 'Dono / Sócio', conversion_page: 'https://sermst.com.br/diagnostico', form_started_at: String(Date.now() - 15000),
})
const request = (body: unknown) => new Request('http://localhost/api/diagnostico', {
  method: 'POST', headers: { 'Content-Type': 'application/json', 'x-real-ip': `diagnostic-test-${++requestNumber}` },
  body: JSON.stringify(body),
})

describe('diagnostic capture before scheduling', () => {
  beforeEach(() => {
    for (const key of ['DIAGNOSTICO_CRM_API_URL', 'DIAGNOSTICO_CRM_API_KEY', 'DIAGNOSTICO_CRM_WEBHOOK_URL', 'CRM_WEBHOOK_URL', 'DIAGNOSTICO_NOTIFY_EMAIL', 'CALENDAR_URL', 'NEXT_PUBLIC_CALENDAR_URL']) vi.stubEnv(key, '')
  })
  afterEach(() => { vi.unstubAllEnvs(); vi.unstubAllGlobals(); vi.restoreAllMocks() })

  it('does not confirm capture without a delivery destination', async () => {
    const response = await POST(request(payload()))
    expect(response.status).toBe(502)
    expect(await response.json()).not.toHaveProperty('ok', true)
  })

  it.each(['instagram_organico', 'instagram_pago'])('delivers %s attribution before returning the calendar', async (origem) => {
    vi.stubEnv('DIAGNOSTICO_CRM_API_URL', 'https://crm.example.com/api/v1/leads')
    vi.stubEnv('DIAGNOSTICO_CRM_API_KEY', 'test-crm-key')
    vi.stubEnv('CALENDAR_URL', 'https://calendar.example.com/diagnostic')
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ opportunityId: 'opp-123' }), { status: 200, headers: { 'Content-Type': 'application/json' } }))
    vi.stubGlobal('fetch', fetchMock)
    const response = await POST(request({
      ...payload(),
      origem,
      utm_campaign: 'teste',
      utm_content: 'reel01',
      utm_medium: 'paid_social',
      utm_term: 'sst para empresas',
      utm_id: 'campanha-01',
      gclid: 'gclid-last',
      fbclid: 'fbclid-last',
    }))
    expect(response.status).toBe(200)
    expect(fetchMock).toHaveBeenCalledTimes(2)
    const delivered = JSON.parse(fetchMock.mock.calls[0][1].body)
    expect(delivered).toMatchObject({
      name: 'Pessoa QA',
      phone: '+5511999991111',
      email: 'qa@example.com',
      company: 'Empresa QA',
      title: 'Diagnóstico de SST | Empresa QA',
      value: 0,
      pageUrl: 'https://sermst.com.br/diagnostico',
      new_1759509682081: 'Sim',
      new_1760131251192: '51 a 100',
      new_1762202729539: 'Sim',
      new_1764087960206: 'Sim',
      new_1789428176289: 'Sim',
      new_1789428287294: 'Serviços',
      cargo: 'Dono / Sócio',
      utm_source: 'sermst-diagnostico',
      utm_medium: 'paid_social',
      utm_campaign: 'teste',
      utm_content: 'reel01',
      utm_term: 'sst para empresas',
      utm_id: 'campanha-01',
      gclid: 'gclid-last',
      fbclid: 'fbclid-last',
    })
    expect(delivered).not.toHaveProperty('utm_source_first')
    expect(delivered).not.toHaveProperty('utm_campaign_first')
    expect(delivered).not.toHaveProperty('leadSource')
    expect(fetchMock.mock.calls[0][1].headers).toMatchObject({ Authorization: 'Bearer test-crm-key' })
    expect(fetchMock.mock.calls[1][0]).toBe('https://crm.example.com/api/v1/opportunities/opp-123')
    expect(fetchMock.mock.calls[1][1]).toMatchObject({
      method: 'PATCH',
      body: JSON.stringify({ stageId: 'wMHthU8qBYFeQwZyAr1n' }),
    })
    expect(await response.json()).toMatchObject({ ok: true, calendarUrl: 'https://calendar.example.com/diagnostic', opportunityId: 'opp-123' })
  })

  it('does not release the calendar when CRM refuses the contact', async () => {
    vi.stubEnv('DIAGNOSTICO_CRM_API_URL', 'https://crm.example.com/api/v1/leads')
    vi.stubEnv('DIAGNOSTICO_CRM_API_KEY', 'test-crm-key')
    vi.stubEnv('DIAGNOSTICO_NOTIFY_EMAIL', 'qa@example.com')
    vi.stubEnv('CALENDAR_URL', 'https://calendar.example.com/diagnostic')
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('', { status: 503 })))
    vi.spyOn(console, 'error').mockImplementation(() => {})
    const response = await POST(request(payload()))
    expect(response.status).toBe(502)
    expect(await response.json()).not.toHaveProperty('calendarUrl')
  })

  it('does not release the calendar when the CRM cannot move the opportunity to scheduling', async () => {
    vi.stubEnv('DIAGNOSTICO_CRM_API_URL', 'https://crm.example.com/api/v1/leads')
    vi.stubEnv('DIAGNOSTICO_CRM_API_KEY', 'test-crm-key')
    vi.stubEnv('CALENDAR_URL', 'https://calendar.example.com/diagnostic')
    vi.stubGlobal('fetch', vi.fn()
      .mockResolvedValueOnce(new Response(JSON.stringify({ opportunityId: 'opp-123' }), { status: 200 }))
      .mockResolvedValueOnce(new Response('', { status: 503 })))
    vi.spyOn(console, 'error').mockImplementation(() => {})

    const response = await POST(request(payload()))

    expect(response.status).toBe(502)
    expect(await response.json()).not.toHaveProperty('calendarUrl')
  })

  it.each([null, [], { ...payload(), website: 123 }, { ...payload(), telefone: '123' }, { ...payload(), email: 'invalid' }])('rejects invalid payloads', async (body) => {
    expect((await POST(request(body))).status).toBe(400)
  })
})
