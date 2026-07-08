import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/fade-in';
import { CheckCircle2, AlertTriangle, ShieldCheck, Users, ArrowRight, Target, FileWarning } from 'lucide-react';

/**
 * Função Encarregado — página migrada do WordPress (/exames/função-encarregado-...)
 *
 * No site antigo essa página gerou 346 cliques e 125.226 impressões em 16 meses
 * (CTR 0,3%, posição 4,8). É a página de maior impressão do domínio. O intent é
 * misto: ~70% candidato a vaga querendo entender o cargo, ~30% gestor/RH
 * pesquisando responsabilidades para definir cargo, plano de carreira ou termo
 * de descrição. O conteúdo cobre os dois, mas os CTAs e o bloco lateral são
 * orientados para CONVERTER o gestor — que é quem fecha contrato com a SERMST.
 */
export const metadata: Metadata = {
  title: 'O que faz um encarregado? Função e responsabilidades | SERMST',
  description:
    'Entenda o que faz um encarregado, quais responsabilidades ele assume, a diferença para supervisor e os cuidados de SST que a empresa precisa formalizar.',
  alternates: { canonical: 'https://sermst.com.br/rh/funcao-encarregado' },
  openGraph: {
    title: 'O que faz um encarregado? Função e responsabilidades | SERMST',
    description:
      'Veja o que faz um encarregado, quais responsabilidades assume e onde a empresa costuma errar ao estruturar esse cargo.',
    url: 'https://sermst.com.br/rh/funcao-encarregado',
    type: 'article',
    locale: 'pt_BR',
  },
};

const responsabilidades = [
  { t: 'Liderança operacional direta', d: 'Coordena a equipe na execução das atividades, distribui tarefas e cobra resultado dentro do plano do dia.' },
  { t: 'Treinamento e integração', d: 'Apoia a integração de novos colaboradores e o reforço de procedimentos com quem já está na operação.' },
  { t: 'Cumprimento de procedimentos', d: 'Garante que a equipe siga os procedimentos operacionais e os requisitos técnicos definidos pela liderança.' },
  { t: 'Segurança do trabalho na linha de frente', d: 'É o responsável imediato por exigir uso de EPI, observar comportamento de risco e reportar incidentes ao SESMT.' },
  { t: 'Reporte de produtividade e ocorrências', d: 'Consolida indicadores do turno (produção, falhas, paradas, acidentes) e leva à supervisão.' },
  { t: 'Mediação de conflitos da equipe', d: 'Resolve atritos do dia a dia operacional antes de escalar para RH ou supervisão.' },
];

const perfilIdeal = [
  'Experiência comprovada na atividade que vai liderar (não dá para liderar o que não conhece)',
  'Comunicação direta — fala simples, escrita clara, sem rodeio',
  'Postura de exemplo (chega no horário, usa EPI, segue procedimento)',
  'Tomada de decisão sob pressão sem travar o turno',
  'Conhecimento das NRs aplicáveis à atividade da equipe',
  'Capacidade de dar e receber feedback sem virar conflito pessoal',
];

const errosComuns = [
  {
    titulo: 'Promover por tempo de casa, não por capacidade de liderar',
    desc: 'O melhor operador raramente é o melhor encarregado. Liderar exige habilidade de gente, não só técnica. Promoção mal feita gera duas perdas: o operador deixa de produzir e a equipe vira o caos.',
  },
  {
    titulo: 'Não treinar o encarregado em SST',
    desc: 'O encarregado é responsabilizado por acidente da equipe — civil e criminalmente, em alguns casos. Sem treinamento formal em NRs aplicáveis, a empresa fica exposta a passivo trabalhista que aparece anos depois.',
  },
  {
    titulo: 'Confundir com supervisor',
    desc: 'Encarregado é hierarquia operacional direta. Supervisor coordena encarregados. Misturar atribuições gera desorganização, conflito de papéis e perda de produtividade.',
  },
  {
    titulo: 'Esquecer do exame ocupacional periódico',
    desc: 'Cargo de liderança não dispensa PCMSO. Encarregado precisa de exame admissional, periódico e demissional como qualquer colaborador. Ignorar o fluxo pode gerar inconsistência no eSocial e risco de autuação.',
  },
];

