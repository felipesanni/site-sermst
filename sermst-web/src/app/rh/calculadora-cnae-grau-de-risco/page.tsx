import type { Metadata } from 'next';
import { CnaeCalculator } from '@/components/sections/cnae-calculator';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';


const webAppSchema = {"@context": "https://schema.org", "@type": "WebApplication", "name": "Calculadora CNAE — Grau de Risco, RAT e CIPA", "url": "https://sermst.com.br/rh/calculadora-cnae-grau-de-risco", "description": "Ferramenta gratuita para consultar o CNAE principal pelo CNPJ ou pesquisar uma atividade econômica, identificar o grau de risco da NR-04 e obter referências iniciais de SST.", "applicationCategory": "BusinessApplication", "operatingSystem": "Web", "offers": {"@type": "Offer", "price": "0", "priceCurrency": "BRL"}, "provider": {"@type": "Organization", "name": "SERMST", "url": "https://sermst.com.br"}} as const;
const howToSchema = {"@context": "https://schema.org", "@type": "HowTo", "name": "Como usar o resultado da Calculadora CNAE de Grau de Risco", "description": "Passo a passo para interpretar o resultado da calculadora CNAE e organizar a revisão das obrigações de SST na empresa.", "step": [{"@type": "HowToStep", "position": 1, "name": "Confirme o CNAE cadastrado", "text": "Confira se o CNAE principal retornado pelo CNPJ representa adequadamente a atividade da empresa."}, {"@type": "HowToStep", "position": 2, "name": "Verifique as NRs destacadas", "text": "Use as referências exibidas como ponto de partida para revisar as NRs aplicáveis à operação real."}, {"@type": "HowToStep", "position": 3, "name": "Revise o dimensionamento de SESMT e CIPA", "text": "Considere grau de risco, atividade preponderante e número de empregados do estabelecimento."}, {"@type": "HowToStep", "position": 4, "name": "Valide o PCMSO e os exames", "text": "A periodicidade dos exames deve refletir os riscos ocupacionais e o planejamento médico do PCMSO."}, {"@type": "HowToStep", "position": 5, "name": "Mantenha o PGR atualizado", "text": "A avaliação de riscos deve acompanhar mudanças na operação e ser revista nos prazos previstos pela NR-01."}]} as const;

