import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle2, HelpCircle, ShieldAlert, TrendingUp } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { localidades, servicosSEO } from '@/lib/data/seo-content';
import { buildFrequentFaqs } from '@/lib/faq';
import { trainingsData } from '@/lib/data/treinamentos-data';
import { buildServiceCopy } from '@/lib/seo-copy';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';

function getServiceSearchLabel(servico: string, fallback: string) {
  if (servico === 'exame-admissional-expresso') {
    return 'Clínica de Exame Admissional';
  }
  if (servico === 'audiometria-ocupacional-clinica') {
    return 'Audiometria Ocupacional';
  }

  return fallback;
}

export function generateStaticParams() {
  return Object.keys(servicosSEO).map((servico) => ({ servico }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ servico: string }>
}): Promise<Metadata> {
  const { servico } = await params;
  const data = servicosSEO[servico];

  if (!data) {
    return { title: 'Serviço não encontrado | SERMST' };
  }

  const canonicalUrl = `https://sermst.com.br/servicos/${servico}`;
  const serviceLabel = getServiceSearchLabel(servico, data.h1.split('|')[0].trim());
  const title = servico === 'exame-admissional-expresso'
    ? `${serviceLabel} | SERMST`
    : servico === 'exame-toxicologico-clt'
      ? `${serviceLabel} | CNH C, D e E, Empresas e Pessoa Física`
      : data.seoTitle ?? data.h1;
  const description =
    servico === 'exame-admissional-expresso'
      ? 'Clínica de exame admissional em São Paulo com ASO, exames ocupacionais, apoio ao eSocial e fluxo pensado para empresas que precisam contratar sem atraso.'
      : servico === 'exame-toxicologico-clt'
        ? 'Exame toxicológico por R$ 200, validade nacional, para empresas e pessoa física. Suporte para admissão, demissão e renovação de CNH C, D e E.'
      : data.hook;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      locale: 'pt_BR',
      type: 'website',
    },
  };
}

