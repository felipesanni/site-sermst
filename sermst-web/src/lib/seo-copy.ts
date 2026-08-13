import { Localidade, SEODocument } from '@/lib/data/seo-content';

const getPrimaryServiceName = (h1: string) => {
  const primaryName = h1.split('|')[0].trim();

  if (primaryName === 'Audiometria Ocupacional e Audiometria Tonal') {
    return 'Audiometria Ocupacional';
  }

  return primaryName;
};

const getServiceCategoryCopy = (data: SEODocument) => {
  if (data.isClinico) {
    return {
      commonNeed:
        'empresas que precisam realizar exames ocupacionais, manter o PCMSO atualizado e registrar os ASOs no eSocial',
      operationalGoal:
        'organizar o caminho entre a guia emitida pelo RH, o atendimento clínico, os exames complementares e a emissão do ASO',
      technicalContext:
        'o exame ocupacional precisa estar conectado ao risco do cargo, ao PCMSO vigente e ao registro correto do ASO',
    };
  }

  return {
    commonNeed:
      'empresas que precisam elaborar ou revisar documentos obrigatórios e manter as informações de SST coerentes com o eSocial',
    operationalGoal:
      'organizar a exigência em etapas, responsáveis, prazos e registros verificáveis',
    technicalContext:
      'documentos como PGR, PCMSO, LTCAT e a gestão dos eventos SST precisam refletir a operação real da empresa, não um modelo genérico',
  };
};

export function buildServiceCopy(data: SEODocument) {
  const serviceName = getPrimaryServiceName(data.h1);
  const category = getServiceCategoryCopy(data);

  if (serviceName === 'Empresa de Segurança do Trabalho') {
    return {
      serviceName,
      overviewParagraphs: [
        'Quem procura uma empresa de Segurança do Trabalho geralmente precisa organizar mais de uma frente: documentos, exames, treinamentos, prazos e eventos do eSocial.',
        `${data.content.dor} A necessidade costuma ficar evidente quando a operação cresce ou quando clínica, laudos e treinamentos são administrados separadamente.`,
        `${data.content.solucao}`,
      ],
      complianceParagraphs: [
        `${data.quandoRequerido} PGR, PCMSO, LTCAT, ASO, treinamentos e eSocial precisam usar informações compatíveis. Quando isso não acontece, o RH encontra divergências de função, risco, exame e prazo.`,
        'O trabalho inclui definir o que realmente se aplica, priorizar pendências e acompanhar as revisões necessárias. Assim, a empresa sabe quem é responsável por cada etapa e quando ela deve ser concluída.',
      ],
      decisionParagraphs: [
        'Ao avaliar um fornecedor, confira se ele entende os riscos da operação, apresenta prioridades e mantém clínica, laudos, treinamentos e eSocial no mesmo fluxo de informação.',
        'Antes de contratar, peça um escopo claro, cronograma, responsabilidades, entregáveis e canal de atendimento. Esses pontos facilitam a comparação entre propostas.',
      ],
    };
  }

  if (serviceName === 'Exame Toxicológico') {
    return {
      serviceName,
      overviewParagraphs: [
        `O exame toxicológico pode atender a uma exigência trabalhista ou de trânsito. Para motoristas profissionais empregados, há exames pré-admissional, periódico e no desligamento. Para condutores com CNH C, D ou E, aplicam-se as regras próprias da habilitação.`,
        `A finalidade precisa ser informada no agendamento, pois o fluxo documental não é o mesmo. O exame trabalhista é independente do PCMSO, não integra o ASO e não define aptidão para o trabalho.`,
        `${data.content.solucao}`,
      ],
      complianceParagraphs: [
        `${data.quandoRequerido} A empresa também deve controlar a periodicidade de dois anos e seis meses prevista para o motorista profissional e preservar o sigilo do resultado.`,
        `A SERMST atende empresas e condutores em São Paulo. No contato, confirme a finalidade, os documentos exigidos, o prazo estimado e o preço de referência antes da coleta.`,
      ],
      decisionParagraphs: [
        `Antes de agendar, verifique se o atendimento contempla a finalidade do exame, quais documentos devem ser apresentados, onde a coleta será feita e quando o resultado costuma ficar disponível.`,
        `${data.expectativaCusto} O valor informado deve ser confirmado no momento do agendamento.`,
      ],
    };
  }

  return {
    serviceName,
    overviewParagraphs: [
      `${serviceName} atende ${category.commonNeed}. Antes de contratar, confirme quando o serviço se aplica, quais informações serão analisadas e o que será entregue.`,
      `${data.content.dor} Na rotina, isso pode aparecer como atraso, retrabalho ou divergência documental. O trabalho da SERMST busca ${category.operationalGoal}.`,
      `${data.content.solucao}`,
    ],
    complianceParagraphs: [
      data.quandoRequerido
        ? `${data.quandoRequerido} Isso importa porque ${category.technicalContext}.`
        : `${category.technicalContext} O escopo deve explicar como a análise técnica será convertida em entregas e registros.`,
      `${serviceName} deve ser tratado junto com a rotina do RH, a agenda dos trabalhadores e os demais documentos de SST. Assim, datas, funções, riscos e registros permanecem coerentes.`,
    ],
    decisionParagraphs: [
      `Ao comparar fornecedores para ${serviceName.toLowerCase()}, confira prazo de resposta, responsável técnico, documentos incluídos, integração com o eSocial e suporte após a entrega.`,
      data.expectativaCusto
        ? `${data.expectativaCusto} A proposta deve informar o que está incluído, o que varia conforme risco e porte e qual é o fluxo até a conclusão.`
        : `A proposta deve trazer escopo, cronograma, critério técnico, responsáveis e um canal para dúvidas durante a execução.`,
    ],
  };
}

