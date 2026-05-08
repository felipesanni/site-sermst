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

  return {
    serviceName,
    overviewParagraphs: [
      `${serviceName} é, na prática, uma busca de ${category.searchIntent}. O gestor que chega aqui quer responder com clareza quatro perguntas: quando esse serviço é obrigatório, qual risco ele reduz, como funciona o atendimento e como a SERMST mantém a empresa em conformidade.`,
      `${data.content.dor} Na rotina do RH, do financeiro e da operação, esse problema aparece como atraso de contratação, retrabalho documental, receio de multa e falta de previsibilidade. A proposta da SERMST é ${category.operationalPromise}, sem perder rigor técnico, segurança jurídica nem velocidade.`,
      `${data.content.solução}`,
    ],
    complianceParagraphs: [
      data.quandoRequerido
        ? `${data.quandoRequerido} Esse ponto é decisivo porque ${category.complianceAngle}. Quando a empresa entende o momento certo de contratar o serviço e o que precisa estar amarrado tecnicamente, evita inconsistências que mais tarde viram passivo trabalhista, autuação ou perda de produtividade.`
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

  return {
    serviceName,
    localParagraphs: [
      `Quando uma empresa pesquisa por ${serviceName.toLowerCase()} em ${local.nome}, normalmente quer duas coisas ao mesmo tempo: proximidade operacional e confiança técnica. O que o mercado procura é previsibilidade para contratar, atender rápido e manter a documentação correta para auditorias, fiscalizações e rotina do eSocial.`,
      `${local.contextoEmpresarial} Isso torna a busca local sensível a prazo, deslocamento, agenda e entendimento do contexto econômico da região.`,
      `${data.content.solução} Em ${local.nome}, isso significa mostrar como funciona o atendimento a partir da unidade de referência e qual vantagem concreta a empresa ${local.adjetivo} ganha ao centralizar ${serviceName.toLowerCase()} com um parceiro focado em SST, medicina do trabalho e conformidade digital.`,
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
