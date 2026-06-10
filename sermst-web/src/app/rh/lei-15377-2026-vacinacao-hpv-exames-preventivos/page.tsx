import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'Lei 15.377/2026: guia para empresas | SERMST',
  description:
    'Lei dos 3 dias: empresa deve informar sobre vacinação, HPV e câncer, e comunicar o direito a 3 dias de folga para exame preventivo. Guia prático para RH e DP cumprirem a CLT.',
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
      hubLabel="Hub de RH e Departamento Pessoal"
      hubLabelShort="← Hub de RH e DP"
      hubHref="/rh"
      pageUrl="https://sermst.com.br/rh/lei-15377-2026-vacinacao-hpv-exames-preventivos"
      author={{
        name: 'Felipe Sannino',
        jobTitle: 'Advogado — Direito do Trabalho e SST · OAB/SP 430.824',
        url: 'https://sermst.com.br/equipe/felipe-sannino',
        datePublished: '2026-04-10',
        dateModified: '2026-05-26',
      }}

      h1="Lei 15.377/2026 (lei dos 3 dias): vacinação, HPV e folga para exame preventivo — o que muda para as empresas"
      intro="Chamada informalmente de &quot;lei dos 3 dias&quot;, a Lei n.º 15.377/2026 alterou a CLT para garantir ao trabalhador até 3 dias de folga remunerada por ano para exames preventivos de HPV e câncer — sem desconto e sem compensação. Para as empresas, criou obrigações novas: informar sobre campanhas de vacinação, conscientizar sobre HPV, câncer de mama, colo do útero e próstata, e comunicar ativamente esse direito a cada colaborador. A lei já está em vigor desde 6 de abril de 2026. Sem período de adaptação. Empresas que ainda não agiram estão em descumprimento."
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
                  <strong>Art. 473, § 3.º da CLT (criado pela lei):</strong> determina que o empregador tem o dever expresso de informar ativamente o empregado sobre o direito de se ausentar do trabalho para realizar exames preventivos, sem desconto de salário.
                </li>
              </ul>
              <p>
                A lei entrou em vigor na data de sua publicação e não previu nenhum prazo de carência ou período de adaptação. O cumprimento é imediato e obrigatório para todas as empresas com empregados regidos pela CLT.
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
                <li>Campanhas oficiais de vacinação divulgadas pelo Ministério da Saúde — incluindo campanhas sazonais como gripe, COVID-19 e a vacinação contra o HPV.</li>
                <li>O <strong>papilomavírus humano (HPV)</strong>: o que é, como se transmite, os riscos associados e como a vacinação protege contra o câncer de colo do útero e outras doenças.</li>
                <li>Os <strong>cânceres de mama, de colo do útero e de próstata</strong>: fatores de risco, sintomas de alerta e a importância do diagnóstico precoce.</li>
              </ul>
              <p>
                O texto da lei exige que essas informações sigam as &quot;orientações e recomendações do Ministério da Saúde&quot;. A empresa não pode criar conteúdo próprio desalinhado com as diretrizes oficiais de saúde pública.
              </p>
              <p>
                <strong>2. Promover ações afirmativas de conscientização.</strong> Não basta ter um informativo disponível em algum lugar. A lei exige ações concretas que efetivamente alcancem os colaboradores: campanhas internas, comunicados periódicos, palestras, distribuição de materiais informativos. Um cartaz esquecido no mural não cumpre a lei.
              </p>
              <p>
                <strong>3. Orientar sobre acesso a serviços de diagnóstico.</strong> As empresas também devem orientar seus empregados sobre onde e como acessar os serviços de diagnóstico — Unidades Básicas de Saúde (UBS), SUS, planos de saúde e serviços de medicina ocupacional.
              </p>
              <p>
                <strong>4. Comunicar ativamente o direito à ausência remunerada.</strong> O Art. 473, § 3.º determina que o empregador tem o dever expresso de informar o empregado sobre a possibilidade de se ausentar para realizar exames preventivos sem desconto. Não basta que o trabalhador descubra o direito por conta própria: a empresa deve comunicar de forma proativa. Essa obrigação está expressa na lei e o seu descumprimento — por si só — já caracteriza infração trabalhista.
              </p>
            </>
          ),
        },
        {
          title: 'Como funciona o direito a 3 dias de ausência para exames preventivos?',
          body: (
            <>
              <p>
                A Lei 15.377/2026 garante ao trabalhador <strong>até 3 dias por período de 12 meses</strong> de trabalho para a realização de exames preventivos de HPV e dos cânceres de mama, colo do útero e próstata. As condições são:
              </p>
              <ul>
                <li><strong>Sem prejuízo do salário:</strong> o dia é contado como trabalhado, sem desconto e sem necessidade de compensação posterior.</li>
                <li><strong>Mediante comprovação:</strong> o empregado deve apresentar documento que confirme a realização ou o agendamento do exame.</li>
                <li><strong>Por período de 12 meses:</strong> não é por ano civil, mas pelo aniversário do contrato ou admissão — recomenda-se alinhar a interpretação com o departamento jurídico.</li>
              </ul>
              <p>
                <strong>Pontos críticos para o RH e o DP:</strong>
              </p>
              <ul>
                <li><strong>Exames preventivos, não terapêuticos.</strong> A lei cobre check-ups, mamografias, Papanicolau (preventivo), PSA (rastreamento de câncer de próstata) e exames de rastreamento de HPV. Consultas de acompanhamento de doença já diagnosticada não se enquadram neste benefício — para esses casos há outros dispositivos da CLT, como o art. 473, inciso VIII (consulta médica), e licença médica convencional.</li>
                <li><strong>Os 3 dias podem ser fracionados.</strong> A lei não veda o uso parcelado — por exemplo, 1 dia em março, 1 em julho e 1 em outubro. Isso é razoável e alinhado com o espírito da norma.</li>
                <li><strong>A comprovação é obrigatória.</strong> A empresa tem o direito e a responsabilidade de exigir o comprovante. Crie um fluxo interno claro: como o funcionário solicita o dia, qual documento apresentar e em qual prazo.</li>
                <li><strong>Não há custeio obrigatório dos exames.</strong> A lei garante a ausência remunerada, mas não obriga a empresa a pagar pelos exames. O trabalhador pode realizá-los pelo SUS, por plano de saúde próprio ou por convênio médico da empresa, se houver.</li>
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
                <li><strong>Setor:</strong> comércio, indústria, serviços, construção civil, tecnologia, saúde — não há exceção por ramo de atividade.</li>
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
          title: 'Penalidades pelo descumprimento da Lei 15.377/2026',
          body: (
            <>
              <p>
                O descumprimento das normas do Capítulo de Medicina e Segurança do Trabalho da CLT é punido nos termos do <strong>art. 201 da CLT</strong>. As multas administrativas variam de <strong>R$ 415,87 a R$ 4.160,89 por infração</strong>, conforme a Portaria MTE n.º 1.131/2025, que atualizou os valores em vigor.
              </p>
              <p>
                Além das multas administrativas, o descumprimento expõe a empresa a:
              </p>
              <ul>
                <li><strong>Reclamações trabalhistas individuais:</strong> se um funcionário for impedido de exercer o direito à ausência ou tiver o salário descontado indevidamente, pode acionar a Justiça do Trabalho para receber a diferença com juros e correção monetária.</li>
                <li><strong>Ação civil pública do Ministério Público do Trabalho (MPT):</strong> especialmente em casos de descumprimento sistemático ou em empresas de grande porte.</li>
                <li><strong>Passivo em rescisões:</strong> o descumprimento pode ser invocado como fundamento em rescisões indiretas ou em negociações de desligamento, aumentando o custo da saída.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Passo a passo para o RH e DP colocarem a empresa em conformidade',
          body: (
            <>
              <p>
                <strong>Passo 1 — Comunicar formalmente os funcionários sobre o direito às ausências.</strong> Elabore um comunicado interno (e-mail, mural, grupo de comunicação da empresa, intranet) informando que cada colaborador tem direito a até 3 dias por ano para realizar exames preventivos de HPV e câncer, sem desconto de salário. Guarde o registro dessa comunicação — ela é a prova de que a empresa cumpriu o dever imposto pelo art. 473, § 3.º da CLT.
              </p>
              <p>
                Sugestão de texto para o comunicado:
              </p>
              <blockquote>
                &quot;Informamos que, em conformidade com a Lei n.º 15.377/2026, todos os colaboradores têm direito a se ausentar do trabalho por até 3 (três) dias a cada 12 meses para a realização de exames preventivos de HPV, câncer de mama, câncer de colo do útero e câncer de próstata, sem prejuízo do salário. A solicitação deve ser feita com antecedência ao gestor direto e acompanhada de comprovante do exame. Em caso de dúvidas, consulte o RH.&quot;
              </blockquote>
              <p>
                <strong>Passo 2 — Criar um fluxo interno de solicitação e comprovação.</strong> Defina como o funcionário deve proceder: solicitar o dia com antecedência mínima (sugerimos 2 dias úteis de aviso prévio, salvo urgência médica), apresentar comprovante de agendamento ou de realização do exame no prazo de até 5 dias úteis após o retorno, e o RH/DP registra a ausência como &quot;falta justificada — Lei 15.377/2026&quot; na folha de ponto. Documente esse fluxo no manual do colaborador ou em procedimento interno.
              </p>
              <p>
                <strong>Passo 3 — Produzir e distribuir materiais de conscientização.</strong> Crie ou adapte materiais informativos seguindo as orientações do Ministério da Saúde. Fontes oficiais e gratuitas:{' '}
                <a href="https://www.inca.gov.br" target="_blank" rel="noopener noreferrer">INCA (inca.gov.br)</a>, com materiais sobre câncer de mama, próstata e colo do útero, e o{' '}
                <a href="https://www.saude.gov.br" target="_blank" rel="noopener noreferrer">Ministério da Saúde (saude.gov.br)</a>, com o calendário de vacinação e campanhas oficiais. Formatos recomendados: cartazes no refeitório e vestiário, e-mail trimestral, cards para grupos de comunicação interna.
              </p>
              <p>
                <strong>Passo 4 — Calendarizar as ações de conscientização.</strong> Programe ao menos 2 a 4 comunicações por ano alinhadas às campanhas do Ministério da Saúde. Datas relevantes: Março Lilás (câncer de colo do útero), Outubro Rosa (câncer de mama), Novembro Azul (câncer de próstata) e, ao longo do ano, as campanhas de vacinação contra gripe, HPV e COVID-19. O alinhamento com essas datas facilita a produção de conteúdo e reforça a mensagem junto aos colaboradores.
              </p>
              <p>
                <strong>Passo 5 — Capacitar os gestores.</strong> Oriente os líderes de equipe sobre como receber a solicitação de ausência de forma adequada, sem criar barreiras ou constrangimentos ao trabalhador que precisar exercer o direito. Gestores que bloqueiam ou dificultam a ausência criam passivo trabalhista direto para a empresa.
              </p>
            </>
          ),
        },
      ]}
      faq={[
        {
          q: 'O que é a lei dos 3 dias?',
          a: 'É o apelido popular da Lei n.º 15.377/2026, que garante ao trabalhador CLT o direito de se ausentar por até 3 dias a cada 12 meses para realizar exames preventivos de HPV e cânceres de mama, colo do útero e próstata, sem desconto de salário. Além disso, a lei obriga as empresas a informar sobre campanhas de vacinação, conscientizar sobre HPV e comunicar ativamente esse direito a cada colaborador.',
        },
        {
          q: 'A empresa precisa custear os exames preventivos?',
          a: 'Não. A lei garante o direito à ausência remunerada, mas não obriga a empresa a pagar pelos exames. O trabalhador pode realizá-los pelo SUS, por plano de saúde próprio ou por convênio médico da empresa, se houver.',
        },
        {
          q: 'Os 3 dias são contados por contrato ou por ano civil?',
          a: 'Por contrato, em período de 12 meses. O marco inicial é a data de admissão ou o aniversário do contrato — não o ano civil. Recomenda-se alinhar a interpretação com o departamento jurídico da empresa.',
        },
        {
          q: 'E se o funcionário quiser tirar um quarto dia além dos 3 garantidos pela lei?',
          a: 'O quarto dia pode ser negociado como abono, acordo com o gestor ou coberto por outra hipótese do art. 473 da CLT — por exemplo, consulta médica (inciso VIII). A lei não impede acordos mais favoráveis ao trabalhador.',
        },
        {
          q: 'A empresa pode exigir que o exame seja feito em determinada clínica ou horário?',
          a: 'Não. A empresa pode e deve exigir o comprovante e definir regras de comunicação com antecedência, mas não pode restringir onde o trabalhador realizará o exame nem condicionar o benefício ao uso de determinada rede.',
        },
        {
          q: 'Trabalhadores em home office também têm esse direito?',
          a: 'Sim. A modalidade de trabalho — presencial, híbrido ou remoto — não altera os direitos trabalhistas. A Lei 15.377/2026 se aplica a todos os empregados com vínculo CLT, independentemente de onde trabalhem.',
        },
        {
          q: 'A lei já vale mesmo sem prazo de adaptação?',
          a: 'Sim. A Lei 15.377/2026 entrou em vigor em 6 de abril de 2026, na data de sua publicação no Diário Oficial, sem período de carência. Fiscalizações do Ministério do Trabalho e Emprego já podem autuar empresas em descumprimento com base no art. 201 da CLT.',
        },
        {
          q: 'Exame de check-up geral conta como exame preventivo para fins da lei?',
          a: 'A lei especifica exames preventivos relacionados ao HPV e aos cânceres de mama, colo do útero e próstata — como mamografia, Papanicolau, colposcopia, PSA e exames de rastreamento de HPV. Check-ups gerais não se enquadram diretamente, mas consultas que incluam esses rastreamentos podem ser justificadas parcialmente. Recomenda-se consultar advogado trabalhista para casos específicos.',
        },
      ]}
      sidebarTitle="Sua empresa está em conformidade com a Lei 15.377/2026?"
      sidebarHook="A lei já está em vigor desde abril de 2026 e não há prazo de adaptação. Empresas que não comunicaram o direito à ausência ou não promovem ações de conscientização estão expostas a autuações e reclamações trabalhistas. A SERMST apoia sua equipe de RH e DP na implementação."
      sidebarCtaLabel="Falar com especialista"
      related={[
        { label: 'Como evitar processos trabalhistas', href: '/rh/evitar-processos-trabalhistas' },
        { label: 'PCMSO: programa de controle médico', href: '/saude/pcmso-programa-controle-medico' },
        { label: 'O que é saúde ocupacional', href: '/saude/o-que-e-saude-ocupacional' },
        { label: 'Gestão de SST', href: '/saude/gestao-sst' },
      ]}
    />
  );
}
