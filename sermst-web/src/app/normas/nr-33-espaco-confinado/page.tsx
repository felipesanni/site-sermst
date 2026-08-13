import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-33: espaço confinado, PET e treinamento | SERMST',
  description:
    'Entenda a NR-33: cadastro, PET para toda entrada, funções da equipe, avaliação atmosférica e treinamentos de 16h, 40h e 8h anual.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-33-espaco-confinado' },
  openGraph: {
    title: 'NR-33: identificação, PET e treinamento para espaço confinado | SERMST',
    description:
      'Entenda a NR-33: cadastro, PET para toda entrada, papéis de supervisor, vigia e trabalhador autorizado, avaliação atmosférica e treinamento periódico.',
    url: 'https://sermst.com.br/normas/nr-33-espaco-confinado',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function NR33Page() {
  return (
    <BlockbusterArticle
      coverImage={{ src: "/images/site/safety-equipment.jpg", alt: "Trabalhador com equipamento de proteção para entrada em espaço confinado conforme a NR-33" }}
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
        dateModified: '2026-07-13',
      }}

      h1="NR-33: guia para trabalho em espaço confinado"
      intro="A NR-33 exige que a empresa identifique e cadastre os espaços confinados, avalie os riscos, emita a Permissão de Entrada e Trabalho (PET) e mantenha equipe capacitada e plano de resgate. Tanques, silos, galerias e dutos podem se enquadrar, mas a caracterização depende das condições previstas na norma."
      quickAnswer={
        <p>
          A <strong>NR-33</strong> se aplica a ambientes não projetados para ocupação humana contínua, com meios limitados de entrada e saída e nos quais exista ou possa existir atmosfera perigosa. <strong>Toda entrada e trabalho</strong> deve ser precedida de PET. A operação envolve supervisor de entrada, vigia e trabalhadores autorizados. O supervisor pode exercer a função de vigia quando isso estiver previsto na PET. A formação inicial é de <strong>16 horas</strong> para vigias e trabalhadores autorizados e de <strong>40 horas</strong> para supervisores, com treinamento periódico anual de 8 horas.
        </p>
      }
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
                <li>Existe ou pode existir atmosfera perigosa.</li>
              </ol>
              <p>
                Tanques, silos, galerias, poços e dutos aparecem com frequência no cadastro. Uma caixa d&apos;água, câmara frigorífica ou vala não é espaço confinado apenas pelo nome; é preciso verificar se reúne os critérios da definição.
              </p>
              <p>
                A atmosfera pode mudar durante a atividade por decomposição de matéria orgânica, liberação de produto, inertização ou interferência do processo. Por isso, a avaliação inicial não substitui o monitoramento contínuo durante a permanência.
              </p>
            </>
          ),
        },
        {
          title: 'A NR-33 não divide os espaços em classes de permissão',
          body: (
            <>
              <p>
                A NR-33 brasileira não usa as categorias &quot;com permissão&quot; e &quot;sem permissão&quot;. O responsável técnico deve identificar e manter o cadastro de todos os espaços confinados, inclusive os desativados, com suas características e riscos.
              </p>
              <ul>
                <li><strong>O cadastro</strong> identifica o espaço, seus acessos, geometria e riscos.</li>
                <li><strong>O procedimento de segurança</strong> define como preparar, liberar, executar e encerrar o trabalho.</li>
                <li><strong>A PET</strong> registra os perigos, as medidas de controle, a avaliação atmosférica, a equipe e os horários da operação.</li>
              </ul>
              <p>
                Toda e qualquer entrada deve ter PET. A permissão vale, em regra, por uma jornada e pode ser prorrogada somente se todos os requisitos do item 33.5.12.1 forem atendidos, sem ultrapassar 24 horas.
              </p>
            </>
          ),
        },
        {
          title: 'Os três papéis obrigatórios na operação',
          body: (
            <>
              <p>
                A operação deve prever as seguintes funções:
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
                O supervisor de entrada pode desempenhar a função de vigia quando isso estiver previsto na PET. A norma também permite que um vigia acompanhe mais de um espaço em condições restritas, descritas no item 33.3.4.1. O vigia permanece do lado de fora e aciona a equipe de emergência quando necessário; ele não deve improvisar um resgate entrando no espaço.
              </p>
            </>
          ),
        },
        {
          title: 'Treinamento inicial e periódico',
          body: (
            <>
              <p>
                Vigias e trabalhadores autorizados devem receber treinamento inicial de <strong>16 horas</strong>. Para supervisores de entrada, a carga inicial é de <strong>40 horas</strong>. Pelo menos metade da carga prevista deve ser dedicada à parte prática.
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
                O treinamento periódico deve ocorrer a cada 12 meses, com carga mínima de <strong>8 horas</strong>. Também há treinamento eventual nas situações previstas pela NR-01 ou quando forem observados desvios no uso de equipamentos ou nos procedimentos de entrada.
              </p>
            </>
          ),
        },
        {
          title: 'O que precisa estar documentado',
          body: (
            <ol>
              <li><strong>Cadastro de espaços confinados</strong>: identificação de todos os espaços, inclusive os desativados, com seus riscos.</li>
              <li><strong>Sinalização</strong>: todos os espaços identificados com placa padrão NR-33 (proibição de entrada sem permissão).</li>
              <li><strong>Procedimento formal de entrada</strong>: documento descrevendo o processo de avaliação, emissão de PET, monitoramento atmosférico e resgate.</li>
              <li><strong>Permissões de Entrada e Trabalho (PET)</strong>: rastreáveis e arquivadas por 5 anos.</li>
              <li><strong>Certificados de treinamento</strong> de todos os envolvidos, com data e reciclagem em dia.</li>
              <li><strong>Plano de resgate</strong>: procedimento escrito, equipe designada, equipamentos de resgate disponíveis e testados.</li>
              <li><strong>Registros ocupacionais</strong>: exposições a agentes nocivos devem estar coerentes com PGR, LTCAT e eSocial quando houver enquadramento aplicável.</li>
            </ol>
          ),
        },
        {
          title: 'Quatro falhas que colocam a operação em risco',
          body: (
            <ol>
              <li><strong>Entrada sem PET.</strong> A NR-33 considera a entrada sem autorização prévia uma situação de grave e iminente risco.</li>
              <li><strong>Avaliação atmosférica inadequada.</strong> O percentual indicado de oxigênio é 20,9%, sendo aceitável a faixa de 19,5% a 23% quando a causa da variação é conhecida e controlada. O equipamento precisa atender aos requisitos da norma, passar por teste de resposta e ter calibração válida.</li>
              <li><strong>Vigia sem treinamento ou comunicação interrompida.</strong> Vigia que se afasta, não responde ou não tem autoridade para evacuar torna o sistema de segurança inoperante. A NR-33 exige comunicação <em>contínua</em>.</li>
              <li><strong>Espaço fora do cadastro.</strong> Sem identificação e avaliação, a empresa não consegue preparar procedimento, PET e resgate compatíveis com a atividade.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'Toda empresa que tem espaço confinado precisa cumprir a NR-33?',
          a: 'Sim. A NR-33 se aplica quando há trabalho em espaço que atende à definição da norma, independentemente do porte ou do setor. A empresa deve identificar, cadastrar, avaliar os riscos, capacitar a equipe e controlar cada entrada.',
        },
        {
          q: 'Qual a diferença entre espaço confinado e espaço fechado?',
          a: 'Um ambiente fechado não é necessariamente espaço confinado. Para o enquadramento na NR-33, é preciso observar em conjunto a ocupação não contínua, os meios limitados de entrada e saída e a existência ou possibilidade de atmosfera perigosa.',
        },
        {
          q: 'O vigia pode ser o mesmo que o supervisor de entrada?',
          a: 'Pode, quando o acúmulo estiver previsto na PET. Mesmo nessa situação, todas as atribuições de supervisor e vigia precisam ser cumpridas durante a operação.',
        },
        {
          q: 'Com que frequência o treinamento de espaço confinado precisa ser renovado?',
          a: 'Anualmente, com carga mínima de 8 horas. Além disso, pode ser necessário treinamento eventual conforme a NR-01 ou quando houver desvios no uso de equipamentos ou nos procedimentos de entrada.',
        },
        {
          q: 'Empresa de construção civil que escava valas precisa seguir a NR-33?',
          a: 'Somente se a escavação reunir os critérios da definição de espaço confinado. Profundidade e acesso por escada, isoladamente, não bastam. A avaliação deve considerar geometria, acesso, atmosfera e a interação com as exigências da NR-18.',
        },
      ]}
      sidebarTitle="Sua empresa opera em espaços confinados?"
      sidebarHook="Cadastro desatualizado, treinamento vencido ou entrada sem PET comprometem toda a operação. A SERMST apoia a identificação dos espaços, a capacitação da equipe e a estruturação do procedimento de entrada."
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
