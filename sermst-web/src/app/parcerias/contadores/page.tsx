import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BadgePercent,
  CheckCircle2,
  Handshake,
  Headphones,
  ShieldCheck,
  Sparkles,
  Users,
} from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';

export const metadata: Metadata = {
  title: 'Contador Parceiro SERMST | Aumente o Faturamento',
  description:
    'Seja um contador parceiro da SERMST. Indique clientes que precisam de SST, receba comissão por indicação e conte com uma equipe especializada para cuidar de toda a operação.',
  alternates: {
    canonical: 'https://sermst.com.br/parcerias/contadores',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'Seja um contador parceiro da SERMST',
    description:
      'Indique seus clientes para a SERMST, receba comissão por indicação e aumente a receita do escritório sem assumir a operação de SST.',
    url: 'https://sermst.com.br/parcerias/contadores',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/images/site/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Programa de parceria da SERMST para contadores',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seja um contador parceiro da SERMST',
    description: 'Indique clientes para a SERMST e aumente a receita do seu escritório sem assumir a operação de SST.',
    images: ['/images/site/og-cover.jpg'],
  },
  other: {
    'geo.placename': 'São Paulo, SP, Brasil',
    'geo.region': 'BR-SP',
  },
};

const whatsappHref =
  'https://wa.me/5511915146447?text=Ol%C3%A1%21%20Quero%20ser%20contador%20parceiro%20da%20SERMST.';

const benefits = [
  {
    icon: BadgePercent,
    title: 'Você recebe pela indicação',
    text: 'Quando um cliente indicado fecha contrato, você recebe a comissão prevista no programa.',
  },
  {
    icon: Headphones,
    title: 'Você não assume a operação',
    text: 'Você indica o cliente e a SERMST cuida dos documentos, exames, treinamentos e vencimentos de SST.',
  },
  {
    icon: ShieldCheck,
    title: 'Você conta com experiência',
    text: 'A SERMST atende seus clientes com uma equipe especializada e mais de 55 anos de experiência em SST.',
  },
  {
    icon: Users,
    title: 'Você fortalece sua carteira',
    text: 'Você oferece uma solução importante e mantém seu escritório mais presente no dia a dia do cliente.',
  },
];

const steps = [
  ['01', 'Você indica', 'Quando perceber que um cliente precisa de SST, você apresenta a SERMST e compartilha os dados para o contato.'],
  ['02', 'A SERMST atende', 'A equipe conversa com o cliente, entende o cenário, monta a proposta e conduz a contratação.'],
  ['03', 'Você recebe', 'Depois que o contrato é fechado, o time informa o valor e o prazo da sua comissão.'],
];

