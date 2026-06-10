import Link from 'next/link';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/fade-in';
import { ArrowRight, BookOpen, ShieldCheck, Clock, UserCheck } from 'lucide-react';
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
  readingTime?: string;
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
  /** Desativa o FAQPage automático quando a página injeta schema próprio. */
  disableFaqSchema?: boolean;
  /** Usa apenas as FAQs passadas pela página, sem perguntas genéricas de fallback. */
  includeFallbackFaqs?: boolean;
  /** Permite páginas pillar exibirem mais perguntas visíveis. */
  maxFaqItems?: number;
  /** Canonical URL for this page (enables BreadcrumbList + Article schema) */
  pageUrl?: string;
  /** Quando a página já tem um H1 anterior (ex: calculadora), renderiza o título do artigo como H2 */
  h1Tag?: 'h1' | 'h2';
  /** Foto de destaque exibida no hero do artigo */
  coverImage?: { src: string; alt: string };
  /** Autor do artigo (E-E-A-T) */
  author?: {
    name: string;
    jobTitle: string;
    url: string;
    /** Data de publicação ISO (ex: '2025-03-01') */
    datePublished?: string;
    /** Data de modificação ISO (ex: '2026-05-01') */
    dateModified?: string;
  };
}

/**
 * Template visual reutilizado pelas páginas blockbuster.
 * Cada página passa conteúdo único; o layout é consistente para reforçar marca.
 */
