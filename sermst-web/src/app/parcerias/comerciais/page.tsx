import type { Metadata } from 'next';
import Image from 'next/image';
import {
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  GraduationCap,
  Handshake,
  Headphones,
  MapPin,
  Network,
  Rocket,
  ShieldCheck,
  Target,
  UserCheck,
} from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';
import { LeadForm } from '@/components/forms/lead-form';
import { FadeIn } from '@/components/ui/fade-in';
import { siteImages } from '@/lib/site-images';
import { PartnerEarningsSimulator } from './partner-earnings-simulator';

export const metadata: Metadata = {
  title: 'Programa de Parceiros Comerciais SERMST | Venda SST',
  description:
    'Venda Planos SST, receba até 75% de uma mensalidade por cliente e conte com suporte técnico, comercial e estrutura da SERMST.',
  alternates: {
    canonical: 'https://sermst.com.br/parcerias/comerciais',
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
    title: 'Programa de Parceiros Comerciais SERMST',
    description:
      'Ganhe dinheiro vendendo Planos SST com o suporte de uma equipe experiente e responsável por toda a entrega.',
    url: 'https://sermst.com.br/parcerias/comerciais',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/images/site/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Programa de Parceiros Comerciais SERMST',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Programa de Parceiros Comerciais SERMST',
    description:
      'Receba até 75% de uma mensalidade por cliente vendendo Planos SST com todo o suporte da SERMST.',
    images: ['/images/site/og-cover.jpg'],
  },
};

const officialNrSource =
  'https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/itens-para-verificar/uncategorised/normas-regulamentadoras-portugues';

const commissionSteps = [
  {
    value: '50%',
    title: 'Primeira mensalidade',
    text: 'Você recebe 50% do valor da primeira mensalidade de cada novo contrato.',
    icon: CircleDollarSign,
  },
  {
    value: '+25%',
    title: 'Cliente ativo por 90 dias',
    text: 'Quando o cliente completa 90 dias ativo, você recebe mais 25% de uma mensalidade.',
    icon: Clock3,
  },
  {
    value: '5+',
    title: 'Acelerador de volume',
    text: 'Ao fechar cinco ou mais contratos no mesmo mês, você entra na faixa de aceleração de volume.',
    icon: Rocket,
  },
];

const operatingSteps = [
  {
    number: '01',
    title: 'Candidatura e seleção',
    text: 'Você apresenta seu perfil, experiência e plano de atuação. A entrada no programa depende de análise e alinhamento.',
  },
  {
    number: '02',
    title: 'Preparação comercial',
    text: 'Quem for selecionado conhece os planos, o cliente ideal, os limites da oferta e o processo correto para registrar cada oportunidade.',
  },
  {
    number: '03',
    title: 'Prospecção e venda',
    text: 'Você abre a conversa com a empresa, identifica a oportunidade e conduz a relação comercial com apoio da nossa equipe.',
  },
  {
    number: '04',
    title: 'Nossa equipe assume a entrega',
    text: 'Contrato fechado, cuidamos da implantação, dos documentos, exames, eSocial, vencimentos e suporte ao cliente.',
  },
];

const supportItems = [
  {
    icon: GraduationCap,
    title: 'Preparação para vender com segurança',
    text: 'Você aprende como apresentar os planos, para quem cada opção faz sentido e quando chamar o time técnico.',
  },
  {
    icon: Headphones,
    title: 'Apoio técnico durante a negociação',
    text: 'Surgiu uma dúvida na negociação? Você não precisa improvisar. Nosso time entra para orientar e ajudar no fechamento.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'Materiais e processo organizados',
    text: 'Você trabalha com preços definidos, escopo claro e uma operação preparada para receber o cliente vendido.',
  },
  {
    icon: Building2,
    title: 'Estrutura física quando precisar',
    text: 'O parceiro pode contar com espaço de apoio em nossa sede, mediante alinhamento prévio, para reuniões e atividades da operação.',
  },
];

const candidateProfiles = [
  'Profissionais com experiência em vendas B2B e acesso a empresários ou gestores',
  'Profissionais de SST que querem desenvolver uma frente comercial própria',
  'Consultores, contadores e profissionais de RH ou DP com relacionamento empresarial',
  'Empreendedores dispostos a prospectar, acompanhar negociações e liderar uma operação',
];

