import type { Metadata } from 'next';
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
      hubLabel="Hub Saúde Ocupacional"
      hubLabelShort="← Hub Saúde"
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
        dateModified: '2026-05-01',
      }}

      h1="ASO: o que é, quando emitir e por que ele protege a empresa"
      intro="O Atestado de Saúde Ocupacional é o documento que fecha o ciclo de cada exame ocupacional. Se a dúvida é só conceitual, o dicionário resolve. Aqui, o foco é quando emitir, como usar e onde a empresa se expõe quando o ASO está errado ou vencido."
      sections={[
        {
          title: 'O que é o ASO',
          body: (
            <>
              <p>
                O ASO é o documento emitido pelo <strong>médico que realiza o exame clínico ocupacional</strong> — admissional, periódico, de retorno ao trabalho, de mudança de risco ocupacional ou demissional. Ele registra formalmente se o trabalhador está <strong>apto ou inapto</strong> para exercer a função, com base nos exames clínicos e complementares realizados.
              </p>
              <p>
                Tecnicamente, o ASO não é só um papel: é a <strong>evidência jurídica</strong> de que a empresa avaliou a saúde do trabalhador naquele momento. É essa evidência que protege o empregador em casos de ação trabalhista por doença ocupacional, perícia do INSS ou fiscalização do MTE.
              </p>
            </>
          ),
        },
        {
          title: 'Quando o ASO é obrigatório',
          body: (
            <ul>
              <li><strong>Exame admissional:</strong> antes do início das atividades. Sem ASO admissional, o trabalhador não deveria começar a trabalhar.</li>
              <li><strong>Exame periódico:</strong> conforme a periodicidade definida no PCMSO para o cargo. Pode ser anual, semestral ou bienal dependendo do risco.</li>
              <li><strong>Exame de retorno ao trabalho:</strong> obrigatório antes do retorno quando o afastamento por doença ou acidente, ocupacional ou não, for igual ou superior a 30 dias.</li>
              <li><strong>Exame de mudança de risco ocupacional:</strong> antes da mudança, adequando o controle médico aos novos riscos.</li>
              <li><strong>Exame demissional:</strong> em até 10 dias contados do término do contrato, podendo ser dispensado se o exame clínico ocupacional mais recente ocorreu há menos de 135 dias para grau de risco 1 ou 2, ou 90 dias para grau de risco 3 ou 4.</li>
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
                <li>Indicação dos procedimentos médicos realizados (exames clínicos e complementares)</li>
                <li>Conclusão: apto ou inapto para a função</li>
                <li>Nome e CRM do médico responsável pelo PCMSO, se houver</li>
                <li>Data, CRM e assinatura do médico que realizou o exame clínico</li>
              </ul>
              <p>
                ASO sem todos esses campos é tecnicamente inválido — mesmo que o exame tenha sido realizado.
              </p>
            </>
          ),
        },
        {
          title: 'ASO e eSocial: o evento S-2220',
          body: (
            <>
              <p>
                O <strong>evento S-2220 (Monitoramento da Saúde do Trabalhador)</strong> registra no eSocial as informações dos exames ocupacionais aplicáveis. O envio deve seguir o leiaute e os prazos vigentes do evento.
              </p>
              <p>
                O S-2220 inclui: tipo de exame, data, resultado de aptidão, e os exames complementares realizados com seus resultados. Envio fora do prazo ou com dados divergentes do ASO físico gera inconsistência — o que pode resultar em notificação ou multa em cruzamento de dados.
              </p>
              <p>
                Empresas que acumulam ASOs pendentes de envio criam um passivo silencioso: quanto mais tempo passa, maior o volume de eventos atrasados e maior o risco de penalidade em bloco.
              </p>
            </>
          ),
        },
        {
          title: 'ASO vencido: o risco que muitos subestimam',
          body: (
            <>
              <p>
                ASO periódico vencido significa que, do ponto de vista legal, a empresa <strong>não tem evidência</strong> de que monitorou a saúde do trabalhador no período. Se nesse intervalo o trabalhador desenvolver qualquer condição de saúde — ainda que não relacionada ao trabalho — a ausência de ASO válido facilita a atribuição de responsabilidade à empresa.
              </p>
              <p>
                Em empresas com alta rotatividade ou muitos funcionários, controlar os vencimentos manualmente é impraticável. O controle precisa ser sistemático: planilha com alertas, ou sistema integrado à clínica que acompanha a periodicidade do PCMSO de cada cargo.
              </p>
            </>
          ),
        },
        {
          title: 'ASO de resultado inapto: o que fazer',
          body: (
            <>
              <p>
                Quando o ASO conclui <strong>inapto</strong>, o trabalhador não pode exercer aquela função até que a situação seja resolvida. O médico do trabalho indica o caminho: tratamento, readaptação, mudança de função, ou afastamento.
              </p>
              <p>
                O erro mais comum é ignorar o resultado inapto ou pressionar o médico a emitir ASO apto sem a devida avaliação. Além de antiético, esse caminho cria responsabilidade direta para a empresa em caso de acidente ou agravamento posterior.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'O ASO admissional pode ser feito depois que o funcionário começou a trabalhar?',
          a: 'Não. A NR-07 determina que o exame admissional e o ASO devem ser realizados antes do início das atividades. Funcionário trabalhando sem ASO válido coloca a empresa em infração e elimina a proteção que o documento oferece.',
        },
        {
          q: 'Qual médico pode emitir ASO?',
          a: 'Para cada exame clínico ocupacional, o médico que realizou o exame emite o ASO. O documento também deve informar o médico responsável pelo PCMSO, quando houver.',
        },
        {
          q: 'O trabalhador tem direito a receber uma via do ASO?',
          a: 'Sim. A NR-07 determina que o ASO seja comprovadamente disponibilizado ao trabalhador. A empresa precisa manter evidência dessa disponibilização.',
        },
        {
          q: 'ASO de empresa diferente tem validade?',
          a: 'O ASO de um emprego anterior não tem validade para o novo vínculo. Cada contratação exige exame admissional próprio, pois os riscos do novo cargo podem ser diferentes.',
        },
        {
          q: 'Qual a diferença entre ASO e atestado médico comum?',
          a: 'São documentos distintos. O atestado médico comum costuma justificar ausência por motivo de saúde. O ASO registra a conclusão de aptidão ocupacional e é emitido pelo médico que realizou o exame clínico, considerando os riscos relacionados ao trabalho.',
        },
      ]}
      sidebarTitle="Seus ASOs estão em dia e no eSocial?"
      sidebarHook="A SERMST emite ASO no mesmo dia para admissões urgentes e controla o vencimento dos periódicos da sua empresa — integrado ao envio do S-2220 no eSocial."
      sidebarCtaLabel="Solicitar ASO admissional"
      related={[
        { label: 'ASO no dicionário: definição rápida', href: '/dicionario/o-que-e-aso' },
        { label: 'PCMSO: programa de controle médico', href: '/saude/pcmso-programa-controle-medico' },
        { label: 'Clínica de exame admissional em SP', href: '/saude/clinica-exame-admissional-sao-paulo' },
        { label: 'Exame toxicológico para CNH C, D e E e motoristas CLT', href: '/servicos/exame-toxicologico-clt/sao-paulo' },
        { label: 'Exame demissional: guia completo', href: '/saude/exame-demissional-guia' },
        { label: 'Multa eSocial S-2220', href: '/rh/multa-esocial-s2220' },
      ]}
    />
  );
}
