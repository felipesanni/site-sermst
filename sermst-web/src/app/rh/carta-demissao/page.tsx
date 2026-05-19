import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Como fazer uma carta de demissão: modelo, cuidados e passivos a evitar | SERMST',
  description:
    'A carta de rescisão é peça jurídica. O conteúdo dela define obrigações trabalhistas, abre janela para passivo e fica registrada no eSocial. Veja como redigir corretamente.',
  alternates: { canonical: 'https://sermst.com.br/rh/carta-demissão' },
  robots: 'noindex, follow',
  openGraph: {
    title: 'Como fazer uma carta de demissão: modelo, cuidados e passivos a evitar | SERMST',
    description:
      'Saiba como redigir uma carta de demissão corretamente, quais elementos são obrigatórios, quando usar carta de demissão por justa causa e como evitar passivo trabalhista.',
    url: 'https://sermst.com.br/rh/carta-demissão',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function CartaDemissãoPage() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/site/b2b-partnership.jpg", alt: "Profissional de RH formalizando desligamento com suporte jurídico trabalhista" }}
      hubLabel="Hub de RH e Departamento Pessoal"
      hubLabelShort="← Hub de RH e DP"
      hubHref="/rh"
      pageUrl="https://sermst.com.br/rh/carta-demissão"
      author={{
        name: 'Felipe Sannino',
        jobTitle: 'Advogado — Direito do Trabalho e SST · OAB/SP 430.824',
        url: 'https://sermst.com.br/equipe/felipe-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-05-01',
      }}

      h1="Como fazer uma carta de demissão: o que escrever é o que evitar"
      intro="A carta de rescisão é peça jurídica. O conteúdo define obrigações, abre porta para passivo e fica registrada no eSocial. Veja como redigir certo — para quem está sendo demitido e para quem está demitindo."
      sections={[
        {
          title: 'Carta de demissão é diferente de carta de pedido de demissão',
          body: (
            <>
              <p>
                Confusão comum. Os dois documentos têm efeitos jurídicos opostos:
              </p>
              <ul>
                <li><strong>Carta de pedido de demissão</strong> — escrita pelo <em>empregado</em> que pede para sair. Empresa não paga aviso prévio nem multa de FGTS, mas o empregado também não recebe seguro-desemprego.</li>
                <li><strong>Carta/comunicado de demissão</strong> — escrita pela <em>empresa</em> que está dispensando o trabalhador. Sem justa causa, gera aviso prévio, multa de FGTS e direito a seguro-desemprego.</li>
              </ul>
              <p>
                A confusão entre os dois é a primeira fonte de litígio em rescisão. Empresa que &quot;sugere&quot; o pedido de demissão para evitar custo está práticando coação — uma das brechas mais comuns de ação trabalhista posterior.
              </p>
            </>
          ),
        },
        {
          title: 'Estrutura mínima da carta (escrita pela empresa)',
          body: (
            <ol>
              <li><strong>Cabeçalho</strong>: dados da empresa, dados do empregado, data.</li>
              <li><strong>Comunicação clara da rescisão</strong>: &quot;Comunicamos a sua dispensa do cargo X a partir do dia Y, sem justa causa.&quot;</li>
              <li><strong>Tipo de aviso prévio</strong>: trabalhado (cumpre os 30+ dias na empresa) ou indenizado (sai imediatamente, recebe os dias em verba).</li>
              <li><strong>Última data de trabalho</strong>: útil para INSS, plano de saúde, devolução de bens.</li>
              <li><strong>Resumo das verbas rescisórias</strong> a serem pagas: saldo de salário, férias proporcionais e vencidas + 1/3, 13º proporcional, aviso prévio, multa de FGTS.</li>
              <li><strong>Procedimento para devolução de bens</strong> (crachá, notebook, EPI, uniforme).</li>
              <li><strong>Local para assinatura</strong> do empregado em recibo (não significa concordância, apenas ciência).</li>
              <li><strong>Assinatura do representante legal</strong> da empresa.</li>
            </ol>
          ),
        },
        {
          title: 'Quando a empresa deve dispensar com justa causa',
          body: (
            <>
              <p>
                A justa causa exige <strong>fato grave e documentado</strong>. As hipóteses estão no art. 482 da CLT — improbidade, indisciplina, embriaguez, abandono de emprego, ato lesivo à empresa, etc. Não basta o gestor &quot;achar&quot; que houve falta grave: tem que haver evidência (registros, advertências anteriores, testemunhas).
              </p>
              <p>
                Justa causa mal aplicada vira reversão na justiça com pagamento de tudo que seria devido na dispensa sem justa causa, mais danos morais. Antes de aplicar:
              </p>
              <ol>
                <li>Documentar o fato com data, hora, local, testemunhas.</li>
                <li>Verificar advertências anteriores formais — para falta &quot;leve&quot;, é necessário gradação (advertência verbal, escrita, suspensão, demissão).</li>
                <li>Aplicar imediatamente após a falta — atraso descaracteriza (princípio da imediatidade).</li>
                <li>Conferir com assessoria jurídica antes de comunicar.</li>
              </ol>
            </>
          ),
        },
        {
          title: 'O exame demissional não é opcional',
          body: (
            <>
              <p>
                Em toda dispensa (com ou sem justa causa) a empresa precisa fazer o <strong>exame demissional</strong>. Sem ele:
              </p>
              <ul>
                <li>O ASO demissional fica em branco no eSocial — evento S-2299 incompleto.</li>
                <li>Em ação trabalhista posterior por doença ocupacional, a empresa não tem evidência do estado de saúde do trabalhador na saída — qualquer doença futura pode ser atribuída ao período da empresa.</li>
                <li>O processo de rescisão fica tecnicamente irregular — pode ser reaberto.</li>
              </ul>
              <p>
                O exame demissional precisa ser feito até 10 dias antes da rescisão (ou na data dela, dependendo do caso). Empresa que pula esse passo cria passivo escondido.
              </p>
            </>
          ),
        },
        {
          title: 'Erros comuns que viram processo',
          body: (
            <ul>
              <li><strong>Justificativa genérica na carta</strong> (&quot;baixo desempenho&quot; sem evidência). Convite para ação por motivo ilícito.</li>
              <li><strong>Demissão na licença, na gravidez ou no afastamento INSS</strong>. Estabilidade — demissão é nula.</li>
              <li><strong>Não pagar verba rescisória no prazo</strong> (10 dias após o fim do contrato). Multa do art. 477 da CLT, valor de um salário do empregado.</li>
              <li><strong>Não dar baixa na CTPS</strong>. Continua valendo o contrato — empresa segue pagando todas as obrigações.</li>
              <li><strong>Não comunicar a rescisão no eSocial</strong>. S-2299 fora do prazo é multa automática.</li>
              <li><strong>Pular exame demissional</strong>. Passivo de saúde ocupacional fica em aberto.</li>
            </ul>
          ),
        },
      ]}
      faq={[
        {
          q: 'A empresa precisa justificar a demissão sem justa causa?',
          a: 'Não. A dispensa imotivada é direito do empregador. A carta apenas comunica o fim do contrato e descreve as verbas. Justificativa adicional pode até ser usada pelo empregado em ação posterior se for vaga ou inconsistente.',
        },
        {
          q: 'O empregado tem que assinar a carta?',
          a: 'A assinatura serve apenas como ciência (recebimento). Empregado que se recusa a assinar pode receber por carta com AR ou com testemunhas. A recusa em assinar não impede a rescisão.',
        },
        {
          q: 'Posso demitir por mensagem (WhatsApp, e-mail)?',
          a: 'Tecnicamente sim, vale como comunicação. Mas em ação trabalhista posterior, a forma sumária é frequentemente usada como argumento de dano moral. A boa prática continua sendo carta formal entregue presencialmente ou por AR.',
        },
        {
          q: 'Aviso prévio trabalhado ou indenizado, qual é melhor?',
          a: 'Depende. Indenizado é mais limpo: empresa paga e o trabalhador sai. Trabalhado mantém o vínculo por mais 30+ dias — gera ambiente desconfortável e risco de queda de produtividade. Em rescisão por baixo desempenho, indenizado costuma ser mais inteligente.',
        },
        {
          q: 'Quanto tempo a empresa tem para pagar as verbas rescisórias?',
          a: '10 dias corridos a partir do término do contrato (último dia de trabalho ou fim do aviso). Atraso gera multa do art. 477 da CLT (um salário do trabalhador) e juros sobre o valor devido.',
        },
      ]}
      sidebarTitle="Sua empresa demite com SST em dia?"
      sidebarHook="Toda dispensa exige exame demissional registrado no eSocial. Sem ele, o passivo de saúde ocupacional fica aberto por anos. A SERMST faz auditoria do seu processo de rescisão."
      sidebarCtaLabel="Auditar processo de rescisão"
      related={[
        { label: 'Quando demitir um funcionário', href: '/rh/quando-demitir-funcionario' },
        { label: 'Como evitar processos trabalhistas', href: '/rh/evitar-processos-trabalhistas' },
        { label: 'Exame demissional: guia completo', href: '/saude/exame-demissional-guia' },
        { label: 'Multa eSocial S-2220', href: '/rh/multa-esocial-s2220' },
      ]}
    />
  );
}
