import type { Metadata } from 'next';
import Link from 'next/link';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

const PAGE_URL = 'https://sermst.com.br/normas/nr-35-trabalho-em-altura';
const PORTARIA_URL =
  'https://www.in.gov.br/web/dou/-/portaria-mte-n-1.259-de-15-de-julho-de-2026-719529365';

export const metadata: Metadata = {
  title: 'NR-35 atualizada 2026: presencial e escadas | SERMST',
  description:
    'Entenda a Portaria MTE 1.259/2026: treinamento NR-35 presencial, prazo para corrigir cursos anteriores e novas regras para escadas fixas.',
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: 'NR-35 atualizada 2026: treinamento presencial e escadas',
    description:
      'O que mudou na NR-35 em julho de 2026, quem precisa refazer o treinamento e como adequar escadas fixas verticais.',
    url: PAGE_URL,
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function NR35Page() {
  return (
    <BlockbusterArticle
      coverImage={{
        src: '/images/site/safety-equipment.jpg',
        alt: 'Trabalhador com sistema de proteção contra quedas em atividade regida pela NR-35',
      }}
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="← Normas"
      hubHref="/normas"
      pageUrl={PAGE_URL}
      badgeText="Atualizada em 2026"
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-07-27',
      }}
      readingTime="12 min"
      h1="NR-35 atualizada em 2026: treinamento presencial e novas regras para escadas"
      intro="A Portaria MTE nº 1.259, publicada em 16 de julho de 2026, tornou presenciais os treinamentos previstos na NR-35 e mudou a forma de avaliar, documentar e inspecionar escadas fixas verticais."
      quickAnswer={
        <p>
          Desde <strong>16 de julho de 2026</strong>, os treinamentos previstos na NR-35 devem ser
          presenciais. A empresa tem <strong>um ano</strong> para refazer presencialmente o treinamento
          inicial ou complementar a carga horária quando parte dele já tiver sido presencial. A Portaria
          também criou novas exigências para análise de risco, proteção contra quedas, procedimentos e
          inspeções de escadas fixas verticais.
        </p>
      }
      quickAnswerLabel="O que mudou na NR-35"
      showTableOfContents
      tableOfContentsTitle="Neste guia atualizado"
      sections={[
        {
          title: 'O que mudou na NR-35 em julho de 2026',
          body: (
            <>
              <p>
                A mudança veio com a{' '}
                <a
                  href={PORTARIA_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4"
                >
                  Portaria MTE nº 1.259/2026
                </a>
                , publicada no Diário Oficial da União em 16 de julho. O texto incluiu o item 35.4.5 na
                NR-35, alterou o Anexo III sobre escadas de uso individual e ajustou a Portaria MTE nº
                1.680/2025.
              </p>
              <p>Na prática, há duas frentes de adequação:</p>
              <ul>
                <li>
                  <strong>Capacitação:</strong> treinamento inicial, periódico e eventual da NR-35 passam
                  a ser presenciais.
                </li>
                <li>
                  <strong>Escadas:</strong> a empresa precisa revisar análises de risco, critérios para
                  proteção contra quedas, procedimentos operacionais e inspeções periódicas.
                </li>
              </ul>
              <p>
                A Portaria entrou em vigor na data da publicação. O prazo de um ano previsto para corrigir
                treinamentos iniciais anteriores não autoriza novas turmas online durante esse período.
              </p>
            </>
          ),
        },
        {
          title: 'Curso de NR-35 online foi proibido?',
          body: (
            <>
              <p>
                Para fins de capacitação exigida pela NR-35, sim. O novo item 35.4.5 determina que{' '}
                <strong>os treinamentos previstos na norma sejam realizados presencialmente</strong>. A
                redação não se limita ao treinamento inicial nem apenas às atividades com escadas.
              </p>
              <p>Isso alcança:</p>
              <ul>
                <li>o treinamento inicial, com carga mínima de 8 horas;</li>
                <li>o treinamento periódico, realizado a cada dois anos e com pelo menos 8 horas;</li>
                <li>o treinamento eventual, nas situações previstas pela NR-01.</li>
              </ul>
              <p>
                Material digital pode continuar sendo usado como apoio, consulta ou reforço. O que não
                deve ser confundido com isso é a capacitação obrigatória da NR-35, que agora precisa
                ocorrer presencialmente, com conteúdo teórico e prático compatível com a atividade.
              </p>
              <p>
                A SERMST oferece{' '}
                <Link
                  href="/treinamentos/nr-35-trabalho-em-altura"
                  className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4"
                >
                  treinamento presencial de NR-35
                </Link>{' '}
                para turmas empresariais e operações que precisam revisar sua capacitação.
              </p>
            </>
          ),
        },
        {
          title: 'Quem fez NR-35 online precisa refazer?',
          body: (
            <>
              <p>
                O artigo 8º da Portaria deu às organizações <strong>um ano contado da publicação</strong>{' '}
                para regularizar o treinamento inicial:
              </p>
              <ul>
                <li>
                  se o treinamento inicial foi integralmente a distância, a organização deve refazê-lo
                  presencialmente;
                </li>
                <li>
                  se uma parte do treinamento inicial já ocorreu presencialmente, a empresa pode
                  complementar presencialmente a carga horária necessária.
                </li>
              </ul>
              <p>
                Considerando a publicação em 16 de julho de 2026, o prazo de adequação termina em{' '}
                <strong>16 de julho de 2027</strong>. Esse prazo precisa entrar no plano de ação da empresa.
                Não é prudente esperar o vencimento bienal de cada certificado, porque a regra transitória
                criou uma obrigação específica de correção.
              </p>
              <p>
                Antes de convocar as turmas, vale separar certificados, listas de presença, conteúdo
                programático e evidências da parte prática. Esse levantamento mostra quem precisa refazer o
                treinamento por inteiro e quem pode ter a carga horária complementada.
              </p>
            </>
          ),
        },
        {
          title: 'O que continua valendo no trabalho em altura',
          body: (
            <>
              <p>
                A atualização não substituiu as obrigações centrais da NR-35. A norma continua aplicável à
                atividade com <strong>diferença de nível acima de 2 metros</strong> do nível inferior e
                risco de queda.
              </p>
              <ol>
                <li>
                  <strong>Análise de Risco:</strong> todo trabalho em altura deve ser precedido de AR. Em
                  atividades rotineiras, ela pode estar contemplada no procedimento operacional.
                </li>
                <li>
                  <strong>Permissão de Trabalho:</strong> exigida para atividades não rotineiras e limitada
                  à duração da atividade, ao turno ou à jornada de trabalho.
                </li>
                <li>
                  <strong>Autorização:</strong> a organização autoriza formalmente o trabalhador conforme
                  capacitação, aptidão e atividade que ele executará.
                </li>
                <li>
                  <strong>Aptidão:</strong> o PCMSO deve considerar patologias que possam causar mal súbito
                  e queda, além dos fatores psicossociais. A aptidão para trabalho em altura deve constar no
                  ASO.
                </li>
                <li>
                  <strong>Proteção contra quedas:</strong> a seleção de medidas coletivas e individuais
                  parte da AR e deve considerar a tarefa, o acesso e o risco.
                </li>
                <li>
                  <strong>Emergência e salvamento:</strong> a empresa precisa prever recursos, equipe e
                  tempo de resposta compatíveis com os cenários encontrados.
                </li>
              </ol>
            </>
          ),
        },
        {
          title: 'Novas regras para escadas fixas verticais',
          body: (
            <>
              <p>
                O Anexo III passou a exigir uma análise mais específica para escadas fixas verticais usadas
                exclusivamente como meio de acesso. A decisão sobre o SPIQ deve considerar{' '}
                <strong>finalidade da escada, frequência de uso e características construtivas</strong>.
              </p>
              <ul>
                <li>
                  A análise de risco específica deve avaliar a necessidade de Sistema de Proteção Individual
                  contra Quedas (SPIQ).
                </li>
                <li>
                  Quando a AR indicar SPIQ, sua seleção, inspeção, forma e limitações de uso devem ser
                  estabelecidas por profissional qualificado ou legalmente habilitado em Segurança do
                  Trabalho.
                </li>
                <li>
                  Escadas com características e condições de uso semelhantes podem ser avaliadas em grupo
                  por unidade operacional, setor ou atividade.
                </li>
                <li>A análise específica pode integrar o procedimento operacional.</li>
                <li>
                  O uso rotineiro da escada fixa vertical como acesso deve seguir procedimento operacional.
                </li>
                <li>
                  As condições de segurança precisam ser verificadas periodicamente, considerando estrutura,
                  frequência, criticidade de uso e modelo construtivo.
                </li>
              </ul>
              <p>
                A mudança não significa instalar a mesma solução em todas as escadas. Ela exige inventário,
                critérios técnicos e uma decisão documentada para cada grupo de condições semelhantes.
              </p>
            </>
          ),
        },
        {
          title: 'Prazos para adequar as escadas e regra para instalações existentes',
          body: (
            <>
              <p>
                O artigo 7º criou um cronograma progressivo para implementar os subitens 5.2.1.1.1 a
                5.2.1.1.4 e a exigência de sistema de proteção contra quedas da alínea “f”:
              </p>
              <ul>
                <li><strong>1º ano:</strong> implementação de até 500 escadas;</li>
                <li><strong>2º ano:</strong> da 501ª à 1.000ª escada;</li>
                <li><strong>3º ano:</strong> a partir da 1.001ª escada.</li>
              </ul>
              <p>
                Escadas já instaladas e projetos aprovados, contratados ou em execução na linha de corte da
                Portaria MTE nº 1.680/2025 receberam exceções para alguns requisitos construtivos. Isso não
                é uma dispensa geral do Anexo III. A organização deve guardar documentos que comprovem a
                data do projeto e ainda precisa tratar análise de risco, proteção contra quedas,
                procedimento e inspeção conforme o caso.
              </p>
            </>
          ),
        },
        {
          title: 'Validade e reciclagem da NR-35',
          body: (
            <>
              <p>
                Quando se fala em “validade da NR-35”, normalmente a dúvida é sobre o ciclo do treinamento.
                O treinamento periódico continua sendo exigido <strong>a cada dois anos</strong>, com carga
                mínima de 8 horas. Também pode haver treinamento eventual antes desse prazo.
              </p>
              <p>
                O ciclo bienal não substitui o prazo especial dado pela Portaria para corrigir treinamentos
                iniciais feitos a distância. São controles diferentes e devem aparecer separadamente no
                plano de capacitação.
              </p>
              <ul>
                <li>controle a data e a modalidade de cada treinamento;</li>
                <li>mantenha certificado, lista de presença e conteúdo programático;</li>
                <li>registre avaliação e atividade prática realizada;</li>
                <li>confirme se aptidão, autorização e atividade permanecem compatíveis;</li>
                <li>programe treinamento periódico ou eventual sem deixar lacunas.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Checklist de adequação para a empresa',
          body: (
            <ol>
              <li>
                Levante todos os trabalhadores autorizados para trabalho em altura e identifique modalidade,
                data e carga horária dos treinamentos.
              </li>
              <li>
                Separe quem precisa refazer integralmente o treinamento inicial e quem pode complementar a
                carga presencial.
              </li>
              <li>Interrompa novas contratações de capacitação NR-35 exclusivamente online.</li>
              <li>
                Faça o inventário das escadas fixas verticais por unidade, setor, finalidade e frequência de
                uso.
              </li>
              <li>
                Agrupe apenas escadas que realmente tenham características construtivas e condições de uso
                semelhantes.
              </li>
              <li>
                Atualize as análises de risco, decisões sobre SPIQ, procedimentos e critérios de inspeção.
              </li>
              <li>
                Guarde os documentos que comprovam a data de instalação ou de aprovação, contratação e
                execução dos projetos abrangidos pela regra de transição.
              </li>
              <li>
                Coloque os prazos da Portaria no plano de ação e defina responsáveis pelo acompanhamento.
              </li>
            </ol>
          ),
        },
        {
          title: 'Fontes oficiais consultadas',
          body: (
            <ul>
              <li>
                <a
                  href={PORTARIA_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4"
                >
                  Portaria MTE nº 1.259, de 15 de julho de 2026
                </a>
                , publicada no DOU de 16 de julho de 2026.
              </li>
              <li>
                <a
                  href="https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/inspecao-do-trabalho/seguranca-e-saude-no-trabalho/sst-portarias/2025/portaria-mte-no-1-680-aprova-o-anexo-escadas-nr-35.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-brand-900 underline decoration-accent-pink/40 underline-offset-4"
                >
                  Portaria MTE nº 1.680/2025 e Anexo III da NR-35
                </a>
                .
              </li>
            </ul>
          ),
        },
      ]}
      faq={[
        {
          q: 'O que mudou na NR-35 em 2026?',
          a: 'A Portaria MTE nº 1.259/2026 tornou presenciais os treinamentos previstos na NR-35 e alterou regras do Anexo III para escadas de uso individual. Também criou prazo para corrigir treinamentos iniciais anteriores e um cronograma de implementação para escadas fixas.',
        },
        {
          q: 'O curso de NR-35 online foi proibido?',
          a: 'Sim, para a capacitação exigida pela NR-35. Desde 16 de julho de 2026, os treinamentos previstos na norma devem ser presenciais. Conteúdo digital pode servir como apoio, mas não substitui o treinamento obrigatório.',
        },
        {
          q: 'A reciclagem da NR-35 também precisa ser presencial?',
          a: 'Sim. O item 35.4.5 alcança os treinamentos previstos na NR-35, o que inclui o inicial, o periódico e o eventual.',
        },
        {
          q: 'Quem fez o treinamento inicial por EAD precisa refazer?',
          a: 'A Portaria deu um ano para a organização refazer presencialmente o treinamento inicial. Quando uma parte da carga já tiver sido presencial, a empresa pode complementar presencialmente a carga horária.',
        },
        {
          q: 'Qual é o prazo para corrigir treinamentos anteriores?',
          a: 'O prazo é de um ano contado da publicação em 16 de julho de 2026. Portanto, a adequação deve ser concluída até 16 de julho de 2027.',
        },
        {
          q: 'A NR-35 continua valendo por dois anos?',
          a: 'O treinamento periódico continua ocorrendo a cada dois anos e deve ter pelo menos 8 horas. Esse ciclo não elimina o prazo específico para corrigir treinamentos iniciais feitos a distância.',
        },
        {
          q: 'Toda escada fixa vertical precisa receber SPIQ?',
          a: 'A escada usada exclusivamente como acesso deve passar por análise de risco específica. A necessidade do SPIQ depende da finalidade, da frequência de uso e das características construtivas. Quando necessário, o sistema deve ser definido por profissional qualificado ou legalmente habilitado em Segurança do Trabalho.',
        },
        {
          q: 'Escadas antigas estão dispensadas das novas regras?',
          a: 'Não existe dispensa geral. Há exceções para determinados requisitos construtivos de escadas e projetos abrangidos pela linha de corte da Portaria MTE nº 1.680/2025, mas permanecem obrigações de análise de risco, proteção contra quedas, procedimento e inspeção conforme o caso.',
        },
        {
          q: 'O que é considerado trabalho em altura?',
          a: 'É a atividade executada com diferença de nível acima de 2 metros do nível inferior quando houver risco de queda.',
        },
        {
          q: 'Quem pode ministrar o treinamento NR-35?',
          a: 'Os instrutores devem ter proficiência comprovada no assunto, sob responsabilidade de profissional qualificado ou legalmente habilitado em Segurança do Trabalho.',
        },
        {
          q: 'Tem turma presencial de NR-35 esta semana?',
          a: 'A SERMST programa turmas presenciais de NR-35 todas as semanas. As datas e vagas disponíveis precisam ser confirmadas com o comercial, porque dependem da formação de cada grupo.',
        },
        {
          q: 'Onde fazer o treinamento presencial de NR-35 em São Paulo?',
          a: 'A SERMST realiza treinamento presencial de NR-35 em São Paulo e avalia turmas in company. A página de treinamento permite consultar diretamente o comercial sobre local, data, horário e vagas.',
        },
        {
          q: 'A empresa pode contratar uma turma de NR-35 in company?',
          a: 'Sim. A confirmação depende do número de trabalhadores, da estrutura disponível para a prática e dos riscos da operação. Essas informações são verificadas antes da proposta.',
        },
        {
          q: 'Quanto custa o treinamento presencial de NR-35?',
          a: 'O valor varia conforme número de participantes, local, formato da turma e necessidades práticas. A empresa deve informar esses dados ao comercial para receber a condição correta.',
        },
      ]}
      maxFaqItems={14}
      sidebarTitle="Sua empresa precisa adequar a NR-35?"
      sidebarHook="A SERMST revisa certificados, organiza turmas presenciais e apoia a atualização das análises de risco, procedimentos e controles de escadas."
      sidebarCtaLabel="Solicitar adequação da NR-35"
      sidebarCtaHref="/treinamentos/nr-35-trabalho-em-altura"
      related={[
        {
          label: 'Treinamento presencial NR-35: trabalho em altura',
          href: '/treinamentos/nr-35-trabalho-em-altura',
        },
        {
          label: 'Avaliação psicossocial ocupacional para trabalho em altura',
          href: '/saude/avaliacao-psicossocial-ocupacional',
        },
        { label: 'Guia da NR-18 na construção civil', href: '/normas/nr-18-construcao-civil' },
        { label: 'Guia da NR-01 e atualização do PGR', href: '/normas/nr-01-pgr-atualizada' },
        {
          label: 'Treinamentos de NRs, CIPA e brigada',
          href: '/servicos/treinamentos-nrs-cipa-brigada/sao-paulo',
        },
      ]}
      finalCta={{
        title: 'Consulte a próxima turma presencial de NR-35',
        desc: 'A SERMST abre turmas semanais e também avalia atendimento in company. Na página de treinamento, você fala direto com o comercial para confirmar datas e vagas.',
        label: 'Ver turmas de NR-35',
        href: '/treinamentos/nr-35-trabalho-em-altura',
      }}
    />
  );
}
