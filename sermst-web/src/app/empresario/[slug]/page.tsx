import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { BookOpenCheck, BriefcaseBusiness, FileSearch, HelpCircle } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';
import { EmpresarioNextStep } from '@/components/sections/empresario-next-step';
import { buildFrequentFaqs } from '@/lib/faq';
import { empresarioSEO } from '@/lib/data/seo-content';
import { getEmpresarioJourney } from '@/lib/data/empresario-journey';

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

  if (!data) return { title: 'Conteúdo não encontrado | SERMST' };

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
  const journey = getEmpresarioJourney(slug, data.section);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': `${pageUrl}#article`,
    headline: data.h1,
    description: data.hook,
    url: pageUrl,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': pageUrl,
    },
    isPartOf: {
      '@type': 'CollectionPage',
      '@id': 'https://sermst.com.br/empresario#collection',
      name: 'Guia do empresário',
    },
    about: [
      { '@type': 'Thing', name: data.section },
      { '@type': 'Thing', name: 'Gestão empresarial' },
    ],
    citation: data.officialSources.map((source) => source.href),
    inLanguage: 'pt-BR',
    isAccessibleForFree: true,
    dateModified: data.lastReviewedAt,
    author: {
      '@type': 'Organization',
      '@id': 'https://sermst.com.br/#organization',
      name: 'SERMST',
      url: 'https://sermst.com.br/quem-somos',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://sermst.com.br/#organization',
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, '\\u003c'),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema).replace(/</g, '\\u003c'),
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', item: 'https://sermst.com.br' },
          { name: 'Empresário', item: 'https://sermst.com.br/empresario' },
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
                Voltar para Empresário
              </Link>
              <span className="mb-5 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-white/70">
                <BriefcaseBusiness className="h-4 w-4 text-accent-pink" />
                {data.section}
              </span>
              <h1 className="h1-standard mb-8 text-white">{data.h1}</h1>
              <p className="text-xl font-medium leading-relaxed text-slate-300 md:text-2xl">
                {data.hook}
              </p>
              <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-semibold text-slate-400">
                <Link href="/quem-somos" className="text-slate-300 underline decoration-white/25 underline-offset-4 hover:text-white">
                  Conteúdo da equipe SERMST
                </Link>
                <span aria-hidden="true">•</span>
                <time dateTime={data.lastReviewedAt}>Revisado em 13 de julho de 2026</time>
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

                <h2>Por que esse assunto costuma gerar dúvida</h2>
                <p className="rounded-r-lg border-l-4 border-accent-pink bg-slate-50 p-5 pl-6 text-xl font-medium text-slate-700">
                  {data.content.dor}
                </p>

                <h2 className="mt-12 flex items-center gap-3">
                  <BookOpenCheck className="h-7 w-7 text-green-500" />
                  O ponto principal
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
                    O que esta leitura ajuda a organizar
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

                <div className="relative mt-16 rounded-xl border-[3px] border-slate-100 bg-white p-8 shadow-lg">
                  <span className="absolute -top-6 left-6 bg-white p-2">
                    <FileSearch className="h-8 w-8 text-brand-500" />
                  </span>
                  <span className="kicker">Na prática</span>
                  <p className="mt-3 text-lg font-medium leading-relaxed text-brand-900">
                    {data.geoOpt.expertQuote.text}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-slate-500">
                    Nota editorial da SERMST, que acompanha empresas em saúde e segurança do trabalho há mais de 55 anos.
                  </p>
                </div>
              </div>
            </FadeIn>
          </main>

          <aside className="w-full space-y-8 lg:w-[380px]">
            <FadeIn direction="left" delay={0.1}>
              <div className="surface-panel">
                <span className="kicker">Veja também</span>
                <h2 className="mb-4 text-2xl font-black text-brand-900">
                  Continue pelo assunto mais próximo da sua dúvida
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

              <div className="surface-panel-muted">
                <span className="kicker">Fontes oficiais</span>
                <h2 className="mb-4 text-2xl font-black text-brand-900">
                  Consulte a regra na origem
                </h2>
                <div className="space-y-3">
                  {data.officialSources.map((source) => (
                    <a
                      key={source.href}
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block rounded-xl border border-slate-200 bg-white p-4 text-sm font-bold leading-relaxed text-brand-900 transition-colors hover:border-accent-pink hover:text-accent-pink"
                    >
                      {source.label}
                    </a>
                  ))}
                </div>
              </div>
            </FadeIn>
          </aside>
        </div>
      </div>

      <section className="border-t border-slate-100 bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <FadeIn direction="up">
              <div>
                <h3 className="mb-10 flex items-center gap-3 text-3xl font-black text-brand-900">
                  <HelpCircle className="h-8 w-8 text-accent-pink" />
                  Perguntas frequentes
                </h3>
                <div className="space-y-8">
                  {frequentFaqs.map((faq) => (
                    <div key={faq.q} className="border-b border-slate-200 pb-8 last:border-0 last:pb-0">
                      <h4 className="mb-3 text-xl font-bold text-brand-900">{faq.q}</h4>
                      <p className="border-l-4 border-slate-200 pl-6 text-slate-600">{faq.a}</p>
                    </div>
                  ))}
                </div>
                <Link href="/empresario" className="btn-primary-safe mt-10 inline-flex">
                  Ver todos os guias para empresários
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <EmpresarioNextStep currentTitle={data.h1} journey={journey} />
    </article>
  );
}
