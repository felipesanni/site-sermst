import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Exame periódico: periodicidade na NR-07 | SERMST',
  description:
    'Entenda a periodicidade do exame ocupacional na NR-07, quem deve ser convocado, quando o prazo pode ser menor e quais exames o PCMSO pode prever.',
  robots: 'index, follow',
  alternates: { canonical: 'https://sermst.com.br/saude/exame-periodico-ocupacional' },
  openGraph: {
    title: 'Exame periódico: periodicidade na NR-07 | SERMST',
    description:
      'Veja quando o exame periódico é anual, bienal ou realizado em prazo menor por decisão médica, conforme a NR-07 e os riscos ocupacionais.',
    url: 'https://sermst.com.br/saude/exame-periodico-ocupacional',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function ExamePeriodicoOcupacionalPage() {
  return (
    <BlockbusterArticle
      hubLabel="Saúde Ocupacional"
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
        dateModified: '2026-07-13',
      }}
      readingTime="8 min"
      h1="Exame periódico ocupacional: periodicidade, convocação e exames"
      intro="O exame periódico acompanha a saúde do trabalhador durante o vínculo. A periodicidade não é mais definida por idade nem apenas pelo grau de risco da empresa: a NR-07 vigente considera a exposição a riscos ocupacionais identificados e classificados no PGR, condições crônicas que aumentem a suscetibilidade e o critério do médico responsável pelo PCMSO."
      quickAnswer={
        <p>
          Pela NR-07, o exame periódico deve ocorrer <strong>anualmente ou em intervalo menor</strong> para trabalhadores expostos a riscos ocupacionais identificados e classificados no PGR e para pessoas com doenças crônicas que aumentem a suscetibilidade. Para os demais trabalhadores, a regra geral é <strong>a cada dois anos</strong>. O médico responsável pelo PCMSO pode reduzir o intervalo.
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
                O exame resulta em um ASO, que registra a definição de apto ou inapto para a função. Ao contrário do que muitas empresas praticam, o periódico não é apenas uma consulta clínica genérica: ele deve seguir o PCMSO, que define os procedimentos médicos e os exames complementares aplicáveis com base nos riscos identificados.
              </p>
              <p>
                Se o PCMSO prevê exames complementares para determinado risco e eles não são realizados, o monitoramento fica incompleto e a empresa perde coerência entre PGR, programa médico e ASO.
              </p>
            </>
          ),
        },
        {
          title: 'Periodicidade: quem define e qual o prazo',
          body: (
            <>
              <p>
                A NR-07 atual organiza a periodicidade clínica em dois grupos principais:
              </p>
              <ul>
                <li><strong>Anual ou em intervalo menor:</strong> trabalhadores expostos a riscos ocupacionais identificados e classificados no PGR e pessoas com doenças crônicas que aumentem a suscetibilidade a esses riscos.</li>
                <li><strong>Bienal:</strong> os demais trabalhadores.</li>
              </ul>
              <p>
                O médico responsável pelo PCMSO pode reduzir o intervalo com base nos riscos, no estado de saúde do trabalhador e nos critérios previstos nos anexos da própria norma.
              </p>
              <p>
                Portanto, copiar uma tabela antiga por idade ou aplicar o mesmo vencimento a toda a empresa pode gerar convocação errada. A referência operacional deve ser o PCMSO atualizado e coerente com o PGR.
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
                <li><strong>Eletrocardiograma (ECG):</strong> quando houver indicação médica ou previsão técnica no PCMSO para a função avaliada.</li>
                <li><strong>Hemograma e bioquímica:</strong> para funções com exposição a agentes hematotóxicos, hepatotóxicos ou nefrotóxicos.</li>
                <li><strong>Acuidade visual:</strong> para motoristas, operadores de empilhadeira e funções com requisito visual de segurança.</li>
                <li><strong>Avaliação dos fatores psicossociais:</strong> quando as atividades e os riscos ocupacionais exigirem essa análise no exame de aptidão.</li>
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
                <li><strong>Fragilidade na análise do nexo:</strong> se surgir uma suspeita de doença ocupacional, a falta de monitoramento contínuo reduz a qualidade do histórico clínico usado na avaliação.</li>
                <li><strong>Divergência no eSocial:</strong> o evento S-2220 precisa refletir os exames ocupacionais efetivamente realizados e a documentação mantida pela empresa.</li>
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
                Empresas com mais de 20 trabalhadores costumam ter vencimentos distribuídos ao longo do ano. Sem controle, o RH perde a visão de quem está perto do prazo e começa a convocar tarde, quando o exame já deveria ter sido feito.
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
                <li><strong>Exame de retorno ao trabalho:</strong> realizado antes de o trabalhador reassumir a função após afastamento igual ou superior a 30 dias por doença ou acidente, ocupacional ou não.</li>
              </ul>
              <p>
                A confusão mais comum é tratar o retorno ao trabalho como periódico antecipado. São obrigações independentes: o retorno ao trabalho não substitui o periódico e vice-versa.
              </p>
            </>
          ),
        },
        {
          title: 'Fonte oficial e revisão da regra',
          body: (
            <p>
              As periodicidades desta página foram revisadas com base no item 7.5.8 da{' '}
              <a
                href="https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/arquivos/normas-regulamentadoras/nr-07-atualizada-2022.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                NR-07 publicada pelo Ministério do Trabalho e Emprego
              </a>
              . O PCMSO e os anexos aplicáveis devem ser consultados para definir o protocolo de cada função.
            </p>
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
          a: 'A regra geral é anual ou em intervalo menor para trabalhadores expostos a riscos identificados e classificados no PGR e para pessoas com doenças crônicas que aumentem a suscetibilidade. Para os demais, o exame clínico é bienal. O médico responsável pelo PCMSO pode reduzir o intervalo.',
        },
        {
          q: 'Quem deve ser convocado para o exame periódico?',
          a: 'Os trabalhadores abrangidos pelo monitoramento ocupacional devem ser convocados conforme o vencimento definido no PCMSO. Quem retorna de afastamento igual ou superior a 30 dias precisa passar pelo exame de retorno antes de reassumir a função.',
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
      sidebarCtaHref="/servicos/exame-admissional-expresso/sao-paulo"
      related={[
        { label: 'NR-07: o que a norma exige', href: '/normas/o-que-e-nr-07' },
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
