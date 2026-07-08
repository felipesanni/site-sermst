import type { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/fade-in';
import { BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';
import { normasKnown } from './[slug]/page';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';

export const dynamic = 'force-static';

export const metadata: Metadata = {
  title: 'Normas Regulamentadoras (NRs) | Guia para empresas | SERMST',
  description:
    'Normas Regulamentadoras de SST: guia das NRs com obrigações, prazos e conformidade. NR-01, NR-05, NR-07, NR-15, NR-17, NR-35 e mais para empresas e RH.',
  alternates: { canonical: 'https://sermst.com.br/normas' },
  openGraph: {
    title: 'Normas Regulamentadoras (NRs) | Guia para empresas | SERMST',
    description:
      'Guia completo das principais Normas Regulamentadoras, com destaque para NR-05 CIPA, NR-01, NR-07, NR-17, NR-35 e mais. Entenda obrigações, riscos e como se adequar.',
    url: 'https://sermst.com.br/normas',
    type: 'website',
    locale: 'pt_BR',
  },
};

const ordemPreferida = [
  'nr-01-pgr-atualizada',
  'nr-06-epi',
  'nr-05-cipa',
  'o-que-e-nr-07',
  'sesmt',
  'nr-35-trabalho-em-altura',
  'nr-18-construcao-civil',
  'nr-15-insalubridade',
  'nr-16-periculosidade',
  'nr-10-eletricidade',
  'nr-17-ergonomia',
  'nr-13-vasos-de-pressao',
  'dds',
  'ppp-eletronico',
  'pgrs-residuos',
];

const staticNormaPages = [
  {
    slug: 'nr-06-epi',
    titulo: 'NR-06 EPI: o que é e como cumprir',
    descricao:
      'Guia para empresas sobre Equipamentos de Proteção Individual, entrega de EPI, CA, treinamento, registro e responsabilidade do empregador.',
  },
  {
    slug: 'sesmt',
    titulo: 'SESMT: quando é obrigatório e como dimensionar',
    descricao:
      'Entenda quando a empresa precisa de SESMT, como o grau de risco e o número de empregados influenciam a obrigação e o que observar na rotina de SST.',
  },
  {
    slug: 'dds',
    titulo: 'DDS: diálogo diário de segurança',
    descricao:
      'Veja o que é DDS, para que serve, como registrar e como usar a ferramenta sem confundir com treinamentos obrigatórios das NRs.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Quantas Normas Regulamentadoras existem no Brasil?',
      acceptedAnswer: { '@type': 'Answer', text: 'Existem 38 Normas Regulamentadoras (NRs) ativas no Brasil, aprovadas pelo Ministério do Trabalho e Emprego. Cada NR regula aspectos específicos de saúde e segurança no trabalho. O descumprimento das NRs aplicáveis pode gerar autuações, interdições e passivo trabalhista.' },
    },
    {
      '@type': 'Question',
      name: 'Qual NR trata do PGR e do gerenciamento de riscos?',
      acceptedAnswer: { '@type': 'Answer', text: 'A NR-01 trata do Programa de Gerenciamento de Riscos (PGR) e do Gerenciamento de Riscos Ocupacionais (GRO). Desde maio de 2026, inclui expressamente os fatores de risco psicossociais. É a norma-base da segurança do trabalho e se aplica a todas as empresas com empregados CLT.' },
    },
    {
      '@type': 'Question',
      name: 'Qual a diferença entre NR-07 e PCMSO?',
      acceptedAnswer: { '@type': 'Answer', text: 'A NR-07 é a norma que estabelece as regras de monitoramento da saúde ocupacional. O PCMSO (Programa de Controle Médico de Saúde Ocupacional) é o programa que coloca essas regras em prática, definindo exames, cronogramas e responsáveis. A NR-07 define a obrigação; o PCMSO é a execução.' },
    },
  ],
};

export default function NormasIndexPage() {
  const todos = [
    ...staticNormaPages,
    ...Object.entries(normasKnown).map(([slug, data]) => ({ slug, ...data })),
  ];
  const visiveis = ordemPreferida
    .map((slug) => todos.find((n) => n.slug === slug))
    .filter((n): n is NonNullable<typeof n> => Boolean(n));
  const extras = todos.filter((n) => !ordemPreferida.includes(n.slug));
  const normas = [...visiveis, ...extras];

  return (
    <main className="min-h-screen bg-slate-50">
      <BreadcrumbJsonLd items={[{ name: 'Início', item: 'https://sermst.com.br' }, { name: 'Normas Regulamentadoras' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <header className="relative overflow-hidden bg-brand-900 py-24 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent-pink/20 blur-[120px]" />
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="mb-6 flex items-center gap-3">
              <div className="rounded-lg border border-accent-pink/30 bg-accent-pink/15 p-3">
                <BookOpen className="h-6 w-6 text-accent-pink" />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
                Normas Regulamentadoras
              </span>
            </div>
            <h1 className="h1-standard mb-8 max-w-3xl">Normas Regulamentadoras (NRs): guia para gestores e empresas</h1>
            <p className="max-w-3xl border-l-4 border-accent-pink pl-6 text-xl font-medium leading-relaxed text-slate-300 md:text-2xl">
              As Normas Regulamentadoras definem o que sua empresa precisa fazer para operar com segurança e cumprir o
              eSocial. Aqui cada NR aparece com obrigações, prazos, riscos e o que costuma cair em fiscalização,
              inclusive temas que viram demanda prática como CIPA, designado, treinamentos e documentação obrigatória.
            </p>
          </FadeIn>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[1280px] border-b border-slate-200 px-6 py-16 lg:px-8">
        <div className="max-w-3xl">
          <h2 className="mb-6 text-2xl font-black text-brand-900">O que são Normas Regulamentadoras?</h2>
          <p className="mb-4 leading-relaxed text-slate-600">
            As Normas Regulamentadoras (NRs) são regulamentos técnicos do Ministério do Trabalho e Emprego que
            estabelecem os requisitos mínimos de Saúde e Segurança do Trabalho para empresas com empregados CLT.
            Atualmente existem 38 NRs ativas, cada uma voltada para um risco, setor ou obrigação de gestão.
          </p>
          <p className="mb-4 leading-relaxed text-slate-600">
            O descumprimento de qualquer NR aplicável pode resultar em autuações, inconsistências no eSocial,
            interdição de equipamentos ou atividades e passivo trabalhista. Desde 2023, inconsistências documentais
            detectadas pelo eSocial podem gerar notificações sem depender de fiscalização presencial.
          </p>
          <p className="leading-relaxed text-slate-600">
            A conformidade não é estática. A NR-01, por exemplo, passou a incluir expressamente os fatores de risco
            psicossociais no GRO a partir de 26 de maio de 2026. A NR-07 organiza o PCMSO conforme os riscos do PGR.
            Em setores específicos, como petróleo e gás, a{' '}
            <Link href="/normas/nr-37" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4 hover:text-accent-pink">
              NR-37
            </Link>{' '}
            também precisa ser lida dentro do contexto real da operação.
          </p>
          <p className="mt-4 leading-relaxed text-slate-600">
            Para muitas empresas, a porta de entrada nesse universo acontece por buscas como{' '}
            <Link href="/normas/nr-05-cipa" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4 hover:text-accent-pink">
              CIPA e NR-05
            </Link>
            ,{' '}
            <Link href="/normas/o-que-e-nr-07" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4 hover:text-accent-pink">
              NR-07 e PCMSO
            </Link>{' '}
            ou{' '}
            <Link href="/servicos/treinamentos-nrs-cipa-brigada/sao-paulo" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4 hover:text-accent-pink">
              treinamento de CIPA e outros treinamentos obrigatórios
            </Link>
            . Por isso, este hub também funciona como ponte entre a leitura normativa e a demanda operacional.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-6 py-20 lg:px-8">
        <FadeIn direction="up">
          <div className="mb-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
              NRs que mais aparecem na rotina das empresas
            </span>
            <h2 className="mb-5 text-3xl font-black text-brand-900">Pontes rápidas entre norma, treinamento e documento</h2>
            <p className="mb-8 max-w-3xl leading-relaxed text-slate-700">
              Algumas NRs são portas de entrada para decisões comerciais e operacionais. Use estes atalhos para entender
              obrigação, risco e próximo passo sem depender de uma única página de origem.
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { href: '/normas/nr-05-cipa', label: 'NR-05 CIPA' },
                { href: '/servicos/treinamentos-nrs-cipa-brigada/sao-paulo', label: 'Treinamento de CIPA e brigada' },
                { href: '/rh/calculadora-cnae-grau-de-risco', label: 'Calculadora de grau de risco CNAE' },
                { href: '/normas/nr-06-epi', label: 'NR-06 EPI' },
                { href: '/normas/nr-33-espaco-confinado', label: 'NR-33 espaço confinado' },
                { href: '/normas/dds', label: 'DDS em segurança do trabalho' },
                { href: '/normas/nr-01-pgr-atualizada', label: 'NR-01, PGR e riscos psicossociais' },
                { href: '/normas/sesmt', label: 'NR-04 e SESMT' },
                { href: '/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo', label: 'Serviço de PGR NR-01' },
                { href: '/servicos/pcmso-nr07-programa/sao-paulo', label: 'PCMSO NR-07' },
                { href: '/servicos/ltcat-laudo-tecnico-previdenciario/sao-paulo', label: 'LTCAT previdenciário' },
                { href: '/servicos/pericia-trabalhista-assistente-tecnico/sao-paulo', label: 'Perícia trabalhista' },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 font-bold text-brand-900 transition-all hover:-translate-y-1 hover:border-accent-pink/40 hover:text-accent-pink"
                >
                  {item.label}
                  <ArrowRight className="mt-4 h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </FadeIn>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {normas.map((norma, idx) => (
            <FadeIn key={norma.slug} delay={idx * 0.05}>
              <Link
                href={`/normas/${norma.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent-pink/30 hover:shadow-2xl"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-accent-pink transition-colors group-hover:bg-accent-pink group-hover:text-white">
                  <ShieldCheck className="h-6 w-6" />
                </div>
                <h2 className="mb-3 text-xl font-black leading-tight text-brand-900 transition-colors group-hover:text-accent-pink">
                  {norma.titulo}
                </h2>
                <p className="mb-6 flex-grow line-clamp-4 text-sm leading-relaxed text-slate-600">{norma.descricao}</p>
                <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-900 transition-all group-hover:gap-3">
                  Ler guia completo
                  <ArrowRight className="h-4 w-4 text-accent-pink" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-6 pb-12 lg:px-8">
        <div className="flex flex-wrap gap-4">
          <Link href="/rh" className="rounded-2xl border border-slate-200 bg-white px-6 py-4 font-bold text-brand-900 transition-all hover:border-accent-pink/40 hover:text-accent-pink">
            Hub de RH e Departamento Pessoal
            <ArrowRight className="ml-2 inline h-4 w-4" />
          </Link>
          <Link href="/saude" className="rounded-2xl border border-slate-200 bg-white px-6 py-4 font-bold text-brand-900 transition-all hover:border-accent-pink/40 hover:text-accent-pink">
            Hub de Saúde Ocupacional
            <ArrowRight className="ml-2 inline h-4 w-4" />
          </Link>
          <Link href="/dicionario" className="rounded-2xl border border-slate-200 bg-white px-6 py-4 font-bold text-brand-900 transition-all hover:border-accent-pink/40 hover:text-accent-pink">
            Dicionário de SST
            <ArrowRight className="ml-2 inline h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-900 py-20">
        <div className="absolute top-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-accent-pink to-transparent" />
        <div className="relative z-10 mx-auto max-w-[1100px] px-6 text-center lg:px-8">
          <FadeIn direction="up">
            <h2 className="mb-6 text-3xl font-black leading-tight text-white md:text-5xl">
              Sua empresa cumpre as NRs aplicáveis?
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl font-medium leading-relaxed text-slate-300">
              A SERMST faz auditoria de conformidade NR sem custo inicial. Em 15 minutos a equipe entende o cenário e aponta o que está exposto.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-3 rounded-xl bg-accent-pink px-10 py-5 text-lg font-bold text-white shadow-2xl transition-all hover:-translate-y-1 hover:bg-accent-pink-hover"
            >
              Solicitar diagnóstico de NRs
              <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
