import type { Metadata } from 'next';
import Link from 'next/link';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Exame toxicológico em São Paulo Centro | SERMST',
  description:
    'Onde fazer exame toxicológico em São Paulo Centro, no Largo do Paissandu: empresa e pessoa física, validade nacional e suporte para CNH C, D e E.',
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
      hubLabel="Saúde Ocupacional"
      hubLabelShort="← Saúde Ocupacional"
      hubHref="/saude"
      badgeText="Guia local"
      pageUrl="https://sermst.com.br/saude/onde-fazer-exame-toxicologico-sao-paulo"
      coverImage={{ src: '/images/articles/exame-periodico.jpg', alt: 'Atendimento de exame toxicológico em clínica ocupacional em São Paulo' }}
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-05-28',
        dateModified: '2026-07-07',
      }}
      h1="Onde fazer exame toxicológico em São Paulo: centro, acesso e validade do atendimento"
      intro="Quem busca onde fazer exame toxicológico em São Paulo geralmente precisa resolver isso sem perda de tempo. Pode ser renovação da CNH C, D ou E, admissão de motorista, rotina da empresa ou simplesmente a dúvida sobre onde encontrar atendimento confiável na região central. Nessa hora, o que pesa não é só o endereço: é saber se a clínica atende empresa e pessoa física, se o laudo serve para a finalidade certa e se o acesso é simples."
      quickAnswer={
        <p>
          Para quem procura <strong>onde fazer exame toxicológico em São Paulo</strong>, a SERMST atende
          no <strong>Largo do Paissandu, 72, 3º andar, Centro Histórico</strong>, com suporte para
          <strong> empresa e pessoa física</strong>, inclusive em demandas ligadas à <strong>CNH C, D e
          E</strong>. O ponto principal não é só o endereço: é confirmar se o exame serve para a
          finalidade certa e se o laudo tem validade para o seu caso.
        </p>
      }
      showTableOfContents
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
          title: 'Atendimento da SERMST em São Paulo',
          body: (
            <>
              <p>
                A SERMST atende <strong>empresa e pessoa física</strong> em São Paulo para exame toxicológico, com apoio tanto para rotinas ocupacionais quanto para demandas ligadas à <strong>CNH C, D e E</strong>.
              </p>
              <p>
                Antes de agendar, confirme a finalidade do exame, os documentos exigidos, o preço e o prazo estimado para o resultado.
              </p>
              <p>
                Os detalhes do atendimento estão na página de{' '}
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
          a: 'Sim. A SERMST atende empresas e pessoas físicas em São Paulo. Fale com a equipe para informar a finalidade do exame, confirmar os documentos e solicitar o agendamento.',
        },
      ]}
      sidebarTitle="Precisa agendar o exame?"
      sidebarHook="Consulte os documentos, a finalidade, o valor de referência e as orientações para a coleta no centro de São Paulo."
      sidebarCtaLabel="Ver detalhes do atendimento"
      sidebarCtaHref="/servicos/exame-toxicologico-clt/sao-paulo"
      related={[
        { label: 'Exame toxicológico para CNH C, D e E', href: '/servicos/exame-toxicologico-clt/sao-paulo' },
        { label: 'O que é exame toxicológico: como funciona e quem precisa', href: '/saude/o-que-e-exame-toxicologico' },
        { label: 'Valor do exame toxicológico CNH', href: '/saude/valor-exame-toxicologico-cnh' },
        { label: 'ASO: quando emitir e o que o documento registra', href: '/saude/aso-atestado-saude-ocupacional' },
      ]}
      finalCta={{
        title: 'Consulte as informações antes de agendar.',
        desc: 'Veja quem pode ser atendido, a finalidade do exame, o valor de referência e as orientações para a coleta no centro de São Paulo.',
        label: 'Ver detalhes do exame',
        href: '/servicos/exame-toxicologico-clt/sao-paulo',
      }}
    />
  );
}
