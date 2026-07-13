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
    title: 'Treinamento NR-10: Segurança em Eletricidade',
    category: 'Segurança',
    workload: '40h (Básico) / 40h (Complementar/SEP)',
    targetAudience: 'Eletricistas, manutentores e profissionais que interagem com energia elétrica.',
    summary: 'Treinamento NR-10 para eletricistas e profissionais autorizados. Formação básica de 40h, curso complementar SEP quando aplicável e reciclagem bienal.',
    description: 'A NR-10 é obrigatória para trabalhadores que atuam direta ou indiretamente com instalações elétricas, manutenção, operação de painéis, intervenções em circuitos energizados ou atividades em áreas com risco elétrico. O objetivo do treinamento é reduzir choque, arco elétrico, incêndio, explosão e falhas operacionais que colocam em risco o trabalhador, a estrutura e a continuidade da operação.\n\nO conteúdo envolve análise de risco, medidas de controle, desenergização, bloqueio e sinalização, uso correto de EPC e EPI, documentação obrigatória e procedimentos seguros para atuação em baixa e alta tensão. Quando há trabalho no Sistema Elétrico de Potência ou em suas proximidades, a empresa também precisa observar o treinamento complementar e manter rastreabilidade formal da capacitação.\n\nNa prática, a NR-10 protege não só o trabalhador que executa o serviço, mas também a empresa e o gestor responsável. Equipe sem treinamento documentado aumenta risco de acidente grave, autuação, interdição e responsabilização trabalhista, previdenciária e até criminal em caso de ocorrência elétrica com dano humano ou patrimonial.',
    syllabus: [
      'Introdução à segurança com eletricidade',
      'Riscos em instalações e serviços com eletricidade',
      'Técnicas de Análise de Risco',
      'Medidas de Controle do Risco Elétrico',
      'Equipamentos de Proteção Coletiva (EPC)',
      'Equipamentos de Proteção Individual (EPI)',
      'Rotinas e procedimentos de trabalho',
      'Riscos Adicionais (Altura, Espaço Confinado)',
      'Prevenção e combate a incêndios',
      'Noções de Primeiros Socorros'
    ]
  },
  {
    slug: 'nr-35-trabalho-em-altura',
    title: 'Treinamento NR-35: Trabalho em Altura',
    category: 'Segurança',
    workload: '8h (Capacitação / Reciclagem)',
    targetAudience: 'Trabalhadores que executam atividades acima de 2 metros de altura.',
    summary: 'Treinamento NR-35 teórico e prático para trabalho com risco de queda a partir de 2m. Formação inicial de 8h e treinamento periódico bienal.',
    description: 'A NR-35 se aplica às atividades realizadas com diferença de nível igual ou superior a 2 metros quando há risco de queda. Isso inclui situações em telhados, estruturas metálicas, postes, andaimes e escadas fixas, desde que se enquadrem nessa condição.\n\nO treinamento inicial deve ter pelo menos 8 horas e combinar teoria e prática. O conteúdo inclui Análise de Risco (AR), condições impeditivas, sistemas de proteção coletiva, seleção e inspeção de EPI e condutas em emergências. O treinamento periódico também tem carga mínima de 8 horas e deve ocorrer a cada 2 anos. Há ainda treinamento eventual nas situações previstas pela NR-01.\n\nO certificado, a autorização do trabalhador, a análise de risco e os registros de inspeção precisam acompanhar o trabalho realizado. A falta desses controles aumenta a exposição a acidentes, autuações e paralisações quando houver situação de grave e iminente risco.',
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
    title: 'Treinamento NR-33: Espaço Confinado',
    category: 'Segurança',
    workload: '16h (Vigias e Autorizados) / 40h (Supervisores) / 8h anual',
    targetAudience: 'Trabalhadores que entram em espaços confinados e supervisores de entrada.',
    summary: 'Treinamento presencial de NR-33 com etapa prática: 16h para vigias e trabalhadores autorizados, 40h para supervisores e reciclagem anual de 8h.',
    description: 'A NR-33 trata do trabalho em espaços confinados, como tanques, silos, galerias e tubulações que atendam aos critérios da norma. São ambientes não projetados para ocupação humana contínua, com entrada e saída limitadas e possibilidade de atmosfera perigosa ou ventilação insuficiente.\n\nA capacitação inicial tem cargas diferentes conforme a função: 16 horas para vigias e trabalhadores autorizados e 40 horas para supervisores de entrada. A norma exige parte prática e treinamento periódico anual de, no mínimo, 8 horas. O conteúdo inclui reconhecimento de riscos, avaliação da atmosfera, Permissão de Entrada e Trabalho (PET), equipamentos e noções de emergência e salvamento.\n\nAntes de cada entrada, a empresa precisa assegurar equipe capacitada, PET válida, monitoramento atmosférico, equipamentos adequados e plano de emergência. A ausência desses controles pode justificar autuação ou interdição e pesa na apuração de responsabilidades se ocorrer um acidente.',
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
    title: 'Treinamento CIPA NR-05: Membros e Designados',
    category: 'Gestão',
    workload: '8h a 20h (Conforme Grau de Risco)',
    targetAudience: 'Integrantes da comissão (eleitos e indicados) e designados.',
    summary: 'Treinamento CIPA NR-05 para membros eleitos, indicados e representantes nomeados. Riscos, investigação de acidentes, prevenção ao assédio e SIPAT.',
    description: 'O dimensionamento da CIPA depende do número de empregados no estabelecimento e do grau de risco da atividade, conforme o Quadro I da NR-05. Quando o estabelecimento não se enquadra na constituição da comissão, a organização deve nomear um representante para apoiar as ações de prevenção.\n\nO treinamento prepara membros eleitos, indicados e representantes nomeados para acompanhar a identificação de perigos, analisar acidentes e doenças relacionadas ao trabalho, propor medidas de prevenção e participar da organização da SIPAT. A carga horária varia de 8 a 20 horas conforme o grau de risco.\n\nA empresa deve manter o processo eleitoral, as atas, os certificados e os demais registros aplicáveis disponíveis para fiscalização. Falhas na constituição da comissão ou na capacitação dos participantes podem gerar autuação e dificultar a demonstração das medidas preventivas adotadas.',
    syllabus: [
      'O ambiente e as condições de trabalho',
      'Metodologia de investigação e análise de acidentes',
      'Princípios gerais de higiene do trabalho',
      'Legislação trabalhista e previdenciária aplicada à SST',
      'Noções sobre inclusão de pessoas com deficiência',
      'Funcionamento da CIPA e atribuições dos membros',
      'Prevenção e combate ao assédio sexual e violência no trabalho',
      'Mapa de Riscos e Plano de Trabalho'
    ]
  },
  {
    slug: 'brigada-de-incendio-it17',
    title: 'Treinamento de Brigada de Incêndio: IT-17 São Paulo',
    category: 'Emergência',
    workload: 'Conforme ocupação, risco e projeto da edificação',
    targetAudience: 'Funcionários de todos os setores designados para a brigada de emergência.',
    summary: 'Treinamento teórico e prático de brigada de incêndio conforme a ocupação, o risco e as exigências do projeto de segurança da edificação em São Paulo.',
    description: 'A necessidade, a composição e o nível de capacitação da brigada de incêndio dependem do enquadramento da edificação e das instruções técnicas vigentes do Corpo de Bombeiros de São Paulo. O projeto de segurança contra incêndio e o processo de licenciamento indicam o que se aplica a cada local.\n\nO treinamento aborda prevenção, acionamento do alarme, abandono de área, uso dos equipamentos previstos no local e primeiros socorros. A parte prática deve ser compatível com o nível de formação e com os recursos existentes na edificação.\n\nA empresa precisa manter a brigada dimensionada, os certificados e os registros atualizados de acordo com o projeto aprovado. Documentação vencida ou formação incompatível com o enquadramento pode criar pendências em vistoria e comprometer a resposta a uma emergência.',
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
    title: 'Treinamento NR-11: Operação de Empilhadeira',
    category: 'Operacional',
    workload: 'Definida conforme equipamento, riscos e programa de capacitação',
    targetAudience: 'Operadores de empilhadeira, paleteira elétrica, ponte rolante e guindastes.',
    summary: 'Capacitação teórica e prática para operação segura de empilhadeira, com conteúdo ajustado ao equipamento, aos riscos do local e à atividade do operador.',
    description: 'A NR-11 exige treinamento específico para quem opera equipamentos de transporte motorizado, como empilhadeiras. O conteúdo e a duração precisam considerar o tipo de equipamento, os riscos do local e a experiência do trabalhador; a norma não estabelece uma carga horária universal de 16 horas para toda empilhadeira.\n\nA capacitação deve incluir inspeção antes do uso, limites de carga, estabilidade, circulação em rampas, docas e corredores, separação entre pedestres e equipamentos e resposta a emergências. A etapa prática precisa ocorrer em condições compatíveis com a operação que o trabalhador encontrará.\n\nA empresa deve autorizar o operador, manter o registro da capacitação e avaliar a necessidade de treinamento periódico ou eventual conforme a NR-01. Esses registros ajudam a demonstrar que o trabalhador recebeu orientação adequada, mas não substituem manutenção, sinalização e controle de tráfego interno.',
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
    title: 'Treinamento NR-12: Segurança em Máquinas',
    category: 'Segurança',
    workload: 'Definida conforme máquina, atividade e riscos',
    targetAudience: 'Operadores de máquinas, mecânicos de manutenção e ajudantes de produção.',
    summary: 'Treinamento teórico e prático de NR-12 para operadores e mantenedores, definido conforme a máquina, a atividade e os riscos da operação.',
    description: 'A NR-12 estabelece requisitos de segurança para projeto, instalação, operação e manutenção de máquinas e equipamentos. A capacitação deve ocorrer antes de o trabalhador assumir a função e ser compatível com a máquina e com os riscos envolvidos.\n\nO conteúdo inclui riscos associados ao equipamento, funcionamento das proteções, parada de emergência, método de trabalho seguro e bloqueio durante inspeção, limpeza e manutenção. A norma exige etapas teórica e prática; por isso, um curso genérico não basta para autorizar a operação de qualquer máquina.\n\nA duração deve ser definida de modo a permitir que o trabalhador execute a atividade com segurança. A empresa também precisa manter proteções, inventário ou documentação aplicável e procedimentos atualizados. O certificado de treinamento, sozinho, não corrige uma máquina insegura.',
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
    title: 'Treinamento NR-18: Segurança na Construção Civil',
    category: 'Construção',
    workload: '4h (Integração) / Periódicos Conforme Função',
    targetAudience: 'Pedreiros, ajudantes, carpinteiros e todos os colaboradores de canteiros de obra.',
    summary: 'Treinamento NR-18 para construção civil: formação inicial de 4h e capacitações adicionais conforme a função e os riscos do canteiro.',
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
    title: 'Treinamento NR-06: Equipamento de Proteção Individual',
    category: 'Segurança',
    workload: 'Definida conforme EPI, atividade e riscos',
    targetAudience: 'Todos os trabalhadores que utilizam EPIs nas atividades laborais.',
    summary: 'Orientação e treinamento sobre seleção, ajuste, limitações, inspeção, conservação e descarte de EPI, conforme a atividade e os riscos identificados.',
    description: 'A NR-06 exige que o empregador forneça gratuitamente o EPI adequado e oriente o trabalhador sobre uso, ajuste, limitações, manutenção, substituição e descarte. O treinamento formal é definido conforme as características do equipamento, da atividade e das exigências aplicáveis; a norma não fixa uma carga horária única para todos os EPIs.\n\nO conteúdo precisa conversar com os riscos identificados no PGR e com os equipamentos realmente fornecidos. Também deve explicar o Certificado de Aprovação (CA), a inspeção antes do uso, a higienização e a forma correta de combinar diferentes proteções.\n\nA ficha de entrega e o registro da orientação são evidências importantes, mas não bastam sozinhos. A empresa deve selecionar o EPI correto, substituir itens danificados, exigir o uso e acompanhar se a proteção está funcionando na rotina.',
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
    title: 'Treinamento NR-17: Ergonomia no Trabalho',
    category: 'Saúde',
    workload: 'Definida conforme atividade e anexos aplicáveis',
    targetAudience: 'Trabalhadores em geral, com ênfase em escritórios, teleatendimento, linha de produção e atividades com esforço repetitivo.',
    summary: 'Capacitação em ergonomia ajustada à atividade, aos riscos identificados e aos anexos aplicáveis da NR-17, com orientações práticas para o posto de trabalho.',
    description: 'A NR-17 trata de fatores como postura, esforço físico, repetitividade, organização do trabalho e condições ambientais. A capacitação precisa refletir os riscos identificados na avaliação ergonômica preliminar e, quando necessária, na Análise Ergonômica do Trabalho (AET).\n\nO conteúdo pode incluir ajuste do posto, movimentação de cargas, alternância de tarefas, pausas e sinais de desconforto que devem ser comunicados. Não existe uma carga horária geral de 8 horas para todo treinamento de ergonomia. Os anexos de checkout e teleatendimento trazem regras próprias de conteúdo, duração e periodicidade.\n\nTreinar a equipe ajuda a colocar as medidas ergonômicas em prática, mas não substitui mudanças no mobiliário, no processo ou na organização do trabalho. A empresa deve registrar as orientações e acompanhar se as recomendações adotadas estão produzindo resultado.',
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
    title: 'Treinamento de Brigada: Combate a Incêndio Avançado',
    category: 'Emergência',
    workload: 'Conforme enquadramento e instrução técnica vigente',
    targetAudience: 'Brigadistas designados em empresas com risco elevado de incêndio, operações industriais e edificações de grande porte.',
    summary: 'Capacitação avançada de brigada com teoria e prática, dimensionada conforme o risco, a ocupação e o projeto de segurança contra incêndio da edificação.',
    description: 'A formação avançada é indicada quando o enquadramento da edificação e o projeto de segurança contra incêndio exigem uma brigada com recursos e atribuições mais complexos. A carga horária deve seguir a instrução técnica vigente e o nível aplicável ao local, sem adotar um número único para todos os casos.\n\nO conteúdo pode incluir linhas de mangueira, hidrantes, equipamentos de proteção respiratória, abandono de áreas complexas e comunicação com o Corpo de Bombeiros. As atividades práticas precisam reproduzir, com segurança, os equipamentos e os cenários previstos para a equipe.\n\nAntes de contratar o curso, é necessário confirmar o enquadramento do imóvel e o plano de emergência. Assim, a empresa evita formar a equipe em um nível inadequado e mantém certificados coerentes com o processo de licenciamento.',
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
    title: 'Treinamento NR-20: Inflamáveis e Combustíveis',
    category: 'Segurança',
    workload: 'Conforme classe da instalação e atividade exercida',
    targetAudience: 'Frentistas, operadores de carga/descarga de combustível e funcionários de postos/depósitos.',
    summary: 'Treinamento NR-20 definido pela classe da instalação, pelo tipo de atividade e pelo contato do trabalhador com inflamáveis e combustíveis.',
    description: 'A NR-20 regula atividades com inflamáveis e combustíveis em instalações como postos, distribuidoras e indústrias. O curso aplicável depende da classe da instalação, da função e do contato do trabalhador com o processo; por isso, a carga horária não deve ser escolhida apenas pelo nome do setor.\n\nO conteúdo pode abranger propriedades dos produtos, fontes de ignição, procedimentos de operação e manutenção, controle de vazamentos e resposta a emergências. A formação deve estar alinhada ao prontuário da instalação e aos riscos reais da unidade.\n\nA empresa precisa verificar qual curso é exigido para cada função, manter certificados e realizar treinamentos periódicos ou eventuais nos casos previstos. Essa análise evita tanto a formação insuficiente quanto a contratação de um curso que não corresponde à atividade executada.',
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
