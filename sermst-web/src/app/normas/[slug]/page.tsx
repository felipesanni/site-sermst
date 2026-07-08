import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FadeIn } from '@/components/ui/fade-in';
import { BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';

export const normasKnown: Record<string, { titulo: string; descricao: string; conteudo?: string }> = {
  'nr-33-espaco-confinado': {
    titulo: 'NR-33: Segurança e Saúde nos Trabalhos em Espaços Confinados',
    descricao:
      'A NR-33 exige identificação, classificação e controle de todos os espaços confinados do estabelecimento. Entrada sem Permissão de Entrada e Trabalho (PET) e equipe treinada é infração grave e aumenta o risco de acidentes com responsabilidade penal.',
  },
  'nr-05-cipa': {
    titulo: 'NR-05: CIPA - Comissão Interna de Prevenção de Acidentes',
    descricao:
      'A NR-05 obriga empresas a constituir a CIPA ou designar um responsável, conforme o CNAE e o número de funcionários. Membros eleitos têm estabilidade de emprego, e a ausência de CIPA costuma gerar autuação direta em fiscalização.',
  },
  'nr-01-pgr-atualizada': {
    titulo: 'NR-01 atualizada: Programa de Gerenciamento de Riscos (PGR)',
    descricao:
      'A NR-01 é o documento-base da segurança do trabalho no Brasil. Com fatores de risco psicossociais expressamente incluídos no GRO desde 26 de maio de 2026, ela orienta a identificação, avaliação e o controle dos riscos ocupacionais.',
  },
  'nr-10-eletricidade': {
    titulo: 'NR-10: Segurança em Instalações e Serviços em Eletricidade',
    descricao:
      'A NR-10 define requisitos mínimos para a segurança de quem trabalha com eletricidade, incluindo instalação, manutenção e operação. Treinamento e documentação técnica são obrigatórios e costumam ser cobrados em fiscalização.',
  },
  'nr-13-vasos-de-pressao': {
    titulo: 'NR-13: Caldeiras, Vasos de Pressão, Tubulações e Tanques',
    descricao:
      'A NR-13 exige inspeção periódica em caldeiras, vasos de pressão e equipamentos equivalentes. Sem laudo válido, a empresa pode ficar impedida de operar, com risco real de interdição.',
  },
  'nr-15-insalubridade': {
    titulo: 'NR-15: Atividades e Operações Insalubres',
    descricao:
      'A NR-15 define as atividades que podem gerar adicional de insalubridade de 10%, 20% ou 40%. Pagar sem base técnica cria passivo; deixar de pagar quando devido também.',
  },
  'nr-16-periculosidade': {
    titulo: 'NR-16: Atividades e Operações Perigosas',
    descricao:
      'A NR-16 define quem pode ter direito ao adicional de periculosidade de 30%, como em atividades com eletricidade, inflamáveis, explosivos e segurança patrimonial. O enquadramento depende de avaliação técnica consistente.',
  },
  'nr-17-ergonomia': {
    titulo: 'NR-17: Ergonomia no Trabalho',
    descricao:
      'A NR-17 trata da adaptação do trabalho às condições humanas, incluindo postura, mobiliário, ritmo e levantamento de peso. Sem avaliação ergonômica coerente, a empresa se expõe em ações trabalhistas e afastamentos.',
  },
  'nr-18-construcao-civil': {
    titulo: 'NR-18: Segurança e Saúde na Construção Civil',
    descricao:
      'A NR-18 define os requisitos de SST para canteiros de obra. O antigo PCMAT foi substituído pelo PGR, e a norma cobre treinamentos obrigatórios, proteções coletivas, PCMSO e integração com o eSocial.',
  },
  'nr-35-trabalho-em-altura': {
    titulo: 'NR-35: Trabalho em Altura',
    descricao:
      'A NR-35 regulamenta atividades executadas acima de 2 metros com risco de queda. Exige treinamento inicial, reciclagens, análise de risco e supervisão adequada.',
  },
  'ppp-eletronico': {
    titulo: 'PPP eletrônico: Perfil Profissiográfico Previdenciário',
    descricao:
      'O PPP eletrônico descreve as condições ambientais do trabalho de cada colaborador para fins previdenciários. É obrigatório no eSocial via S-2240 e influencia concessão de aposentadoria especial.',
  },
  'pgrs-residuos': {
    titulo: 'PGRS: Plano de Gerenciamento de Resíduos de Serviços de Saúde',
    descricao:
      'O PGRS é exigido para clínicas, laboratórios, hospitais e outras operações com resíduos de risco. Ele documenta geração, segregação, transporte e destinação de resíduos.',
  },
  'o-que-e-nr-07': {
    titulo: 'NR-07: o que a norma exige sobre PCMSO, ASO e exames ocupacionais',
    descricao:
      'A NR-07 organiza o monitoramento da saúde ocupacional. Como regra, exige PCMSO coerente com os riscos da empresa, emissão de ASO e exames admissionais, periódicos, de retorno, mudança de risco e demissionais.',
    conteudo: `A NR-07 é a norma regulamentadora que trata do monitoramento da saúde dos trabalhadores. Em termos práticos, ela define a lógica legal por trás do PCMSO, dos exames ocupacionais e da emissão do ASO. Quando a empresa contrata, acompanha, muda o risco da função ou desliga um colaborador, é essa norma que orienta o fluxo médico ocupacional.

Em outras palavras: a NR-07 é a regra; o PCMSO é o programa que coloca essa regra em prática; e o ASO é a evidência documental de cada exame ocupacional. Quem pesquisa "NR-07" normalmente quer entender a exigência normativa, o que a empresa precisa cumprir e qual o risco de não cumprir. Quem pesquisa "PCMSO" geralmente quer saber como montar, revisar ou operacionalizar o programa.

A NR-07 se aplica às organizações com empregados CLT. Como regra, o empregador deve garantir a elaboração e a efetiva implantação do PCMSO. A própria norma prevê dispensa de elaboração para alguns MEI, ME e EPP de grau de risco 1 ou 2 que prestem as informações digitais previstas na NR-01 e não identifiquem as exposições ocupacionais previstas na regra. Mesmo nesses casos, exames ocupacionais e ASO continuam obrigatórios.

A norma também se conecta ao eSocial: os ASOs emitidos no monitoramento da saúde alimentam o evento S-2220, e inconsistências entre PGR, PCMSO e exames deixam a empresa exposta em fiscalização. Quando o risco informado, o exame realizado e o protocolo médico não contam a mesma história, o problema aparece rápido.

Se a sua necessidade é entender como estruturar o programa, definir cronogramas, exames por cargo e integração com ASO e eSocial, o caminho correto é a página específica de PCMSO. Aqui, o objetivo é esclarecer a norma, responder o que a NR-07 exige e separar a intenção informacional da página transacional do serviço.`,
  },
};

export function generateStaticParams() {
  return Object.keys(normasKnown).map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const norma = normasKnown[slug];
  const titulo = norma?.titulo ?? `${slug.replace(/-/g, ' ')} | Normas Regulamentadoras SST`;
  const descricaoPadrao =
    'Entenda as Normas Regulamentadoras de Saúde e Segurança do Trabalho. A SERMST oferece suporte técnico completo para conformidade com NRs e eSocial.';

  return {
    title: `${titulo} | SERMST`,
    description: norma?.descricao ?? descricaoPadrao,
    alternates: {
      canonical: `https://sermst.com.br/normas/${slug}`,
    },
    openGraph: {
      title: `${titulo} | SERMST`,
      description: norma?.descricao ?? descricaoPadrao,
      url: `https://sermst.com.br/normas/${slug}`,
      type: 'article',
      locale: 'pt_BR',
    },
  };
}

export default async function NormaPage({ params }: Props) {
  const { slug } = await params;
  const norma = normasKnown[slug];
  if (!norma) notFound();

  const titulo = norma.titulo ?? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const servicosRelacionados =
    slug === 'o-que-e-nr-07'
      ? [
          { label: 'PCMSO: guia prático do programa', href: '/saude/pcmso-programa-controle-medico' },
          { label: 'O que é PCMSO? Significado e aplicação prática', href: '/dicionario/o-que-e-pcmso' },
          { label: 'DIR: quando pode haver dispensa de elaborar PCMSO', href: '/rh/declaracao-inexistencia-risco-dir' },
          { label: 'ASO: atestado de saúde ocupacional', href: '/saude/aso-atestado-saude-ocupacional' },
          { label: 'Serviço de PGR NR-01', href: '/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo' },
          { label: 'Exame admissional', href: '/servicos/exame-admissional-expresso/sao-paulo' },
        ]
      : ['nr-05-cipa', 'nr-15-insalubridade', 'nr-16-periculosidade'].includes(slug)
      ? [
          { label: 'Calculadora CNAE: grau de risco e obrigações SST', href: '/rh/calculadora-cnae-grau-de-risco' },
          { label: 'PCMSO (NR-07)', href: '/servicos/pcmso-nr07-programa/sao-paulo' },
          { label: 'Serviço de PGR NR-01', href: '/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo' },
          { label: 'Serviço de LTCAT previdenciário', href: '/servicos/ltcat-laudo-tecnico-previdenciario/sao-paulo' },
        ]
      : [
          { label: 'PCMSO (NR-07)', href: '/servicos/pcmso-nr07-programa/sao-paulo' },
          { label: 'Serviço de PGR NR-01', href: '/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo' },
          { label: 'Serviço de LTCAT previdenciário', href: '/servicos/ltcat-laudo-tecnico-previdenciario/sao-paulo' },
          { label: 'Exame admissional', href: '/servicos/exame-admissional-expresso/sao-paulo' },
        ];

  return (
    <main className="min-h-screen bg-slate-50">
      <BreadcrumbJsonLd
        items={[
          { name: 'Início', item: 'https://sermst.com.br' },
          { name: 'Normas Regulamentadoras', item: 'https://sermst.com.br/normas' },
          { name: norma.titulo },
        ]}
      />

      <header className="border-b-4 border-accent-pink bg-brand-900 pb-20 pt-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="mb-4 flex items-center gap-3 text-accent-pink">
              <BookOpen className="h-6 w-6" />
              <span className="text-xs font-black uppercase tracking-widest">Normas Regulamentadoras</span>
            </div>
            <h1 className="h1-standard max-w-4xl text-white">{titulo}</h1>
            {norma.descricao && (
              <p className="mt-6 max-w-3xl border-l-4 border-accent-pink pl-6 text-xl leading-relaxed text-slate-300">
                {norma.descricao}
              </p>
            )}
          </FadeIn>
        </div>
      </header>

      <section className="mx-auto max-w-[1280px] px-6 py-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          <div className="md:col-span-2">
            <FadeIn direction="right">
              <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-sm">
                {norma.conteudo && (
                  <div className="mb-8 border-b border-slate-100 pb-8">
                    {norma.conteudo.split('\n\n').map((para, i) => (
                      <p key={i} className="mb-4 leading-relaxed text-slate-600 last:mb-0">
                        {para}
                      </p>
                    ))}
                  </div>
                )}

                <div className="mb-6 flex items-center gap-3">
                  <ShieldCheck className="h-8 w-8 text-accent-pink" />
                  <h2 className="text-2xl font-black text-brand-900">Conformidade e penalidades</h2>
                </div>
                <p className="mb-4 leading-relaxed text-slate-600">
                  O não cumprimento desta norma pode acarretar autuações ligadas às obrigações de SST e inconsistências no
                  eSocial, especialmente em eventos como S-2220 e S-2240, além de ampliar o risco de passivos trabalhistas.
                </p>
                <p className="leading-relaxed text-slate-600">
                  A SERMST conta com equipe especializada em Medicina e Segurança do Trabalho, com mais de 40 anos de
                  experiência, para apoiar empresas na conformidade com as NRs aplicáveis.
                </p>

                <div className="mt-8 rounded-xl border border-accent-pink/20 bg-accent-pink/5 p-6">
                  <p className="mb-2 text-lg font-bold text-brand-900">Precisa de assessoria técnica?</p>
                  <p className="mb-4 text-sm text-slate-600">
                    Nossa equipe realiza um diagnóstico inicial da conformidade NR da sua empresa e orienta os próximos passos.
                  </p>
                  <a
                    href={`https://wa.me/5511915146447?text=Quero assessoria sobre ${titulo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-safe"
                  >
                    Falar com especialista
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          <div>
            <FadeIn direction="left" delay={0.2}>
              <div className="sticky top-24 rounded-2xl bg-brand-900 p-8 text-white">
                <h3 className="mb-6 text-sm font-black uppercase tracking-widest text-accent-pink">Serviços relacionados</h3>
                <ul className="space-y-3">
                  {servicosRelacionados.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="group flex items-center gap-3 text-slate-300 transition-colors hover:text-white"
                      >
                        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent-pink/40 transition-colors group-hover:bg-accent-pink" />
                        <span className="text-sm font-medium">{s.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <Link href="/contato" className="btn-primary-safe flex w-full text-sm">
                    Solicitar diagnóstico gratuito
                  </Link>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </main>
  );
}
