import type { Metadata } from 'next';
import Link from 'next/link';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Valor do Exame Toxicológico CNH | Quanto Custa em São Paulo | SERMST',
  description:
    'Entenda o valor do exame toxicológico para CNH C, D e E, o que influencia o preço e onde ver o atendimento da SERMST com referência de R$ 200,00.',
  robots: 'index, follow',
  alternates: { canonical: 'https://sermst.com.br/saude/valor-exame-toxicologico-cnh' },
  openGraph: {
    title: 'Valor do exame toxicológico CNH | SERMST',
    description:
      'Guia para quem pesquisa quanto custa exame toxicológico CNH, com foco em preço, finalidade do exame e diferença entre empresa e pessoa física.',
    url: 'https://sermst.com.br/saude/valor-exame-toxicologico-cnh',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function ValorExameToxicologicoCnhPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub Saúde Ocupacional"
      hubLabelShort="← Hub Saúde"
      hubHref="/saude"
      badgeText="Busca comercial de preço"
      pageUrl="https://sermst.com.br/saude/valor-exame-toxicologico-cnh"
      coverImage={{ src: '/images/articles/exame-demissional.jpg', alt: 'Atendimento comercial para exame toxicológico em São Paulo' }}
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-05-28',
        dateModified: '2026-05-28',
      }}
      h1="Valor do exame toxicológico CNH: quanto custa e o que realmente importa comparar"
      intro="Quem pesquisa valor do exame toxicológico CNH normalmente já está em fase de decisão. Não quer teoria demais. Quer entender preço, saber se o atendimento serve para CNH C, D e E e descobrir se existe diferença entre a demanda de pessoa física e a de empresa. A pergunta certa não é só quanto custa. É o que está incluído e para qual finalidade o exame será usado."
      sections={[
        {
          title: 'Preço é importante, mas não explica tudo sozinho',
          body: (
            <>
              <p>
                Em buscas como <strong>valor do exame toxicológico CNH</strong> ou <strong>quanto custa exame toxicológico</strong>, quem pesquisa normalmente já está próximo de agir. O problema é que muitos resultados falam de preço sem deixar claro se o atendimento cobre <strong>empresa, pessoa física, CNH C, D e E</strong> ou rotina ocupacional.
              </p>
              <p>
                Isso gera dúvida. Quem pesquisa o valor até encontra um número, mas continua sem saber se aquele exame serve para o caso dele — e acaba tendo que ligar para confirmar o que a página deveria ter respondido desde o início.
              </p>
            </>
          ),
        },
        {
          title: 'Qual o valor do exame toxicológico na SERMST?',
          body: (
            <>
              <p>
                Na SERMST, o <strong>preço de referência informado atualmente é de R$ 200,00</strong> para realização do exame toxicológico.
              </p>
              <p>
                Essa informação ajuda porque quem pesquisa valor costuma estar próximo da decisão. Apresentar o preço com clareza — junto com o contexto de atendimento — permite que empresa ou motorista avance sem precisar ligar apenas para descobrir o número.
              </p>
            </>
          ),
        },
        {
          title: 'O que comparar além do valor',
          body: (
            <ul>
              <li><strong>Finalidade do exame.</strong> O exame pode ser buscado por pessoa física ligada à CNH ou por empresa em contexto ocupacional.</li>
              <li><strong>Público atendido.</strong> Nem toda estrutura atende bem os dois cenários.</li>
              <li><strong>Validade do laudo.</strong> O preço só faz sentido se o exame atender a exigência correta.</li>
              <li><strong>Clareza do fluxo.</strong> Quem explica melhor documentos, categorias e atendimento reduz retrabalho.</li>
              <li><strong>Confiabilidade.</strong> Preço e finalidade claros na mesma página geram mais segurança. Quem encontra essas informações juntas tende a avançar para o contato com menos hesitação.</li>
            </ul>
          ),
        },
        {
          title: 'Valor para CNH, empresa e pessoa física: como pensar do jeito certo',
          body: (
            <>
              <p>
                A mesma busca por preço pode vir de públicos bem diferentes. O motorista quer resolver a exigência ligada à habilitação. O RH quer organizar admissão, demissão ou rotina de motoristas sem travar a operação.
              </p>
              <p>
                Por isso, o valor sozinho não fecha a decisão. A página principal do serviço precisa mostrar se a clínica atende <strong>empresa e pessoa física</strong>, se cobre <strong>CNH C, D e E</strong> e como a SERMST conduz o atendimento.
              </p>
            </>
          ),
        },
        {
          title: 'Onde ver o preço com contexto completo',
          body: (
            <>
              <p>
                Quem chegou aqui com dúvidas sobre valor já está próximo de decidir. O próximo passo natural é acessar a página que concentra o atendimento completo — com preço de referência, público atendido e explicação do fluxo.
              </p>
              <p>
                Se a sua busca já é por contratação ou agendamento, o melhor caminho é acessar:{' '}
                <Link href="/servicos/exame-toxicologico-clt/sao-paulo"><strong>exame toxicológico para empresas, motoristas e CNH C, D e E</strong></Link>.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'Quanto custa o exame toxicológico na SERMST?',
          a: 'O preço de referência informado atualmente pela SERMST para realização do exame toxicológico é R$ 200,00.',
        },
        {
          q: 'O valor de R$ 200,00 serve para empresa e pessoa física?',
          a: 'Sim. A SERMST atende empresa e pessoa física para o exame toxicológico. O preço de referência de R$ 200,00 se aplica ao atendimento geral, e o contexto completo — incluindo público atendido e finalidade do exame — está disponível na página principal do serviço.',
        },
        {
          q: 'Posso já agendar o exame toxicológico pela SERMST?',
          a: 'Sim. A página principal do exame toxicológico da SERMST concentra todas as informações para dar início ao atendimento — seja para empresa, seja para pessoa física com CNH C, D ou E.',
        },
        {
          q: 'O valor do exame toxicológico é o único critério importante?',
          a: 'Não. Também é importante entender se o exame serve para a finalidade correta, se a clínica atende o seu perfil e se o laudo cobre o contexto buscado.',
        },
        {
          q: 'Onde vejo o atendimento completo do exame toxicológico?',
          a: 'O atendimento completo está na página principal do serviço da SERMST, com detalhes sobre empresa, pessoa física, CNH C, D e E e preço de referência.',
        },
      ]}
      sidebarTitle="A dúvida é preço. A decisão precisa de contexto."
      sidebarHook="Se você já quer saber o valor, provavelmente está perto de agir. A página principal do serviço concentra o preço de referência e o contexto completo para empresa, pessoa física e CNH C, D e E."
      sidebarCtaLabel="Ver a página principal"
      sidebarCtaHref="/servicos/exame-toxicologico-clt/sao-paulo"
      related={[
        { label: 'Página principal: exame toxicológico para empresas e CNH', href: '/servicos/exame-toxicologico-clt/sao-paulo' },
        { label: 'Onde fazer exame toxicológico em São Paulo', href: '/saude/onde-fazer-exame-toxicologico-sao-paulo' },
        { label: 'Clínica de exame admissional em São Paulo', href: '/saude/clinica-exame-admissional-sao-paulo' },
        { label: 'ASO: o que é e quando emitir', href: '/saude/aso-atestado-saude-ocupacional' },
      ]}
      finalCta={{
        title: 'Preço ajuda a filtrar. Contexto é o que fecha a decisão.',
        desc: 'Na página principal do exame toxicológico da SERMST, você encontra o preço de referência, o público atendido e o enquadramento certo para empresa, pessoa física e CNH C, D e E.',
        label: 'Abrir a página principal do exame',
        href: '/servicos/exame-toxicologico-clt/sao-paulo',
      }}
    />
  );
}
