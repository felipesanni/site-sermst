import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, CheckCircle, Clock, FileText, Navigation, ShieldCheck, TrendingUp, Zap } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { PenaltyCalculator } from '@/components/sections/penalty-calculator';
import { localidades, servicosSEO } from '@/lib/data/seo-content';
import { buildFrequentFaqs } from '@/lib/faq';
import { trainingsData } from '@/lib/data/treinamentos-data';
import { buildLocalServiceCopy } from '@/lib/seo-copy';

function getServiceSearchLabel(servico: string, fallback: string) {
  if (servico === 'exame-admissional-expresso') {
    return 'Clinica de Exame Admissional';
  }

  return fallback;
}

export function generateStaticParams() {
  const params: { servico: string; regiao: string }[] = [];

  Object.keys(servicosSEO).forEach((servico) => {
    localidades.forEach((local) => {
      params.push({ servico, regiao: local.slug });
    });
  });

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ servico: string; regiao: string }>
}): Promise<Metadata> {
  const { servico, regiao } = await params;
  const data = servicosSEO[servico];
  const local = localidades.find((item) => item.slug === regiao);

  if (!data || !local) {
    return { title: 'Pagina não encontrada | SERMST' };
  }

  const rawMainTerm = data.h1.split('|')[0].trim();
  const mainTerm = getServiceSearchLabel(servico, rawMainTerm);
  const title = `${mainTerm} em ${local.nome} | SERMST`;
  const description = servico === 'exame-admissional-expresso'
    ? `Precisa de clinica de exame admissional em ${local.nome}? A SERMST atende empresas que buscam clinicas de exames admissionais com ASO, laboratorio proprio, exames ocupacionais e apoio ao eSocial.`
    : `Precisa de ${mainTerm.toLowerCase()} em ${local.nome}? Clínica de medicina do trabalho com liberação de ASO na hora, laboratório próprio e envio ao eSocial. Atendimento expresso para empresas ${local.adjetivo}. Fale agora com a SERMST.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      locale: 'pt_BR',
      type: 'website',
      siteName: 'SERMST Medicina e Segurança do Trabalho',
    },
    alternates: {
      canonical: `https://sermst.com.br/servicos/${servico}/${regiao}`,
    },
  };
}

