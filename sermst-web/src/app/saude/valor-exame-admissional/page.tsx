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
        text: 'O exame admissional começa em R$ 70,00 para empresas com convênio corporativo com a SERMST. Para empresas avulsas (sem contrato), o valor pode chegar a R$ 150,00. Esse valor cobre o exame clínico com o médico do trabalho e a emissão do ASO. Exames complementares — como audiometria, hemograma, espirometria ou toxicológico — têm custo adicional conforme o que o PCMSO da empresa exige para cada função.',
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
        text: 'A principal forma de reduzir custo é ter um PCMSO bem calibrado — que exige apenas os exames realmente necessários para cada cargo, sem exames desnecessários. Empresas com contrato corporativo também acessam tarifas mais baixas do que o atendimento avulso.',
      },
    },
    {
      '@type': 'Question',
      name: 'Quem paga o exame admissional — empresa ou candidato?',
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
        hubLabel="Hub de Saúde Ocupacional"
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
                    <strong>Exame clínico + ASO</strong> — a consulta com o médico do trabalho, que inclui anamnese, avaliação física e emissão do Atestado de Saúde Ocupacional. É o componente base, presente em toda admissão.
                  </li>
                  <li>
                    <strong>Exames complementares</strong> — laboratoriais, audiometria, espirometria, acuidade visual, toxicológico e outros. São cobrados à parte e variam conforme o que o PCMSO da empresa determina para cada cargo.
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
                  O exame clínico com emissão de ASO na SERMST começa em <strong>R$ 70,00 para empresas conveniadas</strong> — aquelas com contrato corporativo ativo. Para empresas sem contrato, o atendimento avulso pode chegar a <strong>R$ 150,00</strong>.
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
                  <li><strong>Audiometria ocupacional</strong> — para cargos com exposição a ruído</li>
                  <li><strong>Hemograma completo</strong> — solicitado em diversas funções com exposição a agentes físicos ou químicos</li>
                  <li><strong>Espirometria</strong> — para funções com exposição a poeiras ou gases</li>
                  <li><strong>Acuidade visual</strong> — motoristas, operadores de máquina e funções com uso intenso de monitor</li>
                  <li><strong>Exame toxicológico</strong> — obrigatório por lei para motoristas profissionais CLT</li>
                  <li><strong>Sorologias</strong> — profissionais de saúde com risco biológico</li>
                  <li><strong>Eletrocardiograma</strong> — funções com atividade física intensa ou trabalho em altura</li>
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
                O custo do exame admissional é sempre da empresa — não do candidato. A NR-07 é clara: o empregador é responsável por todos os exames ocupacionais, incluindo o admissional. Cobrar o candidato pelo exame é infração trabalhista.
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
                    <strong>PCMSO calibrado por função.</strong> Um PCMSO bem elaborado exige apenas os exames realmente necessários para cada cargo. Empresas sem PCMSO ou com PCMSO genérico costumam fazer exames desnecessários — pagando mais sem proteger melhor.
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
            a: 'A empresa. O candidato não pode ser cobrado pelo exame admissional em nenhuma hipótese — é obrigação do empregador por força da NR-07.',
          },
          {
            q: 'Como solicitar orçamento para minha empresa?',
            a: 'Entre em contato pelo WhatsApp ou pelo formulário de contato. O orçamento é personalizado por função e depende dos exames previstos no PCMSO para cada cargo.',
          },
        ]}
        sidebarTitle="Solicitar orçamento corporativo"
        sidebarHook="Empresas com contrato corporativo acessam tarifas a partir de R$ 70,00 por exame admissional, com ASO no mesmo dia, laboratório próprio e integração com o eSocial."
        sidebarCtaLabel="Solicitar orçamento"
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
