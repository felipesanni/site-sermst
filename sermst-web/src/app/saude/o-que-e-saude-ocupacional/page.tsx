import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'O que é Saúde Ocupacional: guia completo para gestores e RH | SERMST',
  description:
    'Saúde ocupacional não é só ASO e exame periódico — é um sistema que protege trabalhador, operação e patrimônio. Veja os pilares, obrigações legais e como estruturar.',
  alternates: { canonical: 'https://sermst.com.br/saude/o-que-e-saude-ocupacional' },
};

export default function SaúdeOcupacionalPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub Saúde Ocupacional"
      hubLabelShort="← Hub Saúde"
      hubHref="/saude"
      pageUrl="https://sermst.com.br/saude/o-que-e-saude-ocupacional"
      h1="O que é Saúde Ocupacional: guia completo para gestores"
      intro="Saúde ocupacional não é só ASO e exame periódico. É um sistema de prevenção que protege o trabalhador, a operação e o patrimônio da empresa contra afastamento, processo e multa. Veja como funciona na prática."
      sections={[
        {
          title: 'Saúde Ocupacional em uma frase',
          body: (
            <>
              <p>
                Saúde ocupacional é o conjunto de práticas, exames, programas e documentação que <strong>previne, identifica e gerencia os impactos do trabalho na saúde do trabalhador</strong>. Vai além de exame admissional — engloba vigilância médica contínua, mapeamento de riscos da função, programa de prevenção, treinamento, acompanhamento de afastamentos e análise epidemiológica de afastamentos.
              </p>
              <p>
                A confusão mais comum é tratar saúde ocupacional como sinônimo de PCMSO ou de ASO. Os dois são partes — não o todo. Saúde ocupacional bem feita conecta PCMSO a PGR, exame a NR aplicável, afastamento a ação preventiva.
              </p>
            </>
          ),
        },
        {
          title: 'Os 5 pilares de um sistema de saúde ocupacional',
          body: (
            <ol>
              <li><strong>PCMSO (NR-07)</strong> — programa que define quais exames cada cargo precisa fazer e com qual periodicidade, baseado nos riscos da função.</li>
              <li><strong>Exames ocupacionais</strong> — admissional, periódico, retorno ao trabalho, mudança de função e demissional. Cada um documenta um momento crítico.</li>
              <li><strong>Vigilância epidemiológica</strong> — análise dos exames consolidados para identificar tendências (aumento de pressão alta na produção, ruído alterando audição da equipe, ergonomia gerando LER).</li>
              <li><strong>Conexão com PGR</strong> — os riscos identificados pelo PCMSO precisam estar no PGR. Os controles do PGR precisam estar refletidos no PCMSO. Os dois andam juntos.</li>
              <li><strong>Resposta a afastamento</strong> — quando o trabalhador volta do INSS, há protocolo: exame de retorno, avaliação de aptidão, eventual mudança de função, registro no eSocial.</li>
            </ol>
          ),
        },
        {
          title: 'Por que saúde ocupacional importa para o resultado',
          body: (
            <>
              <p>
                Empresas tratam saúde ocupacional como custo de compliance. Mas o ROI vem por três caminhos:
              </p>
              <ul>
                <li><strong>Redução de afastamento.</strong> Trabalhador acompanhado tem menos absenteísmo, volta mais rápido, e quando volta, volta apto para trabalhar de verdade.</li>
                <li><strong>Redução de FAP.</strong> Empresa com baixa sinistralidade paga menos GIIL-RAT — economia direta na folha por anos.</li>
                <li><strong>Defesa em ação trabalhista.</strong> Em reclamação por doença ocupacional, a documentação SO é o que separa pagar centenas de milhares ou ganhar a ação.</li>
              </ul>
              <p>
                Em empresa familiar, o quarto retorno é menos visível mas igualmente crítico: <strong>liderança que enxerga gente como ativo, não como custo, retém talento melhor</strong>. Saúde ocupacional bem feita comunica isso.
              </p>
            </>
          ),
        },
        {
          title: 'Os exames mais comuns e quando eles aparecem',
          body: (
            <ul>
              <li><strong>Admissional</strong> — antes do início do contrato. Atesta que o trabalhador está apto para a função.</li>
              <li><strong>Periódico</strong> — durante o contrato, conforme PCMSO. Geralmente bienal para administrativo, anual para função operacional ou de risco.</li>
              <li><strong>Retorno ao trabalho</strong> — após afastamento de 30 dias ou mais por doença ou acidente. Atesta aptidão para retomar.</li>
              <li><strong>Mudança de função</strong> — quando o trabalhador muda de cargo e o novo cargo expõe a riscos diferentes. Atesta aptidão para a nova exposição.</li>
              <li><strong>Demissional</strong> — antes da rescisão. Atesta o estado de saúde no fim do contrato. Sem ele, qualquer doença futura pode ser atribuída ao período da empresa.</li>
            </ul>
          ),
        },
        {
          title: 'Os erros mais caros em saúde ocupacional',
          body: (
            <ol>
              <li><strong>PCMSO genérico.</strong> Cópia padrão que não reflete os riscos reais da operação. Em fiscalização, o documento desmonta junto com o resto.</li>
              <li><strong>Exames vencidos.</strong> Trabalhador continua trabalhando com periódico atrasado. Multa eSocial, exposição de saúde, defesa quebrada.</li>
              <li><strong>Sem exame de retorno.</strong> Trabalhador volta do INSS direto para a função sem reavaliação. Recidiva imediata, multa por descumprimento da NR-07.</li>
              <li><strong>Sem demissional.</strong> Empresa rescinde sem fechar o exame. Passivo aberto por anos.</li>
              <li><strong>PCMSO desconectado do PGR.</strong> Os dois documentos contam histórias diferentes. Em perícia, a inconsistência prova má-fé técnica.</li>
              <li><strong>Sem análise epidemiológica.</strong> A empresa tem 200 ASOs no arquivo mas nunca olhou tendência. Perde a oportunidade de prevenção e responde por &quot;sabia ou deveria saber&quot;.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'Qual a diferença entre saúde ocupacional e medicina do trabalho?',
          a: 'Medicina do trabalho é a especialidade médica. Saúde ocupacional é o sistema mais amplo — inclui medicina do trabalho, mas também segurança, ergonomia, higiene ocupacional, programa de prevenção. Em prática, no Brasil os termos são frequentemente usados como sinônimos.',
        },
        {
          q: 'Pequena empresa precisa ter saúde ocupacional?',
          a: 'Sim. Empresa com 1 funcionário CLT já está sob obrigação de PCMSO, ASO admissional e exames periódicos. O regime para pequena empresa é simplificado, mas não dispensado. Microempresa de baixo risco tem PCMSO simplificado; baixo risco com até 20 funcionários pode optar por PCMSO sem médico responsável em algumas situações.',
        },
        {
          q: 'Quem pode fazer ASO?',
          a: 'Apenas médico do trabalho legalmente habilitado pode emitir ASO. Médicos coordenadores designados via PCMSO. Clínicas de saúde ocupacional credenciadas. ASO assinado por médico sem especialidade tem validade questionável.',
        },
        {
          q: 'O ASO vale para sempre?',
          a: 'Não. Cada ASO tem prazo dé válidade conforme tipo de exame e risco do cargo: admissional vale para a admissão (precisa ser anterior ao início do contrato); periódico vale conforme periodicidade do PCMSO (1 ou 2 anos); demissional vale na rescisão.',
        },
        {
          q: 'Como saber se o PCMSO da minha empresa está bem feito?',
          a: 'Três sinais de alerta: (1) o documento foi feito uma vez e nunca revisado; (2) os riscos descritos não batem com a operação real; (3) o cronograma de exames não é cumprido. Se qualquer um desses três é verdadeiro, a defesa em fiscalização ou ação cai.',
        },
      ]}
      sidebarTitle="Sua empresa tem saúde ocupacional ou só PCMSO de papel?"
      sidebarHook="A diferença aparece no primeiro afastamento longo, na primeira fiscalização ou na primeira ação trabalhista. A SERMST faz auditoria gratuita do que sua empresa tem hoje."
      sidebarCtaLabel="Auditar saúde ocupacional"
      related={[
        { label: 'PCMSO (NR-07): programa', href: '/servicos/pcmso-nr07-programa/sao-paulo' },
        { label: 'PGR (NR-01) atualizado', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'Exame demissional: guia completo', href: '/saude/exame-demissional-guia' },
        { label: 'O que são EPIs', href: '/saude/o-que-sao-epis' },
      ]}
    />
  );
}