const faqs = [
  {
    question: 'Preciso ser profissional de SST para participar?',
    answer:
      'Não. O programa também recebe profissionais com perfil comercial e relacionamento B2B. Você precisa aprender a apresentar a oferta com clareza, mas a análise técnica e a execução dos serviços ficam com a nossa equipe.',
  },
  {
    question: 'Como funciona a comissão do programa?',
    answer:
      'Você recebe 50% da primeira mensalidade e mais 25% de uma mensalidade quando o cliente completa 90 dias ativo. Cinco ou mais contratos fechados no mesmo mês dão acesso ao acelerador de volume, conforme as regras apresentadas aos selecionados.',
  },
  {
    question: 'Posso montar minha própria equipe de vendas?',
    answer:
      'Sim. Você pode começar sozinho e, conforme ganhar tração, contratar e liderar sua própria equipe comercial. A seleção, a contratação, os custos e a gestão dessas pessoas ficam sob sua responsabilidade. Nós continuamos responsáveis pela entrega dos serviços vendidos.',
  },
  {
    question: 'O parceiro precisa executar algum serviço técnico?',
    answer:
      'Não. O papel do parceiro é comercial. Nossa equipe cuida da contratação do cliente, implantação, documentos, exames, eSocial, vencimentos e atendimento técnico incluído no plano.',
  },
  {
    question: 'A inscrição garante entrada no programa?',
    answer:
      'Não. A entrada acontece por seleção. Avaliamos experiência, disponibilidade, acesso ao mercado B2B, capacidade de desenvolver oportunidades e alinhamento com a nossa forma de trabalhar.',
  },
  {
    question: 'Quando recebo a comissão?',
    answer:
      'Você escolhe. Sempre que pedir o faturamento, a comissão disponível é paga. Pode faturar uma comissão por vez ou acumular valores e faturar tudo junto. Os 25% adicionais ficam disponíveis quando o cliente completa 90 dias ativo.',
  },
];

const pageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://sermst.com.br/parcerias/comerciais',
  url: 'https://sermst.com.br/parcerias/comerciais',
  name: 'Programa de Parceiros Comerciais SERMST',
  description: metadata.description,
  inLanguage: 'pt-BR',
  isPartOf: { '@id': 'https://sermst.com.br/#website' },
  publisher: { '@id': 'https://sermst.com.br/#organization' },
  audience: {
    '@type': 'BusinessAudience',
    audienceType:
      'Profissionais de vendas B2B, SST, contabilidade, RH e empreendedores',
  },
  about: [
    'Parceria comercial',
    'Planos SST',
    'Comissão de vendas',
    'Empreendedorismo B2B',
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
};

