import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Clínica de exame admissional em SP | SERMST',
  description:
    'Clínica de exame admissional em São Paulo com ASO, exames ocupacionais, PCMSO e apoio ao eSocial. Veja como escolher, quais documentos levar, prazo e o que avaliar.',
  alternates: { canonical: 'https://sermst.com.br/saude/clinica-exame-admissional-sao-paulo' },
  openGraph: {
    title: 'Clínica de exame admissional em SP | SERMST',
    description:
      'Como escolher a clínica certa para exames admissionais em São Paulo: ASO, fluxo de atendimento, integração com PCMSO e o que define se a admissão anda ou trava.',
    url: 'https://sermst.com.br/saude/clinica-exame-admissional-sao-paulo',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function ClinicaExameAdmissionalPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub Saúde Ocupacional"
      hubLabelShort="← Hub Saúde"
      hubHref="/saude"
      badgeText="Admissão sem gargalo"
      pageUrl="https://sermst.com.br/saude/clinica-exame-admissional-sao-paulo"
      coverImage={{ src: "/images/articles/exame-periodico.jpg", alt: "Médico realizando exame admissional em clínica ocupacional em São Paulo" }}
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-05-01',
      }}

      h1="Clínica de Exame Admissional em São Paulo: como escolher sem travar a contratação"
      intro="Quando o RH procura clínica de exame admissional em São Paulo, a urgência já está na mesa: candidato aprovado, vaga aberta, operação esperando. Escolher a clínica certa é a diferença entre admissão fluida e semana perdida esperando ASO."
      sections={[
        {
          title: 'O que está em jogo na escolha da clínica',
          body: (
            <>
              <p>
                O exame admissional não é um passo burocrático isolado. Ele é o ponto onde saúde, direito e operação se cruzam. Sem ASO válido, o colaborador não pode começar — e sem ASO correto, a empresa não tem proteção em eventual ação trabalhista futura.
              </p>
              <p>
                Uma clínica que atende rápido mas emite ASO incompleto, fora do PCMSO ou sem os exames complementares corretos não resolve o problema: ela cria um novo. A escolha precisa considerar <strong>velocidade e critério técnico ao mesmo tempo</strong>.
              </p>
            </>
          ),
        },
        {
          title: 'O que uma clínica de exames admissionais precisa entregar',
          body: (
            <ul>
              <li><strong>Fluxo claro para o RH.</strong> A empresa precisa saber como encaminhar o colaborador, o prazo real de liberação do ASO e como recebe o documento — sem ter que ligar para descobrir.</li>
              <li><strong>Exame alinhado ao PCMSO.</strong> O admissional não pode ser genérico. Os exames precisam seguir o programa médico da empresa, cargo por cargo.</li>
              <li><strong>Exames complementares no mesmo ecossistema.</strong> Audiometria, visão, sangue, ECG — quando o cargo exige, tudo precisa estar organizado num único fluxo, sem redirecionar o colaborador para outros lugares.</li>
              <li><strong>ASO com validade para o eSocial.</strong> O documento precisa sustentar o evento S-2220. Se houver inconsistência entre o ASO e o que foi enviado, aparece retrabalho.</li>
              <li><strong>Capacidade para urgência.</strong> Contratação não espera. A clínica precisa ter estrutura para atender quando o RH não tem margem de prazo.</li>
            </ul>
          ),
        },
        {
          title: 'ASO admissional: o documento que fecha a etapa',
          body: (
            <>
              <p>
                O exame é o processo. O <strong>Atestado de Saúde Ocupacional</strong> é a evidência que fecha a etapa. Sem ele, a empresa não pode admitir com segurança jurídica — e sem ele correto, não tem como enviar o S-2220 ao eSocial de forma consistente.
              </p>
              <p>
                Um ASO bem emitido contém: identificação completa do trabalhador e da empresa, função, riscos ocupacionais relevantes, exames realizados, conclusão de aptidão, dados do médico responsável pelo PCMSO, quando houver, e assinatura do médico que realizou o exame clínico.
              </p>
              <p>
                A SERMST emite o ASO dentro do fluxo corporativo — alinhado ao PCMSO da empresa, com exames complementares quando necessário e integração ao envio do S-2220.
              </p>
            </>
          ),
        },
        {
          title: 'Como avaliar uma clínica antes de fechar contrato',
          body: (
            <ol>
              <li><strong>A clínica atende empresa ou só pessoa física?</strong> Fluxo corporativo exige estrutura, faturamento e comunicação diferentes do atendimento avulso.</li>
              <li><strong>Tem laboratório próprio ou terceiriza tudo?</strong> Laboratório próprio reduz prazo e pontos de falha no resultado.</li>
              <li><strong>Como funciona em caso de urgência?</strong> Candidato que precisa começar segunda-feira não pode esperar agendamento de 5 dias úteis.</li>
              <li><strong>Como se integra ao PCMSO da empresa?</strong> Clínica que não pergunta sobre o programa médico da empresa vai emitir ASO genérico.</li>
              <li><strong>O que acontece se o exame resultar inapto?</strong> Deve haver protocolo claro — laudo técnico, orientação ao RH, caminho de readaptação ou afastamento.</li>
            </ol>
          ),
        },
        {
          title: 'Por que a SERMST atende empresas que não podem atrasar',
          body: (
            <>
              <p>
                A SERMST tem laboratório próprio na unidade central de São Paulo, fluxo de atendimento corporativo e responsabilidade técnica médica integrada à operação. O RH não precisa coordenar múltiplos fornecedores: exame clínico, complementares e ASO saem do mesmo lugar.
              </p>
              <p>
                Para empresas com volume de contratação — seja 5 ou 50 admissões por mês — a previsibilidade de prazo e a consistência documental são o que separa uma clínica de medicina do trabalho de uma clínica que faz exame admissional por acaso.
              </p>
              <p>
                Em <strong>São Paulo e Grande SP</strong>, a SERMST atende empresas de diferentes portes e setores: indústria, varejo, logística, serviços. O fluxo é ajustado ao PCMSO de cada cliente, não ao modelo padrão da clínica.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'Qual a melhor clínica de exame admissional em São Paulo?',
          a: 'A melhor clínica para uma empresa é a que combina velocidade de ASO, exames complementares organizados, integração com o PCMSO da empresa e capacidade de atender urgência de contratação. Preço importa, mas fluidez operacional importa mais.',
        },
        {
          q: 'O que o colaborador precisa levar para o exame admissional?',
          a: 'Documento com foto (RG, CNH ou passaporte), CPF e guia de encaminhamento emitida pela empresa. Dependendo do cargo, a clínica pode solicitar informações adicionais sobre a função e os riscos para alinhar com o PCMSO.',
        },
        {
          q: 'O ASO admissional pode ser emitido no mesmo dia?',
          a: 'Depende dos exames exigidos pelo PCMSO do cargo. Se o cargo requer apenas exame clínico, o ASO tende a ser liberado no mesmo atendimento. Se houver audiometria, exames laboratoriais ou ECG, o prazo varia conforme os resultados.',
        },
        {
          q: 'Toda empresa é obrigada a fazer exame admissional?',
          a: 'Sim. A NR-07 determina que o exame admissional deve ser realizado antes do início das atividades do colaborador CLT, independente do porte da empresa ou do grau de risco do cargo. O ASO é o documento que comprova o cumprimento dessa obrigação.',
        },
        {
          q: 'Qual a diferença entre clínica ocupacional e clínica de exame admissional?',
          a: 'Clínica de exame admissional é um recorte específico — foco no momento da contratação. Clínica ocupacional é mais ampla: cobre todo o ciclo de medicina do trabalho, incluindo periódicos, demissionais, retorno, PCMSO e eSocial. A SERMST opera como clínica ocupacional completa.',
        },
      ]}
      sidebarTitle="Precisa de exame admissional sem travar o RH?"
      sidebarHook="A SERMST atende empresas com fluxo corporativo: ASO integrado ao PCMSO, laboratório próprio e capacidade para urgência de contratação. Sem redirecionar o colaborador para três lugares."
      sidebarCtaLabel="Solicitar atendimento admissional"
      sidebarCtaHref="/servicos/exame-admissional-expresso/sao-paulo"
      related={[
        { label: 'Exame admissional: o que é e como funciona', href: '/exames/como-funciona-o-exame-admissional' },
        { label: 'Exame admissional expresso em São Paulo', href: '/servicos/exame-admissional-expresso/sao-paulo' },
        { label: 'ASO: o que é e quando emitir', href: '/saude/aso-atestado-saude-ocupacional' },
        { label: 'PCMSO: programa de controle médico', href: '/saude/pcmso-programa-controle-medico' },
        { label: 'O que é saúde ocupacional', href: '/saude/o-que-e-saude-ocupacional' },
      ]}
      finalCta={{
        title: 'Sua empresa precisa de clínica para exame admissional?',
        desc: 'A SERMST organiza o fluxo completo: exame clínico, complementares, ASO e envio ao eSocial. Para empresas que precisam contratar com velocidade e sem retrabalho.',
        label: 'Ir para o atendimento admissional',
        href: '/servicos/exame-admissional-expresso/sao-paulo',
      }}
    />
  );
}
