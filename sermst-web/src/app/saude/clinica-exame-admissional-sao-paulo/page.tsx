import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Clínica de exame admissional em SP | SERMST',
  description:
    'Clínica de exame admissional em São Paulo com ASO, exames ocupacionais, PCMSO e apoio ao eSocial. Veja como escolher, documentos, prazo e o que avaliar.',
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
      hubLabel="Saúde Ocupacional"
      hubLabelShort="← Saúde Ocupacional"
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
      intro="Quando o RH procura uma clínica de exame admissional em São Paulo, normalmente já existe uma contratação em andamento. A clínica precisa atender no prazo, seguir o PCMSO e manter um fluxo claro para a entrega do ASO."
      sections={[
        {
          title: 'O que está em jogo na escolha da clínica',
          body: (
            <>
              <p>
                O exame admissional deve ser realizado antes de o empregado assumir as atividades. O ASO registra a conclusão médica, mas não funciona como garantia contra discussões futuras. Sua utilidade depende de uma avaliação coerente com os riscos e com o PCMSO.
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
              <li><strong>Fluxo claro para o RH.</strong> A empresa precisa saber como encaminhar o trabalhador, o prazo estimado de liberação do ASO e como receberá o documento.</li>
              <li><strong>Exame alinhado ao PCMSO.</strong> O admissional não pode ser genérico. Os exames precisam seguir o programa médico da empresa, cargo por cargo.</li>
              <li><strong>Exames complementares organizados.</strong> Quando o PCMSO os indicar, audiometria, avaliação visual, exames laboratoriais ou ECG precisam entrar no mesmo acompanhamento.</li>
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
                O exame clínico e os complementares aplicáveis formam o processo. O <strong>Atestado de Saúde Ocupacional</strong> registra a conclusão de apto ou inapto e reúne as informações exigidas pela NR-07. Seus dados também precisam ser coerentes com o evento S-2220.
              </p>
              <p>
                Um ASO bem emitido contém: identificação completa do trabalhador e da empresa, função, riscos ocupacionais relevantes, exames realizados, conclusão de aptidão, dados do médico responsável pelo PCMSO, quando houver, e assinatura do médico que realizou o exame clínico.
              </p>
              <p>
                A SERMST emite o ASO dentro do fluxo corporativo, alinhado ao PCMSO, com exames complementares quando indicados e suporte ao envio do S-2220.
              </p>
            </>
          ),
        },
        {
          title: 'Como avaliar uma clínica antes de fechar contrato',
          body: (
            <ol>
              <li><strong>A clínica atende empresa ou só pessoa física?</strong> Fluxo corporativo exige estrutura, faturamento e comunicação diferentes do atendimento avulso.</li>
              <li><strong>Como os exames complementares são realizados?</strong> Entenda os locais de coleta, os prazos e a forma de integração dos resultados.</li>
              <li><strong>Como funciona em caso de urgência?</strong> Candidato que precisa começar segunda-feira não pode esperar agendamento de 5 dias úteis.</li>
              <li><strong>Como se integra ao PCMSO da empresa?</strong> Clínica que não pergunta sobre o programa médico da empresa vai emitir ASO genérico.</li>
              <li><strong>O que acontece se o resultado for inapto?</strong> A clínica deve orientar o fluxo documental e preservar o sigilo médico. As decisões trabalhistas cabem à empresa com o suporte adequado.</li>
            </ol>
          ),
        },
        {
          title: 'Como funciona o atendimento corporativo da SERMST',
          body: (
            <>
              <p>
                A SERMST tem laboratório próprio na unidade central de São Paulo, fluxo de atendimento corporativo e responsabilidade técnica médica integrada à operação. O RH não precisa coordenar múltiplos fornecedores: exame clínico, complementares e ASO saem do mesmo lugar.
              </p>
              <p>
                Para empresas com admissões recorrentes, a previsibilidade do prazo e a consistência dos documentos evitam que o RH precise refazer encaminhamentos ou cobrar resultados em vários lugares.
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
          a: 'Avalie prazo, alinhamento ao PCMSO, organização dos exames complementares, proteção das informações médicas e clareza do fluxo com o RH. O menor preço não compensa um protocolo inadequado ou retrabalho.',
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
          a: 'O exame admissional cobre o momento anterior ao início das atividades. Uma clínica ocupacional pode acompanhar todo o ciclo, incluindo periódicos, demissionais, retorno, PCMSO e informações de SST para o eSocial.',
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