export function buildLocalServiceCopy(data: SEODocument, local: Localidade) {
  const serviceName = getPrimaryServiceName(data.h1);

  if (serviceName === 'Empresa de Segurança do Trabalho') {
    return {
      serviceName,
      localParagraphs: [
        `Uma empresa de Segurança do Trabalho em ${local.nome} pode reunir PGR, PCMSO, exames, treinamentos e eSocial em um fluxo único de acompanhamento.`,
        `${local.contextoEmpresarial} Quando essas frentes ficam separadas, o RH perde tempo conferindo prazos e corrigindo informações divergentes.`,
        `${data.content.solucao} O objetivo é definir prioridades, responsáveis e datas de revisão para a rotina de SST.`,
      ],
      localSeoParagraphs: [
        `Em ${local.nome}, a contratação costuma começar por uma pendência concreta, como exame vencido, PGR desatualizado ou evento do eSocial que precisa ser corrigido.`,
        'A SERMST integra clínica, documentação, treinamentos e apoio técnico. O RH acompanha o que foi concluído e o que ainda depende de ação.',
        `Ao avaliar um parceiro técnico em ${local.nome}, confira estrutura de atendimento, escopo, prazos e responsáveis por cada entrega.`,
      ],
      localCta: `Solicitar proposta de ${serviceName} em ${local.nome}`,
      bridgeSentence:
        `Em ${local.nome}, a empresa pode concentrar operação, riscos, documentos e eSocial no mesmo acompanhamento.`,
    };
  }

  const toxicologicoLocalOverrides: Partial<Record<string, {
    localParagraphs: string[];
    localSeoParagraphs: string[];
    bridgeSentence: string;
  }>> = {
    'sao-paulo': {
      localParagraphs: [
        'Em São Paulo, o exame toxicológico pode atender à exigência trabalhista do motorista profissional ou às regras de trânsito aplicáveis à CNH C, D ou E.',
        `${local.contextoEmpresarial} Na capital, isso se cruza com um fluxo contínuo de motoristas, operações urbanas, distribuidoras e empresas com frota própria que precisam de atendimento confiável e orientação objetiva desde o primeiro contato.`,
        `${data.content.solucao} A SERMST atende empresas e condutores e informa o preço de referência de R$ 200,00. Confirme valor, documentos e prazo no agendamento.`,
        'A unidade fica no Largo do Paissandu, 72, no Centro Histórico de São Paulo, perto da República, Sé, Anhangabaú e Santa Ifigênia.',
      ],
      localSeoParagraphs: [
        'O atendimento começa pela identificação da finalidade: exigência trabalhista para motorista profissional ou regra de trânsito ligada à CNH.',
        'Para a empresa, é importante controlar o exame pré-admissional, o periódico e o realizado no desligamento. Para o condutor, devem ser observadas as regras aplicáveis à habilitação.',
        'Em ambos os casos, a equipe orienta os documentos e o fluxo da coleta antes do agendamento.',
      ],
      bridgeSentence:
        'Em São Paulo, empresas e condutores encontram endereço, finalidade do exame, preço de referência e orientação para o agendamento.',
    },
    guarulhos: {
      localParagraphs: [
        'A procura por exame toxicológico em Guarulhos costuma estar ligada à contratação ou ao desligamento de motorista, ao controle periódico ou a uma exigência da CNH.',
        `${local.contextoEmpresarial} Transportadoras, distribuidoras e operações ligadas ao aeroporto precisam programar a coleta sem confundir o exame toxicológico com o ASO.`,
        `${data.content.solucao} A SERMST atende empresas e condutores e orienta o fluxo conforme a finalidade informada.`,
        'No agendamento, confirme documentos, local da coleta, prazo estimado e preço.',
      ],
      localSeoParagraphs: [
        'Guarulhos concentra operações logísticas e circulação de motoristas profissionais, por isso o controle dos exames precisa acompanhar admissões, períodos de dois anos e seis meses e desligamentos.',
        'Condutores com CNH C, D ou E devem informar se a coleta está ligada a uma exigência de trânsito.',
        'A SERMST atende empresas e motoristas e informa o valor de referência antes da coleta.',
      ],
      bridgeSentence:
        'Em Guarulhos, a equipe informa público atendido, preço de referência e etapas até a coleta.',
    },
    osasco: {
      localParagraphs: [
        'Em Osasco, a SERMST atende empresas que contratam motoristas e condutores que precisam cumprir exigências ligadas à CNH.',
        `${local.contextoEmpresarial} Antes da coleta, é preciso identificar a finalidade e conferir os documentos necessários.`,
        `${data.content.solucao} A equipe informa o preço de referência, o local e o prazo estimado.`,
        'O atendimento contempla a exigência trabalhista e as demandas de trânsito relacionadas à CNH C, D e E.',
      ],
      localSeoParagraphs: [
        'Empresas devem controlar as etapas pré-admissional, periódica e de desligamento sem incluir o exame toxicológico no ASO.',
        'O condutor precisa informar a categoria da CNH e a finalidade do exame.',
        'A SERMST orienta os dois fluxos e confirma as condições do atendimento no agendamento.',
      ],
      bridgeSentence:
        'Em Osasco, empresas e motoristas podem confirmar público atendido, valor de referência e finalidade do exame antes da coleta.',
    },
    barueri: {
      localParagraphs: [
        'Empresas de Barueri procuram o exame toxicológico para contratação, controle periódico e desligamento de motoristas. Condutores também podem precisar da coleta por uma regra de trânsito.',
        `${local.contextoEmpresarial} O RH precisa controlar a data do exame e preservar o sigilo do resultado.`,
        `${data.content.solucao} A SERMST informa quem é atendido, em quais situações e qual é o valor de referência.`,
        'A finalidade e os documentos são confirmados antes da coleta.',
      ],
      localSeoParagraphs: [
        'Para o RH, o exame trabalhista deve ser controlado fora do PCMSO e do ASO.',
        'Para o condutor, é importante confirmar se o atendimento corresponde à exigência aplicável à CNH.',
        'Em ambos os casos, a equipe orienta preço, documentos e prazo estimado.',
      ],
      bridgeSentence:
        'Em Barueri, empresas e condutores recebem orientação conforme a finalidade do exame.',
    },
  };

  const audiometriaLocalOverrides: Partial<Record<string, {
    localParagraphs: string[];
    localSeoParagraphs: string[];
    bridgeSentence: string;
  }>> = {
    'sao-paulo': {
      localParagraphs: [
        'A audiometria ocupacional em São Paulo integra o acompanhamento de trabalhadores expostos a níveis de pressão sonora que atingem os níveis de ação previstos nas normas.',
        `${local.contextoEmpresarial} Na capital, essa demanda aparece com frequência em admissões, periódicos e demissionais que não podem depender de vários endereços ou de agenda dispersa.`,
        `${data.content.solucao} O atendimento inclui orientação sobre repouso auditivo, equipamento calibrado e ambiente acústico adequado.`,
        'A unidade da SERMST fica no Largo do Paissandu, 72, no Centro Histórico, perto da República, Sé, Anhangabaú e Santa Ifigênia.',
      ],
      localSeoParagraphs: [
        'O exame deve seguir o PCMSO e o Anexo II da NR-07, com atenção ao momento correto e à comparação com os exames de referência e sequenciais.',
        'Antes do atendimento, o trabalhador deve receber a orientação de repouso auditivo prevista na norma.',
        'O resultado é interpretado no contexto do histórico ocupacional e dos riscos informados pela empresa.',
      ],
      bridgeSentence:
        'Em São Paulo, a audiometria pode ser agendada junto com os demais exames previstos no PCMSO.',
    },
    'santo-andre': {
      localParagraphs: [
        'Empresas de Santo André procuram audiometria ocupacional para cumprir o acompanhamento previsto no PCMSO e monitorar trabalhadores expostos a ruído.',
        `${local.contextoEmpresarial} Isso faz a demanda se concentrar em exames que precisam acontecer com ritmo, critério técnico e encaixe no fluxo ocupacional.`,
        `${data.content.solucao} O fluxo considera o tipo de exame ocupacional e as informações da função.`,
        'A audiometria deve ser analisada junto com o histórico do trabalhador, o PCMSO e as medidas de controle do ruído.',
      ],
      localSeoParagraphs: [
        'O agendamento deve informar a função, o tipo de exame ocupacional e os riscos registrados no PCMSO.',
        'O trabalhador precisa receber orientação prévia, inclusive sobre o repouso auditivo.',
        'No contexto industrial do ABC, o acompanhamento sequencial ajuda a identificar alterações que exigem avaliação médica e medidas preventivas.',
      ],
      bridgeSentence:
        'Em Santo André, a audiometria é organizada em conjunto com PCMSO, ASO e controle da exposição a ruído.',
    },
    'sao-bernardo': {
      localParagraphs: [
        'Em São Bernardo do Campo, a audiometria costuma fazer parte do PCMSO de indústrias e outras operações com exposição ocupacional a ruído.',
        `${local.contextoEmpresarial} Nesse contexto, a audiometria precisa sustentar o acompanhamento ocupacional com critério e previsibilidade, não apenas cumprir uma etapa isolada.`,
        `${data.content.solucao} A empresa informa os riscos e a função, e o trabalhador recebe as orientações para o exame.`,
        'Os resultados de referência e sequenciais devem ser comparados para orientar o acompanhamento médico e as ações de prevenção.',
      ],
      localSeoParagraphs: [
        'A indicação e a periodicidade devem seguir o PCMSO e os critérios da NR-07.',
        'O agendamento pode ser coordenado com exames admissionais, periódicos ou demissionais, quando aplicável.',
        'Equipamentos calibrados, ambiente adequado e registro do resultado são partes essenciais do atendimento.',
      ],
      bridgeSentence:
        'Em São Bernardo do Campo, a audiometria deve permanecer coerente com os riscos e o acompanhamento definido no PCMSO.',
    },
    diadema: {
      localParagraphs: [
        'Empresas de Diadema procuram audiometria ocupacional para monitorar trabalhadores expostos a ruído conforme o PCMSO.',
        `${local.contextoEmpresarial} Isso cria uma demanda local em que rapidez e critério técnico precisam andar juntos.`,
        `${data.content.solucao} O exame deve ser integrado ao acompanhamento médico e aos registros ocupacionais.`,
        'A análise sequencial permite comparar resultados e decidir se há necessidade de avaliação adicional ou revisão das medidas preventivas.',
      ],
      localSeoParagraphs: [
        'A empresa deve informar a função, os riscos e o tipo de exame ocupacional no agendamento.',
        'O trabalhador recebe orientação de preparo, e o exame é realizado em condições técnicas adequadas.',
        'O resultado passa a compor o acompanhamento previsto no PCMSO.',
      ],
      bridgeSentence:
        'Em Diadema, a audiometria é tratada como parte do PCMSO, não como exame isolado.',
    },
  };

  const admissionalLocalOverrides: Partial<Record<string, {
    localParagraphs: string[];
    localSeoParagraphs: string[];
    bridgeSentence: string;
  }>> = {
    'sao-paulo': {
      localParagraphs: [
        'O exame admissional em São Paulo deve ser realizado antes de o trabalhador assumir as atividades. A avaliação considera a função, os riscos informados no PCMSO e os exames complementares previstos.',
        `${local.contextoEmpresarial} Empresas com contratações frequentes precisam enviar as guias e as informações da função com antecedência para evitar retornos desnecessários.`,
        `${data.content.solucao} A SERMST reúne atendimento clínico, exames complementares disponíveis na unidade e emissão do ASO.`,
        'A clínica fica no Largo do Paissandu, 72, no Centro Histórico de São Paulo. O prazo e os documentos necessários são informados no agendamento.',
      ],
      localSeoParagraphs: [
        'O RH deve informar corretamente o cargo, a função, os riscos e os exames previstos no PCMSO.',
        'A avaliação clínica não deve ser apressada para atender a uma data de contratação. Quando há exame complementar, o ASO depende da análise dos resultados.',
        'Após o atendimento, a empresa recebe a conclusão de apto ou inapto, sem acesso a diagnóstico ou informação clínica protegida.',
      ],
      bridgeSentence:
        'Em São Paulo, a SERMST orienta o fluxo desde a emissão da guia até a disponibilização do ASO.',
    },
    guarulhos: {
      localParagraphs: [
        'Empresas de Guarulhos procuram o exame admissional para avaliar o trabalhador antes do início das atividades e emitir o ASO previsto na NR-07.',
        `${local.contextoEmpresarial} Em operações logísticas, aeroportuárias e industriais, a guia precisa refletir os riscos reais da função.`,
        `${data.content.solucao} A equipe orienta o RH sobre documentos, exames previstos e prazo estimado.`,
        'Quando as informações da função chegam completas, diminui a necessidade de corrigir a guia ou convocar o trabalhador novamente.',
      ],
      localSeoParagraphs: [
        'O exame deve acontecer antes de o trabalhador assumir as atividades.',
        'Prazo, documentos e exames complementares são definidos conforme o PCMSO e a função.',
        'O RH recebe o ASO com a conclusão de aptidão, respeitado o sigilo das informações clínicas.',
      ],
      bridgeSentence:
        'Em Guarulhos, a SERMST ajuda o RH a organizar guia, atendimento e emissão do ASO.',
    },
    'santo-andre': {
      localParagraphs: [
        'Empresas de Santo André procuram o exame admissional para cumprir a avaliação clínica antes do início das atividades e registrar a conclusão no ASO.',
        `${local.contextoEmpresarial} No ABC, a rotina empresarial costuma exigir resposta rápida sem abrir mão de critério ocupacional.`,
        `${data.content.solucao} A SERMST orienta a emissão da guia e os exames complementares definidos no PCMSO.`,
        'Informações completas sobre função e riscos evitam divergências entre o atendimento, o ASO e o eSocial.',
      ],
      localSeoParagraphs: [
        'A empresa deve enviar a guia com dados corretos do trabalhador, da função e dos riscos ocupacionais.',
        'O trabalhador realiza a avaliação clínica e, quando previstos, os exames complementares.',
        'O ASO é emitido após a avaliação dos resultados necessários para a conclusão médica.',
      ],
      bridgeSentence:
        'Em Santo André, o exame admissional pode ser organizado com orientação ao RH em todas as etapas.',
    },
    'sao-bernardo': {
      localParagraphs: [
        'Em São Bernardo do Campo, o exame admissional deve considerar os riscos da função antes de o trabalhador iniciar as atividades.',
        `${local.contextoEmpresarial} Nesse cenário, o exame admissional precisa acontecer com agilidade, mas também com coerência técnica para o cargo e para os riscos envolvidos.`,
        `${data.content.solucao} A equipe orienta a guia, realiza a avaliação prevista e emite o ASO após a conclusão médica.`,
        'Em funções industriais, os exames complementares devem seguir o PCMSO, e não uma lista genérica baseada apenas no nome do cargo.',
      ],
      localSeoParagraphs: [
        'A empresa deve informar atividade, riscos e requisitos da função antes do atendimento.',
        'O médico avalia a compatibilidade da condição de saúde com a tarefa indicada, respeitando o sigilo clínico.',
        'O RH recebe a conclusão registrada no ASO e usa os dados aplicáveis no evento do eSocial.',
      ],
      bridgeSentence:
        'Em São Bernardo do Campo, a SERMST organiza o atendimento conforme a função e o PCMSO da empresa.',
    },
    osasco: {
      localParagraphs: [
        'Empresas de Osasco procuram o exame admissional para avaliar o trabalhador antes do início das atividades e emitir o ASO.',
        `${local.contextoEmpresarial} Em Osasco, empresas com admissões frequentes precisam conciliar prazo de atendimento, informações corretas da função e conclusão médica.`,
        `${data.content.solucao} O atendimento pode reunir a avaliação clínica e os exames complementares disponíveis e previstos no PCMSO.`,
        'O RH deve enviar dados corretos da função e aguardar a conclusão médica antes de definir o início das atividades.',
      ],
      localSeoParagraphs: [
        'No agendamento, a empresa recebe orientação sobre documentos, preparo e exames previstos.',
        'O ASO é disponibilizado após a avaliação clínica e dos resultados complementares necessários.',
        'Diagnósticos e dados clínicos não são informados ao empregador.',
      ],
      bridgeSentence:
        'Em Osasco, a SERMST orienta o RH desde a guia até a emissão do ASO.',
    },
  };

  if (serviceName === 'Exame Toxicológico') {
    const localOverride = toxicologicoLocalOverrides[local.slug];

    if (localOverride) {
      return {
        serviceName,
        localParagraphs: localOverride.localParagraphs,
        localSeoParagraphs: localOverride.localSeoParagraphs,
        localCta: `Solicitar ${serviceName} em ${local.nome}`,
        bridgeSentence: localOverride.bridgeSentence,
      };
    }

    return {
      serviceName,
      localParagraphs: [
        `Em ${local.nome}, o exame toxicológico pode ser solicitado por uma empresa para cumprir a exigência trabalhista do motorista profissional ou por um condutor sujeito às regras de trânsito da CNH C, D ou E.`,
        `${local.contextoEmpresarial} Ao mesmo tempo, ${local.nome} concentra um fluxo constante de motoristas, transportadoras, operações urbanas de entrega e condutores que buscam resolver exigências da habilitação com mais agilidade.`,
        `${data.content.solucao} A finalidade, os documentos, o local da coleta, o prazo estimado e o preço são confirmados no agendamento.`,
        `A empresa também precisa controlar o exame periódico a cada dois anos e seis meses e preservar o sigilo do resultado.`,
      ],
      localSeoParagraphs: [
        `A SERMST atende empresas e condutores em ${local.nome}. O agendamento começa pela identificação da finalidade trabalhista ou de trânsito.`,
        `Na relação de emprego, o exame é independente do PCMSO, não integra o ASO e não define aptidão. Para a CNH, aplicam-se as regras próprias da habilitação.`,
        `O preço de referência é de R$ 200,00. Confirme valor, documentos e prazo antes da coleta.`,
        `O resultado deve ser tratado com sigilo, conforme a finalidade e as regras aplicáveis.`,
      ],
      localCta: `Solicitar ${serviceName} em ${local.nome}`,
    bridgeSentence: `Em ${local.nome}, empresas e condutores podem confirmar finalidade, preço e fluxo do exame antes de agendar.`,
    };
  }

  if (serviceName === 'Audiometria Ocupacional') {
    const localOverride = audiometriaLocalOverrides[local.slug];

    if (localOverride) {
      return {
        serviceName,
        localParagraphs: localOverride.localParagraphs,
        localSeoParagraphs: localOverride.localSeoParagraphs,
        localCta: `Solicitar ${serviceName} em ${local.nome}`,
        bridgeSentence: localOverride.bridgeSentence,
      };
    }

    return {
      serviceName,
      localParagraphs: [
        `A audiometria ocupacional em ${local.nome} integra o PCMSO de trabalhadores expostos a níveis de ruído que atingem os níveis de ação previstos nas normas.`,
        `${local.contextoEmpresarial} Em cenários com admissões, periódicos e demissionais, a empresa também procura clínica de audiometria, exame perto do trabalho e atendimento que não espalhe o colaborador em vários endereços.`,
        `${data.content.solucao} O atendimento inclui orientação sobre repouso auditivo, equipamento calibrado e ambiente acústico adequado.`,
        `A empresa deve informar a função, os riscos e o tipo de exame ocupacional no agendamento.`,
      ],
      localSeoParagraphs: [
        `A indicação e a periodicidade da audiometria em ${local.nome} devem seguir o PCMSO e o Anexo II da NR-07.`,
        `O trabalhador precisa receber orientação prévia, inclusive sobre o repouso auditivo previsto na norma.`,
        `Os resultados de referência e sequenciais são comparados no acompanhamento médico e podem indicar a necessidade de outras medidas preventivas.`,
      ],
      localCta: `Solicitar ${serviceName} em ${local.nome}`,
      bridgeSentence: `Em ${local.nome}, a audiometria é organizada conforme o PCMSO e integrada aos demais registros ocupacionais.`,
    };
  }

  if (serviceName === 'Exame Admissional') {
    const localOverride = admissionalLocalOverrides[local.slug];

    if (localOverride) {
      return {
        serviceName,
        localParagraphs: localOverride.localParagraphs,
        localSeoParagraphs: localOverride.localSeoParagraphs,
        localCta: `Solicitar ${serviceName} em ${local.nome}`,
        bridgeSentence: localOverride.bridgeSentence,
      };
    }
  }

  return {
    serviceName,
    localParagraphs: [
      `Empresas que procuram ${serviceName.toLowerCase()} em ${local.nome} precisam entender quando o serviço se aplica, como funciona o atendimento e quais documentos serão entregues.`,
      `${local.contextoEmpresarial} Isso faz prazo, deslocamento, agenda e entendimento do contexto econômico da região pesarem mais na decisão.`,
      `${data.content.solucao} A proposta deve informar a unidade de referência, o escopo, os prazos e os responsáveis pelo atendimento à empresa ${local.adjetivo}.`,
    ],
    localSeoParagraphs: [
      `A procura pode começar por uma admissão, um documento vencido, uma fiscalização ou uma exigência do eSocial. A análise deve partir da operação real da empresa.`,
      `Antes de pedir a proposta, confira se o serviço atende ao porte, à atividade, aos riscos e à localização da empresa.`,
      `${serviceName} em ${local.nome} deve ter escopo, critério técnico, prazo e documentos de entrega definidos.`,
    ],
    localCta:
      data.isClinico
        ? `Solicitar ${serviceName} em ${local.nome}`
        : `Solicitar proposta de ${serviceName} em ${local.nome}`,
    bridgeSentence: `Empresas em ${local.nome} podem comparar o serviço pelo escopo, pelo prazo, pela responsabilidade técnica e pelo suporte oferecido.`,
  };
}
