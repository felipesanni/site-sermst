import { FadeIn } from '@/components/ui/fade-in';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-white px-4 py-20 text-center">
      <FadeIn direction="up">
        <h1 className="mb-4 text-4xl font-black text-brand-900">Conteudo SST para empresas</h1>
        <p className="mx-auto mb-8 max-w-xl text-lg text-slate-600">
          O conteudo da SERMST agora esta organizado por uso: Hub Saúde Ocupacional, Hub RH e DP, Normas Regulamentadoras e Dicionario SST.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/saude" className="btn-primary-safe">
            Hub Saúde
          </Link>
          <Link href="/rh" className="btn-primary-safe">
            Hub RH
          </Link>
          <Link href="/dicionario" className="btn-outline">
            Dicionario SST
          </Link>
        </div>
      </FadeIn>
    </div>
  );
}
