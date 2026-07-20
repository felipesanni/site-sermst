import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FadeIn } from '@/components/ui/fade-in';
import { BookOpen, ArrowRight, ShieldCheck } from 'lucide-react';
import { BreadcrumbJsonLd } from '@/components/seo/breadcrumb-jsonld';
import { companyFacts } from '@/lib/company-facts';

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
    titulo: 'NR-07 atualizada: PCMSO, ASO e exames ocupacionais',
    descricao:
      'Veja o que a NR-07 exige no PCMSO, quais exames ocupacionais devem ser feitos, quando emitir o ASO e como a norma se relaciona com o PGR e o eSocial.',
    conteudo: `A NR-07 estabelece diretrizes para o Programa de Controle Médico de Saúde Ocupacional (PCMSO). O programa deve proteger e preservar a saúde dos empregados em relação aos riscos ocupacionais identificados e classificados no PGR. Por isso, não funciona como um documento isolado nem como uma lista genérica de exames.

Em termos práticos, a NR-07 é a regra; o PCMSO organiza o monitoramento médico; e o ASO registra a conclusão do exame clínico ocupacional. A norma prevê exames admissional, periódico, de retorno ao trabalho, de mudança de riscos ocupacionais e demissional.

No periódico, a regra vigente não separa trabalhadores apenas por idade e grau de risco. O exame clínico deve ser anual, ou ocorrer em prazo menor a critério médico, para quem está exposto a riscos ocupacionais identificados e classificados no PGR e para pessoas com doenças crônicas que aumentem a suscetibilidade. Para os demais trabalhadores, o intervalo geral é de dois anos.

No demissional, quando não houver dispensa, o exame clínico deve ser realizado em até 10 dias contados do término do contrato. A dispensa pode ocorrer se o exame clínico ocupacional mais recente tiver sido feito há menos de 135 dias, nas organizações de grau de risco 1 ou 2, ou há menos de 90 dias, nas de grau de risco 3 ou 4.

MEI, ME e EPP enquadrados nos graus de risco 1 ou 2 podem ter dispensa de elaborar o PCMSO quando atendem às condições previstas na NR-01 e não identificam exposições ocupacionais a agentes físicos, químicos, biológicos nem riscos relacionados a fatores ergonômicos. Essa dispensa não elimina os exames médicos ocupacionais nem a emissão do ASO.

A norma também se conecta ao eSocial. Os exames ocupacionais informados no S-2220 precisam ser coerentes com o PCMSO e com os riscos da função. Quando o demissional é dispensado pela NR-07, não há novo ASO demissional e a orientação oficial do eSocial é não enviar um S-2220 apenas para registrar a dispensa.`,
  },
};

export const dynamicParams = false;

