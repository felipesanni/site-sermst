import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-37: plataformas de petróleo e gás | SERMST',
  description:
    'A NR-37 regula segurança e saúde em plataformas de petróleo e gás offshore. Entenda CIPLAT, treinamentos básico (6h) e avançado (8h), SESMT offshore, alojamento e planos de emergência.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-37' },
  openGraph: {
    title: 'NR-37: plataformas de petróleo e gás | SERMST',
    description:
      'Guia da NR-37 para empresas offshore: jornada de embarque, SESMT, alojamento, treinamentos, gestão de emergências e obrigações em plataformas de petróleo e gás natural.',
    url: 'https://sermst.com.br/normas/nr-37',
    type: 'article',
    locale: 'pt_BR',
  },
};

export default function NR37Page() {
  return (
    <BlockbusterArticle
      hubLabel="Normas Regulamentadoras"
      hubLabelShort="← Normas"
      hubHref="/normas"
      pageUrl="https://sermst.com.br/normas/nr-37"
      badgeText="NR-37"
      coverImage={{ src: '/images/site/corporate-team.jpg', alt: 'Trabalhadores em plataforma offshore seguindo medidas de segurança da NR-37' }}
      author={{
        name: 'Luiz Cesar Sannino',
        jobTitle: 'Higienista Ocupacional | Técnico em Segurança do Trabalho | CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-07-02',
        dateModified: '2026-07-13',
      }}
      readingTime="10 min"
      h1="NR-37: segurança e saúde em plataformas de petróleo e gás"
      intro="A NR-37 estabelece requisitos de segurança, saúde e condições de vivência a bordo de plataformas de petróleo em operação nas Águas Jurisdicionais Brasileiras. Ela trata de PGR, atenção à saúde, SESMT, CIPLAT, capacitação, emergências e estrutura de alojamento e alimentação."
      quickAnswer={
        <p>
          A <strong>NR-37</strong> estabelece requisitos para plataformas de petróleo em operação nas águas brasileiras. A operadora e as prestadoras têm obrigações próprias. A norma prevê SESMT em terra e, conforme o efetivo, a bordo; CIPLAT por plataforma; briefing a cada embarque; treinamento básico de 6 horas; treinamento avançado de 8 horas para quem entra na área operacional nas atividades indicadas; e reciclagem de 4 horas a cada cinco anos ou nas outras hipóteses previstas.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'O que é a NR-37 e a quem se aplica',
          body: (
            <>
              <p>
                A NR-37 se aplica ao trabalho em plataformas de petróleo nacionais e estrangeiras em operação nas Águas Jurisdicionais Brasileiras. O texto contém regras próprias para diferentes fases e condições da instalação.
              </p>
              <p>
                A operadora deve coordenar a gestão de segurança da instalação e fornecer às contratadas as informações necessárias. As prestadoras continuam responsáveis por seus empregados, por seus riscos e pelas medidas que lhes cabem.
              </p>
            </>
          ),
        },
        {
          title: 'Escala e jornada: o que a NR-37 regula',
          body: (
            <>
              <p>
                O trabalho em plataforma costuma ser organizado em escalas de embarque e descanso. A definição da jornada e da escala depende da legislação trabalhista específica, do contrato e dos instrumentos coletivos aplicáveis. A NR-37 não cria uma escala geral de 14 por 14 dias.
              </p>
              <p>
                A NR-37 exige que o PGR considere os regimes de trabalho, o tempo de exposição, os turnos e os riscos psicossociais associados a jornadas prolongadas e ao trabalho noturno.
              </p>
              <p>
                Questões sobre duração do turno, descanso e tempo de deslocamento devem ser verificadas na Lei 5.811/1972, na CLT, nas decisões aplicáveis e na norma coletiva da categoria. Não é correto atribuir uma regra única à NR-37.
              </p>
            </>
          ),
        },
        {
          title: 'SESMT, CIPLAT e a organização de SST na plataforma',
          body: (
            <>
              <p>
                A NR-37 exige SESMT em terra e define quando a operadora deve constituir SESMT a bordo. A partir de 25 trabalhadores embarcados, o SESMT da operadora a bordo é composto por técnicos de segurança, na proporção indicada pela norma. As prestadoras também têm regras próprias de dimensionamento.
              </p>
              <p>
                Além do SESMT, a NR-37 prevê a <strong>CIPLAT, Comissão Interna de Prevenção de Acidentes e de Assédio em Plataformas</strong>. Ela é constituída por plataforma e por turma de embarque, com representantes do empregador e dos empregados nas condições previstas no item 37.8.
              </p>
              <p>
                Plataformas habitadas com 31 ou mais trabalhadores devem contar com profissional de saúde a bordo, conforme a faixa de efetivo. Esse profissional pode ser técnico de enfermagem, enfermeiro ou médico, de acordo com o dimensionamento. A norma também exige enfermaria e telemedicina nas condições do item 37.6.5.
              </p>
            </>
          ),
        },
        {
          title: 'Treinamentos obrigatórios para trabalhadores offshore',
          body: (
            <>
              <p>A NR-37 estrutura a capacitação em plataformas em quatro modalidades principais, sob responsabilidade da operadora da instalação:</p>
              <ul>
                <li><strong>Briefing de segurança a cada embarque:</strong> orientação sobre a plataforma, alarmes, rotas de fuga, pontos de encontro, recursos de salvatagem e regras de convivência. Há registro em lista de presença, sem emissão de certificado.</li>
                <li><strong>Treinamento básico (mínimo 6 horas):</strong> realizado antes do primeiro embarque. Cobre inventário de riscos do PGR, procedimentos de acesso, substâncias inflamáveis, áreas classificadas, riscos psicossociais e produtos químicos perigosos a bordo.</li>
                <li><strong>Treinamento avançado, mínimo de 8 horas:</strong> para quem entra na área operacional e realiza atividades específicas, pontuais ou eventuais ligadas à operação, manutenção, integridade ou emergência. Inclui atividade prática a bordo de pelo menos uma hora.</li>
                <li><strong>Reciclagem, mínimo de 4 horas:</strong> a cada cinco anos, por indicação da atualização do PGR ou após retorno de afastamento superior a 180 dias.</li>
                <li><strong>DDS:</strong> antes do início das atividades operacionais, considerando tarefas, riscos, medidas de proteção e alarmes.</li>
              </ul>
              <p>
                Operadoras podem exigir certificações adicionais, como HUET, BOSIET ou treinamento sobre H2S, conforme a instalação e o contrato. Esses requisitos não devem ser apresentados como se fizessem parte, por si só, da NR-37.
              </p>
            </>
          ),
        },
        {
          title: 'Condições de alojamento, alimentação e bem-estar',
          body: (
            <>
              <p>
                A NR-37 estabelece padrões mínimos para as condições de habitabilidade a bordo, reconhecendo que o trabalhador offshore vive na plataforma durante todo o período de embarque. As exigências incluem:
              </p>
              <ul>
                <li>Camarotes individuais ou com número limitado de ocupantes, com cama e armário individuais.</li>
                <li>Banheiros e instalações sanitárias adequados ao número de embarcados.</li>
                <li>Alimentação com cardápio variado, em quantidade e qualidade suficientes, servida em refeitório adequado.</li>
                <li>Áreas de lazer e descanso fora dos locais de trabalho.</li>
                <li>Acesso a comunicação com familiares (telefone ou internet).</li>
                <li>Controle de temperatura e ventilação nos alojamentos.</li>
              </ul>
            </>
          ),
        },
        {
          title: 'Gestão de emergências e planos de resposta',
          body: (
            <>
              <p>
                A NR-37 exige que cada plataforma mantenha um <strong>Plano de Resposta a Emergências (PRE)</strong> atualizado, com procedimentos para incêndio, explosão, derramamento, emergência médica, evacuação e abandono. Os planos devem ser testados regularmente por meio de simulados.
              </p>
              <p>
                A norma também define a obrigatoriedade de sistemas de comunicação com a costa, sinais de alerta, brigadas de emergência treinadas e equipamentos de abandono (coletes, baleeiras, balsas salva-vidas) em quantidade e estado de uso adequados.
              </p>
            </>
          ),
        },
        {
          title: 'Saúde do trabalhador embarcado: PCMSO offshore e ASO',
          body: (
            <>
              <p>
                A operadora e cada prestadora permanente a bordo devem elaborar PCMSO por plataforma, articulado aos riscos identificados. Plataformas desabitadas são dispensadas de um PCMSO próprio, mas seus riscos precisam constar no programa ao qual os trabalhadores estão vinculados.
              </p>
              <p>
                O ASO segue a NR-07 e o PCMSO. A primeira via deve estar disponível na enfermaria, em meio físico ou eletrônico. Avaliações adicionais precisam ter fundamento nos riscos e na atividade; a NR-37 não estabelece uma lista universal de teste de esforço, avaliação psicológica ou vacinação para todo trabalhador embarcado.
              </p>
            </>
          ),
        },
        {
          title: 'Relação da NR-37 com outras normas',
          body: (
            <ul>
              <li><strong>NR-01 (PGR):</strong> o Programa de Gerenciamento de Riscos deve contemplar os riscos do ambiente offshore e ser integrado ao sistema de gestão de SST da operadora.</li>
              <li><strong>NR-04 (SESMT):</strong> o dimensionamento do SESMT offshore segue regras adaptadas da NR-04, com particularidades para o regime de plataforma.</li>
              <li><strong>NR-07 (PCMSO):</strong> o PCMSO para trabalhadores embarcados deve ser adaptado aos riscos e ao regime especial de embarque.</li>
              <li><strong>NR-35 (Trabalho em Altura):</strong> plataformas envolvem trabalho em altura rotineiro, tornando obrigatório o cumprimento das exigências da NR-35 para essas atividades.</li>
              <li><strong>NR-33 (Espaço Confinado):</strong> tanques, vasos de pressão e espaços confinados em plataformas estão sujeitos às exigências da NR-33.</li>
            </ul>
          ),
        },
        {
          title: 'Principais obrigações do empregador na NR-37',
          body: (
            <ol>
              <li>Constituir e dimensionar SESMT em terra e a bordo nas situações previstas.</li>
              <li>Permitir as atividades somente a trabalhadores capacitados para sua função.</li>
              <li>Emitir e manter ASO atualizado para cada trabalhador embarcado.</li>
              <li>Elaborar e testar regularmente o Plano de Resposta a Emergências.</li>
              <li>Assegurar condições de alojamento, alimentação e bem-estar conforme os padrões da norma.</li>
              <li>Integrar o PGR offshore ao sistema de gestão de SST da operadora.</li>
              <li>Registrar e investigar todos os acidentes e incidentes ocorridos a bordo.</li>
            </ol>
          ),
        },
        {
          title: 'Erros que geram autuação e passivo nas operações offshore',
          body: (
            <ol>
              <li><strong>Embarcar trabalhador sem treinamentos NR-37 válidos</strong> (treinamento básico, avançado ou reciclagem vencidos ou não realizados antes do primeiro embarque).</li>
              <li><strong>ASO vencido</strong> ou sem avaliação das condições específicas para o trabalho offshore.</li>
              <li><strong>Simulados de emergência não realizados</strong> ou sem registro.</li>
              <li><strong>Alojamentos em desconformidade</strong> com os padrões de habitabilidade da NR-37.</li>
              <li><strong>SESMT ou equipe de saúde dimensionados de forma incorreta</strong> para o efetivo e as condições da plataforma.</li>
              <li><strong>PGR genérico</strong>, sem contemplar os riscos específicos da operação offshore.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'O que é a NR-37?',
          a: 'A NR-37 estabelece requisitos de segurança, saúde e condições de vivência no trabalho em plataformas de petróleo em operação nas Águas Jurisdicionais Brasileiras. Trata de PGR, SESMT, CIPLAT, atenção à saúde, capacitação, acesso, alojamento e emergências.',
        },
        {
          q: 'A quem se aplica a NR-37?',
          a: 'Ao trabalho em plataformas de petróleo nacionais e estrangeiras em operação nas Águas Jurisdicionais Brasileiras, observadas as disposições específicas e as responsabilidades da operadora e das prestadoras.',
        },
        {
          q: 'Qual é a jornada de trabalho em plataforma offshore?',
          a: 'A escala depende da legislação trabalhista específica e dos instrumentos coletivos aplicáveis. A NR-37 não fixa uma escala geral de 14 por 14 nem deve ser usada como única fonte para definir a duração da jornada.',
        },
        {
          q: 'Quais treinamentos são obrigatórios pela NR-37?',
          a: 'A norma prevê briefing a cada embarque, treinamento básico de 6 horas, treinamento avançado de 8 horas para os trabalhadores indicados no item 37.9.6.5, treinamento eventual, reciclagem de 4 horas e DDS. A aplicação depende da função e do acesso à área operacional.',
        },
        {
          q: 'O que é a CIPLAT?',
          a: 'A CIPLAT é a Comissão Interna de Prevenção de Acidentes e de Assédio em Plataformas. Sua constituição, representação e funcionamento seguem o item 37.8 da NR-37 e, no que não houver conflito, a NR-05.',
        },
        {
          q: 'A NR-37 exige profissional de saúde a bordo?',
          a: 'Plataformas habitadas com 31 ou mais trabalhadores devem ter profissional de saúde a bordo. A categoria profissional e a quantidade variam com o efetivo, podendo incluir técnico de enfermagem, enfermeiro ou médico nas combinações previstas pela norma.',
        },
        {
          q: 'O que é MEDEVAC offshore?',
          a: 'É a remoção aeromédica do trabalhador para atendimento em terra. A NR-37 usa o termo EVAM e estabelece requisitos de acionamento, prontidão da aeronave e atuação do médico regulador.',
        },
        {
          q: 'Qual a relação entre NR-37 e NR-35 (trabalho em altura)?',
          a: 'Quando a atividade se enquadra no campo de aplicação da NR-35, seus requisitos se somam aos da NR-37. A capacitação e as medidas de prevenção devem corresponder à tarefa efetivamente executada.',
        },
      ]}
      maxFaqItems={9}
      sidebarTitle="Sua operação offshore está em conformidade com a NR-37?"
      sidebarHook="A SERMST apoia empresas na organização de PCMSO por plataforma, exames ocupacionais, treinamentos e documentos de SST para trabalhadores embarcados."
      sidebarCtaLabel="Falar sobre SST offshore"
      sidebarCtaHref="/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo"
      related={[
        { label: 'NR-35: trabalho em altura', href: '/normas/nr-35-trabalho-em-altura' },
        { label: 'NR-33: espaço confinado', href: '/normas/nr-33-espaco-confinado' },
        { label: 'NR-4 e SESMT: dimensionamento', href: '/normas/sesmt' },
        { label: 'PCMSO: programa de controle médico', href: '/saude/pcmso-programa-controle-medico' },
        { label: 'PGR NR-01', href: '/servicos/pgr-nr01-gerenciamento-riscos' },
      ]}
    />
  );
}
