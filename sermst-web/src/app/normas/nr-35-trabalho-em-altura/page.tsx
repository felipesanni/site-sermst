import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-35: trabalho em altura, treinamento e validade | SERMST',
  description:
    'Entenda o que a NR-35 exige no trabalho em altura: quem precisa, treinamento de 8 horas, validade, reciclagem, APR, PT e penalidades.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-35-trabalho-em-altura' },
  openGraph: {
    title: 'NR-35: trabalho em altura, treinamento e validade | SERMST',
    description:
      'Veja o que a NR-35 exige: definição de trabalho em altura, treinamento obrigatório, análise de risco, permissão de trabalho e responsabilidades do empregador.',
    url: 'https://sermst.com.br/normas/nr-35-trabalho-em-altura',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function NR35Page() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/site/safety-equipment.jpg", alt: "Trabalhador com equipamento de proteção contra quedas em trabalho em altura NR-35" }}
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="← Normas"
      hubHref="/normas"
      pageUrl="https://sermst.com.br/normas/nr-35-trabalho-em-altura"
      badgeText="NR-35"
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-07-02',
      }}

      h1="NR-35: trabalho em altura, treinamento e o que a empresa precisa cumprir"
      intro="A NR-35 regulamenta toda atividade executada acima de 2 metros do nível inferior com risco de queda. O ponto central aqui não é só treinamento: a empresa precisa cumprir exigências de validade, reciclagem, análise de risco, permissão de trabalho, aptidão médica e plano de resgate."
      sections={[
        {
          title: 'O que é considerado trabalho em altura na NR-35',
          body: (
            <>
              <p>
                A NR-35 define trabalho em altura como <strong>toda atividade executada acima de 2 metros do nível inferior com risco de queda</strong>. Engloba muito mais do que a maioria das empresas imagina: troca de lâmpada em ginásio, manutenção em telhado, pintura de fachada, montagem de andaime, limpeza de fachada de prédio, instalação de antena, poda de árvore alta. Se está alto e tem risco de cair, está dentro da NR-35.
              </p>
            </>
          ),
        },
        {
          title: 'O que a norma exige da empresa',
          body: (
            <ol>
              <li><strong>Análise Preliminar de Risco (APR)</strong> antes de cada atividade não rotineira em altura.</li>
              <li><strong>Permissão de Trabalho (PT)</strong> emitida e assinada para cada atividade — define quem autorizou, quem executa e quais as medidas de proteção.</li>
              <li><strong>Treinamento formal</strong> de cada trabalhador (8 horas inicial + reciclagem de 8h a cada 2 anos, no mínimo).</li>
              <li><strong>Avaliação médica específica</strong> apta para trabalho em altura, registrada no ASO. Quem tem labirintite, problema cardíaco grave ou crise de ansiedade não pode subir.</li>
              <li><strong>Sistemas de proteção contra queda</strong> coletivos prioritariamente (guarda-corpo, redes), individuais quando coletivos forem inviáveis (cinto paraquedista, talabarte, ponto de ancoragem certificado).</li>
              <li><strong>Supervisão técnica</strong> da atividade por profissional capacitado.</li>
              <li><strong>Resgate</strong> planejado e treinado — não pode haver atividade em altura sem plano de resgate documentado.</li>
            </ol>
          ),
        },
        {
          title: 'Treinamento obrigatório na NR-35',
          body: (
            <>
              <p>
                O treinamento de NR-35 não é opcional, não pode ser feito por vídeo desacompanhado e não vale &quot;treinamento informal&quot;. A norma exige:
              </p>
              <ul>
                <li><strong>Carga horária mínima de 8 horas</strong> para o treinamento inicial.</li>
                <li><strong>Reciclagem a cada 2 anos</strong> — mesma carga horária ou conforme avaliação.</li>
                <li><strong>Reciclagem extraordinária</strong> sempre que houver mudança de procedimento, evento de quase-acidente ou retorno após afastamento longo.</li>
                <li><strong>Conteúdo programático específico</strong>: normas e regulamentos, análise de riscos, condutas em emergência, equipamentos de proteção, acidentes típicos.</li>
                <li><strong>Avaliação teórica e prática</strong>, com certificado e registro nominal.</li>
              </ul>
              <p>
                Em construção civil, a NR-35 é frequentemente combinada com a NR-18. Trabalhador que vai para obra em altura precisa dos dois treinamentos — não basta um.
              </p>
            </>
          ),
        },
        {
          title: 'Validade e reciclagem da NR-35: o que a empresa precisa controlar',
          body: (
            <>
              <p>
                Na prática, quando a empresa pergunta sobre validade da NR-35, ela está falando do <strong>prazo da reciclagem do treinamento</strong>. A referência mais comum é de <strong>2 em 2 anos</strong>, desde que não exista situação que exija reciclagem antes disso.
              </p>
              <p>
                Isso significa que o certificado inicial não resolve o problema para sempre. A empresa precisa controlar vencimento, listar quem está apto hoje e antecipar renovações para não descobrir a falha só quando surgir fiscalização, acidente ou obra urgente.
              </p>
              <ul>
                <li><strong>Reciclagem periódica:</strong> normalmente a cada 2 anos.</li>
                <li><strong>Reciclagem extraordinária:</strong> quando muda procedimento, equipamento, condição de risco ou quando ocorre quase-acidente, acidente ou afastamento relevante.</li>
                <li><strong>ASO específico:</strong> segue a periodicidade do PCMSO e não substitui a reciclagem do treinamento.</li>
                <li><strong>Controle documental:</strong> certificado, lista nominal, conteúdo programático e evidência de avaliação precisam estar organizados e acessíveis.</li>
              </ul>
              <p>
                O erro mais comum é tratar a NR-35 como &quot;curso feito&quot; em vez de tratá-la como <strong>rotina de conformidade recorrente</strong>. Para a fiscalização, treinamento vencido vale quase como treinamento inexistente.
              </p>
            </>
          ),
        },
        {
          title: 'Penalidades e responsabilização',
          body: (
            <>
              <p>
                A NR-35 é uma das normas mais rigorosas em termos de responsabilização porque os acidentes envolvidos costumam ser graves ou fatais.
              </p>
              <ul>
                <li><strong>Multa administrativa</strong> do MTE varia conforme gravidade e número de trabalhadores expostos — pode passar de R$ 10 mil por infração.</li>
                <li><strong>Embargo da atividade</strong> — fiscal pode parar a obra ou a operação na hora se identificar trabalho em altura sem proteção adequada.</li>
                <li><strong>Responsabilização criminal</strong> da empresa, do gestor responsável e do supervisor em caso de acidente fatal — homicídio culposo (art. 121, §3º, CP).</li>
                <li><strong>Indenização cível</strong> — em acidente fatal, valores costumam superar R$ 500 mil para a família, fora pensão por morte.</li>
                <li><strong>Aumento do FAP</strong> (Fator Acidentário de Prevenção) — empresa paga mais GIIL-RAT por anos depois.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Erros comuns que custam caro',
          body: (
            <ul>
              <li><strong>&quot;Era só uma escadinha&quot;</strong> — se a queda potencial é maior que 2 metros, é trabalho em altura. Ponto.</li>
              <li><strong>Treinamento de 4 horas em vez de 8</strong> — não vale para a NR-35. Tem que ser as 8 horas completas, com avaliação.</li>
              <li><strong>EPI sem CA válido ou vencido</strong> — cinto paraquedista tem validade. Talabarte tem prazo de inspeção. Ancoragem tem certificação.</li>
              <li><strong>Não fazer reciclagem</strong> a cada 2 anos — treinamento vencido equivale a treinamento inexistente em fiscalização.</li>
              <li><strong>Não ter ASO específico</strong> — exame ocupacional comum não atesta aptidão para altura. Tem que ter avaliação específica registrada.</li>
              <li><strong>Plano de resgate inexistente</strong> — &quot;a gente chama o bombeiro&quot; não conta. Tem que haver plano documentado e treinado.</li>
            </ul>
          ),
        },
      ]}
      faq={[
        {
          q: 'Quem pode dar treinamento NR-35?',
          a: 'Profissional legalmente habilitado (técnico ou engenheiro de segurança do trabalho, instrutor com formação específica). Empresa que não tem profissional próprio contrata serviço externo. Treinamento dado por &quot;quem sabe&quot; mas sem habilitação não vale para fins legais.',
        },
        {
          q: 'O empregado precisa renovar o ASO antes da reciclagem?',
          a: 'O ASO é renovado conforme periodicidade do PCMSO (geralmente anual em função de risco). A reciclagem da NR-35 é a cada 2 anos. São duas renovações independentes — uma não substitui a outra.',
        },
        {
          q: 'NR-35 e NR-18 — preciso dos dois?',
          a: 'Em construção civil, sim. A NR-18 cobre segurança em obra (canteiro, equipamento, organização). A NR-35 cobre especificamente trabalho em altura. Trabalhador de obra que sobe em andaime precisa dos dois treinamentos formalmente.',
        },
        {
          q: 'O que acontece se um trabalhador se recusa a usar EPI?',
          a: 'A empresa precisa documentar o ato, advertir formalmente e, se persistir, aplicar penalidade conforme regulamento interno. A obrigação de fornecer e fiscalizar é da empresa; a obrigação de usar é do trabalhador. Sem evidência da fiscalização, a defesa cai mesmo se o trabalhador estava se recusando.',
        },
        {
          q: 'Tem como reduzir custo da NR-35?',
          a: 'O caminho é eliminar trabalho em altura sempre que possível — solução de engenharia (escada fixa com guarda-corpo, plataformas elevatórias, sistemas remotos). O treinamento e EPI custam, mas o que pesa de verdade é o turn-over de trabalhador qualificado e o risco residual. Empresa que reduz exposição a altura economiza nos três.',
        },
      ]}
      sidebarTitle="Sua empresa tem trabalho em altura?"
      sidebarHook="Treinamento NR-35 vencido ou inexistente, ASO sem avaliação específica, plano de resgate ausente — qualquer um desses três é exposição direta. A SERMST faz auditoria do que sua operação tem hoje."
      sidebarCtaLabel="Auditar conformidade NR-35"
      related={[
        { label: 'NR-18: Construção civil', href: '/normas/nr-18-construcao-civil' },
        { label: 'NR-10: Eletricidade', href: '/normas/nr-10-eletricidade' },
        { label: 'Guia da NR-01 e atualização do PGR', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'Treinamentos NR / CIPA / brigada', href: '/servicos/treinamentos-nrs-cipa-brigada/sao-paulo' },
      ]}
    />
  );
}
