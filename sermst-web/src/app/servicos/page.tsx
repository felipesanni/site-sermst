import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, ShieldCheck, Zap } from 'lucide-react';
import { FadeIn } from '@/components/ui/fade-in';
import { servicosSEO } from '@/lib/data/seo-content';
import { siteImages } from '@/lib/site-images';
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
  const servicos = Object.entries(servicosSEO).map(([slug, data]) => ({ slug, ...data }));

  return (
    <main className="min-h-screen bg-slate-50">
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', item: 'https://sermst.com.br' },
          { name: 'Serviços' },
        ]}
      />

      <header className="relative overflow-hidden bg-brand-900 py-28 text-white">
        <div className="absolute inset-0 opacity-18">
          <Image
            src={siteImages.home.heroClinic.src}
            alt={siteImages.home.heroClinic.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900/96 via-brand-900/88 to-brand-900/62" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 right-0 h-[520px] w-[520px] rounded-full bg-accent-pink/20 blur-[120px]" />

        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8">
          <FadeIn direction="up">
            <span className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-5 py-3 text-xs font-black uppercase tracking-[0.2em] text-white/90">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-pink text-white shadow-[0_0_20px_rgba(227,27,69,0.35)]">
                <ShieldCheck className="h-4 w-4" />
              </span>
              Exames, laudos e rotina ocupacional
            </span>
            <h1 className="h1-standard mb-8 max-w-4xl text-white">
              Serviços de SST para empresas
              <br />
              <span className="text-accent-pink">que precisam de operação sem gargalo</span>
            </h1>
            <p className="max-w-4xl border-l-4 border-accent-pink pl-6 text-xl font-medium leading-relaxed text-slate-300 md:pl-10 md:text-2xl">
              Soluções em Saúde e Segurança do Trabalho para empresas que precisam contratar,
              regularizar documentos e manter o eSocial sob controle sem travar a operação.
            </p>
          </FadeIn>
        </div>
      </header>

      <section className="mx-auto w-full max-w-[1280px] px-6 pt-16 pb-4 lg:px-8">
        <div className="max-w-3xl">
          <p className="mb-4 leading-relaxed text-slate-600">
            A SERMST oferece serviços completos de Medicina e Segurança do Trabalho para empresas
            de todos os portes em São Paulo e Grande ABC. Do exame admissional expresso, com ASO
            emitido no mesmo dia e laboratório clínico próprio, até a gestão documental de PGR,
            PCMSO, LTCAT e eSocial, cada serviço é estruturado para reduzir risco e manter a
            empresa em conformidade com o Ministério do Trabalho.
          </p>
          <p className="mb-4 leading-relaxed text-slate-600">
            Empresas com funcionários CLT têm obrigações periódicas de SST que variam conforme o
            CNAE, o grau de risco e o número de empregados. Exame periódico, envio do S-2220,
            atualização de PCMSO e PGR e renovação de treinamentos obrigatórios fazem parte do
            ciclo anual de conformidade de qualquer empresa regularmente constituída.
          </p>
          <p className="leading-relaxed text-slate-600">
            Não sabe por onde começar? Use a Calculadora de Risco abaixo para identificar as
            obrigações de SST com base no CNAE da sua empresa antes de escolher o serviço.
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
              <h2 className="text-2xl font-black text-brand-900">
                Não sabe ainda quais obrigações se aplicam ao seu caso?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Use a Calculadora de Risco para consultar o CNPJ ou CNAE da empresa, estimar o
                grau de risco, o enquadramento de NR-05/CIPA e chegar ao serviço certo com mais
                clareza.
              </p>
            </div>
            <Link href="/rh/calculadora-cnae-grau-de-risco" className="btn-dark-safe w-full lg:w-auto">
              Abrir Calculadora de Risco
            </Link>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {servicos.map((servico, idx) => (
            <FadeIn key={servico.slug} delay={idx * 0.1}>
              <Link href={`/servicos/${servico.slug}`} className="card-clean group block">
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-accent-pink transition-colors group-hover:bg-accent-pink group-hover:text-white">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <Zap className="h-5 w-5 text-slate-200 transition-colors group-hover:text-accent-pink" />
                </div>
                <h3 className="mb-4 text-2xl font-black text-brand-900 transition-colors group-hover:text-accent-pink">
                  {servico.h1}
                </h3>
                <p className="mb-8 line-clamp-3 text-slate-600">{servico.hook}</p>
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
