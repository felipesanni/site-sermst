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
import { LeadForm } from '@/components/forms/lead-form';
import { FadeIn } from '@/components/ui/fade-in';
import { siteImages } from '@/lib/site-images';

export const metadata: Metadata = {
  title: 'Planos de SST por Assinatura para Empresas | SERMST',
  description:
    'Planos mensais de SST para empresas de todos os portes. Simule valores para PGR, PCMSO, exames ocupacionais, LTCAT, PPP e apoio ao eSocial com a SERMST.',
  alternates: {
    canonical: 'https://sermst.com.br/assinaturas',
  },
  openGraph: {
    title: 'Planos de SST por Assinatura | Simulador SERMST',
    description:
      'Use a calculadora de planos da SERMST e estime a gestão mensal de SST conforme o número de funcionários da empresa.',
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
    'Planos mensais para gestão de SST, PGR, PCMSO, exames ocupacionais, LTCAT, PPP e apoio ao eSocial para empresas de diferentes portes.',
  url: 'https://sermst.com.br/assinaturas',
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O valor da calculadora é o preço final do contrato?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. A calculadora mostra uma estimativa comercial inicial. O valor final depende de CNAE, grau de risco, número de unidades, cargos, exames complementares, treinamentos e situação atual de PGR, PCMSO, LTCAT e eSocial.',
      },
    },
    {
      '@type': 'Question',
      name: 'A SERMST atende empresas pequenas?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. A página foi criada para empresas de diferentes portes, incluindo empresas pequenas que precisam organizar SST, exames ocupacionais e documentos obrigatórios sem contratar serviços avulsos o tempo todo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Empresas com mais de 100 funcionários podem contratar assinatura?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Para empresas maiores, a assinatura costuma exigir diagnóstico por unidade, função, grau de risco e volume de exames. A calculadora ajuda a iniciar a conversa, e a SERMST valida o escopo antes da proposta final.',
      },
    },
    {
      '@type': 'Question',
      name: 'Os exames complementares estão inclusos no plano?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A inclusão depende do escopo validado. Alguns exames complementares, visitas técnicas, treinamentos específicos e avaliações especiais podem alterar o valor final do plano.',
      },
    },
  ],
};

const includedItems = [
  {
    icon: FileCheck2,
    title: 'Documentos obrigatórios',
    text: 'PGR, PCMSO, LTCAT, PPP e base técnica para manter a empresa em conformidade.',
  },
  {
    icon: CalendarCheck2,
    title: 'Rotina de vencimentos',
    text: 'Acompanhamento de exames periódicos, prazos e prioridades para reduzir esquecimento no RH.',
  },
  {
    icon: ShieldCheck,
    title: 'Apoio ao eSocial SST',
    text: 'Orientação para eventos S-2220 e S-2240, com foco em reduzir erro e retrabalho.',
  },
  {
    icon: Users,
    title: 'Planos por porte',
    text: 'Cálculo inicial por número de funcionários, com ajuste por CNAE, risco e complexidade real.',
  },
];

const comparison = [
  ['Compra avulsa', 'Assinatura SERMST'],
  ['Empresa lembra da SST quando vence, contrata ou é cobrada.', 'A rotina fica organizada mensalmente, com previsibilidade de próximos passos.'],
  ['Cada documento vira uma negociação separada.', 'PGR, PCMSO, exames, LTCAT, PPP e eSocial entram em uma conversa única.'],
  ['Preço parece menor no início, mas o retrabalho aparece depois.', 'O custo mensal ajuda a diluir a operação e reduzir surpresa comercial.'],
  ['Pouca clareza sobre prioridade técnica.', 'A SERMST valida porte, risco, CNAE, cargos e urgências antes de fechar escopo.'],
];

const objections = [
  {
    title: '“Tenho poucos funcionários. Preciso mesmo disso?”',
    text: 'Se há empregado CLT, já existe rotina ocupacional. O plano certo para empresa pequena não precisa ser pesado, mas precisa evitar improviso.',
  },
  {
    title: '“Minha empresa é grande demais para plano pronto.”',
    text: 'Empresas maiores entram por diagnóstico. A calculadora estima o ponto de partida, e a proposta final considera unidades, funções e volume real.',
  },
  {
    title: '“Quero só saber quanto custa.”',
    text: 'A calculadora mostra uma referência imediata. Depois a SERMST confirma o que está incluso para não vender barato algo que não cobre o risco.',
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
              SST por assinatura para todos os portes
            </span>
            <h1 className="h1-standard mb-6 max-w-4xl text-white md:text-5xl lg:text-6xl">
              Planos mensais de SST para sua empresa não correr atrás de documento vencido
            </h1>
            <p className="mb-8 max-w-3xl text-xl font-medium leading-relaxed text-slate-200 md:text-2xl">
              Simule o valor por quantidade de funcionários e veja uma proposta inicial para PGR,
              PCMSO, exames ocupacionais, LTCAT, PPP e apoio ao eSocial.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="#planos" className="btn-primary-safe-lg">
                Simular meu plano
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="https://wa.me/5511915146447?text=Ol%C3%A1!%20Quero%20entender%20os%20planos%20de%20SST%20por%20assinatura%20da%20SERMST."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light-safe px-8 py-4"
              >
                Falar com especialista
              </a>
            </div>
          </FadeIn>

          <FadeIn direction="left" viewport={false} delay={0.1}>
            <div className="rounded-[2rem] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl lg:p-8">
              <p className="mb-4 text-xs font-black uppercase tracking-[0.18em] text-accent-pink">
                O que muda na assinatura
              </p>
              <div className="space-y-4">
                {[
                  'Valor mensal estimado por porte da empresa.',
                  'Escopo validado antes da proposta final.',
                  'Planos para 1, 10, 50, 100, 300 ou mais funcionários.',
                  'WhatsApp já recebe a simulação feita pelo cliente.',
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

      <section className="px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-12 max-w-3xl">
            <span className="kicker">O que entra no plano</span>
            <h2 className="text-3xl font-black leading-tight text-brand-900 md:text-5xl">
              A assinatura vende rotina, não apenas papel
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              A ideia é simplificar a contratação de SST para empresas pequenas e, ao mesmo tempo,
              abrir conversa consultiva com empresas médias e grandes.
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
              Por que transformar SST em plano mensal
            </h2>
            <p className="text-lg leading-relaxed text-slate-600">
              A compra avulsa parece simples, mas cria esquecimento, correria e retrabalho. A
              assinatura cria recorrência e abre espaço para relacionamento de longo prazo com
              empresas de qualquer porte.
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
            <span className="kicker">Objeções reais</span>
            <h2 className="mb-8 text-3xl font-black leading-tight text-brand-900 md:text-5xl">
              A página precisa capturar pequeno, médio e grande sem falar igual com todos
            </h2>
            <div className="space-y-5">
              {objections.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-3 text-xl font-black text-brand-900">{item.title}</h3>
                  <p className="leading-relaxed text-slate-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="surface-panel">
            <LeadForm />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-900 px-6 py-20 text-white lg:px-8">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 mx-auto flex max-w-[1100px] flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="max-w-3xl">
            <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
              Próximo passo
            </span>
            <h2 className="text-3xl font-black leading-tight md:text-5xl">
              Use a simulação como porta de entrada para vender o contrato certo
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-300">
              A calculadora reduz a dúvida de preço, mas a SERMST ainda valida o escopo para
              proteger margem, qualidade técnica e responsabilidade legal.
            </p>
          </div>
          <Link href="#planos" className="btn-light-safe shrink-0 px-8 py-4">
            Voltar para a calculadora
          </Link>
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
