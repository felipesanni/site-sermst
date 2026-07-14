import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Guia interna | SERMST',
  description: 'Ferramenta interna de solicitacao de exame da SERMST.',
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function GuiaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
