import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowRight, FileText, Info, ShieldCheck } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { rhDoresSEO } from '@/lib/data/seo-content';
import { buildFrequentFaqs } from '@/lib/faq';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';

export function generateStaticParams() {
  return Object.keys(rhDoresSEO).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params;
  const data = rhDoresSEO[slug];

  if (!data) return { title: 'Pagina não encontrada | SERMST' };

  return {
    title: data.h1,
    description: data.hook,
    alternates: { canonical: `https://sermst.com.br/rh/${slug}` },
    openGraph: {
      title: data.h1,
      description: data.hook,
      url: `https://sermst.com.br/rh/${slug}`,
      locale: 'pt_BR',
      type: 'article',
    },
  };
}

export default async function RHDoresPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params;
  const data = rhDoresSEO[slug];

  if (!data) notFound();
  const frequentFaqs = buildFrequentFaqs(data.geoOpt.faq, {
    context: 'rh',
    topic: data.h1,
  });

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: frequentFaqs.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.a,
      },
    })),
  };

  return (
    <article className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <BreadcrumbJsonLd items={[{ name: 'Início', item: 'https://sermst.com.br' }, { name: 'RH e DP', item: 'https://sermst.com.br/rh' }, { name: data.h1 }]} />
      <header className="border-b border-slate-200 bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
          <div className="max-w-4xl">
            <FadeIn direction="down">
              <Link href="/rh" className="mb-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent-pink hover:underline">
                <span aria-hidden="true">←</span>
                Voltar ao guia de RH
              </Link>
              <h1 className="h1-standard mb-8 text-brand-900">
                {data.h1}
              </h1>
              <p className="text-xl font-medium leading-relaxed text-slate-600 md:text-2xl">
                {data.hook}
              </p>
            </FadeIn>
          </div>
        </div>
      </header>

      <div className="mx-auto w-full max-w-[1280px] px-6 py-16 lg:px-8">
        <div className="max-w-4xl">
          <FadeIn direction="up">
            <div className="prose prose-lg prose-slate max-w-none prose-a:text-accent-pink prose-h2:font-black prose-h2:text-brand-900">
              <h2>A dor que trava a operação</h2>
              <p className="rounded-r-lg border-l-4 border-accent-pink bg-slate-50 p-4 pl-6 text-xl font-medium italic text-slate-700">
                {data.content.dor}
              </p>

              <h2 className="mt-12 flex items-center gap-2">
                <ShieldCheck className="h-8 w-8 text-green-500" />
                A resposta prática para o RH
              </h2>
              <p>{data.content.solucao}</p>
              <p>
                Em empresas que dependem de admissão rápida, documentação coerente e rotina previsível de SST, o RH não precisa só entender a norma. Precisa traduzir a exigência em processo. Por isso a ligação entre medicina do trabalho, eSocial, PGR, PCMSO e fluxo de ASO precisa estar clara — e operável.
              </p>
              <p>
                Quando isso fica resolvido, três coisas mudam: o tempo entre admissão pedida e admissão concluída cai, o risco de evento eSocial fora do prazo desaparece, e a empresa passa a ter evidência técnica para defesa em fiscalização ou ação trabalhista.
              </p>

              <div className="my-10 rounded-2xl bg-brand-900 p-8 text-white shadow-xl">
                <h3 className="mb-4 mt-0 text-2xl font-black text-white">Vantagens operacionais</h3>
                <ul className="m-0 space-y-3 p-0 list-none">
                  {data.content.beneficios.map((ben, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1 font-black text-accent-pink">+</span>
                      <span>{ben}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <blockquote className="relative mt-16 rounded-xl border-[3px] border-slate-100 bg-white p-8 shadow-lg">
                <span className="absolute -top-6 left-6 bg-white p-2">
                  <FileText className="h-8 w-8 text-brand-500" />
                </span>
                <p className="mb-6 text-2xl font-medium italic leading-snug text-brand-900">
                  &quot;{data.geoOpt.expertQuote.text}&quot;
                </p>
                <footer>
                  <strong>{data.geoOpt.expertQuote.author}</strong>
                  <span className="block text-sm text-slate-500">{data.geoOpt.expertQuote.role}</span>
                </footer>
              </blockquote>

              <hr className="my-16" />

              <div className="rounded-xl bg-slate-50 p-8">
                <h2 className="mb-8 mt-0 flex items-center gap-2 text-2xl">
                  <Info className="h-6 w-6 text-brand-500" />
                  Duvidas legais e operacionais
                </h2>
                <dl className="m-0 space-y-8 p-0">
                  {frequentFaqs.map((faq, idx) => (
                    <div key={idx}>
                      <dt className="mb-2 text-lg font-bold text-brand-900">{faq.q}</dt>
                      <dd className="m-0 border-l-2 border-slate-200 pl-4 text-slate-600">{faq.a}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="mt-20">
            <div className="flex flex-col items-start justify-between gap-6 rounded-[2rem] bg-brand-900 p-8 text-white md:flex-row md:items-center md:p-10">
              <div className="max-w-2xl">
                <h3 className="mb-3 text-2xl font-black">Se o problema ja esta afetando o RH, vale acelerar a conversa</h3>
                <p className="leading-relaxed text-slate-300">
                  A SERMST pode ajudar a organizar a rotina de SST, revisar riscos de multa e dar clareza sobre os próximos passos técnicos e operacionais.
                </p>
              </div>
              <a
                href="https://wa.me/5511915146447?text=Quero%20ajuda%20com%20eSocial%20e%20SST%20na%20minha%20empresa"
                className="btn-primary-safe-lg"
              >
                Falar com a SERMST
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </article>
  );
}
