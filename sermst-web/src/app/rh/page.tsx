import { rhDoresSEO } from '@/lib/data/seo-content';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/fade-in';
import { Gavel, AlertTriangle, ArrowRight, Syringe } from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';


export const dynamic = 'force-static';

export const metadata = {
  title: 'RH e DP: guia de SST e eSocial | SERMST',
  description:
    'Conteúdo para RH e DP sobre eSocial SST, multas, ASO, S-2220, S-2240 e processos de medicina do trabalho para empresas.',

  alternates: {
    canonical: 'https://sermst.com.br/rh',
  },
  openGraph: {
    title: 'RH e DP: guia de SST e eSocial | SERMST',
    description:
      'Recursos práticos para profissionais de RH e DP que precisam entender obrigações SST, eSocial, admissão, demissão e conformidade trabalhista.',
    url: 'https://sermst.com.br/rh',
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
      name: 'Quais eventos do eSocial SST o RH precisa enviar?',
      acceptedAnswer: { '@type': 'Answer', text: 'Os principais eventos SST no eSocial são: S-2210 (comunicação de acidente de trabalho), S-2220 (monitoramento de saúde ocupacional — ASO), S-2221 (exame toxicológico) e S-2240 (condições ambientais do trabalho — LTCAT). O S-2220 deve ser enviado até o dia 15 do mês seguinte ao exame.' },
    },
    {
      '@type': 'Question',
      name: 'Quando o RH deve emitir a CAT?',
      acceptedAnswer: { '@type': 'Answer', text: 'A CAT deve ser emitida até o primeiro dia útil seguinte ao acidente de trabalho, acidente de trajeto (quando aplicável) ou ao diagnóstico de doença ocupacional. Em caso de óbito, a comunicação deve ser imediata.' },
    },
    {
      '@type': 'Question',
      name: 'Empresa pequena é obrigada a ter PGR e PCMSO?',
      acceptedAnswer: { '@type': 'Answer', text: 'Em geral, sim. A NR-01 exige PGR de todas as empresas com empregados CLT. O PCMSO (NR-07) também é obrigatório, com possibilidade de dispensa apenas para MEI, ME e EPP de grau de risco 1 ou 2 que não identifiquem exposições ocupacionais relevantes e cumpram as obrigações digitais da NR-01.' },
    },
  ],
};

