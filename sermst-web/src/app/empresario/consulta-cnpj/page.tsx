import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  FileCheck2,
  HelpCircle,
  Landmark,
  SearchCheck,
} from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';
import { CnpjConsultation } from '@/components/sections/cnpj-consultation';
import { FadeIn } from '@/components/ui/fade-in';

const pageUrl = 'https://sermst.com.br/empresario/consulta-cnpj';

const faq = [
  {
    question: 'Como consultar um CNPJ gratuitamente?',
    answer:
      'Digite os 14 números do CNPJ na ferramenta e clique em Consultar CNPJ. A busca é gratuita, não exige cadastro e apresenta os dados públicos encontrados nas fontes integradas.',
  },
  {
    question: 'Como consultar um CNPJ pelo número?',
    answer:
      'Informe os 14 números do CNPJ, com ou sem pontuação, e clique em Consultar CNPJ. A ferramenta faz uma consulta pública inicial e mostra os dados disponíveis nas fontes integradas.',
  },
  {
    question: 'Como saber o CNAE pelo CNPJ?',
    answer:
      'Digite o CNPJ na ferramenta para visualizar o CNAE principal e, quando disponível, as atividades secundárias. O CNAE ajuda a identificar a atividade econômica registrada da empresa.',
  },
  {
    question: 'Quais dados aparecem na consulta CNPJ?',
    answer:
      'A resposta pode mostrar razão social, nome fantasia, situação cadastral, abertura, porte, capital social, natureza jurídica, CNAEs, opção pelo Simples Nacional e MEI e endereço cadastrado. Alguns campos dependem da fonte pública.',
  },
  {
    question: 'O que é o cartão CNPJ?',
    answer:
      'É o comprovante de inscrição e situação cadastral da empresa. A ferramenta ajuda na conferência dos principais dados, mas o documento com validade oficial deve ser emitido pela REDESIM ou pela Receita Federal.',
  },
  {
    question: 'CNPJ ativo significa que a empresa está regularizada?',
    answer:
      'Não. Situação ativa indica a condição cadastral perante a Receita Federal. Ela não comprova, sozinha, regularidade fiscal, trabalhista, municipal, ambiental ou de saúde e segurança do trabalho.',
  },
  {
    question: 'A consulta substitui o comprovante da Receita Federal?',
    answer:
      'Não. Esta ferramenta facilita uma conferência inicial. Quando você precisar de comprovante, autenticação ou decisão com efeito jurídico, emita o documento no canal oficial da REDESIM ou da Receita Federal.',
  },
  {
    question: 'A consulta mostra se a empresa é optante pelo Simples ou MEI?',
    answer:
      'Quando a fonte consultada fornece essa informação, o resultado indica a opção pelo Simples Nacional e pelo MEI. Para decisões fiscais, confirme o enquadramento nos serviços oficiais.',
  },
  {
    question: 'É possível consultar CNPJ pelo CPF?',
    answer:
      'Não nesta ferramenta. A busca usa os 14 números do CNPJ e não expõe vínculos pessoais. Para consultar empresas ligadas a um CPF, use os serviços oficiais autenticados disponíveis para o titular.',
  },
  {
    question: 'Por que a consulta pode ficar indisponível?',
    answer:
      'A ferramenta depende de serviços externos de dados públicos. Eles podem aplicar limites de acesso, passar por manutenção ou demorar a atualizar uma alteração cadastral.',
  },
];

const webApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': `${pageUrl}#app`,
  name: 'Consulta CNPJ grátis',
  url: pageUrl,
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  browserRequirements: 'Requer navegador com JavaScript habilitado',
  description:
    'Ferramenta gratuita para consultar cartão CNPJ, situação cadastral, razão social, nome fantasia, abertura, CNAEs, Simples Nacional e endereço da empresa.',
  inLanguage: 'pt-BR',
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'BRL',
  },
  provider: {
    '@type': 'Organization',
    '@id': 'https://sermst.com.br/#organization',
    name: 'SERMST',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: item.answer,
    },
  })),
};

