import { saúdeSEO } from '@/lib/data/seo-content';
import { articleImages } from '@/lib/site-images';
import Link from 'next/link';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/fade-in';
import { HeartPulse, ArrowRight } from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';


export const dynamic = 'force-static';

export const metadata = {
  title: 'Hub de Saúde SST | Medicina do Trabalho | SERMST',
  description:
    'Conteúdo de saúde ocupacional para empresas, RH e gestores que precisam entender exames, prevenção, PCMSO e produtividade.',

  alternates: {
    canonical: 'https://sermst.com.br/saude',
  },
  openGraph: {
    title: 'Hub de Saúde SST | Medicina do Trabalho | SERMST',
    description:
      'Conteúdo de saúde ocupacional para empresas, RH e gestores que precisam entender exames, prevenção, PCMSO e produtividade.',
    url: 'https://sermst.com.br/saude',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function SaúdeIndexPage() {
  const posts = Object.entries(saúdeSEO).map(([slug, data]) => ({ slug, ...data }));

  return (
    <main className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[{ name: 'Início', item: 'https://sermst.com.br' }, { name: 'Saúde Ocupacional' }]} />
      <header className="bg-slate-50 py-24 border-b border-slate-100">
        <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-8">
          <FadeIn direction="down">
            <span className="flex items-center gap-2 text-brand-500 font-bold uppercase tracking-widest text-xs mb-4">
              <HeartPulse className="w-4 h-4" />
              Educação e prevenção
            </span>
            <h1 className="h1-standard mb-6 text-brand-900">Hub de Saúde SST</h1>
            <p className="text-xl text-slate-600 max-w-3xl font-medium leading-relaxed">
              Conteúdo para empresas que querem entender melhor exames ocupacionais, vigilância médica, prevenção e o impacto da saúde do trabalhador na produtividade e no compliance.
            </p>
          </FadeIn>
        </div>
      </header>

      <section className="py-20 max-w-[1280px] w-full mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start mb-14">
          <FadeIn direction="right">
            <div className="bg-slate-50 border border-slate-200 rounded-[2rem] p-8 lg:p-10">
              <span className="text-accent-pink font-black text-xs uppercase tracking-[0.2em] mb-4 block">
                Por que este conteúdo importa
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-brand-900 mb-6">
                Saúde ocupacional não é só norma. É estabilidade de operação.
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-slate-700">
                <p>
                  Quando uma empresa procura por exame periódico, ASO, PCMSO ou medicina do trabalho, está geralmente tentando entender um impacto concreto: aumento de afastamento, admissão mais lenta, risco de processo ou dificuldade para manter a rotina ocupacional organizada.
                </p>
                <p>
                  Este hub transforma esses temas em leitura clara para RH, lideranças e gestores. Não fala de saúde no abstrato — explica como a vigilância médica e os exames ocupacionais se conectam a prevenção, produtividade e conformidade.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <div className="bg-brand-900 text-white rounded-[2rem] p-8 lg:p-10">
              <span className="text-accent-pink font-black text-xs uppercase tracking-[0.2em] mb-4 block">
                Próximo passo
              </span>
              <h2 className="text-2xl font-black mb-5">
                Se a dúvida já virou urgência operacional, fale com o comercial
              </h2>
              <p className="text-slate-300 leading-relaxed mb-8">
                A leitura ajuda a entender o problema. Quando a empresa precisa agir, o melhor passo é alinhar exames, documentos e fluxo ocupacional com quem já opera isso todos os dias — antes da rotina médica virar gargalo ou exposição trabalhista.
              </p>
              <Link
                href="/contato"
                className="btn-primary-safe"
              >
                Falar com a SERMST
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="up">
          <div className="mb-14 rounded-[2rem] border border-accent-pink/20 bg-accent-pink/5 p-8 lg:p-10">
            <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
              Leitura recomendada para RH
            </span>
            <h2 className="text-3xl font-black text-brand-900 md:text-4xl">
              Como escolher clínica de exame admissional em São Paulo
            </h2>
            <p className="mt-4 max-w-3xl text-lg font-medium leading-relaxed text-slate-700">
              RH que já perdeu candidato por ASO demorado sabe: a clínica importa tanto quanto o processo. Veja o que avaliar antes de escolher — fluxo de atendimento, integração com PCMSO, exames complementares e o que define se a admissão vai andar ou travar.
            </p>
            <Link
              href="/saude/clinica-exame-admissional-sao-paulo"
              className="btn-primary-safe mt-6 inline-flex"
            >
              Ler o guia completo
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, idx) => (
            <FadeIn key={post.slug} delay={idx * 0.1}>
              <Link href={`/saude/${post.slug}`} className="group flex flex-col h-full bg-white transition-all">
                <div className="aspect-[16/9] bg-slate-100 rounded-2xl mb-6 overflow-hidden relative border border-slate-100 shadow-sm">
                  {articleImages[post.slug] ? (
                    <Image
                      src={articleImages[post.slug].src}
                      alt={articleImages[post.slug].alt}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-brand-900/5" />
                  )}
                </div>
                <h3 className="text-xl font-bold text-brand-900 mb-4 group-hover:text-accent-pink transition-colors">
                  {post.h1}
                </h3>
                <p className="text-slate-600 mb-6 flex-grow line-clamp-3">{post.hook}</p>
                <p className="text-sm text-slate-500 font-semibold mb-6">
                  Conteúdo para transformar tema médico em decisão mais segura para RH e operação.
                </p>
                <div className="flex items-center gap-2 text-brand-500 font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
                  Ler artigo completo
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
