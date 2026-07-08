import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { dicionarioDetails, dicionarioSEO } from '@/lib/data/seo-content';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/fade-in';
import { BookOpen, Info, ArrowRight, CheckCircle2 } from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';

export function generateStaticParams() {
  return Object.keys(dicionarioSEO).map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = dicionarioSEO[slug];
  if (!data) return { title: 'Termo não encontrado | SERMST' };
  return {
    title: data.seoTitle ?? data.h1,
    description: data.hook,
    alternates: { canonical: `https://sermst.com.br/dicionario/${slug}` },
    openGraph: {
      title: data.seoTitle ?? data.h1,
      description: data.hook,
      url: `https://sermst.com.br/dicionario/${slug}`,
      type: 'article',
      locale: 'pt_BR',
    },
  };
}

export default async function DicionarioPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = dicionarioSEO[slug];
  const detail = dicionarioDetails[slug];
  if (!data || !detail) notFound();

  const definedTermSchema = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    '@id': `https://sermst.com.br/dicionario/${slug}#term`,
    name: data.h1,
    description: data.hook,
    url: `https://sermst.com.br/dicionario/${slug}`,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'Dicionário SST — SERMST',
      url: 'https://sermst.com.br/dicionario',
    },
  };

  return (
    <article className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSchema) }} />
      <BreadcrumbJsonLd items={[{ name: 'Início', item: 'https://sermst.com.br' }, { name: 'Dicionário SST', item: 'https://sermst.com.br/dicionario' }, { name: data.h1 }]} />
      <header className="bg-slate-50 pt-32 pb-20 border-b border-slate-200">
        <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <FadeIn direction="down">
              <span className="inline-flex items-center gap-2 bg-brand-500/10 text-brand-500 font-black px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-8">
                <BookOpen className="w-4 h-4" />
                Dicionário SST
              </span>
              <h1 className="h1-standard mb-8 text-brand-900 tracking-tighter leading-[0.95]">
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
                <div className="rounded-2xl border border-brand-900/10 bg-slate-50 p-8 shadow-sm">
                  <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
                    Resposta rápida
                  </span>
                  <p className="m-0 text-xl font-medium leading-relaxed text-brand-900">
                    {detail.respostaCurta}
                  </p>
                </div>

                <div className="my-10 grid gap-6 md:grid-cols-2">
                  <div className="rounded-2xl border border-slate-200 bg-white p-7">
                    <h2 className="mt-0 text-xl font-black text-brand-900">Onde aparece na prática</h2>
                    <p className="mb-0 text-base leading-relaxed text-slate-700">{detail.ondeAparece}</p>
                  </div>
                  <div className="rounded-2xl border border-slate-200 bg-white p-7">
                    <h2 className="mt-0 text-xl font-black text-brand-900">Não confunda</h2>
                    <p className="mb-0 text-base leading-relaxed text-slate-700">{detail.naoConfunda}</p>
                  </div>
                </div>

                <div className="my-12 rounded-2xl border border-accent-pink/20 bg-accent-pink/5 p-8">
                  <div className="mb-4 flex items-center gap-3 text-accent-pink">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="text-xs font-black uppercase tracking-[0.2em]">Aprofunde o tema</span>
                  </div>
                  <h2 className="mt-0 text-2xl font-black text-brand-900">
                    {detail.aprofundamento.title}
                  </h2>
                  <p>{detail.aprofundamento.description}</p>
                  <Link href={detail.aprofundamento.href} className="btn-primary-safe no-underline">
                    {detail.aprofundamento.label}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>

                {slug === 'o-que-e-ppp' && (
                  <div className="my-12 grid gap-6 md:grid-cols-2">
                    <Link href="/dicionario/o-que-e-ltcat" className="rounded-2xl border border-slate-200 bg-white p-7 no-underline transition-all hover:-translate-y-1 hover:shadow-lg">
                      <span className="mb-3 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
                        Ponte técnica
                      </span>
                      <h2 className="mt-0 text-2xl font-black text-brand-900">O que significa LTCAT e por que ele sustenta o PPP</h2>
                      <p className="mb-0 text-base leading-relaxed text-slate-700">
                        Se a dúvida ainda está na diferença entre documento final e base técnica, este é o melhor próximo passo.
                      </p>
                    </Link>

                    <Link href="/rh/multa-esocial-s2220" className="rounded-2xl bg-brand-900 p-7 text-white no-underline transition-all hover:-translate-y-1 hover:shadow-lg">
                      <span className="mb-3 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
                        Próximo passo
                      </span>
                      <h2 className="mt-0 text-2xl font-black text-white">Como o S-2240 se conecta ao PPP e onde as empresas mais erram</h2>
                      <p className="mb-0 text-base leading-relaxed text-slate-300">
                        Depois de entender o que é PPP, o próximo ponto costuma ser a coerência entre documento, base ambiental e envio ao eSocial.
                      </p>
                    </Link>
                  </div>
                )}
              </div>
            </FadeIn>
          </div>

          <aside className="lg:col-span-4 flex flex-col gap-8">
            <FadeIn direction="left" delay={0.4} className="bg-brand-900 text-white p-8 rounded-2xl shadow-2xl">
              <Info className="w-8 h-8 text-accent-pink mb-6" />
              <h3 className="font-black text-xl mb-8">Dúvidas sobre este termo?</h3>
              <div className="space-y-8">
                {detail.faq.map((faq, idx) => (
                  <div key={idx}>
                    <span className="block font-bold text-accent-pink text-sm mb-2 uppercase">{faq.q}</span>
                    <p className="text-sm text-slate-300 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
              <hr className="my-8 border-white/10" />
              <Link
                href={detail.aprofundamento.href}
                className="btn-primary-safe flex w-full text-center"
              >
                {detail.aprofundamento.label}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </FadeIn>
          </aside>
        </div>
      </div>
    </article>
  );
}
