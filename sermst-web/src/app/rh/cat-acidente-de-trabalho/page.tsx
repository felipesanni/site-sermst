import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'CAT: acidente de trabalho, prazo e riscos | SERMST',
  description:
    'Entenda quando emitir CAT, prazo legal, quem pode registrar, relação com acidente de trabalho, doença ocupacional e riscos para a empresa.',
  alternates: { canonical: 'https://sermst.com.br/rh/cat-acidente-de-trabalho' },
  openGraph: {
    title: 'CAT: acidente de trabalho, prazo e riscos | SERMST',
    description:
      'Guia prático para empresas sobre CAT: quando emitir, prazo, tipos, omissão, doença ocupacional e como reduzir passivo trabalhista.',
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
      coverImage={{ src: '/images/site/safety-equipment.jpg', alt: 'Equipe avaliando risco de acidente de trabalho e emissão de CAT' }}
      author={{
        name: 'Luiz Cesar Sannino',
        jobTitle: 'Higienista Ocupacional | Técnico em Segurança do Trabalho | CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-07-02',
        dateModified: '2026-07-02',
      }}
      readingTime="10 min"
      h1="CAT: acidente de trabalho, quando emitir e quais os riscos para a empresa"
      intro="A CAT é a Comunicação de Acidente de Trabalho. Ela deve ser emitida quando ocorre acidente de trabalho, acidente de trajeto quando aplicável, suspeita ou confirmação de doença ocupacional. O problema para a empresa quase nunca é a CAT em si: é emitir tarde, omitir informação ou não investigar o caso."
      quickAnswer={
        <p>
          A empresa deve emitir CAT até o primeiro dia útil seguinte ao acidente. Em caso de morte, a comunicação deve ser imediata. Se a empresa não emitir, trabalhador, dependentes, sindicato, médico ou autoridade pública podem registrar.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'O que é CAT',
          body: (
            <>
              <p>
                CAT significa Comunicação de Acidente de Trabalho. É o documento usado para informar oficialmente ao INSS a ocorrência de acidente de trabalho ou doença relacionada ao trabalho.
              </p>
              <p>
                A CAT não é confissão automática de culpa da empresa. Ela é comunicação obrigatória. O que define responsabilidade, estabilidade, nexo causal e indenização depende da análise técnica, médica, previdenciária e jurídica do caso.
              </p>
            </>
          ),
        },
        {
          title: 'Quando emitir CAT',
          body: (
            <ul>
              <li><strong>Acidente típico:</strong> queda, corte, esmagamento, choque, queimadura ou outro evento ligado ao trabalho.</li>
              <li><strong>Doença ocupacional:</strong> suspeita ou confirmação de doença relacionada à exposição ou organização do trabalho.</li>
              <li><strong>Acidente de trajeto:</strong> avaliar conforme regra vigente e contexto do caso.</li>
              <li><strong>Agravamento de lesão:</strong> quando o trabalho contribui para piora de condição relacionada à atividade.</li>
            </ul>
          ),
        },
        {
          title: 'Tipos de CAT: inicial, reabertura e óbito',
          body: (
            <ul>
              <li><strong>CAT inicial:</strong> usada na primeira comunicação do acidente, doença ocupacional ou ocorrência relacionada ao trabalho.</li>
              <li><strong>CAT de reabertura:</strong> usada quando há agravamento, reinício de tratamento ou novo afastamento ligado ao mesmo caso.</li>
              <li><strong>CAT de óbito:</strong> usada quando o acidente ou doença relacionada ao trabalho resulta em morte.</li>
            </ul>
          ),
        },
        {
          title: 'Qual o prazo para emitir CAT',
          body: (
            <>
              <p>
                A regra geral é emitir a CAT até o primeiro dia útil seguinte ao da ocorrência. Em caso de morte, a comunicação deve ser imediata.
              </p>
              <p>
                Atrasar ou deixar de emitir pode gerar multa, fragilidade documental, aumento de conflito com o trabalhador e piora da defesa em eventual processo trabalhista ou previdenciário.
              </p>
            </>
          ),
        },
        {
          title: 'Passo a passo depois de um acidente de trabalho',
          body: (
            <ol>
              <li>Prestar atendimento imediato ao trabalhador e acionar socorro quando necessário.</li>
              <li>Registrar data, horário, local, atividade, testemunhas e condição do ambiente.</li>
              <li>Avaliar se há obrigação de emitir CAT e respeitar o prazo legal.</li>
              <li>Separar PGR, PCMSO, ASO, treinamentos, ficha de EPI e procedimentos ligados à função.</li>
              <li>Investigar causa raiz e definir medidas corretivas para evitar repetição.</li>
              <li>Atualizar documentos de SST quando o acidente revelar risco não controlado.</li>
            </ol>
          ),
        },
        {
          title: 'Quem pode emitir CAT se a empresa não emitir',
          body: (
            <>
              <p>
                A empresa é a responsável principal pela emissão. Mas, se ela se omitir, a CAT pode ser registrada pelo próprio trabalhador, dependentes, sindicato, médico assistente ou autoridade pública.
              </p>
              <p>
                Isso cria um risco adicional: quando terceiros emitem a CAT, a narrativa inicial do caso pode nascer sem a leitura técnica da empresa, sem investigação interna e sem documentos de SST organizados.
              </p>
            </>
          ),
        },
        {
          title: 'CAT, INSS e eSocial: por que o RH precisa alinhar tudo',
          body: (
            <>
              <p>
                A CAT conversa com rotina previdenciária, afastamentos, benefícios, estabilidade e histórico ocupacional. Por isso, RH, DP, medicina do trabalho e segurança do trabalho precisam trabalhar com a mesma versão documentada dos fatos.
              </p>
              <p>
                Quando a CAT é emitida de um jeito, o atestado diz outra coisa, o PGR não registra aquele risco e o ASO não conversa com a função, a empresa cria contradições que podem aparecer depois no INSS, no eSocial ou em processo trabalhista.
              </p>
            </>
          ),
        },
        {
          title: 'Documentos que a empresa deve organizar após o acidente',
          body: (
            <ul>
              <li>Relato objetivo da ocorrência, com data, horário, local e envolvidos.</li>
              <li>Atendimento médico, exames, atestados e encaminhamentos relacionados.</li>
              <li>Investigação de causa imediata e causa raiz.</li>
              <li>Fotos, registros de máquina, escala, procedimento, treinamento e entrega de EPI.</li>
              <li>PGR, PCMSO, ASO e laudos relacionados à função do trabalhador.</li>
              <li>Medidas corretivas adotadas depois do evento.</li>
            </ul>
          ),
        },
        {
          title: 'CAT e estabilidade acidentária',
          body: (
            <>
              <p>
                A existência de CAT pode se conectar a afastamento previdenciário e discussão sobre estabilidade acidentária. Mas a estabilidade depende do conjunto do caso, especialmente reconhecimento do nexo e concessão de benefício acidentário quando aplicável.
              </p>
              <p>
                Por isso, o ponto central para a empresa não é esconder a CAT. É investigar, documentar, corrigir risco, revisar PGR/PCMSO e manter prova técnica coerente.
              </p>
            </>
          ),
        },
        {
          title: 'Quando a CAT vira discussão trabalhista',
          body: (
            <>
              <p>
                A discussão trabalhista costuma surgir quando o trabalhador alega culpa da empresa, falta de EPI, ausência de treinamento, máquina sem proteção, ambiente inseguro ou doença causada pela atividade. A CAT é apenas uma peça desse quebra-cabeça.
              </p>
              <p>
                A defesa fica mais forte quando a empresa demonstra prevenção anterior ao acidente e resposta posterior ao evento: documentos atualizados, investigação técnica, correção de falhas e acompanhamento médico adequado.
              </p>
            </>
          ),
        },
        {
          title: 'Como reduzir passivo depois de um acidente',
          body: (
            <ol>
              <li>Atender o trabalhador e registrar a ocorrência com dados objetivos.</li>
              <li>Emitir CAT no prazo quando houver obrigação.</li>
              <li>Investigar causa imediata e causa raiz do acidente.</li>
              <li>Revisar PGR, treinamentos, EPI, EPC e procedimentos relacionados.</li>
              <li>Guardar evidência de medidas corretivas e comunicação interna.</li>
            </ol>
          ),
        },
        {
          title: 'Erros que aumentam o risco para a empresa',
          body: (
            <ol>
              <li>Não emitir CAT por medo de “assumir culpa”.</li>
              <li>Emitir CAT sem investigar e sem organizar documentos técnicos.</li>
              <li>Tratar acidente como caso isolado, sem revisar PGR, EPI, treinamento e procedimento.</li>
              <li>Não registrar medida corretiva depois do evento.</li>
              <li>Deixar trabalhador, sindicato ou médico criarem a primeira narrativa sem participação técnica da empresa.</li>
            </ol>
          ),
        },
        {
          title: 'Como a SERMST apoia empresas após acidente',
          body: (
            <p>
              A SERMST ajuda a organizar a leitura técnica do acidente, revisar PGR, PCMSO, EPI, treinamentos e documentos de suporte, além de apoiar empresas e advogados em perícias trabalhistas envolvendo acidente, insalubridade, periculosidade ou doença ocupacional.
            </p>
          ),
        },
      ]}
      faq={[
        {
          q: 'Emitir CAT significa assumir culpa?',
          a: 'Não. A CAT é comunicação obrigatória do evento. Responsabilidade e nexo dependem de análise técnica, médica, previdenciária e jurídica.',
        },
        {
          q: 'Qual o prazo da CAT?',
          a: 'Até o primeiro dia útil seguinte ao acidente. Em caso de morte, a comunicação deve ser imediata.',
        },
        {
          q: 'Doença ocupacional também exige CAT?',
          a: 'Sim, quando há suspeita ou confirmação de relação com o trabalho, a CAT pode ser necessária.',
        },
        {
          q: 'A empresa pode emitir CAT mesmo sem afastamento?',
          a: 'Sim. A obrigação de comunicar não depende apenas de afastamento longo. O caso concreto precisa ser avaliado.',
        },
        {
          q: 'CAT gera multa se for emitida fora do prazo?',
          a: 'Pode gerar autuação e fragilizar a defesa da empresa. O risco aumenta quando há atraso, omissão ou falta de investigação técnica.',
        },
        {
          q: 'Acidente sem lesão precisa de CAT?',
          a: 'Depende do caso. Quase acidente e incidente sem lesão devem ser investigados, mas a emissão de CAT exige avaliação do evento e de sua relação com acidente ou doença do trabalho.',
        },
        {
          q: 'A CAT substitui investigação interna?',
          a: 'Não. A CAT comunica o evento ao INSS. A investigação interna explica causa, responsabilidade operacional e medidas corretivas.',
        },
      ]}
      maxFaqItems={8}
      sidebarTitle="Teve acidente ou suspeita ocupacional?"
      sidebarHook="A SERMST ajuda a organizar leitura técnica, PGR, PCMSO, documentos e apoio pericial para reduzir risco depois de acidente de trabalho."
      sidebarCtaLabel="Falar sobre CAT"
      related={[
        { label: 'Perícia trabalhista e assistente técnico', href: '/servicos/pericia-trabalhista-assistente-tecnico' },
        { label: 'PGR NR-01', href: '/servicos/pgr-nr01-gerenciamento-riscos' },
        { label: 'PCMSO NR-07', href: '/servicos/pcmso-nr07-programa' },
        { label: 'Doenças ocupacionais', href: '/saude/doencas-ocupacionais' },
        { label: 'NR-6 e EPI', href: '/normas/nr-06-epi' },
      ]}
    />
  );
}
