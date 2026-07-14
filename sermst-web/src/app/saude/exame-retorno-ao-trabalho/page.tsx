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
      hubLabel="Saúde Ocupacional"
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
        dateModified: '2026-07-13',
      }}
      readingTime="7 min"
      h1="Exame de retorno ao trabalho: quando é obrigatório, o que avalia e como fazer"
      intro="O exame de retorno ao trabalho é a avaliação médica exigida pela NR-07 antes que o trabalhador reassuma suas atividades após afastamento igual ou superior a 30 dias por doença ou acidente. A avaliação define a aptidão e verifica se o retorno precisa ser gradativo."
      quickAnswer={
        <p>
          O <strong>exame de retorno ao trabalho</strong> é obrigatório após afastamento de{' '}
          <strong>30 dias ou mais</strong> por doença ou acidente, de natureza ocupacional ou não. O exame clínico e o ASO devem ser concluídos{' '}
          <strong>antes de o trabalhador reassumir suas funções</strong>.
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
                Diferente do exame periódico, o retorno ao trabalho não tem periodicidade: ele é disparado por um evento específico: o afastamento. E diferente do admissional, ele pressupõe um histórico clínico anterior que o médico do trabalho deve considerar ao emitir o ASO.
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
              </ul>
              <p>
                O prazo de 30 dias é contado a partir do início do afastamento, não da alta médica. Um trabalhador que ficou afastado por 45 dias e recebeu alta precisa fazer o exame de retorno antes de voltar a trabalhar, mesmo que a alta previdenciária já tenha sido emitida.
              </p>
              <p>
                Em afastamentos menores, a organização ainda pode encaminhar o trabalhador para avaliação clínica quando houver indicação médica ou preocupação com a compatibilidade entre o estado de saúde e a função. Isso não muda o limite que torna o exame de retorno obrigatório na NR-07.
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
                <li><strong>Retorno gradativo:</strong> se a retomada pode ocorrer integralmente ou se precisa de um plano progressivo, como prevê o item 7.5.9.1 da NR-07.</li>
                <li><strong>Risco de reincidência:</strong> especialmente importante em afastamentos por lesões musculoesqueléticas, distúrbios psicossociais e doenças cardiovasculares: condições com alta taxa de recorrência se o ambiente de trabalho não for adaptado.</li>
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
                Quando o exame gera ASO, as informações são enviadas ao eSocial pelo evento S-2220 dentro do prazo aplicável. O envio deve reproduzir o exame efetivamente realizado; ele não substitui a avaliação clínica que precisa acontecer antes da reassunção da função.
              </p>
              <p>
                Se o trabalhador reassume antes da avaliação, a empresa deixa de cumprir a sequência prevista na NR-07 e cria divergência entre a rotina real, o ASO e o histórico informado no eSocial.
              </p>
              <p>
                Quando o afastamento decorreu de acidente de trabalho ou doença ocupacional, a empresa também precisa conferir a CAT e reavaliar o PGR e as medidas de prevenção relacionadas ao caso. O LTCAT entra na análise quando houver reflexo previdenciário ligado à exposição.
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
                O retorno ao trabalho avalia se o trabalhador pode reassumir suas atividades após o afastamento. O ASO registra a conclusão de <strong>apto</strong> ou <strong>inapto</strong> para a função. A avaliação médica também deve definir se existe necessidade de retorno gradativo.
              </p>
              <p>
                A readaptação funcional é um processo mais amplo, geralmente conduzido pelo INSS no contexto da reabilitação profissional, para trabalhadores que não podem mais exercer a função original de forma permanente. Quando o INSS encaminha um trabalhador para reabilitação, a empresa recebe comunicação formal e precisa cooperar com a recolocação em função compatível.
              </p>
              <p>
                Recomendações de adaptação, limitações temporárias e encaminhamentos precisam ser tratados no plano de retorno e na documentação médica adequada. Não devem ser apresentados como uma terceira categoria padronizada de conclusão do ASO.
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
                A ausência do exame de retorno também impede o lançamento correto no eSocial e pode gerar divergência com os dados do INSS: o que atrai atenção em auditorias e processos de gestão de afastamentos.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'O exame de retorno ao trabalho é obrigatório?',
          a: 'Sim, após afastamento igual ou superior a 30 dias por doença ou acidente, de natureza ocupacional ou não. O exame clínico deve acontecer antes de o trabalhador reassumir suas funções.',
        },
        {
          q: 'Qual o prazo para fazer o exame de retorno ao trabalho?',
          a: 'A NR-07 não fixa um dia civil específico. Ela exige que o exame clínico seja realizado antes de o trabalhador reassumir suas funções após o afastamento abrangido pela regra.',
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
