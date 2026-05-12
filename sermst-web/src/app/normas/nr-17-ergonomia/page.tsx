import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-17: Ergonomia — AET, postura e prevenção de LER/DORT | SERMST',
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
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="← Normas"
      hubHref="/normas/nr-17-ergonomia"
      pageUrl="https://sermst.com.br/normas/nr-17-ergonomia"
      badgeText="NR-17"
      h1="NR-17: Ergonomia — o que sua empresa precisa fazer para evitar LER/DORT"
      intro="A NR-17 trata da adaptação do trabalho às condições humanas: postura, mobiliário, ritmo, levantamento de peso, organização. Em ações trabalhistas por LER/DORT, a falta de Análise Ergonômica do Trabalho atualizada é responsabilidade direta da empresa."
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
      ]}
      sidebarTitle="Sua empresa tem AET atualizada?"
      sidebarHook="LER/DORT é a doença ocupacional mais comum no Brasil. Sem AET vigente, a defesa em ação trabalhista cai. A SERMST faz AET completa e implementa recomendações."
      sidebarCtaLabel="Solicitar AET"
      related={[
        { label: 'NR-01: PGR atualizado', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'PCMSO (NR-07): programa', href: '/servicos/pcmso-nr07-programa/sao-paulo' },
        { label: 'O que é saúde ocupacional', href: '/saude/o-que-e-saude-ocupacional' },
        { label: 'Como evitar processos trabalhistas', href: '/rh/evitar-processos-trabalhistas' },
      ]}
    />
  );
}
