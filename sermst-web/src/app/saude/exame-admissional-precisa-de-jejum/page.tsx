import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Exame Admissional Precisa de Jejum? | SERMST',
  description:
    'Saiba se o exame admissional exige jejum, quais exames laboratoriais pedem restrição alimentar e o que o candidato deve levar no dia do atendimento.',
  alternates: { canonical: 'https://sermst.com.br/saude/exame-admissional-precisa-de-jejum' },
  openGraph: {
    title: 'Exame Admissional Precisa de Jejum?',
    description:
      'Resposta direta: depende dos exames complementares pedidos no PCMSO. Saiba quando o jejum é necessário e como orientar o candidato.',
    url: 'https://sermst.com.br/saude/exame-admissional-precisa-de-jejum',
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
      name: 'O exame admissional precisa de jejum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. O exame clínico admissional (consulta com o médico do trabalho que resulta no ASO) não exige jejum. Jejum só é necessário quando o PCMSO da empresa determina exames complementares que pedem restrição alimentar, como glicemia em jejum ou lipidograma. Hemograma simples, audiometria, espirometria e a maior parte dos complementares não exigem jejum.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto tempo de jejum para exame admissional com coleta de sangue?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Para exames que exigem jejum, o padrão é de 8 a 12 horas sem ingestão de alimentos. Água é permitida durante o jejum. O tempo exato depende do exame solicitado. A clínica deve informar no momento do agendamento quais exames exigem jejum.',
      },
    },
    {
      '@type': 'Question',
      name: 'O candidato pode tomar água no jejum para exame admissional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Sim. Água é permitida durante o jejum. Café, leite, sucos e chás com açúcar devem ser evitados quando há coleta de glicemia ou lipidograma.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que acontece se o candidato não fizer jejum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Se o exame exige jejum e o candidato não fez, a coleta de sangue pode precisar ser reagendada. Isso atrasa a emissão do ASO e, consequentemente, a admissão. Para evitar isso, informe o candidato com antecedência sobre quais exames serão realizados.',
      },
    },
  ],
};

export default function ExameAdmissionalJejumPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BlockbusterArticle
        coverImage={{ src: '/images/site/sermst-estrutura-medicina-ocupacional.png', alt: 'Exame admissional com coleta de sangue e jejum' }}
        hubLabel="Hub de Saúde Ocupacional"
        hubLabelShort="← Saúde Ocupacional"
        hubHref="/saude"
        pageUrl="https://sermst.com.br/saude/exame-admissional-precisa-de-jejum"
        author={{
          name: 'Luiz César Sannino',
          jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
          url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
          datePublished: '2026-06-01',
          dateModified: '2026-06-01',
        }}
        h1="Exame admissional precisa de jejum?"
        intro="Não. O exame clínico admissional — a consulta com o médico do trabalho que gera o ASO — não exige jejum. O candidato pode se alimentar normalmente. Jejum só é necessário quando o PCMSO da empresa determina exames complementares específicos que pedem restrição alimentar, como glicemia em jejum ou lipidograma. A grande maioria dos complementares (hemograma, audiometria, espirometria) também não exige jejum."
        sections={[
          {
            title: 'Resposta direta',
            body: (
              <>
                <p>
                  O <strong>exame clínico admissional</strong> — a consulta com o médico do trabalho que resulta no ASO — <strong>não exige jejum</strong>. O candidato pode se alimentar normalmente antes de ir à clínica.
                </p>
                <p>
                  Jejum só é necessário quando o PCMSO da empresa prevê <strong>exames complementares específicos</strong> que dependem do estado metabólico em repouso. São poucos:
                </p>
                <ul>
                  <li><strong>Glicemia em jejum</strong> — requer 8 horas sem comer (água permitida)</li>
                  <li><strong>Lipidograma (colesterol total, HDL, LDL, triglicérides)</strong> — requer 12 horas sem comer (água permitida)</li>
                </ul>
                <p>
                  Os exames complementares mais comuns <strong>não exigem jejum</strong>: hemograma simples, função hepática e renal, audiometria, espirometria, acuidade visual e eletrocardiograma. O candidato chega normalmente alimentado para esses exames.
                </p>
                <p>
                  A regra prática: quando houver dúvida, confirme com a clínica quais exames complementares serão realizados para aquele cargo. Se glicemia ou lipidograma estiverem na lista, oriente o candidato sobre o jejum com antecedência.
                </p>
              </>
            ),
          },
          {
            title: 'O que define quais exames serão feitos?',
            body: (
              <>
                <p>
                  É o <strong>PCMSO (Programa de Controle Médico de Saúde Ocupacional)</strong> da empresa, elaborado conforme a NR-07, que define quais exames complementares cada função precisa realizar. Funções com exposição a agentes químicos, físicos ou biológicos têm exames específicos; funções administrativas sem exposição a risco podem ter apenas o exame clínico.
                </p>
                <p>
                  Sem PCMSO, a empresa não sabe quais exames pedir — e o candidato não sabe se precisa fazer jejum. Isso gera dois problemas: o candidato chega sem preparação e a admissão atrasa; ou a empresa faz exames desnecessários e paga mais do que precisa.
                </p>
              </>
            ),
          },
          {
            title: 'Como orientar o candidato corretamente',
            body: (
              <ol>
                <li><strong>Confirme com a clínica</strong> quais exames serão realizados para aquela função antes de comunicar o candidato.</li>
                <li><strong>Informe por escrito</strong> (WhatsApp ou e-mail) se há necessidade de jejum, quanto tempo e o que é permitido beber.</li>
                <li><strong>Inclua a informação na guia de encaminhamento</strong> — o documento que o candidato leva para a clínica deve indicar os exames previstos.</li>
                <li><strong>Agende com antecedência</strong> exames que exigem jejum para o período da manhã — mais fácil para o candidato cumprir sem impactar o dia.</li>
              </ol>
            ),
          },
          {
            title: 'Quando não orientar corretamente gera problema',
            body: (
              <>
                <p>
                  O candidato que chega sem ter feito o jejum necessário não pode realizar o exame de sangue naquele momento. A coleta precisa ser reagendada. Isso atrasa a emissão do ASO — que é obrigatória antes do início das atividades — e pode travar a admissão por um ou dois dias.
                </p>
                <p>
                  Para empresas com alta rotatividade ou operações que dependem de contratação rápida, esse atraso tem custo real: o colaborador não começa, o RH retrabalha e a operação fica descoberta. A solução é simples: comunicação prévia e objetiva.
                </p>
              </>
            ),
          },
        ]}
        faq={[
          {
            q: 'O exame admissional precisa de jejum?',
            a: 'Não. O exame clínico admissional não exige jejum — o candidato pode se alimentar normalmente. Jejum só é necessário para exames complementares específicos como glicemia em jejum ou lipidograma, quando o PCMSO da empresa os exige para aquela função.',
          },
          {
            q: 'O candidato pode tomar água no jejum?',
            a: 'Sim. Água é sempre permitida. Café, leite, suco e chá com açúcar devem ser evitados quando há coleta de glicemia ou lipídeos.',
          },
          {
            q: 'O que acontece se o candidato não fizer o jejum?',
            a: 'A coleta de sangue precisa ser reagendada, atrasando o ASO e a admissão. Oriente o candidato com antecedência para evitar esse problema.',
          },
          {
            q: 'Quais documentos o candidato deve levar no exame admissional?',
            a: 'RG ou CNH, CPF e a guia de encaminhamento emitida pela empresa. Alguns PCMSO também pedem exames anteriores ou atestados médicos específicos.',
          },
        ]}
        sidebarTitle="Precisa de exame admissional com agilidade?"
        sidebarHook="A SERMST realiza exames admissionais com laboratório próprio e emite o ASO no mesmo dia. Oriente o candidato corretamente e evite atrasos na admissão."
        sidebarCtaLabel="Solicitar exame admissional"
        related={[
          { label: 'Valor do exame admissional', href: '/saude/valor-exame-admissional' },
          { label: 'Tabela de exames por função', href: '/saude/tabela-exames-admissionais-por-funcao' },
          { label: 'ASO: o que é e quando emitir', href: '/saude/aso-atestado-saude-ocupacional' },
          { label: 'PCMSO: o que é e quem precisa', href: '/saude/pcmso-programa-controle-medico' },
        ]}
      />
    </>
  );
}
