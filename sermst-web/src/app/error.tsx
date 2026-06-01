'use client';

/**
 * Route-level error boundary (Next.js App Router).
 *
 * Detecta ChunkLoadError — causado por chunks JS obsoletos após um novo deploy —
 * e recarrega a página automaticamente (equivalente a um F5).
 * A flag sessionStorage evita loop infinito caso o reload não resolva.
 */

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    const msg = `${error?.name ?? ''} ${error?.message ?? ''}`;
    const isChunkError =
      msg.includes('ChunkLoadError') ||
      msg.includes('Loading chunk') ||
      msg.includes('Failed to fetch dynamically imported module') ||
      msg.includes('Importing a module script failed');

    if (isChunkError) {
      const RELOAD_KEY = '__cle_reloaded__';
      try {
        if (!sessionStorage.getItem(RELOAD_KEY)) {
          sessionStorage.setItem(RELOAD_KEY, '1');
          window.location.reload();
          return;
        }
      } catch {
        // sessionStorage indisponível — tenta reload mesmo assim (uma vez)
        window.location.reload();
      }
    }
  }, [error]);

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-6 text-center">
      <span className="mb-4 text-7xl font-black text-slate-100">!</span>
      <h2 className="mb-3 text-2xl font-black text-brand-900">
        Algo deu errado
      </h2>
      <p className="mb-8 max-w-md text-slate-600">
        Ocorreu um erro ao carregar esta página. Tente novamente ou volte para a
        página inicial.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <button
          onClick={reset}
          className="btn-primary-safe"
        >
          Tentar novamente
        </button>
        <Link href="/" className="btn-ghost">
          Página inicial
        </Link>
      </div>
    </div>
  );
}
