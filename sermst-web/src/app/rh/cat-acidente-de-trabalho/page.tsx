import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'CAT: acidente de trabalho, prazo e riscos | SERMST',
  description:
    'Entenda quando emitir CAT, prazo legal, quem pode registrar, relacao com acidente de trabalho, doenca ocupacional e riscos para a empresa.',
  alternates: { canonical: 'https://sermst.com.br/rh/cat-acidente-de-trabalho' },
  openGraph: {
    title: 'CAT: acidente de trabalho, prazo e riscos | SERMST',
    description:
      'Guia pratico para empresas sobre CAT: quando emitir, prazo, tipos, omissao, doenca ocupacional e como reduzir passivo trabalhista.',
    url: 'https://sermst.com.br/rh/cat-acidente-de-trabalho',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function CatAcidenteTrabalhoPage() {
  return (
    <BlockbusterArticle
      hubLabel="Hub RH e DP"
      hubLabelShort="Voltar para RH"
      hubHref="/rh"
      pageUrl="https://sermst.com.br/rh/cat-acidente-de-trabalho"
      badgeText="CAT"
      coverImage={{ src: '/images/site/safety-equipment.jpg', alt: 'Equipe avaliando risco de acidente de trabalho e emissao de CAT' }}
      author={{
        name: 'Luiz Cesar Sannino',
        jobTitle: 'Higienista Ocupacional | Tecnico em Seguranca do Trabalho | CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-07-02',
        dateModified: '2026-07-02',
      }}
      h1="CAT: acidente de trabalho, quando emitir e quais os riscos para a empresa"
      intro="A CAT e a Comunicacao de Acidente de Trabalho. Ela deve ser emitida quando ocorre acidente de trabalho, acidente de trajeto quando aplicavel, suspeita ou confirmacao de doenca ocupacional. O problema para a empresa quase nunca e a CAT em si: e emitir tarde, omitir informacao ou nao investigar o caso."
      quickAnswer={
        <p>
          A empresa deve emitir CAT ate o primeiro dia util seguinte ao acidente. Em caso de morte, a comunicacao deve ser imediata. Se a empresa nao emitir, trabalhador, dependentes, sindicato, medico ou autoridade publica podem registrar.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'O que e CAT',
          body: (
            <>
              <p>
                CAT significa Comunicacao de Acidente de Trabalho. E o documento usado para informar oficialmente ao INSS a ocorrencia de acidente de trabalho ou doenca relacionada ao trabalho.
              </p>
              <p>
                A CAT nao e confissao automatica de culpa da empresa. Ela e comunicacao obrigatoria. O que define responsabilidade, estabilidade, nexo causal e indenizacao depende da analise tecnica, medica, previdenciaria e juridica do caso.
              </p>
            </>
          ),
        },
        {
          title: 'Quando emitir CAT',
          body: (
            <ul>
              <li><strong>Acidente tipico:</strong> queda, corte, esmagamento, choque, queimadura ou outro evento ligado ao trabalho.</li>
              <li><strong>Doenca ocupacional:</strong> suspeita ou confirmacao de doenca relacionada a exposicao ou organizacao do trabalho.</li>
              <li><strong>Acidente de trajeto:</strong> avaliar conforme regra vigente e contexto do caso.</li>
              <li><strong>Agravamento de lesao:</strong> quando o trabalho contribui para piora de condicao relacionada a atividade.</li>
            </ul>
          ),
        },
        {
          title: 'Qual o prazo para emitir CAT',
          body: (
            <>
              <p>
                A regra geral e emitir a CAT ate o primeiro dia util seguinte ao da ocorrencia. Em caso de morte, a comunicacao deve ser imediata.
              </p>
              <p>
                Atrasar ou deixar de emitir pode gerar multa, fragilidade documental, aumento de conflito com o trabalhador e piora da defesa em eventual processo trabalhista ou previdenciario.
              </p>
            </>
          ),
        },
        {
          title: 'Quem pode emitir CAT se a empresa nao emitir',
          body: (
            <>
              <p>
                A empresa e a responsavel principal pela emissao. Mas, se ela se omitir, a CAT pode ser registrada pelo proprio trabalhador, dependentes, sindicato, medico assistente ou autoridade publica.
              </p>
              <p>
                Isso cria um risco adicional: quando terceiros emitem a CAT, a narrativa inicial do caso pode nascer sem a leitura tecnica da empresa, sem investigacao interna e sem documentos de SST organizados.
              </p>
            </>
          ),
        },
        {
          title: 'CAT e estabilidade acidentaria',
          body: (
            <>
              <p>
                A existencia de CAT pode se conectar a afastamento previdenciario e discussao sobre estabilidade acidentaria. Mas a estabilidade depende do conjunto do caso, especialmente reconhecimento do nexo e concessao de beneficio acidentario quando aplicavel.
              </p>
              <p>
                Por isso, o ponto central para a empresa nao e esconder a CAT. E investigar, documentar, corrigir risco, revisar PGR/PCMSO e manter prova tecnica coerente.
              </p>
            </>
          ),
        },
        {
          title: 'Como reduzir passivo depois de um acidente',
          body: (
            <ol>
              <li>Atender o trabalhador e registrar a ocorrencia com dados objetivos.</li>
              <li>Emitir CAT no prazo quando houver obrigacao.</li>
              <li>Investigar causa imediata e causa raiz do acidente.</li>
              <li>Revisar PGR, treinamentos, EPI, EPC e procedimentos relacionados.</li>
              <li>Guardar evidencia de medidas corretivas e comunicacao interna.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'Emitir CAT significa assumir culpa?',
          a: 'Nao. A CAT e comunicacao obrigatoria do evento. Responsabilidade e nexo dependem de analise tecnica, medica, previdenciaria e juridica.',
        },
        {
          q: 'Qual o prazo da CAT?',
          a: 'Ate o primeiro dia util seguinte ao acidente. Em caso de morte, a comunicacao deve ser imediata.',
        },
        {
          q: 'Doenca ocupacional tambem exige CAT?',
          a: 'Sim, quando ha suspeita ou confirmacao de relacao com o trabalho, a CAT pode ser necessaria.',
        },
        {
          q: 'A empresa pode emitir CAT mesmo sem afastamento?',
          a: 'Sim. A obrigacao de comunicar nao depende apenas de afastamento longo. O caso concreto precisa ser avaliado.',
        },
      ]}
      sidebarTitle="Teve acidente ou suspeita ocupacional?"
      sidebarHook="A SERMST ajuda a organizar leitura tecnica, PGR, PCMSO, documentos e apoio pericial para reduzir risco depois de acidente de trabalho."
      sidebarCtaLabel="Falar sobre CAT"
      related={[
        { label: 'Pericia trabalhista e assistente tecnico', href: '/servicos/pericia-trabalhista-assistente-tecnico' },
        { label: 'PGR NR-01', href: '/servicos/pgr-nr01-gerenciamento-riscos' },
        { label: 'PCMSO NR-07', href: '/servicos/pcmso-nr07-programa' },
        { label: 'Doencas ocupacionais', href: '/saude/doencas-ocupacionais' },
        { label: 'NR-6 e EPI', href: '/normas/nr-06-epi' },
      ]}
    />
  );
}
