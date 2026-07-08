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
      searchIntent:
        'empresas que precisam acelerar admissões, manter o PCMSO em dia e evitar gargalos no envio de ASO para o eSocial',
      operationalPromise:
        'reduzir o tempo entre a guia emitida pelo RH e a liberação do colaborador para começar a trabalhar',
      complianceAngle:
        'o exame ocupacional precisa estar conectado ao risco do cargo, ao PCMSO vigente e ao registro correto do ASO',
    };
  }

  return {
    searchIntent:
      'empresas que precisam regularizar documentação obrigatória, sustentar o eSocial com base técnica e reduzir exposição a fiscalizações',
    operationalPromise:
      'transformar uma exigência regulatória em processo técnico organizado, com cronograma, evidências e rastreabilidade',
    complianceAngle:
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
        'Quem procura uma empresa de Segurança do Trabalho normalmente não está atrás de um documento isolado. Está tentando organizar uma rotina de SST que já começou a pesar no RH, no eSocial, nas admissões, nas renovações e na própria segurança jurídica da empresa.',
        `${data.content.dor} Em muitos casos, a demanda aparece quando a operação cresce, o passivo começa a preocupar ou a empresa percebe que cada fornecedor está cuidando de uma parte sem ninguém olhando o conjunto.`,
        `${data.content.solucao}`,
      ],
      complianceParagraphs: [
        `${data.quandoRequerido} O ponto central aqui é simples: PGR, PCMSO, LTCAT, ASO, treinamentos e eSocial precisam se sustentar mutuamente. Quando cada frente segue por um caminho diferente, o problema não aparece só na fiscalização. Ele aparece no dia a dia do RH e depois vira custo.`,
        'Uma empresa de Segurança do Trabalho precisa ajudar a contratar melhor, revisar o que está vencido, dar direção técnica para o que realmente se aplica e reduzir a distância entre obrigação legal e rotina operacional. É esse encaixe que transforma SST em processo, e não em acúmulo de pendência.',
      ],
      decisionParagraphs: [
        'Ao avaliar um fornecedor, vale olhar além da promessa comercial. O que pesa de verdade é a capacidade de entender o risco da operação, organizar prioridades, responder com rapidez e manter coerência entre clínica, laudos, treinamentos e eSocial.',
        'Quando a empresa tem clareza de escopo, cronograma, responsabilidades e próximos passos, a contratação fica mais segura. Sem isso, o mais comum é trocar um problema espalhado por outro com aparência de organização.',
      ],
    };
  }

  if (serviceName === 'Exame Toxicológico') {
    return {
      serviceName,
      overviewParagraphs: [
        `Exame toxicológico atende públicos diferentes ao mesmo tempo. De um lado, a empresa quer resolver uma exigência ocupacional sem travar admissão ou demissão. Do outro, o motorista pessoa física quer saber onde fazer o exame para renovar a CNH C, D ou E, quanto custa e como seguir sem perder tempo.`,
        `Na prática, isso significa falar com dois públicos ao mesmo tempo. O RH e a operação querem evitar admissão travada, frota parada e falha de conformidade. Já o motorista pessoa física quer saber se a clínica atende renovação de CNH, quanto custa o exame toxicológico e como regularizar a exigência sem perder tempo.`,
        `${data.content.solucao}`,
      ],
      complianceParagraphs: [
        `${data.quandoRequerido} Esse ponto é decisivo porque o exame toxicológico não deve ser explicado como se atendesse um único cenário. Quando a comunicação distingue corretamente o que é rotina ocupacional da empresa e o que é demanda de pessoa física ligada à CNH, ela gera mais confiança, reduz ambiguidade e melhora a chance de conversão.`,
        `Exame toxicológico também é uma busca muito sensível a prova de seriedade. Por isso, é essencial mostrar validade nacional do laudo, clareza sobre categorias C, D e E, atendimento em São Paulo, preço de referência e explicação objetiva sobre quem é atendido. Esses elementos ajudam o usuário a decidir com segurança e sem precisar buscar a informação em outro lugar.`,
      ],
      decisionParagraphs: [
        `Quem procura onde fazer exame toxicológico normalmente compara três coisas logo de cara: atendimento confiável, preço e aderência à necessidade real. Se a busca for da empresa, entra também prazo, orientação documental e previsibilidade para o RH. Se a busca for da pessoa física, entram localização, clareza da exigência e simplicidade do atendimento.`,
        `${data.expectativaCusto} Quando o valor, o público atendido e o contexto de uso do exame ficam claros logo no início, a decisão acontece com menos atrito e menos troca de mensagem desnecessária.`,
      ],
    };
  }

  return {
    serviceName,
    overviewParagraphs: [
      `${serviceName} costuma ser procurado por ${category.searchIntent}. O gestor que chega aqui normalmente quer responder quatro perguntas: quando esse serviço faz sentido, qual risco ele ajuda a reduzir, como funciona o atendimento e como a SERMST mantém a empresa mais organizada e em conformidade.`,
      `${data.content.dor} Na rotina do RH, do financeiro e da operação, esse problema aparece como atraso de contratação, retrabalho documental, receio de multa e falta de previsibilidade. A proposta da SERMST é ${category.operationalPromise}, sem perder rigor técnico, segurança jurídica nem velocidade.`,
      `${data.content.solucao}`,
    ],
    complianceParagraphs: [
      data.quandoRequerido
        ? `${data.quandoRequerido} Esse ponto é decisivo porque ${category.complianceAngle}. Quando a empresa entende o momento certo de contratar o serviço e o que precisa estar amarrado tecnicamente, evita inconsistências que mais tarde viram passivo trabalhista, autuação ou perda de produtividade.`
        : `${category.complianceAngle} Esse alinhamento entre exigência legal, diagnóstico técnico e execução operacional é o que diferencia uma solução realmente segura de uma entrega superficial.`,
      `${serviceName} não é etapa isolada. Conversa com a rotina do RH, com a agenda do colaborador, com a documentação de SST e com a necessidade de provar, em eventual fiscalização, que a empresa atuou de forma preventiva, organizada e coerente com os riscos da atividade.`,
    ],
    decisionParagraphs: [
      `Ao avaliar um fornecedor para ${serviceName.toLowerCase()}, o mais importante não é apenas comparar preço. O gestor precisa olhar prazo de resposta, capacidade técnica, integração com o eSocial, clareza sobre documentos e orientação de processo. Quando essas frentes estão bem resolvidas, a empresa ganha velocidade sem abrir mão de conformidade.`,
      data.expectativaCusto
        ? `${data.expectativaCusto} O melhor cenário para a contratante é ter transparência desde o início: o que está incluído, o que pode variar conforme risco e porte, e qual o fluxo até a conclusão, sem surpresa no meio do caminho.`
        : `O melhor cenário para a contratante é ter transparência desde o início: escopo bem definido, cronograma claro, critério técnico consistente e um canal rápido para destravar dúvidas operacionais do dia a dia.`,
    ],
  };
}

