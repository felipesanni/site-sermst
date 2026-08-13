'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Garante que toda mudança de rota role a janela para o topo.
 * O Next.js App Router já faz isso na maioria dos casos, mas falha
 * em rotas com segmentos compartilhados ou ao usar o botão Voltar.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  return null;
}
