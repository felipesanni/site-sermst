import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/fade-in';
import { ArrowRight, BookOpen, Briefcase, GraduationCap, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Luiz César Sannino | Higienista Ocupacional SST — SERMST',
  description:
    'Luiz César Sannino, Higienista Ocupacional e Técnico em Segurança do Trabalho (CREA/SP 5061899709), soma mais de 40 anos de experiência em SST.',
  alternates: { canonical: 'https://sermst.com.br/equipe/luiz-cesar-sannino' },
  openGraph: {
    title: 'Luiz César Sannino | Higienista Ocupacional SST — SERMST',
    description:
      'Higienista Ocupacional e Técnico em Segurança do Trabalho (CREA/SP 5061899709). Mais de 40 anos formando a SERMST — autor dos principais guias técnicos sobre normas regulamentadoras e saúde ocupacional.',
    url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
    type: 'profile',
    locale: 'pt_BR',
  },
};

const articles = [
  {
    href: '/saude/aso-atestado-saude-ocupacional',
    title: 'ASO: o que é, quando emitir e por que ele protege a empresa',
    hub: 'Saúde & Segurança',
  },
  {
    href: '/saude/clinica-exame-admissional-sao-paulo',
    title: 'Clínica de Exame Admissional em São Paulo: como escolher sem travar a contratação',
    hub: 'Saúde & Segurança',
  },
  {
    href: '/saude/exame-demissional',
    title: 'Exame Demissional: como funciona e por que ele protege a empresa',
    hub: 'Saúde & Segurança',
  },
  {
    href: '/saude/medicina-do-trabalho-guia',
    title: 'Medicina do Trabalho: o que é e o que toda empresa precisa saber',
    hub: 'Saúde & Segurança',
  },
  {
    href: '/saude/o-que-e-saude-ocupacional',
    title: 'O que é Saúde Ocupacional: guia completo para gestores',
    hub: 'Saúde & Segurança',
  },
  {
    href: '/saude/o-que-sao-epis',
    title: 'O que são EPIs: o equipamento que protege o trabalhador e o CNPJ da empresa',
    hub: 'Saúde & Segurança',
  },
  {
    href: '/saude/pcmso-programa-controle-medico',
    title: 'PCMSO: o que é, quem precisa e como montar o programa',
    hub: 'Saúde & Segurança',
  },
  {
    href: '/normas/nr-10-eletricidade',
    title: 'NR-10: Segurança em Instalações e Serviços em Eletricidade',
    hub: 'Normas Regulamentadoras',
  },
  {
    href: '/normas/nr-13-vasos-de-pressao',
    title: 'NR-13: Caldeiras, Vasos de Pressão, Tubulações e Tanques',
    hub: 'Normas Regulamentadoras',
  },
  {
    href: '/normas/nr-15-insalubridade',
    title: 'NR-15: Insalubridade — guia para gestores e RH',
    hub: 'Normas Regulamentadoras',
  },
  {
    href: '/normas/nr-17-ergonomia',
    title: 'NR-17: Ergonomia — o que sua empresa precisa fazer para evitar LER/DORT',
    hub: 'Normas Regulamentadoras',
  },
  {
    href: '/normas/nr-18-construcao-civil',
    title: 'NR-18: Segurança e Saúde no Trabalho na Construção Civil',
    hub: 'Normas Regulamentadoras',
  },
  {
    href: '/normas/nr-35-trabalho-em-altura',
    title: 'NR-35: Trabalho em Altura — o que sua empresa precisa saber',
    hub: 'Normas Regulamentadoras',
  },
  {
    href: '/normas/pgrs-residuos',
    title: 'PGRS: Plano de Gerenciamento de Resíduos para empresas',
    hub: 'Normas Regulamentadoras',
  },
];

const personSchema = {
  '@type': 'Person',
  '@id': 'https://sermst.com.br/equipe/luiz-cesar-sannino#person',
  name: 'Luiz César Sannino',
  jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho',
  description:
    'Higienista Ocupacional e Técnico em Segurança do Trabalho com registro CREA/SP 5061899709. Mais de 40 anos de experiência em Medicina e Segurança do Trabalho, fundador da SERMST.',
  url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
  worksFor: {
    '@type': 'Organization',
    name: 'SERMST',
    url: 'https://sermst.com.br',
  },
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      credentialCategory: 'CREA/SP 5061899709',
      recognizedBy: {
        '@type': 'Organization',
        name: 'Conselho Regional de Engenharia e Agronomia de São Paulo',
      },
    },
  ],
  knowsAbout: [
    'Higiene Ocupacional',
    'Segurança do Trabalho',
    'Normas Regulamentadoras',
    'PCMSO',
    'PPRA',
    'PGR',
    'Medicina do Trabalho',
    'EPIs',
    'Saúde Ocupacional',
  ],
  sameAs: [
    'https://www.linkedin.com/in/luiz-cesar-sannino/',
    'https://www.crea-sp.org.br/',
  ],
};

const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': 'https://sermst.com.br/equipe/luiz-cesar-sannino#profilepage',
  url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
  name: 'Luiz César Sannino — Higienista Ocupacional e TST | SERMST',
  dateCreated: '2025-01-01T00:00:00-03:00',
  dateModified: '2026-07-02T00:00:00-03:00',
  inLanguage: 'pt-BR',
  mainEntity: personSchema,
};

export default function LuizCesarSanninoPage() {
  return (
    <main className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }}
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
                  src="/images/equipe/luiz-cesar-sannino.jpg"
                  alt="Luiz César Sannino — Higienista Ocupacional e Técnico em Segurança do Trabalho, CREA/SP 5061899709"
                  fill
                  sizes="80px"
                  className="object-cover object-top"
                />
              </div>
              <div>
                <h1 className="h1-standard">
                  Luiz César Sannino
                </h1>
                <p className="mt-2 text-accent-pink font-bold text-lg">
                  Higienista Ocupacional · Técnico em Segurança do Trabalho
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-bold text-white">
                <GraduationCap className="w-4 h-4 text-accent-pink" />
                CREA/SP 5061899709
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-2 text-sm font-bold text-white">
                <Briefcase className="w-4 h-4 text-accent-pink" />
                +40 anos em SST
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
                Mais de 40 anos construindo a SST que protege empresas de verdade.
              </h2>
            </FadeIn>

            <div className="space-y-6 text-lg font-medium leading-relaxed text-slate-700">
              <FadeIn direction="up" delay={0.1}>
                <p>
                  Luiz César Sannino é Higienista Ocupacional e Técnico em Segurança do Trabalho
                  com registro CREA/SP 5061899709. Com mais de 40 anos de atuação na área, é o
                  fundador da SERMST e responsável pela formação técnica e operacional que sustenta
                  o atendimento a mais de 3.000 empresas em todo o Brasil.
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <p>
                  Sua especialidade é transformar a complexidade das normas regulamentadoras em
                  processos práticos — audiometria, espirometria, EEG, ECG e todos os exames
                  complementares realizados no laboratório próprio da SERMST seguem os protocolos
                  técnicos que ele desenvolveu ao longo de décadas de campo.
                </p>
              </FadeIn>
              <FadeIn direction="up" delay={0.3}>
                <p>
                  É autor dos principais guias técnicos do blog da SERMST sobre saúde ocupacional,
                  normas regulamentadoras, EPI e programas obrigatórios como PCMSO e PGR.
                  Todo conteúdo é revisado com base na legislação vigente e na realidade das
                  operações brasileiras — sem jargão acadêmico, com foco no que o gestor precisa
                  saber para agir.
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
                  Sua empresa está com SST em dia?
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
