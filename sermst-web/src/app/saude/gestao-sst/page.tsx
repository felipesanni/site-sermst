import type { Metadata } from 'next';
import Link from 'next/link';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'O que é gestão de SST? Como organizar na empresa | SERMST',
  description:
    'Veja como organizar PGR, PCMSO, exames, treinamentos e eSocial em uma rotina de gestão de saúde e segurança do trabalho.',
  alternates: { canonical: 'https://sermst.com.br/saude/gestao-sst' },
  openGraph: {
    title: 'O que é gestão de SST? Como estruturar saúde e segurança | SERMST',
    description:
      'Como organizar a gestão de saúde e segurança do trabalho na prática: documentos, programas, obrigações eSocial e como evitar autuações e passivo trabalhista.',
    url: 'https://sermst.com.br/saude/gestao-sst',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function GestãoSSTPage() {
  return (
    <BlockbusterArticle
      hubLabel="Saúde Ocupacional"
      hubLabelShort="← Saúde Ocupacional"
      hubHref="/saude"
      pageUrl="https://sermst.com.br/saude/gestao-sst"
      coverImage={{ src: "/images/articles/gestao-sst.jpg", alt: "Equipe discutindo gestão de saúde e segurança do trabalho" }}
      author={{
        name: 'Felipe Sannino',
        jobTitle: 'Advogado em Direito do Trabalho e SST · OAB/SP 430.824',
        url: 'https://sermst.com.br/equipe/felipe-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-10-08',
      }}

      h1="O que é gestão de SST? Como organizar a rotina da empresa"
      intro="Gestão de Saúde e Segurança do Trabalho não cabe em uma pasta de documentos. Ela conecta a identificação dos riscos, as medidas de controle, os exames, os treinamentos e os registros enviados ao eSocial."
      mobileSingleColumn
      quickAnswer={
        <>
          <p>
            <strong>Gestão de SST</strong> é o processo de identificar e controlar riscos ocupacionais, organizar PGR, PCMSO, exames, treinamentos e acompanhar os registros de segurança e saúde do trabalho. Ela transforma documentos separados em uma rotina acompanhada pela empresa.
          </p>
          <Link href="/diagnostico" className="mt-4 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-accent-pink px-5 py-3 text-sm font-bold text-white transition hover:bg-brand-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-pink sm:w-auto">
            Solicitar diagnóstico gratuito
          </Link>
        </>
      }
      showTableOfContents
      sections={[
        {
          title: 'O que é gestão de SST de verdade',
          body: (
            <>
              <p>
                Gestão de SST integra os processos de saúde e segurança em uma sequência coerente: identificar os riscos, definir controles, treinar, acompanhar a saúde, registrar ocorrências e revisar o que precisa melhorar.
              </p>
              <p>
                Um problema comum é deixar PGR, PCMSO, ASOs, treinamentos e eSocial em rotinas separadas. Os documentos existem, mas usam cargos, riscos ou datas diferentes. A gestão começa quando essas informações passam a conversar entre si.
              </p>
            </>
          ),
        },
        {
          title: 'O ciclo de gestão de SST em 6 etapas',
          body: (
            <>
              <ol>
                <li><strong>Identificar.</strong> Mapear os perigos e riscos ocupacionais por ambiente, atividade e grupo de trabalhadores.</li>
                <li><strong>Avaliar.</strong> Estimar o nível de risco com os critérios definidos no PGR e estabelecer prioridades.</li>
                <li><strong>Controlar.</strong> Priorizar eliminação, substituição e proteção coletiva antes de depender do EPI.</li>
                <li><strong>Documentar.</strong> PGR (riscos e controles), PCMSO (vigilância médica), ordens de serviço (instruções específicas), procedimentos de trabalho.</li>
                <li><strong>Treinar.</strong> Atender às NRs aplicáveis e aos procedimentos da empresa, com conteúdo, instrutor, carga horária e registros adequados.</li>
                <li><strong>Monitorar e melhorar.</strong> Acompanhar ocorrências, afastamentos, prazos e eficácia das medidas para ajustar o sistema.</li>
              </ol>
              <p>
                Uma etapa depende da outra. Um PGR bem escrito perde utilidade se as medidas não chegam à operação; um treinamento sem registro dificulta a comprovação; um documento antigo pode deixar de representar o trabalho real.
              </p>
            </>
          ),
        },
        {
          title: 'Os 4 documentos que sustentam a gestão',
          body: (
            <>
              <ul>
                <li><strong>PGR (NR-01):</strong> reúne inventário de riscos e plano de ação.</li>
                <li><strong>PCMSO (NR-07):</strong> planeja o acompanhamento médico a partir dos riscos ocupacionais.</li>
                <li><strong>LTCAT:</strong> sustenta informações previdenciárias relacionadas à exposição a agentes nocivos.</li>
                <li><strong>Ordens de serviço e procedimentos:</strong> comunicam riscos, controles e orientações aplicáveis às atividades.</li>
              </ul>
              <p>
                Esses documentos têm finalidades diferentes, mas os dados básicos sobre funções, ambientes, riscos e controles precisam ser coerentes.
              </p>
            </>
          ),
        },
        {
          title: 'eSocial é o termômetro da gestão',
          body: (
            <>
              <p>
                Os eventos de SST do eSocial, como S-2210, S-2220 e S-2240, refletem dados produzidos ao longo da gestão. Quando o cadastro, os exames e as avaliações ambientais estão organizados, o envio tende a exigir menos correções.
              </p>
              <p>
                Atrasos, rejeições e divergências entre o evento e o documento de origem costumam indicar falhas no processo anterior ao envio. Corrigir apenas o arquivo transmitido não resolve a causa.
              </p>
            </>
          ),
        },
        {
          title: 'Os 5 sinais de que a sua gestão está frágil',
          body: (
            <>
              <ol>
                <li><strong>O PGR foi feito uma vez e ninguém revisou desde.</strong></li>
                <li><strong>Os ASOs estão arquivados sem ninguém olhar tendência.</strong></li>
                <li><strong>Treinamentos estão vencidos ou nunca foram dados formalmente.</strong></li>
                <li><strong>Os eventos do eSocial saem com erro recorrente.</strong></li>
                <li><strong>Quando alguém pergunta &quot;o que muda no SST porque temos uma máquina nova&quot;, ninguém sabe responder.</strong></li>
              </ol>
              <p>
                Um sinal isolado já merece atenção. Quando vários aparecem ao mesmo tempo, vale fazer uma revisão estruturada dos documentos e da rotina operacional.
              </p>
            </>
          ),
        },
        {
          title: 'SST avulsa ou gestão mensal: como decidir?',
          body: (
            <>
              <p>
                A escolha depende da frequência das demandas e do tipo de apoio que a empresa precisa. Um serviço avulso
                pode atender uma necessidade delimitada, como elaborar ou revisar um documento específico. A gestão
                recorrente pode fazer sentido quando exames, vencimentos, treinamentos e atualizações precisam ser
                acompanhados ao longo do tempo.
              </p>
              <ul>
                <li>
                  <strong>Serviço avulso:</strong> peça um escopo com entrega, prazo, responsáveis e itens incluídos. É uma
                  alternativa quando a demanda é pontual e a empresa consegue coordenar as próximas etapas internamente.
                </li>
                <li>
                  <strong>Gestão recorrente:</strong> confirme a frequência do acompanhamento, quais serviços entram no
                  plano, como mudanças de risco ou de equipe são tratadas e quais tarefas continuam sob responsabilidade
                  da empresa.
                </li>
              </ul>
              <p>
                Não compare apenas o preço total: verifique se as propostas cobrem o mesmo escopo e o mesmo período. A
                recorrência, por si só, não garante menor custo nem substitui as responsabilidades do empregador. Para
                conhecer as opções de atendimento, consulte o <Link href="/servicos">catálogo de serviços</Link> e os{' '}
                <Link href="/assinaturas">planos de gestão recorrente</Link>.
              </p>
            </>
          ),
        },
        {
          title: 'Como comparar propostas de medicina do trabalho e SST',
          body: (
            <>
              <p>
                Antes de comparar valores, confira se os prestadores estão orçando a mesma necessidade. Uma proposta pode
                cobrir apenas um documento ou exame; outra pode incluir mais etapas, unidades ou acompanhamento. Leia o
                escopo linha a linha e peça que limites e itens adicionais fiquem explícitos.
              </p>
              <ul>
                <li><strong>Atendimento:</strong> exames, programas, documentos, treinamentos e eventos incluídos.</li>
                <li><strong>Unidades e pessoas:</strong> estabelecimentos, funções e grupos cobertos.</li>
                <li><strong>Execução:</strong> visitas, prazos, agendamento, suporte e fluxo de dúvidas.</li>
                <li><strong>Responsabilidades:</strong> dados que a empresa precisa fornecer, aprovações e tarefas internas.</li>
                <li><strong>Limites:</strong> serviços extras, deslocamentos, revisões e condições de atualização do escopo.</li>
              </ul>
              <p>
                Para programas específicos, consulte também o guia de{' '}
                <Link href="/saude/quanto-custa-pgr-pcmso">orçamento de PGR e PCMSO</Link>. A comparação deve considerar
                entregas equivalentes e a realidade de cada operação, sem assumir que a opção mais barata ou mais ampla
                seja automaticamente a mais adequada.
              </p>
            </>
          ),
        },
        {
          title: 'Como começar a estruturar gestão de SST',
          body: (
            <ol>
              <li><strong>Revisar o que existe hoje.</strong> Confira se cada documento está atualizado, representa a operação e tem a responsabilidade técnica aplicável.</li>
              <li><strong>Definir um responsável interno.</strong> Pode ser RH, DP, gerente de operação, ou cargo dedicado em empresa maior. Sem dono, o sistema não funciona.</li>
              <li><strong>Definir o apoio técnico.</strong> A empresa pode usar equipe própria, profissionais externos ou uma combinação dos dois, conforme o porte e o dimensionamento legal.</li>
              <li><strong>Definir cronograma.</strong> Quais documentos precisam ser revisados quando. Quais exames fazem aniversário em qual mês. Quais treinamentos vencem.</li>
              <li><strong>Criar painel de indicadores.</strong> Conformidade documental, taxa de exame em dia, treinamentos atualizados, eventos eSocial no prazo. Olhar mensal.</li>
              <li><strong>Fazer análise crítica periódica.</strong> A direção e os responsáveis revisam os resultados e ajustam prioridades.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'Quem é o responsável pela gestão de SST na empresa?',
          a: 'O empregador continua responsável pelo cumprimento das obrigações. A coordenação operacional pode ficar com RH, gestão, SESMT ou outro responsável interno, com apoio técnico externo quando necessário.',
        },
        {
          q: 'Posso terceirizar toda a gestão de SST?',
          a: 'Parte da execução técnica pode ser contratada externamente, desde que sejam respeitadas as atribuições profissionais e o dimensionamento aplicável. A empresa ainda precisa coordenar a rotina interna e continua responsável pelo cumprimento das obrigações.',
        },
        {
          q: 'Quanto custa montar gestão de SST do zero?',
          a: 'Na SERMST, os planos mensais começam em R$ 169,00. Além do valor mínimo, o cálculo acrescenta o preço por funcionário de cada faixa: de R$ 12,50 a R$ 18,00 no Plano Base, de R$ 13,50 a R$ 17,00 no Essencial e de R$ 17,50 a R$ 23,00 no Gestão Total. Empresas com 100 ou mais funcionários recebem proposta personalizada. O valor final varia conforme porte, grau de risco, volume de exames e escopo contratado.',
        },
        {
          q: 'Qual a diferença entre gestão de SST e SESMT?',
          a: 'SESMT é o &quot;Serviço Especializado em Engenharia de Segurança e Medicina do Trabalho&quot;: equipe técnica obrigatória para empresas com determinado porte e grau de risco. Gestão de SST é o sistema mais amplo de processos. Empresa pode ter gestão de SST sem SESMT obrigatório (terceiriza a execução técnica).',
        },
        {
          q: 'Como saber se minha gestão de SST aguenta uma fiscalização?',
          a: 'Uma auditoria pode comparar documentos, prazos e evidências com a operação real. O resultado deve apontar não conformidades, responsáveis e prioridades, sem prometer que uma fiscalização futura terá o mesmo entendimento.',
        },
      ]}
      sidebarTitle="Sua gestão de SST aguenta fiscalização?"
      sidebarHook="A SERMST revisa PGR, PCMSO, treinamentos, ASOs, EPI e eSocial para identificar inconsistências e organizar um plano de ação."
      sidebarCtaLabel="Conheça os planos de gestão SST"
      sidebarCtaHref="/assinaturas"
      related={[
        { label: 'Empresa de segurança do trabalho em São Paulo', href: '/servicos/empresa-seguranca-do-trabalho/sao-paulo' },
        { label: 'O que é saúde ocupacional', href: '/saude/o-que-e-saude-ocupacional' },
        { label: 'Guia da NR-01 e atualização do PGR', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'PCMSO (NR-07): programa', href: '/servicos/pcmso-nr07-programa/sao-paulo' },
        { label: 'Multa eSocial S-2220', href: '/rh/multa-esocial-s2220' },
      ]}
    />
  );
}
