import type { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';
import { FadeIn } from '@/components/ui/fade-in';
import {
  AlertTriangle,
  Bookmark,
  CalendarDays,
  CheckCircle2,
  Clock3,
  HelpCircle,
  ShieldCheck,
} from 'lucide-react';

const pageUrl = 'https://sermst.com.br/saude/importancia-do-exame-periodico';

const toc = [
  { id: 'resposta-direta', label: 'Resposta direta' },
  { id: 'o-que-e', label: 'O que é o exame periódico ocupacional' },
  { id: 'periodicidade', label: 'Quem define a periodicidade' },
  { id: 'quais-exames', label: 'Quais exames podem fazer parte' },
  { id: 'atraso', label: 'O que acontece se a empresa atrasa' },
  { id: 'organizacao', label: 'Como organizar isso na prática' },
];

const faq = [
  {
    q: 'O exame periódico é obrigatório para toda empresa?',
    a: 'Em regra, sim. O exame periódico faz parte do acompanhamento médico ocupacional previsto no PCMSO e precisa seguir os riscos e a rotina real da empresa.',
  },
  {
    q: 'Quem define de quanto em quanto tempo o trabalhador precisa fazer exame periódico?',
    a: 'A periodicidade não deve ser chutada. Ela precisa seguir a NR-07, a avaliação médica e os riscos ocupacionais de cada função dentro do PCMSO.',
  },
  {
    q: 'Exame periódico é a mesma coisa que ASO?',
    a: 'Não. O exame periódico é a avaliação. O ASO é o documento emitido ao final do atendimento para registrar a aptidão ocupacional do trabalhador.',
  },
  {
    q: 'Quais exames podem ser pedidos no periódico?',
    a: 'Depende dos riscos da função. Pode haver exame clínico e, quando fizer sentido, complementares como audiometria, exames laboratoriais, espirometria, ECG e outros.',
  },
  {
    q: 'O que acontece se a empresa deixa o exame periódico vencer?',
    a: 'Ela fica mais exposta a falhas de compliance, retrabalho do RH, fragilidade documental e dificuldade de sustentar que monitorou a saúde ocupacional no tempo correto.',
  },
  {
    q: 'Quando vale pedir ajuda externa para organizar os periódicos?',
    a: 'Quando a empresa perde prazo, não sabe quem está vencendo, depende de planilha manual ou sente que PCMSO, ASO e rotina de convocação não conversam entre si.',
  },
];

export const metadata: Metadata = {
  title: 'Exame periódico ocupacional: o que é, periodicidade e regras | SERMST',
  description:
    'Entenda o que é o exame periódico ocupacional, quem define a periodicidade, quais exames podem entrar e por que atrasar isso aumenta o risco da empresa.',
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: 'Exame periódico ocupacional: o que é, periodicidade e regras | SERMST',
    description:
      'Veja como o exame periódico se conecta ao PCMSO, ao ASO e à rotina de saúde ocupacional da empresa.',
    url: pageUrl,
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function ImportanciaDoExamePeriodicoPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Exame periódico ocupacional: o que é, quando fazer e por que importa',
    description:
      'Guia prático sobre exame periódico ocupacional, periodicidade, exames complementares e risco de deixar vencido.',
    url: pageUrl,
    mainEntityOfPage: pageUrl,
    inLanguage: 'pt-BR',
    datePublished: '2024-11-01',
    dateModified: '2026-06-10',
    author: {
      '@type': 'Organization',
      name: 'SERMST',
      url: 'https://sermst.com.br',
    },
    publisher: {
      '@type': 'Organization',
      name: 'SERMST',
      url: 'https://sermst.com.br',
      logo: {
        '@type': 'ImageObject',
        url: 'https://sermst.com.br/images/site/logo-cor.png',
      },
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((item) => ({
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BreadcrumbJsonLd
        items={[
          { name: 'Inicio', item: 'https://sermst.com.br' },
          { name: 'Saúde Ocupacional', item: 'https://sermst.com.br/saude' },
          { name: 'Exame periódico ocupacional' },
        ]}
      />

      <header className="relative overflow-hidden bg-brand-900 py-24 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(248,67,101,0.14),transparent_38%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-6 lg:px-8">
          <div className="max-w-4xl">
            <FadeIn direction="up">
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent-pink/20 bg-accent-pink/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
                <ShieldCheck className="h-4 w-4" />
                Saúde ocupacional
              </span>
              <h1 className="mb-8 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
                Exame periódico ocupacional: o que é, quando fazer e por que importa
              </h1>
              <p className="max-w-3xl border-l-4 border-accent-pink pl-6 text-xl font-medium leading-relaxed text-slate-300 md:text-2xl">
                O exame periódico ajuda a empresa a acompanhar a saúde do trabalhador ao longo do
                tempo. Quando ele atrasa ou vira mera formalidade, o problema costuma aparecer em
                afastamento, falha de PCMSO, retrabalho do RH e risco jurídico desnecessário.
              </p>
              <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-300">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 text-accent-pink" />
                  Atualizado em 10 de junho de 2026
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4 text-accent-pink" />
                  Leitura de 8 min
                </span>
              </div>
            </FadeIn>
          </div>
        </div>
      </header>

      <div className="mx-auto grid w-full max-w-[1280px] gap-14 px-6 py-20 lg:grid-cols-[minmax(0,1fr)_340px] lg:px-8">
        <main className="min-w-0">
          <FadeIn delay={0.05}>
            <section
              id="resposta-direta"
              className="mb-12 rounded-3xl border border-brand-100 bg-brand-50/60 p-8 shadow-sm"
            >
              <div className="mb-5 flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-brand-500" />
                <h2 className="text-2xl font-black text-brand-900">Resposta direta</h2>
              </div>
              <p className="text-lg leading-relaxed text-slate-700">
                O exame periódico ocupacional é o acompanhamento médico feito durante o vínculo do
                trabalhador para verificar se a atividade está afetando sua saúde e se o cronograma
                previsto no{' '}
                <Link
                  href="/saude/pcmso-programa-controle-medico"
                  className="font-bold text-accent-pink hover:underline"
                >
                  PCMSO
                </Link>{' '}
                está sendo cumprido. A periodicidade e os exames complementares não devem ser
                copiados de outra empresa: eles precisam conversar com os riscos reais da função,
                com a NR-07 e com a rotina operacional do negócio.
              </p>
            </section>
          </FadeIn>

          <FadeIn delay={0.08}>
            <section className="mb-14 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <div className="mb-5 flex items-center gap-3">
                <Bookmark className="h-6 w-6 text-accent-pink" />
                <h2 className="text-2xl font-black text-brand-900">Neste artigo</h2>
              </div>
              <ul className="grid gap-3 md:grid-cols-2">
                {toc.map((item) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      className="flex rounded-2xl border border-slate-200 px-4 py-3 font-semibold text-slate-700 transition hover:border-accent-pink hover:text-accent-pink"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          </FadeIn>

          <div className="space-y-12">
            <FadeIn delay={0.12}>
              <section id="o-que-e" className="scroll-mt-28">
                <h2 className="mb-5 text-3xl font-black text-brand-900">
                  O que é o exame periódico ocupacional
                </h2>
                <div className="prose prose-lg max-w-none prose-p:text-slate-700 prose-strong:text-brand-900">
                  <p>
                    Pense no exame periódico como uma revisão de rotina. Assim como um carro precisa
                    ser acompanhado para não quebrar de surpresa, o trabalhador também precisa de
                    acompanhamento para que a empresa não descubra tarde demais sinais de adoecimento,
                    sobrecarga ou exposição ocupacional mal controlada.
                  </p>
                  <p>
                    Ele não existe para gerar papel. Ele existe para mostrar, ao longo do tempo, se
                    a função está sendo exercida com segurança e se o monitoramento de saúde está
                    coerente com o risco. Ao final, a empresa emite o{' '}
                    <Link
                      href="/saude/aso-atestado-saude-ocupacional"
                      className="font-bold text-accent-pink hover:underline"
                    >
                      ASO
                    </Link>{' '}
                    correspondente ao atendimento.
                  </p>
                </div>
              </section>
            </FadeIn>

            <FadeIn delay={0.16}>
              <section id="periodicidade" className="scroll-mt-28">
                <h2 className="mb-5 text-3xl font-black text-brand-900">
                  Quem define a periodicidade
                </h2>
                <div className="prose prose-lg max-w-none prose-p:text-slate-700 prose-strong:text-brand-900 prose-li:text-slate-700">
                  <p>
                    A periodicidade não deve ser decidida por costume nem por agenda vazia da
                    clínica. Ela precisa seguir o PCMSO, a avaliação médica e os riscos ocupacionais
                    mapeados na empresa.
                  </p>
                  <p>
                    Em outras palavras: o ritmo do periódico precisa conversar com a realidade da
                    operação. Empresa com exposições relevantes, função mais crítica ou histórico de
                    risco costuma exigir um acompanhamento mais atento do que uma rotina
                    administrativa mais simples.
                  </p>
                  <ul>
                    <li>A NR-07 dá a base legal do acompanhamento médico ocupacional.</li>
                    <li>O PCMSO traduz essa base para a realidade da empresa.</li>
                    <li>O médico responsável ajusta o cronograma com critério técnico.</li>
                  </ul>
                </div>
              </section>
            </FadeIn>

            <FadeIn delay={0.2}>
              <section id="quais-exames" className="scroll-mt-28">
                <h2 className="mb-5 text-3xl font-black text-brand-900">
                  Quais exames podem fazer parte do periódico
                </h2>
                <div className="prose prose-lg max-w-none prose-p:text-slate-700 prose-strong:text-brand-900 prose-li:text-slate-700">
                  <p>
                    O exame periódico não é sempre igual. O núcleo costuma ser o exame clínico
                    ocupacional, mas os complementares dependem do risco e do que o programa médico
                    precisa monitorar.
                  </p>
                  <ul>
                    <li>Audiometria, quando há exposição a ruído.</li>
                    <li>Espirometria, quando há risco respiratório relevante.</li>
                    <li>Exames laboratoriais, quando há agentes químicos ou necessidade clínica.</li>
                    <li>ECG, acuidade visual ou outros complementares, conforme função e exposição.</li>
                  </ul>
                  <p>
                    O erro comum é transformar isso numa tabela copiada. O caminho seguro é fazer com
                    que o exame acompanhe o risco real do cargo e converse com o restante da gestão
                    de SST.
                  </p>
                </div>
              </section>
            </FadeIn>

            <FadeIn delay={0.24}>
              <section id="atraso" className="scroll-mt-28">
                <h2 className="mb-5 text-3xl font-black text-brand-900">
                  O que acontece se a empresa atrasa o exame periódico
                </h2>
                <div className="rounded-3xl border border-amber-200 bg-amber-50 p-6">
                  <div className="mb-4 flex items-center gap-3">
                    <AlertTriangle className="h-5 w-5 text-amber-700" />
                    <p className="text-lg font-black text-amber-900">O risco não é só multa.</p>
                  </div>
                  <p className="leading-relaxed text-amber-900/90">
                    Quando o exame periódico vence, a empresa perde previsibilidade. O RH corre
                    atrás do prazo, o histórico médico fica mais frágil, o PCMSO perde disciplina e
                    a organização fica menos preparada para auditoria, fiscalização ou discussão
                    trabalhista sobre monitoramento da saúde.
                  </p>
                </div>
                <div className="prose prose-lg mt-6 max-w-none prose-p:text-slate-700 prose-li:text-slate-700">
                  <ul>
                    <li>Mais chance de descobrir problema de saúde tarde.</li>
                    <li>Mais retrabalho para convocar colaborador fora de hora.</li>
                    <li>Menos força documental para provar acompanhamento contínuo.</li>
                    <li>Mais desorganização entre agenda médica, ASO e obrigações do RH.</li>
                  </ul>
                </div>
              </section>
            </FadeIn>

            <FadeIn delay={0.28}>
              <section id="organizacao" className="scroll-mt-28">
                <h2 className="mb-5 text-3xl font-black text-brand-900">
                  Como organizar isso na prática sem virar bagunça
                </h2>
                <div className="prose prose-lg max-w-none prose-p:text-slate-700 prose-strong:text-brand-900 prose-li:text-slate-700">
                  <p>
                    O melhor fluxo não é o mais bonito no papel. É o que faz o RH saber quem vence,
                    quando vence e qual exame precisa ser convocado, sem depender de memória ou de
                    planilha perdida.
                  </p>
                  <ol>
                    <li>Defina um PCMSO coerente com os riscos atuais da empresa.</li>
                    <li>Mantenha a base de trabalhadores atualizada por cargo e risco.</li>
                    <li>Controle vencimentos com antecedência, não na semana do atraso.</li>
                    <li>Garanta que exame, ASO e histórico documental contem a mesma história.</li>
                    <li>Revise o fluxo sempre que cargo, risco ou operação mudarem.</li>
                  </ol>
                  <p>
                    Quando a empresa cresce, a melhor saída costuma ser tirar isso do improviso e
                    colocar em uma rotina acompanhada por equipe que enxergue clínica, documento e
                    operação ao mesmo tempo.
                  </p>
                </div>
              </section>
            </FadeIn>
          </div>
        </main>

        <aside className="space-y-6 lg:sticky lg:top-24 lg:self-start">
          <FadeIn direction="left" delay={0.18}>
            <div className="rounded-3xl bg-brand-900 p-8 text-white shadow-xl">
              <h2 className="mb-4 text-2xl font-black">Quando vale sair da leitura e agir</h2>
              <p className="mb-6 text-sm leading-relaxed text-slate-300">
                Se a empresa está perdendo prazo de periódico, sem clareza sobre quem precisa ser
                convocado ou com dúvida se o PCMSO está coerente, já vale organizar isso com apoio
                técnico.
              </p>
              <Link href="/contato" className="btn-primary-safe flex w-full justify-center">
                Falar com a SERMST
              </Link>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.22}>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <h2 className="mb-4 text-xl font-black text-brand-900">Leituras relacionadas</h2>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link
                    href="/saude/pcmso-programa-controle-medico"
                    className="font-semibold text-slate-700 hover:text-accent-pink hover:underline"
                  >
                    PCMSO: programa de controle médico
                  </Link>
                </li>
                <li>
                  <Link
                    href="/saude/aso-atestado-saude-ocupacional"
                    className="font-semibold text-slate-700 hover:text-accent-pink hover:underline"
                  >
                    O que é ASO e como ele protege a empresa
                  </Link>
                </li>
                <li>
                  <Link
                    href="/saude/o-que-e-saude-ocupacional"
                    className="font-semibold text-slate-700 hover:text-accent-pink hover:underline"
                  >
                    O que é saúde ocupacional
                  </Link>
                </li>
              </ul>
            </div>
          </FadeIn>
        </aside>
      </div>

      <section className="border-t border-slate-100 bg-slate-50 py-20">
        <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="mb-12 flex items-center gap-3 text-3xl font-black text-brand-900">
              <HelpCircle className="h-8 w-8 text-accent-pink" />
              Perguntas frequentes
            </h2>
            <div className="space-y-8">
              {faq.map((item) => (
                <div key={item.q} className="border-b border-slate-200 pb-8 last:border-0 last:pb-0">
                  <h3 className="mb-3 text-xl font-bold text-brand-900">{item.q}</h3>
                  <p className="border-l-4 border-slate-200 pl-6 text-slate-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
