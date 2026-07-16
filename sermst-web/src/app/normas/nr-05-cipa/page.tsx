import type { Metadata } from 'next';
import Link from 'next/link';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'CIPA: o que é, quem precisa e qual treinamento a NR-05 exige | SERMST',
  description:
    'Entenda o que é a CIPA, quando ela é obrigatória, quando basta designado, como funciona a eleição e qual treinamento a NR-05 exige.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-05-cipa' },
  openGraph: {
    title: 'CIPA: o que é, quem precisa e qual treinamento a NR-05 exige | SERMST',
    description:
      'Guia completo sobre CIPA, designado da NR-05, processo eleitoral, treinamento obrigatório, estabilidade, SIPAT e erros que geram autuação.',
    url: 'https://sermst.com.br/normas/nr-05-cipa',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function NR05Page() {
  return (
    <BlockbusterArticle
      coverImage={{
        src: '/images/site/safety-equipment.jpg',
        alt: 'Reunião de CIPA em empresa',
      }}
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="Voltar para Normas"
      hubHref="/normas"
      pageUrl="https://sermst.com.br/normas/nr-05-cipa"
      badgeText="NR-05"
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional | Técnico em Segurança do Trabalho | CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-05-01',
        dateModified: '2026-07-07',
      }}
      showTableOfContents
      readingTime="14 min"
      h1="CIPA: o que é, quem precisa, como funciona e como constituir"
      intro="A CIPA, Comissão Interna de Prevenção de Acidentes e de Assédio, é a estrutura prevista pela NR-05 para envolver empresa e trabalhadores na prevenção de acidentes, doenças ocupacionais e violência no trabalho. Na prática, a empresa precisa verificar se deve constituir a comissão ou nomear representante, qual treinamento se aplica e como manter eleição, atas e certificados organizados."
      quickAnswer={
        <p>
          A <strong>CIPA</strong> é uma comissão paritária formada por representantes do empregador e dos empregados
          para identificar riscos, propor medidas preventivas, acompanhar a segurança e saúde no trabalho e atuar na
          prevenção ao assédio. A obrigatoriedade depende do <strong>CNAE, do grau de risco e do número de empregados no estabelecimento</strong>.
          O dimensionamento é feito pelo <strong>Quadro I da NR-05</strong>, que cruza o grupo da atividade econômica com o número de empregados do estabelecimento.
          Quando o estabelecimento não se enquadra no Quadro I e não é atendido por SESMT, a organização nomeia um representante da NR-05, observadas as exceções da norma.
        </p>
      }
      sections={[
        {
          title: 'Resumo rápido para RH: o que fazer na prática',
          body: (
            <>
              <p>Se a sua empresa está tentando entender o que fazer com a NR-05, pense assim:</p>
              <ul>
                <li><strong>Abaixo do limite do Quadro I:</strong> em regra, não há CIPA plena, mas a empresa precisa nomear um <strong>designado</strong> e treiná-lo conforme o grau de risco.</li>
                <li><strong>Acima do limite do Quadro I:</strong> a empresa precisa <strong>constituir a CIPA</strong>, abrir processo eleitoral, formalizar posse, registrar atas e manter o treinamento dos membros.</li>
                <li><strong>Se houver dúvida sobre CNAE ou grau de risco:</strong> vale validar primeiro no cálculo de enquadramento para não errar tamanho de comissão nem carga horária.</li>
                <li><strong>Os erros que mais geram problema:</strong> não abrir eleição no prazo, treinamento sem registro, esquecer o designado e perder a rastreabilidade documental.</li>
              </ul>
              <p>
                Se o gargalo hoje é descobrir o grau de risco correto, comece pela{' '}
                <Link href="/rh/calculadora-cnae-grau-de-risco">calculadora de CNAE e grau de risco</Link>.
                Para organizar uma turma e os respectivos certificados, consulte a página de{' '}
                <Link href="/servicos/treinamentos-nrs-cipa-brigada/sao-paulo">treinamentos de NRs, CIPA e brigada</Link>.
              </p>
            </>
          ),
        },
        {
          title: 'O que é a CIPA',
          body: (
            <>
              <p>
                A CIPA é uma comissão paritária formada por representantes do <strong>empregador</strong> e dos{' '}
                <strong>empregados</strong>, com a função de identificar riscos, propor medidas preventivas, acompanhar ações
                de SST e atuar na prevenção e combate ao assédio sexual e outras formas de violência no trabalho.
              </p>
              <p>
                Ela não substitui SESMT, PGR nem PCMSO. A função da CIPA é atuar como canal interno de prevenção:
                quem está na operação ajuda a identificar riscos, a comissão registra, acompanha e cobra providências.
              </p>
            </>
          ),
        },
        {
          title: 'Quem é obrigado a ter CIPA',
          body: (
            <>
              <p>
                A obrigatoriedade e o dimensionamento dependem de dois fatores: o <strong>CNAE da empresa</strong>,
                que ajuda a definir o grau de risco, e o <strong>número de empregados no estabelecimento</strong>.
                Esses dados são cruzados com o Quadro I do Anexo I da NR-05.
              </p>
              <p>Em regra geral:</p>
              <ul>
                <li>Empresas de <strong>grau de risco 1 ou 2</strong> constituem CIPA a partir de <strong>50 empregados</strong>.</li>
                <li>Empresas de <strong>grau de risco 3 ou 4</strong> constituem CIPA a partir de <strong>20 empregados</strong>.</li>
                <li>Abaixo do limite, normalmente <strong>não há CIPA plena</strong>, mas entra a obrigação de indicar um <strong>designado</strong> treinado.</li>
              </ul>
              <p>
                O Quadro I também define quantos membros titulares e suplentes cada lado da comissão deve ter em cada faixa de empregados.
              </p>
            </>
          ),
        },
        {
          title: 'Como a CIPA funciona na prática',
          body: (
            <>
              <p>
                A CIPA existe para levar a rotina real da operação para dentro da gestão de SST. Ela ajuda a empresa a identificar
                risco, priorizar medidas de prevenção, registrar reuniões, acompanhar ocorrências e organizar campanhas como a SIPAT.
              </p>
              <p>
                Em empresas pequenas, o ponto central costuma ser não esquecer o designado e o treinamento. Em empresas maiores,
                o desafio geralmente está em eleição, estabilidade, atas, calendário de reuniões e prova documental de que a comissão está ativa.
              </p>
            </>
          ),
        },
        {
          title: 'Composição, eleição e mandato',
          body: (
            <>
              <p>A CIPA tem dois lados paritários:</p>
              <ul>
                <li><strong>Representantes do empregador:</strong> indicados pela empresa, conforme o Quadro I.</li>
                <li><strong>Representantes dos empregados:</strong> eleitos por voto secreto, com mandato de um ano e possibilidade de uma reeleição.</li>
              </ul>
              <p>
                O presidente é indicado pelo empregador entre os seus representantes. O vice-presidente é escolhido entre
                os representantes dos empregados. A CIPA deve se reunir ordinariamente uma vez por mês, em horário de trabalho, com registro em ata.
              </p>
            </>
          ),
        },
        {
          title: 'Passo a passo do processo eleitoral',
          body: (
            <ol>
              <li><strong>Convocação:</strong> o edital deve ser publicado com antecedência para abertura do processo.</li>
              <li><strong>Inscrições:</strong> qualquer empregado pode se candidatar dentro do prazo previsto, com registro formal.</li>
              <li><strong>Divulgação dos candidatos:</strong> a lista precisa ficar acessível aos trabalhadores.</li>
              <li><strong>Votação:</strong> deve ocorrer em dia normal de trabalho, com voto secreto e participação dos empregados.</li>
              <li><strong>Apuração:</strong> precisa ser documentada e realizada em horário de trabalho.</li>
              <li><strong>Posse:</strong> ocorre no primeiro dia útil após o término do mandato anterior, com registro em ata.</li>
              <li><strong>Arquivo dos documentos:</strong> edital, listas, cédulas e atas precisam ficar disponíveis para fiscalização.</li>
            </ol>
          ),
        },
        {
          title: 'Treinamento obrigatório: a carga horária varia por grau de risco',
          body: (
            <>
              <p>
                A carga horária mínima do treinamento da CIPA <strong>não é fixa para todos os estabelecimentos</strong>.
                Ela varia conforme o grau de risco:
              </p>
              <ul>
                <li><strong>Grau de risco 1:</strong> 8 horas.</li>
                <li><strong>Grau de risco 2:</strong> 12 horas.</li>
                <li><strong>Grau de risco 3:</strong> 16 horas.</li>
                <li><strong>Grau de risco 4:</strong> 20 horas.</li>
              </ul>
              <p>
                O representante nomeado também deve receber capacitação compatível com o grau de risco do estabelecimento.
                Quando a empresa precisa formar membros, cumprir um prazo ou apresentar certificados à fiscalização, deve
                definir a turma e o conteúdo conforme o seu enquadramento.
              </p>
              <p>
                O serviço de{' '}
                <Link href="/servicos/treinamentos-nrs-cipa-brigada/sao-paulo">treinamentos de NRs, CIPA e brigada</Link>
                {' '}apresenta as opções para organizar turma, certificados e reciclagens.
              </p>
              <p>O conteúdo mínimo costuma abranger:</p>
              <ol>
                <li>Ambiente, condições de trabalho e riscos do processo produtivo.</li>
                <li>Acidentes e doenças relacionadas ao trabalho e medidas de prevenção.</li>
                <li>Investigação e análise de acidentes e doenças.</li>
                <li>Princípios gerais de higiene do trabalho.</li>
                <li>Legislação trabalhista e previdenciária relacionada a SST.</li>
                <li>Inclusão de pessoas com deficiência e reabilitados.</li>
                <li>Organização da CIPA e atribuições de seus membros.</li>
                <li>Prevenção e combate ao assédio sexual e outras formas de violência no trabalho.</li>
              </ol>
            </>
          ),
        },
        {
          title: 'Quando organizar o treinamento de CIPA',
          body: (
            <>
              <p>
                Depois de definir o dimensionamento e o processo eleitoral, a empresa precisa planejar o treinamento dos
                representantes conforme a NR-05. O conteúdo, a carga horária, os certificados e as reciclagens devem ser
                compatíveis com o grau de risco e com a realidade do estabelecimento.
              </p>
              <p>
                Também vale alinhar datas, participantes e registros antes do início do mandato. Esse cuidado evita
                correções de última hora e deixa claro para o RH o que já foi concluído e o que ainda está pendente.
              </p>
              <p>
                Para consultar carga horária, formato e organização das turmas, veja o serviço de{' '}
                <Link href="/servicos/treinamentos-nrs-cipa-brigada/sao-paulo">treinamentos corporativos de NRs, CIPA e brigada</Link>.
              </p>
            </>
          ),
        },
        {
          title: 'Estabilidade dos membros eleitos',
          body: (
            <>
              <p>
                Representantes dos empregados eleitos para a CIPA têm <strong>estabilidade de emprego</strong> desde o registro
                da candidatura até um ano após o término do mandato, salvo falta grave apurada na forma legal.
              </p>
              <ul>
                <li>Demitir cipeiro estável sem base jurídica costuma gerar reintegração ou indenização.</li>
                <li>A estabilidade também alcança suplentes eleitos.</li>
                <li>Candidatos não eleitos, em regra, não mantêm estabilidade após o processo.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'O que precisa estar documentado',
          body: (
            <ol>
              <li><strong>Livro ou registro de atas:</strong> reuniões ordinárias e extraordinárias.</li>
              <li><strong>Ata de eleição e posse:</strong> prova formal do processo eleitoral.</li>
              <li><strong>Certificados de treinamento:</strong> com carga horária compatível com o grau de risco, data, instrutor e conteúdo.</li>
              <li><strong>Mapa de riscos:</strong> quando aplicável, elaborado e revisado pela comissão.</li>
              <li><strong>Plano de trabalho:</strong> atividades previstas para o mandato.</li>
              <li><strong>Registro do designado:</strong> nomeação, treinamento e atribuições.</li>
            </ol>
          ),
        },
        {
          title: 'SIPAT: a obrigação anual ligada à CIPA',
          body: (
            <>
              <p>
                A SIPAT, Semana Interna de Prevenção de Acidentes do Trabalho, é uma obrigação anual ligada à rotina da CIPA.
                Ela deve ser planejada, executada e documentada como parte da estratégia de conscientização em segurança e saúde.
              </p>
              <p>
                A ausência de SIPAT fragiliza a documentação da empresa e costuma aparecer em fiscalizações e perícias.
              </p>
            </>
          ),
        },
        {
          title: 'CIPATR: a CIPA no setor rural',
          body: (
            <>
              <p>
                No meio rural, a referência é a <strong>CIPATR</strong>. A lógica continua parecida: existe obrigação de estrutura
                mínima de prevenção e documentação, mas com regras específicas para o contexto rural.
              </p>
              <p>Empresas com operações urbanas e rurais precisam analisar a obrigatoriedade em cada frente de trabalho.</p>
            </>
          ),
        },
        {
          title: 'Mapa de riscos: atribuição central da comissão',
          body: (
            <>
              <p>
                Uma das atribuições clássicas da CIPA é ajudar na elaboração e revisão do <strong>mapa de riscos</strong>,
                representando graficamente os riscos presentes no local de trabalho e facilitando a comunicação com os trabalhadores.
              </p>
              <p>
                Quando a empresa tem CIPA, a ausência total de mapa, plano ou rastreabilidade costuma indicar que a comissão existe apenas no papel.
              </p>
              <p>
                Esse trabalho só funciona bem quando conversa com o{' '}
                <Link href="/normas/nr-01-pgr-atualizada">PGR da NR-01</Link> e, quando aplicável, com o{' '}
                <Link href="/normas/sesmt">SESMT</Link>.
              </p>
            </>
          ),
        },
        {
          title: 'Microempresa, MEI e empresas com poucos funcionários',
          body: (
            <>
              <p>
                Muitas empresas pequenas confundem “não preciso constituir CIPA” com “não preciso fazer nada”. São coisas diferentes.
              </p>
              <ul>
                <li><strong>MEI sem empregados:</strong> não está no mesmo cenário de uma empresa com CLT e rotina formal de NR-05.</li>
                <li><strong>Empresa abaixo do Quadro I:</strong> em regra, não constitui CIPA plena, mas precisa nomear designado e documentar o treinamento.</li>
                <li><strong>Empresa que não faz nem CIPA nem designado:</strong> fica exposta à autuação.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Documentação eleitoral e envio ao sindicato',
          body: (
            <>
              <p>
                A empresa precisa manter o processo eleitoral organizado e acessível para eventual fiscalização. Quando houver solicitação,
                a documentação deve ser encaminhada ao sindicato da categoria nos termos da NR-05.
              </p>
              <ul>
                <li>Edital de convocação.</li>
                <li>Lista de candidatos inscritos.</li>
                <li>Registro de votação e apuração.</li>
                <li>Ata de eleição e posse.</li>
                <li>Certificados de treinamento dos membros.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Penalidades e multas por não ter CIPA em ordem',
          body: (
            <>
              <p>O descumprimento da NR-05 pode gerar autuação administrativa e, em alguns casos, passivo trabalhista. Os problemas mais comuns são:</p>
              <ul>
                <li>Não constituir CIPA quando obrigatória.</li>
                <li>Não abrir eleição no prazo.</li>
                <li>Não treinar membros ou designado corretamente.</li>
                <li>Não realizar SIPAT.</li>
                <li>Demitir cipeiro estável sem o tratamento jurídico adequado.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Os 4 erros que mais viram autuação',
          body: (
            <ol>
              <li><strong>CIPA não constituída quando obrigatória.</strong> A empresa atinge o limite do Quadro I, mas a comissão não existe de forma regular.</li>
              <li><strong>Eleição não realizada no prazo.</strong> O mandato vence e a empresa deixa a comissão inativa.</li>
              <li><strong>Treinamento incompleto ou sem registro.</strong> Membros e designado sem a carga horária exigida para o grau de risco.</li>
              <li><strong>Dispensa de cipeiro estável.</strong> A empresa trata a estabilidade como detalhe e transforma um problema administrativo em passivo judicial.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'CIPA é obrigatória para construção civil com menos de 50 funcionários?',
          a: 'Na construção civil, a obrigatoriedade costuma aparecer antes, porque muitas atividades ficam em grau de risco 3 ou 4. Em regra, a CIPA passa a ser exigida a partir de 20 empregados no estabelecimento. Abaixo disso, normalmente entra a figura do designado treinado conforme a NR-05.',
        },
        {
          q: 'O que é o designado da NR-05?',
          a: 'É o trabalhador nomeado pela empresa para cumprir as atribuições da CIPA quando o estabelecimento não atinge o porte mínimo para constituir a comissão plena. Ele precisa receber treinamento compatível com o grau de risco.',
        },
        {
          q: 'A CIPA precisa se reunir todo mês?',
          a: 'Em regra, sim. A rotina ordinária da CIPA envolve reuniões periódicas com registro em ata. Situações específicas podem exigir reuniões extraordinárias.',
        },
        {
          q: 'Empresa com múltiplos CNAEs calcula a CIPA por qual atividade?',
          a: 'Em geral, a referência parte do enquadramento principal usado para definição do grau de risco e da regra aplicável ao estabelecimento. Quando houver dúvida, o correto é validar o CNAE antes de dimensionar a CIPA.',
        },
        {
          q: 'A CIPA pode ser substituída por um comitê interno?',
          a: 'Não. Um comitê interno pode ajudar na gestão, mas não substitui a exigência formal da NR-05 quando a empresa está obrigada a manter CIPA.',
        },
        {
          q: 'O que é SIPAT e quem organiza?',
          a: 'A SIPAT é a Semana Interna de Prevenção de Acidentes do Trabalho. Ela faz parte da rotina ligada à CIPA e deve ser planejada e documentada pela empresa com participação da comissão.',
        },
        {
          q: 'O que é CIPATR?',
          a: 'É a comissão equivalente no trabalho rural, com regras voltadas ao contexto do campo.',
        },
        {
          q: 'Membros do SESMT precisam fazer o treinamento da CIPA?',
          a: 'Em regra, integrantes do SESMT que atuam na CIPA não dependem do mesmo tratamento dado a membros leigos da comissão, mas a documentação da empresa precisa registrar corretamente esse enquadramento.',
        },
        {
          q: 'Empresa sem CIPA paga multa?',
          a: 'Se ela estiver obrigada a constituir CIPA e não o fizer, ou se deixar de nomear designado quando cabível, fica exposta à autuação administrativa e a outros desdobramentos.',
        },
        {
          q: 'O que é mapa de riscos e quem faz?',
          a: 'É a representação gráfica dos riscos existentes no local de trabalho. A CIPA participa da sua elaboração e revisão como parte da rotina preventiva.',
        },
        {
          q: 'Microempresa ou MEI precisa ter CIPA?',
          a: 'Depende da existência de empregados e do enquadramento da empresa no Quadro I da NR-05. Nem toda empresa pequena constitui CIPA plena, mas isso não significa ausência total de obrigações.',
        },
        {
          q: 'Precisa registrar a CIPA no MTE?',
          a: 'O foco prático hoje é manter o processo eleitoral, as atas, os certificados e a documentação acessíveis para fiscalização e para eventuais solicitações formais.',
        },
      ]}
      maxFaqItems={12}
      sidebarTitle="Sua empresa está com a CIPA em ordem?"
      sidebarHook="CIPA vencida, treinamento sem registro ou cipeiro dispensado indevidamente viram autuação e passivo. A SERMST apoia constituição, treinamento e documentação completa do mandato."
      sidebarCtaLabel="Falar sobre CIPA"
      sidebarCtaHref="/servicos/treinamentos-nrs-cipa-brigada/sao-paulo"
      related={[
        { label: 'Treinamentos NR, CIPA e brigada', href: '/servicos/treinamentos-nrs-cipa-brigada/sao-paulo' },
        { label: 'NR-04 e SESMT: dimensionamento', href: '/normas/sesmt' },
        { label: 'Calculadora de grau de risco CNAE', href: '/rh/calculadora-cnae-grau-de-risco' },
        { label: 'Guia da NR-01 e PGR', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'NR-35: trabalho em altura', href: '/normas/nr-35-trabalho-em-altura' },
      ]}
    />
  );
}
