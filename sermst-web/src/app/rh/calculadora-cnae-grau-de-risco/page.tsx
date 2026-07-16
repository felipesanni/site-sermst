import type { Metadata } from 'next';
import { CnaeCalculator } from '@/components/sections/cnae-calculator';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

const calculatorPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://sermst.com.br/rh/calculadora-cnae-grau-de-risco#webpage',
  name: 'Calculadora CNAE: Grau de Risco, RAT e CIPA',
  url: 'https://sermst.com.br/rh/calculadora-cnae-grau-de-risco',
  description:
    'Ferramenta gratuita para consultar o CNAE principal pelo CNPJ ou pesquisar uma atividade econômica, identificar o grau de risco da NR-04 e obter referências iniciais de SST.',
  isAccessibleForFree: true,
  inLanguage: 'pt-BR',
  mainEntity: {
    '@type': 'Thing',
    name: 'Consulta CNAE por CNPJ',
    description:
      'Consulta guiada para identificar CNAE principal, grau de risco NR-04 e referências iniciais de RAT, CIPA, SESMT e SST.',
  },
  provider: {
    '@id': 'https://sermst.com.br/#organization',
  },
} as const;

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Como usar o resultado da Calculadora CNAE de Grau de Risco',
  description:
    'Passo a passo para interpretar o resultado da calculadora CNAE e organizar a revisão das obrigações de SST na empresa.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Confirme o CNAE cadastrado',
      text: 'Confira se o CNAE principal retornado pelo CNPJ representa adequadamente a atividade da empresa.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Verifique as NRs destacadas',
      text: 'Use as referências exibidas como ponto de partida para revisar as NRs aplicáveis à operação real.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Revise o dimensionamento de SESMT e CIPA',
      text: 'Considere o maior grau entre a atividade principal e a preponderante e o número de empregados do estabelecimento.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Valide o PCMSO e os exames',
      text: 'A periodicidade dos exames deve refletir os riscos ocupacionais e o planejamento médico do PCMSO.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Mantenha o PGR atualizado',
      text: 'A avaliação de riscos deve acompanhar mudanças na operação e ser revista nas situações e nos prazos previstos pela NR-01.',
    },
  ],
} as const;

