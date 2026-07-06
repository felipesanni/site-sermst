export interface Training {
  slug: string;
  title: string;
  category: string;
  workload: string;
  targetAudience: string;
  summary: string;
  syllabus: string[];
  description?: string;
}

export const trainingsData: Training[] = [
  {
    slug: 'nr-10-seguranca-eletrica',
    title: 'NR-10 - Segurança em Eletricidade',
    category: 'Segurança',
    workload: '40h (Básico) / 40h (Complementar/SEP)',
    targetAudience: 'Eletricistas, manutentores e profissionais que interagem com energia elétrica.',
    summary: 'Capacitação obrigatória para prevenir acidentes elétricos, focada em segurança, normas técnicas e proteção de instalações.',
    description: 'A NR-10 é obrigatória para trabalhadores que atuam direta ou indiretamente com instalações elétricas, manutenção, operação de painéis, intervenções em circuitos energizados ou atividades em áreas com risco elétrico. O objetivo do treinamento é reduzir choque, arco elétrico, incêndio, explosão e falhas operacionais que colocam em risco o trabalhador, a estrutura e a continuidade da operação.\n\nO conteúdo envolve análise de risco, medidas de controle, desenergização, bloqueio e sinalização, uso correto de EPC e EPI, documentação obrigatória e procedimentos seguros para atuação em baixa e alta tensão. Quando há trabalho no Sistema Elétrico de Potência ou em suas proximidades, a empresa também precisa observar o treinamento complementar e manter rastreabilidade formal da capacitação.\n\nNa prática, a NR-10 protege não só o trabalhador que executa o serviço, mas também a empresa e o gestor responsável. Equipe sem treinamento documentado aumenta risco de acidente grave, autuação, interdição e responsabilização trabalhista, previdenciária e até criminal em caso de ocorrência elétrica com dano humano ou patrimonial.',
    syllabus: [
      'Introdução à segurança com eletricidade',
      'Riscos em instalações e serviços com eletricidade',
      'Técnicas de Análise de Risco',
      'Medidas de Controle do Risco Elétrico',
      'Equipamentos de Proteção Coletiva (EPC)',
      'Equipamentos de Proteção Individual (EPI)',
      'Rotinas de trabalho – Procedimentos',
      'Riscos Adicionais (Altura, Espaço Confinado)',
      'Prevenção e combate a incêndios',
      'Noções de Primeiros Socorros'
    ]
  },
  {
    slug: 'nr-35-trabalho-em-altura',
    title: 'NR-35 - Trabalho em Altura',
    category: 'Segurança',
    workload: '8h (Capacitação / Reciclagem)',
    targetAudience: 'Trabalhadores que executam atividades acima de 2 metros de altura.',
    summary: 'Treinamento focado em planejamento, organização e execução segura de trabalhos em altura utilizando sistemas de proteção e ancoragem.',
    description: 'A NR-35 regulamenta toda atividade executada acima de 2 metros de altura onde haja risco de queda — telhados, coberturas, estruturas metálicas, postes, andaimes e escadas fixas. É uma das normas com maior índice de autuação em fiscalizações do Ministério do Trabalho, pois quedas de altura respondem pela maioria das fatalidades em acidentes de trabalho no Brasil.\n\nO treinamento inicial tem carga horária mínima de 8 horas e deve cobrir os riscos específicos de queda, o uso correto de cintos de segurança tipo paraquedista e trava-quedas, a elaboração da Análise de Risco (AR) e a Permissão de Trabalho (PT). A reciclagem é obrigatória a cada 2 anos, ou sempre que houver mudança de função, acidente ou alteração nas condições de trabalho.\n\nEmpresas sem trabalhadores habilitados para trabalho em altura estão sujeitas a embargo imediato em fiscalização, especialmente nos setores de construção civil, manutenção industrial e telecomunicações. A responsabilidade por acidente fatal sem treinamento documentado gera processo criminal contra o empregador e agrava indenizações trabalhistas.',
    syllabus: [
      'Normas e regulamentos aplicáveis ao trabalho em altura',
      'Análise de Risco e condições impeditivas',
      'Riscos potenciais inerentes ao trabalho em altura',
      'Equipamentos de Proteção Individual (seleção, inspeção e conservação)',
      'Sistemas, equipamentos e procedimentos de proteção coletiva',
      'Acidentes típicos em trabalhos em altura',
      'Condutas em situações de emergência',
      'Noções de técnicas de resgate e de primeiros socorros'
    ]
  },
  {
    slug: 'nr-33-espaco-confinado',
    title: 'NR-33 - Espaço Confinado',
    category: 'Segurança',
    workload: '16h (Vigias) / 40h (Supervisores)',
    targetAudience: 'Trabalhadores que entram em espaços confinados e supervisores de entrada.',
    summary: 'Gestão de segurança e saúde em trabalhos em espaços confinados, cobrindo monitoramento de gases, ventilação e resgate.',
    description: 'A NR-33 regulamenta o trabalho em espaços confinados — ambientes como tanques, tubulações, cisternas, galerias e câmaras frigoríficas que não foram projetados para ocupação humana contínua e apresentam risco de atmosfera deficiente em oxigênio, acúmulo de gases tóxicos ou explosivos. Entrar em espaço confinado sem protocolo correto é uma das causas mais frequentes de fatalidades múltiplas no trabalho no Brasil.\n\nO treinamento habilita vigias e supervisores de entrada com cargas horárias distintas — vigias precisam de 16 horas, supervisores de 40 horas. O conteúdo cobre a identificação e classificação do espaço, monitoramento de atmosfera com detector multigas, procedimentos da Permissão de Entrada e Trabalho (PET), uso de equipamentos de proteção respiratória e técnicas de resgate sem entrada.\n\nA empresa que permitir entrada em espaço confinado sem equipe habilitada, PET emitida, detectores de gás calibrados e sistema de resgate disponível responde criminalmente em caso de acidente. Fiscalizações do Ministério do Trabalho em indústrias, saneamento e obras resultam rotineiramente em interdições por irregularidades específicas nesse ponto.',
    syllabus: [
      'Definições de espaços confinados',
      'Reconhecimento, avaliação e controle de riscos',
      'Operação de detectores de gases',
      'Procedimentos de entrada e Permissão de Entrada e Trabalho (PET)',
      'Programas de proteção respiratória',
      'Noções de resgate e primeiros socorros',
      'Legislação e normas técnicas de segurança',
      'Equipamentos de ventilação e iluminação'
    ]
  },
  {
    slug: 'nr-05-cipa-comissao-interna',
    title: 'Treinamento de CIPA NR-05 para membros e designados',
    category: 'Gestão',
    workload: '8h a 20h (Conforme Grau de Risco)',
    targetAudience: 'Integrantes da comissão (eleitos e indicados) e designados.',
    summary: 'Curso de CIPA NR-05 para membros eleitos, indicados e designados, com carga horária conforme o grau de risco, conteúdo obrigatório, SIPAT, mapa de riscos e certificados.',
    description: 'A CIPA (Comissão Interna de Prevenção de Acidentes) é obrigatória pela NR-05 para empresas com funcionários CLT a partir de determinado porte e grau de risco. Sua missão é investigar e analisar acidentes, realizar vistorias periódicas no ambiente de trabalho, propor medidas corretivas e promover a cultura de prevenção entre todos os colaboradores por meio da SIPAT.\n\nO treinamento habilita membros eleitos e indicados a cumprir suas atribuições legais: mapear riscos no Mapa de Riscos, investigar causas de acidentes e incidentes, propor melhorias estruturais e organizar a Semana Interna de Prevenção de Acidentes do Trabalho (SIPAT). O Designado de CIPA, exigido em empresas de menor porte que não atingem o dimensionamento mínimo para a comissão, também precisa de capacitação equivalente.\n\nEmpresas sem CIPA constituída ou com membros sem o treinamento adequado estão expostas a autos de infração do Ministério do Trabalho, agravamento de penalidades em caso de acidente e aumento do passivo trabalhista. Toda documentação — atas de eleição, lista de presença e certificados — deve ficar disponível para fiscalização a qualquer momento.',
    syllabus: [
      'O ambiente e as condições de trabalho',
      'Metodologia de investigação e análise de acidentes',
      'Princípios gerais de higiene do trabalho',
      'Legislação trabalhista e previdenciária – SST',
      'Noções sobre inclusão de pessoas com deficiência',
      'Funcionamento da CIPA e atribuições dos membros',
      'Prevenção e combate ao assédio sexual e violência no trabalho',
      'Mapa de Riscos e Plano de Trabalho'
    ]
  },
  {
    slug: 'brigada-de-incendio-it17',
    title: 'Brigada de Incêndio (IT-17)',
    category: 'Emergência',
    workload: '8h (Nível Básico)',
    targetAudience: 'Funcionários de todos os setores designados para a brigada de emergência.',
    summary: 'Preparação para resposta rápida em situações de incêndio e emergências médicas, visando a preservação da vida e do patrimônio.',
    description: 'A Brigada de Incêndio é exigida pela IT-17 do CSCIP/SP e pelas normas complementares do Corpo de Bombeiros. Toda empresa que opera em São Paulo precisa de brigadistas habilitados para agir em incêndios, evacuação e emergências médicas — ou arrisca não renovar o AVCB (Auto de Vistoria do Corpo de Bombeiros), documento obrigatório para o licenciamento do estabelecimento.\n\nO treinamento capacita colaboradores a identificar riscos de incêndio, acionar o sistema de alarme, utilizar extintores e hidrantes corretamente, conduzir a evacuação do edifício com segurança e prestar os primeiros socorros até a chegada do SAMU. O nível básico cobre os principais procedimentos para empresas de ocupação e risco médios. Empresas de maior risco ou porte exigem módulos avançados com uso de mangueiras e equipamentos de proteção individual específicos.\n\nEmpresas sem brigadistas treinados e documentados estão sujeitas à auditoria do Corpo de Bombeiros, interdição do espaço e responsabilidade civil direta em caso de sinistro. A reciclagem deve ocorrer anualmente, e o treinamento precisa ser registrado em lista de presença e certificado nominal para cada brigadista.',
    syllabus: [
      'Teoria do fogo e classes de incêndio',
      'Prevenção de incêndio e meios de propagação',
      'Agentes extintores e equipamentos de combate',
      'Abandono de área e comunicação de emergência',
      'Atendimento pré-hospitalar (Noções de Primeiros Socorros)',
      'Manobra de Heimlich e RCP',
      'Tratamento de queimaduras e fraturas',
      'Uso de EPIs de combate e simulação prática'
    ]
  },
  {
    slug: 'nr-11-transporte-movimentacao',
    title: 'NR-11 - Transporte e Movimentação',
    category: 'Operacional',
    workload: '16h (Operador) / 4h (Reciclagem)',
    targetAudience: 'Operadores de empilhadeira, paleteira elétrica, ponte rolante e guindastes.',
    summary: 'Treinamento rigoroso para operação segura de equipamentos de transporte de carga, focando em estabilidade, sinalização e inspeção de acessórios.',
    description: 'A NR-11 regula a operação segura de equipamentos de transporte e movimentação de materiais: empilhadeiras, paleteiras elétricas, pontes rolantes, talhas e guindastes. O treinamento é obrigatório para todos os operadores antes do início das atividades e deve ser renovado periodicamente, conforme o equipamento e a função exercida.\n\nAcidentes com empilhadeiras estão entre os mais graves do ambiente industrial — impactos com estruturas, tombamento de carga e atropelamentos de pedestres são os eventos mais frequentes. O treinamento capacita o operador a realizar a inspeção diária pelo checklist, avaliar corretamente a capacidade de carga e o centro de gravidade, movimentar com segurança em rampas, docas e corredores estreitos, e agir de forma adequada em situações de emergência.\n\nAlém do aspecto de segurança, a habilitação formal do operador é exigida por seguradoras e por auditores de fornecedores na cadeia automotiva e de logística. Operar empilhadeira sem treinamento documentado invalida a cobertura do seguro em caso de acidente e gera responsabilidade criminal para o gestor responsável pela atividade.',
    syllabus: [
      'Legislação e normas de segurança',
      'Conceitos de estabilidade física (Triângulo de Estabilidade)',
      'Inspeção diária (Checklist)',
      'Sinalização de segurança e isolamento de área',
      'Técnicas de empilhamento e desempilhamento',
      'Movimentação em rampas e docas',
      'Manutenção básica e recarga de baterias/GLP',
      'Prática de operação conduzida por instrutor'
    ]
  },
  {
    slug: 'nr-12-maquinas-equipamentos',
    title: 'NR-12 - Segurança em Máquinas',
    category: 'Segurança',
    workload: '8h a 16h (Conforme Complexidade)',
    targetAudience: 'Operadores de máquinas, mecânicos de manutenção e ajudantes de produção.',
    summary: 'Capacitação teórica e prática sobre os sistemas de segurança em máquinas, proteções fixas/móveis e dispositivos de intertravamento.',
    description: 'A NR-12 estabelece requisitos de segurança para o projeto, fabricação, instalação, operação e manutenção de máquinas e equipamentos. Desde 2012, a norma responsabiliza tanto o fabricante quanto o empregador pelas condições de segurança das máquinas em operação — o que inclui proteções físicas, dispositivos de intertravamento, parada de emergência e, obrigatoriamente, a capacitação formal dos operadores para cada modelo de máquina.\n\nO treinamento cobre os sistemas de segurança presentes nas máquinas da empresa, os procedimentos de bloqueio e etiquetagem (LOTO) para manutenção segura, as distâncias de segurança conforme as NBRs vigentes e os principais riscos mecânicos e elétricos associados ao equipamento. A capacitação deve ser específica para o modelo operado — treinamentos genéricos não atendem a exigência legal.\n\nAcidentes em máquinas tendem a ser de alta gravidade — amputações, esmagamentos e fatalidades são comuns em empresas sem conformidade com a NR-12. Além do impacto humano, a empresa fica exposta a interdições imediatas do equipamento, multas superiores a R$ 20 mil por máquina irregular e ações criminais contra gerentes e proprietários.',
    syllabus: [
      'Riscos mecânicos, elétricos e outros gerados por máquinas',
      'Sinalização e dispositivos de parada de emergência',
      'Sistemas de segurança (proteções físicas e sensores)',
      'Procedimentos de LOTO (Bloqueio e Etiquetagem)',
      'Distâncias de segurança conforme NBRs',
      'Princípios de higiene do trabalho aplicados a máquinas',
      'Métodos de trabalho seguro em manutenções',
      'Capacitação específica para o modelo de máquina da empresa'
    ]
  },
  {
    slug: 'nr-18-seguranca-construcao-civil',
    title: 'NR-18 - Construção Civil',
    category: 'Construção',
    workload: '4h (Integração) / Periódicos Conforme Função',
    targetAudience: 'Pedreiros, ajudantes, carpinteiros e todos os colaboradores de canteiros de obra.',
    summary: 'Instruções básicas de segurança para o ambiente de construção civil, focando em riscos de queda, soterramento e choque elétrico.',
    description: 'A NR-18 organiza as medidas de segurança na construção civil e exige treinamento para quem atua em canteiros, frentes de obra e atividades com risco de queda, soterramento, projeção de materiais, choque elétrico e circulação de máquinas. O treinamento de integração e os reforços periódicos ajudam a empresa a estruturar entrada segura do trabalhador e a demonstrar controle preventivo da operação.\n\nO conteúdo costuma abordar condições do canteiro, riscos inerentes à função, uso de EPC e EPI, circulação segura, trabalho em altura, proteção contra queda de objetos, organização do ambiente, primeiros socorros e regras básicas do PGR da obra. Em empresas com mais de uma frente operacional, essa capacitação também reduz desalinhamento entre equipes próprias, terceirizados e prestadores que entram no local.\n\nPara a empresa, o ganho não é só cumprir norma. A NR-18 bem aplicada reduz embargo, autuação, acidente grave e passivo trabalhista em um dos setores mais fiscalizados do país. Em obra, treinamento mal feito ou ausente não aparece só em auditoria documental; ele costuma aparecer quando já houve incidente, paralisação ou cobrança direta do contratante.',
    syllabus: [
      'Informações sobre as condições e meio ambiente de trabalho',
      'Riscos inerentes à execução das atividades (Canteiro)',
      'Equipamentos de Proteção Coletiva (EPC) na obra',
      'Equipamentos de Proteção Individual (EPI) obrigatórios',
      'Uso seguro de andaimes e plataformas',
      'Proteções contra quedas de altura e de objetos',
      'Noções Básicas de Primeiros Socorros',
      'Organização e limpeza do canteiro (PCMAT/PGR)'
    ]
  },
  {
    slug: 'nr-20-inflamaveis-combustiveis',
    title: 'NR-20 - Líquidos Inflamáveis',
    category: 'Segurança',
    workload: '4h (Integração) / 8h (Básico) / 16h (Interm.)',
    targetAudience: 'Frentistas, operadores de carga/descarga de combustível e funcionários de postos/depósitos.',
    summary: 'Capacitação para manuseio e armazenamento seguro de inflamáveis, prevenindo incêndios e explosões em áreas classificadas.',
    description: 'A NR-20 regula o armazenamento, manuseio, transferência e descarte de líquidos inflamáveis e combustíveis — atividades presentes em postos de combustível, distribuidoras, indústrias químicas, farmacêuticas e de tintas. O treinamento é obrigatório para todos os trabalhadores que operam em áreas classificadas com risco de explosão ou incêndio gerado por vapores inflamáveis.\n\nO conteúdo abrange as propriedades dos inflamáveis como ponto de fulgor e temperatura de autoignição, identificação e controle de fontes de ignição incluindo eletricidade estática, procedimentos operacionais seguros na transferência e armazenamento, uso de equipamentos de combate a incêndio específicos e o Plano de Resposta a Emergências da unidade. A carga horária varia conforme o nível de risco da função — de 4 horas na integração básica até 16 horas no nível intermediário.\n\nEmpresas com trabalhadores operando em áreas inflamáveis sem habilitação documentada respondem diretamente por acidentes perante o Ministério do Trabalho, a ANP e o Corpo de Bombeiros. Incidentes com inflamáveis figuram entre os de maior dano patrimonial e risco de fatalidade, e a ausência de treinamento agrava diretamente a responsabilidade penal dos gestores envolvidos.',
    syllabus: [
      'Inflamáveis: características, propriedades e perigos',
      'Controle de fontes de ignição (Eletricidade estática)',
      'Fontes de ignição e proteção contra incêndios',
      'Procedimentos operacionais em áreas de risco',
      'Plano de Resposta a Emergências da Unidade',
      'Uso de extintores e canhões monitores',
      'Sinalização e identificação de produtos químicos',
      'Primeiros socorros em caso de contato ou inalação'
    ]
  }
];
