import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Clinica de Exame Admissional em Sao Paulo para empresas | SERMST',
  description:
    'Clinica de exame admissional em Sao Paulo com ASO, exames ocupacionais, PCMSO e apoio ao eSocial. Veja como escolher, quais documentos levar, prazo, custo e o que avaliar.',
  alternates: { canonical: 'https://sermst.com.br/saude/clinica-exame-admissional-sao-paulo' },
};

export default function ClinicaExameAdmissionalPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub Saúde Ocupacional"
      hubLabelShort="← Hub Saúde"
      hubHref="/saude"
      badgeText="admissao sem gargalo"
      pageUrl="https://sermst.com.br/saude/clinica-exame-admissional-sao-paulo"
      h1="Clinica de Exame Admissional em Sao Paulo: como escolher sem travar a contratacao"
      intro="Quando uma empresa procura clinica de exame admissional em Sao Paulo, ela nao esta comprando so uma consulta. Ela esta tentando contratar com rapidez, emitir ASO sem retrabalho, cumprir o PCMSO e evitar erro no eSocial. Este guia mostra o que realmente deve pesar nessa escolha."
      sections={[
        {
          title: 'Por que a busca por clinica de exame admissional importa tanto',
          body: (
            <>
              <p>
                A busca por <strong>clinica de exame admissional</strong> normalmente aparece em um momento de urgencia real. O RH ja tem um candidato aprovado, a operacao quer a pessoa ativa, e qualquer demora no ASO trava admissao, folha, treinamento e produtividade.
              </p>
              <p>
                Por isso, a palavra-chave nao e apenas informacional. Ela e comercial e operacional. Quem procura <strong>clinicas de exames admissionais</strong> quer uma estrutura que consiga atender com rapidez, emitir o documento certo e reduzir retrabalho.
              </p>
            </>
          ),
        },
        {
          title: 'O que uma boa clinica de exames admissionais precisa entregar',
          body: (
            <ul>
              <li><strong>Fluxo claro de atendimento.</strong> A empresa precisa saber como encaminhar o colaborador, quanto tempo leva e como recebe o ASO.</li>
              <li><strong>Integração com o PCMSO.</strong> O exame admissional não pode ficar solto. Ele precisa seguir o programa médico da empresa.</li>
              <li><strong>Exames complementares no mesmo ecossistema.</strong> Audiometria, visão, sangue, ECG e outros devem estar organizados no mesmo fluxo quando o cargo exigir.</li>
              <li><strong>Critério técnico.</strong> O valor do exame não substitui a segurança médica e documental.</li>
              <li><strong>Capacidade de apoiar o eSocial.</strong> O ASO precisa sustentar o envio do S-2220 com mais consistência.</li>
            </ul>
          ),
        },
        {
          title: 'ASO admissional: o documento que realmente move a contratacao',
          body: (
            <>
              <p>
                O exame admissional e o processo. O <strong>ASO admissional</strong> e a evidencia final. Sem ele, a empresa nao fecha a etapa ocupacional da contratacao com seguranca.
              </p>
              <p>
                Uma clinica de medicina do trabalho forte nao entrega apenas a consulta. Ela entrega o ASO de forma utilizavel para o RH, alinhado ao risco do cargo e com lastro tecnico para o fluxo ocupacional da empresa.
              </p>
            </>
          ),
        },
        {
          title: 'Como escolher entre varias clinicas de exames admissionais',
          body: (
            <>
              <ol>
                <li><strong>Veja se a clinica entende empresa, nao so atendimento avulso.</strong></li>
                <li><strong>Pergunte como funciona a emissao do ASO e dos complementares.</strong></li>
                <li><strong>Entenda se existe laboratorio proprio ou rede integrada.</strong></li>
                <li><strong>Confirme como a clinica lida com urgencia de contratacao.</strong></li>
                <li><strong>Cheque se a operacao ajuda ou atrapalha o fluxo do RH.</strong></li>
              </ol>
              <p>
                Em outras palavras: a melhor clinica para exame admissional nao e so a que atende. E a que <strong>faz a admissao andar</strong> com menos gargalo e mais seguranca.
              </p>
            </>
          ),
        },
        {
          title: 'Quando a home ranqueia e quando a pagina transacional converte',
          body: (
            <>
              <p>
                Muitas empresas chegam primeiro por uma pagina ampla, pesquisando termos como <strong>clinica para exame admissional</strong> ou <strong>clinica de exame admissional em Sao Paulo</strong>. Depois disso, o caminho certo e aprofundar a decisao numa pagina transacional.
              </p>
              <p>
                Por isso, a arquitetura ideal combina tres camadas: home forte para cobertura geral, pagina de servico para conversao e uma blockbuster como esta para capturar e explicar a intencao de busca com profundidade.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'Qual a melhor clinica de exame admissional em Sao Paulo?',
          a: 'A melhor clinica de exame admissional para uma empresa e a que combina velocidade de atendimento, emissao confiavel de ASO, exames complementares organizados e aderencia ao PCMSO. Nao e so uma questao de preco, e de fluidez operacional.',
        },
        {
          q: 'O que levar para fazer exame admissional?',
          a: 'Normalmente a empresa precisa orientar o colaborador a levar documento com foto, CPF e guia de encaminhamento. Dependendo do fluxo, a clinica tambem pode pedir informacoes da empresa e da funcao para validar o atendimento ocupacional.',
        },
        {
          q: 'Clinicas de exames admissionais fazem ASO na hora?',
          a: 'Isso depende da estrutura da clinica e da necessidade de exames complementares. Quando o cargo pede apenas exame clinico, o fluxo tende a ser mais rapido. Se houver audiometria, sangue, ECG ou outras etapas, o prazo muda.',
        },
        {
          q: 'Toda empresa precisa de exame admissional?',
          a: 'Sim. O exame admissional faz parte da rotina ocupacional exigida pela NR-07 antes do inicio das atividades do colaborador. O ASO emitido apos o exame e a base formal para essa etapa.',
        },
        {
          q: 'Qual a diferenca entre clinica ocupacional e clinica de exame admissional?',
          a: 'Clinica de exame admissional e uma busca mais especifica, ligada ao momento da contratacao. Clinica ocupacional e mais ampla: pode englobar ASO, PCMSO, exames periodicos, demissionais, complementares e apoio ao eSocial.',
        },
      ]}
      sidebarTitle="Precisa de exame admissional sem travar o RH?"
      sidebarHook="A SERMST atende empresas que procuram clinica de exame admissional com mais previsibilidade de ASO, exames complementares e integracao ao fluxo ocupacional."
      sidebarCtaLabel="Solicitar atendimento admissional"
      sidebarCtaHref="/servicos/exame-admissional-expresso/sao-paulo"
      related={[
        { label: 'Exame admissional expresso em São Paulo', href: '/servicos/exame-admissional-expresso/sao-paulo' },
        { label: 'O que é saúde ocupacional', href: '/saude/o-que-e-saude-ocupacional' },
        { label: 'PCMSO (NR-07) para empresas', href: '/servicos/pcmso-nr07-programa/sao-paulo' },
        { label: 'ASO: significado e uso', href: '/dicionario/o-que-e-aso' },
      ]}
      finalCta={{
        title: 'Precisa de clinica para exame admissional?',
        desc: 'A SERMST organiza o fluxo de exame admissional, ASO, exames complementares e interface com o RH para empresas que precisam contratar com mais velocidade e menos retrabalho.',
        label: 'Ir para o atendimento admissional',
        href: '/servicos/exame-admissional-expresso/sao-paulo',
      }}
    />
  );
}
