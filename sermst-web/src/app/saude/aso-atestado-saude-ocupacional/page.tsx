import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'ASO: o que é, quando emitir e por que protege a empresa | SERMST',
  description:
    'O ASO (Atestado de Saúde Ocupacional) é documento obrigatório em toda contratação, demissão, exame periódico e retorno ao trabalho. Sem ele, a empresa assume risco jurídico.',
  alternates: { canonical: 'https://sermst.com.br/saude/aso-atestado-saude-ocupacional' },
  openGraph: {
    title: 'ASO: o que é, quando emitir e por que protege a empresa | SERMST',
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
      h1="ASO: o que é, quando emitir e por que ele protege a empresa"
      intro="O Atestado de Saúde Ocupacional é o documento que fecha o ciclo de cada exame ocupacional. Sem ele válido e no prazo, a empresa não tem evidência de que cumpriu sua obrigação legal — e qualquer doença futura pode ser atribuída ao período de trabalho."
      sections={[
        {
          title: 'O que é o ASO',
          body: (
            <>
              <p>
                O ASO é o documento emitido pelo <strong>médico do trabalho</strong> ao final de cada exame ocupacional — admissional, periódico, de retorno ao trabalho, de mudança de função ou demissional. Ele registra formalmente se o trabalhador está <strong>apto ou inapto</strong> para exercer a função, com base nos exames clínicos e complementares realizados.
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
              <li><strong>Exame de retorno ao trabalho:</strong> obrigatório quando o trabalhador retorna de afastamento superior a 30 dias por doença ou acidente.</li>
              <li><strong>Exame de mudança de função:</strong> quando o trabalhador muda para função com risco diferente — novo ASO antes da mudança.</li>
              <li><strong>Exame demissional:</strong> antes da homologação da rescisão, exceto se o último periódico tiver sido realizado há menos de 90 ou 135 dias (conforme o grau de risco).</li>
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
                <li>Nome, CRM e assinatura do médico examinador e do médico coordenador do PCMSO</li>
                <li>Data de emissão e prazo de validade</li>
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
                Cada ASO emitido precisa ser comunicado ao eSocial via <strong>evento S-2220 (Monitoramento da Saúde do Trabalhador)</strong>. O prazo é até o dia 15 do mês seguinte ao da emissão do ASO.
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
          a: 'O médico examinador pode ser qualquer médico habilitado a realizar o exame clínico. Mas o ASO deve ser referendado pelo médico coordenador do PCMSO da empresa, que precisa ter especialização em medicina do trabalho.',
        },
        {
          q: 'O trabalhador tem direito a receber uma via do ASO?',
          a: 'Sim. A NR-07 determina que o ASO deve ser emitido em duas vias — uma fica com a empresa e outra é entregue ao trabalhador. Não entregar é infração.',
        },
        {
          q: 'ASO de empresa diferente tem validade?',
          a: 'O ASO de um emprego anterior não tem validade para o novo vínculo. Cada contratação exige exame admissional próprio, pois os riscos do novo cargo podem ser diferentes.',
        },
        {
          q: 'Qual a diferença entre ASO e atestado médico comum?',
          a: 'São documentos completamente distintos. O atestado médico comum é emitido por qualquer médico para justificar ausência por doença. O ASO é emitido especificamente pelo médico do trabalho para atestar aptidão ocupacional, com base nos riscos do cargo e no PCMSO da empresa.',
        },
      ]}
      sidebarTitle="Seus ASOs estão em dia e no eSocial?"
      sidebarHook="A SERMST emite ASO no mesmo dia para admissões urgentes e controla o vencimento dos periódicos da sua empresa — integrado ao envio do S-2220 no eSocial."
      sidebarCtaLabel="Solicitar ASO admissional"
      related={[
        { label: 'PCMSO: programa de controle médico', href: '/saude/pcmso-programa-controle-medico' },
        { label: 'Clínica de exame admissional em SP', href: '/saude/clinica-exame-admissional-sao-paulo' },
        { label: 'Exame demissional: guia completo', href: '/saude/exame-demissional-guia' },
        { label: 'Multa eSocial S-2220', href: '/rh/multa-esocial-s2220' },
      ]}
    />
  );
}
