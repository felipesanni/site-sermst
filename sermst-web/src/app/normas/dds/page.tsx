import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'DDS: o que é e como aplicar na empresa | SERMST',
  description:
    'Entenda o que é DDS, para que serve o diálogo diário de segurança, temas comuns, registro, frequência e como usar na rotina de SST.',
  alternates: { canonical: 'https://sermst.com.br/normas/dds' },
  openGraph: {
    title: 'DDS: o que é e como aplicar na empresa | SERMST',
    description:
      'Guia prático sobre DDS para empresas: objetivo, temas, registro, exemplos e conexão com PGR, treinamentos, EPI e prevenção de acidentes.',
    url: 'https://sermst.com.br/normas/dds',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function DDSPage() {
  return (
    <BlockbusterArticle
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="Voltar para normas"
      hubHref="/normas"
      pageUrl="https://sermst.com.br/normas/dds"
      badgeText="DDS"
      coverImage={{ src: '/images/site/sermst-operacao-atendimento.jpg', alt: 'Equipe reunida para diálogo diário de segurança' }}
      author={{
        name: 'Luiz Cesar Sannino',
        jobTitle: 'Higienista Ocupacional | Técnico em Segurança do Trabalho | CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-07-02',
        dateModified: '2026-07-02',
      }}
      readingTime="8 min"
      h1="DDS: o que é, para que serve e como aplicar na rotina da empresa"
      intro="DDS significa Diálogo Diário de Segurança. É uma conversa curta, objetiva e registrada antes ou durante a jornada para reforçar riscos, comportamentos seguros e medidas de prevenção."
      quickAnswer={
        <p>
          DDS não substitui treinamento obrigatório, PGR ou procedimento formal. Ele funciona como reforço de cultura de segurança e evidência de comunicação preventiva.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'O que é DDS',
          body: (
            <p>
              DDS é uma conversa rápida sobre segurança do trabalho, geralmente conduzida por liderança, técnico de segurança ou responsável operacional. O objetivo é lembrar riscos do dia, orientar condutas e reduzir incidentes antes que a atividade comece.
            </p>
          ),
        },
        {
          title: 'Para que serve',
          body: (
            <ul>
              <li>Reforçar uso correto de EPI e EPC.</li>
              <li>Alinhar riscos específicos da tarefa do dia.</li>
              <li>Registrar orientações preventivas.</li>
              <li>Melhorar comunicação entre liderança e equipe.</li>
              <li>Reduzir improviso em atividades críticas.</li>
            </ul>
          ),
        },
        {
          title: 'Quando fazer DDS na rotina',
          body: (
            <>
              <p>
                O DDS faz mais sentido antes de atividades críticas, mudanças de tarefa, início de turno, operações com risco elevado ou depois de incidente/quase acidente. Também pode ser usado para reforçar campanhas de segurança e temas recorrentes do PGR.
              </p>
              <p>
                Em empresas com operação simples, a frequência pode ser menor. Em ambientes com risco alto, o DDS frequente ajuda a manter o risco visível para quem executa a atividade.
              </p>
            </>
          ),
        },
        {
          title: 'Como montar um DDS eficiente',
          body: (
            <ol>
              <li>Escolha um tema ligado ao risco real da atividade do dia.</li>
              <li>Use linguagem simples e exemplos da própria operação.</li>
              <li>Conecte o assunto a PGR, EPI, procedimento ou treinamento já existente.</li>
              <li>Abra espaço para dúvidas e relatos de quase acidente.</li>
              <li>Registre participantes, tema, data, responsável e observações.</li>
            </ol>
          ),
        },
        {
          title: 'Roteiro simples para um DDS de 5 minutos',
          body: (
            <ol>
              <li><strong>Tema:</strong> escolha um risco específico, como queda, ruído, corte, químico ou fadiga.</li>
              <li><strong>Situação real:</strong> cite uma atividade do dia ou um quase acidente recente.</li>
              <li><strong>Conduta esperada:</strong> explique o que deve ser feito e o que deve ser evitado.</li>
              <li><strong>Checagem:</strong> pergunte se a equipe entendeu e se há barreira para cumprir.</li>
              <li><strong>Registro:</strong> anote tema, data, participantes e responsável.</li>
            </ol>
          ),
        },
        {
          title: 'Temas comuns de DDS',
          body: (
            <ul>
              <li>Uso de luvas, óculos, botinas e protetor auricular.</li>
              <li>Trabalho em altura, espaço confinado e eletricidade.</li>
              <li>Organização, limpeza, quedas e escorregões.</li>
              <li>Acidente de trabalho e quase acidente.</li>
              <li>Riscos psicossociais, fadiga e atenção operacional.</li>
            </ul>
          ),
        },
        {
          title: 'Exemplos de temas por tipo de risco',
          body: (
            <ul>
              <li><strong>Ruído:</strong> uso correto de protetor auricular, conservação e troca.</li>
              <li><strong>Altura:</strong> inspeção de cinto, ancoragem, APR e permissão de trabalho.</li>
              <li><strong>Químicos:</strong> FISPQ, luvas, óculos, ventilação e armazenamento.</li>
              <li><strong>Ergonomia:</strong> pausas, postura, repetitividade e organização do posto.</li>
              <li><strong>Psicossociais:</strong> fadiga, pressão operacional, assédio, comunicação e liderança.</li>
            </ul>
          ),
        },
        {
          title: 'Como registrar o DDS',
          body: (
            <>
              <p>
                O registro pode ser simples, mas precisa existir: data, tema, responsável, participantes, assinatura ou evidência digital e observações relevantes.
              </p>
              <p>
                O DDS sem registro ajuda na cultura, mas perde valor como evidência em fiscalização ou processo.
              </p>
            </>
          ),
        },
        {
          title: 'Como medir se o DDS está funcionando',
          body: (
            <p>
              Bons indicadores são redução de quase acidentes, aumento de relatos preventivos, menos recusa de EPI, menos improviso, maior participação da liderança e registros ligados a riscos reais. Se o DDS sempre tem o mesmo tema genérico e ninguém muda comportamento, ele virou ritual vazio.
            </p>
          ),
        },
        {
          title: 'DDS substitui treinamento de NR?',
          body: (
            <p>
              Não. DDS é reforço de rotina. Treinamentos obrigatórios, como NR-10, NR-33, NR-35 ou CIPA, exigem carga horária, conteúdo mínimo, instrutor qualificado e certificado. O DDS complementa, mas não substitui.
            </p>
          ),
        },
        {
          title: 'Erros que enfraquecem o DDS',
          body: (
            <p>
              DDS fraco é aquele feito só para preencher lista: tema genérico, conversa repetida, sem vínculo com risco real e sem registro. Para ter valor em segurança e em evidência documental, o DDS precisa conversar com a atividade, com os acidentes anteriores, com o PGR e com os treinamentos obrigatórios.
            </p>
          ),
        },
        {
          title: 'Como a SERMST ajuda a estruturar DDS',
          body: (
            <p>
              A SERMST ajuda a empresa a transformar DDS em ferramenta de prevenção conectada ao PGR, aos treinamentos obrigatórios, aos acidentes anteriores e aos riscos reais da operação. Assim, o DDS deixa de ser uma lista assinada e passa a ser parte da cultura documentada de SST.
            </p>
          ),
        },
      ]}
      faq={[
        {
          q: 'DDS é obrigatório por lei?',
          a: 'Nem sempre aparece como obrigação isolada, mas pode ser uma evidência importante de orientação, comunicação e prevenção dentro da gestão de SST.',
        },
        {
          q: 'DDS precisa ser diario?',
          a: 'O nome sugere diário, mas a frequência deve fazer sentido para o risco e a operação. Atividades críticas pedem reforço mais frequente.',
        },
        {
          q: 'Quem pode conduzir DDS?',
          a: 'Pode ser técnico de segurança, liderança operacional ou responsável treinado, desde que o conteúdo seja coerente com os riscos da atividade.',
        },
        {
          q: 'DDS precisa ter assinatura?',
          a: 'A assinatura ou evidência digital ajuda a comprovar participação. O importante é manter registro rastreável do tema, data, responsável e participantes.',
        },
        {
          q: 'DDS vale como prova em fiscalização?',
          a: 'Pode ajudar como evidência de orientação preventiva, mas não substitui documentos obrigatórios, treinamentos formais ou medidas de controle.',
        },
        {
          q: 'Quanto tempo deve durar um DDS?',
          a: 'Normalmente é curto e objetivo. O mais importante é tratar um risco específico com clareza e registrar a orientação.',
        },
      ]}
      maxFaqItems={8}
      sidebarTitle="Quer organizar DDS com sentido técnico?"
      sidebarHook="A SERMST ajuda empresas a conectar DDS, PGR, treinamentos e rotina operacional para criar evidência real de prevenção."
      sidebarCtaLabel="Organizar rotina de SST"
      related={[
        { label: 'Empresa de segurança do trabalho', href: '/servicos/empresa-seguranca-do-trabalho' },
        { label: 'NR-6 e EPI', href: '/normas/nr-06-epi' },
        { label: 'PGR NR-01', href: '/servicos/pgr-nr01-gerenciamento-riscos' },
        { label: 'Treinamentos de NRs', href: '/servicos/treinamentos-nrs-cipa-brigada' },
      ]}
    />
  );
}
