import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Médico do trabalho: o que faz e quando contratar | SERMST',
  description:
    'Entenda o que faz o médico do trabalho, relação com PCMSO, ASO, exames ocupacionais, eSocial e quando a empresa precisa de apoio técnico.',
  alternates: { canonical: 'https://sermst.com.br/saude/medico-do-trabalho' },
  openGraph: {
    title: 'Médico do trabalho: o que faz e quando contratar | SERMST',
    description:
      'Guia para empresas sobre médico do trabalho: PCMSO, ASO, exames ocupacionais, retorno ao trabalho, mudança de risco e gestão de saúde ocupacional.',
    url: 'https://sermst.com.br/saude/medico-do-trabalho',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function MedicoDoTrabalhoPage() {
  return (
    <BlockbusterArticle
      hubLabel="Saúde Ocupacional"
      hubLabelShort="Voltar para saúde"
      hubHref="/saude"
      pageUrl="https://sermst.com.br/saude/medico-do-trabalho"
      badgeText="Medicina do Trabalho"
      coverImage={{ src: '/images/site/medical-consult.jpg', alt: 'Médico do trabalho em atendimento ocupacional' }}
      author={{
        name: 'Luiz Cesar Sannino',
        jobTitle: 'Higienista Ocupacional | Técnico em Segurança do Trabalho | CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-07-02',
        dateModified: '2026-07-02',
      }}
      readingTime="9 min"
      h1="Médico do trabalho: o que faz e quando a empresa precisa desse profissional"
      intro="O médico do trabalho atua no PCMSO, nos exames ocupacionais, na emissão de ASOs e na análise dos dados de saúde relacionados aos riscos da empresa. Seu trabalho deve permanecer coerente com o PGR e com os registros enviados ao eSocial."
      quickAnswer={
        <p>
          O médico do trabalho avalia aptidão ocupacional, conduz exames clínicos, emite ASO, participa do PCMSO, orienta medidas de saúde ocupacional e ajuda a empresa a monitorar riscos que podem gerar afastamento, CAT ou passivo.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'O que faz o médico do trabalho',
          body: (
            <>
              <p>
                O médico do trabalho atua na relação entre saúde e atividade profissional. Ele avalia se o trabalhador está apto para determinada função, acompanha riscos ocupacionais e participa da estruturação do monitoramento médico da empresa.
              </p>
              <p>
                Na rotina, aparece em exames admissionais, periódicos, retorno ao trabalho, mudança de risco e demissionais. O documento mais conhecido emitido nesse fluxo é o ASO.
              </p>
            </>
          ),
        },
        {
          title: 'Médico do trabalho e PCMSO',
          body: (
            <>
              <p>
                O PCMSO é o programa que organiza o monitoramento da saúde ocupacional. O médico responsável precisa entender os riscos da empresa, definir exames coerentes por função e acompanhar resultados que indiquem agravamento ou exposição inadequada.
              </p>
              <p>
                Quando o PCMSO é genérico, a empresa perde previsibilidade. Quando é bem conduzido, o RH sabe o que fazer, quando convocar, quais exames pedir e como sustentar o eSocial S-2220.
              </p>
            </>
          ),
        },
        {
          title: 'Quando a empresa precisa de médico do trabalho',
          body: (
            <ul>
              <li>Ao contratar funcionários CLT e emitir ASO admissional.</li>
              <li>Ao manter PCMSO e exames periódicos.</li>
              <li>Em retorno ao trabalho após afastamento.</li>
              <li>Em mudança de risco ocupacional.</li>
              <li>No desligamento, com exame demissional quando aplicável.</li>
              <li>Em investigação de possível doença ocupacional ou restrição médica.</li>
            </ul>
          ),
        },
        {
          title: 'O que esperar de uma consulta ocupacional',
          body: (
            <>
              <p>
                A consulta ocupacional costuma envolver identificação da função, anamnese clínica e ocupacional, avaliação de sinais relevantes, análise de exames complementares quando exigidos e conclusão sobre aptidão para aquela atividade.
              </p>
              <p>
                O objetivo não é fazer um check-up genérico. É avaliar se existe compatibilidade entre a condição de saúde do trabalhador, os riscos da função e as exigências do PCMSO da empresa.
              </p>
            </>
          ),
        },
        {
          title: 'Quais exames entram na rotina ocupacional',
          body: (
            <>
              <p>
                A rotina pode incluir exame admissional, periódico, retorno ao trabalho, mudança de risco e demissional. Dependendo dos riscos do PGR e do PCMSO, também podem entrar exames complementares, como audiometria, espirometria, exames laboratoriais, avaliação clínica direcionada e outros exames definidos pelo médico responsável.
              </p>
              <p>
                O erro é tratar todos os cargos do mesmo jeito. Uma função exposta a ruído, produto químico, esforço físico ou risco psicossocial pode exigir acompanhamento diferente de uma função administrativa.
              </p>
            </>
          ),
        },
        {
          title: 'Médico do trabalho, ASO e eSocial',
          body: (
            <>
              <p>
                O ASO registra aptidão ou inaptidão ocupacional. Esses dados alimentam a rotina de SST e podem se conectar ao eSocial. Por isso, erro em ASO, exame fora do prazo ou PCMSO incoerente pode virar problema operacional e jurídico.
              </p>
              <p>
                O ideal é que medicina do trabalho, RH e segurança do trabalho operem com o mesmo mapa: riscos, exames, prazos e evidências alinhados.
              </p>
            </>
          ),
        },
        {
          title: 'Documentos que o RH deve manter organizados',
          body: (
            <ul>
              <li>PCMSO vigente e coerente com o PGR.</li>
              <li>ASOs admissionais, periódicos, retorno, mudança de risco e demissionais.</li>
              <li>Exames complementares previstos por função.</li>
              <li>Histórico de afastamentos, restrições e retornos ao trabalho.</li>
              <li>Eventos de SST enviados ao eSocial quando aplicável.</li>
              <li>Comunicação entre RH, DP, medicina ocupacional e segurança do trabalho.</li>
            </ul>
          ),
        },
        {
          title: 'Diferença entre médico do trabalho e clínico comum',
          body: (
            <>
              <p>
                O médico clínico avalia saúde de forma geral. O médico do trabalho avalia a saúde em relação a uma função, riscos ocupacionais, aptidão laboral e exigências da NR-07.
              </p>
              <p>
                Essa diferença importa porque um atestado médico comum não substitui ASO. O ASO tem finalidade ocupacional e precisa considerar o cargo, a função e os riscos envolvidos.
              </p>
            </>
          ),
        },
        {
          title: 'Como escolher uma clínica ou serviço de medicina do trabalho',
          body: (
            <ul>
              <li>Verifique se a clínica entende PCMSO, PGR, ASO e eSocial como um fluxo único.</li>
              <li>Confirme se há estrutura para exames complementares relevantes para a sua operação.</li>
              <li>Observe prazo de atendimento, emissão de ASO e suporte ao RH.</li>
              <li>Evite contratar apenas por preço quando a empresa precisa de rastreabilidade técnica.</li>
              <li>Prefira parceiros que expliquem riscos, prazos e documentos de forma clara.</li>
            </ul>
          ),
        },
        {
          title: 'Como a SERMST organiza esse fluxo',
          body: (
            <p>
              A SERMST atua para que a medicina do trabalho não seja uma fila de exames soltos. O fluxo conecta PCMSO, PGR, ASO, exames complementares, prazos, atendimento ao trabalhador e necessidade do RH, com foco em agilidade sem perder rastreabilidade técnica.
            </p>
          ),
        },
        {
          title: 'Erros comuns na gestão médica ocupacional',
          body: (
            <ol>
              <li>Usar PCMSO genérico, sem relação real com os riscos da empresa.</li>
              <li>Convocar exames periódicos fora do prazo ou sem critério.</li>
              <li>Emitir ASO sem exames complementares necessários.</li>
              <li>Não integrar medicina do trabalho com segurança do trabalho.</li>
              <li>Deixar o RH sem histórico organizado para defesa futura.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'Médico do trabalho emite ASO?',
          a: 'Sim. O ASO é emitido ao final do exame ocupacional, com conclusão sobre aptidão ou inaptidão para a função.',
        },
        {
          q: 'Toda empresa precisa de médico do trabalho?',
          a: 'Empresas com empregados precisam cumprir a rotina de saúde ocupacional prevista na NR-07, incluindo exames ocupacionais e ASO quando aplicável.',
        },
        {
          q: 'Médico do trabalho faz PCMSO?',
          a: 'O PCMSO deve ter responsabilidade médica conforme a NR-07. O médico define o planejamento de exames conforme riscos da empresa.',
        },
        {
          q: 'ASO e atestado médico são a mesma coisa?',
          a: 'Não. ASO registra aptidão ocupacional para uma função. Atestado médico comum geralmente justifica ausência por motivo de saúde.',
        },
        {
          q: 'Médico do trabalho pode afastar funcionário?',
          a: 'Ele pode avaliar aptidão, restrições e necessidade de encaminhamento. Afastamentos, benefícios e condutas dependem do caso clínico, previdenciário e documental.',
        },
        {
          q: 'Qual a relação entre médico do trabalho e NR-07?',
          a: 'A NR-07 estrutura o PCMSO e a rotina de exames ocupacionais. O médico planeja e executa o acompanhamento de saúde conforme os riscos da organização.',
        },
        {
          q: 'A empresa precisa de médico do trabalho mesmo sem risco alto?',
          a: 'Empresas com empregados precisam cumprir exames ocupacionais e ASO quando aplicável. Mesmo riscos baixos exigem organização mínima de saúde ocupacional.',
        },
      ]}
      maxFaqItems={8}
      sidebarTitle="Precisa organizar medicina do trabalho?"
      sidebarHook="A SERMST centraliza exames, ASO, PCMSO e rotina ocupacional para empresas que precisam de velocidade sem perder segurança técnica."
      sidebarCtaLabel="Falar com medicina ocupacional"
      related={[
        { label: 'PCMSO NR-07', href: '/servicos/pcmso-nr07-programa' },
        { label: 'Exame admissional expresso', href: '/servicos/exame-admissional-expresso' },
        { label: 'ASO: o que é', href: '/saude/aso-atestado-saude-ocupacional' },
        { label: 'Exame demissional', href: '/saude/exame-demissional' },
        { label: 'Doenças ocupacionais', href: '/saude/doencas-ocupacionais' },
      ]}
    />
  );
}
