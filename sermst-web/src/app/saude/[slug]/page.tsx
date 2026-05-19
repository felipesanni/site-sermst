import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Bookmark, HeartPulse, HelpCircle, ShieldCheck } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { saúdeSEO } from '@/lib/data/seo-content';
import { buildFrequentFaqs } from '@/lib/faq';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';

export function generateStaticParams() {
  return Object.keys(saúdeSEO).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;
  const data = saúdeSEO[slug];
  if (!data) return { title: 'Conteúdo não encontrado | SERMST' };
  return {
    title: data.h1,
    description: data.hook,
    alternates: { canonical: `https://sermst.com.br/saude/${slug}` },
    openGraph: {
      title: data.h1,
      description: data.hook,
      url: `https://sermst.com.br/saude/${slug}`,
      type: 'article',
      locale: 'pt_BR',
    },
  };
}

export default async function SaúdeHubPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const data = saúdeSEO[slug];
  if (!data) notFound();
  const frequentFaqs = buildFrequentFaqs(data.geoOpt.faq, {
    context: 'saúde',
    topic: data.h1,
  });

  return (
    <article className="min-h-screen bg-white">
      <BreadcrumbJsonLd items={[{ name: 'Início', item: 'https://sermst.com.br' }, { name: 'Saúde Ocupacional', item: 'https://sermst.com.br/saude' }, { name: data.h1 }]} />
      <header className="relative overflow-hidden bg-brand-900 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(248,67,101,0.1),transparent)]"></div>
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8">
          <div className="max-w-3xl">
            <FadeIn direction="up">
              <span className="mb-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-accent-pink">
                <HeartPulse className="h-4 w-4" /> Hub de Saúde SST
              </span>
              <h1 className="mb-8 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                {data.h1}
              </h1>
              <p className="text-xl font-medium leading-relaxed text-slate-300 md:text-2xl">
                {data.hook}
              </p>
            </FadeIn>
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[1280px] px-6 py-20 lg:px-8">
        <div className="flex flex-col gap-16 lg:flex-row">
          <main className="max-w-3xl flex-1">
            <FadeIn delay={0.2}>
              <div className="prose prose-lg prose-slate max-w-none prose-a:text-accent-pink prose-h2:font-black prose-h2:text-brand-900">
                <h2 className="flex items-center gap-3">
                  <Bookmark className="h-8 w-8 text-accent-pink" />
                  Leitura prática para decisão
                </h2>
                <p className="mb-10 rounded-xl border-l-4 border-brand-500 bg-slate-50 p-6 text-xl font-medium italic leading-relaxed text-brand-900/80">
                  {data.content.dor}
                </p>

                <p className="mb-10">{data.content.solução}</p>

                <p>
                  Em empresas que dependem de ritmo de contratação, estabilidade operacional e rotina ocupacional minimamente organizada, saúde do trabalhador não pode ficar separada da realidade do negócio. Quando o tema fica solto, o impacto aparece em atraso, afastamento, retrabalho e mais exposicao jurídica.
                </p>
                <p>
                  Por isso, este conteúdo não tenta apenas explicar um conceito. Ele ajuda o RH, a lideranca e a diretoria a enxergar quando a dor ja saiu do campo teórico e passou a exigir organizacao comercial, técnica e documental.
                </p>

                <div className="relative my-12 overflow-hidden rounded-2xl bg-brand-900 p-10 text-white shadow-2xl">
                  <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-accent-pink/20 blur-3xl"></div>
                  <h3 className="mb-6 mt-0 text-2xl font-black text-white">O que este tema protege na prática</h3>
                  <ul className="m-0 grid gap-4 p-0 list-none">
                    {data.content.beneficios.map((ben, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 font-black text-accent-pink">+</span>
                        <span className="text-slate-200">{ben}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          </main>

          <aside className="w-full space-y-8 lg:w-[380px]">
            <FadeIn direction="left" delay={0.4}>
              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                <ShieldCheck className="mb-6 h-10 w-10 text-brand-500" />
                <h3 className="mb-4 text-xl font-black text-brand-900">Parecer do especialista</h3>
                <blockquote className="mb-6 italic text-slate-600">
                  &quot;{data.geoOpt.expertQuote.text}&quot;
                </blockquote>
                <div className="flex flex-col">
                  <span className="font-bold text-brand-900">{data.geoOpt.expertQuote.author}</span>
                  <span className="text-sm uppercase tracking-widest text-slate-500">{data.geoOpt.expertQuote.role}</span>
                </div>
              </div>

              <div className="mt-8 rounded-2xl bg-brand-500 p-8 text-white shadow-xl">
                <h3 className="mb-4 text-xl font-black">Quando vale sair da leitura e ir para a acao</h3>
                <p className="mb-6 text-sm leading-relaxed text-white/80">
                  Se a sua empresa ja esta lidando com afastamento, admissão lenta, duvida de PCMSO ou risco de falha ocupacional, o melhor passo e organizar o fluxo com a SERMST.
                </p>
                <Link href="/contato" className="btn-light-safe flex w-full text-brand-500">
                  FALAR COM A SERMST
                </Link>
              </div>
            </FadeIn>
          </aside>
        </div>
      </div>

      <section className="border-t border-slate-100 bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
          <div className="max-w-3xl">
            <h3 className="mb-12 flex items-center gap-3 text-3xl font-black text-brand-900">
              <HelpCircle className="h-8 w-8 text-accent-pink" /> Perguntas e respostas
            </h3>
            <div className="space-y-10">
              {frequentFaqs.map((faq, idx) => (
                <div key={idx} className="border-b border-slate-200 pb-8 last:border-0 last:pb-0">
                  <h4 className="mb-3 text-xl font-bold text-brand-900">{faq.q}</h4>
                  <p className="border-l-4 border-slate-200 pl-6 text-slate-600">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
