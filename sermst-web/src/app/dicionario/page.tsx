import { dicionarioSEO } from '@/lib/data/seo-content';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/fade-in';
import { BookOpen, Search, ArrowRight } from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';


export const dynamic = 'force-static';

export const metadata = {
  title: 'Dicionário SST | Termos de Saúde e Segurança | SERMST',
  description:
    'Entenda termos como ASO, PGR, PCMSO, eSocial SST e outros conceitos da medicina e segurança do trabalho — explicados em linguagem útil para gestores e RH.',

  alternates: {
    canonical: 'https://sermst.com.br/dicionario',
  },
  openGraph: {
    title: 'Dicionário SST | Termos de Saúde e Segurança do Trabalho | SERMST',
    description:
      'Glossário completo dos principais termos de saúde e segurança do trabalho: ASO, PCMSO, PGR, eSocial, NRs e muito mais.',
    url: 'https://sermst.com.br/dicionario',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function DicionarioIndexPage() {
  const termos = Object.entries(dicionarioSEO).map(([slug, data]) => ({ slug, ...data }));

  return (
    <main className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[{ name: 'Início', item: 'https://sermst.com.br' }, { name: 'Dicionário SST' }]} />
      <header className="bg-slate-50 pt-32 pb-24 border-b border-slate-200">
        <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-8">
          <FadeIn direction="down">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-brand-900 p-3 rounded-lg text-white shadow-lg">
                <BookOpen className="w-6 h-6" />
              </div>
              <h1 className="h1-standard text-brand-900 tracking-tighter">Dicionário de SST</h1>
            </div>
            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed font-medium">
              Glossário para traduzir a linguagem técnica da medicina e segurança do trabalho em conteúdo claro para empresas, RH e gestores.
            </p>
          </FadeIn>
        </div>
      </header>

      <section className="py-20 max-w-[1280px] w-full mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start mb-14">
          <FadeIn direction="right">
            <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 lg:p-10">
              <span className="text-accent-pink font-black text-xs uppercase tracking-[0.2em] mb-4 block">
                Para gestores e RH
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-brand-900 mb-6">
                Entender o termo certo acelera a decisão certa
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-slate-700">
                <p>
                  Quem busca o significado de ASO, PCMSO, PGR ou outros termos de SST geralmente não está apenas estudando. Está tentando resolver um problema real da empresa, entender uma exigência legal ou ganhar clareza antes de falar com um fornecedor.
                </p>
                <p>
                  Por isso este dicionário não para na definição. Cada termo é apresentado com o contexto da rotina ocupacional, com indicação de quando ele aparece na prática e por que importa para a empresa.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <div className="bg-brand-900 text-white rounded-[2rem] p-8 lg:p-10">
              <span className="text-accent-pink font-black text-xs uppercase tracking-[0.2em] mb-4 block">
                Próximo passo
              </span>
              <h2 className="text-2xl font-black mb-5">
                Se o termo já está ligado a uma dor do seu negócio, fale com a SERMST
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                O glossário ajuda a entender. Quando a empresa precisa agir, vale transformar definição em processo, documento e solução antes que a dúvida vire atraso, retrabalho ou exposição jurídica.
              </p>
              <Link
                href="/contato"
                className="btn-primary-safe"
              >
                Solicitar orientação
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {termos.map((termo, idx) => (
            <FadeIn key={termo.slug} delay={idx * 0.1}>
              <Link
                href={`/dicionario/${termo.slug}`}
                className="group flex h-full flex-col bg-white border border-slate-100 p-8 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.03)] hover:shadow-2xl hover:border-brand-900/10 transition-all"
              >
                <div className="flex justify-between items-start mb-6">
                  <span className="text-brand-500 font-black text-4xl opacity-10 group-hover:opacity-40 transition-opacity">
                    {termo.slug.charAt(0).toUpperCase()}
                  </span>
                  <Search className="w-5 h-5 text-slate-200 group-hover:text-brand-900 transition-colors" />
                </div>
                <h3 className="text-2xl font-black text-brand-900 mb-4 group-hover:text-accent-pink transition-colors">
                  {termo.h1.split('(')[0]}
                </h3>
                <p className="text-slate-500 text-sm mb-10 flex-grow line-clamp-3">{termo.hook}</p>
                <p className="text-sm text-slate-500 font-semibold mb-6">
                  Definição com contexto real de RH, eSocial, exames e documentação obrigatória.
                </p>
                <div className="mt-auto flex items-center gap-2 text-brand-900 font-bold text-xs uppercase tracking-[0.2em] group-hover:gap-4 transition-all">
                  Ler definição
                  <ArrowRight className="w-4 h-4 text-accent-pink" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
