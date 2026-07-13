import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'O que faz um gerente? Funções e responsabilidades | SERMST',
  description:
    'Entenda o que faz um gerente, quais funções e responsabilidades o cargo assume, a diferença para supervisor e coordenador e onde SST entra nessa liderança.',
  alternates: { canonical: 'https://sermst.com.br/rh/o-que-um-gerente-faz' },
  robots: 'index, follow',
  openGraph: {
    title: 'O que faz um gerente? Funções e responsabilidades | SERMST',
    description:
      'Entenda o que faz um gerente, como o cargo se diferencia de outras lideranças e quais obrigações de SST recaem sobre essa função.',
    url: 'https://sermst.com.br/rh/o-que-um-gerente-faz',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function OQueUmGerenteFazPage() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/site/b2b-partnership.jpg", alt: "Gerente conduzindo reunião de equipe em ambiente corporativo" }}
      hubLabel="RH e Departamento Pessoal"
      hubLabelShort="← RH e DP"
      hubHref="/rh"
      pageUrl="https://sermst.com.br/rh/o-que-um-gerente-faz"
      author={{
        name: 'Felipe Sannino',
        jobTitle: 'Advogado em Direito do Trabalho e SST · OAB/SP 430.824',
        url: 'https://sermst.com.br/equipe/felipe-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-07-13',
      }}

      h1="O que faz um gerente? Funções, responsabilidades e impacto na empresa"
      intro="Este guia ajuda o RH a estruturar o cargo de gerente, diferenciar níveis de liderança e definir o papel do gestor na rotina de segurança e saúde da equipe."
      sections={[
        {
          title: 'O que faz um gerente na prática',
          body: (
            <>
              <p>
                O gerente costuma conectar as decisões da diretoria à rotina da equipe. Planeja recursos, acompanha indicadores, distribui responsabilidades e resolve problemas que atravessam mais de uma função.
              </p>
              <p>
                Em empresas familiares, essa função às vezes surge sem descrição clara. O profissional recebe o título, mas continua sem autonomia, orçamento ou critérios de decisão. Definir as atribuições antes da promoção evita boa parte desse conflito.
              </p>
            </>
          ),
        },
        {
          title: 'Seis entregas comuns de um gerente',
          body: (
            <ol>
              <li><strong>Resultado da área:</strong> acompanhar indicadores, prazos e metas compatíveis com a operação.</li>
              <li><strong>Desenvolvimento da equipe:</strong> identificar necessidades de orientação, treinamento, movimentação e contratação.</li>
              <li><strong>Gestão de processo:</strong> garantir que o procedimento existe, está claro, é seguido e melhora com o tempo.</li>
              <li><strong>Saúde e segurança da operação:</strong> cumprir e fazer cumprir os procedimentos que cabem à área, comunicar riscos e interromper situações que não possam ser controladas.</li>
              <li><strong>Reporte e visibilidade:</strong> levar à diretoria problemas e indicadores relevantes em tempo de decisão.</li>
              <li><strong>Decisão e escalonamento:</strong> decidir dentro da própria autonomia e encaminhar o que exige validação superior ou técnica.</li>
            </ol>
          ),
        },
        {
          title: 'Diferença entre gerente, supervisor e coordenador',
          body: (
            <>
              <p>
                A legislação não cria uma divisão universal entre esses títulos. Na prática, muitas empresas usam a seguinte organização:
              </p>
              <ul>
                <li><strong>Coordenador:</strong> integra atividades, projetos ou especialistas e acompanha a execução.</li>
                <li><strong>Supervisor:</strong> acompanha mais de perto turnos, equipes ou frentes operacionais.</li>
                <li><strong>Gerente:</strong> responde por resultados consolidados, recursos e decisões de uma área.</li>
              </ul>
              <p>
                O mais importante é fazer descrição, autonomia e remuneração corresponderem ao trabalho real. O título sozinho não define atribuições nem afasta o risco de desvio ou acúmulo de função.
              </p>
            </>
          ),
        },
        {
          title: 'Perfil que costuma funcionar',
          body: (
            <ul>
              <li>Capacidade de decidir com as informações disponíveis e reconhecer quando precisa de apoio</li>
              <li>Comunicação clara com diretoria, pares e equipe</li>
              <li>Visão do processo, não apenas da tarefa isolada</li>
              <li>Coerência entre o que orienta e o que pratica</li>
              <li>Capacidade de lidar com divergências e dar feedback objetivo</li>
              <li>Conhecimento técnico suficiente da área para não ser enganado pela equipe</li>
            </ul>
          ),
        },
        {
          title: 'O papel do gerente na rotina de SST',
          body: (
            <>
              <p>
                A promoção não cria automaticamente responsabilidade solidária por qualquer acidente. Ela amplia, porém, o dever de agir dentro das atribuições e da autonomia que a empresa concedeu ao gerente.
              </p>
              <p>
                Em uma apuração, podem ser avaliados o conhecimento do risco, a possibilidade de intervenção, as ordens dadas e a participação causal de cada pessoa. A eventual responsabilidade civil ou penal depende desses elementos e não decorre apenas do cargo.
              </p>
              <p>
                Para que o gerente desempenhe esse papel, a empresa precisa definir responsabilidades, fornecer treinamento e manter canais de comunicação com o SESMT ou com o responsável técnico. Três pontos ajudam:
              </p>
              <ol>
                <li><strong>Treinamento documentado nas NRs aplicáveis</strong> à área que comanda (NR-10, NR-12, NR-18, NR-35 etc.).</li>
                <li><strong>PCMSO coerente com os riscos:</strong> a função gerencial também deve ser avaliada conforme as exposições reais.</li>
                <li><strong>Procedimentos por escrito:</strong> com limites de autonomia, formas de comunicar desvios e critérios de interrupção.</li>
              </ol>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'Qual o salário médio de um gerente?',
          a: 'Varia por setor, região, porte, equipe, orçamento e autonomia. Pesquisas salariais da categoria e a convenção coletiva aplicável são referências mais seguras do que uma faixa única para todos os cargos chamados de gerente.',
        },
        {
          q: 'O gerente precisa de exame admissional e periódico?',
          a: 'Sim. O admissional é realizado antes de o empregado assumir as atividades. Os exames seguintes obedecem à NR-07 e ao PCMSO, com periodicidade definida pelo enquadramento e pelos riscos, não apenas pelo título de gerente.',
        },
        {
          q: 'O gerente pode responder por acidente da equipe?',
          a: 'A conduta do gerente pode ser apurada quando ele tinha atribuição, autonomia, conhecimento do risco e participação no fato. A responsabilidade não é automaticamente solidária. Treinamento, descrição de cargo e procedimentos ajudam a esclarecer o que cabia ao gestor e à empresa.',
        },
        {
          q: 'Como saber se um gerente está pronto para o cargo?',
          a: 'Alguns sinais são capacidade de priorizar, comunicar decisões, desenvolver pessoas e enxergar o processo além da própria tarefa. O desempenho técnico é importante, mas não substitui as competências de liderança.',
        },
        {
          q: 'Qual a diferença entre gerente e diretor?',
          a: 'Em muitas estruturas, o gerente responde pela execução e pelos recursos de uma área, enquanto o diretor decide prioridades e investimentos mais amplos. Em empresas menores os papéis podem se acumular, por isso a descrição real das atribuições é mais útil do que o título.',
        },
      ]}
      sidebarTitle="Você tem gerentes na operação?"
      sidebarHook="O gerente precisa saber quais riscos comunicar, quais procedimentos cobrar e quando interromper uma atividade. A SERMST verifica como esse papel aparece no PGR, no PCMSO e nos treinamentos."
      sidebarCtaLabel="Auditar SST da liderança"
      related={[
        { label: 'Função encarregado: responsabilidades', href: '/rh/funcao-encarregado' },
        { label: 'Como treinar gerentes', href: '/rh/treinamento-gerentes' },
        { label: 'Quando demitir um funcionário', href: '/rh/quando-demitir-funcionario' },
        { label: 'Multa de eSocial S-2220', href: '/rh/multa-esocial-s2220' },
      ]}
    />
  );
}
