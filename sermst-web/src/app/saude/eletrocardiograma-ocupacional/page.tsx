import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Eletrocardiograma Ocupacional em São Paulo | SERMST',
  description:
    'Eletrocardiograma ocupacional (ECG) integrado ao PCMSO e ASO em São Paulo. Exigido para trabalhadores a partir de 40 anos e funções com risco cardiovascular.',
  robots: 'index, follow',
  alternates: { canonical: 'https://sermst.com.br/saude/eletrocardiograma-ocupacional' },
  openGraph: {
    title: 'Eletrocardiograma Ocupacional em São Paulo | SERMST',
    description:
      'Guia sobre eletrocardiograma ocupacional (ECG): quando o PCMSO exige, quais funções precisam, o que o exame detecta e onde fazer em São Paulo.',
    url: 'https://sermst.com.br/saude/eletrocardiograma-ocupacional',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function EletrocardiogramaOcupacionalPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub Saúde Ocupacional"
      hubLabelShort="Voltar para saúde"
      hubHref="/saude"
      badgeText="Exame Complementar"
      pageUrl="https://sermst.com.br/saude/eletrocardiograma-ocupacional"
      coverImage={{
        src: '/images/site/sermst-estrutura-medicina-ocupacional.png',
        alt: 'Estrutura da SERMST para realização de eletrocardiograma ocupacional em São Paulo',
      }}
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-07-06',
        dateModified: '2026-07-06',
      }}
      readingTime="7 min"
      h1="Eletrocardiograma ocupacional: quando é exigido, o que detecta e onde fazer em São Paulo"
      intro="O eletrocardiograma ocupacional (ECG) registra a atividade elétrica do coração e é incluído no PCMSO para trabalhadores com risco cardiovascular elevado ou a partir de determinada faixa etária. Para a empresa, entender quando e para quem o exame é necessário evita lacunas no programa médico e reduz o risco de eventos cardíacos não monitorados no ambiente de trabalho."
      quickAnswer={
        <p>
          O <strong>eletrocardiograma ocupacional</strong> é indicado pelo PCMSO para trabalhadores
          a partir de 40 anos e funções com exposição a agentes cardiotóxicos, esforço físico intenso
          ou riscos elétricos. A SERMST realiza o ECG em São Paulo integrado ao ASO e ao protocolo
          do PCMSO da empresa.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'O que é o eletrocardiograma ocupacional',
          body: (
            <>
              <p>
                O eletrocardiograma (ECG) é um exame não invasivo que registra os sinais elétricos do coração. Cada batimento gera um padrão elétrico específico que o aparelho registra em forma de gráfico, permitindo identificar alterações no ritmo cardíaco, na condução do impulso elétrico e na morfologia das câmaras cardíacas.
              </p>
              <p>
                No contexto ocupacional, o ECG não tem como objetivo tratar doenças cardíacas: esse é o papel do cardiologista. A função do exame no PCMSO é documentar a condição cardíaca basal do trabalhador e identificar alterações que possam indicar incompatibilidade com as exigências físicas da função ou com os agentes presentes no ambiente de trabalho.
              </p>
              <p>
                O resultado entra como dado na avaliação médica do ASO. Quando o médico do trabalho identifica alterações relevantes, pode condicionar a aptidão à avaliação cardiológica complementar antes de emitir a conclusão final.
              </p>
            </>
          ),
        },
        {
          title: 'Quando o PCMSO inclui eletrocardiograma',
          body: (
            <>
              <p>
                A inclusão do ECG no protocolo do PCMSO é definida pelo médico do trabalho com base na avaliação de risco da função. As situações mais comuns em que o exame é indicado incluem:
              </p>
              <ul>
                <li><strong>Faixa etária:</strong> trabalhadores com 40 anos ou mais costumam ter ECG incluído no periódico, independentemente da função, por critério de monitoramento preventivo.</li>
                <li><strong>Exposição a agentes cardiotóxicos:</strong> solventes orgânicos, metais pesados como chumbo e cádmio, gases asfixiantes e alguns pesticidas podem afetar a função cardíaca com exposição prolongada.</li>
                <li><strong>Risco elétrico:</strong> trabalhadores em eletricidade (NR-10) têm indicação de ECG para detectar alterações preexistentes que possam ser agravadas por exposição acidental a corrente elétrica.</li>
                <li><strong>Esforço físico intenso:</strong> funções com carga física elevada e contínua, como operadores de equipamentos pesados, carregadores e trabalhadores em ambientes quentes.</li>
                <li><strong>Trabalho em altura:</strong> a NR-35 exige avaliação clínica completa, e o ECG pode integrar o protocolo para trabalhadores com histórico cardíaco ou acima de determinada faixa etária.</li>
                <li><strong>Operação de veículos e transporte:</strong> motoristas profissionais com CNH D ou E têm exigências específicas de aptidão cardiovascular.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'O que o eletrocardiograma detecta',
          body: (
            <>
              <p>
                O ECG de repouso padrão pode identificar uma série de alterações cardíacas relevantes para a aptidão ocupacional:
              </p>
              <ul>
                <li><strong>Arritmias:</strong> alterações no ritmo cardíaco, como fibrilação atrial, bloqueios e extrassístoles, que podem indicar risco aumentado em funções com esforço físico ou estresse.</li>
                <li><strong>Isquemia miocárdica:</strong> sinais de redução do fluxo sanguíneo para o músculo cardíaco, associados ao risco de infarto em situações de exigência física.</li>
                <li><strong>Hipertrofia ventricular:</strong> espessamento das câmaras cardíacas, frequentemente associado à hipertensão arterial não controlada.</li>
                <li><strong>Distúrbios de condução:</strong> bloqueios de ramo que podem indicar doenças cardíacas estruturais ou ter relevância para funções em ambientes elétricos.</li>
                <li><strong>Alterações relacionadas a medicamentos:</strong> alguns medicamentos de uso contínuo prolongam o intervalo QT, o que tem implicações para funções de alto risco.</li>
              </ul>
              <p>
                É importante destacar que o ECG de repouso tem limitações diagnósticas. Alterações apenas detectáveis durante esforço físico podem não aparecer no exame padrão. Para trabalhadores com suspeita de cardiopatia relacionada ao esforço, o médico do trabalho pode encaminhar para teste ergométrico ou avaliação cardiológica mais completa.
              </p>
            </>
          ),
        },
        {
          title: 'Eletrocardiograma e NR-10: risco elétrico',
          body: (
            <>
              <p>
                Trabalhadores que atuam em instalações elétricas e estão sujeitos ao risco de choque elétrico têm uma razão adicional para incluir o ECG no PCMSO. A passagem de corrente elétrica pelo corpo pode desencadear fibrilação ventricular, especialmente em trabalhadores com alterações preexistentes no sistema de condução cardíaca.
              </p>
              <p>
                O ECG admissional para trabalhadores em eletricidade serve como documento de referência: em caso de acidente com choque, o exame pré-acidente é fundamental para avaliar se alterações identificadas posteriormente têm nexo com o evento ou são preexistentes.
              </p>
              <p>
                Empresas com programa NR-10 estruturado costumam incluir o ECG no protocolo periódico para todos os trabalhadores com risco elétrico, independentemente da faixa etária.
              </p>
            </>
          ),
        },
        {
          title: 'Como o resultado entra no ASO',
          body: (
            <>
              <p>
                O laudo do ECG é um dado que o médico do trabalho avalia ao emitir o ASO. Resultados dentro dos parâmetros normais são incorporados ao documento sem impacto na conclusão de aptidão. Quando o ECG identifica alterações, o médico avalia a relevância clínica no contexto da função.
              </p>
              <p>
                Alterações que não contraindicam a função são registradas no prontuário e acompanhadas nos periódicos seguintes. Alterações que indicam incompatibilidade com a função podem levar o médico a emitir ASO com restrição, condicionando a aptidão à avaliação cardiológica especializada, ou a emitir ASO de inapto temporário enquanto o trabalhador passa por investigação e tratamento.
              </p>
              <p>
                O histórico de ECGs ao longo do vínculo empregatício permite comparar resultados e identificar progressão de alterações ao longo do tempo, o que é especialmente relevante para funções com exposição a agentes cardiotóxicos.
              </p>
            </>
          ),
        },
        {
          title: 'O que avaliar ao escolher onde fazer o exame',
          body: (
            <ol>
              <li><strong>Integração ao fluxo do ASO.</strong> O laudo do ECG precisa chegar ao médico do trabalho responsável pelo ASO da empresa, não ser emitido isoladamente sem contexto ocupacional.</li>
              <li><strong>Equipamento com tecnologia de 12 derivações.</strong> O ECG padrão de 12 derivações é o mínimo exigido para avaliação ocupacional. Equipamentos com análise computadorizada auxiliam na interpretação, mas o laudo deve ser assinado por médico.</li>
              <li><strong>Interpretação médica no contexto ocupacional.</strong> Um resultado que seria irrelevante clinicamente pode ter importância para a aptidão em funções específicas. O médico do trabalho precisa interpretar o ECG no contexto do PCMSO.</li>
              <li><strong>Agilidade para empresas com programa periódico.</strong> Para empresas que incluem ECG no periódico anual ou bienal de uma parcela significativa dos trabalhadores, a clínica precisa ter capacidade de atendimento corporativo com agendamento flexível.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'O que é eletrocardiograma ocupacional?',
          a: 'É o ECG realizado no contexto da medicina do trabalho para avaliar a condição cardíaca de trabalhadores expostos a riscos cardiovasculares ou em funções com exigência física elevada. O resultado integra o ASO e o protocolo do PCMSO da empresa.',
        },
        {
          q: 'A partir de que idade o ECG é obrigatório no PCMSO?',
          a: 'Não há obrigatoriedade legal por faixa etária, mas o protocolo mais frequente adotado pelos médicos do trabalho inclui ECG periódico para trabalhadores a partir de 40 anos. A decisão final cabe ao médico coordenador do PCMSO.',
        },
        {
          q: 'Trabalhadores de eletricidade precisam fazer ECG?',
          a: 'A NR-10 não especifica o ECG obrigatório, mas muitos médicos do trabalho o incluem no protocolo do PCMSO para trabalhadores com risco elétrico, dada a relação entre choque elétrico e alterações do ritmo cardíaco.',
        },
        {
          q: 'O ECG de repouso é suficiente para avaliar risco cardiovascular no trabalho?',
          a: 'Para a maioria das funções, sim. Quando há suspeita de cardiopatia induzida por esforço ou o médico identifica alterações no ECG de repouso, pode encaminhar para teste ergométrico ou avaliação cardiológica complementar antes de emitir o ASO.',
        },
        {
          q: 'Onde fazer eletrocardiograma ocupacional em São Paulo?',
          a: 'A SERMST realiza eletrocardiograma ocupacional em São Paulo Centro, no Largo do Paissandu, com laudo integrado ao ASO e ao PCMSO da empresa.',
        },
      ]}
      sidebarTitle="Precisa incluir ECG no PCMSO da empresa?"
      sidebarHook="A SERMST realiza eletrocardiograma ocupacional em São Paulo integrado ao fluxo do ASO e ao protocolo do PCMSO. Para orçamento corporativo ou dúvida sobre o protocolo da sua empresa, fale com a equipe."
      sidebarCtaLabel="Solicitar orçamento"
      sidebarCtaHref="/contato"
      related={[
        { label: 'Exames complementares e laboratoriais', href: '/servicos/exames-complementares-laboratoriais' },
        { label: 'PCMSO: programa de controle médico de saúde ocupacional', href: '/saude/pcmso-programa-controle-medico' },
        { label: 'Tabela de exames admissionais por função e cargo', href: '/saude/tabela-exames-admissionais-por-funcao' },
        { label: 'Treinamento NR-10: segurança em eletricidade', href: '/treinamentos/nr-10-seguranca-eletrica' },
      ]}
      finalCta={{
        title: 'Eletrocardiograma ocupacional integrado ao PCMSO e ao ASO.',
        desc: 'A SERMST realiza ECG ocupacional em São Paulo Centro para trabalhadores com risco cardiovascular, acima de 40 anos ou em funções com risco elétrico, com laudo integrado ao fluxo de admissão e periódico.',
        label: 'Falar com a SERMST',
        href: '/contato',
      }}
    />
  );
}
