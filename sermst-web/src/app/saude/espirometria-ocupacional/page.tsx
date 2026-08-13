import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Espirometria Ocupacional em São Paulo | SERMST',
  description:
    'Espirometria ocupacional para empresas com exposição a poeiras e agentes químicos. Exame integrado ao PCMSO e ASO. Laboratório próprio da SERMST em SP.',
  robots: 'index, follow',
  alternates: { canonical: 'https://sermst.com.br/saude/espirometria-ocupacional' },
  openGraph: {
    title: 'Espirometria Ocupacional em São Paulo | SERMST',
    description:
      'Guia para empresas que precisam incluir espirometria ocupacional no PCMSO. Exame de função pulmonar integrado ao ASO, realizado na SERMST em São Paulo.',
    url: 'https://sermst.com.br/saude/espirometria-ocupacional',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function EspirometriaOcupacionalPage() {
  return (
    <BlockbusterArticle
      hubLabel="Saúde Ocupacional"
      hubLabelShort="Voltar para saúde"
      hubHref="/saude"
      badgeText="Exame Complementar"
      pageUrl="https://sermst.com.br/saude/espirometria-ocupacional"
      coverImage={{
        src: '/images/site/sermst-laboratorio-ocupacional-sao-paulo.jpg',
        alt: 'Laboratório da SERMST para realização de espirometria ocupacional em São Paulo',
      }}
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-07-06',
        dateModified: '2026-07-13',
      }}
      readingTime="7 min"
      h1="Espirometria ocupacional: quando a empresa precisa, o que mede e onde fazer em São Paulo"
      intro="A espirometria ocupacional é o exame que mede a função pulmonar de trabalhadores expostos a poeiras, fumos e agentes químicos. Quando o PCMSO prevê esse risco, o exame entra no protocolo de admissão, periódico e demissional para registrar a capacidade respiratória do trabalhador ao longo do tempo."
      quickAnswer={
        <p>
          A <strong>espirometria ocupacional</strong> é indicada para funções com exposição a agentes
          respiratórios previstos na NR-09 e no PCMSO. A SERMST realiza o exame em São Paulo com
          laboratório próprio, integração ao ASO e laudo médico para o protocolo de monitoramento
          respiratório da empresa.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'O que é espirometria ocupacional',
          body: (
            <>
              <p>
                A espirometria ocupacional é um exame de função pulmonar que mede a capacidade do trabalhador de encher e esvaziar os pulmões. O resultado registra volumes e fluxos respiratórios e é usado para identificar limitações que podem estar relacionadas à exposição profissional.
              </p>
              <p>
                No contexto ocupacional, o exame tem uma função específica: documentar a condição respiratória do trabalhador em momentos distintos do vínculo empregatício. Isso permite comparar o resultado admissional com os periódicos e identificar deterioração associada ao trabalho antes que vire doença ocupacional com nexo estabelecido.
              </p>
              <p>
                A espirometria que compõe o ASO segue critérios técnicos diferentes da espirometria clínica convencional. O exame precisa ser conduzido com padronização adequada para que a comparação entre resultados ao longo do tempo tenha validade médica e jurídica.
              </p>
            </>
          ),
        },
        {
          title: 'Quando o PCMSO inclui espirometria',
          body: (
            <>
              <p>
                A inclusão da espirometria no PCMSO depende da avaliação de risco do cargo. O médico do trabalho define o protocolo com base nos agentes presentes no ambiente, na intensidade da exposição e nas exigências específicas de cada função.
              </p>
              <p>
                Os cenários mais comuns em que a espirometria entra no protocolo incluem:
              </p>
              <ul>
                <li><strong>Exposição a poeiras respiráveis:</strong> obras, mineração, cerâmica, amianto, sílica cristalina.</li>
                <li><strong>Agentes químicos irritantes ou sensibilizantes:</strong> solventes, isocianatos, anidridos, amônia, cloro.</li>
                <li><strong>Fumos metálicos:</strong> soldagem, fundição, galvanoplastia.</li>
                <li><strong>Atividades em ambientes confinados com exposição respiratória:</strong> tanques, silos, galerias.</li>
                <li><strong>Agentes biológicos com risco respiratório:</strong> fungos, bioaerossóis, ambientes hospitalares ou agrícolas.</li>
              </ul>
              <p>
                Quando o PCMSO define espirometria para uma função, o exame deve ser feito na admissão, com periodicidade definida nos exames periódicos e, quando aplicável, no retorno ao trabalho e no demissional.
              </p>
            </>
          ),
        },
        {
          title: 'O que o exame mede',
          body: (
            <>
              <p>
                A espirometria registra parâmetros respiratórios que indicam como os pulmões funcionam. Os principais valores avaliados são:
              </p>
              <ul>
                <li><strong>CVF (Capacidade Vital Forçada):</strong> volume total de ar que o trabalhador consegue expirar com força máxima após uma inspiração máxima.</li>
                <li><strong>VEF1 (Volume Expiratório Forçado no 1º segundo):</strong> volume de ar expelido no primeiro segundo da expiração forçada. Indica velocidade de esvaziamento pulmonar.</li>
                <li><strong>Relação VEF1/CVF:</strong> razão entre os dois valores anteriores. Auxilia na classificação do padrão espirométrico como obstrutivo, restritivo ou misto.</li>
                <li><strong>FEF 25-75%:</strong> fluxo expiratório forçado entre 25% e 75% da CVF. Sensível a alterações precoces nas pequenas vias aéreas.</li>
              </ul>
              <p>
                O laudo classifica o resultado como normal ou identifica padrões obstrutivos, restritivos ou mistos, com grau de alteração leve, moderado ou grave. Essa classificação orienta o médico do trabalho no momento da emissão do ASO.
              </p>
            </>
          ),
        },
        {
          title: 'Funções e setores que mais precisam do exame',
          body: (
            <>
              <p>
                A espirometria ocupacional aparece com mais frequência em empresas dos seguintes setores:
              </p>
              <ul>
                <li>Construção civil: exposição a poeiras de cimento, sílica e fibras de lã de vidro.</li>
                <li>Indústria química e farmacêutica: contato com vapores, solventes e reagentes.</li>
                <li>Metalurgia e siderurgia: fumos de soldagem, lixamento e fundição.</li>
                <li>Marcenaria e carpintaria: poeiras de madeira dura associadas a risco de câncer nasosinusal.</li>
                <li>Agropecuária: bioaerossóis, fungos e agrotóxicos.</li>
                <li>Saúde: exposição a látex, agentes de esterilização e bioaerossóis.</li>
                <li>Panificação e alimentação: farinhas e poeiras orgânicas com potencial sensibilizante.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Como o resultado da espirometria entra no ASO',
          body: (
            <>
              <p>
                O resultado da espirometria é um dado que o médico usa na avaliação ocupacional. Quando o exame faz parte do PCMSO, ele é analisado com os demais dados clínicos antes da conclusão de apto ou inapto para a função.
              </p>
              <p>
                A validade do monitoramento respiratório ao longo do tempo depende de o exame ser feito de forma padronizada em todos os momentos do vínculo. Resultados obtidos com técnica inconsistente ou em equipamentos sem calibração adequada não são comparáveis entre si e perdem o valor diagnóstico.
              </p>
              <p>
                Quando há alteração identificada no periódico em relação ao admissional, o médico do trabalho pode recomendar afastamento temporário, mudança de função, uso de proteção respiratória adequada ou investigação complementar antes de emitir o ASO.
              </p>
            </>
          ),
        },
        {
          title: 'O que avaliar ao escolher onde fazer espirometria ocupacional',
          body: (
            <ol>
              <li><strong>Calibração e padronização do equipamento.</strong> Espirômetros precisam de calibração regular. Resultados comparáveis ao longo do tempo dependem disso.</li>
              <li><strong>Integração com o fluxo do ASO.</strong> A clínica precisa conseguir entregar o laudo dentro do fluxo operacional da empresa, sem atrasar admissão ou periódico.</li>
              <li><strong>Médico do trabalho no laudo.</strong> A interpretação ocupacional do resultado deve ser feita por médico com experiência em saúde ocupacional, não apenas por técnico ou enfermeiro.</li>
              <li><strong>Coerência com o PCMSO da empresa.</strong> A clínica precisa entender o protocolo do PCMSO para interpretar o resultado no contexto da função e do risco específico.</li>
              <li><strong>Localização e acesso em São Paulo.</strong> Clínica no Centro facilita o deslocamento dos colaboradores e reduz o tempo fora da operação.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'O que é espirometria ocupacional?',
          a: 'É o exame de função pulmonar realizado no contexto da medicina do trabalho para avaliar trabalhadores expostos a agentes respiratórios. Mede volumes e fluxos pulmonares e é usado para monitorar a saúde respiratória ao longo do vínculo empregatício.',
        },
        {
          q: 'Quando a empresa precisa incluir espirometria no PCMSO?',
          a: 'Quando há funções com exposição a poeiras, agentes químicos irritantes, fumos metálicos, solventes ou outros agentes com risco respiratório. O médico do trabalho define a necessidade com base na avaliação de riscos do PCMSO.',
        },
        {
          q: 'Quais funções precisam fazer espirometria?',
          a: 'Soldadores, lixadores, operários de construção civil, trabalhadores em marcenaria, operadores em indústrias químicas, trabalhadores em mineração e qualquer função com exposição regular a agentes respiratórios identificados no PCMSO.',
        },
        {
          q: 'A espirometria precisa ser feita na admissão?',
          a: 'Quando o PCMSO inclui espirometria para a função, sim. O exame admissional serve como linha de base para comparação nos periódicos futuros. Sem o resultado admissional, fica mais difícil documentar alteração relacionada ao trabalho.',
        },
        {
          q: 'Onde fazer espirometria ocupacional em São Paulo?',
          a: 'A SERMST realiza espirometria ocupacional em São Paulo Centro, no Largo do Paissandu, com laboratório próprio, equipamento calibrado e integração ao fluxo do ASO e PCMSO da empresa.',
        },
      ]}
      sidebarTitle="Sua empresa precisa de espirometria?"
      sidebarHook="A SERMST realiza espirometria ocupacional com laboratório próprio, integração ao PCMSO e ASO. Para orçamento corporativo ou dúvida sobre o protocolo da sua empresa, fale com a equipe."
      sidebarCtaLabel="Solicitar orçamento"
      sidebarCtaHref="/servicos/exame-admissional-expresso/sao-paulo"
      related={[
        { label: 'Exames complementares e laboratoriais', href: '/servicos/exames-complementares-laboratoriais' },
        { label: 'PCMSO: programa de controle médico de saúde ocupacional', href: '/saude/pcmso-programa-controle-medico' },
        { label: 'Tabela de exames admissionais por função e cargo', href: '/saude/tabela-exames-admissionais-por-funcao' },
        { label: 'NR-09: agentes químicos e avaliação de risco', href: '/normas/nr-09' },
      ]}
      finalCta={{
        title: 'Espirometria integrada ao PCMSO da sua empresa.',
        desc: 'A SERMST realiza espirometria ocupacional em São Paulo Centro com laboratório próprio, técnica padronizada e laudo integrado ao fluxo do ASO. Para orçamento corporativo, fale com a equipe.',
        label: 'Falar com a SERMST',
        href: '/contato',
      }}
    />
  );
}
