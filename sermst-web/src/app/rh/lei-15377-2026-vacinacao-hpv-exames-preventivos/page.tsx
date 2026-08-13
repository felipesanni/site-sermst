import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Lei 15.377/2026: guia para empresas | SERMST',
  description:
    'Lei dos 3 dias: a empresa deve informar sobre vacinação, HPV e câncer e comunicar o direito a folga para exame preventivo. Guia prático para RH e DP.',
  alternates: {
    canonical: 'https://sermst.com.br/rh/lei-15377-2026-vacinacao-hpv-exames-preventivos',
  },
  openGraph: {
    title: 'Lei 15.377/2026 (lei dos 3 dias): o que muda para as empresas?',
    description:
      'Guia completo para RH e DP: o que a lei dos 3 dias exige das empresas, como gerenciar a folga para exame preventivo e como cumprir as obrigações de vacinação e HPV na CLT.',
    url: 'https://sermst.com.br/rh/lei-15377-2026-vacinacao-hpv-exames-preventivos',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function Lei15377Page() {
  return (
    <BlockbusterArticle
      coverImage={{
        src: '/images/site/medical-consult.jpg',
        alt: 'Profissional de RH orientando colaboradores sobre saúde preventiva e vacinação',
      }}
      hubLabel="RH e Departamento Pessoal"
      hubLabelShort="← RH e DP"
      hubHref="/rh"
      pageUrl="https://sermst.com.br/rh/lei-15377-2026-vacinacao-hpv-exames-preventivos"
      author={{
        name: 'Felipe Sannino',
        jobTitle: 'Advogado em Direito do Trabalho e SST · OAB/SP 430.824',
        url: 'https://sermst.com.br/equipe/felipe-sannino',
        datePublished: '2026-04-10',
        dateModified: '2026-07-13',
      }}

      h1="Lei 15.377/2026: informação sobre vacinação, HPV e exames preventivos"
      intro="A Lei n.º 15.377/2026 criou um dever de informação para as empresas. Desde 6 de abril de 2026, elas devem divulgar campanhas oficiais de vacinação, promover conscientização sobre HPV e alguns tipos de câncer, orientar sobre acesso ao diagnóstico e informar o direito à ausência para exames preventivos. Os três dias sem desconto já constavam no art. 473, XII, da CLT desde 2018; a nova lei tornou obrigatória a comunicação desse direito."
      sections={[
        {
          title: 'O que é a Lei 15.377/2026 e quais artigos da CLT ela altera?',
          body: (
            <>
              <p>
                A <strong>Lei n.º 15.377, sancionada em 2 de abril de 2026</strong> e publicada no Diário Oficial da União em 6 de abril de 2026, alterou a Consolidação das Leis do Trabalho (CLT) em dois pontos centrais:
              </p>
              <ul>
                <li>
                  <strong>Art. 169-A da CLT (criado pela lei):</strong> estabelece o dever das empresas de disponibilizar informações e promover ações afirmativas de conscientização sobre campanhas oficiais de vacinação, sobre o papilomavírus humano (HPV) e sobre os cânceres de mama, colo do útero e próstata, orientando os empregados sobre o acesso a serviços de diagnóstico.
                </li>
                <li>
                  <strong>Art. 473, § 3.º da CLT (criado pela lei):</strong> determina que o empregador informe o empregado sobre a possibilidade de se ausentar para exames preventivos de HPV e câncer, nos termos do inciso XII.
                </li>
              </ul>
              <p>
                A lei entrou em vigor na data da publicação e não trouxe período de adaptação. O direito a até três dias em cada 12 meses de trabalho, sem prejuízo do salário, está no art. 473, XII, da CLT desde 2018. A novidade de 2026 é o dever de informar e orientar.
              </p>
            </>
          ),
        },
        {
          title: 'Quais são as 4 obrigações impostas às empresas?',
          body: (
            <>
              <p>
                <strong>1. Disponibilizar informações sobre vacinação e doenças.</strong> O novo Art. 169-A da CLT impõe às empresas a obrigação de disponibilizar a seus empregados informações sobre:
              </p>
              <ul>
                <li>Campanhas oficiais de vacinação divulgadas pelo Ministério da Saúde, conforme as orientações vigentes.</li>
                <li>O <strong>papilomavírus humano (HPV)</strong>: o que é, como se transmite, os riscos associados e como a vacinação protege contra o câncer de colo do útero e outras doenças.</li>
                <li>Os <strong>cânceres de mama, de colo do útero e de próstata</strong>: fatores de risco, sintomas de alerta e a importância do diagnóstico precoce.</li>
              </ul>
              <p>
                O texto exige alinhamento com as orientações e recomendações do Ministério da Saúde. A fonte e a data do material devem ser conferidas antes da divulgação.
              </p>
              <p>
                <strong>2. Promover ações de conscientização.</strong> A empresa pode usar comunicados internos, campanhas, palestras ou materiais oficiais. O formato deve ser adequado ao perfil e aos canais de comunicação da equipe.
              </p>
              <p>
                <strong>3. Orientar sobre acesso a serviços de diagnóstico.</strong> A comunicação pode indicar a rede pública, os canais do SUS e, quando houver, a rede do plano de saúde oferecido pela empresa.
              </p>
              <p>
                <strong>4. Informar o direito à ausência remunerada.</strong> O art. 473, § 3.º, exige que o empregador comunique a possibilidade de ausência prevista no inciso XII. Convém guardar o registro da comunicação e manter um procedimento simples para solicitação e comprovação.
              </p>
            </>
          ),
        },
        {
          title: 'Como funciona o direito a 3 dias de ausência para exames preventivos?',
          body: (
            <>
              <p>
                O art. 473, XII, da CLT permite ao empregado deixar de comparecer ao serviço por <strong>até 3 dias em cada 12 meses de trabalho</strong> para realizar exames preventivos de câncer devidamente comprovados. A Lei 15.377/2026 passou a exigir que a empresa informe também sobre a possibilidade relacionada a exames preventivos de HPV.
              </p>
              <ul>
                <li><strong>Sem prejuízo do salário:</strong> o dia é contado como trabalhado, sem desconto e sem necessidade de compensação posterior.</li>
                <li><strong>Mediante comprovação:</strong> o empregado deve apresentar documento que confirme a realização ou o agendamento do exame.</li>
                <li><strong>Em cada 12 meses de trabalho:</strong> a CLT usa essa expressão, mas não detalha na própria regra o método operacional de contagem. O RH deve adotar um critério consistente e validá-lo com a assessoria trabalhista.</li>
              </ul>
              <p>
                <strong>Pontos críticos para o RH e o DP:</strong>
              </p>
              <ul>
                <li><strong>O exame deve ser preventivo.</strong> A comprovação precisa permitir o enquadramento legal sem expor diagnóstico ou informação clínica desnecessária.</li>
                <li><strong>A regra não detalha o fracionamento.</strong> Como o texto fala em até três dias, a política interna deve prever como o uso será registrado e como situações duvidosas serão analisadas.</li>
                <li><strong>A comprovação é obrigatória.</strong> O procedimento deve explicar como solicitar a ausência e qual documento administrativo será aceito, com cuidado para não coletar dado de saúde além do necessário.</li>
                <li><strong>Não há custeio obrigatório dos exames.</strong> A CLT assegura a ausência remunerada, mas não obriga a empresa a pagar pelos exames. O trabalhador pode realizá-los pelo SUS, por plano de saúde próprio ou por convênio médico da empresa, se houver.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Quem está sujeito à lei? Todas as empresas com CLT',
          body: (
            <>
              <p>
                A Lei 15.377/2026 se aplica a <strong>todas as empresas com empregados regidos pela CLT</strong>, independentemente de:
              </p>
              <ul>
                <li><strong>Porte:</strong> microempresas (ME), empresas de pequeno porte (EPP), médias e grandes empresas são igualmente obrigadas.</li>
                <li><strong>Setor:</strong> a lei não cria exceção por ramo de atividade.</li>
                <li><strong>Regime tributário:</strong> Simples Nacional, Lucro Presumido ou Lucro Real não faz diferença.</li>
                <li><strong>Número de funcionários:</strong> uma empresa com 2 ou 3 empregados CLT já está sujeita a todas as obrigações.</li>
              </ul>
              <p>
                Trabalhadores autônomos, MEIs, PJs e prestadores de serviço sem vínculo empregatício não são abrangidos, pois não têm contrato regido pela CLT.
              </p>
            </>
          ),
        },
        {
          title: 'O que pode acontecer em caso de descumprimento',
          body: (
            <>
              <p>
                A Lei 15.377/2026 não criou uma multa específica com valor próprio. Eventual autuação depende do enquadramento feito pela fiscalização e dos critérios administrativos aplicáveis. Por isso, não é correto tratar um valor como automático para toda falha de comunicação.
              </p>
              <p>
                Além das multas administrativas, o descumprimento expõe a empresa a:
              </p>
              <ul>
                <li><strong>Cobrança do salário descontado:</strong> se a ausência legal for negada ou descontada indevidamente, o empregado pode buscar a correção pela via administrativa ou judicial.</li>
                <li><strong>Fiscalização trabalhista:</strong> a empresa pode ter de apresentar sua política, os comunicados e os registros de atendimento.</li>
                <li><strong>Atuação coletiva:</strong> práticas reiteradas podem chamar a atenção de sindicato, Ministério Público do Trabalho ou órgãos de fiscalização.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Passo a passo para o RH e DP colocarem a empresa em conformidade',
          body: (
            <>
              <p>
                <strong>Passo 1: comunicar formalmente os empregados.</strong> Use os canais que a empresa já adota, como e-mail, mural ou intranet, e guarde o registro da divulgação.
              </p>
              <p>
                Sugestão de texto para o comunicado:
              </p>
              <blockquote>
                &quot;Informamos que a CLT permite a ausência, sem prejuízo do salário, por até 3 (três) dias em cada 12 meses de trabalho para a realização de exames preventivos de câncer devidamente comprovados. A Lei n.º 15.377/2026 também determina que a empresa informe sobre a possibilidade relacionada a exames preventivos de HPV. Consulte o RH para conhecer o procedimento de solicitação e comprovação.&quot;
              </blockquote>
              <p>
                <strong>Passo 2: criar um fluxo de solicitação e comprovação.</strong> Defina canal, responsáveis, forma de registro e documento aceito. Evite prazos ou exigências que tornem o exercício do direito inviável e limite a coleta de dados pessoais ao necessário.
              </p>
              <p>
                <strong>Passo 3: usar materiais oficiais de conscientização.</strong> Consulte o{' '}
                <a href="https://www.gov.br/inca/pt-br" target="_blank" rel="noopener noreferrer">INCA</a> para prevenção do câncer e o{' '}
                <a href="https://www.gov.br/saude/pt-br" target="_blank" rel="noopener noreferrer">Ministério da Saúde</a> para vacinação e campanhas oficiais. Registre a fonte e confira se o material continua atualizado.
              </p>
              <p>
                <strong>Passo 4: planejar as comunicações.</strong> Inclua o tema no calendário interno e acompanhe as campanhas oficiais. A lei não fixa um número mínimo de comunicações por ano; a frequência deve ser suficiente para que a informação chegue aos empregados.
              </p>
              <p>
                <strong>Passo 5: orientar gestores e RH.</strong> Explique como receber a solicitação, preservar a privacidade e encaminhar dúvidas. O gestor não deve pedir detalhes de diagnóstico nem decidir sozinho se o exame é clinicamente necessário.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'O que é a lei dos 3 dias?',
          a: 'É um apelido usado para a Lei n.º 15.377/2026. O direito a até 3 dias em cada 12 meses de trabalho para exames preventivos de câncer já existia no art. 473, XII, da CLT desde 2018. A lei de 2026 criou o dever de a empresa informar esse direito e ampliou as obrigações de orientação sobre vacinação, HPV e prevenção do câncer.',
        },
        {
          q: 'A empresa precisa custear os exames preventivos?',
          a: 'Não. A CLT assegura o direito à ausência remunerada, mas não obriga a empresa a pagar pelos exames. O trabalhador pode realizá-los pelo SUS, por plano de saúde próprio ou por convênio médico da empresa, se houver.',
        },
        {
          q: 'Os 3 dias são contados por contrato ou por ano civil?',
          a: 'A CLT diz “em cada 12 meses de trabalho”, mas não detalha nessa regra o método de controle pelo RH. A empresa deve adotar um critério uniforme e validá-lo com sua assessoria trabalhista ou sistema de folha.',
        },
        {
          q: 'E se o funcionário precisar de um quarto dia além dos 3 previstos na CLT?',
          a: 'O quarto dia não está coberto automaticamente pelo inciso XII. Ele pode ser tratado por atestado médico, banco de horas, acordo mais favorável ou outra hipótese legal que realmente se aplique ao caso. O inciso VIII do art. 473 trata de comparecimento em juízo, não de consulta médica.',
        },
        {
          q: 'A empresa pode exigir que o exame seja feito em determinada clínica ou horário?',
          a: 'A empresa pode organizar o fluxo e exigir a comprovação prevista na CLT. Restrições de clínica ou horário não aparecem no texto legal e não devem inviabilizar o direito. Casos que afetem a operação ou envolvam dúvida de enquadramento devem ser analisados de forma individual e não discriminatória.',
        },
        {
          q: 'Trabalhadores em home office também têm esse direito?',
          a: 'Sim. A modalidade presencial, híbrida ou remota não retira o direito de quem tem vínculo regido pela CLT.',
        },
        {
          q: 'A lei já vale mesmo sem prazo de adaptação?',
          a: 'Sim. A Lei 15.377/2026 entrou em vigor em 6 de abril de 2026, na data de sua publicação, sem período de adaptação.',
        },
        {
          q: 'Exame de check-up geral conta como exame preventivo para fins da lei?',
          a: 'Um check-up genérico não se enquadra automaticamente. O documento deve permitir confirmar que houve exame preventivo abrangido pela regra, sem revelar mais dados de saúde do que o necessário. Em caso de dúvida, o RH deve consultar sua assessoria trabalhista e aplicar o mesmo critério a situações equivalentes.',
        },
      ]}
      sidebarTitle="Sua empresa está em conformidade com a Lei 15.377/2026?"
      sidebarHook="A lei está em vigor desde abril de 2026. A SERMST pode ajudar o RH a organizar a comunicação, o fluxo de solicitação e os materiais de conscientização com base em fontes oficiais."
      sidebarCtaLabel="Falar com especialista"
      sidebarCtaHref="/assinaturas"
      related={[
        { label: 'Como evitar processos trabalhistas', href: '/rh/evitar-processos-trabalhistas' },
        { label: 'PCMSO: programa de controle médico', href: '/saude/pcmso-programa-controle-medico' },
        { label: 'O que é saúde ocupacional', href: '/saude/o-que-e-saude-ocupacional' },
        { label: 'Gestão de SST', href: '/saude/gestao-sst' },
      ]}
    />
  );
}
