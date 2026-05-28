import type { Metadata } from 'next';
import { CnaeCalculator } from '@/components/sections/cnae-calculator';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';


const faqSchema = {"@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [{"@type": "Question", "name": "O grau de risco pode mudar?", "acceptedAnswer": {"@type": "Answer", "text": "Sim. Se a empresa mudar o CNAE, o grau de risco muda junto. Também pode mudar se o próprio Quadro I da NR-04 for atualizado pelo Ministério do Trabalho — o que ocorreu em revisões recentes. Empresa antiga com CNAE antigo pode estar operando com grau desatualizado."}}, {"@type": "Question", "name": "Empresa com dois CNAEs usa qual grau de risco?", "acceptedAnswer": {"@type": "Answer", "text": "Usa o grau de risco do CNAE principal (o que define o enquadramento tributário e está em primeiro lugar no CNPJ). O CNAE secundário pode gerar obrigações adicionais de SST para aquela atividade específica, mas não muda o grau base da empresa."}}, {"@type": "Question", "name": "MEI tem grau de risco?", "acceptedAnswer": {"@type": "Answer", "text": "Sim. O MEI também tem CNAE e, portanto, grau de risco. A diferença é que, com um empregado (máximo permitido), a maioria das obrigações de SESMT e CIPA não se aplica por não atingir o número mínimo. PGR simplificado e PCMSO básico continuam sendo exigidos."}}, {"@type": "Question", "name": "O grau de risco muda a alíquota do INSS patronal?", "acceptedAnswer": {"@type": "Answer", "text": "O grau de risco define a alíquota do RAT (1%, 2% ou 3%), que compõe a contribuição previdenciária patronal. O FAP multiplica essa alíquota por um fator de 0,5 a 2 conforme o histórico de acidentes — empresa que reduz acidentes paga menos; empresa com muitos acidentes paga mais."}}, {"@type": "Question", "name": "Consultório médico tem qual grau de risco?", "acceptedAnswer": {"@type": "Answer", "text": "Depende da subclasse CNAE. Atividade médica ambulatorial sem procedimentos cirúrgicos costuma ser grau 1 ou 2. Com procedimentos cirúrgicos é grau 2. Hospital geral é grau 3. Use a calculadora com o código CNAE exato para ter a resposta precisa."}}]} as const;
const webAppSchema = {"@context": "https://schema.org", "@type": "WebApplication", "name": "Calculadora CNAE — Grau de Risco, RAT e CIPA", "url": "https://sermst.com.br/rh/calculadora-cnae-grau-de-risco", "description": "Ferramenta gratuita para consultar o grau de risco da empresa pelo CNPJ ou CNAE, com resultado de alíquota de RAT, exigência de SESMT, enquadramento de NR-05/CIPA e periodicidade de exames.", "applicationCategory": "BusinessApplication", "operatingSystem": "Web", "offers": {"@type": "Offer", "price": "0", "priceCurrency": "BRL"}, "provider": {"@type": "Organization", "name": "SERMST", "url": "https://sermst.com.br"}} as const;
const howToSchema = {"@context": "https://schema.org", "@type": "HowTo", "name": "Como usar o resultado da Calculadora CNAE de Grau de Risco", "description": "Passo a passo para interpretar o resultado da calculadora CNAE e aplicar as obrigações de SST na empresa.", "step": [{"@type": "HowToStep", "position": 1, "name": "Confirme o grau de risco", "text": "Se não bater com o que a empresa pratica ou com o que o contador informou, vale revisar o CNAE cadastrado."}, {"@type": "HowToStep", "position": 2, "name": "Verifique as NRs destacadas", "text": "Cada setor tem NRs específicas além das universais (NR-01, NR-07, NR-09, NR-28). O resultado mostra quais são mais relevantes."}, {"@type": "HowToStep", "position": 3, "name": "Calcule a obrigação de SESMT", "text": "Use o grau de risco e o número de empregados para saber se a empresa precisa de equipe própria ou se pode contratar serviço externo."}, {"@type": "HowToStep", "position": 4, "name": "Ajuste a periodicidade dos exames", "text": "ASOs fora do prazo geram evento S-2220 em atraso no eSocial — multa por funcionário."}, {"@type": "HowToStep", "position": 5, "name": "Revise o PGR com a frequência correta", "text": "Graus 3 e 4 precisam de revisão anual documentada."}]} as const;

export const metadata: Metadata = {
  title: 'Calculadora CNAE: Grau de Risco e Obrigações SST | SERMST',
  description:
    'Digite o CNPJ ou o código CNAE e descubra grau de risco, alíquota de RAT, exigência de CIPA pela NR-05, SESMT, exames periódicos e NRs do setor — grátis e sem cadastro.',
  keywords: [
    'calculadora CNAE grau de risco',
    'grau de risco empresa',
    'CNAE grau de risco',
    'calculadora RAT CNAE',
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
    title: 'Calculadora CNAE · Grau de Risco, RAT e CIPA — SERMST',
    description:
      'Consulte pelo CNPJ ou CNAE e veja grau de risco, RAT, SESMT, enquadramento de NR-05/CIPA e exames periódicos. Resultado imediato, sem cadastro.',
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
    title: 'Calculadora CNAE · Grau de Risco, RAT e CIPA — SERMST',
    description:
      'Consulte pelo CNPJ ou CNAE e veja grau de risco, RAT, SESMT, CIPA e exames. Grátis, sem cadastro.',
    images: ['/images/site/og-cover.jpg'],
  },
};

export default function CalculadoraCnaePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
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
          dateModified: '2026-05-01',
        }}
        h1="Calculadora CNAE: grau de risco, RAT e obrigações de SST"
        h1Tag="h2"
        intro="A calculadora acima entrega o resultado em segundos. Abaixo explicamos o que o grau de risco determina na prática, por que o CNAE errado gera autuação e como usar o resultado para organizar as obrigações de SST da empresa."
        sections={[
          {
            title: 'O que é o grau de risco e de onde ele vem',
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
            title: 'O que muda conforme o grau de risco',
            body: (
              <>
                <p>Cada grau define um conjunto específico de exigências legais:</p>
                <ul>
                  <li>
                    <strong>Alíquota de RAT (Riscos Ambientais do Trabalho):</strong> grau 1 paga 1% sobre a folha; grau 2 paga 2%; graus 3 e 4 pagam 3%. Essa alíquota é ajustada pelo FAP (Fator Acidentário de Prevenção) para cima ou para baixo conforme o histórico de acidentes da própria empresa.
                  </li>
                  <li>
                    <strong>SESMT (Serviço Especializado em Eng. de Segurança e Med. do Trabalho):</strong> a partir de quantos empregados a empresa é obrigada a ter equipe própria varia por grau — no grau 1, só acima de 501; no grau 4, a partir de 51.
                  </li>
                  <li>
                    <strong>Periodicidade do exame periódico:</strong> no grau 1, pode ser bienal para trabalhadores até 45 anos; no grau 4, é semestral para todos.
                  </li>
                  <li>
                    <strong>Revisão do PGR:</strong> empresas de graus 3 e 4 devem revisar o Programa de Gerenciamento de Riscos anualmente; graus 1 e 2 a cada dois anos (salvo mudança relevante na operação).
                  </li>
                  <li>
                    <strong>CIPA:</strong> a obrigatoriedade e a composição da Comissão Interna de Prevenção de Acidentes também seguem o grau de risco e o número de empregados.
                  </li>
                </ul>
              </>
            ),
          },
          {
            title: 'O grau de risco segue o CNAE — mesmo que a prática seja diferente',
            body: (
              <>
                <p>
                  O grau de risco é definido pelo CNAE cadastrado no CNPJ, não pela atividade real. Isso tem duas consequências práticas importantes:
                </p>
                <ul>
                  <li>
                    <strong>CNAE de alto risco em empresa de baixo risco real:</strong> a empresa paga mais RAT do que deveria e tem obrigações mais pesadas de SST. Vale revisar o enquadramento para reduzir custo e burocracia.
                  </li>
                  <li>
                    <strong>CNAE de baixo risco em empresa de alto risco real:</strong> situação mais grave — a empresa está descumprindo obrigações legais e pagando menos RAT do que deve. A Receita Federal pode autuar retroativamente com multa, e o MTE pode autuar por ausência de SESMT ou PGR inadequado.
                  </li>
                </ul>
                <p>
                  A exceção é o caso de empresa de trabalho temporário ou terceirização: nesses casos, a NR-04 determina que o grau de risco aplicável é o da <strong>atividade do tomador do serviço</strong>, não o CNAE da prestadora.
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
                  <strong>Revise o PGR com a frequência correta.</strong> Graus 3 e 4 precisam de revisão anual documentada.
                </li>
              </ol>
            ),
          },
        ]}
        faq={[
          {
            q: 'O grau de risco pode mudar?',
            a: 'Sim. Se a empresa mudar o CNAE, o grau de risco muda junto. Também pode mudar se o próprio Quadro I da NR-04 for atualizado pelo Ministério do Trabalho — o que ocorreu em revisões recentes. Empresa antiga com CNAE antigo pode estar operando com grau desatualizado.',
          },
          {
            q: 'Empresa com dois CNAEs usa qual grau de risco?',
            a: 'Usa o grau de risco do CNAE principal (o que define o enquadramento tributário e está em primeiro lugar no CNPJ). O CNAE secundário pode gerar obrigações adicionais de SST para aquela atividade específica, mas não muda o grau base da empresa.',
          },
          {
            q: 'MEI tem grau de risco?',
            a: 'Sim. O MEI também tem CNAE e, portanto, grau de risco. A diferença é que, com um empregado (máximo permitido), a maioria das obrigações de SESMT e CIPA não se aplica por não atingir o número mínimo. PGR simplificado e PCMSO básico continuam sendo exigidos.',
          },
          {
            q: 'O grau de risco muda a alíquota do INSS patronal?',
            a: 'O grau de risco define a alíquota do RAT (1%, 2% ou 3%), que compõe a contribuição previdenciária patronal. O FAP multiplica essa alíquota por um fator de 0,5 a 2 conforme o histórico de acidentes — empresa que reduz acidentes paga menos; empresa com muitos acidentes paga mais.',
          },
          {
            q: 'Consultório médico tem qual grau de risco?',
            a: 'Depende da subclasse CNAE. Atividade médica ambulatorial sem procedimentos cirúrgicos costuma ser grau 1 ou 2. Com procedimentos cirúrgicos é grau 2. Hospital geral é grau 3. Use a calculadora com o código CNAE exato para ter a resposta precisa.',
          },
        ]}
        sidebarTitle="Seu CNAE está correto?"
        sidebarHook="CNAE errado significa RAT errado, SESMT errado e PGR fora de prazo. A SERMST revisa o enquadramento, identifica inconsistências e aponta o que precisa ajustar antes que vire autuação da Receita ou do MTE."
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
