import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  CalendarCheck2,
  CheckCircle2,
  FileCheck2,
  ShieldCheck,
  Users,
} from 'lucide-react';
import { AssinaturaPlans } from './assinatura-plans';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';
import { FadeIn } from '@/components/ui/fade-in';
import { siteImages } from '@/lib/site-images';

export const metadata: Metadata = {
  title: 'Planos de SST por Assinatura para Empresas | SERMST',
  description:
    'Contrate SST por assinatura com a SERMST. Planos mensais para organizar PGR, PCMSO, LTCAT, exames clínicos, eSocial, vencimentos e rotina de SST da empresa.',
  alternates: {
    canonical: 'https://sermst.com.br/assinaturas',
  },
  openGraph: {
    title: 'Planos de SST por Assinatura | Simulador SERMST',
    description:
      'Escolha um plano mensal de SST, simule pelo número de funcionários e envie os dados de contratação pelo fluxo da SERMST.',
    url: 'https://sermst.com.br/assinaturas',
    type: 'website',
    locale: 'pt_BR',
    images: [
      {
        url: '/images/site/og-cover.jpg',
        width: 1200,
        height: 630,
        alt: 'Planos de SST por assinatura da SERMST para empresas',
      },
    ],
  },
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Planos de SST por assinatura',
  provider: {
    '@type': 'Organization',
    name: 'SERMST',
    url: 'https://sermst.com.br',
  },
  areaServed: ['São Paulo', 'Grande São Paulo', 'ABC Paulista'],
  serviceType: 'Gestão mensal de Saúde e Segurança do Trabalho',
  description:
    'Planos mensais para organizar documentos obrigatórios, exames clínicos ocupacionais, vencimentos, mensageria do eSocial e rotina de SST para empresas de diferentes portes.',
  url: 'https://sermst.com.br/assinaturas',
  offers: [
    {
      '@type': 'Offer',
      name: 'Plano Base',
      price: '149',
      priceCurrency: 'BRL',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '149',
        priceCurrency: 'BRL',
        unitText: 'mês',
      },
      description: 'PGR, PCMSO, LTCAT, exames clínicos ocupacionais, portal do cliente, gestão de vencimentos e mensageria do eSocial.',
    },
    {
      '@type': 'Offer',
      name: 'Plano Essencial',
      price: '219',
      priceCurrency: 'BRL',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '219',
        priceCurrency: 'BRL',
        unitText: 'mês',
      },
      description: 'Tudo do Plano Base mais PPP, CAT, mensageria S-2210, treinamento de CIPA, consultoria em SST e apoio em auditorias.',
    },
    {
      '@type': 'Offer',
      name: 'Plano Gestão Total',
      price: '299',
      priceCurrency: 'BRL',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '299',
        priceCurrency: 'BRL',
        unitText: 'mês',
      },
      description: 'Tudo do Plano Essencial mais consultoria jurídica preventiva, palestra com psicóloga e treinamentos online para a equipe.',
    },
  ],
};

const contractFaqs = [
  {
    title: 'Como funciona a assinatura mensal de SST?',
    text: 'A empresa escolhe o plano, informa CNPJ, número de funcionários e unidades atendidas. A SERMST recebe o pedido com os dados de contratação e inicia a organização dos documentos, exames, vencimentos e rotinas incluídas no plano.',
  },
  {
    title: 'O que muda entre Plano Base, Essencial e Gestão Total?',
    text: 'O Plano Base cobre documentos, exames, portal, vencimentos, eSocial e avaliação de fatores psicossociais. O Essencial acrescenta PPP, CAT, mensageria S-2210, treinamento de CIPA, consultoria e apoio em auditorias. O Gestão Total adiciona consultoria jurídica, palestra com psicóloga e treinamentos online para a equipe.',
  },
  {
    title: 'Como o CNPJ ajuda na contratação?',
    text: 'A consulta do CNPJ preenche razão social e endereço, além de ajudar a identificar dados como CNAE, porte e grau de risco. Isso deixa o pedido mais completo antes da finalização do contrato.',
  },
  {
    title: 'Como incluir matriz e filiais no mesmo pedido?',
    text: 'No formulário de contratação é possível confirmar o endereço principal e adicionar outras unidades que devem entrar no atendimento, com CEP, endereço, cidade e estado de cada local.',
  },
  {
    title: 'Existe prazo mínimo de contrato?',
    text: 'O plano funciona em ciclo mensal ou anual. Não há fidelidade obrigatória de longo prazo além do ciclo contratado. A periodicidade e as condições de renovação são confirmadas no contrato antes do início do plano.',
  },
  {
    title: 'Como funciona o cancelamento da assinatura?',
    text: 'O cancelamento deve ser solicitado com antecedência compatível com o ciclo do plano. Não há multa por cancelamento após o cumprimento do ciclo contratado. Os documentos e registros permanecem disponíveis conforme acordado no contrato.',
  },
  {
    title: 'Existe reajuste anual e por qual índice?',
    text: 'O contrato prevê reajuste anual com base em índice de correção definido no momento da contratação. O índice e o mês de referência do reajuste são informados antes da assinatura do contrato.',
  },
  {
    title: 'Qual o prazo de resposta da SERMST em dúvidas e urgências?',
    text: 'A SERMST tem canal de atendimento direto para clientes do plano. Em urgências operacionais: como acidente de trabalho ou fiscalização: o suporte é prioritário. O tempo de resposta padrão para dúvidas rotineiras é definido no contrato de assinatura.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: contractFaqs.map((item) => ({
    '@type': 'Question',
    name: item.title,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.text,
    },
  })),
};

