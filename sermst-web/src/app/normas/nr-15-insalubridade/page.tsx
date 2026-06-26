import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-15: Insalubridade — Adicional e Laudo Técnico | SERMST',
  description:
    'A NR-15 define o adicional de insalubridade (10%, 20% ou 40%). Pagar sem laudo vira passivo; não pagar quando devido também. Veja como decidir certo.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-15-insalubridade' },
  openGraph: {
    title: 'NR-15: insalubridade — quando é devida e como eliminar ou neutralizar | SERMST',
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

      h1="NR-15: Insalubridade — guia para gestores e RH"
      intro="A NR-15 define quais atividades geram direito ao adicional de insalubridade — 10%, 20% ou 40% sobre o salário mínimo. Pagar errado é passivo trabalhista garantido. Se a sua dúvida é mais ampla sobre conceito, direito e cálculo, veja também o guia de insalubridade. Aqui, o foco é a norma e o enquadramento técnico."
      sections={[
        {
          title: 'O que é a NR-15 (em uma frase)',
          body: (
            <>
              <p>
                A NR-15 lista as atividades e operações consideradas <strong>insalubres</strong>: aquelas que expõem o trabalhador a agentes nocivos à saúde acima dos limites de tolerância. Quando a exposição é caracterizada por laudo técnico, o trabalhador tem direito a adicional de 10%, 20% ou 40% sobre o salário mínimo.
              </p>
            </>
          ),
        },
        {
          title: 'Os 3 graus de insalubridade é o que muda',
          body: (
            <>
              <ul>
                <li><strong>Grau mínimo (10%)</strong>: agentes biológicos em algumas situações, exposição a vibrações dentro de certos limites, frio acentuado.</li>
                <li><strong>Grau médio (20%)</strong>: ruído acima do limite de tolerância, calor acima de IBUTG fixado, agentes químicos em concentrações específicas.</li>
                <li><strong>Grau máximo (40%)</strong>: agentes químicos cancerígenos sem possibilidade de neutralização, radiação ionizante, contato direto com cadáveres, etc.</li>
              </ul>
              <p>
                O percentual incide sobre o <strong>salário mínimo nacional</strong> (não sobre o salário base do trabalhador), exceto se norma coletiva da categoria estabelecer base diferente. Empresa que paga sobre salário base sem necessidade gera passivo retroativo.
              </p>
            </>
          ),
        },
        {
          title: 'O que precisa estar documentado',
          body: (
            <ol>
              <li><strong>Laudo Técnico de Insalubridade</strong> assinado por médico do trabalho ou engenheiro de segurança — mede agente, expõe metodologia, conclui sobre o grau.</li>
              <li><strong>Avaliações quantitativas</strong> quando aplicáveis (audiometria, dosimetria de ruído, medição de calor IBUTG, espectrometria química, etc.).</li>
              <li><strong>PPRA/PGR</strong> alinhado ao laudo — riscos descritos consistentes.</li>
              <li><strong>PCMSO</strong> com exames específicos para os agentes identificados (audiometria para ruído, hemograma para benzeno, etc.).</li>
              <li><strong>Folha pagamento</strong> com adicional separado e identificável.</li>
              <li><strong>S-2240</strong> no eSocial refletindo a exposição.</li>
            </ol>
          ),
        },
        {
          title: 'Como NEUTRALIZAR insalubridade (e parar de pagar adicional)',
          body: (
            <>
              <p>
                Insalubridade pode ser <strong>eliminada</strong> ou <strong>neutralizada</strong>. Eliminação é o melhor caminho — substituir o agente, modificar processo, isolar a fonte. Neutralização é reduzir a exposição abaixo do limite de tolerância via EPC ou EPI adequado e fiscalizado.
              </p>
              <p>
                Para parar de pagar adicional após neutralização, é preciso:
              </p>
              <ol>
                <li>Implementar a medida de neutralização (EPC, ou EPI com CA específico para o agente).</li>
                <li>Refazer o laudo técnico atestando que a exposição agora está abaixo do limite.</li>
                <li>Documentar a entrega de EPI e a fiscalização do uso (ficha por trabalhador).</li>
                <li>Comunicar formalmente ao trabalhador a alteração da condição.</li>
                <li>Atualizar PGR, PCMSO e eSocial.</li>
              </ol>
              <p>
                Sem essas 5 etapas, a empresa para de pagar adicional mas o passivo continua — em ação trabalhista, o juiz reconhece o direito mesmo se a empresa achava ter neutralizado.
              </p>
            </>
          ),
        },
        {
          title: 'Os 5 erros que viram processo certeiro',
          body: (
            <ol>
              <li><strong>Pagar adicional sem laudo.</strong> Empresa &quot;por garantia&quot; paga 20% sem laudo técnico. Tribunal pode considerar reconhecimento de fato e elevar para 40% se o agente real era de grau máximo.</li>
              <li><strong>Não pagar quando devido.</strong> Caracterizou insalubridade pela operação real mas não paga? Cinco anos retroativos com juros e correção em ação trabalhista.</li>
              <li><strong>EPI fornecido sem ficha de entrega.</strong> Mesmo neutralizando tecnicamente, sem evidência de fornecimento o adicional continua devido.</li>
              <li><strong>Laudo desatualizado.</strong> Insalubridade caracterizada em 2018 e nunca refeita após mudança de operação. Inconsistência técnica em perícia.</li>
              <li><strong>Periculosidade + insalubridade simultâneas.</strong> O trabalhador pode escolher o adicional mais favorável, mas só recebe um. Empresa que paga os dois cria passivo de dobro.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'Insalubridade é cumulativa com periculosidade?',
          a: 'Não. O trabalhador pode acumular as duas condições objetivamente, mas só recebe o adicional mais favorável (a Súmula 47 do TST e jurisprudência consolidada). Pagar os dois é gerar passivo desnecessário.',
        },
        {
          q: 'Quem assina o laudo de insalubridade?',
          a: 'Médico do trabalho ou engenheiro de segurança do trabalho legalmente habilitado. Pode haver coassinatura conforme escopo do laudo. Sem profissional habilitado, o documento não tem validade técnica.',
        },
        {
          q: 'O adicional incide sobre salário base ou salário mínimo?',
          a: 'Em regra, sobre o salário mínimo nacional (Súmula Vinculante 4 do STF). Norma coletiva da categoria pode estabelecer base diferente. Antes de calcular, sempre verificar a convenção aplicável.',
        },
        {
          q: 'Aposentadoria especial precisa de exposição contínua?',
          a: 'A aposentadoria especial exige exposição habitual e permanente acima dos limites previdenciários. Insalubridade caracterizada para fins trabalhistas (NR-15) e para fins previdenciários (PPP/LTCAT) pode ter critérios diferentes — exposição esporádica gera adicional mas não necessariamente aposentadoria especial.',
        },
        {
          q: 'Como contestar insalubridade alegada em ação trabalhista?',
          a: 'Com laudo técnico próprio (assistente técnico), evidência de neutralização (PGR, PCMSO, fichas de EPI), histórico documental consistente. Em perícia, a divergência entre laudo do juízo e do assistente da empresa é avaliada pelo juiz com base nas evidências.',
        },
      ]}
      sidebarTitle="Sua empresa paga adicional de insalubridade certo?"
      sidebarHook="Pagar errado é passivo. Não pagar quando devido também. A SERMST faz laudo técnico de NR-15 alinhado a PGR, PCMSO e eSocial — defesa robusta em fiscalização e ação."
      sidebarCtaLabel="Solicitar laudo NR-15"
      related={[
        { label: 'Insalubridade: conceito, direito e cálculo', href: '/saude/insalubridade-o-que-e-adicional' },
        { label: 'NR-16: Periculosidade', href: '/normas/nr-16-periculosidade' },
        { label: 'Serviço de LTCAT previdenciário', href: '/servicos/ltcat-laudo-tecnico-previdenciario/sao-paulo' },
        { label: 'Guia da NR-01 e atualização do PGR', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'PCMSO (NR-07): programa', href: '/servicos/pcmso-nr07-programa/sao-paulo' },
      ]}
    />
  );
}
