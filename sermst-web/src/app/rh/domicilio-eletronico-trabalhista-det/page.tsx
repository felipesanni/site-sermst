import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'DET: o que e o Domicilio Eletronico Trabalhista e como evitar perdas de prazo | SERMST',
  description:
    'Entenda o que e o DET, para que serve o Domicilio Eletronico Trabalhista, quem precisa acompanhar e quais riscos surgem quando a empresa perde notificacoes do MTE e da SIT.',
  keywords: [
    'DET',
    'Domicilio Eletronico Trabalhista',
    'MTE',
    'Secretaria de Inspecao do Trabalho',
    'notificacao trabalhista',
    'prazo fiscalizacao trabalhista',
    'comunicacao oficial empregador governo',
  ],
  alternates: {
    canonical: 'https://sermst.com.br/rh/domicilio-eletronico-trabalhista-det',
  },
  openGraph: {
    title: 'DET: o que e o Domicilio Eletronico Trabalhista e como evitar perdas de prazo | SERMST',
    description:
      'Guia pratico sobre DET para empresas: comunicacoes da Inspecao do Trabalho, prazos, fiscalizacao, acesso e rotina de acompanhamento pelo RH.',
    url: 'https://sermst.com.br/rh/domicilio-eletronico-trabalhista-det',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function DomicilioEletronicoTrabalhistaPage() {
  return (
    <BlockbusterArticle
      hubLabel="RH e Departamento Pessoal"
      hubLabelShort="← Hub RH"
      hubHref="/rh"
      badgeText="Fiscalizacao e prazos digitais"
      pageUrl="https://sermst.com.br/rh/domicilio-eletronico-trabalhista-det"
      coverImage={{
        src: '/images/articles/exame-periodico.jpg',
        alt: 'Equipe administrativa acompanhando rotinas de eSocial e fiscalizacao trabalhista',
      }}
      author={{
        name: 'Luiz Cesar Sannino',
        jobTitle: 'Higienista Ocupacional · Tecnico em Seguranca do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-05-20',
        dateModified: '2026-05-20',
      }}
      readingTime="6 min"
      h1="DET: o que e o Domicilio Eletronico Trabalhista e por que sua empresa nao pode ignorar"
      intro="O DET e o canal oficial de comunicacao eletronica entre o governo e o empregador para atos da Inspecao do Trabalho. Quando a empresa deixa de acompanhar esse ambiente, o risco nao e so perder um aviso: e perder prazo de resposta, defesa, envio documental e controle sobre uma fiscalizacao."
      sections={[
        {
          title: 'O que e o DET na pratica',
          body: (
            <>
              <p>
                O <strong>Domicilio Eletronico Trabalhista (DET)</strong> e a plataforma digital usada pelo Ministerio do Trabalho e Emprego, por meio da Secretaria de Inspecao do Trabalho, para comunicar atos administrativos, intimacoes, avisos gerais e demandas documentais ao empregador.
              </p>
              <p>
                Em termos operacionais, isso significa que a empresa nao pode mais tratar fiscalizacao trabalhista como algo que so aparece por carta, telefone ou visita. O canal digital precisa entrar no fluxo real de acompanhamento do RH, do DP e da direcao.
              </p>
            </>
          ),
        },
        {
          title: 'Para que o DET serve',
          body: (
            <ul>
              <li><strong>Receber intimacoes e avisos da Inspecao do Trabalho.</strong> O empregador pode ser cientificado de atos administrativos e acoes fiscais diretamente pela plataforma.</li>
              <li><strong>Enviar documentacao eletronica.</strong> O DET tambem serve para entregar documentos exigidos em fiscalizacao e apresentar defesa ou recurso em processos administrativos.</li>
              <li><strong>Concentrar historico e acompanhamento.</strong> Em vez de tratar cada demanda de forma dispersa, a empresa passa a ter um ponto central de relacionamento institucional com a fiscalizacao trabalhista.</li>
            </ul>
          ),
        },
        {
          title: 'DET, MTE e SIT: como esse trio aparece nas buscas',
          body: (
            <>
              <p>
                Muitas empresas chegam a esse tema pesquisando por <strong>DET MTE</strong>, <strong>DET SIT</strong>, <strong>como acessar o DET</strong>, <strong>notificacao no DET</strong> ou <strong>prazo no Domicilio Eletronico Trabalhista</strong>. Todas essas buscas apontam para o mesmo problema de fundo: o empregador precisa entender como o canal oficial do governo impacta sua rotina real.
              </p>
              <p>
                Quando o DET nao entra na agenda de acompanhamento, o risco deixa de ser teorico. Ele passa a ser prazo perdido, documento fora de hora, dificuldade de resposta e exposicao desnecessaria em fiscalizacao.
              </p>
            </>
          ),
        },
        {
          title: 'Por que o DET importa para empresas com RH e SST desorganizados',
          body: (
            <>
              <p>
                Na teoria, o DET e um canal digital. Na pratica, ele e um <strong>ponto de risco de prazo</strong>. Empresas que nao definem responsavel, rotina de leitura e procedimento de resposta podem descobrir tarde demais que ja havia uma solicitacao aberta, uma cobranca de documento ou uma janela curta para manifestacao.
              </p>
              <p>
                Isso conversa diretamente com SST, eSocial, ASO, PGR, PCMSO e laudos. Se a fiscalizacao pedir prova documental e a empresa nao souber onde esta cada peca, o problema deixa de ser so acesso ao DET e vira exposicao operacional.
              </p>
            </>
          ),
        },
        {
          title: 'Quem deve acompanhar o DET dentro da empresa',
          body: (
            <ol>
              <li><strong>RH ou DP</strong>, quando a rotina da empresa concentra obrigacoes trabalhistas e eSocial nessas areas.</li>
              <li><strong>Compliance ou juridico trabalhista</strong>, quando ha maior volume de notificacoes e risco de defesa administrativa.</li>
              <li><strong>Operacao de SST</strong>, quando a empresa ja sofre com documentos espalhados, eventos atrasados e inconsistencia tecnica.</li>
            </ol>
          ),
        },
        {
          title: 'O erro mais comum: achar que acessar uma vez resolve',
          body: (
            <>
              <p>
                O maior erro e cadastrar o acesso e considerar o assunto encerrado. O DET precisa de processo: responsavel definido, frequencia de verificacao, trilha de encaminhamento interno e base documental pronta para responder rapido.
              </p>
              <p>
                Quando a empresa depende de memoria, mensagens soltas ou tentativa de descobrir quem cuida disso, o DET vira mais um gargalo em vez de protecao.
              </p>
            </>
          ),
        },
        {
          title: 'Como a SERMST ajuda quando o DET se cruza com SST',
          body: (
            <>
              <p>
                A SERMST nao substitui o acesso institucional do empregador ao DET, mas ajuda a empresa a organizar o que normalmente e cobrado ou verificado em rotina trabalhista: ASOs, coerencia de PCMSO, PGR, laudos, eventos SST do eSocial e trilha documental para auditoria.
              </p>
              <p>
                Se o problema nao e so entrar no portal, mas <strong>ter lastro tecnico para responder bem</strong>, ai a conversa deixa de ser tecnologica e passa a ser de compliance real.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        { q: 'O que significa DET?', a: 'DET significa Domicilio Eletronico Trabalhista, plataforma oficial usada para comunicacao entre o empregador e a Inspecao do Trabalho.' },
        { q: 'DET e a mesma coisa que eSocial?', a: 'Nao. O DET e o canal oficial de comunicacao, notificacao e tramitacao com a Inspecao do Trabalho. O eSocial continua sendo o ambiente de envio dos eventos trabalhistas, previdenciarios e de SST.' },
        { q: 'Quem precisa acompanhar o DET?', a: 'Empregadores que tenham relacao trabalhista e precisem manter rotina de comunicacao institucional com a fiscalizacao devem acompanhar o DET e definir um responsavel interno pelo monitoramento.' },
        { q: 'O que pode chegar no DET?', a: 'O empregador pode receber avisos, intimacoes, solicitacoes documentais, comunicacoes da Inspecao do Trabalho e outras demandas formais ligadas a fiscalizacao trabalhista.' },
        { q: 'Perder prazo no DET pode gerar problema?', a: 'Sim. O risco principal e perder tempo de resposta, entrega documental, manifestacao ou defesa em uma demanda ligada a fiscalizacao trabalhista.' },
        { q: 'O DET tem relacao com SST?', a: 'Tem relacao indireta e operacional. Quando a empresa precisa apresentar documentos ou sustentar rotinas de saude e seguranca, o DET pode ser a via de comunicacao formal, enquanto SST fornece a base tecnica da resposta.' },
      ]}
      sidebarTitle="Sua empresa ja definiu quem acompanha o DET?"
      sidebarHook="Se o DET cair no vazio entre RH, DP, juridico e SST, qualquer notificacao vira risco de prazo. A SERMST ajuda a organizar a base documental e o fluxo de resposta."
      sidebarCtaLabel="Falar sobre eSocial e SST"
      sidebarCtaHref="/servicos/gestao-esocial-s2220-s2240"
      related={[
        { label: 'Gestao completa de eSocial SST', href: '/servicos/gestao-esocial-s2220-s2240' },
        { label: 'DIR: quando a empresa pode declarar inexistencia de risco', href: '/rh/declaracao-inexistencia-risco-dir' },
        { label: 'Como evitar multas do eSocial S-2220 e S-2240', href: '/dicionario/multa-esocial-s2220' },
        { label: 'Calculadora de risco por CNPJ', href: '/rh/calculadora-cnae-grau-de-risco' },
      ]}
      finalCta={{
        title: 'DET sem processo vira risco silencioso',
        desc: 'Se a empresa precisa organizar eSocial, SST e documentacao para responder melhor a fiscalizacoes e notificacoes, a SERMST ajuda a montar um fluxo mais seguro.',
        label: 'Quero revisar meu fluxo de SST',
        href: '/contato',
      }}
    />
  );
}