const includedItems = [
  {
    icon: FileCheck2,
    title: 'Documentos obrigatórios',
    text: 'PGR, PCMSO, LTCAT e os documentos essenciais para a empresa manter a rotina de SST em ordem.',
  },
  {
    icon: CalendarCheck2,
    title: 'Rotina de vencimentos',
    text: 'Acompanhamento de exames periódicos, prazos e prioridades para o RH não depender de lembretes soltos.',
  },
  {
    icon: ShieldCheck,
    title: 'Apoio ao eSocial SST',
    text: 'Mensageria para S-2220, S-2221 e S-2240 com mais organização para reduzir erro e retrabalho.',
  },
  {
    icon: Users,
    title: 'Planos por porte',
    text: 'Simulação por número de funcionários, com CNPJ, endereço e filiais no mesmo fluxo de contratação.',
  },
];

const subscriptionAdvantages = [
  {
    title: 'Um único fluxo para contratar e acompanhar',
    text: 'Plano, CNPJ, funcionários, unidades e dados da empresa seguem juntos, sem abrir uma nova cotação a cada necessidade.',
  },
  {
    title: 'Documentos, exames e eSocial reunidos',
    text: 'A empresa deixa de tratar cada obrigação isoladamente e passa a visualizar o escopo contratado em um só lugar.',
  },
  {
    title: 'Prazos dentro de uma rotina recorrente',
    text: 'Vencimentos e pendências deixam de depender apenas de lembretes soltos do RH ou de providências tomadas na urgência.',
  },
  {
    title: 'Mais previsibilidade para o orçamento',
    text: 'Até 99 funcionários, a empresa vê a simulação do plano. A partir de 100, o comercial prepara uma proposta conforme a operação.',
  },
];

