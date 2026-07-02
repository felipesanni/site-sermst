import { Metadata } from 'next';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { FadeIn } from '@/components/ui/fade-in';
import { trainingsData, type Training } from '@/lib/data/treinamentos-data';
import { notFound } from 'next/navigation';
import { Clock, Users, BookOpen, CheckCircle, ArrowRight, Shield } from 'lucide-react';

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return (trainingsData as Training[]).map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const training = (trainingsData as Training[]).find((t) => t.slug === slug);
  if (!training) return { title: 'Treinamento não encontrado' };
  
  return {
    title: `${training.title} | Treinamentos NR | SERMST`,
    description: training.summary,
    alternates: { canonical: `https://sermst.com.br/treinamentos/${training.slug}` },
    openGraph: {
      title: `${training.title} | Treinamentos NR | SERMST`,
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
      availability: 'https://schema.org/InStock',
      url: 'https://sermst.com.br/contato',
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'Onsite',
      courseWorkload: training.workload,
      location: { '@type': 'Place', name: 'SERMST — São Paulo e in company' },
    },
  };

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

              <div className="mt-12 pt-12 border-t border-white/10 uppercase">
                <a href={`https://wa.me/5511915146447?text=Olá, gostaria de um orçamento para o treinamento ${training.title}`} 
                   className="btn-primary-safe flex w-full gap-3 group">
                  Solicitar Orçamento <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </a>
              </div>
            </FadeIn>
          </aside>
        </div>
      </div>
    </main>
  );
}
