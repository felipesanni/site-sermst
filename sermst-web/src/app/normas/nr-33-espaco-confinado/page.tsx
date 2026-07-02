import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-33: Espaço Confinado — Obrigações e Treinamento | SERMST',
  description:
    'A NR-33 exige identificação, classificação e permissão de entrada em espaços confinados. Treinamento obrigatório de 16h. Acidente aqui é criminal.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-33-espaco-confinado' },
  openGraph: {
    title: 'NR-33: Espaço Confinado — identificação, permissão de entrada e treinamento obrigatório | SERMST',
    description:
      'Entenda a NR-33: o que é espaço confinado, como classificar, quando emitir permissão de entrada, papéis de supervisor, entrante e vigia, treinamento de 16h e responsabilidade penal.',
    url: 'https://sermst.com.br/normas/nr-33-espaco-confinado',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function NR33Page() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/site/safety-equipment.jpg", alt: "Trabalhador com equipamento de proteção para entrada em espaço confinado — NR-33" }}
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="← Normas"
      hubHref="/normas"
      pageUrl="https://sermst.com.br/normas/nr-33-espaco-confinado"
      badgeText="NR-33"
      author={{
        name: 'Luiz César Sannino',
        jobTitle: 'Higienista Ocupacional · Técnico em Segurança do Trabalho · CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-05-01',
        dateModified: '2026-05-01',
      }}

      h1="NR-33: Espaço Confinado — guia completo para empresas"
      intro="A NR-33 regula o trabalho em espaços confinados — cisternas, tanques, galerias, dutos, câmaras subterrâneas, silos. Esses ambientes matam por acúmulo de gás, falta de oxigênio ou incêndio em segundos. A norma exige identificação formal, permissão de entrada, equipe treinada e procedimento de resgate. Empresa sem esse controle responde penal e civilmente por qualquer acidente."
      sections={[
        {
          title: 'O que é espaço confinado (definição legal)',
          body: (
            <>
              <p>
                Pela NR-33, espaço confinado é qualquer área ou ambiente que reúna <strong>três características simultâneas</strong>:
              </p>
              <ol>
                <li>Não foi projetado para ocupação humana contínua.</li>
                <li>Possui meios limitados de entrada e saída.</li>
                <li>Pode acumular contaminantes atmosféricos, ter deficiência de oxigênio ou apresentar outros riscos relacionados ao seu interior.</li>
              </ol>
              <p>
                Exemplos comuns: caixas d&apos;água, reservatórios, tanques de armazenamento, fossas, poços, caldeirões, câmaras frigoríficas, galerias de esgoto, dutos de ventilação, silos de grãos, interiores de embarcações e valas profundas com paredes fechadas.
              </p>
              <p>
                O risco não está só na entrada — está na <strong>permanência</strong>. Gasodutos de ativos, decomposição de matéria orgânica e processos industriais contínuos podem alterar a atmosfera interna em minutos, mesmo com a entrada aparentemente segura.
              </p>
            </>
          ),
        },
        {
          title: 'Classificação: com ou sem permissão de entrada',
          body: (
            <>
              <p>
                O primeiro passo da NR-33 é <strong>identificar e classificar</strong> todos os espaços confinados do estabelecimento. Existem dois tipos:
              </p>
              <ul>
                <li>
                  <strong>Espaço confinado sem permissão de entrada (ECA)</strong>: não apresenta risco atmosférico potencial, não tem risco de engolfamento, não tem configuração interna que possa prender o trabalhador e não contém outros riscos graves identificados. Pode ser acessado com controles básicos — mas ainda precisa estar mapeado e documentado.
                </li>
                <li>
                  <strong>Espaço confinado com permissão de entrada (ECAPE)</strong>: apresenta ou pode apresentar um ou mais riscos sérios. Qualquer entrada exige emissão de <strong>Permissão de Entrada e Trabalho (PET)</strong> assinada pelo supervisor de entrada, com avaliação atmosférica prévia, equipe de resgate disponível e comunicação contínua entre vigia e entrante.
                </li>
              </ul>
              <p>
                A classificação não é permanente — um espaço pode mudar de categoria conforme a atividade realizada. Empresa que trata ECAPE como ECA está criando condição de trabalho inseguro documentável.
              </p>
            </>
          ),
        },
        {
          title: 'Os três papéis obrigatórios na operação',
          body: (
            <>
              <p>
                Toda operação em espaço confinado com permissão exige pelo menos três funções distintas, que <strong>não podem ser acumuladas</strong> pela mesma pessoa:
              </p>
              <ul>
                <li>
                  <strong>Supervisor de entrada</strong>: responsável por autorizar e supervisionar a operação. Avalia as condições do espaço antes da entrada, emite ou cancela a PET, garante que os controles estão implementados e coordena o resgate se necessário.
                </li>
                <li>
                  <strong>Entrante autorizado</strong>: o trabalhador que entra no espaço. Deve conhecer os riscos, usar os EPIs corretos, comunicar-se continuamente com o vigia e sair imediatamente ao sinal de evacuação ou deterioração das condições.
                </li>
                <li>
                  <strong>Vigia</strong>: permanece <em>fora</em> do espaço o tempo todo, com comunicação ativa com o entrante, autoridade para ordenar evacuação imediata e responsabilidade de acionar o resgate sem entrar no espaço sozinho.
                </li>
              </ul>
              <p>
                O vigia <strong>não pode entrar no espaço</strong> para resgatar o entrante sem acionamento do sistema de resgate externo. A maioria das mortes em espaço confinado envolve tentativas de resgate improvisado — uma vítima torna-se três.
              </p>
            </>
          ),
        },
        {
          title: 'Treinamento obrigatório: 16 horas',
          body: (
            <>
              <p>
                Todos os trabalhadores que atuam em espaços confinados — nas funções de supervisor, entrante ou vigia — devem receber treinamento com carga mínima de <strong>16 horas</strong>, incluindo prática simulada.
              </p>
              <p>
                O conteúdo obrigatório cobre:
              </p>
              <ol>
                <li>Reconhecimento e avaliação dos riscos em espaços confinados.</li>
                <li>Procedimentos de entrada, permanência e saída.</li>
                <li>Uso correto de detectores de gás e equipamentos de medição atmosférica.</li>
                <li>EPIs específicos: máscara com adução de ar, arnês, linha de vida, detector.</li>
                <li>Procedimentos de resgate e primeiros socorros básicos.</li>
                <li>Emissão e cancelamento da Permissão de Entrada e Trabalho (PET).</li>
              </ol>
              <p>
                O treinamento deve ser <strong>renovado anualmente</strong> (reciclagem). Trabalhador que não está com o treinamento em dia não pode entrar em espaço confinado — responsabilidade recai sobre o supervisor de entrada que autorizar o acesso.
              </p>
            </>
          ),
        },
        {
          title: 'O que precisa estar documentado',
          body: (
            <ol>
              <li><strong>Inventário de espaços confinados</strong>: lista de todos os ECAs e ECAPEs do estabelecimento, com classificação atualizada.</li>
              <li><strong>Sinalização</strong>: todos os espaços identificados com placa padrão NR-33 (proibição de entrada sem permissão).</li>
              <li><strong>Procedimento formal de entrada</strong>: documento descrevendo o processo de avaliação, emissão de PET, monitoramento atmosférico e resgate.</li>
              <li><strong>Permissões de Entrada e Trabalho (PET)</strong>: arquivadas por pelo menos 12 meses após a operação.</li>
              <li><strong>Certificados de treinamento</strong> de todos os envolvidos, com data e reciclagem em dia.</li>
              <li><strong>Plano de resgate</strong>: procedimento escrito, equipe designada, equipamentos de resgate disponíveis e testados.</li>
              <li><strong>S-2240 no eSocial</strong>: trabalhadores expostos ao risco de espaço confinado devem ter o risco declarado.</li>
            </ol>
          ),
        },
        {
          title: 'Os 4 erros que viram responsabilidade penal',
          body: (
            <ol>
              <li><strong>Entrada sem PET.</strong> Tarefa &quot;rápida&quot; sem permissão formal — dois minutos de atalho, um acidente potencialmente fatal e responsabilidade penal para o superior imediato e para o empregador.</li>
              <li><strong>Medição atmosférica antes da entrada sem equipamento calibrado.</strong> Detector vencido ou sem calibração não garante leitura confiável. Oxigênio abaixo de 19,5% ou acima de 23,5% e presença de gás combustível ou tóxico acima de limites são condições que invalidam a entrada — mesmo que o trabalhador &quot;não sinta nada&quot;.</li>
              <li><strong>Vigia sem treinamento ou comunicação interrompida.</strong> Vigia que se afasta, não responde ou não tem autoridade para evacuar torna o sistema de segurança inoperante. A NR-33 exige comunicação <em>contínua</em>.</li>
              <li><strong>Espaço não classificado.</strong> Empresa que nunca inventariou os espaços confinados do estabelecimento não pode afirmar que não tem ECAPE — e o MTE presume o pior em fiscalização. Autuação automática com possível interdição da atividade.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'Toda empresa que tem espaço confinado precisa cumprir a NR-33?',
          a: 'Sim. A NR-33 se aplica a qualquer empregador que tenha trabalhadores que entrem em espaços confinados, independentemente do porte da empresa ou do setor. O que varia é a quantidade e complexidade dos espaços — mas a obrigação de identificar, classificar, treinar e controlar a entrada é universal.',
        },
        {
          q: 'Qual a diferença entre espaço confinado e espaço fechado?',
          a: 'Todo espaço confinado tem entrada/saída limitada e não foi projetado para ocupação contínua — além de ao menos um risco grave potencial. Um ambiente fechado como uma sala pode ser ventilado, ter múltiplas saídas e não acumular riscos atmosféricos: não é espaço confinado. A caracterização técnica importa: classificar como confinado ou não define as obrigações legais.',
        },
        {
          q: 'O vigia pode ser o mesmo que o supervisor de entrada?',
          a: 'Não. As funções de supervisor de entrada, entrante autorizado e vigia são distintas e não podem ser acumuladas pela mesma pessoa simultaneamente. O supervisor pode ser alguém que não está presente o tempo todo na operação, mas o vigia deve estar fisicamente fora do espaço e em comunicação contínua com o entrante durante toda a operação.',
        },
        {
          q: 'Com que frequência o treinamento de espaço confinado precisa ser renovado?',
          a: 'Anualmente. A reciclagem pode ter carga menor que o treinamento inicial (16h), desde que aborde situações de risco recorrentes e inclua prática simulada. Qualquer mudança relevante nos procedimentos, nos equipamentos ou nos riscos identificados também exige treinamento de atualização, independentemente do prazo.',
        },
        {
          q: 'Empresa de construção civil que escava valas precisa seguir a NR-33?',
          a: 'Sim, se a vala ou escavação reunir as características de espaço confinado (acesso limitado, risco de acúmulo de gás ou desabamento que configure aprisionamento). Valas profundas com paredes verticais e acesso por escada são comumente classificadas como ECAPE. A NR-33 e a NR-18 são aplicadas simultaneamente nesses casos.',
        },
      ]}
      sidebarTitle="Sua empresa opera em espaços confinados?"
      sidebarHook="Inventário desatualizado, treinamento vencido ou entrada sem PET são infrações imediatas — e risco real de acidente grave. A SERMST apoia a classificação dos espaços, o treinamento da equipe e a estruturação do procedimento de entrada."
      sidebarCtaLabel="Falar sobre NR-33"
      related={[
        { label: 'Treinamento NR-33: Espaço Confinado', href: '/treinamentos/nr-33-espaco-confinado' },
        { label: 'NR-18: Construção civil, escavações e canteiro', href: '/normas/nr-18-construcao-civil' },
        { label: 'NR-35: Trabalho em Altura', href: '/normas/nr-35-trabalho-em-altura' },
        { label: 'Guia da NR-01 e atualização do PGR', href: '/normas/nr-01-pgr-atualizada' },
        { label: 'NR-15: Insalubridade', href: '/normas/nr-15-insalubridade' },
      ]}
    />
  );
}