export default function ParceirosComerciaisPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', item: 'https://sermst.com.br' },
          { name: 'Programa de Parceiros Comerciais' },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0b_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0b_1px,transparent_1px)] bg-[size:28px_28px]" />
        <div className="absolute -left-40 top-32 h-96 w-96 rounded-full bg-accent-pink/15 blur-3xl" />
        <div className="absolute -right-20 -top-24 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-[1280px] items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-16 xl:py-24">
          <FadeIn direction="right" viewport={false}>
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-slate-200">
              <UserCheck className="h-4 w-4 text-sky-300" aria-hidden="true" />
              Programa de Parceiros
            </span>
            <h1 className="max-w-4xl text-[2.25rem] font-black leading-[1.04] tracking-tight text-white sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
              Ganhe dinheiro conectando empresas que precisam de SST a quem
              resolve.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Toda empresa que contrata funcionários precisa cumprir obrigações
              legais. Você encontra essas oportunidades e conecta cada uma às
              nossas soluções prontas.
            </p>

            <div className="mt-8 grid max-w-2xl gap-3 sm:grid-cols-3">
              {[
                'Planos com preços definidos',
                'Apoio em cada negociação',
                'Entrega técnica completa',
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm font-bold text-slate-200"
                >
                  <CheckCircle2
                    className="h-4 w-4 shrink-0 text-sky-300"
                    aria-hidden="true"
                  />
                  {item}
                </div>
              ))}
            </div>

            <p className="mt-5 flex items-start gap-2 text-sm leading-relaxed text-slate-400">
              <BadgeCheck
                className="mt-0.5 h-4 w-4 shrink-0 text-sky-300"
                aria-hidden="true"
              />
              Não é renda garantida nem uma inscrição automática. Procuramos
              pessoas com iniciativa, compromisso e vontade real de
              desenvolver mercado.
            </p>
          </FadeIn>

          <FadeIn direction="left" delay={0.1} viewport={false}>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-sm md:p-8">
              <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-accent-pink/15" />
              <div className="relative">
                <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-300">
                  Um modelo simples
                </span>

                <div className="mt-6 space-y-3">
                  {[
                    ['01', 'Encontre empresas', 'Prospete negócios com funcionários e identifique oportunidades de SST.'],
                    ['02', 'Apresente os planos', 'Trabalhe com preços definidos e apoio da equipe nas negociações.'],
                    ['03', 'Deixe a entrega conosco', 'Nossa equipe implanta, atende e acompanha o cliente vendido.'],
                  ].map(([number, title, text]) => (
                    <div
                      key={number}
                      className="flex gap-4 rounded-2xl border border-white/10 bg-white/10 p-4"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-sm font-black text-brand-900">
                        {number}
                      </span>
                      <div>
                        <strong className="text-base text-white">{title}</strong>
                        <p className="mt-1 text-sm leading-relaxed text-slate-300">
                          {text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border-t border-white/15 pt-6">
                  <p className="flex items-start gap-3 text-sm leading-relaxed text-slate-300">
                    <Handshake
                      className="mt-0.5 h-5 w-5 shrink-0 text-sky-300"
                      aria-hidden="true"
                    />
                    Cada contrato fechado gera remuneração para você, desde o
                    primeiro.
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8">
          <FadeIn direction="up">
            <div className="grid items-end gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div>
                <span className="kicker">Um mercado que não desaparece</span>
                <h2 className="text-3xl font-black leading-tight text-brand-900 md:text-5xl">
                  SST não é uma compra de ocasião. Faz parte da rotina de quem
                  emprega.
                </h2>
              </div>
              <div>
                <p className="text-lg leading-relaxed text-slate-600">
                  As Normas Regulamentadoras são obrigatórias para empresas que
                  possuem empregados regidos pela CLT. O que muda de uma
                  empresa para outra é o escopo, conforme atividade, riscos,
                  funções e porte.
                </p>
                <a
                  href={officialNrSource}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex text-sm font-bold text-brand-900 underline decoration-accent-pink underline-offset-4"
                >
                  Consultar referência oficial do Ministério do Trabalho
                </a>
              </div>
            </div>

            <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                ['Admissões e exames', 'Empresas contratam, demitem e precisam acompanhar a saúde ocupacional dos trabalhadores.'],
                ['Documentos e riscos', 'PGR, PCMSO, LTCAT e outros documentos precisam refletir a realidade da operação.'],
                ['eSocial SST', 'Eventos como S-2210, S-2220 e S-2240 fazem parte das obrigações empresariais aplicáveis.'],
                ['Prazos recorrentes', 'Exames, documentos e treinamentos vencem. O cliente precisa continuar acompanhado.'],
              ].map(([title, text]) => (
                <article
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-6"
                >
                  <CheckCircle2
                    className="mb-5 h-6 w-6 text-accent-pink"
                    aria-hidden="true"
                  />
                  <h3 className="text-lg font-black text-brand-900">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {text}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border-l-4 border-accent-pink bg-brand-900 px-6 py-5 text-white md:px-8">
              <p className="text-lg font-bold leading-relaxed">
                Você não precisa criar a necessidade de SST. Ela já existe. Seu
                papel é encontrar a empresa, entender o que está faltando e
                apresentar um caminho simples para colocar as obrigações em
                ordem.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8">
        <FadeIn direction="up">
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <span className="kicker">Como você é remunerado</span>
            <h2 className="text-3xl font-black text-brand-900 md:text-5xl">
              Você ganha pela venda. E ganha mais quando vende certo.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              A primeira comissão remunera o fechamento. Os 25% adicionais
              entram quando o cliente completa 90 dias ativo.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {commissionSteps.map(({ value, title, text, icon: Icon }) => (
              <article
                key={title}
                className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="absolute -right-6 -top-8 text-[8rem] font-black leading-none text-slate-100">
                  {value}
                </div>
                <div className="relative">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-pink/10 text-accent-pink">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="mt-7 text-5xl font-black text-brand-900">
                    {value}
                  </p>
                  <h3 className="mt-2 text-xl font-black text-brand-900">
                    {title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{text}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-6 flex items-start gap-4 rounded-2xl border border-sky-200 bg-sky-50 p-5 text-brand-900">
            <BadgeCheck
              className="mt-0.5 h-6 w-6 shrink-0 text-sky-600"
              aria-hidden="true"
            />
            <div>
              <p className="font-black">Você escolhe quando faturar</p>
              <p className="mt-1 leading-relaxed text-slate-600">
                Não há lote mínimo. A comissão disponível é paga sempre que você
                pedir o faturamento. Pode faturar uma por vez ou acumular valores
                e faturar tudo junto.
              </p>
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8">
        <FadeIn direction="up">
          <div className="mb-12 max-w-3xl">
            <span className="kicker">Da candidatura à primeira venda</span>
            <h2 className="text-3xl font-black text-brand-900 md:text-5xl">
              Você cuida da relação comercial. Nós sustentamos a entrega.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {operatingSteps.map((step) => (
              <article
                key={step.number}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm"
              >
                <span className="text-5xl font-black text-accent-pink/30">
                  {step.number}
                </span>
                <h3 className="mt-6 text-xl font-black text-brand-900">
                  {step.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-600">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="overflow-hidden border-y border-slate-200 bg-brand-900 text-white">
        <div className="mx-auto grid max-w-[1280px] items-stretch lg:grid-cols-[0.92fr_1.08fr]">
          <FadeIn direction="right" className="relative min-h-[360px] lg:min-h-full">
            <Image
              src={siteImages.home.clinicOperations.src}
              alt={siteImages.home.clinicOperations.alt}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-900/70 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-brand-900/20" />
            <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/15 bg-brand-900/85 p-4 backdrop-blur-sm">
              <p className="flex items-center gap-2 text-sm font-bold">
                <MapPin className="h-4 w-4 text-accent-pink" aria-hidden="true" />
                Sede SERMST no Centro Histórico de São Paulo
              </p>
            </div>
          </FadeIn>

          <div className="px-6 py-16 lg:px-14 lg:py-20">
            <FadeIn direction="left" delay={0.1}>
              <span className="kicker text-slate-300">Você faz parte do time</span>
              <h2 className="text-3xl font-black leading-tight text-white md:text-5xl">
                O cliente é seu relacionamento. A responsabilidade da entrega
                é nossa.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                Você não fica sozinho diante de uma dúvida técnica ou de uma
                negociação mais complexa. Conta com a nossa experiência
                para entender o cenário, orientar a proposta e atender a
                empresa depois da assinatura.
              </p>

              <div className="mt-9 grid gap-4 sm:grid-cols-2">
                {supportItems.map(({ icon: Icon, title, text }) => (
                  <article
                    key={title}
                    className="rounded-2xl border border-white/15 bg-white/10 p-5"
                  >
                    <Icon
                      className="h-6 w-6 text-accent-pink"
                      aria-hidden="true"
                    />
                    <h3 className="mt-4 font-black text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      {text}
                    </p>
                  </article>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-[1280px] items-center gap-12 px-6 py-20 lg:grid-cols-[1fr_1fr] lg:px-8">
          <FadeIn direction="right">
            <span className="kicker">Uma operação que pode crescer com você</span>
            <h2 className="text-3xl font-black leading-tight text-brand-900 md:text-5xl">
              Você pode começar sozinho. Não precisa continuar sozinho.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              Depois de validar sua forma de vender, você pode contratar
              pessoas, distribuir a prospecção e liderar sua própria equipe
              comercial. Cada novo vendedor amplia sua capacidade de encontrar
              empresas e abrir negociações.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              A equipe é sua: recrutamento, contratação, custos e gestão ficam
              sob sua responsabilidade. Nós seguimos como a estrutura que
              precifica, contrata o cliente e entrega o serviço de SST.
            </p>
            <div className="mt-8 rounded-2xl border border-accent-pink/20 bg-accent-pink/5 p-5">
              <p className="font-black text-brand-900">
                Seu crescimento deixa de depender apenas das horas que você
                consegue vender pessoalmente.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <div className="relative rounded-[2rem] bg-slate-50 p-7 md:p-9">
              <div className="absolute -right-3 -top-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-pink text-white shadow-lg">
                <Network className="h-8 w-8" aria-hidden="true" />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500">
                Caminho de expansão
              </span>
              <div className="mt-7 space-y-4">
                {[
                  ['1', 'Você domina a oferta', 'Aprende a prospectar, apresentar os planos e conduzir o fechamento.'],
                  ['2', 'Organiza seu processo', 'Cria rotina, acompanha oportunidades e entende quais perfis convertem melhor.'],
                  ['3', 'Forma sua equipe', 'Contrata vendedores sob sua gestão e multiplica a presença comercial.'],
                  ['4', 'Escala sua carteira', 'Mais pessoas prospectando significam mais contratos e mais receita potencial.'],
                ].map(([number, title, text]) => (
                  <div
                    key={number}
                    className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-900 text-sm font-black text-white">
                      {number}
                    </span>
                    <div>
                      <h3 className="font-black text-brand-900">{title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section
        id="simulador"
        className="scroll-mt-28 border-y border-slate-200 bg-white"
      >
        <div className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8">
          <FadeIn direction="up">
            <div className="mb-10 max-w-3xl">
              <span className="kicker">Agora, faça as contas</span>
              <h2 className="text-3xl font-black leading-tight text-brand-900 md:text-5xl">
                Veja quanto o seu ritmo de vendas pode gerar.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Depois de conhecer o mercado, a divisão de responsabilidades e
                a forma de remuneração, escolha quantos contratos pretende
                fechar. A simulação monta a carteira automaticamente e mostra o
                potencial desse volume.
              </p>
            </div>
            <PartnerEarningsSimulator />
          </FadeIn>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <FadeIn direction="right">
            <div>
              <span className="kicker">Quem procuramos</span>
              <h2 className="text-3xl font-black leading-tight text-brand-900 md:text-5xl">
                O programa não foi feito para qualquer pessoa.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Procuramos parceiros que saibam construir confiança, tenham
                disciplina comercial e entendam que uma venda boa continua
                depois da assinatura.
              </p>
              <ul className="mt-8 space-y-4">
                {candidateProfiles.map((profile) => (
                  <li
                    key={profile}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4"
                  >
                    <Target
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent-pink"
                      aria-hidden="true"
                    />
                    <span className="font-semibold leading-relaxed text-slate-700">
                      {profile}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <div className="surface-panel">
              <span className="kicker">O que pesa na seleção</span>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  ['Acesso ao B2B', 'Relacionamento ou capacidade real de chegar a empresários e gestores.'],
                  ['Disciplina', 'Rotina para prospectar, acompanhar e manter oportunidades vivas.'],
                  ['Postura consultiva', 'Vender com clareza, sem prometer o que não faz parte do plano.'],
                  ['Vontade de crescer', 'Interesse em aprender, produzir e construir uma operação duradoura.'],
                ].map(([title, text]) => (
                  <article
                    key={title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
                  >
                    <ShieldCheck
                      className="h-5 w-5 text-accent-pink"
                      aria-hidden="true"
                    />
                    <h3 className="mt-4 font-black text-brand-900">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {text}
                    </p>
                  </article>
                ))}
              </div>
              <p className="mt-6 rounded-2xl bg-brand-900 p-5 text-sm font-semibold leading-relaxed text-white">
                Não buscamos apenas alguém para enviar contatos. Buscamos
                pessoas dispostas a representar essa proposta com
                responsabilidade e crescer junto com a operação.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-[1000px] px-6 py-20 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center">
              <span className="kicker">Perguntas frequentes</span>
              <h2 className="text-3xl font-black text-brand-900 md:text-5xl">
                Antes de enviar sua candidatura
              </h2>
            </div>
            <div className="mt-10 space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <summary className="cursor-pointer list-none pr-8 text-lg font-black text-brand-900 marker:hidden group-open:text-accent-pink">
                    {faq.question}
                  </summary>
                  <p className="mt-4 max-w-3xl leading-relaxed text-slate-600">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section id="candidatura" className="scroll-mt-24 bg-white">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-20 lg:grid-cols-[0.82fr_1.18fr] lg:px-8">
          <FadeIn direction="right">
            <div className="lg:sticky lg:top-28">
              <span className="kicker">Próximo passo</span>
              <h2 className="text-3xl font-black leading-tight text-brand-900 md:text-5xl">
                Se esse modelo faz sentido para você, apresente sua candidatura.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                Conte quem você é, qual sua experiência e como pretende atuar.
                A equipe avaliará cada candidatura antes de convidar os
                selecionados para uma conversa.
              </p>

              <div className="mt-8 space-y-4">
                {[
                  'Preenchimento da candidatura',
                  'Análise de perfil e potencial de atuação',
                  'Conversa com nosso time',
                  'Apresentação das regras e formalização',
                ].map((item, index) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-pink text-xs font-black text-white">
                      {index + 1}
                    </span>
                    <span className="font-semibold text-slate-700">{item}</span>
                  </div>
                ))}
              </div>

              <p className="mt-8 text-sm leading-relaxed text-slate-500">
                O programa não promete renda garantida. Os resultados dependem
                da sua atividade, das oportunidades encontradas e dos contratos
                fechados.
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <LeadForm variant="commercial-partner" />
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
