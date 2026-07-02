import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'CIPA: o que é, obrigatoriedade, composição e como constituir (NR-05) | SERMST',
  description:
    'CIPA é obrigatória a partir de 20 ou 50 funcionários conforme o CNAE. Entenda composição paritária, eleição, treinamento de 20h, estabilidade do cipeiro, SIPAT e multas por descumprimento.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-05-cipa' },
  openGraph: {
    title: 'CIPA: o que é, obrigatoriedade, composição e como constituir (NR-05) | SERMST',
    description:
      'Guia completo de CIPA: obrigatoriedade por CNAE e número de funcionários, processo eleitoral, treinamento de 20h, estabilidade de membros eleitos, SIPAT anual e penalidades por descumprimento.',
    url: 'https://sermst.com.br/normas/nr-05-cipa',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function NR05Page() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/site/safety-equipment.jpg", alt: "Reunião de CIPA — Comissão Interna de Prevenção de Acidentes em empresa" }}
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="← Normas"
      hubHref="/normas"
      pageUrl="https://sermst.com.br/normas/nr-05-cipa"
      badgeText="NR-05"
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-05-01',
        dateModified: '2026-07-02',
      }}

      showTableOfContents
      readingTime="13 min"
      h1="CIPA: o que é, obrigatoriedade, como constituir e o que muda para a empresa"
      intro="CIPA — Comissão Interna de Prevenção de Acidentes e de Assédio — é uma comissão obrigatória pela NR-05 formada por representantes do empregador e dos empregados para identificar riscos, prevenir acidentes e combater assédio no trabalho. A obrigatoriedade depende do CNAE e do número de funcionários: a partir de 20 ou 50 empregados, conforme a atividade. Quem está abaixo do porte mínimo designa um responsável treinado. Em ambos os casos há obrigação formal — a ausência é autuação direta na fiscalização do MTE."
      quickAnswer={
        <p>
          A <strong>CIPA</strong> (Comissão Interna de Prevenção de Acidentes e de Assédio) é uma comissão paritária formada por representantes do empregador e dos empregados, obrigatória pela NR-05. Sua função é identificar riscos, propor medidas preventivas, acompanhar a saúde e segurança no trabalho e atuar na prevenção ao assédio. A obrigatoriedade depende do <strong>CNAE e do número de funcionários</strong>: empresas de grau de risco 1 ou 2 precisam constituir CIPA a partir de 50 empregados; grau de risco 3 ou 4, a partir de 20. Abaixo do porte mínimo, a empresa designa um responsável treinado.
        </p>
      }
      sections={[
        {
          title: 'O que é a CIPA (em uma frase)',
          body: (
            <>
              <p>
                A CIPA é uma comissão paritária — formada por representantes do <strong>empregador</strong> e dos <strong>empregados</strong> — responsável por identificar riscos, propor medidas preventivas, acompanhar as ações de saúde e segurança e atuar na <strong>prevenção e combate ao assédio sexual e outras formas de violência no trabalho</strong> (inclusão prevista pela Portaria MTP 4.219/2022).
              </p>
              <p>
                Ela não substitui o SESMT (quando obrigatório), nem o PGR, nem o PCMSO. Funciona como <strong>canal interno de prevenção</strong>: quem está na operação levanta o que vê; a CIPA formaliza, documenta e cobra providências da direção.
              </p>
            </>
          ),
        },
        {
          title: 'Quem é obrigado a ter CIPA',
          body: (
            <>
              <p>
                A obrigatoriedade e o <strong>dimensionamento da CIPA</strong> dependem de dois fatores: o <strong>CNAE da empresa</strong> (que define o grau de risco da atividade) e o <strong>número de funcionários no estabelecimento</strong>. Esses dados são cruzados com o Quadro I do Anexo I da NR-05.
              </p>
              <p>
                Em regra geral:
              </p>
              <ul>
                <li>Empresas com atividades de <strong>grau de risco 1 ou 2</strong> precisam constituir CIPA a partir de <strong>50 funcionários</strong> no estabelecimento.</li>
                <li>Empresas com <strong>grau de risco 3 ou 4</strong> (construção civil, mineração, indústria química, por exemplo) precisam constituir CIPA a partir de <strong>20 funcionários</strong>.</li>
                <li>Empresas abaixo do limite mínimo do Quadro I <strong>não constituem CIPA</strong>, mas são obrigadas a indicar um <strong>designado de CIPA</strong> — funcionário treinado nos moldes da NR-05 para exercer as atribuições da comissão.</li>
              </ul>
              <p>
                O dimensionamento define quantos membros titulares e suplentes cada parte (empregador e empregados) deve ter. O Quadro I detalha isso por faixa de número de empregados dentro de cada grupo de CNAE.
              </p>
            </>
          ),
        },
        {
          title: 'Composição, eleição e mandato',
          body: (
            <>
              <p>
                A CIPA tem <strong>dois lados paritários</strong>:
              </p>
              <ul>
                <li><strong>Representantes do empregador</strong>: indicados pela direção (titular e suplente conforme Quadro I).</li>
                <li><strong>Representantes dos empregados</strong>: eleitos em votação secreta por escrutínio e candidatura espontânea, com mandato de 1 ano e possibilidade de uma reeleição.</li>
              </ul>
              <p>
                O <strong>presidente</strong> é indicado pelo empregador entre os seus representantes. O <strong>vice-presidente</strong> é eleito pelos membros representantes dos empregados entre si. A CIPA deve se reunir ordinariamente <strong>uma vez por mês</strong>, em horário de trabalho e com registro em ata.
              </p>
            </>
          ),
        },
        {
          title: 'Passo a passo do processo eleitoral',
          body: (
            <ol>
              <li><strong>Convocação (60 dias antes do fim do mandato):</strong> edital publicado em locais visíveis a todos os empregados.</li>
              <li><strong>Abertura de inscrições (mínimo 15 dias corridos):</strong> qualquer empregado pode se candidatar, independente de cargo ou setor. Candidatos recebem comprovante e têm garantia de emprego desde a inscrição.</li>
              <li><strong>Divulgação dos candidatos:</strong> lista afixada pela Comissão Eleitoral após o encerramento das inscrições.</li>
              <li><strong>Votação (dia normal de trabalho, todos os turnos):</strong> voto secreto, todos os empregados têm direito de votar.</li>
              <li><strong>Apuração em horário de trabalho:</strong> com representantes da empresa e dos empregados presentes. Empate: desempate pelo maior tempo de serviço.</li>
              <li><strong>Posse (no 1º dia útil após o término do mandato anterior):</strong> registrada em ata com assinatura de todos os empossados. A NR-05 é expressa: a posse ocorre exatamente no primeiro dia útil após o fim do mandato vigente.</li>
              <li><strong>Arquivamento dos documentos eleitorais:</strong> editais, listas de presença, cédulas e atas devem ser mantidos disponíveis para fiscalização e enviados ao sindicato da categoria no prazo de até 10 dias quando solicitado.</li>
            </ol>
          ),
        },
        {
          title: 'Treinamento obrigatório: carga horária varia por grau de risco',
          body: (
            <>
              <p>
                Após a atualização pela Portaria MTP 422/2021, a carga horária mínima do treinamento de CIPA <strong>não é mais fixa em 20 horas</strong> — ela varia conforme o grau de risco do estabelecimento:
              </p>
              <ul>
                <li><strong>Grau de risco 1:</strong> 8 horas (pode ser integralmente em EAD).</li>
                <li><strong>Grau de risco 2:</strong> 12 horas (mínimo de 4 horas presenciais).</li>
                <li><strong>Grau de risco 3:</strong> 16 horas (mínimo de 8 horas presenciais).</li>
                <li><strong>Grau de risco 4:</strong> 20 horas (mínimo de 8 horas presenciais).</li>
              </ul>
              <p>
                O treinamento deve ser realizado <strong>antes da posse</strong> (ou em até 30 dias para o 1º mandato). O conteúdo mínimo obrigatório pela NR-05 atualizada inclui:
              </p>
              <ol>
                <li>Estudo do ambiente, condições de trabalho e riscos do processo produtivo.</li>
                <li>Noções sobre acidentes e doenças relacionadas ao trabalho e medidas de prevenção.</li>
                <li>Metodologia de investigação e análise de acidentes e doenças.</li>
                <li>Princípios gerais de higiene do trabalho e medidas de prevenção dos riscos.</li>
                <li>Noções sobre legislações trabalhista e previdenciária relativas a SST.</li>
                <li>Noções sobre inclusão de pessoas com deficiência e reabilitados nos processos de trabalho.</li>
                <li>Organização da CIPA e atribuições de seus membros.</li>
                <li><strong>Prevenção e combate ao assédio sexual e outras formas de violência no trabalho</strong> (incluído pela Portaria MTP 4.219/2022).</li>
              </ol>
              <p>
                Treinamento realizado há menos de 2 anos pode ser aproveitado na mesma empresa. O <strong>representante nomeado da NR-05</strong> (para empresas abaixo do Quadro I) também deve receber o treinamento, com carga horária correspondente ao grau de risco do estabelecimento.
              </p>
            </>
          ),
        },
        {
          title: 'Estabilidade dos membros eleitos',
          body: (
            <>
              <p>
                Representantes dos empregados eleitos para a CIPA têm <strong>estabilidade de emprego</strong> desde o registro da candidatura até <strong>um ano após o término do mandato</strong> — salvo falta grave apurada em inquérito judicial (art. 165 da CLT e Súmula 339 do TST).
              </p>
              <p>
                Isso tem implicações práticas importantes para o RH:
              </p>
              <ul>
                <li>Demitir membro cipeiro sem justa causa durante estabilidade expõe a empresa a reintegração ou indenização substitutiva de todo o período estável.</li>
                <li>A estabilidade vale mesmo para <strong>suplentes</strong>.</li>
                <li>Candidatos que não foram eleitos <strong>não têm estabilidade</strong> — apenas quem foi efetivamente eleito e empossado.</li>
                <li>Em convenções coletivas, algumas categorias estendem a estabilidade para candidatos não eleitos — sempre verificar a CCT aplicável.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'O que precisa estar documentado',
          body: (
            <ol>
              <li><strong>Livro de atas da CIPA</strong>: registro de todas as reuniões ordinárias e extraordinárias, com assinatura dos presentes.</li>
              <li><strong>Ata de eleição e posse</strong>: formaliza o processo eleitoral e o início do mandato.</li>
              <li><strong>Certificados de treinamento</strong> de todos os membros (20h), com data, instrutor e conteúdo.</li>
              <li><strong>Mapa de riscos</strong>: elaborado pela CIPA, afixado nos locais de trabalho, revisado a cada mandato.</li>
              <li><strong>Plano de trabalho</strong> da CIPA para o mandato.</li>
              <li><strong>Registro do designado de CIPA</strong> (quando aplicável): nomeação formal, treinamento e responsabilidades documentadas.</li>
            </ol>
          ),
        },
        {
          title: 'SIPAT: a obrigação anual que a CIPA organiza',
          body: (
            <>
              <p>
                A NR-05 exige que a CIPA realize anualmente a <strong>SIPAT — Semana Interna de Prevenção de Acidentes do Trabalho</strong>. Trata-se de um evento obrigatório de conscientização e prevenção, com programação voltada à segurança e saúde dos empregados.
              </p>
              <p>
                A SIPAT deve ser planejada pela CIPA e pode incluir palestras, treinamentos, campanhas de vacinação, ergonomia e temas de saúde mental. Ela é documentada em ata e integra o plano de trabalho do mandato. A ausência de SIPAT fragiliza a documentação da CIPA e é verificada em fiscalizações e perícias trabalhistas.
              </p>
            </>
          ),
        },
        {
          title: 'CIPATR: CIPA para o setor rural',
          body: (
            <>
              <p>
                Empregadores rurais ou equiparados com <strong>20 ou mais empregados</strong> contratados por prazo indeterminado são obrigados a constituir e manter a <strong>CIPATR — Comissão Interna de Prevenção de Acidentes no Trabalho Rural</strong>. A obrigação segue lógica similar à CIPA urbana, mas com regulamentação própria voltada às especificidades do trabalho rural.
              </p>
              <p>
                As atribuições da CIPATR incluem identificar riscos do campo, propor medidas preventivas, elaborar mapa de riscos e promover a conscientização dos trabalhadores rurais. Empresas com operações mistas (urbanas e rurais) precisam avaliar a obrigatoriedade em cada frente de trabalho separadamente.
              </p>
            </>
          ),
        },
        {
          title: 'Mapa de riscos: obrigação que nasce com a CIPA',
          body: (
            <>
              <p>
                Uma das atribuições centrais da CIPA é elaborar o <strong>mapa de riscos</strong> — representação gráfica dos riscos existentes nos locais de trabalho, afixada em local visível. Ele deve ser elaborado pela CIPA com participação dos trabalhadores de cada setor, revisado a cada mandato e atualizado sempre que houver mudança no processo produtivo.
              </p>
              <p>
                O mapa usa círculos coloridos para classificar riscos por grupo e intensidade:
              </p>
              <ul>
                <li><strong>Verde</strong> — riscos físicos (ruído, calor, frio, vibração, radiações).</li>
                <li><strong>Vermelho</strong> — riscos químicos (poeiras, névoas, fumos, gases, vapores, produtos químicos).</li>
                <li><strong>Marrom</strong> — riscos biológicos (vírus, bactérias, fungos, parasitas).</li>
                <li><strong>Amarelo</strong> — riscos ergonômicos (esforço físico, postura inadequada, trabalho repetitivo, jornada excessiva).</li>
                <li><strong>Azul</strong> — riscos de acidente (arranjo físico, máquinas sem proteção, ferramentas defeituosas, eletricidade, incêndio).</li>
              </ul>
              <p>
                A ausência do mapa de riscos é verificada em fiscalizações do MTE e em perícias trabalhistas como indicativo de que a CIPA não está cumprindo suas atribuições legais.
              </p>
            </>
          ),
        },
        {
          title: 'Microempresa, MEI e empresas com poucos funcionários: a CIPA é obrigatória?',
          body: (
            <>
              <p>
                <strong>MEI</strong> e microempresas sem empregados ou com número inferior ao mínimo do Quadro I da NR-05 <strong>não são obrigadas a constituir CIPA plena</strong>. No entanto, há um ponto de atenção importante:
              </p>
              <ul>
                <li><strong>0 a X funcionários abaixo do Quadro I:</strong> a empresa deve apenas <strong>indicar um designado de CIPA</strong> — não há comissão, não há eleição, mas existe a obrigação de ter uma pessoa responsável, treinada nas 20 horas.</li>
                <li>A <strong>ausência total de qualquer medida</strong> (nem CIPA, nem designado) é infração para qualquer empresa com empregados registrados.</li>
              </ul>
              <p>
                Na prática, muitas microempresas e escritórios confundem &quot;não preciso de CIPA&quot; com &quot;não preciso fazer nada&quot;. A obrigação do designado permanece, e o treinamento da NR-05 deve ser documentado.
              </p>
            </>
          ),
        },
        {
          title: 'Documentação eleitoral e envio ao sindicato',
          body: (
            <>
              <p>
                A NR-05 não exige registro obrigatório da CIPA no MTE como passo formal. O que a norma prevê é que, <strong>quando solicitada</strong>, a empresa deve enviar toda a documentação do processo eleitoral (editais, atas, cédulas) ao <strong>sindicato da categoria preponderante</strong> no prazo de até 10 dias, podendo ser por meio eletrônico.
              </p>
              <p>
                O que a empresa deve manter organizado e acessível para fiscalização:
              </p>
              <ul>
                <li>Edital de convocação da eleição.</li>
                <li>Lista de candidatos inscritos e votação (cédulas).</li>
                <li>Ata de eleição, apuração e posse.</li>
                <li>Comunicação de início do processo eleitoral ao sindicato.</li>
                <li>Certificados de treinamento de todos os membros.</li>
              </ul>
              <p>
                Além disso, as cadeiras de cipeiro devem estar refletidas no eSocial (evento S-2200/S-2206) para que a estabilidade dos membros eleitos fique registrada.
              </p>
            </>
          ),
        },
        {
          title: 'Penalidades e multas por não ter CIPA',
          body: (
            <>
              <p>
                O descumprimento das obrigações da NR-05 sujeita a empresa a autuação pelo <strong>Auditor Fiscal do Trabalho</strong> (MTE). As infrações relacionadas à CIPA são enquadradas na Consolidação das Leis do Trabalho (CLT) e nas portarias de SST, com gradação conforme a gravidade:
              </p>
              <ul>
                <li><strong>Não constituir CIPA quando obrigatória:</strong> infração de natureza grave, com multa calculada com base no número de empregados e na reincidência.</li>
                <li><strong>Não realizar o processo eleitoral dentro do prazo:</strong> CIPA inativa por vencimento de mandato sem nova eleição.</li>
                <li><strong>Não promover o treinamento de 20 horas:</strong> membros empossados sem capacitação formal documentada.</li>
                <li><strong>Não realizar a SIPAT:</strong> ausência do evento anual obrigatório.</li>
                <li><strong>Dispensar cipeiro em estabilidade sem inquérito judicial:</strong> além da multa administrativa, gera obrigação de reintegração ou indenização integral do período estável (art. 165 da CLT).</li>
              </ul>
              <p>
                Os valores das multas são atualizados periodicamente pelo MTE. Em fiscalizações por denúncia ou programadas, auditores verificam documentação, atas, certificados de treinamento e registro no MTE em conjunto — uma irregularidade costuma revelar outras.
              </p>
            </>
          ),
        },
        {
          title: 'Os 4 erros que viram autuação',
          body: (
            <ol>
              <li><strong>CIPA não constituída quando obrigatória.</strong> Empresa no limite do Quadro I mas sem CIPA ativa — autuação imediata na fiscalização do MTE, sem advertência prévia.</li>
              <li><strong>Eleição não realizada.</strong> Mandato vencido há mais de 30 dias sem processo eleitoral aberto — o MTE considera a CIPA inativa mesmo que os membros anteriores continuem trabalhando.</li>
              <li><strong>Treinamento incompleto ou sem registro.</strong> Membros empossados sem as 20 horas formais documentadas. O treinamento on-the-job sem certificado não conta.</li>
              <li><strong>Dispensa de cipeiro em estabilidade.</strong> Mesmo com justificativa operacional, demitir representante eleito durante o período de estabilidade sem inquérito judicial resulta em reintegração ou indenização integral do período.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'CIPA é obrigatória para empresas de construção civil com menos de 50 funcionários?',
          a: 'Depende do número exato de funcionários no canteiro. Construção civil é grau de risco 3 ou 4 na maioria dos CNAEs. Para essas atividades, a CIPA é obrigatória a partir de 20 funcionários no estabelecimento. Entre 1 e 19 funcionários, a empresa deve indicar um designado de CIPA treinado nas 20 horas da NR-05.',
        },
        {
          q: 'O que é o representante (designado) da NR-05?',
          a: 'É o funcionário nomeado pela empresa para exercer as atribuições da CIPA quando o estabelecimento não atinge o porte mínimo do Quadro I. Deve receber treinamento com carga horária correspondente ao grau de risco do estabelecimento (8h, 12h, 16h ou 20h). Não tem estabilidade de emprego — essa proteção é exclusiva dos membros eleitos da CIPA plena. MEI está dispensado de nomear este representante.',
        },
        {
          q: 'A CIPA precisa se reunir todo mês?',
          a: 'Em regra, sim — a NR-05 exige reuniões ordinárias mensais, com ata registrada. Há uma exceção: Microempresas (ME) e Empresas de Pequeno Porte (EPP) com grau de risco 1 ou 2 podem, a critério da própria CIPA, adotar periodicidade bimestral. Reuniões extraordinárias são obrigatórias em caso de acidente grave ou fatal, ou por solicitação de qualquer membro.',
        },
        {
          q: 'Empresa com múltiplos CNAEs precisa calcular a CIPA por qual atividade?',
          a: 'Pela atividade principal declarada no CNPJ (CNAE primário), que é o que o MTE usa como referência para o Quadro I da NR-05. Se houver dúvida sobre qual CNAE aplicar — especialmente em empresas mistas — recomendamos consulta ao técnico de segurança do trabalho antes de dimensionar a CIPA.',
        },
        {
          q: 'A CIPA pode ser substituída por um comitê interno de segurança?',
          a: 'Não. A CIPA é exigência legal com composição, processo eleitoral e documentação regulamentados pela NR-05. Comitês internos de segurança são ferramentas de gestão complementares, não substituem a CIPA nem eliminam a obrigação legal. Ter o comitê e não ter a CIPA continua sendo infração.',
        },
        {
          q: 'O que é SIPAT e quem é responsável por realizá-la?',
          a: 'SIPAT é a Semana Interna de Prevenção de Acidentes do Trabalho, evento anual obrigatório organizado pela CIPA. Deve conter programação de conscientização sobre segurança e saúde, com registro em ata. A ausência de SIPAT é verificada em fiscalizações do MTE e fragiliza a documentação da empresa em perícias trabalhistas.',
        },
        {
          q: 'O que é CIPATR e quando é obrigatória?',
          a: 'CIPATR é a Comissão Interna de Prevenção de Acidentes no Trabalho Rural. É obrigatória para empregadores rurais com 20 ou mais empregados contratados por prazo indeterminado. Segue lógica similar à CIPA urbana, mas com regulamentação específica para o contexto rural. Empresas com operações mistas devem avaliar a obrigatoriedade em cada frente de trabalho.',
        },
        {
          q: 'Membros do SESMT precisam fazer o treinamento de 20 horas da CIPA?',
          a: 'Não. Integrantes do SESMT que sejam membros da CIPA estão dispensados do treinamento de 20 horas, pois já possuem a formação técnica necessária para exercer as funções da comissão. Essa dispensa deve constar registrada na documentação da CIPA.',
        },
        {
          q: 'Empresa sem CIPA paga multa?',
          a: 'Sim. A ausência de CIPA quando obrigatória é infração sujeita a autuação imediata pelo Auditor Fiscal do Trabalho. Os valores são calculados com base no número de empregados e na reincidência. Além da multa, cipeiro dispensado indevidamente durante o período de estabilidade gera obrigação de reintegração ou indenização (art. 165 da CLT).',
        },
        {
          q: 'O que é mapa de riscos e quem faz na CIPA?',
          a: 'O mapa de riscos é a representação gráfica dos riscos identificados nos locais de trabalho, elaborada pela própria CIPA com participação dos trabalhadores de cada setor. Usa círculos coloridos por grupo de risco (verde = físico, vermelho = químico, marrom = biológico, amarelo = ergonômico, azul = acidente). Deve ser afixado em local visível e revisado a cada mandato.',
        },
        {
          q: 'Microempresa ou MEI precisa ter CIPA?',
          a: 'MEI está expressamente dispensado de qualquer obrigação da NR-05, conforme o texto da própria norma. Microempresas e EPPs com empregados abaixo do Quadro I não constituem CIPA plena, mas devem nomear um representante da NR-05 (exceto ME/EPP que contar com SESMT). A ausência de qualquer medida para empresas com empregados CLT é infração.',
        },
        {
          q: 'Precisa registrar a CIPA no MTE?',
          a: 'A NR-05 não exige registro formal da CIPA no MTE como etapa obrigatória. O que a norma prevê é a obrigação de enviar a documentação do processo eleitoral ao sindicato da categoria em até 10 dias quando solicitado. A empresa deve manter os documentos organizados (editais, atas, certificados de treinamento) para apresentar em fiscalização. Os cargos de cipeiro devem constar no eSocial.',
        },
      ]}
      maxFaqItems={13}
      sidebarTitle="Sua empresa está com a CIPA em ordem?"
      sidebarHook="CIPA vencida, treinamento sem registro ou cipeiro dispensado indevidamente viram autuação e passivo. A SERMST apoia a constituição da CIPA, o treinamento das 20 horas e a documentação completa do mandato."
      sidebarCtaLabel="Falar sobre CIPA"
      sidebarCtaHref="/contato"
      related={[
        { label: 'Treinamento NR-05 CIPA (20 horas)', href: '/treinamentos/nr-05-cipa-comissao-interna' },
        { label: 'NR-04 e SESMT: dimensionamento', href: '/normas/sesmt' },
        { label: 'Calculadora de grau de risco CNAE', href: '/rh/calculadora-cnae-grau-de-risco' },
        { label: 'Guia da NR-01 e PGR', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'NR-35: Trabalho em Altura', href: '/normas/nr-35-trabalho-em-altura' },
      ]}
    />
  );
}
