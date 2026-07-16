import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Como treinar gerentes: guia prático | SERMST',
  description:
    'Gerente promovido sem treinamento vira problema na equipe e na operação. Treinar liderança retorna em produtividade, retenção e segurança. Veja como estruturar.',
  alternates: { canonical: 'https://sermst.com.br/rh/treinamento-gerentes' },
  robots: 'index, follow',
  openGraph: {
    title: 'Treinamento para gerentes em SST: obrigações, NRs e responsabilidade | SERMST',
    description:
      'O que a lei exige em treinamentos SST para gerentes e lideranças: NR-1, CIPA, NR-35 e como estruturar a capacitação de forma que proteja a empresa.',
    url: 'https://sermst.com.br/rh/treinamento-gerentes',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function TreinamentoGerentesPage() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/site/corporate-team.jpg", alt: "Treinamento de liderança e capacitação de gestores em empresa" }}
      hubLabel="RH e Departamento Pessoal"
      hubLabelShort="← RH e DP"
      hubHref="/rh"
      pageUrl="https://sermst.com.br/rh/treinamento-gerentes"
      author={{
        name: 'Felipe Sannino',
        jobTitle: 'Advogado em Direito do Trabalho e SST · OAB/SP 430.824',
        url: 'https://sermst.com.br/equipe/felipe-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-07-13',
      }}

      h1="Como treinar gerentes: o guia para desenvolver líderes que entregam"
      intro="A promoção para um cargo de gestão exige novas competências. Veja como combinar conhecimento da operação, gestão de pessoas, acompanhamento de resultados e responsabilidades de SST em um programa aplicável à rotina."
      sections={[
        {
          title: 'Por que empresas falham na formação de gerentes',
          body: (
            <>
              <p>
                Muitas empresas promovem o profissional de melhor desempenho técnico: o vendedor que mais vendeu, o operador mais experiente ou o encarregado mais antigo. A escolha pode fazer sentido, mas a nova função exige competências diferentes.
              </p>
              <p>
                <strong>Liderar é uma competência própria.</strong> Sem preparação, o novo gerente pode continuar executando o trabalho da equipe, centralizar decisões ou se afastar demais da operação. O programa de formação deve ajudá-lo a encontrar esse equilíbrio.
              </p>
              <p>
                A transição precisa de expectativas claras, acompanhamento e espaço para aprender com situações reais.
              </p>
            </>
          ),
        },
        {
          title: 'As 5 áreas que o gerente precisa dominar',
          body: (
            <ol>
              <li><strong>Gestão de pessoas:</strong> feedback, contratação, desenvolvimento e tratamento de conflitos.</li>
              <li><strong>Gestão de processos:</strong> definir responsabilidades, documentar rotinas e corrigir gargalos.</li>
              <li><strong>Gestão de indicadores:</strong> escolher medidas úteis e interpretar os resultados sem transformar o painel em um fim.</li>
              <li><strong>Decisão e priorização:</strong> reconhecer o que pode decidir e o que precisa escalar.</li>
              <li><strong>Segurança do trabalho:</strong> conhecer os procedimentos da área, comunicar desvios e atuar dentro da autonomia recebida.</li>
            </ol>
          ),
        },
        {
          title: 'Estrutura de um programa que funciona',
          body: (
            <>
              <p>
                Um programa pode ser organizado em três fases, ajustadas ao porte e à função:
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
                <li>Mentoria com gestor experiente</li>
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
                O gerente não responde de forma direta e solidária por todo acidente apenas por ocupar o cargo. Sua conduta pode ser apurada quando ele tinha atribuição, autonomia, conhecimento do risco e possibilidade de agir.
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
                <li>Limites de responsabilidade, autonomia e escalonamento</li>
              </ul>
              <p>
                A formação em SST deve ser prática: o gestor precisa saber o que observar, a quem comunicar, quais registros produzir e quando interromper o trabalho.
              </p>
            </>
          ),
        },
        {
          title: 'Erros caros no programa de formação',
          body: (
            <ol>
              <li><strong>Treinamento só na hora da promoção.</strong> Liderança se desenvolve em meses, não em uma semana. Programa precisa de continuidade.</li>
              <li><strong>Curso externo sem aplicação interna.</strong> O conteúdo perde valor quando não é ligado às situações e decisões da empresa.</li>
              <li><strong>Mentor ausente.</strong> Designar mentor que não tem tempo é pior que não designar. Mentor real conversa semanalmente, dá feedback, está disponível em situação difícil.</li>
              <li><strong>Sem avaliação de progresso.</strong> A frequência e o método devem ser adequados à maturidade da equipe; avaliação 360 é uma opção, não uma obrigação anual universal.</li>
              <li><strong>Ignorar SST.</strong> O gestor fica sem referência para lidar com riscos, recusas, incidentes e mudanças na operação.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'Quanto investir em formação de gerente?',
          a: 'Não existe um percentual universal. O orçamento deve considerar lacunas da função, complexidade da operação, formato do programa e tempo de acompanhamento. Indicadores de desempenho, rotatividade e promoção interna ajudam a avaliar o investimento.',
        },
        {
          q: 'Treinar internamente ou contratar externo?',
          a: 'Uma combinação costuma funcionar: processos, sistemas e critérios internos podem ser ensinados pela própria empresa; conteúdos especializados podem vir de instrutores externos. O importante é conectar o curso às decisões que o gerente realmente toma.',
        },
        {
          q: 'Quando promover a gerente?',
          a: 'Observe se a pessoa consegue priorizar, comunicar, aprender com feedback e ajudar outros profissionais a evoluir. A promoção deve vir acompanhada de atribuições, autonomia e apoio compatíveis.',
        },
        {
          q: 'O que avaliar em 360 de gerente?',
          a: 'Podem ser avaliados resultados, gestão da equipe, competência técnica, comunicação e aderência aos valores. A composição dos avaliadores e o anonimato dependem do tamanho da equipe e da confiança no processo.',
        },
        {
          q: 'O que fazer se o gerente promovido não está dando certo?',
          a: 'Primeiro: identificar se é gap de conhecimento (resolve com treinamento) ou gap de aptidão (pessoa não tem perfil). Para gap de conhecimento: plano com prazo. Para gap de aptidão: oferecer retorno honroso à função técnica anterior (sem demissão). Forçar a permanência num cargo errado quebra a pessoa e a equipe.',
        },
      ]}
      sidebarTitle="Seus gerentes têm SST documentado?"
      sidebarHook="A SERMST ajuda a transformar os riscos e procedimentos da empresa em orientação prática para quem lidera equipes."
      sidebarCtaLabel="Programa SST para gestão"
      related={[
        { label: 'O que um gerente faz', href: '/rh/o-que-um-gerente-faz' },
        { label: 'Função encarregado', href: '/rh/funcao-encarregado' },
        { label: 'Treinamentos NR/CIPA/brigada', href: '/servicos/treinamentos-nrs-cipa-brigada/sao-paulo' },
        { label: 'Quando demitir um funcionário', href: '/rh/quando-demitir-funcionario' },
      ]}
    />
  );
}
