import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Insalubridade: quem tem direito e como calcular | SERMST',
  description:
    'Entenda o que é insalubridade, quem pode ter direito ao adicional, como funcionam os graus de 10%, 20% e 40% e quando a avaliação técnica é necessária.',
  alternates: { canonical: 'https://sermst.com.br/saude/insalubridade-o-que-e-adicional' },
  openGraph: {
    title: 'Insalubridade: quem tem direito e como calcular | SERMST',
    description:
      'Guia prático sobre insalubridade, adicional, cálculo, diferença para periculosidade, avaliação técnica e relação com NR-15, LTCAT e eSocial.',
    url: 'https://sermst.com.br/saude/insalubridade-o-que-e-adicional',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function InsalubridadePage() {
  return (
    <BlockbusterArticle
      hubLabel="Saúde Ocupacional"
      hubLabelShort="← Saúde Ocupacional"
      hubHref="/saude"
      pageUrl="https://sermst.com.br/saude/insalubridade-o-que-e-adicional"
      coverImage={{
        src: '/images/site/safety-equipment.jpg',
        alt: 'Ambiente ocupacional com exposição a agentes insalubres e controle técnico de SST',
      }}
      author={{
        name: 'Luiz Cesar Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-05-25',
        dateModified: '2026-07-13',
      }}
      readingTime="9 min"
      h1="Insalubridade: o que é, quem tem direito e como funciona o adicional"
      intro="A insalubridade depende do enquadramento da atividade ou da exposição nos anexos da NR-15. Alguns agentes exigem medição e comparação com limites de tolerância; outros são avaliados de forma qualitativa. Quando há caracterização técnica, o adicional pode corresponder a 10%, 20% ou 40%, conforme o grau previsto."
      sections={[
        {
          title: 'O que é insalubridade',
          body: (
            <>
              <p>
                Para fins trabalhistas, insalubridade é a exposição a agentes nocivos enquadrada nos anexos da <strong>NR-15</strong>. A norma abrange agentes físicos, químicos e biológicos e adota critérios quantitativos ou qualitativos, conforme o anexo aplicável.
              </p>
              <p>
                Não basta a atividade parecer pesada, suja ou desconfortável. A caracterização depende da situação real de trabalho, do critério previsto no anexo e da avaliação por profissional habilitado.
              </p>
              <ul>
                <li><strong>O que é:</strong> atividade ou exposição enquadrada nos critérios da NR-15.</li>
                <li><strong>Quem pode ter direito:</strong> quem trabalha em condição tecnicamente caracterizada como insalubre.</li>
                <li><strong>Quanto paga:</strong> 10%, 20% ou 40%, conforme o grau.</li>
                <li><strong>O que fundamenta:</strong> avaliação técnica, condições observadas e documentação coerente.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Quem tem direito a adicional de insalubridade',
          body: (
            <>
              <p>
                O direito ao adicional depende da caracterização da atividade ou da exposição conforme a NR-15. Em alguns anexos há limite de tolerância; em outros, a avaliação é qualitativa.
              </p>
              <ul>
                <li><strong>Nem todo cargo tem direito automaticamente:</strong> importam a atividade e a exposição real, não apenas o nome da função.</li>
                <li><strong>Nem toda exposição gera adicional:</strong> a situação precisa se enquadrar nos critérios da norma.</li>
                <li><strong>Eliminação ou neutralização:</strong> quando tecnicamente demonstrada conforme a norma, pode cessar o pagamento.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Insalubridade de 10%, 20% e 40%: quais são os graus',
          body: (
            <>
              <p>A NR-15 prevê três graus de adicional:</p>
              <ul>
                <li><strong>10%:</strong> grau mínimo.</li>
                <li><strong>20%:</strong> grau médio.</li>
                <li><strong>40%:</strong> grau máximo.</li>
              </ul>
              <p>
                O grau vem do enquadramento técnico da atividade ou exposição. A base usada no cálculo exige cuidado próprio, pois há controvérsia jurídica e podem existir normas coletivas aplicáveis.
              </p>
            </>
          ),
        },
        {
          title: 'Insalubridade sobre salário mínimo ou salário-base?',
          body: (
            <>
              <p>
                A base de cálculo não deve ser tratada como uma resposta automática. A CLT e a NR-15 mencionam o salário mínimo, mas o tema foi afetado pela Súmula Vinculante 4 do STF e continua sujeito ao enquadramento jurídico do caso.
              </p>
              <p>
                Na prática, o salário mínimo ainda é usado em muitos casos enquanto não houver base válida diversa, e instrumentos coletivos podem trazer previsão específica. O RH deve conferir a norma coletiva e a orientação jurídica antes de alterar a folha.
              </p>
              <ul>
                <li><strong>Texto legal:</strong> salário mínimo.</li>
                <li><strong>Ponto jurídico:</strong> efeitos da Súmula Vinculante 4 e decisões aplicáveis.</li>
                <li><strong>Norma coletiva:</strong> verificar se há base específica para a categoria.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Como funciona o cálculo da insalubridade',
          body: (
            <>
              <p>O cálculo parte do percentual aplicável ao grau identificado e da base válida para o caso:</p>
              <ul>
                <li><strong>10%</strong> para grau mínimo.</li>
                <li><strong>20%</strong> para grau médio.</li>
                <li><strong>40%</strong> para grau máximo.</li>
              </ul>
              <p>
                Antes de calcular, confirme o enquadramento técnico, o grau, a base aplicável e a norma coletiva. A retirada do adicional também exige demonstração da eliminação ou neutralização da condição insalubre.
              </p>
            </>
          ),
        },
        {
          title: 'Quem tem direito a 40% de insalubridade',
          body: (
            <>
              <p>
                O adicional de 40% corresponde ao <strong>grau máximo</strong> de insalubridade. Ele não depende do nome do cargo, mas da atividade ou exposição real e do enquadramento técnico na NR-15.
              </p>
              <p>
                A conclusão exige a análise do ambiente, do agente, do critério previsto no anexo e das medidas de controle existentes.
              </p>
              <p>
                Não é correto aplicar 40% apenas porque uma função semelhante recebe o adicional em outra empresa. O processo e as condições de trabalho precisam ser avaliados.
              </p>
            </>
          ),
        },
        {
          title: 'Insalubridade e periculosidade são a mesma coisa?',
          body: (
            <>
              <p>
                Não. <strong>Insalubridade</strong> trata das atividades ou exposições nocivas enquadradas na NR-15. <strong>Periculosidade</strong> trata das atividades e operações perigosas previstas na NR-16, como determinadas situações com inflamáveis, explosivos ou energia elétrica.
              </p>
              <p>
                Um trabalhador pode estar em ambiente insalubre e perigoso ao mesmo tempo. Pela regra geral da CLT, ele opta pelo adicional mais favorável, sem recebimento cumulativo.
              </p>
            </>
          ),
        },
        {
          title: 'Quando a empresa precisa de avaliação técnica',
          body: (
            <>
              <p>
                A caracterização e a classificação da insalubridade exigem perícia por médico do trabalho ou engenheiro de segurança do trabalho, conforme a CLT. A avaliação deve registrar as condições observadas e o critério da NR-15 usado na conclusão.
              </p>
              <ol>
                <li><strong>Para caracterizar a atividade ou exposição</strong> e definir se há insalubridade.</li>
                <li><strong>Para apontar o grau correto</strong> de 10%, 20% ou 40%.</li>
                <li><strong>Para documentar eliminação ou neutralização</strong> quando medidas de controle alteram a condição avaliada.</li>
                <li><strong>Para manter coerência entre PGR, PCMSO, LTCAT e eSocial</strong>, respeitando a finalidade de cada documento.</li>
              </ol>
            </>
          ),
        },
        {
          title: 'O que a NR-15 diz sobre insalubridade',
          body: (
            <>
              <p>
                A <strong>NR-15</strong> define as atividades e operações insalubres para fins trabalhistas. Seus anexos apresentam agentes, atividades, limites de tolerância e critérios de avaliação.
              </p>
              <p>
                Para consultar os critérios de cada agente, acesse o guia específico da NR-15 e, quando necessário, o texto oficial do anexo aplicável.
              </p>
            </>
          ),
        },
        {
          title: 'Onde entram NR-15, LTCAT e eSocial',
          body: (
            <>
              <p>
                A <strong>NR-15</strong> orienta o enquadramento trabalhista da insalubridade. O <strong>LTCAT</strong> tem finalidade previdenciária e fundamenta informações do PPP e do S-2240 sobre agentes nocivos. Os critérios trabalhistas e previdenciários não são idênticos.
              </p>
              <p>
                PGR, PCMSO, laudo de insalubridade, LTCAT e eSocial devem descrever a mesma operação, ainda que cada documento use critérios próprios para sua finalidade.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'Quem tem direito a 40% de insalubridade?',
          a: 'Pode ter direito quem trabalha em atividade ou condição enquadrada como grau máximo pela NR-15, após avaliação técnica. O nome do cargo, sozinho, não define o adicional.',
        },
        {
          q: 'Insalubridade é calculada sobre salário-base?',
          a: 'A CLT e a NR-15 mencionam o salário mínimo, mas a base de cálculo foi afetada pela Súmula Vinculante 4 do STF. Confirme a norma coletiva e a orientação jurídica aplicável antes de alterar a folha.',
        },
        {
          q: 'Como calcular insalubridade de 20% ou 40%?',
          a: 'Primeiro são definidos o enquadramento e o grau. Depois, aplica-se o percentual sobre a base válida para o caso, considerando a legislação, a jurisprudência e a norma coletiva aplicável.',
        },
        {
          q: 'A empresa pode parar de pagar insalubridade quando entrega EPI?',
          a: 'Não automaticamente. É preciso demonstrar tecnicamente a eliminação ou neutralização da condição insalubre e manter registros de seleção, entrega, orientação, manutenção e uso do EPI, quando aplicável.',
        },
        {
          q: 'Toda atividade insalubre gera aposentadoria especial?',
          a: 'Não. Os critérios trabalhistas da NR-15 e os critérios previdenciários usados no LTCAT e no PPP não são idênticos. Pode haver adicional sem enquadramento previdenciário para aposentadoria especial.',
        },
        {
          q: 'Insalubridade e LTCAT são a mesma coisa?',
          a: 'Não. A insalubridade é um enquadramento trabalhista. O LTCAT tem finalidade previdenciária e fundamenta informações do PPP e do S-2240 sobre agentes nocivos.',
        },
        {
          q: 'Qual é a diferença entre esta página e o guia da NR-15?',
          a: 'Esta página explica o conceito, o adicional e o cálculo. O guia da NR-15 detalha os critérios técnicos e os anexos usados no enquadramento.',
        },
      ]}
      sidebarTitle="O adicional está baseado em avaliação técnica?"
      sidebarHook="A SERMST avalia as condições de trabalho, revisa laudos e confere a coerência entre NR-15, PGR, PCMSO, LTCAT e eSocial."
      sidebarCtaLabel="Revisar insalubridade da empresa"
      related={[
        { label: 'NR-15: regra técnica da insalubridade', href: '/normas/nr-15-insalubridade' },
        { label: 'NR-16: periculosidade', href: '/normas/nr-16-periculosidade' },
        { label: 'O que significa LTCAT', href: '/dicionario/o-que-e-ltcat' },
        { label: 'Serviço de LTCAT previdenciário', href: '/servicos/ltcat-laudo-tecnico-previdenciario/sao-paulo' },
        { label: 'PPP eletrônico (S-2240)', href: '/normas/ppp-eletronico' },
        { label: 'Guia da NR-01 e atualização do PGR', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'Perícia trabalhista e assistente técnico', href: '/servicos/pericia-trabalhista-assistente-tecnico/sao-paulo' },
        { label: 'Medicina do trabalho: guia para empresas', href: '/saude/medicina-do-trabalho-guia' },
      ]}
      finalCta={{
        title: 'Revise o enquadramento antes de alterar o adicional',
        desc: 'A SERMST confere a atividade, a exposição, os critérios da NR-15 e a coerência com os demais documentos de SST.',
        label: 'Solicitar análise técnica',
        href: '/contato',
      }}
    />
  );
}
