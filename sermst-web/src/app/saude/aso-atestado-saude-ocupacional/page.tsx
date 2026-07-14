import type { Metadata } from 'next';
import Link from 'next/link';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'ASO: o que é e quando emitir | SERMST',
  description:
    'Guia prático sobre ASO: quando emitir, o que precisa constar, relação com o eSocial e como o documento protege a empresa em admissões, periódicos e demissões.',
  alternates: { canonical: 'https://sermst.com.br/saude/aso-atestado-saude-ocupacional' },
  openGraph: {
    title: 'ASO: o que é e quando emitir | SERMST',
    description:
      'Entenda o Atestado de Saúde Ocupacional (ASO), quando é obrigatório, o que deve constar e como ele se integra ao eSocial para proteger empresa e trabalhador.',
    url: 'https://sermst.com.br/saude/aso-atestado-saude-ocupacional',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function ASOPage() {
  return (
    <BlockbusterArticle
      hubLabel="Saúde Ocupacional"
      hubLabelShort="← Saúde Ocupacional"
      hubHref="/saude"
      pageUrl="https://sermst.com.br/saude/aso-atestado-saude-ocupacional"
      coverImage={{
        src: '/images/articles/aso-atestado.jpg',
        alt: 'Atestado de saúde ocupacional ASO em rotina de medicina do trabalho',
      }}
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-07-07',
      }}
      h1="ASO: o que é, quando emitir e por que ele protege a empresa"
      intro="O Atestado de Saúde Ocupacional fecha o ciclo de cada exame ocupacional. Se a dúvida é apenas conceitual, o dicionário resolve rápido. Aqui, o foco é outro: quando emitir, o que precisa constar, como o ASO conversa com PCMSO, NR-07 e eSocial e onde a empresa se expõe quando esse documento está errado, vencido ou desconectado da operação."
      sections={[
        {
          title: 'O que é o ASO',
          body: (
            <>
              <p>
                O ASO é o documento emitido pelo <strong>médico que realiza o exame clínico ocupacional</strong>:
                admissional, periódico, de retorno ao trabalho, de mudança de risco ocupacional ou demissional. Ele
                registra formalmente se o trabalhador está <strong>apto ou inapto</strong> para exercer a função, com
                base nos exames clínicos e complementares realizados.
              </p>
              <p>
                Tecnicamente, o ASO não é só um papel. Ele é a <strong>evidência documental</strong> de que a empresa
                avaliou a saúde do trabalhador naquele momento. É isso que fortalece a defesa do empregador em
                fiscalizações, discussões trabalhistas e revisões previdenciárias.
              </p>
            </>
          ),
        },
        {
          title: 'Como o ASO entra na rotina ocupacional',
          body: (
            <>
              <p>O ASO pode ser entendido em três níveis:</p>
              <ul>
                <li><strong>Conceito:</strong> é o atestado emitido ao final do exame clínico ocupacional.</li>
                <li><strong>Conteúdo:</strong> registra os dados exigidos pela NR-07 e a conclusão de aptidão para a função.</li>
                <li><strong>Rotina:</strong> precisa ser emitido no momento correto, controlado pela empresa e informado ao eSocial quando aplicável.</li>
              </ul>
              <p>
                A definição resumida está no <Link href="/dicionario/o-que-e-aso">verbete do dicionário sobre ASO</Link>,
                e a base normativa está no guia da <Link href="/normas/o-que-e-nr-07">NR-07</Link>.
              </p>
            </>
          ),
        },
        {
          title: 'Quando o ASO é obrigatório',
          body: (
            <ul>
              <li><strong>Exame admissional:</strong> antes do início das atividades. Sem ASO admissional, o trabalhador não deveria começar a trabalhar.</li>
              <li><strong>Exame periódico:</strong> conforme a periodicidade definida no PCMSO para o cargo.</li>
              <li><strong>Exame de retorno ao trabalho:</strong> antes do retorno quando o afastamento por doença ou acidente for igual ou superior a 30 dias.</li>
              <li><strong>Exame de mudança de risco ocupacional:</strong> antes da mudança, adequando o controle médico aos novos riscos.</li>
              <li><strong>Exame demissional:</strong> dentro do fluxo correto de desligamento, observando os critérios de dispensa previstos na norma.</li>
            </ul>
          ),
        },
        {
          title: 'O que deve constar no ASO',
          body: (
            <>
              <p>A NR-07 define os campos obrigatórios do ASO:</p>
              <ul>
                <li>Nome e CPF do trabalhador</li>
                <li>Nome e CNPJ da empresa</li>
                <li>Função e setor do trabalhador</li>
                <li>Riscos ocupacionais específicos do cargo</li>
                <li>Indicação dos procedimentos médicos realizados</li>
                <li>Conclusão: apto ou inapto para a função</li>
                <li>Nome e CRM do médico responsável pelo PCMSO, quando houver</li>
                <li>Data, CRM e assinatura do médico que realizou o exame clínico</li>
              </ul>
              <p>ASO sem todos esses campos é tecnicamente fraco, mesmo que o atendimento médico tenha existido.</p>
            </>
          ),
        },
        {
          title: 'ASO, PCMSO e NR-07: por que não dá para separar',
          body: (
            <>
              <p>
                O ASO não vive sozinho. Ele depende do <Link href="/saude/pcmso-programa-controle-medico">PCMSO</Link>,
                que organiza os exames conforme os riscos, e da <Link href="/normas/o-que-e-nr-07">NR-07</Link>, que
                dá a base legal do monitoramento da saúde ocupacional.
              </p>
              <p>
                Quando o programa médico, o risco informado e o ASO emitido contam histórias diferentes, a empresa fica
                sem coerência documental. E é exatamente aí que fiscalização, perícia e eSocial costumam encontrar problema.
              </p>
            </>
          ),
        },
        {
          title: 'ASO e eSocial: o evento S-2220',
          body: (
            <>
              <p>
                O <strong>evento S-2220</strong> registra no eSocial as informações dos exames ocupacionais aplicáveis.
                O envio precisa conversar com o ASO físico, com o protocolo do PCMSO e com a realidade da função.
              </p>
              <p>
                Se o exame enviado ao eSocial divergir do que está no ASO, ou se o ASO não refletir corretamente a
                exposição do trabalhador, a inconsistência aparece. Empresas que acumulam eventos atrasados criam um
                passivo silencioso que cresce com o tempo.
              </p>
            </>
          ),
        },
        {
          title: 'ASO vencido: o risco que muita empresa subestima',
          body: (
            <>
              <p>
                ASO periódico vencido significa que, do ponto de vista documental, a empresa <strong>perde evidência</strong>
                de que acompanhou a saúde do trabalhador no período certo. Se surgir qualquer questionamento, o vazio
                de monitoramento enfraquece a defesa.
              </p>
              <p>
                Em empresas com alta rotatividade ou muitos empregados, controlar isso manualmente costuma falhar.
                O caminho seguro é organizar vencimentos com lógica de programa e não só com agenda de última hora.
              </p>
            </>
          ),
        },
        {
          title: 'ASO com resultado inapto: o que fazer',
          body: (
            <>
              <p>
                Quando o ASO conclui <strong>inapto</strong>, o trabalhador não pode exercer aquela função até que a
                situação seja tratada adequadamente. O médico do trabalho pode indicar tratamento, readaptação, mudança
                de função ou afastamento, conforme o caso.
              </p>
              <p>
                O erro mais grave é tratar o documento como mero obstáculo burocrático e pressionar por aptidão sem base
                técnica. Isso transfere risco direto para a empresa.
              </p>
            </>
          ),
        },
        {
          title: 'Quando a empresa precisa emitir e controlar ASOs',
          body: (
            <>
              <p>
                A empresa pode precisar emitir um ASO admissional, controlar os vencimentos dos periódicos, alinhar os
                registros ao eSocial ou corrigir falhas do PCMSO. Cada situação exige informações e prazos próprios.
              </p>
              <p>
                Para organizar o atendimento, consulte o serviço de{' '}
                <Link href="/servicos/exame-admissional-expresso/sao-paulo">exame admissional com ASO</Link> ou a de{' '}
                <Link href="/servicos/pcmso-nr07-programa/sao-paulo">gestão de PCMSO</Link>, conforme o problema principal.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'O ASO admissional pode ser feito depois que o funcionário começou a trabalhar?',
          a: 'Não. A lógica da NR-07 exige que o exame admissional e o ASO venham antes do início das atividades. Colocar alguém para trabalhar sem esse documento enfraquece a proteção da empresa.',
        },
        {
          q: 'Qual médico pode emitir ASO?',
          a: 'O ASO é emitido pelo médico que realizou o exame clínico ocupacional. O documento também deve apontar o médico responsável pelo PCMSO, quando houver.',
        },
        {
          q: 'O trabalhador tem direito a receber uma via do ASO?',
          a: 'Sim. A empresa precisa disponibilizar o documento ao trabalhador e manter evidência dessa entrega ou disponibilização.',
        },
        {
          q: 'ASO de empresa anterior tem validade para o novo vínculo?',
          a: 'Não. Cada contratação exige avaliação própria, porque os riscos da nova função e da nova empresa podem ser diferentes.',
        },
        {
          q: 'Qual a diferença entre ASO e atestado médico comum?',
          a: 'O atestado comum costuma justificar ausência por motivo de saúde. O ASO registra aptidão ocupacional para uma função dentro da lógica da medicina do trabalho.',
        },
      ]}
      sidebarTitle="Seus ASOs estão em dia e coerentes com o eSocial?"
      sidebarHook="A SERMST emite ASO com lógica ocupacional, apoia o controle de vencimentos e ajuda a reduzir inconsistências entre documento, PCMSO e S-2220."
      sidebarCtaLabel="Organizar meus ASOs"
      sidebarCtaHref="/servicos/exame-admissional-expresso/sao-paulo"
      related={[
        { label: 'ASO no dicionário: definição rápida', href: '/dicionario/o-que-e-aso' },
        { label: 'NR-07: o que a norma exige', href: '/normas/o-que-e-nr-07' },
        { label: 'PCMSO: programa de controle médico', href: '/saude/pcmso-programa-controle-medico' },
        { label: 'Exame periódico ocupacional: prazo e rotina', href: '/saude/exame-periodico-ocupacional' },
        { label: 'Exame de retorno ao trabalho', href: '/saude/exame-retorno-ao-trabalho' },
        { label: 'Exame demissional: o que é e quando fazer', href: '/saude/exame-demissional' },
      ]}
    />
  );
}
