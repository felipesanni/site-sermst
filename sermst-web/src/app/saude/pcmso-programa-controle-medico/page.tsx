import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'PCMSO: o que é, quem precisa e como montar o programa | SERMST',
  description:
    'Entenda como funciona o PCMSO na prática, quem precisa do programa, como definir exames ocupacionais e quando consultar a NR-07 para a base legal.',
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
        dateModified: '2026-05-01',
      }}

      h1="PCMSO: o que é, quem precisa e como montar o programa"
      intro="O PCMSO (Programa de Controle Médico de Saúde Ocupacional) é o guia prático da empresa para exames ocupacionais. A NR-07 traz a regra; o PCMSO transforma essa regra em cronograma, exames e critérios por cargo."
      sections={[
        {
          title: 'O que é o PCMSO',
          body: (
            <>
              <p>
                O PCMSO é o documento exigido pela <strong>NR-07</strong> que define, por cargo e por risco identificado no PGR, quais exames ocupacionais cada trabalhador precisa fazer e com qual periodicidade. Ele é assinado por um <strong>médico do trabalho coordenador</strong>, que responde tecnicamente pelo programa.
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
          title: 'Quem é obrigado a ter PCMSO',
          body: (
            <>
              <p>
                <strong>Toda empresa que tem pelo menos um empregado CLT</strong> é obrigada a ter PCMSO, independente do porte, do CNAE ou do grau de risco. Microempresa com 2 funcionários precisa. Escritório contábil precisa. A NR-07 não faz exceção.
              </p>
              <p>
                A distinção existe no <strong>nível de complexidade</strong>: empresas de grau de risco 1 e 2 com menos de 50 funcionários podem usar o PCMSO simplificado. Empresas maiores ou de grau de risco mais elevado precisam de programa mais detalhado, com relatório anual e análise de tendência.
              </p>
            </>
          ),
        },
        {
          title: 'O que o PCMSO deve conter',
          body: (
            <ul>
              <li><strong>Identificação da empresa:</strong> CNPJ, endereço, ramo de atividade, grau de risco, CNAE.</li>
              <li><strong>Responsável técnico:</strong> nome, CRM e especialização do médico coordenador.</li>
              <li><strong>Relação de cargos e riscos:</strong> baseada no PGR vigente — cada cargo com seus agentes de risco identificados.</li>
              <li><strong>Relação de exames por cargo:</strong> quais exames clínicos e complementares cada função realiza (admissional, periódico, retorno, mudança de função, demissional).</li>
              <li><strong>Periodicidade dos exames periódicos:</strong> por cargo e por risco. Pode variar de 6 meses a 2 anos conforme a NR-07.</li>
              <li><strong>Planejamento de ações de saúde coletiva:</strong> campanhas, imunização, avaliações ergonômicas, quando aplicável.</li>
              <li><strong>Relatório anual:</strong> resumo dos exames realizados, comparativo com anos anteriores, análise de afastamentos e proposta de melhorias.</li>
            </ul>
          ),
        },
        {
          title: 'PCMSO e eSocial: a conexão que ninguém explica direito',
          body: (
            <>
              <p>
                O PCMSO é o documento-base para o <strong>evento S-2220 (Monitoramento da Saúde do Trabalhador)</strong> no eSocial. Cada ASO emitido — admissional, periódico, retorno, mudança de função ou demissional — precisa ser enviado via S-2220.
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
              <li><strong>PCMSO desatualizado:</strong> foi feito quando a empresa tinha outra atividade, outro porte ou outro médico coordenador.</li>
              <li><strong>Médico coordenador sem especialização em medicina do trabalho:</strong> clínico geral não pode assinar PCMSO.</li>
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
                A SERMST integra o PCMSO com a rotina operacional da empresa: o médico coordenador da SERMST analisa o PGR vigente, mapeia os cargos e riscos, define os exames e periodicidades corretos, e entrega o programa com cronograma de execução.
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
          q: 'Quem pode ser médico coordenador do PCMSO?',
          a: 'Médico com especialização em medicina do trabalho ou título de especialista pela ANAMT/AMB. Clínico geral, médico de família ou qualquer outra especialidade sem a qualificação específica não pode assinar o PCMSO como coordenador.',
        },
        {
          q: 'O PCMSO precisa ser renovado todo ano?',
          a: 'Não há prazo fixo de validade, mas o programa deve ser revisado sempre que houver mudança significativa na operação (novo cargo, nova atividade, novo risco), e o relatório anual é obrigatório. Na prática, a maioria das empresas revisa anualmente.',
        },
        {
          q: 'O PCMSO pode ser o mesmo para todas as filiais?',
          a: 'Não necessariamente. Se as filiais têm CNPJs diferentes ou atividades distintas, o programa pode precisar ser individualizado. Se operam sob o mesmo CNPJ e têm atividades equivalentes, pode-se usar um programa unificado com as especificidades de cada unidade documentadas.',
        },
        {
          q: 'Qual a multa por não ter PCMSO?',
          a: 'O auto de infração por falta ou inadequação do PCMSO pode variar de R$ 1.085 a R$ 4.340 por empregado afetado, conforme o artigo 201 da CLT e os critérios de gradação do fiscal. Empresas com muitos funcionários podem acumular valores expressivos.',
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
        { label: 'Gestão de SST', href: '/saude/gestao-sst' },
        { label: 'O que é saúde ocupacional', href: '/saude/o-que-e-saude-ocupacional' },
        { label: 'ASO: atestado de saúde ocupacional', href: '/saude/aso-atestado-saude-ocupacional' },
        { label: 'PGR (NR-01) atualizado', href: '/normas/nr-01-pgr-atualizada' },
      ]}
    />
  );
}