export function buildLocalServiceCopy(data: SEODocument, local: Localidade) {
  const serviceName = getPrimaryServiceName(data.h1);

  if (serviceName === 'Empresa de Segurança do Trabalho') {
    return {
      serviceName,
      localParagraphs: [
        `Quem procura uma empresa de Segurança do Trabalho em ${local.nome} geralmente já entendeu que o problema não está em um único documento. O que pesa é a soma: PGR desatualizado, PCMSO sem conversa com a operação, exames correndo em paralelo, treinamentos sem cadência e eSocial sendo resolvido no susto.`,
        `${local.contextoEmpresarial} Em uma cidade como ${local.nome}, onde o ritmo das empresas costuma cobrar resposta rápida do RH, essa fragmentação custa tempo, abre risco e dificulta crescimento com mais controle.`,
        `${data.content.solucao} Na prática, isso significa sair de uma lógica de fornecedor por tarefa e montar uma rotina de SST que faça sentido para a empresa como um todo.`,
      ],
      localSeoParagraphs: [
        `Em ${local.nome}, essa contratação costuma acontecer quando o gestor já cansou de apagar incêndio entre clínica, documentos, treinamentos e eSocial. A dúvida deixa de ser "se precisa" e passa a ser "com quem faz sentido organizar isso direito".`,
        'É por isso que a SERMST atua integrando clínica, documentação, treinamentos e apoio técnico no mesmo fluxo. Quando essas frentes andam juntas, o RH ganha previsibilidade e a empresa reduz ruído operacional.',
        `Para quem está avaliando um parceiro técnico em ${local.nome}, o que mais pesa é encontrar estrutura, clareza de escopo e capacidade de manter a rotina de SST mais coerente no dia a dia.`,
      ],
      localCta: `Solicitar proposta de ${serviceName} em ${local.nome}`,
      bridgeSentence:
        `Em ${local.nome}, a decisão costuma ficar mais segura quando a empresa encontra um parceiro que trata operação, risco, documento e eSocial no mesmo contexto.`,
    };
  }

  const toxicologicoLocalOverrides: Partial<Record<string, {
    localParagraphs: string[];
    localSeoParagraphs: string[];
    bridgeSentence: string;
  }>> = {
    'sao-paulo': {
      localParagraphs: [
        'Quem pesquisa por exame toxicológico em São Paulo normalmente não está só levantando informação. A busca costuma acontecer quando a empresa precisa liberar motorista, quando a transportadora quer reduzir gargalo operacional ou quando a pessoa física precisa resolver a renovação da CNH C, D ou E sem perder tempo.',
        `${local.contextoEmpresarial} Na capital, isso se cruza com um fluxo contínuo de motoristas, operações urbanas, distribuidoras e empresas com frota própria que precisam de atendimento confiável e orientação objetiva desde o primeiro contato.`,
        `${data.content.solucao} Em São Paulo, o diferencial comercial está em deixar claro que a SERMST atende empresa e pessoa física, explica a finalidade correta do exame e informa o preço de referência de R$ 200,00 sem ambiguidade.`,
        'Para quem pesquisa exame toxicológico perto de mim em São Paulo, localização real e acesso fácil fazem diferença. A unidade da SERMST fica no Centro Histórico, no Largo do Paissandu, 72, com acesso prático para Sé, República, Anhangabaú, Santa Ifigênia, Brás e corredores que concentram motoristas e operações logísticas.',
      ],
      localSeoParagraphs: [
        'Em São Paulo, esse atendimento precisa funcionar bem para dois públicos: a empresa que quer admissão, demissão ou gestão de motoristas sem travar o RH, e o condutor que quer resolver a exigência da CNH com atendimento confiável.',
        'Para a empresa, o valor está em previsibilidade de prazo, orientação documental e clareza sobre quando o exame entra no fluxo ocupacional. Para a pessoa física, os pontos centrais são local, preço, validade nacional do laudo e simplicidade no atendimento.',
        'Quando essas respostas aparecem com clareza, a empresa e o motorista entendem mais rápido se o atendimento resolve o caso deles e conseguem avançar com mais segurança.',
      ],
      bridgeSentence:
        'Em São Paulo, a decisão acontece mais rápido quando a empresa ou o motorista encontra em um só lugar endereço claro, finalidade do exame, preço de referência e orientação objetiva sobre o próximo passo.',
    },
    guarulhos: {
      localParagraphs: [
        'Quem procura exame toxicológico em Guarulhos geralmente está tentando resolver uma demanda operacional concreta: admissão de motorista, renovação de CNH profissional ou regularização documental ligada à frota.',
        `${local.contextoEmpresarial} Em Guarulhos, a demanda tende a vir de transportadoras, distribuição, operações ligadas ao aeroporto e empresas que precisam manter motoristas aptos sem criar atraso no RH.`,
        `${data.content.solucao} Em Guarulhos, isso pede atendimento comercial claro, validade nacional do laudo e apoio tanto para empresa quanto para pessoa física.`,
        'Em Guarulhos, o ponto principal é tirar a dúvida rápido: quem a SERMST atende, quanto custa e como o condutor ou a empresa conseguem avançar sem atrito.',
      ],
      localSeoParagraphs: [
        'Guarulhos concentra operações logísticas e circulação intensa de motoristas profissionais, então a procura costuma acontecer quando já existe uma demanda prática para resolver.',
        'Para empresas, o principal é evitar admissão parada e falta de previsibilidade. Para pessoa física, a prioridade é encontrar atendimento confiável para CNH C, D e E sem perder tempo em ligações ou mensagens desencontradas.',
        'Por isso, o atendimento em Guarulhos precisa deixar claro que a SERMST atende empresas e motoristas, trabalha com validade nacional e informa o valor de referência com objetividade.',
      ],
      bridgeSentence:
        'Em Guarulhos, a decisão avança melhor quando a empresa ou o motorista entendem rápido quem a SERMST atende, qual a faixa de preço e como funciona o fluxo até a realização do exame.',
    },
    osasco: {
      localParagraphs: [
        'A busca por exame toxicológico em Osasco costuma nascer da rotina de empresas que precisam manter motoristas em operação e de condutores que querem resolver a exigência da CNH profissional com agilidade.',
        `${local.contextoEmpresarial} Em Osasco, onde serviços, logística e deslocamento corporativo se cruzam o tempo todo, a mensagem precisa ser direta e útil para quem já quer resolver o problema.`,
        `${data.content.solucao} Isso pede uma mensagem objetiva sobre empresa, pessoa física, preço e finalidade do exame.`,
        'Quando fica claro que a SERMST atende exame toxicológico ocupacional e também renovação de CNH C, D e E, o atendimento reduz ruído e melhora a qualidade do lead em Osasco.',
      ],
      localSeoParagraphs: [
        'Em Osasco, a procura costuma ser prática: encontrar onde fazer o exame, entender se o atendimento serve para o caso real e avançar sem retrabalho.',
        'Empresas tendem a comparar velocidade, orientação e previsibilidade. Já o motorista pessoa física compara local, preço e confiabilidade do laudo.',
        'Por isso, a comunicação precisa equilibrar informação e objetividade comercial, mostrando que a SERMST resolve tanto o contexto ocupacional quanto a demanda individual ligada à CNH.',
      ],
      bridgeSentence:
        'Em Osasco, empresa e motorista avançam com mais confiança quando fica explícito o público atendido, o valor de referência e o contexto correto de uso do exame toxicológico.',
    },
    barueri: {
      localParagraphs: [
        'Quem busca exame toxicológico em Barueri normalmente está tentando encaixar a obrigação em uma rotina corporativa mais exigente, com menos tolerância a atraso e retrabalho.',
        `${local.contextoEmpresarial} Isso faz com que o exame seja avaliado não só pelo preço, mas pela clareza comercial e pela capacidade de orientar rapidamente empresa e motorista.`,
        `${data.content.solucao} Em Barueri, o essencial é deixar claro quem a SERMST atende, para quais cenários o exame serve e qual o valor de referência para seguir com segurança.`,
        'Quando essas respostas aparecem de forma direta, empresa e motorista conseguem decidir com menos dúvida e menos ruído.',
      ],
      localSeoParagraphs: [
        'Barueri concentra empresas com operação organizada e expectativa maior de agilidade no atendimento, então a abordagem precisa ser mais consultiva e direta.',
        'Para o RH, importa saber se o exame destrava admissão ou gestão da frota. Para o motorista, importa saber onde fazer, quanto custa e se o laudo atende a exigência da CNH profissional.',
        'Essa combinação deixa o atendimento mais claro para quem está decidindo entre resolver agora ou continuar procurando resposta em outro lugar.',
      ],
      bridgeSentence:
        'Em Barueri, a confiança cresce quando o atendimento se mostra mais objetivo, com posicionamento claro para empresas e condutores que precisam resolver o exame sem demora.',
    },
  };

  const audiometriaLocalOverrides: Partial<Record<string, {
    localParagraphs: string[];
    localSeoParagraphs: string[];
    bridgeSentence: string;
  }>> = {
    'sao-paulo': {
      localParagraphs: [
        'Quando uma empresa pesquisa por audiometria ocupacional em São Paulo, normalmente quer reduzir atrito no fluxo do ASO, organizar o PCMSO e garantir validade técnica para funções expostas a ruído.',
        `${local.contextoEmpresarial} Na capital, essa demanda aparece com frequência em admissões, periódicos e demissionais que não podem depender de vários endereços ou de agenda dispersa.`,
        `${data.content.solucao} Em São Paulo, isso significa unir agilidade operacional, cabine acústica calibrada, orientação sobre repouso auditivo e resultado integrado ao fluxo ocupacional.`,
        'Quem pesquisa audiometria ocupacional perto de mim em São Paulo normalmente quer clínica no centro, acesso rápido e exame integrado ao ASO. A unidade da SERMST fica no Largo do Paissandu, 72, no Centro Histórico, com facilidade para empresas da Sé, República, Brás, Santa Ifigênia e corredores corporativos da capital.',
      ],
      localSeoParagraphs: [
        'Em São Paulo, a busca local por audiometria tende a ser feita por RH, clínicas parceiras e empresas que precisam resolver o exame no mesmo fluxo do ASO.',
        'O diferencial não é só realizar a audiometria, mas encaixar o atendimento no processo ocupacional com orientação sobre repouso auditivo, triagem correta e entrega sem retrabalho.',
        'Quando isso fica claro, a empresa entende mais rápido que não está contratando um exame solto, e sim um atendimento que conversa com ASO, PCMSO e rotina ocupacional.',
      ],
      bridgeSentence:
        'Em São Paulo, empresas escolhem melhor quando encontram um atendimento que conecta localização central, rapidez e integração real da audiometria com o ASO.',
    },
    'santo-andre': {
      localParagraphs: [
        'A busca por audiometria ocupacional em Santo André costuma vir de empresas que precisam manter o PCMSO rodando com menos deslocamento e mais previsibilidade para o RH.',
        `${local.contextoEmpresarial} Isso faz a demanda se concentrar em exames que precisam acontecer com ritmo, critério técnico e encaixe no fluxo ocupacional.`,
        `${data.content.solucao} Em Santo André, o foco está em reduzir atrito entre exame, ASO e rotina de contratação ou periódico.`,
        'Em vez de tratar a audiometria como exame isolado, o mais importante é mostrar que ela ajuda a empresa a monitorar exposição a ruído com mais organização e menos retrabalho.',
      ],
      localSeoParagraphs: [
        'Empresas de Santo André tendem a valorizar solução prática: agendamento, execução técnica e resultado integrado ao prontuário ocupacional.',
        'Quando isso é explicado com clareza, o RH entende melhor o ganho prático para a empresa.',
        'No contexto industrial do ABC, essa diferença pesa porque o exame precisa entrar no fluxo com critério técnico e menos retrabalho.',
      ],
      bridgeSentence:
        'Em Santo André, a decisão fica mais simples quando a empresa percebe que a audiometria ajuda a manter PCMSO, ASO e controle de exposição a ruído em um fluxo mais coerente.',
    },
    'sao-bernardo': {
      localParagraphs: [
        'Quem procura audiometria ocupacional em São Bernardo do Campo geralmente está lidando com um ambiente onde controle de ruído, rotina fabril e medicina do trabalho precisam conversar sem falhas.',
        `${local.contextoEmpresarial} Nesse contexto, a busca local não é só por uma clínica, mas por um exame que sustente o processo ocupacional com critério e previsibilidade.`,
        `${data.content.solucao} Em São Bernardo, isso significa combinar execução técnica, orientação correta ao colaborador e integração com o ASO.`,
        'Quanto mais a mensagem conversa com o ambiente industrial da cidade, mais confiança ela transmite para empresas que precisam encaixar o exame no fluxo real da operação.',
      ],
      localSeoParagraphs: [
        'Em São Bernardo, muitas empresas já chegam sabendo que precisam do exame e procurando um fornecedor confiável para encaixar isso no PCMSO.',
        'Para esse público, pesa a capacidade de organizar admissional, periódico e demissional sem quebrar o fluxo da empresa.',
        'Por isso, o atendimento precisa reforçar validade técnica, resultado bem conduzido e encaixe operacional no cenário industrial da cidade.',
      ],
      bridgeSentence:
        'Em São Bernardo do Campo, a empresa precisa sentir segurança de que não está só fazendo o exame, mas mantendo coerência técnica em toda a rotina ocupacional.',
    },
    diadema: {
      localParagraphs: [
        'A pesquisa por audiometria ocupacional em Diadema costuma aparecer quando a empresa precisa monitorar exposição a ruído de forma mais organizada, sem travar admissões, periódicos ou desligamentos.',
        `${local.contextoEmpresarial} Isso cria uma demanda local em que rapidez e critério técnico precisam andar juntos.`,
        `${data.content.solucao} Em Diadema, a mensagem precisa deixar claro que a audiometria tonal ocupacional faz sentido quando está integrada ao ASO e ao acompanhamento do PCMSO.`,
        'Quando o papel do exame dentro da rotina ocupacional fica claro, o RH entende melhor por que esse atendimento ajuda a reduzir ruído e retrabalho.',
      ],
      localSeoParagraphs: [
        'Em Diadema, a busca tende a ser feita por empresas que já conhecem a exigência e querem destravar o operacional com mais segurança.',
        'O que pesa não é só fazer o exame, mas ter orientação adequada, resultado consistente e menos chance de retrabalho em auditoria ocupacional.',
        'Esse foco deixa a proposta mais clara para empresas da região que precisam encaixar a audiometria em uma rotina ocupacional mais organizada.',
      ],
      bridgeSentence:
        'Em Diadema, a confiança aumenta quando fica claro que a audiometria faz parte de uma rotina ocupacional séria e não de um exame solto sem contexto.',
    },
  };

  const admissionalLocalOverrides: Partial<Record<string, {
    localParagraphs: string[];
    localSeoParagraphs: string[];
    bridgeSentence: string;
  }>> = {
    'sao-paulo': {
      localParagraphs: [
        'Quem pesquisa exame admissional em São Paulo normalmente está tentando liberar contratação rápido, sem perder controle sobre ASO, documentos e integração com o eSocial.',
        `${local.contextoEmpresarial} Na capital, essa busca costuma vir de RHs com alto volume, empresas com operação distribuída e equipes que não podem parar uma admissão por falta de fluxo.`,
        `${data.content.solucao} Em São Paulo, o apelo comercial mais forte é centralizar atendimento clínico, exames complementares e emissão de ASO com mais previsibilidade.`,
        'O gestor quer entender logo de início onde fica a clínica, se há agilidade real, como funciona o fluxo e por que isso reduz atrito no processo admissional.',
      ],
      localSeoParagraphs: [
        'Em São Paulo, a empresa quer uma solução que una clínica de exame admissional, ASO rápido e exame ocupacional centralizado na capital.',
        'O usuário local não procura só informação técnica. Ele quer avaliar se a clínica consegue sustentar urgência, volume e integração com a rotina de RH.',
        'Quando essa mensagem fica clara, o RH entende melhor se a estrutura atende o ritmo de contratação da empresa.',
      ],
      bridgeSentence:
        'Em São Paulo, empresas avançam mais rápido quando encontram um atendimento que reduz atraso de contratação e organiza o fluxo ocupacional desde o primeiro contato.',
    },
    guarulhos: {
      localParagraphs: [
        'A busca por exame admissional em Guarulhos normalmente acontece quando a empresa precisa contratar com velocidade sem deixar ASO, exames e documentação ocupacional virarem gargalo.',
        `${local.contextoEmpresarial} Em Guarulhos, isso costuma pesar ainda mais em operações logísticas, aeroportuárias, industriais e equipes com contratação recorrente.`,
        `${data.content.solucao} Em Guarulhos, o destaque está em agilidade, previsibilidade e suporte prático para o RH que não pode esperar dias para concluir uma admissão.`,
        'Quando fica claro que a SERMST centraliza o fluxo ocupacional, a empresa entende melhor como isso reduz atraso e retrabalho.',
      ],
      localSeoParagraphs: [
        'Em Guarulhos, essa procura costuma acontecer muito perto da contratação real.',
        'O que o gestor compara é tempo de resposta, organização do processo e capacidade de orientar os próximos passos sem ruído.',
        'Por isso, a comunicação precisa falar menos em conceito genérico e mais em destravar admissão com ASO e apoio operacional.',
      ],
      bridgeSentence:
        'Em Guarulhos, a decisão fica mais fácil quando a empresa entende que o exame admissional ajuda a contratar sem improviso, com mais ritmo e menos retrabalho.',
    },
    'santo-andre': {
      localParagraphs: [
        'Quem busca exame admissional em Santo André geralmente está tentando manter a contratação fluindo com mais controle sobre prazo, ASO e exames ligados ao cargo.',
        `${local.contextoEmpresarial} No ABC, a rotina empresarial costuma exigir resposta rápida sem abrir mão de critério ocupacional.`,
        `${data.content.solucao} Em Santo André, a melhor copy é a que mostra como a SERMST ajuda a centralizar o processo e reduzir desgaste entre RH, gestor e colaborador.`,
        'Essa abordagem diferencia o atendimento de uma descrição padrão de clínica e aproxima o conteúdo da necessidade real de quem está contratando.',
      ],
      localSeoParagraphs: [
        'Em Santo André, a procura costuma ser objetiva: clínica de exame admissional, ASO e apoio para concluir a admissão.',
        'O gestor quer entender se a operação fica mais leve, se o colaborador consegue cumprir o fluxo e se a documentação sai de forma organizada.',
        'Quando isso fica claro, a empresa percebe com mais facilidade o ganho prático para a rotina do RH no ABC.',
      ],
      bridgeSentence:
        'Em Santo André, a confiança aumenta quando a empresa percebe que o exame admissional não é só etapa burocrática, mas parte de uma contratação mais organizada.',
    },
    'sao-bernardo': {
      localParagraphs: [
        'A busca por exame admissional em São Bernardo do Campo costuma surgir em empresas que não podem atrasar contratação e precisam de fluxo ocupacional compatível com uma rotina mais industrial.',
        `${local.contextoEmpresarial} Nesse cenário, o exame admissional precisa acontecer com agilidade, mas também com coerência técnica para o cargo e para os riscos envolvidos.`,
        `${data.content.solucao} Em São Bernardo, o foco está em exame ocupacional com suporte ao RH, ASO bem conduzido e menos dispersão entre etapas.`,
        'Quando a mensagem conversa com esse ambiente de contratação operacional, a empresa entende melhor o valor do atendimento.',
      ],
      localSeoParagraphs: [
        'O usuário de São Bernardo costuma estar mais próximo da ação: precisa da clínica, quer concluir o exame e seguir com a admissão.',
        'Essa expectativa pede linguagem comercial e técnica ao mesmo tempo, sem excesso de generalidade.',
        'Quando isso fica bem resolvido, o atendimento parece mais alinhado ao contexto industrial da cidade.',
      ],
      bridgeSentence:
        'Em São Bernardo do Campo, a comunicação ganha força quando deixa claro que o exame admissional ajuda a empresa a contratar com ritmo e segurança ocupacional.',
    },
    osasco: {
      localParagraphs: [
        'Quem procura exame admissional em Osasco normalmente quer evitar que contratação, ASO e exames ocupacionais fiquem espalhados em um processo confuso para o RH.',
        `${local.contextoEmpresarial} Em Osasco, a busca tende a ser orientada por velocidade de execução e praticidade operacional.`,
        `${data.content.solucao} Em Osasco, o reforço está na centralização do atendimento, na clareza do fluxo e no apoio para admissões que não podem esperar.`,
        'Quando o exame admissional é tratado como solução de processo, e não só como consulta médica, o RH entende melhor o ganho operacional.',
      ],
      localSeoParagraphs: [
        'Em Osasco, a procura costuma ser bem direta: encontrar clínica de exame admissional com resposta rápida e menos atrito para concluir a vaga.',
        'Isso pede uma explicação clara sobre o ganho prático para a empresa, desde o agendamento até a liberação do ASO.',
        'Com isso, a mensagem fica mais clara para empresas que precisam comparar atendimento, prazo e organização.',
      ],
      bridgeSentence:
        'Em Osasco, a decisão anda mais rápido quando fica claro que a SERMST ajuda a transformar o exame admissional em um fluxo simples e previsível para o RH.',
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
        `Quem pesquisa por exame toxicológico em ${local.nome} normalmente não está apenas lendo por curiosidade. A empresa quer liberar motorista, a transportadora quer evitar gargalo operacional e a pessoa física quer saber onde fazer o exame para renovar a CNH C, D ou E.`,
        `${local.contextoEmpresarial} Ao mesmo tempo, ${local.nome} concentra um fluxo constante de motoristas, transportadoras, operações urbanas de entrega e condutores que buscam resolver exigências da habilitação com mais agilidade.`,
        `${data.content.solucao} Em ${local.nome}, isso significa ter atendimento comercial claro, resposta rápida e comunicação direta sobre para quem o exame serve, quanto custa e em quais cenários a SERMST pode ajudar.`,
        `Em ${local.nome}, localização, rapidez e clareza sobre a finalidade do exame costumam pesar tanto quanto o preço.`,
      ],
      localSeoParagraphs: [
        `A SERMST atende empresas e motoristas pessoa física em ${local.nome} para o exame toxicológico, tanto em contexto ocupacional quanto em demandas ligadas à renovação da CNH nas categorias C, D e E. Isso significa que empresa e condutor chegam com necessidades diferentes, e o atendimento é conduzido de forma específica para cada cenário.`,
        `Para a empresa, o foco costuma ser agilidade na admissão ou demissão de motoristas, previsibilidade de prazo e orientação documental. Para o motorista pessoa física, o que mais importa é entender onde fazer, quanto custa e se o laudo tem validade nacional para a exigência da habilitação.`,
        `A SERMST responde com clareza a essas duas demandas: atendimento para empresa e pessoa física, preço de referência de R$ 200,00, laudo com validade nacional e equipe preparada para orientar o fluxo correto desde o primeiro contato em ${local.nome}.`,
        `Em ${local.nome}, esse posicionamento ajuda a transformar uma busca local em atendimento objetivo e menos atrito comercial.`,
      ],
      localCta: `Solicitar ${serviceName} em ${local.nome}`,
      bridgeSentence: `Em ${local.nome}, a decisão costuma ser tomada com mais segurança quando empresa ou motorista encontra rapidamente quem atende, qual o preço e como o atendimento funciona na prática, sem precisar ir a vários lugares para reunir essa informação.`,
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
        `Quando uma empresa pesquisa por audiometria ocupacional em ${local.nome}, normalmente quer reduzir atrito no fluxo do ASO, organizar o PCMSO e garantir que o exame tenha validade técnica para funções expostas a ruído.`,
        `${local.contextoEmpresarial} Em cenários com admissões, periódicos e demissionais, a empresa também procura clínica de audiometria, exame perto do trabalho e atendimento que não espalhe o colaborador em vários endereços.`,
        `${data.content.solucao} Em ${local.nome}, isso significa unir agilidade operacional, cabine acústica calibrada, orientação sobre repouso auditivo e resultado integrado ao fluxo ocupacional.`,
        `Em ${local.nome}, a busca por audiometria ocupacional costuma combinar urgência operacional, proximidade e necessidade de validade técnica do exame.`,
      ],
      localSeoParagraphs: [
        `A audiometria ocupacional em ${local.nome} costuma entrar quando a empresa precisa monitorar exposição a ruído sem atrasar contratação, periódico ou desligamento. O exame faz mais sentido quando está encaixado no fluxo do ASO e no cronograma do PCMSO.`,
        `Para o RH, o ponto crítico não é só encontrar uma clínica. É saber se o atendimento orienta repouso auditivo, entrega resultado com critério técnico e reduz o risco de retrabalho em auditoria ocupacional.`,
        `Em ${local.nome}, a força dessa comunicação está em mostrar que a audiometria não é só um exame isolado, e sim parte da rotina ocupacional que protege a empresa e o colaborador.`,
      ],
      localCta: `Solicitar ${serviceName} em ${local.nome}`,
      bridgeSentence: `Em ${local.nome}, empresas escolhem melhor quando entendem onde fica a unidade, como funciona o fluxo e por que a audiometria precisa estar integrada ao ASO e ao PCMSO.`,
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
      `Quando uma empresa pesquisa por ${serviceName.toLowerCase()} em ${local.nome}, normalmente quer duas coisas ao mesmo tempo: proximidade operacional e confiança técnica. O que o mercado procura é previsibilidade para contratar, atender rápido e manter a documentação correta para auditorias, fiscalizações e rotina do eSocial.`,
      `${local.contextoEmpresarial} Isso faz prazo, deslocamento, agenda e entendimento do contexto econômico da região pesarem mais na decisão.`,
      `${data.content.solucao} Em ${local.nome}, isso significa mostrar como funciona o atendimento a partir da unidade de referência e qual vantagem concreta a empresa ${local.adjetivo} ganha ao centralizar ${serviceName.toLowerCase()} com um parceiro focado em SST, medicina do trabalho e conformidade digital.`,
    ],
    localSeoParagraphs: [
      `Empresas em ${local.nome} costumam chegar a este tipo de página com uma necessidade concreta: admissão travada, documento vencido, fiscalização próxima, exigência do eSocial. A SERMST trabalha esses cenários a partir da operação real da empresa, não de modelo genérico.`,
      `Na decisão de compra, isso reduz fricção. A empresa entende se o serviço faz sentido para o momento atual, percebe a estrutura de atendimento e se sente mais segura para pedir orçamento ou falar com o comercial.`,
      `${serviceName} em ${local.nome} precisa ser entendido como solução operacional, legal e comercial ao mesmo tempo. A empresa quer rapidez, mas também quer segurança para não carregar risco jurídico, vencimento de prazo, admissão parada, auditoria futura ou multa ligada ao eSocial.`,
    ],
    localCta:
      data.isClinico
        ? `Solicitar ${serviceName} em ${local.nome}`
        : `Solicitar proposta de ${serviceName} em ${local.nome}`,
    bridgeSentence: `Empresas em ${local.nome} escolhem melhor quando encontram uma explicação clara do serviço, aderência ao contexto local e um próximo passo objetivo com o comercial.`,
  };
}
