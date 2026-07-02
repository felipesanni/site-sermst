import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-6: EPI, obrigacoes e como cumprir | SERMST',
  description:
    'Entenda a NR-6: o que e EPI, obrigacoes da empresa, CA, ficha de entrega, treinamento, fiscalizacao de uso e riscos trabalhistas.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-06-epi' },
  openGraph: {
    title: 'NR-6: EPI, obrigacoes e como cumprir | SERMST',
    description:
      'Guia pratico da NR-6 para empresas: fornecimento gratuito, CA valido, treinamento, registro de entrega e conexao com PGR e SST.',
    url: 'https://sermst.com.br/normas/nr-06-epi',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function NR06EpiPage() {
  return (
    <BlockbusterArticle
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="Voltar para normas"
      hubHref="/normas"
      pageUrl="https://sermst.com.br/normas/nr-06-epi"
      badgeText="NR-6"
      coverImage={{ src: '/images/site/safety-equipment.jpg', alt: 'Equipamentos de protecao individual usados para cumprir a NR-6' }}
      author={{
        name: 'Luiz Cesar Sannino',
        jobTitle: 'Higienista Ocupacional | Tecnico em Seguranca do Trabalho | CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-07-02',
        dateModified: '2026-07-02',
      }}
      h1="NR-6: o que e, quem precisa cumprir e como funciona o uso de EPIs"
      intro="A NR-6 regula os Equipamentos de Protecao Individual. Para a empresa, cumprir a norma nao e apenas comprar luva, botina ou protetor auricular: e escolher EPI adequado ao risco, treinar, registrar entrega, fiscalizar uso e manter evidencia para fiscalizacao e defesa trabalhista."
      quickAnswer={
        <p>
          A NR-6 obriga a empresa a fornecer gratuitamente EPI adequado ao risco, com Certificado de Aprovacao valido, orientar o trabalhador, registrar entrega e exigir uso correto quando a protecao coletiva nao elimina totalmente a exposicao.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'O que e a NR-6',
          body: (
            <>
              <p>
                A NR-6 e a Norma Regulamentadora que trata dos Equipamentos de Protecao Individual. Ela define o que e EPI, quais responsabilidades cabem ao empregador, quais deveres cabem ao trabalhador e como a empresa deve comprovar que protegeu a equipe.
              </p>
              <p>
                EPI e o dispositivo de uso individual usado para proteger o trabalhador contra riscos ocupacionais. Capacete, luva, botina, protetor auricular, respirador, oculos de protecao, mascara, avental e cinturão de seguranca sao exemplos comuns.
              </p>
            </>
          ),
        },
        {
          title: 'Quando o EPI e obrigatorio',
          body: (
            <>
              <p>
                O EPI entra quando os riscos da atividade nao foram eliminados por medidas coletivas, administrativas ou de engenharia. A empresa deve avaliar o ambiente no PGR, identificar exposicoes e definir quais equipamentos sao necessarios para cada funcao.
              </p>
              <p>
                O erro comum e escolher EPI por costume, sem ligar o equipamento ao risco real. Em fiscalizacao ou processo trabalhista, a pergunta tecnica nao e apenas se houve entrega, mas se o EPI era adequado e eficaz para aquela exposicao.
              </p>
            </>
          ),
        },
        {
          title: 'Obrigacoes da empresa na NR-6',
          body: (
            <ul>
              <li><strong>Fornecer gratuitamente</strong> o EPI adequado ao risco e em perfeito estado.</li>
              <li><strong>Exigir e fiscalizar o uso</strong>, sem tratar a ficha de entrega como protecao suficiente.</li>
              <li><strong>Orientar e treinar</strong> o trabalhador sobre uso, guarda, higienizacao e limitacoes.</li>
              <li><strong>Substituir imediatamente</strong> equipamento danificado, vencido ou inadequado.</li>
              <li><strong>Manter registro de entrega</strong> com identificacao do trabalhador, equipamento, CA e data.</li>
            </ul>
          ),
        },
        {
          title: 'O que e CA do EPI',
          body: (
            <>
              <p>
                CA significa Certificado de Aprovacao. Ele indica que o equipamento foi aprovado para uso como EPI no Brasil. Na pratica, a empresa deve conferir se o CA esta valido e se o equipamento corresponde ao risco da funcao.
              </p>
              <p>
                Entregar EPI sem CA valido, ou com CA inadequado para a exposicao, fragiliza a defesa da empresa em caso de acidente, insalubridade ou discussao sobre aposentadoria especial.
              </p>
            </>
          ),
        },
        {
          title: 'Ficha de entrega de EPI resolve tudo?',
          body: (
            <>
              <p>
                Nao. A ficha de entrega e uma evidencia importante, mas nao prova sozinha que a empresa cumpriu a NR-6. E preciso demonstrar adequacao tecnica, treinamento, fiscalizacao e substituicao quando necessario.
              </p>
              <p>
                Em muitos processos, a empresa ate apresenta fichas assinadas, mas perde forca porque nao consegue provar treinamento, CA, periodicidade de troca ou fiscalizacao real do uso.
              </p>
            </>
          ),
        },
        {
          title: 'Como a NR-6 se conecta ao PGR, PCMSO e LTCAT',
          body: (
            <>
              <p>
                A escolha de EPI deve conversar com o PGR, porque o PGR identifica riscos e medidas de controle. Tambem pode impactar PCMSO, ASO, LTCAT e eSocial quando ha exposicao a agentes ocupacionais.
              </p>
              <p>
                Se os documentos nao conversam entre si, a empresa fica exposta: o PGR diz uma coisa, o PCMSO pede outra, a ficha de EPI registra um terceiro caminho e o trabalhador fica sem protecao tecnicamente defensavel.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'EPI precisa ser fornecido gratuitamente?',
          a: 'Sim. O empregador deve fornecer o EPI adequado ao risco sem custo para o trabalhador.',
        },
        {
          q: 'Ficha de EPI assinada protege a empresa?',
          a: 'Ajuda, mas nao basta. A empresa tambem precisa comprovar adequacao do equipamento, CA valido, treinamento, fiscalizacao e substituicao.',
        },
        {
          q: 'Quando usar EPI e quando usar EPC?',
          a: 'A protecao coletiva deve ser priorizada sempre que possivel. O EPI entra quando o risco nao foi eliminado por medidas coletivas ou administrativas.',
        },
        {
          q: 'Quem define qual EPI usar?',
          a: 'A definicao deve partir da avaliacao de riscos, normalmente conectada ao PGR e a orientacao tecnica de seguranca do trabalho.',
        },
      ]}
      sidebarTitle="Sua empresa controla EPI de verdade?"
      sidebarHook="Ficha assinada sem PGR coerente, CA valido e fiscalizacao de uso deixa a empresa vulneravel. A SERMST ajuda a revisar a rotina de EPI dentro da gestao de SST."
      sidebarCtaLabel="Revisar rotina de EPI"
      related={[
        { label: 'PGR NR-01 e gerenciamento de riscos', href: '/servicos/pgr-nr01-gerenciamento-riscos' },
        { label: 'Empresa de seguranca do trabalho', href: '/servicos/empresa-seguranca-do-trabalho' },
        { label: 'NR-01: PGR atualizado', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'Treinamentos de NRs', href: '/servicos/treinamentos-nrs-cipa-brigada' },
        { label: 'O que sao EPIs', href: '/saude/o-que-sao-epis' },
      ]}
    />
  );
}
