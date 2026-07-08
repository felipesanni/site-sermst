import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'
import './globals.css'
import Script from 'next/script'
import { RouteAnalyticsTracker } from '@/components/analytics/route-analytics-tracker'
import { MobileMenuClose } from '@/components/ui/mobile-menu-close'
import { WhatsAppHeaderTextLink, WhatsAppMobileLink, WhatsAppFloatingButton } from '@/components/ui/whatsapp-link'
import { ScrollToTop } from '@/components/ui/scroll-to-top'

const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'optional' })
const outfit = Outfit({ subsets: ['latin'], variable: '--font-heading', display: 'optional' })

export const metadata: Metadata = {
  metadataBase: new URL('https://sermst.com.br'),
  title: 'SERMST | Gestão Ocupacional e Medicina do Trabalho',
  description:
    'Há mais de 40 anos cuidando da saúde e segurança do trabalho do seu negócio. Prevenção de multas do eSocial, PCMSO, PGR e laudos técnicos.',
  keywords: [
    'Medicina do Trabalho',
    'Segurança do Trabalho',
    'Gestão Ocupacional',
    'eSocial S-2220',
    'PGR',
    'PCMSO',
    'LTCAT',
    'Exames Admissionais',
  ],
  authors: [{ name: 'SERMST' }],
  publisher: 'SERMST',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://sermst.com.br',
  },
  openGraph: {
    title: 'SERMST | Gestão Ocupacional',
    description: 'Tecnologia e blindagem jurídica para seu negócio através da Medicina Corporativa.',
    url: 'https://sermst.com.br',
    siteName: 'SERMST',
    images: [
      {
        url: '/images/site/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Gestão Ocupacional SERMST',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    // title e description omitidos intencionalmente:
    // Next.js herda automaticamente os valores de openGraph de cada página,
    // garantindo Twitter Cards únicos por rota (Passo 9 da auditoria SEO)
    images: ['/images/site/og-cover.jpg'],
  },
  other: {
    'geo.placename': 'São Paulo, SP, Brasil',
    'geo.position': '-23.543;-46.637',
    'geo.region': 'BR-SP',
    'ICBM': '-23.543, -46.637',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['MedicalOrganization', 'LocalBusiness'],
  '@id': 'https://sermst.com.br/#organization',
  name: 'SERMST - Gestão Ocupacional e Medicina do Trabalho',
  legalName: 'SERMST Gestão Ocupacional Ltda',
  alternateName: 'SERMST',
  taxID: '28.125.178/0001-88',
  url: 'https://sermst.com.br',
  logo: {
    '@type': 'ImageObject',
    url: 'https://sermst.com.br/images/site/logo-cor.png',
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://sermst.com.br/images/site/og-cover.jpg',
  },
  description:
    'Há mais de 40 anos prestando serviços de Medicina e Segurança do Trabalho para empresas de São Paulo e Grande ABC. PCMSO, PGR, LTCAT, ASO Expresso e Gestão eSocial.',
  foundingDate: '1983',
  telephone: '+55-11-91514-6447',
  email: 'comercial@sermst.com.br',
  medicalSpecialty: 'OccupationalMedicine',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Largo do Paissandu, 72, 3º Andar, Conjunto 301',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    postalCode: '01034-901',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -23.543,
    longitude: -46.637,
  },
  hasMap: 'https://maps.app.goo.gl/TcAza8i3jHKjHfjr5',
  areaServed: [
    'São Paulo',
    'Santo André',
    'São Bernardo do Campo',
    'São Caetano do Sul',
    'Diadema',
    'Osasco',
    'Guarulhos',
    'Barueri',
  ],
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: '+55-11-91514-6447',
      email: 'comercial@sermst.com.br',
      areaServed: 'BR',
      availableLanguage: ['pt-BR'],
    },
  ],
  sameAs: [
    'https://wa.me/5511915146447',
    'https://www.instagram.com/sermstocupacional/',
    'https://www.facebook.com/sermstocupacional',
    'https://www.linkedin.com/company/sermst-gest%C3%A3o-ocupacional',
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '17:30',
    },
  ],
  priceRange: '$$',
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://sermst.com.br/#website',
  url: 'https://sermst.com.br',
  name: 'SERMST',
  publisher: { '@id': 'https://sermst.com.br/#organization' },
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://sermst.com.br/dicionario?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

