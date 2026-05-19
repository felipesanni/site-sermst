import type { Metadata } from 'next';
import { FadeIn } from '@/components/ui/fade-in';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Conteúdo SST para Empresas | SERMST',
  description:
    'Guias práticos de medicina e segurança do trabalho organizados por tema: Saúde Ocupacional, RH e DP, Normas Regulamentadoras e Dicionário SST.',
  alternates: {
    canonical: 'https://sermst.com.br/blog',
  },
  openGraph: {
    title: 'Blog SERMST | Saúde e Segurança do Trabalho',
    description:
      'Artigos, guias e análises sobre medicina do trabalho, normas regulamentadoras, eSocial e gestão SST para empresas.',
    url: 'https://sermst.com.br/blog',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function BlogPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4 py-20 text-center">
      <FadeIn direction="up">
        <h1 className="mb-4 text-4xl font-black text-brand-900">Conteúdo SST para empresas</h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-slate-600">
          O conteúdo da SERMST agora está organizado por uso: Hub Saúde Ocupacional, Hub RH e DP, Normas Regulamentadoras e Dicionário SST.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/saude" className="btn-primary-safe">
            Hub Saúde
          </Link>
          <Link href="/rh" className="btn-primary-safe">
            Hub RH
          </Link>
          <Link href="/dicionario" className="btn-outline">
            Dicionário SST
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
