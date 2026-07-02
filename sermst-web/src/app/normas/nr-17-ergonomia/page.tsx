import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-17: ergonomia, AET e LER/DORT | SERMST',
  description:
    'A NR-17 trata da adaptação do trabalho às condições humanas. Sem AET atualizada, ações por LER/DORT viram responsabilidade direta da empresa. Veja como cumprir.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-17-ergonomia' },
  openGraph: {
    title: 'NR-17 Ergonomia: AET, postura, prevenção de LER/DORT e obrigações | SERMST',
    description:
      'Tudo sobre a NR-17: quando a AET (Análise Ergonômica do Trabalho) é obrigatória, o que ela analisa, LER/DORT e como adequar postos de trabalho.',
    url: 'https://sermst.com.br/normas/nr-17-ergonomia',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function NR17Page() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/site/medical-consult.jpg", alt: "Avaliação ergonômica de posto de trabalho e AET conforme NR-17" }}
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="← Normas"
      hubHref="/normas"
      pageUrl="https://sermst.com.br/normas/nr-17-ergonomia"
      badgeText="NR-17"
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2025-01-01',
        dateModified: '2026-05-01',
      }}

      h1="NR-17: Ergonomia — o que sua empresa precisa fazer para evitar LER/DORT"
      intro="A NR-17 trata da adaptação do trabalho às condições humanas: postura, mobiliário, ritmo, levantamento de peso, organização. Em ações trabalhistas por LER/DORT, a falta de Análise Ergonômica do Trabalho atualizada é responsabilidade direta da empresa."
      quickAnswer={
        <p>
          A <strong>NR-17</strong> regula ergonomia no trabalho — mobiliário, equipamentos, condições ambientais (iluminação, ruído, temperatura), organização do trabalho, pausas e movimentação de cargas. A <strong>AET — Análise Ergonômica do Trabalho</strong> é obrigatória para funções com risco ergonômico e é a principal defesa da empresa em ações por LER/DORT. A norma tem dois anexos com exigências específicas: <strong>Anexo I para teleatendimento e call center</strong> (pausas obrigatórias, mobiliário, headset) e <strong>Anexo II para comércio varejista de gêneros alimentícios</strong> (supermercados — caixas, repositores e açougues).
        </p>
      }
      sections={[
        {
          title: 'O que é a NR-17',
          body: (
            <>
              <p>
                A NR-17 estabelece os parâmetros que permitem a adaptação das condições de trabalho às características do trabalhador, de modo a proporcionar conforto, segurança e desempenho eficiente. Cobre desde mobiliário e ferramenta até organização, pausas, ritmo, transporte de peso, ambiente físico (ruído, temperatura, iluminação), exigência cognitiva.
              </p>
              <p>
                É uma das NRs mais subestimadas. Empresa que pensa &quot;ergonomia é cadeira boa&quot; está vulnerável — a norma é muito mais ampla.
              </p>
            </>
          ),
        },
        {
          title: 'Documento central: Análise Ergonômica do Trabalho (AET)',
          body: (
            <>
              <p>
                A AET é o documento que materializa a aplicação da NR-17 na empresa. Tem que ser feita por profissional habilitado (ergonomista, engenheiro de segurança com especialização ou fisioterapeuta com formação) e revisada periodicamente.
              </p>
              <p>
                Conteúdo mínimo:
              </p>
              <ul>
                <li>Identificação dos postos e funções</li>
                <li>Análise da demanda (riscos físicos, cognitivos, organizacionais)</li>
                <li>Análise da atividade real (não apenas a prescrita)</li>
                <li>Diagnóstico ergonômico</li>
                <li>Recomendações com plano de ação e prazo</li>
                <li>Acompanhamento da implementação</li>
              </ul>
              <p>
                AET precisa estar atualizada — em geral revisão a cada 2 anos ou sempre que houver mudança significativa na operação. Documento antigo é evidência fraca em ação por LER/DORT.
              </p>
            </>
          ),
        },
        {
          title: 'O que a NR-17 exige especificamente',
          body: (
            <ul>
              <li><strong>Mobiliário</strong> — cadeira ajustável, apoio para pés se necessário, apoio para punho em digitação, monitor na altura correta.</li>
              <li><strong>Equipamentos de tecnologia</strong> — teclado, mouse, software com ergonomia adequada.</li>
              <li><strong>Levantamento e transporte de peso</strong> — limites e procedimentos. Mulheres têm limite específico.</li>
              <li><strong>Pausas para recuperação</strong> em atividades que exigem esforço repetitivo intenso.</li>
              <li><strong>Iluminação</strong> adequada à tarefa, sem ofuscamento nem reflexo.</li>
              <li><strong>Ruído</strong> em níveis compatíveis com a atividade cognitiva exigida.</li>
              <li><strong>Temperatura e umidade</strong> em faixas de conforto.</li>
              <li><strong>Carga psíquica</strong> — exigência cognitiva, ritmo, monotonia, conflitos. Conecta com riscos psicossociais da NR-01.</li>
              <li><strong>Treinamento dos trabalhadores</strong> sobre postura, técnica de levantamento, uso correto de mobiliário.</li>
            </ul>
          ),
        },
        {
          title: 'LER/DORT: o passivo silencioso',
          body: (
            <>
              <p>
                LER (Lesão por Esforço Repetitivo) e DORT (Distúrbios Osteomusculares Relacionados ao Trabalho) são as principais doenças ocupacionais ligadas à NR-17. Aparecem ao longo de anos, e quando o trabalhador procura tratamento ou abre ação, costuma haver afastamento longo, indenização e responsabilização da empresa.
              </p>
              <p>
                O quadro só fica grave porque é silencioso: trabalhador segue trabalhando com dor, supervisor não percebe, empresa não detecta no exame periódico. Quando explode, a documentação preventiva é o que separa responsabilização da empresa de mero infortúnio.
              </p>
              <p>
                Em ação por LER/DORT, o juiz pergunta:
              </p>
              <ol>
                <li>A empresa tinha AET atualizada?</li>
                <li>O posto da pessoa estava na AET?</li>
                <li>A empresa implementou as recomendações?</li>
                <li>O trabalhador foi treinado em técnica e postura?</li>
                <li>O exame periódico foi conduzido com atenção a sintomas musculoesqueléticos?</li>
              </ol>
              <p>
                Negativa em qualquer dessas é responsabilidade práticamente certa.
              </p>
            </>
          ),
        },
        {
          title: 'Por onde começar a estruturar ergonomia',
          body: (
            <ol>
              <li><strong>Auditar AET atual</strong> — existe? Quando foi feita? Cobre as funções reais?</li>
              <li><strong>Identificar postos críticos</strong> — operacionais com esforço repetitivo, administrativos com longa jornada em frente ao computador, transporte de peso.</li>
              <li><strong>Fazer ou revisar AET</strong> com profissional habilitado.</li>
              <li><strong>Implementar recomendações por fases</strong> — quick wins primeiro (cadeira, monitor, apoio), depois ajustes maiores (layout, fluxo, equipamento).</li>
              <li><strong>Treinar trabalhadores</strong> em postura, técnica, alongamento (ginástica laboral é opcional mas comprovadamente ajuda).</li>
              <li><strong>Conectar com PCMSO</strong> — exame periódico precisa avaliar sintomas musculoesqueléticos.</li>
              <li><strong>Acompanhar indicador</strong> — taxa de afastamento por doença musculoesquelética. Tendência subindo é sinal de revisão.</li>
            </ol>
          ),
        },
        {
          title: 'Anexo I — Teleatendimento e call center: exigências específicas',
          body: (
            <>
              <p>
                O <strong>Anexo I da NR-17</strong> se aplica a <strong>teleatendimento, telemarketing, call center e centrais de atendimento</strong> — qualquer função que usa equipamento de escuta e fala com atendimento contínuo ao público. É um dos anexos mais detalhados e autuados do conjunto.
              </p>
              <p>Exigências principais:</p>
              <ul>
                <li><strong>Pausas obrigatórias:</strong> 20 minutos de descanso para cada 100 minutos trabalhados em atendimento telefônico ativo, computados como tempo de serviço.</li>
                <li><strong>Headset com limitação de volume:</strong> proteção auditiva integrada — o equipamento deve limitar pico de pressão sonora. Queixas de PAIR (Perda Auditiva Induzida por Ruído) são frequentes nessa função.</li>
                <li><strong>Monitor de vídeo:</strong> posicionado à altura dos olhos, a distância mínima de 45 cm, com ajuste de brilho e ausência de reflexo.</li>
                <li><strong>Mobiliário regulável:</strong> mesa com altura ajustável ou plano de trabalho com apoio para punho; cadeira com regulagem de altura, assento e apoio lombar.</li>
                <li><strong>Iluminação:</strong> sem ofuscamento direto ou reflexo na tela — lux mínimos definidos por tipo de tarefa.</li>
                <li><strong>Conteúdo de trabalho e organização:</strong> vedação à pressão por metas que gerem sobrecarga psíquica. Monitoramento eletrônico de desempenho deve ser acompanhado de feedback e não gerar constrangimento.</li>
                <li><strong>Capacitação:</strong> treinamento antes do início das atividades (manuseio de equipamento, postura, saúde vocal) e periodic refresh.</li>
              </ul>
              <p>
                Empresa de call center com AET desatualizada ou que não documenta as pausas está exposta a autuação dupla: do MTE (NR-17 Anexo I) e de ações trabalhistas por doença ocupacional.
              </p>
            </>
          ),
        },
        {
          title: 'Anexo II — Comércio varejista de gêneros alimentícios: supermercados e açougues',
          body: (
            <>
              <p>
                O <strong>Anexo II da NR-17</strong> se aplica ao <strong>comércio varejista de gêneros alimentícios</strong> — supermercados, hipermercados, lojas de conveniência, açougues e similares. Foco nas funções de maior risco ergonômico: <strong>operadores de caixa, repositores de mercadoria e trabalhadores de açougue</strong>.
              </p>
              <p>Exigências principais por função:</p>
              <ul>
                <li>
                  <strong>Operadores de checkout (caixa):</strong> assento regulável obrigatório — o trabalho deve poder ser realizado sentado ou em pé alternadamente; plano de trabalho em altura adequada; scanner de código de barras deve minimizar extensão e torção de punho; pausas periódicas computadas como tempo de serviço.
                </li>
                <li>
                  <strong>Repositores:</strong> limitação de peso por unidade de carga; uso de equipamento auxiliar para cargas acima do limite; estantes em alturas compatíveis; vedação a posturas forçadas repetitivas sem pausas.
                </li>
                <li>
                  <strong>Trabalhadores de açougue:</strong> piso antiderrapante; facas com cabo ergonômico; equipamento de corte com proteção; carga máxima definida; controle de temperatura no ambiente frio (câmara frigorífica) e alternância de posturas.
                </li>
              </ul>
              <p>
                Supermercados são alvo frequente de fiscalização do MTE justamente porque o perfil de risco é alto — esforço repetitivo, postura estática prolongada, carga física — e a conformidade costuma ser baixa. AET específica por função é o passo inicial.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'Empresa pequena precisa de AET?',
          a: 'Sim. A NR-17 não tem isenção por porte. Empresa com 5 funcionários administrativos em frente ao computador 8 horas por dia já está sob exigência. Cumprimento é proporcional ao risco real, mas a obrigação existe.',
        },
        {
          q: 'Quem pode fazer AET?',
          a: 'Profissional habilitado em ergonomia: engenheiro de segurança do trabalho, médico do trabalho, fisioterapeuta, ergonomista certificado. A profundidade técnica varia — postos administrativos exigem menos do que postos industriais.',
        },
        {
          q: 'Pausa obrigatória em digitação?',
          a: 'A NR-17 estabelece pausas em atividades que exigem solicitação intensiva — incluindo entrada de dados, atendimento telefônico contínuo. A norma não fixa minutos rígidos; depende da AET. Em regra, 10 minutos a cada 50-60 minutos de digitação intensa.',
        },
        {
          q: 'Limite de peso para levantamento?',
          a: 'A NR-17 não fixa um limite único — depende de altura, distância, frequência, postura. A NHO 11 da Fundacentro e a ISO 11228 são referências. Em regra, levantamentos acima de 23kg (homens) ou 11kg (mulheres) já exigem análise específica.',
        },
        {
          q: 'Ginástica laboral é obrigatória?',
          a: 'Não. A NR-17 não exige ginástica laboral. Mas é prática reconhecida como medida de prevenção. Quando faz parte da AET como recomendação implementada, melhora o paper trail de prevenção.',
        },
        {
          q: 'Call center e teleatendimento precisam de regras específicas além da NR-17 geral?',
          a: 'Sim. O Anexo I da NR-17 se aplica especificamente a teleatendimento, telemarketing e centrais de atendimento. Exige pausas de 20 minutos por cada 100 minutos de atendimento ativo (computadas como serviço), headset com limitação de volume, mobiliário regulável e vedação à pressão abusiva por metas. AET específica para essa atividade é obrigatória.',
        },
        {
          q: 'Supermercado precisa cumprir algum anexo específico da NR-17?',
          a: 'Sim. O Anexo II da NR-17 trata do comércio varejista de gêneros alimentícios — supermercados, hipermercados, lojas de conveniência e açougues. Foca em operadores de caixa (assento regulável obrigatório, alternância sentado/em pé), repositores (limite de carga, equipamento auxiliar) e açougue (piso antiderrapante, ferramentas ergonômicas, controle de temperatura). O segmento é alvo frequente de fiscalização por descumprimento.',
        },
      ]}
      sidebarTitle="Sua empresa tem AET atualizada?"
      sidebarHook="LER/DORT é a doença ocupacional mais comum no Brasil. Sem AET vigente, a defesa em ação trabalhista cai. A SERMST faz AET completa e implementa recomendações."
      sidebarCtaLabel="Solicitar AET"
      related={[
        { label: 'Guia da NR-01 e atualização do PGR', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'PCMSO (NR-07): programa', href: '/servicos/pcmso-nr07-programa/sao-paulo' },
        { label: 'O que é saúde ocupacional', href: '/saude/o-que-e-saude-ocupacional' },
        { label: 'Como evitar processos trabalhistas', href: '/rh/evitar-processos-trabalhistas' },
      ]}
    />
  );
}
