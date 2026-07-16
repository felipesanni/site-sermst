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
      hubLabel="Saúde Ocupacional"
      hubLabelShort="← Saúde Ocupacional"
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
      intro="Medicina do trabalho não se resume ao exame admissional. A especialidade acompanha a relação entre saúde e trabalho, orienta o PCMSO e ajuda a empresa a organizar exames, registros e medidas preventivas."
      sections={[
        {
          title: 'O que é medicina do trabalho',
          body: (
            <>
              <p>
                Medicina do trabalho é a especialidade médica dedicada à <strong>relação entre saúde e trabalho</strong>. O profissional avalia como os riscos ocupacionais podem afetar cada função, acompanha a saúde dos trabalhadores e orienta medidas de prevenção e vigilância.
              </p>
              <p>
                Na prática, o médico responsável pode elaborar o PCMSO, realizar exames clínicos ocupacionais, emitir ASOs, acompanhar afastamentos e retornos e participar da análise de acidentes. A emissão da CAT cabe à empresa, embora o médico também possa registrá-la quando necessário.
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
                O descumprimento pode gerar autuação, multa e inconsistências em discussões previdenciárias ou trabalhistas. Ter documentos, por si só, não resolve: eles precisam refletir o que acontece na operação.
              </p>
            </>
          ),
        },
        {
          title: 'Medicina do trabalho e medicina clínica: focos diferentes',
          body: (
            <>
              <p>
                Na assistência clínica, o foco principal é diagnosticar e tratar o paciente. Na medicina do trabalho, um dos focos é <strong>avaliar a aptidão</strong> para uma função específica, considerando o estado de saúde e os riscos ocupacionais. Isso não impede que o médico do trabalho também faça orientação clínica dentro de sua atuação profissional.
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
                Afastamentos relacionados ao trabalho podem trazer efeitos previdenciários, trabalhistas e operacionais. Conforme o caso, há recolhimento de FGTS durante o benefício acidentário, garantia provisória de emprego e possível repercussão nos indicadores usados no FAP.
              </p>
              <p>
                Quando está integrado à operação, o médico consegue identificar <strong>tendências que merecem investigação</strong>: queixas recorrentes, funções com mais alterações nos exames ou riscos previstos no PGR que ainda não foram controlados. Esses sinais ajudam a priorizar medidas preventivas.
              </p>
            </>
          ),
        },
        {
          title: 'Quando a empresa precisa de SESMT',
          body: (
            <>
              <p>
                O SESMT (Serviço Especializado em Segurança e Medicina do Trabalho) reúne profissionais de SST. A <strong>NR-04</strong> define seu dimensionamento conforme o número de trabalhadores e o grau de risco da atividade principal do estabelecimento.
              </p>
              <p>
                Os limites variam bastante entre os graus de risco e devem ser conferidos no Anexo II da norma. Uma empresa sem SESMT próprio continua responsável por cumprir as obrigações de SST e pode contratar profissionais ou serviços externos para executar parte desse trabalho.
              </p>
            </>
          ),
        },
        {
          title: 'Como estruturar medicina do trabalho na prática',
          body: (
            <ol>
              <li><strong>Indicar o médico responsável pelo PCMSO:</strong> quando o programa for exigido, a organização deve indicar médico do trabalho; se não houver esse profissional na localidade, a NR-07 admite médico de outra especialidade.</li>
              <li><strong>Usar o PGR como base:</strong> os riscos ocupacionais identificados orientam o planejamento médico.</li>
              <li><strong>Elaborar o PCMSO:</strong> definir os exames e a periodicidade adequada a cada função.</li>
              <li><strong>Executar os exames no momento correto:</strong> o admissional ocorre antes de o empregado assumir as atividades. O demissional deve respeitar o prazo da NR-07 após o término do contrato.</li>
              <li><strong>Emitir e manter os ASOs:</strong> disponibilizar o documento ao trabalhador e enviar ao eSocial as informações aplicáveis.</li>
              <li><strong>Monitorar os prazos:</strong> acompanhar exames periódicos e mudanças que exijam revisão do programa.</li>
              <li><strong>Preparar o relatório analítico:</strong> avaliar os resultados do programa a cada ano, ressalvadas as dispensas previstas na própria NR-07.</li>
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
          a: 'Medicina do trabalho é a especialidade médica voltada à relação entre saúde e trabalho, incluindo PCMSO, exames ocupacionais e avaliação de aptidão. Saúde ocupacional é um campo mais amplo, que também envolve ergonomia, higiene ocupacional e segurança do trabalho.',
        },
      ]}
      sidebarTitle="Sua medicina do trabalho está cobrindo o que a lei exige?"
      sidebarHook="A SERMST estrutura e executa a medicina do trabalho da sua empresa: PCMSO, ASOs, exames e eSocial, com responsabilidade técnica definida e fluxo que não trava contratação."
      sidebarCtaLabel="Estruturar medicina do trabalho"
      sidebarCtaHref="/servicos/empresa-seguranca-do-trabalho/sao-paulo"
      related={[
        { label: 'Empresa de segurança do trabalho em São Paulo', href: '/servicos/empresa-seguranca-do-trabalho/sao-paulo' },
        { label: 'PCMSO: o programa de controle médico', href: '/saude/pcmso-programa-controle-medico' },
        { label: 'ASO: atestado de saúde ocupacional', href: '/saude/aso-atestado-saude-ocupacional' },
        { label: 'O que é saúde ocupacional', href: '/saude/o-que-e-saude-ocupacional' },
        { label: 'Clínica de exame admissional em SP', href: '/saude/clinica-exame-admissional-sao-paulo' },
        { label: 'Gestão de SST', href: '/saude/gestao-sst' },
      ]}
    />
  );
}