export const metadata: Metadata = {
  title: 'Consulta CNAE por CNPJ: Grau de Risco, RAT e SST | SERMST',
  description:
    'Consulte o CNAE principal pelo CNPJ e veja o grau de risco NR-04, referências de CIPA, SESMT e NRs relevantes. Grátis e sem cadastro.',
  keywords: [
    'consulta CNAE por CNPJ',
    'consulta CNPJ CNAE',
    'CNAE por CNPJ',
    'calculadora CNAE grau de risco',
    'grau de risco empresa',
    'CNAE grau de risco',
    'grau de risco do CNAE',
    'calculadora RAT CNAE',
    'RAT por CNAE',
    'calculadora CIPA NR-05',
    'grau de risco SESMT',
    'consulta CNPJ grau de risco',
    'RAT folha de pagamento',
    'NR-04 grau de risco',
    'obrigações SST empresa',
  ],
  alternates: { canonical: 'https://sermst.com.br/rh/calculadora-cnae-grau-de-risco' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Consulta CNAE por CNPJ: Grau de Risco, RAT e CIPA | SERMST',
    description:
      'Consulte o CNAE principal pelo CNPJ e veja grau de risco NR-04, referências de SESMT, enquadramento de NR-05/CIPA e NRs relevantes.',
    url: 'https://sermst.com.br/rh/calculadora-cnae-grau-de-risco',
    siteName: 'SERMST',
    type: 'article',
    locale: 'pt_BR',
    images: [
      {
        url: '/images/site/og-cover.jpg',
        width: 1200,
        height: 1200,
        alt: 'Calculadora CNAE: Grau de Risco, RAT e CIPA | SERMST',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consulta CNAE por CNPJ: Grau de Risco, RAT e CIPA | SERMST',
    description:
      'Consulte o CNAE principal pelo CNPJ e veja grau de risco NR-04, referências de SESMT e CIPA. Grátis e sem cadastro.',
    images: ['/images/site/og-cover.jpg'],
  },
};

export default function CalculadoraCnaePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calculatorPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <CnaeCalculator />

      <BlockbusterArticle
        coverImage={{
          src: '/images/site/sermst-estrutura-medicina-ocupacional.png',
          alt: 'Enquadramento CNAE e grau de risco em medicina do trabalho',
        }}
        hubLabel="RH e Departamento Pessoal"
        hubLabelShort="← RH e DP"
        hubHref="/rh"
        pageUrl="https://sermst.com.br/rh/calculadora-cnae-grau-de-risco"
        author={{
          name: 'Felipe Sannino',
          jobTitle: 'Advogado - Direito do Trabalho e SST · OAB/SP 430.824',
          url: 'https://sermst.com.br/equipe/felipe-sannino',
          datePublished: '2025-01-01',
          dateModified: '2026-07-13',
        }}
        h1="Consulta CNAE por CNPJ: grau de risco, RAT e obrigações de SST"
        intro="A calculadora consulta o CNAE principal cadastrado no CNPJ e mostra o grau de risco correspondente na NR-04. O resultado é um ponto de partida: RAT, CIPA e SESMT também exigem a conferência da atividade preponderante, do número de empregados e das atividades realizadas no estabelecimento."
        sections={[
          {
            title: 'Como consultar o CNAE da empresa pelo CNPJ',
            body: (
              <>
                <p>
                  A <strong>consulta CNAE por CNPJ</strong> evita que a análise comece com uma
                  atividade secundária ou um código informado de memória. Ao digitar o
                  CNPJ na calculadora, a ferramenta identifica o CNAE principal cadastrado
                  oficialmente para a empresa e cruza esse código com o Quadro I da NR-04.
                </p>
                <p>
                  Uma empresa pode ter vários CNAEs. A consulta pelo CNPJ oferece um ponto de partida,
                  mas não encerra a análise. Para concluir o enquadramento de SESMT,
                  CIPA e RAT/GILRAT, também é necessário verificar a atividade preponderante e os
                  riscos efetivamente existentes no estabelecimento.
                </p>
              </>
            ),
          },
          {
            title: 'Como descobrir o grau de risco do CNAE',
            body: (
              <>
                <p>
                  O <strong>grau de risco</strong> é um número de 1 a 4 associado às atividades
                  econômicas no Quadro I da <strong>NR-04</strong>. As subclasses consultadas nesta
                  ferramenta herdam o grau da respectiva classe CNAE.
                </p>
                <p>
                  O número é usado em regras de dimensionamento, mas não substitui a avaliação dos
                  perigos e das exposições reais. Duas empresas com CNAEs semelhantes podem ter
                  processos, equipamentos e medidas de controle diferentes.
                </p>
              </>
            ),
          },
          {
            title: 'Grau de risco: o que conferir nos níveis 1, 2, 3 e 4',
            body: (
              <>
                <p>O grau de risco da NR-04 é uma referência usada em diferentes análises:</p>
                <ul>
                  <li>
                    <strong>RAT/GILRAT:</strong> a alíquota pode ser de 1%, 2% ou
                    3% e deve ser confirmada pela atividade econômica preponderante. O FAP pode
                    reduzir ou aumentar o resultado conforme o histórico da empresa.
                  </li>
                  <li>
                    <strong>SESMT:</strong> o primeiro dimensionamento aparece a partir de 501 empregados
                    nos graus 1 e 2, 101 no grau 3 e 50 no grau 4. A composição exata deve ser lida
                    no Quadro II da NR-04.
                  </li>
                  <li>
                    <strong>Periodicidade do exame periódico:</strong> deve seguir os riscos
                    ocupacionais e o PCMSO. A NR-07 prevê exame anual ou em intervalos menores para
                    alguns casos e, para os demais empregados, a cada dois anos.
                  </li>
                  <li>
                    <strong>Revisão do PGR:</strong> a avaliação de riscos é um processo contínuo e
                    deve ser revista quando houver mudanças relevantes ou, no máximo, a cada dois
                    anos. O prazo pode chegar a três anos para organizações com certificação em
                    sistema de gestão de SST.
                  </li>
                  <li>
                    <strong>CIPA:</strong> o dimensionamento da Comissão Interna de Prevenção de
                    Acidentes e de Assédio considera o grau de risco e o número de empregados do estabelecimento.
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: 'RAT por CNAE: por que a atividade preponderante afeta a folha',
            body: (
              <>
                <p>
                  A consulta do CNAE principal pelo CNPJ é um bom primeiro filtro, mas não encerra
                  a análise tributária. Para RAT/GILRAT, deve ser considerada a atividade
                  econômica preponderante, isto é, aquela que ocupa o maior número de empregados e
                  trabalhadores avulsos. Por isso, cadastro e operação precisam ser analisados em
                  conjunto:
                </p>
                <ul>
                  <li>
                    <strong>Cadastro ou enquadramento incoerente:</strong> a empresa pode recolher
                    valor diferente do devido ou organizar sua estrutura de SST com premissas
                    incompletas. Vale revisar o caso antes de alterar qualquer informação cadastral.
                  </li>
                  <li>
                    <strong>Atividade preponderante ignorada:</strong> o CNAE principal não deve ser
                    usado isoladamente para concluir a alíquota de RAT/GILRAT. A validação exige a
                    distribuição real dos empregados por atividade.
                  </li>
                </ul>
                <p>
                  Para dimensionar o SESMT, a NR-04 também exige uma leitura própria: deve ser
                  considerado o maior grau de risco entre a atividade econômica principal e a
                  atividade econômica preponderante no estabelecimento, observadas as exceções da
                  norma.
                </p>
              </>
            ),
          },
          {
            title: 'Como usar o resultado da calculadora',
            body: (
              <ol>
                <li>
                  <strong>Confirme o grau de risco.</strong> Se o resultado não corresponder ao cadastro
                  ou às atividades realizadas, confira o CNAE e a atividade preponderante.
                </li>
                <li>
                  <strong>Verifique as NRs destacadas.</strong> As sugestões são uma triagem inicial.
                  Confirme a aplicabilidade de cada norma com base nas atividades e nos riscos reais.
                </li>
                <li>
                  <strong>Confira o SESMT.</strong> Use o maior grau entre a atividade principal e a
                  preponderante, o número de empregados do estabelecimento e o Quadro II da NR-04.
                </li>
                <li>
                  <strong>Ajuste a periodicidade dos exames.</strong> Use o PCMSO e os critérios da
                  NR-07 para organizar as convocações e o envio do S-2220.
                </li>
                <li>
                  <strong>Mantenha o PGR atualizado.</strong> A avaliação de riscos deve acompanhar
                  mudanças na operação e respeitar as situações e os prazos previstos na NR-01.
                </li>
              </ol>
            ),
          },
        ]}
        faq={[
          {
            q: 'Como consultar o CNAE da empresa pelo CNPJ?',
            a: 'Digite o CNPJ no campo acima. A calculadora identifica o CNAE principal e cruza o código com o grau de risco da NR-04 e referências iniciais de SESMT, CIPA e NRs. A conclusão depende da atividade preponderante e da operação real.',
          },
          {
            q: 'Onde consultar o grau de risco do CNAE?',
            a: 'O grau de risco consta no Quadro I da NR-04. Nesta página, a consulta pelo CNPJ identifica o CNAE principal e apresenta o grau correspondente como referência inicial.',
          },
          {
            q: 'O grau de risco pode mudar?',
            a: 'Pode. Uma alteração de CNAE pode levar a outro grau, embora isso não aconteça em todos os casos. O Quadro I da NR-04 também pode ser atualizado. Por isso, use a versão vigente e o código exato.',
          },
          {
            q: 'Empresa com dois CNAEs usa qual grau de risco?',
            a: 'A resposta depende da finalidade da análise. Para dimensionar o SESMT, a NR-04 considera o maior grau entre a atividade econômica principal e a preponderante no estabelecimento. Para RAT/GILRAT, a validação também deve considerar a atividade preponderante.',
          },
          {
            q: 'MEI tem grau de risco?',
            a: 'Sim. O MEI também tem CNAE e grau de risco. As obrigações concretas dependem da existência de empregados, dos riscos ocupacionais e das regras de tratamento diferenciado previstas nas NRs aplicáveis.',
          },
          {
            q: 'O grau de risco muda a alíquota do INSS patronal?',
            a: 'A contribuição RAT/GILRAT pode ser de 1%, 2% ou 3% e deve ser conferida pela atividade econômica preponderante. O FAP multiplica essa alíquota conforme o histórico da empresa. O CNAE principal é apenas o ponto de partida.',
          },
          {
            q: 'Consultório médico tem qual grau de risco?',
            a: 'Depende da atividade e da subclasse CNAE cadastrada. Consulte o código exato e confirme se ele representa o serviço realizado no estabelecimento.',
          },
        ]}
        sidebarTitle="Seu CNAE está correto?"
        sidebarHook="CNAE, atividade preponderante e operação real precisam ser analisados em conjunto. A SERMST revisa o enquadramento e indica os pontos que precisam de confirmação."
        sidebarCtaLabel="Revisar meu enquadramento"
        sidebarCtaHref="/assinaturas"
        related={[
          { label: 'Lista CNAE Brasil: guia completo', href: '/rh/lista-cnae-brasil' },
          { label: 'O que é PCMSO e quando é obrigatório', href: '/saude/pcmso-programa-controle-medico' },
          { label: 'Guia da NR-01: o que muda no PGR', href: '/normas/nr-01-pgr-atualizada' },
          { label: 'Planos de SST por assinatura', href: '/assinaturas' },
        ]}
      />
    </>
  );
}
