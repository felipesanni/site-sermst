import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/fade-in';
import { ShieldCheck, Building2, Users, ArrowRight, CheckCircle2, Clock } from 'lucide-react';
import { siteImages } from '@/lib/site-images';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';
import { companyFacts, institutionalDescription } from '@/lib/company-facts';

export const metadata: Metadata = {
  title: 'Quem somos | 55 anos de história | SERMST',
  description:
    'Conheça a história da SERMST, que já atendeu mais de 150 mil vidas e mais de 3.500 empresas com saúde ocupacional e segurança do trabalho.',
  alternates: { canonical: 'https://sermst.com.br/quem-somos' },
  openGraph: {
    title: 'Quem somos | 55 anos de história | SERMST',
    description:
      'Mais de 55 anos de história em saúde ocupacional, segurança do trabalho, treinamentos e apoio às empresas.',
    url: 'https://sermst.com.br/quem-somos',
    type: 'website',
    locale: 'pt_BR',
  },
};

const diferenciais = [
  { icon: Clock, label: companyFacts.history.value, desc: companyFacts.history.label },
  { icon: Users, label: companyFacts.livesServed.value, desc: companyFacts.livesServed.label },
  { icon: Building2, label: companyFacts.companiesServed.value, desc: companyFacts.companiesServed.label },
  { icon: ShieldCheck, label: companyFacts.avoidedFines.value, desc: companyFacts.avoidedFines.label },
];

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://sermst.com.br/quem-somos#aboutpage',
  url: 'https://sermst.com.br/quem-somos',
  name: 'Quem somos | 55 anos de história | SERMST',
  inLanguage: 'pt-BR',
  about: {
    '@type': 'MedicalOrganization',
    '@id': 'https://sermst.com.br/#organization',
    name: 'SERMST',
    legalName: 'SERMST Gestão Ocupacional Ltda',
    description: institutionalDescription,
    url: 'https://sermst.com.br',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Largo do Paissandu',
      addressLocality: 'São Paulo',
      addressRegion: 'SP',
      addressCountry: 'BR',
    },
  },
};

