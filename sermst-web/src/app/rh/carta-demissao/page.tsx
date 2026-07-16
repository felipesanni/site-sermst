import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Comunicado de desligamento: como formalizar a demissão | SERMST',
  description:
    'Veja como formalizar o desligamento de um funcionário, o que escrever no comunicado da empresa e quais erros podem gerar passivo trabalhista.',
  alternates: { canonical: 'https://sermst.com.br/rh/carta-demissao' },
  robots: 'index, follow',
  openGraph: {
    title: 'Comunicado de desligamento: como formalizar a demissão | SERMST',
    description:
      'Saiba como redigir o comunicado de desligamento, quais elementos são obrigatórios e como evitar passivo trabalhista na rescisão.',
    url: 'https://sermst.com.br/rh/carta-demissao',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function CartaDemissãoPage() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/site/b2b-partnership.jpg", alt: "Profissional de RH formalizando desligamento com suporte jurídico trabalhista" }}
      hubLabel="RH e Departamento Pessoal"
      hubLabelShort="← RH e DP"
      hubHref="/rh"
      pageUrl="https://sermst.com.br/rh/carta-demissao"
      author={{
        name: 'Felipe Sannino',
        jobTitle: 'Advogado em Direito do Trabalho e SST · OAB/SP 430.824',
        url: 'https://sermst.com.br/equipe/felipe-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-07-13',
      }}

      h1="Comunicado de desligamento: como formalizar a demissão"
      intro="Esta página é voltada às empresas. O comunicado registra a decisão de encerrar o contrato e precisa estar alinhado ao aviso prévio, aos documentos rescisórios, ao exame demissional quando exigido e aos prazos aplicáveis."
      sections={[
        {
          title: 'Comunicado de desligamento é diferente de pedido de demissão',
          body: (
            <>
              <p>
                Confusão comum. Os dois documentos têm efeitos jurídicos opostos:
              </p>
              <ul>
                <li><strong>Pedido de demissão:</strong> parte do empregado. Não gera multa de 40% do FGTS nem seguro-desemprego, e o aviso prévio precisa ser tratado conforme a forma de saída.</li>
                <li><strong>Comunicado de desligamento:</strong> parte da empresa. Na dispensa sem justa causa, há aviso prévio e verbas próprias dessa modalidade; o seguro-desemprego depende do preenchimento dos requisitos legais.</li>
              </ul>
              <p>
                Mantivemos nesta URL o termo &quot;carta de demissão&quot; porque ele aparece nas buscas, mas o foco é o <strong>documento emitido pela empresa</strong>. Identificar corretamente quem tomou a iniciativa evita que o comunicado contradiga os demais registros da rescisão.
              </p>
            </>
          ),
        },
        {
          title: 'Informações úteis no comunicado da empresa',
          body: (
            <ol>
              <li><strong>Cabeçalho</strong>: dados da empresa, dados do empregado, data.</li>
              <li><strong>Comunicação clara da rescisão:</strong> indique a modalidade e a data sem incluir justificativas desnecessárias.</li>
              <li><strong>Tipo de aviso prévio:</strong> registre se será trabalhado ou indenizado e trate a proporcionalidade conforme a lei e o caso concreto.</li>
              <li><strong>Datas relevantes:</strong> informe a comunicação, o início do aviso e a última data de trabalho quando aplicável.</li>
              <li><strong>Orientação sobre os documentos rescisórios:</strong> o comunicado não precisa substituir o TRCT nem antecipar cálculos que ainda serão conferidos.</li>
              <li><strong>Procedimento para devolução de bens</strong> (crachá, notebook, EPI, uniforme).</li>
              <li><strong>Local para assinatura</strong> do empregado em recibo (não significa concordância, apenas ciência).</li>
              <li><strong>Assinatura do representante legal</strong> da empresa.</li>
            </ol>
          ),
        },
        {
          title: 'Quando a empresa deve dispensar com justa causa',
          body: (
            <>
              <p>
                A justa causa exige <strong>fato grave e prova compatível</strong>. As hipóteses estão no artigo 482 da CLT. Não basta uma avaliação genérica do gestor; a empresa precisa verificar enquadramento, autoria, gravidade, proporcionalidade e contexto.
              </p>
              <p>
                Uma justa causa pode ser revertida se os requisitos não forem demonstrados. Danos morais não são automáticos e dependem da forma da acusação e das circunstâncias. Antes de aplicar:
              </p>
              <ol>
                <li>Documentar o fato com data, hora, local, testemunhas.</li>
                <li>Verificar se a conduta exige gradação e se existem medidas anteriores; faltas graves podem ter tratamento diferente.</li>
                <li>Apurar e decidir sem demora injustificada, preservando o tempo necessário para investigar os fatos.</li>
                <li>Conferir com assessoria jurídica antes de comunicar.</li>
              </ol>
            </>
          ),
        },
        {
          title: 'Quando o exame demissional precisa ser feito',
          body: (
            <>
              <p>
                Como regra, o desligamento inclui o <strong>exame clínico demissional</strong>. A NR-07 permite dispensá-lo quando o exame clínico ocupacional mais recente tiver ocorrido há menos de 135 dias, para grau de risco 1 ou 2, ou há menos de 90 dias, para grau de risco 3 ou 4.
              </p>
              <ul>
                <li>Quando o exame é realizado, o médico emite o ASO e o evento de monitoramento correspondente é tratado no S-2220.</li>
                <li>Quando existe dispensa válida, não há novo ASO demissional nem S-2220 demissional apenas para registrar a dispensa.</li>
                <li>O S-2299 trata do desligamento e segue seu próprio fluxo no eSocial; ele não substitui o monitoramento de saúde.</li>
              </ul>
              <p>
                Quando não houver dispensa, o exame deve ser realizado <strong>em até 10 dias contados do término do contrato</strong>. O RH pode antecipar o agendamento por organização, mas não deve confundir essa prática com o prazo da norma.
              </p>
            </>
          ),
        },
        {
          title: 'Erros comuns no desligamento',
          body: (
            <ul>
              <li><strong>Justificativa desnecessária ou contraditória:</strong> pode criar dúvida sobre o motivo real da dispensa.</li>
              <li><strong>Ignorar estabilidade, suspensão contratual ou possível discriminação:</strong> gravidez, acidente de trabalho, doença estigmatizante e outras situações exigem análise específica; as consequências não são iguais em todos os casos.</li>
              <li><strong>Não pagar verba rescisória no prazo</strong> (10 dias após o fim do contrato). Multa do art. 477 da CLT, valor de um salário do empregado.</li>
              <li><strong>Não atualizar a CTPS digital:</strong> pode gerar irregularidade, prejuízo ao trabalhador e responsabilidade pelos danos demonstrados.</li>
              <li><strong>Não comunicar a rescisão no eSocial</strong>. S-2299 fora do prazo gera risco de autuação e retrabalho.</li>
              <li><strong>Deixar de fazer o demissional quando exigido</strong>. O monitoramento ocupacional fica incompleto.</li>
            </ul>
          ),
        },
      ]}
      faq={[
        {
          q: 'A empresa precisa justificar a demissão sem justa causa?',
          a: 'Em regra, a dispensa sem justa causa não exige exposição de um motivo no comunicado. A empresa ainda precisa respeitar estabilidades, proibições de discriminação, normas coletivas e outras limitações aplicáveis.',
        },
        {
          q: 'O empregado tem que assinar a carta?',
          a: 'A assinatura pode registrar a ciência, sem significar concordância com todos os valores ou motivos. Se houver recusa, a empresa pode documentar a entrega por testemunhas, meio eletrônico verificável ou correspondência adequada ao caso.',
        },
        {
          q: 'Posso demitir por mensagem (WhatsApp, e-mail)?',
          a: 'Meios eletrônicos podem comprovar a comunicação, mas a empresa deve preservar identidade, data, conteúdo e respeito no tratamento. A escolha entre entrega presencial, meio eletrônico ou correspondência depende das circunstâncias e das regras internas.',
        },
        {
          q: 'Aviso prévio trabalhado ou indenizado, qual é melhor?',
          a: 'Depende da continuidade necessária, da relação com a equipe e do custo da decisão. O aviso trabalhado mantém o vínculo e segue regras de redução da jornada; o indenizado encerra a prestação de serviços, mas projeta efeitos no contrato.',
        },
        {
          q: 'Quanto tempo a empresa tem para pagar as verbas rescisórias?',
          a: 'A CLT prevê 10 dias corridos contados do término do contrato para pagamento e entrega dos documentos. O atraso pode gerar a multa do artigo 477, ressalvadas as situações em que o trabalhador comprovadamente deu causa à mora.',
        },
      ]}
      sidebarTitle="Sua empresa demite com SST em dia?"
      sidebarHook="O desligamento precisa combinar prazo, análise de dispensa, ASO quando aplicável e eventos corretos no eSocial. A SERMST revisa esse fluxo com a empresa."
      sidebarCtaLabel="Auditar processo de rescisão"
      sidebarCtaHref="/assinaturas"
      related={[
        { label: 'Quando demitir um funcionário', href: '/rh/quando-demitir-funcionario' },
        { label: 'Como evitar processos trabalhistas', href: '/rh/evitar-processos-trabalhistas' },
        { label: 'Exame demissional: o que é e quando fazer', href: '/saude/exame-demissional' },
        { label: 'Multa eSocial S-2220', href: '/rh/multa-esocial-s2220' },
      ]}
    />
  );
}
