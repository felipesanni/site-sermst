import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Como evitar processos trabalhistas: guia prático para empresas e RH | SERMST',
  description:
    'Processo trabalhista raramente é surpresa. É consequência de pequenas falhas acumuladas. Veja os 5 pilares de prevenção é o que blinda a empresa em ação.',
  alternates: { canonical: 'https://sermst.com.br/rh/evitar-processos-trabalhistas' },
  openGraph: {
    title: 'Como evitar processos trabalhistas: documentação, SST e gestão de risco | SERMST',
    description:
      'Principais causas de processos trabalhistas no Brasil e como a documentação SST correta — ASO, PCMSO, PGR — reduz significativamente o passivo da empresa.',
    url: 'https://sermst.com.br/rh/evitar-processos-trabalhistas',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function EvitarProcessosPage() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/site/medical-consult.jpg", alt: "Consultoria trabalhista para prevenção de processos e compliance com NRs" }}
      hubLabel="Hub de RH e Departamento Pessoal"
      hubLabelShort="← Hub de RH e DP"
      hubHref="/rh"
      pageUrl="https://sermst.com.br/rh/evitar-processos-trabalhistas"
      author={{
        name: 'Felipe Sannino',
        jobTitle: 'Advogado — Direito do Trabalho e SST · OAB/SP 430.824',
        url: 'https://sermst.com.br/equipe/felipe-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-05-01',
      }}

      h1="Como evitar processos trabalhistas: o guia prático para empresas e RH"
      intro="Processo trabalhista raramente é surpresa. É consequência acumulada de pequenas falhas — registro de ponto inconsistente, EPI sem ficha, ASO atrasado, contrato genérico. Veja como prevenir é o que blinda a empresa quando a ação chega."
      sections={[
        {
          title: 'Por que a maior parte das ações ganha do empregador',
          body: (
            <>
              <p>
                A justiça do trabalho funciona com presunção de hipossuficiência do empregado. Significa que, em caso de dúvida sobré o que aconteceu, o juiz tende a acreditar no que o trabalhador alega. A defesa da empresa precisa ser <strong>baseada em prova documental robusta</strong> — não em &quot;a gente sempre fez assim&quot;.
              </p>
              <p>
                Empresas que perdem ação não perdem porque foram negligentes — perdem porque não têm como provar que cumpriram. A diferença entre vencer e perder é o estado da documentação.
              </p>
            </>
          ),
        },
        {
          title: 'Os 5 pilares de prevenção',
          body: (
            <ol>
              <li><strong>Contrato e norma coletiva atualizados.</strong> Modelo de contrato revisado por advogado trabalhista, alinhado com convenção coletiva da categoria, atualizado anualmente.</li>
              <li><strong>Registro de ponto sem brecha.</strong> Sistema confiável (eletrônico de preferência), horário fechado, hora extra paga e registrada, intervalo respeitado e documentado.</li>
              <li><strong>Folha pagamento sem inconsistência.</strong> Verbas corretas, descontos legais documentados, pagamentos no prazo, recibos arquivados.</li>
              <li><strong>SST documentada.</strong> PGR, PCMSO, ASOs em dia, treinamentos formais, EPI com ficha de entrega, eventos eSocial no prazo.</li>
              <li><strong>Gestão de pessoas com paper trail.</strong> Feedback formalizado, advertências aplicadas com gradação, dispensas com motivação registrada, plano de melhoria documentado.</li>
            </ol>
          ),
        },
        {
          title: 'As 7 causas mais comuns de ação',
          body: (
            <ol>
              <li><strong>Hora extra não paga ou paga errado.</strong> Top 1 em volume. Empresa que tolera &quot;dar uma esticada&quot; sem registrar paga depois com juros e multa.</li>
              <li><strong>Intervalo intrajornada não respeitado.</strong> Almoço de 30 minutos quando deveria ser 1 hora gera adicional indenizatório.</li>
              <li><strong>Equiparação salarial.</strong> Dois trabalhadores fazem o mesmo trabalho, recebem diferente. Quase sempre dá ganho de causa para quem ganha menos.</li>
              <li><strong>Doença ocupacional não reconhecida pela empresa.</strong> LER/DORT, PAIR, depressão por assédio. Sem CAT emitida, vira processo direto.</li>
              <li><strong>Justa causa mal aplicada.</strong> Empresa enquadra como justa causa sem documentação suficiente; juiz reverte para dispensa imotivada com indenização adicional.</li>
              <li><strong>Acidente de trabalho com responsabilidade da empresa.</strong> Falha em fornecer EPI, em treinar, em fiscalizar. Indenização cível alta + danos morais.</li>
              <li><strong>Discriminação ou assédio moral.</strong> Qualquer prova de tratamento diferenciado por gênero, raça, idade, gestação. Indenização forte e dano moral.</li>
            </ol>
          ),
        },
        {
          title: 'O papel da SST na prevenção de processo',
          body: (
            <>
              <p>
                Apróximadamente 30-40% das ações trabalhistas tem componente de saúde ou segurança — afastamento, doença ocupacional, acidente, condição insalubre, periculosa. Em todas essas, a defesa depende de SST documentada.
              </p>
              <p>
                Sem PGR atualizado, a empresa não consegue provar que conhecia os riscos e tomou medidas de controle. Sem PCMSO em dia, não consegue provar que monitorava a saúde do trabalhador. Sem treinamento formalizado, não consegue provar que orientou. Sem ficha de EPI, não consegue provar que forneceu. Cada gap é uma porta para indenização.
              </p>
              <p>
                Empresas que tratam SST como custo descobrem o ROI negativo no primeiro processo significativo. Quem trata como blindagem do CNPJ vê o investimento se pagar.
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
              <li><strong>Revise se a documentação é coerente</strong> — se há inconsistências, melhor identificar antes do contraditório.</li>
              <li><strong>Avalie acordo</strong> em primeira audiência. Em muitos casos, acordo é mais inteligente que ir até sentença, mesmo se a empresa estiver com razão técnica.</li>
              <li><strong>Aprenda com o caso.</strong> Independente do resultado, faça análise crítica do que faltou em documentação para evitar repetição.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'Empresa pequena também pode ser processada?',
          a: 'Pode, e é processada com frequência. A justiça do trabalho não diferencia porte para reconhecer direito. A diferença é que empresa pequena tem menos recurso para defesa e menos documentação organizada — então o impacto relativo é maior. Prevenção é ainda mais importante.',
        },
        {
          q: 'Qual o prazo para o trabalhador entrar com ação?',
          a: 'Em regra, 2 anos contados do término do contrato, com retroação de até 5 anos para cobrar verbas. Doença ocupacional pode ter prazo diferente — começa a correr a partir da ciência inequívoca da doença e do nexo com o trabalho.',
        },
        {
          q: 'Acordo extrajudicial vale como quitação?',
          a: 'Vale parcialmente. A homologação em juízo (Termo de Quitação Anual ou Plano de Demissão Voluntária homologado) tem força de quitação ampla. Acordo só entre as partes pode ser questionado posteriormente — útil mas não definitivo.',
        },
        {
          q: 'Prevenção de processo é só com advogado?',
          a: 'Não. Advogado trabalhista cobre a parte jurídica (contrato, modelo de advertência, política de RH). Mas grande parte da prevenção é operacional: SST documentada (consultor de SST), DP organizado, gestão de pessoas com paper trail. É trabalho multidisciplinar.',
        },
        {
          q: 'Vale a pena ter assistente técnico próprio em ação?',
          a: 'Vale, especialmente em ação por doença ocupacional ou acidente. O perito do juízo é independente e seu laudo costuma ter peso decisivo. Sem assistente técnico próprio, a empresa fica refém do que o perito do juízo concluir. Com assistente, há contraditório técnico.',
        },
      ]}
      sidebarTitle="Sua documentação aguenta uma ação?"
      sidebarHook="Cerca de 40% das ações têm componente SST. Sem PGR, PCMSO, ASOs e treinamentos documentados, a defesa cai. A SERMST faz auditoria completa do paper trail."
      sidebarCtaLabel="Auditar minha documentação SST"
      related={[
        { label: 'Quando demitir um funcionário', href: '/rh/quando-demitir-funcionario' },
        { label: 'Como fazer carta de demissão', href: '/rh/carta-demissao' },
        { label: 'Perícia trabalhista (assistente técnico)', href: '/servicos/pericia-trabalhista-assistente-tecnico/sao-paulo' },
        { label: 'Multa eSocial S-2220', href: '/rh/multa-esocial-s2220' },
      ]}
    />
  );
}
