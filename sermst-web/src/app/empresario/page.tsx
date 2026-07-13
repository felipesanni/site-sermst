import Link from 'next/link';
import type { Metadata } from 'next';
import {
  ArrowRight,
  BadgeCheck,
  BriefcaseBusiness,
  Building2,
  Route,
  SearchCheck,
  ShieldCheck,
  Users,
  WalletCards,
} from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';
import { empresarioSEO, empresarioSections } from '@/lib/data/seo-content';

export const metadata: Metadata = {
  title: 'Guia do empresário: CNPJ, MEI, Simples Nacional e mais | SERMST',
  description:
    'Guias claros sobre CNPJ, MEI, Simples Nacional, nota fiscal, contrato social, folha de pagamento, alvará e outras dúvidas de quem tem uma empresa.',
  alternates: {
    canonical: 'https://sermst.com.br/empresario',
  },
  openGraph: {
    title: 'Guia do empresário | Conceitos para entender e organizar uma empresa',
    description:
      'Respostas diretas sobre abertura, cadastros, impostos, dinheiro, funcionários, licenças e fiscalização.',
    url: 'https://sermst.com.br/empresario',
    type: 'website',
    locale: 'pt_BR',
  },
};

const sectionCopy = {
  'Abertura e cadastro': {
    icon: Building2,
    title: 'Abertura e cadastro',
    description:
      'CNPJ, inscrição estadual, tipos de empresa, contrato social, razão social, capital e licenciamento inicial.',
  },
  'MEI, impostos e dinheiro': {
    icon: WalletCards,
    title: 'MEI, impostos e dinheiro',
    description:
      'Explicações sobre Simples Nacional, nota fiscal do MEI, pró-labore e o trabalho da contabilidade.',
  },
  'Funcionários e gestão': {
    icon: Users,
    title: 'Funcionários e gestão',
    description:
      'O que muda quando o negócio contrata, como funciona a folha e quais direitos entram na relação de emprego.',
  },
  'Licenças e fiscalização': {
    icon: BadgeCheck,
    title: 'Licenças e fiscalização',
    description:
      'Guias para entender alvará, vigilância sanitária, risco da atividade e autorizações do estabelecimento.',
  },
} as const;

const featuredSlugs = [
  'simples-nacional',
  'nota-fiscal-mei',
  'inscricao-estadual',
  'contrato-social',
  'razao-social',
  'folha-de-pagamento',
];

const hubNextSteps = [
  {
    icon: SearchCheck,
    eyebrow: '1. Faça um diagnóstico',
    title: 'Descubra o grau de risco da empresa',
    description:
      'Consulte o CNAE pelo CNPJ e veja as primeiras referências de CIPA, SESMT e obrigações de SST.',
    href: '/rh/calculadora-cnae-grau-de-risco',
    label: 'Calcular grau de risco',
  },
  {
    icon: Route,
    eyebrow: '2. Entenda a rotina',
    title: 'Veja como funciona a gestão de SST',
    description:
      'Entenda como riscos, documentos, exames, treinamentos e eSocial precisam conversar ao longo do ano.',
    href: '/saude/gestao-sst',
    label: 'Conhecer a gestão de SST',
  },
  {
    icon: ShieldCheck,
    eyebrow: '3. Organize a solução',
    title: 'Compare os planos para sua empresa',
    description:
      'Simule pelo número de funcionários e veja como reunir documentos, exames, vencimentos e eSocial.',
    href: '/assinaturas',
    label: 'Ver planos e valores',
  },
];

