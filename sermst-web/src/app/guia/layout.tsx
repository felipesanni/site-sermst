import type { Metadata } from 'next';

// Página interna de geração de guia de encaminhamento — não deve ser indexada
export const metadata: Metadata = {
  title: 'Guia de Encaminhamento | SERMST',
  robots: 'noindex, nofollow',
};

export default function GuiaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
