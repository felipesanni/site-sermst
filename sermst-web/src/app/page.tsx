import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Building2, CheckCircle2, Clock, FileCheck2, Navigation, ShieldCheck } from 'lucide-react';
import { siteImages } from '@/lib/site-images';
import { companyFacts, institutionalDescription } from '@/lib/company-facts';

export const metadata: Metadata = {
  title: 'Clínica de Exame Admissional em São Paulo | SERMST',
  description:
    'Exame admissional em São Paulo Centro para empresas, com ASO no mesmo dia, laboratório próprio e apoio a PCMSO e eSocial. Atendimento no Largo do Paissandu.',
  alternates: {
    canonical: 'https://sermst.com.br',
  },
  openGraph: {
    title: 'Clínica de Exame Admissional em São Paulo para Empresas | SERMST',
    description:
      'Exame admissional em São Paulo Centro para empresas, com ASO no mesmo dia, laboratório próprio e apoio a PCMSO e eSocial.',
    url: 'https://sermst.com.br',
    locale: 'pt_BR',
    type: 'website',
  },
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://sermst.com.br/#organization',
  name: 'SERMST',
  legalName: 'SERMST - Gestão Ocupacional e Medicina do Trabalho',
  url: 'https://sermst.com.br',
  description: institutionalDescription,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Largo do Paissandu, 72, 3º Andar, Conjunto 301',
    addressLocality: 'São Paulo',
    addressRegion: 'SP',
    postalCode: '01034-901',
    addressCountry: 'BR',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+55-11-3229-7567',
    contactType: 'customer service',
    availableLanguage: 'Portuguese',
  },
  sameAs: [
    'https://www.instagram.com/sermstocupacional/',
    'https://www.facebook.com/sermstocupacional',
    'https://www.linkedin.com/company/sermst-gest%C3%A3o-ocupacional',
  ],
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://sermst.com.br/#website',
  url: 'https://sermst.com.br',
  name: 'SERMST',
  publisher: { '@id': 'https://sermst.com.br/#organization' },
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: 'https://sermst.com.br/dicionario?q={search_term_string}' },
    'query-input': 'required name=search_term_string',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O que é medicina do trabalho?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Medicina do trabalho é a especialidade médica voltada à relação entre trabalho e saúde. Na empresa, participa do PCMSO e dos exames ocupacionais previstos na NR-07.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que é PCMSO e qual empresa é obrigada a ter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O PCMSO (Programa de Controle Médico de Saúde Ocupacional) é previsto na NR-07 e organiza o monitoramento da saúde dos empregados conforme os riscos ocupacionais. A própria NR-07 prevê dispensa de elaboração em cenários específicos para MEI, ME e EPP de grau de risco 1 ou 2, sem eliminar exames ocupacionais nem ASO.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que é PGR e quem precisa ter?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O PGR (Programa de Gerenciamento de Riscos) substituiu o PPRA e materializa o gerenciamento de riscos ocupacionais previsto na NR-01. Como regra, ele identifica, avalia e controla os riscos da operação, sendo base para o PCMSO e para os eventos S-2240 do eSocial. A NR-01 prevê hipóteses específicas de dispensa de elaboração para pequenos negócios.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quando o exame admissional deve ser realizado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O exame admissional deve ser realizado antes de o novo empregado assumir as atividades, conforme a NR-07. Após o exame clínico, o médico emite o ASO, e as informações de monitoramento são enviadas ao eSocial pelo evento S-2220 no prazo aplicável.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que é ASO e qual a sua validade?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O ASO (Atestado de Saúde Ocupacional) é emitido pelo médico que realiza o exame clínico e registra se o trabalhador está apto ou inapto para a função. Ele documenta um exame específico; os próximos exames seguem os prazos e critérios definidos na NR-07 e no PCMSO.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quais são os riscos de não ter SST organizada?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Falhas na SST podem resultar em exames atrasados, documentos incoerentes, eventos incorretos no eSocial e medidas fiscais conforme a infração. Também dificultam o acompanhamento de afastamentos e a demonstração das medidas adotadas pela empresa.',
      },
    },
  ],
};

