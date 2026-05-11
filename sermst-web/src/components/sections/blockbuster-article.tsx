import Link from 'next/link';
import { FadeIn } from '@/components/ui/fade-in';
import { ArrowRight, BookOpen, Target, ShieldCheck } from 'lucide-react';
import type { ReactNode } from 'react';
import { buildFrequentFaqs } from '@/lib/faq';

export interface BlockbusterSection {
  title: string;
  body: ReactNode;
}

export interface BlockbusterFAQ {
  q: string;
  a: string;
}

export interface BlockbusterRelatedLink {
  label: string;
  href: string;
}

export interface BlockbusterPageProps {
  hubLabel: string;
  hubHref: string;
  hubLabelShort?: string;
  badgeText?: string;
  h1: string;
  intro: string;
  sections: BlockbusterSection[];
  faq: BlockbusterFAQ[];
  sidebarTitle: string;
  sidebarHook: string;
  sidebarCtaLabel?: string;
  sidebarCtaHref?: string;
  related: BlockbusterRelatedLink[];
  finalCta?: {
    title: string;
    desc: string;
    label: string;
    href?: string;
  };
  /** Canonical URL for this page (enables BreadcrumbList + Article schema) */
  pageUrl?: string;
}

/**
 * Template visual reutilizado pelas páginas blockbuster migradas do WordPress.
 * Cada página passa conteúdo único; o layout é consistente para reforçar marca
 * e facilitar manutenção.
 */
export function BlockbusterArticle({
  hubLabel,
  hubHref,
  hubLabelShort,
  badgeText,
  h1,
  intro,
  sections,
  faq,
  sidebarTitle,
  sidebarHook,
  sidebarCtaLabel = 'Solicitar diagnóstico SST',
  sidebarCtaHref = '/contato',
  related,
  finalCta,
  pageUrl,
}: BlockbusterPageProps) {
  const frequentFaqs = buildFrequentFaqs(faq, {
    context: 'article',
    topic: h1,
  });

  const cta = finalCta ?? {
    title: 'A SERMST faz auditoria SST gratuita',
    desc: 'Em 15 minutos a equipe entende o porte e a operação da empresa antes de indicar exame, laudo ou gestão. Sem compromisso, sem venda forçada.',
    label: 'Solicitar diagnóstico gratuito',
    href: '/contato',
  };

  // ── Schema.org JSON-LD (BreadcrumbList + Article) ─────────────────────────
  const hubUrl = pageUrl
    ? pageUrl.split('/').slice(0, -1).join('/')
    : null;

  const breadcrumbSchema = pageUrl
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Home',
            item: 'https://sermst.com.br/',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: hubLabel,
            item: hubUrl,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: h1,
            item: pageUrl,
          },
        ],
      }
    : null;

  const articleSchema = pageUrl
    ? {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: h1,
        description: intro,
        url: pageUrl,
        datePublished: '2024-11-01',
        dateModified: '2025-03-01',
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
            url: 'https://sermst.com.br/og-home.jpg',
          },
        },
      }
    : null;

  return (
    <main className="min-h-screen bg-white">
      {breadcrumbSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
      )}
      {articleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      )}
      <section className="relative bg-brand-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-pink/20 rounded-full blur-[120px]" />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-24 relative z-10">
          <FadeIn direction="up">
            <Link
              href={hubHref}
              className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-pink transition hover:text-accent-pink-hover"
            >
              <BookOpen className="w-4 h-4" />
              {hubLabelShort ?? hubLabel}
            </Link>
            {badgeText && (
              <span className="inline-block bg-accent-pink/10 border border-accent-pink/20 text-accent-pink font-black text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6 ml-3">
                {badgeText}
              </span>
            )}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.05] mb-8 tracking-tight max-w-4xl">
              {h1}
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed border-l-4 border-accent-pink pl-6 font-medium">
              {intro}
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid lg:grid-cols-[1fr_360px] gap-12">
          <article className="prose max-w-none">
            {sections.map((s, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.05}>
                <h2>{s.title}</h2>
                {s.body}
              </FadeIn>
            ))}

            <FadeIn direction="up">
              <h2>Perguntas frequentes</h2>
            </FadeIn>

            <div className="not-prose space-y-4 my-8">
              {frequentFaqs.map((item, i) => (
                <FadeIn key={i} direction="up" delay={i * 0.05}>
                  <details className="group faq-accordion" open={i === 0}>
                    <summary className="faq-summary">
                      <span className="faq-question">{item.q}</span>
                      <span className="faq-icon text-2xl leading-none">
                        +
                      </span>
                    </summary>
                    <div className="faq-answer">
                      <p>{item.a}</p>
                    </div>
                  </details>
                </FadeIn>
              ))}
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
            <FadeIn direction="left">
              <div className="rounded-[2rem] bg-brand-900 p-7 text-white shadow-[0_20px_40px_-15px_rgba(11,19,60,0.4)]">
                <div className="w-12 h-12 bg-accent-pink/15 border border-accent-pink/30 rounded-xl flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6 text-accent-pink" />
                </div>
                <h3 className="text-2xl font-black mb-3 leading-tight">{sidebarTitle}</h3>
                <p className="text-slate-300 leading-relaxed mb-6 text-sm">{sidebarHook}</p>
                <Link
                  href={sidebarCtaHref}
                  className="btn-primary-safe flex w-full text-sm"
                >
                  {sidebarCtaLabel}
                </Link>
              </div>
            </FadeIn>

            {related.length > 0 && (
              <FadeIn direction="left" delay={0.1}>
                <div className="surface-panel-muted p-6">
                  <p className="font-black text-brand-900 mb-3 text-sm uppercase tracking-widest">
                    Para continuar
                  </p>
                  <ul className="space-y-3">
                    {related.map((r) => (
                      <li key={r.href}>
                        <Link
                          href={r.href}
                          className="text-slate-700 hover:text-accent-pink transition flex items-center gap-2 group text-sm"
                        >
                          <ArrowRight className="w-4 h-4 text-accent-pink shrink-0" />
                          <span className="group-hover:underline">{r.label}</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            )}
          </aside>
        </div>
      </section>

      <section className="bg-slate-50 border-t border-slate-200 py-20">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <Target className="w-12 h-12 text-accent-pink mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-black text-brand-900 mb-6 leading-tight">{cta.title}</h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">{cta.desc}</p>
            <Link
              href={cta.href ?? '/contato'}
              className="btn-primary-safe-lg text-lg shadow-2xl"
            >
              {cta.label}
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-xs text-slate-500 mt-6 uppercase tracking-widest">+3.000 empresas atendidas em 40 anos</p>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
