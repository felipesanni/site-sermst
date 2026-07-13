import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-17: ergonomia, AET e LER/DORT | SERMST',
  description:
    'Entenda a NR-17, a avaliação ergonômica preliminar, quando a AET é necessária e as regras para checkout e teleatendimento.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-17-ergonomia' },
  openGraph: {
    title: 'NR-17 Ergonomia: AET, postura, prevenção de LER/DORT e obrigações | SERMST',
    description:
      'Tudo sobre a NR-17: quando a AET (Análise Ergonômica do Trabalho) é obrigatória, o que ela analisa, LER/DORT e como adequar postos de trabalho.',
    url: 'https://sermst.com.br/normas/nr-17-ergonomia',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function NR17Page() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/site/medical-consult.jpg", alt: "Avaliação ergonômica de posto de trabalho e AET conforme NR-17" }}
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="← Normas"
      hubHref="/normas"
      pageUrl="https://sermst.com.br/normas/nr-17-ergonomia"
      badgeText="NR-17"
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-07-13',
      }}

      h1="NR-17: o que a empresa precisa avaliar em ergonomia"
      intro="A NR-17 trata da adaptação das condições de trabalho às características dos trabalhadores. Ela alcança postura, mobiliário, equipamentos, movimentação de cargas, ambiente e organização do trabalho. O primeiro passo é registrar a avaliação ergonômica preliminar; a AET é exigida nas situações definidas pela norma."
      quickAnswer={
        <p>
          A <strong>NR-17</strong> exige uma avaliação ergonômica preliminar das situações de trabalho que demandam adaptação. A <strong>Análise Ergonômica do Trabalho (AET)</strong> deve ser feita quando é preciso aprofundar a avaliação, quando as medidas adotadas são insuficientes, por indicação do PCMSO ou quando a análise de acidente ou doença aponta relação com o trabalho. O <strong>Anexo I</strong> trata de operadores de checkout e o <strong>Anexo II</strong>, de teleatendimento e telemarketing.
        </p>
      }
      sections={[
        {
          title: 'O que é a NR-17',
          body: (
            <>
              <p>
                A NR-17 estabelece os parâmetros que permitem a adaptação das condições de trabalho às características do trabalhador, de modo a proporcionar conforto, segurança e desempenho eficiente. Cobre desde mobiliário e ferramenta até organização, pausas, ritmo, transporte de peso, ambiente físico (ruído, temperatura, iluminação), exigência cognitiva.
              </p>
              <p>
                Ergonomia não se resume à escolha da cadeira. A análise também precisa observar o trabalho real, o ritmo, as exigências cognitivas, os movimentos e as condições ambientais.
              </p>
            </>
          ),
        },
        {
          title: 'Avaliação preliminar e Análise Ergonômica do Trabalho (AET)',
          body: (
            <>
              <p>
                A avaliação ergonômica preliminar é o ponto de partida e deve ser registrada. A AET aprofunda a análise quando ocorre uma das situações previstas no item 17.3.2 da norma.
              </p>
              <p>
                A AET deve contemplar:
              </p>
              <ul>
                <li>Análise da demanda e, quando necessário, reformulação do problema</li>
                <li>Análise da organização, dos processos, das situações de trabalho e da atividade real</li>
                <li>Descrição e justificativa dos métodos e ferramentas usados</li>
                <li>Diagnóstico e recomendações para as situações avaliadas</li>
                <li>Apresentação dos resultados e revisão das intervenções com participação dos trabalhadores</li>
              </ul>
              <p>
                A NR-17 não estabelece uma revisão geral a cada dois anos. O documento deve acompanhar mudanças e novas evidências que alterem a avaliação. Quando realizada, a AET deve permanecer disponível na organização por 20 anos.
              </p>
            </>
          ),
        },
        {
          title: 'O que a NR-17 exige especificamente',
          body: (
            <ul>
              <li><strong>Mobiliário</strong>: dimensões, ajustes, espaço e apoio compatíveis com a tarefa.</li>
              <li><strong>Equipamentos e ferramentas</strong>: seleção e posicionamento que reduzam posturas nocivas e esforço desnecessário.</li>
              <li><strong>Levantamento e transporte de cargas</strong>: peso, frequência, distância, pega e postura precisam ser avaliados em conjunto.</li>
              <li><strong>Pausas para recuperação</strong> em atividades que exigem esforço repetitivo intenso.</li>
              <li><strong>Iluminação</strong> adequada à tarefa, sem ofuscamento nem reflexo.</li>
              <li><strong>Ruído</strong> em níveis compatíveis com a atividade cognitiva exigida.</li>
              <li><strong>Temperatura e umidade</strong> em faixas de conforto.</li>
              <li><strong>Organização do trabalho</strong>: ritmo, exigência de tempo, conteúdo das tarefas e aspectos cognitivos.</li>
              <li><strong>Orientação dos trabalhadores</strong> sobre os ajustes e as medidas de prevenção aplicáveis à atividade.</li>
            </ul>
          ),
        },
        {
          title: 'LER/DORT: prevenção e documentação precisam andar juntas',
          body: (
            <>
              <p>
                LER e DORT são termos usados para agravos musculoesqueléticos que podem ter relação com repetitividade, força, postura, ritmo e organização do trabalho. O nexo não é presumido apenas pelo diagnóstico; ele depende da análise clínica e das condições reais da atividade.
              </p>
              <p>
                A prevenção melhora quando sinais de desconforto chegam cedo ao PCMSO e à gestão de riscos. A avaliação ergonômica, o plano de ação e o acompanhamento médico ajudam a identificar se as medidas adotadas precisam mudar.
              </p>
              <p>
                Em uma fiscalização, perícia ou análise interna, costuma ser necessário demonstrar:
              </p>
              <ol>
                <li>se a situação de trabalho passou por avaliação ergonômica preliminar;</li>
                <li>se havia indicação de AET e, nesse caso, se ela foi realizada;</li>
                <li>quais medidas foram planejadas e efetivamente implantadas;</li>
                <li>como os trabalhadores participaram e foram orientados;</li>
                <li>como o PCMSO acompanhou sinais relacionados ao trabalho.</li>
              </ol>
              <p>
                Um documento isolado não resolve o problema. O conjunto precisa refletir o que acontece no posto e as providências tomadas pela empresa.
              </p>
            </>
          ),
        },
        {
          title: 'Por onde começar a estruturar ergonomia',
          body: (
            <ol>
              <li><strong>Mapear as situações de trabalho</strong> e ouvir quem executa as tarefas.</li>
              <li><strong>Registrar a avaliação ergonômica preliminar</strong> e integrar os resultados ao inventário de riscos do PGR.</li>
              <li><strong>Verificar se há indicação de AET</strong> conforme os critérios do item 17.3.2.</li>
              <li><strong>Transformar as recomendações em plano de ação</strong>, com responsáveis e prazos.</li>
              <li><strong>Orientar os trabalhadores</strong> sobre ajustes, técnicas e mudanças implantadas.</li>
              <li><strong>Conectar a análise ao PCMSO</strong> para acompanhar queixas e possíveis agravos.</li>
              <li><strong>Reavaliar após mudanças</strong> de processo, mobiliário, equipamento ou organização.</li>
            </ol>
          ),
        },
        {
          title: 'Anexo I: trabalho dos operadores de checkout',
          body: (
            <>
              <p>
                O <strong>Anexo I da NR-17</strong> se aplica ao trabalho dos operadores de checkout. Ele trata do posto, da manipulação de mercadorias, da organização do trabalho, dos aspectos psicossociais e da capacitação.
              </p>
              <p>Exigências principais:</p>
              <ul>
                <li><strong>Posto de checkout:</strong> deve permitir alternância entre trabalho sentado e em pé, com cadeira de apoio e espaço compatível.</li>
                <li><strong>Manipulação de mercadorias:</strong> o projeto deve reduzir movimentos repetitivos de braço e torções do corpo.</li>
                <li><strong>Volume e peso:</strong> mecanismos auxiliares são necessários quando a carga dificulta a execução manual.</li>
                <li><strong>Ritmo de trabalho:</strong> o número de checkouts e operadores deve ser compatível com o fluxo de clientes.</li>
                <li><strong>Capacitação:</strong> treinamento inicial e periódico sobre posto, mercadorias, organização do trabalho, fatores psicossociais e prevenção.</li>
              </ul>
              <p>
                O anexo não se estende automaticamente a todos os trabalhadores do supermercado. Repositores, açougueiros e outras funções continuam sujeitos à parte geral da NR-17 e à avaliação de suas situações de trabalho.
              </p>
            </>
          ),
        },
        {
          title: 'Anexo II: teleatendimento e telemarketing',
          body: (
            <>
              <p>
                O <strong>Anexo II da NR-17</strong> se aplica às organizações que mantêm serviço de teleatendimento ou telemarketing. Ele estabelece regras próprias para mobiliário, equipamentos, ambiente, jornada, pausas, capacitação e acompanhamento de saúde.
              </p>
              <p>Entre as exigências estão:</p>
              <ul>
                <li>
                  <strong>Pausas de descanso:</strong> dois períodos contínuos de 10 minutos, fora do posto, depois dos primeiros e antes dos últimos 60 minutos de atividade.
                </li>
                <li>
                  <strong>Intervalo para repouso e alimentação:</strong> 20 minutos, sem prejuízo das duas pausas de descanso.
                </li>
                <li>
                  <strong>Registro:</strong> as pausas devem constar em registro impresso ou eletrônico e ficar acessíveis ao trabalhador.
                </li>
                <li>
                  <strong>Equipamentos:</strong> headsets individuais, ajuste de volume, proteção contra choques acústicos e manutenção contínua.
                </li>
                <li>
                  <strong>Capacitação:</strong> treinamento inicial de 4 horas e periódico a cada 6 meses, além de treinamento eventual quando surgirem novos fatores de risco.
                </li>
              </ul>
              <p>
                Para jornadas efetivas de teleatendimento de até 4 horas, o anexo prevê uma pausa contínua de 10 minutos. Situações desgastantes, com ameaça, abuso verbal ou agressão, também exigem pausa imediata para recuperação.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'Empresa pequena precisa de AET?',
          a: 'Nem sempre. ME, EPP de graus de risco 1 e 2 e MEI são dispensados da AET em regra, mas devem cumprir os demais requisitos da NR-17 e registrar a avaliação ergonômica preliminar quando aplicável. ME e EPP desses graus precisam realizar AET quando o PCMSO indicar ou quando a análise de acidente ou doença apontar causa ligada às condições de trabalho.',
        },
        {
          q: 'Quem pode fazer AET?',
          a: 'A NR-17 não reserva a elaboração da AET a uma profissão específica. A organização deve escolher alguém com conhecimento técnico e experiência compatíveis com a complexidade da situação analisada, sem ignorar eventuais atribuições profissionais aplicáveis ao serviço contratado.',
        },
        {
          q: 'Pausa obrigatória em digitação?',
          a: 'A parte geral da NR-17 não cria uma regra universal de 10 minutos para toda atividade de digitação. As medidas de prevenção, incluindo pausas ou alternância de tarefas, devem resultar da avaliação da atividade e das normas específicas aplicáveis. Teleatendimento tem regras próprias no Anexo II.',
        },
        {
          q: 'Limite de peso para levantamento?',
          a: 'A NR-17 não fixa um único número válido para todas as pessoas e situações. A análise deve considerar peso, frequência, distância, altura, pega, postura, deslocamento e características do trabalhador. Quando a carga comprometer a segurança ou a saúde, a empresa deve reduzir o esforço ou usar meios auxiliares.',
        },
        {
          q: 'Ginástica laboral é obrigatória?',
          a: 'Não. A NR-17 não torna a ginástica laboral obrigatória. Ela pode integrar um conjunto de medidas, mas não substitui a correção de mobiliário, processo, ritmo ou organização do trabalho.',
        },
        {
          q: 'Call center e teleatendimento precisam de regras específicas além da NR-17 geral?',
          a: 'Sim. O Anexo II trata de teleatendimento e telemarketing. Em uma jornada efetiva superior a 4 horas, prevê duas pausas contínuas de 10 minutos e intervalo de 20 minutos para repouso e alimentação, além de regras para mobiliário, headset, organização do trabalho e capacitação.',
        },
        {
          q: 'Supermercado precisa cumprir algum anexo específico da NR-17?',
          a: 'O Anexo I se aplica especificamente aos operadores de checkout. As demais funções do supermercado, como reposição e açougue, são avaliadas pela parte geral da NR-17 e por outras normas que incidam sobre a atividade.',
        },
      ]}
      sidebarTitle="A avaliação ergonômica está em dia?"
      sidebarHook="A avaliação ergonômica precisa refletir o trabalho real. A SERMST pode registrar a análise preliminar, verificar se há indicação de AET e organizar as medidas no plano de ação."
      sidebarCtaLabel="Solicitar AET"
      related={[
        { label: 'Guia da NR-01 e atualização do PGR', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'PCMSO (NR-07): programa', href: '/servicos/pcmso-nr07-programa/sao-paulo' },
        { label: 'O que é saúde ocupacional', href: '/saude/o-que-e-saude-ocupacional' },
        { label: 'Como evitar processos trabalhistas', href: '/rh/evitar-processos-trabalhistas' },
      ]}
    />
  );
}
