'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

export function RouteAnalyticsTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const hasSkippedInitialPageViewRef = useRef(false)
  const previousLocationRef = useRef<string>('')
  const queryString = searchParams.toString()

  useEffect(() => {
    if (typeof window === 'undefined' || !pathname) {
      return
    }

    const pagePath = `${pathname}${queryString ? `?${queryString}` : ''}`
    const pageLocation = `${window.location.origin}${pagePath}`
    const pageReferrer = previousLocationRef.current || document.referrer || ''

    // O Google tag envia o page_view inicial e detecta as mudancas de historico
    // do App Router. Este componente publica apenas o evento tecnico no dataLayer.
    if (!hasSkippedInitialPageViewRef.current) {
      hasSkippedInitialPageViewRef.current = true
      previousLocationRef.current = pageLocation
      return
    }

    // Evita duplicidade causada por reexecucoes do efeito sem mudanca real de URL.
    if (previousLocationRef.current === pageLocation) {
      return
    }

    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({
      event: 'virtual_page_view',
      page_title: document.title,
      page_path: pagePath,
      page_location: pageLocation,
      page_referrer: pageReferrer,
    })

    previousLocationRef.current = pageLocation
  }, [pathname, queryString])

  return null
}