export default function AssinaturasPage() {
  return (
    <main className="min-h-screen bg-white">
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', item: 'https://sermst.com.br' },
          { name: 'Planos de SST por assinatura' },
        ]}
      />

      <section className="relative flex min-h-[640px] items-center overflow-hidden bg-brand-900 py-20 text-white">
        <Image
          src={siteImages.home.clinicOperations.src}
          alt={siteImages.home.clinicOperations.alt}
          fill
          sizes="100vw"
          className="object-cover opacity-28"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/92 to-brand-900/55" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 mx-auto grid w-full max-w-[1280px] gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8">
          <FadeIn direction="up" viewport={false}>
            <span className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/8 px-5 py-3 text-xs font-black uppercase tracking-[0.18em] text-white/90 backdrop-blur">
              <BadgeCheck className="h-4 w-4 text-accent-pink" />
              SST por assinatura
            </span>
            <h1 className="h1-standard mb-6 max-w-4xl text-white md:text-5xl lg:text-6xl">
              Saúde e Segurança do Trabalho em um único plano mensal
            </h1>
            <p className="mb-8 max-w-3xl text-xl font-medium leading-relaxed text-slate-200 md:text-2xl">
              Centralize documentos obrigatórios, exames ocupacionais, eSocial, vencimentos e rotinas de SST em um único plano mensal.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="#planos" className="btn-primary-safe-lg">
                Conhecer os planos
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="#o-que-inclui" className="btn-light-safe px-8 py-4">
                O que está incluído
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="left" viewport={false} delay={0.1}>
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl lg:p-8">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-white/90">
                Benefícios para sua empresa
              </p>
              <div className="space-y-4">
                {[
                  'Planos para empresas de diferentes portes',
                  'Matriz e filiais no mesmo contrato.',
                  'Suporte especializado para sua empresa',
                ].map((item, index) => (
                  <div key={`${item}-${index}`} className="flex gap-3 rounded-2xl bg-white/8 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-pink" />
                    <p className="font-semibold leading-relaxed text-white">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <AssinaturaPlans />

      <section id="o-que-inclui" className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 max-w-3xl">
            <span className="kicker">O que entra no plano</span>
            <h2 className="text-3xl font-black leading-tight text-brand-900 md:text-5xl">
              Um plano que transforma SST em rotina acompanhada
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Em vez de contratar cada obrigação separadamente, sua empresa reúne tudo em um plano
              alinhado à sua operação.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {includedItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="card-clean">
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-accent-pink">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-3 text-xl font-black text-brand-900">{item.title}</h3>
                  <p className="leading-relaxed text-slate-600">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="comparativo-assinatura"
        className="border-y border-slate-200 bg-slate-50 px-6 py-20 lg:px-8 lg:py-24"
      >
        <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-center xl:gap-16">
          <div className="max-w-xl">
            <span className="kicker">Por que assinar</span>
            <h2
              id="comparativo-assinatura"
              className="mb-5 text-3xl font-black leading-tight text-brand-900 md:text-5xl"
            >
              Menos contratações soltas. Mais continuidade.
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              Na compra avulsa, cada documento, exame ou envio pode virar uma nova demanda. A
              assinatura reúne o que foi contratado e coloca a SST dentro de uma rotina mais fácil
              de acompanhar.
            </p>

            <div className="mt-8 border-l-2 border-accent-pink pl-5">
              <p className="font-black leading-relaxed text-brand-900">
                A empresa sabe o que está incluído, quem acompanha e qual é o próximo passo.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_60px_-32px_rgba(11,19,60,0.38)]">
            <div className="px-6 py-7 sm:px-8 sm:py-8">
              <p className="text-xs font-black uppercase tracking-[0.18em] text-accent-pink">
                O que muda no dia a dia
              </p>
              <ul className="mt-4 divide-y divide-slate-200">
                {subscriptionAdvantages.map((item) => (
                  <li key={item.title} className="flex gap-4 py-5 first:pt-3 last:pb-1">
                    <CheckCircle2
                      className="mt-0.5 h-6 w-6 shrink-0 text-accent-pink"
                      aria-hidden="true"
                    />
                    <div>
                      <h3 className="font-black leading-snug text-brand-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-5 bg-brand-900 px-6 py-6 text-white sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <div>
                <p className="text-lg font-black">Veja qual caminho atende sua empresa</p>
                <p className="mt-1 text-sm leading-relaxed text-slate-300">
                  Simulação direta até 99 funcionários. Proposta comercial a partir de 100.
                </p>
              </div>
              <Link href="#planos" className="btn-primary-safe shrink-0">
                Ver os planos
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-start">
          <div>
            <span className="kicker">Perguntas frequentes</span>
            <h2 className="mb-8 text-3xl font-black leading-tight text-brand-900 md:text-5xl">
              Como funciona a contratação do plano
            </h2>
            <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-600">
              Confirme como funcionam plano, CNPJ, endereço e filiais antes de enviar os dados de
              contratação.
            </p>
            <div className="space-y-5">
              {contractFaqs.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-black text-brand-900">{item.title}</h3>
                  <p className="leading-relaxed text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-panel">
            <span className="kicker">Contratação direta</span>
            <h3 className="mt-3 text-2xl font-black leading-tight text-brand-900 md:text-3xl">
              Escolha o plano e envie os dados completos
            </h3>
            <p className="mt-4 leading-relaxed text-slate-600">
              O fluxo foi pensado para transformar a simulação em pedido de contratação, com CNPJ,
              responsável, financeiro, endereço principal e filiais no mesmo envio.
            </p>

            <div className="mt-8 divide-y divide-slate-100 border-y border-slate-100">
              {[
                'Informe CNPJ e quantidade de funcionários.',
                'Escolha Base, Essencial ou Gestão Total.',
                'Confirme endereço, unidades e ciclo de pagamento.',
              ].map((step, index) => (
                <div key={step} className="flex gap-4 py-5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-pink text-sm font-black text-white">
                    {index + 1}
                  </span>
                  <p className="font-semibold leading-relaxed text-brand-900">{step}</p>
                </div>
              ))}
            </div>

            <Link href="#planos" className="btn-primary-safe mt-8 w-full">
              Contratar pelo simulador
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-900 px-6 py-20 text-white lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 mx-auto flex max-w-[1100px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
              Pronto para contratar
            </span>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Escolha o plano e envie sua contratação
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              Escolha mensal ou anual, confirme CNPJ, endereço e filiais, e envie tudo em um único
              pedido para a SERMST iniciar o plano.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row shrink-0">
            <Link href="#planos" className="btn-light-safe px-8 py-4">
              Ver os planos
            </Link>
            <Link
              href="/contato"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 px-8 py-4 text-sm font-bold text-white transition-colors hover:bg-white/10"
            >
              Falar com a equipe
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </main>
  );
}
