import Link from 'next/link';
import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-01: PGR e riscos psicossociais | SERMST',
  description:
    'Veja como inserir riscos psicossociais no PGR da NR-01, quem faz ou assina, quando revisar e o que muda no GRO desde 26 de maio de 2026.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-01-pgr-atualizada' },
  openGraph: {
    title: 'NR-01: PGR e riscos psicossociais | SERMST',
    description:
      'Entenda como a NR-01 afeta PGR, GRO, riscos psicossociais, validade do programa, eSocial e responsabilidade da empresa.',
    url: 'https://sermst.com.br/normas/nr-01-pgr-atualizada',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function NR01Page() {
  return (
    <BlockbusterArticle
      coverImage={{
        src: '/images/articles/normas-nr.jpg',
        alt: 'Documentação do Programa de Gerenciamento de Riscos conforme a NR-01 atualizada',
      }}
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="← Normas"
      hubHref="/normas"
      pageUrl="https://sermst.com.br/normas/nr-01-pgr-atualizada"
      badgeText="NR-01"
      readingTime="11 min"
      author={{
        name: 'Felipe Sannino',
        jobTitle: 'Advogado - Direito do Trabalho e SST · OAB/SP 430.824',
        url: 'https://sermst.com.br/equipe/felipe-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-07-13',
      }}
      showTableOfContents
      h1="NR-01 atualizada: o que mudou no PGR, no GRO e nos riscos psicossociais"
      intro="A NR-01 organiza as disposições gerais de SST e o Gerenciamento de Riscos Ocupacionais (GRO). Desde 26 de maio de 2026, o texto cita expressamente os fatores de risco psicossociais relacionados ao trabalho. Veja como tratá-los no gerenciamento, quem deve participar, quando revisar a avaliação e quais registros devem ser mantidos."
      quickAnswer={
        <p>
          A <strong>NR-01</strong> organiza o <strong>GRO, Gerenciamento de Riscos Ocupacionais</strong>, e o <strong>PGR, Programa de Gerenciamento de Riscos</strong>. A empresa precisa identificar perigos, avaliar riscos, manter o inventário e o plano de ação e rever a avaliação quando a operação muda. Desde <strong>26 de maio de 2026</strong>, os <strong>fatores de risco psicossociais relacionados ao trabalho</strong> aparecem expressamente nessa obrigação.
        </p>
      }
      sections={[
        {
          title: 'O que é a NR-01 atualizada e por que ela importa',
          body: (
            <>
              <p>
                A NR-01 estabelece as disposições gerais sobre Segurança e Saúde no Trabalho e
                estrutura o <strong>GRO, Gerenciamento de Riscos Ocupacionais</strong>. Como
                regra, esse gerenciamento precisa ser materializado em um{' '}
                <strong>PGR, Programa de Gerenciamento de Riscos</strong>, com inventário de
                riscos e plano de ação coerentes com a operação.
              </p>
              <p>
                Na prática, é a NR-01 que organiza a base da gestão de SST. Ela conecta
                risco real da operação, documento técnico, rotina de prevenção,{' '}
                <Link
                  href="/saude/pcmso-programa-controle-medico"
                  className="font-semibold text-brand-700 underline decoration-accent-pink/60 underline-offset-4"
                >
                  PCMSO
                </Link>{' '}
                e a consistência das informações ocupacionais enviadas ao eSocial.
              </p>
              <p>
                Quando o PGR não reflete a operação, surgem divergências entre os riscos avaliados,
                os exames definidos no PCMSO, os treinamentos e as informações enviadas ao eSocial.
              </p>
            </>
          ),
        },
        {
          title: 'O que mudou na NR-01 atualizada',
          body: (
            <>
              <p>
                A mudança mais recente é a inclusão expressa dos{' '}
                <strong>fatores de risco psicossociais relacionados ao trabalho</strong> no GRO. A
                análise precisa considerar aspectos da organização do trabalho que possam afetar a saúde dos
                trabalhadores, como:
              </p>
              <ul>
                <li>Carga mental excessiva</li>
                <li>Pressão por produtividade incompatível com os recursos disponíveis</li>
                <li>Assédio moral e sexual</li>
                <li>Conflitos crônicos não resolvidos</li>
                <li>Insegurança quanto ao vínculo e mudanças mal conduzidas na organização do trabalho</li>
                <li>Falta de autonomia ou de clareza no papel</li>
              </ul>
              <p>
                Esses são exemplos. A avaliação deve partir das condições reais de trabalho e registrar os fatores identificados, a avaliação dos riscos e as medidas de prevenção aplicáveis.
              </p>
              <p>
                O PGR não deve virar um texto genérico sobre bem-estar. A norma exige identificação,
                avaliação e medidas de prevenção. Sobrecarga, conflito recorrente, metas inviáveis,
                ambiguidade de papel e falhas na organização do trabalho precisam ser avaliados no
                contexto em que ocorrem.
              </p>
            </>
          ),
        },
        {
          title: 'Quem precisa cumprir e quem pode ter tratamento simplificado',
          body: (
            <>
              <p>
                Como regra, organizações com empregados precisam manter o gerenciamento de riscos
                ocupacionais coerente com a operação. A NR-01 prevê tratamento diferenciado e
                hipóteses específicas de dispensa de elaboração do PGR: o MEI é dispensado de
                elaborar o programa, e determinadas ME e EPP de grau de risco 1 ou 2 também podem
                ser dispensadas quando prestam as informações digitais e não identificam exposições
                ocupacionais a agentes físicos, químicos e biológicos.
              </p>
              <p>
                Essas dispensas não significam ausência de responsabilidade em SST. Sobre os
                fatores psicossociais especificamente, a nova redação entrou em vigor em{' '}
                <strong>26 de maio de 2026</strong>. A empresa deve avaliar se o GRO e, quando
                aplicável, o PGR identificam fatores relacionados ao trabalho e se o plano de ação
                precisa ser atualizado.
              </p>
              <p>
                Se houver dúvida sobre enquadramento, uma forma simples de evitar erro logo no
                início é validar o CNAE e o grau de risco antes de revisar a documentação. A{' '}
                <Link
                  href="/rh/calculadora-cnae-grau-de-risco"
                  className="font-semibold text-brand-700 underline decoration-accent-pink/60 underline-offset-4"
                >
                  calculadora de grau de risco por CNAE
                </Link>{' '}
                ajuda nessa conferência inicial, mas não substitui a avaliação das atividades reais.
              </p>
            </>
          ),
        },
        {
          title: 'Riscos psicossociais no PGR: como inserir na prática',
          body: (
            <>
              <p>
                Muitas empresas entenderam que a NR-01 mudou, mas ainda travam na pergunta mais
                importante: <strong>como inserir riscos psicossociais no PGR</strong> sem criar um
                documento genérico. O caminho é demonstrar que a empresa avaliou a
                organização real do trabalho.
              </p>
              <ol>
                <li>
                  <strong>Identificar fatores ligados ao trabalho.</strong> Exemplo: sobrecarga,
                  assédio, conflito recorrente, metas inviáveis, falta de clareza de papel,
                  jornadas desorganizadas ou pressão excessiva.
                </li>
                <li>
                  <strong>Registrar no inventário de riscos.</strong> O risco deve aparecer
                  conectado a área, função, grupo exposto e situação que pode gerar dano.
                </li>
                <li>
                  <strong>Definir medidas de controle.</strong> Treinamento de liderança, canal de
                  denúncia, revisão de metas, fluxo de comunicação, ajuste de processo e
                  acompanhamento formal são exemplos possíveis.
                </li>
                <li>
                  <strong>Criar plano de ação com dono e prazo.</strong> Um PGR fraco apenas cita o
                  risco. Um PGR útil mostra quem vai agir, até quando e como a medida será acompanhada.
                </li>
                <li>
                  <strong>Guardar evidências.</strong> Lista de presença, ata, pesquisa interna,
                  plano de melhoria e registros das providências ajudam a demonstrar o que foi feito.
                </li>
              </ol>
              <p>
                O ponto central é simples: o fator psicossocial precisa estar relacionado ao
                trabalho e receber uma resposta de gestão. Não é diagnóstico clínico individual nem
                promessa de eliminar todo estresse da empresa.
              </p>
            </>
          ),
        },
        {
          title: 'Quem pode fazer ou assinar o PGR da NR-01',
          body: (
            <>
              <p>
                Uma dúvida frequente é se o técnico de segurança do trabalho pode elaborar ou assinar o
                PGR. A resposta depende do escopo, da complexidade da empresa, dos riscos
                identificados e das atribuições profissionais aplicáveis.
              </p>
              <p>
                A NR-01 não cria uma exigência geral de assinatura do PGR por uma única categoria.
                A organização deve atribuir as responsabilidades a pessoas com conhecimento e
                qualificação compatíveis, respeitando as atribuições profissionais e as exigências
                específicas de outras normas e laudos.
              </p>
              <p>
                Mais importante do que procurar uma assinatura genérica é verificar se a equipe
                envolvida tem competência para avaliar os riscos existentes, se o documento descreve
                a operação real e se as medidas propostas podem ser executadas.
              </p>
            </>
          ),
        },
        {
          title: 'NR-01: o que a empresa precisa fazer agora',
          body: (
            <>
              <p>
                Não é necessário refazer tudo sem antes avaliar o que já existe. Comece por uma
                revisão estruturada do inventário, do plano de ação e das mudanças ocorridas na operação.
              </p>
              <ol>
                <li>
                  <strong>Auditar o PGR atual.</strong> Verificar se o inventário de riscos
                  considera fatores psicossociais relacionados ao trabalho e se o plano de ação
                  precisa ser atualizado após a vigência de 26 de maio de 2026.
                </li>
                <li>
                  <strong>Mapear os riscos psicossociais reais.</strong> Por área, por função, por
                  turno e por grupo de trabalhadores expostos. A ferramenta de coleta deve ser escolhida
                  conforme a realidade da organização e ter critérios documentados.
                </li>
                <li>
                  <strong>Definir plano de ação.</strong> Para cada risco identificado, qual e a
                  medida de prevenção, quem é o responsável e qual é o prazo.
                </li>
                <li>
                  <strong>Atualizar PCMSO em paralelo.</strong> O PCMSO precisa refletir os mesmos
                  riscos do PGR. Se um menciona risco psicossocial e outro não, há inconsistência
                  técnica.
                </li>
                <li>
                  <strong>Documentar e orientar as lideranças.</strong> Gerentes e supervisores
                  precisam entender o que mudou e ter evidência formal disso.
                </li>
                <li>
                  <strong>Cronograma de revisão.</strong> O PGR não é elaborado uma única vez. A avaliação
                  de riscos deve ser revista no máximo a cada 2 anos, ou antes quando ocorrerem as
                  situações previstas na NR-01.
                </li>
              </ol>
            </>
          ),
        },
        {
          title: 'Fiscalização da NR-01: o que precisa estar demonstrado',
          body: (
            <>
              <p>
                Em fiscalização, a empresa precisa demonstrar mais do que a existência
                de um arquivo chamado PGR. Devem existir inventário de riscos,
                plano de ação, responsáveis, prazos, evidências das medidas preventivas e coerência
                entre PGR, PCMSO, treinamentos e rotina operacional.
              </p>
              <p>
                Nos riscos psicossociais, a fragilidade aparece quando a empresa declara que não
                existe risco sem ter avaliado a organização do trabalho, a comunicação,
                ocorrências internas, afastamentos, denúncias e mudanças organizacionais
                relevantes. O método e os critérios adotados devem ser documentados.
              </p>
            </>
          ),
        },
        {
          title: 'Decisão do STF sobre sanções da NR-01: situação em julho de 2026',
          body: (
            <>
              <p>
                Em decisão liminar divulgada em 25 de junho de 2026, o ministro André Mendonça, do STF,
                suspendeu por 90 dias a aplicação de multas e outras sanções ligadas aos dispositivos
                da NR-01 sobre fatores de risco psicossociais. A medida abriu uma etapa de conciliação
                para discutir critérios de aplicação e ainda será submetida ao Plenário.
              </p>
              <p>
                A liminar não retirou a vigência das diretrizes gerais. A empresa deve continuar
                identificando, avaliando e prevenindo os riscos relacionados ao trabalho. O que ficou
                temporariamente suspenso foi a aplicação das sanções alcançadas pela decisão.
              </p>
              <p>
                Como a situação processual pode mudar, a página deve ser revista após o referendo do
                Plenário. Enquanto isso, a organização pode revisar inventário, método, plano de ação
                e alinhamento com o PCMSO. Fonte:{' '}
                <a
                  href="https://noticias.stf.jus.br/postsnoticias/stf-suspende-sancoes-da-nr-1-e-abre-conciliacao-sobre-regras-de-riscos-psicossociais-no-trabalho/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-brand-700 underline decoration-accent-pink/60 underline-offset-4"
                >
                  notícia oficial do STF sobre a ADPF 1316
                </a>
                .
              </p>
            </>
          ),
        },
        {
          title: 'PGR, NR-01 e eSocial: qual é a ligação',
          body: (
            <>
              <p>
                A NR-01 também conversa com o eSocial porque os riscos ocupacionais informados pela
                empresa precisam ser coerentes com os documentos de SST. Quando o PGR, o PCMSO e o
                evento S-2240 contam histórias diferentes, surgem inconsistências nos registros.
              </p>
              <p>
                Isso não significa que todo detalhe do PGR vai automaticamente para o eSocial, mas
                significa que a base técnica precisa estar alinhada. Se o risco existe na operação,
                ele deve ser avaliado corretamente; se a empresa diz que não existe, precisa ter
                fundamento para sustentar essa conclusão.
              </p>
            </>
          ),
        },
        {
          title: 'PGR vale por quanto tempo e quando precisa ser revisto',
          body: (
            <>
              <p>
                Essa é uma das dúvidas mais comuns sobre a NR-01. O PGR não tem uma data única de
                vencimento. A norma exige a revisão da avaliação de riscos no máximo a cada 2 anos, ou antes disso
                quando houver mudanças relevantes na operação, acidente, doença relacionada ao
                trabalho, alteração de processo, layout, equipe, jornada ou medidas de controle.
              </p>
              <p>
                Organizações certificadas em sistema de gestão de SST podem ter prazo de revisão de
                até 3 anos, mas isso não autoriza deixar o documento parado enquanto a operação
                muda. Se a empresa terceirizou uma etapa, ampliou turno, mudou liderança crítica,
                abriu uma nova frente operacional ou identificou adoecimento ligado à organização do
                trabalho, o PGR precisa ser revisto na prática.
              </p>
              <p>
                Mesmo dentro do prazo máximo, a avaliação deve ser revista quando deixa de refletir
                a realidade da empresa.
              </p>
            </>
          ),
        },
        {
          title: 'Consequências de manter o PGR desatualizado',
          body: (
            <>
              <p>Um PGR desatualizado pode causar problemas em diferentes frentes:</p>
              <ul>
                <li>
                  <strong>Fiscalização.</strong> A autoridade pode adotar as medidas administrativas
                  cabíveis conforme a obrigação descumprida e as circunstâncias do caso.
                </li>
                <li>
                  <strong>Inconsistência no eSocial.</strong> O evento S-2240 pode deixar de refletir
                  corretamente os riscos ocupacionais.
                </li>
                <li>
                  <strong>Dificuldade de resposta.</strong> Em acidente, auditoria ou processo, a
                  documentação pode não demonstrar quais riscos foram avaliados e quais medidas foram adotadas.
                </li>
              </ul>
              <p>
                Para revisar o programa com critério técnico, consulte também a página do{' '}
                <Link
                  href="/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo"
                  className="font-semibold text-brand-700 underline decoration-accent-pink/60 underline-offset-4"
                >
                  serviço de PGR
                </Link>{' '}
                e confirme o que precisa ser atualizado na operação.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'Como inserir riscos psicossociais no PGR?',
          a: 'A empresa deve identificar fatores relacionados ao trabalho, registrá-los no inventário, avaliar os riscos, definir medidas de prevenção, indicar responsáveis e prazos no plano de ação e guardar evidências das providências adotadas.',
        },
        {
          q: 'Quando os riscos psicossociais da NR-01 entram em vigor?',
          a: 'A menção explícita aos fatores de risco psicossociais relacionados ao trabalho passou a valer em 26 de maio de 2026. A organização deve conferir se o GRO e o PGR tratam esse ponto de forma coerente.',
        },
        {
          q: 'O STF suspendeu a NR-01 sobre riscos psicossociais?',
          a: 'Não. A liminar divulgada pelo STF em 25 de junho de 2026 suspendeu por 90 dias multas e outras sanções alcançadas pela decisão, mas manteve válidas as diretrizes gerais de prevenção. A medida ainda será submetida ao Plenário.',
        },
        {
          q: 'O que a empresa precisa fazer com a NR-01 atualizada?',
          a: 'É preciso revisar o GRO e, quando aplicável, o PGR para confirmar se o inventário, o plano de ação, as orientações às lideranças e o PCMSO continuam coerentes com a operação, incluindo os fatores de risco psicossociais relacionados ao trabalho.',
        },
        {
          q: 'Quem assina o PGR?',
          a: 'A NR-01 não reserva todo PGR a uma única categoria profissional. A organização deve designar pessoas com conhecimento e qualificação compatíveis, respeitando as atribuições profissionais e as exigências específicas de outras normas e laudos.',
        },
        {
          q: 'Técnico de segurança do trabalho pode elaborar o PGR?',
          a: 'Pode participar da elaboração dentro de suas atribuições e qualificações. O escopo e os riscos podem exigir outros profissionais ou documentos com responsabilidade técnica específica.',
        },
        {
          q: 'PGR e PPRA são a mesma coisa?',
          a: 'Não. O PPRA deixou de ser o programa geral de prevenção com a entrada do GRO e do PGR. O PGR tem inventário de riscos e plano de ação e deve refletir o processo atual de gerenciamento da NR-01.',
        },
        {
          q: 'PGR é obrigatório para todas as empresas?',
          a: 'Há hipóteses específicas de dispensa de elaboração do PGR para MEI e para determinadas ME e EPP de grau de risco 1 ou 2. A dispensa não elimina as demais responsabilidades de SST nem autoriza ignorar riscos presentes na atividade.',
        },
        {
          q: 'Como gerenciar risco psicossocial sem virar terapia coletiva?',
          a: 'A NR-01 não exige terapia. Exige identificação, avaliação e medidas de controle organizacional, como clareza de papel, distribuição de carga, canal de denúncia, treinamento de liderança e organização do trabalho.',
        },
        {
          q: 'Quanto tempo leva para fazer um PGR completo?',
          a: 'O prazo depende do número de estabelecimentos, funções, grupos de trabalhadores, riscos e avaliações necessárias. A proposta deve informar as etapas e o cronograma após o levantamento inicial.',
        },
        {
          q: 'PGR feito uma vez vale por quanto tempo?',
          a: 'A avaliação de riscos deve ser revista no máximo a cada 2 anos e também nas situações previstas na NR-01, como mudanças relevantes, acidentes e doenças relacionadas ao trabalho. Organizações certificadas em sistema de gestão de SST podem ter prazo de até 3 anos.',
        },
        {
          q: 'Qual é a diferença entre GRO e PGR?',
          a: 'O GRO é o processo de gerenciamento de riscos ocupacionais previsto na NR-01. O PGR materializa esse processo por meio do inventário de riscos e do plano de ação.',
        },
        {
          q: 'PGR entra no eSocial?',
          a: 'O PGR não é enviado inteiro ao eSocial, mas os riscos ocupacionais e as informações de SST precisam ser coerentes com a base técnica da empresa. Divergências entre PGR, PCMSO e S-2240 devem ser corrigidas.',
        },
      ]}
      maxFaqItems={12}
      sidebarTitle="PGR atualizado, com riscos psicossociais?"
      sidebarHook="A SERMST faz uma revisão inicial do PGR e aponta os itens que precisam ser confirmados ou atualizados."
      sidebarCtaLabel="Auditar meu PGR"
      sidebarCtaHref="/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo"
      finalCta={{
        title: 'Sua empresa já revisou o PGR após a mudança da NR-01?',
        desc: 'A SERMST pode conferir inventário, plano de ação, alinhamento com o PCMSO e tratamento dos fatores de risco psicossociais relacionados ao trabalho.',
        label: 'Solicitar auditoria do PGR',
        href: '/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo',
      }}
      related={[
        { label: 'Serviço completo de PGR (NR-01)', href: '/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo' },
        { label: 'Calculadora de grau de risco por CNAE', href: '/rh/calculadora-cnae-grau-de-risco' },
        { label: 'O que é PGR? Significado e para que serve', href: '/dicionario/o-que-e-pgr' },
        { label: 'PCMSO NR-07: programa', href: '/saude/pcmso-programa-controle-medico' },
        { label: 'NR-15: Insalubridade', href: '/normas/nr-15-insalubridade' },
        { label: 'NR-16: Periculosidade', href: '/normas/nr-16-periculosidade' },
      ]}
    />
  );
}