export default function QuemSomosPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <BreadcrumbJsonLd items={[{ name: 'Início', item: 'https://sermst.com.br' }, { name: 'Quem Somos' }]} />
      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 z-0 opacity-15">
          <Image src={siteImages.institutional.corporateHealthHero.src} alt="Clínica de medicina do trabalho SERMST no Largo do Paissandu, em São Paulo" fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-900 via-brand-900/85 to-brand-900/40" />
        </div>
        <div className="absolute inset-0 z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute right-0 top-0 z-10 h-[500px] w-[500px] rounded-full bg-brand-500/30 blur-[120px] mix-blend-screen" />

        <div className="relative z-20 mx-auto w-full max-w-[1280px] px-6 py-28 lg:px-8">
          <FadeIn direction="up">
            <span className="mb-8 inline-block rounded-full border border-accent-pink/20 bg-accent-pink/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
              Quem somos
            </span>
            <h1 className="h1-standard mb-8 max-w-4xl">
              Medicina ocupacional para
              <br />
              empresas que precisam
              <br />
              <span className="font-serif italic text-accent-pink">manter a SST em ordem.</span>
            </h1>
            <p className="max-w-3xl border-l-4 border-accent-pink pl-6 text-xl font-medium leading-relaxed text-slate-200 md:text-2xl">
              Há mais de 55 anos, acompanhamos as mudanças da saúde e da segurança do trabalho no Brasil.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-[1100px] px-6 lg:px-8">
          <FadeIn direction="up">
            <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">Por que existimos</span>
            <h2 className="mb-12 text-3xl font-black leading-tight text-brand-900 md:text-5xl">
              SST não funciona bem quando vira apenas papelada.
              <br />
              <span className="text-slate-500">Os documentos precisam acompanhar a operação real.</span>
            </h2>
          </FadeIn>

          <div className="space-y-7 text-lg font-medium leading-relaxed text-slate-700 md:text-xl">
            <FadeIn direction="up" delay={0.1}>
              <p>
                A história da SERMST começou na área da saúde, com exames como a abreugrafia. Conforme a medicina ocupacional evoluiu e novas exigências legais surgiram, o atendimento também mudou.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.2}>
              <p>
                Hoje, a empresa reúne exames ocupacionais, programas e laudos técnicos, treinamentos, consultoria especializada e acompanhamento de perícias. O suporte jurídico e trabalhista relacionado às obrigações legais completa esse trabalho quando a situação exige uma leitura mais ampla.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.3}>
              <p className="my-10 border-l-4 border-accent-pink pl-6 text-2xl font-bold leading-snug text-brand-900 md:text-3xl">
                A legislação mudou, os exames mudaram e a forma de registrar a SST também. O compromisso permaneceu: proteger trabalhadores, empresas e o patrimônio do empresário.
              </p>
            </FadeIn>
            <FadeIn direction="up" delay={0.4}>
              <p>
                O trabalho não termina na entrega dos documentos. Exames, laudos, programas e informações do eSocial precisam refletir o que realmente acontece na operação da empresa.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-100 bg-slate-50 py-24">
        <div className="mx-auto w-full max-w-[1280px] px-6 lg:px-8">
          <FadeIn direction="up">
            <span className="mb-4 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">Em números</span>
            <h2 className="mb-14 max-w-3xl text-3xl font-black leading-tight text-brand-900 md:text-5xl">
              Uma trajetória medida em <span className="text-accent-pink">pessoas e empresas atendidas</span>
            </h2>
          </FadeIn>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
                Menos improviso, mais acompanhamento.
              </h2>
              <div className="space-y-6 text-lg font-medium leading-relaxed text-slate-700">
                <p>
                  Nosso papel é organizar documentos, exames e informações para que o RH saiba o que precisa ser feito e em qual prazo. Isso inclui conferir se os laudos refletem a operação e se o fluxo de SST acompanha admissões, mudanças de risco e desligamentos.
                </p>
                <p>
                  Atendimento in company ou presencial, sem necessidade de agendamento. Equipe multidisciplinar com médicos, engenheiros e técnicos em SST. Laboratório próprio para exames complementares, com estrutura apresentada na página da{' '}
                  <Link href="/a-clinica" className="font-bold text-brand-700 underline decoration-accent-pink/60 underline-offset-4 hover:text-accent-pink">
                    clínica SERMST
                  </Link>
                  . A integração reduz retrabalho e facilita o acompanhamento pela empresa.
                </p>
                <p>
                  A condução técnica também tem rosto: conheça o perfil de{' '}
                  <Link href="/equipe/felipe-sannino" className="font-bold text-brand-700 underline decoration-accent-pink/60 underline-offset-4 hover:text-accent-pink">
                    Felipe Sannino
                  </Link>{' '}
                  e de{' '}
                  <Link href="/equipe/luiz-cesar-sannino" className="font-bold text-brand-700 underline decoration-accent-pink/60 underline-offset-4 hover:text-accent-pink">
                    Luiz Cesar Sannino
                  </Link>{' '}
                  para entender melhor a experiência por trás da operação.
                </p>
                <p className="font-bold text-brand-900">
                  Com a rotina de SST acompanhada de perto, o empresário pode cuidar do crescimento do negócio sem deixar obrigações e prazos fora de controle.
                </p>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="sticky top-24 rounded-[2rem] bg-brand-900 p-10 text-white shadow-[0_30px_60px_-15px_rgba(11,19,60,0.4)]">
                <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-accent-pink">Para quem é a SERMST</p>
                <ul className="mb-8 space-y-4">
                  {[
                    'Empresas que precisam organizar a rotina de SST',
                    'Grupos com múltiplas empresas e CNPJs',
                    'RH e DP que precisam parar de retrabalhar ASO',
                    'Empresas insatisfeitas com a consultoria atual',
                    'Operações com muitas admissões e desligamentos',
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
                <Link href="/assinaturas" className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-brand-900/30 px-6 py-3 text-sm font-bold text-brand-900 transition-colors hover:border-brand-900 hover:bg-slate-50">
                  Ver planos de SST por assinatura
                  <ArrowRight className="h-4 w-4" />
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
              Quer entender o que
              <br />
              <span className="text-accent-pink">sua empresa precisa?</span>
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-xl font-medium leading-relaxed text-slate-300">
              Em 15 minutos a equipe comercial entende o porte, a operação e o momento da empresa antes de indicar exame, laudo ou gestão SST.
            </p>
            <Link href="/contato" className="btn-primary-safe-lg text-lg shadow-2xl">
              Conversar com a equipe
              <ArrowRight className="h-5 w-5" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