export default function RHIndexPage() {
  const dores = Object.entries(rhDoresSEO).map(([slug, data]) => ({ slug, ...data }));

  return (
    <main className="min-h-screen bg-slate-50">
      <BreadcrumbJsonLd items={[{ name: 'Início', item: 'https://sermst.com.br' }, { name: 'RH e Departamento Pessoal' }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <header className="bg-brand-900 py-28 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/site/cubes.png')]" />
        <div className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 relative z-10">
          <FadeIn direction="up">
            <span className="inline-block bg-accent-pink/10 border border-accent-pink/20 text-accent-pink font-black text-xs uppercase tracking-[0.2em] px-4 py-2 rounded-full mb-6">
              Conteúdo para RH e Departamento Pessoal
            </span>
            <h1 className="h1-standard mb-8 tracking-tighter">
              Gestão de eSocial e SST <br />
              <span className="text-accent-pink">para RH e DP</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-4xl font-medium border-l-4 border-accent-pink pl-6 md:pl-10 leading-relaxed">
              Este hub existe para responder a dor operacional do RH: admissão travada, evento fora do prazo, documento incoerente, retrabalho com ASO e medo de autuação relacionada ao eSocial.
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
                  Por isso este hub é estruturado como conteúdo de decisão. Em vez de falar apenas em norma, conecta saúde ocupacional, documentação obrigatória, ASO, PGR, PCMSO e envio de eventos a uma linguagem útil para quem precisa operar o processo. Até rotinas menores, como uma{' '}
                  <Link href="/rh/carta-recomendacao" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4 hover:text-accent-pink">
                    carta de recomendação
                  </Link>
                  , entram nessa lógica quando o RH precisa documentar bem o histórico do colaborador.
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
            className="group flex flex-col sm:flex-row items-center gap-6 rounded-2xl border-2 border-brand-900 bg-white p-8 text-brand-900 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="shrink-0 rounded-full bg-accent-pink/8 p-4">
              <AlertTriangle className="h-8 w-8 text-accent-pink" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <span className="mb-1 block text-[10px] font-black uppercase tracking-widest text-accent-pink">
                Ferramenta gratuita
              </span>
              <h2 className="text-xl font-black leading-snug text-brand-900 md:text-2xl">
                Calculadora de Risco
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Consulte o CNAE principal pelo CNPJ e obtenha referências iniciais de grau de risco NR-04, SESMT, NR-05/CIPA e NRs relevantes.
              </p>
            </div>
            <div className="shrink-0 rounded-full bg-brand-900 p-3 text-white transition-all group-hover:translate-x-1">
              <ArrowRight className="h-5 w-5" />
            </div>
          </Link>
          <p className="mt-4 text-center text-sm text-slate-600">
            Ainda não tem o CNPJ? Use a{' '}
            <Link href="/rh/lista-cnae-brasil" className="font-bold text-brand-900 underline underline-offset-4 hover:text-accent-pink">
              consulta CNAE por código, atividade ou setor
            </Link>
            {' '}e depois confirme o cadastro oficial da empresa.
          </p>
        </FadeIn>
      </section>

      <section className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 pb-16">
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn direction="right">
            <Link
              href="/rh/domicilio-eletronico-trabalhista-det"
              className="surface-panel group block transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="kicker">Fiscalizacao digital</span>
              <h2 className="mb-4 text-2xl font-black text-brand-900">
                DET: como funciona o Domicilio Eletronico Trabalhista
              </h2>
              <p className="mb-6 text-slate-700 leading-relaxed">
                Entenda por que o DET virou parte real da rotina de compliance trabalhista e o que a empresa perde quando deixa notificacoes e prazos sem responsável.
              </p>
              <span className="inline-flex items-center gap-2 font-bold text-brand-900 group-hover:text-accent-pink transition-colors">
                Ler guia do DET
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </FadeIn>

          <FadeIn direction="left" delay={0.08}>
            <Link
              href="/rh/declaracao-inexistencia-risco-dir"
              className="surface-panel group block transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="kicker">NR-01 e simplificacao</span>
              <h2 className="mb-4 text-2xl font-black text-brand-900">
                DIR: quando a empresa pode declarar inexistencia de risco
              </h2>
              <p className="mb-6 text-slate-700 leading-relaxed">
                Veja quando a DIR realmente faz sentido, por que grau 1 ou 2 nao basta sozinho e como evitar usar simplificacao sem enquadramento tecnico.
              </p>
              <span className="inline-flex items-center gap-2 font-bold text-brand-900 group-hover:text-accent-pink transition-colors">
                Ler guia da DIR
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>

      <section className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 pb-12">
        <div className="grid gap-6 lg:grid-cols-2">
          <FadeIn direction="right">
            <Link
              href="/rh/riscos-psicossociais"
              className="surface-panel group block transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="kicker">NR-01 e governança</span>
              <h2 className="mb-4 text-2xl font-black text-brand-900">
                Riscos psicossociais: o que mudou e o que o RH precisa revisar
              </h2>
              <p className="mb-6 text-slate-700 leading-relaxed">
                Pressão excessiva, assédio, sobrecarga e adoecimento mental deixaram de ser tema
                periférico. O guia mostra como isso entra no radar do PGR, da liderança e da
                documentação de SST.
              </p>
              <span className="inline-flex items-center gap-2 font-bold text-brand-900 group-hover:text-accent-pink transition-colors">
                Ler guia de riscos psicossociais
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </FadeIn>

          <FadeIn direction="left" delay={0.08}>
            <Link
              href="/rh/cat-acidente-de-trabalho"
              className="surface-panel group block transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <span className="kicker">Acidente e passivo trabalhista</span>
              <h2 className="mb-4 text-2xl font-black text-brand-900">
                CAT: quando emitir, quem pode registrar e onde a empresa mais erra
              </h2>
              <p className="mb-6 text-slate-700 leading-relaxed">
                Quando a CAT entra em cena, o RH já está sob pressão. Este conteúdo ajuda a agir
                com mais rapidez, reduzir falhas de prazo e evitar omissão documental em acidente
                ou suspeita de doença ocupacional.
              </p>
              <span className="inline-flex items-center gap-2 font-bold text-brand-900 group-hover:text-accent-pink transition-colors">
                Ler guia da CAT
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── Destaque: Lei 15.377/2026 ── */}
      <section className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 pb-12">
        <FadeIn direction="up">
          <Link
            href="/rh/lei-15377-2026-vacinacao-hpv-exames-preventivos"
            className="group flex flex-col sm:flex-row items-center gap-6 rounded-2xl border-2 border-accent-pink bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="shrink-0 rounded-full bg-accent-pink/8 p-4">
              <Syringe className="h-8 w-8 text-accent-pink" />
            </div>
            <div className="flex-1 text-center sm:text-left">
              <span className="mb-1 block text-[10px] font-black uppercase tracking-widest text-accent-pink">
                Nova lei — em vigor desde abril de 2026
              </span>
              <h2 className="text-xl font-black leading-snug text-brand-900 md:text-2xl">
                Lei 15.377/2026: vacinação, HPV e exames preventivos na CLT
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                Empresas devem informar sobre vacinação e prevenção de câncer, e comunicar o direito a 3 dias de ausência remunerada para exames preventivos. Guia completo para RH e DP.
              </p>
            </div>
            <div className="shrink-0 rounded-full bg-accent-pink p-3 text-white transition-all group-hover:translate-x-1">
              <ArrowRight className="h-5 w-5" />
            </div>
          </Link>
        </FadeIn>
      </section>

      {/* ── Gestão e legislação trabalhista ── */}
      <section className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 pb-12">
        <FadeIn direction="up">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
            <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
              Gestão e legislação trabalhista
            </span>
            <h2 className="mb-5 text-2xl font-black text-brand-900">
              Funções, demissão e prevenção de passivos trabalhistas
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {[
                { href: '/rh/funcao-encarregado', label: 'Função do encarregado de SST' },
                { href: '/rh/carta-demissao', label: 'Carta de demissão: quando e como usar' },
                { href: '/rh/quando-demitir-funcionario', label: 'Quando demitir um funcionário' },
                { href: '/rh/o-que-um-gerente-faz', label: 'O que um gerente faz: papel e responsabilidades' },
                { href: '/rh/treinamento-gerentes', label: 'Treinamento para gerentes: o que o RH controla' },
                { href: '/rh/evitar-processos-trabalhistas', label: 'Como evitar processos trabalhistas' },
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

      <section className="max-w-[1280px] w-full mx-auto px-6 lg:px-8 pb-16">
        <FadeIn direction="up">
          <div className="flex flex-wrap gap-4">
            <Link href="/saude" className="rounded-2xl border border-slate-200 bg-white px-6 py-4 font-bold text-brand-900 transition-all hover:border-accent-pink/40 hover:text-accent-pink">
              Hub de Saúde Ocupacional
              <ArrowRight className="ml-2 inline h-4 w-4" />
            </Link>
            <Link href="/normas" className="rounded-2xl border border-slate-200 bg-white px-6 py-4 font-bold text-brand-900 transition-all hover:border-accent-pink/40 hover:text-accent-pink">
              Hub de Normas Regulamentadoras
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
