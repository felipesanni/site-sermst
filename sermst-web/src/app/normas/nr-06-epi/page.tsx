import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-6: EPI, obrigações e como cumprir | SERMST',
  description:
    'Entenda a NR-6: o que é EPI, obrigações da empresa, CA, ficha de entrega, treinamento, fiscalização de uso e riscos trabalhistas.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-06-epi' },
  openGraph: {
    title: 'NR-6: EPI, obrigações e como cumprir | SERMST',
    description:
      'Guia prático da NR-6 para empresas: fornecimento gratuito, CA válido, treinamento, registro de entrega e conexão com PGR e SST.',
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
      coverImage={{ src: '/images/site/safety-equipment.jpg', alt: 'Equipamentos de proteção individual usados para cumprir a NR-6' }}
      author={{
        name: 'Luiz Cesar Sannino',
        jobTitle: 'Higienista Ocupacional | Técnico em Segurança do Trabalho | CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-07-02',
        dateModified: '2026-07-02',
      }}
      readingTime="9 min"
      h1="NR-6: o que é, quem precisa cumprir e como funciona o uso de EPIs"
      intro="A NR-6 regula os Equipamentos de Proteção Individual. Para a empresa, cumprir a norma não é apenas comprar luva, botina ou protetor auricular: é escolher EPI adequado ao risco, treinar, registrar entrega, fiscalizar uso e manter evidência para fiscalização e defesa trabalhista."
      quickAnswer={
        <p>
          A NR-6 obriga a empresa a fornecer gratuitamente EPI adequado ao risco, com Certificado de Aprovação válido, orientar o trabalhador, registrar entrega e exigir uso correto quando a proteção coletiva não elimina totalmente a exposição.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'O que é a NR-6',
          body: (
            <>
              <p>
                A NR-6 é a Norma Regulamentadora que trata dos Equipamentos de Proteção Individual. Ela define o que é EPI, quais responsabilidades cabem ao empregador, quais deveres cabem ao trabalhador e como a empresa deve comprovar que protegeu a equipe.
              </p>
              <p>
                EPI é o dispositivo de uso individual usado para proteger o trabalhador contra riscos ocupacionais. Capacete, luva, botina, protetor auricular, respirador, óculos de proteção, máscara, avental e cinturão de segurança são exemplos comuns.
              </p>
            </>
          ),
        },
        {
          title: 'Quando o EPI é obrigatório',
          body: (
            <>
              <p>
                O EPI entra quando os riscos da atividade não foram eliminados por medidas coletivas, administrativas ou de engenharia. A empresa deve avaliar o ambiente no PGR, identificar exposições e definir quais equipamentos são necessários para cada função.
              </p>
              <p>
                O erro comum é escolher EPI por costume, sem ligar o equipamento ao risco real. Em fiscalização ou processo trabalhista, a pergunta técnica não é apenas se houve entrega, mas se o EPI era adequado e eficaz para aquela exposição.
              </p>
            </>
          ),
        },
        {
          title: 'Obrigações da empresa na NR-6',
          body: (
            <ul>
              <li><strong>Fornecer gratuitamente</strong> o EPI adequado ao risco e em perfeito estado.</li>
              <li><strong>Exigir e fiscalizar o uso</strong>, sem tratar a ficha de entrega como proteção suficiente.</li>
              <li><strong>Orientar e treinar</strong> o trabalhador sobre uso, guarda, higienização e limitações.</li>
              <li><strong>Substituir imediatamente</strong> equipamento danificado, vencido ou inadequado.</li>
              <li><strong>Manter registro de entrega</strong> com identificação do trabalhador, equipamento, CA e data.</li>
            </ul>
          ),
        },
        {
          title: 'EPI, EPC e hierarquia de controle',
          body: (
            <>
              <p>
                Um ponto que muitas empresas confundem é achar que entregar EPI encerra a obrigação de segurança. Na gestão de SST, a empresa deve priorizar medidas que eliminem ou reduzam o risco na origem, como proteção coletiva, enclausuramento, ventilação, sinalização, procedimento e organização do trabalho.
              </p>
              <p>
                O EPI entra como barreira individual quando o risco ainda existe. Em fiscalização ou perícia, a pergunta costuma ser: a empresa tentou controlar o risco antes de depender apenas do trabalhador usando o equipamento?
              </p>
            </>
          ),
        },
        {
          title: 'Deveres do trabalhador no uso de EPI',
          body: (
            <>
              <p>
                O trabalhador também tem deveres: usar o EPI conforme orientação recebida, conservar o equipamento, comunicar dano ou perda e seguir as instruções de segurança. Mas a empresa não pode transferir toda a responsabilidade para ele.
              </p>
              <p>
                Para cobrar o uso corretamente, a empresa precisa oferecer treinamento, manter registros, fiscalizar e definir um procedimento claro para troca, recusa ou mau uso.
              </p>
            </>
          ),
        },
        {
          title: 'Quem precisa cumprir a NR-6',
          body: (
            <>
              <p>
                A NR-6 se aplica a empresas que possuem trabalhadores expostos a riscos que exigem Equipamento de Proteção Individual. Isso pode acontecer em indústria, construção civil, logística, manutenção, limpeza, saúde, laboratório, alimentação, comércio técnico e atividades administrativas com exposição específica.
              </p>
              <p>
                O ponto central não é o ramo da empresa isoladamente. É a presença de risco ocupacional. Se a atividade exige proteção individual, a empresa precisa demonstrar critério técnico para escolher, entregar, treinar e fiscalizar o uso do EPI.
              </p>
            </>
          ),
        },
        {
          title: 'Documentos e evidências que fortalecem a empresa',
          body: (
            <ul>
              <li>PGR com identificação dos riscos por função e medidas de controle.</li>
              <li>Ficha de entrega de EPI com CA, data, quantidade e assinatura.</li>
              <li>Registro de treinamento sobre uso, guarda, conservação e limitação do EPI.</li>
              <li>Comprovante de substituição periódica ou troca por dano, perda ou vencimento.</li>
              <li>Procedimento interno para fiscalização de uso e registro de recusa quando houver.</li>
              <li>Coerência entre PGR, LTCAT, PCMSO, ASO e eventos de SST no eSocial.</li>
            </ul>
          ),
        },
        {
          title: 'Erros comuns que geram passivo trabalhista',
          body: (
            <ol>
              <li>Comprar EPI sem conferir se o CA está válido e adequado ao risco.</li>
              <li>Entregar EPI sem treinar o trabalhador.</li>
              <li>Guardar ficha assinada, mas não fiscalizar uso real.</li>
              <li>Usar o mesmo EPI para funções com exposições diferentes.</li>
              <li>Não revisar EPI quando o PGR muda ou quando há acidente/quase acidente.</li>
              <li>Tratar EPI como substituto automático de proteção coletiva.</li>
            </ol>
          ),
        },
        {
          title: 'O que é CA do EPI',
          body: (
            <>
              <p>
                CA significa Certificado de Aprovação. Ele indica que o equipamento foi aprovado para uso como EPI no Brasil. Na prática, a empresa deve conferir se o CA está válido e se o equipamento corresponde ao risco da função.
              </p>
              <p>
                Entregar EPI sem CA válido, ou com CA inadequado para a exposição, fragiliza a defesa da empresa em caso de acidente, insalubridade ou discussão sobre aposentadoria especial.
              </p>
            </>
          ),
        },
        {
          title: 'Ficha de entrega de EPI resolve tudo?',
          body: (
            <>
              <p>
                Não. A ficha de entrega é uma evidência importante, mas não prova sozinha que a empresa cumpriu a NR-6. É preciso demonstrar adequação técnica, treinamento, fiscalização e substituição quando necessário.
              </p>
              <p>
                Em muitos processos, a empresa até apresenta fichas assinadas, mas perde força porque não consegue provar treinamento, CA, periodicidade de troca ou fiscalização real do uso.
              </p>
            </>
          ),
        },
        {
          title: 'Fiscalização e multas por falha na NR-6',
          body: (
            <>
              <p>
                Em uma fiscalização, o auditor pode pedir muito mais do que a nota fiscal da compra dos equipamentos. Normalmente a análise envolve PGR, ficha de entrega, CA, treinamento, evidência de substituição e coerência entre risco identificado e EPI fornecido.
              </p>
              <p>
                Quando há acidente, doença ocupacional ou pedido de adicional de insalubridade, a falha de NR-6 também aparece em perícia trabalhista. Nesse cenário, ficha assinada sem controle técnico costuma ter pouco peso.
              </p>
            </>
          ),
        },
        {
          title: 'Como a NR-6 se conecta ao PGR, PCMSO e LTCAT',
          body: (
            <>
              <p>
                A escolha de EPI deve conversar com o PGR, porque o PGR identifica riscos e medidas de controle. Também pode impactar PCMSO, ASO, LTCAT e eSocial quando há exposição a agentes ocupacionais.
              </p>
              <p>
                Se os documentos não conversam entre si, a empresa fica exposta: o PGR diz uma coisa, o PCMSO pede outra, a ficha de EPI registra um terceiro caminho e a proteção do trabalhador perde coerência técnica.
              </p>
            </>
          ),
        },
        {
          title: 'Checklist rápido para revisar EPI na empresa',
          body: (
            <p>
              Antes de uma fiscalização ou processo trabalhista, confira se cada função possui risco mapeado, EPI definido tecnicamente, CA válido, ficha de entrega, treinamento, rotina de troca e evidência de fiscalização. Se uma dessas peças falta, a empresa pode até ter comprado EPI, mas ainda não consegue provar gestão adequada de proteção individual.
            </p>
          ),
        },
        {
          title: 'Como a SERMST ajuda na adequação de EPI',
          body: (
            <p>
              A SERMST pode apoiar a empresa conectando PGR, LTCAT, PCMSO, treinamentos e rotina de EPI. A ideia não é apenas criar ficha de entrega, mas montar uma cadeia de evidências: risco identificado, equipamento adequado, trabalhador orientado, uso fiscalizado e documento pronto para auditoria, fiscalização ou defesa trabalhista.
            </p>
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
          a: 'Ajuda, mas não basta. A empresa também precisa comprovar adequação do equipamento, CA válido, treinamento, fiscalização e substituição.',
        },
        {
          q: 'Quando usar EPI e quando usar EPC?',
          a: 'A proteção coletiva deve ser priorizada sempre que possível. O EPI entra quando o risco não foi eliminado por medidas coletivas ou administrativas.',
        },
        {
          q: 'Quem define qual EPI usar?',
          a: 'A definição deve partir da avaliação de riscos, normalmente conectada ao PGR e à orientação técnica de segurança do trabalho.',
        },
        {
          q: 'EPI elimina adicional de insalubridade?',
          a: 'Não automaticamente. A neutralização depende de adequação técnica, uso efetivo, fiscalização, conservação e avaliação do agente de risco no caso concreto.',
        },
        {
          q: 'Preciso guardar ficha de EPI por quanto tempo?',
          a: 'A empresa deve manter evidências organizadas durante todo o período em que possam ser necessárias para fiscalização, defesa trabalhista, previdenciária ou comprovação histórica de exposição.',
        },
        {
          q: 'O trabalhador pode se recusar a usar EPI?',
          a: 'A empresa deve orientar, treinar, fiscalizar e registrar recusas. Recusa de uso precisa ser tratada como falha operacional e disciplinar, não apenas como problema individual.',
        },
      ]}
      maxFaqItems={8}
      sidebarTitle="Sua empresa controla EPI de verdade?"
      sidebarHook="Ficha assinada sem PGR coerente, CA válido e fiscalização de uso deixa a empresa vulnerável. A SERMST ajuda a revisar a rotina de EPI dentro da gestão de SST."
      sidebarCtaLabel="Revisar rotina de EPI"
      related={[
        { label: 'PGR NR-01 e gerenciamento de riscos', href: '/servicos/pgr-nr01-gerenciamento-riscos' },
        { label: 'Empresa de segurança do trabalho', href: '/servicos/empresa-seguranca-do-trabalho' },
        { label: 'NR-01: PGR atualizado', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'Treinamentos de NRs', href: '/servicos/treinamentos-nrs-cipa-brigada' },
        { label: 'O que são EPIs', href: '/saude/o-que-sao-epis' },
      ]}
    />
  );
}