const faq = [
  {
    q: 'Qual a diferença entre encarregado e supervisor?',
    a: 'Encarregado é hierarquia operacional imediata: lidera a execução do turno, está com a equipe no chão de fábrica, na obra ou no ponto de operação. Supervisor coordena encarregados, gerencia mais de uma equipe ou turno e tem responsabilidade de planejamento. Em algumas empresas pequenas, os papéis se misturam — mas na CLT e nos planos de cargo as funções são distintas.',
  },
  {
    q: 'O encarregado precisa de exame admissional e periódico?',
    a: 'Sim. Toda contratação CLT exige ASO admissional. O periódico é exigido pelo PCMSO da empresa, que define a periodicidade dos exames conforme risco do cargo. Pular o periódico do encarregado é falha grave — porque é justamente a função que toma decisão de risco no campo.',
  },
  {
    q: 'Qual o salário médio de um encarregado?',
    a: 'Varia muito por setor e região. Em construção civil em São Paulo, costuma estar entre R$ 3.500 e R$ 6.500. Na indústria, entre R$ 4.000 e R$ 8.000. Em logística e operação fabril, faixa similar. Empresas que pagam abaixo da média perdem o encarregado para a concorrência em meses.',
  },
  {
    q: 'O encarregado pode ser responsabilizado por acidente da equipe?',
    a: 'Pode, e é comum. A responsabilidade do encarregado por SST é solidária com a empresa. Se houver acidente e ficar provado que o encarregado tinha conhecimento do risco e não agiu, ele responde junto. Por isso é crítico que o encarregado tenha treinamento formal nas NRs aplicáveis e que a empresa documente o repasse das instruções.',
  },
  {
    q: 'Como saber se preciso de mais encarregados na operação?',
    a: 'O sinal mais claro é desorganização sob pressão: turnos que viram caos quando aumenta volume, falhas de procedimento que ninguém pega, acidentes ou quase-acidentes recorrentes. Geralmente, em operação industrial, um encarregado para cada 8–15 colaboradores é o ponto de equilíbrio.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Qual a diferença entre encarregado e supervisor?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Encarregado é hierarquia operacional imediata: lidera a execução do turno, está com a equipe no chão de fábrica, na obra ou no ponto de operação. Supervisor coordena encarregados, gerencia mais de uma equipe ou turno e tem responsabilidade de planejamento. Em algumas empresas pequenas, os papéis se misturam — mas na CLT e nos planos de cargo as funções são distintas.',
      },
    },
    {
      '@type': 'Question',
      name: 'O encarregado precisa de exame admissional e periódico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Toda contratação CLT exige ASO admissional. O periódico é exigido pelo PCMSO da empresa, que define a periodicidade dos exames conforme risco do cargo. Pular o periódico do encarregado é falha grave — porque é justamente a função que toma decisão de risco no campo.',
      },
    },
    {
      '@type': 'Question',
      name: 'Qual o salário médio de um encarregado?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Varia muito por setor e região. Em construção civil em São Paulo, costuma estar entre R$ 3.500 e R$ 6.500. Na indústria, entre R$ 4.000 e R$ 8.000. Em logística e operação fabril, faixa similar. Empresas que pagam abaixo da média perdem o encarregado para a concorrência em meses.',
      },
    },
    {
      '@type': 'Question',
      name: 'O encarregado pode ser responsabilizado por acidente da equipe?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Pode, e é comum. A responsabilidade do encarregado por SST é solidária com a empresa. Se houver acidente e ficar provado que o encarregado tinha conhecimento do risco e não agiu, ele responde junto. Por isso é crítico que o encarregado tenha treinamento formal nas NRs aplicáveis e que a empresa documente o repasse das instruções.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como saber se preciso de mais encarregados na operação?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O sinal mais claro é desorganização sob pressão: turnos que viram caos quando aumenta volume, falhas de procedimento que ninguém pega, acidentes ou quase-acidentes recorrentes. Geralmente, em operação industrial, um encarregado para cada 8 a 15 colaboradores é o ponto de equilíbrio.',
      },
    },
  ],
};

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  '@id': 'https://sermst.com.br/rh/funcao-encarregado#article',
  headline: 'O que faz um encarregado? Função, responsabilidades e o ponto cego que pega gestores',
  description: 'Entenda o que faz um encarregado, quais responsabilidades ele assume, a diferença para supervisor e os cuidados de SST que a empresa precisa formalizar.',
  url: 'https://sermst.com.br/rh/funcao-encarregado',
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://sermst.com.br/rh/funcao-encarregado',
  },
  inLanguage: 'pt-BR',
  datePublished: '2025-01-01T00:00:00-03:00',
  dateModified: '2026-07-07T00:00:00-03:00',
  image: ['https://sermst.com.br/images/site/corporate-team.jpg'],
  author: {
    '@type': 'Person',
    '@id': 'https://sermst.com.br/equipe/felipe-sannino#person',
    name: 'Felipe Sannino',
    jobTitle: 'Advogado — Direito do Trabalho e SST · OAB/SP 430.824',
    url: 'https://sermst.com.br/equipe/felipe-sannino',
  },
  publisher: {
    '@id': 'https://sermst.com.br/#organization',
  },
};

