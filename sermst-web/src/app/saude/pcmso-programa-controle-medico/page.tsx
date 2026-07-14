import type { Metadata } from 'next';
import Link from 'next/link';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'PCMSO: o que é, quem precisa e qual a validade do programa | SERMST',
  description:
    'Entenda o que é o PCMSO, quem precisa elaborar o programa, quando há dispensa prevista na NR-07, qual a validade prática e como ele se conecta ao PGR, ASO e eSocial.',
  alternates: { canonical: 'https://sermst.com.br/saude/pcmso-programa-controle-medico' },
  openGraph: {
    title: 'PCMSO: o que é, quem precisa e como estruturar corretamente | SERMST',
    description:
      'Guia completo sobre o Programa de Controle Médico de Saúde Ocupacional: obrigatoriedade, conteúdo mínimo, validade prática, integração com eSocial e erros comuns a evitar.',
    url: 'https://sermst.com.br/saude/pcmso-programa-controle-medico',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function PCMSOPage() {
  return (
    <BlockbusterArticle
      hubLabel="Saúde Ocupacional"
      hubLabelShort="Voltar para Saúde"
      hubHref="/saude"
      pageUrl="https://sermst.com.br/saude/pcmso-programa-controle-medico"
      coverImage={{
        src: '/images/articles/pcmso-programa.jpg',
        alt: 'Documentação do Programa de Controle Médico de Saúde Ocupacional',
      }}
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional | Técnico em Segurança do Trabalho | CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-07-07',
      }}
      h1="PCMSO: o que é, quem precisa e qual a validade do programa"
      intro="PCMSO significa Programa de Controle Médico de Saúde Ocupacional. Previsto na NR-07, ele organiza o planejamento médico, os exames ocupacionais e o acompanhamento da saúde conforme os riscos de cada função. O programa deve permanecer alinhado ao PGR, aos ASOs e às informações enviadas ao eSocial."
      sections={[
        {
          title: 'O que é o PCMSO',
          body: (
            <>
              <p>
                PCMSO é a sigla para <strong>Programa de Controle Médico de Saúde Ocupacional</strong>. Previsto na
                <strong> NR-07</strong>, ele define, com base nos riscos identificados no PGR, quais exames ocupacionais e
                quais ações de vigilância da saúde precisam ser planejados para os empregados.
              </p>
              <p>
                O ponto mais importante é este: <strong>PCMSO não é uma lista padrão de exames</strong>. O programa precisa
                refletir a realidade da operação. Uma empresa com ruído, calor, agentes químicos, trabalho em altura ou
                risco ergonômico relevante não pode usar o mesmo desenho médico de um escritório sem essas exposições.
              </p>
              <p>
                Para uma definição resumida, consulte o{' '}
                <Link href="/dicionario/o-que-e-pcmso">dicionário sobre o que é PCMSO</Link>. A página de{' '}
                <Link href="/normas/o-que-e-nr-07">NR-07</Link> apresenta a base normativa. Neste guia, você encontra
                a aplicação do programa na rotina da empresa.
              </p>
            </>
          ),
        },
        {
          title: 'As três dúvidas mais comuns sobre o PCMSO',
          body: (
            <>
              <p>As dúvidas sobre PCMSO geralmente aparecem em três momentos:</p>
              <ul>
                <li><strong>Conceito:</strong> o que a sigla significa e qual é a finalidade do programa.</li>
                <li><strong>Obrigação:</strong> quem precisa elaborar, quando há dispensa, quem responde pelo programa e quando revisar.</li>
                <li><strong>Execução:</strong> como definir exames, controlar prazos e manter o PCMSO alinhado ao PGR e ao eSocial.</li>
              </ul>
              <p>
                Separar essas perguntas evita duas confusões frequentes: tratar o programa como uma lista pronta de exames
                ou presumir que uma dispensa se aplica sem verificar as condições da NR-01 e da NR-07.
              </p>
            </>
          ),
        },
        {
          title: 'Quem precisa elaborar o PCMSO',
          body: (
            <>
              <p>
                Como regra, organizações com empregados regidos pela CLT precisam garantir a elaboração e a efetiva
                implantação do PCMSO. O empregador também precisa custear os procedimentos e indicar o médico responsável
                pelo programa.
              </p>
              <p>
                Existe, porém, uma exceção importante: a NR-07 prevê dispensa de elaboração para alguns MEI, ME e EPP de
                <strong> grau de risco 1 ou 2</strong>, desde que atendam às condições da NR-01 e não identifiquem as
                exposições ocupacionais previstas na regra.
              </p>
              <p>
                Essa dispensa <strong>não elimina</strong> os exames ocupacionais nem a emissão do ASO. Para entender os
                critérios com mais precisão, vale ver o guia sobre{' '}
                <Link href="/rh/declaracao-inexistencia-risco-dir">Declaração de Inexistência de Riscos (DIR)</Link>.
              </p>
            </>
          ),
        },
        {
          title: 'Quem assina o PCMSO',
          body: (
            <>
              <p>
                A organização deve indicar <strong>médico responsável pelo PCMSO</strong>. Em regra, esse papel recai sobre
                médico do trabalho. Quando não houver médico do trabalho disponível na localidade, a NR-07 admite, nas
                hipóteses da própria norma, médico de outra especialidade como responsável pelo programa.
              </p>
              <p>
                Na prática, a pergunta “quem assina o PCMSO?” normalmente esconde outra dúvida: se existe responsabilidade
                técnica real por trás do documento. E é justamente aí que programas genéricos costumam falhar.
              </p>
            </>
          ),
        },
        {
          title: 'Qual é a validade do PCMSO',
          body: (
            <>
              <p>
                A NR-07 <strong>não estabelece validade fixa de 12 meses para o PCMSO</strong>. O programa precisa acompanhar
                a realidade da organização e ser revisto sempre que o PGR indicar mudanças nos riscos, quando surgirem novas
                atividades, quando cargos forem alterados ou quando os resultados médicos apontarem necessidade de ajuste.
              </p>
              <p>
                O que tem lógica anual é o <strong>relatório analítico do PCMSO</strong>, elaborado pelo médico responsável,
                salvo as hipóteses de dispensa previstas na própria norma.
              </p>
            </>
          ),
        },
        {
          title: 'O que o PCMSO deve conter',
          body: (
            <ul>
              <li><strong>Identificação da empresa:</strong> CNPJ, endereço, ramo de atividade, grau de risco e CNAE.</li>
              <li><strong>Responsável técnico:</strong> nome e CRM do médico responsável pelo programa.</li>
              <li><strong>Relação de cargos e riscos:</strong> baseada no PGR vigente e ligada à exposição real de cada função.</li>
              <li><strong>Relação de exames por cargo:</strong> admissional, periódico, retorno ao trabalho, mudança de risco e demissional.</li>
              <li><strong>Periodicidade dos exames:</strong> definida por cargo, risco e critério médico.</li>
              <li><strong>Ações de saúde ocupacional:</strong> quando aplicáveis, campanhas, orientações e medidas coletivas.</li>
              <li><strong>Relatório analítico:</strong> consolidação dos exames, achados e comparação com o período anterior.</li>
            </ul>
          ),
        },
        {
          title: 'PCMSO, ASO, PGR e eSocial: como tudo se conecta',
          body: (
            <>
              <p>
                O PCMSO orienta os exames ocupacionais que sustentam o <strong>ASO</strong> e as informações lançadas no
                <strong> S-2220</strong> do eSocial. Mas esse fluxo só funciona quando existe coerência técnica.
              </p>
              <p>
                Se o exame enviado ao eSocial não conversa com o cargo real do trabalhador e com o protocolo previsto no
                PCMSO, o evento fica inconsistente. E se o <strong>S-2240</strong> informa um risco que não aparece refletido
                no programa médico, a empresa passa a contar duas histórias diferentes.
              </p>
              <p>
                Em termos práticos, <strong>PGR, PCMSO, ASO e eSocial</strong> precisam falar a mesma língua. Quando isso não
                acontece, a inconsistência aparece rápido em fiscalização, perícia, auditoria ou revisão interna.
              </p>
            </>
          ),
        },
        {
          title: 'Os erros mais comuns no PCMSO',
          body: (
            <ol>
              <li><strong>PCMSO genérico:</strong> documento copiado de modelo pronto, sem relação real com a operação.</li>
              <li><strong>Programa desatualizado:</strong> a empresa mudou riscos, atividades ou cargos, mas o programa ficou antigo.</li>
              <li><strong>Responsável técnico mal definido:</strong> ninguém assume de fato a lógica médica do programa.</li>
              <li><strong>Exames vencidos:</strong> a periodicidade existe no papel, mas não existe controle operacional.</li>
              <li><strong>PCMSO e PGR desconectados:</strong> o PGR identifica um risco, mas o programa médico não acompanha esse cenário.</li>
            </ol>
          ),
        },
        {
          title: 'Quando buscar apoio para elaborar ou revisar o PCMSO',
          body: (
            <>
              <p>
                Vale buscar apoio quando a empresa precisa revisar o programa, definir a grade de exames, organizar
                vencimentos, alinhar o S-2220 ou corrigir incoerências com o PGR.
              </p>
              <p>
                A página de <Link href="/servicos/pcmso-nr07-programa/sao-paulo">elaboração e gestão de PCMSO</Link>{' '}
                explica o escopo do atendimento e como solicitar uma proposta.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'Quem pode ser o médico responsável pelo PCMSO?',
          a: 'Como regra, a organização deve indicar médico do trabalho responsável pelo programa. Quando não houver médico do trabalho disponível na localidade, a NR-07 admite médico de outra especialidade nas hipóteses previstas.',
        },
        {
          q: 'O PCMSO precisa ser renovado todo ano?',
          a: 'A NR-07 não fixa validade anual para o programa em si. O PCMSO precisa acompanhar a realidade da empresa e ser atualizado quando necessário. O relatório analítico tem lógica anual, salvo as dispensas previstas na norma.',
        },
        {
          q: 'O PCMSO pode ser o mesmo para todas as filiais?',
          a: 'Nem sempre. Se as unidades têm atividades, riscos ou estruturas diferentes, o programa pode precisar de individualização ou, no mínimo, de especificidades bem documentadas por unidade.',
        },
        {
          q: 'A dispensa do PCMSO elimina a obrigação de fazer exames ocupacionais?',
          a: 'Não. Mesmo quando há dispensa de elaborar o programa nas hipóteses previstas na NR-07, a empresa continua obrigada a realizar e custear os exames ocupacionais e a emitir o ASO.',
        },
        {
          q: 'PCMSO e PPRA são a mesma coisa?',
          a: 'Não. O PPRA deixou de ser o programa geral com a entrada do GRO e do PGR. O PGR organiza o gerenciamento dos riscos, e o PCMSO define o acompanhamento médico coerente com eles.',
        },
        {
          q: 'Para que serve o PCMSO?',
          a: 'O PCMSO serve para organizar o monitoramento médico ocupacional da empresa com base nos riscos reais de cada função, estruturando exames, periodicidades, ASO e coerência com o eSocial.',
        },
      ]}
      sidebarTitle="Seu PCMSO reflete a operação atual?"
      sidebarHook="A SERMST revisa e atualiza o PCMSO da sua empresa, alinhando o programa ao PGR vigente e aos eventos de SST do eSocial. Sem enrolação e sem modelo genérico."
      sidebarCtaLabel="Revisar meu PCMSO"
      sidebarCtaHref="/servicos/pcmso-nr07-programa/sao-paulo"
      related={[
        { label: 'NR-07: o que a norma exige', href: '/normas/o-que-e-nr-07' },
        { label: 'O que é PCMSO? Significado e aplicação prática', href: '/dicionario/o-que-e-pcmso' },
        { label: 'ASO: atestado de saúde ocupacional', href: '/saude/aso-atestado-saude-ocupacional' },
        { label: 'DIR: quando pode haver dispensa de elaborar PCMSO', href: '/rh/declaracao-inexistencia-risco-dir' },
        { label: 'Exame periódico ocupacional: periodicidade e rotina', href: '/saude/exame-periodico-ocupacional' },
        { label: 'Contratar elaboração e gestão de PCMSO', href: '/servicos/pcmso-nr07-programa/sao-paulo' },
        { label: 'Guia da NR-01 e atualização do PGR', href: '/normas/nr-01-pgr-atualizada' },
      ]}
    />
  );
}
