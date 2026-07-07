import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Insalubridade: quem tem direito e como calcular | SERMST',
  description:
    'Entenda o que e insalubridade, quem tem direito ao adicional, como funcionam os 10%, 20% e 40%, qual e a base de calculo e quando o laudo tecnico faz diferenca.',
  alternates: { canonical: 'https://sermst.com.br/saude/insalubridade-o-que-e-adicional' },
  openGraph: {
    title: 'Insalubridade: quem tem direito e como calcular | SERMST',
    description:
      'Guia pratico sobre insalubridade, adicional, calculo, diferenca para periculosidade, laudo tecnico e a relacao disso com NR-15, LTCAT e eSocial.',
    url: 'https://sermst.com.br/saude/insalubridade-o-que-e-adicional',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function InsalubridadePage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub Saude Ocupacional"
      hubLabelShort="← Hub Saude"
      hubHref="/saude"
      pageUrl="https://sermst.com.br/saude/insalubridade-o-que-e-adicional"
      coverImage={{
        src: '/images/site/safety-equipment.jpg',
        alt: 'Ambiente ocupacional com exposicao a agentes insalubres e controle tecnico de SST',
      }}
      author={{
        name: 'Luiz Cesar Sannino',
        jobTitle: 'Higienista Ocupacional · Tecnico em Seguranca do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-05-25',
        dateModified: '2026-05-25',
      }}
      readingTime="9 min"
      h1="Insalubridade: o que e, quem tem direito, adicional e calculo"
      intro="Insalubridade e a exposicao do trabalhador a agentes nocivos acima dos limites legais. Quando isso fica tecnicamente comprovado, pode haver adicional de 10%, 20% ou 40%. Se a sua duvida e a regra da norma, vale olhar a NR-15. Aqui, o foco e outro: explicar o conceito, o direito, o calculo e o que isso muda na pratica para a empresa."
      sections={[
        {
          title: 'O que e insalubridade',
          body: (
            <>
              <p>
                Insalubridade e a condicao de trabalho em que o colaborador fica exposto a <strong>agentes fisicos, quimicos ou biologicos</strong> em nivel capaz de prejudicar a saude, acima dos limites de tolerancia definidos pela legislacao.
              </p>
              <p>
                Na pratica, nao basta a atividade parecer pesada, suja ou desconfortavel. O direito ao adicional depende de <strong>caracterizacao tecnica</strong>, normalmente com laudo, medicao e enquadramento correto da exposicao.
              </p>
              <ul>
                <li><strong>O que e:</strong> exposicao nociva acima do limite legal.</li>
                <li><strong>Quem tem direito:</strong> quem trabalha em condicao tecnicamente caracterizada como insalubre.</li>
                <li><strong>Quanto paga:</strong> 10%, 20% ou 40%, conforme o grau.</li>
                <li><strong>O que comprova:</strong> laudo tecnico, contexto operacional e documentacao coerente.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Quem tem direito a adicional de insalubridade',
          body: (
            <>
              <p>
                Tem direito ao adicional o trabalhador que atua exposto a agente insalubre <strong>acima do limite legal</strong>, desde que essa condicao tenha sido caracterizada tecnicamente.
              </p>
              <ul>
                <li><strong>Nem todo cargo tem direito automaticamente:</strong> o que importa e a exposicao real, nao o nome da funcao.</li>
                <li><strong>Nem toda exposicao gera adicional:</strong> se o risco for neutralizado de forma valida, o direito pode deixar de existir.</li>
                <li><strong>O adicional depende do grau:</strong> minimo, medio ou maximo.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Insalubridade 10 20 40: quais sao os percentuais',
          body: (
            <>
              <p>Na pratica, a insalubridade pode ser enquadrada em tres faixas:</p>
              <ul>
                <li><strong>10%:</strong> grau minimo.</li>
                <li><strong>20%:</strong> grau medio.</li>
                <li><strong>40%:</strong> grau maximo.</li>
              </ul>
              <p>
                O percentual incide, em regra, sobre o <strong>salario minimo</strong>, salvo convencao coletiva com base diferente. E o grau nao sai de conversa de corredor nem de costume de folha. Ele vem da avaliacao tecnica da atividade.
              </p>
            </>
          ),
        },
        {
          title: 'Insalubridade sobre salario minimo ou salario base?',
          body: (
            <>
              <p>
                Essa e uma das duvidas mais comuns sobre o tema. Em regra, o adicional de insalubridade e calculado sobre o <strong>salario minimo</strong>, e nao sobre o salario base do trabalhador.
              </p>
              <p>
                A excecao aparece quando existe <strong>norma coletiva</strong> da categoria definindo outra base de calculo. Por isso, nao faz sentido copiar pratica de mercado nem repetir parametro antigo da folha sem checar a convencao coletiva atual.
              </p>
              <ul>
                <li><strong>Regra geral:</strong> calculo sobre salario minimo.</li>
                <li><strong>Possivel excecao:</strong> convencao ou acordo coletivo.</li>
                <li><strong>Risco comum:</strong> pagar sobre base errada e acumular passivo ou custo desnecessario.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Como funciona o calculo da insalubridade',
          body: (
            <>
              <p>O calculo parte do percentual aplicavel ao grau identificado:</p>
              <ul>
                <li><strong>10%</strong> sobre o salario minimo para grau minimo.</li>
                <li><strong>20%</strong> sobre o salario minimo para grau medio.</li>
                <li><strong>40%</strong> sobre o salario minimo para grau maximo.</li>
              </ul>
              <p>
                Os erros mais comuns sao conhecidos: usar base errada, pagar percentual sem laudo ou cortar o adicional sem prova de neutralizacao. Mais cedo ou mais tarde, isso costuma aparecer em passivo trabalhista ou pericia judicial.
              </p>
            </>
          ),
        },
        {
          title: 'Quem tem direito a 40% de insalubridade',
          body: (
            <>
              <p>
                O adicional de 40% corresponde ao <strong>grau maximo</strong> de insalubridade. Ele nao depende do nome do cargo, mas da exposicao real do trabalhador e do enquadramento tecnico da atividade.
              </p>
              <p>
                Em outras palavras: a empresa so consegue dizer com seguranca se alguem tem ou nao tem direito a 40% depois de avaliar ambiente, agente nocivo, intensidade da exposicao e possibilidade real de neutralizacao.
              </p>
              <p>
                E exatamente por isso que buscas como &quot;quem tem direito a 40 de insalubridade&quot; tantas vezes acabam em disputa trabalhista. Quando a decisao e tomada sem laudo, a margem para erro fica enorme.
              </p>
            </>
          ),
        },
        {
          title: 'Insalubridade e periculosidade sao a mesma coisa?',
          body: (
            <>
              <p>
                Nao. <strong>Insalubridade</strong> trata de exposicao nociva a saude ao longo do tempo. <strong>Periculosidade</strong> trata de risco acentuado de acidente grave, como inflamaveis, explosivos ou energia eletrica em certas condicoes.
              </p>
              <p>
                Um trabalhador pode estar em ambiente insalubre e perigoso ao mesmo tempo. Ainda assim, a regra geral e que ele <strong>nao recebe os dois adicionais cumulativamente</strong>; prevalece o mais favoravel.
              </p>
            </>
          ),
        },
        {
          title: 'Quando a empresa precisa de laudo tecnico',
          body: (
            <>
              <p>
                O laudo passa a ser indispensavel quando a empresa quer decidir com seguranca se deve pagar, manter, revisar ou retirar adicional de insalubridade. Sem ele, a decisao fica fragil em fiscalizacao e quase indefensavel em processo.
              </p>
              <ol>
                <li><strong>Para caracterizar a exposicao</strong> e definir se ha insalubridade.</li>
                <li><strong>Para apontar o grau correto</strong> de 10%, 20% ou 40%.</li>
                <li><strong>Para documentar neutralizacao</strong> quando EPC ou EPI reduzem o risco abaixo do limite.</li>
                <li><strong>Para alinhar PGR, PCMSO, LTCAT e eSocial</strong> quando ha reflexo previdenciario e ocupacional.</li>
              </ol>
            </>
          ),
        },
        {
          title: 'O que a NR-15 diz sobre insalubridade',
          body: (
            <>
              <p>
                A <strong>NR-15</strong> e a norma regulamentadora que organiza as atividades e operacoes insalubres para fins trabalhistas. E ela que define criterios tecnicos, anexos, agentes e a logica de enquadramento do adicional.
              </p>
              <p>
                Quem pesquisa &quot;insalubridade&quot; geralmente quer a resposta ampla: conceito, direito, calculo e laudo. Ja quem pesquisa &quot;NR-15 insalubridade&quot; costuma estar atras do texto normativo, dos anexos e do enquadramento tecnico. As duas intencoes se encostam, mas nao sao a mesma coisa.
              </p>
            </>
          ),
        },
        {
          title: 'Onde entram NR-15, LTCAT e eSocial',
          body: (
            <>
              <p>
                A <strong>NR-15</strong> organiza o enquadramento trabalhista da insalubridade. O <strong>LTCAT</strong> entra na documentacao previdenciaria e na analise de agentes nocivos para PPP e aposentadoria especial. O <strong>eSocial</strong> recebe o reflexo dessas informacoes, especialmente no S-2240 e no encadeamento com os exames do PCMSO.
              </p>
              <p>
                Quando esses documentos contam historias diferentes, a empresa perde consistencia tecnica. E e justamente essa inconsistência que costuma aparecer em pericia, auditoria e acao trabalhista.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'Quem tem direito a 40% de insalubridade?',
          a: 'Tem direito quem trabalha em condicao enquadrada como grau maximo por avaliacao tecnica. Nao e o cargo que define sozinho, mas a exposicao real e o enquadramento legal da atividade.',
        },
        {
          q: 'Insalubridade e calculada sobre salario base?',
          a: 'Em regra, nao. O adicional costuma ser calculado sobre o salario minimo, salvo previsao diferente em convencao coletiva ou acordo aplicavel a categoria.',
        },
        {
          q: 'Como calcular insalubridade de 20% ou 40%?',
          a: 'Primeiro se define o grau tecnico da exposicao. Depois se aplica o percentual correspondente sobre a base correta, que em regra e o salario minimo. Sem definir grau e base, o calculo fica errado.',
        },
        {
          q: 'A empresa pode parar de pagar insalubridade quando entrega EPI?',
          a: 'Nao automaticamente. Ela precisa comprovar tecnicamente que o risco foi neutralizado ou eliminado, atualizar laudos e manter evidencia de entrega, adequacao e fiscalizacao do uso do EPI.',
        },
        {
          q: 'Toda atividade insalubre gera aposentadoria especial?',
          a: 'Nao. O criterio trabalhista da NR-15 e o criterio previdenciario do LTCAT/PPP nao sao identicos. Ha casos com adicional de insalubridade sem enquadramento para aposentadoria especial.',
        },
        {
          q: 'Insalubridade e LTCAT sao a mesma coisa?',
          a: 'Nao. Insalubridade e o enquadramento trabalhista da exposicao nociva. O LTCAT entra na leitura previdenciaria e ajuda a sustentar PPP, S-2240 e analise de aposentadoria especial.',
        },
        {
          q: 'Qual a diferenca entre pagina de insalubridade e pagina da NR-15?',
          a: 'Esta pagina responde a duvida ampla sobre conceito, direito, calculo e aplicacao pratica. A pagina de NR-15 foca a norma regulamentadora e seus criterios tecnicos de enquadramento.',
        },
      ]}
      sidebarTitle="Sua empresa sabe se paga insalubridade certo?"
      sidebarHook="A SERMST analisa a exposicao real, revisa laudos e alinha NR-15, PGR, PCMSO, LTCAT e eSocial para a empresa decidir com base tecnica, nao no improviso."
      sidebarCtaLabel="Revisar insalubridade da empresa"
      related={[
        { label: 'NR-15: regra tecnica da insalubridade', href: '/normas/nr-15-insalubridade' },
        { label: 'NR-16: periculosidade', href: '/normas/nr-16-periculosidade' },
        { label: 'O que significa LTCAT', href: '/dicionario/o-que-e-ltcat' },
        { label: 'Servico de LTCAT previdenciario', href: '/servicos/ltcat-laudo-tecnico-previdenciario/sao-paulo' },
        { label: 'PPP eletronico (S-2240)', href: '/normas/ppp-eletronico' },
        { label: 'Guia da NR-01 e atualizacao do PGR', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'Pericia trabalhista e assistente tecnico', href: '/servicos/pericia-trabalhista-assistente-tecnico/sao-paulo' },
        { label: 'Medicina do trabalho: guia para empresas', href: '/saude/medicina-do-trabalho-guia' },
      ]}
      finalCta={{
        title: 'Insalubridade mal decidida vira custo ou processo',
        desc: 'A SERMST revisa enquadramento, laudo, PGR, PCMSO e reflexos no eSocial para sua empresa decidir com base tecnica, nao por palpite, habito de folha ou orientacao solta.',
        label: 'Solicitar analise tecnica',
        href: '/contato',
      }}
    />
  );
}
