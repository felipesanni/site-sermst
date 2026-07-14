import { saudeSEO } from '@/lib/data/seo-content';
import { articleImages, siteImages } from '@/lib/site-images';
import Link from 'next/link';
import Image from 'next/image';
import { FadeIn } from '@/components/ui/fade-in';
import { HeartPulse, ArrowRight } from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';

export const dynamic = 'force-static';

export const metadata = {
  title: 'Saúde Ocupacional e Medicina do Trabalho | SERMST',
  description:
    'Conteúdo de saúde ocupacional para empresas, RH e gestores que precisam entender exames, prevenção, PCMSO, ASO e produtividade.',
  alternates: {
    canonical: 'https://sermst.com.br/saude',
  },
  openGraph: {
    title: 'Saúde Ocupacional e Medicina do Trabalho | SERMST',
    description:
      'Conteúdo de saúde ocupacional para empresas, RH e gestores que precisam entender exames, prevenção, PCMSO, ASO e produtividade.',
    url: 'https://sermst.com.br/saude',
    type: 'website',
    locale: 'pt_BR',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é PCMSO e quando é obrigatório?',
      acceptedAnswer: { '@type': 'Answer', text: 'O PCMSO é o programa previsto na NR-07 que organiza o monitoramento da saúde ocupacional. A norma prevê dispensa de elaboração para MEI, ME e EPP de grau de risco 1 ou 2 que atendam às condições da NR-01 e da NR-07, sem dispensar exames ocupacionais nem ASO.' },
    },
    {
      '@type': 'Question',
      name: 'Quando o exame periódico ocupacional é obrigatório?',
      acceptedAnswer: { '@type': 'Answer', text: 'O exame periódico monitora a saúde durante o vínculo. Pela NR-07, deve ocorrer anualmente ou em intervalo menor para trabalhadores expostos a riscos identificados e classificados no PGR e para pessoas com condições crônicas que aumentem a suscetibilidade. Para os demais, a regra geral é bienal.' },
    },
    {
      '@type': 'Question',
      name: 'O que é ASO e quem pode emitir?',
      acceptedAnswer: { '@type': 'Answer', text: 'O ASO (Atestado de Saúde Ocupacional) é emitido pelo médico que realiza o exame clínico ocupacional e registra se o trabalhador está apto ou inapto para a função. Quando houver médico responsável pelo PCMSO, seus dados também devem constar no documento.' },
    },
  ],
};