export function generateStaticParams() {
  // As demais normas possuem páginas estáticas próprias. Este segmento dinâmico
  // existe apenas para a página dedicada da NR-07.
  return [{ slug: 'o-que-e-nr-07' }];
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
  const title =
    slug === 'o-que-e-nr-07'
      ? 'NR-07 atualizada: PCMSO, ASO e exames | SERMST'
      : `${titulo} | SERMST`;

  return {
    title,
    description: norma?.descricao ?? descricaoPadrao,
    alternates: {
      canonical: `https://sermst.com.br/normas/${slug}`,
    },
    openGraph: {
      title,
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

  const nr07ArticleSchema =
    slug === 'o-que-e-nr-07'
      ? {
          '@context': 'https://schema.org',
          '@type': 'Article',
          '@id': 'https://sermst.com.br/normas/o-que-e-nr-07#article',
          headline: titulo,
          description: norma.descricao,
          url: 'https://sermst.com.br/normas/o-que-e-nr-07',
          mainEntityOfPage: 'https://sermst.com.br/normas/o-que-e-nr-07',
          inLanguage: 'pt-BR',
          datePublished: '2026-07-13T00:00:00-03:00',
          dateModified: '2026-07-20T00:00:00-03:00',
          author: {
            '@type': 'Person',
            name: 'Luiz César Sannino',
            url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
          },
          publisher: {
            '@type': 'Organization',
            '@id': 'https://sermst.com.br/#organization',
            name: 'SERMST',
            url: 'https://sermst.com.br',
          },
        }
      : null;

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
      {nr07ArticleSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(nr07ArticleSchema) }}
        />
      )}

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
                {norma.conteudo && slug !== 'o-que-e-nr-07' && (
                  <div className="mb-8 border-b border-slate-100 pb-8">
                    {norma.conteudo.split('\n\n').map((para, i) => (
                      <p key={i} className="mb-4 leading-relaxed text-slate-600 last:mb-0">
                        {para}
                      </p>
                    ))}
                  </div>
                )}

                {slug === 'o-que-e-nr-07' && (
                  <div className="mb-10 space-y-10 border-b border-slate-100 pb-10">
                    <div className="rounded-xl border border-accent-pink/20 bg-accent-pink/5 p-6">
                      <p className="mb-2 text-xs font-black uppercase tracking-widest text-accent-pink">Resposta direta</p>
                      <p className="leading-relaxed text-slate-700">
                        A <strong>NR-07</strong> estabelece as diretrizes do PCMSO. O programa organiza o acompanhamento médico dos trabalhadores a partir dos riscos identificados no PGR e inclui os exames admissional, periódico, de retorno ao trabalho, de mudança de riscos e demissional.
                      </p>
                    </div>

                    <section>
                      <h2 className="mb-4 text-2xl font-black text-brand-900">O que é a NR-07 e qual a relação com o PCMSO</h2>
                      <div className="space-y-4 leading-relaxed text-slate-600">
                        <p>
                          A NR-07 é a norma que orienta o Programa de Controle Médico de Saúde Ocupacional. O PCMSO transforma essas diretrizes em uma rotina compatível com os riscos, as funções e o histórico de saúde dos empregados.
                        </p>
                        <p>
                          Na prática, a norma define a base do monitoramento; o PCMSO organiza o acompanhamento; e o ASO registra a conclusão de cada exame clínico ocupacional. Copiar um programa de outra empresa não resolve, porque os exames precisam conversar com os riscos identificados e classificados no PGR.
                        </p>
                      </div>
                    </section>

                    <section>
                      <h2 className="mb-4 text-2xl font-black text-brand-900">Quais exames ocupacionais a NR-07 prevê</h2>
                      <ul className="space-y-3 text-slate-600">
                        <li><strong>Admissional:</strong> realizado antes de o empregado assumir as atividades.</li>
                        <li><strong>Periódico:</strong> acompanha a saúde ao longo do vínculo, na periodicidade definida pela norma e pelo PCMSO.</li>
                        <li><strong>Retorno ao trabalho:</strong> feito antes da volta após afastamento igual ou superior a 30 dias por doença ou acidente.</li>
                        <li><strong>Mudança de riscos ocupacionais:</strong> realizado antes da mudança, quando a nova atividade altera a exposição.</li>
                        <li><strong>Demissional:</strong> feito em até 10 dias contados do término do contrato, quando não houver dispensa válida.</li>
                      </ul>
                    </section>

                    <section>
                      <h2 className="mb-4 text-2xl font-black text-brand-900">Periodicidade, grau de risco e dispensa do PCMSO</h2>
                      <div className="space-y-4 leading-relaxed text-slate-600">
                        <p>
                          A periodicidade não depende apenas da idade ou do grau de risco da empresa. Trabalhadores expostos a riscos ocupacionais identificados no PGR e pessoas com condições crônicas que aumentem a suscetibilidade podem precisar de exame clínico anual ou em intervalo menor, conforme o critério médico. Para os demais trabalhadores, o intervalo geral é de dois anos.
                        </p>
                        <p>
                          MEI, ME e EPP de grau de risco 1 ou 2 podem ser dispensados de elaborar o PCMSO quando cumprem as condições previstas na NR-01 e não identificam as exposições indicadas pela norma. Essa dispensa não elimina os exames ocupacionais nem a emissão do ASO.
                        </p>
                        <p>
                          Para conferir o grau de risco a partir do CNAE, use a{' '}
                          <Link href="/rh/calculadora-cnae-grau-de-risco" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4">
                            calculadora de CNAE e grau de risco
                          </Link>.
                        </p>
                      </div>
                    </section>

                    <section>
                      <h2 className="mb-4 text-2xl font-black text-brand-900">NR-07, ASO e evento S-2220 do eSocial</h2>
                      <div className="space-y-4 leading-relaxed text-slate-600">
                        <p>
                          O ASO registra a conclusão do exame clínico ocupacional. Os dados dos exames informados no S-2220 precisam ser coerentes com o PCMSO, com a função e com os riscos aos quais o trabalhador está exposto.
                        </p>
                        <p>
                          Quando o exame demissional é dispensado nos termos da NR-07, não há novo ASO demissional. Nesse caso, a orientação oficial do eSocial é não enviar um S-2220 apenas para registrar a dispensa.
                        </p>
                      </div>
                    </section>

                    <section className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                      <h2 className="mb-4 text-xl font-black text-brand-900">Fontes oficiais da NR-07</h2>
                      <ul className="space-y-3 text-slate-600">
                      <li>
                        <a
                          href="https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/arquivos/normas-regulamentadoras/nr-07-atualizada-2022.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4 hover:text-accent-pink"
                        >
                          Texto oficial da NR-07: Ministério do Trabalho e Emprego
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.gov.br/esocial/pt-br/empresas/perguntas-frequentes/perguntas-frequentes-producao-empresas-e-ambiente-de-testes"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4 hover:text-accent-pink"
                        >
                          Perguntas frequentes dos eventos de SST no eSocial
                        </a>
                      </li>
                      </ul>
                    </section>
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
                  A SERMST reúne {companyFacts.history.phrase} e uma equipe especializada em Medicina e Segurança do
                  Trabalho para ajudar empresas a cumprir as NRs aplicáveis.
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
