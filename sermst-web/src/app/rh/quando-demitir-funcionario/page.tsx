import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Quando demitir um funcionário: guia para gestores | SERMST',
  description:
    'Veja critérios de desempenho, documentação, comunicação e cuidados trabalhistas antes de decidir pelo desligamento de um funcionário.',
  alternates: { canonical: 'https://sermst.com.br/rh/quando-demitir-funcionario' },
  robots: 'index, follow',
  openGraph: {
    title: 'Quando demitir um funcionário: critérios e cuidados de SST | SERMST',
    description:
      'Como tomar a decisão de demissão com mais segurança: documentação necessária, exame demissional, justa causa e redução de risco trabalhista.',
    url: 'https://sermst.com.br/rh/quando-demitir-funcionario',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function QuandoDemitirPage() {
  return (
    <BlockbusterArticle
      coverImage={{ src: '/images/site/corporate-team.jpg', alt: 'Gestão de equipe e análise de desempenho para decisão de desligamento' }}
      hubLabel="RH e Departamento Pessoal"
      hubLabelShort="← RH e DP"
      hubHref="/rh"
      pageUrl="https://sermst.com.br/rh/quando-demitir-funcionario"
      author={{
        name: 'Felipe Sannino',
        jobTitle: 'Advogado - Direito do Trabalho e SST · OAB/SP 430.824',
        url: 'https://sermst.com.br/equipe/felipe-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-07-13',
      }}
      h1="Quando demitir um funcionário: o guia que o gestor precisa"
      intro="O desligamento exige análise do motivo, dos registros existentes, das verbas e de eventuais garantias provisórias de emprego. Veja critérios de gestão, etapas de comunicação e cuidados antes de formalizar a decisão."
      sections={[
        {
          title: 'A pergunta que importa antes da pergunta "quando demitir"',
          body: (
            <>
              <p>
                Antes de decidir demitir, o gestor precisa responder com honestidade a outra pergunta:
                <strong> o problema é da pessoa ou do sistema?</strong>
              </p>
              <p>
                Um funcionário com baixo desempenho pode ser reflexo de liderança sem feedback, processo mal definido,
                treinamento inexistente, ferramenta inadequada ou conflito de papel. Demitir nesses casos alivia o
                sintoma, mas mantém a causa.
              </p>
              <p>
                Quando o problema é do sistema, o correto é ajustar o sistema. Quando o problema é da pessoa, depois
                de o sistema já ter sido corrigido, a demissão passa a ser uma decisão coerente.
              </p>
            </>
          ),
        },
        {
          title: 'Os 5 sinais reais de que é hora de demitir',
          body: (
            <ol>
              <li><strong>Padrão repetido após feedback formal.</strong> A pessoa foi alertada, recebeu plano de melhoria e teve tempo para reagir, mas o padrão continua.</li>
              <li><strong>Impacto negativo na equipe.</strong> O comportamento está derrubando a moral, gerando conflito recorrente ou afastando bons profissionais.</li>
              <li><strong>Quebra de confiança sem reparo.</strong> Fraude, roubo, mentira deliberada ou ato lesivo à empresa podem justificar ruptura imediata.</li>
              <li><strong>Inadequação técnica que treinamento não resolve.</strong> A função exige algo que a pessoa não consegue entregar, mesmo com suporte razoável.</li>
              <li><strong>Mudança estrutural da empresa.</strong> A função deixou de existir, a área foi reorganizada ou o contexto do negócio mudou.</li>
            </ol>
          ),
        },
        {
          title: 'O que fazer antes de chegar à demissão',
          body: (
            <>
              <p>Antes de tomar a decisão e, principalmente, antes de comunicar, três etapas ajudam a proteger a empresa:</p>
              <ol>
                <li><strong>Feedback formal documentado.</strong> Não basta &ldquo;eu falei&rdquo;. É importante ter registro escrito com data, problema apontado, expectativa e prazo.</li>
                <li><strong>Plano de melhoria com prazo.</strong> Em geral, 30 a 90 dias são suficientes para medir evolução ou estagnação com critérios objetivos.</li>
                <li><strong>Advertências formais quando aplicável.</strong> Em casos disciplinares, a gradação ajuda a demonstrar como a empresa tratou a situação antes da decisão.</li>
              </ol>
              <p>
                Sem esse histórico, a empresa pode até dispensar sem justa causa, mas fica mais vulnerável a alegações
                de arbitrariedade, perseguição ou falha de gestão.
              </p>
            </>
          ),
        },
        {
          title: 'Os custos invisíveis de adiar uma demissão necessária',
          body: (
            <ul>
              <li><strong>Toxicidade na equipe.</strong> Bons profissionais saem quando percebem que o gestor evita decisões difíceis.</li>
              <li><strong>Queda de produtividade.</strong> O desempenho fraco de um colaborador pode virar padrão informal para os demais.</li>
              <li><strong>Custo financeiro acumulado.</strong> Salário, retrabalho, erro operacional e tempo de correção se somam silenciosamente.</li>
              <li><strong>Risco de SST.</strong> Em funções operacionais, desengajamento pode aumentar a chance de falha e acidente.</li>
              <li><strong>Drenagem do tempo da liderança.</strong> Cada intervenção recorrente tira energia do que realmente move o negócio.</li>
            </ul>
          ),
        },
        {
          title: 'Demissão por baixo desempenho não é justa causa',
          body: (
            <>
              <p>
                Erro comum: a empresa demite por desempenho fraco e tenta enquadrar como justa causa para economizar
                verbas rescisórias. Isso costuma dar errado. <strong>Baixo desempenho, por si só, não se confunde com justa causa.</strong>
              </p>
              <p>
                Na maior parte dos casos, a saída correta é a dispensa sem justa causa, com pagamento das verbas
                correspondentes. Forçar enquadramento inadequado costuma gerar ação trabalhista.
              </p>
              <p>
                Justa causa exige falta grave bem caracterizada e documentação robusta. Desídia, por exemplo, não é a
                mesma coisa que mera dificuldade de performance.
              </p>
            </>
          ),
        },
        {
          title: 'Checklist do dia da demissão',
          body: (
            <ol>
              <li>Conversa objetiva, curta e em ambiente privado.</li>
              <li>Comunicação formal com tipo de aviso, data de saída e resumo das verbas.</li>
              <li>Organização da devolução de bens, como crachá, notebook, uniforme e EPI.</li>
              <li>Revogação de acessos aos sistemas logo após a comunicação.</li>
              <li>Exame demissional agendado dentro do fluxo correto da rescisão.</li>
              <li>Alinhamento com financeiro para pagamento das verbas no prazo legal.</li>
              <li>Alinhamento com DP e eSocial para envio dos eventos obrigatórios.</li>
              <li>Plano de comunicação com a equipe para a transição imediata.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'Posso demitir funcionário em experiência?',
          a: 'Sim, mas a rescisão do contrato de experiência tem regras próprias. Dependendo do momento da ruptura, pode haver indenização específica além das verbas proporcionais.',
        },
        {
          q: 'Funcionária grávida pode ser demitida?',
          a: 'Via de regra, não sem justa causa. A estabilidade da gestante exige bastante cuidado jurídico e operacional antes de qualquer decisão.',
        },
        {
          q: 'Posso demitir funcionário em férias ou afastado pelo INSS?',
          a: 'Esses cenários exigem atenção especial porque o contrato pode estar suspenso ou protegido. O ideal é avaliar o caso com critério antes de formalizar a dispensa.',
        },
        {
          q: 'Quanto tempo de feedback antes de demitir é razoável?',
          a: 'Para baixo desempenho recuperável, um ciclo documentado de 60 a 90 dias costuma ser razoável. Em falta grave, a reação pode ser imediata. O ponto central é a empresa conseguir provar coerência.',
        },
        {
          q: 'Como demitir alguém que é parente ou amigo?',
          a: 'As regras são as mesmas. Em empresas familiares, costuma ajudar envolver alguém com mais distância emocional para conduzir a conversa e registrar o processo.',
        },
      ]}
      sidebarTitle="Sua empresa demite com SST e DP em ordem?"
      sidebarHook="Cada demissão precisa de análise do exame clínico mais recente, demissional quando aplicável, eventos corretos no eSocial e documentação coerente."
      sidebarCtaLabel="Auditar processo de demissão"
      sidebarCtaHref="/assinaturas"
      related={[
        { label: 'Como fazer carta de demissão', href: '/rh/carta-demissao' },
        { label: 'Como evitar processos trabalhistas', href: '/rh/evitar-processos-trabalhistas' },
        { label: 'Exame demissional: o que é e quando fazer', href: '/saude/exame-demissional' },
        { label: 'Multa eSocial S-2220', href: '/rh/multa-esocial-s2220' },
      ]}
    />
  );
}
