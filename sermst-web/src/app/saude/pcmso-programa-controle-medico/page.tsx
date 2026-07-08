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
      hubLabel="Hub Saúde Ocupacional"
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
      intro="PCMSO significa Programa de Controle Médico de Saúde Ocupacional. A NR-07 traz a regra; o PCMSO transforma essa regra em planejamento médico, protocolo de exames e acompanhamento coerente com os riscos de cada função. Na prática, ele organiza como a empresa monitora a saúde dos empregados, em que periodicidade os exames acontecem e como isso se conecta ao ASO, ao PGR e ao eSocial."
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
                Se a sua busca é apenas entender a sigla, vale começar no{' '}
                <Link href="/dicionario/o-que-e-pcmso">dicionário sobre o que é PCMSO</Link>. Se a dúvida é sobre a
                obrigação normativa, a página de <Link href="/normas/o-que-e-nr-07">NR-07</Link> explica a base legal.
                Aqui, o foco é mostrar como o programa funciona na prática da empresa.
              </p>
            </>
          ),
        },
        {
          title: 'Quando a busca é por significado, obrigação ou contratação',
          body: (
            <>
              <p>Na SERP, “PCMSO” costuma carregar três intenções diferentes:</p>
              <ul>
                <li><strong>Significado:</strong> a pessoa quer saber o que a sigla quer dizer.</li>
                <li><strong>Entendimento técnico:</strong> a empresa quer saber quem precisa, validade, dispensa, assinatura e como o programa funciona.</li>
                <li><strong>Contratação:</strong> a empresa já precisa revisar, elaborar ou operacionalizar o programa.</li>
              </ul>
              <p>
                Este guia cobre principalmente a segunda intenção e prepara a transição para a terceira. Por isso ele precisa
                conversar com a definição curta do dicionário, com a página normativa da NR-07 e com a página comercial
                do serviço, sem repetir exatamente a mesma promessa em todas elas.
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
          title: 'Quando faz sentido avançar para a página comercial',
          body: (
            <>
              <p>
                Quando a empresa já sabe que precisa revisar o programa, definir grade de exames, organizar vencimentos,
                alinhar S-2220 ou corrigir incoerência com o PGR, a busca deixa de ser apenas informacional.
              </p>
              <p>
                Nessa hora, o destino correto passa a ser a página de{' '}
                <Link href="/servicos/pcmso-nr07-programa/sao-paulo">elaboração e gestão de PCMSO</Link>, porque a intenção
                já está mais próxima de contratação do que de estudo.
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
          a: 'Não. O PPRA foi substituído pelo PGR com a revisão da NR-01. O PGR identifica e controla riscos; o PCMSO transforma esses riscos em protocolo de vigilância médica.',
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
        { label: 'Importância do exame periódico ocupacional', href: '/saude/importancia-do-exame-periodico' },
        { label: 'Contratar elaboração e gestão de PCMSO', href: '/servicos/pcmso-nr07-programa/sao-paulo' },
        { label: 'Guia da NR-01 e atualização do PGR', href: '/normas/nr-01-pgr-atualizada' },
      ]}
    />
  );
}
