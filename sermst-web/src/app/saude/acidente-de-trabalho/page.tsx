import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Acidente de trabalho: tipos e riscos | SERMST',
  description:
    'Acidente de trabalho é todo evento que causa lesão ou morte ao trabalhador no exercício da atividade. Entenda o conceito legal, tipos, nexo causal e o que muda para a empresa.',
  alternates: { canonical: 'https://sermst.com.br/saude/acidente-de-trabalho' },
  openGraph: {
    title: 'Acidente de trabalho: tipos e riscos | SERMST',
    description:
      'Conceito legal de acidente de trabalho, tipos (típico, de trajeto, doença ocupacional), nexo causal, estabilidade acidentária e como a empresa deve agir.',
    url: 'https://sermst.com.br/saude/acidente-de-trabalho',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function AcidenteDeTrabalhoPage() {
  return (
    <BlockbusterArticle
      hubLabel="Saúde Ocupacional"
      hubLabelShort="← Saúde Ocupacional"
      hubHref="/saude"
      pageUrl="https://sermst.com.br/saude/acidente-de-trabalho"
      badgeText="SST"
      coverImage={{ src: '/images/site/safety-equipment.jpg', alt: 'Ambiente de trabalho com medidas de prevenção de acidentes' }}
      author={{
        name: 'Luiz Cesar Sannino',
        jobTitle: 'Higienista Ocupacional | Técnico em Segurança do Trabalho | CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-07-02',
        dateModified: '2026-07-02',
      }}
      readingTime="10 min"
      h1="Acidente de trabalho: o que é, tipos e o que muda para a empresa"
      intro="Acidente de trabalho é o evento ligado ao exercício do trabalho que provoca lesão, perturbação funcional ou morte. A legislação também inclui doenças ocupacionais e outras situações equiparadas. Veja o que a empresa precisa registrar e comunicar."
      quickAnswer={
        <p>
          Acidente de trabalho é, legalmente, o evento relacionado ao exercício do trabalho que causa lesão corporal, perturbação funcional ou morte. A Lei 8.213/91 também abrange doenças ocupacionais e situações equiparadas, como o acidente no percurso entre a residência e o trabalho. A empresa comunica a ocorrência por meio da <strong>CAT, Comunicação de Acidente de Trabalho</strong>, até o primeiro dia útil seguinte. Em caso de morte, a comunicação é imediata.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'Conceito legal de acidente de trabalho',
          body: (
            <>
              <p>
                A Lei 8.213/91 define acidente de trabalho como o evento que ocorre pelo exercício do trabalho a serviço da empresa e provoca lesão corporal ou perturbação funcional capaz de causar morte ou perda ou redução da capacidade para o trabalho, de forma permanente ou temporária.
              </p>
              <p>
                O trabalho não precisa ser a única causa do dano. A lei também reconhece situações em que ele contribui diretamente para o resultado, o que exige análise de nexo causal ou concausal.
              </p>
            </>
          ),
        },
        {
          title: 'Tipos de acidente de trabalho',
          body: (
            <>
              <p>A legislação reconhece três tipos principais:</p>
              <ul>
                <li>
                  <strong>Acidente típico:</strong> evento abrupto e imediato ligado ao exercício da atividade. Exemplos: queda, corte, esmagamento, choque elétrico, queimadura, colisão. É o tipo mais comum e o mais fácil de identificar.
                </li>
                <li>
                  <strong>Acidente de trajeto:</strong> ocorre no percurso da residência para o local de trabalho ou no retorno. A Lei 8.213/91 mantém essa hipótese entre as situações equiparadas a acidente de trabalho.
                </li>
                <li>
                  <strong>Doença ocupacional:</strong> inclui a doença profissional, ligada à atividade exercida, e a doença do trabalho, relacionada às condições em que o trabalho é realizado. O nexo precisa ser avaliado no caso concreto.
                </li>
              </ul>
            </>
          ),
        },
        {
          title: 'O que é nexo causal e por que ele define tudo',
          body: (
            <>
              <p>
                Nexo causal é a relação entre o trabalho e o dano sofrido. Também pode haver concausa, quando o trabalho não é a causa única, mas contribui diretamente para a lesão ou doença.
              </p>
              <p>
                Na análise previdenciária, o <strong>Nexo Técnico Epidemiológico Previdenciário (NTEP)</strong> considera a relação estatística entre a atividade econômica e determinados agravos. Ele pode fundamentar o reconhecimento do nexo pelo INSS, mas não encerra a análise: a empresa pode apresentar elementos técnicos para contestá-lo.
              </p>
            </>
          ),
        },
        {
          title: 'Acidente típico vs. doença ocupacional: diferenças práticas',
          body: (
            <ul>
              <li><strong>Acidente típico:</strong> costuma ter data, local e sequência dos fatos identificáveis. A investigação começa logo após a ocorrência.</li>
              <li><strong>Doença ocupacional:</strong> pode surgir gradualmente. A apuração considera histórico de exposição, avaliações médicas, PGR, PCMSO e atividades exercidas.</li>
            </ul>
          ),
        },
        {
          title: 'O que acontece depois de um acidente: o fluxo do lado da empresa',
          body: (
            <ol>
              <li><strong>Atendimento imediato ao trabalhador</strong> e acionamento de socorro quando necessário.</li>
              <li><strong>Registro da ocorrência</strong> com data, horário, local, atividade, testemunhas e condição do ambiente.</li>
               <li><strong>Emissão da CAT</strong> até o primeiro dia útil seguinte. Em caso de morte, a comunicação deve ser imediata.</li>
              <li><strong>Investigação de causa imediata e causa raiz</strong> do acidente.</li>
              <li><strong>Revisão de PGR, PCMSO, ASO, EPI e treinamentos</strong> ligados à função do trabalhador.</li>
              <li><strong>Adoção de medidas corretivas</strong> documentadas para evitar repetição.</li>
              <li><strong>Acompanhamento médico e previdenciário</strong> do trabalhador quando houver afastamento.</li>
            </ol>
          ),
        },
        {
          title: 'Estabilidade acidentária: quando ela se aplica',
          body: (
            <>
              <p>
                Como regra, o trabalhador que recebe benefício por incapacidade temporária de natureza acidentária tem <strong>garantia provisória de emprego por 12 meses</strong> após a cessação do benefício. Uma dispensa nesse período pode levar à reintegração ou à indenização substitutiva, conforme a situação analisada.
              </p>
              <p>
                A CAT, sozinha, não concede estabilidade. Também existe uma exceção importante reconhecida pela jurisprudência: uma doença profissional constatada depois da dispensa pode gerar a garantia quando houver relação causal com o trabalho, mesmo sem benefício acidentário prévio.
              </p>
            </>
          ),
        },
        {
          title: 'Acidente de trabalho e eSocial',
          body: (
            <>
              <p>
                O acidente de trabalho tem reflexos no eSocial, especialmente nos eventos S-2210 (CAT) e S-2230 (afastamento). Os registros devem ser coerentes com os documentos médicos e com a investigação da ocorrência.
              </p>
              <p>
                O RH e a área de SST precisam trabalhar com a mesma versão documentada dos fatos desde o início.
              </p>
            </>
          ),
        },
        {
          title: 'Quando o acidente de trabalho vira processo trabalhista',
          body: (
            <>
              <p>
                O processo trabalhista relacionado a acidente costuma envolver: culpa da empresa por falta de EPI, ausência de treinamento, equipamento sem proteção, ambiente inseguro ou doença causada ou agravada pelo trabalho.
              </p>
              <p>
                A análise do caso considera tanto a prevenção existente antes do acidente quanto a resposta adotada depois. PGR, treinamentos, controles coletivos, registros de EPI, investigação e medidas corretivas ajudam a demonstrar o que de fato foi feito.
              </p>
            </>
          ),
        },
        {
          title: 'Documentos que a empresa deve manter organizados',
          body: (
            <ul>
              <li>PGR atualizado com os riscos da função envolvida.</li>
              <li>PCMSO com histórico de exames do trabalhador.</li>
              <li>ASO vigente (admissional, periódico ou de retorno, conforme o caso).</li>
              <li>Ficha de EPI com assinatura e CA válido.</li>
              <li>Registros de treinamento relacionados à atividade.</li>
              <li>Relato da ocorrência, investigação de causa raiz e medidas corretivas adotadas.</li>
              <li>CAT emitida no prazo, quando obrigatória.</li>
            </ul>
          ),
        },
        {
          title: 'Causas mais comuns de acidente de trabalho no Brasil',
          body: (
            <ul>
              <li>Quedas de nível (construção civil, logística, limpeza).</li>
              <li>Contato com máquinas e equipamentos sem proteção adequada.</li>
              <li>Sobresforço e postura inadequada (ergonomia).</li>
              <li>Exposição a agentes químicos, biológicos ou físicos sem controle.</li>
              <li>Falta de treinamento para atividades de risco (altura, espaço confinado, eletricidade).</li>
              <li>Acidente de trajeto envolvendo veículos.</li>
            </ul>
          ),
        },
      ]}
      faq={[
        {
          q: 'O que caracteriza um acidente de trabalho?',
          a: 'O acidente de trabalho é caracterizado pela ocorrência no exercício da atividade laboral (ou em trajeto, quando aplicável) que causa lesão, perturbação funcional ou morte ao trabalhador. O elemento central é o nexo causal entre o trabalho e o dano sofrido.',
        },
        {
          q: 'Doença ocupacional é considerada acidente de trabalho?',
          a: 'Sim. A Lei 8.213/91 equipara a doença profissional e a doença do trabalho ao acidente de trabalho quando há relação com a atividade ou com as condições em que ela é exercida. Os efeitos dependem do nexo e das circunstâncias do caso.',
        },
        {
          q: 'Acidente de trajeto ainda é acidente de trabalho?',
          a: 'Sim. A Lei 8.213/91 inclui o acidente ocorrido no percurso da residência para o trabalho ou no retorno entre as situações equiparadas a acidente de trabalho. Os fatos e o percurso precisam ser apurados.',
        },
        {
          q: 'Toda lesão no trabalho precisa de CAT?',
          a: 'A empresa deve comunicar o acidente de trabalho à Previdência até o primeiro dia útil seguinte, mesmo quando não há afastamento. Em caso de morte, a comunicação é imediata. Suspeitas de doença ocupacional exigem avaliação técnica e não devem ser ignoradas.',
        },
        {
          q: 'Quanto tempo dura a estabilidade após acidente de trabalho?',
          a: 'Como regra, são 12 meses após a cessação do benefício por incapacidade temporária de natureza acidentária. A jurisprudência também admite a garantia quando uma doença profissional relacionada ao contrato é constatada depois da dispensa.',
        },
        {
          q: 'Empresa que não emite CAT pode ser prejudicada?',
          a: 'Sim. A omissão pode gerar multa, e a CAT ainda pode ser registrada pelo trabalhador, dependentes, sindicato, médico ou autoridade pública. A empresa também perde a oportunidade de comunicar e documentar a ocorrência no prazo correto.',
        },
        {
          q: 'Qual a diferença entre acidente típico e doença ocupacional?',
          a: 'O acidente típico costuma ser um evento imediato e datado, como queda, corte ou colisão. A doença ocupacional pode se desenvolver ao longo do tempo e exige análise do histórico de exposição e das atividades exercidas.',
        },
      ]}
      maxFaqItems={8}
      sidebarTitle="Sua empresa está preparada para um acidente?"
      sidebarHook="PGR atualizado, PCMSO adequado, treinamentos registrados e CAT no prazo são a base da defesa técnica da empresa. A SERMST apoia desde a prevenção até a investigação após o evento."
      sidebarCtaLabel="Falar com a SERMST"
      sidebarCtaHref="/servicos/gestao-esocial-s2220-s2240"
      related={[
        { label: 'CAT: quando emitir e quais os riscos para a empresa', href: '/rh/cat-acidente-de-trabalho' },
        { label: 'Doenças ocupacionais', href: '/saude/doencas-ocupacionais' },
        { label: 'PGR NR-01', href: '/servicos/pgr-nr01-gerenciamento-riscos' },
        { label: 'PCMSO NR-07', href: '/servicos/pcmso-nr07-programa' },
        { label: 'Perícia trabalhista e assistente técnico', href: '/servicos/pericia-trabalhista-assistente-tecnico' },
      ]}
    />
  );
}
