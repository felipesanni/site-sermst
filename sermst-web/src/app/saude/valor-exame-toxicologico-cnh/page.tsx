import type { Metadata } from 'next';
import Link from 'next/link';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Valor do Exame Toxicológico CNH | Quanto Custa em São Paulo | SERMST',
  description:
    'Entenda o valor do exame toxicológico para CNH C, D e E, o que influencia o preço e onde ver o atendimento da SERMST com referência de R$ 200,00.',
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
                Em buscas como <strong>valor do exame toxicológico CNH</strong> ou <strong>quanto custa exame toxicológico</strong>, o usuário já está perto da conversão. O problema é que muitos resultados falam de preço sem deixar claro se o atendimento cobre <strong>empresa, pessoa física, CNH C, D e E</strong> ou rotina ocupacional.
              </p>
              <p>
                Isso cria ruído. O visitante até vê um número, mas continua sem saber se aquele exame serve para o caso dele.
              </p>
            </>
          ),
        },
        {
          title: 'Qual o valor do exame toxicológico na SERMST',
          body: (
            <>
              <p>
                Na SERMST, o <strong>preço de referência informado atualmente é de R$ 200,00</strong> para realização do exame toxicológico.
              </p>
              <p>
                Essa informação ajuda porque a busca por valor tende a ter alta fricção. Quando a clínica esconde preço, parte do público abandona. Quando a informação aparece com contexto, a chance de conversão melhora.
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
              <li><strong>Confiabilidade.</strong> Em termos de busca competitivos, o usuário tende a preferir páginas que deixam preço e finalidade claros ao mesmo tempo.</li>
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
                Esta página existe para atacar a subintenção de preço. Mas a página que concentra o atendimento comercial completo é a principal do serviço.
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
          q: 'Esse valor serve para empresa e pessoa física?',
          a: 'A página principal do serviço concentra o contexto completo de atendimento para empresa e pessoa física. Esta página foca na intenção de preço.',
        },
        {
          q: 'Essa página substitui a página principal do exame toxicológico?',
          a: 'Não. Esta é uma página satélite focada em valor. A página principal do serviço é a que reúne atendimento, público, contexto de uso e CTA comercial.',
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
