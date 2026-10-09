import type { Metadata } from 'next';
import Link from 'next/link';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

const PAGE_URL = 'https://sermst.com.br/saude/quanto-custa-ltcat';
const LAW_8213_URL = 'https://www.planalto.gov.br/ccivil_03/leis/l8213compilado.htm';

export const metadata: Metadata = {
  title: 'Quanto custa um LTCAT? Preço e fatores do orçamento',
  description:
    'Entenda o que influencia o preço de um LTCAT, quais informações reunir e como comparar propostas sem usar um valor genérico como referência.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'Quanto custa um LTCAT? Fatores que influenciam o orçamento',
    description:
      'Guia para empresas avaliarem escopo, unidades, exposições, medições e responsabilidade técnica ao solicitar um LTCAT.',
    url: PAGE_URL,
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function CustoLTCATPage() {
  return (
    <BlockbusterArticle
      coverImage={{
        src: '/images/articles/normas-nr.jpg',
        alt: 'Documentação técnica de saúde e segurança do trabalho',
      }}
      hubLabel="Saúde Ocupacional"
      hubLabelShort="← Saúde Ocupacional"
      hubHref="/saude"
      pageUrl={PAGE_URL}
      badgeText="Orçamento de LTCAT"
      author={{
        name: 'Felipe Sannino',
        jobTitle: 'Advogado - Direito do Trabalho e SST · OAB/SP 430.824',
        url: 'https://sermst.com.br/equipe/felipe-sannino',
        datePublished: '2026-10-08',
        dateModified: '2026-10-08',
      }}
      showTableOfContents
      readingTime="7 min"
      h1="Quanto custa um LTCAT? Veja o que define o orçamento"
      intro="O preço de um LTCAT depende das condições de trabalho que precisam ser avaliadas e do escopo técnico solicitado. Para comparar propostas, considere estabelecimentos, atividades, grupos expostos, necessidade de levantamento em campo, medições aplicáveis e responsabilidade técnica — não apenas o número de empregados."
      quickAnswer={
        <p>
          Não existe um valor único de LTCAT que sirva para todas as empresas. A proposta deve informar quais unidades,
          atividades e exposições serão avaliadas, qual metodologia será usada e se visitas ou medições estão previstas.
          A empresa também precisa manter o laudo atualizado conforme as condições ambientais e os dados que fundamentam
          as informações previdenciárias. Consulte o{' '}
          <a
            href={LAW_8213_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4"
          >
            art. 58 da Lei nº 8.213/1991
          </a>.
        </p>
      }
      sections={[
        {
          title: 'O que faz o preço do LTCAT variar?',
          body: (
            <>
              <p>
                O trabalho pode variar conforme o número de estabelecimentos, os processos realizados em cada local, as
                funções e os grupos de trabalhadores expostos, os agentes identificados e os documentos já disponíveis.
                Operações distintas dentro da mesma empresa podem exigir levantamentos diferentes.
              </p>
              <p>
                Também influenciam o orçamento as visitas técnicas, a necessidade de avaliação quantitativa para determinados
                agentes, o deslocamento, a análise dos registros de proteção e a organização dos dados que sustentam o PPP e
                o evento S-2240. A necessidade de cada etapa deve decorrer das condições avaliadas e do escopo, não de um
                pacote presumido.
              </p>
            </>
          ),
        },
        {
          title: 'Número de empregados não define o escopo sozinho',
          body: (
            <>
              <p>
                A quantidade de trabalhadores ajuda a dimensionar a operação, mas não substitui a análise de atividades,
                ambientes e exposições. Uma empresa menor pode ter processos variados ou agentes que demandem investigação
                específica; uma empresa maior pode ter ambientes e funções semelhantes entre si.
              </p>
              <p>
                Por isso, desconfie de comparações feitas apenas por trabalhador ou por CNPJ. Confirme se todas as propostas
                cobrem os mesmos estabelecimentos, grupos de exposição, avaliações e entregáveis.
              </p>
            </>
          ),
        },
        {
          title: 'Como comparar propostas de LTCAT',
          body: (
            <>
              <p>Peça que cada proposta esclareça os seguintes pontos:</p>
              <ul>
                <li><strong>Unidades e atividades:</strong> quais endereços e processos estão incluídos.</li>
                <li><strong>Grupos avaliados:</strong> funções, tarefas e exposições que serão consideradas.</li>
                <li><strong>Metodologia:</strong> levantamentos e medições previstos, quando aplicáveis, e condições em que serão realizados.</li>
                <li><strong>Responsabilidade técnica:</strong> profissional responsável e identificação no documento.</li>
                <li><strong>Entregas e limites:</strong> laudo, registros de avaliação, revisões, deslocamentos e itens cobrados à parte.</li>
                <li><strong>Prazo e dados de base:</strong> informações que a empresa precisa fornecer e como mudanças futuras serão tratadas.</li>
              </ul>
              <p>
                Um orçamento mais baixo pode ter um escopo menor. Compare as entregas e os limites por escrito antes de
                decidir; o valor não demonstra, sozinho, a adequação técnica do trabalho.
              </p>
            </>
          ),
        },
        {
          title: 'LTCAT, PGR e laudo de insalubridade têm finalidades diferentes',
          body: (
            <>
              <p>
                O LTCAT documenta condições ambientais para fins previdenciários e serve de base para informações do PPP,
                conforme o caso. O PGR organiza o gerenciamento dos riscos ocupacionais; já o laudo de insalubridade avalia
                o enquadramento trabalhista segundo a NR-15. Um documento não substitui automaticamente o outro.
              </p>
              <p>
                Para entender as diferenças e o processo de avaliação, consulte o{' '}
                <Link href="/normas/ppp-eletronico" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4">
                  guia do PPP eletrônico
                </Link>{' '}
                e a página sobre{' '}
                <Link href="/normas/nr-15-insalubridade" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4">
                  insalubridade na NR-15
                </Link>.
              </p>
            </>
          ),
        },
        {
          title: 'Quais dados reunir antes de pedir um orçamento',
          body: (
            <>
              <p>Organize, quando disponíveis:</p>
              <ul>
                <li>endereços e atividades de cada estabelecimento;</li>
                <li>relação de funções, tarefas e setores;</li>
                <li>processos, equipamentos, produtos e agentes presentes;</li>
                <li>PGR, avaliações ambientais, LTCAT e PPP existentes;</li>
                <li>registros de EPI e EPC e alterações recentes na operação;</li>
                <li>informações sobre avaliações ou medições anteriores.</li>
              </ul>
              <p>
                Com esses dados, o prestador pode esclarecer o que ainda precisa ser levantado. Conheça o{' '}
                <Link href="/servicos/ltcat-laudo-tecnico-previdenciario/sao-paulo" className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4">
                  serviço de LTCAT previdenciário da SERMST
                </Link>{' '}
                e confirme o escopo aplicável à empresa.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'O LTCAT tem preço por funcionário?',
          a: 'O orçamento depende do escopo de avaliação, das unidades, das atividades e das exposições. A quantidade de trabalhadores pode ser considerada, mas não determina sozinha o esforço técnico.',
        },
        {
          q: 'Todo LTCAT precisa de medição quantitativa?',
          a: 'Não se deve presumir a necessidade de uma medição específica sem avaliar o agente, as condições de trabalho e os critérios técnicos aplicáveis. A proposta deve explicar a metodologia e o motivo das avaliações previstas.',
        },
        {
          q: 'O LTCAT precisa ser atualizado?',
          a: 'A empresa deve manter as informações ambientais previdenciárias coerentes com as condições de trabalho. Mudanças relevantes em processos, ambientes, funções ou exposições podem exigir revisão técnica dos registros.',
        },
      ]}
      maxFaqItems={5}
      mobileSingleColumn
      sidebarTitle="Precisa elaborar ou revisar o LTCAT?"
      sidebarHook="O escopo técnico depende das atividades, dos ambientes e das exposições presentes na operação."
      sidebarCtaLabel="Conhecer o serviço de LTCAT"
      sidebarCtaHref="/servicos/ltcat-laudo-tecnico-previdenciario/sao-paulo"
      related={[
        { label: 'PPP eletrônico e S-2240', href: '/normas/ppp-eletronico' },
        { label: 'NR-15: insalubridade e avaliações', href: '/normas/nr-15-insalubridade' },
        { label: 'PGR e PCMSO: fatores de orçamento', href: '/saude/quanto-custa-pgr-pcmso' },
      ]}
      finalCta={{
        title: 'Compare o escopo antes de contratar',
        desc: 'Veja quais levantamentos e entregas fazem sentido para as condições da sua empresa.',
        label: 'Ver serviço de LTCAT',
        href: '/servicos/ltcat-laudo-tecnico-previdenciario/sao-paulo',
      }}
    />
  );
}