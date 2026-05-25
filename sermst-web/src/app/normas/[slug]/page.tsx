import { Metadata } from 'next';
import Link from 'next/link';
import { FadeIn } from '@/components/ui/fade-in';
import { BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';

// Slugs conhecidos — destinos dos redirects 301 do site WordPress antigo
export const normasKnown: Record<string, { titulo: string; descricao: string; conteudo?: string }> = {
  'nr-33-espaco-confinado': {
    titulo: 'NR-33: Segurança e Saúde nos Trabalhos em Espaços Confinados',
    descricao:
      'A NR-33 exige identificação, classificação e controle de todos os espaços confinados do estabelecimento. Entrada sem Permissão de Entrada e Trabalho (PET) e equipe treinada é infração grave — e risco de acidente com responsabilidade penal.',
  },
  'nr-05-cipa': {
    titulo: 'NR-05: CIPA — Comissão Interna de Prevenção de Acidentes',
    descricao:
      'A NR-05 obriga empresas a constituir a CIPA ou designar um responsável, conforme o CNAE e o número de funcionários. Membros eleitos têm estabilidade de emprego; falta de CIPA é autuação direta na fiscalização do MTE.',
  },
  'nr-01-pgr-atualizada': {
    titulo: 'NR-01 atualizada: Programa de Gerenciamento de Riscos (PGR)',
    descricao:
      'A NR-01 é o documento-mãe da segurança do trabalho no Brasil. Atualizada em 2022 e com riscos psicossociais incluídos a partir de 2025, exige que toda empresa identifique, avalie e controle os riscos ocupacionais por meio do PGR.',
  },
  'nr-10-eletricidade': {
    titulo: 'NR-10: Segurança em Instalações e Serviços em Eletricidade',
    descricao:
      'A NR-10 define os requisitos mínimos para a segurança de pessoas que trabalham com eletricidade — instalação, manutenção, operação. Treinamento e laudo são obrigatórios e exigidos em fiscalização.',
  },
  'nr-13-vasos-de-pressao': {
    titulo: 'NR-13: Caldeiras, Vasos de Pressão, Tubulações e Tanques',
    descricao:
      'A NR-13 obriga inspeção periódica em caldeiras, vasos de pressão e equivalentes. Sem laudo válido a empresa não pode operar o equipamento — risco de interdição imediata pelo MTE.',
  },
  'nr-15-insalubridade': {
    titulo: 'NR-15: Atividades e Operações Insalubres',
    descricao:
      'A NR-15 define as atividades que geram adicional de insalubridade — 10%, 20% ou 40% sobre o salário mínimo. Pagar o adicional sem laudo correto vira passivo trabalhista; deixar de pagar quando devido também.',
  },
  'nr-16-periculosidade': {
    titulo: 'NR-16: Atividades e Operações Perigosas',
    descricao:
      'A NR-16 define quem tem direito ao adicional de periculosidade de 30% — eletricidade, inflamáveis, explosivos, segurança patrimonial. Cada atividade exige laudo técnico que enquadra a função, sob pena de pagar adicional indevido por anos.',
  },
  'nr-17-ergonomia': {
    titulo: 'NR-17: Ergonomia no Trabalho',
    descricao:
      'A NR-17 trata da adaptação do trabalho às condições humanas — postura, mobiliário, ritmo, levantamento de peso. Em ações trabalhistas por LER/DORT, a falta de Análise Ergonômica do Trabalho (AET) atualizada vira responsabilidade direta da empresa.',
  },
  'nr-18-construcao-civil': {
    titulo: 'NR-18: Segurança e Saúde na Construção Civil',
    descricao:
      'A NR-18 define os requisitos de SST para canteiros de obra. O PCMAT foi extinto e substituído pelo PGR. Abrange treinamentos obrigatórios, proteções coletivas, PCMSO e eSocial SST.',
  },
  'nr-35-trabalho-em-altura': {
    titulo: 'NR-35: Trabalho em Altura',
    descricao:
      'A NR-35 regulamenta toda atividade executada acima de 2 metros de altura com risco de queda. Exige treinamento formal de 8 horas (inicial), reciclagem a cada 2 anos, APR e supervisão técnica. Falha aqui é responsabilidade civil e criminal direta.',
  },
  'ppp-eletronico': {
    titulo: 'PPP eletrônico: Perfil Profissiográfico Previdenciário',
    descricao:
      'O PPP eletrônico é o documento que descreve as condições ambientais do trabalho de cada colaborador para fins previdenciários. Obrigatório no eSocial via S-2240, é base para concessão de aposentadoria especial e responsabilidade da empresa.',
  },
  'pgrs-residuos': {
    titulo: 'PGRS: Plano de Gerenciamento de Resíduos de Serviços de Saúde',
    descricao:
      'O PGRS é exigido para clínicas, laboratórios, hospitais, indústrias químicas e farmacêuticas. Documenta como a empresa gerencia geração, segregação, transporte e destinação de resíduos perigosos.',
  },

  // Slug legado — o-que-e-nr-01 e o-que-e-nr-15 têm 301 para as páginas canônicas (next.config.ts)
  'o-que-e-nr-07': {
    titulo: 'NR-07: PCMSO — Controle Médico de Saúde Ocupacional',
    descricao:
      'A NR-07 estabelece a obrigatoriedade do PCMSO para todas as empresas regidas pela CLT. Determina quais exames ocupacionais devem ser realizados e com qual periodicidade, conforme os riscos de cada função.',
    conteudo: `O PCMSO (Programa de Controle Médico de Saúde Ocupacional) é o programa que define quais exames médicos os trabalhadores da empresa precisam realizar — na admissão, periodicamente, na mudança de função, no retorno ao trabalho e na demissão. Ele é elaborado por um médico do trabalho com base nos riscos identificados no PGR da empresa.

Todas as empresas com funcionários regidos pela CLT precisam ter um PCMSO vigente, independentemente do porte ou grau de risco. Micro e pequenas empresas também são obrigadas — a única diferença está na periodicidade dos exames e na necessidade ou não de um médico coordenador.

O PCMSO tem impacto direto no eSocial. Cada ASO (Atestado de Saúde Ocupacional) emitido — admissional, periódico ou demissional — deve ser registrado no evento S-2220. Sem PCMSO ativo e atualizado, a empresa não consegue enviar o S-2220 corretamente, o que gera inconsistências no eSocial e risco de multa automática.

Na prática, o programa define: quais exames complementares cada função deve fazer (hemograma, audiometria, espirometria, raio-X etc.), a periodicidade dos exames periódicos para cada cargo e os critérios de aptidão e restrição que o médico do trabalho aplica na emissão do ASO. A SERMST elabora e gerencia o PCMSO completo, incluindo emissão de ASO no mesmo dia para exames admissionais.`,
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

  return {
    title: `${titulo} | SERMST`,
    description:
      norma?.descricao ??
      'Entenda as Normas Regulamentadoras de Saúde e Segurança do Trabalho. A SERMST oferece suporte técnico completo para conformidade com NRs e eSocial.',
    alternates: {
      canonical: `https://sermst.com.br/normas/${slug}`,
    },
    openGraph: {
      title: `${titulo} | SERMST`,
      description:
        norma?.descricao ??
        'Entenda as Normas Regulamentadoras de Saúde e Segurança do Trabalho. A SERMST oferece suporte técnico completo para conformidade com NRs e eSocial.',
      url: `https://sermst.com.br/normas/${slug}`,
      type: 'article',
      locale: 'pt_BR',
    },
  };
}

export default async function NormaPage({ params }: Props) {
  const { slug } = await params;
  const norma = normasKnown[slug];
  const titulo = norma?.titulo ?? slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const servicosRelacionados = [
    { label: 'PCMSO (NR-07)', href: '/servicos/pcmso-nr07-programa/sao-paulo' },
    { label: 'PGR (NR-01)', href: '/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo' },
    { label: 'LTCAT & Insalubridade', href: '/servicos/ltcat-laudo-tecnico-previdenciario/sao-paulo' },
    { label: 'Exame Admissional', href: '/servicos/exame-admissional-expresso/sao-paulo' },
  ];

  return (
    <main className="min-h-screen bg-slate-50">
      <BreadcrumbJsonLd items={[{ name: 'Início', item: 'https://sermst.com.br' }, { name: 'Normas Regulamentadoras', item: 'https://sermst.com.br/normas' }, { name: norma.titulo }]} />
      {/* Hero */}
      <header className="bg-brand-900 pt-28 pb-20 border-b-4 border-accent-pink">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="flex items-center gap-3 mb-4 text-accent-pink">
              <BookOpen className="w-6 h-6" />
              <span className="text-xs font-black uppercase tracking-widest">Normas Regulamentadoras</span>
            </div>
            <h1 className="h1-standard max-w-4xl text-white">
              {titulo}
            </h1>
            {norma?.descricao && (
              <p className="mt-6 text-xl text-slate-300 max-w-3xl leading-relaxed border-l-4 border-accent-pink pl-6">
                {norma.descricao}
              </p>
            )}
          </FadeIn>
        </div>
      </header>

      {/* Content */}
      <section className="py-20 max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Main */}
          <div className="md:col-span-2">
            <FadeIn direction="right">
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
                {norma?.conteudo && (
                  <div className="mb-8 pb-8 border-b border-slate-100">
                    {norma.conteudo.split('\n\n').map((para, i) => (
                      <p key={i} className="text-slate-600 leading-relaxed mb-4 last:mb-0">{para}</p>
                    ))}
                  </div>
                )}
                <div className="flex items-center gap-3 mb-6">
                  <ShieldCheck className="w-8 h-8 text-accent-pink" />
                  <h2 className="text-2xl font-black text-brand-900">Conformidade e Penalidades</h2>
                </div>
                <p className="text-slate-600 leading-relaxed mb-4">
                  O não cumprimento desta norma pode acarretar multas automáticas via eSocial (eventos S-2220 e S-2240),
                  além de autuações do Ministério do Trabalho e passivos trabalhistas em reclamações.
                </p>
                <p className="text-slate-600 leading-relaxed">
                  A SERMST possui equipe especializada em Medicina e Segurança do Trabalho com mais de 40 anos de
                  experiência para garantir que sua empresa esteja 100% em conformidade com todas as NRs aplicáveis.
                </p>

                <div className="mt-8 bg-accent-pink/5 border border-accent-pink/20 rounded-xl p-6">
                  <p className="text-brand-900 font-bold text-lg mb-2">Precisa de assessoria técnica?</p>
                  <p className="text-slate-600 mb-4 text-sm">
                    Nossa equipe realiza diagnóstico completo da conformidade NR da sua empresa, sem custo inicial.
                  </p>
                  <a
                    href={`https://wa.me/5511915146447?text=Quero assessoria sobre ${titulo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary-safe"
                  >
                    Falar com Especialista
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Sidebar */}
          <div>
            <FadeIn direction="left" delay={0.2}>
              <div className="bg-brand-900 rounded-2xl p-8 text-white sticky top-24">
                <h3 className="font-black text-sm uppercase tracking-widest text-accent-pink mb-6">
                  Serviços Relacionados
                </h3>
                <ul className="space-y-3">
                  {servicosRelacionados.map((s) => (
                    <li key={s.href}>
                      <Link
                        href={s.href}
                        className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-accent-pink/40 group-hover:bg-accent-pink shrink-0 transition-colors"></span>
                        <span className="font-medium text-sm">{s.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 pt-6 border-t border-white/10">
                  <Link
                    href="/contato"
                    className="btn-primary-safe flex w-full text-sm"
                  >
                    Solicitar Diagnóstico Gratuito
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
