import Link from 'next/link';
import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-01 atualizada: o que mudou no PGR e no GRO | SERMST',
  description:
    'Entenda o que mudou na NR-01 atualizada, quem precisa revisar o PGR, quando o documento deve ser atualizado e como tratar riscos psicossociais no GRO.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-01-pgr-atualizada' },
  openGraph: {
    title: 'NR-01 atualizada: o que mudou no PGR e no GRO | SERMST',
    description:
      'Veja o que mudou na NR-01 atualizada, como isso afeta o PGR e o GRO e o que a empresa precisa revisar agora.',
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
        alt: 'Documentacao do Programa de Gerenciamento de Riscos PGR conforme NR-01 atualizada',
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
        dateModified: '2026-06-09',
      }}
      h1="NR-01 atualizada: o que mudou no PGR, no GRO e nos riscos psicossociais"
      intro="A NR-01 organiza as disposicoes gerais de SST e o Gerenciamento de Riscos Ocupacionais (GRO). Desde 26 de maio de 2026, os fatores de risco psicossociais relacionados ao trabalho passaram a exigir leitura mais explicita dentro do PGR. Aqui o foco e explicar a mudanca normativa, sem confundir esta pagina com a contratacao do servico de PGR."
      sections={[
        {
          title: 'O que e a NR-01 atualizada e por que ela importa para qualquer empresa com empregado CLT',
          body: (
            <>
              <p>
                A NR-01 estabelece as disposicoes gerais sobre Seguranca e Saude no Trabalho e
                estrutura o <strong>GRO - Gerenciamento de Riscos Ocupacionais</strong>. Como
                regra, esse gerenciamento precisa ser materializado em um{' '}
                <strong>PGR - Programa de Gerenciamento de Riscos</strong>, com inventario de
                riscos e plano de acao coerentes com a operacao.
              </p>
              <p>
                Na pratica, e a NR-01 que organiza a base da gestao de SST. E ela que conecta
                risco real da operacao, documento tecnico, rotina de prevencao,{' '}
                <Link
                  href="/saude/pcmso-programa-controle-medico"
                  className="font-semibold text-brand-700 underline decoration-accent-pink/60 underline-offset-4"
                >
                  PCMSO
                </Link>{' '}
                e consistencia das informacoes ocupacionais enviadas ao eSocial.
              </p>
              <p>
                Quando a empresa trata a NR-01 como formalidade, costuma cair no padrao mais caro
                de todos: PGR generico, exame ocupacional desconectado do risco real, lideranca sem
                evidencia de orientacao e documentacao que nao se sustenta em fiscalizacao.
              </p>
            </>
          ),
        },
        {
          title: 'O que mudou na NR-01 atualizada',
          body: (
            <>
              <p>
                A mudanca mais recente e a inclusao expressa dos{' '}
                <strong>fatores de risco psicossociais relacionados ao trabalho</strong> no GRO. A
                analise precisa considerar fatores que possam afetar a saude mental dos
                trabalhadores, como:
              </p>
              <ul>
                <li>Carga mental excessiva</li>
                <li>Pressao por produtividade fora do razoavel</li>
                <li>Assedio moral e sexual</li>
                <li>Conflitos cronicos nao resolvidos</li>
                <li>Inseguranca quanto ao vinculo e mudancas agressivas de contratacao</li>
                <li>Falta de autonomia ou de clareza no papel</li>
              </ul>
              <p>
                Tudo isso passa a ser fator que precisa estar mapeado no inventario de riscos, com
                plano de acao e acompanhamento.
              </p>
              <p>
                Isso nao transforma o PGR em texto generico sobre bem-estar. O que a norma exige e
                identificacao, avaliacao e medida de controle. Se a empresa sabe que existe pressao
                excessiva, conflito recorrente, meta inalcançavel, ambiguidade de papel ou
                lideranca desorganizada, precisa demonstrar como tratou esse risco dentro da
                governanca de SST.
              </p>
            </>
          ),
        },
        {
          title: 'Quem precisa cumprir e quem pode ter tratamento simplificado',
          body: (
            <>
              <p>
                Como regra, organizacoes com empregados precisam manter o gerenciamento de riscos
                ocupacionais coerente com a operacao. A NR-01 preve tratamentos simplificados e
                hipoteses especificas de dispensa de elaboracao do PGR: o MEI e dispensado de
                elaborar o programa, e determinadas ME e EPP de grau de risco 1 ou 2 tambem podem
                ser dispensadas quando prestam as informacoes digitais e nao identificam exposicoes
                ocupacionais a agentes fisicos, quimicos e biologicos.
              </p>
              <p>
                Essas dispensas nao significam ausencia de responsabilidade em SST. Sobre os
                fatores psicossociais especificamente, a nova redacao entrou em vigor em{' '}
                <strong>26 de maio de 2026</strong>. A empresa deve avaliar se o GRO e, quando
                aplicavel, o PGR identificam fatores relacionados ao trabalho e se o plano de acao
                precisa ser atualizado.
              </p>
              <p>
                Se houver duvida sobre enquadramento, uma forma simples de evitar erro logo no
                inicio e validar o CNAE e o grau de risco antes de revisar a documentacao. A{' '}
                <Link
                  href="/rh/calculadora-cnae-grau-de-risco"
                  className="font-semibold text-brand-700 underline decoration-accent-pink/60 underline-offset-4"
                >
                  calculadora de grau de risco por CNAE
                </Link>{' '}
                ajuda a filtrar esse cenario.
              </p>
            </>
          ),
        },
        {
          title: 'NR-01: o que a empresa precisa fazer agora',
          body: (
            <>
              <p>
                A melhor forma de reagir a NR-01 atualizada nao e correr para refazer tudo do zero.
                E fazer uma revisao estruturada do que ja existe e atacar as lacunas que realmente
                expoem a empresa.
              </p>
              <ol>
                <li>
                  <strong>Auditar o PGR atual.</strong> Verificar se o inventario de riscos
                  considera fatores psicossociais relacionados ao trabalho e se o plano de acao
                  precisa ser atualizado apos a vigencia de 26 de maio de 2026.
                </li>
                <li>
                  <strong>Mapear os riscos psicossociais reais.</strong> Por area, por funcao, por
                  turno. Pesquisa anonima com a equipe ajuda muito e a falta dela ja e evidencia
                  fraca.
                </li>
                <li>
                  <strong>Definir plano de acao.</strong> Para cada risco identificado, qual e a
                  medida de controle, quem e o responsavel e qual o prazo.
                </li>
                <li>
                  <strong>Atualizar PCMSO em paralelo.</strong> O PCMSO precisa refletir os mesmos
                  riscos do PGR. Se um menciona risco psicossocial e outro nao, ha inconsistência
                  tecnica.
                </li>
                <li>
                  <strong>Documentar e treinar liderancas.</strong> Gerentes e supervisores
                  precisam entender o que mudou e ter evidencia formal disso.
                </li>
                <li>
                  <strong>Cronograma de revisao.</strong> PGR nao e &quot;feito uma vez&quot;. A avaliacao
                  de riscos deve ser revista no maximo a cada 2 anos, ou antes quando ocorrerem as
                  situacoes previstas na NR-01.
                </li>
              </ol>
            </>
          ),
        },
        {
          title: 'PGR vale por quanto tempo e quando precisa ser revisto',
          body: (
            <>
              <p>
                Essa e uma das duvidas mais comuns sobre NR-01. O ponto central e o seguinte:{' '}
                <strong>PGR nao tem validade fixa de cartorio</strong>. O que existe e a
                obrigacao de revisar a avaliacao de riscos no maximo a cada 2 anos, ou antes disso
                quando houver mudancas relevantes na operacao, acidente, doenca relacionada ao
                trabalho, alteracao de processo, layout, equipe, jornada ou medidas de controle.
              </p>
              <p>
                Organizacoes certificadas em sistema de gestao de SST podem ter prazo de revisao de
                ate 3 anos, mas isso nao autoriza deixar o documento parado enquanto a operacao
                muda. Se a empresa terceirizou uma etapa, ampliou turno, mudou lideranca critica,
                abriu frente operacional nova ou identificou adoecimento ligado a organizacao do
                trabalho, o PGR precisa ser revisto na pratica.
              </p>
              <p>
                Em outras palavras: o PGR deixa de ser defensavel muito antes de &quot;vencer&quot; quando
                ele para de refletir a realidade da empresa.
              </p>
            </>
          ),
        },
        {
          title: 'Quanto custa ignorar a atualizacao da NR-01',
          body: (
            <>
              <p>Empresa sem PGR atualizado responde em tres frentes ao mesmo tempo:</p>
              <ul>
                <li>
                  <strong>Multa direta do MTE</strong> - pode chegar a R$ 6 mil por infracao,
                  multiplicada por trabalhador exposto.
                </li>
                <li>
                  <strong>Inconsistencia no eSocial</strong> quando o evento S-2240 nao reflete
                  corretamente os riscos ocupacionais.
                </li>
                <li>
                  <strong>Responsabilizacao em acao trabalhista</strong> quando a documentacao e as
                  medidas de prevencao nao demonstram o cumprimento do dever de cuidado.
                </li>
              </ul>
              <p>
                Em qualquer dos tres, o custo do passivo e multiplo do que custaria atualizar o
                documento.
              </p>
              <p>
                Se o objetivo for sair do improviso e revisar o programa com criterio tecnico, o
                caminho mais direto e comparar o guia com a pagina do{' '}
                <Link
                  href="/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo"
                  className="font-semibold text-brand-700 underline decoration-accent-pink/60 underline-offset-4"
                >
                  servico completo de PGR
                </Link>{' '}
                e alinhar o que precisa ser corrigido na operacao real.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'O que a empresa precisa fazer com a NR-01 atualizada?',
          a: 'Precisa revisar o GRO e, quando aplicavel, o PGR para confirmar se o inventario de riscos, o plano de acao, a lideranca treinada e o PCMSO continuam coerentes com a operacao real, incluindo os fatores de risco psicossociais relacionados ao trabalho.',
        },
        {
          q: 'Quem assina o PGR?',
          a: 'O PGR e elaborado por profissional legalmente habilitado, conforme o escopo tecnico exigido para a atividade. A responsabilidade tecnica e do profissional; a responsabilidade do conteudo refletir a realidade e da empresa.',
        },
        {
          q: 'PGR e PPRA sao a mesma coisa?',
          a: 'Nao. O PPRA foi extinto em 2022. O PGR e o substituto, mais amplo e integrado ao gerenciamento de riscos ocupacionais da NR-01. Trocar apenas o nome do documento nao resolve o problema.',
        },
        {
          q: 'PGR e obrigatorio para todas as empresas?',
          a: 'Como regra, empresas com empregados precisam manter o gerenciamento de riscos ocupacionais coerente com a operacao. Existem hipoteses especificas de dispensa de elaboracao do PGR para MEI e para determinadas ME e EPP de grau de risco 1 ou 2, mas isso nao elimina a responsabilidade em SST.',
        },
        {
          q: 'Como gerenciar risco psicossocial sem virar terapia coletiva?',
          a: 'A NR-01 nao exige terapia. Exige identificacao, avaliacao e medidas de controle organizacional, como clareza de papel, distribuicao de carga, canal de denuncia, treinamento de lideranca e organizacao do trabalho.',
        },
        {
          q: 'Quanto tempo leva para fazer um PGR completo?',
          a: 'Empresa com ate 50 funcionarios costuma levar de 2 a 4 semanas. Empresa de medio porte pode levar de 6 a 10 semanas. O prazo depende da complexidade da operacao e da disponibilidade da lideranca para participar da revisao.',
        },
        {
          q: 'PGR feito uma vez vale por quanto tempo?',
          a: 'A avaliacao de riscos deve ser revista no maximo a cada 2 anos e tambem quando ocorrerem mudancas relevantes na operacao, acidentes, doencas relacionadas ao trabalho ou outras situacoes previstas na NR-01. Organizacoes certificadas em sistema de gestao de SST podem ter prazo de ate 3 anos.',
        },
        {
          q: 'Qual a diferenca entre GRO e PGR?',
          a: 'O GRO e o sistema de gerenciamento de riscos ocupacionais previsto pela NR-01. O PGR e a forma documental mais comum de materializar esse gerenciamento, com inventario de riscos e plano de acao alinhados a operacao da empresa.',
        },
      ]}
      sidebarTitle="PGR atualizado, com riscos psicossociais?"
      sidebarHook="A SERMST faz auditoria gratuita do seu PGR atual. Se estiver desatualizado, mostramos exatamente o que precisa ser revisto, sem compromisso."
      sidebarCtaLabel="Auditar meu PGR"
      sidebarCtaHref="/contato"
      finalCta={{
        title: 'Sua empresa ja revisou a NR-01 do jeito certo?',
        desc: 'Se o PGR foi feito antes da mudanca, esta generico ou nao conversa com PCMSO, eSocial e rotina da lideranca, a SERMST faz uma leitura tecnica do cenario antes de propor correcao.',
        label: 'Solicitar auditoria do PGR',
        href: '/contato',
      }}
      related={[
        { label: 'Servico completo de PGR (NR-01)', href: '/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo' },
        { label: 'Calculadora de grau de risco por CNAE', href: '/rh/calculadora-cnae-grau-de-risco' },
        { label: 'O que e PGR? Significado e para que serve', href: '/dicionario/o-que-e-pgr' },
        { label: 'PCMSO NR-07: programa', href: '/saude/pcmso-programa-controle-medico' },
        { label: 'NR-15: Insalubridade', href: '/normas/nr-15-insalubridade' },
        { label: 'NR-16: Periculosidade', href: '/normas/nr-16-periculosidade' },
      ]}
    />
  );
}
