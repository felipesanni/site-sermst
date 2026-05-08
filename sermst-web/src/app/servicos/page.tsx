import Link from 'next/link';
import { ChevronRight, ShieldCheck, Zap } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { servicosSEO } from '@/lib/data/seo-content';

export const metadata = {
  title: 'Exames e Laudos Ocupacionais | SERMST',
  description:
    'Central de serviços da SERMST em Medicina e Segurança do Trabalho: exames admissionais, periodicos e gestão de PGR, PCMSO, LTCAT e eSocial.',
};

export default function ServicosIndexPage() {
  const serviços = Object.entries(servicosSEO).map(([slug, data]) => ({ slug, ...data }));

  return (
    <main className="min-h-screen bg-slate-50">
      <header className="bg-brand-900 py-14 text-white md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
          <FadeIn direction="down" viewport={false}>
            <h1 className="mb-5 text-[2.6rem] font-black leading-[1.05] md:mb-6 md:text-6xl">Servicos para exames, laudos e rotina SST</h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Solucoes completas em Saúde e Segurança do Trabalho para empresas que precisam contratar, regularizar documentos e manter o eSocial sob controle sem travar a operação.
            </p>
          </FadeIn>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[1280px] px-6 py-20 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          {serviços.map((serviço, idx) => (
            <FadeIn key={serviço.slug} delay={idx * 0.1}>
              <Link href={`/servicos/${serviço.slug}`} className="card-clean group block">
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-accent-pink transition-colors group-hover:bg-accent-pink group-hover:text-white">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <Zap className="h-5 w-5 text-slate-200 transition-colors group-hover:text-accent-pink" />
                </div>
                <h3 className="mb-4 text-2xl font-black text-brand-900 transition-colors group-hover:text-accent-pink">{serviço.h1}</h3>
                <p className="mb-8 line-clamp-3 text-slate-600">{serviço.hook}</p>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent-pink">
                  Ver detalhes do serviço <ChevronRight className="h-4 w-4" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
