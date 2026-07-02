import type { Metadata } from 'next';
import { BlockbusterArticle } from '@/components/sections/blockbuster-article';

export const metadata: Metadata = {
  title: 'NR-37: segurança em plataformas de petróleo e gás — guia completo | SERMST',
  description:
    'A NR-37 regula segurança e saúde em plataformas de petróleo e gás offshore. Entenda CIPLAT, treinamentos básico (6h) e avançado (8h), SESMT offshore, alojamento e planos de emergência.',
  alternates: { canonical: 'https://sermst.com.br/normas/nr-37' },
  openGraph: {
    title: 'NR-37: segurança em plataformas de petróleo e gás — guia completo | SERMST',
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
      coverImage={{ src: '/images/site/corporate-team.jpg', alt: 'Trabalhadores em plataforma offshore — NR-37 segurança e saúde' }}
      author={{
        name: 'Luiz Cesar Sannino',
        jobTitle: 'Higienista Ocupacional | Técnico em Segurança do Trabalho | CREA/SP 5061899709',
        url: 'https://sermst.com.br/equipe/luiz-cesar-sannino',
        datePublished: '2026-07-02',
        dateModified: '2026-07-02',
      }}
      readingTime="10 min"
      h1="NR-37: segurança e saúde em plataformas de petróleo e gás — o que a norma exige"
      intro="A NR-37 regula as condições de segurança e saúde no trabalho a bordo de plataformas de petróleo e gás natural — tanto fixas quanto móveis — operadas no Brasil. É a norma que define jornada de embarque, condições de alojamento e alimentação, SESMT offshore, treinamentos obrigatórios, gestão de emergências e obrigações específicas para o ambiente de plataforma."
      quickAnswer={
        <p>
          A <strong>NR-37</strong> (Norma Regulamentadora nº 37) estabelece os requisitos de segurança e saúde para trabalhadores em <strong>plataformas de petróleo e gás natural offshore</strong>. Exige <strong>SESMT</strong> dimensionado para o regime de plataforma, a comissão interna denominada <strong>CIPLAT</strong>, treinamentos específicos de segurança a bordo (treinamento básico de 6h e avançado de 8h), condições adequadas de alojamento e alimentação, e planos de emergência testados regularmente. O regime de escala praticado (mais comum: 14 dias embarcado × 14 em terra) é definido pela CLT e acordos coletivos do setor, não diretamente pela NR-37.
        </p>
      }
      showTableOfContents
      sections={[
        {
          title: 'O que é a NR-37 e a quem se aplica',
          body: (
            <>
              <p>
                A NR-37 se aplica a todas as plataformas de petróleo e gás natural — fixas, semi-submersíveis, autoelevatórias (jack-up), FPSO e demais instalações flutuantes — que operem no Brasil, incluindo as situadas em águas jurisdicionais brasileiras.
              </p>
              <p>
                São abrangidas pela norma as empresas operadoras (como Petrobras e outras concessionárias) e todas as contratadas e subcontratadas que trabalhem a bordo de plataformas. A responsabilidade primária pela gestão de SST offshore é da <strong>operadora</strong>, mas as contratadas têm obrigações próprias quanto a seus trabalhadores embarcados.
              </p>
            </>
          ),
        },
        {
          title: 'Jornada de embarque: como funciona o regime de plataforma',
          body: (
            <>
              <p>
                O trabalho em plataforma opera em regime de escala, com períodos de embarque e desembarque alternados. O regime mais praticado no setor de petróleo e gás no Brasil é o <strong>14×14</strong> — 14 dias embarcado seguidos de 14 dias de folga em terra. Esse regime decorre da <strong>CLT e de convenções coletivas</strong> negociadas entre sindicatos e operadoras; a NR-37 não estipula dias de embarque específicos, mas estabelece os limites de saúde e segurança que qualquer regime deve respeitar.
              </p>
              <p>
                Durante o período embarcado, a <strong>NR-37 limita a jornada diária a 12 horas</strong>, com intervalo mínimo de 12 horas entre turnos. Atividades em turno de 12 horas são permitidas desde que resguardadas as condições de segurança e bem-estar previstas na norma.
              </p>
              <p>
                O tempo de deslocamento entre a base em terra e a plataforma (por helicóptero ou embarcação de apoio) é computado como jornada de trabalho quando supera os limites previstos em acordo coletivo ou na própria regulamentação do setor.
              </p>
            </>
          ),
        },
        {
          title: 'SESMT, CIPLAT e a organização de SST na plataforma',
          body: (
            <>
              <p>
                A NR-37 exige que cada plataforma mantenha <strong>SESMT dimensionado de acordo com o número de trabalhadores embarcados</strong> e com os riscos da operação. O dimensionamento não segue exatamente o Quadro I da NR-04 — há regras específicas para o ambiente offshore, incluindo a obrigatoriedade de médico do trabalho embarcado quando o porte e os riscos da plataforma assim exigirem.
              </p>
              <p>
                Além do SESMT, a NR-37 prevê a <strong>CIPLAT — Comissão Interna de Prevenção de Acidentes e de Assédio em Plataformas</strong>, equivalente offshore da CIPA (NR-05). A CIPLAT tem representantes indicados pelo empregador e eleitos pelos trabalhadores embarcados, e atua na identificação de riscos, proposição de melhorias e acompanhamento de ações de SST a bordo.
              </p>
              <p>
                O médico do trabalho embarcado é responsável pelo PCMSO adaptado ao regime de plataforma, pelos atendimentos de saúde a bordo e pela gestão de emergências médicas — inclusive articulação com evacuação médica (MEDEVAC) quando necessário.
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
                <li><strong>Briefing de segurança da plataforma (por embarque):</strong> orientação geral a cada chegada a bordo — tipos de alarme, rotas de fuga, pontos de encontro, recursos de salvatagem. Sem emissão de certificado.</li>
                <li><strong>Treinamento básico (mínimo 6 horas):</strong> realizado antes do primeiro embarque. Cobre inventário de riscos do PGR, procedimentos de acesso, substâncias inflamáveis, áreas classificadas, riscos psicossociais e produtos químicos perigosos a bordo.</li>
                <li><strong>Treinamento avançado (mínimo 8 horas):</strong> análise preliminar de riscos, permissão de trabalho, prevenção e combate a incêndio, resposta a emergências com inflamáveis, segurança de processo. Inclui atividade prática a bordo de no mínimo 1 hora.</li>
                <li><strong>Reciclagem (mínimo 4 horas a cada 5 anos)</strong> ou sempre que houver retorno de afastamento superior a 180 dias.</li>
                <li><strong>DDS (Diálogo Diário de Segurança):</strong> antes de cada início de atividades operacionais, com registro em lista de presença ou permissão de trabalho.</li>
              </ul>
              <p>
                Além das exigências da NR-37, operadoras e plataformas internacionais costumam requerer certificações adicionais reconhecidas no setor, como <strong>HUET</strong> (fuga de helicóptero submerso), <strong>BOSIET/FOET</strong> (sobrevivência offshore OPITO) e <strong>H2S awareness</strong>. Esses cursos não são impostos diretamente pela NR-37, mas são condição de embarque em muitas instalações.
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
                O PCMSO para trabalhadores offshore deve contemplar os riscos específicos do ambiente de plataforma — exposição a agentes químicos, físicos e ergonômicos presentes em operações de petróleo e gás — além de avaliar a aptidão do trabalhador para o regime especial de embarque.
              </p>
              <p>
                O ASO (Atestado de Saúde Ocupacional) deve ser emitido antes do embarque e periodicamente durante a vigência do contrato. Trabalhador com ASO vencido não deve ser autorizado a embarcar. A aptidão para o trabalho offshore pode incluir avaliações específicas não exigidas em terra, como teste de esforço, avaliação psicológica e comprovação de vacinação.
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
              <li>Manter SESMT dimensionado para o regime offshore e com médico do trabalho quando exigido.</li>
              <li>Garantir que todos os trabalhadores tenham treinamentos válidos antes do embarque.</li>
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
              <li><strong>SESMT sem médico do trabalho</strong> quando a norma exige presença a bordo.</li>
              <li><strong>PGR genérico</strong>, sem contemplar os riscos específicos da operação offshore.</li>
            </ol>
          ),
        },
      ]}
      faq={[
        {
          q: 'O que é a NR-37?',
          a: 'A NR-37 é a Norma Regulamentadora que estabelece os requisitos de segurança e saúde no trabalho em plataformas de petróleo e gás natural offshore — fixas e flutuantes — operadas no Brasil. Define jornada de embarque, SESMT, treinamentos obrigatórios, condições de alojamento, alimentação e gestão de emergências.',
        },
        {
          q: 'A quem se aplica a NR-37?',
          a: 'A todas as plataformas de petróleo e gás natural que operam no Brasil, incluindo as situadas em águas jurisdicionais brasileiras. Abrange operadoras e todas as empresas contratadas e subcontratadas com trabalhadores embarcados a bordo.',
        },
        {
          q: 'Qual é a jornada de trabalho em plataforma offshore?',
          a: 'O regime de escala mais praticado no setor é o 14×14 (14 dias embarcado e 14 dias em terra), mas esse regime é definido pela CLT e por acordos coletivos entre sindicatos e operadoras — não pela NR-37 diretamente. A NR-37 limita a jornada diária a 12 horas durante o embarque, com intervalo mínimo de 12 horas entre turnos.',
        },
        {
          q: 'Quais treinamentos são obrigatórios pela NR-37?',
          a: 'A NR-37 estrutura a capacitação em: briefing de segurança (a cada embarque), treinamento básico (mínimo 6 horas, antes do primeiro embarque), treinamento avançado (mínimo 8 horas, com 1 hora de atividade prática a bordo) e reciclagem (mínimo 4 horas a cada 5 anos ou após afastamento superior a 180 dias). Operadoras podem exigir adicionalmente certificações OPITO como HUET, BOSIET/FOET e H2S awareness — essas são requisitos dos operadores, não imposições diretas da NR-37.',
        },
        {
          q: 'O que é a CIPLAT?',
          a: 'A CIPLAT — Comissão Interna de Prevenção de Acidentes e de Assédio em Plataformas — é o equivalente offshore da CIPA (NR-05), criado pela NR-37. É uma comissão paritária com representantes do empregador e dos trabalhadores embarcados, responsável por identificar riscos, propor melhorias e acompanhar as ações de SST a bordo da plataforma.',
        },
        {
          q: 'A NR-37 exige médico do trabalho a bordo?',
          a: 'Sim, quando o porte da plataforma e os riscos da operação exigem. O SESMT offshore deve ser dimensionado conforme regras específicas da NR-37, que podem incluir médico do trabalho embarcado permanente em instalações de maior porte.',
        },
        {
          q: 'O que é MEDEVAC offshore?',
          a: 'MEDEVAC é a evacuação médica de emergência de trabalhador da plataforma para terra. Deve ser prevista no Plano de Resposta a Emergências da instalação, com procedimentos definidos para acionamento de helicóptero ou embarcação de resgate médico.',
        },
        {
          q: 'Qual a relação entre NR-37 e NR-35 (trabalho em altura)?',
          a: 'As atividades em altura nas plataformas offshore — manutenção de estruturas, guindastes, passadiços — estão sujeitas às exigências da NR-35, que se aplica em conjunto com a NR-37. O trabalhador precisa de treinamento válido de NR-35 além dos treinamentos específicos offshore.',
        },
      ]}
      maxFaqItems={9}
      sidebarTitle="Sua operação offshore está em conformidade com a NR-37?"
      sidebarHook="A SERMST apoia empresas com trabalhadores embarcados: PCMSO offshore, ASO pré-embarque, treinamentos, PGR e gestão integrada de SST para o setor de petróleo e gás."
      sidebarCtaLabel="Falar sobre compliance offshore"
      sidebarCtaHref="/contato"
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
