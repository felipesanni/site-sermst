import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { dicionarioSEO } from '@/lib/data/seo-content';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/fade-in';
import { BookOpen, Info, ShieldCheck, ArrowRight } from 'lucide-react';
import { buildFrequentFaqs } from '@/lib/faq';

export function generateStaticParams() {
  return Object.keys(dicionarioSEO).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = dicionarioSEO[slug];
  if (!data) return { title: 'Termo não encontrado | SERMST' };
  return { title: data.h1, description: data.hook };
}

export default async function DicionarioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = dicionarioSEO[slug];
  if (!data) notFound();
  const frequentFaqs = buildFrequentFaqs(data.geoOpt.faq, {
    context: 'dicionario',
    topic: data.h1,
  });

  return (
    <article className="min-h-screen bg-white">
      <header className="bg-slate-50 pt-32 pb-20 border-b border-slate-200">
        <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <FadeIn direction="down">
              <span className="inline-flex items-center gap-2 bg-brand-500/10 text-brand-500 font-black px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-8">
                <BookOpen className="w-4 h-4" />
                Dicionario SST
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-brand-900 mb-8 tracking-tighter leading-[0.95]">
                {data.h1}
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-medium border-l-4 border-brand-500 pl-6 lg:pl-10">
                {data.hook}
              </p>
            </FadeIn>
          </div>
        </div>
      </header>

      <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-8">
            <FadeIn delay={0.2}>
              <div className="prose prose-lg prose-slate max-w-none">
                <h2 className="text-brand-900 font-black">Definição e aplicação prática</h2>
                <p className="bg-slate-50 p-8 rounded-2xl border border-slate-200 text-lg leading-relaxed shadow-inner italic">
                  {data.content.dor}
                </p>

                <div className="my-12">
                  <h3 className="font-black text-brand-900">Contexto técnico</h3>
                  <p>{data.content.solução}</p>
                  <p>
                    Mais importante que a definição é entender em que situação esse termo aparece na rotina da empresa, por que ele importa para o RH, para o financeiro e para a operação, e como se conecta com SST, eSocial, exame ocupacional, documentação obrigatória e risco jurídico.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 my-10">
                  <div className="bg-brand-900 text-white p-8 rounded-2xl shadow-xl">
                    <h4 className="text-accent-pink font-black uppercase text-xs mb-4">Pilares do termo</h4>
                    <ul className="space-y-3 p-0 m-0 list-none">
                      {data.content.beneficios.map((ben, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <span className="text-accent-pink">+</span>
                          {ben}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white border-2 border-brand-900 p-8 rounded-2xl flex flex-col justify-center">
                    <ShieldCheck className="w-10 h-10 text-brand-900 mb-6" />
                    <p className="text-brand-900 font-bold mb-0 leading-tight">
                      &quot;{data.geoOpt.expertQuote.text}&quot;
                    </p>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>

          <aside className="lg:col-span-4 flex flex-col gap-8">
            <FadeIn direction="left" delay={0.4} className="bg-brand-900 text-white p-8 rounded-2xl shadow-2xl">
              <Info className="w-8 h-8 text-accent-pink mb-6" />
              <h3 className="font-black text-xl mb-8">Dúvidas sobre este termo?</h3>
              <div className="space-y-8">
                {frequentFaqs.map((faq, idx) => (
                  <div key={idx}>
                    <span className="block font-bold text-accent-pink text-sm mb-2 uppercase">{faq.q}</span>
                    <p className="text-sm text-slate-300 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
              <hr className="my-8 border-white/10" />
              <Link
                href="/contato"
                className="btn-primary-safe flex w-full text-center"
              >
                Falar com a SERMST
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </aside>
        </div>
      </div>
    </article>
  );
}
