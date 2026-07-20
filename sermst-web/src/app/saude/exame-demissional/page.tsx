import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Exame demissional: o que é, prazo e quando fazer | SERMST',
  description:
    'Entenda o que é o exame demissional, quando fazer, se pode ocorrer após a rescisão, quem paga e quando a NR-07 permite a dispensa.',
  alternates: { canonical: 'https://sermst.com.br/saude/exame-demissional' },
  openGraph: {
    title: 'Exame demissional: o que é, prazo e quando fazer | SERMST',
    description:
      'Veja quando fazer o exame demissional, o prazo após o término do contrato, quem paga e como funciona o ASO demissional.',
    url: 'https://sermst.com.br/saude/exame-demissional',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function ExameDemissionalPage() {
  return (
    <BlockbusterArticle
      hubLabel="Saúde Ocupacional"
      hubLabelShort="← Saúde Ocupacional"
      hubHref="/saude"
      pageUrl="https://sermst.com.br/saude/exame-demissional"
      coverImage={{ src: "/images/articles/exame-demissional.jpg", alt: "Consulta médica ocupacional para exame demissional" }}
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-07-20',
      }}
      readingTime="7 min"
      h1="Exame demissional: o que é, quando fazer e qual o prazo"
      intro="O exame demissional registra a condição de saúde do trabalhador no encerramento do vínculo. Quando não houver dispensa, a NR-07 determina que o exame clínico seja realizado em até 10 dias contados do término do contrato. Abaixo você confere quando fazer, quem paga e o que acontece depois da avaliação."
      quickAnswer={
        <p>
          O <strong>exame demissional</strong> é a avaliação médica ocupacional feita no encerramento do contrato. Quando não houver dispensa, deve ocorrer em até <strong>10 dias após o término do vínculo</strong>. O custo é da empresa e, depois do exame, o médico emite o ASO demissional.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'O que é o exame demissional',
          body: (
            <>
              <p>
                O exame clínico demissional é a avaliação médica realizada no encerramento do vínculo. Ele integra a lógica da NR-07 e fecha o ciclo de monitoramento iniciado no admissional, considerando os riscos ocupacionais e o histórico clínico do trabalhador.
              </p>
              <p>
                O demissional registra a avaliação de saúde ocupacional no encerramento do vínculo e permite comparar o resultado com o histórico dos exames realizados durante o contrato.
              </p>
            </>
          ),
        },
        {
          title: 'Quando o exame demissional é obrigatório',
          body: (
            <>
              <p>
                Na regra geral, o exame demissional entra sempre que há rescisão do contrato. A exceção aparece quando o exame clínico ocupacional mais recente ainda está dentro da janela de dispensa prevista na NR-07.
              </p>
              <ol>
                <li><strong>Grau de risco 1 ou 2:</strong> pode haver dispensa se o exame clínico ocupacional mais recente tiver ocorrido há menos de 135 dias.</li>
                <li><strong>Grau de risco 3 ou 4:</strong> pode haver dispensa se o exame clínico ocupacional mais recente tiver ocorrido há menos de 90 dias.</li>
                <li><strong>Mesmo com dispensa formal,</strong> a empresa precisa verificar se o exame anterior ainda reflete os riscos reais da função exercida até a saída.</li>
              </ol>
              <p>
                Se houve mudança de função, novo risco ocupacional, afastamento relevante ou qualquer alteração importante no período, o caminho seguro é não tratar a dispensa como automática.
              </p>
            </>
          ),
        },
        {
          title: 'Qual é o prazo do exame demissional',
          body: (
            <>
              <p>
                Pela NR-07, o exame clínico demissional deve ser realizado <strong>em até 10 dias contados do término do contrato</strong>, desde que não exista uma hipótese válida de dispensa. A empresa pode antecipar o agendamento por organização interna, mas não deve apresentar a data do desligamento como limite legal.
              </p>
              <p>
                Deixar o fluxo sem responsável até o último momento costuma criar três problemas ao mesmo tempo:
              </p>
              <ul>
                <li>agenda clínica incompatível com o prazo normativo;</li>
                <li>informação enviada com pressa ou com lacuna documental;</li>
                <li>fragilidade na prova do estado de saúde do trabalhador na saída.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Dispensa do exame e envio ao eSocial',
          body: (
            <>
              <p>
                A dispensa depende da data do <strong>exame clínico ocupacional mais recente</strong>: menos de 135 dias para organizações de grau de risco 1 ou 2 e menos de 90 dias para grau de risco 3 ou 4. Não basta conferir se existe um ASO antigo; é preciso validar a data e o enquadramento correto da empresa.
              </p>
              <p>
                Quando o exame clínico demissional é dispensado nos termos da NR-07, não existe um novo ASO demissional. Por isso, conforme a orientação oficial do eSocial, também não é enviado um evento S-2220 de exame demissional apenas para registrar a dispensa.
              </p>
            </>
          ),
        },
        {
          title: 'O que é avaliado no exame demissional',
          body: (
            <>
              <p>O exame demissional pode incluir:</p>
              <ul>
                <li><strong>Anamnese ocupacional</strong> com histórico do período trabalhado.</li>
                <li><strong>Exame clínico</strong> para avaliar o estado geral do trabalhador na saída.</li>
                <li><strong>Exames complementares</strong> quando o PCMSO e os riscos da função exigirem.</li>
                <li><strong>Comparação com exames anteriores</strong> para identificar alterações surgidas no contrato.</li>
                <li><strong>Emissão do ASO demissional</strong> com a conclusão médica correspondente.</li>
              </ul>
              <p>
                Não existe bateria única para toda empresa. Cargo administrativo de baixo risco tende a ter fluxo mais simples. Função operacional com ruído, agentes químicos, esforço físico ou exposição específica pode exigir rotina mais robusta.
              </p>
            </>
          ),
        },
        {
          title: 'Quando o resultado do demissional aponta problema',
          body: (
            <>
              <p>
                O exame pode registrar desde uma condição sem relação com o trabalho até uma alteração com possível nexo ocupacional. Cada cenário pede leitura técnica diferente.
              </p>
              <ol>
                <li><strong>Condição sem nexo ocupacional claro:</strong> registra no ASO e orienta seguimento médico adequado.</li>
                <li><strong>Alteração possivelmente ligada ao trabalho:</strong> a empresa precisa analisar exposição, histórico ocupacional e eventual necessidade de aprofundamento técnico.</li>
                <li><strong>Indício de doença ocupacional:</strong> pode haver reflexo em CAT, estabilidade e análise jurídica mais cuidadosa.</li>
              </ol>
              <p>
                Um resultado alterado não deve ser tratado como mera etapa da rescisão. Ele pede registro clínico e avaliação do possível vínculo com as exposições ocupacionais.
              </p>
            </>
          ),
        },
        {
          title: 'O custo de não fazer o exame demissional',
          body: (
            <ul>
              <li><strong>Defesa mais frágil</strong> em discussão sobre doença ocupacional após a saída.</li>
              <li><strong>Processo rescisório mais exposto</strong> por falta de fechamento ocupacional coerente.</li>
              <li><strong>Retrabalho documental</strong> para RH, clínica e jurídico.</li>
              <li><strong>Maior risco de inconsistência</strong> entre ASO, PCMSO e rotina de desligamento.</li>
            </ul>
          ),
        },
        {
          title: 'Depois do exame demissional, qual é o próximo passo',
          body: (
            <>
              <p>
                Ao terminar a avaliação, o médico emite o ASO com a conclusão correspondente. A empresa deve conferir o documento, disponibilizá-lo ao trabalhador e manter o registro junto ao prontuário e aos demais documentos do PCMSO.
              </p>
              <p>
                Quando houve exame demissional, as informações aplicáveis seguem para o evento S-2220 do eSocial. Se a avaliação indicar alteração que exija investigação, o caso precisa ser analisado antes de a empresa tratar o desligamento como uma etapa documental encerrada.
              </p>
            </>
          ),
        },
        {
          title: 'Fontes oficiais consultadas',
          body: (
            <ul>
              <li>
                <a
                  href="https://www.gov.br/trabalho-e-emprego/pt-br/acesso-a-informacao/participacao-social/conselhos-e-orgaos-colegiados/comissao-tripartite-partitaria-permanente/arquivos/normas-regulamentadoras/nr-07-atualizada-2022.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  NR-07: Programa de Controle Médico de Saúde Ocupacional (Ministério do Trabalho e Emprego)
                </a>
              </li>
              <li>
                <a
                  href="https://www.gov.br/esocial/pt-br/empresas/perguntas-frequentes/perguntas-frequentes-producao-empresas-e-ambiente-de-testes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Perguntas frequentes dos eventos de SST no eSocial
                </a>
              </li>
            </ul>
          ),
        },
      ]}
      faq={[
        {
          q: 'Quem paga o exame demissional?',
          a: 'A empresa. O custo do exame ocupacional faz parte da obrigação do empregador e não pode ser repassado ao trabalhador.',
        },
        {
          q: 'Exame demissional pode ser feito depois da saída?',
          a: 'Sim. A NR-07 permite a realização em até 10 dias contados do término do contrato, quando o exame não for dispensado. Antecipar pode facilitar a operação, mas não muda o prazo normativo.',
        },
        {
          q: 'Quando a empresa pode dispensar o demissional?',
          a: 'Quando o exame clínico ocupacional mais recente tiver ocorrido há menos de 135 dias, para grau de risco 1 ou 2, ou há menos de 90 dias, para grau de risco 3 ou 4.',
        },
        {
          q: 'O que acontece se o trabalhador se recusar a fazer o exame?',
          a: 'A empresa precisa documentar a convocação e a recusa de forma objetiva, porque a proteção depende da prova de que a obrigação foi oferecida corretamente.',
        },
        {
          q: 'Qual a diferença entre exame demissional e ASO demissional?',
          a: 'O exame demissional é o processo de avaliação ocupacional. O ASO demissional é o documento emitido ao final, com a conclusão médica correspondente.',
        },
        {
          q: 'Depois do exame demissional, qual é o próximo passo?',
          a: 'O médico emite o ASO, a empresa confere e guarda o documento, disponibiliza a via do trabalhador e envia as informações aplicáveis ao eSocial. Se houver alteração clínica relevante, o caso precisa de avaliação antes do encerramento do fluxo ocupacional.',
        },
      ]}
      sidebarTitle="Precisa agendar o exame demissional?"
      sidebarHook="Informe a função, a data do desligamento e o último exame ocupacional para organizar o atendimento dentro do prazo aplicável."
      sidebarCtaLabel="Agendar exame demissional"
      sidebarCtaHref="/contato"
      related={[
        { label: 'Agendar exame demissional', href: '/contato' },
        { label: 'Exame periódico ocupacional: prazo e periodicidade', href: '/saude/exame-periodico-ocupacional' },
        { label: 'Exame de retorno ao trabalho', href: '/saude/exame-retorno-ao-trabalho' },
        { label: 'ASO: o que é e quando emitir', href: '/saude/aso-atestado-saude-ocupacional' },
        { label: 'Quando demitir um funcionário', href: '/rh/quando-demitir-funcionario' },
        { label: 'PCMSO: programa de controle médico', href: '/saude/pcmso-programa-controle-medico' },
      ]}
    />
  );
}
