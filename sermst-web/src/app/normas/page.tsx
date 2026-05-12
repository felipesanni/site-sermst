import type { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/fade-in';
import { BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';
import { normasKnown } from './[slug]/page';

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
  'nr-35-trabalho-em-altura',
  'nr-18-construcao-civil',
  'nr-15-insalubridade',
  'nr-16-periculosidade',
  'nr-10-eletricidade',
  'nr-17-ergonomia',
  'nr-13-vasos-de-pressao',
  'ppp-eletronico',
  'pgrs-residuos',
];

export default function NormasIndexPage() {
  const todos = Object.entries(normasKnown).map(([slug, data]) => ({ slug, ...data }));
  const visiveis = ordemPreferida
    .map((slug) => todos.find((n) => n.slug === slug))
    .filter((n): n is NonNullable<typeof n> => Boolean(n));
  const extras = todos.filter((n) => !ordemPreferida.includes(n.slug));
  const normas = [...visiveis, ...extras];

  return (
    <main className="min-h-screen bg-slate-50">
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
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-[1.05] tracking-tight max-w-3xl">
              Guia das NRs explicadas para gestores
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed border-l-4 border-accent-pink pl-6 font-medium">
              As Normas Regulamentadoras definem o que sua empresa precisa fazer para operar com segurança e cumprir o eSocial. Aqui cada NR é apresentada com obrigações, prazos é o que costuma cair em fiscalização.
            </p>
          </FadeIn>
        </div>
      </header>

      <section className="py-20 max-w-[1280px] w-full mx-auto px-6 lg:px-8">
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
