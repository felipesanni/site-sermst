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
    title: 'Treinamento NR-10 — Segurança em Eletricidade',
    category: 'Segurança',
    workload: '40h (Básico) / 40h (Complementar/SEP)',
    targetAudience: 'Eletricistas, manutentores e profissionais que interagem com energia elétrica.',
    summary: 'Treinamento NR-10 obrigatório: eletricistas e manutentores. 40h básico + SEP. Reciclagem bienal. EAD com certificado ou presencial em São Paulo.',
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
    title: 'Treinamento NR-35 — Trabalho em Altura',
    category: 'Segurança',
    workload: '8h (Capacitação / Reciclagem)',
    targetAudience: 'Trabalhadores que executam atividades acima de 2 metros de altura.',
    summary: 'Treinamento NR-35 para trabalho em altura acima de 2m. 8h com reciclagem bienal. Cobre AR, PT e cinto paraquedista. EAD ou presencial com prática em São Paulo.',
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
    title: 'Treinamento NR-33 — Espaço Confinado',
    category: 'Segurança',
    workload: '16h (Vigias) / 40h (Supervisores)',
    targetAudience: 'Trabalhadores que entram em espaços confinados e supervisores de entrada.',
    summary: 'Treinamento NR-33 — Espaço Confinado: vigias 16h, supervisores 40h. Gases, PET e resgate. Exigido em tanques, galerias e silos. EAD ou presencial em SP.',
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
    title: 'Treinamento CIPA NR-05 — Membros e Designados',
    category: 'Gestão',
    workload: '8h a 20h (Conforme Grau de Risco)',
    targetAudience: 'Integrantes da comissão (eleitos e indicados) e designados.',
    summary: 'Treinamento CIPA NR-05 para membros eleitos, indicados e designados. Mapa de Riscos, SIPAT e investigação. Certificado. EAD ou presencial em São Paulo.',
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
    title: 'Treinamento Brigada de Incêndio — IT-17 São Paulo',
    category: 'Emergência',
    workload: '8h (Nível Básico)',
    targetAudience: 'Funcionários de todos os setores designados para a brigada de emergência.',
    summary: 'Treinamento Brigada de Incêndio IT-17 para o AVCB. 8h com prática em extintores e evacuação. Reciclagem anual. Certificado. EAD ou presencial em SP.',
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
    title: 'Treinamento NR-11 — Operador de Empilhadeira',
    category: 'Operacional',
    workload: '16h (Operador) / 4h (Reciclagem)',
    targetAudience: 'Operadores de empilhadeira, paleteira elétrica, ponte rolante e guindastes.',
    summary: 'Treinamento NR-11 — operador de empilhadeira: 16h com prática e certificado. Checklist, estabilidade e doca. Reciclagem periódica. EAD ou presencial em SP.',
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
    title: 'Treinamento NR-12 — Segurança em Máquinas',
    category: 'Segurança',
    workload: '8h a 16h (Conforme Complexidade)',
    targetAudience: 'Operadores de máquinas, mecânicos de manutenção e ajudantes de produção.',
    summary: 'Treinamento NR-12 para operadores: proteções, LOTO e parada de emergência. 8h a 16h conforme a máquina. Certificado. EAD ou presencial em São Paulo.',
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
    title: 'Treinamento NR-18 — Segurança na Construção Civil',
    category: 'Construção',
    workload: '4h (Integração) / Periódicos Conforme Função',
    targetAudience: 'Pedreiros, ajudantes, carpinteiros e todos os colaboradores de canteiros de obra.',
    summary: 'Treinamento NR-18 para construção civil: integração 4h e reforços por função. Queda, EPI e andaimes. Certificado. EAD ou presencial in company em SP.',
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
    slug: 'nr-06-epi',
    title: 'Treinamento NR-06 — EPI: Proteção Individual',
    category: 'Segurança',
    workload: '4h (Formação) / 1h (Reciclagem)',
    targetAudience: 'Todos os trabalhadores que utilizam EPIs nas atividades laborais.',
    summary: 'Treinamento NR-06 de EPI: seleção por CA, inspeção e descarte. 4h com Ficha de EPI e certificado. Para todos os funcionários. EAD ou presencial em SP.',
    description: 'A NR-06 obriga o fornecimento gratuito de EPI pelo empregador e a comprovação de que o trabalhador foi treinado para usá-lo corretamente. Não basta entregar o equipamento — a empresa precisa documentar que o funcionário sabe selecionar o EPI adequado para o risco, como inspecioná-lo antes do uso, como conservá-lo e quando descartá-lo. Sem esse registro, o fornecimento do EPI não serve de defesa em ação trabalhista.\n\nO treinamento aborda a hierarquia de controle de riscos (EPC antes de EPI), a leitura do Certificado de Aprovação (CA) do Ministério do Trabalho, os critérios de seleção conforme o agente de risco (ruído, químicos, poeira, impacto, temperatura), a higienização de EPIs reutilizáveis e os procedimentos para substituição por desgaste ou defeito. Para setores com múltiplos agentes de risco, a capacitação também trata de como combinar EPIs sem reduzir a proteção individual.\n\nEmpresa que não treina, não documenta e não garante o uso correto do EPI responde solidariamente pelo acidente mesmo que o trabalhador tenha recusado o equipamento. A documentação — Ficha de EPI assinada e certificado de treinamento — é a principal prova de que o empregador cumpriu sua obrigação legal no processo trabalhista.',
    syllabus: [
      'Conceito e finalidade dos EPIs',
      'Certificado de Aprovação (CA) e como verificar a validade',
      'Categorias de EPI por agente de risco (ruído, químico, mecânico, térmico)',
      'Critérios de seleção do EPI adequado à atividade',
      'Inspeção antes do uso e identificação de defeitos',
      'Higienização, conservação e armazenamento',
      'Prazo de validade e critérios de substituição',
      'Responsabilidades do empregador e do trabalhador',
      'Ficha de EPI e documentação obrigatória'
    ]
  },
  {
    slug: 'nr-17-ergonomia',
    title: 'Treinamento NR-17 — Ergonomia no Trabalho',
    category: 'Saúde',
    workload: '8h (Formação) / 4h (Reciclagem)',
    targetAudience: 'Trabalhadores em geral, com ênfase em escritórios, teleatendimento, linha de produção e atividades com esforço repetitivo.',
    summary: 'Treinamento NR-17 — Ergonomia: prevenir LER/DORT. Postura, posto de trabalho e pausas. 8h com certificado. Para escritório e produção. EAD ou presencial em SP.',
    description: 'A NR-17 regula as condições de trabalho que afetam o conforto, a segurança e o desempenho dos trabalhadores — postura, esforço físico, levantamento de peso, repetitividade, organização do trabalho e condições ambientais. O treinamento é exigido especialmente em setores com alta incidência de LER/DORT (Lesões por Esforços Repetitivos e Distúrbios Osteomusculares Relacionados ao Trabalho), como teleatendimento, digitação, linhas de montagem e caixas de supermercado.\n\nO conteúdo capacita trabalhadores e líderes a identificar fatores de risco ergonômico no posto, ajustar corretamente a estação de trabalho — altura da cadeira, monitor, teclado e mouse —, realizar pausas de recuperação conforme o ciclo de trabalho e aplicar princípios básicos de biomecânica na movimentação de cargas. Para empresas com Análise Ergonômica do Trabalho (AET) realizada, o treinamento complementa e formaliza a aplicação das medidas previstas no laudo.\n\nDoença ocupacional gerada por risco ergonômico não reconhecido transforma-se rapidamente em CAT (Comunicação de Acidente de Trabalho), afastamento por INSS e ação judicial. O nexo causal entre a atividade e a LER/DORT é estabelecido por perícia médica e, sem programa de prevenção documentado e treinamento realizado, a empresa não tem como demonstrar que adotou as medidas exigidas pela norma.',
    syllabus: [
      'Conceitos de ergonomia e fatores de risco',
      'LER/DORT: causas, sintomas e prevenção',
      'Análise e adequação do posto de trabalho',
      'Postura correta e biomecânica no trabalho',
      'Levantamento e transporte manual de cargas',
      'Organização do trabalho e pausas de recuperação',
      'Condições ambientais: iluminação, temperatura e ruído',
      'Ginástica laboral como medida complementar',
      'Comunicação de sintomas e procedimentos internos'
    ]
  },
  {
    slug: 'combate-a-incendio-avancado',
    title: 'Treinamento Brigada Avançado — Combate a Incêndio',
    category: 'Emergência',
    workload: '16h (Nível Avançado/Intermediário)',
    targetAudience: 'Brigadistas designados em empresas com risco elevado de incêndio, operações industriais e edificações de grande porte.',
    summary: 'Brigada de incêndio avançado 16h: mangueiras, SCBA e evacuação de múltiplos andares. Exigido pelo CSCIP/SP. Certificado. Presencial com prática em São Paulo.',
    description: 'O curso de Combate a Incêndio de 16 horas é voltado para brigadistas que atuam em edificações ou processos com risco elevado de incêndio — indústrias, galpões logísticos, hospitais, hotéis, shoppings e qualquer operação onde o Plano de Emergência exige intervenção ativa antes da chegada do Corpo de Bombeiros. A carga horária superior ao nível básico (8h) é exigida pelo CSCIP/SP para empresas enquadradas em ocupações e riscos específicos.\n\nO treinamento avança sobre o conteúdo básico e inclui uso de mangueiras de incêndio, hidrantes e conexões Storz, operação com equipamentos de proteção respiratória autônoma (SCBA) em simulações de fumaça, coordenação de evacuação de edificações com múltiplos pavimentos e técnicas de comunicação de emergência com o Corpo de Bombeiros. Exercícios práticos integram teoria e simulação para garantir resposta eficaz sob pressão.\n\nEmpresas que operam em risco médio ou alto e mantêm brigadistas treinados apenas no nível básico podem ter o AVCB negado na renovação ou sofrer autuação em vistoria. Além da exigência do Corpo de Bombeiros, seguradoras patrimoniais verificam a composição e o nível de capacitação da brigada antes de emitir ou renovar apólices de incêndio.',
    syllabus: [
      'Revisão: Teoria do fogo e classes de incêndio',
      'Sistemas fixos de combate a incêndio (hidrantes, chuveiros)',
      'Operação com mangueiras de incêndio e conexões Storz',
      'Uso de Equipamento de Proteção Respiratória Autônoma (SCBA)',
      'Coordenação de evacuação em edificações de múltiplos andares',
      'Comunicação de emergência com Corpo de Bombeiros',
      'Gestão da brigada e organograma de emergência',
      'Simulação prática de combate e resgate',
      'Preenchimento de relatório de ocorrência pós-sinistro'
    ]
  },
  {
    slug: 'nr-20-inflamaveis-combustiveis',
    title: 'Treinamento NR-20 — Inflamáveis e Combustíveis',
    category: 'Segurança',
    workload: '4h (Integração) / 8h (Básico) / 16h (Interm.)',
    targetAudience: 'Frentistas, operadores de carga/descarga de combustível e funcionários de postos/depósitos.',
    summary: 'Treinamento NR-20 para inflamáveis em postos e indústrias. De 4h a 16h conforme o risco. Previne incêndios em áreas classificadas. EAD ou presencial em SP.',
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
