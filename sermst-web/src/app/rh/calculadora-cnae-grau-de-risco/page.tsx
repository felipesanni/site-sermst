import type { Metadata } from 'next';
import { CnaeCalculator } from '@/components/sections/cnae-calculator';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

const calculatorPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://sermst.com.br/rh/calculadora-cnae-grau-de-risco#webpage',
  name: 'Calculadora CNAE - Grau de Risco, RAT e CIPA',
  url: 'https://sermst.com.br/rh/calculadora-cnae-grau-de-risco',
  description:
    'Ferramenta gratuita para consultar o CNAE principal pelo CNPJ ou pesquisar uma atividade economica, identificar o grau de risco da NR-04 e obter referencias iniciais de SST.',
  isAccessibleForFree: true,
  inLanguage: 'pt-BR',
  mainEntity: {
    '@type': 'Thing',
    name: 'Consulta CNAE por CNPJ',
    description:
      'Consulta guiada para identificar CNAE principal, grau de risco NR-04, RAT, CIPA, SESMT e referencias iniciais de SST.',
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
    'Passo a passo para interpretar o resultado da calculadora CNAE e organizar a revisao das obrigacoes de SST na empresa.',
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
      text: 'Use as referencias exibidas como ponto de partida para revisar as NRs aplicaveis a operacao real.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Revise o dimensionamento de SESMT e CIPA',
      text: 'Considere grau de risco, atividade preponderante e numero de empregados do estabelecimento.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Valide o PCMSO e os exames',
      text: 'A periodicidade dos exames deve refletir os riscos ocupacionais e o planejamento medico do PCMSO.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'Mantenha o PGR atualizado',
      text: 'A avaliacao de riscos deve acompanhar mudancas na operacao e ser revista nos prazos previstos pela NR-01.',
    },
  ],
} as const;

