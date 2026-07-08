import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Avaliação Psicossocial Ocupacional NR-35 | SERMST',
  description:
    'Avaliação psicossocial ocupacional para trabalho em altura e NR-01. Laudo integrado ao ASO. Realizada em São Paulo pela equipe médica da SERMST.',
  robots: 'index, follow',
  alternates: { canonical: 'https://sermst.com.br/saude/avaliacao-psicossocial-ocupacional' },
  openGraph: {
    title: 'Avaliação Psicossocial Ocupacional NR-35 | SERMST',
    description:
      'Guia sobre avaliação psicossocial ocupacional: obrigatoriedade na NR-35, o que verifica, como entra no ASO e onde fazer em São Paulo.',
    url: 'https://sermst.com.br/saude/avaliacao-psicossocial-ocupacional',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function AvaliacaoPsicossocialOcupacionalPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub Saúde Ocupacional"
      hubLabelShort="Voltar para saúde"
      hubHref="/saude"
      badgeText="Saúde Ocupacional"
      pageUrl="https://sermst.com.br/saude/avaliacao-psicossocial-ocupacional"
      coverImage={{
        src: '/images/site/sermst-saude-corporativa.jpg',
        alt: 'Avaliação psicossocial ocupacional realizada pela equipe médica da SERMST em São Paulo',
      }}
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-07-06',
        dateModified: '2026-07-06',
      }}
      readingTime="8 min"
      h1="Avaliação psicossocial ocupacional: NR-35, trabalho em altura e gestão de riscos psicossociais"
      intro="A avaliação psicossocial ocupacional é exigida pela NR-35 para trabalhadores em altura e ganhou relevância crescente com a atualização da NR-01 em 2026, que tornou obrigatória a identificação de riscos psicossociais no PGR. Para a empresa, entender quando e como essa avaliação entra no fluxo do ASO evita lacunas no programa de SST."
      quickAnswer={
        <p>
          A <strong>avaliação psicossocial ocupacional</strong> é obrigatória para{' '}
          <strong>trabalho em altura pela NR-35</strong> e faz parte do protocolo de habilitação do
          trabalhador. A SERMST realiza a avaliação em São Paulo com integração ao ASO e ao PCMSO da
          empresa.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'O que é avaliação psicossocial ocupacional',
          body: (
            <>
              <p>
                A avaliação psicossocial ocupacional é uma análise clínica que verifica se o trabalhador apresenta condições psíquicas e emocionais compatíveis com os riscos da função. No contexto da medicina do trabalho, ela não é uma consulta psicológica convencional: é uma avaliação médica integrada ao ASO que considera a aptidão para funções com risco psicossocial específico.
              </p>
              <p>
                O foco está em identificar condições que possam aumentar o risco de acidente ou comprometer a segurança do próprio trabalhador e de colegas, especialmente em funções com risco de queda, operação de máquinas pesadas ou exposição a situações de alta pressão.
              </p>
            </>
          ),
        },
        {
          title: 'NR-35 e trabalho em altura: quando a avaliação é obrigatória',
          body: (
            <>
              <p>
                A NR-35 regulamenta o trabalho em altura e define que o trabalhador só pode ser considerado habilitado após avaliação que inclua a verificação de condições de saúde físicas e psíquicas. A norma exige que o médico do trabalho avalie contraindicações clínicas ao trabalho em altura, e a dimensão psicossocial é parte desse protocolo.
              </p>
              <p>
                Na prática, trabalhadores com ansiedade intensa, fobia de altura, uso de medicamentos que alteram reflexo ou equilíbrio, histórico de crises convulsivas ou condições que comprometam atenção e reação rápida precisam ter essa avaliação documentada antes de receber o ASO de apto para trabalho em altura.
              </p>
              <p>
                Empresas que designam trabalhadores para altura sem avaliação documentada correm risco de autuação e de responsabilidade civil agravada em caso de acidente. O médico do trabalho que emite ASO de apto sem essa verificação também responde tecnicamente pela omissão.
              </p>
            </>
          ),
        },
        {
          title: 'NR-01 atualizada: riscos psicossociais no PGR',
          body: (
            <>
              <p>
                A atualização da NR-01, vigente desde maio de 2026, tornou obrigatória a identificação, avaliação e controle de riscos psicossociais no PGR. Estresse ocupacional, assédio, sobrecarga de trabalho, conflitos e pressão excessiva passaram a compor o inventário de riscos que a empresa precisa gerenciar formalmente.
              </p>
              <p>
                Isso ampliou o escopo da avaliação psicossocial no contexto corporativo. Não se trata mais de uma medida pontual para trabalho em altura: passa a fazer parte da estratégia de monitoramento da saúde mental no trabalho, com implicações no PCMSO, no PGR e na forma como o RH estrutura o acompanhamento de funções com alto risco psicossocial.
              </p>
              <p>
                Empresas que já estavam gerenciando riscos ergonômicos e físicos agora precisam incluir os riscos psicossociais com o mesmo nível de documentação e controle.
              </p>
            </>
          ),
        },
        {
          title: 'O que a avaliação psicossocial verifica',
          body: (
            <>
              <p>
                A avaliação psicossocial ocupacional conduzida pelo médico do trabalho examina aspectos como:
              </p>
              <ul>
                <li><strong>Condições psíquicas gerais:</strong> presença de transtornos de ansiedade, depressão ou outras condições que comprometam a atenção e o julgamento situacional.</li>
                <li><strong>Uso de medicamentos:</strong> benzodiazepínicos, antidepressivos, antipsicóticos e outros medicamentos que podem afetar reflexos, equilíbrio e capacidade de resposta rápida.</li>
                <li><strong>Histórico de episódios neurológicos:</strong> crises convulsivas, desmaios, distúrbios do sono com impacto na vigilância.</li>
                <li><strong>Tolerância ao estresse e à pressão:</strong> especialmente relevante para funções operacionais com risco direto e para funções de supervisão em ambientes de alta demanda.</li>
                <li><strong>Fobias específicas relacionadas à função:</strong> medo de altura, de espaços fechados ou outros fatores que comprometam a execução segura da atividade.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Como a avaliação entra no fluxo do ASO',
          body: (
            <>
              <p>
                A avaliação psicossocial é conduzida pelo médico do trabalho durante a consulta do ASO ou em sessão específica integrada ao protocolo do PCMSO. O resultado não é um laudo psicológico separado: é parte da avaliação clínica que orienta a conclusão de apto ou inapto para a função.
              </p>
              <p>
                Quando o médico identifica contraindicação psicossocial, pode emitir ASO com restrição específica para trabalho em altura, exigir avaliação psiquiátrica complementar ou recomendar remanejamento de função enquanto a condição é tratada. Essa documentação protege a empresa juridicamente em caso de questionamento posterior.
              </p>
              <p>
                A periodicidade da avaliação segue o protocolo do PCMSO para a função. Para trabalhadores em altura, a reciclagem do treinamento NR-35 ocorre a cada dois anos, e a reavaliação médica de aptidão acompanha esse ciclo.
              </p>
            </>
          ),
        },
        {
          title: 'Diferença entre avaliação psicossocial ocupacional e avaliação psicológica',
          body: (
            <>
              <p>
                A avaliação psicossocial ocupacional é realizada pelo médico do trabalho como parte do ASO. Ela verifica aptidão clínica para funções com risco psicossocial específico e tem como saída a conclusão de apto ou inapto no contexto ocupacional.
              </p>
              <p>
                A avaliação psicológica, realizada por psicólogo, tem abordagem diferente: investiga padrões de comportamento, traços de personalidade, inteligência emocional e outros aspectos que podem ser relevantes para o desenvolvimento profissional ou para processos seletivos em funções estratégicas.
              </p>
              <p>
                Para fins de cumprimento da NR-35 e do PCMSO, a avaliação médica ocupacional com dimensão psicossocial é o que a norma exige. Em empresas com programas mais robustos de saúde mental no trabalho, as duas abordagens podem coexistir com propósitos complementares.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'A avaliação psicossocial é obrigatória para trabalho em altura?',
          a: 'Sim. A NR-35 exige que o trabalhador seja avaliado clinicamente antes de ser considerado apto para trabalho em altura, e a dimensão psicossocial faz parte dessa avaliação médica. O ASO de apto para altura deve refletir essa análise.',
        },
        {
          q: 'Quem faz a avaliação psicossocial ocupacional?',
          a: 'O médico do trabalho, como parte da consulta do ASO. Em casos que exigem investigação mais aprofundada, o médico pode solicitar avaliação complementar por psiquiatra ou psicólogo.',
        },
        {
          q: 'A NR-01 exige avaliação psicossocial para todas as empresas?',
          a: 'A NR-01 atualizada em 2026 exige que todas as empresas identifiquem e gerenciem riscos psicossociais no PGR. A forma como isso se traduz em avaliações individuais depende do nível de exposição identificado para cada função.',
        },
        {
          q: 'Com que frequência a avaliação psicossocial precisa ser repetida?',
          a: 'Segue o ciclo do PCMSO para a função. Para trabalho em altura, acompanha a reciclagem da NR-35, que é bienal. Casos com histórico clínico relevante podem ter periodicidade menor a critério do médico do trabalho.',
        },
        {
          q: 'Onde fazer avaliação psicossocial ocupacional em São Paulo?',
          a: 'A SERMST realiza a avaliação psicossocial ocupacional em São Paulo Centro integrada ao ASO e ao PCMSO da empresa, pela equipe médica do trabalho no Largo do Paissandu.',
        },
      ]}
      sidebarTitle="Sua empresa precisa dessa avaliação?"
      sidebarHook="Se sua empresa tem trabalhadores em altura ou precisa adequar o PCMSO à NR-01 atualizada, a SERMST pode ajudar com a avaliação e a documentação necessária."
      sidebarCtaLabel="Falar com a equipe"
      sidebarCtaHref="/servicos/pcmso-nr07-programa/sao-paulo"
      related={[
        { label: 'Treinamento NR-35: trabalho em altura', href: '/treinamentos/nr-35-trabalho-em-altura' },
        { label: 'NR-35: regulamentação de trabalho em altura', href: '/normas/nr-35-trabalho-em-altura' },
        { label: 'Riscos psicossociais no trabalho', href: '/rh/riscos-psicossociais' },
        { label: 'PCMSO: programa de controle médico de saúde ocupacional', href: '/saude/pcmso-programa-controle-medico' },
        { label: 'NR-01 PGR atualizada: riscos psicossociais', href: '/normas/nr-01-pgr-atualizada' },
      ]}
      finalCta={{
        title: 'Avaliação psicossocial integrada ao ASO e ao PCMSO da empresa.',
        desc: 'A SERMST realiza avaliação psicossocial ocupacional em São Paulo para funções em altura e demais situações previstas no PCMSO, com laudo médico e documentação para o programa de SST.',
        label: 'Solicitar atendimento',
        href: '/contato',
      }}
    />
  );
}
