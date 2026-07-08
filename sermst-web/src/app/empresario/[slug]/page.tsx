import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, BriefcaseBusiness, FileSearch, HelpCircle, ShieldCheck } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';
import { buildFrequentFaqs } from '@/lib/faq';
import { empresarioSEO } from '@/lib/data/seo-content';

export function generateStaticParams() {
  return Object.keys(empresarioSEO).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const data = empresarioSEO[slug];

  if (!data) return { title: 'Conteudo nao encontrado | SERMST' };

  return {
    title: data.seoTitle ?? data.h1,
    description: data.hook,
    alternates: { canonical: `https://sermst.com.br/empresario/${slug}` },
    openGraph: {
      title: data.seoTitle ?? data.h1,
      description: data.hook,
      url: `https://sermst.com.br/empresario/${slug}`,
      type: 'article',
      locale: 'pt_BR',
    },
  };
}

export default async function EmpresarioArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const data = empresarioSEO[slug];

  if (!data) notFound();

  const pageUrl = `https://sermst.com.br/empresario/${slug}`;
  const frequentFaqs = buildFrequentFaqs(data.geoOpt.faq, {
    context: 'empresario',
    topic: data.h1,
  });

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: data.h1,
    description: data.hook,
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    inLanguage: 'pt-BR',
    author: {
      '@type': 'Organization',
      name: 'SERMST',
      url: 'https://sermst.com.br',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SERMST',
      url: 'https://sermst.com.br',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sermst.com.br/images/site/logo-cor.png',
      },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: frequentFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  };

  return (
    <article className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Inicio', item: 'https://sermst.com.br' },
          { name: 'Empresario', item: 'https://sermst.com.br/empresario' },
          { name: data.h1 },
        ]}
      />

      <header className="relative overflow-hidden bg-brand-900 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(248,67,101,0.14),transparent_36%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8">
          <div className="max-w-4xl">
            <FadeIn direction="up">
              <Link
                href="/empresario"
                className="mb-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent-pink hover:underline"
              >
                <span aria-hidden="true">&larr;</span>
                Voltar ao hub Empresario
              </Link>
              <span className="mb-5 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white/70">
                <BriefcaseBusiness className="h-4 w-4 text-accent-pink" />
                {data.section}
              </span>
              <h1 className="h1-standard mb-8 text-white">{data.h1}</h1>
              <p className="text-xl font-medium leading-relaxed text-slate-300 md:text-2xl">
                {data.hook}
              </p>
            </FadeIn>
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[1280px] px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-14 lg:flex-row">
          <main className="max-w-3xl flex-1">
            <FadeIn direction="up">
              <div className="prose prose-lg prose-slate max-w-none prose-a:text-accent-pink prose-h2:font-black prose-h2:text-brand-900">
                <div className="mb-10 rounded-2xl border border-emerald-200 bg-emerald-50 p-6 not-prose">
                  <span className="kicker text-emerald-700">Resposta curta</span>
                  <p className="mt-3 text-lg font-medium leading-relaxed text-slate-800">
                    {data.summary}
                  </p>
                  {frequentFaqs[0] ? (
                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                      <strong className="text-slate-800">{frequentFaqs[0].q}</strong> {frequentFaqs[0].a}
                    </p>
                  ) : null}
                </div>

                <h2>A dor que o empresario normalmente enxerga tarde</h2>
                <p className="rounded-r-lg border-l-4 border-accent-pink bg-slate-50 p-5 pl-6 text-xl font-medium italic text-slate-700">
                  {data.content.dor}
                </p>

                <h2 className="mt-12 flex items-center gap-3">
                  <ShieldCheck className="h-7 w-7 text-green-500" />
                  O que muda quando a empresa olha isso do jeito certo
                </h2>
                <p>{data.content.solucao}</p>

                {data.articleSections.map((section) => (
                  <div key={section.title} className="mt-12">
                    <h2>{section.title}</h2>
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                ))}

                <div className="my-12 rounded-2xl border border-slate-200 bg-slate-50 p-8">
                  <h3 className="mb-5 mt-0 text-2xl font-black text-brand-900">
                    {data.practicalChecklistTitle}
                  </h3>
                  <ul className="m-0 space-y-3 pl-5 text-slate-700">
                    {data.practicalChecklist.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="my-12 rounded-2xl bg-brand-900 p-8 text-white shadow-xl">
                  <h3 className="mb-5 mt-0 text-2xl font-black text-white">
                    O que esta leitura ajuda a proteger
                  </h3>
                  <ul className="m-0 list-none space-y-3 p-0">
                    {data.content.beneficios.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <span className="mt-1 font-black text-accent-pink">+</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <blockquote className="relative mt-16 rounded-xl border-[3px] border-slate-100 bg-white p-8 shadow-lg">
                  <span className="absolute -top-6 left-6 bg-white p-2">
                    <FileSearch className="h-8 w-8 text-brand-500" />
                  </span>
                  <p className="mb-6 text-2xl font-medium italic leading-snug text-brand-900">
                    &quot;{data.geoOpt.expertQuote.text}&quot;
                  </p>
                  <footer>
                    <strong>{data.geoOpt.expertQuote.author}</strong>
                    <span className="block text-sm text-slate-500">{data.geoOpt.expertQuote.role}</span>
                  </footer>
                </blockquote>
              </div>
            </FadeIn>
          </main>

          <aside className="w-full space-y-8 lg:w-[380px]">
            <FadeIn direction="left" delay={0.1}>
              <div className="surface-panel">
                <span className="kicker">Proximo passo recomendado</span>
                <h2 className="mb-4 text-2xl font-black text-brand-900">
                  Continue por onde a dor fica mais pratica
                </h2>
                <div className="space-y-4">
                  {data.supportingLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group block rounded-2xl border border-slate-200 bg-slate-50 p-5 transition-all hover:-translate-y-1 hover:border-accent-pink/40 hover:bg-white hover:shadow-lg"
                    >
                      <strong className="block text-brand-900 group-hover:text-accent-pink">{link.label}</strong>
                      <span className="mt-2 block text-sm leading-relaxed text-slate-600">{link.description}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl bg-brand-900 p-8 text-white shadow-[0_20px_40px_-15px_rgba(11,19,60,0.4)]">
                <h3 className="mb-4 text-2xl font-black">
                  Quando a dor ja saiu da teoria, o proximo passo precisa ser objetivo
                </h3>
                <p className="mb-6 text-sm leading-relaxed text-slate-300">
                  {data.cta.reason}
                </p>
                <Link href={data.cta.href} className="btn-light-safe flex w-full justify-center text-brand-500">
                  {data.cta.label}
                </Link>
              </div>
            </FadeIn>
          </aside>
        </div>
      </div>

      <section className="border-t border-slate-100 bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <FadeIn direction="up">
              <div className="max-w-3xl">
                <h3 className="mb-10 flex items-center gap-3 text-3xl font-black text-brand-900">
                  <HelpCircle className="h-8 w-8 text-accent-pink" />
                  Perguntas que costumam aparecer nessa fase
                </h3>
                <div className="space-y-8">
                  {frequentFaqs.map((faq) => (
                    <div key={faq.q} className="border-b border-slate-200 pb-8 last:border-0 last:pb-0">
                      <h4 className="mb-3 text-xl font-bold text-brand-900">{faq.q}</h4>
                      <p className="border-l-4 border-slate-200 pl-6 text-slate-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.05}>
              <div className="surface-panel-muted h-full">
                <span className="kicker">Pontes para o meio de funil</span>
                <h3 className="mb-4 text-3xl font-black text-brand-900">
                  RH e saude ocupacional entram aqui
                </h3>
                <p className="mb-6 text-lg leading-relaxed text-slate-700">
                  Quando o empresario entende que a empresa cresceu e passou a carregar novas
                  obrigacoes, o assunto deixa de ser so regularizacao. A partir dai, vale
                  aprofundar em RH, saude ocupacional e rotina operacional para entender o problema com mais clareza.
                </p>
                <div className="grid gap-4">
                  <Link href="/rh" className="surface-panel group block transition-all hover:-translate-y-1 hover:shadow-xl">
                    <span className="kicker">Hub operacional</span>
                    <h4 className="mb-3 text-2xl font-black text-brand-900 group-hover:text-accent-pink">
                      RH e Departamento Pessoal
                    </h4>
                    <p className="text-slate-700">
                      Para traduzir a dor em admissao, eSocial, passivo, DET e rotina de documentos.
                    </p>
                  </Link>
                  <Link href="/saude" className="surface-panel group block transition-all hover:-translate-y-1 hover:shadow-xl">
                    <span className="kicker">Hub clinico</span>
                    <h4 className="mb-3 text-2xl font-black text-brand-900 group-hover:text-accent-pink">
                      Saude Ocupacional
                    </h4>
                    <p className="text-slate-700">
                      Para aprofundar exame admissional, ASO, PCMSO, riscos e rotina ocupacional.
                    </p>
                  </Link>
                </div>
                <Link href="/empresario" className="btn-primary-safe mt-6 inline-flex">
                  Voltar ao hub Empresario
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </article>
  );
}
