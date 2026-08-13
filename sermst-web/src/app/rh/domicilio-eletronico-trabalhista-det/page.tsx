import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'DET: o que é e como evitar perda de prazo | SERMST',
  description:
    'Entenda o que é o DET (Domicílio Eletrônico Trabalhista), quem precisa acompanhar e os riscos de perder notificações do MTE e da SIT.',
  keywords: [
    'DET',
    'Domicílio Eletrônico Trabalhista',
    'MTE',
    'Secretaria de Inspeção do Trabalho',
    'notificação trabalhista',
    'prazo fiscalização trabalhista',
    'comunicação oficial empregador governo',
  ],
  alternates: {
    canonical: 'https://sermst.com.br/rh/domicilio-eletronico-trabalhista-det',
  },
  openGraph: {
    title: 'DET: o que é e como evitar perda de prazo | SERMST',
    description:
      'Guia prático sobre o DET: comunicações da Inspeção do Trabalho, ciência automática, cadastro de contatos e rotina de acompanhamento.',
    url: 'https://sermst.com.br/rh/domicilio-eletronico-trabalhista-det',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function DomicilioEletronicoTrabalhistaPage() {
  return (
    <BlockbusterArticle
      hubLabel="RH e Departamento Pessoal"
      hubLabelShort="← RH"
      hubHref="/rh"
      badgeText="Fiscalização e prazos digitais"
      pageUrl="https://sermst.com.br/rh/domicilio-eletronico-trabalhista-det"
      coverImage={{
        src: '/images/articles/exame-periodico.jpg',
        alt: 'Equipe administrativa acompanhando notificações e fiscalização trabalhista',
      }}
      author={{
        name: 'Luiz Cesar Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-05-20',
        dateModified: '2026-07-13',
      }}
      readingTime="6 min"
      h1="DET: o que é o Domicílio Eletrônico Trabalhista e como acompanhar"
      intro="O DET é o canal oficial de comunicação eletrônica entre a Inspeção do Trabalho e os empregadores. Por ele chegam atos administrativos, intimações, notificações, decisões e avisos. A falta de consulta não impede a ciência automática da comunicação após o prazo previsto."
      sections={[
        {
          title: 'O que é o DET na prática',
          body: (
            <>
              <p>
                O <strong>Domicílio Eletrônico Trabalhista (DET)</strong> é a plataforma digital usada pelo Ministério do Trabalho e Emprego para comunicar atos administrativos, ações fiscais, intimações, notificações, decisões e avisos ao empregador.
              </p>
              <p>
                As comunicações têm valor legal e dispensam o envio pelos Correios ou por outro meio. Por isso, a caixa postal do DET precisa fazer parte da rotina do responsável pela empresa.
              </p>
            </>
          ),
        },
        {
          title: 'Para que o DET serve',
          body: (
            <ul>
              <li><strong>Receber intimações e avisos da Inspeção do Trabalho.</strong> O empregador pode ser cientificado de atos administrativos e ações fiscais diretamente pela plataforma.</li>
              <li><strong>Enviar documentação eletrônica.</strong> O DET também serve para entregar documentos exigidos em fiscalização e apresentar defesa ou recurso em processos administrativos.</li>
              <li><strong>Consultar o histórico.</strong> O sistema concentra comunicações e funcionalidades do Livro de Inspeção do Trabalho Eletrônico.</li>
            </ul>
          ),
        },
        {
          title: 'Quem precisa acessar o DET',
          body: (
            <>
              <p>
                O uso do DET alcança os empregadores previstos no cronograma de implantação. Isso inclui pessoas jurídicas, mesmo sem empregados, e pessoas físicas que empregam ao menos um trabalhador, inclusive empregadores domésticos e MEI.
              </p>
              <p>
                O cadastro inicial já existe para pessoas físicas e jurídicas com conta Gov.br. No primeiro acesso, o responsável deve atualizar e-mail, telefone e palavra-chave de segurança e definir quem consultará a caixa postal.
              </p>
            </>
          ),
        },
        {
          title: 'Quando a comunicação é considerada recebida',
          body: (
            <>
              <p>
                A ciência ocorre na data da consulta ao conteúdo ou, quando a consulta acontece em sábado, domingo, feriado nacional ou ponto facultativo e há prazo para um ato, no primeiro dia útil seguinte.
              </p>
              <p>
                Se a mensagem não for consultada, a ciência é automática no primeiro dia útil após 15 dias contados do envio. Não há multa apenas por deixar de atualizar os contatos, mas uma notificação ignorada pode levar a autuação se o empregador não responder no prazo.
              </p>
            </>
          ),
        },
        {
          title: 'Quem deve acompanhar o DET dentro da empresa',
          body: (
            <ol>
              <li><strong>RH ou DP</strong>, quando a empresa concentra obrigações trabalhistas e eSocial nessas áreas.</li>
              <li><strong>Jurídico trabalhista</strong>, quando a mensagem exige defesa, recurso ou análise de prazo processual.</li>
              <li><strong>Responsável pela SST</strong>, quando são solicitados ASOs, PGR, PCMSO, laudos ou eventos do eSocial.</li>
            </ol>
          ),
        },
        {
          title: 'O erro mais comum: achar que acessar uma vez resolve',
          body: (
            <>
              <p>
                O acesso inicial não encerra o trabalho. A empresa precisa definir responsável, frequência de verificação, substituto em férias ou afastamentos e um caminho de encaminhamento para cada tipo de mensagem.
              </p>
              <p>
                Os alertas por e-mail ajudam, mas não substituem a consulta periódica à caixa postal. A palavra-chave cadastrada também permite conferir se o alerta recebido é autêntico.
              </p>
            </>
          ),
        },
        {
          title: 'Como a SERMST ajuda quando o DET se cruza com SST',
          body: (
            <>
              <p>
                A SERMST não substitui o acesso institucional do empregador nem a atuação jurídica no DET. Ela pode organizar os documentos de SST solicitados, como ASOs, PCMSO, PGR, laudos e eventos do eSocial.
              </p>
              <p>
                Quando a notificação envolve saúde e segurança do trabalho, a resposta depende de localizar documentos atualizados e coerentes com a operação.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        { q: 'O que significa DET?', a: 'DET significa Domicílio Eletrônico Trabalhista, plataforma oficial usada para comunicação entre o empregador e a Inspeção do Trabalho.' },
        { q: 'DET é a mesma coisa que eSocial?', a: 'Não. O DET é o canal de comunicação e tramitação com a Inspeção do Trabalho. O eSocial é usado para enviar eventos trabalhistas, previdenciários e de SST.' },
        { q: 'Quem precisa acompanhar o DET?', a: 'Pessoas jurídicas, mesmo sem empregados, e pessoas físicas que empregam ao menos um trabalhador devem observar as regras do DET. Isso inclui MEI e empregadores domésticos.' },
        { q: 'O que pode chegar no DET?', a: 'Atos administrativos, ações fiscais, intimações, notificações, decisões, avisos e solicitações de documentos podem ser enviados pela plataforma.' },
        { q: 'Se eu não abrir a mensagem, o prazo começa?', a: 'A ciência pode ocorrer automaticamente no primeiro dia útil após 15 dias contados do envio, mesmo sem consulta ao conteúdo. Por isso, a caixa postal deve ser verificada periodicamente.' },
        { q: 'O DET tem relação com SST?', a: 'Sim, quando uma ação fiscal solicita ASOs, PGR, PCMSO, laudos ou informações do eSocial. O DET é o canal da comunicação; os documentos de SST fornecem a base técnica da resposta.' },
      ]}
      sidebarTitle="Sua empresa já definiu quem acompanha o DET?"
      sidebarHook="Defina responsável, substituto, frequência de consulta e encaminhamento para RH, jurídico e SST. A SERMST pode apoiar a organização dos documentos técnicos."
      sidebarCtaLabel="Falar sobre eSocial e SST"
      sidebarCtaHref="/servicos/gestao-esocial-s2220-s2240"
      related={[
        { label: 'Gestão completa de eSocial SST', href: '/servicos/gestao-esocial-s2220-s2240' },
        { label: 'DIR: quando a empresa pode declarar inexistência de risco', href: '/rh/declaracao-inexistencia-risco-dir' },
        { label: 'Como evitar multas do eSocial S-2220 e S-2240', href: '/rh/multa-esocial-s2220' },
        { label: 'Calculadora de risco por CNPJ', href: '/rh/calculadora-cnae-grau-de-risco' },
      ]}
      finalCta={{
        title: 'Organize os documentos antes de receber uma solicitação',
        desc: 'A SERMST pode revisar a documentação de SST e o eSocial para facilitar a localização e a conferência dos registros solicitados.',
        label: 'Quero revisar meu fluxo de SST',
        href: '/contato',
      }}
    />
  );
}
