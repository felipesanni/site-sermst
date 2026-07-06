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
    'Hub das Normas Regulamentadoras de SST (NR-01, NR-10, NR-15, NR-16, NR-17, NR-18, NR-35 e PPP eletrônico) explicadas em linguagem útil para gestores e RH.',
  alternates: { canonical: 'https://sermst.com.br/normas' },
  openGraph: {
    title: 'Normas Regulamentadoras (NRs) | Guia para empresas | SERMST',
    description:
      'Guia completo das principais Normas Regulamentadoras: NR-1, NR-6, NR-9, NR-17, NR-35 e mais. Entenda obrigações, riscos e como se adequar.',
    url: 'https://sermst.com.br/normas',
    type: 'website',
    locale: 'pt_BR',
  },
};

const ordemPreferida = [
  'nr-01-pgr-atualizada',
  'nr-06-epi',
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
      'Entenda quando a empresa precisa de SESMT, como o grau de risco e número de empregados influenciam a obrigação e o que observar na rotina de SST.',
  },
  {
    slug: 'dds',
    titulo: 'DDS: diálogo diário de segurança',
    descricao:
      'Veja o que é DDS, para que serve, como registrar e como usar a ferramenta sem confundir com treinamentos obrigatórios das NRs.',
  },
];

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
      <header className="bg-brand-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-pink/20 rounded-full blur-[120px]" />
        <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 relative z-10">
          <FadeIn direction="up">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-accent-pink/15 border border-accent-pink/30 p-3 rounded-lg">
                <BookOpen className="w-6 h-6 text-accent-pink" />
              </div>
              <span className="text-accent-pink font-black text-xs uppercase tracking-[0.2em]">
                Normas Regulamentadoras
              </span>
            </div>
            <h1 className="h1-standard mb-8 max-w-3xl">
              Guia das NRs explicadas para gestores
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed border-l-4 border-accent-pink pl-6 font-medium">
              As Normas Regulamentadoras definem o que sua empresa precisa fazer para operar com segurança e cumprir o eSocial. Aqui cada NR é apresentada com obrigações, prazos e o que costuma cair em fiscalização.
            </p>
          </FadeIn>
        </div>
      </header>

      <section className="py-16 max-w-[1280px] w-full mx-auto px-6 lg:px-8 border-b border-slate-200">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-black text-brand-900 mb-6">O que são Normas Regulamentadoras?</h2>
          <p className="text-slate-600 leading-relaxed mb-4">
            As Normas Regulamentadoras (NRs) são regulamentos técnicos do Ministério do Trabalho e Emprego que
            estabelecem os requisitos mínimos de Saúde e Segurança do Trabalho (SST) para todas as empresas brasileiras
            com funcionários regidos pela CLT. Atualmente existem 38 NRs ativas — cada uma voltada para um risco
            específico, setor ou obrigação de gestão.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            O descumprimento de qualquer NR aplicável ao perfil da empresa pode resultar em autuações do Ministério
            do Trabalho, autuações relacionadas às obrigações de SST, inconsistências no eSocial (eventos S-2220 e S-2240), interdição de equipamentos ou
            atividades, e passivo trabalhista em ações judiciais. Desde 2023, as inconsistências documentais detectadas
            pelo eSocial geram notificações automáticas sem necessidade de fiscalização presencial.
          </p>
          <p className="text-slate-600 leading-relaxed">
            A conformidade com as NRs não é estática — normas são atualizadas periodicamente. A NR-01, por exemplo,
            passou por revisão e incluiu expressamente os fatores de risco psicossociais relacionados ao trabalho no GRO a partir de 26 de maio de 2026. A NR-07 (PCMSO) define os
            exames obrigatórios conforme os riscos levantados no PGR. Em setores específicos, como
            plataformas de petróleo e gás, a{' '}
            <Link href="/normas/nr-37" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4 hover:text-accent-pink">
              NR-37
            </Link>{' '}
            também precisa ser analisada dentro do contexto real da operação. Manter os documentos de SST atualizados é
            responsabilidade do empregador e não pode ser delegada ao trabalhador.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-[1280px] w-full mx-auto px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="mb-12 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
              NRs que mais aparecem na rotina das empresas
            </span>
            <h2 className="mb-5 text-3xl font-black text-brand-900">
              Pontes rapidas entre norma, treinamento e documento
            </h2>
            <p className="mb-8 max-w-3xl text-slate-700 leading-relaxed">
              Algumas NRs sao portas de entrada para decisoes comerciais e operacionais. Use estes
              atalhos para entender obrigacao, risco e proximo passo sem depender de uma unica
              pagina de origem.
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { href: '/normas/nr-05-cipa', label: 'NR-05 CIPA' },
                { href: '/normas/nr-06-epi', label: 'NR-06 EPI' },
                { href: '/normas/nr-33-espaco-confinado', label: 'NR-33 espaco confinado' },
                { href: '/normas/dds', label: 'DDS em seguranca do trabalho' },
                { href: '/normas/nr-01-pgr-atualizada', label: 'NR-01, PGR e riscos psicossociais' },
                { href: '/normas/sesmt', label: 'NR-04 e SESMT' },
                { href: '/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo', label: 'Servico de PGR NR-01' },
                { href: '/servicos/pcmso-nr07-programa/sao-paulo', label: 'PCMSO NR-07' },
                { href: '/servicos/ltcat-laudo-tecnico-previdenciario/sao-paulo', label: 'LTCAT previdenciario' },
                { href: '/servicos/pericia-trabalhista-assistente-tecnico/sao-paulo', label: 'Pericia trabalhista' },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {normas.map((norma, idx) => (
            <FadeIn key={norma.slug} delay={idx * 0.05}>
              <Link
                href={`/normas/${norma.slug}`}
                className="group flex h-full flex-col bg-white border border-slate-200 p-7 rounded-2xl hover:shadow-2xl hover:-translate-y-1 hover:border-accent-pink/30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-brand-50 text-accent-pink rounded-xl flex items-center justify-center mb-5 group-hover:bg-accent-pink group-hover:text-white transition-colors">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-black text-brand-900 mb-3 leading-tight group-hover:text-accent-pink transition-colors">
                  {norma.titulo}
                </h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
                  {norma.descricao}
                </p>
                <span className="inline-flex items-center gap-2 text-brand-900 font-bold text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                  Ler guia completo
                  <ArrowRight className="w-4 h-4 text-accent-pink" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="bg-brand-900 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-pink to-transparent" />
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8 text-center relative z-10">
          <FadeIn direction="up">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight">
              Sua empresa cumpre as NRs aplicáveis?
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              A SERMST faz auditoria de conformidade NR sem custo inicial. Em 15 minutos a equipe entende o cenário e aponta o que está exposto.
            </p>
            <Link
              href="/contato"
              className="inline-flex items-center gap-3 bg-accent-pink hover:bg-accent-pink-hover text-white font-bold py-5 px-10 rounded-xl shadow-2xl transition-all hover:-translate-y-1 text-lg"
            >
              Solicitar diagnóstico de NRs
              <ArrowRight className="w-5 h-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
