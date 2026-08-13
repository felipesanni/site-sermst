import type { Metadata } from 'next';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Apresentação comercial | SERMST',
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
  },
};

/**
 * Entry point for the standalone commercial presentation stored in /public.
 * The explicit file remains independent from the site's React shell while
 * this route makes the friendly URL work in the Next.js deployment.
 */
export default function ApresentacaoComercialPage() {
  redirect('/apresentacao-comercial/index.html');
}
