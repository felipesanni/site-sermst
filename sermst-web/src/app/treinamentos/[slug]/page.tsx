import { Metadata } from 'next';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { FadeIn } from '@/components/ui/fade-in';
import { trainingsData, type Training } from '@/lib/data/treinamentos-data';
import { notFound } from 'next/navigation';
import {
  Clock,
  Users,
  BookOpen,
  CheckCircle,
  ArrowRight,
  Shield,
  Monitor,
  MapPin,
  CalendarDays,
} from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return (trainingsData as Training[]).map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const training = (trainingsData as Training[]).find((t) => t.slug === slug);
  if (!training) return { title: 'Treinamento não encontrado' };
  
  return {
    title: `${training.title} | SERMST`,
    description: training.summary,
    alternates: { canonical: `https://sermst.com.br/treinamentos/${training.slug}` },
    openGraph: {
      title: `${training.title} | SERMST`,
      description: training.summary,
      url: `https://sermst.com.br/treinamentos/${training.slug}`,
      type: 'article',
      locale: 'pt_BR',
    },
  };
}

export default async function TrainingPage({ params }: PageProps) {
  const { slug } = await params;
  const training = (trainingsData as Training[]).find((t) => t.slug === slug);
  if (!training) notFound();

  const pageUrl = `https://sermst.com.br/treinamentos/${training.slug}`;
  const whatsappMessage =
    training.whatsappMessage ?? `Olá, gostaria de um orçamento para o treinamento ${training.title}`;
  const whatsappHref = `https://wa.me/5511915146447?text=${encodeURIComponent(whatsappMessage)}`;
  const courseInstances = [
    {
      '@type': 'CourseInstance',
      courseMode: 'Onsite',
      courseWorkload: training.workload,
      location: { '@type': 'Place', name: 'SERMST: São Paulo e in company' },
    },
    ...(!training.presentialOnly
      ? [
          {
            '@type': 'CourseInstance',
            courseMode: 'Online',
            courseWorkload: training.workload,
            url: 'https://sermstgestao.formasegead.com/',
          },
        ]
      : []),
  ];

  const courseSchema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    '@id': `${pageUrl}#course`,
    name: training.title,
    description: training.summary,
    url: pageUrl,
    provider: { '@id': 'https://sermst.com.br/#organization' },
    timeRequired: training.workload,
    audience: { '@type': 'Audience', audienceType: training.targetAudience },
    syllabusSections: training.syllabus.map((item) => ({
      '@type': 'Syllabus',
      name: item,
    })),
    offers: {
      '@type': 'Offer',
      category: 'Treinamento corporativo de SST',
      availability: training.scheduleNote
        ? 'https://schema.org/LimitedAvailability'
        : 'https://schema.org/InStock',
      url: pageUrl,
    },
    hasCourseInstance: courseInstances,
  };

  const faqSchema = training.faq?.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: training.faq.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      }
    : null;

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://sermst.com.br/' },
      { '@type': 'ListItem', position: 2, name: 'Treinamentos', item: 'https://sermst.com.br/servicos/treinamentos-nrs-cipa-brigada' },
      { '@type': 'ListItem', position: 3, name: training.title, item: pageUrl },
    ],
  };

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <Breadcrumbs items={[
          { label: 'Home', href: '/' },
          { label: 'Treinamentos', href: '/servicos/treinamentos-nrs-cipa-brigada' },
          { label: training.title, href: '#' }
        ]} />

        <div className="grid lg:grid-cols-3 gap-12 mt-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <FadeIn>
              <h1 className="h1-standard mb-8 text-brand-900 leading-none tracking-tighter italic">
                {training.title}
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 font-medium leading-relaxed border-l-4 border-accent-pink pl-6">
                {training.summary}
              </p>
            </FadeIn>

            {training.description && (
              <FadeIn delay={0.15} className="prose prose-slate max-w-none">
                <h2 className="text-2xl font-black text-brand-900 mb-6">Por que este treinamento é obrigatório?</h2>
                {training.description.split('\n\n').map((para: string, i: number) => (
                  <p key={i} className="text-slate-600 leading-relaxed mb-4">{para}</p>
                ))}
              </FadeIn>
            )}

            {training.slug === 'nr-18-seguranca-construcao-civil' && (
              <FadeIn delay={0.17} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
                <span className="kicker">Base normativa e aplicação</span>
                <h2 className="mt-3 text-2xl font-black text-brand-900 md:text-3xl">
                  Treinamento NR-18, PGR e controles do canteiro
                </h2>
                <p className="mt-4 leading-relaxed text-slate-700">
                  O treinamento faz parte de uma rotina maior. Consulte a regra completa da NR-18, confira como o PGR acompanha a fase da obra e veja a opção de contratação corporativa para organizar turmas e reciclagens.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <Link href="/normas/nr-18-construcao-civil" className="btn-primary-safe">
                    Ler o guia da NR-18
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/servicos/treinamentos-nrs-cipa-brigada/sao-paulo" className="inline-flex items-center gap-2 rounded-xl border border-slate-200 px-5 py-3 font-bold text-brand-900 transition-colors hover:border-accent-pink hover:text-accent-pink">
                    Ver treinamentos para empresas
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </FadeIn>
            )}

            {training.presentialOnly && (
              <FadeIn delay={0.18} className="rounded-3xl border border-amber-200 bg-amber-50 p-7 md:p-8">
                <p className="mb-2 text-xs font-black uppercase tracking-[0.18em] text-amber-800">
                  NR-35 atualizada em 2026
                </p>
                <h2 className="mb-3 text-2xl font-black text-brand-900">
                  Capacitação obrigatoriamente presencial
                </h2>
                <p className="leading-relaxed text-slate-700">
                  A Portaria MTE nº 1.259/2026 incluiu o item 35.4.5 e tornou presenciais os
                  treinamentos previstos na NR-35. Veja quem precisa refazer ou complementar a
                  capacitação e os prazos no{' '}
                  <Link
                    href="/normas/nr-35-trabalho-em-altura"
                    className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4"
                  >
                    guia completo da NR-35 atualizada
                  </Link>
                  .
                </p>
              </FadeIn>
            )}

            <FadeIn delay={0.2} className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl border border-slate-100">
              <h2 className="text-3xl font-black text-brand-900 mb-8 flex items-center gap-4">
                <BookOpen className="w-8 h-8 text-accent-pink" />
                Conteúdo Programático
              </h2>
              <ul className="space-y-4">
                {training.syllabus.map((item: string, i: number) => (
                  <li key={i} className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 group hover:border-brand-900 transition-colors">
                    <CheckCircle className="w-6 h-6 text-brand-500 mt-0.5 shrink-0" />
                    <span className="text-slate-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>

            {training.faq?.length ? (
              <FadeIn delay={0.24} className="rounded-[2.5rem] border border-slate-200 bg-white p-8 md:p-12">
                <p className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-accent-pink">
                  Próximas turmas
                </p>
                <h2 className="mb-3 text-3xl font-black text-brand-900">
                  Dúvidas sobre o treinamento presencial de NR-35
                </h2>
                <p className="mb-8 max-w-2xl leading-relaxed text-slate-600">
                  Datas, vagas e formato da turma dependem da agenda e do número de participantes.
                  Estas são as respostas que ajudam a empresa a consultar a opção certa.
                </p>
                <div className="space-y-3">
                  {training.faq.map((item, index) => (
                    <details key={item.q} className="group faq-accordion" open={index === 0}>
                      <summary className="faq-summary">
                        <span className="faq-question">{item.q}</span>
                        <span className="faq-icon text-2xl leading-none">+</span>
                      </summary>
                      <div className="faq-answer">
                        <p>{item.a}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </FadeIn>
            ) : null}
          </div>

          {/* Sidebar / Specs */}
          <aside className="space-y-8">
            <FadeIn direction="left" className="bg-brand-900 text-white p-10 rounded-[2.5rem] shadow-2xl sticky top-32">
              <Shield className="w-12 h-12 text-accent-pink mb-8" />
              <h3 className="text-2xl font-black mb-8 leading-tight">Especificações Técnicas</h3>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-accent-pink shrink-0" />
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-slate-400 font-black mb-1">Carga Horária</span>
                    <span className="text-lg font-bold">{training.workload}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-accent-pink shrink-0" />
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-slate-400 font-black mb-1">Público-Alvo</span>
                    <span className="text-lg font-bold">{training.targetAudience}</span>
                  </div>
                </div>
              </div>

              {training.scheduleNote && (
                <div className="mt-8 rounded-2xl border border-accent-pink/30 bg-accent-pink/10 p-4">
                  <div className="flex items-start gap-3">
                    <CalendarDays className="mt-0.5 h-5 w-5 shrink-0 text-accent-pink" />
                    <div>
                      <span className="block text-sm font-black text-white">Turmas presenciais semanais</span>
                      <span className="mt-1 block text-xs leading-relaxed text-slate-300">
                        {training.scheduleNote}
                      </span>
                    </div>
                  </div>
                </div>
              )}

              <div className="mt-8 pt-8 border-t border-white/10">
                <span className="block text-xs uppercase tracking-widest text-slate-400 font-black mb-4">Modalidades disponíveis</span>
                <div className="space-y-3">
                  {!training.presentialOnly && (
                    <div className="flex items-center gap-3 rounded-xl bg-white/10 border border-white/10 px-4 py-3">
                      <Monitor className="w-5 h-5 text-accent-pink shrink-0" />
                      <div>
                        <span className="block text-sm font-black text-white">EAD: Online</span>
                        <span className="text-xs text-slate-400">Plataforma com certificado digital</span>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-3 rounded-xl bg-white/10 border border-white/10 px-4 py-3">
                    <MapPin className="w-5 h-5 text-accent-pink shrink-0" />
                    <div>
                      <span className="block text-sm font-black text-white">
                        {training.presentialOnly ? 'Exclusivamente presencial' : 'Presencial com prática'}
                      </span>
                      <span className="text-xs text-slate-400">
                        {training.presentialOnly
                          ? 'Exigência vigente da NR-35'
                          : 'In company ou na clínica SERMST'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 border-t border-white/10 pt-8">
                <a
                  href={whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary-safe flex w-full gap-3 group text-center"
                >
                  {training.ctaLabel ?? 'Solicitar orçamento'}
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </FadeIn>
          </aside>
        </div>
      </div>
    </main>
  );
}
