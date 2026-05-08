import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'O que um gerente faz: funções, responsabilidades e impacto real | SERMST',
  description:
    'Guia direto sobre a função de gerente: o que faz no dia a dia, responsabilidades técnicas, perfil que entrega resultado, diferença para supervisor e o ponto cego de SST que pega gestores promovidos sem treinamento.',
  alternates: { canonical: 'https://sermst.com.br/rh/o-que-um-gerente-faz' },
};

export default function OQueUmGerenteFazPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub de RH e Departamento Pessoal"
      hubLabelShort="← Hub de RH e DP"
      hubHref="/rh"
      pageUrl="https://sermst.com.br/rh/o-que-um-gerente-faz"
      h1="O que um gerente faz: funções, responsabilidades e impacto na empresa"
      intro="Guia para gestores e RH que estão estruturando o cargo: o que entrega o gerente, perfil que funciona, erros que custam caro e por que SST é responsabilidade direta dele."
      sections={[
        {
          title: 'O papel real do gerente',
          body: (
            <>
              <p>
                Gerente é o cargo que transforma estratégia da diretoria em execução real da equipe. É quem reúne planejamento, gente e indicador num único ponto de responsabilidade. Diferente do supervisor (que coordena turno e operação imediata) e do diretor (que define rota e investimento), o gerente é a peça que faz a engrenagem girar no nível tático.
              </p>
              <p>
                Em empresa familiar, o gerente costuma ser o cargo mais subestimado e mais decisivo: subestimado porque a diretoria assume que &quot;todo mundo é gente da casa&quot;, decisivo porque é ele que define se o plano da diretoria vira resultado mensurável ou se vira reclamação no fim do mês.
              </p>
            </>
          ),
        },
        {
          title: 'As 6 entregas reais de um gerente',
          body: (
            <ol>
              <li><strong>Resultado da área:</strong> indicador batido, meta cumprida, prazo entregue. Sem isso, qualquer outra coisa é teatro.</li>
              <li><strong>Desenvolvimento da equipe:</strong> identificar quem precisa de treinamento, quem está pronto para promoção, quem precisa sair. Time bom não nasce sozinho.</li>
              <li><strong>Gestão de processo:</strong> garantir que o procedimento existe, está claro, é seguido e melhora com o tempo.</li>
              <li><strong>Saúde e segurança da operação:</strong> responsabilidade direta pelo SST da equipe — PCMSO em dia, EPI sendo usado, treinamento NR formalizado.</li>
              <li><strong>Reporte e visibilidade:</strong> levar à diretoria os indicadores que importam, antes de virarem crise.</li>
              <li><strong>Decisão sob incerteza:</strong> quando o procedimento não cobre, o gerente decide. Sem trava, sem empurrar para cima.</li>
            </ol>
          ),
        },
        {
          title: 'Diferença entre gerente, supervisor e coordenador',
          body: (
            <>
              <p>
                Os cargos se confundem porque cada empresa nomeia diferente. Mas no padrão de mercado:
              </p>
              <ul>
                <li><strong>Coordenador:</strong> coordena pessoas que executam atividades operacionais. Responsabilidade técnica forte, gestão de gente menor.</li>
                <li><strong>Supervisor:</strong> supervisiona turnos, equipes e encarregados. Está no campo, com a operação rolando.</li>
                <li><strong>Gerente:</strong> responde por resultado consolidado da área (vendas, produção, RH, financeiro etc.). Tem orçamento, define meta, distribui recurso.</li>
              </ul>
              <p>
                Confusão mais comum: chamar de gerente quem na prática é supervisor. Resultado: o cargo paga melhor mas a pessoa não tem autonomia de gerente — fica frustrada e a empresa paga adicional sem ganhar entrega.
              </p>
            </>
          ),
        },
        {
          title: 'Perfil que costuma funcionar',
          body: (
            <ul>
              <li>Capacidade de tomar decisão com informação incompleta — o cargo é decisão, não execução</li>
              <li>Comunicação direta para cima e para baixo — fala com diretor e fala com operador no mesmo dia</li>
              <li>Visão de processo, não só de tarefa — enxerga onde o gargalo nasce</li>
              <li>Postura de exemplo — chega no horário, segue procedimento, usa EPI, cobra o mesmo</li>
              <li>Tolerância a conflito — vai precisar dar feedback duro e ouvir feedback duro</li>
              <li>Conhecimento técnico suficiente da área para não ser enganado pela equipe</li>
            </ul>
          ),
        },
        {
          title: 'O ponto cego de SST que pega gestores promovidos',
          body: (
            <>
              <p>
                Aqui está a parte que ninguém te conta no upgrade para gerente: <strong>você passa a ser solidariamente responsável por acidente da equipe.</strong>
              </p>
              <p>
                Se houver acidente grave e a investigação concluir que o gerente conhecia o risco e não agiu — não exigiu EPI, não corrigiu procedimento, não promoveu treinamento — ele responde junto com a empresa. Em casos extremos, pode até ser responsabilizado criminalmente.
              </p>
              <p>
                Para a empresa, o impacto é direto: se a documentação de SST não comprovar que o gerente foi treinado e que repassou as instruções para a equipe, a defesa em ação trabalhista cai. Por isso, três coisas precisam estar feitas para todo gerente:
              </p>
              <ol>
                <li><strong>Treinamento documentado nas NRs aplicáveis</strong> à área que comanda (NR-10, NR-12, NR-18, NR-35 etc.).</li>
                <li><strong>PCMSO em dia</strong> — o cargo de gerente também tem riscos específicos que o programa precisa refletir.</li>
                <li><strong>Procedimentos por escrito</strong> sobré o que ele tem que cobrar da equipe, com evidência de leitura e ciência.</li>
              </ol>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'Qual o salário médio de um gerente?',
          a: 'Varia muito por área e porte. Em empresa média (50-300 funcionários) em São Paulo, gerente operacional fica entre R$ 8 mil e R$ 18 mil. Gerente de área crítica (financeiro, comercial, industrial) pode passar de R$ 25 mil. O que dita não é o título, é o tamanho do orçamento sob responsabilidade e o impacto da decisão dele no resultado.',
        },
        {
          q: 'O gerente precisa de exame admissional e periódico?',
          a: 'Sim. Toda contratação CLT exige ASO admissional. O periódico depende do PCMSO — geralmente bienal para função administrativa, anual para função operacional ou de risco. Pular o exame de gerente é comum porque parece &quot;menos exposto&quot;, mas o cargo tem risco específico (estresse, decisão sob pressão) que deve ser monitorado.',
        },
        {
          q: 'O gerente pode responder por acidente da equipe?',
          a: 'Pode, e responde com frequência. A responsabilidade é solidária: se houver omissão comprovada (gerente sabia do risco e não agiu), ele responde civilmente e, em casos graves, criminalmente. Por isso documentar treinamento, repasse de instruções e fiscalização não é burocracia — é proteção pessoal.',
        },
        {
          q: 'Como saber se um gerente está pronto para o cargo?',
          a: 'Três sinais: ele já toma decisão sob pressão sem travar, já dá feedback duro sem perder o time, e enxerga o sistema (não só a tarefa). Se a pessoa só tem desempenho técnico de operador, vai ser um operador caro com crachá de gerente.',
        },
        {
          q: 'Qual a diferença entre gerente e diretor?',
          a: 'Gerente é responsável pela execução de uma área. Diretor define a rota da empresa, decide investimento e responde pelo conjunto das áreas. Em empresa pequena os papéis se misturam — o sócio-diretor faz gerência operacional. Em empresa que vai crescer, separar os papéis é o que destrava escala.',
        },
      ]}
      sidebarTitle="Você tem gerentes na operação?"
      sidebarHook="Gerente sem treinamento de SST documentado é exposição direta para a empresa em fiscalização ou acidente. A SERMST audita PCMSO, PGR e treinamentos de toda a estrutura — sem custo inicial."
      sidebarCtaLabel="Auditar SST da liderança"
      related={[
        { label: 'Função encarregado: responsabilidades', href: '/rh/função-encarregado' },
        { label: 'Como treinar gerentes', href: '/rh/treinamento-gerentes' },
        { label: 'Quando demitir um funcionário', href: '/rh/quando-demitir-funcionario' },
        { label: 'Multa de eSocial S-2220', href: '/rh/multa-esocial-s2220' },
      ]}
    />
  );
}