export default async function ServicoPage({
  params,
}: {
  params: Promise<{ servico: string }>
}) {
  const { servico } = await params;
  const data = servicosSEO[servico];

  if (!data) notFound();

  const seoCopy = buildServiceCopy(data);
  const serviceName = getServiceSearchLabel(servico, data.h1.split('|')[0].trim());
  const areaServed = (data.allowedLocalSlugs
    ? localidades.filter((local) => data.allowedLocalSlugs?.includes(local.slug))
    : localidades).map((local) => local.nome);
  const frequentFaqs = buildFrequentFaqs(data.geoOpt.faq, {
    context: 'service',
    topic: serviceName,
  });

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `https://sermst.com.br/servicos/${servico}#service`,
    name: serviceName,
    serviceType: serviceName,
    description: data.hook,
    url: `https://sermst.com.br/servicos/${servico}`,
    provider: { '@id': 'https://sermst.com.br/#organization' },
    areaServed,
    availableChannel: {
      '@type': 'ServiceChannel',
      serviceUrl: 'https://sermst.com.br/contato',
      servicePhone: '+55-11-91514-6447',
    },
  };

  const faqSchema = {
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
  };

  return (
    <article className="flex min-h-screen flex-col bg-slate-50">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <BreadcrumbJsonLd items={[{ name: 'Início', item: 'https://sermst.com.br' }, { name: 'Serviços', item: 'https://sermst.com.br/servicos' }, { name: data.h1.split('|')[0].trim() }]} />
      <header className="relative overflow-hidden border-b-8 border-accent-pink bg-brand-900 pb-32 pt-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <FadeIn direction="up">
              <span className="mb-6 inline-block rounded-full border border-accent-pink/20 bg-accent-pink/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-accent-pink">
                Especialidade SERMST
              </span>
              <h1 className="h1-standard mb-8 text-white">
                {servico === 'exame-admissional-expresso' ? 'Clínica de Exame Admissional | Medicina do Trabalho' : data.h1}
              </h1>
              <p className="mx-auto max-w-3xl border-l-4 border-accent-pink pl-6 text-left text-xl font-medium leading-relaxed text-slate-300 md:text-2xl">
                {data.hook}
              </p>
            </FadeIn>
          </div>
        </div>
      </header>

      <section className="relative z-20 mx-auto -mt-16 w-full max-w-[1280px] px-6 py-20 lg:px-8">
        <div className="mx-auto flex max-w-5xl flex-col gap-12 rounded-[2rem] border border-slate-100 bg-white p-8 shadow-2xl lg:flex-row lg:p-12">
          <FadeIn direction="right" className="flex-1">
            <div className="mb-4 flex items-center gap-3 text-accent-pink">
              <ShieldAlert className="h-8 w-8" />
              <h2 className="text-sm font-black uppercase tracking-widest">O problema que a empresa quer evitar</h2>
            </div>
            <p className="mb-8 text-lg font-medium leading-relaxed text-slate-700">
              {data.content.dor}
            </p>

            <div className="mb-4 flex items-center gap-3 text-brand-500">
              <TrendingUp className="h-8 w-8" />
              <h2 className="text-sm font-black uppercase tracking-widest">A solução corporativa</h2>
            </div>
            <p className="text-lg leading-relaxed text-slate-700">
              {data.content.solucao}
            </p>
          </FadeIn>

          <FadeIn direction="left" delay={0.2} className="surface-panel-muted flex-1">
            <h3 className="mb-6 text-xl font-black text-brand-900">Ganhos imediatos para sua empresa</h3>
            <ul className="mb-8 space-y-4">
              {data.content.beneficios.map((ben, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-green-500" />
                  <span className="font-medium text-slate-700">{ben}</span>
                </li>
              ))}
            </ul>
            <Link href="/contato" className="btn-primary-safe flex w-full">
              Solicitar orientação comercial
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-6 pb-20 lg:px-8">
        <div className="mx-auto grid max-w-5xl gap-8">
          <FadeIn direction="up">
            <div className="surface-panel">
              <span className="kicker">
                Para quem é este serviço
              </span>
              <h2 className="mb-6 text-3xl font-black text-brand-900 md:text-4xl">
                Quando sua empresa precisa de {seoCopy.serviceName}
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-slate-700">
                {seoCopy.overviewParagraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </FadeIn>

          <div className="grid gap-8 lg:grid-cols-2">
            <FadeIn direction="right">
              <div className="surface-panel-muted h-full">
                <h2 className="mb-5 text-2xl font-black text-brand-900">
                  Como esse serviço protege o RH, o eSocial e a operação
                </h2>
                <div className="space-y-5 text-base leading-relaxed text-slate-700 md:text-lg">
                  {seoCopy.complianceParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <div className="h-full rounded-2xl bg-brand-900 p-8 text-white lg:p-10">
                <h2 className="mb-5 text-2xl font-black">O que avaliar antes de contratar</h2>
                <div className="space-y-5 text-base leading-relaxed text-slate-200 md:text-lg">
                  {seoCopy.decisionParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8 border-t border-white/10 pt-8">
                  <Link
                    href="/contato"
                    className="btn-primary-safe"
                  >
                    Receber orientação comercial
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>

          {servico === 'gestao-esocial-s2220-s2240' && (
            <div className="grid gap-6 lg:grid-cols-2">
              <FadeIn direction="right">
                <Link
                  href="/rh/domicilio-eletronico-trabalhista-det"
                  className="surface-panel group block transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="kicker">Leitura complementar</span>
                  <h2 className="mb-4 text-2xl font-black text-brand-900">
                    DET: canal oficial de comunicacao com a fiscalizacao trabalhista
                  </h2>
                  <p className="mb-6 text-slate-700 leading-relaxed">
                    Se o problema do seu eSocial já se mistura com intimacao, aviso institucional e risco de perder prazo, o DET precisa entrar no fluxo da empresa.
                  </p>
                  <span className="inline-flex items-center gap-2 font-bold text-brand-900 group-hover:text-accent-pink transition-colors">
                    Entender o DET
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </FadeIn>

              <FadeIn direction="left" delay={0.08}>
                <Link
                  href="/rh/declaracao-inexistencia-risco-dir"
                  className="surface-panel group block transition-all hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="kicker">Leitura complementar</span>
                  <h2 className="mb-4 text-2xl font-black text-brand-900">
                    DIR: como validar se sua empresa realmente pode usar simplificacao
                  </h2>
                  <p className="mb-6 text-slate-700 leading-relaxed">
                    Para empresas tentando simplificar SST, a DIR so e segura quando o enquadramento esta correto e conversa com a realidade do estabelecimento.
                  </p>
                  <span className="inline-flex items-center gap-2 font-bold text-brand-900 group-hover:text-accent-pink transition-colors">
                    Entender a DIR
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </FadeIn>
            </div>
          )}
        </div>
      </section>

      <section className="bg-brand-900 py-20 text-white">
        <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
          <FadeIn direction="up">
            <h2 className="mb-12 text-center text-3xl font-black text-accent-pink">
              Autoridade comprovada em {data.h1.split(' ')[0]}
            </h2>

            <div className="mb-16 grid gap-8 md:grid-cols-2">
              {data.geoOpt.statistic && (
                <div className="rounded-xl border border-brand-500/30 bg-brand-800/50 p-8">
                  <p className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-400">
                    Metrica real de impacto
                  </p>
                  <p className="text-2xl font-black leading-tight text-white">
                    &quot;{data.geoOpt.statistic}&quot;
                  </p>
                </div>
              )}

              <div className="rounded-xl border border-brand-500/30 bg-brand-800/50 p-8">
                <p className="mb-4 text-sm font-bold uppercase tracking-widest text-slate-400">
                  Opiniao do especialista
                </p>
                <blockquote className="mb-4 text-lg italic text-slate-300">
                  &quot;{data.geoOpt.expertQuote.text}&quot;
                </blockquote>
                <div className="flex flex-col border-l-2 border-accent-pink pl-3">
                  <span className="font-bold text-white">{data.geoOpt.expertQuote.author}</span>
                  <span className="text-sm text-slate-400">{data.geoOpt.expertQuote.role}</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {servico === 'treinamentos-nrs-cipa-brigada' && (
            <section className="bg-white py-24 text-brand-900">
              <div className="mx-auto max-w-[1280px] px-6">
                <FadeIn className="mb-16 text-center">
                  <span className="mb-4 block text-xs font-black uppercase tracking-widest text-accent-pink underline decoration-accent-pink/30 underline-offset-8">
                    Grade técnica completa
                  </span>
                  <h2 className="text-4xl font-black tracking-tighter italic md:text-5xl">
                    Nossos treinamentos NRs
                  </h2>
                  <p className="mx-auto mt-4 max-w-2xl text-xl font-medium text-slate-500">
                    Capacitação teórica e prática com certificação válida em todo o território nacional.
                  </p>
                </FadeIn>

                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {trainingsData.map((training) => (
                    <Link
                      key={training.slug}
                      href={`/treinamentos/${training.slug}`}
                      className="group flex h-full flex-col rounded-[2rem] border border-slate-100 bg-slate-50 p-8 transition-all duration-500 hover:border-brand-900 hover:bg-brand-900"
                    >
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm transition-colors group-hover:bg-accent-pink">
                        <CheckCircle2 className="h-6 w-6 text-accent-pink group-hover:text-white" />
                      </div>
                      <h3 className="mb-3 text-xl font-black transition-colors group-hover:text-white">{training.title}</h3>
                      <p className="flex-grow text-sm font-medium leading-relaxed text-slate-600 transition-colors group-hover:text-slate-300">
                        {training.summary}
                      </p>
                      <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6 group-hover:border-white/10">
                        <span className="text-xs font-black uppercase tracking-widest text-brand-500 group-hover:text-accent-pink">
                          Carga horaria: {training.workload.split(' ')[0]}
                        </span>
                        <ArrowRight className="h-4 w-4 text-brand-500 transition-all group-hover:translate-x-2 group-hover:text-accent-pink" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>
          )}

          <FadeIn direction="up" delay={0.2}>
            <div className="rounded-2xl bg-white p-8 text-brand-900 shadow-xl md:p-12">
              <div className="mb-8 flex items-center justify-center gap-3">
                <HelpCircle className="h-8 w-8 text-accent-pink" />
                <h3 className="text-2xl font-black">Duvidas frequentes</h3>
              </div>

              <div className="space-y-6">
                {frequentFaqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-slate-200 pb-6 last:border-0 last:pb-0">
                    <h4 className="mb-2 flex items-start gap-2 text-lg font-bold">
                      <span className="text-accent-pink">Q:</span> {faq.q}
                    </h4>
                    <p className="border-l-2 border-slate-100 pl-6 italic text-slate-600">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-slate-100 bg-white py-20">
        <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="mx-auto max-w-4xl text-center">
              <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
                Próximo passo
              </span>
              <h2 className="mb-6 text-3xl font-black text-brand-900 md:text-5xl">
                Sua empresa não precisa tratar {seoCopy.serviceName.toLowerCase()} como urgência de última hora
              </h2>
              <p className="mb-10 text-lg leading-relaxed text-slate-600 md:text-xl">
                Quanto mais claro o fluxo técnico, documental e operacional, mais fácil fica contratar, cumprir prazo e reduzir risco trabalhista sem travar o dia a dia do RH. Se sua empresa precisa decidir agora, a SERMST orienta o escopo antes que a demanda vire atraso, retrabalho ou exposição jurídica.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <Link href="/contato" className="btn-primary-safe">
                  Falar com a SERMST
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/servicos" className="btn-outline-safe">
                  Ver outros serviços
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </article>
  );
}
