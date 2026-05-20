import Link from 'next/link';
import { ChevronRight, ShieldCheck, Zap } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { servicosSEO } from '@/lib/data/seo-content';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';

export const metadata = {
  title: 'Exames e Laudos Ocupacionais | SERMST',
  description:
    'Central de serviços da SERMST em Medicina e Segurança do Trabalho: exames admissionais, periódicos e gestão de PGR, PCMSO, LTCAT e eSocial.',
  alternates: {
    canonical: 'https://sermst.com.br/servicos',
  },
  openGraph: {
    title: 'Exames e Laudos Ocupacionais | SERMST',
    description:
      'Central de serviços da SERMST em Medicina e Segurança do Trabalho: exames admissionais, periódicos e gestão de PGR, PCMSO, LTCAT e eSocial.',
    url: 'https://sermst.com.br/servicos',
    type: 'website' as const,
    locale: 'pt_BR',
  },
};

export default function ServicosIndexPage() {
  const serviços = Object.entries(servicosSEO).map(([slug, data]) => ({ slug, ...data }));

  return (
    <main className="min-h-screen bg-slate-50">
      <BreadcrumbJsonLd items={[{ name: 'Início', item: 'https://sermst.com.br' }, { name: 'Serviços' }]} />
      <header className="bg-brand-900 py-14 text-white md:py-20 lg:py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
          <FadeIn direction="down" viewport={false}>
            <h1 className="h1-standard mb-5 md:mb-6">Serviços para exames, laudos e rotina SST</h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Soluções completas em Saúde e Segurança do Trabalho para empresas que precisam contratar, regularizar documentos e manter o eSocial sob controle sem travar a operação.
            </p>
          </FadeIn>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[1280px] px-6 pt-16 pb-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-slate-600 leading-relaxed mb-4">
            A SERMST oferece serviços completos de Medicina e Segurança do Trabalho para empresas de todos os portes
            em São Paulo e Grande ABC. Do exame admissional expresso — com ASO emitido no mesmo dia e laboratório
            clínico próprio — até a gestão documental de PGR, PCMSO, LTCAT e eSocial, cada serviço é estruturado para
            eliminar o passivo trabalhista e manter a empresa em conformidade com o Ministério do Trabalho.
          </p>
          <p className="text-slate-600 leading-relaxed mb-4">
            Empresas com funcionários CLT têm obrigações periódicas de SST que variam conforme o CNAE, o grau de risco
            e o número de empregados. O exame periódico, o envio do S-2220 ao eSocial após cada ASO, a atualização
            do PCMSO e do PGR, e a renovação dos treinamentos obrigatórios de NRs fazem parte do ciclo anual de
            conformidade de qualquer empresa regularmente constituída.
          </p>
          <p className="text-slate-600 leading-relaxed">
            Não sabe por onde começar? Use a Calculadora de Grau de Risco abaixo para identificar as obrigações de
            SST com base no CNAE da sua empresa antes de escolher o serviço.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1280px] px-6 py-20 lg:px-8">
        <div className="mb-8 rounded-[2rem] border border-brand-900/10 bg-white p-6 shadow-sm">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <span className="mb-3 inline-block text-[10px] font-black uppercase tracking-[0.18em] text-accent-pink">
                Diagnóstico antes do orçamento
              </span>
              <h2 className="text-2xl font-black text-brand-900">Não sabe ainda quais obrigações se aplicam ao seu caso?</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Use a Calculadora de Risco para consultar o CNPJ ou CNAE da empresa, estimar o grau de risco, o enquadramento de NR-05/CIPA e chegar ao serviço certo com mais clareza.
              </p>
            </div>
            <Link href="/rh/calculadora-cnae-grau-de-risco" className="btn-dark-safe w-full lg:w-auto">
              Abrir Calculadora de Risco
            </Link>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {serviços.map((serviço, idx) => (
            <FadeIn key={serviço.slug} delay={idx * 0.1}>
              <Link href={`/servicos/${serviço.slug}`} className="card-clean group block">
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-accent-pink transition-colors group-hover:bg-accent-pink group-hover:text-white">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <Zap className="h-5 w-5 text-slate-200 transition-colors group-hover:text-accent-pink" />
                </div>
                <h3 className="mb-4 text-2xl font-black text-brand-900 transition-colors group-hover:text-accent-pink">{serviço.h1}</h3>
                <p className="mb-8 line-clamp-3 text-slate-600">{serviço.hook}</p>
                <div className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-accent-pink">
                  Ver detalhes do serviço <ChevronRight className="h-4 w-4" />
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </main>
  );
}
