import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Gestão de SST: Como Organizar na Empresa | SERMST',
  description:
    'Gestão de SST não é documento, é sistema. Conecta exame, laudo, treinamento e eSocial em fluxo único. Veja como estruturar e os erros que viram passivo.',
  alternates: { canonical: 'https://sermst.com.br/saude/gestao-sst' },
  openGraph: {
    title: 'Gestão de SST: como estruturar saúde e segurança na empresa | SERMST',
    description:
      'Como organizar a gestão de saúde e segurança do trabalho na prática: documentos, programas, obrigações eSocial e como evitar autuações e passivo trabalhista.',
    url: 'https://sermst.com.br/saude/gestao-sst',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function GestãoSSTPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub Saúde Ocupacional"
      hubLabelShort="← Hub Saúde"
      hubHref="/saude"
      pageUrl="https://sermst.com.br/saude/gestao-sst"
      coverImage={{ src: "/images/articles/gestao-sst.jpg", alt: "Equipe discutindo gestão de saúde e segurança do trabalho" }}
      author={{
        name: 'Felipe Sannino',
        jobTitle: 'Advogado — Direito do Trabalho e SST · OAB/SP 430.824',
        url: 'https://sermst.com.br/equipe/felipe-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-05-01',
      }}

      h1="Gestão de SST: o sistema que sustenta operação e defende o CNPJ"
      intro="Gestão de Saúde e Segurança do Trabalho não é um documento — é um sistema. Conecta exame, laudo, treinamento e eSocial em fluxo único que sustenta operação e defende a empresa em fiscalização e ação trabalhista."
      sections={[
        {
          title: 'O que é gestão de SST de verdade',
          body: (
            <>
              <p>
                Gestão de SST é o conjunto de processos que <strong>integra todos os elementos de Saúde e Segurança do Trabalho</strong> num fluxo coerente: identificação de risco → controle → treinamento → exame → registro → análise → melhoria. Cada peça alimenta a próxima.
              </p>
              <p>
                A maior parte das empresas trata SST como pasta de arquivo: PGR num lugar, PCMSO em outro, ASOs guardados, treinamentos sem cronograma, eSocial reativo. Resultado: documento existe, mas não reflete a operação real. Em fiscalização ou ação, isso desmonta.
              </p>
            </>
          ),
        },
        {
          title: 'O ciclo de gestão de SST em 6 etapas',
          body: (
            <>
              <ol>
                <li><strong>Identificar.</strong> Mapear todos os riscos da operação — físicos, químicos, biológicos, ergonômicos, de acidente, psicossociais. Por área, por função, por turno.</li>
                <li><strong>Avaliar.</strong> Para cada risco, qual a probabilidade × severidade. Define prioridade.</li>
                <li><strong>Controlar.</strong> Definir medida de controle — eliminação (a melhor), substituição, controle de engenharia (EPC), controle administrativo, EPI (último recurso).</li>
                <li><strong>Documentar.</strong> PGR (riscos e controles), PCMSO (vigilância médica), ordens de serviço (instruções específicas), procedimentos de trabalho.</li>
                <li><strong>Treinar.</strong> Formal, com carga horária mínima, certificado, registro nominal. Nas NRs aplicáveis e nos procedimentos da empresa.</li>
                <li><strong>Monitorar e melhorar.</strong> Indicadores (taxa de afastamento, índice de quase-acidentes, conformidade documental). Análise crítica periódica. Ajustes.</li>
              </ol>
              <p>
                Sair de qualquer etapa quebra o sistema. PGR sem treinamento é teatro; treinamento sem registro é evidência inexistente; documento sem revisão é documento desatualizado.
              </p>
            </>
          ),
        },
        {
          title: 'Os 4 documentos que sustentam a gestão',
          body: (
            <>
              <ul>
                <li><strong>PGR (NR-01)</strong> — inventário e plano de ação dos riscos ocupacionais. Documento-mãe.</li>
                <li><strong>PCMSO (NR-07)</strong> — programa de vigilância médica. Define quais exames cada cargo faz, com qual periodicidade.</li>
                <li><strong>LTCAT</strong> — laudo técnico das condições ambientais do trabalho, base para PPP e aposentadoria especial.</li>
                <li><strong>Ordens de Serviço</strong> — instruções específicas por função sobre os riscos, EPIs, procedimentos. Assinadas pelo trabalhador.</li>
              </ul>
              <p>
                Esses 4 precisam contar a mesma história. Quando contam histórias diferentes, qualquer perícia explora a divergência.
              </p>
            </>
          ),
        },
        {
          title: 'eSocial é o termômetro da gestão',
          body: (
            <>
              <p>
                Os eventos de SST do eSocial (S-2210 acidente, S-2220 monitoramento de saúde, S-2240 condições ambientais) são <strong>resultado direto</strong> da gestão. Quando a gestão é sólida, os eventos saem no prazo, com base técnica consistente, sem retrabalho.
              </p>
              <p>
                Quando a gestão é frágil, aparecem os sintomas: evento atrasado (risco de autuação), evento com erro (rejeição e retrabalho), evento sem suporte documental (autuação posterior). O eSocial não causa o problema — ele expõe o que já existia.
              </p>
            </>
          ),
        },
        {
          title: 'Os 5 sinais de que a sua gestão está frágil',
          body: (
            <>
              <ol>
                <li><strong>O PGR foi feito uma vez e ninguém revisou desde.</strong></li>
                <li><strong>Os ASOs estão arquivados sem ninguém olhar tendência.</strong></li>
                <li><strong>Treinamentos estão vencidos ou nunca foram dados formalmente.</strong></li>
                <li><strong>Os eventos do eSocial saem com erro recorrente.</strong></li>
                <li><strong>Quando alguém pergunta &quot;o que muda no SST porque temos uma máquina nova&quot;, ninguém sabe responder.</strong></li>
              </ol>
              <p>
                Cada um desses é vermelho. Dois ou mais juntos é exposição grande — não é pergunta &quot;se&quot; vai aparecer problema, é &quot;quando&quot;.
              </p>
            </>
          ),
        },
        {
          title: 'Como começar a estruturar gestão de SST',
          body: (
            <ol>
              <li><strong>Auditar o que existe hoje.</strong> Documento por documento — está atualizado, reflete a operação, foi assinado por profissional habilitado, tem evidência de comunicação.</li>
              <li><strong>Definir um responsável interno.</strong> Pode ser RH, DP, gerente de operação, ou cargo dedicado em empresa maior. Sem dono, o sistema não funciona.</li>
              <li><strong>Conectar com consultoria técnica.</strong> Para a parte técnica (PGR, PCMSO, LTCAT, treinamentos), a empresa raramente tem capacidade interna. Consultoria especializada é mais barato e mais robusto.</li>
              <li><strong>Definir cronograma.</strong> Quais documentos precisam ser revisados quando. Quais exames fazem aniversário em qual mês. Quais treinamentos vencem.</li>
              <li><strong>Criar painel de indicadores.</strong> Conformidade documental, taxa de exame em dia, treinamentos atualizados, eventos eSocial no prazo. Olhar mensal.</li>
              <li><strong>Análise crítica anual</strong>. Diretoria e responsáveis revisam o sistema, ajustam.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'Quem é o responsável pela gestão de SST na empresa?',
          a: 'A responsabilidade legal final é da empresa (na figura do empregador). Operacionalmente, depende do porte: empresa pequena pode ter um gestor interno + consultoria externa; empresa média tem um responsável de RH/DP/SESMT; empresa grande tem SESMT próprio. O importante é ter dono identificável.',
        },
        {
          q: 'Posso terceirizar toda a gestão de SST?',
          a: 'A execução técnica (PGR, PCMSO, exames, treinamentos) pode e geralmente deve ser terceirizada para clínica especializada. Mas a coordenação interna — comunicação com a equipe, fiscalização do uso de EPI, registro de ocorrência — precisa ter alguém na empresa. Terceirização não tira a responsabilidade do empregador.',
        },
        {
          q: 'Quanto custa montar gestão de SST do zero?',
          a: 'Em empresa pequena (até 30 funcionários, baixo risco), a estrutura inicial fica em torno de R$ 5.000 a R$ 15.000 (PGR + PCMSO + treinamentos básicos + ASOs admissionais). Empresa média (50-200 funcionários, risco médio): R$ 15.000 a R$ 50.000. Manutenção mensal é uma fração desse investimento inicial.',
        },
        {
          q: 'Qual a diferença entre gestão de SST e SESMT?',
          a: 'SESMT é o &quot;Serviço Especializado em Engenharia de Segurança e Medicina do Trabalho&quot; — equipe técnica obrigatória para empresas com determinado porte e grau de risco. Gestão de SST é o sistema mais amplo de processos. Empresa pode ter gestão de SST sem SESMT obrigatório (terceiriza a execução técnica).',
        },
        {
          q: 'Como saber se minha gestão de SST aguenta uma fiscalização?',
          a: 'Teste prático: peça a um consultor externo para fazer simulação de auditoria do MTE. Em meio dia ele cobre os pontos críticos (PGR, PCMSO, treinamentos, ASOs, EPI, eSocial). Se passar sem ressalva grave, está sólido. Se aparecer 3+ ressalvas graves, é hora de estruturar.',
        },
      ]}
      sidebarTitle="Sua gestão de SST aguenta fiscalização?"
      sidebarHook="A SERMST faz simulação de auditoria SST gratuita: cobre os pontos críticos e mostra exatamente onde sua empresa está exposta. Sem compromisso comercial."
      sidebarCtaLabel="Simular auditoria SST"
      related={[
        { label: 'O que é saúde ocupacional', href: '/saude/o-que-e-saude-ocupacional' },
        { label: 'Guia da NR-01 e atualização do PGR', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'PCMSO (NR-07): programa', href: '/servicos/pcmso-nr07-programa/sao-paulo' },
        { label: 'Multa eSocial S-2220', href: '/rh/multa-esocial-s2220' },
      ]}
    />
  );
}
