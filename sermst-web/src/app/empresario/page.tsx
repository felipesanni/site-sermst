import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, BriefcaseBusiness, Building2, ClipboardCheck, ShieldAlert } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';
import { empresarioSEO, empresarioSections } from '@/lib/data/seo-content';

export const metadata: Metadata = {
  title: 'Empresario: regularizacao, contratacao e documentos | SERMST',
  description:
    'Conteudo para empresarios que precisam entender onde a empresa deixa de ser apenas cadastro e passa a carregar obrigacoes reais de contratacao, documentos, rotina e risco.',
  alternates: {
    canonical: 'https://sermst.com.br/empresario',
  },
  openGraph: {
    title: 'Hub Empresario | Regularizacao, contratacao e risco operacional',
    description:
      'Guias para empresa em operacao que precisa entender regularizacao, primeiro funcionario, documentos e riscos que aparecem antes de RH, eSocial e SST ficarem evidentes.',
    url: 'https://sermst.com.br/empresario',
    type: 'website',
    locale: 'pt_BR',
  },
};

const sectionCopy = {
  Regularizacao: {
    icon: Building2,
    title: 'Empresa regularizada',
    description:
      'Conteudos para quem ja abriu, emite nota, opera normalmente e agora precisa entender o que ainda falta para a empresa estar regular de verdade.',
  },
  'Contratacao e equipe': {
    icon: BriefcaseBusiness,
    title: 'Contratacao e equipe',
    description:
      'Guias para o momento em que o empresario vai contratar, registrar, estruturar funcao e descobrir as primeiras obrigacoes invisiveis.',
  },
  'Documentos e rotina': {
    icon: ClipboardCheck,
    title: 'Documentos e rotina',
    description:
      'Leituras para organizar o que precisa existir alem da contabilidade: exames, evidencias, fluxo de RH e documentos que sustentam a operacao.',
  },
  'Fiscalizacao e risco': {
    icon: ShieldAlert,
    title: 'Fiscalizacao e risco',
    description:
      'Conteudos para entender o que pequenas empresas costumam ignorar ate surgir cobranca, exigencia, atraso ou exposicao juridica.',
  },
} as const;

const featuredSlugs = [
  'cnpj-ativo-significa-empresa-regularizada',
  'nota-fiscal-mei-nao-significa-empresa-regularizada',
  'simples-nacional-nao-elimina-obrigacoes-da-empresa',
  'alvara-de-funcionamento-nao-basta',
  'primeiro-funcionario-o-que-muda-na-pratica',
  'documentos-obrigatorios-empresa-com-funcionarios',
];

const strategicLinks = [
  {
    href: '/rh',
    label: 'Hub RH e Departamento Pessoal',
    description: 'Para aprofundar eSocial, rotina de admissao, risco trabalhista e documentos de equipe.',
  },
  {
    href: '/saude',
    label: 'Hub Saude Ocupacional',
    description: 'Para ligar a dor do empresario a ASO, PCMSO, exames e rotina medica ocupacional.',
  },
  {
    href: '/rh/calculadora-cnae-grau-de-risco',
    label: 'Calculadora de Risco por CNAE',
    description: 'Para transformar a descoberta do problema em leitura mais concreta da atividade e das exigencias da operacao.',
  },
];

