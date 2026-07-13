import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Como Evitar Processos Trabalhistas: Guia para RH | SERMST',
  description:
    'Veja como contratos, ponto, folha, SST e gestão de pessoas reduzem conflitos trabalhistas e melhoram a qualidade da documentação da empresa.',
  alternates: { canonical: 'https://sermst.com.br/rh/evitar-processos-trabalhistas' },
  openGraph: {
    title: 'Como evitar processos trabalhistas: documentação, SST e gestão de risco | SERMST',
    description:
      'Principais fontes de conflito trabalhista e como contratos, registros de jornada, folha e documentação de SST ajudam na prevenção.',
    url: 'https://sermst.com.br/rh/evitar-processos-trabalhistas',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function EvitarProcessosPage() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/site/medical-consult.jpg", alt: "Reunião de consultoria trabalhista sobre prevenção de processos e cumprimento das NRs" }}
      hubLabel="RH e Departamento Pessoal"
      hubLabelShort="← RH e DP"
      hubHref="/rh"
      pageUrl="https://sermst.com.br/rh/evitar-processos-trabalhistas"
      author={{
        name: 'Felipe Sannino',
        jobTitle: 'Advogado em Direito do Trabalho e SST · OAB/SP 430.824',
        url: 'https://sermst.com.br/equipe/felipe-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-07-13',
      }}

      h1="Como evitar processos trabalhistas: o guia prático para empresas e RH"
      intro="Conflitos trabalhistas costumam revelar falhas que já existiam na rotina: ponto inconsistente, pagamento sem explicação, EPI sem registro, ASO fora do cronograma ou gestão mal documentada. Prevenir significa corrigir o processo antes que a divergência chegue a uma fiscalização ou ação judicial."
      sections={[
        {
          title: 'Documento ajuda, mas precisa refletir a realidade',
          body: (
            <>
              <p>
                Não existe uma regra geral de que o juiz deva acreditar no empregado em toda dúvida. A distribuição do ônus da prova segue a CLT e o CPC e pode variar conforme o fato discutido e a facilidade de cada parte em produzir a prova.
              </p>
              <p>
                A documentação continua sendo decisiva, desde que seja contemporânea, coerente e compatível com a prática. Um registro de ponto britânico, uma ficha de EPI sem relação com o risco ou um PGR que não reflete a operação pode ser questionado.
              </p>
            </>
          ),
        },
        {
          title: 'Os 5 pilares de prevenção',
          body: (
            <ol>
              <li><strong>Contrato e norma coletiva atualizados.</strong> Modelo de contrato revisado por advogado trabalhista, alinhado com convenção coletiva da categoria, atualizado anualmente.</li>
              <li><strong>Registro de ponto consistente.</strong> Sistema confiável, eletrônico de preferência, com horários, horas extras e intervalos registrados corretamente.</li>
              <li><strong>Folha pagamento sem inconsistência.</strong> Verbas corretas, descontos legais documentados, pagamentos no prazo, recibos arquivados.</li>
              <li><strong>SST documentada.</strong> PGR, PCMSO, ASOs em dia, treinamentos formais, EPI com ficha de entrega, eventos eSocial no prazo.</li>
              <li><strong>Gestão de pessoas com registros claros.</strong> Feedback formalizado, advertências proporcionais, critérios de decisão consistentes e planos de melhoria documentados quando adotados.</li>
            </ol>
          ),
        },
        {
          title: 'As 7 causas mais comuns de ação',
          body: (
            <ol>
              <li><strong>Jornada sem registro confiável.</strong> Horas extras, intervalos e trabalho fora do expediente precisam estar coerentes com a rotina e a folha.</li>
              <li><strong>Pagamento ou desconto sem base clara.</strong> Rubricas, comissões, prêmios e descontos exigem critério e documentação.</li>
              <li><strong>Diferença salarial sem justificativa.</strong> A equiparação depende dos requisitos do art. 461 da CLT; a empresa precisa explicar planos, funções e critérios aplicados.</li>
              <li><strong>Doença ou acidente mal conduzido.</strong> Atraso na CAT, falta de investigação e ausência de acompanhamento podem ampliar o conflito.</li>
              <li><strong>Justa causa sem proporcionalidade ou prova.</strong> A medida é excepcional e costuma ser analisada com rigor.</li>
              <li><strong>SST desconectada da operação.</strong> EPI, treinamentos e programas precisam corresponder aos riscos reais.</li>
              <li><strong>Discriminação ou assédio.</strong> Falta de canal, investigação e resposta consistente aumenta o risco para trabalhadores e empresa.</li>
            </ol>
          ),
        },
        {
          title: 'O papel da SST na prevenção de processo',
          body: (
            <>
              <p>
                Saúde e segurança aparecem em ações sobre acidente, doença ocupacional, estabilidade, insalubridade e periculosidade. Nesses casos, a documentação técnica ajuda a reconstruir os riscos, as medidas de prevenção e o acompanhamento de saúde.
              </p>
              <p>
                PGR, PCMSO, ASO, treinamentos e registros de EPI cumprem funções diferentes. Eles precisam conversar entre si e com a atividade executada. A simples existência dos arquivos não substitui a aplicação das medidas no ambiente de trabalho.
              </p>
              <p>
                Uma rotina preventiva reduz improviso e facilita a resposta quando surge uma dúvida, uma fiscalização ou uma perícia. Esse é um benefício operacional, não uma garantia de resultado judicial.
              </p>
            </>
          ),
        },
        {
          title: 'O que fazer quando a notificação chega',
          body: (
            <ol>
              <li><strong>Não entre em pânico, não procrastine.</strong> Há prazo apertado para defesa.</li>
              <li><strong>Acione advogado trabalhista imediatamente.</strong> Não responda direto sem assessoria.</li>
              <li><strong>Reúna toda a documentação relacionada</strong> ao período do trabalhador: contrato, recibos, ponto, ASOs, treinamentos, fichas de EPI, advertências, eSocial.</li>
              <li><strong>Revise se a documentação é coerente</strong>. Informe ao advogado qualquer inconsistência; não altere nem produza registro retroativo.</li>
              <li><strong>Avalie acordo</strong> em primeira audiência. Em muitos casos, acordo é mais inteligente que ir até sentença, mesmo se a empresa estiver com razão técnica.</li>
              <li><strong>Aprenda com o caso.</strong> Independente do resultado, faça análise crítica do que faltou em documentação para evitar repetição.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'Empresa pequena também pode ser processada?',
          a: 'Pode. O porte não afasta direitos trabalhistas. Para uma empresa pequena, o impacto financeiro e operacional de um conflito pode ser proporcionalmente maior, o que torna importante manter rotinas simples e registros consistentes.',
        },
        {
          q: 'Qual o prazo para o trabalhador entrar com ação?',
          a: 'Em regra, a Constituição prevê ação até 2 anos após o fim do contrato, alcançando créditos dos 5 anos anteriores ao ajuizamento. Pedidos de indenização por acidente ou doença ocupacional podem envolver discussão própria sobre o momento em que houve ciência inequívoca do dano e de sua extensão.',
        },
        {
          q: 'Acordo extrajudicial vale como quitação?',
          a: 'Depende do conteúdo e da forma. A homologação judicial não transforma automaticamente qualquer cláusula em quitação geral. Termo de quitação anual, PDV e acordo extrajudicial têm requisitos e efeitos diferentes; a redação deve ser analisada por advogado.',
        },
        {
          q: 'Prevenção de processo é só com advogado?',
          a: 'Não. O advogado cuida da parte jurídica, mas a prevenção também depende de DP, liderança, contabilidade e SST. Cada área precisa manter registros claros e compartilhar mudanças que afetem contrato, jornada, remuneração ou riscos.',
        },
        {
          q: 'Vale a pena ter assistente técnico próprio em ação?',
          a: 'Pode ser útil em ações com perícia médica, de insalubridade, periculosidade ou acidente. O assistente analisa documentos, acompanha diligências e apresenta manifestação técnica. A conveniência depende do valor, da complexidade e da estratégia definida com o advogado.',
        },
      ]}
      sidebarTitle="Sua documentação aguenta uma ação?"
      sidebarHook="PGR, PCMSO, ASOs e treinamentos precisam refletir a operação. A SERMST revisa a consistência dos documentos e aponta o que deve ser corrigido na rotina."
      sidebarCtaLabel="Auditar minha documentação SST"
      sidebarCtaHref="/assinaturas"
      related={[
        { label: 'Quando demitir um funcionário', href: '/rh/quando-demitir-funcionario' },
        { label: 'Como fazer carta de demissão', href: '/rh/carta-demissao' },
        { label: 'Perícia trabalhista (assistente técnico)', href: '/servicos/pericia-trabalhista-assistente-tecnico/sao-paulo' },
        { label: 'Multa eSocial S-2220', href: '/rh/multa-esocial-s2220' },
      ]}
    />
  );
}