export default function SaudeIndexPage() {
  const posts = Object.entries(saudeSEO)
    .filter(([slug]) => slug !== 'importancia-do-exame-periodico')
    .map(([slug, data]) => ({ slug, ...data }));

  return (
    <main className="min-h-screen bg-slate-50">
      <BreadcrumbJsonLd items={[{ name: 'Início', item: 'https://sermst.com.br' }, { name: 'Saúde Ocupacional' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
              impacto da saúde do trabalhador na operação, no eSocial e no cumprimento da NR-07.
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
                  Esta seção reúne explicações para RH, lideranças e gestores. Ela mostra como a
                  vigilância médica e os exames ocupacionais se conectam à prevenção, à operação e aos registros. Para
                  navegar por conteúdos mais amplos de SST, o{' '}
                  <Link href="/blog" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4 hover:text-accent-pink">
                    blog da SERMST
                  </Link>{' '}
                  reúne temas complementares de normas, RH e gestão ocupacional.
                </p>
                <p>
                  O{' '}
                  <Link href="/saude/pcmso-programa-controle-medico" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4 hover:text-accent-pink">
                    PCMSO
                  </Link>
                  {' '}organiza o planejamento médico e se relaciona com ASO, exames ocupacionais, PGR e eSocial.
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
              Conteúdos essenciais
            </span>
            <h2 className="text-3xl font-black text-brand-900 md:text-4xl">
              PCMSO, NR-07, ASO e elaboração do programa
            </h2>
            <p className="mt-4 max-w-3xl text-lg font-medium leading-relaxed text-slate-700">
              Consulte o significado da sigla, as exigências da NR-07, as hipóteses de dispensa, a relação com o ASO
              e o serviço de elaboração do programa.
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
              Para organizar a admissão
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
                Ver elaboração e gestão de PCMSO
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
                O guia da NR-07 ajuda a entender exigência legal, dispensa, ASO, exames ocupacionais e a relação com o eSocial.
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
                O verbete do dicionário apresenta a definição de PCMSO em poucos parágrafos e indica os guias para quem
                precisa consultar a regra ou organizar o programa na empresa.
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
              <Link href="/saude/exame-periodico-ocupacional" className="btn-primary-safe inline-flex">
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
              Reunimos os conteúdos sobre PCMSO, ASO, NR-07 e exames complementares para facilitar a consulta e mostrar
              como cada tema se relaciona com a rotina ocupacional.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { href: '/saude/pcmso-programa-controle-medico', label: 'Guia completo de PCMSO' },
                { href: '/servicos/pcmso-nr07-programa/sao-paulo', label: 'Contratar PCMSO em São Paulo' },
                { href: '/normas/o-que-e-nr-07', label: 'NR-07: o que a norma exige' },
                { href: '/saude/aso-atestado-saude-ocupacional', label: 'ASO: o que é e quando emitir' },
                { href: '/saude/exame-periodico-ocupacional', label: 'Exame periódico ocupacional' },
                { href: '/saude/onde-fazer-audiometria-ocupacional-sao-paulo', label: 'Onde fazer audiometria ocupacional em SP' },
                { href: '/saude/doencas-ocupacionais', label: 'Doenças ocupacionais: tipos e prevenção' },
                { href: '/saude/medico-do-trabalho', label: 'Médico do trabalho: papel e obrigações' },
                { href: '/rh/declaracao-inexistencia-risco-dir', label: 'DIR e dispensa de elaborar PCMSO' },
                { href: '/rh/calculadora-cnae-grau-de-risco', label: 'Calculadora CNAE e grau de risco' },
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
                  Conteúdo para entender o tema médico e organizar a rotina do RH e da operação.
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

      <section className="mx-auto w-full max-w-[1280px] px-6 pb-12 lg:px-8">
        <FadeIn direction="up">
          <div className="mb-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
              Exames complementares ocupacionais
            </span>
            <h2 className="mb-5 text-2xl font-black text-brand-900">
              Exames além do clínico: espirometria, ECG, visão e psicossocial
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                { href: '/saude/espirometria-ocupacional', label: 'Espirometria ocupacional' },
                { href: '/saude/eletrocardiograma-ocupacional', label: 'Eletrocardiograma ocupacional' },
                { href: '/saude/acuidade-visual-ocupacional', label: 'Acuidade visual ocupacional' },
                { href: '/saude/avaliacao-psicossocial-ocupacional', label: 'Avaliação psicossocial ocupacional' },
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

          <div className="mb-6 rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
              Admissão, afastamento e rescisão
            </span>
            <h2 className="mb-5 text-2xl font-black text-brand-900">
              Exames e situações especiais do vínculo empregatício
            </h2>
            <div className="grid gap-4 md:grid-cols-3">
              {[
                { href: '/saude/acidente-de-trabalho', label: 'Acidente de trabalho: tipos e nexo causal' },
                { href: '/saude/exame-retorno-ao-trabalho', label: 'Exame de retorno ao trabalho' },
                { href: '/saude/empresa-pode-desistir-apos-exame-admissional', label: 'Empresa pode desistir após exame admissional?' },
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

          <div className="flex flex-wrap gap-4">
            <Link href="/rh" className="rounded-2xl border border-slate-200 bg-white px-6 py-4 font-bold text-brand-900 transition-all hover:border-accent-pink/40 hover:text-accent-pink">
              RH e Departamento Pessoal
              <ArrowRight className="ml-2 inline h-4 w-4" />
            </Link>
            <Link href="/normas" className="rounded-2xl border border-slate-200 bg-white px-6 py-4 font-bold text-brand-900 transition-all hover:border-accent-pink/40 hover:text-accent-pink">
              Normas Regulamentadoras
              <ArrowRight className="ml-2 inline h-4 w-4" />
            </Link>
            <Link href="/dicionario" className="rounded-2xl border border-slate-200 bg-white px-6 py-4 font-bold text-brand-900 transition-all hover:border-accent-pink/40 hover:text-accent-pink">
              Dicionário de SST
              <ArrowRight className="ml-2 inline h-4 w-4" />
            </Link>
            <Link href="/assinaturas" className="rounded-2xl border border-brand-900 bg-brand-900 px-6 py-4 font-bold text-white transition-all hover:opacity-90">
              Planos de SST por assinatura
              <ArrowRight className="ml-2 inline h-4 w-4" />
            </Link>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}
