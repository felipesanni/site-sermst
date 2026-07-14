// @vitest-environment jsdom

import { cleanup, render } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { RouteAnalyticsTracker } from '@/components/analytics/route-analytics-tracker'

const navigationState = vi.hoisted(() => ({
  pathname: '/',
  queryString: '',
}))

vi.mock('next/navigation', () => ({
  usePathname: () => navigationState.pathname,
  useSearchParams: () => new URLSearchParams(navigationState.queryString),
}))

describe('RouteAnalyticsTracker', () => {
  beforeEach(() => {
    navigationState.pathname = '/'
    navigationState.queryString = ''
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

  it('envia um page_view por navegacao interna e ignora rerenders da mesma URL', () => {
    const view = render(<RouteAnalyticsTracker />)

    navigationState.pathname = '/servicos'
    view.rerender(<RouteAnalyticsTracker />)
    view.rerender(<RouteAnalyticsTracker />)

    expect(window.gtag).toHaveBeenCalledTimes(1)
    expect(window.gtag).toHaveBeenCalledWith(
      'event',
      'page_view',
      expect.objectContaining({
        send_to: 'G-PZN2BZ7JFV',
        page_path: '/servicos',
        page_location: 'http://localhost:3000/servicos',
        page_referrer: 'http://localhost:3000/',
      }),
    )
    expect(window.dataLayer).toEqual([
      expect.objectContaining({
        event: 'virtual_page_view',
        page_path: '/servicos',
      }),
    ])
  })

  it('considera mudancas de query string como uma nova rota', () => {
    const view = render(<RouteAnalyticsTracker />)

    navigationState.queryString = 'origem=teste'
    view.rerender(<RouteAnalyticsTracker />)

    expect(window.gtag).toHaveBeenCalledTimes(1)
    expect(window.gtag).toHaveBeenCalledWith(
      'event',
      'page_view',
      expect.objectContaining({ page_path: '/?origem=teste' }),
    )
  })
})
