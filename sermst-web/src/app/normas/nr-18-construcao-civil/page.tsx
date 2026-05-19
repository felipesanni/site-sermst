import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-18: Construção Civil — guia completo para empresas e responsáveis técnicos | SERMST',
  description:
    'A NR-18 reúne os requisitos de SST específicos da construção civil. Veja o que exige, PCMAT, treinamentos, fiscalização do MTE é o que precisa estar documentado para defesa em obra.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-18-construcao-civil' },
  openGraph: {
    title: 'NR-18: construção civil — PCMAT, EPI e segurança em obra | SERMST',
    description:
      'Guia da NR-18 para construtoras: PCMAT obrigatório, equipamentos de proteção, treinamentos, EPC e documentação para obras com mais de 20 trabalhadores.',
    url: 'https://sermst.com.br/normas/nr-18-construcao-civil',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function NR18Page() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/site/safety-equipment.jpg", alt: "Canteiro de obra com sinalização e equipamentos de segurança conforme NR-18" }}
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="← Normas"
      hubHref="/normas/nr-18-construcao-civil"
      pageUrl="https://sermst.com.br/normas/nr-18-construcao-civil"
      badgeText="NR-18"
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-05-01',
      }}

      h1="NR-18: Segurança e Saúde no Trabalho na Construção Civil"
      intro="A NR-18 é a norma com mais autuação aplicada do país. Reúne requisitos de SST específicos para canteiro de obras: PCMAT, treinamentos, andaimes, escavações, EPIs, sinalização. Veja o que exige e como cumprir sem travar a obra."
      sections={[
        {
          title: 'O que é a NR-18 e quem precisa cumprir',
          body: (
            <>
              <p>
                A NR-18 estabelece as diretrizes de saúde e segurança aplicáveis à <strong>indústria da construção</strong>. Engloba obra residencial, comercial, industrial, pavimentação, demolição, reforma, restauração, e atividades correlatas. Toda empresa que executa atividade de construção é responsável pelo cumprimento — desde a construtora grande até o microempreendedor que faz reforma.
              </p>
              <p>
                Tem cobertura ampla porque construção é o setor com maior taxa de acidente fatal no Brasil. A norma é robusta — mais de 200 itens — e a fiscalização é uma das mais ativas do MTE.
              </p>
            </>
          ),
        },
        {
          title: 'PCMAT: o coração documental da NR-18',
          body: (
            <>
              <p>
                Para obras com 20 ou mais trabalhadores, é obrigatório o <strong>PCMAT — Programa de Condições e Meio Ambiente de Trabalho na Indústria da Construção</strong>. É o documento que materializa o planejamento de SST da obra. Deve incluir:
              </p>
              <ul>
                <li>Memorial sobre as condições e meio ambiente do canteiro</li>
                <li>Projetos de proteção coletiva e individual</li>
                <li>Cronograma físico das medidas preventivas</li>
                <li>Layout do canteiro com áreas de vivência</li>
                <li>Programa de treinamento</li>
                <li>Especificações técnicas de equipamentos críticos (andaime, plataforma, gerador)</li>
              </ul>
              <p>
                Sem PCMAT, a obra não pode ser iniciada legalmente. Em fiscalização, é o primeiro documento pedido — junto com PGR, PCMSO e ordens de serviço.
              </p>
            </>
          ),
        },
        {
          title: 'Treinamentos exigidos',
          body: (
            <>
              <p>
                A NR-18 exige treinamento <strong>admissional e periódico</strong> para todos os trabalhadores da obra. Carga mínima de 6 horas no admissional. Conteúdo programático específico — não pode ser cópia de treinamento de outro setor.
              </p>
              <p>
                Para atividades específicas em obra, a NR-18 se combina com outras normas:
              </p>
              <ul>
                <li><strong>NR-35</strong> para qualquer atividade acima de 2 metros (andaime, telhado, fachada)</li>
                <li><strong>NR-10</strong> para serviços elétricos</li>
                <li><strong>NR-12</strong> para operação de máquinas e equipamentos (gerador, betoneira, serra circular)</li>
                <li><strong>NR-33</strong> para espaço confinado (poço, tanque, fossa)</li>
                <li><strong>NR-34</strong> para construção naval — específica</li>
              </ul>
              <p>
                Trabalhador que faz mais de uma atividade precisa dos treinamentos correspondentes — todos formalizados, com certificado e registro nominal.
              </p>
            </>
          ),
        },
        {
          title: 'Pontos críticos que o fiscal vai olhar',
          body: (
            <ol>
              <li><strong>Áreas de vivência</strong> — vestiário, refeitório, sanitário, instalações para refeição. Tem dimensionamento mínimo por trabalhador.</li>
              <li><strong>Andaimes</strong> — modelo, montagem, projeto assinado por engenheiro, guarda-corpo, sapatas.</li>
              <li><strong>Escavações</strong> — escoramento, sinalização, proteção da borda, distância segura para trânsito de máquina.</li>
              <li><strong>Proteção contra queda</strong> — guarda-corpo em laje, redes, fechamento de poço de elevador.</li>
              <li><strong>EPI</strong> — fornecimento, ficha de entrega assinada, fiscalização do uso.</li>
              <li><strong>Sinalização do canteiro</strong> — placas obrigatórias, demarcação de áreas de risco.</li>
              <li><strong>Instalações elétricas provisórias</strong> — quadros aterrados, cabos protegidos, dispositivo DR.</li>
              <li><strong>Documentação</strong> — PCMAT, PGR, PCMSO, ASOs, certificados de treinamento.</li>
            </ol>
          ),
        },
        {
          title: 'O que muda em obra pequena',
          body: (
            <>
              <p>
                Obra com menos de 20 trabalhadores não precisa de PCMAT, mas <strong>continua precisando de PGR e PCMSO</strong>. As exigências de treinamento, EPI, sinalização e proteção coletiva também valém. A redução documental não é redução de obrigação.
              </p>
              <p>
                Empresa que faz reforma com 5 trabalhadores também tem que ter ASO admissional, treinamento de NR-35 se houver trabalho em altura, EPI com CA válido e ficha de entrega. O fato de ser obra pequena não tira responsabilidade — só reduz formalidade.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'PCMAT precisa ser assinado por engenheiro?',
          a: 'Sim. O PCMAT é elaborado por profissional legalmente habilitado (engenheiro de segurança do trabalho ou técnico de segurança sob supervisão do engenheiro). Sem ART recolhida, o documento perde valor em fiscalização.',
        },
        {
          q: 'Construtora terceiriza tudo. Quem responde?',
          a: 'A construtora dona da obra é responsável solidária pelas condições de SST do canteiro, mesmo quando a execução é terceirizada. A subcontratada também responde, mas a construtora não escapa. Por isso é exigência manter visibilidade dos documentos das terceirizadas (PGR, treinamentos, ASOs).',
        },
        {
          q: 'Qual a multa por descumprimento?',
          a: 'Varia conforme a infração e o número de trabalhadores expostos. Cada item da NR-18 tem código próprio. Multas começam em poucos milhares e podem somar dezenas de milhares numa única autuação. Em caso de embargo, o custo da paralisação costuma superar a multa.',
        },
        {
          q: 'É possível ter PCMAT genérico para várias obras?',
          a: 'Não. PCMAT é específico para a obra — depende do projeto, do canteiro, dos riscos identificados. Empresa que reutiliza PCMAT antigo está se expondo: em fiscalização, a divergência entre o documento e a obra real desmonta a defesa.',
        },
        {
          q: 'Quando deve ser feito o PCMAT?',
          a: 'Antes do início da obra. É pré-requisito para mobilização do canteiro. PCMAT feito depois do início é evidência de descumprimento de outros itens — não cobre as fases iniciais e indica que a empresa só fez por exigência tardia.',
        },
      ]}
      sidebarTitle="Sua obra tem PCMAT, PGR e treinamentos em dia?"
      sidebarHook="A NR-18 é a norma mais fiscalizada do país. A SERMST faz auditoria documental e visita técnica de canteiro — antes da fiscalização chegar."
      sidebarCtaLabel="Auditar minha obra"
      related={[
        { label: 'NR-35: Trabalho em altura', href: '/normas/nr-35-trabalho-em-altura' },
        { label: 'NR-10: Eletricidade', href: '/normas/nr-10-eletricidade' },
        { label: 'PGR para construção civil', href: '/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo' },
        { label: 'Treinamentos NR / CIPA / brigada', href: '/servicos/treinamentos-nrs-cipa-brigada/sao-paulo' },
      ]}
    />
  );
}
