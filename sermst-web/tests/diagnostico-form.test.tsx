import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { DiagnosticoClient } from '@/app/diagnostico/diagnostico-client'
import { captureDiagnosticAttribution, DIAGNOSTIC_ATTRIBUTION_SESSION_KEY } from '@/lib/diagnostic-attribution'

function fillCompany() {
  for (const [label, value] of [
    [/^Empresa/, 'Empresa QA'], [/Funcionários CLT/, '51 a 100'],
    [/Já possui fornecedor/, 'Sim'], [/Segmento da empresa/, 'Serviços'],
  ] as const) fireEvent.change(screen.getByLabelText(label), { target: { value } })
}

function fillForm() {
  fillCompany()
  fireEvent.click(screen.getByRole('button', { name: /Continuar/ }))
  for (const [label, value] of [
    [/Nome completo/, 'Pessoa QA'], [/WhatsApp/, '+55 (11) 99999-1111'],
    [/E-mail/, 'qa@example.com'], [/Cargo/, 'Dono / Sócio'],
  ] as const) fireEvent.change(screen.getByLabelText(label), { target: { value } })
}

async function renderDiagnostic() {
  const result = render(<DiagnosticoClient calendarUrl="" privacyUrl="/privacy" />)
  await waitFor(() => expect(window.dataLayer).toContainEqual(expect.objectContaining({ event: 'diagnostico_page_view' })))
  return result
}
describe('diagnostic conversion UI', () => {
  beforeEach(() => {
    window.localStorage.clear()
    window.sessionStorage.clear()
    window.dataLayer = []
    window.history.replaceState({}, '', '/diagnostico?origem=instagram_pago&utm_campaign=teste&utm_content=reel01')
  })
  afterEach(() => {
    delete (window as Window & { Calendly?: unknown }).Calendly
    document.querySelectorAll('script[src="https://assets.calendly.com/assets/external/widget.js"]').forEach(script => script.remove())
    vi.restoreAllMocks()
  })

  it('validates the company before continuing and does not send partial leads', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch')
    await renderDiagnostic()
    fireEvent.click(screen.getByRole('button', { name: /Continuar/ }))
    expect(screen.getByLabelText(/^Empresa/)).toHaveFocus()
    expect(screen.getByRole('button', { name: /Continuar/ })).toBeInTheDocument()
    fillCompany()
    fireEvent.click(screen.getByRole('button', { name: /Continuar/ }))
    expect(screen.getByRole('heading', { name: /Com quem vamos/ })).toHaveFocus()
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('preserves both steps when going back to change company data', async () => {
    await renderDiagnostic()
    fillForm()
    fireEvent.click(screen.getByRole('button', { name: /Voltar aos dados/ }))
    expect(screen.getByLabelText(/^Empresa/)).toHaveValue('Empresa QA')
    fireEvent.click(screen.getByRole('button', { name: /Continuar/ }))
    expect(screen.getByLabelText(/Nome completo/)).toHaveValue('Pessoa QA')
    expect(screen.getByLabelText(/E-mail/)).toHaveValue('qa@example.com')
  })

  it('preserves first-touch attribution when a later campaign becomes the last touch', async () => {
    window.history.replaceState({}, '', '/diagnostico?utm_source=instagram&utm_medium=organic&utm_campaign=first')
    captureDiagnosticAttribution({
      storage: window.sessionStorage,
      href: window.location.href,
      siteHost: window.location.hostname,
      isClientNavigation: false,
    })
    const initialView = await renderDiagnostic()
    const initial = JSON.parse(window.sessionStorage.getItem(DIAGNOSTIC_ATTRIBUTION_SESSION_KEY) || '{}')
    expect(initial.first).toMatchObject({ utm_source: 'instagram', utm_campaign: 'first' })
    initialView.unmount()

    window.history.replaceState({}, '', '/diagnostico?utm_source=google&utm_medium=cpc&utm_campaign=last')
    captureDiagnosticAttribution({
      storage: window.sessionStorage,
      href: window.location.href,
      siteHost: window.location.hostname,
      isClientNavigation: true,
    })
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify({ ok: true, delivered: true, crmConfirmed: false, scheduleReady: false }), { status: 200 }))
    const { container } = await renderDiagnostic()
    fillForm()
    fireEvent.submit(container.querySelector('form')!)
    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('Seu diagnóstico foi solicitado.'))

    const sent = JSON.parse(String(fetchMock.mock.calls[0][1]?.body))
    expect(sent).toMatchObject({
      utm_source: 'google',
      utm_campaign: 'last',
      utm_source_first: 'instagram',
      utm_campaign_first: 'first',
    })
  })

  it('does not invent Instagram for direct visits', async () => {
    window.history.replaceState({}, '', '/diagnostico')
    await renderDiagnostic()

    expect(window.dataLayer).toContainEqual(expect.objectContaining({
      origem: '',
      suborigem: 'Não informado',
      source_classification: 'direct',
    }))
  })

  it('keeps entered data and reuses the idempotency key after delivery fails', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce(new Response(JSON.stringify({ error: 'Tente novamente.' }), { status: 502 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({
        ok: true, delivered: true, crmConfirmed: false, scheduleReady: false, calendarUrl: '',
      }), { status: 202 }))
    const { container } = await renderDiagnostic()
    fillForm()
    fireEvent.submit(container.querySelector('form')!)
    expect(await screen.findByRole('alert')).toHaveTextContent('Tente novamente')
    expect(screen.getByLabelText(/Nome completo/)).toHaveValue('Pessoa QA')
    expect(screen.getByRole('button', { name: /Agendar meu/ })).toBeEnabled()
    expect(fetchMock).toHaveBeenCalledWith('/api/diagnostico', expect.objectContaining({
      headers: expect.objectContaining({ 'Idempotency-Key': expect.stringMatching(/^sermst_/) }),
    }))

    fireEvent.submit(container.querySelector('form')!)
    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('Seu diagnóstico foi solicitado.'))
    const firstKey = fetchMock.mock.calls[0][1]?.headers as Record<string, string>
    const retryKey = fetchMock.mock.calls[1][1]?.headers as Record<string, string>
    expect(retryKey['Idempotency-Key']).toBe(firstKey['Idempotency-Key'])
    expect(window.dataLayer).not.toContainEqual(expect.objectContaining({ event: 'diagnostico_form_submit' }))
    expect(window.dataLayer).toContainEqual(expect.objectContaining({ event: 'diagnostico_delivery_accepted' }))
  })

  it('confirms delivered contact with paid attribution without inventing a booking', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify({ ok: true, delivered: true, crmConfirmed: true, scheduleReady: false, calendarUrl: '', opportunityId: 'opp-123' }), { status: 200 }))
    const { container } = await renderDiagnostic()
    fillForm()
    fireEvent.submit(container.querySelector('form')!)
    await waitFor(() => expect(screen.getByRole('status')).toHaveTextContent('Seu diagnóstico foi solicitado.'))
    const sent = JSON.parse(String(fetchMock.mock.calls[0][1]?.body))
    expect(sent).toMatchObject({ telefone: '+5511999991111', origem: 'instagram_pago', utm_campaign: 'teste', utm_content: 'reel01' })
    expect(JSON.parse(window.sessionStorage.getItem('sermst_diagnostico_opportunity_v1') || '{}')).toMatchObject({ opportunityId: 'opp-123' })
    expect(window.dataLayer).toContainEqual(expect.objectContaining({ event: 'diagnostico_form_submit', suborigem: 'Pago' }))
    expect(window.dataLayer).not.toContainEqual(expect.objectContaining({ event: 'diagnostico_schedule_complete' }))
    expect(JSON.stringify(window.dataLayer)).not.toContain('opp-123')
    expect(JSON.stringify(window.dataLayer)).not.toContain('qa@example.com')
    expect(screen.getByRole('status')).toHaveFocus()
  })

  it('embeds the Calendly schedule only after the lead is delivered', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify({ ok: true, delivered: true, crmConfirmed: true, scheduleReady: true, calendarUrl: 'https://calendly.com/sermstocupacional/30min' }), { status: 200 }))
    const initInlineWidget = vi.fn(({ parentElement }: { url: string; parentElement: HTMLElement; resize?: boolean }) => {
      const iframe = document.createElement('iframe')
      iframe.title = 'Escolha o horário do seu diagnóstico'
      iframe.src = 'https://calendly.com/sermstocupacional/30min'
      parentElement.appendChild(iframe)
    })
    Object.defineProperty(window, 'Calendly', { configurable: true, value: { initInlineWidget } })
    const { container } = await renderDiagnostic()
    fillForm()
    fireEvent.submit(container.querySelector('form')!)

    const iframe = await screen.findByTitle('Escolha o horário do seu diagnóstico')
    expect(iframe).toHaveAttribute('src', expect.stringContaining('https://calendly.com/sermstocupacional/30min'))
    expect(initInlineWidget).toHaveBeenCalledWith(expect.objectContaining({ url: expect.stringContaining('https://calendly.com/sermstocupacional/30min'), resize: true }))
    fireEvent.load(iframe)
    expect(window.dataLayer).toContainEqual(expect.objectContaining({ event: 'diagnostico_schedule_view' }))
    expect(fetchMock).toHaveBeenCalledOnce()
  })

  it('keeps the Calendly schedule available when CRM stage synchronization is pending', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(JSON.stringify({
      ok: true,
      delivered: true,
      crmConfirmed: true,
      scheduleReady: false,
      calendarUrl: 'https://calendly.com/sermstocupacional/30min',
      opportunityId: 'opp-123',
    }), { status: 200 }))
    const initInlineWidget = vi.fn(({ url, parentElement }: { url: string; parentElement: HTMLElement; resize?: boolean }) => {
      const iframe = document.createElement('iframe')
      iframe.title = 'Escolha o horário do seu diagnóstico'
      iframe.src = url
      parentElement.appendChild(iframe)
    })
    Object.defineProperty(window, 'Calendly', { configurable: true, value: { initInlineWidget } })
    const { container } = await renderDiagnostic()
    fillForm()
    fireEvent.submit(container.querySelector('form')!)

    const iframe = await screen.findByTitle('Escolha o horário do seu diagnóstico')
    expect(iframe).toHaveAttribute('src', expect.stringContaining('https://calendly.com/sermstocupacional/30min'))
    expect(initInlineWidget).toHaveBeenCalledOnce()
    expect(fetchMock).toHaveBeenCalledOnce()
  })

  it('sends the Calendly event reference when the embed does not expose the date', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch')
      .mockResolvedValueOnce(new Response(JSON.stringify({ ok: true, delivered: true, crmConfirmed: true, scheduleReady: true, calendarUrl: 'https://calendly.com/sermstocupacional/30min', opportunityId: 'opp-123' }), { status: 200 }))
      .mockResolvedValueOnce(new Response(JSON.stringify({ ok: true, data_reuniao: '2026-09-15T15:00:00.000Z' }), { status: 200 }))
    const initInlineWidget = vi.fn(({ parentElement }: { url: string; parentElement: HTMLElement; resize?: boolean }) => {
      const iframe = document.createElement('iframe')
      iframe.title = 'Escolha o horário do seu diagnóstico'
      iframe.src = 'https://calendly.com/sermstocupacional/30min'
      parentElement.appendChild(iframe)
    })
    Object.defineProperty(window, 'Calendly', { configurable: true, value: { initInlineWidget } })
    const { container } = await renderDiagnostic()
    fillForm()
    fireEvent.submit(container.querySelector('form')!)
    await screen.findByTitle('Escolha o horário do seu diagnóstico')

    window.dispatchEvent(new MessageEvent('message', {
      origin: 'https://calendly.com',
      data: {
        event: 'calendly.event_scheduled',
        payload: {
          event: { uri: 'https://api.calendly.com/scheduled_events/event-123' },
          invitee: { uri: 'https://api.calendly.com/scheduled_event_invitees/invitee-123' },
        },
      },
    }))

    await waitFor(() => expect(fetchMock).toHaveBeenCalledTimes(2))
    const sent = JSON.parse(String(fetchMock.mock.calls[1][1]?.body))
    expect(sent).toMatchObject({
      opportunityId: 'opp-123',
      calendlyEventUri: 'https://api.calendly.com/scheduled_events/event-123',
      calendlyInviteeUri: 'https://api.calendly.com/scheduled_event_invitees/invitee-123',
    })
  })

  it('masks the phone and blocks an invalid email before delivery', async () => {
    const fetchMock = vi.spyOn(globalThis, 'fetch')
    const { container } = await renderDiagnostic()
    fillForm()

    const phone = screen.getByLabelText(/WhatsApp/)
    fireEvent.change(phone, { target: { value: '11999991111' } })
    expect(phone).toHaveValue('(11) 99999-1111')

    const email = screen.getByLabelText(/E-mail/)
    fireEvent.change(email, { target: { value: 'email-invalido' } })
    fireEvent.submit(container.querySelector('form')!)

    expect(email).toHaveFocus()
    expect(fetchMock).not.toHaveBeenCalled()
  })

  it('ignores corrupted stored attribution and unverified booking query parameters', async () => {
    window.localStorage.setItem('sermst_diagnostico_attribution_v1', '{}')
    window.history.replaceState({}, '', '/diagnostico?schedule_complete=1')
    const { container } = await renderDiagnostic()
    expect(container.querySelectorAll('form')).toHaveLength(1)
    expect(container.querySelectorAll('[required]')).toHaveLength(8)
    expect(window.dataLayer).not.toContainEqual(expect.objectContaining({ event: 'diagnostico_schedule_complete' }))
  })
})
