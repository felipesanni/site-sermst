import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-15: Insalubridade, Adicional e Laudo Técnico | SERMST',
  description:
    'Entenda como a NR-15 caracteriza atividades insalubres, quais são os graus do adicional e como documentar a avaliação técnica da exposição.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-15-insalubridade' },
  openGraph: {
    title: 'NR-15: quando há insalubridade e como controlar a exposição | SERMST',
    description:
      'Entenda a NR-15 e o adicional de insalubridade: agentes insalubres, limites de tolerância, laudos, EPI e como a empresa pode eliminar ou neutralizar a exposição.',
    url: 'https://sermst.com.br/normas/nr-15-insalubridade',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function NR15Page() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/site/safety-equipment.jpg", alt: "Ambiente de trabalho com agentes insalubres e equipamentos de proteção NR-15" }}
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="← Normas"
      hubHref="/normas"
      pageUrl="https://sermst.com.br/normas/nr-15-insalubridade"
      badgeText="NR-15"
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-05-01',
      }}

      h1="NR-15: insalubridade para gestores e RH"
      intro="A NR-15 reúne critérios quantitativos e qualitativos para caracterizar atividades insalubres. O enquadramento depende do agente, da forma de exposição, do anexo aplicável e de avaliação técnica do ambiente de trabalho."
      quickAnswer={
        <p>
          A <strong>NR-15</strong> reúne atividades, operações e limites de tolerância relacionados a agentes físicos, químicos e biológicos. Quando há enquadramento em um de seus anexos, o adicional pode ser de <strong>10% (grau mínimo)</strong>, <strong>20% (grau médio)</strong> ou <strong>40% (grau máximo)</strong>. A análise deve considerar o caso concreto e ser feita por profissional legalmente habilitado.
        </p>
      }
      sections={[
        {
          title: 'O que é a NR-15 (em uma frase)',
          body: (
            <>
              <p>
                A NR-15 combina duas formas de avaliação. Alguns anexos usam limites de tolerância e medições; outros caracterizam a insalubridade por inspeção da atividade e das condições de trabalho. Por isso, não basta identificar a presença de um agente no ambiente.
              </p>
            </>
          ),
        },
        {
          title: 'Os três graus de insalubridade',
          body: (
            <>
              <ul>
                <li><strong>Grau mínimo:</strong> adicional de 10%.</li>
                <li><strong>Grau médio:</strong> adicional de 20%.</li>
                <li><strong>Grau máximo:</strong> adicional de 40%.</li>
              </ul>
              <p>
                O grau não é escolhido livremente pela empresa. Ele vem do anexo aplicável ao agente ou à atividade. A base de cálculo continua sendo tema jurídico sensível; na prática, é necessário verificar a legislação, a norma coletiva e a orientação jurídica aplicável antes de fechar a folha.
              </p>
            </>
          ),
        },
        {
          title: 'O que precisa estar documentado',
          body: (
            <ol>
              <li><strong>Laudo técnico</strong> assinado por médico do trabalho ou engenheiro de segurança, com descrição da atividade, metodologia e conclusão.</li>
              <li><strong>Avaliações quantitativas</strong> quando o anexo exigir, como dosimetria de ruído, avaliação de calor e amostragem de agentes químicos.</li>
              <li><strong>PGR</strong> coerente com os riscos e controles encontrados na avaliação.</li>
              <li><strong>PCMSO</strong> planejado a partir dos riscos ocupacionais identificados.</li>
              <li><strong>Folha de pagamento</strong> com o adicional identificado, quando devido.</li>
              <li><strong>S-2240</strong> no eSocial refletindo a exposição.</li>
            </ol>
          ),
        },
        {
          title: 'Como eliminar ou neutralizar a insalubridade',
          body: (
            <>
              <p>
                A prioridade é eliminar o agente ou reduzir a exposição na fonte, com mudança de processo, substituição de produto, enclausuramento ou outra medida coletiva. O EPI entra quando as medidas anteriores não forem suficientes ou enquanto estão sendo implantadas.
              </p>
              <p>
                Antes de alterar o pagamento do adicional, a empresa deve:
              </p>
              <ol>
                <li>Implementar e verificar a eficácia das medidas de controle.</li>
                <li>Atualizar a avaliação técnica da exposição.</li>
                <li>Documentar seleção, entrega, treinamento, higienização e substituição de EPI, quando aplicável.</li>
                <li>Atualizar PGR, PCMSO e informações enviadas ao eSocial.</li>
                <li>Revisar a mudança com as áreas técnica, trabalhista e de folha.</li>
              </ol>
              <p>
                A simples entrega de EPI ou a existência de um laudo antigo não demonstram neutralização. O que importa é a eficácia da medida nas condições reais de trabalho.
              </p>
            </>
          ),
        },
        {
          title: 'Cinco erros frequentes',
          body: (
            <ol>
              <li><strong>Definir o adicional por costume.</strong> O enquadramento deve partir da atividade e do anexo aplicável.</li>
              <li><strong>Ignorar mudanças na operação.</strong> Produto, máquina, ventilação, jornada ou layout podem alterar a exposição.</li>
              <li><strong>Tratar a ficha de EPI como prova suficiente.</strong> É preciso demonstrar adequação e eficácia do equipamento.</li>
              <li><strong>Usar avaliação desatualizada.</strong> O documento precisa representar as condições atuais do trabalho.</li>
              <li><strong>Confundir insalubridade com aposentadoria especial.</strong> Os critérios trabalhistas e previdenciários não são idênticos.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'Insalubridade é cumulativa com periculosidade?',
          a: 'Em regra, a CLT determina a opção pelo adicional mais favorável quando a atividade reúne condições insalubres e perigosas. A convenção coletiva e o caso concreto também devem ser verificados.',
        },
        {
          q: 'Quem assina o laudo de insalubridade?',
          a: 'Médico do trabalho ou engenheiro de segurança do trabalho legalmente habilitado. Pode haver coassinatura conforme escopo do laudo. Sem profissional habilitado, o documento não tem validade técnica.',
        },
        {
          q: 'O adicional incide sobre salário base ou salário mínimo?',
          a: 'A base de cálculo envolve discussão jurídica e pode ser afetada por norma coletiva. Antes de calcular ou alterar o pagamento, confira a convenção aplicável e a orientação jurídica adotada pela empresa.',
        },
        {
          q: 'Aposentadoria especial precisa de exposição contínua?',
          a: 'A aposentadoria especial segue critérios previdenciários próprios. Na esfera trabalhista, a exposição intermitente pode gerar adicional quando faz parte habitual da atividade, enquanto a exposição meramente eventual deve ser analisada de modo diferente. NR-15 e PPP/LTCAT não podem ser tratados como equivalentes.',
        },
        {
          q: 'NR-15 e LTCAT são a mesma coisa?',
          a: 'Não. A NR-15 organiza o enquadramento trabalhista da insalubridade. O LTCAT entra na base previdenciária que sustenta PPP, S-2240 e discussões sobre aposentadoria especial.',
        },
        {
          q: 'Como contestar insalubridade alegada em ação trabalhista?',
          a: 'Com laudo técnico próprio (assistente técnico), evidência de neutralização (PGR, PCMSO, fichas de EPI), histórico documental consistente. Em perícia, a divergência entre laudo do juízo e do assistente da empresa é avaliada pelo juiz com base nas evidências.',
        },
      ]}
      sidebarTitle="Sua empresa paga adicional de insalubridade certo?"
      sidebarHook="A SERMST avalia a exposição, identifica o anexo aplicável e mantém laudo, PGR, PCMSO e eSocial tecnicamente coerentes."
      sidebarCtaLabel="Solicitar laudo NR-15"
      related={[
        { label: 'Insalubridade: conceito, direito e cálculo', href: '/saude/insalubridade-o-que-e-adicional' },
        { label: 'NR-16: Periculosidade', href: '/normas/nr-16-periculosidade' },
        { label: 'O que significa LTCAT', href: '/dicionario/o-que-e-ltcat' },
        { label: 'Serviço de LTCAT previdenciário', href: '/servicos/ltcat-laudo-tecnico-previdenciario/sao-paulo' },
        { label: 'PPP eletrônico (S-2240)', href: '/normas/ppp-eletronico' },
        { label: 'Guia da NR-01 e atualização do PGR', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'PCMSO (NR-07): programa', href: '/servicos/pcmso-nr07-programa/sao-paulo' },
      ]}
    />
  );
}
