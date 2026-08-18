import type { Metadata } from 'next';
import Link from 'next/link';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Exame demissional: o que é, quando fazer e prazo | SERMST',
  description:
    'Entenda o que é o exame demissional, quando fazer, se ele pode ocorrer antes ou depois da rescisão e o prazo de até 10 dias.',
  alternates: { canonical: 'https://sermst.com.br/saude/exame-demissional' },
  openGraph: {
    title: 'Exame demissional: o que é, quando fazer e prazo | SERMST',
    description:
      'Exame demissional: entenda o prazo de até 10 dias, a dispensa válida, o ASO e o próximo passo após a rescisão.',
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
        dateModified: '2026-08-18',
      }}
      readingTime="7 min"
      h1="Exame demissional: o que é, quando fazer e qual o prazo"
      intro="O exame demissional é a avaliação médica ocupacional feita no encerramento do contrato. Entenda quando ele é obrigatório, se pode ocorrer antes ou depois da rescisão, o prazo de até 10 dias, as regras de dispensa e o que acontece depois do ASO."
      quickAnswer={
        <>
          <p>
            Em resumo: o <strong>exame demissional</strong> pode ser feito antes ou depois da rescisão. Quando não houver dispensa válida, deve ocorrer em até <strong>10 dias contados do término do contrato</strong>. Depois da avaliação, o médico emite o ASO demissional.
          </p>
          <dl className="not-prose mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-emerald-200 bg-white/70 p-4">
              <dt className="text-xs font-black uppercase tracking-wide text-slate-500">Prazo</dt>
              <dd className="mt-1 text-sm font-bold leading-relaxed text-brand-900">
                Até 10 dias após o término do contrato, quando não houver dispensa válida.
              </dd>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-white/70 p-4">
              <dt className="text-xs font-black uppercase tracking-wide text-slate-500">Antes ou depois?</dt>
              <dd className="mt-1 text-sm font-bold leading-relaxed text-brand-900">
                As duas opções são possíveis, considerando os riscos até o último dia de trabalho.
              </dd>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-white/70 p-4">
              <dt className="text-xs font-black uppercase tracking-wide text-slate-500">Depois do exame</dt>
              <dd className="mt-1 text-sm font-bold leading-relaxed text-brand-900">
                O médico emite o ASO; a empresa confere e guarda o documento.
              </dd>
            </div>
            <div className="rounded-2xl border border-emerald-200 bg-white/70 p-4">
              <dt className="text-xs font-black uppercase tracking-wide text-slate-500">Para agendar</dt>
              <dd className="mt-1 text-sm font-bold leading-relaxed text-brand-900">
                Tenha em mãos a função, a data do desligamento e o último exame ocupacional.
              </dd>
            </div>
          </dl>
          <div className="not-prose mt-5 rounded-2xl border border-accent-pink/25 bg-white px-4 py-4">
            <p className="text-sm font-bold text-brand-900">Precisa agendar para um funcionário?</p>
            <Link
              href="/servicos/exame-demissional/sao-paulo"
              className="mt-3 inline-flex items-center justify-center rounded-xl bg-accent-pink px-4 py-3 text-sm font-black text-white transition hover:bg-accent-pink-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-pink/40 focus-visible:ring-offset-2"
            >
              Agendar exame demissional em São Paulo <span aria-hidden="true">→</span>
            </Link>
          </div>
        </>
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
              <p>
                Quando o RH pesquisa por <strong>“exame quando sai da empresa”</strong>, normalmente está se referindo ao exame demissional: a avaliação que fecha o acompanhamento ocupacional no desligamento.
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
          title: 'O exame demissional é feito antes ou depois da rescisão?',
          body: (
            <>
              <p>
                Pela NR-07, o exame clínico demissional deve ser realizado <strong>em até 10 dias contados do término do contrato</strong>, desde que não exista uma hipótese válida de dispensa. A empresa pode antecipar o agendamento por organização interna, mas não deve apresentar a data do desligamento como limite legal.
              </p>
              <p>
                Portanto, o exame pode ocorrer antes ou depois da rescisão. O ponto decisivo é respeitar o prazo aplicável e não encerrar o fluxo sem conferir o resultado da avaliação. Quando a empresa antecipa o exame, também precisa verificar se o trabalhador continuará exposto aos mesmos riscos até o último dia de atividade.
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
          title: 'Quanto tempo demora o exame demissional',
          body: (
            <>
              <p>
                A consulta clínica costuma ser a etapa mais rápida. O tempo total depende dos exames complementares previstos no PCMSO para os riscos da função, como audiometria, espirometria, avaliação laboratorial ou outros procedimentos ocupacionais.
              </p>
              <p>
                Para evitar uma segunda ida à clínica, o RH deve encaminhar a função, a guia e as informações do PCMSO antes do atendimento. Assim, a equipe confirma o protocolo e informa o fluxo esperado para emissão do ASO.
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
                <strong>Depois do exame demissional, o médico emite o ASO</strong> com a conclusão correspondente. A empresa deve conferir o documento, disponibilizá-lo ao trabalhador e manter o registro junto ao prontuário e aos demais documentos do PCMSO.
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
          q: 'O que é o exame demissional?',
          a: 'É a avaliação médica ocupacional realizada no encerramento do contrato para registrar a condição de saúde do trabalhador, considerando os riscos da função e o histórico dos exames ocupacionais.',
        },
        {
          q: 'Exame quando sai da empresa é qual?',
          a: 'É o exame demissional, uma avaliação médica ocupacional feita no encerramento do vínculo. Quando não houver dispensa válida, ele deve ser realizado dentro do prazo aplicável da NR-07.',
        },
        {
          q: 'Como se escreve demissional?',
          a: 'A forma correta é “demissional”, com dois “s”. O termo aparece em expressões como exame demissional e ASO demissional.',
        },
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
        {
          q: 'O exame demissional é feito antes ou depois da rescisão?',
          a: 'Pode ser feito antes ou depois. Quando não houver dispensa válida, a NR-07 determina a realização em até 10 dias contados do término do contrato. Se a empresa antecipar, deve considerar se o trabalhador continuará exposto aos riscos da função até o último dia.',
        },
        {
          q: 'Quanto tempo demora o exame demissional?',
          a: 'Depende do protocolo da função. A consulta clínica costuma ser rápida, mas exames complementares previstos no PCMSO podem ampliar o tempo de atendimento e de emissão do ASO.',
        },
        {
          q: 'Quanto custa o exame demissional?',
          a: 'O valor depende do exame clínico e dos exames complementares exigidos pelo PCMSO para os riscos da função. A clínica precisa conferir a função e a guia antes de informar o preço correto.',
        },
      ]}
      maxFaqItems={12}
      sidebarTitle="Precisa agendar o exame demissional?"
      sidebarHook="Informe a função, a data do desligamento e o último exame ocupacional para organizar o atendimento dentro do prazo aplicável."
      sidebarCtaLabel="Agendar exame demissional"
      sidebarCtaHref="/servicos/exame-demissional/sao-paulo"
      related={[
        { label: 'Agendar exame demissional em São Paulo', href: '/servicos/exame-demissional/sao-paulo' },
        { label: 'Exame periódico ocupacional: prazo e periodicidade', href: '/saude/exame-periodico-ocupacional' },
        { label: 'Exame de retorno ao trabalho', href: '/saude/exame-retorno-ao-trabalho' },
        { label: 'ASO: o que é e quando emitir', href: '/saude/aso-atestado-saude-ocupacional' },
        { label: 'Quando demitir um funcionário', href: '/rh/quando-demitir-funcionario' },
        { label: 'PCMSO: programa de controle médico', href: '/saude/pcmso-programa-controle-medico' },
      ]}
      finalCta={{
        title: 'Precisa fazer o exame demissional?',
        desc: 'Envie a função, a data do desligamento e a guia. A equipe confere o protocolo antes de orientar o atendimento e o valor.',
        label: 'Consultar atendimento em São Paulo',
        href: '/servicos/exame-demissional/sao-paulo',
      }}
    />
  );
}
