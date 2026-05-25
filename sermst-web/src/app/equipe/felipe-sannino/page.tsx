import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/fade-in';
import { ArrowRight, BookOpen, Briefcase, GraduationCap, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Felipe Sannino | Advogado Trabalhista e SST — SERMST',
  description:
    'Felipe Sannino é advogado especializado em Direito do Trabalho e Segurança e Saúde no Trabalho (SST), OAB/SP 430.824. Consultor da SERMST há mais de 10 anos.',
  alternates: { canonical: 'https://sermst.com.br/equipe/felipe-sannino' },
  openGraph: {
    title: 'Felipe Sannino | Advogado Trabalhista e SST — SERMST',
    description:
      'Advogado especializado em Direito do Trabalho e SST (OAB/SP 430.824). Autor de conteúdos sobre conformidade, normas regulamentadoras e gestão de riscos trabalhistas.',
    url: 'https://sermst.com.br/equipe/felipe-sannino',
    type: 'profile',
    locale: 'pt_BR',
  },
};

const articles = [
  {
    href: '/saude/gestao-sst',
    title: 'Gestão de SST: o sistema que sustenta operação e defende o CNPJ',
    hub: 'Saúde & Segurança',
  },
  {
    href: '/normas/nr-01-pgr-atualizada',
    title: 'NR-01 atualizada: o que mudou é o que a sua empresa precisa fazer',
    hub: 'Normas Regulamentadoras',
  },
  {
    href: '/normas/nr-16-periculosidade',
    title: 'NR-16: Periculosidade — quando é devida e como blindar a empresa',
    hub: 'Normas Regulamentadoras',
  },
  {
    href: '/normas/ppp-eletronico',
    title: 'PPP eletrônico: o que é, como funciona e por que ele importa',
    hub: 'Normas Regulamentadoras',
  },
  {
    href: '/rh/carta-demissao',
    title: 'Como fazer uma carta de demissão: o que escrever e o que evitar',
    hub: 'RH & Gestão',
  },
  {
    href: '/rh/carta-recomendacao',
    title: 'Como fazer uma carta de recomendação: o que escrever e o que evitar',
    hub: 'RH & Gestão',
  },
  {
    href: '/rh/evitar-processos-trabalhistas',
    title: 'Como evitar processos trabalhistas: o guia prático para empresas e RH',
    hub: 'RH & Gestão',
  },
  {
    href: '/rh/lista-cnae-brasil',
    title: 'Lista CNAE Brasil: o guia para empresas e empreendedores',
    hub: 'RH & Gestão',
  },
  {
    href: '/rh/o-que-um-gerente-faz',
    title: 'O que um gerente faz: funções, responsabilidades e impacto na empresa',
    hub: 'RH & Gestão',
  },
  {
    href: '/rh/quando-demitir-funcionário',
    title: 'Quando demitir um funcionário: o guia que o gestor precisa',
    hub: 'RH & Gestão',
  },
  {
    href: '/rh/treinamento-gerentes',
    title: 'Como treinar gerentes: o guia para desenvolver líderes que entregam',
    hub: 'RH & Gestão',
  },
];

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Felipe Sannino',
  jobTitle: 'Advogado — Direito do Trabalho e SST',
  description:
    'Advogado especializado em Direito do Trabalho e Segurança e Saúde no Trabalho (SST). OAB/SP 430.824. Consultor da SERMST com mais de 10 anos de atuação na área.',
  url: 'https://sermst.com.br/equipe/felipe-sannino',
  worksFor: {
    '@type': 'Organization',
    name: 'SERMST',
    url: 'https://sermst.com.br',
  },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'OAB/SP 430.824',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Ordem dos Advogados do Brasil — Seccional São Paulo',
      },
    },
  ],
  knowsAbout: [
    'Direito do Trabalho',
    'Segurança e Saúde no Trabalho',
    'Normas Regulamentadoras',
    'Conformidade Trabalhista',
    'eSocial',
  ],
};

