import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Quanto custa o exame admissional? | SERMST',
  description:
    'Veja quanto custa o exame admissional, o que influencia o preço, quais complementares pesam no valor e o custo real por admissão.',
  alternates: { canonical: 'https://sermst.com.br/saude/valor-exame-admissional' },
  openGraph: {
    title: 'Quanto custa o exame admissional? | SERMST',
    description:
      'Exame admissional a partir de R$ 70,00 para empresas conveniadas. O valor final depende dos complementares exigidos pelo PCMSO para cada função.',
    url: 'https://sermst.com.br/saude/valor-exame-admissional',
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
      name: 'Quanto custa um exame admissional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O exame admissional começa em R$ 70,00 para empresas com convênio corporativo com a SERMST. Para empresas avulsas, sem contrato, o valor pode chegar a R$ 150,00. Esse valor cobre o exame clínico com o médico do trabalho e a emissão do ASO. Exames complementares, como audiometria, hemograma, espirometria ou toxicológico, têm custo adicional conforme o que o PCMSO exige para cada função.',
      },
    },
    {
      '@type': 'Question',
      name: 'O que está incluído no valor do exame admissional?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'O valor base cobre a consulta clínica com o médico do trabalho, a anamnese ocupacional e a emissão do ASO (Atestado de Saúde Ocupacional). Exames laboratoriais, audiometria, espirometria e outros complementares são cobrados à parte, conforme o PCMSO da empresa para aquela função.',
      },
    },
    {
      '@type': 'Question',
      name: 'Como reduzir o custo dos exames admissionais na empresa?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A principal forma de evitar gastos desnecessários é ter um PCMSO coerente com os riscos de cada cargo. Empresas com contrato corporativo também podem ter tarifas menores do que no atendimento avulso.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quem paga o exame admissional: empresa ou candidato?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A empresa. O custo do exame admissional é obrigatoriamente do empregador, conforme a NR-07. O candidato não pode ser cobrado pelo exame em nenhuma hipótese.',
      },
    },
  ],
};

