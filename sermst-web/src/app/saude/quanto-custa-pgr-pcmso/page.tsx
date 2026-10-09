import type { Metadata } from 'next';
import Link from 'next/link';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

const PAGE_URL = 'https://sermst.com.br/saude/quanto-custa-pgr-pcmso';
const NR01_URL = 'https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/pgr/';
const NR07_URL = 'https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-paritaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/norma-regulamentadora-no-7-nr-7';
const NR01_TEXT_URL = 'https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-paritaria-permanente/normas-regulamentadora/normas-regulamentadoras-vigentes/nr-01-atualizada-2025-i-3.pdf';

export const metadata: Metadata = {
  title: 'Quanto custa PGR e PCMSO? O que define o orçamento | SERMST',
  description:
    'Entenda o que influencia o orçamento de PGR e PCMSO, o que comparar nas propostas e quando um serviço avulso ou uma gestão recorrente pode fazer sentido.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Quanto custa PGR e PCMSO? O que define o orçamento',
    description:
      'Um guia para empresas compararem escopo, atividade, riscos, estabelecimentos e entregas ao solicitar propostas de PGR e PCMSO.',
    url: PAGE_URL,
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function CustoPGRPCMSOPage() {
  return (
    <BlockbusterArticle
      coverImage={{
        src: '/images/articles/normas-nr.jpg',
        alt: 'Documentos de SST relacionados ao PGR e ao PCMSO',
      }}
      hubLabel="Saúde Ocupacional"
      hubLabelShort="← Saúde Ocupacional"
      hubHref="/saude"
      pageUrl={PAGE_URL}
      badgeText="Orçamento de SST"
      author={{
        name: 'Felipe Sannino',
        jobTitle: 'Advogado - Direito do Trabalho e SST · OAB/SP 430.824',
        url: 'https://sermst.com.br/equipe/felipe-sannino',
        datePublished: '2026-10-08',
        dateModified: '2026-10-08',
      }}
      showTableOfContents
      readingTime="8 min"
      h1="Quanto custa o PGR e o PCMSO? Entenda os fatores do orçamento"
      intro="Não existe um preço único que sirva para todas as empresas. O orçamento depende do escopo técnico, da atividade, dos riscos, do número de estabelecimentos e das entregas incluídas. Este guia ajuda RH, DP e empresários a pedir e comparar propostas sem confundir programas, exames e acompanhamento recorrente."
      quickAnswer={
        <p>
          O valor de PGR e PCMSO precisa ser calculado para a realidade da empresa. Para comparar propostas, confirme
          número de unidades, funções e trabalhadores considerados, riscos avaliados, visitas ou levantamentos previstos,
          documentos entregues e itens cobrados à parte. Não use um preço genérico como referência sem conferir se o escopo é o mesmo.
        </p>
      }
      sections={[
        {
          title: 'Por que PGR e PCMSO não têm um preço único?',
          body: (
            <>
              <p>
                Uma empresa com uma unidade, poucas funções e dados atualizados pode demandar um escopo diferente de uma
                operação com vários endereços, atividades distintas, exposição a riscos variados e mudanças frequentes.
                Por isso, uma proposta comparável precisa dizer quais estabelecimentos, grupos de trabalhadores e etapas
                foram considerados.
              </p>
              <p>
                A quantidade de empregados é um dado importante, mas não explica sozinha o trabalho. Atividade econômica,
                funções, riscos, estrutura física, documentos existentes e a necessidade de avaliação presencial também
                podem alterar o escopo. O preço deve vir acompanhado da descrição do que será feito.
              </p>
            </>
          ),
        },
        {
          title: 'O que conferir no orçamento do PGR',
          body: (
            <>
              <p>
                O PGR materializa o Gerenciamento de Riscos Ocupacionais e contém, no mínimo, inventário de riscos e plano
                de ação. Ao comparar uma proposta, confira como serão levantados perigos e riscos, quais ambientes e funções
                entram na avaliação, que entregáveis serão produzidos e como as medidas propostas serão documentadas.
              </p>
              <p>
                Pergunte também se visitas técnicas, avaliações complementares, deslocamentos, revisões posteriores e
                atualizações por mudanças na operação estão incluídos ou serão orçados separadamente. A resposta depende do
                escopo contratado; não presuma que todo item esteja incluído no preço anunciado. Consulte as{' '}
                <a href={NR01_URL} target="_blank" rel="noreferrer" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4">
                  orientações do Ministério do Trabalho sobre o PGR
                </a>{' '}
                e conheça o{' '}
                <Link href="/normas/nr-01-pgr-atualizada" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4">
                  guia da NR-01 e do PGR
                </Link>.
              </p>
            </>
          ),
        },
        {
          title: 'O que conferir no orçamento do PCMSO',
          body: (
            <>
              <p>
                O PCMSO organiza o acompanhamento médico dos trabalhadores em relação aos riscos ocupacionais. Confira
                quem responde tecnicamente pelo programa, quais unidades e grupos estão cobertos, quais entregas fazem
                parte da proposta e como o escopo considera os exames ocupacionais aplicáveis.
              </p>
              <p>
                Diferencie o preço de elaboração ou gestão do programa dos custos dos exames clínicos e complementares.
                Peça que exames, procedimentos, relatórios, integrações ou atividades cobrados à parte sejam identificados
                de forma clara. A{' '}
                <Link href="/saude/pcmso-programa-controle-medico" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4">
                  página explicativa sobre o PCMSO
                </Link>{' '}
                detalha como o programa se relaciona com a NR-07, o PGR e os exames. O texto vigente está disponível na{' '}
                <a href={NR07_URL} target="_blank" rel="noreferrer" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4">
                  página oficial da NR-07
                </a>.
              </p>
            </>
          ),
        },
        {
          title: 'PGR e PCMSO são a mesma coisa? Quando avaliar os dois',
          body: (
            <>
              <p>
                Não. O PGR organiza a identificação e o gerenciamento de riscos; o PCMSO planeja o acompanhamento da saúde
                relacionado a esses riscos. A avaliação do PGR orienta o PCMSO, por isso propostas de ambos precisam usar
                informações coerentes sobre atividade, funções e exposições.
              </p>
              <p>
                As hipóteses de dispensa são diferentes para cada programa. A NR-01 dispensa o MEI de elaborar o PGR. ME e EPP
                dos graus de risco 1 e 2 também podem ser dispensadas do PGR quando o levantamento preliminar, conforme a NR-09,
                não identificar exposição ocupacional a agentes físicos, químicos e biológicos e as informações forem declaradas digitalmente.
              </p>
              <p>
                A hipótese de dispensa do PCMSO é distinta: MEI, ME e EPP dos graus de risco 1 e 2 que declarem as informações
                digitalmente e não identifiquem exposições a agentes físicos, químicos, biológicos e fatores ergonômicos podem ser
                dispensadas. Mesmo assim, a dispensa do PCMSO não elimina os exames médicos ocupacionais e a emissão do ASO; a
                dispensa do PGR não afasta as demais obrigações previstas nas NRs. Consulte o texto vigente da NR-01:
                <a href={NR01_TEXT_URL} target="_blank" rel="noreferrer" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4">NR-01 oficial</a>.
              </p>
              <p>
                Não conclua que uma empresa está dispensada apenas pelo porte ou pelo CNAE. As condições precisam ser verificadas
                para o programa e o estabelecimento concretos; quando houver dúvida, valide o cenário com profissional habilitado.
              </p>
            </>
          ),
        },
        {
          title: 'Como organizar o custo total de SST da empresa',
          body: (
            <>
              <p>
                PGR e PCMSO são parte da gestão, mas não representam necessariamente todos os gastos de SST. Para montar
                uma visão completa, separe os itens por finalidade e período: elaboração ou revisão de programas e laudos,
                exames previstos, treinamentos aplicáveis e avaliações complementares que forem tecnicamente necessárias.
              </p>
              <p>
                Evite somar duas vezes atividades já incluídas em um pacote ou assumir que qualquer exame, medição ou
                treinamento será necessário para todas as funções. Peça que a proposta mostre o que está incluído, o que
                depende de avaliação e o que será cobrado à parte. Mudanças de equipe, unidade, processo e risco também podem
                alterar o escopo ao longo do tempo.
              </p>
              <p>
                Na comparação entre contratação pontual e acompanhamento recorrente, confira frequência, limites e entregas
                do contrato. Veja também as{' '}
                <Link href="/solucoes" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4">
                  soluções de SST disponíveis para empresas
                </Link>{' '}
                e compare cada serviço com a necessidade real da operação.
              </p>
            </>
          ),
        },
        {
          title: 'Como comparar propostas de PGR e PCMSO',
          body: (
            <>
              <p>Use a mesma lista de informações ao pedir orçamento para diferentes prestadores:</p>
              <ul>
                <li><strong>Unidades:</strong> endereços e atividades realizadas em cada estabelecimento.</li>
                <li><strong>Equipe:</strong> estimativa de trabalhadores, funções e setores incluídos no escopo.</li>
                <li><strong>Riscos e operação:</strong> processos, ambientes e documentos disponíveis para a avaliação.</li>
                <li><strong>Entregas:</strong> programas, levantamentos, relatórios e responsabilidades técnicas que serão fornecidos.</li>
                <li><strong>Limites do preço:</strong> visitas, exames, avaliações, deslocamentos, revisões e itens cobrados à parte.</li>
                <li><strong>Prazo e suporte:</strong> etapas, cronograma, canal para dúvidas e condições para atualizar o trabalho se a operação mudar.</li>
              </ul>
              <p>
                Uma proposta com menor valor total pode cobrir menos atividades ou unidades. Compare as entregas linha a
                linha e peça esclarecimentos por escrito antes de decidir.
              </p>
            </>
          ),
        },
        {
          title: 'Serviço avulso ou gestão recorrente de SST?',
          body: (
            <>
              <p>
                Um serviço avulso pode atender uma necessidade delimitada. Uma gestão recorrente pode ser considerada quando
                exames, prazos, treinamentos e revisões precisam de acompanhamento contínuo. Nenhum dos formatos é sempre
                mais barato ou melhor: a escolha depende do escopo, da frequência das tarefas e da estrutura interna da empresa.
              </p>
              <p>
                Para uma comparação mais ampla, leia{' '}
                <Link href="/saude/gestao-sst" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4">
                  como decidir entre SST avulsa e gestão mensal
                </Link>. Se o cenário indicar rotina recorrente, confira os{' '}
                <Link href="/assinaturas" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4">
                  planos de gestão SST
                </Link>{' '}
                e valide quais serviços estão efetivamente incluídos.
              </p>
            </>
          ),
        },
        {
          title: 'Quais dados reunir antes de solicitar uma proposta',
          body: (
            <>
              <p>
                Para receber uma estimativa mais aderente, reúna os endereços dos estabelecimentos, atividades e CNAEs,
                número aproximado de empregados por unidade, relação de funções, descrição dos processos e documentos de
                SST já existentes. Informe também se a necessidade é elaborar, revisar ou manter o acompanhamento.
              </p>
              <p>
                Com esses dados, a SERMST pode orientar o próximo passo para cada necessidade: conheça o{' '}
                <Link href="/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4">
                  serviço de PGR
                </Link>{' '}
                e o{' '}
                <Link href="/servicos/pcmso-nr07-programa/sao-paulo" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4">
                  serviço de PCMSO
                </Link>.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'Quanto custa fazer PGR e PCMSO?',
          a: 'Não há um preço único para todas as empresas. O orçamento varia conforme unidades, atividades, funções, trabalhadores, riscos, levantamentos necessários e entregas incluídas. Compare propostas com o mesmo escopo e peça a identificação dos itens cobrados à parte.',
        },
        {
          q: 'O que faz o preço do PGR variar?',
          a: 'O escopo pode variar com número de estabelecimentos, atividades, ambientes, funções, riscos, documentos existentes, visitas e entregas técnicas previstas. A proposta deve esclarecer o que foi considerado.',
        },
        {
          q: 'O valor do PCMSO inclui os exames ocupacionais?',
          a: 'Depende da proposta. Confirme separadamente se o valor cobre a elaboração ou gestão do programa, exames clínicos, exames complementares e outros itens necessários para a empresa.',
        },
        {
          q: 'Toda empresa precisa contratar PGR e PCMSO?',
          a: 'As normas têm hipóteses específicas de dispensa e requisitos diferentes. A situação depende das características e condições da empresa; porte ou CNAE isolados não bastam para presumir dispensa de todas as obrigações.',
        },
        {
          q: 'Gestão mensal de SST sempre sai mais barata que serviços avulsos?',
          a: 'Não necessariamente. Compare frequência, serviços incluídos, limites, suporte e responsabilidades. A recorrência pode ser adequada para necessidades contínuas, mas não garante economia sem comparar escopos equivalentes.',
        },
      ]}
      maxFaqItems={5}
      mobileSingleColumn
      sidebarTitle="Precisa revisar PGR, PCMSO ou os dois?"
      sidebarHook="Entenda o escopo necessário para a sua operação e compare as entregas antes de contratar."
      sidebarCtaLabel="Ver serviços de SST"
      sidebarCtaHref="/servicos"
      related={[
        { label: 'PGR conforme a NR-01', href: '/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo' },
        { label: 'Elaboração e gestão de PCMSO', href: '/servicos/pcmso-nr07-programa/sao-paulo' },
        { label: 'O que é gestão de SST?', href: '/saude/gestao-sst' },
        { label: 'Guia da NR-01 e do PGR', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'PCMSO: programa e aplicação', href: '/saude/pcmso-programa-controle-medico' },
      ]}
      finalCta={{
        title: 'Compare o escopo antes de escolher o serviço',
        desc: 'Veja os serviços de SST disponíveis e identifique o próximo passo para sua empresa.',
        label: 'Conhecer os serviços',
        href: '/servicos',
      }}
    />
  );
}
