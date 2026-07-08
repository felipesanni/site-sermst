import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Exame de Retorno ao Trabalho em São Paulo | SERMST',
  description:
    'Exame de retorno ao trabalho obrigatório após afastamento de 30 dias ou mais. ASO antes de reassumir funções. Realizado em São Paulo pela SERMST.',
  robots: 'index, follow',
  alternates: { canonical: 'https://sermst.com.br/saude/exame-retorno-ao-trabalho' },
  openGraph: {
    title: 'Exame de Retorno ao Trabalho em São Paulo | SERMST',
    description:
      'Guia sobre o exame de retorno ao trabalho: quando é obrigatório, o que o médico avalia, diferença para readaptação e como fazer o ASO antes do retorno.',
    url: 'https://sermst.com.br/saude/exame-retorno-ao-trabalho',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function ExameRetornoAoTrabalhoPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub Saúde Ocupacional"
      hubLabelShort="Voltar para saúde"
      hubHref="/saude"
      badgeText="Saúde Ocupacional"
      pageUrl="https://sermst.com.br/saude/exame-retorno-ao-trabalho"
      coverImage={{
        src: '/images/site/sermst-saude-corporativa.jpg',
        alt: 'Exame de retorno ao trabalho realizado pela equipe médica da SERMST em São Paulo',
      }}
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-07-06',
        dateModified: '2026-07-06',
      }}
      readingTime="7 min"
      h1="Exame de retorno ao trabalho: quando é obrigatório, o que avalia e como fazer"
      intro="O exame de retorno ao trabalho é a avaliação médica exigida pela NR-07 antes que o trabalhador reassuma suas atividades após afastamento prolongado. Ele não é formalidade: é a oportunidade de identificar se o trabalhador está de fato apto para retomar a função, se precisa de restrições temporárias e se há risco de reincidência que a empresa precisa documentar e gerenciar."
      quickAnswer={
        <p>
          O <strong>exame de retorno ao trabalho</strong> é obrigatório após afastamento de{' '}
          <strong>30 dias ou mais</strong> por doença, acidente ou parto. O ASO precisa ser emitido{' '}
          <strong>no primeiro dia útil de retorno</strong>, antes de o trabalhador reassumir as atividades.
          A SERMST realiza o exame em São Paulo com integração ao PCMSO e lançamento no eSocial.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'O que é o exame de retorno ao trabalho',
          body: (
            <>
              <p>
                O exame de retorno ao trabalho é um dos tipos de ASO previstos na NR-07. Ele é realizado especificamente após afastamentos prolongados e tem como objetivo verificar se o trabalhador está em condições de retomar a função que exercia antes do afastamento.
              </p>
              <p>
                A avaliação considera tanto o estado clínico atual do trabalhador quanto as exigências da função. Um trabalhador que se afastou por hérnia de disco, por exemplo, pode estar clinicamente recuperado mas ainda com restrições de carga que tornam o retorno à função original incompatível sem adaptações.
              </p>
              <p>
                Diferente do exame periódico, o retorno ao trabalho não tem periodicidade — ele é disparado por um evento específico: o afastamento. E diferente do admissional, ele pressupõe um histórico clínico anterior que o médico do trabalho deve considerar ao emitir o ASO.
              </p>
            </>
          ),
        },
        {
          title: 'Quando o exame de retorno ao trabalho é obrigatório',
          body: (
            <>
              <p>
                A NR-07 define que o exame de retorno ao trabalho é obrigatório após afastamento de 30 dias ou mais nas seguintes situações:
              </p>
              <ul>
                <li><strong>Doença ou lesão não relacionada ao trabalho:</strong> afastamento por INSS (auxílio-doença previdenciário, B-31) com duração igual ou superior a 30 dias.</li>
                <li><strong>Acidente de trabalho ou doença ocupacional:</strong> afastamento por INSS (auxílio-doença acidentário, B-91) com duração igual ou superior a 30 dias.</li>
                <li><strong>Licença-maternidade:</strong> após o afastamento pelo parto, o retorno ao trabalho exige o exame antes de reassumir as atividades.</li>
              </ul>
              <p>
                O prazo de 30 dias é contado a partir do início do afastamento, não da alta médica. Um trabalhador que ficou afastado por 45 dias e recebeu alta precisa fazer o exame de retorno antes de voltar a trabalhar, mesmo que a alta previdenciária já tenha sido emitida.
              </p>
              <p>
                O médico do trabalho pode, a seu critério, exigir o exame de retorno também em afastamentos de menos de 30 dias quando julgar que o estado de saúde do trabalhador ou o risco da função justificam a avaliação.
              </p>
            </>
          ),
        },
        {
          title: 'O que o médico avalia no retorno',
          body: (
            <>
              <p>
                A consulta de retorno ao trabalho é mais complexa do que um exame periódico de rotina. O médico do trabalho avalia:
              </p>
              <ul>
                <li><strong>Condição clínica atual:</strong> se o trabalhador está recuperado do quadro que gerou o afastamento e se há sequelas relevantes para a função.</li>
                <li><strong>Compatibilidade com a função:</strong> se as exigências físicas, cognitivas e emocionais da função são compatíveis com o estado atual do trabalhador.</li>
                <li><strong>Necessidade de restrições:</strong> se o retorno pode ser feito integralmente ou se há atividades específicas que precisam ser temporariamente limitadas.</li>
                <li><strong>Risco de reincidência:</strong> especialmente importante em afastamentos por lesões musculoesqueléticas, distúrbios psicossociais e doenças cardiovasculares — condições com alta taxa de recorrência se o ambiente de trabalho não for adaptado.</li>
                <li><strong>Necessidade de exames complementares:</strong> em retornos após afastamentos longos ou por condições específicas, o médico pode solicitar exames atualizados antes de emitir o ASO de apto.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Retorno ao trabalho e eSocial',
          body: (
            <>
              <p>
                O exame de retorno ao trabalho precisa ser registrado no eSocial por meio do evento S-2220 (monitoramento da saúde do trabalhador). O lançamento deve ser feito antes ou no dia do retorno às atividades — nunca retroativo de forma habitual.
              </p>
              <p>
                Empresas que permitem que o trabalhador retome as atividades antes do ASO de retorno ficam em dupla exposição: descumprem a NR-07 e têm a inconsistência registrada no eSocial SST, que é auditável pelo Ministério do Trabalho e Emprego e pelo INSS.
              </p>
              <p>
                Quando o afastamento foi por acidente de trabalho ou doença ocupacional (B-91), a empresa precisa verificar também se a CAT foi corretamente emitida e se o PPRA e o LTCAT foram revisados caso as condições de trabalho tenham relação com o afastamento.
              </p>
            </>
          ),
        },
        {
          title: 'Diferença entre retorno ao trabalho e readaptação funcional',
          body: (
            <>
              <p>
                O exame de retorno ao trabalho e a readaptação funcional são dois momentos distintos e não devem ser confundidos.
              </p>
              <p>
                O retorno ao trabalho é a avaliação médica que autoriza o trabalhador a reassumir suas atividades após o afastamento. Ele resulta em um ASO e pode ter três desfechos: apto para a função original, apto com restrições temporárias, ou inapto temporário (quando o trabalhador ainda não tem condições de retornar).
              </p>
              <p>
                A readaptação funcional é um processo mais amplo, geralmente conduzido pelo INSS no contexto da reabilitação profissional, para trabalhadores que não podem mais exercer a função original de forma permanente. Quando o INSS encaminha um trabalhador para reabilitação, a empresa recebe comunicação formal e precisa cooperar com a recolocação em função compatível.
              </p>
              <p>
                Na prática, o médico do trabalho pode emitir ASO de apto com restrições permanentes — o que na prática sinaliza necessidade de mudança de função — sem que isso seja formalmente uma readaptação via INSS. O RH precisa estar atento às restrições registradas no ASO e agir em conformidade para evitar que o trabalhador continue exercendo atividades incompatíveis.
              </p>
            </>
          ),
        },
        {
          title: 'O que fazer se o trabalhador volta sem o exame',
          body: (
            <>
              <p>
                Se o trabalhador retorna ao trabalho sem que o exame de retorno tenha sido realizado, a empresa deve interromper as atividades e agendar o exame imediatamente. Deixar o trabalhador em atividade sem o ASO de retorno é descumprimento da NR-07 e pode agravar a responsabilidade da empresa em caso de incidente subsequente.
              </p>
              <p>
                Do ponto de vista prático, o trabalhador não deve ser impedido de entrar na empresa, mas não deve reassumir as funções antes da avaliação médica. O RH deve ter um protocolo claro para esse cenário, especialmente em casos de retorno após afastamentos longos ou por condições graves.
              </p>
              <p>
                A ausência do exame de retorno também impede o lançamento correto no eSocial e pode gerar divergência com os dados do INSS — o que atrai atenção em auditorias e processos de gestão de afastamentos.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'O exame de retorno ao trabalho é obrigatório?',
          a: 'Sim. A NR-07 exige o exame de retorno ao trabalho após afastamento de 30 dias ou mais por doença, acidente ou parto. O ASO deve ser emitido no primeiro dia útil de retorno, antes de o trabalhador reassumir as atividades.',
        },
        {
          q: 'Qual o prazo para fazer o exame de retorno ao trabalho?',
          a: 'O exame deve ser realizado no primeiro dia útil de retorno às atividades. O trabalhador não pode reassumir a função antes de ter o ASO de retorno emitido pelo médico do trabalho.',
        },
        {
          q: 'O exame de retorno ao trabalho substitui o periódico?',
          a: 'Não. São obrigações independentes. O retorno ao trabalho é específico para o afastamento e não altera o calendário do exame periódico. Os dois precisam ser realizados nos respectivos prazos.',
        },
        {
          q: 'O que acontece se a empresa não faz o exame de retorno?',
          a: 'A empresa descumpre a NR-07 e fica exposta a autuação em fiscalização. Além disso, se o trabalhador sofrer novo incidente após retornar sem ASO, a ausência do exame agrava a responsabilidade civil e trabalhista da empresa.',
        },
        {
          q: 'Onde fazer exame de retorno ao trabalho em São Paulo?',
          a: 'A SERMST realiza o exame de retorno ao trabalho em São Paulo Centro, no Largo do Paissandu, com emissão do ASO e lançamento no eSocial S-2220 integrado ao PCMSO da empresa.',
        },
      ]}
      sidebarTitle="Trabalhador retornando de afastamento?"
      sidebarHook="A SERMST realiza o exame de retorno ao trabalho em São Paulo com ASO e lançamento no eSocial. Agendamento prioritário para retornos com data definida pelo INSS."
      sidebarCtaLabel="Agendar exame de retorno"
      sidebarCtaHref="/servicos/exame-admissional-expresso/sao-paulo"
      related={[
        { label: 'Exame periódico ocupacional', href: '/saude/exame-periodico-ocupacional' },
        { label: 'Como funciona o exame admissional', href: '/exames/como-funciona-o-exame-admissional' },
        { label: 'Exame demissional: o que é e quando fazer', href: '/saude/exame-demissional' },
        { label: 'PCMSO: programa de controle médico de saúde ocupacional', href: '/saude/pcmso-programa-controle-medico' },
        { label: 'ASO: atestado de saúde ocupacional', href: '/saude/aso-atestado-saude-ocupacional' },
      ]}
      finalCta={{
        title: 'ASO de retorno ao trabalho antes do primeiro dia de atividade.',
        desc: 'A SERMST realiza o exame de retorno ao trabalho em São Paulo com emissão do ASO e lançamento no eSocial S-2220, integrado ao PCMSO da empresa. Agendamento prioritário para retornos com data definida.',
        label: 'Falar com a SERMST',
        href: '/contato',
      }}
    />
  );
}
