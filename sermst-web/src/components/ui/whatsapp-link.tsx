'use client';

import { usePathname } from 'next/navigation';
import Image from 'next/image';

const PHONE = '5511915146447';

function getWhatsAppMessage(pathname: string): string {
  if (pathname === '/')
    return 'Olá! Vim pela Home do site da SERMST e gostaria de um orçamento';
  if (pathname.startsWith('/servicos'))
    return 'Olá! Vim pela página de Serviços da SERMST e gostaria de um orçamento';
  if (pathname.startsWith('/saude'))
    return 'Olá! Vim pela página de Saúde Ocupacional da SERMST e gostaria de mais informações';
  if (pathname.startsWith('/rh'))
    return 'Olá! Vim pela página de RH e eSocial da SERMST e preciso de ajuda';
  if (pathname.startsWith('/normas'))
    return 'Olá! Vim pela página de Normas Regulamentadoras da SERMST';
  if (pathname.startsWith('/treinamentos'))
    return 'Olá! Vim pela página de Treinamentos da SERMST e gostaria de um orçamento';
  if (pathname.startsWith('/dicionario'))
    return 'Olá! Vim pelo Dicionário SST da SERMST';
  if (pathname === '/contato')
    return 'Olá! Vim pela página de Contato da SERMST e gostaria de falar com a equipe';
  if (pathname === '/quem-somos')
    return 'Olá! Vim pela página Quem Somos da SERMST e gostaria de mais informações';
  if (pathname === '/a-clinica')
    return 'Olá! Vim pela página da Clínica SERMST e gostaria de mais informações';
  if (pathname === '/solucoes')
    return 'Olá! Vim pela página de Soluções da SERMST e gostaria de um orçamento';
  if (pathname === '/guia')
    return 'Olá! Vim pelo Guia de Encaminhamento da SERMST';
  return 'Olá! Vim pelo site da SERMST e gostaria de mais informações';
}

function buildUrl(pathname: string): string {
  return `https://wa.me/${PHONE}?text=${encodeURIComponent(getWhatsAppMessage(pathname))}`;
}

/** Botão rosa do topo (desktop) */
export function WhatsAppHeaderLink() {
  const pathname = usePathname();
  return (
    <a
      href={buildUrl(pathname)}
      target="_blank"
      rel="noopener noreferrer"
      className="force-pink-btn flex items-center gap-2 rounded px-6 py-2 text-sm font-bold text-white shadow-lg transition-colors"
    >
      <Image
        src="/images/site/whatsapp.png"
        alt="WhatsApp"
        width={20}
        height={20}
        className="h-5 w-5 object-contain brightness-0 invert"
      />
      (11) 91514-6447
    </a>
  );
}

/** Link textual do topo (desktop) */
export function WhatsAppHeaderTextLink() {
  const pathname = usePathname();
  return (
    <a
      href={buildUrl(pathname)}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-accent-pink"
    >
      <Image
        src="/images/site/whatsapp.png"
        alt="WhatsApp"
        width={16}
        height={16}
        className="h-4 w-4 object-contain"
      />
      Falar no WhatsApp
    </a>
  );
}

/** Botão do menu mobile */
export function WhatsAppMobileLink() {
  const pathname = usePathname();
  return (
    <a
      href={buildUrl(pathname)}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 rounded-2xl bg-accent-pink px-4 py-3 text-sm font-bold text-white shadow-lg"
    >
      <Image
        src="/images/site/whatsapp.png"
        alt="WhatsApp"
        width={16}
        height={16}
        className="h-4 w-4 object-contain brightness-0 invert"
      />
      WhatsApp
    </a>
  );
}

/** Botão flutuante (canto inferior direito) */
export function WhatsAppFloatingButton() {
  const pathname = usePathname();
  return (
    <a
      href={buildUrl(pathname)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Fale pelo WhatsApp"
      className="force-whatsapp-bg fixed bottom-6 right-6 z-50 flex items-center justify-center rounded-full border-2 border-white p-4 shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-transform hover:scale-110"
    >
      <Image
        src="/images/site/whatsapp.png"
        alt="WhatsApp"
        width={32}
        height={32}
        className="h-8 w-8 object-contain brightness-0 invert drop-shadow-md"
      />
      <span className="force-pink-btn absolute -right-1 -top-1 h-4 w-4 animate-pulse rounded-full border-2 border-white" />
    </a>
  );
}
