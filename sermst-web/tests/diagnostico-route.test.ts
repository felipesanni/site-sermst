import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import nodemailer from 'nodemailer'
import { POST } from '@/app/api/diagnostico/route'

let requestNumber = 0
const payload = () => ({
  nome: 'Pessoa QA', empresa: 'Empresa QA', telefone: '+55 (11) 99999-1111',
  email: 'qa@example.com', funcionarios_clt: '51 a 100', prestador_sst: 'Sim',
  segmento: 'Serviços', cargo: 'Dono / Sócio', conversion_page: 'https://sermst.com.br/diagnostico', form_started_at: String(Date.now() - 15000),
})
const request = (body: unknown, requestKey?: string) => {
  const sequence = ++requestNumber
  return new Request('http://localhost/api/diagnostico', {
    method: 'POST', headers: {
      'Content-Type': 'application/json',
      'x-real-ip': 'diagnostic-test-' + sequence,
      'Idempotency-Key': requestKey || 'diag_test_' + sequence,
    },
    body: JSON.stringify(body),
  })
}

describe('diagnostic capture before scheduling', () => {
  beforeEach(() => {
    for (const key of [
      'DIAGNOSTICO_CRM_API_URL', 'DIAGNOSTICO_CRM_API_KEY', 'DIAGNOSTICO_CRM_WEBHOOK_URL',
      'CRM_WEBHOOK_URL', 'DIAGNOSTICO_NOTIFY_EMAIL', 'CALENDAR_URL', 'NEXT_PUBLIC_CALENDAR_URL',
      'SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'SMTP_FROM',
    ]) vi.stubEnv(key, '')
  })
  afterEach(() => { vi.unstubAllEnvs(); vi.unstubAllGlobals(); vi.restoreAllMocks() })

  it('does not confirm capture without a delivery destination', async () => {
    const response = await POST(request(payload()))
    expect(response.status).toBe(502)
    expect(await response.json()).not.toHaveProperty('ok', true)
  })

  it.each(['instagram_organico', 'instagram_pago', 'parceiro_contador', '  instagram_organico  ', '', '   ', undefined])('delivers %s attribution before returning the calendar', async (origem) => {
    vi.stubEnv('DIAGNOSTICO_CRM_API_URL', 'https://crm.example.com/api/v1/leads')
    vi.stubEnv('DIAGNOSTICO_CRM_API_KEY', 'test-crm-key')
    vi.stubEnv('CALENDAR_URL', 'https://calendar.example.com/diagnostic')
    const fetchMock = vi.fn().mockResolvedValue(new Response(JSON.stringify({ success: true, opportunityId: 'opp-123' }), { status: 200, headers: { 'Content-Type': 'application/json' } }))
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
    if (origem?.trim()) {
      expect(delivered.leadSource).toBe(origem.trim())
    } else {
      expect(delivered).not.toHaveProperty('leadSource')
    }
    expect(fetchMock.mock.calls[0][1].headers).toMatchObject({
      Authorization: 'Bearer test-crm-key',
      'Idempotency-Key': expect.stringMatching(/^diag_test_/),
    })
    expect(fetchMock.mock.calls[1][0]).toBe('https://crm.example.com/api/v1/opportunities/opp-123')
    expect(fetchMock.mock.calls[1][1]).toMatchObject({
      method: 'PATCH',
      body: JSON.stringify({ stageId: 'wMHthU8qBYFeQwZyAr1n' }),
    })
    expect(await response.json()).toMatchObject({
      ok: true,
      delivered: true,
      crmConfirmed: true,
      scheduleReady: true,
      calendarUrl: 'https://calendar.example.com/diagnostic',
      opportunityId: 'opp-123',
    })
  })

  it('preserves the created CRM opportunity and avoids asking the user to resubmit if the stage update fails', async () => {
    vi.stubEnv('DIAGNOSTICO_CRM_API_URL', 'https://crm.example.com/api/v1/leads')
    vi.stubEnv('DIAGNOSTICO_CRM_API_KEY', 'test-crm-key')
    vi.stubEnv('CALENDAR_URL', 'https://calendar.example.com/diagnostic')
    vi.stubGlobal('fetch', vi.fn()
      .mockResolvedValueOnce(new Response(JSON.stringify({ success: true, opportunityId: 'opp-123' }), { status: 201 }))
      .mockResolvedValueOnce(new Response('', { status: 503 })))
    vi.spyOn(console, 'error').mockImplementation(() => {})

    const response = await POST(request(payload()))

    expect(response.status).toBe(200)
    expect(await response.json()).toMatchObject({
      ok: true,
      delivered: true,
      crmConfirmed: true,
      deliveryStatus: 'crm_confirmed_schedule_pending',
      scheduleReady: false,
      calendarUrl: '',
      opportunityId: 'opp-123',
    })
  })

  it('recovers a failed stage update by replaying the same CRM opportunity on the same key', async () => {
    vi.stubEnv('DIAGNOSTICO_CRM_API_URL', 'https://crm.example.com/api/v1/leads')
    vi.stubEnv('DIAGNOSTICO_CRM_API_KEY', 'test-crm-key')
    vi.stubEnv('CALENDAR_URL', 'https://calendar.example.com/diagnostic')
    const fetchMock = vi.fn()
      .mockResolvedValueOnce(new Response(JSON.stringify({ success: true, opportunityId: 'opp-same' }), { status: 201 }))
      .mockResolvedValueOnce(new Response('', { status: 503 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ success: true, opportunityId: 'opp-same', idempotentReplay: true }), { status: 200 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ id: 'opp-same' }), { status: 200 }))
    vi.stubGlobal('fetch', fetchMock)
    vi.spyOn(console, 'error').mockImplementation(() => {})
    const key = 'diag_recovery_123'

    const first = await POST(request(payload(), key))
    const retry = await POST(request(payload(), key))

    expect(first.status).toBe(200)
    expect(await first.json()).toMatchObject({ crmConfirmed: true, scheduleReady: false, opportunityId: 'opp-same' })
    expect(retry.status).toBe(200)
    expect(await retry.json()).toMatchObject({ crmConfirmed: true, scheduleReady: true, opportunityId: 'opp-same' })
    expect(fetchMock).toHaveBeenCalledTimes(4)
    expect(fetchMock.mock.calls[0][1].headers).toMatchObject({ 'Idempotency-Key': key })
    expect(fetchMock.mock.calls[2][1].headers).toMatchObject({ 'Idempotency-Key': key })
    expect(fetchMock.mock.calls[1][0]).toBe(fetchMock.mock.calls[3][0])
  })
  it('returns in-progress CRM idempotency as retryable without falling back to a second channel', async () => {
    vi.stubEnv('DIAGNOSTICO_CRM_API_URL', 'https://crm.example.com/api/v1/leads')
    vi.stubEnv('DIAGNOSTICO_CRM_API_KEY', 'test-crm-key')
    vi.stubEnv('DIAGNOSTICO_NOTIFY_EMAIL', 'qa@example.com')
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response(JSON.stringify({
      status: 'idempotency_in_progress',
      error: 'Aguarde.',
    }), { status: 409 })))

    const response = await POST(request(payload()))

    expect(response.status).toBe(409)
    expect(await response.json()).toMatchObject({ status: 'idempotency_in_progress', retryable: true })
  })

  it('keeps an email-accepted lead when the CRM is unavailable but does not claim CRM confirmation', async () => {
    vi.stubEnv('DIAGNOSTICO_CRM_API_URL', 'https://crm.example.com/api/v1/leads')
    vi.stubEnv('DIAGNOSTICO_CRM_API_KEY', 'test-crm-key')
    vi.stubEnv('DIAGNOSTICO_NOTIFY_EMAIL', 'qa@example.com')
    vi.stubEnv('SMTP_HOST', 'smtp.example.com')
    vi.stubEnv('SMTP_PORT', '587')
    vi.stubEnv('SMTP_USER', 'site@example.com')
    vi.stubEnv('SMTP_PASS', 'test-password')
    const sendMail = vi.fn().mockResolvedValue({ messageId: 'mock-message' })
    vi.spyOn(nodemailer, 'createTransport').mockReturnValue({ sendMail } as never)
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('CRM offline')))

    const response = await POST(request(payload()))

    expect(response.status).toBe(202)
    expect(sendMail).toHaveBeenCalledOnce()
    expect(await response.json()).toMatchObject({
      ok: true,
      delivered: true,
      crmConfirmed: false,
      deliveryStatus: 'delivery_accepted',
      scheduleReady: false,
      calendarUrl: '',
      opportunityId: null,
    })
  })
  it('sends an external referrer classification without inventing Instagram', async () => {
    vi.stubEnv('DIAGNOSTICO_CRM_WEBHOOK_URL', 'https://webhook.example/diagnostico')
    const fetchMock = vi.fn().mockResolvedValue(new Response('', { status: 200 }))
    vi.stubGlobal('fetch', fetchMock)

    const response = await POST(request({
      ...payload(),
      original_referrer: 'https://busca.example.com/',
      last_referrer: 'https://parceiro.example.com/artigo',
    }))

    expect(response.status).toBe(202)
    expect(await response.json()).toMatchObject({
      ok: true,
      delivered: true,
      crmConfirmed: false,
      deliveryStatus: 'delivery_accepted',
      scheduleReady: false,
      calendarUrl: '',
      opportunityId: null,
    })
    const delivered = JSON.parse(fetchMock.mock.calls[0][1].body)
    expect(delivered).toMatchObject({
      origem: '',
      suborigem: 'Não informado',
      source_classification: 'referral',
      attribution: {
        original_referrer: 'https://busca.example.com/',
        source_classification: 'referral',
        referrer_host: 'parceiro.example.com',
        first_touch: { referrer: 'https://busca.example.com/' },
        last_touch: { referrer: 'https://parceiro.example.com/artigo' },
      },
    })
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
      .mockResolvedValueOnce(new Response(JSON.stringify({ success: true, opportunityId: 'opp-123' }), { status: 200 }))
      .mockResolvedValueOnce(new Response('', { status: 503 })))
    vi.spyOn(console, 'error').mockImplementation(() => {})

    const response = await POST(request(payload()))

    expect(response.status).toBe(200)
    expect(await response.json()).toMatchObject({
      delivered: true,
      crmConfirmed: true,
      scheduleReady: false,
      calendarUrl: '',
      opportunityId: 'opp-123',
    })
  })

  it.each([null, [], { ...payload(), website: 123 }, { ...payload(), telefone: '123' }, { ...payload(), email: 'invalid' }])('rejects invalid payloads', async (body) => {
    expect((await POST(request(body))).status).toBe(400)
  })
})
