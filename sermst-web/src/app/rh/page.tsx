import { rhDoresSEO } from '@/lib/data/seo-content';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/fade-in';
import { Gavel, AlertTriangle, ArrowRight } from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';


export const dynamic = 'force-static';

export const metadata = {
  title: 'Guia de SST para RH e DP | eSocial, multas e compliance | SERMST',
  description:
    'Conteúdo para RH e DP sobre eSocial SST, multas, ASO, S-2220, S-2240 e processos de medicina do trabalho para empresas.',

  alternates: {
    canonical: 'https://sermst.com.br/rh',
  },
  openGraph: {
    title: 'Guia de SST para RH e DP | eSocial, multas e compliance | SERMST',
    description:
      'Recursos práticos para profissionais de RH e DP que precisam entender obrigações SST, eSocial, admissão, demissão e conformidade trabalhista.',
    url: 'https://sermst.com.br/rh',
    type: 'website',
    locale: 'pt_BR',
  },
};

export default function RHIndexPage() {
  const dores = Object.entries(rhDoresSEO).map(([slug, data]) => ({ slug, ...data }));

  return (
    <main className="min-h-screen bg-slate-50">
      <BreadcrumbJsonLd items={[{ name: 'Início', item: 'https://sermst.com.br' }, { name: 'RH e Departamento Pessoal' }]} />
      <header className="bg-brand-900 py-28 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/site/cubes.png')]" />
        <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 relative z-10">
          <FadeIn direction="up">
            <span className="inline-block bg-accent-pink/10 border border-accent-pink/20 text-accent-pink font-black text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6">
              Conteúdo para RH e Departamento Pessoal
            </span>
            <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
              Gestão de eSocial e SST <br />
              <span className="text-accent-pink">para RH e DP</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl font-medium border-l-4 border-accent-pink pl-6 md:pl-10 leading-relaxed">
              Este hub existe para responder a dor operacional do RH: admissão travada, evento fora do prazo, documento incoerente, retrabalho com ASO e medo de multa automática no eSocial.
            </p>
          </FadeIn>
        </div>
      </header>

      <section className="py-20 max-w-[1280px] w-full mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
          <FadeIn direction="right">
            <div className="bg-white border border-slate-200 rounded-[2rem] p-8 lg:p-10 shadow-sm">
              <span className="text-accent-pink font-black text-xs uppercase tracking-[0.2em] mb-4 block">
                Leitura estratégica
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-brand-900 mb-6">
                O que o RH realmente precisa controlar em SST
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-slate-700">
                <p>
                  Quando uma empresa procura por eSocial SST, S-2220, S-2240, medicina do trabalho ou multa trabalhista, está quase sempre tentando resolver um problema prático do dia a dia. O RH quer contratar sem gargalo, o DP quer evitar erro de prazo, e a direção quer reduzir exposição a risco jurídico e fiscal.
                </p>
                <p>
                  Por isso este hub é estruturado como conteúdo de decisão. Em vez de falar apenas em norma, conecta saúde ocupacional, documentação obrigatória, ASO, PGR, PCMSO e envio de eventos a uma linguagem útil para quem precisa operar o processo.
                </p>
                <p>
                  O resultado é prático: você entende mais rápido se precisa de orientação, de regularização ou de proposta comercial — e a SERMST entrega o que cabe ao seu cenário, sem empurrar serviço genérico.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <div className="bg-white border border-slate-200 rounded-[2rem] p-8 lg:p-10 shadow-sm">
              <span className="text-accent-pink font-black text-xs uppercase tracking-[0.2em] mb-4 block">
                Atalho comercial
              </span>
              <h2 className="text-2xl font-black text-brand-900 mb-6">
                Se o problema já está na mesa, fale com a SERMST
              </h2>
              <p className="text-slate-600 leading-relaxed mb-8">
                Para empresas com evento em atraso, rotina de SST desorganizada ou necessidade de diagnóstico rápido, o melhor próximo passo não é continuar pesquisando. É organizar o fluxo com quem já trabalha isso todos os dias, antes que a falha vire multa, atraso de admissão ou desgaste com a diretoria.
              </p>
              <a
                href="https://wa.me/5511915146447?text=Preciso%20de%20ajuda%20com%20eSocial%20SST%20na%20minha%20empresa"
                className="btn-dark-safe"
              >
                Falar sobre eSocial SST
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ── Destaque: Calculadora CNAE ── */}
      <section className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 pb-12">
        <FadeIn direction="up">
          <Link
            href="/rh/calculadora-cnae-grau-de-risco"
            className="group flex flex-col sm:flex-row items-center gap-6 rounded-2xl border-2 border-brand-900 bg-brand-900 p-8 text-white hover:bg-brand-900/90 transition-all"
          >
            <div className="shrink-0 rounded-full bg-white/10 p-4">
              <AlertTriangle className="h-8 w-8 text-accent-pink" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <span className="mb-1 block text-[10px] font-black uppercase tracking-widest text-accent-pink">
                Ferramenta gratuita
              </span>
              <h2 className="text-xl font-black leading-snug md:text-2xl">
                Calculadora CNAE × Grau de Risco
              </h2>
              <p className="mt-1 text-sm text-slate-300">
                Consulte o grau de risco do seu CNAE e veja RAT, SESMT, periodicidade de exames e NRs aplicáveis.
              </p>
            </div>
            <div className="shrink-0 rounded-full bg-white/10 p-3 transition-all group-hover:translate-x-1">
              <ArrowRight className="h-5 w-5" />
            </div>
          </Link>
        </FadeIn>
      </section>

      <section className="pb-24 max-w-[1280px] w-full mx-auto px-6 lg:px-8">
        <div className="max-w-5xl">
          <h2 className="text-3xl font-black text-brand-900 mb-12 flex items-center gap-4">
            <AlertTriangle className="w-8 h-8 text-accent-pink" />
            Tópicos críticos de fiscalização e rotina
          </h2>
          <div className="space-y-6">
            {dores.map((item, idx) => (
              <FadeIn key={item.slug} delay={idx * 0.1}>
                <Link
                  href={`/rh/${item.slug}`}
                  className="group block bg-white border border-slate-200 p-8 rounded-2xl hover:shadow-2xl hover:-translate-x-2 transition-all flex flex-col md:flex-row items-center gap-8"
                >
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center text-brand-900 group-hover:bg-brand-900 group-hover:text-white transition-all shrink-0">
                    <Gavel className="w-8 h-8" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-brand-900 mb-2 group-hover:text-accent-pink transition-colors">
                      {item.h1}
                    </h3>
                    <p className="text-slate-600 line-clamp-3">{item.hook}</p>
                    <p className="mt-4 text-sm font-semibold text-slate-500">
                      Leitura recomendada para RH, DP e gestão que precisam decidir com mais segurança.
                    </p>
                  </div>
                  <div className="bg-slate-100 p-3 rounded-full text-brand-900 opacity-0 group-hover:opacity-100 transition-all">
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
