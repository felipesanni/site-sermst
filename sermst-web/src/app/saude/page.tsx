import { saudeSEO } from '@/lib/data/seo-content';
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
    'Conteúdo de saúde ocupacional para empresas, RH e gestores que precisam entender exames, prevenção, PCMSO, ASO e produtividade.',
  alternates: {
    canonical: 'https://sermst.com.br/saude',
  },
  openGraph: {
    title: 'Hub de Saúde SST | Medicina do Trabalho | SERMST',
    description:
      'Conteúdo de saúde ocupacional para empresas, RH e gestores que precisam entender exames, prevenção, PCMSO, ASO e produtividade.',
    url: 'https://sermst.com.br/saude',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function SaudeIndexPage() {
  const posts = Object.entries(saudeSEO).map(([slug, data]) => ({ slug, ...data }));

  return (
    <main className="min-h-screen bg-slate-50">
      <BreadcrumbJsonLd items={[{ name: 'Início', item: 'https://sermst.com.br' }, { name: 'Saúde Ocupacional' }]} />

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
              Conteúdo para empresas que querem entender melhor exames ocupacionais, vigilância médica, prevenção e o
              impacto da saúde do trabalhador na produtividade, no eSocial e no compliance.
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
                  Quando uma empresa procura por exame periódico, ASO, PCMSO ou medicina do trabalho, normalmente está
                  tentando resolver um impacto concreto: aumento de afastamento, admissão mais lenta, risco de processo
                  ou dificuldade para manter a rotina ocupacional organizada.
                </p>
                <p>
                  Este hub transforma esses temas em leitura clara para RH, lideranças e gestores. Ele mostra como a
                  vigilância médica e os exames ocupacionais se conectam a prevenção, produtividade e conformidade. Para
                  navegar por conteúdos mais amplos de SST, o{' '}
                  <Link href="/blog" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4 hover:text-accent-pink">
                    blog da SERMST
                  </Link>{' '}
                  reúne temas complementares de normas, RH e gestão ocupacional.
                </p>
                <p>
                  No cluster médico, a porta de entrada mais estratégica hoje é{' '}
                  <Link href="/saude/pcmso-programa-controle-medico" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4 hover:text-accent-pink">
                    PCMSO
                  </Link>
                  , porque ele conversa com ASO, exames ocupacionais, PGR, eSocial e contratação de serviço. Por isso,
                  este hub também funciona como ponte entre a busca informacional e a necessidade operacional.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <div className="rounded-[2rem] bg-brand-900 p-8 text-white shadow-[0_20px_40px_-15px_rgba(11,19,60,0.35)] lg:p-10">
              <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
                Próximo passo
              </span>
              <h2 className="mb-5 text-2xl font-black">Se a dúvida já virou urgência operacional, fale com o comercial</h2>
              <p className="mb-8 leading-relaxed text-slate-300">
                A leitura ajuda a entender o problema. Quando a empresa precisa agir, o melhor passo é alinhar exames,
                documentos e fluxo ocupacional com quem já opera isso todos os dias, antes da rotina médica virar
                gargalo ou exposição trabalhista.
              </p>
              <Link href="/contato" className="btn-primary-safe">
                Falar com a SERMST
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.03}>
          <div className="mb-14 rounded-[2rem] border border-brand-900 bg-white p-8 shadow-sm lg:p-10">
            <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
              Núcleo do cluster
            </span>
            <h2 className="text-3xl font-black text-brand-900 md:text-4xl">
              PCMSO, NR-07, ASO e serviço: quatro páginas que precisam contar a mesma história
            </h2>
            <p className="mt-4 max-w-3xl text-lg font-medium leading-relaxed text-slate-700">
              Quem busca por PCMSO pode estar querendo entender o significado da sigla, a obrigação da NR-07, quando
              existe dispensa, como o ASO entra no fluxo ou já querendo contratar a elaboração do programa. Por isso,
              este hub concentra as pontes mais importantes do cluster.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { href: '/saude/pcmso-programa-controle-medico', label: 'Guia completo de PCMSO' },
                { href: '/normas/o-que-e-nr-07', label: 'NR-07: o que a norma exige' },
                { href: '/dicionario/o-que-e-pcmso', label: 'O que é PCMSO? Significado' },
                { href: '/servicos/pcmso-nr07-programa/sao-paulo', label: 'Contratar PCMSO em São Paulo' },
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

        <FadeIn direction="up">
          <div className="mb-14 rounded-[2rem] border border-accent-pink/20 bg-accent-pink/5 p-8 lg:p-10">
            <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
              Leitura recomendada para RH
            </span>
            <h2 className="text-3xl font-black text-brand-900 md:text-4xl">
              Como escolher clínica de exame admissional em São Paulo
            </h2>
            <p className="mt-4 max-w-3xl text-lg font-medium leading-relaxed text-slate-700">
              RH que já perdeu candidato por ASO demorado sabe: a clínica importa tanto quanto o processo. Veja o que
              avaliar antes de escolher: fluxo de atendimento, integração com PCMSO, exames complementares e{' '}
              <Link href="/exames/como-funciona-o-exame-admissional" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4 hover:text-accent-pink">
                como funciona o exame admissional
              </Link>{' '}
              na prática para definir se a admissão vai andar ou travar.
            </p>
            <Link href="/saude/clinica-exame-admissional-sao-paulo" className="btn-primary-safe mt-6 inline-flex">
              Ler o guia completo
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.05}>
          <div className="mb-14 rounded-[2rem] border border-brand-900 bg-white p-8 shadow-sm lg:p-10">
            <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
              Guia essencial de saúde ocupacional
            </span>
            <h2 className="text-3xl font-black text-brand-900 md:text-4xl">
              PCMSO: significado, validade e quem precisa elaborar
            </h2>
            <p className="mt-4 max-w-3xl text-lg font-medium leading-relaxed text-slate-700">
              Entenda o que significa PCMSO, como o programa se conecta à NR-07 e ao PGR, quando precisa ser atualizado
              e em quais cenários MEI, ME ou EPP pode ter dispensa de elaboração sem deixar de realizar exames ocupacionais.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/saude/pcmso-programa-controle-medico" className="btn-primary-safe inline-flex">
                Ler guia completo de PCMSO
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/servicos/pcmso-nr07-programa/sao-paulo"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 font-bold text-brand-900 transition-colors hover:border-accent-pink hover:text-accent-pink"
              >
                Ver a página comercial
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.06}>
          <div className="mb-14 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
                Regra normativa
              </span>
              <h2 className="text-3xl font-black text-brand-900 md:text-4xl">NR-07: a regra por trás do PCMSO</h2>
              <p className="mt-4 text-lg font-medium leading-relaxed text-slate-700">
                Quando a dúvida é normativa, a melhor entrada não é a página comercial. A página de NR-07 ajuda a
                entender exigência legal, dispensa, ASO, exames e coerência com eSocial.
              </p>
              <Link href="/normas/o-que-e-nr-07" className="btn-primary-safe mt-6 inline-flex">
                Ler o guia da NR-07
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm">
              <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
                Definição rápida
              </span>
              <h2 className="text-3xl font-black text-brand-900 md:text-4xl">O que significa PCMSO?</h2>
              <p className="mt-4 text-lg font-medium leading-relaxed text-slate-700">
                Quando a busca é mais curta e conceitual, o verbete do dicionário ajuda o Google a entender a intenção
                de significado, sem misturar definição curta com página longa de guia ou contratação.
              </p>
              <Link href="/dicionario/o-que-e-pcmso" className="btn-primary-safe mt-6 inline-flex">
                Ler definição rápida
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.07}>
          <div className="mb-14 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
              Rotina ocupacional
            </span>
            <h2 className="text-3xl font-black text-brand-900 md:text-4xl">
              Exame periódico ocupacional: onde a rotina médica costuma começar a falhar
            </h2>
            <p className="mt-4 max-w-3xl text-lg font-medium leading-relaxed text-slate-700">
              Atraso de periódico, convocação sem critério e PCMSO desatualizado costumam aparecer juntos. Este guia
              mostra por que o exame periódico não é mera formalidade e como ele se conecta ao ASO, à NR-07 e à previsibilidade do RH.
            </p>
            <div className="mt-6 flex flex-wrap gap-4">
              <Link href="/saude/importancia-do-exame-periodico" className="btn-primary-safe inline-flex">
                Ler guia do exame periódico
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/saude/aso-atestado-saude-ocupacional"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 font-bold text-brand-900 transition-colors hover:border-accent-pink hover:text-accent-pink"
              >
                Ver guia de ASO
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.11}>
          <div className="mb-14 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
              Exames e documentos mais ligados ao PCMSO
            </span>
            <h2 className="text-3xl font-black text-brand-900 md:text-4xl">
              Caminhos rápidos para quem saiu da dúvida e entrou na operação
            </h2>
            <p className="mt-4 max-w-3xl text-lg font-medium leading-relaxed text-slate-700">
              Reunimos as páginas que mais se conectam com PCMSO, ASO, NR-07 e exames complementares para facilitar o
              rastreamento e a decisão de quem chegou pelo hub de saúde ocupacional.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { href: '/saude/pcmso-programa-controle-medico', label: 'Guia completo de PCMSO' },
                { href: '/servicos/pcmso-nr07-programa/sao-paulo', label: 'Contratar PCMSO em São Paulo' },
                { href: '/normas/o-que-e-nr-07', label: 'NR-07: o que a norma exige' },
                { href: '/saude/aso-atestado-saude-ocupacional', label: 'ASO: o que é e quando emitir' },
                { href: '/saude/importancia-do-exame-periodico', label: 'Exame periódico ocupacional' },
                { href: '/rh/declaracao-inexistencia-risco-dir', label: 'DIR e dispensa de elaborar PCMSO' },
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