export default function FunçãoEncarregadoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative bg-brand-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10">
          <Image src="/images/site/corporate-team.jpg" alt="Encarregado liderando equipe em atividade operacional com responsabilidades de SST" fill sizes="100vw" className="object-cover" priority />
          <div className="absolute inset-0 bg-brand-900/80" />
        </div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-pink/20 rounded-full blur-[120px]" />
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-24 relative z-10">
          <FadeIn direction="up">
            <Link href="/rh" className="inline-flex items-center gap-2 text-accent-pink font-bold text-xs uppercase tracking-[0.2em] mb-6 hover:text-white transition">
              ← Hub de RH e Departamento Pessoal
            </Link>
            <h1 className="h1-standard mb-8 max-w-4xl">
              O que faz um encarregado? Função, responsabilidades e o ponto cego que pega gestores
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl leading-relaxed border-l-4 border-accent-pink pl-6 font-medium">
              Guia direto para gestores, RH e quem está estruturando o cargo: o que esse profissional faz na prática, quais responsabilidades assume, que perfil costuma funcionar e onde SST entra nessa decisão.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* CONTEÚDO + SIDEBAR */}
      <section className="py-20 lg:py-24">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid lg:grid-cols-[1fr_360px] gap-12">
          {/* Conteúdo principal */}
          <article className="prose max-w-none">
            <FadeIn direction="up">
              <h2>O que é a função de encarregado</h2>
              <p>
                O encarregado é a primeira camada formal de liderança operacional dentro da empresa. É quem está no campo, no chão de fábrica, na obra ou no ponto de operação coordenando a execução do trabalho da equipe diretamente. Diferente do operador, tem responsabilidade sobre o resultado do grupo. Diferente do supervisor, está com a mão na execução todo dia.
              </p>
              <p>
                Em empresas familiares, é o cargo mais subestimado e mais decisivo: subestimado porque parece &quot;só mais um da equipe&quot;, decisivo porque é quem traduz o plano da diretoria em comportamento real no turno.
              </p>

              <h2>Responsabilidades reais do encarregado</h2>
            </FadeIn>

            <div className="not-prose grid md:grid-cols-2 gap-4 my-8">
              {responsabilidades.map((r, i) => (
                <FadeIn key={i} direction="up" delay={i * 0.05}>
                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 h-full hover:border-accent-pink/30 transition-colors">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent-pink shrink-0 mt-0.5" />
                      <div>
                        <p className="font-bold text-brand-900 mb-1 leading-tight">{r.t}</p>
                        <p className="text-sm text-slate-600 leading-relaxed">{r.d}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn direction="up">
              <h2>Perfil ideal do encarregado</h2>
              <p>
                Não existe modelo único, mas existe um padrão que funciona na prática — independente do setor:
              </p>
              <ul>
                {perfilIdeal.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>

              <h2>4 erros comuns de gestores ao definir o cargo</h2>
            </FadeIn>

            <div className="not-prose space-y-4 my-8">
              {errosComuns.map((e, i) => (
                <FadeIn key={i} direction="up" delay={i * 0.08}>
                  <div className="border-l-4 border-accent-pink bg-slate-50 rounded-r-xl p-6">
                    <div className="flex items-start gap-4">
                      <AlertTriangle className="w-6 h-6 text-accent-pink shrink-0 mt-1" />
                      <div>
                        <p className="font-bold text-brand-900 mb-2 text-lg leading-tight">{e.titulo}</p>
                        <p className="text-slate-700 leading-relaxed">{e.desc}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

            <FadeIn direction="up">
              <h2>O ponto cego de SST que pega gestores de surpresa</h2>
              <p>
                Aqui está a parte que ninguém te conta na hora de promover um encarregado: <strong>ele entra na linha de frente da responsabilidade civil e até criminal por acidente da equipe.</strong>
              </p>
              <p>
                Se houver acidente grave e a investigação concluir que o encarregado conhecia o risco e não agiu — não exigiu EPI, não corrigiu o procedimento, não reportou condição insegura — ele responde junto com a empresa. Para a empresa, o impacto é direto: se a documentação de SST não comprovar que o encarregado foi treinado, a defesa cai.
              </p>
              <p>
                Isso significa três coisas concretas para quem está estruturando o cargo agora:
              </p>
              <ol>
                <li><strong>Treinamento documentado:</strong> NR aplicável à atividade (NR-10 elétrica, NR-18 construção, NR-35 altura, NR-12 máquinas, etc.) com lista de presença, certificado e renovação periódica.</li>
                <li><strong>PCMSO em dia:</strong> exame admissional, periódico e demissional do encarregado registrados no eSocial — o cargo dele tem risco específico que precisa estar refletido no programa.</li>
                <li><strong>Procedimentos claros e assinados:</strong> ele precisa receber por escrito as instruções de trabalho, e a empresa precisa guardar a evidência.</li>
              </ol>
              <p>
                Sem essas três peças, qualquer acidente vira passivo na empresa. Com as três, a empresa tem defesa técnica e o encarregado tem proteção jurídica.
              </p>
              <p>
                O ponto de partida mais prático é saber qual grau de risco se aplica à atividade da empresa — isso define quais exames, laudos e estruturas de SST são obrigatórios para o cargo. <Link href="/rh/calculadora-cnae-grau-de-risco" className="text-accent-pink font-bold hover:underline">A calculadora de CNAE e grau de risco</Link> faz esse mapeamento automaticamente a partir do CNPJ ou CNAE e já indica CIPA, SESMT e referência de RAT.
              </p>

              <h2>Perguntas frequentes sobre a função de encarregado</h2>
            </FadeIn>

            <div className="not-prose space-y-4 my-8">
              {faq.map((item, i) => (
                <FadeIn key={i} direction="up" delay={i * 0.05}>
                  <details className="group faq-accordion" open={i === 0}>
                    <summary className="faq-summary">
                      <span className="faq-question">{item.q}</span>
                      <span className="faq-icon text-2xl leading-none">+</span>
                    </summary>
                    <div className="faq-answer">
                      <p>{item.a}</p>
                    </div>
                  </details>
                </FadeIn>
              ))}
            </div>
          </article>

          {/* SIDEBAR — CTA reorientado para gestor */}
          <aside className="lg:sticky lg:top-24 lg:self-start space-y-6">
            <FadeIn direction="left">
              <div className="bg-brand-900 text-white rounded-2xl p-7 shadow-[0_20px_40px_-15px_rgba(11,19,60,0.4)]">
                <div className="w-12 h-12 bg-accent-pink/15 border border-accent-pink/30 rounded-xl flex items-center justify-center mb-5">
                  <ShieldCheck className="w-6 h-6 text-accent-pink" />
                </div>
                <h3 className="text-2xl font-black mb-3 leading-tight">
                  Você gerencia encarregados?
                </h3>
                <p className="text-slate-300 leading-relaxed mb-6 text-sm">
                  Se a empresa tem encarregado de turno, esse cargo está dentro do PCMSO da operação. Saber se está em dia é a diferença entre ter defesa em fiscalização ou virar passivo.
                </p>
                <Link
                  href="/contato"
                  className="btn-primary-safe flex w-full text-sm"
                >
                  Auditar SST da minha equipe
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.1}>
              <div className="bg-white border-2 border-slate-200 rounded-2xl p-6">
                <div className="flex items-start gap-3 mb-4">
                  <FileWarning className="w-6 h-6 text-accent-pink shrink-0 mt-1" />
                  <p className="font-black text-brand-900 leading-tight">Risco real de não ter SST documentado</p>
                </div>
                <ul className="space-y-3 text-sm text-slate-700 leading-relaxed">
                  <li className="flex gap-2"><span className="text-accent-pink">•</span> Multa automática no eSocial por evento S-2220 fora do prazo</li>
                  <li className="flex gap-2"><span className="text-accent-pink">•</span> Adicional de insalubridade ou periculosidade pago indevidamente por anos</li>
                  <li className="flex gap-2"><span className="text-accent-pink">•</span> Defesa frágil em ação trabalhista ou perícia judicial</li>
                  <li className="flex gap-2"><span className="text-accent-pink">•</span> Responsabilidade pessoal do gestor em caso de acidente grave</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn direction="left" delay={0.2}>
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6">
                <p className="font-black text-brand-900 mb-3 text-sm uppercase tracking-widest">Mais para gestores</p>
                <ul className="space-y-3">
                  <li>
                    <Link href="/rh/o-que-um-gerente-faz" className="text-slate-700 hover:text-accent-pink transition flex items-center gap-2 group text-sm">
                      <ArrowRight className="w-4 h-4 text-accent-pink shrink-0" />
                      <span className="group-hover:underline">O que um gerente faz</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/rh/quando-demitir-funcionario" className="text-slate-700 hover:text-accent-pink transition flex items-center gap-2 group text-sm">
                      <ArrowRight className="w-4 h-4 text-accent-pink shrink-0" />
                      <span className="group-hover:underline">Quando demitir um funcionário</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/rh/multa-esocial-s2220" className="text-slate-700 hover:text-accent-pink transition flex items-center gap-2 group text-sm">
                      <ArrowRight className="w-4 h-4 text-accent-pink shrink-0" />
                      <span className="group-hover:underline">Multa de eSocial S-2220</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </FadeIn>
          </aside>
        </div>
      </section>

      {/* RECIPROCIDADE — para encarregados */}
      <section className="py-14 border-t border-slate-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm">
              <div className="flex-1">
                <span className="inline-block text-accent-pink font-black text-xs uppercase tracking-[0.2em] mb-3">
                  Para encarregados
                </span>
                <h2 className="text-2xl font-black text-brand-900 mb-3 leading-tight">
                  Seu gestor sabe que o cargo tem responsabilidade direta de SST?
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm">
                  Em caso de acidente, o encarregado responde junto com a empresa — mas só quando não existe documentação de treinamento e instrução de segurança. Encaminhar esse guia para o RH ou para o gestor é a forma mais direta de garantir que essa proteção esteja em dia para você.
                </p>
              </div>
              <div className="shrink-0">
                <a
                  href="https://wa.me/?text=Vi%20esse%20guia%20sobre%20responsabilidades%20de%20SST%20do%20encarregado%20e%20achei%20que%20faz%20sentido%20voc%C3%AA%20ver%3A%20https%3A%2F%2Fsermst.com.br%2Frh%2Ffuncao-encarregado%20%E2%80%94%20fala%20sobre%20treinamento%20obrigat%C3%B3rio%2C%20exames%20e%20o%20que%20protege%20o%20cargo%20em%20caso%20de%20acidente."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1fbb5a] text-white font-bold px-7 py-4 rounded-xl transition-colors text-sm whitespace-nowrap"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Enviar para o gestor
                </a>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-slate-50 border-t border-slate-200 py-20">
        <div className="max-w-[1100px] mx-auto px-6 lg:px-8 text-center">
          <FadeIn direction="up">
            <Target className="w-12 h-12 text-accent-pink mx-auto mb-6" />
            <h2 className="text-3xl md:text-5xl font-black text-brand-900 mb-6 leading-tight">
              Sua empresa tem encarregado?
              <br />
              <span className="text-accent-pink italic font-serif">A SST dele está em dia?</span>
            </h2>
            <p className="text-xl text-slate-700 max-w-2xl mx-auto mb-10 font-medium leading-relaxed">
              A SERMST faz auditoria gratuita do PCMSO, PGR e treinamentos da sua operação. Sai com diagnóstico claro do que está protegido e do que está exposto.
            </p>
            <Link
              href="/contato"
              className="btn-primary-safe-lg"
            >
              Solicitar diagnóstico SST gratuito
              <ArrowRight className="w-5 h-5" />
            </Link>
            <p className="text-xs text-slate-500 mt-6 uppercase tracking-widest">
              <Users className="w-3 h-3 inline mr-2" />
              +3.000 empresas atendidas em 40 anos
            </p>
          </FadeIn>
        </div>
      </section>
    </main>
    </>
  );
}