const regionalCards = [
  { city: 'São Paulo', slug: 'sao-paulo', desc: 'Unidade central com atendimento especializado.' },
  { city: 'Santo André', slug: 'santo-andre', desc: 'Suporte completo para o polo industrial do ABC.' },
  { city: 'São Bernardo', slug: 'sao-bernardo', desc: 'Atendimento para operações industriais e fabris.' },
  { city: 'São Caetano', slug: 'sao-caetano', desc: 'Saúde ocupacional para serviços e tecnologia.' },
  { city: 'Diadema', slug: 'diadema', desc: 'SST focada em operações químicas e metal mecânicas.' },
  { city: 'Osasco', slug: 'osasco', desc: 'Fluxo ágil para empresas de logística, varejo e tech.' },
  { city: 'Guarulhos', slug: 'guarulhos', desc: 'Atendimento para operações aeroportuárias e logísticas.' },
  { city: 'Barueri', slug: 'barueri', desc: 'Apoio para empresas de Alphaville e polos corporativos.' },
];

const objections = [
  {
    obj: '"Minha consultoria atual já resolve isso."',
    resp: 'A SERMST começa pelo que a empresa já possui. A revisão verifica se PGR, PCMSO, laudos, exames e informações do eSocial correspondem à operação e indica os pontos que precisam de ajuste.',
  },
  {
    obj: '"Nunca tive problema, então devo estar bem."',
    resp: 'A ausência de ocorrência não confirma que os processos estão corretos. Vale conferir prazos, documentos e riscos sempre que houver mudança de função, equipamento, layout ou prestador.',
  },
  {
    obj: '"SST é só burocracia."',
    resp: 'Quando a rotina é clara, o RH reduz retrabalho, acompanha admissões e encontra os documentos com mais facilidade. A prevenção também deixa de depender apenas de providências tomadas depois do problema.',
  },
  {
    obj: '"Para o meu porte isso deve sair caro."',
    resp: 'O custo depende do número de empregados, das funções, dos riscos, das unidades e dos serviços necessários. O primeiro passo é definir esse escopo antes de indicar um plano.',
  },
];

const stats = [
  companyFacts.history,
  companyFacts.livesServed,
  companyFacts.companiesServed,
  companyFacts.avoidedFines,
];

const structureItems = [
  'Laboratório de análises próprio e certificado',
  'Atendimento in company para rotinas selecionadas',
  'Estrutura centralizada para reduzir deslocamentos',
  'Mais controle sobre exames complementares e fluxo ocupacional',
];

