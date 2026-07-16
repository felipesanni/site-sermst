import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Gestão de SST: Como Organizar na Empresa | SERMST',
  description:
    'Veja como organizar PGR, PCMSO, exames, treinamentos e eSocial em uma rotina de gestão de saúde e segurança do trabalho.',
  alternates: { canonical: 'https://sermst.com.br/saude/gestao-sst' },
  openGraph: {
    title: 'Gestão de SST: como estruturar saúde e segurança na empresa | SERMST',
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
        dateModified: '2026-05-01',
      }}

      h1="Gestão de SST: como organizar a rotina da empresa"
      intro="Gestão de Saúde e Segurança do Trabalho não cabe em uma pasta de documentos. Ela conecta a identificação dos riscos, as medidas de controle, os exames, os treinamentos e os registros enviados ao eSocial."
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
          a: 'Na prática, a gestão completa de SST costuma ser contratada em formato mensal. Para empresas com mais de 5 colaboradores, a referência informada é de R$ 14,00 a R$ 21,00 por colaborador. Já empresas com até 5 funcionários podem entrar em pacotes com valor fixo a partir de R$ 180,00 por mês. O valor final varia conforme grau de risco, volume de exames, necessidade de treinamentos e escopo técnico contratado.',
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
      sidebarCtaLabel="Simular auditoria SST"
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
