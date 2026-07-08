import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-18 construção civil: resumo e PGR | SERMST',
  description:
    'Resumo da NR-18 atualizada: PGR no lugar do PCMAT, validade, áreas de vivência, canteiro de obras, grau de infração e exigências da construção civil.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-18-construcao-civil' },
  openGraph: {
    title: 'NR-18 construção civil: resumo e PGR | SERMST',
    description:
      'Veja o que a NR-18 exige para canteiros, reformas e obras: PGR, PCMAT, treinamentos, áreas de vivência, validade e fiscalização.',
    url: 'https://sermst.com.br/normas/nr-18-construcao-civil',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function NR18Page() {
  return (
    <BlockbusterArticle
      coverImage={{
        src: '/images/site/safety-equipment.jpg',
        alt: 'Canteiro de obra com sinalização e equipamentos de segurança conforme a NR-18',
      }}
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="← Normas"
      hubHref="/normas"
      pageUrl="https://sermst.com.br/normas/nr-18-construcao-civil"
      badgeText="NR-18"
      readingTime="15 min"
      showTableOfContents
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional | Técnico em Segurança do Trabalho | CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-07-02',
      }}
      h1="NR-18: o que a Norma Regulamentadora 18 exige na construção civil"
      intro="A NR-18, também chamada de Norma Regulamentadora 18, reúne os principais requisitos de SST para canteiros de obra: PGR, PCMSO, treinamentos, proteções coletivas, áreas de vivência, EPIs e sinalização. Com a revisão da norma, o PCMAT foi substituído pelo PGR. Neste guia, você entende o que a NR-18 exige hoje, o que mudou na versão atualizada, como o eSocial afeta a construção civil e o que precisa estar em ordem para a obra não virar passivo."
      quickAnswer={
        <p>
          A <strong>NR-18</strong> regula segurança e saúde na construção civil. O <strong>PCMAT foi substituído pelo PGR</strong> (NR-01), que deve contemplar todos os riscos do canteiro e ser atualizado conforme as fases da obra. Treinamento básico obrigatório: <strong>4 horas antes do início das atividades</strong>, com <strong>reciclagem de 4 horas a cada 2 anos</strong>. A obra precisa ter áreas de vivência adequadas (refeitório, alojamento, sanitários), proteções coletivas implantadas e dados de SST integrados ao <strong>eSocial (S-2220 e S-2240)</strong>.
        </p>
      }
      sections={[
        {
          title: 'Resumo da NR-18 para empresas',
          body: (
            <>
              <p>
                Em resumo, a <strong>NR-18</strong> define como a construção civil deve organizar segurança e saúde no trabalho em obras, reformas, demolições, escavações, canteiros e frentes de serviço. Ela exige planejamento antes do início das atividades e controle contínuo conforme a obra muda de fase.
              </p>
              <p>
                Os pontos mais procurados por empresas são: PGR no lugar do PCMAT, treinamento inicial de NR-18, áreas de vivência, proteção coletiva, controle de terceiros, documentos para fiscalização e integração com PCMSO, ASO e eSocial SST.
              </p>
              <p>
                A lógica prática é simples: se existe trabalhador em canteiro de obra, a empresa precisa provar que avaliou riscos, treinou a equipe, organizou o ambiente e manteve medidas de prevenção compatíveis com a atividade executada.
              </p>
            </>
          ),
        },
        {
          title: 'O que é a NR-18 e quem precisa cumprir',
          body: (
            <>
              <p>
                A <strong>NR-18, ou Norma Regulamentadora 18</strong>, estabelece diretrizes administrativas, de planejamento e de organização aplicáveis à <strong>indústria da construção civil</strong>. A norma alcança obra residencial, comercial e industrial, além de demolição, pavimentação, reforma, restauração e outras atividades executadas em canteiro.
              </p>
              <p>
                A obrigação vale para qualquer empresa que tenha trabalhadores regidos pela CLT em atividade de construção, independentemente do porte. Isso inclui construtoras grandes, empreiteiras de médio porte, empresas de reforma e negócios menores que contratam ajudantes, pedreiros, eletricistas ou equipes de apoio.
              </p>
              <p>
                A construção civil está entre os setores com maior incidência de acidentes graves e fatais no trabalho. Por isso, a fiscalização da NR-18 é recorrente, detalhada e costuma observar tanto a condição real do canteiro quanto a coerência da documentação apresentada.
              </p>
            </>
          ),
        },
        {
          title: 'NR-18 atualizada, PDF oficial e validade',
          body: (
            <>
              <p>
                Quando alguém pesquisa por <strong>NR-18 atualizada</strong>, normalmente quer saber três coisas: se a versão em uso já substituiu regras antigas, onde consultar o texto oficial e se existe algum prazo de validade da norma. Na prática, a NR-18 não “vence”. O que muda é a versão vigente da regulamentação. O que pode vencer são treinamentos, evidências e revisões exigidas pela rotina da obra.
              </p>
              <p>
                Para consultar a <strong>Norma Regulamentadora 18 em PDF</strong>, o caminho mais seguro é usar a publicação oficial do governo, especialmente os canais do MTE e da ENIT. Isso evita trabalhar com arquivo antigo, resumo incompleto ou texto replicado sem controle de revisão.
              </p>
              <p>
                Para a empresa, baixar o PDF não basta. O ponto central é verificar se o PGR do canteiro, o PCMSO, os treinamentos, as áreas de vivência e as proteções coletivas estão alinhados à versão vigente da norma e à fase real da obra.
              </p>
            </>
          ),
        },
        {
          title: 'Canteiro de obras na NR-18: o que precisa estar em ordem',
          body: (
            <>
              <p>
                A maior parte das falhas de NR-18 aparece no canteiro de obras, não apenas no documento. Por isso, a empresa precisa verificar se a condição real do local acompanha o que está escrito no PGR e nos treinamentos.
              </p>
              <ul>
                <li>Acesso seguro, circulação organizada e sinalização de áreas de risco.</li>
                <li>Proteção contra queda de pessoas e materiais.</li>
                <li>Instalações elétricas provisórias protegidas e organizadas.</li>
                <li>Máquinas, equipamentos, andaimes e escadas em condição segura.</li>
                <li>Áreas de vivência compatíveis com o efetivo da obra.</li>
                <li>Documentos de trabalhadores próprios e terceirizados disponíveis para conferência.</li>
              </ul>
              <p>
                Quando o fiscal chega ao canteiro, ele compara documento, treinamento e realidade. Se o papel promete controle, mas a obra mostra improviso, a empresa perde força imediatamente.
              </p>
            </>
          ),
        },
        {
          title: 'Grau de risco da construção civil e o que isso implica',
          body: (
            <>
              <p>
                A construção civil está enquadrada, na maior parte dos CNAEs do setor, no <strong>Grau de Risco 3</strong>. Esse enquadramento influencia diretamente as obrigações de SST da empresa.
              </p>
              <p>
                Em linhas gerais, isso exige PCMSO, PGR elaborado por profissional habilitado em segurança do trabalho e, conforme o número de empregados do estabelecimento e o enquadramento da atividade, dimensionamento de SESMT. No Anexo II da NR-04, para Grau de Risco 3, esse dimensionamento já começa a partir de determinadas faixas de empregados.
              </p>
              <p>
                Mesmo abaixo desse patamar, a empresa continua obrigada a manter a gestão de SST e a documentação exigida em ordem. A ausência de PGR, PCMSO ou estrutura mínima de gestão é uma das falhas mais comuns em obras, reformas e frentes de trabalho temporárias.
              </p>
            </>
          ),
        },
        {
          title: 'O PCMAT foi substituído: o que mudou de verdade na prática',
          body: (
            <>
              <p>
                O <strong>PCMAT (Programa de Condições e Meio Ambiente de Trabalho na Indústria da Construção)</strong> foi, por muitos anos, o documento central de planejamento de SST na construção civil. Em obras com 20 ou mais trabalhadores, ele precisava ser elaborado antes do início das atividades, com memorial descritivo, layout do canteiro, cronograma preventivo e projetos de proteção coletiva.
              </p>
              <p>
                Com a revisão da NR-18, o PCMAT deixou de ser o documento exigido para obras novas. No lugar dele, a gestão de riscos do canteiro passou a ser estruturada pelo <strong>PGR (Programa de Gerenciamento de Riscos)</strong>, previsto na NR-01 e detalhado pela própria NR-18.
              </p>
              <p>
                Obras que já estavam em andamento durante a transição puderam manter o PCMAT até o encerramento daquela frente específica. Para canteiros iniciados depois da mudança, apresentar PCMAT como documento principal já não atende à lógica atual da norma.
              </p>
              <p>
                A mudança não foi só de nome. O PGR pede inventário de riscos, plano de ação, revisão conforme a fase da obra e integração real com PCMSO, treinamentos, controles de engenharia e rotina documental. Em outras palavras, exige uma gestão mais viva e menos estática.
              </p>
            </>
          ),
        },
        {
          title: 'PGR na construção civil: estrutura e conteúdo obrigatório',
          body: (
            <>
              <p>
                O PGR da construção civil precisa ser específico para o canteiro de obras. Não basta reaproveitar um modelo genérico da empresa e trocar o nome da obra. O documento precisa refletir a realidade do ambiente, da fase executiva e dos riscos efetivos daquela operação.
              </p>
              <p>Em geral, o PGR do canteiro deve contemplar:</p>
              <ul>
                <li>Inventário de riscos físicos, químicos, biológicos, ergonômicos e de acidentes</li>
                <li>Classificação dos riscos por severidade e probabilidade</li>
                <li>Plano de ação com medidas preventivas, responsáveis e prazos</li>
                <li>Hierarquia de controle, priorizando eliminação, substituição e controles de engenharia antes do EPI</li>
                <li>Integração com o PCMSO para definir exames coerentes com os riscos levantados</li>
                <li>Revisão periódica conforme a evolução da obra</li>
              </ul>
              <p>
                Esse último ponto costuma ser negligenciado. Os riscos da fundação não são os mesmos da estrutura, nem os da estrutura são iguais aos do acabamento. Um PGR feito no começo da obra e nunca revisado já nasce com potencial de fragilidade em fiscalização.
              </p>
              <p>
                A elaboração deve seguir o enquadramento técnico previsto na norma. Em alguns cenários mais simples, a NR-18 admite profissional qualificado. Em outros, exige profissional legalmente habilitado. A necessidade de ART, RRT ou outro registro de responsabilidade técnica deve ser analisada conforme o serviço e o responsável envolvido.
              </p>
            </>
          ),
        },
        {
          title: 'PCMSO na construção civil: exames e monitoramento de saúde',
          body: (
            <>
              <p>
                O <strong>PCMSO (Programa de Controle Médico de Saúde Ocupacional)</strong>, exigido pela NR-07, é obrigatório para empresas da construção civil com empregados CLT. Ele deve ser elaborado por médico do trabalho e precisa conversar com o PGR. Sem essa integração, o programa médico perde coerência.
              </p>
              <p>
                Na construção civil, é comum que o perfil de risco exija audiometria tonal, espirometria, radiografia de tórax, exames laboratoriais e avaliações ligadas a trabalho em altura, ruído, poeira mineral, solventes ou calor intenso. Quando esses riscos aparecem no canteiro e não aparecem no PCMSO, a inconsistência fica evidente.
              </p>
              <p>
                O ASO precisa ser emitido nos exames ocupacionais aplicáveis: admissional, periódico, retorno ao trabalho, mudança de risco e demissional. Em obra, contratações urgentes e mobilizações rápidas costumam expor um problema recorrente: trabalhador já ativo no canteiro sem ASO válido.
              </p>
              <p>
                Além disso, os exames precisam sustentar o envio do evento S-2220 no eSocial. Quando há divergência entre exame, ASO, PCMSO e informação transmitida, a empresa passa a carregar um risco documental difícil de defender depois.
              </p>
            </>
          ),
        },
        {
          title: 'eSocial SST na construção civil',
          body: (
            <>
              <p>
                Na construção civil, o eSocial SST costuma ficar mais sensível porque o canteiro muda rápido, a mão de obra gira com frequência e os riscos não permanecem estáticos ao longo da obra. Isso exige um fluxo mais disciplinado entre campo, RH, clínica e documentação.
              </p>
              <p>
                O <strong>S-2220</strong> registra o monitoramento de saúde do trabalhador. Já o <strong>S-2240</strong> trata das condições ambientais de trabalho, agentes nocivos e medidas de controle adotadas.
              </p>
              <p>
                Em obras com ruído, calor, vibração, poeira de sílica, eletricidade e trabalho em altura, o S-2240 precisa estar coerente com o inventário do PGR e com os laudos técnicos usados pela empresa. Quando a operação real segue por um caminho e o eSocial vai por outro, a inconsistência fica exposta.
              </p>
            </>
          ),
        },
        {
          title: 'Treinamentos obrigatórios em obra: o que a NR-18 exige',
          body: (
            <>
              <p>
                A NR-18 exige treinamento <strong>inicial e periódico</strong> para os trabalhadores do canteiro. No Anexo I da norma, a capacitação básica em segurança do trabalho tem carga horária mínima de 4 horas no treinamento inicial e 4 horas no periódico a cada 2 anos.
              </p>
              <p>
                Além do treinamento geral da NR-18, várias atividades do canteiro exigem capacitações complementares. Entre as mais comuns estão:
              </p>
              <ul>
                <li><strong>NR-35:</strong> para trabalho em altura acima de 2 metros, com reciclagem periódica conforme a própria norma</li>
                <li><strong>NR-10:</strong> para atividades com eletricidade ou proximidade de instalações energizadas</li>
                <li><strong>NR-12:</strong> para operação de máquinas e equipamentos com risco de acidente</li>
                <li><strong>NR-33:</strong> para entrada em espaço confinado, quando aplicável</li>
                <li><strong>Treinamentos específicos do canteiro:</strong> conforme risco, função, equipamento e fase da obra</li>
              </ul>
              <p>
                Não basta dizer que houve treinamento. Em fiscalização, a empresa precisa comprovar lista de presença, conteúdo programático, carga horária, data, local, instrutor e certificado ou registro individual correspondente.
              </p>
            </>
          ),
        },
        {
          title: 'Proteções coletivas obrigatórias no canteiro',
          body: (
            <>
              <p>
                A NR-18 prioriza as medidas de proteção coletiva sobre as individuais. Isso significa que o EPI não entra como substituto de guarda-corpo, fechamento, sinalização, isolamento ou adequação de instalações. Ele entra como complemento.
              </p>
              <p>Entre as proteções coletivas mais sensíveis em obra estão:</p>
              <ul>
                <li><strong>Guarda-corpo e rodapé</strong> em aberturas, escadas, rampas e plataformas com desnível</li>
                <li><strong>Redes de proteção</strong> e fechamentos quando o risco de queda exige contenção</li>
                <li><strong>Fechamento de poços de elevador</strong> e outras aberturas críticas</li>
                <li><strong>Plataformas de proteção</strong> e contenção em fachadas e áreas de circulação</li>
                <li><strong>Sinalização e isolamento</strong> de áreas de risco, trânsito de máquinas e queda de objetos</li>
                <li><strong>Instalações elétricas provisórias</strong> com aterramento e dispositivos de proteção adequados</li>
              </ul>
              <p>
                A ausência dessas medidas é uma das situações com maior risco de embargo imediato. Quando o fiscal identifica risco grave e iminente sem proteção coletiva instalada, a paralisação pode acontecer na hora.
              </p>
            </>
          ),
        },
        {
          title: 'Área de vivência na construção civil NR-18',
          body: (
            <>
              <p>
                A NR-18 dedica atenção específica às instalações de apoio do canteiro. Em obra pequena ou média, esse costuma ser um dos pontos mais negligenciados, porque a empresa concentra energia na execução física e deixa a infraestrutura dos trabalhadores em segundo plano.
              </p>
              <p>Em linhas gerais, a norma exige condições adequadas para:</p>
              <ul>
                <li><strong>Vestiário</strong> com organização, ventilação e separação adequada</li>
                <li><strong>Sanitários</strong> em quantidade compatível com o efetivo e com higiene regular</li>
                <li><strong>Local para refeições</strong> protegido, limpo e funcional</li>
                <li><strong>Água potável</strong> em quantidade suficiente</li>
                <li><strong>Alojamento</strong>, quando houver, com condições mínimas de habitabilidade</li>
              </ul>
              <p>
                Quando essas áreas estão precárias, o problema não é apenas formal. Isso costuma gerar reclamação de trabalhador, inspeção, desgaste operacional e sinal de desorganização para o fiscal logo no primeiro olhar.
              </p>
            </>
          ),
        },
        {
          title: 'Grau de infração da NR-18 e risco de embargo',
          body: (
            <>
              <p>
                Quem pesquisa por <strong>grau de infração da NR-18</strong> normalmente quer saber o tamanho do risco em uma fiscalização. O valor da multa depende do item descumprido, do enquadramento normativo, do número de trabalhadores expostos e da gradação prevista na fiscalização trabalhista.
              </p>
              <p>
                Na prática, em construção civil, o maior prejuízo nem sempre é a multa. Falhas com risco grave e iminente podem gerar embargo ou interdição, paralisando parte da obra e criando custo com atraso, retrabalho, contratante, cronograma e imagem.
              </p>
              <p>
                Pontos como ausência de proteção contra queda, instalações elétricas improvisadas, falta de treinamento, ausência de PGR, áreas de vivência precárias e trabalhador sem ASO costumam acender alerta rápido em auditoria.
              </p>
            </>
          ),
        },
        {
          title: 'Responsabilidade da construtora, empreiteira e subcontratada',
          body: (
            <>
              <p>
                Na prática da construção civil, um dos pontos mais sensíveis é a responsabilidade sobre terceiros que atuam no mesmo canteiro. A empresa contratante da obra não pode simplesmente presumir que a empreiteira está cuidando sozinha de toda a parte ocupacional.
              </p>
              <p>
                Se a subcontratada mantém trabalhadores sem ASO, sem treinamento obrigatório ou sem proteção mínima, o problema não fica isolado nela. Ele se projeta sobre a gestão do canteiro e pode atingir a construtora ou contratante principal em fiscalização, ação trabalhista e discussão judicial.
              </p>
              <p>
                Por isso, controle documental de terceiros não é burocracia extra. É parte central da gestão da obra. Isso inclui conferir PGR aplicável, ASOs, treinamentos, entrega de EPI e aderência da equipe terceirizada às regras do canteiro.
              </p>
            </>
          ),
        },
        {
          title: 'O que muda em obra pequena e reforma',
          body: (
            <>
              <p>
                Um erro comum é achar que obra pequena ou reforma rápida está praticamente fora do alcance da NR-18. Não está. O porte pode mudar a complexidade da documentação, mas não elimina as obrigações básicas de SST.
              </p>
              <p>
                Se há empregados CLT, continua sendo necessário analisar PGR, PCMSO, ASO, treinamentos e medidas de controle compatíveis com a atividade executada. Trabalho em altura, eletricidade, demolição parcial, poeira, calor e risco de queda continuam existindo mesmo em obras menores.
              </p>
              <p>
                No caso do MEI e de estruturas muito pequenas, é preciso olhar com atenção as hipóteses de simplificação ou dispensa previstas em outras normas, sem transformar isso em salvo-conduto para ignorar risco real. Quando a obra começa antes da documentação mínima, o passivo já começou junto.
              </p>
            </>
          ),
        },
        {
          title: 'O que acontece em fiscalização e como a empresa se protege',
          body: (
            <>
              <p>
                A fiscalização pode ser programada ou motivada por denúncia, acidente, queixa sindical ou histórico da obra. No canteiro, o auditor costuma cruzar condição real e documentação: o que está no papel precisa aparecer na operação.
              </p>
              <p>
                Os documentos mais cobrados costumam incluir PGR vigente, PCMSO, ASOs, treinamentos aplicáveis, fichas de EPI, ordens de serviço e evidências de controle dos riscos presentes naquela fase da obra.
              </p>
              <p>
                A melhor defesa é preventiva. Quando os documentos existem, estão coerentes e a obra foi organizada com critério, a empresa discute detalhe técnico. Quando não existem, a conversa vira contenção de dano.
              </p>
              <p>
                Em risco grave e iminente, pode haver embargo ou interdição. E, quase sempre, o custo da paralisação supera com folga o custo de organizar a obra antes.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'O PCMAT ainda é exigido pela NR-18?',
          a: 'Para obras novas, o PCMAT deixou de ser o documento central. A gestão de riscos do canteiro passou a ser estruturada pelo PGR, conforme a lógica atual da NR-18 e da NR-01.',
        },
        {
          q: 'NR-18 atualizada: o que mudou de forma mais importante?',
          a: 'A mudança mais relevante foi a substituição do PCMAT pelo PGR como eixo da gestão de riscos no canteiro. Isso trouxe mais integração com NR-01, PCMSO, controles de engenharia, treinamentos e revisão conforme a fase da obra.',
        },
        {
          q: 'A NR-18 tem validade?',
          a: 'A NR-18, como norma, não vence como certificado. O que precisa ser verificado é a versão vigente da regulamentação e a atualização prática dos treinamentos, programas, evidências e revisões ligadas à obra.',
        },
        {
          q: 'Qual a validade da NR-18 na construção civil?',
          a: 'A norma em si não tem validade como um curso ou certificado. O que precisa estar válido e atualizado são treinamentos, PGR, PCMSO, ASO, evidências de fiscalização e documentos compatíveis com a fase atual da obra.',
        },
        {
          q: 'Onde baixar a NR-18 em PDF oficial?',
          a: 'O mais seguro é consultar a publicação oficial nos canais do governo, especialmente MTE e ENIT. Assim a empresa evita usar texto desatualizado ou material sem controle de revisão.',
        },
        {
          q: 'Qual a diferença entre PCMAT e PGR?',
          a: 'O PCMAT era o documento tradicional da construção civil. O PGR, além de substituir esse papel nas obras novas, exige inventário de riscos, plano de ação e revisão mais aderente à realidade do canteiro.',
        },
        {
          q: 'O PGR precisa ser atualizado durante a obra?',
          a: 'Sim. À medida que a obra muda de fase, os riscos também mudam. Um PGR que não acompanha essa evolução perde força técnica e pode se tornar frágil em fiscalização.',
        },
        {
          q: 'Obra pequena ou reforma também precisa de PGR e PCMSO?',
          a: 'Em regra, sim, quando há empregados CLT e riscos ocupacionais envolvidos. O porte da obra pode reduzir a complexidade documental, mas não elimina automaticamente as obrigações básicas.',
        },
        {
          q: 'Qual a multa por descumprimento da NR-18?',
          a: 'O valor depende da infração, do enquadramento legal e do número de trabalhadores expostos. Em obra, o impacto financeiro raramente vem só da multa. Embargo, atraso e retrabalho costumam pesar ainda mais.',
        },
        {
          q: 'O que é área de vivência na NR-18?',
          a: 'Área de vivência é o conjunto de instalações de apoio ao trabalhador no canteiro, como sanitários, vestiário, local para refeições, água potável e alojamento quando houver. A condição dessas áreas costuma ser observada em fiscalização.',
        },
        {
          q: 'O que a NR-18 exige no canteiro de obras?',
          a: 'A NR-18 exige planejamento de SST, PGR coerente com a obra, treinamentos, proteção coletiva, controle de máquinas e instalações, áreas de vivência adequadas e documentação compatível com os riscos e a fase do canteiro.',
        },
        {
          q: 'O que costuma ser fiscalizado com mais frequência no canteiro?',
          a: 'PGR desatualizado ou ausente, ASO de admissão, treinamentos obrigatórios, proteção coletiva, instalações provisórias, áreas de vivência e coerência entre risco real e documentação são pontos recorrentes.',
        },
        {
          q: 'Como funciona o eSocial SST na construção civil?',
          a: 'A empresa precisa manter coerência entre exames, ASOs, riscos do canteiro e eventos como S-2220 e S-2240. Quando a documentação e a operação não conversam, o eSocial expõe essa falha.',
        },
        {
          q: 'O PGR da construção civil precisa de ART?',
          a: 'Isso depende do enquadramento técnico do serviço e do profissional responsável. A análise precisa considerar a própria NR-18, a natureza da obra e a responsabilidade técnica envolvida.',
        },
        {
          q: 'Trabalhador sem ASO pode entrar no canteiro?',
          a: 'Não é o cenário seguro. O ASO admissional deve existir antes do início das atividades para que a empresa não assuma um passivo logo no começo da obra.',
        },
        {
          q: 'CIPA é obrigatória em empresa de construção civil?',
          a: 'A análise depende do dimensionamento aplicável ao canteiro e das regras da NR-05 para a situação concreta. Quando não há enquadramento para constituição formal, ainda assim podem existir obrigações de representação e treinamento.',
        },
      ]}
      maxFaqItems={12}
      sidebarTitle="Sua obra tem PGR, PCMSO e treinamentos em dia?"
      sidebarHook="A NR-18 está entre as normas mais observadas em fiscalização de obra. A SERMST audita a documentação e revisa o canteiro antes que a irregularidade vire embargo, multa ou atraso."
      sidebarCtaLabel="Solicitar PGR para obra"
      sidebarCtaHref="/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo"
      finalCta={{
        title: 'Sua obra precisa de PGR, PCMSO e treinamentos?',
        desc: 'A SERMST estrutura o PGR do canteiro, apoia o PCMSO e organiza os treinamentos obrigatórios para obras em São Paulo e Grande ABC.',
        label: 'Solicitar diagnóstico para minha obra',
        href: '/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo',
      }}
      related={[
        { label: 'Guia da NR-01 e atualização do PGR', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'NR-35: Trabalho em altura', href: '/normas/nr-35-trabalho-em-altura' },
        { label: 'NR-10: Segurança em instalações elétricas', href: '/normas/nr-10-eletricidade' },
        { label: 'Serviço de PGR para construção civil', href: '/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo' },
        { label: 'Treinamentos NR-18, NR-35 e NR-10', href: '/servicos/treinamentos-nrs-cipa-brigada/sao-paulo' },
        { label: 'PCMSO e exames ocupacionais', href: '/servicos/pcmso-nr07-programa/sao-paulo' },
      ]}
    />
  );
}