export default function FelipeSanninoPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative bg-brand-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent-pink/20 rounded-full blur-[120px]" />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-20 lg:py-28 relative z-10">
          <FadeIn direction="up">
            <Link
              href="/quem-somos"
              className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-pink mb-8 transition hover:text-accent-pink-hover"
            >
              <ShieldCheck className="w-4 h-4" />
              Equipe SERMST
            </Link>

            {/* Avatar placeholder */}
            <div className="mb-8 flex items-center gap-6">
              <div className="h-20 w-20 rounded-full overflow-hidden border-2 border-accent-pink/40 shrink-0 relative">
                <Image
                  src="/images/equipe/felipe-sannino.png"
                  alt="Felipe Sannino — Advogado Trabalhista e SST, OAB/SP 430.824"
                  fill
                  sizes="80px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h1 className="h1-standard">
                  Felipe Sannino
                </h1>
                <p className="mt-2 text-accent-pink font-bold text-lg">
                  Advogado — Direito do Trabalho e SST
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-bold text-white">
                <GraduationCap className="w-4 h-4 text-accent-pink" />
                OAB/SP 430.824
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-bold text-white">
                <Briefcase className="w-4 h-4 text-accent-pink" />
                +10 anos em SST
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Bio ─────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8 grid lg:grid-cols-[1fr_360px] gap-14">

          <div>
            <FadeIn direction="up">
              <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
                Sobre
              </span>
              <h2 className="mb-8 text-3xl font-black text-brand-900 leading-tight">
                Conformidade trabalhista que protege o patrimônio, não só a documentação.
              </h2>
            </FadeIn>

            <div className="space-y-6 text-lg font-medium leading-relaxed text-slate-700">
              <FadeIn direction="up" delay={0.1}>
                <p>
                  Felipe Sannino atua há mais de 10 anos como advogado especializado em Direito do
                  Trabalho e Segurança e Saúde no Trabalho (SST), com registro na OAB/SP sob o
                  número 430.824. Na SERMST, é responsável pela análise jurídica das obrigações
                  trabalhistas e pela tradução das normas regulamentadoras em linguagem prática para
                  gestores e empresários.
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <p>
                  Seu foco é proteger o CNPJ — não apenas garantir que a empresa esteja em
                  conformidade no papel, mas que as práticas internas reduzam de fato o risco de
                  autuação fiscal, processos trabalhistas e passivo acidentário. Assessora empresas
                  de todos os portes, com atenção especial a negócios familiares com patrimônio a
                  preservar.
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <p>
                  É autor dos principais conteúdos sobre obrigações legais, normas regulamentadoras
                  e gestão de riscos trabalhistas publicados no blog da SERMST, revisados e
                  atualizados regularmente conforme as mudanças na legislação.
                </p>
              </FadeIn>
            </div>

            <FadeIn direction="up" delay={0.4}>
              <div className="mt-12">
                <h3 className="mb-6 text-xl font-black text-brand-900 flex items-center gap-3">
                  <BookOpen className="w-5 h-5 text-accent-pink" />
                  Artigos publicados
                </h3>
                <ul className="space-y-3">
                  {articles.map((a) => (
                    <li key={a.href}>
                      <Link
                        href={a.href}
                        className="group flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50 p-4 transition hover:border-accent-pink/30 hover:bg-accent-pink/5"
                      >
                        <ArrowRight className="mt-0.5 w-4 h-4 shrink-0 text-accent-pink" />
                        <div>
                          <span className="mb-1 block text-xs font-bold uppercase tracking-wider text-slate-400">
                            {a.hub}
                          </span>
                          <span className="text-sm font-bold text-brand-900 group-hover:text-accent-pink transition-colors leading-snug">
                            {a.title}
                          </span>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-24 lg:self-start">
            <FadeIn direction="left">
              <div className="rounded-2xl bg-brand-900 p-7 text-white shadow-[0_20px_40px_-15px_rgba(11,19,60,0.35)]">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-accent-pink/30 bg-accent-pink/10 px-3 py-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-accent-pink" />
                  <span className="text-xs font-black uppercase tracking-widest text-accent-pink">SERMST</span>
                </div>
                <h3 className="text-xl font-black mb-3 leading-snug">
                  Sua empresa está exposta a riscos trabalhistas?
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                  Em 15 minutos a equipe entende o porte e a operação antes de recomendar ação.
                  Sem compromisso.
                </p>
                <Link href="/contato" className="btn-primary-safe flex w-full justify-center text-sm">
                  Solicitar diagnóstico gratuito
                  <ArrowRight className="w-4 h-4 shrink-0" />
                </Link>
              </div>
            </FadeIn>
          </aside>
        </div>
      </section>

      {/* ── Final CTA ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-brand-900 py-20 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-accent-pink/20 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <span className="mb-6 inline-block rounded-full border border-accent-pink/20 bg-accent-pink/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
              Próximo passo
            </span>
            <h2 className="mb-6 text-4xl font-black leading-tight tracking-tight md:text-5xl">
              A SERMST faz auditoria SST gratuita
            </h2>
            <p className="mb-10 text-xl leading-relaxed text-slate-300 max-w-2xl mx-auto">
              Em 15 minutos a equipe entende o porte e a operação da empresa antes de indicar
              exame, laudo ou gestão. Sem compromisso, sem venda forçada.
            </p>
            <Link
              href="/contato"
              className="btn-primary-safe-lg inline-flex rounded-xl px-10 py-5 text-lg font-black"
            >
              Solicitar diagnóstico gratuito
              <ArrowRight className="ml-2 h-6 w-6" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
