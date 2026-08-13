import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página não encontrada | SERMST',
  robots: 'noindex',
};

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center bg-white px-6 text-center">
      <span className="mb-4 text-7xl font-black text-slate-100">404</span>
      <h1 className="h1-standard mb-3 text-brand-900">Página não encontrada</h1>
      <p className="mb-8 max-w-md text-lg text-slate-600">
        O endereço que você acessou não existe ou foi movido. Use o menu ou volte para a página inicial.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Link href="/" className="btn-primary-safe">
          Página inicial
        </Link>
        <Link href="/contato" className="btn-outline">
          Falar com a equipe
        </Link>
      </div>
    </div>
  );
}