export function BlockbusterArticle({
  hubLabel,
  hubHref,
  hubLabelShort,
  badgeText,
  h1,
  intro,
  readingTime,
  sections,
  faq,
  sidebarTitle,
  sidebarHook,
  sidebarCtaLabel = 'Solicitar diagnóstico SST',
  sidebarCtaHref = '/contato',
  related,
  finalCta,
  disableFaqSchema = false,
  includeFallbackFaqs = true,
  maxFaqItems,
  pageUrl,
  coverImage,
  author,
  h1Tag = 'h1',
}: BlockbusterPageProps) {
  const frequentFaqs = buildFrequentFaqs(faq, {
    context: 'article',
    topic: h1,
    includeFallbacks: includeFallbackFaqs,
    maxItems: maxFaqItems,
  });

  const cta = finalCta ?? {
    title: 'A SERMST faz auditoria SST gratuita',
    desc: 'Em 15 minutos a equipe entende o porte e a operação da empresa antes de indicar exame, laudo ou gestão. Sem compromisso, sem venda forçada.',
    label: 'Solicitar diagnóstico gratuito',
    href: '/contato',
  };

  // ── Schema.org JSON-LD (BreadcrumbList + Article) ─────────────────────────
  const hubUrl = hubHref.startsWith('http')
    ? hubHref
    : `https://sermst.com.br${hubHref}`;

  const breadcrumbSchema = pageUrl
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sermst.com.br/' },
          { '@type': 'ListItem', position: 2, name: hubLabel, item: hubUrl },
          { '@type': 'ListItem', position: 3, name: h1, item: pageUrl },
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
        mainEntityOfPage: pageUrl,
        inLanguage: 'pt-BR',
        datePublished: author?.datePublished ?? '2024-11-01',
        dateModified: author?.dateModified ?? '2026-05-01',
        image: coverImage
          ? [`https://sermst.com.br${coverImage.src}`]
          : undefined,
        author: author
          ? {
              '@type': 'Person',
              name: author.name,
              jobTitle: author.jobTitle,
              url: author.url,
              worksFor: { '@type': 'Organization', name: 'SERMST', url: 'https://sermst.com.br' },
            }
          : { '@type': 'Organization', name: 'SERMST', url: 'https://sermst.com.br' },
        publisher: {
          '@type': 'Organization',
          name: 'SERMST',
          url: 'https://sermst.com.br',
          logo: { '@type': 'ImageObject', url: 'https://sermst.com.br/images/site/logo-cor.png' },
        },
      }
    : null;

  const faqSchema = !disableFaqSchema && frequentFaqs.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: frequentFaqs.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      }
    : null;

  return (
    <main className="min-h-screen bg-white">
      {breadcrumbSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      )}
      {articleSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      )}
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative bg-brand-900 text-white overflow-hidden">
        {coverImage && (
          <Image
            src={coverImage.src}
            alt={coverImage.alt}
            fill
            sizes="100vw"
            className="object-cover object-center opacity-20"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/80 to-brand-900/50" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-pink/20 rounded-full blur-[120px]" />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          <FadeIn direction="up">
            {/* Breadcrumb + badges */}
            <div className="mb-6 flex flex-wrap items-center gap-3">
              <Link
                href={hubHref}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-pink transition hover:text-accent-pink-hover"
              >
                <BookOpen className="w-4 h-4" />
                {hubLabelShort ?? hubLabel}
              </Link>
              {badgeText && (
                <span className="inline-block bg-accent-pink/10 border border-accent-pink/20 text-accent-pink font-black text-xs uppercase tracking-[0.2em] px-3 py-1.5 rounded-full">
                  {badgeText}
                </span>
              )}
              {readingTime && (
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  {readingTime} de leitura
                </span>
              )}
            </div>

            {h1Tag === 'h2' ? (
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] mb-8 tracking-tight max-w-4xl">
                {h1}
              </h2>
            ) : (
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] mb-8 tracking-tight max-w-4xl">
                {h1}
              </h1>
            )}
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed border-l-4 border-accent-pink pl-6 font-medium">
              {intro}
            </p>

            {author && (
              <div className="mt-8 flex items-center gap-3">
                <UserCheck className="h-4 w-4 shrink-0 text-accent-pink" />
                <p className="text-sm text-slate-400">
                  Por{' '}
                  <Link href={author.url} className="font-bold text-white hover:text-accent-pink transition-colors">
                    {author.name}
                  </Link>
                  {' '}·{' '}
                  <span className="text-slate-500">{author.jobTitle}</span>
                </p>
              </div>
            )}
          </FadeIn>
        </div>
      </section>

      {/* ── Body ──────────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid lg:grid-cols-[1fr_340px] gap-14">

          {/* Article content */}
          <article>
            {sections.map((s, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.04}>
                <div className="mb-12 pb-12 border-b border-slate-100 last:border-0 last:mb-0 last:pb-0">
                  {/* Section heading with step accent */}
                  <div className="flex items-start gap-4 mb-5">
                    <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-pink/10 text-xs font-black text-accent-pink">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h2 className="text-2xl md:text-3xl font-black text-brand-900 leading-tight">
                      {s.title}
                    </h2>
                  </div>
                  {/* Section body */}
                  <div className="prose prose-slate prose-lg max-w-none pl-12
                    prose-p:text-slate-700 prose-p:leading-relaxed
                    prose-strong:text-brand-900 prose-strong:font-bold
                    prose-li:text-slate-700 prose-li:leading-relaxed
                    prose-ol:space-y-3 prose-ul:space-y-3
                    prose-li:marker:text-accent-pink">
                    {s.body}
                  </div>
                </div>
              </FadeIn>
            ))}

            {/* FAQ */}
            <FadeIn direction="up">
              <div className="mt-4">
                <div className="mb-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-slate-100" />
                  <h2 className="text-xs font-black text-brand-900 uppercase tracking-widest">
                    Perguntas frequentes
                  </h2>
                  <div className="h-px flex-1 bg-slate-100" />
                </div>
                <div className="space-y-3">
                  {frequentFaqs.map((item, i) => (
                    <FadeIn key={i} direction="up" delay={i * 0.04}>
                      <details className="group faq-accordion" open={i === 0}>
                        <summary className="faq-summary">
                          <span className="faq-question">{item.q}</span>
                          <span className="faq-icon text-2xl leading-none">+</span>
                        </summary>
                        <div className="faq-answer">
                          <p>{item.a}</p>
                        </div>
                      </details>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start space-y-5">
            <FadeIn direction="left">
              <div className="rounded-2xl bg-brand-900 p-7 text-white shadow-[0_20px_40px_-15px_rgba(11,19,60,0.35)]">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-pink/30 bg-accent-pink/10 px-3 py-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-pink" />
                  <span className="text-xs font-black uppercase tracking-widest text-accent-pink">SERMST</span>
                </div>
                <h3 className="text-xl font-black mb-3 leading-snug">{sidebarTitle}</h3>
                <p className="text-slate-300 leading-relaxed mb-6 text-sm">{sidebarHook}</p>
                <Link href={sidebarCtaHref} className="btn-primary-safe flex w-full justify-center text-sm">
                  {sidebarCtaLabel}
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </FadeIn>

            {related.length > 0 && (
              <FadeIn direction="left" delay={0.08}>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <p className="mb-4 text-xs font-black uppercase tracking-widest text-slate-400">
                    Leituras relacionadas
                  </p>
                  <ul className="space-y-3">
                    {related.map((r) => (
                      <li key={r.href}>
                        <Link
                          href={r.href}
                          className="group flex items-start gap-2.5 text-sm text-slate-600 transition hover:text-accent-pink"
                        >
                          <ArrowRight className="mt-0.5 w-3.5 h-3.5 shrink-0 text-accent-pink" />
                          <span className="group-hover:underline leading-snug">{r.label}</span>
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

      {/* ── Final CTA ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-900 py-20 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-accent-pink/20 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-6 inline-block rounded-full border border-accent-pink/20 bg-accent-pink/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
                Próximo passo
              </span>
              <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
                {cta.title}
              </h2>
              <p className="mb-10 text-xl leading-relaxed text-slate-300">
                {cta.desc}
              </p>
              <a
                href={cta.href ?? '/contato'}
                className="btn-primary-safe-lg inline-flex rounded-xl px-10 py-5 text-lg font-black"
              >
                {cta.label}
                <ArrowRight className="ml-2 h-6 w-6" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
