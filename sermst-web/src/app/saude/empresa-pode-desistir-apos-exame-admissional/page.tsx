import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'A Empresa Pode Desistir Após o Exame Admissional? | SERMST',
  description:
    'A empresa pode recusar a admissão após o exame admissional, mas com limites legais claros. Veja quando isso é permitido, quando gera passivo trabalhista e como se proteger.',
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
        text: 'Sim, desde que a desistência seja baseada no resultado do exame médico — especificamente na conclusão de inaptidão emitida pelo médico do trabalho coordenador do PCMSO. Desistir por outros motivos após o exame pode gerar ação por dano moral e responsabilização por discriminação.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que acontece se o candidato for considerado inapto no exame admissional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Se o médico do trabalho emite ASO com conclusão "inapto", a empresa pode não admitir o candidato com base técnica e legal. O candidato tem direito a recorrer do resultado por meio de exame de segunda opinião ou junta médica.',
      },
    },
    {
      '@type': 'Question',
      name: 'A empresa pode desistir por motivo de saúde que não apareceu no exame?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. Se o médico emitiu ASO de aptidão, a empresa não pode recusar a admissão com base em condição de saúde do candidato. Isso configura discriminação e pode gerar ação trabalhista com indenização por dano moral.',
      },
    },
    {
      '@type': 'Question',
      name: 'A empresa paga o exame admissional se desistir da contratação?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. O exame admissional é custo obrigatório da empresa, independentemente de a admissão ser concluída. O candidato não pode ser cobrado pelo exame em nenhuma hipótese.',
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
        hubLabel="Hub de Saúde Ocupacional"
        hubLabelShort="← Saúde Ocupacional"
        hubHref="/saude"
        pageUrl="https://sermst.com.br/saude/empresa-pode-desistir-apos-exame-admissional"
        author={{
          name: 'Felipe Sannino',
          jobTitle: 'Advogado — Direito do Trabalho e SST · OAB/SP 430.824',
          url: 'https://sermst.com.br/equipe/felipe-sannino',
          datePublished: '2026-06-01',
          dateModified: '2026-06-01',
        }}
        h1="A empresa pode desistir após o exame admissional?"
        intro="Sim — mas somente quando o médico do trabalho emite um ASO com conclusão de inaptidão. Fora desse cenário, a desistência baseada em resultado de exame, condição de saúde ou qualquer informação obtida no processo admissional pode configurar discriminação e gerar passivo trabalhista."
        sections={[
          {
            title: 'Quando a empresa pode recusar a admissão',
            body: (
              <>
                <p>
                  A empresa pode não admitir um candidato após o exame admissional em uma única situação com base legal sólida: quando o <strong>médico do trabalho coordenador do PCMSO emite ASO com conclusão "inapto"</strong>.
                </p>
                <p>
                  A inaptidão precisa ser fundamentada tecnicamente — vinculada às exigências físicas ou de saúde da função e aos riscos identificados no PCMSO. O médico não pode declarar inaptidão por preferência ou por pedido da empresa sem base clínica.
                </p>
                <p>
                  Com o ASO de inaptidão em mãos, a empresa tem respaldo legal para encerrar o processo seletivo sem risco de ação trabalhista.
                </p>
              </>
            ),
          },
          {
            title: 'Quando a desistência gera risco jurídico',
            body: (
              <>
                <p>
                  Se o médico emitiu ASO com conclusão <strong>"apto"</strong> e a empresa decide não contratar com base em:
                </p>
                <ul>
                  <li>Resultado de exame de sangue que não fundamentou inaptidão</li>
                  <li>Condição de saúde mencionada durante a anamnese</li>
                  <li>Histórico médico anterior</li>
                  <li>Gravidez identificada no exame</li>
                  <li>Qualquer informação de saúde obtida no processo admissional</li>
                </ul>
                <p>
                  … a empresa está sujeita a <strong>ação por dano moral e discriminação</strong>. O candidato pode buscar reparação na Justiça do Trabalho, e a empresa dificilmente tem defesa sólida nesses casos.
                </p>
              </>
            ),
          },
          {
            title: 'O caso específico da gravidez',
            body: (
              <p>
                A jurisprudência trabalhista é clara: o exame de gravidez não pode ser exigido como condição para admissão, e a empresa que dispensa ou recusa candidata grávida com base no resultado de exame de sangue feito no admissional responde por discriminação. A Súmula 244 do TST e a Lei 9.029/1995 protegem a candidata nesse cenário.
              </p>
            ),
          },
          {
            title: 'O que fazer se quiser recusar por motivo de saúde',
            body: (
              <>
                <p>
                  Se houver dúvida genuína sobre a aptidão do candidato para uma função específica, o caminho correto é <strong>discutir tecnicamente com o médico do trabalho coordenador do PCMSO</strong>. Se a função realmente exige condição física que o candidato não atende, o médico pode fundamentar a inaptidão dentro dos critérios técnicos da NR-07.
                </p>
                <p>
                  O que a empresa não pode fazer é pressionar o médico a declarar inaptidão sem base técnica — isso cria responsabilidade tanto para a empresa quanto para o médico.
                </p>
              </>
            ),
          },
          {
            title: 'Quem paga o exame se a empresa desistir?',
            body: (
              <p>
                A empresa sempre. O exame admissional é custo obrigatório do empregador conforme a NR-07, independentemente de a contratação ser concluída. O candidato não pode ser cobrado pelo exame em nenhuma hipótese — fazer isso é infração trabalhista.
              </p>
            ),
          },
        ]}
        faq={[
          {
            q: 'A empresa pode desistir de contratar após o exame admissional?',
            a: 'Sim, desde que o médico do trabalho emita ASO com conclusão de inaptidão, com base técnica documentada. Fora desse cenário, a desistência com base em resultado de exame ou condição de saúde pode configurar discriminação.',
          },
          {
            q: 'O candidato pode ser dispensado por condição de saúde descoberta no exame?',
            a: 'Apenas se o médico fundamentar inaptidão vinculada aos requisitos da função. Qualquer outra forma de uso de informação de saúde para recusar a admissão gera risco de ação trabalhista.',
          },
          {
            q: 'A empresa paga o exame se não contratar?',
            a: 'Sim. O custo do exame admissional é sempre da empresa, independentemente de a admissão ser efetivada.',
          },
          {
            q: 'O candidato inapto pode recorrer do resultado?',
            a: 'Sim. O candidato tem direito a solicitar exame de segunda opinião ou constituição de junta médica para revisar a conclusão de inaptidão.',
          },
        ]}
        sidebarTitle="Dúvidas sobre o processo admissional?"
        sidebarHook="A SERMST orienta o RH sobre os limites legais do exame admissional e garante que o PCMSO proteja a empresa tecnicamente e juridicamente."
        sidebarCtaLabel="Falar com especialista"
        related={[
          { label: 'Valor do exame admissional', href: '/saude/valor-exame-admissional' },
          { label: 'ASO: o que é e quando emitir', href: '/saude/aso-atestado-saude-ocupacional' },
          { label: 'Exame Demissional: como funciona', href: '/saude/exame-demissional-guia' },
          { label: 'Como evitar processos trabalhistas', href: '/rh/evitar-processos-trabalhistas' },
        ]}
      />
    </>
  );
}
