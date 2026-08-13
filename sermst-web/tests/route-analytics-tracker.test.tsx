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

  it('publica um evento tecnico por navegacao interna sem enviar page_view manual', () => {
    const view = render(<RouteAnalyticsTracker />)

    navigationState.pathname = '/servicos'
    view.rerender(<RouteAnalyticsTracker />)
    view.rerender(<RouteAnalyticsTracker />)

    expect(window.gtag).not.toHaveBeenCalled()
    expect(window.dataLayer).toEqual([
      expect.objectContaining({
        event: 'virtual_page_view',
        page_path: '/servicos',
      }),
    ])
  })

  it('publica novo evento tecnico quando a query string muda', () => {
    const view = render(<RouteAnalyticsTracker />)

    navigationState.queryString = 'origem=teste'
    view.rerender(<RouteAnalyticsTracker />)

    expect(window.gtag).not.toHaveBeenCalled()
    expect(window.dataLayer).toContainEqual(
      expect.objectContaining({
        event: 'virtual_page_view',
        page_path: '/?origem=teste',
      }),
    )
  })
})