export default async function LocalSEOPage({
  params,
}: {
  params: Promise<{ servico: string; regiao: string }>
}) {
  const { servico, regiao } = await params;
  const data = servicosSEO[servico];
  const local = localidades.find((item) => item.slug === regiao);

  if (!data || !local) notFound();

  const servicoNome = getServiceSearchLabel(servico, data.h1.split('|')[0].trim());
  const waMessage = `Preciso de ${servicoNome} em ${local.nome}`;
  const seoCopy = buildLocalServiceCopy(data, local);
  const frequentFaqs = buildFrequentFaqs(data.geoOpt.faq, {
    context: 'service-local',
    topic: servicoNome,
    localidade: local.nome,
  });

  const serviceJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: `${servicoNome} em ${local.nome}`,
    provider: {
      '@type': 'MédicalOrganization',
      name: 'SERMST - Medicina e Segurança do Trabalho',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'São Paulo',
        addressRegion: 'SP',
      },
    },
    areaServed: {
      '@type': 'City',
      name: local.nome,
    },
  };

  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: frequentFaqs.map((fq) => ({
      '@type': 'Question',
      name: fq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: fq.a,
      },
    })),
  };

  return (
    <div className="flex min-h-screen flex-1 flex-col bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <section className="relative overflow-hidden bg-brand-900 pb-40 pt-32">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image src="/images/site/corporate-team.jpg" alt="Equipe corporativa e gestão SST" fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-brand-900/90"></div>
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6">
          <FadeIn>
            <div className="max-w-4xl">
              <div className="mb-8 flex flex-wrap gap-2">
                {data.isClínico ? (
                  <span className="rounded-full bg-accent-pink px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white shadow-lg">
                    ASO no mesmo dia
                  </span>
                ) : (
                  <span className="rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
                    Compliance e autoridade
                  </span>
                )}
                <span className="rounded-full border border-white/10 bg-white/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white backdrop-blur-md">
                  Unidade {local.nome}
                </span>
              </div>

              <h1 className="mb-8 text-4xl font-black leading-[0.9] tracking-tighter text-white md:text-6xl lg:text-7xl">
                {servicoNome} <br />
                <span className="font-serif italic text-accent-pink">em {local.nome}</span>
              </h1>

              <p className="mb-10 max-w-2xl border-l-4 border-accent-pink pl-6 text-xl font-medium leading-relaxed text-slate-300 md:text-2xl">
                {data.hook}
              </p>

              <div className="flex flex-col gap-5 sm:flex-row">
                <a
                  href={`https://wa.me/5511915146447?text=Quero orcamento para ${servicoNome} em ${local.nome}`}
                  className="btn-primary-safe-lg group flex scale-105 px-10 py-5 text-lg font-black shadow-2xl"
                >
                  Solicitar orcamento
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-2" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white py-24">
        <div className="mx-auto grid w-full max-w-[1280px] items-center gap-20 px-6 md:grid-cols-2">
          <FadeIn direction="right">
            <span className="mb-4 block text-xs font-black uppercase tracking-widest text-accent-pink">
              Autoridade legal e técnica
            </span>
            <h2 className="mb-8 text-3xl font-black leading-tight text-brand-900 md:text-4xl">
              {data.isClínico ? `Ágilidade no ASO e compliance em ${local.nome}` : `Elaboração técnica e segurança jurídica em ${local.nome}`}
            </h2>
            <p className="mb-10 text-xl font-medium leading-relaxed text-slate-600">
              {data.quandoRequerido}
            </p>
            <div className="rounded-2xl border-l-4 border-brand-900 bg-slate-50 p-6">
              <div className="mb-3 flex items-center gap-3 text-brand-900">
                <ShieldCheck className="h-6 w-6" />
                <span className="text-sm font-black uppercase">Leitura de especialista</span>
              </div>
              <p className="font-medium italic text-slate-700">
                {local.contextoEmpresarial} Unimos a expertise em medicina do trabalho a precisão regulatoria do eSocial.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="left">
            <div className="rounded-[3rem] bg-brand-900 p-10 text-white shadow-2xl">
              <h3 className="mb-10 flex items-center gap-4 text-2xl font-black">
                <Zap className="h-8 w-8 text-accent-pink" />
                Diferenciais de autoridade
              </h3>
              <ul className="space-y-6">
                {data.content.beneficios.map((ben, i) => (
                  <li key={i} className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-colors hover:bg-white/10">
                    <CheckCircle className="h-6 w-6 shrink-0 text-accent-pink" />
                    <span className="text-lg font-bold">{ben}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <div className="mx-auto grid max-w-5xl gap-8">
            <FadeIn direction="up">
              <div className="surface-panel-muted">
                <span className="kicker">
                  Atendimento local
                </span>
                <h2 className="mb-6 text-3xl font-black text-brand-900 md:text-4xl">
                  {seoCopy.serviceName} em {local.nome}: o que a empresa realmente precisa saber
                </h2>
                <div className="space-y-5 text-lg leading-relaxed text-slate-700">
                  {seoCopy.localParagraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </FadeIn>

            <div className="grid gap-8 lg:grid-cols-2">
              <FadeIn direction="right">
                <div className="surface-panel h-full">
                  <h2 className="mb-5 text-2xl font-black text-brand-900">
                    O que muda quando a empresa centraliza com a SERMST
                  </h2>
                  <div className="space-y-5 text-base leading-relaxed text-slate-700 md:text-lg">
                    {seoCopy.localSeoParagraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="left" delay={0.1}>
                <div className="h-full rounded-[2rem] bg-brand-900 p-8 text-white lg:p-10">
                  <h2 className="mb-5 text-2xl font-black">Por que falar com a SERMST</h2>
                  <p className="text-base leading-relaxed text-slate-200 md:text-lg">
                    {seoCopy.bridgeSentence}
                  </p>
                  <p className="mt-5 text-base leading-relaxed text-slate-200 md:text-lg">
                    Em 15 minutos a equipe entende o porte, a operação e o momento da empresa antes de indicar exame, laudo ou gestão SST. Sem proposta genérica, sem venda forçada — só o que realmente se aplica ao seu cenário.
                  </p>
                  <div className="mt-8 border-t border-white/10 pt-8">
                    <a
                      href={`https://wa.me/5511915146447?text=${encodeURIComponent(seoCopy.localCta)}`}
                      className="btn-primary-safe"
                    >
                      {seoCopy.localCta}
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6 text-center">
          <FadeIn>
            <h2 className="mb-4 text-4xl font-black text-brand-900">
              {data.isClínico ? 'Fluxo de atendimento otimizado' : 'Fluxo de elaboração técnica'}
            </h2>
            <p className="mb-16 text-xl font-medium text-slate-500">
              {data.isClínico ? `Do agendamento ao ASO em maos para sua empresa em ${local.nome}.` : `Processo rigoroso para garantir a conformidade legal em ${local.nome}.`}
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              {(data.isClínico
                ? ['Agendamento online', 'Avaliação na unidade', 'Liberação para o RH']
                : data.fluxoCorporativo || ['Diagnóstico', 'Vistoria em campo', 'Entrega técnica']).map((step, i) => (
                <div key={i} className="group flex flex-col items-center rounded-3xl border border-slate-100 bg-white p-10 shadow-xl transition-colors hover:border-accent-pink">
                  <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-white shadow-lg transition-transform group-hover:scale-110 ${i === 1 ? 'bg-accent-pink' : 'bg-brand-900'}`}>
                    {i === 0 && <Clock className="h-8 w-8" />}
                    {i === 1 && (data.isClínico ? <Navigation className="h-8 w-8" /> : <ShieldCheck className="h-8 w-8" />)}
                    {i === 2 && <TrendingUp className="h-8 w-8" />}
                  </div>
                  <h4 className="mb-4 text-xl font-black uppercase tracking-tighter text-brand-900">{step}</h4>
                  <p className="text-sm font-medium text-slate-500">
                    {i === 0 && (data.isClínico ? 'Fale com a equipe, valide a demanda e envie o colaborador com guia digital.' : 'Alinhamento de escopo, urgencia e cronograma de visitas técnicas.')}
                    {i === 1 && (data.isClínico ? 'Atendimento prioritario na unidade central com laboratório próprio.' : 'Engenharia e medicina realizam vistoria no ambiente para coletar dados reais.')}
                    {i === 2 && (data.isClínico ? 'ASO com validade plena e envio imediato ao eSocial.' : 'Elaboração do laudo, assinatura técnica e entrega digital ao RH.')}
                  </p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {(data.isClínico || (data.documentosNecessarios && data.documentosNecessarios.length > 0)) && (
        <section className="mx-auto w-full max-w-[1280px] px-6 py-24">
          <div className="grid gap-16 lg:grid-cols-2">
            <FadeIn direction="right">
              <div className="flex h-full flex-col rounded-[2.5rem] bg-slate-100 p-10">
                <div className="mb-8 flex items-center gap-4">
                  <FileText className="h-8 w-8 text-brand-900" />
                  <h3 className="text-2xl font-black uppercase tracking-tighter text-brand-900">
                    {data.isClínico ? 'O que o funcionario deve levar?' : 'Pre-requisitos técnicos'}
                  </h3>
                </div>
                <ul className="grid flex-grow gap-4 sm:grid-cols-2">
                  {data.documentosNecessarios?.map((doc, i) => (
                    <li key={i} className="flex items-center gap-3 rounded-xl bg-white p-4 text-sm font-bold text-brand-900 shadow-sm">
                      <CheckCircle className="h-4 w-4 text-accent-pink" /> {doc}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="flex h-full flex-col justify-center rounded-[2.5rem] bg-brand-900 p-10 text-white shadow-2xl">
                <Zap className="mb-6 h-12 w-12 text-accent-pink" />
                <h3 className="mb-6 text-3xl font-black uppercase tracking-tighter">Transparencia comercial</h3>
                <p className="mb-8 border-l-4 border-accent-pink pl-6 text-xl font-medium leading-relaxed opacity-90">
                  {data.expectativaCusto || 'Orçamentos personalizados para o CNPJ de sua empresa.'}
                </p>
                <a href={`https://wa.me/5511915146447?text=Quero orcamento para ${servicoNome} em ${local.nome}`} className="btn-primary-safe-lg px-10 py-5 text-center text-lg font-black uppercase tracking-tighter shadow-xl">
                  Falar com comercial
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      )}

      {servico === 'treinamentos-nrs-cipa-brigada' && (
        <section className="bg-white py-24">
          <div className="mx-auto max-w-[1280px] px-6">
            <FadeIn className="mb-16 text-center">
              <span className="mb-4 block text-xs font-black uppercase tracking-widest text-accent-pink underline decoration-accent-pink/30 underline-offset-8">
                Catalogo in-company e presencial
              </span>
              <h2 className="text-4xl font-black tracking-tighter italic text-brand-900 md:text-5xl">
                Grade de treinamentos NRs <br /> <small className="not-italic text-slate-400">em {local.nome}</small>
              </h2>
              <p className="mx-auto mt-4 max-w-2xl text-xl font-medium text-slate-500">
                Clique na norma para ver a carga horaria e o conteúdo programatico completo.
              </p>
            </FadeIn>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {trainingsData.map((training) => (
                <Link
                  key={training.slug}
                  href={`/treinamentos/${training.slug}`}
                  className="group flex h-full flex-col rounded-[2rem] border border-slate-100 bg-slate-50 p-8 transition-all duration-500 hover:-translate-y-1 hover:border-accent-pink/40 hover:bg-white hover:shadow-xl"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm transition-colors group-hover:bg-accent-pink/10">
                    <CheckCircle className="h-6 w-6 text-accent-pink" />
                  </div>
                  <h3 className="mb-3 text-xl font-black text-brand-900 transition-colors group-hover:text-accent-pink">{training.title}</h3>
                  <p className="flex-grow text-sm font-medium leading-relaxed text-slate-600">{training.summary}</p>
                  <div className="mt-8 flex items-center justify-between border-t border-slate-200 pt-6 group-hover:border-accent-pink/20">
                    <span className="text-xs font-black uppercase tracking-widest text-brand-500 group-hover:text-accent-pink">Ver grade</span>
                    <ArrowRight className="h-4 w-4 text-brand-500 transition-all group-hover:translate-x-2 group-hover:text-accent-pink" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <PenaltyCalculator localidade={local.nome} />

      <section className="mx-auto w-full max-w-[900px] px-6 py-24">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-brand-900 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-white">
            Consultoria técnica
          </span>
          <h2 className="text-4xl font-black tracking-tighter text-brand-900 md:text-5xl">Duvidas frequentes</h2>
          <p className="mt-4 font-medium text-slate-500">Tudo o que você precisa saber sobre {servicoNome} em {local.nome}.</p>
        </div>

        <div className="space-y-4">
          {frequentFaqs.map((fq, i) => (
            <details key={i} className="group faq-accordion" open={i === 0}>
              <summary className="faq-summary">
                <span className="faq-question">
                  {fq.q}
                </span>
                <div className="faq-icon">
                  <ArrowRight className="h-4 w-4 rotate-90" />
                </div>
              </summary>
              <div className="faq-answer">
                {fq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-6 py-24">
        <div className="relative overflow-hidden rounded-[3.5rem] bg-brand-900 p-12 text-center text-white md:p-24">
          <div className="absolute -mr-48 -mt-48 right-0 top-0 h-96 w-96 rounded-full bg-accent-pink/20 blur-[100px]"></div>
          <div className="relative z-10">
            <h2 className="mb-8 text-4xl font-black leading-tight md:text-6xl">
              Escolha uma referência em Medicina do Trabalho <br /> para sua sede em {local.nome}.
            </h2>
            <div className="flex flex-col justify-center gap-6 md:flex-row">
              <a href={`https://wa.me/5511915146447?text=${encodeURIComponent(waMessage)}`} className="btn-primary-safe-lg px-16 py-6 text-2xl font-black shadow-2xl hover:scale-105 active:scale-95">
                {waMessage}
              </a>
            </div>
            {!local.isHub && (
              <p className="mt-12 flex items-center justify-center gap-2 text-sm font-medium text-slate-400">
                <Navigation className="h-4 w-4" /> Atendimento centralizado para a Grande SP a {local.distanciaMedia} de você.
              </p>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