export const metadata: Metadata = {
  title: 'Consulta CNAE por CNPJ: Grau de Risco, RAT e SST | SERMST',
  description:
    'Consulte o CNAE principal pelo CNPJ e descubra o grau de risco NR-04, referencias de CIPA, SESMT e NRs relevantes para a empresa. Gratis e sem cadastro.',
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
    'obrigacoes SST empresa',
  ],
  alternates: { canonical: 'https://sermst.com.br/rh/calculadora-cnae-grau-de-risco' },
  robots: { index: true, follow: true },
  openGraph: {
    title: 'Consulta CNAE por CNPJ · Grau de Risco, RAT e CIPA - SERMST',
    description:
      'Consulte o CNAE principal pelo CNPJ e veja grau de risco NR-04, referencias de SESMT, enquadramento de NR-05/CIPA e NRs relevantes. Resultado imediato.',
    url: 'https://sermst.com.br/rh/calculadora-cnae-grau-de-risco',
    siteName: 'SERMST',
    type: 'article',
    locale: 'pt_BR',
    images: [
      {
        url: '/images/site/og-cover.jpg',
        width: 1200,
        height: 1200,
        alt: 'Calculadora CNAE - Grau de Risco, RAT e CIPA | SERMST',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consulta CNAE por CNPJ · Grau de Risco, RAT e CIPA - SERMST',
    description:
      'Consulte o CNAE principal pelo CNPJ e veja grau de risco NR-04, referencias de SESMT e CIPA. Gratis, sem cadastro.',
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
        hubLabel="Hub de RH e Departamento Pessoal"
        hubLabelShort="← Hub de RH e DP"
        hubHref="/rh"
        pageUrl="https://sermst.com.br/rh/calculadora-cnae-grau-de-risco"
        author={{
          name: 'Felipe Sannino',
          jobTitle: 'Advogado - Direito do Trabalho e SST · OAB/SP 430.824',
          url: 'https://sermst.com.br/equipe/felipe-sannino',
          datePublished: '2025-01-01',
          dateModified: '2026-06-01',
        }}
        h1="Consulta CNAE por CNPJ: descubra o grau de risco, RAT e obrigacoes de SST"
        intro="A calculadora acima consulta o CNAE principal cadastrado no CNPJ e entrega o resultado em segundos. Abaixo explicamos como identificar o enquadramento oficial da empresa, entender o grau de risco do CNAE e usar o resultado para organizar RAT, CIPA, SESMT, exames e demais obrigacoes de SST."
        sections={[
          {
            title: 'Como consultar o CNAE da empresa pelo CNPJ',
            body: (
              <>
                <p>
                  A <strong>consulta CNAE por CNPJ</strong> evita que a analise seja feita com base
                  em uma atividade secundaria ou em um codigo informado de memoria. Ao digitar o
                  CNPJ na calculadora, a ferramenta identifica o CNAE principal cadastrado
                  oficialmente para a empresa e cruza esse codigo com as regras aplicaveis de SST.
                </p>
                <p>
                  Esse cuidado importa porque uma empresa pode ter varios CNAEs. A consulta pelo
                  CNPJ oferece um ponto de partida confiavel. Para concluir a analise de SESMT,
                  CIPA e RAT/GILRAT, tambem e necessario verificar a atividade preponderante e os
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
                  O <strong>grau de risco</strong> e um numero de 1 a 4 atribuido a cada subclasse
                  CNAE pelo Quadro I da <strong>NR-04</strong> (Portaria MTb n 3.214/1978). Ele
                  determina o nivel de exposicao ocupacional tipico daquela atividade economica e,
                  a partir disso, define uma serie de obrigacoes praticas.
                </p>
                <p>
                  O grau nao e arbitrario: foi construido com base no historico de acidentes e
                  doencas por setor. Atividades de escritorio tem grau 1; mineracao e petroquimica
                  tem grau 4. A construcao civil em geral fica em grau 3.
                </p>
              </>
            ),
          },
          {
            title: 'Tabela de grau de risco: o que avaliar nos niveis 1, 2, 3 e 4',
            body: (
              <>
                <p>O grau de risco da NR-04 e uma referencia importante para organizar a analise de SST:</p>
                <ul>
                  <li>
                    <strong>RAT/GILRAT:</strong> a aliquota previdenciaria pode ser de 1%, 2% ou
                    3% e deve ser confirmada pela atividade economica preponderante. O FAP pode
                    reduzir ou aumentar o resultado conforme o historico da empresa.
                  </li>
                  <li>
                    <strong>SESMT (Servico Especializado em Eng. de Seguranca e Med. do Trabalho):</strong>{' '}
                    a partir de quantos empregados a empresa e obrigada a ter equipe propria varia
                    por grau - no grau 1, so acima de 501; no grau 4, a partir de 51.
                  </li>
                  <li>
                    <strong>Periodicidade do exame periodico:</strong> deve seguir os riscos
                    ocupacionais e o PCMSO. A NR-07 preve exame anual ou em intervalos menores para
                    alguns casos e, para os demais empregados, a cada dois anos.
                  </li>
                  <li>
                    <strong>Revisao do PGR:</strong> a avaliacao de riscos e um processo continuo e
                    deve ser revista quando houver mudancas relevantes ou, no maximo, a cada dois
                    anos. O prazo pode chegar a tres anos para organizacoes com certificacao em
                    sistema de gestao de SST.
                  </li>
                  <li>
                    <strong>CIPA:</strong> a obrigatoriedade e a composicao da Comissao Interna de
                    Prevencao de Acidentes tambem seguem o grau de risco e o numero de empregados.
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
                  A consulta do CNAE principal pelo CNPJ e um bom primeiro filtro, mas nao encerra
                  a analise tributaria. Para RAT/GILRAT, a Receita Federal considera a atividade
                  economica preponderante, isto e, aquela que ocupa o maior numero de empregados e
                  trabalhadores avulsos. Por isso, cadastro e operacao precisam ser analisados em
                  conjunto:
                </p>
                <ul>
                  <li>
                    <strong>Cadastro ou enquadramento incoerente:</strong> a empresa pode recolher
                    valor diferente do devido ou organizar sua estrutura de SST com premissas
                    incompletas. Vale revisar o caso antes de alterar qualquer informacao cadastral.
                  </li>
                  <li>
                    <strong>Atividade preponderante ignorada:</strong> o CNAE principal nao deve ser
                    usado isoladamente para concluir a aliquota de RAT/GILRAT. A validacao exige a
                    distribuicao real dos empregados por atividade.
                  </li>
                </ul>
                <p>
                  Para dimensionar o SESMT, a NR-04 tambem exige uma leitura propria: deve ser
                  considerado o maior grau de risco entre a atividade economica principal e a
                  atividade economica preponderante no estabelecimento, observadas as excecoes da
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
                  <strong>Confirme o grau de risco.</strong> Se nao bater com o que a empresa
                  pratica ou com o que o contador informou, vale revisar o CNAE cadastrado.
                </li>
                <li>
                  <strong>Verifique as NRs destacadas.</strong> Cada setor tem NRs especificas alem
                  das universais (NR-01, NR-07, NR-09, NR-28). O resultado mostra quais sao mais
                  relevantes.
                </li>
                <li>
                  <strong>Calcule a obrigacao de SESMT.</strong> Use o grau de risco e o numero de
                  empregados para saber se a empresa precisa de equipe propria ou se pode contratar
                  servico externo.
                </li>
                <li>
                  <strong>Ajuste a periodicidade dos exames.</strong> ASOs fora do prazo geram
                  evento S-2220 em atraso no eSocial - multa por funcionario.
                </li>
                <li>
                  <strong>Mantenha o PGR atualizado.</strong> A avaliacao de riscos deve acompanhar
                  mudancas na operacao e respeitar os prazos previstos pela NR-01.
                </li>
              </ol>
            ),
          },
        ]}
        faq={[
          {
            q: 'Como consultar o CNAE da empresa pelo CNPJ?',
            a: 'Digite o CNPJ no campo acima. A calculadora consulta o cadastro da empresa, identifica o CNAE principal oficial e cruza esse codigo com o grau de risco da NR-04 e referencias iniciais de SESMT, CIPA e NRs relevantes.',
          },
          {
            q: 'Onde consultar o grau de risco do CNAE?',
            a: 'O grau de risco consta no Quadro I da NR-04. Nesta pagina, a consulta pelo CNPJ identifica o CNAE principal e apresenta automaticamente o grau de risco correspondente, alem dos impactos praticos para a empresa.',
          },
          {
            q: 'O grau de risco pode mudar?',
            a: 'Sim. Se a empresa mudar o CNAE, o grau de risco muda junto. Tambem pode mudar se o proprio Quadro I da NR-04 for atualizado pelo Ministerio do Trabalho. Empresa antiga com CNAE antigo pode estar operando com grau desatualizado.',
          },
          {
            q: 'Empresa com dois CNAEs usa qual grau de risco?',
            a: 'A resposta depende da finalidade da analise. Para dimensionar o SESMT, a NR-04 considera o maior grau de risco entre a atividade economica principal e a atividade economica preponderante no estabelecimento. Para RAT/GILRAT, a validacao tambem deve considerar a atividade preponderante.',
          },
          {
            q: 'MEI tem grau de risco?',
            a: 'Sim. O MEI tambem tem CNAE e grau de risco. As obrigacoes concretas dependem da existencia de empregados, dos riscos ocupacionais e das regras de tratamento diferenciado previstas nas NRs aplicaveis.',
          },
          {
            q: 'O grau de risco muda a aliquota do INSS patronal?',
            a: 'A contribuicao RAT/GILRAT pode ser de 1%, 2% ou 3% e deve ser conferida pela atividade economica preponderante. O FAP multiplica essa aliquota conforme o historico da empresa. O CNAE principal consultado pelo CNPJ e um ponto de partida, nao a conclusao isolada.',
          },
          {
            q: 'Consultorio medico tem qual grau de risco?',
            a: 'Depende da subclasse CNAE. Atividade medica ambulatorial sem procedimentos cirurgicos costuma ser grau 1 ou 2. Com procedimentos cirurgicos e grau 2. Hospital geral e grau 3. Use a calculadora com o codigo CNAE exato para ter a resposta precisa.',
          },
        ]}
        sidebarTitle="Seu CNAE esta correto?"
        sidebarHook="CNAE, atividade preponderante e riscos reais precisam conversar entre si. A SERMST revisa o enquadramento, identifica inconsistencias e aponta o que precisa ajustar antes que vire retrabalho ou exposicao desnecessaria."
        sidebarCtaLabel="Revisar meu enquadramento"
        related={[
          { label: 'Lista CNAE Brasil - guia completo', href: '/rh/lista-cnae-brasil' },
          { label: 'O que e PCMSO e quando e obrigatorio', href: '/saude/pcmso-programa-controle-medico' },
          { label: 'Guia da NR-01: o que muda no PGR', href: '/normas/nr-01-pgr-atualizada' },
          { label: 'Multa eSocial S-2220 - quanto pode chegar', href: '/rh/multa-esocial-s2220' },
        ]}
      />
    </>
  );
}
