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
        text: 'O exame clínico admissional não exige jejum. A restrição alimentar só se aplica quando há exame complementar com preparo específico, como glicemia de jejum. O perfil lipídico geralmente pode ser colhido sem jejum, mas o médico ou o laboratório pode orientar preparo diferente em situações específicas.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quanto tempo de jejum para exame admissional com coleta de sangue?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O tempo depende do exame e da orientação do laboratório. A glicemia de jejum costuma exigir 8 horas. Não adote 12 horas como regra para toda coleta; confirme o preparo no agendamento.',
      },
    },
    {
      '@type': 'Question',
      name: 'O candidato pode tomar água no jejum para exame admissional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Em geral, água em quantidade moderada é permitida, mas o candidato deve seguir a orientação recebida para os exames solicitados. Café, leite, sucos e chás quebram o jejum.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que acontece se o candidato não fizer jejum?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Informe a clínica antes da coleta. Dependendo do exame, ela poderá realizar a coleta, registrar o tempo desde a última refeição ou reagendar somente o teste que exige jejum.',
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
        hubLabel="Saúde Ocupacional"
        hubLabelShort="← Saúde Ocupacional"
        hubHref="/saude"
        pageUrl="https://sermst.com.br/saude/exame-admissional-precisa-de-jejum"
        disableFaqSchema
        author={{
          name: 'Luiz César Sannino',
          jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
          url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
          datePublished: '2026-06-01',
          dateModified: '2026-07-13',
        }}
        h1="Exame admissional precisa de jejum?"
        intro="O exame clínico admissional não exige jejum. A necessidade aparece apenas quando há exame complementar com preparo específico, como glicemia de jejum. O perfil lipídico já não exige 12 horas de jejum como regra geral, e o preparo deve ser confirmado com a clínica para a lista exata de exames solicitados."
        sections={[
          {
            title: 'Resposta direta',
            body: (
              <>
                <p>
                  O <strong>exame clínico admissional</strong>, a consulta que resulta no ASO, <strong>não exige jejum</strong>. Se houver somente avaliação clínica, o candidato pode se alimentar normalmente.
                </p>
                <p>
                  Alguns exames complementares têm preparo próprio. Exemplos:
                </p>
                <ul>
                  <li><strong>Glicemia de jejum</strong>: costuma exigir 8 horas sem alimentos.</li>
                  <li><strong>Perfil lipídico</strong>: em geral pode ser colhido sem jejum, conforme o consenso das sociedades brasileiras; o médico pode pedir jejum em situações específicas.</li>
                </ul>
                <p>
                  Audiometria, espirometria, acuidade visual e eletrocardiograma não dependem de jejum alimentar. Para exames de sangue, confirme sempre o preparo do laboratório, pois a orientação varia conforme o método e a combinação de testes.
                </p>
                <p>
                  A regra prática é simples: confira a lista do PCMSO e envie ao candidato a orientação fornecida pela clínica. Não use a mesma mensagem de jejum para todos os cargos.
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
                  Sem um PCMSO coerente com os riscos, o encaminhamento pode trazer exames insuficientes ou desnecessários. Isso também aumenta a chance de o candidato receber uma orientação de preparo errada.
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
                <li><strong>Inclua a informação na guia de encaminhamento</strong>: o documento deve indicar os exames previstos.</li>
                <li><strong>Facilite o preparo</strong>: quando houver jejum, ofereça um horário compatível e oriente pessoas com diabetes, gestantes, idosos ou outras condições a confirmar o preparo com a equipe de saúde.</li>
              </ol>
            ),
          },
          {
            title: 'Quando não orientar corretamente gera problema',
            body: (
              <>
                <p>
                  Se o candidato não seguiu o preparo, a clínica deve avaliar o exame solicitado antes de coletar. Em alguns casos, basta registrar a informação; em outros, o teste precisa ser reagendado. O candidato não deve prolongar o jejum por conta própria.
                </p>
                <p>
                  Uma orientação específica evita retorno desnecessário e reduz retrabalho no RH. Ela também protege o candidato de jejuns longos sem indicação.
                </p>
              </>
            ),
          },
        ]}
        faq={[
          {
            q: 'O exame admissional precisa de jejum?',
            a: 'O exame clínico admissional não exige jejum. A restrição só se aplica quando a lista inclui exame com preparo específico, como glicemia de jejum. O perfil lipídico geralmente pode ser colhido sem jejum, salvo orientação médica ou laboratorial diferente.',
          },
          {
            q: 'O candidato pode tomar água no jejum?',
            a: 'Em geral, água em quantidade moderada é permitida. Siga a orientação da clínica, porque alguns procedimentos podem ter regras próprias. Café, leite, suco e chá quebram o jejum.',
          },
          {
            q: 'O que acontece se o candidato não fizer o jejum?',
            a: 'Avise a clínica antes da coleta. Dependendo do exame, ela poderá coletar com o registro do preparo ou reagendar apenas o teste que realmente exige jejum.',
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
          { label: 'Exame admissional: o que é e como funciona', href: '/exames/como-funciona-o-exame-admissional' },
          { label: 'Valor do exame admissional', href: '/saude/valor-exame-admissional' },
          { label: 'Tabela de exames por função', href: '/saude/tabela-exames-admissionais-por-funcao' },
          { label: 'ASO: o que é e quando emitir', href: '/saude/aso-atestado-saude-ocupacional' },
          { label: 'PCMSO: o que é e quem precisa', href: '/saude/pcmso-programa-controle-medico' },
        ]}
      />
    </>
  );
}