export default function EmpresarioPage() {
  const posts = Object.entries(empresarioSEO).map(([slug, data]) => ({ slug, ...data }));
  const groupedPosts = empresarioSections.map((section) => ({
    section,
    posts: posts.filter((post) => post.section === section),
  }));
  const featuredPosts = featuredSlugs.map((slug) => ({ slug, ...empresarioSEO[slug] }));

  return (
    <main className="min-h-screen bg-slate-50">
      <BreadcrumbJsonLd
        items={[
          { name: 'Inicio', item: 'https://sermst.com.br' },
          { name: 'Empresario' },
        ]}
      />

      <header className="relative overflow-hidden bg-brand-900 py-28 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(248,67,101,0.18),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8">
          <FadeIn direction="up">
            <span className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-white/90">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-pink text-white">
                <BriefcaseBusiness className="h-4 w-4" />
              </span>
              Hub Empresario
            </span>
            <h1 className="h1-standard mb-8 max-w-5xl text-white">
              Conteudo para empresarios que ja operam, contratam e precisam de clareza
            </h1>
            <p className="max-w-4xl border-l-4 border-accent-pink pl-6 text-xl font-medium leading-relaxed text-slate-300 md:pl-10 md:text-2xl">
              Este hub nao fala com curioso. Fala com quem ja tem empresa em operacao,
              ja lida com nota, equipe, documentos e regularizacao, mas ainda nao enxerga
              onde comecam os riscos que mais tarde viram problema de RH, eSocial e SST.
            </p>
          </FadeIn>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <FadeIn direction="right">
            <div className="surface-panel">
              <span className="kicker">Promessa editorial</span>
              <h2 className="mb-5 text-3xl font-black text-brand-900 md:text-4xl">
                O empresario costuma descobrir a lacuna tarde demais
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-slate-700">
                <p>
                  CNPJ ativo, nota emitida, folha rodando e alvara em maos passam a impressao
                  de que a empresa esta em ordem. So que a regularizacao de verdade costuma
                  falhar em outro lugar: primeiro funcionario, exames, evidencias, rotina de
                  eSocial e documentos que nao ficam claros para quem nunca precisou olhar SST.
                </p>
                <p>
                  O papel deste hub e antecipar essa descoberta. Em vez de esperar multa,
                  atraso de admissao ou exigencia inesperada, a SERMST usa o universo do
                  empresario para explicar onde a operacao deixa de ser apenas contabilidade
                  e passa a exigir estrutura mais completa.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.08}>
            <div className="surface-panel-muted h-full">
              <span className="kicker">Para onde este hub leva</span>
              <h2 className="mb-5 text-2xl font-black text-brand-900">
                Topo que empurra para mais clareza
              </h2>
              <div className="space-y-5 text-slate-700">
                <p>
                  O leitor entra por regularizacao, contratacao e operacao. Ao longo da leitura,
                  ele entende onde a empresa deixa de ter apenas uma duvida administrativa e
                  passa a ter um problema operacional de verdade.
                </p>
                <div className="space-y-3">
                  {strategicLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="group block rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:-translate-y-1 hover:border-accent-pink/40 hover:shadow-xl"
                    >
                      <strong className="block text-brand-900 group-hover:text-accent-pink">{link.label}</strong>
                      <span className="mt-2 block text-sm leading-relaxed text-slate-600">{link.description}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-6 pb-16 lg:px-8">
        <FadeIn direction="up">
          <div className="rounded-[2rem] border border-brand-900 bg-white p-8 shadow-sm lg:p-10">
            <span className="kicker">Espinha dorsal do cluster</span>
            <h2 className="mb-4 text-3xl font-black text-brand-900 md:text-4xl">
              As primeiras paginas que estruturam o funil
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
              Estas sao as leituras iniciais que capturam o empresario por termos mais amplos
              e ajudam a nomear a lacuna antes de aprofundar em contratacao, documentos,
              eSocial e saude ocupacional.
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {featuredPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/empresario/${post.slug}`}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:-translate-y-1 hover:border-accent-pink/40 hover:bg-white hover:shadow-xl"
                >
                  <h3 className="text-xl font-black text-brand-900 group-hover:text-accent-pink">
                    {post.h1}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{post.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-accent-pink">
                    Ler guia
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-6 pb-20 lg:px-8">
        <div className="space-y-10">
          {groupedPosts.map(({ section, posts }, index) => {
            const sectionData = sectionCopy[section];
            const Icon = sectionData.icon;

            return (
              <FadeIn key={section} direction="up" delay={index * 0.05}>
                <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
                  <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-3xl">
                      <span className="kicker">{sectionData.title}</span>
                      <h2 className="mt-3 flex items-center gap-3 text-3xl font-black text-brand-900 md:text-4xl">
                        <Icon className="h-8 w-8 text-accent-pink" />
                        {section}
                      </h2>
                      <p className="mt-4 text-lg leading-relaxed text-slate-700">
                        {sectionData.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {posts.map((post) => (
                      <Link
                        key={post.slug}
                        href={`/empresario/${post.slug}`}
                        className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all hover:-translate-y-1 hover:border-accent-pink/40 hover:bg-white hover:shadow-lg"
                      >
                        <h3 className="text-xl font-black text-brand-900 group-hover:text-accent-pink">
                          {post.h1}
                        </h3>
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">{post.summary}</p>
                        <p className="mt-4 text-sm font-medium leading-relaxed text-slate-500">
                          {post.hook}
                        </p>
                        <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-900 group-hover:text-accent-pink">
                          Acessar conteudo
                          <ArrowRight className="h-4 w-4" />
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white py-20">
        <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="rounded-[2rem] bg-brand-900 p-8 text-white shadow-[0_20px_40px_-15px_rgba(11,19,60,0.4)] lg:p-10">
              <span className="kicker text-white/80">Transicao para o meio de funil</span>
              <h2 className="mt-3 text-3xl font-black md:text-4xl">
                Quando a empresa descobre a lacuna, ela precisa entender melhor o problema
              </h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-300">
                Se a leitura ja deixou claro que a empresa opera com equipe, precisa contratar
                sem improviso ou quer organizar documentos e rotina antes de ter problema, o
                proximo passo e aprofundar em paginas que detalham melhor onde a operacao
                esta exposta e o que isso muda na pratica.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/rh" className="btn-light-safe">
                  Ver hub de RH
                </Link>
                <Link href="/saude" className="btn-primary-safe">
                  Ver hub de Saude
                </Link>
                <Link href="/rh/calculadora-cnae-grau-de-risco" className="btn-outline-safe border-white/20 text-white hover:bg-white hover:text-brand-900">
                  Ver calculadora por CNAE
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
