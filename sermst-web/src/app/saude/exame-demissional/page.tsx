import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Exame demissional: o que e quando fazer | SERMST',
  description:
    'Entenda o que e o exame demissional, quando ele e obrigatorio, qual o prazo, quando pode haver dispensa e como o ASO demissional protege a empresa.',
  alternates: { canonical: 'https://sermst.com.br/saude/exame-demissional' },
  openGraph: {
    title: 'Exame demissional: o que e quando fazer | SERMST',
    description:
      'Veja quando o exame demissional e obrigatorio, qual o prazo, o que ele avalia e como o ASO demissional reduz risco trabalhista e falhas no eSocial.',
    url: 'https://sermst.com.br/saude/exame-demissional',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function ExameDemissionalPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub Saúde Ocupacional"
      hubLabelShort="← Hub Saúde"
      hubHref="/saude"
      pageUrl="https://sermst.com.br/saude/exame-demissional"
      coverImage={{ src: "/images/articles/exame-demissional.jpg", alt: "Consulta médica ocupacional para exame demissional" }}
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-07-01',
      }}
      h1="Exame demissional: o que é, quando fazer e como proteger a empresa"
      intro="O exame demissional é a última oportunidade da empresa documentar o estado de saúde do trabalhador antes da rescisão. Sem ele, qualquer discussão futura sobre doença ocupacional fica mais exposta. Aqui o foco é explicar regras, prazo, dispensa e o papel do ASO demissional."
      sections={[
        {
          title: 'O que é o exame demissional',
          body: (
            <>
              <p>
                O exame demissional é a avaliação médica feita <strong>antes do término do contrato de trabalho</strong>, com objetivo de atestar o estado de saúde do trabalhador no momento da rescisão. Ele integra a lógica da NR-07 e fecha o ciclo ocupacional iniciado no admissional.
              </p>
              <p>
                A função do demissional é dupla: protege o trabalhador, que recebe registro da sua condição de saúde na saída, e protege a empresa, que cria evidência objetiva para defesa em eventual ação trabalhista posterior por doença ocupacional.
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
                O exame demissional deve ser feito <strong>até a data do efetivo desligamento</strong>. Na prática, o ideal é agendar antes do fechamento da rescisão para que o ASO demissional esteja pronto sem gerar atraso operacional.
              </p>
              <p>
                Quando a empresa deixa o exame para o fim, costuma criar três problemas ao mesmo tempo:
              </p>
              <ul>
                <li>verbas rescisórias pressionadas por prazo;</li>
                <li>evento trabalhista enviado com pressa ou com lacuna documental;</li>
                <li>fragilidade na prova do estado de saúde do trabalhador na saída.</li>
              </ul>
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
                Justamente por isso, pular o demissional costuma ser mais caro do que fazer o exame certo no prazo certo.
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
      ]}
      faq={[
        {
          q: 'Quem paga o exame demissional?',
          a: 'A empresa. O custo do exame ocupacional faz parte da obrigação do empregador e não pode ser repassado ao trabalhador.',
        },
        {
          q: 'Exame demissional pode ser feito depois da saída?',
          a: 'O caminho correto é fazer até a data do desligamento. Fazer depois não resolve bem o vazio documental entre a saída e a realização do exame.',
        },
        {
          q: 'Quando a empresa pode dispensar o demissional?',
          a: 'Quando o exame clínico ocupacional mais recente estiver dentro da janela da NR-07 e ainda refletir os riscos reais da função exercida até a saída.',
        },
        {
          q: 'O que acontece se o trabalhador se recusar a fazer o exame?',
          a: 'A empresa precisa documentar a convocação e a recusa de forma objetiva, porque a proteção depende da prova de que a obrigação foi oferecida corretamente.',
        },
        {
          q: 'Qual a diferença entre exame demissional e ASO demissional?',
          a: 'O exame demissional é o processo de avaliação ocupacional. O ASO demissional é o documento emitido ao final, com a conclusão médica correspondente.',
        },
      ]}
      sidebarTitle="Precisa agendar o exame demissional?"
      sidebarHook="Depois de entender a regra, o próximo passo é não travar a rescisão. A página de agendamento concentra o formulário e o contato comercial para exame demissional."
      sidebarCtaLabel="Agendar exame demissional"
      sidebarCtaHref="/saude/exame-demissional-guia"
      related={[
        { label: 'Agendar exame demissional', href: '/saude/exame-demissional-guia' },
        { label: 'ASO: o que é e quando emitir', href: '/saude/aso-atestado-saude-ocupacional' },
        { label: 'Quando demitir um funcionário', href: '/rh/quando-demitir-funcionario' },
        { label: 'Como fazer carta de demissão', href: '/rh/carta-demissao' },
        { label: 'PCMSO: programa de controle médico', href: '/saude/pcmso-programa-controle-medico' },
        { label: 'O que é saúde ocupacional', href: '/saude/o-que-e-saude-ocupacional' },
      ]}
    />
  );
}
