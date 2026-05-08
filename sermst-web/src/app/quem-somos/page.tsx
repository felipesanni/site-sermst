import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/fade-in';
import { ShieldCheck, Building2, FlaskConical, Users, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { siteImages } from '@/lib/site-images';

export const metadata: Metadata = {
  title: 'Quem somos | SERMST - 40 anos protegendo empresas familiares',
  description:
    'A SERMST e uma clínica de Medicina e Segurança do Trabalho com mais de 40 anos protegendo o patrimonio de empresarios que constroem com seriedade. +3.000 empresas, +500 clínicas credenciadas e laboratorio proprio.',
  alternates: { canonical: 'https://sermst.com.br/quem-somos' },
  openGraph: {
    title: 'Quem somos | SERMST - 40 anos protegendo empresas familiares',
    description:
      'Mais de 40 anos protegendo empresas familiares contra passivo trabalhista, autuacao e afastamento. SST que blinda patrimonio, nao e so papelada.',
    url: 'https://sermst.com.br/quem-somos',
    type: 'website',
    locale: 'pt_BR',
  },
};

const diferenciais = [
  { icon: Clock, label: '+40 anos', desc: 'de experiencia em Medicina e Segurança do Trabalho.' },
  { icon: Building2, label: '+3.000 empresas', desc: 'atendidas em todo o Brasil ao longo da historia.' },
  { icon: ShieldCheck, label: '+500 clínicas', desc: 'credenciadas em rede nacional para apoio operacional.' },
  { icon: FlaskConical, label: 'Laboratorio proprio', desc: 'audiometria, ECG, EEG, espirometria e exames complementares.' },
  { icon: Users, label: 'Equipe multidisciplinar', desc: 'médicos, engenheiros, técnicos em SST e gestão de riscos.' },
];

export default function QuemSomosPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image src={siteImages.institutional.corporateHealthHero.src} alt="" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/85 to-brand-900/40" />
        </div>
        <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute right-0 top-0 z-10 h-[500px] w-[500px] rounded-full bg-brand-500/30 blur-[120px] mix-blend-screen" />

        <div className="relative z-20 mx-auto w-full max-w-[1280px] px-6 py-28 lg:px-8">
          <FadeIn direction="up">
            <span className="mb-8 inline-block rounded-full border border-accent-pink/20 bg-accent-pink/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
              Quem somos
            </span>
            <h1 className="mb-8 max-w-4xl text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              40 anos protegendo o
              <br />
              patrimonio de quem
              <br />
              <span className="font-serif italic text-accent-pink">leva o negócio a serio.</span>
            </h1>
            <p className="max-w-3xl border-l-4 border-accent-pink pl-6 text-xl font-medium leading-relaxed text-slate-200 md:text-2xl">
              Falamos de dono para dono. Sem rodeios, sem exageros. Com clareza, responsabilidade e compromisso com resultado.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <FadeIn direction="up">
            <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">Por que existimos</span>
            <h2 className="mb-12 text-3xl font-black leading-tight text-brand-900 md:text-5xl">
              A maioria dos empresarios ainda ve SST como burocracia.
              <br />
              <span className="text-slate-500">Esse pensamento deixa a empresa vulneravel.</span>
            </h2>
          </FadeIn>

          <div className="space-y-7 text-lg font-medium leading-relaxed text-slate-700 md:text-xl">
            <FadeIn direction="up" delay={0.1}>
              <p>
                Nascemos como uma consultoria especializada em Seguranca e Saúde no Trabalho atendendo micro e pequenas empresas. Mas, ao longo de mais de 40 anos de historia, percebemos que isso, por si so, nao era suficiente.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p>
                Para proteger de verdade o empresario, e preciso ir alem do cumprimento da legislacao. E preciso trabalhar a mentalidade de quem empreende, porque so assim e possivel blindar o negócio contra riscos invisiveis, reduzir passivos, prevenir autuacoes e aumentar a produtividade dos colaboradores.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="my-10 border-l-4 border-accent-pink pl-6 text-2xl font-bold leading-snug text-brand-900 md:text-3xl">
                Quem brinca de ser empresario trata SST como papelada. Quem leva o negócio a serio entende que conformidade e sinonimo de controle. E controle e o que separa empresas sustentaveis de negócios que quebram por descuido.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <p>
                Por tras dos laudos, exames e documentos, existe um conjunto de medidas que pode evitar prejuizos serios, proteger a operação, reduzir afastamentos e preservar o negócio que levou anos para ser construido.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
          <FadeIn direction="up">
            <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">Em numeros</span>
            <h2 className="mb-14 max-w-3xl text-3xl font-black leading-tight text-brand-900 md:text-5xl">
              O que sustenta a confianca que <span className="text-accent-pink">empresarios como voce</span> depositam na SERMST
            </h2>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {diferenciais.map((item, i) => (
              <FadeIn key={item.label} direction="up" delay={i * 0.08}>
                <div className="card-clean h-full group">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-accent-pink transition-colors group-hover:bg-accent-pink group-hover:text-white">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <p className="mb-3 text-3xl font-black text-brand-900">{item.label}</p>
                  <p className="font-medium leading-relaxed text-slate-600">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-[1.3fr_1fr]">
            <FadeIn direction="right">
              <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">Nosso compromisso</span>
              <h2 className="mb-8 text-3xl font-black leading-tight text-brand-900 md:text-5xl">
                Nao vendemos medo. Vendemos previsibilidade.
              </h2>
              <div className="space-y-6 text-lg font-medium leading-relaxed text-slate-700">
                <p>
                  A SERMST nao esta aqui para te assustar com multa de eSocial e processo trabalhista. Esta aqui para garantir que a sua empresa esteja sempre um passo a frente, com documentação correta, exames em dia, laudos que refletem a operação real e um fluxo de SST que nao trava admissão.
                </p>
                <p>
                  Atendimento in company ou presencial, sem necessidade de agendamento. Equipe multidisciplinar com médicos, engenheiros e técnicos em SST. Laboratorio proprio para exames complementares. Tudo conectado em um fluxo que reduz tempo, reduz custo e reduz risco.
                </p>
                <p className="font-bold text-brand-900">
                  Voce cuida do crescimento do seu negócio. A SERMST cuida de blindar o que voce ja construiu.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="sticky top-24 rounded-[2rem] bg-brand-900 p-10 text-white shadow-[0_30px_60px_-15px_rgba(11,19,60,0.4)]">
                <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-accent-pink">Para quem e a SERMST</p>
                <ul className="mb-8 space-y-4">
                  {[
                    'Empresas familiares com patrimonio para proteger',
                    'Grupos com multiplas empresas e CNPJs',
                    'RH e DP que precisam parar de retrabalhar ASO',
                    'Empresas insatisfeitas com a consultoria atual',
                    'Operacoes com alta rotatividade de funcionarios',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-slate-200">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-pink" />
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contato" className="btn-primary-safe flex w-full">
                  Falar com a SERMST
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-900 py-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-accent-pink to-transparent" />
        <div className="relative z-10 mx-auto max-w-[1100px] px-6 text-center lg:px-8">
          <FadeIn direction="up">
            <h2 className="mb-8 text-4xl font-black leading-tight text-white md:text-6xl">
              Sua empresa esta
              <br />
              <span className="text-accent-pink">realmente protegida?</span>
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl font-medium leading-relaxed text-slate-300">
              Em 15 minutos a equipe comercial entende o porte, a operação e o momento da empresa antes de indicar exame, laudo ou gestão SST.
            </p>
            <Link href="/contato" className="btn-primary-safe-lg text-lg shadow-2xl">
              Solicitar diagnostico gratuito
              <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