export default function EmpresarioPage() {
  const posts = Object.entries(empresarioSEO).map(([slug, data]) => ({ slug, ...data }));
  const groupedPosts = empresarioSections.map((section) => ({
    section,
    posts: posts.filter((post) => post.section === section),
  }));
  const featuredPosts = featuredSlugs.map((slug) => ({ slug, ...empresarioSEO[slug] }));
  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    '@id': 'https://sermst.com.br/empresario#collection',
    url: 'https://sermst.com.br/empresario',
    name: 'Guia do empresário',
    description:
      'Guias sobre CNPJ, MEI, Simples Nacional, nota fiscal, contrato social, folha de pagamento, alvará e outras dúvidas de quem tem uma empresa.',
    inLanguage: 'pt-BR',
    isPartOf: {
      '@type': 'WebSite',
      '@id': 'https://sermst.com.br/#website',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://sermst.com.br/#organization',
      name: 'SERMST',
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListOrder: 'https://schema.org/ItemListUnordered',
      numberOfItems: posts.length,
      itemListElement: posts.map((post, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Article',
          '@id': `https://sermst.com.br/empresario/${post.slug}#article`,
          url: `https://sermst.com.br/empresario/${post.slug}`,
          headline: post.h1,
          description: post.summary,
        },
      })),
    },
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(collectionSchema).replace(/</g, '\\u003c'),
        }}
      />
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', item: 'https://sermst.com.br' },
          { name: 'Empresário' },
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
              Guia do empresário
            </span>
            <h1 className="h1-standard mb-8 max-w-5xl text-white">
              Entenda os conceitos que fazem parte da vida de uma empresa
            </h1>
            <p className="max-w-4xl border-l-4 border-accent-pink pl-6 text-xl font-medium leading-relaxed text-slate-300 md:pl-10 md:text-2xl">
              CNPJ, Simples Nacional, nota fiscal, contrato social, folha de pagamento e
              licenças aparecem em momentos diferentes. Aqui você encontra explicações diretas
              para saber o que cada termo significa e onde conferir a regra oficial.
            </p>
          </FadeIn>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeIn direction="right">
            <div className="surface-panel h-full">
              <span className="kicker">Comece pela sua dúvida</span>
              <h2 className="mb-5 text-3xl font-black text-brand-900 md:text-4xl">
                Uma empresa usa vários cadastros, nomes e documentos
              </h2>
              <div className="space-y-4 text-lg leading-relaxed text-slate-700">
                <p>
                  Ter CNPJ não é o mesmo que ter inscrição estadual. Ser uma microempresa não é
                  o mesmo que optar pelo Simples Nacional. Pró-labore também não é salário nem
                  distribuição de lucro. Cada termo responde a uma parte diferente do negócio.
                </p>
                <p>
                  Os guias desta página começam pela definição, mostram as diferenças que mais
                  confundem e indicam fontes oficiais para você confirmar as regras atuais.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.08}>
            <div className="surface-panel-muted h-full">
              <span className="kicker">Como usar este guia</span>
              <h2 className="mb-5 text-2xl font-black text-brand-900">
                Leia primeiro a resposta curta
              </h2>
              <div className="space-y-4 text-slate-700">
                <p>
                  Cada conteúdo abre com uma resposta direta e segue com exemplos, cuidados e
                  perguntas frequentes. No final, você encontra links para os canais do governo
                  relacionados ao assunto.
                </p>
                <p>
                  Regras tributárias, trabalhistas e de licenciamento podem mudar ou variar por
                  local e atividade. Quando a decisão tiver impacto jurídico ou financeiro,
                  confirme o caso com o órgão responsável e com o profissional que acompanha a
                  empresa.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-6 pb-16 lg:px-8">
        <FadeIn direction="up">
          <div className="rounded-[2rem] border border-brand-900 bg-white p-8 shadow-sm lg:p-10">
            <span className="kicker">Dúvidas frequentes</span>
            <h2 className="mb-4 text-3xl font-black text-brand-900 md:text-4xl">
              Guias para começar
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-700">
              Estes são alguns dos assuntos mais procurados por quem está abrindo uma empresa ou
              tentando entender melhor a rotina do negócio.
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
                  <div className="mb-8 max-w-3xl">
                    <span className="kicker">{sectionData.title}</span>
                    <h2 className="mt-3 flex items-center gap-3 text-3xl font-black text-brand-900 md:text-4xl">
                      <Icon className="h-8 w-8 text-accent-pink" />
                      {section}
                    </h2>
                    <p className="mt-4 text-lg leading-relaxed text-slate-700">
                      {sectionData.description}
                    </p>
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
                        <span className="mt-5 inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-brand-900 group-hover:text-accent-pink">
                          Ler explicação
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

      <section
        aria-labelledby="proximo-passo-hub-empresario"
        className="relative overflow-hidden bg-brand-900 px-6 py-20 text-white lg:px-8 lg:py-24"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(227,27,69,0.2),transparent_36%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)] bg-[size:24px_24px]" />

        <div className="relative z-10 mx-auto max-w-[1280px]">
          <FadeIn direction="up">
            <div className="mb-12 max-w-4xl">
              <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
                Próximo passo
              </span>
              <h2
                id="proximo-passo-hub-empresario"
                className="text-3xl font-black leading-tight text-white md:text-5xl"
              >
                Da dúvida sobre a empresa para uma rotina mais organizada
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-300">
                Se o conceito já ficou claro, avance conforme o momento da sua empresa. Comece
                pelo diagnóstico, entenda o impacto na operação e veja a solução quando ela fizer
                sentido.
              </p>
            </div>

            <ol className="grid gap-5 lg:grid-cols-3">
              {hubNextSteps.map((step, index) => {
                const Icon = step.icon;
                const isConversion = index === hubNextSteps.length - 1;

                return (
                  <li key={step.href}>
                    <Link
                      href={step.href}
                      className={
                        isConversion
                          ? 'group flex h-full flex-col rounded-[1.75rem] border-2 border-accent-pink bg-white p-7 text-brand-900 shadow-[0_24px_60px_-32px_rgba(227,27,69,0.8)] transition-transform hover:-translate-y-1'
                          : 'group flex h-full flex-col rounded-[1.75rem] border border-white/15 bg-white/[0.07] p-7 text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-white/30 hover:bg-white/[0.11]'
                      }
                    >
                      <div
                        className={
                          isConversion
                            ? 'mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-pink text-white'
                            : 'mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-accent-pink'
                        }
                      >
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p
                        className={
                          isConversion
                            ? 'text-xs font-black uppercase tracking-[0.15em] text-accent-pink'
                            : 'text-xs font-black uppercase tracking-[0.15em] text-white/60'
                        }
                      >
                        {step.eyebrow}
                      </p>
                      <h3
                        className={
                          isConversion
                            ? 'mt-3 text-2xl font-black leading-snug text-brand-900'
                            : 'mt-3 text-2xl font-black leading-snug text-white'
                        }
                      >
                        {step.title}
                      </h3>
                      <p
                        className={
                          isConversion
                            ? 'mt-4 flex-1 leading-relaxed text-slate-600'
                            : 'mt-4 flex-1 leading-relaxed text-slate-300'
                        }
                      >
                        {step.description}
                      </p>
                      <span
                        className={
                          isConversion
                            ? 'mt-6 inline-flex items-center gap-2 font-black text-accent-pink'
                            : 'mt-6 inline-flex items-center gap-2 font-black text-white group-hover:text-accent-pink'
                        }
                      >
                        {step.label}
                        <ArrowRight
                          className="h-5 w-5 transition-transform group-hover:translate-x-1"
                          aria-hidden="true"
                        />
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </FadeIn>
        </div>
      </section>
    </main>
  );
}
