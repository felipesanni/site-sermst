import { saúdeSEO } from '@/lib/data/seo-content';
import { articleImages, siteImages } from '@/lib/site-images';
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

export default function SaudeIndexPage() {
  const posts = Object.entries(saúdeSEO).map(([slug, data]) => ({ slug, ...data }));

  return (
    <main className="min-h-screen bg-slate-50">
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', item: 'https://sermst.com.br' },
          { name: 'Saúde Ocupacional' },
        ]}
      />

      <header className="relative overflow-hidden bg-brand-900 py-28 text-white">
        <div className="absolute inset-0 opacity-20">
          <Image
            src={siteImages.institutional.corporateHealthHero.src}
            alt={siteImages.institutional.corporateHealthHero.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/96 via-brand-900/88 to-brand-900/60" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 right-0 h-[500px] w-[500px] rounded-full bg-accent-pink/20 blur-[120px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8">
          <FadeIn direction="up">
            <span className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-white/90">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-pink text-white shadow-[0_0_20px_rgba(227,27,69,0.35)]">
                <HeartPulse className="h-4 w-4" />
              </span>
              Conteúdo de saúde ocupacional para empresas
            </span>
            <h1 className="h1-standard mb-8 max-w-4xl text-white">
              Medicina do trabalho e saúde ocupacional
              <br />
              <span className="text-accent-pink">para empresas que precisam de previsibilidade</span>
            </h1>
            <p className="max-w-4xl border-l-4 border-accent-pink pl-6 text-xl font-medium leading-relaxed text-slate-300 md:pl-10 md:text-2xl">
              Conteúdo para empresas que querem entender melhor exames ocupacionais, vigilância
              médica, prevenção e o impacto da saúde do trabalhador na produtividade, no eSocial e
              no compliance.
            </p>
          </FadeIn>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[1280px] px-6 py-20 lg:px-8">
        <div className="mb-14 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <FadeIn direction="right">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
              <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
                Por que este conteúdo importa
              </span>
              <h2 className="mb-6 text-3xl font-black text-brand-900 md:text-4xl">
                Saúde ocupacional não é só norma. É estabilidade de operação.
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-slate-700">
                <p>
                  Quando uma empresa procura por exame periódico, ASO, PCMSO ou medicina do
                  trabalho, está geralmente tentando entender um impacto concreto: aumento de
                  afastamento, admissão mais lenta, risco de processo ou dificuldade para manter a
                  rotina ocupacional organizada.
                </p>
                <p>
                  Este hub transforma esses temas em leitura clara para RH, lideranças e gestores.
                  Não fala de saúde no abstrato: explica como a vigilância médica e os exames
                  ocupacionais se conectam a prevenção, produtividade e conformidade.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <div className="rounded-[2rem] bg-brand-900 p-8 text-white shadow-[0_20px_40px_-15px_rgba(11,19,60,0.35)] lg:p-10">
              <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
                Próximo passo
              </span>
              <h2 className="mb-5 text-2xl font-black">
                Se a dúvida já virou urgência operacional, fale com o comercial
              </h2>
              <p className="mb-8 leading-relaxed text-slate-300">
                A leitura ajuda a entender o problema. Quando a empresa precisa agir, o melhor
                passo é alinhar exames, documentos e fluxo ocupacional com quem já opera isso todos
                os dias, antes da rotina médica virar gargalo ou exposição trabalhista.
              </p>
              <Link href="/contato" className="btn-primary-safe">
                Falar com a SERMST
                <ArrowRight className="h-4 w-4" />
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
              RH que já perdeu candidato por ASO demorado sabe: a clínica importa tanto quanto o
              processo. Veja o que avaliar antes de escolher: fluxo de atendimento, integração com
              PCMSO, exames complementares e o que define se a admissão vai andar ou travar.
            </p>
            <Link
              href="/saude/clinica-exame-admissional-sao-paulo"
              className="btn-primary-safe mt-6 inline-flex"
            >
              Ler o guia completo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post, idx) => (
            <FadeIn key={post.slug} delay={idx * 0.1}>
              <Link href={`/saude/${post.slug}`} className="group flex h-full flex-col bg-white transition-all">
                <div className="relative mb-6 aspect-[16/9] overflow-hidden rounded-2xl border border-slate-100 bg-slate-100 shadow-sm">
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
                <h3 className="mb-4 text-xl font-bold text-brand-900 transition-colors group-hover:text-accent-pink">
                  {post.h1}
                </h3>
                <p className="mb-6 flex-grow line-clamp-3 text-slate-600">{post.hook}</p>
                <p className="mb-6 text-sm font-semibold text-slate-500">
                  Conteúdo para transformar tema médico em decisão mais segura para RH e operação.
                </p>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-brand-500 transition-all group-hover:gap-4">
                  Ler artigo completo
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