const strategicLinks = [
  { name: 'Exame Admissional Expresso', link: '/servicos/exame-admissional-expresso' },
  { name: 'Empresa de Segurança do Trabalho', link: '/servicos/empresa-seguranca-do-trabalho' },
  { name: 'Servico de PGR NR-01', link: '/servicos/pgr-nr01-gerenciamento-riscos' },
  { name: 'PCMSO e Saúde Ocupacional', link: '/servicos/pcmso-nr07-programa' },
  { name: 'Servico de LTCAT previdenciario', link: '/servicos/ltcat-laudo-tecnico-previdenciario' },
  { name: 'Gestão eSocial S-2220/S-2240', link: '/servicos/gestao-esocial-s2220-s2240' },
  { name: 'Audiometria Ocupacional', link: '/servicos/audiometria-ocupacional-clinica' },
  { name: 'Exame Toxicológico para CNH C, D e E', link: '/servicos/exame-toxicologico-clt' },
  { name: 'Exames Complementares', link: '/servicos/exames-complementares-laboratoriais' },
  { name: 'Perícia Trabalhista', link: '/servicos/pericia-trabalhista-assistente-tecnico' },
  { name: 'Treinamentos de NRs', link: '/servicos/treinamentos-nrs-cipa-brigada' },
  { name: 'Planos de SST por Assinatura', link: '/assinaturas' },
]

const servedRegions = [
  { name: 'São Paulo', slug: 'sao-paulo' },
  { name: 'Santo André', slug: 'santo-andre' },
  { name: 'Osasco', slug: 'osasco' },
  { name: 'Guarulhos', slug: 'guarulhos' },
  { name: 'Diadema', slug: 'diadema' },
  { name: 'S.B. Campo', slug: 'sao-bernardo' },
  { name: 'Barueri', slug: 'barueri' },
  { name: 'S. Caetano', slug: 'sao-caetano' },
]

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      {/* ── ChunkLoadError auto-reload ──────────────────────────────────────
           Quando um deploy novo substitui os hashes dos chunks JS, o browser
           pode ter o HTML antigo em cache e tentar carregar chunks que não
           existem mais. O servidor retorna HTML (404) → MIME text/html →
           nosniff bloqueia → "page couldn't load". F5 resolve porque
           baixa o HTML novo com os hashes corretos.
           Este script faz o F5 automaticamente, com proteção contra loop. */}
      <Script
        id="chunk-error-handler"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
(function(){
  var RELOAD_KEY = '__cle_reloaded__';
  function isChunkError(msg) {
    return msg && (
      msg.indexOf('ChunkLoadError') !== -1 ||
      msg.indexOf('Loading chunk') !== -1 ||
      msg.indexOf('Failed to fetch dynamically imported module') !== -1 ||
      msg.indexOf('Importing a module script failed') !== -1
    );
  }
  function safeReload() {
    try {
      if (sessionStorage.getItem(RELOAD_KEY)) return;
      sessionStorage.setItem(RELOAD_KEY, '1');
      window.location.reload();
    } catch(e) {}
  }
  // Limpa a flag ao carregar com sucesso
  window.addEventListener('load', function() {
    try { sessionStorage.removeItem(RELOAD_KEY); } catch(e) {}
  });
  // Captura erros de módulo dinâmico (promessas rejeitadas)
  window.addEventListener('unhandledrejection', function(e) {
    var r = e.reason;
    if (!r) return;
    var msg = (r.name || '') + ' ' + (r.message || '');
    if (isChunkError(msg)) safeReload();
  });
  // Captura erros síncronos de script
  window.addEventListener('error', function(e) {
    var msg = (e.message || '') + ' ' + (e.filename || '');
    if (isChunkError(msg)) safeReload();
  }, true);
})();
          `,
        }}
      />
      {/* ── Google Tag Manager ── */}
      <Script
        id="gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-N7NL2D9B');`,
        }}
      />
      {/* ── Meta Pixel (direto, não via GTM) ── */}
      <Script
        id="google-tag-src"
        src="https://www.googletagmanager.com/gtag/js?id=GT-M34VB4XR"
        strategy="afterInteractive"
      />
      <Script
        id="google-tag-config"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = window.gtag || gtag;
