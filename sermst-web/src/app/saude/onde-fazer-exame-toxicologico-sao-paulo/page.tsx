import type { Metadata } from 'next';
import Link from 'next/link';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Onde Fazer Exame Toxicológico em São Paulo | CNH C, D e E | SERMST',
  description:
    'Saiba onde fazer exame toxicológico em São Paulo com validade nacional, atendimento para empresa e pessoa física e suporte para CNH C, D e E.',
  alternates: { canonical: 'https://sermst.com.br/saude/onde-fazer-exame-toxicologico-sao-paulo' },
  openGraph: {
    title: 'Onde fazer exame toxicológico em São Paulo | SERMST',
    description:
      'Guia prático para quem busca onde fazer exame toxicológico em São Paulo, com foco em validade nacional, CNH C, D e E, empresa e pessoa física.',
    url: 'https://sermst.com.br/saude/onde-fazer-exame-toxicologico-sao-paulo',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function OndeFazerExameToxicologicoPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub Saúde Ocupacional"
      hubLabelShort="← Hub Saúde"
      hubHref="/saude"
      badgeText="Busca local e comercial"
      pageUrl="https://sermst.com.br/saude/onde-fazer-exame-toxicologico-sao-paulo"
      coverImage={{ src: '/images/articles/exame-periodico.jpg', alt: 'Atendimento de exame toxicológico em clínica ocupacional em São Paulo' }}
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-05-28',
        dateModified: '2026-05-28',
      }}
      h1="Onde fazer exame toxicológico em São Paulo: o que avaliar antes de escolher"
      intro="Quem procura onde fazer exame toxicológico em São Paulo normalmente quer resolver algo prático: renovação da CNH C, D ou E, exigência ocupacional da empresa, admissão de motorista ou confirmação de valor e validade do atendimento. A melhor escolha não é só a mais próxima. É a que deixa claro para quem atende, como funciona e se o laudo realmente serve para a finalidade buscada."
      sections={[
        {
          title: 'A busca não é só por endereço. É por segurança na decisão.',
          body: (
            <>
              <p>
                A expressão <strong>onde fazer exame toxicológico</strong> parece simples, mas ela costuma esconder dúvidas maiores: a clínica atende empresa e pessoa física? O exame serve para CNH C, D e E? O laudo tem validade nacional? O atendimento ajuda quem está em admissão, demissão ou renovação?
              </p>
              <p>
                Em uma keyword concorrida, páginas vagas perdem espaço porque não respondem a intenção real. O usuário quer saber onde fazer, mas também quer entender <strong>se o local resolve de verdade o caso dele</strong>.
              </p>
            </>
          ),
        },
        {
          title: 'Quem normalmente faz essa busca',
          body: (
            <ul>
              <li><strong>Pessoa física com CNH C, D ou E</strong> que precisa regularizar exigência ligada à habilitação.</li>
              <li><strong>Empresa com motoristas</strong> que precisa organizar admissão, demissão ou rotina ocupacional.</li>
              <li><strong>RH ou operação logística</strong> tentando evitar atraso de escala, contratação travada ou ruído documental.</li>
              <li><strong>Usuário comparando preço e confiabilidade</strong> antes de decidir onde fazer o exame toxicológico em São Paulo.</li>
            </ul>
          ),
        },
        {
          title: 'O que avaliar antes de escolher onde fazer',
          body: (
            <ol>
              <li><strong>Finalidade do exame.</strong> Nem toda busca é ocupacional. Em muitos casos, o foco é CNH. A clínica precisa explicar isso com clareza.</li>
              <li><strong>Público atendido.</strong> Há lugares que trabalham bem com empresa, mas não com pessoa física, e vice-versa.</li>
              <li><strong>Validade do laudo.</strong> O usuário precisa de segurança de que o exame será aceito para o cenário correto.</li>
              <li><strong>Preço transparente.</strong> Em uma busca comercial, esconder valor aumenta abandono. Transparência ajuda a converter e reduz atrito.</li>
              <li><strong>Orientação de processo.</strong> Quando a equipe explica documentos, categorias e fluxo, a experiência muda completamente.</li>
            </ol>
          ),
        },
        {
          title: 'Quando a SERMST faz sentido nessa busca',
          body: (
            <>
              <p>
                A SERMST atende <strong>empresa e pessoa física</strong> em São Paulo para exame toxicológico, com apoio tanto para rotinas ocupacionais quanto para demandas ligadas à <strong>CNH C, D e E</strong>.
              </p>
              <p>
                Isso torna a página principal do serviço o melhor próximo passo para quem quer sair da dúvida geral e entrar em um atendimento concreto, com preço de referência, explicação do público atendido e contexto de uso do exame.
              </p>
              <p>
                Se a sua busca já saiu do “onde fazer” e entrou no “quero resolver agora”, a página mais importante é esta:{' '}
                <Link href="/servicos/exame-toxicologico-clt/sao-paulo"><strong>exame toxicológico para empresas, motoristas e CNH C, D e E</strong></Link>.
              </p>
            </>
          ),
        },
        {
          title: 'Onde fazer exame toxicológico em São Paulo com mais clareza',
          body: (
            <>
              <p>
                Em um mercado com muita página rasa, o diferencial está em responder rápido o que realmente importa: <strong>quem atende, quanto custa, se serve para empresa ou pessoa física e se cobre CNH C, D e E</strong>.
              </p>
              <p>
                Quando esses pontos aparecem cedo, a página melhora para o usuário e também para o SEO. O Google tende a interpretar melhor a intenção local e comercial da busca.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'Onde fazer exame toxicológico em São Paulo?',
          a: 'A SERMST atende em São Paulo com exame toxicológico para empresa e pessoa física, incluindo demandas ligadas à CNH C, D e E e rotinas ocupacionais com validade nacional.',
        },
        {
          q: 'A SERMST atende pessoa física para exame toxicológico?',
          a: 'Sim. Além do atendimento corporativo, a SERMST também atende pessoa física que precisa realizar o exame toxicológico ligado à CNH C, D ou E.',
        },
        {
          q: 'Onde ver o valor do exame toxicológico?',
          a: 'O preço de referência e os detalhes comerciais estão concentrados na página principal do serviço, para evitar informação solta e facilitar a decisão do usuário.',
        },
        {
          q: 'Essa página é a principal para contratar o exame?',
          a: 'Não. Esta página foi feita para responder à busca “onde fazer”. A contratação e os detalhes completos ficam na página principal do serviço.',
        },
        {
          q: 'Qual página devo acessar para solicitar atendimento?',
          a: 'O melhor caminho é acessar a página principal do exame toxicológico da SERMST, que concentra preço, público atendido, FAQ e contexto comercial do serviço.',
        },
      ]}
      sidebarTitle="Quer sair da dúvida e resolver o exame?"
      sidebarHook="Se a sua busca não é mais só “onde fazer”, e sim “quero atendimento com validade nacional para empresa ou pessoa física”, a página principal do serviço é o próximo passo certo."
      sidebarCtaLabel="Ir para a página principal"
      sidebarCtaHref="/servicos/exame-toxicologico-clt/sao-paulo"
      related={[
        { label: 'Página principal: exame toxicológico para CNH C, D e E', href: '/servicos/exame-toxicologico-clt/sao-paulo' },
        { label: 'Valor do exame toxicológico CNH', href: '/saude/valor-exame-toxicologico-cnh' },
        { label: 'ASO: quando emitir e como protege a empresa', href: '/saude/aso-atestado-saude-ocupacional' },
        { label: 'Clínica de exame admissional em São Paulo', href: '/saude/clinica-exame-admissional-sao-paulo' },
      ]}
      finalCta={{
        title: 'A busca era onde fazer. O próximo passo é escolher certo.',
        desc: 'A página principal do serviço concentra atendimento para empresa e pessoa física, preço de referência, CNH C, D e E e contexto completo do exame toxicológico.',
        label: 'Ver a página principal do exame',
        href: '/servicos/exame-toxicologico-clt/sao-paulo',
      }}
    />
  );
}
