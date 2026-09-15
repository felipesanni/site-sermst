import type { Metadata } from 'next'
import { DiagnosticoClient } from './diagnostico-client'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Diagnóstico gratuito de SST | SERMST',
  description:
    'Solicite uma segunda visão gratuita sobre risco, custo e operação de Saúde e Segurança do Trabalho da sua empresa.',
  alternates: {
    canonical: 'https://sermst.com.br/diagnostico',
  },
  robots: {
    index: false,
    follow: false,
  },
  openGraph: {
    title: 'Diagnóstico gratuito de SST | SERMST',
    description:
      'Entenda se existem oportunidades de melhorar custos, processos e riscos na operação de SST da sua empresa.',
    url: 'https://sermst.com.br/diagnostico',
    siteName: 'SERMST',
    locale: 'pt_BR',
    type: 'website',
  },
}

export default function DiagnosticoPage() {
  const calendarUrl = process.env.CALENDAR_URL || process.env.NEXT_PUBLIC_CALENDAR_URL || ''
  const privacyUrl = process.env.NEXT_PUBLIC_PRIVACY_URL || 'https://sermst.com.br/politica-de-privacidade'

  return <DiagnosticoClient calendarUrl={calendarUrl} privacyUrl={privacyUrl} />
}
