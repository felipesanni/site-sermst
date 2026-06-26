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

  if (serviceName === 'Exame Toxicológico') {
    return {
      serviceName,
      overviewParagraphs: [
        `Exame toxicológico é uma busca com intenção misturada: parte do público quer resolver uma exigência ocupacional da empresa, parte quer entender onde fazer o exame toxicológico para renovação da CNH C, D ou E, e outra parte chega procurando preço, valor e prazo. Para responder bem a esse público diverso, a página precisa cobrir essas três leituras com clareza e sem ambiguidade.`,
        `Na prática, isso significa falar com dois públicos ao mesmo tempo. O RH e a operação querem evitar admissão travada, frota parada e falha de conformidade. Já o motorista pessoa física quer saber se a clínica atende renovação de CNH, quanto custa o exame toxicológico e como regularizar a exigência sem perder tempo.`,
        `${data.content.solucao}`,
      ],
      complianceParagraphs: [
        `${data.quandoRequerido} Esse ponto é decisivo porque o exame toxicológico não deve ser explicado como se atendesse um único cenário. Quando a página distingue corretamente o que é rotina ocupacional da empresa e o que é demanda de pessoa física ligada à CNH, ela gera mais confiança, reduz ambiguidade e melhora a chance de conversão.`,
        `Exame toxicológico também é uma busca muito sensível a prova de seriedade. Por isso, é essencial mostrar validade nacional do laudo, clareza sobre categorias C, D e E, atendimento em São Paulo, preço de referência e explicação objetiva sobre quem é atendido. Esses elementos ajudam o usuário a decidir com segurança e sem precisar buscar a informação em outro lugar.`,
      ],
      decisionParagraphs: [
        `Quem procura onde fazer exame toxicológico normalmente compara três coisas logo de cara: atendimento confiável, preço e aderência à necessidade real. Se a busca for da empresa, entra também prazo, orientação documental e previsibilidade para o RH. Se a busca for da pessoa física, entram localização, clareza da exigência e simplicidade do atendimento.`,
        `${data.expectativaCusto} Em um tema com concorrência orgânica forte, transparência comercial ajuda o SEO porque reduz fricção. O visitante entende rápido se a página resolve o caso dele e tende a engajar melhor quando encontra resposta direta sobre valor, público atendido e contexto de uso do exame.`,
      ],
    };
  }

  return {
    serviceName,
    overviewParagraphs: [
      `${serviceName} é, na prática, uma busca de ${category.searchIntent}. O gestor que chega aqui quer responder com clareza quatro perguntas: quando esse serviço é obrigatório, qual risco ele reduz, como funciona o atendimento e como a SERMST mantém a empresa em conformidade.`,
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
        'A página precisa conversar com duas intenções fortes ao mesmo tempo em São Paulo: a empresa que quer admissão, demissão ou gestão de motoristas sem travar o RH, e o condutor que quer saber onde fazer o exame para a CNH com atendimento confiável.',
        'Para a empresa, o valor está em previsibilidade de prazo, orientação documental e clareza sobre quando o exame entra no fluxo ocupacional. Para a pessoa física, os pontos centrais são local, preço, validade nacional do laudo e simplicidade no atendimento.',
        'Esse posicionamento ajuda a página a responder buscas como exame toxicológico São Paulo centro, exame toxicológico perto de mim, onde fazer exame toxicológico e exame toxicológico CNH C D E com contexto local mais forte e menos genérico.',
      ],
      bridgeSentence:
        'Em São Paulo, a decisão acontece mais rápido quando a empresa ou o motorista encontra em um só lugar endereço claro, finalidade do exame, preço de referência e orientação objetiva sobre o próximo passo.',
    },
    guarulhos: {
      localParagraphs: [
        'Quem procura exame toxicológico em Guarulhos geralmente está tentando resolver uma demanda operacional concreta: admissão de motorista, renovação de CNH profissional ou regularização documental ligada à frota.',
        `${local.contextoEmpresarial} Em Guarulhos, a demanda tende a vir de transportadoras, distribuição, operações ligadas ao aeroporto e empresas que precisam manter motoristas aptos sem criar atraso no RH.`,
        `${data.content.solucao} Para esse cenário, a página precisa mostrar atendimento comercial claro, validade nacional do laudo e apoio tanto para empresa quanto para pessoa física.`,
        'Em vez de uma página genérica sobre o exame, o foco em Guarulhos é reduzir dúvida sobre quem a SERMST atende, quanto custa e como o condutor ou a empresa pode avançar com menos atrito.',
      ],
      localSeoParagraphs: [
        'Guarulhos concentra operações logísticas e circulação intensa de motoristas profissionais, então a busca local costuma ser mais transacional do que informativa.',
        'Para empresas, o principal é evitar admissão parada e falta de previsibilidade. Para pessoa física, a prioridade é encontrar atendimento confiável para CNH C, D e E sem perder tempo em ligações ou mensagens desencontradas.',
        'Por isso, a copy local em Guarulhos precisa reforçar exame toxicológico para empresas e motoristas, validade nacional e atendimento objetivo com preço de referência já exposto.',
      ],
      bridgeSentence:
        'Em Guarulhos, a página converte melhor quando responde rápido se a SERMST atende empresa e motorista, qual a faixa de preço e como funciona o fluxo até a realização do exame.',
    },
    osasco: {
      localParagraphs: [
        'A busca por exame toxicológico em Osasco costuma nascer da rotina de empresas que precisam manter motoristas em operação e de condutores que querem resolver a exigência da CNH profissional com agilidade.',
        `${local.contextoEmpresarial} Em Osasco, onde serviços, logística e deslocamento corporativo se cruzam o tempo todo, a página precisa funcionar como resposta comercial direta e não só como texto explicativo.`,
        `${data.content.solucao} Isso pede uma mensagem objetiva sobre empresa, pessoa física, preço e finalidade do exame.`,
        'Quando a página explica com clareza que a SERMST atende exame toxicológico ocupacional e também renovação de CNH C, D e E, ela reduz ruído e melhora a qualidade do lead em Osasco.',
      ],
      localSeoParagraphs: [
        'Em Osasco, a intenção da busca costuma ser prática: encontrar onde fazer o exame, entender se o atendimento serve para o caso real e avançar sem retrabalho.',
        'Empresas tendem a comparar velocidade, orientação e previsibilidade. Já o motorista pessoa física compara local, preço e confiabilidade do laudo.',
        'Por isso, a página local precisa equilibrar tom informativo e apelo comercial, mostrando que a SERMST resolve o contexto ocupacional e a demanda individual ligada à CNH.',
      ],
      bridgeSentence:
        'Em Osasco, empresa e motorista avançam com mais confiança quando a página deixa explícito o público atendido, o valor de referência e o contexto correto de uso do exame toxicológico.',
    },
    barueri: {
      localParagraphs: [
        'Quem busca exame toxicológico em Barueri normalmente está tentando encaixar a obrigação em uma rotina corporativa mais exigente, com menos tolerância a atraso e retrabalho.',
        `${local.contextoEmpresarial} Isso faz com que o exame seja avaliado não só pelo preço, mas pela clareza comercial e pela capacidade de orientar rapidamente empresa e motorista.`,
        `${data.content.solucao} Em Barueri, a página precisa funcionar como ponto de decisão: quem atende, para quais cenários serve e qual o valor de referência para seguir com segurança.`,
        'Ao reforçar atendimento para pessoa física e empresas com motoristas, a copy local fica mais aderente à realidade de Barueri e evita que o usuário procure essas respostas em outro site.',
      ],
      localSeoParagraphs: [
        'Barueri concentra empresas com operação organizada e expectativa maior de agilidade no atendimento, então a página precisa ser mais consultiva e direta.',
        'Para o RH, importa saber se o exame destrava admissão ou gestão da frota. Para o motorista, importa saber onde fazer, quanto custa e se o laudo atende a exigência da CNH profissional.',
        'Essa combinação ajuda a página a disputar melhor buscas locais sem virar conteúdo repetido da versão de São Paulo.',
      ],
      bridgeSentence:
        'Em Barueri, a confiança cresce quando a página mostra um atendimento mais objetivo, com posicionamento claro para empresas e condutores que precisam resolver o exame sem demora.',
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
        'Esse recorte ajuda a página a responder buscas como audiometria ocupacional São Paulo, audiometria ocupacional centro e clínica de audiometria ocupacional perto de mim sem perder o foco na intenção empresarial.',
      ],
      bridgeSentence:
        'Em São Paulo, empresas escolhem melhor quando encontram uma página que conecta localização central, rapidez de atendimento e integração real da audiometria com o ASO.',
    },
    'santo-andre': {
      localParagraphs: [
        'A busca por audiometria ocupacional em Santo André costuma vir de empresas que precisam manter o PCMSO rodando com menos deslocamento e mais previsibilidade para o RH.',
        `${local.contextoEmpresarial} Isso faz a demanda se concentrar em exames que precisam acontecer com ritmo, critério técnico e encaixe no fluxo ocupacional.`,
        `${data.content.solucao} Para Santo André, a copy local precisa destacar menos atrito entre exame, ASO e rotina de contratação ou periódico.`,
        'Em vez de tratar a audiometria como exame isolado, a página precisa mostrar que ela ajuda a empresa a monitorar exposição a ruído com mais organização e menos retrabalho.',
      ],
      localSeoParagraphs: [
        'Empresas de Santo André tendem a valorizar solução prática: agendamento, execução técnica e resultado integrado ao prontuário ocupacional.',
        'Quando a página explica isso com clareza, ela conversa melhor com buscas por audiometria ocupacional e clínica de audiometria para empresa na região do ABC.',
        'O ganho de SEO aqui está na aderência ao contexto industrial e operacional local, sem repetir o mesmo texto da capital.',
      ],
      bridgeSentence:
        'Em Santo André, a decisão fica mais simples quando a página mostra que a audiometria ajuda a empresa a manter PCMSO, ASO e controle de exposição a ruído em um fluxo mais coerente.',
    },
    'sao-bernardo-do-campo': {
      localParagraphs: [
        'Quem procura audiometria ocupacional em São Bernardo do Campo geralmente está lidando com um ambiente onde controle de ruído, rotina fabril e medicina do trabalho precisam conversar sem falhas.',
        `${local.contextoEmpresarial} Nesse contexto, a busca local não é só por uma clínica, mas por um exame que sustente o processo ocupacional com critério e previsibilidade.`,
        `${data.content.solucao} Em São Bernardo, isso significa combinar execução técnica, orientação correta ao colaborador e integração com o ASO.`,
        'Quanto mais a página mostra aderência ao ambiente industrial da cidade, melhor ela se diferencia de uma landing genérica de exames ocupacionais.',
      ],
      localSeoParagraphs: [
        'A intenção de busca em São Bernardo tende a ser mais madura: o usuário já sabe que precisa do exame e quer um fornecedor confiável para encaixar no PCMSO.',
        'Para esse público, pesa a capacidade de organizar admissional, periódico e demissional sem quebrar o fluxo da empresa.',
        'Por isso, a página local precisa reforçar audiometria ocupacional com validade técnica, resultado bem conduzido e encaixe operacional no cenário industrial da cidade.',
      ],
      bridgeSentence:
        'Em São Bernardo do Campo, a página precisa passar segurança para empresas que não querem apenas fazer o exame, mas manter coerência técnica em toda a rotina ocupacional.',
    },
    diadema: {
      localParagraphs: [
        'A pesquisa por audiometria ocupacional em Diadema costuma aparecer quando a empresa precisa monitorar exposição a ruído de forma mais organizada, sem travar admissões, periódicos ou desligamentos.',
        `${local.contextoEmpresarial} Isso cria uma demanda local em que rapidez e critério técnico precisam andar juntos.`,
        `${data.content.solucao} Em Diadema, a página deve mostrar que a audiometria tonal ocupacional faz sentido quando está integrada ao ASO e ao acompanhamento do PCMSO.`,
        'Quando a copy local explica o papel do exame dentro da rotina ocupacional, ela fica mais útil para o RH e mais competitiva para SEO.',
      ],
      localSeoParagraphs: [
        'Em Diadema, a busca tende a ser feita por empresas que já conhecem a exigência e querem destravar o operacional com mais segurança.',
        'O que pesa não é só fazer o exame, mas ter orientação adequada, resultado consistente e menos chance de retrabalho em auditoria ocupacional.',
        'Esse foco ajuda a página a disputar melhor termos ligados a audiometria ocupacional e audiometria tonal para empresas da região.',
      ],
      bridgeSentence:
        'Em Diadema, a confiança aumenta quando a página deixa claro que a audiometria faz parte de uma rotina ocupacional séria e não de um exame solto sem contexto.',
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
        'A página precisa responder o que o gestor quer saber logo de início: onde fica a clínica, se há agilidade real, como funciona o fluxo e por que isso reduz atrito no processo admissional.',
      ],
      localSeoParagraphs: [
        'Para disputar melhor no orgânico, a página de São Paulo precisa se posicionar como solução para clínica de exame admissional, ASO rápido e exame ocupacional centralizado na capital.',
        'O usuário local não procura só informação técnica. Ele quer avaliar se a clínica consegue sustentar urgência, volume e integração com a rotina de RH.',
        'Quando a copy fala com esse contexto, a página fica mais diferente das demais URLs geográficas e mais próxima da intenção comercial real.',
      ],
      bridgeSentence:
        'Em São Paulo, empresas avançam mais rápido quando encontram uma página que mostra como o exame admissional reduz atraso de contratação e organiza o fluxo ocupacional desde o primeiro contato.',
    },
    guarulhos: {
      localParagraphs: [
        'A busca por exame admissional em Guarulhos normalmente acontece quando a empresa precisa contratar com velocidade sem deixar ASO, exames e documentação ocupacional virarem gargalo.',
        `${local.contextoEmpresarial} Em Guarulhos, isso costuma pesar ainda mais em operações logísticas, aeroportuárias, industriais e equipes com contratação recorrente.`,
        `${data.content.solucao} A página local precisa enfatizar agilidade, previsibilidade e suporte prático para o RH que não pode esperar dias para concluir uma admissão.`,
        'Quanto mais claro fica que a SERMST centraliza o fluxo ocupacional, mais aderente a página se torna à realidade de Guarulhos.',
      ],
      localSeoParagraphs: [
        'Em Guarulhos, a intenção de busca por clínica de exame admissional tende a ser muito próxima da contratação real.',
        'O que o gestor compara é tempo de resposta, organização do processo e capacidade de orientar os próximos passos sem ruído.',
        'Por isso, a copy local precisa falar menos em conceito genérico e mais em destravar admissão com ASO e apoio operacional.',
      ],
      bridgeSentence:
        'Em Guarulhos, a página funciona melhor quando mostra que o exame admissional ajuda a empresa a contratar sem improviso, com mais ritmo e menos retrabalho.',
    },
    'santo-andre': {
      localParagraphs: [
        'Quem busca exame admissional em Santo André geralmente está tentando manter a contratação fluindo com mais controle sobre prazo, ASO e exames ligados ao cargo.',
        `${local.contextoEmpresarial} No ABC, a rotina empresarial costuma exigir resposta rápida sem abrir mão de critério ocupacional.`,
        `${data.content.solucao} Em Santo André, a melhor copy é a que mostra como a SERMST ajuda a centralizar o processo e reduzir desgaste entre RH, gestor e colaborador.`,
        'Essa abordagem diferencia a página de uma descrição padrão de clínica e aproxima o conteúdo da necessidade real de quem está contratando.',
      ],
      localSeoParagraphs: [
        'A busca local tende a carregar intenção comercial clara: clínica de exame admissional, ASO e apoio para concluir a admissão.',
        'O gestor quer entender se a operação fica mais leve, se o colaborador consegue cumprir o fluxo e se a documentação sai de forma organizada.',
        'Ao reforçar isso, a página fica mais única dentro do cluster geográfico e mais alinhada ao comportamento de busca do ABC.',
      ],
      bridgeSentence:
        'Em Santo André, a confiança aumenta quando a página mostra que o exame admissional não é só etapa burocrática, mas parte de uma contratação mais organizada.',
    },
    'sao-bernardo-do-campo': {
      localParagraphs: [
        'A busca por exame admissional em São Bernardo do Campo costuma surgir em empresas que não podem atrasar contratação e precisam de fluxo ocupacional compatível com uma rotina mais industrial.',
        `${local.contextoEmpresarial} Nesse cenário, o exame admissional precisa acontecer com agilidade, mas também com coerência técnica para o cargo e para os riscos envolvidos.`,
        `${data.content.solucao} Em São Bernardo, a copy local deve destacar exame ocupacional com suporte ao RH, ASO bem conduzido e menos dispersão entre etapas.`,
        'Quanto mais a página conversa com esse ambiente de contratação operacional, melhor ela se diferencia das demais cidades.',
      ],
      localSeoParagraphs: [
        'O usuário de São Bernardo costuma estar mais próximo da ação: precisa da clínica, quer concluir o exame e seguir com a admissão.',
        'A página precisa responder essa expectativa com linguagem comercial e técnica ao mesmo tempo, sem excesso de generalidade.',
        'Isso ajuda a disputar buscas locais de exame admissional e clínica de medicina do trabalho com mais aderência ao contexto da cidade.',
      ],
      bridgeSentence:
        'Em São Bernardo do Campo, a página ganha força quando deixa claro que o exame admissional ajuda a empresa a contratar com ritmo e segurança ocupacional.',
    },
    osasco: {
      localParagraphs: [
        'Quem procura exame admissional em Osasco normalmente quer evitar que contratação, ASO e exames ocupacionais fiquem espalhados em um processo confuso para o RH.',
        `${local.contextoEmpresarial} Em Osasco, a busca tende a ser orientada por velocidade de execução e praticidade operacional.`,
        `${data.content.solucao} A copy local precisa reforçar centralização do atendimento, clareza no fluxo e apoio para admissões que não podem esperar.`,
        'Ao tratar o exame admissional como solução de processo e não só como consulta médica, a página fica mais comercial e mais útil para SEO.',
      ],
      localSeoParagraphs: [
        'Em Osasco, a intenção costuma ser bem direta: encontrar clínica de exame admissional com resposta rápida e menos atrito para concluir a vaga.',
        'Isso pede uma página que explique o ganho prático para a empresa, desde o agendamento até a liberação do ASO.',
        'Com esse recorte, a URL local fica mais distinta dentro do projeto e menos parecida com outras páginas geográficas do mesmo serviço.',
      ],
      bridgeSentence:
        'Em Osasco, a decisão anda mais rápido quando a página mostra que a SERMST ajuda a transformar o exame admissional em um fluxo simples e previsível para o RH.',
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
        `Quem pesquisa por exame toxicológico em ${local.nome} normalmente não está apenas lendo por curiosidade. É uma busca com intenção prática: a empresa quer liberar motorista, a transportadora quer evitar gargalo operacional e a pessoa física quer saber onde fazer o exame toxicológico para renovar a CNH C, D ou E.`,
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
        `${local.contextoEmpresarial} Em cenários com admissões, periódicos e demissionais, a busca também costuma carregar intenção local forte: clínica de audiometria, exame perto da empresa e atendimento que não espalhe o colaborador em vários endereços.`,
        `${data.content.solucao} Em ${local.nome}, isso significa unir agilidade operacional, cabine acústica calibrada, orientação sobre repouso auditivo e resultado integrado ao fluxo ocupacional.`,
        `Em ${local.nome}, a busca por audiometria ocupacional costuma combinar urgência operacional, proximidade e necessidade de validade técnica do exame.`,
      ],
      localSeoParagraphs: [
        `A audiometria ocupacional em ${local.nome} costuma entrar quando a empresa precisa monitorar exposição a ruído sem atrasar contratação, periódico ou desligamento. O exame faz mais sentido quando está encaixado no fluxo do ASO e no cronograma do PCMSO.`,
        `Para o RH, o ponto crítico não é só encontrar uma clínica. É saber se o atendimento orienta repouso auditivo, entrega resultado com critério técnico e reduz o risco de retrabalho em auditoria ocupacional.`,
        `Em ${local.nome}, a força da página vem de mostrar que a audiometria não é só um exame isolado, e sim parte da rotina ocupacional que protege a empresa e o colaborador.`,
      ],
      localCta: `Solicitar ${serviceName} em ${local.nome}`,
      bridgeSentence: `Em ${local.nome}, empresas escolhem melhor quando encontram uma página que deixa claro onde fica a unidade, como funciona o fluxo e por que a audiometria precisa estar integrada ao ASO e ao PCMSO.`,
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
      `${local.contextoEmpresarial} Isso torna a busca local sensível a prazo, deslocamento, agenda e entendimento do contexto econômico da região.`,
      `${data.content.solucao} Em ${local.nome}, isso significa mostrar como funciona o atendimento a partir da unidade de referência e qual vantagem concreta a empresa ${local.adjetivo} ganha ao centralizar ${serviceName.toLowerCase()} com um parceiro focado em SST, medicina do trabalho e conformidade digital.`,
    ],
    localSeoParagraphs: [
      `Empresas em ${local.nome} costumam chegar a este tipo de página com uma necessidade concreta: admissão travada, documento vencido, fiscalização próxima, exigência do eSocial. A SERMST trabalha esses cenários a partir da operação real da empresa, não de modelo genérico.`,
      `Na decisão de compra, isso reduz fricção. A empresa entende se o serviço faz sentido para o momento atual, percebe a estrutura de atendimento e se sente mais segura para pedir orçamento ou falar com o comercial.`,
      `${serviceName} em ${local.nome} precisa ser tratado como solução operacional, legal e comercial ao mesmo tempo. A página precisa responder à dor de quem busca rapidez e tranquilizar quem está pensando em risco jurídico, vencimento de prazo, admissão parada, auditoria futura ou multa relacionada ao eSocial.`,
    ],
    localCta:
      data.isClinico
        ? `Solicitar ${serviceName} em ${local.nome}`
        : `Solicitar proposta de ${serviceName} em ${local.nome}`,
    bridgeSentence: `Empresas em ${local.nome} escolhem melhor quando encontram uma página que explica o serviço com profundidade, mostra aderência ao contexto local e conduz para um próximo passo objetivo com o comercial.`,
  };
}
