import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Medico do trabalho: o que faz e quando contratar | SERMST',
  description:
    'Entenda o que faz o medico do trabalho, relacao com PCMSO, ASO, exames ocupacionais, eSocial e quando a empresa precisa de apoio tecnico.',
  alternates: { canonical: 'https://sermst.com.br/saude/medico-do-trabalho' },
  openGraph: {
    title: 'Medico do trabalho: o que faz e quando contratar | SERMST',
    description:
      'Guia para empresas sobre medico do trabalho: PCMSO, ASO, exames ocupacionais, retorno ao trabalho, mudanca de risco e gestao de saude ocupacional.',
    url: 'https://sermst.com.br/saude/medico-do-trabalho',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function MedicoDoTrabalhoPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub Saude Ocupacional"
      hubLabelShort="Voltar para saúde"
      hubHref="/saude"
      pageUrl="https://sermst.com.br/saude/medico-do-trabalho"
      badgeText="Medicina do Trabalho"
      coverImage={{ src: '/images/site/medical-consult.jpg', alt: 'Medico do trabalho em atendimento ocupacional' }}
      author={{
        name: 'Luiz Cesar Sannino',
        jobTitle: 'Higienista Ocupacional | Tecnico em Seguranca do Trabalho | CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-07-02',
        dateModified: '2026-07-02',
      }}
      h1="Medico do trabalho: o que faz, quando contratar e como protege a empresa"
      intro="O medico do trabalho conecta saude do trabalhador, PCMSO, ASO, exames ocupacionais e eSocial. Para a empresa, ele ajuda a transformar risco medico em processo documentado, defensavel e coerente com a operacao."
      quickAnswer={
        <p>
          O medico do trabalho avalia aptidao ocupacional, conduz exames clinicos, emite ASO, participa do PCMSO, orienta medidas de saude ocupacional e ajuda a empresa a monitorar riscos que podem gerar afastamento, CAT ou passivo.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'O que faz o medico do trabalho',
          body: (
            <>
              <p>
                O medico do trabalho atua na relacao entre saude e atividade profissional. Ele avalia se o trabalhador esta apto para determinada funcao, acompanha riscos ocupacionais e participa da estruturacao do monitoramento medico da empresa.
              </p>
              <p>
                Na rotina, aparece em exames admissionais, periodicos, retorno ao trabalho, mudanca de risco e demissionais. O documento mais conhecido emitido nesse fluxo e o ASO.
              </p>
            </>
          ),
        },
        {
          title: 'Medico do trabalho e PCMSO',
          body: (
            <>
              <p>
                O PCMSO e o programa que organiza o monitoramento da saude ocupacional. O medico responsavel precisa entender os riscos da empresa, definir exames coerentes por funcao e acompanhar resultados que indiquem agravamento ou exposicao inadequada.
              </p>
              <p>
                Quando o PCMSO e generico, a empresa perde previsibilidade. Quando e bem conduzido, o RH sabe o que fazer, quando convocar, quais exames pedir e como sustentar o eSocial S-2220.
              </p>
            </>
          ),
        },
        {
          title: 'Quando a empresa precisa de medico do trabalho',
          body: (
            <ul>
              <li>Ao contratar funcionarios CLT e emitir ASO admissional.</li>
              <li>Ao manter PCMSO e exames periodicos.</li>
              <li>Em retorno ao trabalho apos afastamento.</li>
              <li>Em mudanca de risco ocupacional.</li>
              <li>No desligamento, com exame demissional quando aplicavel.</li>
              <li>Em investigacao de possivel doenca ocupacional ou restricao medica.</li>
            </ul>
          ),
        },
        {
          title: 'Medico do trabalho, ASO e eSocial',
          body: (
            <>
              <p>
                O ASO registra aptidao ou inaptidao ocupacional. Esses dados alimentam a rotina de SST e podem se conectar ao eSocial. Por isso, erro em ASO, exame fora do prazo ou PCMSO incoerente pode virar problema operacional e juridico.
              </p>
              <p>
                O ideal e que medicina do trabalho, RH e seguranca do trabalho operem com o mesmo mapa: riscos, exames, prazos e evidencias alinhados.
              </p>
            </>
          ),
        },
        {
          title: 'Diferenca entre medico do trabalho e clinico comum',
          body: (
            <>
              <p>
                O medico clinico avalia saude de forma geral. O medico do trabalho avalia a saude em relacao a uma funcao, riscos ocupacionais, aptidao laboral e exigencias da NR-07.
              </p>
              <p>
                Essa diferenca importa porque um atestado medico comum nao substitui ASO. O ASO tem finalidade ocupacional e precisa considerar o cargo, a funcao e os riscos envolvidos.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'Medico do trabalho emite ASO?',
          a: 'Sim. O ASO e emitido ao final do exame ocupacional, com conclusao sobre aptidao ou inaptidao para a funcao.',
        },
        {
          q: 'Toda empresa precisa de medico do trabalho?',
          a: 'Empresas com empregados precisam cumprir a rotina de saude ocupacional prevista na NR-07, incluindo exames ocupacionais e ASO quando aplicavel.',
        },
        {
          q: 'Medico do trabalho faz PCMSO?',
          a: 'O PCMSO deve ter responsabilidade medica conforme a NR-07. O medico define o planejamento de exames conforme riscos da empresa.',
        },
        {
          q: 'ASO e atestado medico sao a mesma coisa?',
          a: 'Nao. ASO registra aptidao ocupacional para uma funcao. Atestado medico comum geralmente justifica ausencia por motivo de saude.',
        },
      ]}
      sidebarTitle="Precisa organizar medicina do trabalho?"
      sidebarHook="A SERMST centraliza exames, ASO, PCMSO e rotina ocupacional para empresas que precisam de velocidade sem perder seguranca tecnica."
      sidebarCtaLabel="Falar com medicina ocupacional"
      related={[
        { label: 'PCMSO NR-07', href: '/servicos/pcmso-nr07-programa' },
        { label: 'Exame admissional expresso', href: '/servicos/exame-admissional-expresso' },
        { label: 'ASO: o que e', href: '/saude/aso-atestado-saude-ocupacional' },
        { label: 'Exame demissional', href: '/saude/exame-demissional' },
        { label: 'Doencas ocupacionais', href: '/saude/doencas-ocupacionais' },
      ]}
    />
  );
}