export const metadata: Metadata = {
  title: 'Consulta CNAE por CNPJ: Grau de Risco, RAT e SST | SERMST',
  description:
    'Consulte o CNAE principal pelo CNPJ e descubra o grau de risco NR-04, referências de CIPA, SESMT e NRs relevantes para a empresa. Grátis e sem cadastro.',
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
    title: 'Consulta CNAE por CNPJ · Grau de Risco, RAT e CIPA — SERMST',
    description:
      'Consulte o CNAE principal pelo CNPJ e veja grau de risco NR-04, referências de SESMT, enquadramento de NR-05/CIPA e NRs relevantes. Resultado imediato.',
    url: 'https://sermst.com.br/rh/calculadora-cnae-grau-de-risco',
    siteName: 'SERMST',
    type: 'article',
    locale: 'pt_BR',
    images: [
      {
        url: '/images/site/og-cover.jpg',
        width: 1200,
        height: 1200,
        alt: 'Calculadora CNAE — Grau de Risco, RAT e CIPA | SERMST',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consulta CNAE por CNPJ · Grau de Risco, RAT e CIPA — SERMST',
    description:
      'Consulte o CNAE principal pelo CNPJ e veja grau de risco NR-04, referências de SESMT e CIPA. Grátis, sem cadastro.',
    images: ['/images/site/og-cover.jpg'],
  },
};

export default function CalculadoraCnaePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      {/* ── Calculadora interativa (Client Component) ── */}
      <CnaeCalculator />

      {/* ── Artigo de apoio ── */}
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
          jobTitle: 'Advogado — Direito do Trabalho e SST · OAB/SP 430.824',
          url: 'https://sermst.com.br/equipe/felipe-sannino',
          datePublished: '2025-01-01',
          dateModified: '2026-06-01',
        }}
        h1="Consulta CNAE por CNPJ: descubra o grau de risco, RAT e obrigações de SST"
        intro="A calculadora acima consulta o CNAE principal cadastrado no CNPJ e entrega o resultado em segundos. Abaixo explicamos como identificar o enquadramento oficial da empresa, entender o grau de risco do CNAE e usar o resultado para organizar RAT, CIPA, SESMT, exames e demais obrigações de SST."
        sections={[
          {
            title: 'Como consultar o CNAE da empresa pelo CNPJ',
            body: (
              <>
                <p>
                  A <strong>consulta CNAE por CNPJ</strong> evita que a análise seja feita com base em uma atividade secundária ou em um código informado de memória. Ao digitar o CNPJ na calculadora, a ferramenta identifica o CNAE principal cadastrado oficialmente para a empresa e cruza esse código com as regras aplicáveis de SST.
                </p>
                <p>
                  Esse cuidado importa porque uma empresa pode ter vários CNAEs. A consulta pelo CNPJ oferece um ponto de partida confiável. Para concluir a análise de SESMT, CIPA e RAT/GILRAT, também é necessário verificar a atividade preponderante e os riscos efetivamente existentes no estabelecimento.
                </p>
              </>
            ),
          },
          {
            title: 'Como descobrir o grau de risco do CNAE',
            body: (
              <>
                <p>
                  O <strong>grau de risco</strong> é um número de 1 a 4 atribuído a cada subclasse CNAE pelo Quadro I da <strong>NR-04</strong> (Portaria MTb nº 3.214/1978). Ele determina o nível de exposição ocupacional típico daquela atividade econômica e, a partir disso, define uma série de obrigações práticas.
                </p>
                <p>
                  O grau não é arbitrário: foi construído com base no histórico de acidentes e doenças por setor. Atividades de escritório têm grau 1; mineração e petroquímica têm grau 4. A construção civil em geral fica em grau 3.
                </p>
              </>
            ),
          },
          {
            title: 'Tabela de grau de risco: o que avaliar nos níveis 1, 2, 3 e 4',
            body: (
              <>
                <p>O grau de risco da NR-04 é uma referência importante para organizar a análise de SST:</p>
                <ul>
                  <li>
                    <strong>RAT/GILRAT:</strong> a alíquota previdenciária pode ser de 1%, 2% ou 3% e deve ser confirmada pela atividade econômica preponderante. O FAP pode reduzir ou aumentar o resultado conforme o histórico da empresa.
                  </li>
                  <li>
                    <strong>SESMT (Serviço Especializado em Eng. de Segurança e Med. do Trabalho):</strong> a partir de quantos empregados a empresa é obrigada a ter equipe própria varia por grau — no grau 1, só acima de 501; no grau 4, a partir de 51.
                  </li>
                  <li>
                    <strong>Periodicidade do exame periódico:</strong> deve seguir os riscos ocupacionais e o PCMSO. A NR-07 prevê exame anual ou em intervalos menores para alguns casos e, para os demais empregados, a cada dois anos.
                  </li>
                  <li>
                    <strong>Revisão do PGR:</strong> a avaliação de riscos é um processo contínuo e deve ser revista quando houver mudanças relevantes ou, no máximo, a cada dois anos. O prazo pode chegar a três anos para organizações com certificação em sistema de gestão de SST.
                  </li>
                  <li>
                    <strong>CIPA:</strong> a obrigatoriedade e a composição da Comissão Interna de Prevenção de Acidentes também seguem o grau de risco e o número de empregados.
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
                  A consulta do CNAE principal pelo CNPJ é um bom primeiro filtro, mas não encerra a análise tributária. Para RAT/GILRAT, a Receita Federal considera a atividade econômica preponderante, isto é, aquela que ocupa o maior número de empregados e trabalhadores avulsos. Por isso, cadastro e operação precisam ser analisados em conjunto:
                </p>
                <ul>
                  <li>
                    <strong>Cadastro ou enquadramento incoerente:</strong> a empresa pode recolher valor diferente do devido ou organizar sua estrutura de SST com premissas incompletas. Vale revisar o caso antes de alterar qualquer informação cadastral.
                  </li>
                  <li>
                    <strong>Atividade preponderante ignorada:</strong> o CNAE principal não deve ser usado isoladamente para concluir a alíquota de RAT/GILRAT. A validação exige a distribuição real dos empregados por atividade.
                  </li>
                </ul>
                <p>
                  Para dimensionar o SESMT, a NR-04 também exige uma leitura própria: deve ser considerado o maior grau de risco entre a atividade econômica principal e a atividade econômica preponderante no estabelecimento, observadas as exceções da norma.
                </p>
              </>
            ),
          },
          {
            title: 'Como usar o resultado da calculadora',
            body: (
              <ol>
                <li>
                  <strong>Confirme o grau de risco.</strong> Se não bater com o que a empresa pratica ou com o que o contador informou, vale revisar o CNAE cadastrado.
                </li>
                <li>
                  <strong>Verifique as NRs destacadas.</strong> Cada setor tem NRs específicas além das universais (NR-01, NR-07, NR-09, NR-28). O resultado mostra quais são mais relevantes.
                </li>
                <li>
                  <strong>Calcule a obrigação de SESMT.</strong> Use o grau de risco e o número de empregados para saber se a empresa precisa de equipe própria ou se pode contratar serviço externo.
                </li>
                <li>
                  <strong>Ajuste a periodicidade dos exames.</strong> ASOs fora do prazo geram evento S-2220 em atraso no eSocial — multa por funcionário.
                </li>
                <li>
                  <strong>Mantenha o PGR atualizado.</strong> A avaliação de riscos deve acompanhar mudanças na operação e respeitar os prazos previstos pela NR-01.
                </li>
              </ol>
            ),
          },
        ]}
        faq={[
          {
            q: 'Como consultar o CNAE da empresa pelo CNPJ?',
            a: 'Digite o CNPJ no campo acima. A calculadora consulta o cadastro da empresa, identifica o CNAE principal oficial e cruza esse código com o grau de risco da NR-04 e referências iniciais de SESMT, CIPA e NRs relevantes.',
          },
          {
            q: 'Onde consultar o grau de risco do CNAE?',
            a: 'O grau de risco consta no Quadro I da NR-04. Nesta página, a consulta pelo CNPJ identifica o CNAE principal e apresenta automaticamente o grau de risco correspondente, além dos impactos práticos para a empresa.',
          },
          {
            q: 'O grau de risco pode mudar?',
            a: 'Sim. Se a empresa mudar o CNAE, o grau de risco muda junto. Também pode mudar se o próprio Quadro I da NR-04 for atualizado pelo Ministério do Trabalho — o que ocorreu em revisões recentes. Empresa antiga com CNAE antigo pode estar operando com grau desatualizado.',
          },
          {
            q: 'Empresa com dois CNAEs usa qual grau de risco?',
            a: 'A resposta depende da finalidade da análise. Para dimensionar o SESMT, a NR-04 considera o maior grau de risco entre a atividade econômica principal e a atividade econômica preponderante no estabelecimento. Para RAT/GILRAT, a validação também deve considerar a atividade preponderante.',
          },
          {
            q: 'MEI tem grau de risco?',
            a: 'Sim. O MEI também tem CNAE e grau de risco. As obrigações concretas dependem da existência de empregados, dos riscos ocupacionais e das regras de tratamento diferenciado previstas nas NRs aplicáveis.',
          },
          {
            q: 'O grau de risco muda a alíquota do INSS patronal?',
            a: 'A contribuição RAT/GILRAT pode ser de 1%, 2% ou 3% e deve ser conferida pela atividade econômica preponderante. O FAP multiplica essa alíquota conforme o histórico da empresa. O CNAE principal consultado pelo CNPJ é um ponto de partida, não a conclusão isolada.',
          },
          {
            q: 'Consultório médico tem qual grau de risco?',
            a: 'Depende da subclasse CNAE. Atividade médica ambulatorial sem procedimentos cirúrgicos costuma ser grau 1 ou 2. Com procedimentos cirúrgicos é grau 2. Hospital geral é grau 3. Use a calculadora com o código CNAE exato para ter a resposta precisa.',
          },
        ]}
        sidebarTitle="Seu CNAE está correto?"
        sidebarHook="CNAE, atividade preponderante e riscos reais precisam conversar entre si. A SERMST revisa o enquadramento, identifica inconsistências e aponta o que precisa ajustar antes que vire retrabalho ou exposição desnecessária."
        sidebarCtaLabel="Revisar meu enquadramento"
        related={[
          { label: 'Lista CNAE Brasil — guia completo', href: '/rh/lista-cnae-brasil' },
          { label: 'O que é PCMSO e quando é obrigatório', href: '/saude/pcmso-programa-controle-medico' },
          { label: 'PGR (NR-01) atualizado — o que muda', href: '/normas/nr-01-pgr-atualizada' },
          { label: 'Multa eSocial S-2220 — quanto pode chegar', href: '/rh/multa-esocial-s2220' },
        ]}
      />
    </>
  );
}
