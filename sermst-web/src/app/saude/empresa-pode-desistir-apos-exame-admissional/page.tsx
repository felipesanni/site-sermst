import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'A Empresa Pode Desistir Após o Exame Admissional? | SERMST',
  description:
    'A empresa pode desistir da contratação após o exame admissional, mas a decisão tem limites. Veja os cuidados com inaptidão, discriminação e expectativa de contratação.',
  alternates: { canonical: 'https://sermst.com.br/saude/empresa-pode-desistir-apos-exame-admissional' },
  openGraph: {
    title: 'A Empresa Pode Desistir Após o Exame Admissional?',
    description:
      'Sim, mas com limites. A desistência por resultado do exame exige base técnica do médico do trabalho. Qualquer outro motivo pode gerar processo por dano moral ou discriminação.',
    url: 'https://sermst.com.br/saude/empresa-pode-desistir-apos-exame-admissional',
    type: 'article',
    locale: 'pt_BR',
  },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'A empresa pode desistir de contratar após o exame admissional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A empresa pode encerrar o processo por motivo legítimo e não discriminatório. Um ASO com conclusão de inaptidão para a função também pode fundamentar a não admissão. O risco aumenta quando a decisão usa diagnóstico, gravidez ou outro dado de saúde, ou quando a empresa já criou expectativa concreta de contratação e causa prejuízo ao candidato.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que acontece se o candidato for considerado inapto no exame admissional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Se o ASO concluir pela inaptidão para a função, a empresa pode suspender a admissão. O candidato pode pedir esclarecimentos sobre a conclusão e buscar nova avaliação médica, sem que o RH tenha acesso ao diagnóstico.',
      },
    },
    {
      '@type': 'Question',
      name: 'A empresa pode desistir por motivo de saúde que não apareceu no exame?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A decisão não deve usar informação de saúde que não resulte em inaptidão para a função. Recusar alguém por diagnóstico, deficiência ou outra condição protegida pode caracterizar discriminação, conforme as circunstâncias do caso.',
      },
    },
    {
      '@type': 'Question',
      name: 'A empresa paga o exame admissional se desistir da contratação?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. O empregador deve custear o exame ocupacional previsto no processo admissional, sem repassar o valor ao candidato.',
      },
    },
  ],
};

export default function EmpresaPodeDesistirPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BlockbusterArticle
        coverImage={{ src: '/images/site/b2b-partnership.jpg', alt: 'Empresa e candidato no processo admissional' }}
        hubLabel="Saúde Ocupacional"
        hubLabelShort="← Saúde Ocupacional"
        hubHref="/saude"
        pageUrl="https://sermst.com.br/saude/empresa-pode-desistir-apos-exame-admissional"
        disableFaqSchema
        author={{
          name: 'Felipe Sannino',
          jobTitle: 'Advogado em Direito do Trabalho e SST · OAB/SP 430.824',
          url: 'https://sermst.com.br/equipe/felipe-sannino',
          datePublished: '2026-06-01',
          dateModified: '2026-07-13',
        }}
        h1="A empresa pode desistir após o exame admissional?"
        intro="A empresa pode encerrar o processo seletivo por motivo legítimo e não discriminatório, mesmo depois do exame. Um ASO com conclusão de inaptidão para a função também pode impedir a admissão. O cuidado principal é não usar diagnóstico, gravidez ou outro dado de saúde como critério indevido e não ignorar eventual responsabilidade pré-contratual."
        sections={[
          {
            title: 'Quando a empresa pode recusar a admissão',
            body: (
              <>
                <p>
                  A empresa pode não admitir o candidato quando o <strong>médico que realizou o exame clínico emite ASO com conclusão &quot;inapto&quot;</strong> para a função. Também pode encerrar o processo por uma razão empresarial legítima, como cancelamento da vaga ou escolha de outro perfil, desde que a decisão não seja discriminatória.
                </p>
                <p>
                  A conclusão médica deve estar vinculada aos riscos e às exigências da função descritos no PCMSO. O RH recebe apenas a conclusão de apto ou inapto; diagnóstico e detalhes clínicos permanecem protegidos pelo sigilo médico.
                </p>
                <p>
                  O ASO de inaptidão oferece fundamento técnico para suspender a admissão, mas não elimina todo risco jurídico. O processo ainda precisa respeitar as regras contra discriminação e a boa-fé na fase pré-contratual.
                </p>
              </>
            ),
          },
          {
            title: 'Quando a desistência gera risco jurídico',
            body: (
              <>
                <p>
                  Se o médico emitiu ASO com conclusão <strong>&quot;apto&quot;</strong> e a empresa decide não contratar com base em:
                </p>
                <ul>
                  <li>Resultado de exame de sangue que não fundamentou inaptidão</li>
                  <li>Condição de saúde mencionada durante a anamnese</li>
                  <li>Histórico médico anterior</li>
                  <li>Gravidez identificada no exame</li>
                  <li>Qualquer informação de saúde obtida no processo admissional</li>
                </ul>
                <p>
                  a empresa passa a correr risco de <strong>alegação de discriminação e pedido de reparação</strong>. A análise depende das provas, do motivo real da decisão e de como o processo seletivo foi conduzido.
                </p>
              </>
            ),
          },
          {
            title: 'O caso específico da gravidez',
            body: (
              <p>
                A Lei 9.029/1995 proíbe exigir teste, exame, perícia, laudo ou declaração relativos a gravidez e esterilização para acesso ou manutenção da relação de trabalho. A empresa não deve pedir teste de gravidez no admissional nem usar uma informação obtida de outra forma para excluir a candidata.
              </p>
            ),
          },
          {
            title: 'O que fazer se quiser recusar por motivo de saúde',
            body: (
              <>
                <p>
                  Se houver dúvida genuína sobre a aptidão para uma função específica, o RH deve fornecer ao serviço médico uma descrição correta da atividade e dos riscos. A avaliação e a conclusão cabem ao médico examinador, sem interferência da empresa.
                </p>
                <p>
                  A empresa não deve pressionar o médico a alterar a conclusão nem pedir acesso a diagnóstico. Se o candidato questionar o resultado, o serviço médico pode orientar sobre esclarecimento e nova avaliação.
                </p>
              </>
            ),
          },
          {
            title: 'Quem paga o exame se a empresa desistir?',
            body: (
              <p>
                O empregador. A NR-07 determina que os procedimentos relacionados ao PCMSO sejam custeados pela organização, sem ônus para o empregado. No processo admissional, o valor não deve ser repassado ao candidato.
              </p>
            ),
          },
        ]}
        faq={[
          {
            q: 'A empresa pode desistir de contratar após o exame admissional?',
            a: 'Sim. A empresa pode encerrar o processo por motivo legítimo e não discriminatório. Se houver ASO de inaptidão para a função, a conclusão médica também pode fundamentar a não admissão. Em qualquer caso, é preciso observar boa-fé e eventual responsabilidade pré-contratual.',
          },
          {
            q: 'O candidato pode ser dispensado por condição de saúde descoberta no exame?',
            a: 'O RH deve se orientar pela conclusão do ASO, sem acessar ou usar diagnóstico. Uma condição de saúde que não resulte em inaptidão para a função não deve virar critério de exclusão.',
          },
          {
            q: 'A empresa paga o exame se não contratar?',
            a: 'Sim. O exame ocupacional solicitado no processo admissional deve ser custeado pelo empregador, sem cobrança do candidato.',
          },
          {
            q: 'O candidato inapto pode recorrer do resultado?',
            a: 'O candidato pode pedir esclarecimentos ao serviço médico e buscar nova avaliação. A NR-07 não cria, para todo caso, um procedimento obrigatório de junta médica; a forma de revisão depende do contexto e das regras aplicáveis.',
          },
        ]}
        sidebarTitle="Dúvidas sobre o processo admissional?"
        sidebarHook="A SERMST orienta o RH sobre o fluxo do exame admissional, o sigilo médico e a aplicação correta do PCMSO."
        sidebarCtaLabel="Falar com especialista"
        related={[
          { label: 'Valor do exame admissional', href: '/saude/valor-exame-admissional' },
          { label: 'ASO: o que é e quando emitir', href: '/saude/aso-atestado-saude-ocupacional' },
          { label: 'Exame demissional: o que é e quando fazer', href: '/saude/exame-demissional' },
          { label: 'Como evitar processos trabalhistas', href: '/rh/evitar-processos-trabalhistas' },
        ]}
      />
    </>
  );
}
