"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Fecha o menu mobile ao navegar para qualquer rota.
 * O menu usa input[type=checkbox]#mobile-menu-open (CSS-only toggle).
 * Como o Next.js não faz full-page reload em SPA, o checkbox ficaria
 * marcado após a navegação — este componente reseta automaticamente.
 */
export function MobileMenuClose() {
  const pathname = usePathname();

  useEffect(() => {
    const checkbox = document.getElementById("mobile-menu-open") as HTMLInputElement | null;
    if (checkbox) checkbox.checked = false;
  }, [pathname]);

  return null;
}
