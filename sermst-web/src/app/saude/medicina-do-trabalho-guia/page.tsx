import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Medicina do Trabalho: Guia para Empresas | SERMST',
  description:
    'Medicina do trabalho protege o trabalhador e a empresa. Entenda o que ela cobre, o que é obrigatório e como estruturar na sua operação.',
  alternates: { canonical: 'https://sermst.com.br/saude/medicina-do-trabalho-guia' },
  openGraph: {
    title: 'Medicina do Trabalho: o que é e por que vai além do exame | SERMST',
    description:
      'Entenda o papel da medicina do trabalho nas empresas: obrigações legais, diferença da medicina clínica, prevenção de afastamentos e como estruturar essa área.',
    url: 'https://sermst.com.br/saude/medicina-do-trabalho-guia',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function MedicinaDoTrabalhoPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub Saúde Ocupacional"
      hubLabelShort="← Hub Saúde"
      hubHref="/saude"
      pageUrl="https://sermst.com.br/saude/medicina-do-trabalho-guia"
      coverImage={{
        src: '/images/articles/medicina-trabalho.jpg',
        alt: 'Médico do trabalho em consulta clínica ocupacional com profissional',
      }}
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-05-01',
      }}

      h1="Medicina do Trabalho: o que é e o que toda empresa precisa saber"
      intro="Medicina do trabalho não é só exame admissional. É a especialidade que conecta saúde do trabalhador, segurança jurídica da empresa e conformidade com o eSocial — e que, quando bem estruturada, reduz afastamento, processo e custo escondido."
      sections={[
        {
          title: 'O que é medicina do trabalho',
          body: (
            <>
              <p>
                Medicina do trabalho é a especialidade médica focada na <strong>relação entre saúde humana e ambiente de trabalho</strong>. O médico do trabalho não trata doenças no sentido clínico convencional — ele identifica, avalia e controla os riscos que o trabalho pode causar à saúde do trabalhador, e define as medidas de prevenção e vigilância necessárias.
              </p>
              <p>
                Na prática, isso se traduz em: elaborar e coordenar o PCMSO, realizar e assinar os ASOs, participar da análise de acidentes de trabalho, emitir CAT, acompanhar afastamentos e retornos, e contribuir com a identificação de riscos à saúde no PGR.
              </p>
            </>
          ),
        },
        {
          title: 'O que a lei exige da empresa',
          body: (
            <>
              <p>
                A <strong>NR-07</strong> é a norma central da medicina do trabalho. Como regra, as organizações com empregados CLT devem:
              </p>
              <ul>
                <li>Elaborar e implementar o PCMSO, sob responsabilidade do médico indicado para o programa</li>
                <li>Realizar os exames ocupacionais previstos (admissional, periódico, retorno, mudança de função, demissional)</li>
                <li>Emitir ASO ao fim de cada exame clínico ocupacional e disponibilizá-lo de forma comprovável ao trabalhador</li>
                <li>Registrar os resultados dos exames e elaborar o relatório analítico anual do PCMSO</li>
                <li>Enviar os eventos de SST correspondentes ao eSocial (S-2220, principalmente)</li>
              </ul>
              <p>
                O não cumprimento dessas obrigações gera autuação do MTE, multas e — o que importa mais no longo prazo — elimina a defesa da empresa em ações trabalhistas por doença ocupacional.
              </p>
            </>
          ),
        },
        {
          title: 'Medicina do trabalho x medicina clínica: a diferença que define responsabilidade',
          body: (
            <>
              <p>
                O médico clínico trata o paciente. O <strong>médico do trabalho avalia a aptidão</strong> do trabalhador para exercer uma função específica, considerando os riscos daquela atividade e o estado de saúde atual da pessoa.
              </p>
              <p>
                Isso tem implicação direta para a empresa: o ASO precisa registrar os dados do médico responsável pelo PCMSO, quando houver, e a assinatura do médico que realizou o exame clínico. Para o PCMSO, a organização deve indicar médico do trabalho responsável; se não houver esse profissional na localidade, a NR-07 admite médico de outra especialidade.
              </p>
            </>
          ),
        },
        {
          title: 'O papel do médico do trabalho na prevenção de afastamentos',
          body: (
            <>
              <p>
                O afastamento por doença ocupacional ou acidente de trabalho é um dos maiores custos escondidos da empresa: FGTS continua, estabilidade de 12 meses após retorno do acidente, impacto no FAP (Fator Acidentário de Prevenção) que eleva o RAT e o custo da folha.
              </p>
              <p>
                O médico do trabalho bem integrado à operação identifica <strong>tendências antes de virar problema</strong>: trabalhadores com queixas recorrentes, funções com alta incidência de afastamento, riscos que o PGR mapeia mas que a operação não está controlando. Essa análise preventiva é o que separa uma empresa que gasta com SST de uma que investe.
              </p>
            </>
          ),
        },
        {
          title: 'Quando a empresa precisa de SESMT',
          body: (
            <>
              <p>
                O SESMT (Serviço Especializado em Engenharia de Segurança e Medicina do Trabalho) é a equipe interna de saúde e segurança. A <strong>NR-04</strong> define a obrigatoriedade com base no número de empregados e no grau de risco do CNAE:
              </p>
              <ul>
                <li><strong>Grau de risco 1 e 2:</strong> obrigação começa em 50 a 100 funcionários, dependendo do grau.</li>
                <li><strong>Grau de risco 3 e 4:</strong> obrigação começa em 50 funcionários.</li>
                <li><strong>Empresas abaixo do limiar:</strong> podem terceirizar integralmente os serviços de medicina e segurança do trabalho.</li>
              </ul>
              <p>
                Empresas abaixo do limiar de SESMT obrigatório — que é a maioria das empresas brasileiras — devem contratar os serviços de uma clínica ou consultoria especializada, como a SERMST.
              </p>
            </>
          ),
        },
        {
          title: 'Como estruturar medicina do trabalho na prática',
          body: (
            <ol>
              <li><strong>Indicar médico responsável pelo PCMSO</strong> — a organização deve indicar médico do trabalho; se não houver esse profissional na localidade, a NR-07 admite médico de outra especialidade.</li>
              <li><strong>Fazer o PGR</strong> — identificação de riscos por cargo, base do PCMSO.</li>
              <li><strong>Elaborar o PCMSO</strong> — com o médico, baseado nos riscos mapeados. Definir exames e periodicidade por cargo.</li>
              <li><strong>Executar os exames</strong> — admissionais antes de contratar, periódicos no prazo, demissionais antes de encerrar o vínculo.</li>
              <li><strong>Emitir e arquivar ASOs</strong> — com disponibilização comprovável ao trabalhador e envio das informações aplicáveis ao S-2220.</li>
              <li><strong>Monitorar vencimentos</strong> — sistema de alerta para periódicos próximos do vencimento. Manter tabela atualizada por cargo.</li>
              <li><strong>Relatório analítico anual do PCMSO</strong> — análise dos exames realizados no ano, tendências e propostas de melhoria.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'Médico clínico pode assinar ASO?',
          a: 'O ASO deve conter os dados do médico responsável pelo PCMSO, quando houver, além da data, do registro profissional e da assinatura do médico que realizou o exame clínico.',
        },
        {
          q: 'Empresa MEI ou microempresa precisa de medicina do trabalho?',
          a: 'Os exames ocupacionais continuam obrigatórios quando há empregados. A NR-07 prevê dispensa de elaboração do PCMSO para alguns MEI, ME e EPP de grau de risco 1 ou 2 que atendem aos critérios aplicáveis e prestam as informações digitais previstas na NR-01.',
        },
        {
          q: 'Medicina do trabalho terceirizada tem a mesma validade legal?',
          a: 'Sim. O serviço pode ser contratado junto a uma clínica especializada. A organização continua responsável por garantir a elaboração e a efetiva implantação do PCMSO quando ele for exigido.',
        },
        {
          q: 'A empresa pode ser autuada mesmo tendo todos os exames em dia?',
          a: 'Sim, se os exames não estiverem alinhados com o PCMSO, se o ASO tiver campos faltando, se o médico não tiver a qualificação exigida, ou se os eventos de SST não forem enviados corretamente ao eSocial. Conformidade em medicina do trabalho é de conteúdo, não só de presença de documentos.',
        },
        {
          q: 'Qual a diferença entre medicina do trabalho e saúde ocupacional?',
          a: 'Medicina do trabalho é a especialidade médica — foco nos exames, ASOs, PCMSO e avaliação de aptidão. Saúde ocupacional é o conceito mais amplo, que inclui ergonomia, higiene ocupacional, segurança do trabalho, psicologia organizacional. A medicina do trabalho é uma das peças da saúde ocupacional.',
        },
      ]}
      sidebarTitle="Sua medicina do trabalho está cobrindo o que a lei exige?"
      sidebarHook="A SERMST estrutura e executa a medicina do trabalho da sua empresa: PCMSO, ASOs, exames e eSocial, com responsabilidade técnica definida e fluxo que não trava contratação."
      sidebarCtaLabel="Estruturar medicina do trabalho"
      related={[
        { label: 'PCMSO: o programa de controle médico', href: '/saude/pcmso-programa-controle-medico' },
        { label: 'ASO: atestado de saúde ocupacional', href: '/saude/aso-atestado-saude-ocupacional' },
        { label: 'O que é saúde ocupacional', href: '/saude/o-que-e-saude-ocupacional' },
        { label: 'Clínica de exame admissional em SP', href: '/saude/clinica-exame-admissional-sao-paulo' },
        { label: 'Gestão de SST', href: '/saude/gestao-sst' },
      ]}
    />
  );
}
