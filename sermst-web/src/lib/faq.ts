import type { FAQItem } from '@/lib/data/seo-content';

type FAQContext =
  | 'service'
  | 'service-local'
  | 'rh'
  | 'saúde'
  | 'dicionario'
  | 'article';

interface FrequentFAQOptions {
  context: FAQContext;
  topic: string;
  localidade?: string;
}

function dedupeFaqs(items: FAQItem[]): FAQItem[] {
  const seen = new Set<string>();
  const unique: FAQItem[] = [];

  items.forEach((item) => {
    const key = item.q.trim().toLowerCase();
    if (!key || seen.has(key)) return;
    seen.add(key);
    unique.push(item);
  });

  return unique;
}

function buildFallbackFaqs({ context, topic, localidade }: FrequentFAQOptions): FAQItem[] {
  const localPhrase = localidade ? ` em ${localidade}` : '';
  const topicLower = topic.toLowerCase();

  switch (context) {
    case 'service-local':
      return [
        {
          q: `Como saber se ${topicLower} se aplica a minha empresa${localPhrase}?`,
          a: `A forma mais segura e cruzar atividade, riscos do cargo, rotina operacional e obrigacoes do eSocial. A SERMST avalia esse contexto antes de indicar ${topicLower}, evitando escopo generico ou custo desnecessario.`,
        },
        {
          q: `Quais informações a SERMST precisa para orientar ${topicLower}${localPhrase}?`,
          a: `Normalmente precisamos entender CNPJ, quantidade de colaboradores, função envolvida, exposicoes ocupacionais e urgencia da demanda. Com isso, a equipe consegue direcionar o fluxo certo para ${topicLower}.`,
        },
        {
          q: `${topic} impacta o eSocial ou outros documentos obrigatorios?`,
          a: `Na maioria dos cenarios, sim. Dependendo do serviço, ele sustenta eventos ocupacionais, atualizacao de programas como PCMSO e PGR ou evidencia técnica para auditoria e fiscalização.`,
        },
        {
          q: `O atendimento de ${topicLower} pode ser feito na empresa ou exige deslocamento?`,
          a: `Isso depende da natureza do serviço. Alguns fluxos exigem atendimento em unidade, enquanto outros podem ser organizados in company ou de forma hibrida. A orientacao correta depende da operação da empresa.`,
        },
        {
          q: `Quanto tempo leva para organizar ${topicLower}${localPhrase}?`,
          a: `O prazo varia conforme urgencia, volume de colaboradores e complexidade técnica. Em demandas bem alinhadas, a SERMST estrutura o fluxo rapidamente e evita atraso no RH ou na operação.`,
        },
        {
          q: `Como pedir proposta de ${topicLower} com o escopo correto?`,
          a: `O ideal e falar com a equipe comercial informando cidade, quantidade de colaboradores, função ou area impactada e o prazo da empresa. Isso reduz retrabalho e acelera uma proposta aderente ao cenario real.`,
        },
      ];
    case 'service':
      return [
        {
          q: `Como saber se ${topicLower} e obrigatorio para minha empresa?`,
          a: `A obrigatoriedade depende da rotina da empresa, dos riscos ocupacionais e da fase do vinculo trabalhista. A SERMST analisa esse contexto antes de orientar a contratacao do serviço.`,
        },
        {
          q: `Quais dados a empresa deve reunir antes de contratar ${topicLower}?`,
          a: `CNPJ, quantidade de colaboradores, cargos envolvidos, riscos da operação e prazo desejado ja ajudam a definir o escopo correto e a evitar proposta generica.`,
        },
        {
          q: `${topic} interfere no eSocial, no PCMSO ou no PGR?`,
          a: `Em muitos casos, sim. O serviço precisa conversar com a estrutura documental e ocupacional da empresa para que o RH nao carregue inconsistencias para eventos ou auditorias.`,
        },
        {
          q: `Existe diferenca entre contratar ${topicLower} de forma isolada ou dentro de uma rotina de SST?`,
          a: `Existe. Quando o serviço entra dentro de um fluxo integrado, a empresa reduz retrabalho, ganha previsibilidade e evita gaps entre exame, documento, laudo e envio de informações.`,
        },
        {
          q: `Quanto tempo a empresa leva para colocar ${topicLower} em ordem?`,
          a: `Isso varia conforme urgencia, qualidade das informações iniciais e complexidade técnica. Quando o escopo e validado corretamente, o processo fica mais rapido e seguro.`,
        },
        {
          q: `Como falar com a SERMST sobre ${topicLower} sem perder tempo com proposta errada?`,
          a: `O melhor caminho e informar o contexto real da empresa, incluindo porte, função afetada e prazo. Assim o comercial e a equipe técnica conseguem orientar o escopo com mais precisao.`,
        },
      ];
    case 'rh':
      return [
        {
          q: `Como esse tema afeta admissão, ASO e prazos do RH?`,
          a: `Quando o RH nao entende como o tema conversa com SST, os impactos aparecem em contratacoes travadas, exame fora do prazo e mais retrabalho com documentação.`,
        },
        {
          q: `Esse assunto pode gerar multa, passivo trabalhista ou falha no eSocial?`,
          a: `Pode, especialmente quando a empresa deixa o tema no campo teorico e nao traduz a exigencia em processo, evidencia e rotina operacional.`,
        },
        {
          q: `Quais documentos a empresa deve revisar primeiro nesse cenario?`,
          a: `Normalmente vale revisar PCMSO, PGR, ASOs, fluxos de admissão e consistencia das informações ocupacionais enviadas ou preparadas para envio.`,
        },
        {
          q: `Como isso se conecta com o eSocial, o PGR e o PCMSO?`,
          a: `Esse tipo de dor quase nunca acontece isolado. Ele costuma expor um problema de integração entre rotina de RH, programas ocupacionais e governanca documental.`,
        },
        {
          q: `Quando vale sair da leitura e falar com a SERMST?`,
          a: `Quando a empresa ja esta vendo atraso, inseguranca no RH, risco de multa ou dificuldade para saber qual proximo passo técnico precisa entrar primeiro.`,
        },
      ];
    case 'saúde':
      return [
        {
          q: `Quando esse tema de saúde ocupacional vira prioridade para o RH?`,
          a: `Quando ele comeca a afetar afastamento, contratacao, produtividade, triagem ocupacional ou tomada de decisao sobre exames e programas obrigatorios.`,
        },
        {
          q: `Isso muda algo no PCMSO ou no exame ocupacional?`,
          a: `Pode mudar, porque varios temas de saúde ocupacional exigem leitura coerente dentro do programa médico e do acompanhamento clínico da empresa.`,
        },
        {
          q: `Como esse assunto se conecta ao eSocial?`,
          a: `Ele pode influenciar a qualidade das informações ocupacionais, a coerencia dos exames e a seguranca do fluxo documental que sustenta os eventos da empresa.`,
        },
        {
          q: `Quais sinais mostram que esse tema ja esta gerando exposicao para a empresa?`,
          a: `Atraso de admissão, duvida recorrente do RH, exame sem critério claro, aumento de retrabalho e inseguranca sobre o que deve ou nao ser documentado sao sinais comuns.`,
        },
        {
          q: `Quando vale transformar essa duvida em conversa comercial com a SERMST?`,
          a: `Quando a empresa precisa sair da explicação geral e organizar um fluxo real de exame, programa ocupacional ou rotina documental para nao carregar risco oculto.`,
        },
      ];
    case 'dicionario':
      return [
        {
          q: `Onde esse termo aparece na rotina real da empresa?`,
          a: `Ele costuma aparecer em admissão, exame ocupacional, programas de SST, laudos, eSocial ou conversas entre RH, seguranca do trabalho e lideranca operacional.`,
        },
        {
          q: `Como esse conceito se conecta com eSocial, PGR ou PCMSO?`,
          a: `Mesmo quando parece apenas teorico, o termo normalmente influencia leitura de risco, estrutura documental ou coerencia da informacao ocupacional.`,
        },
        {
          q: `O que o RH costuma confundir sobre ${topicLower}?`,
          a: `A confusao mais comum e tratar o termo como algo isolado, quando ele geralmente faz parte de um fluxo maior de exame, documento, risco e responsabilidade da empresa.`,
        },
        {
          q: `Quando esse assunto deixa de ser teoria e vira acao pratica?`,
          a: `Quando impacta prazo, contratacao, exame, programa ocupacional, auditoria ou cria duvida sobre o que a empresa deve comprovar diante de fiscalização.`,
        },
        {
          q: `A SERMST ajuda a revisar ${topicLower} na pratica?`,
          a: `Sim. Quando o termo aparece ligado a rotina ocupacional ou documental, a equipe ajuda a traduzir o conceito em acao técnica e fluxo aplicavel para a empresa.`,
        },
      ];
    case 'article':
      return [
        {
          q: `Como esse tema impacta a rotina da empresa?`,
          a: `O impacto normalmente aparece em previsibilidade operacional, clareza documental e seguranca para tomar decisao sem improviso.`,
        },
        {
          q: `Esse assunto pode gerar risco jurídico ou retrabalho?`,
          a: `Sim. Quando a empresa interpreta o tema de forma superficial, o problema costuma aparecer depois em auditoria, eSocial, afastamento ou atraso de rotina.`,
        },
        {
          q: `Quais sinais mostram que esse tema ja merece atencao comercial ou técnica?`,
          a: `Dificuldade recorrente no RH, duvida sobre obrigatoriedade, falha de documentação e urgencia frequente sao sinais de que vale aprofundar o caso.`,
        },
        {
          q: `Qual e o primeiro passo para organizar esse tema na pratica?`,
          a: `Entender o contexto da empresa, os cargos envolvidos, os riscos da operação e o que ja existe hoje em termos de documento, exame ou procedimento.`,
        },
        {
          q: `Quando vale falar com a SERMST sobre esse assunto?`,
          a: `Quando a leitura ja nao basta e a empresa precisa de traducao técnica para uma decisao pratica, com impacto em prazo, risco ou fluxo interno.`,
        },
      ];
    default:
      return [];
  }
}

export function buildFrequentFaqs(
  baseFaqs: FAQItem[],
  options: FrequentFAQOptions,
): FAQItem[] {
  const uniqueBase = dedupeFaqs(baseFaqs);
  const fallbackFaqs = buildFallbackFaqs(options);
  const merged = dedupeFaqs([...uniqueBase, ...fallbackFaqs]);

  return merged.slice(0, Math.min(7, Math.max(5, merged.length)));
}
