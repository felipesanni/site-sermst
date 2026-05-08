import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Como treinar gerentes: guia para desenvolver líderes de alto desempenho | SERMST',
  description:
    'Gerente promovido sem treinamento vira problema na equipe e na operação. Treinar liderança retorna em produtividade, retenção e segurança. Veja como estruturar.',
  alternates: { canonical: 'https://sermst.com.br/rh/treinamento-gerentes' },
};

export default function TreinamentoGerentesPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub de RH e Departamento Pessoal"
      hubLabelShort="← Hub de RH e DP"
      hubHref="/rh"
      pageUrl="https://sermst.com.br/rh/treinamento-gerentes"
      h1="Como treinar gerentes: o guia para desenvolver líderes que entregam"
      intro="Gerente promovido sem treinamento vira problema na equipe e na operação. Treinar liderança é investimento que retorna em produtividade, retenção, segurança e até em redução de processo trabalhista. Veja como estruturar."
      sections={[
        {
          title: 'Por que empresas falham na formação de gerentes',
          body: (
            <>
              <p>
                A maior parte das empresas familiares promove o melhor técnico para gerente — vendedor que mais vendia, operador mais experiente, encarregado mais antigo. Lógica intuitiva: &quot;quem fez bem, vai liderar bem&quot;.
              </p>
              <p>
                A intuição falha porque <strong>liderar é outra competência</strong>. O técnico foca em fazer; o gerente foca em fazer fazer. Sem treinamento, o profissional promovido continua tentando &quot;produzir&quot; (faz o trabalho dos subordinados, micro-gerencia, vira gargalo) ou se afasta da operação (perde o pé, decide mal). Os dois são problema.
              </p>
              <p>
                Resultado: empresa perde um operador bom, ganha um gerente médio, e a equipe inteira sofre.
              </p>
            </>
          ),
        },
        {
          title: 'As 5 áreas que o gerente precisa dominar',
          body: (
            <ol>
              <li><strong>Gestão de gente</strong> — feedback, contratação, demissão, desenvolvimento, conflito. É a parte mais difícil e a mais subestimada em treinamento.</li>
              <li><strong>Gestão de processo</strong> — definir, documentar, melhorar fluxo. Não basta &quot;saber fazer&quot;, tem que sistematizar.</li>
              <li><strong>Gestão de indicador</strong> — quais metas medem o trabalho, como construir painel, como interpretar resultado.</li>
              <li><strong>Decisão estratégica e tática</strong> — quando pedir ajuda, quando decidir sozinho, como priorizar.</li>
              <li><strong>Segurança do trabalho</strong> — responsabilidade direta do gerente pela SST da equipe que comanda. Frequentemente esquecido em treinamento de liderança.</li>
            </ol>
          ),
        },
        {
          title: 'Estrutura de um programa que funciona',
          body: (
            <>
              <p>
                Programa de formação de gerente em empresa familiar deve ter 3 fases:
              </p>
              <h3>Fase 1: Onboarding técnico (mês 1-2)</h3>
              <ul>
                <li>Estrutura organizacional, indicadores da empresa, áreas críticas</li>
                <li>Procedimentos de RH (admissão, advertência, rescisão, plano de carreira)</li>
                <li>Procedimentos de SST aplicáveis à área (NRs, EPIs, treinamentos)</li>
                <li>Sistemas internos (ERP, CRM, controle de ponto, eSocial)</li>
                <li>Apresentação à equipe e a outras lideranças</li>
              </ul>
              <h3>Fase 2: Desenvolvimento de liderança (mês 2-6)</h3>
              <ul>
                <li>Curso formal de gestão de pessoas (interno ou externo)</li>
                <li>Coaching ou mentoria com gestor sênior</li>
                <li>Acompanhamento em situações reais (entrevista, feedback, decisão difícil)</li>
                <li>Estudo de caso de situações que aconteceram na empresa</li>
              </ul>
              <h3>Fase 3: Avaliação e ajuste (mês 6-12)</h3>
              <ul>
                <li>Avaliação 360 com superiores, pares e subordinados</li>
                <li>Plano de desenvolvimento individual baseado no feedback</li>
                <li>Mentoria continuada</li>
                <li>Análise de indicadores: rotatividade da equipe, produtividade, clima</li>
              </ul>
            </>
          ),
        },
        {
          title: 'O treinamento que ninguém faz: SST para o gestor',
          body: (
            <>
              <p>
                Aqui está o ponto que mais se subestima: <strong>o gerente é responsabilizado direta e solidariamente pela SST da equipe</strong>. Em caso de acidente grave, ele responde com a empresa em esfera civil e, em casos extremos, criminal.
              </p>
              <p>
                Treinamento de gerência precisa cobrir:
              </p>
              <ul>
                <li>NRs aplicáveis à área (NR-10, 12, 18, 35, conforme operação)</li>
                <li>Como cobrar uso de EPI sem virar conflito</li>
                <li>Como reportar quase-acidente ou condição insegura</li>
                <li>Como conduzir investigação de acidente</li>
                <li>Como atualizar PGR e PCMSO quando há mudança</li>
                <li>Responsabilidades legais do gestor e como se proteger</li>
              </ul>
              <p>
                Empresa que treina gerente em vendas, finanças, RH mas não em SST está formando uma exposição. Sólido programa cobre os 5 pilares — incluindo SST.
              </p>
            </>
          ),
        },
        {
          title: 'Erros caros no programa de formação',
          body: (
            <ol>
              <li><strong>Treinamento só na hora da promoção.</strong> Liderança se desenvolve em meses, não em uma semana. Programa precisa de continuidade.</li>
              <li><strong>Curso externo sem aplicação interna.</strong> MBA caro sem espaço para aplicar = papel passa em branco. Cursos técnicos precisam de mentor que ajude na aplicação.</li>
              <li><strong>Mentor ausente.</strong> Designar mentor que não tem tempo é pior que não designar. Mentor real conversa semanalmente, dá feedback, está disponível em situação difícil.</li>
              <li><strong>Sem avaliação de progresso.</strong> Como saber se está formando bom gerente sem medir? 360 anual no mínimo.</li>
              <li><strong>Pular a parte de SST.</strong> Custa caro depois.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'Quanto investir em formação de gerente?',
          a: 'Empresa pequena: 1-2% da folha de gerência por ano em desenvolvimento (cursos, mentoria, livros, eventos). Empresa média: 3-5%. Empresa que investe menos que 1% normalmente paga mais em rotatividade e baixa produtividade. Cálculo do ROI vem por retenção, taxa de promoção interna e indicadores da equipe.',
        },
        {
          q: 'Treinar internamente ou contratar externo?',
          a: 'Mistura. Conhecimento técnico interno (processo, sistema, cultura) — interno. Habilidades de liderança e gestão — externo costuma ser mais robusto, com bibliografia, casos e neutralidade. Mentor externo evita vícios da empresa.',
        },
        {
          q: 'Quando promover a gerente?',
          a: 'Três sinais: a pessoa já influencia a equipe sem cargo; já mostra capacidade de decisão sob pressão; já demonstra interesse em desenvolver outras pessoas. Sem um desses três, a promoção é para reter (com risco) ou para premiar (forma errada).',
        },
        {
          q: 'O que avaliar em 360 de gerente?',
          a: 'Quatro dimensões: resultado entregue, gestão da equipe (clima, retenção, desenvolvimento), competência técnica, aderência aos valores da empresa. Avaliadores: superior direto, 2-3 pares, 3-5 subordinados, eventualmente cliente interno. 360 anônimo dá a leitura mais real.',
        },
        {
          q: 'O que fazer se o gerente promovido não está dando certo?',
          a: 'Primeiro: identificar se é gap de conhecimento (resolve com treinamento) ou gap de aptidão (pessoa não tem perfil). Para gap de conhecimento: plano com prazo. Para gap de aptidão: oferecer retorno honroso à função técnica anterior (sem demissão). Forçar a permanência num cargo errado quebra a pessoa e a equipe.',
        },
      ]}
      sidebarTitle="Seus gerentes têm SST documentado?"
      sidebarHook="Gerente sem treinamento de SST documentado é exposição direta da empresa em acidente. A SERMST integra módulo de SST ao programa de formação de liderança."
      sidebarCtaLabel="Programa SST para gestão"
      related={[
        { label: 'O que um gerente faz', href: '/rh/o-que-um-gerente-faz' },
        { label: 'Função encarregado', href: '/rh/função-encarregado' },
        { label: 'Treinamentos NR/CIPA/brigada', href: '/servicos/treinamentos-nrs-cipa-brigada/sao-paulo' },
        { label: 'Quando demitir um funcionário', href: '/rh/quando-demitir-funcionario' },
      ]}
    />
  );
}
