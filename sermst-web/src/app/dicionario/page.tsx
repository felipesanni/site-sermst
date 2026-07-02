import { dicionarioSEO } from '@/lib/data/seo-content';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/fade-in';
import { BookOpen, Search, ArrowRight } from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Dicionário SST | Termos de Saúde e Segurança | SERMST',
  description:
    'Entenda termos como ASO, PGR, PCMSO, eSocial SST e outros conceitos da medicina e segurança do trabalho, explicados em linguagem útil para gestores e RH.',

  alternates: {
    canonical: 'https://sermst.com.br/dicionario',
  },
  openGraph: {
    title: 'Dicionário SST | Termos de Saúde e Segurança do Trabalho | SERMST',
    description:
      'Glossário completo dos principais termos de saúde e segurança do trabalho: ASO, PCMSO, PGR, eSocial, NRs e muito mais.',
    url: 'https://sermst.com.br/dicionario',
    type: 'website',
    locale: 'pt_BR',
  },
};

const termosEmAlta = [
  {
    href: '/dicionario/o-que-e-pgr',
    title: 'O que é PGR',
    description:
      'Entenda a sigla, a relação com a NR-01 e quando o programa precisa ser atualizado.',
  },
  {
    href: '/dicionario/o-que-e-pcmso',
    title: 'O que é PCMSO',
    description:
      'Veja o significado do programa, a lógica da NR-07 e como ele se conecta aos exames ocupacionais.',
  },
  {
    href: '/dicionario/o-que-e-ltcat',
    title: 'O que é LTCAT',
    description:
      'Guia direto sobre laudo técnico previdenciário, aposentadoria especial e coerência documental.',
  },
  {
    href: '/dicionario/o-que-e-ppp',
    title: 'O que é PPP',
    description:
      'Saiba quando o Perfil Profissiográfico Previdenciário é exigido e quais erros costumam gerar retrabalho.',
  },
];

export default function DicionarioIndexPage() {
  const termos = Object.entries(dicionarioSEO).map(([slug, data]) => ({ slug, ...data }));

  return (
    <main className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[{ name: 'Início', item: 'https://sermst.com.br' }, { name: 'Dicionário SST' }]} />
      <header className="border-b border-slate-200 bg-slate-50 pb-24 pt-32">
        <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
          <FadeIn direction="down">
            <div className="mb-8 flex items-center gap-3">
              <div className="rounded-lg bg-brand-900 p-3 text-white shadow-lg">
                <BookOpen className="h-6 w-6" />
              </div>
              <h1 className="h1-standard tracking-tighter text-brand-900">Dicionário de SST</h1>
            </div>
            <p className="max-w-3xl text-xl font-medium leading-relaxed text-slate-600">
              Respostas rápidas para entender siglas e termos de SST, com links para guias
              completos quando você precisar aprofundar o assunto.
            </p>
          </FadeIn>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[1280px] px-6 py-20 lg:px-8">
        <div className="mb-14 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn direction="right">
            <div className="rounded-[2rem] border border-slate-200 bg-slate-50 p-8 lg:p-10">
              <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
                Para gestores e RH
              </span>
              <h2 className="mb-6 text-3xl font-black text-brand-900 md:text-4xl">
                Primeiro a resposta direta. Depois, o aprofundamento.
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-slate-700">
                <p>
                  Quem busca o significado de ASO, PCMSO, PGR ou outros termos de SST geralmente
                  não está apenas estudando. Está tentando resolver um problema real da empresa,
                  entender uma exigência legal ou ganhar clareza antes de falar com um fornecedor.
                </p>
                <p>
                  Por isso este dicionário começa com uma resposta curta, mostra onde o termo
                  aparece na prática e diferencia conceitos que costumam ser confundidos. Quando o
                  tema exige mais profundidade, cada verbete aponta para um guia específico.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <div className="rounded-[2rem] bg-brand-900 p-8 text-white lg:p-10">
              <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
                Próximo passo
              </span>
              <h2 className="mb-5 text-2xl font-black">
                Se o termo já está ligado a uma dor do seu negócio, fale com a SERMST
              </h2>
              <p className="mb-8 leading-relaxed text-slate-300">
                O glossário ajuda a entender. Quando a empresa precisa agir, vale transformar
                definição em processo, documento e solução antes que a dúvida vire atraso,
                retrabalho ou exposição jurídica.
              </p>
              <Link href="/contato" className="btn-primary-safe">
                Solicitar orientação
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>

        <div className="mb-14 rounded-[2rem] border border-brand-900/10 bg-brand-50/60 p-8 lg:p-10">
          <div className="max-w-3xl">
            <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
              Termos mais buscados
            </span>
            <h2 className="text-3xl font-black text-brand-900 md:text-4xl">
              PGR, PCMSO, LTCAT e PPP concentram as dúvidas mais estratégicas
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-700">
              Se a sua empresa está tentando entender documentos, programas e obrigações que
              afetam eSocial, exames ocupacionais e passivo previdenciário, estes são os verbetes
              mais importantes para começar.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {termosEmAlta.map((termo) => (
              <Link
                key={termo.href}
                href={termo.href}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-accent-pink/30 hover:shadow-xl"
              >
                <h3 className="text-xl font-black text-brand-900 transition-colors group-hover:text-accent-pink">
                  {termo.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{termo.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-900 transition-all group-hover:gap-3">
                  Ler definição
                  <ArrowRight className="h-4 w-4 text-accent-pink" />
                </span>
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {termos.map((termo, idx) => (
            <FadeIn key={termo.slug} delay={idx * 0.1}>
              <Link
                href={`/dicionario/${termo.slug}`}
                className="group flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-8 shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all hover:border-brand-900/10 hover:shadow-2xl"
              >
                <div className="mb-6 flex items-start justify-between">
                  <span className="text-4xl font-black text-brand-500 opacity-10 transition-opacity group-hover:opacity-40">
                    {termo.slug.charAt(0).toUpperCase()}
                  </span>
                  <Search className="h-5 w-5 text-slate-200 transition-colors group-hover:text-brand-900" />
                </div>
                <h3 className="mb-4 text-2xl font-black text-brand-900 transition-colors group-hover:text-accent-pink">
                  {termo.h1.split('(')[0]}
                </h3>
                <p className="mb-10 line-clamp-3 flex-grow text-sm text-slate-500">{termo.hook}</p>
                <p className="mb-6 text-sm font-semibold text-slate-500">
                  Resposta rápida, contexto prático e caminho para aprofundar o tema.
                </p>
                <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-brand-900 transition-all group-hover:gap-4">
                  Ler definição
                  <ArrowRight className="h-4 w-4 text-accent-pink" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