gtag('set', 'linker', { domains: ['sermst.com.br'] });
gtag('js', new Date());
gtag('set', 'developer_id.dZTNiMT', true);
gtag('config', 'GT-M34VB4XR', { send_page_view: false });
gtag('config', 'AW-11548872057');
          `,
        }}
      />
      {/* ── Meta Pixel (direto, não via GTM) ── */}
      <Script
        id="meta-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init','3362485210720558');fbq('track','PageView');`,
        }}
      />
      </head>
      <body className="flex min-h-screen flex-col">
        <Suspense fallback={null}>
          <RouteAnalyticsTracker />
        </Suspense>
        <ScrollToTop />
        {/* GTM noscript fallback */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-N7NL2D9B"
            height="0" width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* Meta Pixel noscript fallback */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1" width="1" style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=3362485210720558&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <style
          dangerouslySetInnerHTML={{
            __html: `
              :root {
                --font-sans: ${inter.style.fontFamily};
                --font-heading: ${outfit.style.fontFamily};
              }
              .force-pink-btn { background-color: #E31B45 !important; border-color: rgba(227, 27, 69, 0.45) !important; color: white !important; }
              .force-pink-btn:hover { background-color: #c4163b !important; color: white !important; }
              .force-whatsapp-bg { background-color: #25D366 !important; }
              .force-pink-text { color: #E31B45 !important; }
              .force-pink-border { border-color: #E31B45 !important; }
              .hover-fb:hover { background-color: #1877F2 !important; color: white !important; }
              .hover-ig:hover { background-color: #E4405F !important; color: white !important; }
              .hover-li:hover { background-color: #0A66C2 !important; color: white !important; }
              .hover-yt:hover { background-color: #FF0000 !important; color: white !important; }
              .social-hover:hover .social-icon { fill: white !important; }
            `,
          }}
        />

        <div className="relative z-50 hidden bg-brand-900 py-3 text-white shadow-md md:block">
          <div className="mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-4 px-6 md:flex-row lg:px-8">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/site/logo-branco.png"
                alt="SERMST Gestão Ocupacional"
                width={160}
                height={48}
                className="h-12 w-auto object-contain"
                priority
              />
            </Link>

            <div className="flex flex-wrap items-center justify-center gap-4 md:justify-end md:gap-8">
              <WhatsAppHeaderTextLink />
              <a href="mailto:comercial@sermst.com.br" className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent-pink">
                <svg className="h-4 w-4 text-accent-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                comercial@sermst.com.br
              </a>
              <Link
                href="/rh/calculadora-cnae-grau-de-risco"
                className="force-pink-btn btn-glow-pulse inline-flex items-center gap-2 rounded-full px-6 py-2 text-sm font-bold text-white transition-colors"
              >
                Calcular Meu Risco
              </Link>
            </div>
          </div>
        </div>

        <header className="sticky top-0 z-40 border-b border-slate-200 bg-white shadow-sm">
          <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
            <div className="hidden h-20 items-center justify-between md:flex">
              <nav className="hidden h-full items-center gap-8 text-[14px] font-semibold uppercase tracking-wide text-slate-700 md:flex">
                <Link href="/" className="force-pink-border force-pink-text flex h-full items-center border-b-2 border-transparent hover:force-pink-border hover:force-pink-text">Home</Link>
                <Link href="/quem-somos" className="flex h-full items-center border-b-2 border-transparent transition-colors hover:border-slate-300 hover:text-[#0B133C]">Quem Somos</Link>
                <Link href="/servicos" className="flex h-full items-center border-b-2 border-transparent transition-colors hover:border-slate-300 hover:text-[#0B133C]">Serviços</Link>
                <Link href="/rh" className="flex h-full items-center border-b-2 border-transparent transition-colors hover:border-slate-300 hover:text-[#0B133C]">RH e eSocial</Link>
                <Link href="/saude" className="flex h-full items-center border-b-2 border-transparent transition-colors hover:border-slate-300 hover:text-[#0B133C]">Saúde Ocupacional</Link>
                <Link href="/normas" className="flex h-full items-center border-b-2 border-transparent transition-colors hover:border-slate-300 hover:text-[#0B133C]">Normas (NR)</Link>
                <Link href="/assinaturas" className="flex h-full items-center border-b-2 border-transparent transition-colors hover:border-slate-300 hover:text-[#0B133C]">Planos</Link>
                <Link href="/contato" className="flex h-full items-center border-b-2 border-transparent transition-colors hover:border-slate-300 hover:text-[#0B133C]">Contato</Link>
              </nav>

              <div className="hidden items-center gap-2 text-slate-500 lg:flex">
                <a href="https://www.facebook.com/sermstocupacional" aria-label="Facebook" target="_blank" rel="noopener noreferrer" className="social-hover hover-fb flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 transition-colors">
                  <svg className="social-icon h-4 w-4 fill-slate-500 transition-colors" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                </a>
                <a href="https://www.instagram.com/sermstocupacional/" aria-label="Instagram" target="_blank" rel="noopener noreferrer" className="social-hover hover-ig flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 transition-colors">
                  <svg className="social-icon h-4 w-4 fill-slate-500 transition-colors" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/sermst-gest%C3%A3o-ocupacional" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="social-hover hover-li flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 transition-colors">
                  <svg className="social-icon h-4 w-4 fill-slate-500 transition-colors" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://www.youtube.com/@sermstocupacional" aria-label="YouTube" target="_blank" rel="noopener noreferrer" className="social-hover hover-yt flex h-8 w-8 items-center justify-center rounded-full bg-slate-100 transition-colors">
                  <svg className="social-icon h-4 w-4 fill-slate-500 transition-colors" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <div className="flex min-h-[74px] w-full items-center justify-between gap-3 bg-white py-3">
                <input type="checkbox" id="mobile-menu-open" className="peer hidden" />
                <Link href="/" className="flex items-center">
                  <Image
                    src="/images/site/logo-sermst-mobile.png"
                    alt="SERMST Gestão Ocupacional"
                    width={172}
                    height={48}
                    className="h-11 w-auto object-contain"
                    priority
                  />
                </Link>

                <div className="flex items-center gap-3">
                  <a
                    href="tel:+551132297567"
                    aria-label="Ligar para SERMST"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-900 shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-brand-900 hover:bg-slate-50 active:scale-95"
                  >
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                  </a>
                  <label htmlFor="mobile-menu-open" className="relative z-50 flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-brand-900 text-white shadow-[0_10px_22px_-12px_rgba(11,19,60,0.8)] transition-all duration-200 peer-checked:opacity-0 hover:-translate-y-0.5 hover:bg-brand-800 active:scale-95">
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" /></svg>
                  </label>
                </div>

                <div className="fixed inset-0 z-50 flex translate-x-full flex-col overflow-y-auto bg-[#0B133C]/95 px-6 pb-20 pt-6 backdrop-blur-xl transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] peer-checked:translate-x-0">
                  <div className="mb-10 flex items-center justify-between">
                    <Image src="/images/site/logo-branco.png" alt="SERMST" width={130} height={40} className="h-10 w-auto" />
                    <label htmlFor="mobile-menu-open" className="cursor-pointer rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20">
                      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </label>
                  </div>

                  <div className="mb-10 grid grid-cols-2 gap-3">
                    <a
                      href="tel:+551132297567"
                      className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white"
                    >
                      <svg className="h-4 w-4 text-accent-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                      Ligar
                    </a>
                    <WhatsAppMobileLink />
                  </div>

                  <Link
                    href="/rh/calculadora-cnae-grau-de-risco"
                    className="mb-8 flex items-start justify-between gap-4 rounded-3xl border border-accent-pink/25 bg-gradient-to-br from-accent-pink/18 via-accent-pink/10 to-white/5 px-5 py-5 text-white shadow-[0_20px_50px_-30px_rgba(248,67,101,0.75)]"
                  >
                    <div className="space-y-1">
                      <p className="text-xs font-black uppercase tracking-[0.28em] text-accent-pink">Diagnóstico guiado</p>
                      <p className="text-lg font-black leading-tight">Abrir Calculadora de Risco</p>
                      <p className="text-sm leading-relaxed text-slate-300">
                        Consulte CNPJ ou CNAE, veja grau de risco, RAT, SESMT e NR-05/CIPA antes de falar com o comercial.
                      </p>
                    </div>
                    <svg className="mt-1 h-5 w-5 shrink-0 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                  </Link>

                  <nav className="flex flex-col gap-6 text-xl font-medium text-white">
                    <Link href="/" className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span style={{ color: '#F84365' }}>Início</span>
                      <svg className="h-5 w-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                    </Link>
                    <Link href="/quem-somos" className="flex items-center justify-between border-b border-white/10 pb-4">
                      Quem Somos (+40 anos)
                      <svg className="h-5 w-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                    </Link>
                    <Link href="/servicos" className="flex items-center justify-between border-b border-white/10 pb-4">
                      Exames e Laudos
                      <svg className="h-5 w-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                    </Link>
                    <Link href="/rh" className="flex items-center justify-between border-b border-white/10 pb-4">
                      RH e eSocial
                      <svg className="h-5 w-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                    </Link>
                    <Link href="/saude" className="flex items-center justify-between border-b border-white/10 pb-4">
                      Saúde Ocupacional
                      <svg className="h-5 w-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                    </Link>
                    <Link href="/normas" className="flex items-center justify-between border-b border-white/10 pb-4">
                      Normas Regulamentadoras
                      <svg className="h-5 w-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                    </Link>
                    <Link href="/dicionario" className="flex items-center justify-between border-b border-white/10 pb-4">
                      Dicionário SST
                      <svg className="h-5 w-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                    </Link>
                    <Link href="/assinaturas" className="flex items-center justify-between border-b border-white/10 pb-4">
                      Planos de SST
                      <svg className="h-5 w-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                    </Link>
                    <Link href="/contato" className="flex items-center justify-between border-b border-white/10 pb-4">
                      Contato
                      <svg className="h-5 w-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </header>

        <MobileMenuClose />
        <main className="flex-1">{children}</main>

        <WhatsAppFloatingButton />

        <footer className="relative overflow-hidden border-t border-white/5 bg-[#05091C] py-24 text-slate-400">
          <div className="absolute left-0 top-0 h-[1px] w-full bg-gradient-to-r from-transparent via-accent-pink to-transparent opacity-50"></div>

          <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-12">
              <div className="flex flex-col gap-8">
                <Image src="/images/site/logo-branco.png" alt="SERMST" width={160} height={48} className="h-12 w-auto self-start object-contain" />
                <p className="text-lg font-medium leading-relaxed text-slate-300">
                  Há mais de 40 anos, a <span className="font-bold text-white">SERMST</span> é o pilar de segurança e saúde ocupacional para empresas que buscam <span className="font-black italic text-accent-pink underline decoration-accent-pink/30 underline-offset-4">menor exposição a multas, passivos trabalhistas e falhas operacionais em SST.</span>
                </p>
              </div>

              <div>
                <h4 className="mb-10 border-b border-white/5 pb-4 text-sm font-black uppercase tracking-[0.2em] text-white">Soluções Corporativas</h4>
                <ul className="space-y-5">
                  {strategicLinks.map((item) => (
                    <li key={item.name}>
                      <Link href={item.link} className="group flex items-center gap-3 text-slate-400 transition-colors hover:text-white">
                        <span className="h-1.5 w-1.5 rounded-full bg-accent-pink/40 transition-colors group-hover:bg-accent-pink"></span>
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="mb-10 border-b border-white/5 pb-4 text-sm font-black uppercase tracking-[0.2em] text-white">Unidade Central</h4>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent-pink/20 bg-accent-pink/10">
                      <svg className="h-5 w-5 text-accent-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path></svg>
                    </div>
                    <a
                      href="https://maps.app.goo.gl/TcAza8i3jHKjHfjr5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block transition-colors hover:text-accent-pink"
                    >
                      <p className="mb-1 text-xs font-black uppercase text-white transition-colors hover:text-accent-pink">Largo do Paissandu, 72</p>
                      <p className="text-sm leading-relaxed text-slate-400 transition-colors hover:text-slate-300">Centro Histórico, 3º Andar<br />São Paulo - SP | 01034-901</p>
                    </a>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accent-pink/20 bg-accent-pink/10">
                      <svg className="h-5 w-5 text-accent-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                    </div>
                    <div>
                      <p className="mb-1 text-xs font-black uppercase text-white">Canais Oficiais</p>
                      <a
                        href="tel:+551132297567"
                        className="block text-sm text-slate-400 transition-colors hover:text-accent-pink"
                      >
                        (11) 3229-7567
                      </a>
                      <a
                        href="mailto:comercial@sermst.com.br"
                        className="block text-sm font-semibold text-slate-200 transition-colors hover:text-accent-pink"
                      >
                        comercial@sermst.com.br
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="mb-10 border-b border-white/5 pb-4 text-sm font-black uppercase tracking-[0.2em] text-white">Regiões Atendidas</h4>
                <div className="grid grid-cols-2 gap-4">
                  {servedRegions.map((region) => (
                    <Link key={region.slug} href={`/servicos/exame-admissional-expresso/${region.slug}`} className="text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors hover:text-accent-pink">
                      {region.name}
                    </Link>
                  ))}
                </div>

                <h4 className="mt-10 mb-6 border-b border-white/5 pb-4 text-sm font-black uppercase tracking-[0.2em] text-white">Conhecimento SST</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/saude" className="group flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-pink/40 transition-colors group-hover:bg-accent-pink"></span>
                      <span className="font-medium">Hub Saúde Ocupacional</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/rh" className="group flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-pink/40 transition-colors group-hover:bg-accent-pink"></span>
                      <span className="font-medium">Hub RH e DP</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/normas" className="group flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-pink/40 transition-colors group-hover:bg-accent-pink"></span>
                      <span className="font-medium">Normas Regulamentadoras</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/dicionario" className="group flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-pink/40 transition-colors group-hover:bg-accent-pink"></span>
                      <span className="font-medium">Dicionário SST</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/quem-somos" className="group flex items-center gap-3 text-sm text-slate-400 transition-colors hover:text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent-pink/40 transition-colors group-hover:bg-accent-pink"></span>
                      <span className="font-medium">Quem somos</span>
                    </Link>
                  </li>
                </ul>

                <div className="mt-8 border-t border-white/5 pt-8">
                  <div className="text-[10px] font-black uppercase tracking-widest leading-relaxed text-slate-600">
                    CRM 1002913 | CNPJ 28.125.178/0001-88
                    <br />
                    &copy; {new Date().getFullYear()} SERMST Gestão Ocupacional
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
