import type { Metadata } from 'next';
import Link from 'next/link';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Valor do exame toxicológico CNH | SERMST',
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
      badgeText="Preço e atendimento"
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
      intro="Quem chega até aqui normalmente quer uma resposta objetiva: qual é o valor do exame toxicológico e se esse atendimento serve para CNH C, D e E. Também é comum surgir a dúvida sobre empresa, pessoa física e como saber se o exame está enquadrado da forma certa. O preço importa, mas ele só ajuda de verdade quando vem acompanhado desse contexto."
      quickAnswer={
        <p>
          Hoje, o <strong>valor de referência informado pela SERMST para o exame toxicológico é R$
          200,00</strong>. Essa informação ajuda mais quando vem junto do contexto: a clínica atende
          <strong> empresa e pessoa física</strong> e o exame pode estar ligado a <strong>CNH C, D e
          E</strong> ou a rotinas ocupacionais de motoristas.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'O valor ajuda, mas sozinho não responde tudo',
          body: (
            <>
              <p>
                Em buscas como <strong>valor do exame toxicológico CNH</strong> ou <strong>quanto custa exame toxicológico</strong>, a pessoa geralmente já está perto de decidir. O problema é encontrar um valor sem entender se o atendimento cobre <strong>empresa, pessoa física, CNH C, D e E</strong> ou rotina ocupacional.
              </p>
              <p>
                Quando isso acontece, o número perde utilidade. A pessoa até vê o preço, mas continua sem saber se aquele exame serve para o caso dela.
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
                Mostrar esse valor com clareza ajuda quem está decidindo e evita contato desnecessário só para descobrir o preço. Melhor ainda quando a informação já vem junto com o contexto de atendimento.
              </p>
            </>
          ),
        },
        {
          title: 'O que vale comparar junto com o preço',
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
          title: 'CNH, empresa e pessoa física: o contexto muda a decisão',
          body: (
            <>
              <p>
                A mesma busca por preço pode vir de públicos bem diferentes. O motorista quer resolver a exigência ligada à habilitação. O RH quer organizar admissão, demissão ou rotina de motoristas sem travar a operação.
              </p>
              <p>
                Por isso, o valor sozinho não fecha a decisão. O ideal é ver se a clínica atende <strong>empresa e pessoa física</strong>, se cobre <strong>CNH C, D e E</strong> e como o atendimento acontece na prática.
              </p>
            </>
          ),
        },
        {
          title: 'Onde ver o valor com o atendimento explicado por completo',
          body: (
            <>
              <p>
                Quem chegou aqui com dúvida sobre valor normalmente já está perto de decidir. O próximo passo é ver a página que reúne preço de referência, público atendido e explicação do fluxo em um só lugar.
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
          a: 'Sim. A SERMST atende empresa e pessoa física para o exame toxicológico. O valor de R$ 200,00 é a referência informada, e a página principal do serviço explica para quem o atendimento é indicado e em quais situações o exame se aplica.',
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
          a: 'O atendimento completo está na página principal do serviço da SERMST, com detalhes sobre empresa, pessoa física, CNH C, D e E e o valor de referência informado.',
        },
      ]}
      sidebarTitle="Quer ver o valor com o contexto certo?"
      sidebarHook="Se você já está comparando preço, a página principal do serviço mostra o valor de referência e explica o atendimento para empresa, pessoa física e CNH C, D e E."
      sidebarCtaLabel="Ver a página principal"
      sidebarCtaHref="/servicos/exame-toxicologico-clt/sao-paulo"
      related={[
        { label: 'Página principal: exame toxicológico para empresas e CNH', href: '/servicos/exame-toxicologico-clt/sao-paulo' },
        { label: 'Onde fazer exame toxicológico em São Paulo', href: '/saude/onde-fazer-exame-toxicologico-sao-paulo' },
        { label: 'Clínica de exame admissional em São Paulo', href: '/saude/clinica-exame-admissional-sao-paulo' },
        { label: 'ASO: o que é e quando emitir', href: '/saude/aso-atestado-saude-ocupacional' },
      ]}
      finalCta={{
        title: 'Se o valor já faz sentido, o próximo passo é confirmar o atendimento.',
        desc: 'Na página principal do exame toxicológico da SERMST, você encontra o valor de referência, o público atendido e o enquadramento certo para empresa, pessoa física e CNH C, D e E.',
        label: 'Abrir a página principal do exame',
        href: '/servicos/exame-toxicologico-clt/sao-paulo',
      }}
    />
  );
}
