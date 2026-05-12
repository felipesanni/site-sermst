import type { Metadata } from 'next';
import { LeadForm } from '@/components/forms/lead-form';
import { FadeIn } from '@/components/ui/fade-in';

export const metadata: Metadata = {
  title: 'Contato SERMST | Orçamento para Medicina do Trabalho, PGR, PCMSO e eSocial',
  description:
    'Fale com a SERMST para solicitar orcamento de exames admissionais, PGR, PCMSO, LTCAT, treinamentos e gestão de eSocial SST em São Paulo e Grande SP.',

  alternates: {
    canonical: 'https://sermst.com.br/contato',
  },
  openGraph: {
    title: 'Contato SERMST | Orçamento para Medicina do Trabalho, PGR, PCMSO e eSocial',
    description:
      'Solicite orçamento para exames ocupacionais, PGR, PCMSO, laudos e gestão eSocial. Atendimento rápido, sem burocracia — fale com a SERMST agora.',
    url: 'https://sermst.com.br/contato',
    type: 'website',
    locale: 'pt_BR',
  },
};

const contactPaths = [
  {
    title: 'Exames ocupacionais',
    description:
      'Para admissional, demissional, periódico, retorno ao trabalho, mudanca de função e ASO com rapidez operacional.',
    cta: 'https://wa.me/5511915146447?text=Preciso%20de%20exames%20ocupacionais%20para%20minha%20empresa',
    label: 'Solicitar exames',
  },
  {
    title: 'PGR, PCMSO e laudos',
    description:
      'Para regularizar documentação obrigatória, revisar conformidade técnica e reduzir exposicao a passivos trabalhistas.',
    cta: 'https://wa.me/5511915146447?text=Quero%20orcamento%20para%20PGR%2C%20PCMSO%20ou%20laudos%20de%20SST',
    label: 'Solicitar proposta',
  },
  {
    title: 'eSocial SST',
    description:
      'Para empresas que precisam organizar S-2220, S-2240, fluxos de envio e rotina de compliance com menos retrabalho.',
    cta: 'https://wa.me/5511915146447?text=Preciso%20regularizar%20o%20eSocial%20SST%20da%20minha%20empresa',
    label: 'Regularizar eSocial',
  },
];

const differentiators = [
  'Mais de 40 anos de experiência em Medicina e Segurança do Trabalho.',
  'Estrutura própria para acelerar ASO, exames complementares e fluxos ocupacionais.',
  'Atendimento para São Paulo, Grande ABC, Osasco, Guarulhos, Barueri e regiao.',
  'Foco em reduzir risco trabalhista, atraso de contratação e falhas de eSocial.',
];

const objections = [
  {
    q: 'Minha empresa ainda não sabe exatamenté o que precisa.',
    a: 'Tudo bem. O primeiro contato serve justamente para entender porte, atividade, urgencia e risco antes de indicar exames, laudos ou gestão de SST.',
  },
  {
    q: 'Estamos com urgencia para admissão e não podemos perder tempo.',
    a: 'A SERMST ja trabalha com operação orientada a velocidade, principalmente em exames ocupacionais, ASO e integração com rotinas de RH.',
  },
  {
    q: 'Ja temos documentos, mas não sabemos se estão corretos.',
    a: 'Esse é um cenário comum. A equipe pode avaliar se PGR, PCMSO, LTCAT e eventos de eSocial estão coerentes com a realidade da operação.',
  },
];

