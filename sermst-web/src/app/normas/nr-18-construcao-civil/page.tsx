import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-18: Construção Civil — Guia Completo para Empresas | SERMST',
  description:
    'NR-18 para construtoras: PCMAT extinto, substituído pelo PGR. Abrange PCMSO, treinamentos, eSocial SST e responsabilidade solidária em canteiro de obras.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-18-construcao-civil' },
  openGraph: {
    title: 'NR-18: Construção Civil — guia completo de SST | SERMST',
    description:
      'Tudo sobre a NR-18 para construtoras: PGR no lugar do PCMAT, PCMSO, treinamentos, eSocial SST, proteções coletivas e responsabilidade solidária em obra.',
    url: 'https://sermst.com.br/normas/nr-18-construcao-civil',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function NR18Page() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/site/safety-equipment.jpg", alt: "Canteiro de obra com sinalização e equipamentos de segurança conforme NR-18" }}
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="← Normas"
      hubHref="/normas"
      pageUrl="https://sermst.com.br/normas/nr-18-construcao-civil"
      badgeText="NR-18"
      readingTime="15 min"
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-05-21',
      }}

      h1="NR-18: Segurança e Saúde no Trabalho na Construção Civil"
      intro="A NR-18 é a norma com mais autuação aplicada do país. Reúne os requisitos de SST para canteiros de obra: PGR, PCMSO, treinamentos, proteções coletivas, EPIs e sinalização. Com a revisão da norma, o PCMAT foi extinto e substituído pelo PGR. Este guia explica o que a NR-18 exige hoje, como o eSocial impacta a construção civil e o que precisa estar documentado para não embargar a obra."
      sections={[
        {
          title: 'O que é a NR-18 e quem precisa cumprir',
          body: (
            <>
              <p>
                A NR-18 estabelece as diretrizes de ordem administrativa, de planejamento e de organização aplicáveis à <strong>indústria da construção civil</strong>. A norma cobre obra residencial, comercial, industrial, pavimentação, demolição, reforma, restauração e todas as atividades correlatas executadas em canteiro de obras.
              </p>
              <p>
                A obrigatoriedade vale para qualquer empresa que empregue trabalhadores regidos pela CLT em atividade de construção, independentemente do porte. Isso inclui a grande construtora com centenas de funcionários, a empreiteira de médio porte, a empresa de reforma e o microempreendedor que contrata um ajudante.
              </p>
              <p>
                A construção civil é o setor com maior taxa de acidente fatal no Brasil. Por isso, a fiscalização da NR-18 é uma das mais ativas e recorrentes do Ministério do Trabalho e Emprego (MTE). A norma é extensa e detalhada, e as autuações em construção representam uma parcela significativa de todas as infrações aplicadas no país a cada ano.
              </p>
            </>
          ),
        },
        {
          title: 'Grau de risco da construção civil e o que isso implica',
          body: (
            <>
              <p>
                A construção civil está enquadrada no <strong>Grau de Risco 3</strong> para a maioria dos CNAEs do setor. Esse enquadramento define diretamente quais obrigações de SST se aplicam à empresa.
              </p>
              <p>
                Com Grau de Risco 3, a empresa precisa ter PCMSO com médico coordenador, PGR elaborado por profissional habilitado, e dependendo do número de empregados, SESMT (Serviço Especializado em Engenharia de Segurança e em Medicina do Trabalho) próprio. O SESMT para empresas de construção com Grau de Risco 3 é exigido a partir de 51 empregados.
              </p>
              <p>
                Para empresas abaixo desse limite, a alternativa é a contratação de serviço especializado externo. A ausência de SESMT quando obrigatório ou de PCMSO e PGR em vigor é uma das infrações mais comuns em construção e gera autuação automática.
              </p>
            </>
          ),
        },
        {
          title: 'O PCMAT foi extinto: o que substituiu e o que isso muda na prática',
          body: (
            <>
              <p>
                O <strong>PCMAT (Programa de Condições e Meio Ambiente de Trabalho na Indústria da Construção)</strong> foi durante décadas o documento central de planejamento de SST exigido pela NR-18. Para obras com 20 ou mais trabalhadores, era obrigatório elaborar o PCMAT antes do início das atividades, com conteúdo específico: memorial descritivo, projetos de proteção coletiva, layout do canteiro, cronograma de medidas preventivas e programa de treinamento.
              </p>
              <p>
                Com a revisão da NR-18, o PCMAT foi <strong>oficialmente extinto</strong>. O PPRA (Programa de Prevenção de Riscos Ambientais) também foi descontinuado no mesmo processo. Ambos foram substituídos pelo <strong>PGR (Programa de Gerenciamento de Riscos)</strong>, previsto na NR-01 atualizada, que passa a ser o documento único de gestão de riscos ocupacionais para todas as empresas com empregados CLT.
              </p>
              <p>
                Obras que já tinham um PCMAT válido em andamento puderam manter o documento até a conclusão daquela obra específica. Para qualquer canteiro iniciado após a transição da norma, o PGR é o único documento aceito. Apresentar PCMAT para obra nova não atende mais à legislação e configura ausência de programa de gestão de riscos.
              </p>
              <p>
                Na prática, o PGR é mais abrangente que o PCMAT. Enquanto o PCMAT era específico da obra e da NR-18, o PGR integra todos os ambientes de trabalho da empresa sob um único instrumento, com metodologia estruturada de inventário de riscos, hierarquia de controles e plano de ação com prazo e responsável definidos.
              </p>
            </>
          ),
        },
        {
          title: 'PGR na construção civil: estrutura e conteúdo obrigatório',
          body: (
            <>
              <p>
                O PGR na construção civil segue a estrutura da NR-01 e precisa ser específico para o canteiro de obras. Não é possível usar um PGR genérico da empresa para cobrir o canteiro. O documento deve incluir:
              </p>
              <ul>
                <li>Inventário de riscos do canteiro: físicos (ruído, calor, vibração), químicos (poeira, solventes, tintas), biológicos, ergonômicos e de acidentes (queda de altura, soterramento, choque elétrico)</li>
                <li>Classificação dos riscos por severidade e probabilidade, com priorização das medidas de controle</li>
                <li>Plano de ação com medidas preventivas, responsáveis e prazos definidos para cada risco identificado</li>
                <li>Hierarquia das medidas de controle: eliminação, substituição, controles de engenharia, controles administrativos e, por último, EPI</li>
                <li>Integração com o PCMSO para definição dos exames periódicos baseados nos riscos levantados</li>
                <li>Cronograma de revisão periódica do documento, adequado às fases da obra</li>
              </ul>
              <p>
                Um ponto crítico: o PGR do canteiro precisa ser revisado conforme a obra avança. Os riscos da fase de fundação são diferentes dos riscos da fase de estrutura, que são diferentes dos riscos do acabamento. Um PGR estático, elaborado no início e nunca atualizado, já representa um passivo em fiscalização.
              </p>
              <p>
                O PGR precisa ser elaborado e assinado por engenheiro de segurança do trabalho, com ART recolhida. Técnico de segurança do trabalho pode elaborar sob supervisão do engenheiro responsável. Sem habilitação técnica e sem ART, o documento não tem validade legal.
              </p>
            </>
          ),
        },
        {
          title: 'PCMSO na construção civil: exames e monitoramento de saúde',
          body: (
            <>
              <p>
                O <strong>PCMSO (Programa de Controle Médico de Saúde Ocupacional)</strong>, exigido pela NR-07, é obrigatório para toda empresa de construção civil com empregados CLT. Deve ser elaborado por médico do trabalho e estar diretamente integrado ao PGR: os exames complementares exigidos no PCMSO são definidos com base nos riscos identificados no inventário do PGR.
              </p>
              <p>
                Na construção civil, os riscos mais comuns que determinam exames específicos incluem exposição a ruído (audiometria tonal obrigatória), poeira de sílica (espirometria e radiografia de tórax), solventes e tintas (hemograma e função hepática), calor intenso e trabalho em altura. A ausência de exames complementares adequados ao perfil de risco da obra é uma das principais inconsistências encontradas em auditoria.
              </p>
              <p>
                O ASO (Atestado de Saúde Ocupacional) precisa ser emitido para todos os trabalhadores no admissional, no periódico, no retorno ao trabalho após afastamento superior a 30 dias e no demissional. Em obra, é comum encontrar trabalhadores admitidos sem ASO válido, especialmente em contratações emergenciais. Cada trabalhador sem ASO é um passivo individual em fiscalização.
              </p>
              <p>
                Desde 2023, o PCMSO e os eventos de SST precisam ser enviados ao eSocial via evento S-2220 (monitoramento de saúde do trabalhador). A ausência de envio gera inconsistência no eSocial e pode acionar notificação automática do MTE.
              </p>
            </>
          ),
        },
        {
          title: 'eSocial SST na construção civil',
          body: (
            <>
              <p>
                A construção civil tem obrigações específicas no eSocial que vão além do que é exigido em outros setores. Os dois principais eventos de SST para construtoras são o <strong>S-2220</strong> e o <strong>S-2240</strong>.
              </p>
              <p>
                O <strong>S-2220</strong> registra o monitoramento de saúde do trabalhador: exames admissionais, periódicos, de retorno ao trabalho e demissionais. Precisa ser enviado sempre que um ASO é emitido. Construtoras com alta rotatividade de mão de obra e admissões frequentes precisam de um fluxo operacional eficiente para não acumular eventos em atraso.
              </p>
              <p>
                O <strong>S-2240</strong> registra as condições ambientais de trabalho: agentes nocivos, intensidade ou concentração de exposição e as medidas de controle adotadas. Na construção civil, o S-2240 é especialmente relevante porque o canteiro tem múltiplos agentes nocivos reconhecidos (ruído, vibração, calor, poeira de sílica) que precisam ser informados com base no LTCAT ou no inventário do PGR.
              </p>
              <p>
                Inconsistências no S-2240 podem indicar ao sistema que trabalhadores estão expostos a agentes nocivos sem proteção adequada, gerando notificação automática. Isso acontece com frequência quando o PGR descreve os riscos mas o S-2240 não está atualizado com as medidas de controle correspondentes.
              </p>
            </>
          ),
        },
        {
          title: 'Treinamentos obrigatórios em obra: o que exige a NR-18',
          body: (
            <>
              <p>
                A NR-18 exige treinamento <strong>admissional e periódico</strong> para todos os trabalhadores do canteiro. A carga horária mínima do treinamento admissional é de 6 horas, com conteúdo programático específico para a construção civil. Não é possível usar treinamento genérico de outro setor: o conteúdo precisa ser adequado aos riscos da função e do canteiro.
              </p>
              <p>
                Além do treinamento geral da NR-18, atividades específicas exigem treinamentos adicionais obrigatórios:
              </p>
              <ul>
                <li><strong>NR-35 (trabalho em altura):</strong> obrigatório para qualquer trabalhador que execute atividade a partir de 2 metros de altura. Inclui andaimes, telhados, fachadas, lajes e plataformas. Validade de 2 anos, carga mínima de 8 horas.</li>
                <li><strong>NR-10 (segurança em instalações elétricas):</strong> obrigatório para eletricistas e para qualquer trabalhador que atue em proximidade de instalações energizadas.</li>
                <li><strong>NR-12 (máquinas e equipamentos):</strong> obrigatório para operadores de betoneira, serra circular, compactador, guindaste e qualquer outra máquina com risco de acidente.</li>
                <li><strong>NR-33 (espaço confinado):</strong> obrigatório para trabalhadores que entram em poços, fossas, tanques, galerias e qualquer ambiente com risco de atmosfera deficiente ou tóxica.</li>
                <li><strong>NR-34 (construção e reparação naval):</strong> específico para obras em embarcações e estruturas flutuantes.</li>
              </ul>
              <p>
                Cada treinamento precisa ser documentado com lista de presença nominal, conteúdo programático, carga horária, data, local, nome do instrutor e certificado individual. Em fiscalização, a ausência de qualquer um desses registros para trabalhadores que executam as atividades correspondentes é infração autuável.
              </p>
              <p>
                A validade dos treinamentos também é fiscalizada. Treinamento de NR-35 com mais de 2 anos sem reciclagem, por exemplo, já é passivo mesmo que o certificado exista.
              </p>
            </>
          ),
        },
        {
          title: 'Proteções coletivas obrigatórias no canteiro',
          body: (
            <>
              <p>
                A NR-18 prioriza as medidas de proteção coletiva (EPC) sobre as individuais (EPI). Isso significa que antes de exigir capacete e cinto do trabalhador, a obra precisa ter as proteções coletivas instaladas. O fiscal verifica se o EPI está sendo usado apenas como complemento a medidas coletivas instaladas, não como substituto delas.
              </p>
              <p>
                As principais proteções coletivas exigidas pela NR-18 incluem:
              </p>
              <ul>
                <li><strong>Guarda-corpo e rodapé:</strong> obrigatórios em todas as aberturas de laje, escadas, rampas e plataformas com desnível superior a 2 metros.</li>
                <li><strong>Redes de proteção:</strong> exigidas em fachadas e em aberturas internas quando o guarda-corpo fixo não é viável.</li>
                <li><strong>Fechamento de poços de elevador:</strong> obrigatório em todos os pavimentos não ocupados.</li>
                <li><strong>Plataformas de proteção:</strong> em obras com mais de 2 pavimentos, exigidas nas fachadas e nas áreas de circulação.</li>
                <li><strong>Sinalização e isolamento de áreas de risco:</strong> tapumes, cones, faixas e placas em áreas de trabalho, trânsito de máquinas e queda de objetos.</li>
                <li><strong>Instalações elétricas provisórias:</strong> quadros aterrados, cabos em eletroduto ou bandeja, dispositivos de proteção diferencial residual (DR) em todos os circuitos.</li>
              </ul>
              <p>
                A ausência de proteção coletiva obrigatória é uma das infrações com maior probabilidade de resultar em embargo imediato. O fiscal pode interromper a obra no mesmo dia se identificar risco grave e iminente sem medida coletiva instalada.
              </p>
            </>
          ),
        },
        {
          title: 'Áreas de vivência: o que a norma exige para trabalhadores em canteiro',
          body: (
            <>
              <p>
                A NR-18 define requisitos detalhados para as instalações de apoio aos trabalhadores no canteiro. O descumprimento das exigências de áreas de vivência é uma das infrações mais comuns em obras de pequeno e médio porte, porque construtoras tratam as instalações de apoio como secundárias em relação ao andamento físico da obra.
              </p>
              <p>
                As exigências incluem:
              </p>
              <ul>
                <li><strong>Vestiário:</strong> com armários individuais (ou locais equivalentes), separado por sexo, com ventilação e iluminação adequadas.</li>
                <li><strong>Sanitários:</strong> um vaso para cada 20 trabalhadores do sexo masculino e um mictório para cada 20 trabalhadores, mais um vaso para cada 20 trabalhadoras. Exige limpeza diária documentada.</li>
                <li><strong>Local para refeições:</strong> mesas e assentos suficientes para o turno, protegido de intempéries, com lixeira, lavatório próximo e sem comunicação direta com o vestiário.</li>
                <li><strong>Água potável:</strong> fornecimento em quantidade suficiente e com qualidade comprovada.</li>
                <li><strong>Alojamento (quando houver):</strong> com ventilação cruzada, área mínima por trabalhador, camas, armários e instalações sanitárias adequadas.</li>
              </ul>
              <p>
                Obras que funcionam com trabalhadores em regime de alojamento têm obrigações adicionais e são fiscalizadas com maior frequência. A precariedade das instalações de vivência é um dos principais motivos de reclamação de trabalhadores ao MTE e de abertura de inspeções.
              </p>
            </>
          ),
        },
        {
          title: 'Responsabilidade solidária: construtora, empreiteira e subcontratadas',
          body: (
            <>
              <p>
                Um dos pontos mais relevantes da NR-18 para gestores é a <strong>responsabilidade solidária</strong> entre a empresa contratante da obra e todas as empresas subcontratadas. A construtora dona do canteiro responde pelas condições de SST de todos os trabalhadores que executam serviços no local, independentemente de quem os emprega diretamente.
              </p>
              <p>
                Isso significa que se uma empreiteira terceirizada estiver com trabalhadores sem ASO, sem treinamento de NR-35 ou sem EPI adequado, a construtora responde solidariamente na fiscalização. O auto de infração pode ser lavrado contra a construtora mesmo que ela não seja a empregadora direta dos trabalhadores.
              </p>
              <p>
                Em acidente de trabalho com trabalhador terceirizado, a construtora pode ser incluída como ré em ação trabalhista, civil e, dependendo da gravidade, em inquérito criminal. A responsabilidade solidária não é afastada por cláusula contratual com a terceirizada.
              </p>
              <p>
                A gestão documental das subcontratadas é, portanto, uma obrigação operacional da construtora. Isso inclui verificar periodicamente: PGR da subcontratada, ASOs de todos os trabalhadores alocados na obra, certificados de treinamento atualizados para cada atividade executada e registros de entrega de EPI. Construtoras que não têm esse controle estão gerindo risco trabalhista invisível.
              </p>
            </>
          ),
        },
        {
          title: 'O que muda em obra pequena e reforma',
          body: (
            <>
              <p>
                No texto antigo da norma, obras com menos de 20 trabalhadores não precisavam de PCMAT. Com a extinção do PCMAT e a chegada do PGR, essa distinção deixou de existir. Hoje, <strong>qualquer obra com empregados CLT precisa de PGR e PCMSO</strong>, independentemente do porte ou do número de trabalhadores.
              </p>
              <p>
                Uma empresa de reforma com 3 trabalhadores contratados pela CLT precisa ter ASO admissional para cada um, treinamento de NR-35 se houver qualquer atividade acima de 2 metros, PGR documentando os riscos da atividade e PCMSO com os exames pertinentes. O porte da obra pode influenciar a extensão dos documentos, mas não elimina as obrigações básicas.
              </p>
              <p>
                Microempreendedores individuais (MEI) que contratam funcionários também estão sujeitos às obrigações de SST. A inscrição como MEI não afasta a responsabilidade de empregador para fins de segurança e saúde no trabalho. A diferença prática é que MEI com um empregado pode ter um PGR mais simples, mas precisa ter.
              </p>
              <p>
                Para obras iniciadas com prazo curto, um erro comum é tratar SST como burocracia a ser resolvida depois do início das atividades. O PGR e o ASO admissional precisam existir antes de o trabalhador entrar no canteiro, não depois. Autuação por ausência de documentação na fase inicial da obra cobre também os períodos anteriores ao início da fiscalização.
              </p>
            </>
          ),
        },
        {
          title: 'O que acontece em fiscalização e como se defender',
          body: (
            <>
              <p>
                A fiscalização do MTE em canteiro de obras pode ser programada (planejamento periódico da regional) ou reativa (denúncia de trabalhador, acidente registrado, queixa sindical). Em ambos os casos, o fiscal verifica in loco as condições do canteiro e solicita documentação no ato.
              </p>
              <p>
                Os documentos solicitados com maior frequência incluem: PGR vigente e assinado, PCMSO com os exames definidos, ASOs de todos os trabalhadores presentes, certificados de treinamento (NR-18, NR-35, NR-10, NR-12 conforme aplicável), fichas de entrega de EPI e ordens de serviço de segurança assinadas pelos trabalhadores.
              </p>
              <p>
                A ausência de qualquer desses documentos resulta em lavratura de auto de infração. A multa pode ser contestada via defesa administrativa, mas a defesa é mais eficiente quando os documentos existem e há erro formal, não quando os documentos simplesmente não existem.
              </p>
              <p>
                Em casos de risco grave e iminente verificado durante a fiscalização, como proteção coletiva ausente em trabalho em altura ou instalação elétrica precária, o fiscal pode lavrar embargo ou interdição de trecho da obra sem necessidade de notificação prévia. O custo da paralisação por embargo é, em geral, muito superior ao custo de adequação preventiva.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'O PCMAT ainda é exigido pela NR-18?',
          a: 'Não. O PCMAT foi oficialmente extinto com a revisão da NR-18. O documento foi substituído pelo PGR (Programa de Gerenciamento de Riscos), previsto na NR-01. Para obras novas, iniciadas após a transição da norma, o PGR é o documento obrigatório. Obras que tinham PCMAT válido em andamento puderam mantê-lo até a conclusão daquela obra específica.',
        },
        {
          q: 'Qual a diferença entre PCMAT e PGR?',
          a: 'O PCMAT era um documento exclusivo da construção civil, exigido pela NR-18 para obras com 20 ou mais trabalhadores. O PGR é o instrumento unificado de gestão de riscos, previsto na NR-01, aplicável a todas as empresas com empregados CLT. Na construção civil, o PGR substituiu o PCMAT e o PPRA, cobrindo inventário de riscos, plano de ação, controles e cronograma de revisão com mais abrangência e metodologia estruturada.',
        },
        {
          q: 'Construtora que terceiriza tudo: quem responde pelos acidentes?',
          a: 'A construtora dona da obra é responsável solidária pelas condições de SST do canteiro, mesmo quando a execução é totalmente terceirizada. Em fiscalização, o auto de infração pode ser lavrado contra a construtora por irregularidade de trabalhador subcontratado. Em acidente, a construtora pode ser incluída em ação trabalhista e criminal independentemente de cláusula contratual com a terceirizada.',
        },
        {
          q: 'O PGR precisa ser atualizado durante a obra?',
          a: 'Sim. O PGR do canteiro precisa ser revisado conforme a obra avança. Os riscos da fase de fundação são diferentes dos da estrutura e do acabamento. Um PGR elaborado no início e nunca revisado já representa passivo em fiscalização, porque o documento não reflete os riscos reais da fase atual da obra.',
        },
        {
          q: 'Obra de reforma pequena também precisa de PGR e PCMSO?',
          a: 'Sim. Qualquer obra com trabalhadores CLT precisa de PGR e PCMSO, independentemente do número de funcionários ou do porte da reforma. A extinção do PCMAT eliminou a distinção anterior que eximia obras com menos de 20 trabalhadores do documento específico. O que muda é a complexidade do PGR, não a obrigatoriedade.',
        },
        {
          q: 'Qual a multa por descumprimento da NR-18?',
          a: 'Varia conforme a infração e o número de trabalhadores expostos. Cada item da NR-18 tem código próprio de autuação. Multas individuais começam em poucos milhares de reais e podem somar dezenas de milhares em uma única visita fiscal quando há múltiplas infrações. Em caso de embargo por risco grave e iminente, o custo da paralisação costuma superar o valor das multas.',
        },
        {
          q: 'O que é fiscalizado com mais frequência em canteiro de obras?',
          a: 'Os itens autuados com mais frequência são: ausência ou desatualização do PGR, ausência de ASO admissional de trabalhadores, falta de treinamento de NR-35 para trabalho em altura, ausência de proteções coletivas obrigatórias (guarda-corpo, fechamento de lajes), instalação elétrica provisória sem aterramento ou dispositivo DR, e áreas de vivência (sanitários e refeitório) em desconformidade.',
        },
        {
          q: 'Como funciona o eSocial SST na construção civil?',
          a: 'As construtoras precisam enviar o evento S-2220 para cada ASO emitido (admissional, periódico, retorno e demissional) e o S-2240 para registrar as condições ambientais de trabalho e os agentes nocivos aos quais cada trabalhador está exposto. Inconsistências entre o S-2240 e o PGR ou LTCAT da empresa geram notificações automáticas do sistema.',
        },
        {
          q: 'O PGR na construção civil precisa de ART?',
          a: 'Sim. O PGR deve ser elaborado por engenheiro de segurança do trabalho com ART recolhida no CREA, ou por técnico de segurança do trabalho sob supervisão do engenheiro responsável. Sem ART, o documento não tem validade legal em fiscalização e não protege a empresa em defesa administrativa.',
        },
        {
          q: 'Trabalhador sem ASO pode entrar no canteiro?',
          a: 'Não. O ASO admissional precisa ser emitido antes do início das atividades. Trabalhador que entra no canteiro sem ASO válido já configura infração, independentemente do tempo que ficou trabalhando sem o documento. Em fiscalização, cada trabalhador sem ASO é contabilizado individualmente no auto de infração.',
        },
        {
          q: 'CIPA é obrigatória em empresas de construção civil?',
          a: 'Sim. A NR-05 exige a constituição de CIPA em empresas de construção civil a partir de 50 empregados no estabelecimento. Para empresas com número inferior, é obrigatória a designação de um representante de segurança dos trabalhadores. A CIPA na construção tem mandato de 1 ano e os membros precisam de treinamento específico, incluindo o curso de 20 horas para titulares e suplentes eleitos e indicados. A ausência de CIPA quando obrigatória é infração autuável e representa também uma oportunidade perdida de engajar os trabalhadores na prevenção de acidentes.',
        },
      ]}
      sidebarTitle="Sua obra tem PGR, PCMSO e treinamentos em dia?"
      sidebarHook="A NR-18 é a norma mais fiscalizada do país. A SERMST faz auditoria documental e visita técnica de canteiro antes da fiscalização chegar."
      sidebarCtaLabel="Solicitar PGR para obra"
      sidebarCtaHref="/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo"
      finalCta={{
        title: 'Sua obra precisa de PGR, PCMSO e treinamentos?',
        desc: 'A SERMST elabora o PGR para canteiros de obra, gerencia o PCMSO com ASO no mesmo dia e ministra treinamentos de NR-18, NR-35 e NR-10. Atendimento em São Paulo e Grande ABC.',
        label: 'Solicitar diagnóstico para minha obra',
        href: '/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo',
      }}
      related={[
        { label: 'NR-01 e PGR: Gerenciamento de Riscos', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'NR-35: Trabalho em altura', href: '/normas/nr-35-trabalho-em-altura' },
        { label: 'NR-10: Segurança em instalações elétricas', href: '/normas/nr-10-eletricidade' },
        { label: 'PGR para construção civil', href: '/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo' },
        { label: 'Treinamentos NR-18, NR-35 e NR-10', href: '/servicos/treinamentos-nrs-cipa-brigada/sao-paulo' },
        { label: 'PCMSO e exames ocupacionais', href: '/servicos/pcmso-nr07-programa/sao-paulo' },
      ]}
    />
  );
}