const faqs = [
  {
    question: 'Preciso vender os serviços de SST?',
    answer:
      'Não, você apresenta a oportunidade e faz a indicação e o time da SERMST conversa com o cliente, monta a proposta e cuida da operação técnica.',
  },
  {
    question: 'Quanto o contador recebe?',
    answer:
      'O time comercial explica a base de cálculo, os prazos e as demais condições da comissão por indicação.',
  },
  {
    question: 'Quais clientes posso indicar?',
    answer:
      'Você pode indicar empresas que precisam de exames ocupacionais, PGR, PCMSO, laudos, treinamentos, eSocial SST ou acompanhamento recorrente.',
  },
  {
    question: 'A parceria tem custo para o escritório?',
    answer:
      'O time comercial explica como funciona o cadastro, como registrar as indicações e quais são as condições do programa.',
  },
];

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://sermst.com.br/parcerias/contadores',
  url: 'https://sermst.com.br/parcerias/contadores',
  name: 'Contador Parceiro SERMST',
  description: metadata.description,
  inLanguage: 'pt-BR',
  isPartOf: { '@id': 'https://sermst.com.br/#website' },
  publisher: { '@id': 'https://sermst.com.br/#organization' },
  audience: {
    '@type': 'BusinessAudience',
    audienceType: 'Contadores e escritórios de contabilidade',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Brasil',
  },
  about: ['Parceria contábil', 'Indicação de clientes', 'Saúde e Segurança do Trabalho'],
  mainEntity: { '@id': 'https://sermst.com.br/parcerias/contadores#service' },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  '@id': 'https://sermst.com.br/parcerias/contadores#service',
  name: 'Programa de parceria para contadores',
  serviceType: 'Parceria comercial e indicação de serviços de SST',
  url: 'https://sermst.com.br/parcerias/contadores',
  description:
    'Programa para contadores indicarem empresas que precisam de Saúde e Segurança do Trabalho e contarem com a operação especializada da SERMST.',
  provider: { '@id': 'https://sermst.com.br/#organization' },
  audience: {
    '@type': 'BusinessAudience',
    audienceType: 'Contadores e escritórios de contabilidade',
  },
  areaServed: {
    '@type': 'Country',
    name: 'Brasil',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function ContadoresParceirosPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', item: 'https://sermst.com.br' },
          { name: 'Contadores parceiros' },
        ]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute -right-40 top-10 h-96 w-96 rounded-full bg-accent-pink/20 blur-3xl" />
        <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-28">
          <FadeIn direction="right" viewport={false}>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-slate-200">
              <Handshake className="h-4 w-4 text-accent-pink" />
              Contador parceiro
            </span>
            <h1 className="h1-standard mb-6 text-white">
              Seu cliente precisa de SST e você pode indicar a SERMST e criar uma nova receita para o escritório.
            </h1>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-2xl">
              Você faz a indicação e a SERMST conversa com o cliente, monta a proposta e cuida da operação de SST e, quando o contrato é fechado, você recebe a comissão prevista no programa.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary-safe-lg">
                Quero ser parceiro
                <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#como-funciona" className="btn-light-safe">
                Entender como funciona
              </a>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1} viewport={false}>
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-sm md:p-8">
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <span className="kicker text-slate-300">Uma nova receita para o escritório</span>
                  <h2 className="mt-3 text-3xl font-black text-white">Você indica e a SERMST cuida do resto.</h2>
                </div>
                <Sparkles className="h-8 w-8 shrink-0 text-accent-pink" />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                {['Sem executar SST', 'Comissão por indicação', 'Atendimento especializado', 'Mais valor para seus clientes'].map((item) => (
                  <div key={item} className="flex items-center gap-2 rounded-xl bg-white/10 p-3 text-sm font-semibold text-slate-100">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-accent-pink" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8">
        <FadeIn direction="up">
          <div className="mb-12 max-w-3xl">
            <span className="kicker">Por que ser parceiro</span>
            <h2 className="mt-3 text-3xl font-black leading-tight text-brand-900 md:text-5xl">
              Quando o cliente precisa de SST você já sabe para quem encaminhar?
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Você, contador, já tem a confiança e o relacionamento com o cliente e é nessa hora que a SERMST entra com a equipe técnica, o atendimento e a experiência para entregar uma solução completa de SST.
            </p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <article key={title} className="card-clean">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-pink/10 text-accent-pink">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-black text-brand-900">{title}</h3>
                <p className="leading-relaxed text-slate-600">{text}</p>
              </article>
            ))}
          </div>
        </FadeIn>
      </section>

      <section id="como-funciona" className="border-y border-slate-200 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8">
          <FadeIn direction="up">
            <div className="mb-12 max-w-3xl">
              <span className="kicker">Como funciona</span>
          <h2 className="mt-3 text-3xl font-black text-brand-900 md:text-5xl">Não precisa se preocupar com nada</h2>
            </div>
            <div className="grid gap-5 lg:grid-cols-3">
              {steps.map(([number, title, text]) => (
                <div key={number} className="relative rounded-[2rem] border border-slate-200 bg-slate-50 p-7">
                  <span className="mb-6 block text-5xl font-black text-accent-pink/30">{number}</span>
                  <h3 className="mb-3 text-2xl font-black text-brand-900">{title}</h3>
                  <p className="leading-relaxed text-slate-600">{text}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto grid max-w-[1280px] gap-10 px-6 py-20 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <FadeIn direction="right">
          <div>
            <span className="kicker">O que seus clientes podem contratar</span>
            <h2 className="mt-3 text-3xl font-black text-brand-900 md:text-4xl">SST completa com a experiência da SERMST</h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Você oferece esse apoio sem contratar profissionais, comprar sistemas ou acompanhar cada etapa do atendimento.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              E, quando quiser entender melhor os serviços oferecidos, você pode conhecer os{' '}
              <Link href="/assinaturas" className="font-bold text-brand-900 underline decoration-accent-pink underline-offset-4">
                planos de SST por assinatura
              </Link>{' '}
              da SERMST.
            </p>
            <ul className="mt-8 space-y-4">
              {['Exames ocupacionais e ASO', 'PGR, PCMSO e laudos técnicos', 'Treinamentos de NRs e CIPA', 'eSocial SST e gestão de vencimentos'].map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-pink" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
        <FadeIn direction="left" delay={0.1}>
          <div className="surface-panel-muted">
            <span className="kicker">Mais de 55 anos</span>
            <h2 className="mt-3 text-3xl font-black text-brand-900">Uma equipe experiente por trás da sua indicação</h2>
            <p className="mt-5 leading-relaxed text-slate-600">
              Quando você indicar uma empresa, a equipe entende o porte, a atividade e os riscos do negócio e depois orienta o cliente e apresenta o caminho mais adequado.
            </p>
            <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-dark-safe mt-8 w-full sm:w-auto">
              Falar com o time de parcerias
              <ArrowRight className="h-5 w-5" />
            </a>
          </div>
        </FadeIn>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <FadeIn direction="right">
            <div>
              <span className="kicker">Tire suas dúvidas</span>
              <h2 className="mt-3 text-3xl font-black text-brand-900 md:text-4xl">Quer entender antes de indicar?</h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Fazemos uma conversa rápida para explicar como a parceria funciona. Também falamos sobre comissão, prazos, registro das indicações e atendimento ao cliente.
              </p>
              <div className="mt-8 space-y-5">
                {faqs.map((faq) => (
                  <details key={faq.question} className="group rounded-2xl border border-slate-200 bg-white p-5">
                    <summary className="cursor-pointer list-none pr-6 font-black text-brand-900 marker:hidden group-open:text-accent-pink">
                      {faq.question}
                    </summary>
                    <p className="mt-3 leading-relaxed text-slate-600">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.1}>
            <div className="surface-panel h-fit lg:sticky lg:top-28">
              <span className="kicker">Fale com o time de parcerias</span>
              <h2 className="mt-3 text-3xl font-black text-brand-900">Quer começar a indicar?</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                Clique em um dos canais e explique rapidamente como funciona o seu escritório. Nossa equipe apresenta a parceria e tira suas dúvidas.
              </p>
              <div className="mt-8 space-y-3">
                <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp btn-whatsapp-solid flex w-full">
                  Falar pelo WhatsApp
                  <ArrowRight className="h-5 w-5" />
                </a>
                <a href="mailto:comercial@sermst.com.br?subject=Parceria%20para%20contadores" className="btn-outline-safe flex w-full">
                  Enviar e-mail
                  <ArrowRight className="h-5 w-5" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-brand-900 px-6 py-16 text-center text-white lg:px-8">
        <FadeIn direction="up">
          <span className="kicker text-slate-300">Contador parceiro SERMST</span>
          <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-black md:text-5xl">Tem clientes que precisam de SST? Vamos conversar.</h2>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className="btn-primary-safe-lg mt-8">
            Quero conhecer a parceria
            <ArrowRight className="h-5 w-5" />
          </a>
        </FadeIn>
      </section>
    </div>
  );
}