export default function ContatoPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-14 md:py-20 lg:px-8 lg:py-24">
          <div className="max-w-4xl">
            <FadeIn direction="up" viewport={false}>
              <span className="mb-5 inline-block rounded-full border border-accent-pink/20 bg-accent-pink/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-accent-pink md:mb-6">
                Orçamento e atendimento comercial
              </span>
              <h1 className="mb-5 text-[2.6rem] font-black leading-[1.05] text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)] md:mb-6 md:text-6xl">
                Fale com a SERMST para regularizar SST, acelerar exames e reduzir risco trabalhista
              </h1>
              <p className="max-w-3xl text-lg leading-relaxed text-slate-300 md:text-2xl">
                Se sua empresa precisa de exame admissional, PGR, PCMSO, LTCAT, treinamentos ou gestão de eSocial SST, esta é a página para falar com o time comercial da SERMST e avançar com mais clareza, rapidez e segurança técnica.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_0.9fr]">
          <FadeIn direction="right">
            <LeadForm />
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <div className="surface-panel h-full">
              <span className="kicker">
                Canais oficiais
              </span>
              <h2 className="mb-6 text-2xl font-black text-brand-900">
                Atendimento rápido para empresas
              </h2>
              <div className="space-y-5 text-slate-700">
                <a
                  href="https://wa.me/5511915146447?text=Quero%20falar%20com%20a%20SERMST%20sobre%20SST%20para%20minha%20empresa"
                  target="_blank"
                  rel="noopener"
                  className="btn-whatsapp btn-whatsapp-solid flex w-full"
                >
                  Falar pelo WhatsApp
                </a>
                <a
                  href="mailto:comercial@sermst.com.br"
                  className="btn-outline-safe flex w-full"
                >
                  comercial@sermst.com.br
                </a>
                <div className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                  <p className="mb-2 text-sm font-black uppercase tracking-widest text-brand-900">
                    Telefone comercial
                  </p>
                  <p className="text-lg font-semibold text-slate-700">(11) 3229-7567</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 pb-20 lg:px-8">
        <FadeIn direction="up">
          <div className="grid gap-6 md:grid-cols-3">
            {contactPaths.map((path) => (
              <a
                key={path.title}
                href={path.cta}
                target="_blank"
                rel="noopener"
                className="card-clean group"
              >
                <span className="kicker">
                  Demandas mais comuns
                </span>
                <h3 className="mb-4 text-2xl font-black text-brand-900 transition-colors group-hover:text-accent-pink">
                  {path.title}
                </h3>
                <p className="mb-8 leading-relaxed text-slate-600">
                  {path.description}
                </p>
                <span className="inline-flex items-center gap-2 font-bold text-brand-900 transition-colors group-hover:text-accent-pink">
                  {path.label}
                  <span aria-hidden="true">→</span>
                </span>
              </a>
            ))}
          </div>
        </FadeIn>
      </section>

      <section className="border-y border-slate-200 bg-white">
        <div className="mx-auto grid max-w-[1280px] items-start gap-10 px-6 py-20 lg:grid-cols-2 lg:px-8">
          <FadeIn direction="right">
            <div>
              <span className="kicker">
                Por que a SERMST
              </span>
              <h2 className="mb-6 text-3xl font-black text-brand-900 md:text-4xl">
                O contato comercial precisa levar a uma solução técnica confiável
              </h2>
              <div className="mb-8 space-y-4 text-lg leading-relaxed text-slate-700">
                <p>
                  Nem toda empresa chega aqui no mesmo estágio. Algumas sabem que precisam de exame admissional urgente. Outras sabem apenas que existe um risco de multa, um documento vencido ou um problema no eSocial, mas ainda não conseguem nomear a solução.
                </p>
                <p>
                  A SERMST trabalha os dois cenários. Para quem tem demanda imediata, fluxo expresso. Para quem ainda está tentando entender a dimensão do problema, diagnóstico técnico antes de propor qualquer serviço. Você só contrata depois que entende exatamenté o que precisa.
                </p>
              </div>
              <ul className="space-y-4">
                {differentiators.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-slate-700">
                    <span className="mt-1 font-black text-accent-pink">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.1}>
            <div className="surface-panel-muted">
              <span className="kicker">
                Objeções comuns
              </span>
              <h2 className="mb-6 text-2xl font-black text-brand-900">
                Duvidas que costumam aparecer antes do primeiro contato
              </h2>
              <div className="space-y-6">
                {objections.map((item) => (
                  <div key={item.q} className="border-b border-slate-200 pb-6 last:border-0 last:pb-0">
                    <h3 className="mb-2 text-lg font-black text-brand-900">{item.q}</h3>
                    <p className="leading-relaxed text-slate-600">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
