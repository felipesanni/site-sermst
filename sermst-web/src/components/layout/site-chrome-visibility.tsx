'use client'

import { usePathname } from 'next/navigation'

/**
 * The diagnostic funnel is intentionally isolated from the main site's
 * navigation and commercial widgets. Keeping this boundary here means the
 * regular site chrome remains unchanged for every other route.
 */
export function SiteChromeVisibility({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  if (pathname === '/diagnostico' || pathname.startsWith('/diagnostico/')) {
    return null
  }

  return children
}
