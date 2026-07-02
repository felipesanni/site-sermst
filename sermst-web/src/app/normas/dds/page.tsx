import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'DDS: o que e e como aplicar na empresa | SERMST',
  description:
    'Entenda o que e DDS, para que serve o dialogo diario de seguranca, temas comuns, registro, frequencia e como usar na rotina de SST.',
  alternates: { canonical: 'https://sermst.com.br/normas/dds' },
  openGraph: {
    title: 'DDS: o que e e como aplicar na empresa | SERMST',
    description:
      'Guia pratico sobre DDS para empresas: objetivo, temas, registro, exemplos e conexao com PGR, treinamentos, EPI e prevencao de acidentes.',
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
      coverImage={{ src: '/images/site/sermst-operacao-atendimento.jpg', alt: 'Equipe reunida para dialogo diario de seguranca' }}
      author={{
        name: 'Luiz Cesar Sannino',
        jobTitle: 'Higienista Ocupacional | Tecnico em Seguranca do Trabalho | CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-07-02',
        dateModified: '2026-07-02',
      }}
      h1="DDS: o que e, para que serve e como aplicar na rotina da empresa"
      intro="DDS significa Dialogo Diario de Seguranca. E uma conversa curta, objetiva e registrada antes ou durante a jornada para reforcar riscos, comportamentos seguros e medidas de prevencao."
      quickAnswer={
        <p>
          DDS nao substitui treinamento obrigatorio, PGR ou procedimento formal. Ele funciona como reforco de cultura de seguranca e evidencia de comunicacao preventiva.
        </p>
      }
      sections={[
        {
          title: 'O que e DDS',
          body: (
            <p>
              DDS e uma conversa rapida sobre seguranca do trabalho, geralmente conduzida por lideranca, tecnico de seguranca ou responsavel operacional. O objetivo e lembrar riscos do dia, orientar condutas e reduzir incidentes antes que a atividade comece.
            </p>
          ),
        },
        {
          title: 'Para que serve',
          body: (
            <ul>
              <li>Reforcar uso correto de EPI e EPC.</li>
              <li>Alinhar riscos especificos da tarefa do dia.</li>
              <li>Registrar orientacoes preventivas.</li>
              <li>Melhorar comunicacao entre lideranca e equipe.</li>
              <li>Reduzir improviso em atividades criticas.</li>
            </ul>
          ),
        },
        {
          title: 'Temas comuns de DDS',
          body: (
            <ul>
              <li>Uso de luvas, oculos, botinas e protetor auricular.</li>
              <li>Trabalho em altura, espaco confinado e eletricidade.</li>
              <li>Organizacao, limpeza, quedas e escorregoes.</li>
              <li>Acidente de trabalho e quase acidente.</li>
              <li>Riscos psicossociais, fadiga e atencao operacional.</li>
            </ul>
          ),
        },
        {
          title: 'Como registrar o DDS',
          body: (
            <>
              <p>
                O registro pode ser simples, mas precisa existir: data, tema, responsavel, participantes, assinatura ou evidencia digital e observacoes relevantes.
              </p>
              <p>
                O DDS sem registro ajuda na cultura, mas perde valor como evidencia em fiscalizacao ou processo.
              </p>
            </>
          ),
        },
        {
          title: 'DDS substitui treinamento de NR?',
          body: (
            <p>
              Nao. DDS e reforco de rotina. Treinamentos obrigatorios, como NR-10, NR-33, NR-35 ou CIPA, exigem carga horaria, conteudo minimo, instrutor qualificado e certificado. O DDS complementa, mas nao substitui.
            </p>
          ),
        },
      ]}
      faq={[
        {
          q: 'DDS e obrigatorio por lei?',
          a: 'Nem sempre aparece como obrigacao isolada, mas pode ser uma evidencia importante de orientacao, comunicacao e prevencao dentro da gestao de SST.',
        },
        {
          q: 'DDS precisa ser diario?',
          a: 'O nome sugere diario, mas a frequencia deve fazer sentido para o risco e a operacao. Atividades criticas pedem reforco mais frequente.',
        },
        {
          q: 'Quem pode conduzir DDS?',
          a: 'Pode ser tecnico de seguranca, lideranca operacional ou responsavel treinado, desde que o conteudo seja coerente com os riscos da atividade.',
        },
      ]}
      sidebarTitle="Quer organizar DDS com sentido tecnico?"
      sidebarHook="A SERMST ajuda empresas a conectar DDS, PGR, treinamentos e rotina operacional para criar evidencia real de prevencao."
      sidebarCtaLabel="Organizar rotina de SST"
      related={[
        { label: 'Empresa de seguranca do trabalho', href: '/servicos/empresa-seguranca-do-trabalho' },
        { label: 'NR-6 e EPI', href: '/normas/nr-06-epi' },
        { label: 'PGR NR-01', href: '/servicos/pgr-nr01-gerenciamento-riscos' },
        { label: 'Treinamentos de NRs', href: '/servicos/treinamentos-nrs-cipa-brigada' },
      ]}
    />
  );
}
