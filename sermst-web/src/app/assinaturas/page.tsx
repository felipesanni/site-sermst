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
      price: '229',
      priceCurrency: 'BRL',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '229',
        priceCurrency: 'BRL',
        unitText: 'mês',
      },
      description: 'Tudo do Plano Base mais PPP, CAT, CIPA, consultoria em SST, apoio em auditorias e avaliação de fatores psicossociais.',
    },
    {
      '@type': 'Offer',
      name: 'Plano Gestão Total',
      price: '329',
      priceCurrency: 'BRL',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: '329',
        priceCurrency: 'BRL',
        unitText: 'mês',
      },
      description: 'Tudo do Plano Essencial mais consultas clínicas, palestra com psicóloga e treinamentos online para a equipe.',
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
    text: 'O Plano Base cobre o núcleo obrigatório de SST. O Essencial acrescenta PPP, CAT, CIPA, consultoria, apoio em auditorias e fatores psicossociais. O Gestão Total adiciona consultas, palestra com psicóloga e treinamentos online para a equipe.',
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
    text: 'A SERMST tem canal de atendimento direto para clientes do plano. Em urgências operacionais — como acidente de trabalho ou fiscalização — o suporte é prioritário. O tempo de resposta padrão para dúvidas rotineiras é definido no contrato de assinatura.',
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
    text: 'Mensageria para S-2210, S-2220, S-2221 e S-2240 com mais organização para reduzir erro e retrabalho.',
  },
  {
    icon: Users,
    title: 'Planos por porte',
    text: 'Simulação por número de funcionários, com CNPJ, endereço e filiais no mesmo fluxo de contratação.',
  },
];

const comparison = [
  ['Compra avulsa', 'Assinatura SERMST'],
  ['A empresa contrata documentos, exames e envios em momentos separados.', 'Documentos, exames clínicos, vencimentos e eSocial ficam reunidos em um plano mensal.'],
  ['Cada necessidade abre uma nova cotação e uma nova troca de informações.', 'O pedido já nasce com plano, CNPJ, funcionários, endereço, filiais e forma de pagamento.'],
  ['A rotina depende de alguém perceber vencimentos e pendências a tempo.', 'A assinatura cria acompanhamento recorrente para a empresa trabalhar com mais previsibilidade.'],
  ['O custo aparece em blocos separados ao longo do ano.', 'O plano mensal ajuda a transformar SST em uma despesa organizada e fácil de acompanhar.'],
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
              Saúde e Segurança do Trabalho em um plano mensal para sua empresa
            </h1>
            <p className="mb-8 max-w-3xl text-xl font-medium leading-relaxed text-slate-200 md:text-2xl">
              A SERMST organiza documentos obrigatórios, exames clínicos, vencimentos, eSocial e
              rotina de SST em um único fluxo. Simule pelo número de funcionários, escolha o plano e
              envie os dados para contratação.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="#planos" className="btn-primary-safe-lg">
                Conhecer os planos
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="#o-que-inclui" className="btn-light-safe px-8 py-4">
                Ver itens incluídos
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="left" viewport={false} delay={0.1}>
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl lg:p-8">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-accent-pink">
                Contratação em poucos passos
              </p>
              <div className="space-y-4">
                {[
                  'Planos para empresas pequenas, médias e grandes.',
                  'CNPJ, endereço principal e filiais entram no mesmo pedido.',
                  'Base, Essencial e Gestão Total com escopo claro antes do envio.',
                  'Forma de pagamento e dados financeiros definidos no formulário.',
                ].map((item) => (
                  <div key={item} className="flex gap-3 rounded-2xl bg-white/8 p-4">
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
              O plano mensal transforma SST em rotina acompanhada
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Em vez de contratar cada obrigação separadamente, sua empresa centraliza documentos,
              exames clínicos, vencimentos e eSocial em um plano alinhado ao porte da operação.
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

      <section className="bg-slate-50 px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-[1280px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <span className="kicker">Compra avulsa x assinatura</span>
            <h2 className="mb-5 text-3xl font-black leading-tight text-brand-900 md:text-5xl">
              Por que contratar SST por assinatura
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              A assinatura troca contratações soltas por uma rotina contínua. A empresa ganha
              previsibilidade, sabe o que está incluído no plano e envia os dados necessários em um
              único fluxo.
            </p>
          </div>

          <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
            {comparison.map((row, index) => (
              <div
                key={row.join('-')}
                className={
                  index === 0
                    ? 'grid grid-cols-2 bg-brand-900 text-sm font-black uppercase tracking-[0.16em] text-white'
                    : 'grid grid-cols-2 border-t border-slate-100 text-sm leading-relaxed text-slate-700'
                }
              >
                <div className="border-r border-white/10 p-5">{row[0]}</div>
                <div className="p-5">{row[1]}</div>
              </div>
            ))}
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
