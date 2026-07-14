'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { WhatsAppMobileLink } from '@/components/ui/whatsapp-link';

const navigationItems = [
  { href: '/', label: 'Início' },
  { href: '/quem-somos', label: 'Quem Somos (+55 anos)' },
  { href: '/servicos', label: 'Exames e Laudos' },
  { href: '/rh', label: 'RH e eSocial' },
  { href: '/saude', label: 'Saúde Ocupacional' },
  { href: '/normas', label: 'Normas Regulamentadoras' },
  { href: '/dicionario', label: 'Dicionário SST' },
  { href: '/assinaturas', label: 'Planos de SST' },
  { href: '/contato', label: 'Contato' },
];

export function MobileNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isOpen]);

  return (
    <div className="md:hidden">
      <div className="flex min-h-[74px] w-full items-center justify-between gap-3 bg-white py-3">
        <Link href="/" className="flex items-center" aria-label="Página inicial da SERMST">
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
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
          <button
            type="button"
            aria-label="Abrir menu principal"
            aria-controls="mobile-navigation-panel"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(true)}
            className="relative z-50 flex h-11 w-11 items-center justify-center rounded-full bg-brand-900 text-white shadow-[0_10px_22px_-12px_rgba(11,19,60,0.8)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-800 active:scale-95"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {isOpen ? (
        <div
          id="mobile-navigation-panel"
          role="dialog"
          aria-modal="true"
          aria-label="Menu principal"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-[#0B133C]/95 px-6 pb-20 pt-6 backdrop-blur-xl"
        >
          <div className="mb-10 flex items-center justify-between">
            <Image
              src="/images/site/logo-branco.png"
              alt="SERMST"
              width={130}
              height={40}
              className="h-10 w-auto"
            />
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Fechar menu principal"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="mb-10 grid grid-cols-2 gap-3">
            <a
              href="tel:+551132297567"
              className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-bold text-white"
            >
              <svg className="h-4 w-4 text-accent-pink" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Ligar
            </a>
            <WhatsAppMobileLink />
          </div>

          <Link
            href="/rh/calculadora-cnae-grau-de-risco"
            onClick={() => setIsOpen(false)}
            className="mb-8 flex items-start justify-between gap-4 rounded-3xl border border-accent-pink/25 bg-gradient-to-br from-accent-pink/18 via-accent-pink/10 to-white/5 px-5 py-5 text-white shadow-[0_20px_50px_-30px_rgba(248,67,101,0.75)]"
          >
            <div className="space-y-1">
              <p className="text-xs font-black uppercase tracking-[0.28em] text-accent-pink">Diagnóstico guiado</p>
              <p className="text-lg font-black leading-tight">Abrir Calculadora de Risco</p>
              <p className="text-sm leading-relaxed text-slate-300">
                Consulte CNPJ ou CNAE, veja grau de risco, RAT, SESMT e NR-05/CIPA antes de falar com o comercial.
              </p>
            </div>
            <svg className="mt-1 h-5 w-5 shrink-0 text-white/80" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>

          <nav aria-label="Navegação principal" className="flex flex-col gap-6 text-xl font-medium text-white">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between border-b border-white/10 pb-4"
              >
                <span className={item.href === '/' ? 'text-accent-pink' : undefined}>{item.label}</span>
                <svg className="h-5 w-5 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </div>
  );
}
