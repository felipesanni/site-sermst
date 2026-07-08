import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Exame demissional em Sao Paulo: agendamento e prazo | SERMST',
  description:
    'Agende exame demissional em Sao Paulo com mais rapidez operacional. Veja prazo, quando e obrigatorio e como evitar atraso na rescisao.',
  alternates: { canonical: 'https://sermst.com.br/saude/exame-demissional-guia' },
  openGraph: {
    title: 'Exame demissional em Sao Paulo: agendamento e prazo | SERMST',
    description:
      'Agendamento de exame demissional em Sao Paulo: prazo, quando e obrigatorio, como funciona e o que a empresa precisa resolver sem travar a rescisao.',
    url: 'https://sermst.com.br/saude/exame-demissional-guia',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function ExameDemissionalPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub Saúde Ocupacional"
      hubLabelShort="← Hub Saúde"
      hubHref="/saude"
      pageUrl="https://sermst.com.br/saude/exame-demissional-guia"
      coverImage={{ src: "/images/articles/exame-demissional.jpg", alt: "Consulta médica ocupacional para exame demissional" }}
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-07-02',
      }}

      h1="Exame demissional em Sao Paulo: agende sem travar a rescisao"
      intro="Esta pagina concentra o formulario comercial para empresas que precisam resolver exame demissional em Sao Paulo com rapidez. Se a sua duvida principal e entender regra, prazo e dispensa, veja primeiro a pagina especifica sobre exame demissional; aqui o foco e agendamento e operacao."
      sections={[
        {
          title: 'Quando usar esta página de agendamento',
          body: (
            <>
              <p>
                Esta página existe para a empresa que já entendeu a obrigação e precisa <strong>resolver o exame demissional com rapidez operacional</strong>. O foco aqui é agendamento, prazo, atendimento e organização da rescisão sem travar RH, DP e eSocial.
              </p>
              <p>
                Se a dúvida principal ainda é conceitual, de dispensa ou de regra da NR-07, a página mais adequada é <strong>/saude/exame-demissional</strong>. Aqui, a intenção é comercial e operacional.
              </p>
            </>
          ),
        },
        {
          title: 'Quando vale agendar sem esperar',
          body: (
            <>
              <p>
                Na prática, a empresa costuma chegar aqui em três cenários:
              </p>
              <ol>
                <li><strong>Rescisão já decidida</strong> e o RH precisa garantir exame e ASO sem perder prazo.</li>
                <li><strong>Dúvida sobre dispensa</strong>, mas com receio de a janela legal não cobrir o caso concreto.</li>
                <li><strong>Operação com volume</strong>, em que adiar o agendamento aumenta o risco de fila, atraso ou retrabalho documental.</li>
              </ol>
              <p>
                Mesmo quando existe hipótese de dispensa, muitas empresas preferem confirmar o caso e já organizar o fluxo para não descobrir o problema na véspera do desligamento.
              </p>
            </>
          ),
        },
        {
          title: 'O prazo crítico que trava a rescisão',
          body: (
            <>
              <p>
                O exame demissional tem que ser feito <strong>até a data do efetivo afastamento</strong>. O ideal é antes da comunicação da rescisão ou na sequência imediata, para que o ASO esteja pronto para a homologação.
              </p>
              <p>
                Quando o aviso é trabalhado, há mais tempo. Quando é indenizado, a empresa precisa correr — fazer demissional, receber o ASO, formalizar a rescisão. Atrasar significa:
              </p>
              <ul>
                <li>Atraso na homologação no sindicato (se aplicável)</li>
                <li>Verbas rescisórias além do prazo (multa do art. 477 da CLT)</li>
                <li>Evento S-2299 fora do prazo no eSocial — risco de autuação e retrabalho</li>
              </ul>
            </>
          ),
        },
        {
          title: 'O que a empresa precisa ter em mãos para agilizar',
          body: (
            <>
              <p>
                Para reduzir atrito no atendimento, o ideal é chegar com:
              </p>
              <ul>
                <li><strong>Dados corretos do trabalhador</strong> e da empresa.</li>
                <li><strong>Função exercida</strong> e histórico ocupacional minimamente coerente.</li>
                <li><strong>PCMSO e exames anteriores</strong> quando forem relevantes para leitura do caso.</li>
                <li><strong>Prazo real da rescisão</strong> para encaixar exame, ASO e rotina do DP.</li>
                <li><strong>Indicação de complementares</strong> quando a função exigir bateria mais robusta.</li>
              </ul>
              <p>
                A profundidade do atendimento depende do PCMSO da empresa e dos riscos da função. Quanto mais claro esse contexto chega, menor a chance de retrabalho.
              </p>
            </>
          ),
        },
        {
          title: 'O que costuma gerar atraso ou retrabalho',
          body: (
            <>
              <p>
                Os gargalos mais comuns não estão no exame em si, mas na operação:
              </p>
              <ol>
                <li><strong>Agendamento deixado para o fim</strong>, quando RH e DP já estão correndo contra o prazo.</li>
                <li><strong>Função mal descrita</strong>, o que atrapalha a leitura ocupacional correta.</li>
                <li><strong>Exames anteriores ou PCMSO desconectados</strong>, gerando dúvida sobre complementares e documentação.</li>
              </ol>
              <p>
                Quando a empresa organiza isso antes, o atendimento flui melhor e a chance de travar a rescisão cai bastante.
              </p>
            </>
          ),
        },
        {
          title: 'O custo de pular o demissional',
          body: (
            <ul>
              <li><strong>Multa automática no eSocial</strong> por S-2299 incompleto ou fora do prazo.</li>
              <li><strong>Defesa frágil em ação por doença ocupacional</strong> — sem ASO de saída, qualquer quadro futuro pode ser atribuído ao período da empresa.</li>
              <li><strong>Reabertura técnica do processo de rescisão</strong> — ficou tecnicamente irregular.</li>
              <li><strong>Indenização ampliada em caso de processo</strong> — falha documental costuma ser usada para majorar indenização.</li>
            </ul>
          ),
        },
      ]}
      faq={[
        {
          q: 'Quem paga o exame demissional?',
          a: 'A empresa, sempre. Não há hipótese legal de cobrar do trabalhador. O custo do demissional é parte do custo de rescisão e está implícito na NR-07.',
        },
        {
          q: 'Demissional pode ser feito após a saída do trabalhador?',
          a: 'Não. Tem que ser feito até a data efetiva do afastamento. Demissional realizado posteriormente é tecnicamente inválido — embora algumas empresas façam para regularizar, isso não cobre o vácuo entre a saída e a realização.',
        },
        {
          q: 'Trabalhador se recusa a fazer demissional. O que fazer?',
          a: 'Documentar a recusa formalmente, com testemunhas e por escrito. Empresa cumpriu sua obrigação ao oferecer e marcar — a recusa do trabalhador desonera. Mas tem que existir registro objetivo da convocação e da recusa, idealmente assinado.',
        },
        {
          q: 'Quanto custa um exame demissional?',
          a: 'Em São Paulo, exame demissional simples (cargo administrativo) fica entre R$ 80 e R$ 150. Cargo operacional com bateria de complementares pode chegar a R$ 250-400. Empresa que tem volume normalmente negocia pacote com clínica fixa.',
        },
        {
          q: 'Onde fazer o exame demissional?',
          a: 'Em clínica de saúde ocupacional credenciada que faça o ASO oficialmente. Médico pode ser o coordenador do PCMSO da empresa ou outro médico do trabalho da clínica credenciada. Não vale exame feito por médico clínico geral em consultório comum.',
        },
      ]}
      sidebarTitle="Sua empresa demite com exame em dia?"
      sidebarHook="Pular o demissional é passivo aberto por anos. A SERMST tem fluxo expresso para exames demissional em São Paulo e Grande SP — atende sem agendamento."
      sidebarCtaLabel="Agendar exame demissional"
      related={[
        { label: 'Exame admissional expresso', href: '/servicos/exame-admissional-expresso/sao-paulo' },
        { label: 'Exame toxicológico para motoristas e CNH C, D e E', href: '/servicos/exame-toxicologico-clt/sao-paulo' },
        { label: 'Como fazer carta de demissão', href: '/rh/carta-demissao' },
        { label: 'Quando demitir um funcionário', href: '/rh/quando-demitir-funcionario' },
        { label: 'O que é saúde ocupacional', href: '/saude/o-que-e-saude-ocupacional' },
      ]}
    />
  );
}
