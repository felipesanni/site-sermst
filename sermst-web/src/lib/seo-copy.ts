import { Localidade, SEODocument } from '@/lib/data/seo-content';

const getPrimaryServiceName = (h1: string) => h1.split('|')[0].trim();

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
        `Exame toxicológico é uma busca com intenção misturada: parte do público quer resolver uma exigência ocupacional da empresa, parte quer entender onde fazer o exame toxicológico para renovação da CNH C, D ou E, e outra parte chega procurando preço, valor e prazo. Para ranquear bem em um termo competitivo, a página precisa responder essas três leituras com clareza.`,
        `Na prática, isso significa falar com dois públicos ao mesmo tempo. O RH e a operação querem evitar admissão travada, frota parada e falha de conformidade. Já o motorista pessoa física quer saber se a clínica atende renovação de CNH, quanto custa o exame toxicológico e como regularizar a exigência sem perder tempo.`,
        `${data.content.solucao}`,
      ],
      complianceParagraphs: [
        `${data.quandoRequerido} Esse ponto é decisivo porque o exame toxicológico não deve ser explicado como se atendesse um único cenário. Quando a página distingue corretamente o que é rotina ocupacional da empresa e o que é demanda de pessoa física ligada à CNH, ela gera mais confiança, reduz ambiguidade e melhora a chance de conversão.`,
        `Exame toxicológico também é uma busca muito sensível a prova de seriedade. Por isso, a página precisa mostrar validade nacional do laudo, clareza sobre categorias C, D e E, atendimento em São Paulo, preço de referência e explicação objetiva sobre quem é atendido. Esses sinais ajudam tanto o usuário quanto o próprio SEO da página.`,
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
        ? `${data.quandoRequerido} Esse ponto é decisivo porque ${category.complianceAngle}. Quando a empresa entende o momento certo de contratar o serviço é o que precisa estar amarrado tecnicamente, evita inconsistências que mais tarde viram passivo trabalhista, autuação ou perda de produtividade.`
        : `${category.complianceAngle} Esse alinhamento entre exigência legal, diagnóstico técnico e execução operacional é o que diferencia uma solução realmente segura de uma entrega superficial.`,
      `${serviceName} não é etapa isolada. Conversa com a rotina do RH, com a agenda do colaborador, com a documentação de SST e com a necessidade de provar — em eventual fiscalização — que a empresa atuou de forma preventiva, organizada e coerente com os riscos da atividade.`,
    ],
    decisionParagraphs: [
      `Ao avaliar um fornecedor para ${serviceName.toLowerCase()}, o mais importante não é apenas comparar preço. O gestor precisa olhar prazo de resposta, capacidade técnica, integração com o eSocial, clareza sobre documentos e orientação de processo. Quando essas frentes estão bem resolvidas, a empresa ganha velocidade sem abrir mão de conformidade.`,
      data.expectativaCusto
        ? `${data.expectativaCusto} O melhor cenário para a contratante é ter transparência desde o início: o que está incluído, o que pode variar conforme risco e porte, e qual o fluxo até a conclusão — sem surpresa no meio do caminho.`
        : `O melhor cenário para a contratante é ter transparência desde o início: escopo bem definido, cronograma claro, critério técnico consistente e um canal rápido para destravar dúvidas operacionais do dia a dia.`,
    ],
  };
}

export function buildLocalServiceCopy(data: SEODocument, local: Localidade) {
  const serviceName = getPrimaryServiceName(data.h1);

  if (serviceName === 'Exame Toxicológico') {
    return {
      serviceName,
      localParagraphs: [
        `Quem pesquisa por exame toxicológico em ${local.nome} normalmente não está apenas lendo por curiosidade. É uma busca com intenção prática: a empresa quer liberar motorista, a transportadora quer evitar gargalo operacional e a pessoa física quer saber onde fazer o exame toxicológico para renovar a CNH C, D ou E.`,
        `${local.contextoEmpresarial} Ao mesmo tempo, ${local.nome} concentra um fluxo constante de motoristas, transportadoras, operações urbanas de entrega e condutores que buscam resolver exigências da habilitação com mais agilidade.`,
        `${data.content.solucao} Em ${local.nome}, isso significa unir atendimento comercial claro, resposta rápida e um texto que explique sem rodeio para quem o exame serve, quanto custa e em quais cenários a SERMST pode ajudar.`,
      ],
      localSeoParagraphs: [
        `Nesta página, o SEO precisa capturar mais de uma busca qualificada ao mesmo tempo: “exame toxicológico”, “onde fazer exame toxicológico”, “exame toxicológico CNH valor” e pesquisas ligadas a admissão de motorista. Por isso, a copy precisa ser útil tanto para empresa quanto para pessoa física.`,
        `Em ${local.nome}, isso reduz fricção de compra. O visitante percebe rapidamente que a SERMST atende empresas e também motorista particular das categorias C, D e E, encontra preço de referência e entende se o caso dele é ocupacional, documental ou ligado à renovação da habilitação.`,
        `${serviceName} em ${local.nome} precisa responder quatro perguntas sem enrolação: quem precisa fazer, onde fazer, quanto custa e se a clínica atende empresa e pessoa física. Quando a página cobre isso bem, ela melhora a chance de ranqueamento e também a taxa de contato.`,
      ],
      localCta: `Solicitar ${serviceName} em ${local.nome}`,
      bridgeSentence: `Em ${local.nome}, a decisão acontece mais rápido quando a página prova que entende a demanda real de empresas, transportadoras e motoristas pessoa física sem misturar obrigação ocupacional com informação genérica demais.`,
    };
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
