'use client'

import { useEffect, useRef } from 'react'
import { usePathname, useSearchParams } from 'next/navigation'

const GOOGLE_TAG_ID = 'GT-M34VB4XR'

export function RouteAnalyticsTracker() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const previousLocationRef = useRef<string>('')
  const hasTrackedInitialPageRef = useRef(false)
  const queryString = searchParams.toString()

  useEffect(() => {
    if (typeof window === 'undefined' || !pathname) {
      return
    }

    const pagePath = `${pathname}${queryString ? `?${queryString}` : ''}`
    const pageLocation = `${window.location.origin}${pagePath}`
    const pageReferrer = previousLocationRef.current || document.referrer || ''

    if (!hasTrackedInitialPageRef.current) {
      hasTrackedInitialPageRef.current = true
      previousLocationRef.current = pageLocation
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

    if (typeof window.gtag === 'function') {
      window.gtag('config', GOOGLE_TAG_ID, {
        page_title: document.title,
        page_path: pagePath,
        page_location: pageLocation,
        page_referrer: pageReferrer,
      })
    }

    previousLocationRef.current = pageLocation
  }, [pathname, queryString])

  return null
}
