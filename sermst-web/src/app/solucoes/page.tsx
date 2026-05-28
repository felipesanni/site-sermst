import type { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/fade-in';

export const metadata: Metadata = {
  title: 'Soluções de SST para Empresas | SERMST',
  description:
    'Conheça as soluções da SERMST para exames ocupacionais, PGR, PCMSO, LTCAT, treinamentos e gestão de eSocial SST em São Paulo e Grande SP.',

  alternates: {
    canonical: 'https://sermst.com.br/solucoes',
  },
  openGraph: {
    title: 'Soluções SST | Exames, PGR, PCMSO, laudos e eSocial | SERMST',
    description:
      'Veja como a SERMST estrutura exames ocupacionais, PGR, PCMSO, laudos técnicos e gestão eSocial para empresas de todos os portes.',
    url: 'https://sermst.com.br/solucoes',
    type: 'website',
    locale: 'pt_BR',
  },
};

const solutions = [
  {
    title: 'Exames ocupacionais',
    description:
      'Para empresas que precisam contratar rápido, manter ASO em dia e reduzir gargalos na rotina de RH.',
    href: '/servicos/exame-admissional-expresso/sao-paulo',
  },
  {
    title: 'Exame toxicológico para motoristas e CNH',
    description:
      'Para empresas com motoristas e pessoa física que precisa resolver exame toxicológico para admissão, demissão ou renovação da CNH C, D e E.',
    href: '/servicos/exame-toxicologico-clt/sao-paulo',
  },
  {
    title: 'PGR e gerenciamento de riscos',
    description:
      'Para operações que precisam de inventário real de riscos, plano de ação coerente e base técnica para o eSocial.',
    href: '/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo',
  },
  {
    title: 'PCMSO e saúde ocupacional',
    description:
      'Para empresas que precisam alinhar exames ocupacionais aos riscos do cargo e proteger a rotina médica da operação.',
    href: '/servicos/pcmso-nr07-programa/sao-paulo',
  },
  {
    title: 'LTCAT e base previdenciária',
    description:
      'Para negócios que precisam de laudo técnico sólido para aposentadoria especial, PPP e S-2240.',
    href: '/servicos/ltcat-laudo-tecnico-previdenciario/sao-paulo',
  },
  {
    title: 'Gestão de eSocial SST',
    description:
      'Para quem quer reduzir erros, eliminar retrabalho e manter o envio de eventos de SST sob controle.',
    href: '/servicos/gestao-esocial-s2220-s2240/sao-paulo',
  },
  {
    title: 'Treinamentos obrigatórios',
    description:
      'Para empresas que precisam capacitar equipes, validar certificados e sustentar prevenção com evidência.',
    href: '/servicos/treinamentos-nrs-cipa-brigada/sao-paulo',
  },
];

export default function SoluçõesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-24 lg:px-8">
          <div className="max-w-4xl">
            <FadeIn direction="up">
              <span className="mb-6 inline-block rounded-full border border-accent-pink/30 bg-accent-pink/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
                Soluções B2B em SST
              </span>
              <h1 className="h1-standard mb-6">
                Soluções de Medicina e Segurança do Trabalho para reduzir risco, acelerar rotina e sustentar o eSocial
              </h1>
              <p className="max-w-3xl text-xl leading-relaxed text-slate-300 md:text-2xl">
                A SERMST organiza sua atuação em torno de um objetivo simples: ajudar empresas a manter exames, documentos e eventos de SST em dia sem transformar conformidade em gargalo operacional.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8">
        <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          <FadeIn direction="right">
            <div className="surface-panel">
              <span className="kicker">
                Leitura Estratégica
              </span>
              <h2 className="mb-6 text-3xl font-black text-brand-900 md:text-4xl">
                O que uma empresa realmente compra quando contrata SST
              </h2>
              <div className="space-y-5 text-lg leading-relaxed text-slate-700">
                <p>
                  A maior parte das empresas não compra apenas um exame, um laudo ou um evento de eSocial. O que elas compram é previsibilidade. Querem contratar sem travar admissão, cumprir exigências legais sem insegurança e manter a operação protegida contra multas, passivos trabalhistas e retrabalho documental.
                </p>
                <p>
                  Por isso a SERMST organiza as soluções por dor concreta — não por catálogo. Exames ocupacionais para fluxo de RH, PGR e PCMSO para sustentação técnica, LTCAT para base previdenciária, eSocial SST para disciplina operacional, treinamentos para prevenção com prova documental.
                </p>
                <p>
                  O que sua empresa contrata é o resultado: documentação que sustenta auditoria, fluxo que destrava admissão, eSocial limpo, equipe protegida. Tudo conectado, sem precisar gerenciar quatro fornecedores diferentes.
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <div className="surface-panel">
              <span className="kicker">
                Quando isso faz diferença
              </span>
              <h2 className="mb-6 text-2xl font-black text-brand-900">
                Cenários em que a SERMST costuma entrar
              </h2>
              <div className="space-y-4 text-slate-700">
                <p>Admissões urgentes e operação parada por falta de ASO.</p>
                <p>Documentos de SST desatualizados ou genéricos demais.</p>
                <p>Receio de multa por falhas em S-2220 ou S-2240.</p>
                <p>Fiscalizações, auditorias ou processos trabalhistas em andamento.</p>
                <p>Dificuldade de integrar clínica, laudos e rotina de RH num fluxo só.</p>
              </div>
              <div className="mt-8 border-t border-slate-200 pt-8">
                <Link
                  href="/contato"
                  className="btn-primary-safe"
                >
                  Falar com o comercial
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 pb-20 lg:px-8">
        <FadeIn direction="up">
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution) => (
              <Link
                key={solution.title}
                href={solution.href}
                className="card-clean group"
              >
                <span className="kicker">
                  Solução Prioritária
                </span>
                <h3 className="mb-4 text-2xl font-black text-brand-900 transition-colors group-hover:text-accent-pink">
                  {solution.title}
                </h3>
                <p className="mb-8 leading-relaxed text-slate-600">
                  {solution.description}
                </p>
                <span className="inline-flex items-center gap-2 font-bold text-brand-900 transition-colors group-hover:text-accent-pink">
                  Ver página da solução
                  <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </FadeIn>
      </section>
    </div>
  );
}
