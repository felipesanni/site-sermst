import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-05: CIPA — Obrigações e Como Constituir | SERMST',
  description:
    'A NR-05 obriga empresas a constituir a CIPA ou designar responsável. Obrigatoriedade por CNAE e número de funcionários. Membros eleitos têm estabilidade.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-05-cipa' },
  openGraph: {
    title: 'NR-05: CIPA — quem é obrigado, como constituir e erros que viram autuação | SERMST',
    description:
      'Entenda a NR-05 e a CIPA: obrigatoriedade por CNAE e número de funcionários, composição, mandato, treinamento de 20h, estabilidade de membros eleitos e designado de CIPA.',
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
        dateModified: '2026-05-01',
      }}

      h1="NR-05: CIPA — guia completo de obrigações para empresas"
      intro="A NR-05 exige que toda empresa que atinge determinado número de funcionários constitua a CIPA — Comissão Interna de Prevenção de Acidentes. Quem não atinge o porte mínimo precisa designar um responsável. Em ambos os casos há obrigação formal. Falta de CIPA é autuação direta na fiscalização do MTE."
      sections={[
        {
          title: 'O que é a CIPA (em uma frase)',
          body: (
            <>
              <p>
                A CIPA é uma comissão paritária — formada por representantes do <strong>empregador</strong> e dos <strong>empregados</strong> — responsável por identificar os riscos do trabalho, propor medidas preventivas e acompanhar as ações de saúde e segurança dentro da empresa.
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
                O processo eleitoral deve ser organizado pela empresa com <strong>60 dias de antecedência</strong> ao término do mandato vigente. Inclui edital interno, inscrição de candidatos, votação secreta e posse registrada em ata.
              </p>
              <p>
                O <strong>presidente</strong> é indicado pelo empregador entre os seus representantes. O <strong>vice-presidente</strong> é eleito pelos membros representantes dos empregados entre si. A CIPA deve se reunir ordinariamente <strong>uma vez por mês</strong>, em horário de trabalho e com registro em ata.
              </p>
            </>
          ),
        },
        {
          title: 'Treinamento obrigatório: 20 horas',
          body: (
            <>
              <p>
                Todo membro da CIPA — titulares e suplentes, do empregador e dos empregados — deve receber treinamento de <strong>20 horas</strong> antes de assumir o mandato. O conteúdo mínimo obrigatório inclui:
              </p>
              <ol>
                <li>Estudo do ambiente, das condições de trabalho e dos riscos originados do processo produtivo.</li>
                <li>Metodologia de investigação e análise de acidentes e doenças do trabalho.</li>
                <li>Noções sobre doenças do trabalho e doença profissional.</li>
                <li>Primeiros socorros básicos.</li>
                <li>Noções de higiene e medicina do trabalho.</li>
                <li>Elaboração de mapa de riscos.</li>
                <li>NR-05: direitos, deveres e atribuições da CIPA.</li>
              </ol>
              <p>
                O treinamento pode ser ministrado pela própria empresa (com instrutor habilitado) ou por entidade externa. É necessário emitir certificado individual e manter registro por toda a vigência do mandato mais dois anos.
              </p>
              <p>
                O <strong>designado de CIPA</strong> (para empresas abaixo do porte que obriga a comissão plena) também deve receber esse treinamento na íntegra.
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
          q: 'O que é o designado de CIPA?',
          a: 'É um funcionário indicado pela empresa para exercer as atribuições da CIPA quando o estabelecimento não atinge o porte mínimo para constituir a comissão plena. Deve ser treinado nas mesmas 20 horas exigidas para membros cipeiros. Não tem estabilidade de emprego — essa proteção é exclusiva dos membros eleitos da CIPA plena.',
        },
        {
          q: 'A CIPA precisa se reunir todo mês?',
          a: 'Sim. A NR-05 exige reunião ordinária mensal em horário de trabalho, com pauta e ata registradas no livro próprio. Reuniões extraordinárias são convocadas quando há acidente grave, denúncia de risco iminente ou solicitação de qualquer membro. O não cumprimento da periodicidade fragiliza a documentação da empresa em perícias e fiscalizações.',
        },
        {
          q: 'Empresa com múltiplos CNAEs precisa calcular a CIPA por qual atividade?',
          a: 'Pela atividade principal declarada no CNPJ (CNAE primário), que é o que o MTE usa como referência para o Quadro I da NR-05. Se houver dúvida sobre qual CNAE aplicar — especialmente em empresas mistas — recomendamos consulta ao técnico de segurança do trabalho antes de dimensionar a CIPA.',
        },
        {
          q: 'A CIPA pode ser substituída por um comitê interno de segurança?',
          a: 'Não. A CIPA é exigência legal com composição, processo eleitoral e documentação regulamentados pela NR-05. Comitês internos de segurança são ferramentas de gestão complementares, não substituem a CIPA nem eliminam a obrigação legal. Ter o comitê e não ter a CIPA continua sendo infração.',
        },
      ]}
      sidebarTitle="Sua empresa está com a CIPA em ordem?"
      sidebarHook="CIPA vencida, treinamento sem registro ou cipeiro dispensado indevidamente viram autuação e passivo. A SERMST apoia a constituição da CIPA, o treinamento das 20 horas e a documentação completa do mandato."
      sidebarCtaLabel="Falar sobre CIPA"
      related={[
        { label: 'Guia da NR-01 e atualização do PGR', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'Treinamento NR-05 CIPA', href: '/treinamentos/nr-05-cipa-comissao-interna' },
        { label: 'NR-35: Trabalho em Altura', href: '/normas/nr-35-trabalho-em-altura' },
        { label: 'Calculadora de grau de risco CNAE', href: '/rh/calculadora-cnae-grau-de-risco' },
      ]}
    />
  );
}
