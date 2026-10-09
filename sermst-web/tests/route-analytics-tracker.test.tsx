// @vitest-environment jsdom

import { cleanup, render } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { RouteAnalyticsTracker } from '@/components/analytics/route-analytics-tracker'
import { readDiagnosticAttribution } from '@/lib/diagnostic-attribution'

const navigationState = vi.hoisted(() => ({ pathname: '/', queryString: '' }))

vi.mock('next/navigation', () => ({
  usePathname: () => navigationState.pathname,
  useSearchParams: () => new URLSearchParams(navigationState.queryString),
}))

describe('RouteAnalyticsTracker', () => {
  beforeEach(() => {
    navigationState.pathname = '/'
    navigationState.queryString = ''
    window.history.replaceState({}, '', '/')
    window.sessionStorage.clear()
    window.localStorage.clear()
    Object.defineProperty(document, 'referrer', { configurable: true, value: '' })
    window.dataLayer = []
    window.gtag = vi.fn()
  })

  afterEach(() => {
    cleanup()
    vi.restoreAllMocks()
  })

  it('nao duplica o page_view inicial enviado automaticamente pelo gtag', () => {
    render(<RouteAnalyticsTracker />)

    expect(window.gtag).not.toHaveBeenCalled()
    expect(window.dataLayer).toEqual([])
  })

  it('publica um evento tecnico por navegacao interna sem enviar page_view manual', () => {
    const view = render(<RouteAnalyticsTracker />)

    navigationState.pathname = '/servicos'
    window.history.pushState({}, '', '/servicos')
    view.rerender(<RouteAnalyticsTracker />)
    view.rerender(<RouteAnalyticsTracker />)

    expect(window.gtag).not.toHaveBeenCalled()
    expect(window.dataLayer).toEqual([
      expect.objectContaining({ event: 'virtual_page_view', page_path: '/servicos' }),
    ])
  })

  it('publica novo evento tecnico quando a query string muda', () => {
    const view = render(<RouteAnalyticsTracker />)

    navigationState.queryString = 'origem=teste'
    window.history.pushState({}, '', '/?origem=teste')
    view.rerender(<RouteAnalyticsTracker />)

    expect(window.gtag).not.toHaveBeenCalled()
    expect(window.dataLayer).toContainEqual(expect.objectContaining({
      event: 'virtual_page_view', page_path: '/?origem=teste',
    }))
  })

  it('preserva a busca orgânica durante navegacao client-side do artigo ao diagnostico', () => {
    Object.defineProperty(document, 'referrer', {
      configurable: true,
      value: 'https://www.google.com.br/search?q=gestao+sst',
    })
    navigationState.pathname = '/saude/gestao-sst'
    window.history.replaceState({}, '', '/saude/gestao-sst')
    const view = render(<RouteAnalyticsTracker />)

    navigationState.pathname = '/solucoes'
    window.history.pushState({}, '', '/solucoes')
    view.rerender(<RouteAnalyticsTracker />)
    navigationState.pathname = '/diagnostico'
    window.history.pushState({}, '', '/diagnostico')
    view.rerender(<RouteAnalyticsTracker />)

    expect(readDiagnosticAttribution(window.sessionStorage)).toMatchObject({
      first: { page: 'http://localhost:3000/saude/gestao-sst', sourceClassification: 'google_organic' },
      last: { sourceClassification: 'google_organic', referrer: 'https://www.google.com.br/' },
      currentPage: '/diagnostico',
      diagnosticReferralPage: '/solucoes',
    })
    expect(window.dataLayer).toHaveLength(2)
  })

  it('nao reutiliza a atribuicao antiga persistida em localStorage', () => {
    window.localStorage.setItem('sermst_diagnostico_attribution_v1', JSON.stringify({
      first: { page: 'https://sermst.com.br/old', capturedAt: 'old', sourceClassification: 'instagram_organic' },
      last: { page: 'https://sermst.com.br/old', capturedAt: 'old', sourceClassification: 'instagram_organic' },
    }))

    render(<RouteAnalyticsTracker />)

    expect(readDiagnosticAttribution(window.sessionStorage)).toMatchObject({
      first: { sourceClassification: 'direct', page: 'http://localhost:3000/' },
      last: { sourceClassification: 'direct' },
    })
  })
})