import type { Metadata } from 'next';
import Link from 'next/link';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Exame toxicológico em São Paulo Centro | SERMST',
  description:
    'Saiba onde fazer exame toxicológico em São Paulo Centro, no Largo do Paissandu, com atendimento para empresa e pessoa física, validade nacional e suporte para CNH C, D e E.',
  robots: 'index, follow',
  alternates: { canonical: 'https://sermst.com.br/saude/onde-fazer-exame-toxicologico-sao-paulo' },
  openGraph: {
    title: 'Exame toxicológico em São Paulo Centro | SERMST',
    description:
      'Guia prático para quem busca onde fazer exame toxicológico em São Paulo, inclusive perto da Sé, República e região central, com foco em CNH C, D e E, empresa e pessoa física.',
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
      badgeText="Guia local"
      pageUrl="https://sermst.com.br/saude/onde-fazer-exame-toxicologico-sao-paulo"
      coverImage={{ src: '/images/articles/exame-periodico.jpg', alt: 'Atendimento de exame toxicológico em clínica ocupacional em São Paulo' }}
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-05-28',
        dateModified: '2026-06-09',
      }}
      h1="Onde fazer exame toxicológico em São Paulo: centro, acesso e validade do atendimento"
      intro="Quem busca onde fazer exame toxicológico em São Paulo geralmente precisa resolver isso sem perda de tempo. Pode ser renovação da CNH C, D ou E, admissão de motorista, rotina da empresa ou simplesmente a dúvida sobre onde encontrar atendimento confiável na região central. Nessa hora, o que pesa não é só o endereço: é saber se a clínica atende empresa e pessoa física, se o laudo serve para a finalidade certa e se o acesso é simples."
      sections={[
        {
          title: 'Mais do que o endereço, importa sair com a demanda resolvida',
          body: (
            <>
              <p>
                A pergunta <strong>onde fazer exame toxicológico</strong> quase sempre vem acompanhada de outras: a clínica atende empresa e pessoa física? O exame serve para CNH C, D e E? O laudo tem validade nacional? O atendimento ajuda quem está em admissão, demissão ou renovação?
              </p>
              <p>
                Quando isso está claro, a escolha fica simples. O problema é que muita gente ainda precisa entrar em contato só para confirmar informações básicas que já poderiam estar visíveis.
              </p>
            </>
          ),
        },
        {
          title: 'Para muita gente, resolver no centro de São Paulo faz mais sentido',
          body: (
            <>
              <p>
                Em São Paulo, muita gente tenta resolver esse exame em uma região com acesso mais simples. Por isso, buscas por <strong>exame toxicológico perto de mim</strong> costumam apontar para o <strong>Centro</strong>, perto da <strong>Sé</strong>, da <strong>República</strong>, do <strong>Anhangabaú</strong> ou de pontos bem servidos por metrô e ônibus.
              </p>
              <p>
                A SERMST atende no <strong>Largo do Paissandu, 72, 3º andar, Centro Histórico</strong>. Isso facilita tanto para a empresa quanto para a pessoa física que quer resolver o exame com deslocamento mais simples pela região central.
              </p>
            </>
          ),
        },
        {
          title: 'Quem costuma precisar desse atendimento',
          body: (
            <ul>
              <li><strong>Pessoa física com CNH C, D ou E</strong> que precisa regularizar exigência ligada à habilitação.</li>
              <li><strong>Empresa com motoristas</strong> que precisa organizar admissão, demissão ou rotina ocupacional.</li>
              <li><strong>RH ou operação logística</strong> tentando evitar atraso de escala, contratação travada ou ruído documental.</li>
              <li><strong>Pessoa comparando preço, endereço e confiabilidade</strong> antes de decidir onde fazer o exame toxicológico em São Paulo.</li>
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
              <li><strong>Preço transparente.</strong> Clínica que exibe o valor com clareza facilita a decisão.</li>
              <li><strong>Localização útil de verdade.</strong> Endereço central e fácil acesso fazem diferença para quem busca exame toxicológico perto de mim.</li>
            </ol>
          ),
        },
        {
          title: 'Quando a SERMST passa a ser o próximo passo natural',
          body: (
            <>
              <p>
                A SERMST atende <strong>empresa e pessoa física</strong> em São Paulo para exame toxicológico, com apoio tanto para rotinas ocupacionais quanto para demandas ligadas à <strong>CNH C, D e E</strong>.
              </p>
              <p>
                Para quem já quer avançar de verdade, a página principal do serviço reúne o que falta para decidir: valor de referência, público atendido e o contexto certo para usar o exame sem ruído.
              </p>
              <p>
                Se a sua busca já saiu do “onde fazer” e entrou no “quero resolver isso agora”, a página mais importante é esta:{' '}
                <Link href="/servicos/exame-toxicologico-clt/sao-paulo"><strong>exame toxicológico para empresas, motoristas e CNH C, D e E</strong></Link>.
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
          q: 'Onde fazer exame toxicológico perto de mim no centro de São Paulo?',
          a: 'A SERMST atende no Largo do Paissandu, 72, no Centro Histórico de São Paulo, com acesso prático para quem busca exame toxicológico perto da Sé, República, Anhangabaú e região central.',
        },
        {
          q: 'A SERMST atende pessoa física para exame toxicológico?',
          a: 'Sim. Além do atendimento corporativo, a SERMST também atende pessoa física que precisa realizar o exame toxicológico ligado à CNH C, D ou E.',
        },
        {
          q: 'Qual o valor do exame toxicológico na SERMST?',
          a: 'O preço de referência informado pela SERMST para realização do exame toxicológico é R$ 200,00.',
        },
        {
          q: 'Posso contratar o exame toxicológico diretamente pela SERMST?',
          a: 'Sim. A SERMST atende tanto empresa quanto pessoa física para exame toxicológico em São Paulo. Para avançar, você pode acessar a página principal do serviço ou falar diretamente com a equipe.',
        },
      ]}
      sidebarTitle="Quer resolver o exame sem perder tempo?"
      sidebarHook="Se você já sabe que precisa de atendimento no centro de São Paulo, com validade nacional e suporte para empresa ou pessoa física, a página principal do serviço mostra o caminho completo."
      sidebarCtaLabel="Ir para a página principal"
      sidebarCtaHref="/servicos/exame-toxicologico-clt/sao-paulo"
      related={[
        { label: 'Página principal: exame toxicológico para CNH C, D e E', href: '/servicos/exame-toxicologico-clt/sao-paulo' },
        { label: 'Valor do exame toxicológico CNH', href: '/saude/valor-exame-toxicologico-cnh' },
        { label: 'ASO: quando emitir e como protege a empresa', href: '/saude/aso-atestado-saude-ocupacional' },
        { label: 'Clínica de exame admissional em São Paulo', href: '/saude/clinica-exame-admissional-sao-paulo' },
      ]}
      finalCta={{
        title: 'Se o local já faz sentido, agora vale olhar o atendimento completo.',
        desc: 'Na página principal do serviço, você encontra atendimento para empresa e pessoa física, valor de referência, CNH C, D e E e o contexto completo do exame toxicológico no centro de São Paulo.',
        label: 'Ver a página principal do exame',
        href: '/servicos/exame-toxicologico-clt/sao-paulo',
      }}
    />
  );
}