export default function ValorExameAdmissionalPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <BlockbusterArticle
        coverImage={{ src: '/images/site/sermst-estrutura-medicina-ocupacional.png', alt: 'Valor e preço do exame admissional para empresas' }}
        hubLabel="Saúde Ocupacional"
        hubLabelShort="← Saúde Ocupacional"
        hubHref="/saude"
        pageUrl="https://sermst.com.br/saude/valor-exame-admissional"
        disableFaqSchema
        author={{
          name: 'Luiz César Sannino',
          jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
          url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
          datePublished: '2026-06-01',
          dateModified: '2026-07-02',
        }}
        h1="Quanto custa o exame admissional para empresas"
        intro="O exame admissional começa em R$ 70,00 para empresas com convênio corporativo e pode chegar a R$ 150,00 no atendimento avulso. Esse valor cobre o exame clínico e a emissão do ASO, mas o custo total por admissão depende dos exames complementares que o PCMSO exige para cada função."
        sections={[
          {
            title: 'Como o preço do exame admissional é formado',
            body: (
              <>
                <p>
                  O exame admissional tem dois componentes de custo:
                </p>
                <ul>
                  <li>
                    <strong>Exame clínico e ASO:</strong> consulta com o médico do trabalho, que inclui anamnese, avaliação clínica e emissão do Atestado de Saúde Ocupacional. É o componente básico de toda admissão.
                  </li>
                  <li>
                    <strong>Exames complementares:</strong> laboratoriais, audiometria, espirometria, acuidade visual, toxicológico e outros. São cobrados à parte e variam conforme o que o PCMSO determina para cada cargo.
                  </li>
                </ul>
                <p>
                  O valor que a empresa paga por admissão é a soma dos dois. Uma admissão simples, sem complementares, custa apenas o exame clínico. Uma admissão para motorista de carga, que exige toxicológico obrigatório por lei, acuidade visual e audiometria, tem custo significativamente maior.
                </p>
              </>
            ),
          },
          {
            title: 'Referência de valores na SERMST',
            body: (
              <>
                <p>
                  O exame clínico com emissão de ASO na SERMST começa em <strong>R$ 70,00 para empresas conveniadas</strong>, aquelas com contrato corporativo ativo. Para empresas sem contrato, o atendimento avulso pode chegar a <strong>R$ 150,00</strong>.
                </p>
                <p>
                  Esses valores não incluem os exames complementares, que são orçados conforme o perfil de risco da função e o PCMSO vigente da empresa. O orçamento completo por cargo é fornecido no contato comercial.
                </p>
              </>
            ),
          },
          {
            title: 'Exames complementares mais comuns (custo adicional)',
            body: (
              <>
                <p>
                  Os complementares mais frequentes no exame admissional variam conforme a função e os riscos identificados no PCMSO:
                </p>
                <ul>
                  <li><strong>Audiometria ocupacional:</strong> indicada quando há exposição ocupacional a níveis de pressão sonora elevados.</li>
                  <li><strong>Hemograma completo:</strong> pode ser indicado conforme os riscos e o acompanhamento definido no PCMSO.</li>
                  <li><strong>Espirometria:</strong> pode integrar o controle de trabalhadores expostos a determinados agentes respiratórios.</li>
                  <li><strong>Acuidade visual:</strong> solicitada quando a avaliação visual é pertinente às atividades e aos riscos da função.</li>
                  <li><strong>Exame toxicológico:</strong> aplicável aos motoristas profissionais nas situações previstas em lei.</li>
                  <li><strong>Sorologias:</strong> podem ser indicadas em atividades com risco biológico, conforme avaliação médica.</li>
                  <li><strong>Eletrocardiograma:</strong> pode ser solicitado conforme a avaliação clínica e os riscos ocupacionais.</li>
                </ul>
                <p>
                  Solicite o orçamento por função para ter o custo real por admissão antes de fechar contrato.
                </p>
              </>
            ),
          },
          {
            title: 'Quem paga o exame admissional',
            body: (
              <p>
                O custo do exame admissional é da empresa, não do candidato. A NR-07 atribui ao empregador a responsabilidade pelo PCMSO e pelos exames ocupacionais previstos no programa.
              </p>
            ),
          },
          {
            title: 'Como reduzir o custo por admissão',
            body: (
              <>
                <p>
                  Duas alavancas principais:
                </p>
                <ul>
                  <li>
                    <strong>PCMSO coerente com cada função.</strong> O programa deve indicar os exames necessários a partir dos riscos ocupacionais. Um documento genérico pode deixar controles importantes de fora ou incluir exames sem justificativa técnica.
                  </li>
                  <li>
                    <strong>Contrato corporativo.</strong> Empresas com convênio acessam tarifas menores do que o atendimento avulso, além de fluxo de atendimento prioritário e integração direta com o eSocial.
                  </li>
                </ul>
              </>
            ),
          },
        ]}
        faq={[
          {
            q: 'Quanto custa o exame admissional?',
            a: 'A partir de R$ 70,00 para empresas conveniadas, podendo chegar a R$ 150,00 no atendimento avulso. O valor cobre o exame clínico e o ASO. Exames complementares têm custo adicional conforme o PCMSO da empresa.',
          },
          {
            q: 'O que está incluído no valor?',
            a: 'O exame clínico com o médico do trabalho e a emissão do ASO. Exames laboratoriais, audiometria, espirometria e outros complementares são cobrados à parte.',
          },
          {
            q: 'Quem paga o exame admissional?',
            a: 'A empresa. A NR-07 atribui ao empregador o custeio dos procedimentos relacionados ao PCMSO, sem ônus para o empregado.',
          },
          {
            q: 'Como solicitar orçamento para minha empresa?',
            a: 'Entre em contato pelo WhatsApp ou pelo formulário de contato. O orçamento é personalizado por função e depende dos exames previstos no PCMSO para cada cargo.',
          },
        ]}
        sidebarTitle="Solicitar orçamento corporativo"
        sidebarHook="Empresas com contrato corporativo acessam tarifas a partir de R$ 70,00 por exame admissional, com ASO no mesmo dia, laboratório próprio e integração com o eSocial."
        sidebarCtaLabel="Solicitar orçamento"
        sidebarCtaHref="/servicos/exame-admissional-expresso/sao-paulo"
        related={[
          { label: 'Exame admissional: o que é e como funciona', href: '/exames/como-funciona-o-exame-admissional' },
          { label: 'Tabela de exames por função e cargo', href: '/saude/tabela-exames-admissionais-por-funcao' },
          { label: 'Audiometria ocupacional em São Paulo Centro', href: '/servicos/audiometria-ocupacional-clinica/sao-paulo' },
          { label: 'Exame admissional precisa de jejum?', href: '/saude/exame-admissional-precisa-de-jejum' },
          { label: 'Validade do ASO admissional', href: '/saude/validade-aso-admissional' },
          { label: 'Clínica de Exame Admissional em São Paulo', href: '/saude/clinica-exame-admissional-sao-paulo' },
        ]}
      />
    </>
  );
}
