import type { Metadata } from 'next';
import Link from 'next/link';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'PCMSO: o que é, validade e quem precisa do programa | SERMST',
  description:
    'Entenda o que é PCMSO, qual a validade do programa, quem precisa elaborar e quando MEI, ME ou EPP pode ter dispensa prevista na NR-07.',
  alternates: { canonical: 'https://sermst.com.br/saude/pcmso-programa-controle-medico' },
  openGraph: {
    title: 'PCMSO: o que é, quem precisa e como estruturar corretamente | SERMST',
    description:
      'Guia completo sobre o Programa de Controle Médico de Saúde Ocupacional: obrigatoriedade, conteúdo mínimo, integração com eSocial e erros comuns a evitar.',
    url: 'https://sermst.com.br/saude/pcmso-programa-controle-medico',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function PCMSOPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub Saúde Ocupacional"
      hubLabelShort="← Hub Saúde"
      hubHref="/saude"
      pageUrl="https://sermst.com.br/saude/pcmso-programa-controle-medico"
      coverImage={{
        src: '/images/articles/pcmso-programa.jpg',
        alt: 'Documentação de programa de controle médico de saúde ocupacional PCMSO',
      }}
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-06-02',
      }}

      h1="PCMSO: o que é, validade e quem precisa do programa"
      intro="PCMSO significa Programa de Controle Médico de Saúde Ocupacional. A NR-07 traz a regra; o PCMSO transforma essa regra em planejamento médico, exames e critérios coerentes com os riscos de cada função."
      sections={[
        {
          title: 'O que é o PCMSO',
          body: (
            <>
              <p>
                PCMSO é a sigla para <strong>Programa de Controle Médico de Saúde Ocupacional</strong>. Previsto na <strong>NR-07</strong>, ele define, conforme os riscos identificados e classificados no PGR, quais exames ocupacionais e ações de vigilância da saúde precisam ser planejados para os empregados.
              </p>
              <p>
                Diferente do que muitos pensam, o PCMSO não é uma lista genérica de exames. É um documento personalizado: uma empresa com trabalho em altura tem exigências distintas de uma empresa de escritório. O programa precisa refletir a realidade da operação.
              </p>
              <p>
                Se a sua busca é entender a <strong>norma</strong>, a página de <strong>NR-07</strong> explica a obrigação legal. Aqui, o foco é a aplicação do programa dentro da rotina da empresa.
              </p>
            </>
          ),
        },
        {
          title: 'Quem precisa elaborar o PCMSO',
          body: (
            <>
              <p>
                A NR-07 se aplica às organizações que possuem empregados regidos pela CLT. Como regra, o empregador deve garantir a elaboração e a efetiva implantação do PCMSO, custear os procedimentos e indicar o médico do trabalho responsável pelo programa.
              </p>
              <p>
                Existe uma exceção importante. A NR-07 prevê que MEI, ME e EPP de <strong>grau de risco 1 ou 2</strong> podem ser dispensadas da elaboração do PCMSO quando prestam as informações digitais previstas na NR-01 e não identificam exposições ocupacionais a agentes físicos, químicos, biológicos nem riscos relacionados a fatores ergonômicos.
              </p>
              <p>
                A dispensa de elaborar o programa não elimina os exames médicos ocupacionais nem a emissão do ASO. Veja os critérios e limites no guia sobre{' '}
                <Link href="/rh/declaracao-inexistencia-risco-dir">
                  Declaração de Inexistência de Riscos (DIR)
                </Link>
                .
              </p>
            </>
          ),
        },
        {
          title: 'Qual é a validade do PCMSO',
          body: (
            <>
              <p>
                A NR-07 não estabelece uma validade fixa de 12 meses para o PCMSO. O programa precisa acompanhar a realidade da organização e ser revisto quando o PGR indicar mudanças nos riscos, quando surgirem novas atividades ou quando os resultados médicos apontarem necessidade de ajuste.
              </p>
              <p>
                O que possui periodicidade anual é o <strong>relatório analítico do PCMSO</strong>, elaborado pelo médico responsável pelo programa. Esse relatório compara os resultados com o período anterior e ajuda a discutir medidas de prevenção com os responsáveis por SST e com a CIPA, quando existente.
              </p>
            </>
          ),
        },
        {
          title: 'O que o PCMSO deve conter',
          body: (
            <ul>
              <li><strong>Identificação da empresa:</strong> CNPJ, endereço, ramo de atividade, grau de risco, CNAE.</li>
              <li><strong>Responsável técnico:</strong> nome e CRM do médico responsável pelo PCMSO.</li>
              <li><strong>Relação de cargos e riscos:</strong> baseada no PGR vigente — cada cargo com seus agentes de risco identificados.</li>
              <li><strong>Relação de exames por cargo:</strong> quais exames clínicos e complementares cada função realiza (admissional, periódico, retorno, mudança de risco ocupacional e demissional).</li>
              <li><strong>Periodicidade dos exames periódicos:</strong> por cargo e por risco. A NR-07 prevê exame anual, bienal ou em intervalo menor definido pelo médico responsável conforme o caso.</li>
              <li><strong>Planejamento de ações de saúde coletiva:</strong> campanhas, imunização, avaliações ergonômicas, quando aplicável.</li>
              <li><strong>Relatório analítico anual:</strong> número e tipos de exames realizados, resultados anormais, doenças relacionadas ao trabalho, CATs e comparação com o relatório anterior.</li>
            </ul>
          ),
        },
        {
          title: 'PCMSO e eSocial: a conexão que ninguém explica direito',
          body: (
            <>
              <p>
                O PCMSO orienta os exames ocupacionais informados no <strong>evento S-2220 (Monitoramento da Saúde do Trabalhador)</strong> no eSocial. Os exames clínicos e complementares aplicáveis precisam ser informados conforme o leiaute e os prazos do evento.
              </p>
              <p>
                O problema é que o S-2220 exige consistência: o exame enviado precisa estar previsto no PCMSO do cargo. Se o PCMSO está desatualizado ou não reflete o cargo real do trabalhador, o evento fica inconsistente — o que aumenta o risco de autuação em cruzamento de dados.
              </p>
              <p>
                Além disso, o <strong>S-2240 (Condições Ambientais do Trabalho)</strong> precisa estar alinhado com o PCMSO para que os exames previstos façam sentido técnico. PGR, PCMSO e eSocial precisam contar a mesma história.
              </p>
            </>
          ),
        },
        {
          title: 'Os erros mais comuns no PCMSO',
          body: (
            <ol>
              <li><strong>PCMSO genérico, copiado de modelo da internet:</strong> não reflete a operação real. Em fiscalização, não sustenta.</li>
              <li><strong>PCMSO desatualizado:</strong> foi elaborado quando a empresa tinha outra atividade, outro porte ou outros riscos ocupacionais.</li>
              <li><strong>Responsável técnico mal definido:</strong> a organização precisa indicar médico do trabalho responsável pelo PCMSO. Se não houver médico do trabalho na localidade, a NR-07 admite a contratação de médico de outra especialidade.</li>
              <li><strong>Exames periódicos vencidos:</strong> o programa define periodicidade, mas ninguém controla quem está em atraso.</li>
              <li><strong>PCMSO e PGR desconectados:</strong> o PGR identifica risco químico em determinado cargo, mas o PCMSO não inclui o exame correspondente.</li>
            </ol>
          ),
        },
        {
          title: 'Como a SERMST estrutura o PCMSO',
          body: (
            <>
              <p>
                A SERMST integra o PCMSO com a rotina operacional da empresa: o médico responsável analisa o PGR vigente, mapeia cargos e riscos, define exames e periodicidades, e entrega o programa com cronograma de execução.
              </p>
              <p>
                Na prática, isso significa que a empresa sabe exatamente quais exames estão previstos para cada cargo, quais vencem em qual mês, e como isso se conecta ao envio dos eventos de SST no eSocial — sem depender de planilhas manuais ou controles informais.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'Quem pode ser médico responsável pelo PCMSO?',
          a: 'A organização deve indicar médico do trabalho responsável pelo PCMSO. Se não houver médico do trabalho na localidade, a NR-07 permite contratar médico de outra especialidade como responsável pelo programa.',
        },
        {
          q: 'O PCMSO precisa ser renovado todo ano?',
          a: 'A NR-07 não estabelece prazo fixo de validade para o PCMSO. O programa precisa acompanhar os riscos da organização e ser atualizado quando necessário. O relatório analítico do PCMSO, por sua vez, é elaborado anualmente, salvo as dispensas previstas na norma.',
        },
        {
          q: 'O PCMSO pode ser o mesmo para todas as filiais?',
          a: 'Não necessariamente. Se as filiais têm CNPJs diferentes ou atividades distintas, o programa pode precisar ser individualizado. Se operam sob o mesmo CNPJ e têm atividades equivalentes, pode-se usar um programa unificado com as especificidades de cada unidade documentadas.',
        },
        {
          q: 'A dispensa do PCMSO elimina a obrigação de fazer exames ocupacionais?',
          a: 'Não. Mesmo quando MEI, ME ou EPP atende aos critérios de dispensa previstos na NR-07, a empresa continua obrigada a realizar e custear os exames ocupacionais e a emitir o ASO.',
        },
        {
          q: 'PCMSO e PPRA são a mesma coisa?',
          a: 'Não. O PPRA foi substituído pelo PGR (Programa de Gerenciamento de Riscos) com a revisão da NR-01 em 2021. O PGR identifica e controla os riscos; o PCMSO define os exames de vigilância médica baseados nesses riscos. Os dois precisam estar alinhados.',
        },
      ]}
      sidebarTitle="Seu PCMSO reflete a operação atual?"
      sidebarHook="A SERMST revisa e atualiza o PCMSO da sua empresa — alinhado com o PGR vigente e com os eventos de SST do eSocial. Sem enrolação, sem modelo genérico."
      sidebarCtaLabel="Revisar meu PCMSO"
      related={[
        { label: 'NR-07: o que a norma exige', href: '/normas/o-que-e-nr-07' },
        { label: 'O que é PCMSO? Significado e aplicação prática', href: '/dicionario/o-que-e-pcmso' },
        { label: 'DIR: quando pode haver dispensa de elaborar PCMSO', href: '/rh/declaracao-inexistencia-risco-dir' },
        { label: 'Contratar elaboração e gestão de PCMSO', href: '/servicos/pcmso-nr07-programa/sao-paulo' },
        { label: 'Gestão de SST', href: '/saude/gestao-sst' },
        { label: 'O que é saúde ocupacional', href: '/saude/o-que-e-saude-ocupacional' },
        { label: 'ASO: atestado de saúde ocupacional', href: '/saude/aso-atestado-saude-ocupacional' },
        { label: 'Guia da NR-01 e atualização do PGR', href: '/normas/nr-01-pgr-atualizada' },
      ]}
    />
  );
}