export const metadata: Metadata = {
  title: 'Consulta cartão CNPJ grátis | Situação cadastral e CNAE | SERMST',
  description:
    'Consulte o CNPJ pelo número, grátis e sem cadastro: veja situação cadastral, razão social, CNAE, porte, Simples Nacional e endereço da empresa.',
  keywords: [
    'consulta cnpj',
    'consultar cnpj',
    'consulta cnpj grátis',
    'consulta cnpj receita federal',
    'cartão cnpj',
    'consulta cnpj mei',
    'consulta cnpj simples nacional',
    'situação cadastral cnpj',
    'buscar empresa por cnpj',
  ],
  alternates: { canonical: pageUrl },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Consulta cartão CNPJ grátis | Situação cadastral e CNAE | SERMST',
    description:
      'Consulte o CNPJ pelo número e veja situação cadastral, razão social, CNAE, porte, Simples Nacional e endereço da empresa.',
    url: pageUrl,
    type: 'website',
    locale: 'pt_BR',
    siteName: 'SERMST',
    images: [
      {
        url: '/images/site/og-cover.jpg',
        width: 1200,
        height: 1200,
        alt: 'Consulta CNPJ grátis pela SERMST',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consulta cartão CNPJ grátis | SERMST',
    description:
      'Consulte o cartão CNPJ e confira situação cadastral, CNAE e dados públicos da empresa.',
    images: ['/images/site/og-cover.jpg'],
  },
};

export default function ConsultaCnpjPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webApplicationSchema).replace(/</g, '\\u003c'),
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
          { name: 'Consulta CNPJ' },
        ]}
      />

      <CnpjConsultation />

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1160px] px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="mx-auto max-w-3xl text-center">
              <span className="kicker">Entenda o resultado</span>
              <h2 className="text-3xl font-black text-brand-900 md:text-5xl">
                Consulta e cartão CNPJ: o que aparece no resultado
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                A ferramenta reúne informações cadastrais públicas para uma conferência rápida.
                Cada campo responde a uma pergunta diferente sobre a empresa.
              </p>
            </div>
          </FadeIn>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              {
                icon: Building2,
                title: 'Identificação da empresa',
                text: 'Razão social, nome fantasia, natureza jurídica, porte, capital social e indicação de matriz ou filial.',
              },
              {
                icon: BadgeCheck,
                title: 'Situação cadastral',
                text: 'Mostra a situação registrada para o CNPJ, como ativa, baixada, inapta ou suspensa.',
              },
              {
                icon: SearchCheck,
                title: 'Atividades e endereço',
                text: 'Apresenta CNAE principal, atividades secundárias, opção pelo Simples ou MEI e endereço cadastrado.',
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} direction="up" delay={index * 0.06}>
                  <div className="h-full rounded-[1.75rem] border border-slate-200 bg-slate-50 p-7">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-900 text-white">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <h3 className="mt-6 text-xl font-black text-brand-900">{item.title}</h3>
                    <p className="mt-3 leading-relaxed text-slate-600">{item.text}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-20 md:py-24">
        <div className="mx-auto grid w-full max-w-[1160px] gap-8 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
          <FadeIn direction="right">
            <div>
              <span className="kicker">Um cuidado importante</span>
              <h2 className="text-3xl font-black leading-tight text-brand-900 md:text-5xl">
                CNPJ ativo não significa empresa regular em tudo
              </h2>
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-slate-700">
                <p>
                  O status ativo responde a uma pergunta cadastral: aquele CNPJ está em condição
                  ativa perante a Receita Federal. Ele não é uma certidão geral de regularidade.
                </p>
                <p>
                  Débitos, licenças, obrigações municipais, relações de trabalho, eSocial,
                  exames ocupacionais, PGR e PCMSO exigem conferências próprias. Uma empresa pode
                  aparecer como ativa e ainda ter pendências em uma dessas frentes.
                </p>
              </div>
              <Link
                href="/empresario/cnpj-ativo-o-que-significa"
                className="btn-outline-safe mt-7 inline-flex"
              >
                Entender o que significa CNPJ ativo
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.08}>
            <div className="rounded-[2rem] bg-brand-900 p-8 text-white shadow-xl lg:p-10">
              <FileCheck2 className="h-10 w-10 text-accent-pink" aria-hidden="true" />
              <h3 className="mt-6 text-2xl font-black text-white">
                Precisa de um comprovante oficial?
              </h3>
              <p className="mt-4 leading-relaxed text-slate-300">
                Use a consulta acima para triagem. Para emitir comprovante de inscrição e situação
                cadastral ou tomar uma decisão com efeito jurídico, confirme no serviço oficial.
              </p>
              <a
                href="https://www.gov.br/empresas-e-negocios/pt-br/redesim/comprovantes/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-light-safe mt-7 inline-flex"
              >
                Acessar a REDESIM
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto w-full max-w-[920px] px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center">
              <span className="kicker">Perguntas frequentes</span>
              <h2 className="flex items-center justify-center gap-3 text-3xl font-black text-brand-900 md:text-5xl">
                <HelpCircle className="h-9 w-9 text-accent-pink" aria-hidden="true" />
                Dúvidas sobre consulta CNPJ
              </h2>
            </div>
            <div className="mt-10 space-y-4">
              {faq.map((item) => (
                <details key={item.question} className="faq-accordion group">
                  <summary className="faq-summary">
                    <span className="faq-question">{item.question}</span>
                    <span className="faq-icon" aria-hidden="true">+</span>
                  </summary>
                  <p className="faq-answer">{item.answer}</p>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-brand-900 px-6 py-16 text-white lg:px-8">
        <FadeIn direction="up">
          <div className="mx-auto flex w-full max-w-[1040px] flex-col gap-7 rounded-[2rem] border border-white/15 bg-white/[0.06] p-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="max-w-2xl">
              <span className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-accent-pink">
                <Landmark className="h-4 w-4" aria-hidden="true" />
                Empresa com funcionários
              </span>
              <h2 className="mt-3 text-2xl font-black text-white md:text-3xl">
                Transforme o cadastro em um diagnóstico inicial de SST
              </h2>
              <p className="mt-3 leading-relaxed text-slate-300">
                Consulte o grau de risco do CNAE e veja referências iniciais de CIPA, SESMT e
                normas que podem exigir atenção.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Link
                href="/rh/calculadora-cnae-grau-de-risco"
                className="btn-primary-safe"
              >
                Consultar grau de risco
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/rh/lista-cnae-brasil"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 font-bold text-white transition-colors hover:border-accent-pink hover:text-accent-pink"
              >
                Ver tabela CNAE
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