export default function Home() {
  return (
    <div className="flex w-full flex-1 flex-col overflow-hidden">
      <section className="relative flex min-h-[560px] w-full items-center overflow-hidden bg-brand-900 py-12 lg:min-h-[680px]">
        <div className="absolute inset-0">
            <Image
              src={siteImages.home.heroClinic.src}
              alt={siteImages.home.heroClinic.alt}
            fill
            sizes="100vw"
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900/95 via-brand-900/84 to-brand-900/40" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808010_1px,transparent_1px),linear-gradient(to_bottom,#80808010_1px,transparent_1px)] bg-[size:24px_24px]" />
          <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-brand-500/25 blur-[120px]" />
          <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-accent-pink/20 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-[1280px] flex-col items-center justify-between gap-10 px-6 lg:-mt-24 lg:flex-row lg:px-8">
          <div className="w-full max-w-2xl text-center lg:text-left">
            <div className="hero-anim-badge mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 py-1.5 pl-1.5 pr-4 shadow-xl backdrop-blur-md md:mb-8">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-pink shadow-[0_0_15px_rgba(227,27,69,0.35)]">
                <span className="text-xs text-white">+</span>
              </span>
              <span className="text-[10px] font-black uppercase tracking-widest text-white md:text-xs">
                Mais de 55 anos em saúde e segurança do trabalho
              </span>
            </div>

            <h1 className="hero-anim-h1 h1-standard mb-5 text-white drop-shadow-[0_10px_20px_rgba(0,0,0,0.75)]">
              Medicina ocupacional e SST
              <br className="hidden sm:block" />
              <span className="block bg-gradient-to-r from-accent-pink via-[#ff7a93] to-white bg-clip-text text-transparent sm:inline">
                {' '}sem desorganizar o RH.
              </span>
            </h1>

            <p className="hero-anim-p mx-auto mb-8 max-w-2xl rounded-xl bg-brand-900/35 p-5 text-lg font-medium leading-relaxed text-slate-200 backdrop-blur-sm md:bg-transparent md:p-0 md:text-xl md:backdrop-blur-none lg:mx-0 lg:border-l-[3px] lg:border-accent-pink lg:pl-6">
              Exames ocupacionais, PGR, PCMSO, LTCAT e apoio ao eSocial em um fluxo pensado para admissões, prazos e documentos da empresa.
            </p>

            <div className="hero-anim-cta flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <Link href="/contato" className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[linear-gradient(180deg,rgba(227,27,69,0.34)_0%,rgba(47,22,66,0.86)_100%)] px-8 py-4 font-bold text-white shadow-[0_14px_32px_-16px_rgba(227,27,69,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:shadow-[0_18px_40px_-16px_rgba(227,27,69,0.68)] sm:w-auto">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_58%)] opacity-90" />
                <span className="relative z-10 flex items-center gap-2">
                  Solicitar diagnóstico gratuito
                  <span className="transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </span>
              </Link>
              <Link href="/solucoes" className="inline-flex w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-4 font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/40 hover:bg-white/15 sm:w-auto">
                Ver soluções SST
              </Link>
            </div>
          </div>

          <div className="hidden w-full max-w-sm lg:block">
            <div className="hero-anim-card relative overflow-hidden rounded-[2rem] border border-white/20 bg-white/10 p-8 text-center shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] backdrop-blur-xl">
              <div className="absolute left-0 top-0 h-1/2 w-full bg-gradient-to-b from-white/10 to-transparent" />
              <div className="relative mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/20 bg-gradient-to-br from-brand-500 to-brand-900 shadow-xl">
                <ShieldCheck className="h-8 w-8 text-white" />
              </div>
              <span className="relative mb-2 block text-2xl font-black tracking-tight text-white">Estrutura própria</span>
              <p className="relative mb-6 font-bold leading-relaxed text-white/95">
                Atendimento clínico, exames complementares e gestão de SST conectados à rotina das empresas.
              </p>
              <div className="relative mb-6 h-px w-full bg-white/20" />
              <div className="relative flex w-full items-center justify-center gap-6 text-white">
                <div className="text-center">
                  <span className="block text-2xl font-black leading-none">{companyFacts.companiesServed.value}</span>
                  <span className="mt-2 inline-block text-[10px] font-black uppercase tracking-[0.15em] text-white">Empresas</span>
                </div>
                <div className="h-8 w-px bg-white/20" />
                <div className="text-center">
                  <span className="block text-2xl font-black leading-none">{companyFacts.history.value}</span>
                  <span className="mt-2 inline-block text-[10px] font-black uppercase tracking-[0.15em] text-white">Anos</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-30 mt-10 px-4 md:-mt-24">
        <div className="relative mx-auto flex max-w-6xl flex-col items-center justify-between gap-10 overflow-hidden rounded-[2rem] border border-white/60 bg-white/90 p-8 shadow-[0_20px_40px_-15px_rgba(11,19,60,0.2)] backdrop-blur-xl lg:flex-row lg:p-12">
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_3s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent" />

          <div className="relative z-10 flex-1 text-center lg:text-left">
            <h2 className="mb-2 text-3xl font-black leading-tight text-brand-900">
              Soluções em medicina do trabalho
              <br />
              <span className="text-accent-pink outline-text-subtle">que geram resultado operacional</span>
            </h2>
            <p className="mt-4 text-sm font-medium leading-relaxed text-slate-700 lg:pr-10">
              Cada serviço foi estruturado para reduzir atrasos em admissões, manter documentos atualizados e facilitar o acompanhamento das obrigações de SST.
            </p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-slate-600 lg:pr-10">
              Para o RH que precisa de exame admissional com ASO no mesmo dia e integração com eSocial, a SERMST tem laboratório próprio e fluxo ocupacional que não trava contratação.
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-center gap-6 sm:gap-12">
            <div className="group text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-500 shadow-sm transition-all duration-300 group-hover:bg-brand-500 group-hover:text-white">
                <Clock className="h-6 w-6" />
              </div>
              <p className="text-[10px] font-bold uppercase text-brand-900 sm:text-xs">Fluxo ágil</p>
            </div>

            <div className="group text-center">
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50 text-brand-500 shadow-sm transition-all duration-300 group-hover:bg-brand-500 group-hover:text-white">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <p className="text-[10px] font-bold uppercase text-brand-900 sm:text-xs">Rotina eSocial</p>
            </div>
          </div>

          <div className="relative z-10 w-full shrink-0 overflow-hidden rounded-xl bg-accent-pink p-6 text-center text-white shadow-lg shadow-accent-pink/30 lg:w-auto">
            <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
            <p className="relative z-10 mb-3 text-sm font-medium">
              Exames, laudos e rotina SST
              <br />
              em um só fluxo.
            </p>
            <a href="https://wa.me/5511915146447?text=Quero%20entender%20as%20solucoes%20de%20SST%20da%20SERMST" className="btn-light-safe relative z-10 flex w-full text-sm lg:min-w-[240px]">
              Pedir orçamento
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 pb-10 md:pb-4">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-[2rem] border border-brand-900/10 bg-white p-6 shadow-[0_18px_40px_-24px_rgba(11,19,60,0.22)] md:p-8">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-3xl">
                <span className="mb-3 inline-block rounded-full bg-brand-900/8 px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-brand-900">
                  Ferramenta qualificadora
                </span>
                <h2 className="text-2xl font-black text-brand-900 md:text-3xl">
                  Descubra o risco da empresa antes de pedir proposta
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-600 md:text-base">
                  A Calculadora de Risco cruza CNPJ ou CNAE com grau de risco, RAT, SESMT e NR-05 para mostrar se ha CIPA, representante da NR-05 ou apoio por SESMT. Depois, a própria ferramenta pode enviar esse enquadramento para a equipe comercial.
                </p>
              </div>
              <Link href="/rh/calculadora-cnae-grau-de-risco" className="btn-dark-safe w-full lg:w-auto">
                Abrir Calculadora de Risco
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative container mx-auto max-w-6xl overflow-hidden bg-white px-4 py-24 lg:py-32">
        <div className="absolute inset-0 md:hidden">
          <Image
            src={siteImages.home.ownerPortrait.src}
            alt={siteImages.home.ownerPortrait.alt}
            fill
            sizes="100vw"
            className="object-cover object-top opacity-[0.16]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/72 via-white/84 to-white/94" />
        </div>

        <div className="relative z-10 flex flex-col items-center gap-12 md:flex-row lg:gap-20">
          <div className="relative flex w-full justify-center md:w-1/2">
            <div className="absolute -inset-4 z-0 -rotate-3 rounded-[2rem] bg-slate-100 transition-transform duration-500 hover:rotate-0" />
            <div className="absolute -bottom-6 left-8 z-0 h-32 w-32 rounded-full bg-accent-pink/12 blur-3xl" />
            <div className="group relative z-10 h-[400px] w-full max-w-md overflow-hidden rounded-[1.5rem] border border-slate-200 bg-white shadow-xl md:h-[560px]">
              <Image
                src={siteImages.home.ownerPortrait.src}
                alt={siteImages.home.ownerPortrait.alt}
                fill
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-brand-900/18 via-transparent to-white/0" />
              <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-20 bg-gradient-to-l from-white/14 to-transparent" />
            </div>
          </div>

          <div className="w-full rounded-[2rem] border border-white/70 bg-white/78 p-6 shadow-[0_18px_40px_-24px_rgba(11,19,60,0.22)] backdrop-blur-[2px] md:w-1/2 md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none md:backdrop-blur-0">
            <span className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-accent-pink">
              <span className="h-px w-8 bg-accent-pink" />
              Terceirize o risco
            </span>
            <h2 className="mb-6 text-4xl font-black leading-tight text-brand-900 md:text-5xl">
              Seu parceiro para
              <br />
              <span className="relative inline-block pb-1">
                ganhar previsibilidade
                <svg className="absolute -bottom-1 left-0 h-3 w-full text-accent-pink/30" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span>
            </h2>
            <p className="mb-8 text-lg font-medium leading-relaxed text-slate-600">
              A empresa pode contratar exames e também organizar admissões, documentos e a rotina de medicina do trabalho em um fluxo mais claro.
            </p>

            <ul className="mb-12 space-y-6">
              <li className="group flex items-start gap-4 rounded-2xl border border-transparent p-2 transition-all hover:border-slate-200 hover:bg-slate-50">
                <div className="rounded-lg bg-brand-50 p-2.5 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <FileCheck2 className="h-5 w-5" />
                </div>
                <div>
                  <strong className="block text-lg text-brand-900">Menos risco jurídico</strong>
                  <span className="mt-1 block text-slate-600">Laudos, exames e evidências técnicas mais alinhados a fiscalizações, processos e exigências de rotina.</span>
                </div>
              </li>
              <li className="group flex items-start gap-4 rounded-2xl border border-transparent p-2 transition-all hover:border-slate-200 hover:bg-slate-50">
                <div className="rounded-lg bg-brand-50 p-2.5 text-brand-500 transition-colors group-hover:bg-brand-500 group-hover:text-white">
                  <Building2 className="h-5 w-5" />
                </div>
                <div>
                  <strong className="block text-lg text-brand-900">Mais produtividade</strong>
                  <span className="mt-1 block text-slate-700">Processos centralizados ajudam o RH a contratar, liberar e acompanhar melhor cada etapa ocupacional.</span>
                </div>
              </li>
            </ul>

            <Link href="/contato" className="btn-dark-safe group">
              Falar com a equipe comercial
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-slate-50 py-24 lg:py-32">
        <div className="absolute right-0 top-0 h-full w-1/2 origin-top-right -skew-x-12 rounded-bl-[100px] bg-brand-900/5 mix-blend-multiply" />
        <div className="container relative z-10 mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-center gap-12 md:flex-row-reverse lg:gap-20">
            <div className="relative flex w-full justify-center md:w-1/2">
              <div className="relative z-10 h-80 w-80 lg:h-[450px] lg:w-[450px]">
                <Image
                  src={siteImages.home.medicalStructure.src}
                  alt={siteImages.home.medicalStructure.alt}
                  fill
                  sizes="(max-width: 1024px) 80vw, 36vw"
                  className="object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]"
                  priority
                />
              </div>
              <div className="absolute left-1/2 top-1/2 z-0 h-[110%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-brand-500/10 to-accent-pink/5 blur-3xl" />
            </div>

            <div className="w-full md:w-1/2">
              <span className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
                <span className="h-px w-8 bg-accent-pink" />
                Tecnologia e cuidado
              </span>
              <h2 className="mb-6 text-4xl font-black leading-tight text-brand-900 md:text-5xl">
                Segurança e economia
                <br />
                para sua empresa
              </h2>
              <p className="mb-8 text-lg font-medium text-slate-700">
                A SERMST gerencia a saúde ocupacional da empresa com estrutura própria, leitura técnica e atendimento ágil para reduzir perda de tempo e aumentar previsibilidade.
              </p>

              <div className="mb-10 grid gap-4">
                {structureItems.map((item) => (
                  <div key={item} className="flex items-center gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-transform duration-300 hover:translate-x-1">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-green-50 text-green-500 shadow-inner">
                      <CheckCircle2 className="h-6 w-6" />
                    </div>
                    <span className="text-sm font-semibold leading-snug text-brand-900 md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-24 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-black tracking-tight text-brand-900 md:text-5xl lg:text-6xl">
              Mais de <span className="bg-gradient-to-r from-brand-500 to-accent-pink bg-clip-text text-transparent">55 anos</span> de
              <br />
              história em saúde e SST
            </h2>
          </div>

          <div className="relative mb-[-60px] flex flex-col items-end justify-center gap-6 px-4 md:flex-row md:px-10">
            <div className="w-full md:w-[45%]">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border-[6px] border-white bg-slate-100 shadow-2xl transition-transform duration-500 hover:-translate-y-1">
                <Image
                  src={siteImages.home.clinicOperations.src}
                  alt={siteImages.home.clinicOperations.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-brand-900/10 mix-blend-multiply transition-colors duration-500 hover:bg-transparent" />
              </div>
            </div>

            <div className="w-full pb-4 md:w-[55%] md:pb-0">
              <div className="relative z-20 aspect-[16/9] overflow-hidden rounded-2xl border-[6px] border-white bg-slate-100 shadow-2xl transition-transform duration-500 hover:-translate-y-1">
                <Image
                  src={siteImages.home.occupationalLab.src}
                  alt={siteImages.home.occupationalLab.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 36vw"
                  className="object-cover grayscale-[30%] transition-all duration-700 hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-brand-900/5 mix-blend-multiply transition-colors duration-500 hover:bg-transparent" />
              </div>
            </div>
          </div>

          <div className="relative z-0 overflow-hidden rounded-3xl border border-brand-800 bg-brand-900 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-800 via-brand-900 to-[#050a1f] p-8 pb-12 pt-24 shadow-[0_30px_60px_-15px_rgba(11,19,60,0.5)]">
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            <div className="relative z-10 grid grid-cols-2 gap-8 text-center md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <span className="mb-2 block text-4xl font-black text-white drop-shadow-md lg:text-5xl">{stat.value}</span>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/60">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">Vamos ser diretos</span>
            <h2 className="text-4xl font-black leading-[1.05] tracking-tight text-brand-900 md:text-5xl lg:text-6xl">
              Você provavelmente já pensou
              <br />
              <span className="font-serif italic text-accent-pink">uma dessas coisas:</span>
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {objections.map((item) => (
              <div key={item.obj} className="h-full rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all hover:border-accent-pink/30 hover:shadow-lg">
                <p className="mb-4 text-xl font-black leading-tight text-brand-900 md:text-2xl">{item.obj}</p>
                <p className="font-medium leading-relaxed text-slate-700">{item.resp}</p>
              </div>
            ))}
          </div>

          <div className="mt-14 text-center">
            <Link href="/contato" className="btn-dark-safe px-10 text-base">
              Falar com a SERMST sobre meu cenário
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-brand-900 py-20 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute right-0 top-0 h-[400px] w-[400px] rounded-full bg-accent-pink/20 blur-[100px]" />
        <div className="relative z-10 mx-auto max-w-[1100px] px-6 lg:px-8">
          <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
            <div className="mx-auto flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-2 border-accent-pink bg-accent-pink/10 md:mx-0 md:h-40 md:w-40">
              <ShieldCheck className="h-16 w-16 text-accent-pink md:h-20 md:w-20" />
            </div>
            <div className="text-center md:text-left">
              <span className="mb-3 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">Compromisso SERMST</span>
              <h2 className="mb-5 text-3xl font-black leading-tight md:text-4xl lg:text-5xl">
                Falamos de dono para dono.
              </h2>
              <p className="text-lg font-medium leading-relaxed text-slate-200 md:text-xl">
                A equipe avalia o que a empresa já tem antes de recomendar mudanças. Se os documentos estiverem adequados, isso também faz parte do retorno.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50 py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6">
          <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">Presença regional</span>
              <h2 className="text-4xl font-black leading-tight text-brand-900 md:text-5xl">
                Medicina do trabalho em
                <br />
                <span className="font-serif italic text-accent-pink">toda a Grande São Paulo</span>
              </h2>
              <p className="mt-6 text-lg font-medium leading-relaxed text-slate-600">
                Atendimento estratégico para as principais regiões industriais e corporativas da capital, do ABC e da Grande SP. Unidade de referência no centro de São Paulo, com fluxo expresso para admissão e gestão SST.
              </p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-slate-500">
              Precisa de clínica de exame admissional em São Paulo ou na Grande SP? A SERMST tem unidade central no centro histórico e cobertura regional para atender o fluxo de admissões da sua empresa com mais previsibilidade.
            </p>
            <p className="mt-4 text-sm font-medium leading-relaxed text-slate-500">
              Para operações com motoristas e para pessoa física que busca{' '}
              <Link href="/servicos/exame-toxicologico-clt/sao-paulo" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4 hover:text-accent-pink">
                exame toxicológico para CNH C, D e E
              </Link>
              , a SERMST também oferece atendimento em São Paulo com validade nacional e orientação clara sobre empresa, admissão, demissão e renovação.
            </p>
          </div>

            <Link href="/servicos" className="btn-dark-safe text-sm uppercase tracking-wider">
              Ver todos os serviços
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {regionalCards.map((loc) => (
              <Link key={loc.slug} href={`/servicos/exame-admissional-expresso/${loc.slug}`} className="group relative block h-full overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-accent-pink/20 hover:shadow-2xl">
                <div className="absolute right-0 top-0 -mr-8 -mt-8 h-24 w-24 rounded-bl-full bg-brand-900/5 transition-colors group-hover:bg-accent-pink/10" />
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-50 text-brand-900 shadow-inner transition-all group-hover:bg-brand-900 group-hover:text-white">
                  <Navigation className="h-6 w-6" />
                </div>
                <h3 className="mb-3 text-xl font-black text-brand-900 transition-colors group-hover:text-accent-pink">{loc.city}</h3>
                <p className="mb-6 text-sm font-medium leading-relaxed text-slate-500">{loc.desc}</p>
                <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-900 transition-all group-hover:gap-4">
                  Acessar unidade
                  <ArrowRight className="h-4 w-4 text-accent-pink" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative flex min-h-[500px] flex-col overflow-hidden bg-brand-900 md:flex-row">
        <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-transparent via-accent-pink to-transparent" />

        <div className="relative z-10 flex w-full flex-col justify-center p-12 md:w-1/2 lg:p-24">
          <h2 className="mb-8 text-4xl font-black leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
            Atendimento
            <br />
            <span className="text-accent-pink">rápido</span>, sem
            <br />
            gargalo
          </h2>
          <p className="rounded-r-xl border-l-4 border-accent-pink/50 bg-brand-900/50 p-4 pl-6 text-lg leading-relaxed text-slate-300 backdrop-blur-sm md:text-xl">
            Faça exames no mesmo dia, organize laudos com mais previsibilidade e tenha apoio comercial para destravar a rotina de SST da sua empresa.
          </p>
        </div>

        <div className="relative flex w-full items-center overflow-hidden bg-white/5 px-4 py-24 md:w-1/2 md:px-0 md:py-0">
          <div className="relative z-10 w-full">
            <div className="group flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-[2rem] border-[8px] border-brand-900 bg-slate-100 shadow-[0_0_50px_rgba(0,0,0,0.5)] md:absolute md:-left-16 md:top-1/2 md:w-[130%] md:-translate-y-1/2 md:border-[12px]">
              <div className="absolute inset-0">
                <Image
                  src={siteImages.home.clinicalService.src}
                  alt={siteImages.home.clinicalService.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="object-cover grayscale-[20%] transition-all duration-700 group-hover:scale-[1.02] group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-brand-900/20 mix-blend-overlay" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </div>
  );
}
