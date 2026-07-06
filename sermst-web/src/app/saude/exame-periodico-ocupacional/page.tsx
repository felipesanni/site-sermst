import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Exame Periódico Ocupacional em São Paulo | SERMST',
  description:
    'Exame periódico ocupacional: periodicidade por grau de risco, quais exames complementares incluir e como organizar o programa da empresa. SERMST em SP.',
  robots: 'index, follow',
  alternates: { canonical: 'https://sermst.com.br/saude/exame-periodico-ocupacional' },
  openGraph: {
    title: 'Exame Periódico Ocupacional em São Paulo | SERMST',
    description:
      'Guia sobre exame periódico ocupacional: quando fazer, quem convoca, quais exames incluir e o que acontece quando o programa atrasa.',
    url: 'https://sermst.com.br/saude/exame-periodico-ocupacional',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function ExamePeriodicoOcupacionalPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub Saúde Ocupacional"
      hubLabelShort="Voltar para saúde"
      hubHref="/saude"
      badgeText="Saúde Ocupacional"
      pageUrl="https://sermst.com.br/saude/exame-periodico-ocupacional"
      coverImage={{
        src: '/images/site/sermst-estrutura-medicina-ocupacional.png',
        alt: 'Estrutura da SERMST para realização de exame periódico ocupacional em São Paulo',
      }}
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-07-06',
        dateModified: '2026-07-06',
      }}
      readingTime="8 min"
      h1="Exame periódico ocupacional: periodicidade, quem convoca e o que inclui"
      intro="O exame periódico ocupacional é a avaliação médica que acompanha o trabalhador ao longo do vínculo empregatício. Diferente do admissional, que documenta a entrada, o periódico monitora se as condições de trabalho estão afetando a saúde do trabalhador e se ele continua apto para a função. Quando atrasa ou vira formalidade, o risco acumulado aparece em afastamento, nexo causal estabelecido e passivo trabalhista."
      quickAnswer={
        <p>
          O <strong>exame periódico ocupacional</strong> é obrigatório para todos os trabalhadores com vínculo empregatício, com periodicidade definida pelo grau de risco da empresa e pela faixa etária do trabalhador. A SERMST organiza e executa o programa de periódicos em São Paulo integrado ao PCMSO da empresa.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'O que é o exame periódico ocupacional',
          body: (
            <>
              <p>
                O exame periódico ocupacional é a avaliação médica prevista na NR-07 para trabalhadores já admitidos. Seu objetivo é monitorar a saúde do trabalhador ao longo do tempo e verificar se a exposição ocupacional está causando alguma alteração, comparando o resultado atual com o admissional e com os periódicos anteriores.
              </p>
              <p>
                O exame sempre resulta em um ASO, que registra se o trabalhador está apto, apto com restrições ou inapto para a função. Ao contrário do que muitas empresas praticam, o periódico não é apenas uma consulta clínica genérica: ele deve seguir o protocolo do PCMSO, que define quais exames complementares são necessários para cada função com base nos riscos identificados.
              </p>
              <p>
                Uma empresa que realiza o exame periódico apenas como exame clínico, sem os complementares previstos no PCMSO, está em descumprimento da norma e produz um ASO com validade técnica e jurídica comprometida.
              </p>
            </>
          ),
        },
        {
          title: 'Periodicidade: quem define e qual o prazo',
          body: (
            <>
              <p>
                A NR-07 define os prazos mínimos para o exame periódico com base no grau de risco da empresa (Quadro II do Anexo II):
              </p>
              <ul>
                <li><strong>Grau de Risco 1 e 2:</strong> periodicidade bienal (a cada 2 anos) para trabalhadores entre 18 e 45 anos.</li>
                <li><strong>Grau de Risco 1 e 2, trabalhadores acima de 45 anos:</strong> periodicidade anual.</li>
                <li><strong>Grau de Risco 3 e 4:</strong> periodicidade anual para todos os trabalhadores.</li>
              </ul>
              <p>
                Esses são os prazos máximos. O médico coordenador do PCMSO pode definir periodicidade menor para funções com exposição a agentes de maior risco — e nesse caso o prazo mais curto prevalece.
              </p>
              <p>
                O grau de risco da empresa é determinado pelo CNAE principal. Empresas que não sabem seu grau de risco correm o risco de usar a periodicidade errada no PCMSO, o que gera descumprimento mesmo que os exames estejam sendo realizados.
              </p>
            </>
          ),
        },
        {
          title: 'O que pode fazer parte do exame periódico',
          body: (
            <>
              <p>
                O exame periódico sempre inclui a consulta clínica com o médico do trabalho. Os exames complementares dependem do que o PCMSO prevê para cada função. Os mais comuns nos programas periódicos são:
              </p>
              <ul>
                <li><strong>Audiometria ocupacional:</strong> para funções com exposição a ruído acima dos limites de tolerância da NR-15.</li>
                <li><strong>Espirometria:</strong> para funções com exposição a poeiras, fumos metálicos e agentes respiratórios.</li>
                <li><strong>Eletrocardiograma (ECG):</strong> para trabalhadores acima de 40 anos e funções com risco cardiovascular ou elétrico.</li>
                <li><strong>Hemograma e bioquímica:</strong> para funções com exposição a agentes hematotóxicos, hepatotóxicos ou nefrotóxicos.</li>
                <li><strong>Acuidade visual:</strong> para motoristas, operadores de empilhadeira e funções com requisito visual de segurança.</li>
                <li><strong>Avaliação psicossocial:</strong> para trabalho em altura (NR-35) e funções com alto risco psicossocial previsto no PGR.</li>
                <li><strong>Exame toxicológico:</strong> para motoristas profissionais com CNH C, D ou E, conforme a Lei 13.103/2015.</li>
              </ul>
              <p>
                O conjunto de exames varia por função. Um protocolo único para toda a empresa costuma gerar exames desnecessários em algumas funções e ausência de exames obrigatórios em outras.
              </p>
            </>
          ),
        },
        {
          title: 'O que acontece quando o periódico atrasa',
          body: (
            <>
              <p>
                O atraso no exame periódico não é um problema apenas operacional: ele cria exposição jurídica para a empresa. Os riscos mais comuns incluem:
              </p>
              <ul>
                <li><strong>Autuação em fiscalização do MTE:</strong> o auditor verifica se os ASOs periódicos estão dentro do prazo. Trabalhador sem periódico em dia é infração direta à NR-07.</li>
                <li><strong>Fragilidade no nexo causal:</strong> se um trabalhador desenvolver doença ocupacional e o periódico estiver atrasado ou ausente, a empresa perde a principal ferramenta de defesa — o monitoramento contínuo documentado.</li>
                <li><strong>Divergência no eSocial:</strong> o evento S-2220 (monitoramento da saúde do trabalhador) precisa estar atualizado. ASO vencido sem lançamento gera inconsistência no eSocial SST.</li>
                <li><strong>Dificuldade em afastamentos e retorno:</strong> sem o histórico de periódicos em dia, o médico do trabalho não tem linha de base para avaliar alterações identificadas no retorno ao trabalho.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Como organizar o programa de periódicos na empresa',
          body: (
            <>
              <p>
                Empresas com mais de 20 trabalhadores costumam ter vencimentos distribuídos ao longo do ano. Sem um sistema de controle, o RH perde a visão de quem está próximo do vencimento e começa a convocar de forma reativa — geralmente depois que o prazo já estourou.
              </p>
              <p>
                Um programa bem estruturado inclui: calendário de vencimentos por trabalhador, protocolo de convocação com antecedência mínima, integração entre o PCMSO e o sistema de RH, e lançamento no eSocial dentro do prazo. Quando o PCMSO, a convocação e o registro no eSocial não estão alinhados, o RH trabalha mais e a empresa fica mais exposta.
              </p>
              <p>
                A SERMST organiza o programa de periódicos para empresas em São Paulo, com controle de vencimentos, convocação automatizada, execução dos exames e lançamento no eSocial S-2220. Para empresas com alto volume de colaboradores, o modelo de assinatura garante capacidade de atendimento sem tempo de espera.
              </p>
            </>
          ),
        },
        {
          title: 'Diferença entre exame periódico, admissional e retorno ao trabalho',
          body: (
            <>
              <p>
                Os três tipos de ASO são obrigações distintas da NR-07 e têm finalidades diferentes:
              </p>
              <ul>
                <li><strong>Exame admissional:</strong> realizado antes do início das atividades. Documenta a condição de saúde do trabalhador na entrada e serve como linha de base para comparação futura.</li>
                <li><strong>Exame periódico:</strong> realizado durante o vínculo, nos intervalos definidos pelo PCMSO. Monitora se a exposição ocupacional está causando alterações ao longo do tempo.</li>
                <li><strong>Exame de retorno ao trabalho:</strong> realizado no primeiro dia útil após afastamento de 30 dias ou mais por doença ou acidente. Avalia se o trabalhador está apto para reassumir as atividades.</li>
              </ul>
              <p>
                A confusão mais comum é tratar o retorno ao trabalho como periódico antecipado. São obrigações independentes: o retorno ao trabalho não substitui o periódico e vice-versa.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'O exame periódico é obrigatório para toda empresa?',
          a: 'Sim. Todo trabalhador com vínculo empregatício deve ter exame periódico nos prazos definidos pela NR-07 com base no grau de risco da empresa e na faixa etária do trabalhador.',
        },
        {
          q: 'Qual a periodicidade do exame periódico ocupacional?',
          a: 'Para grau de risco 1 e 2: bienal (a cada 2 anos) para trabalhadores até 45 anos; anual para maiores de 45. Para grau de risco 3 e 4: anual para todos. O PCMSO pode definir prazos menores conforme os riscos da função.',
        },
        {
          q: 'Quem deve ser convocado para o exame periódico?',
          a: 'Todos os trabalhadores com vínculo empregatício ativo, conforme o vencimento de cada um. Trabalhadores em afastamento têm o prazo suspenso e fazem o exame de retorno ao trabalho antes de reassumir as atividades.',
        },
        {
          q: 'O exame periódico é a mesma coisa que o ASO?',
          a: 'Não. O exame periódico é a avaliação médica. O ASO é o documento emitido ao final dessa avaliação, que registra formalmente se o trabalhador está apto ou não para a função.',
        },
        {
          q: 'Onde fazer exame periódico ocupacional em São Paulo?',
          a: 'A SERMST realiza exame periódico ocupacional em São Paulo Centro, no Largo do Paissandu, integrado ao PCMSO e com lançamento no eSocial S-2220.',
        },
      ]}
      sidebarTitle="Periódicos atrasando na sua empresa?"
      sidebarHook="A SERMST organiza e executa o programa de exames periódicos integrado ao PCMSO e ao eSocial. Controle de vencimentos, convocação e execução sem perda de prazo."
      sidebarCtaLabel="Organizar meu programa"
      sidebarCtaHref="/contato"
      related={[
        { label: 'O que é o exame periódico ocupacional e para que serve', href: '/saude/importancia-do-exame-periodico' },
        { label: 'Exame de retorno ao trabalho', href: '/saude/exame-retorno-ao-trabalho' },
        { label: 'Como funciona o exame admissional', href: '/exames/como-funciona-o-exame-admissional' },
        { label: 'Exame demissional: o que é e quando fazer', href: '/saude/exame-demissional' },
        { label: 'PCMSO: programa de controle médico de saúde ocupacional', href: '/saude/pcmso-programa-controle-medico' },
        { label: 'Gestão de eSocial SST (S-2220/S-2240)', href: '/servicos/gestao-esocial-s2220-s2240' },
      ]}
      finalCta={{
        title: 'Programa de periódicos organizado e em dia com o eSocial.',
        desc: 'A SERMST executa o programa de exames periódicos em São Paulo, com controle de vencimentos, convocação e lançamento no eSocial S-2220 integrado ao PCMSO da empresa.',
        label: 'Falar com a SERMST',
        href: '/contato',
      }}
    />
  );
}
