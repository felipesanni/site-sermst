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
          a: `A forma mais segura e cruzar atividade, riscos do cargo, rotina operacional e obrigações do eSocial. A SERMST avalia esse contexto antes de indicar ${topicLower}, evitando escopo genérico ou custo desnecessario.`,
        },
        {
          q: `Quais informações a SERMST precisa para orientar ${topicLower}${localPhrase}?`,
          a: `Normalmente precisamos entender CNPJ, quantidade de colaboradores, função envolvida, exposições ocupacionais e urgência da demanda. Com isso, a equipe consegue direcionar o fluxo certo para ${topicLower}.`,
        },
        {
          q: `${topic} impacta o eSocial ou outros documentos obrigatórios?`,
          a: `Na maioria dos cenários, sim. Dependendo do serviço, ele sustenta eventos ocupacionais, atualização de programas como PCMSO e PGR ou evidência técnica para auditoria e fiscalização.`,
        },
        {
          q: `O atendimento de ${topicLower} pode ser feito na empresa ou exige deslocamento?`,
          a: `Isso depende da natureza do serviço. Alguns fluxos exigem atendimento em unidade, enquanto outros podem ser organizados in company ou de forma híbrida. A orientação correta depende da operação da empresa.`,
        },
        {
          q: `Quanto tempo leva para organizar ${topicLower}${localPhrase}?`,
          a: `O prazo varia conforme urgência, volume de colaboradores e complexidade técnica. Em demandas bem alinhadas, a SERMST estrutura o fluxo rapidamente e evita atraso no RH ou na operação.`,
        },
        {
          q: `Como pedir proposta de ${topicLower} com o escopo correto?`,
          a: `O ideal e falar com a equipe comercial informando cidade, quantidade de colaboradores, função ou area impactada e o prazo da empresa. Isso reduz retrabalho e acelera uma proposta aderente ao cenário real.`,
        },
      ];
    case 'service':
      return [
        {
          q: `Como saber se ${topicLower} é obrigatório para minha empresa?`,
          a: `A obrigatoriedade depende da rotina da empresa, dos riscos ocupacionais e da fase do vinculo trabalhista. A SERMST analisa esse contexto antes de orientar a contratação do serviço.`,
        },
        {
          q: `Quais dados a empresa deve reunir antes de contratar ${topicLower}?`,
          a: `CNPJ, quantidade de colaboradores, cargos envolvidos, riscos da operação e prazo desejado já ajudam a definir o escopo correto e a evitar proposta genérica.`,
        },
        {
          q: `${topic} interfere no eSocial, no PCMSO ou no PGR?`,
          a: `Em muitos casos, sim. O serviço precisa conversar com a estrutura documental e ocupacional da empresa para que o RH não carregue inconsistencias para eventos ou auditorias.`,
        },
        {
          q: `Existe diferença entre contratar ${topicLower} de forma isolada ou dentro de uma rotina de SST?`,
          a: `Existe. Quando o serviço entra dentro de um fluxo integrado, a empresa reduz retrabalho, ganha previsibilidade e evita gaps entre exame, documento, laudo e envio de informações.`,
        },
        {
          q: `Quanto tempo a empresa leva para colocar ${topicLower} em ordem?`,
          a: `Isso varia conforme urgência, qualidade das informações iniciais e complexidade técnica. Quando o escopo é válidado corretamente, o processo fica mais rápido e seguro.`,
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
          a: `Quando o RH não entende como o tema conversa com SST, os impactos aparecem em contratações travadas, exame fora do prazo e mais retrabalho com documentação.`,
        },
        {
          q: `Esse assunto pode gerar multa, passivo trabalhista ou falha no eSocial?`,
          a: `Pode, especialmente quando a empresa deixa o tema no campo teórico e não traduz a exigencia em processo, evidência e rotina operacional.`,
        },
        {
          q: `Quais documentos a empresa deve revisar primeiro nesse cenário?`,
          a: `Normalmente vale revisar PCMSO, PGR, ASOs, fluxos de admissão e consistencia das informações ocupacionais enviadas ou preparadas para envio.`,
        },
        {
          q: `Como isso se conecta com o eSocial, o PGR e o PCMSO?`,
          a: `Esse tipo de dor quase nunca acontece isolado. Ele costuma expor um problema de integração entre rotina de RH, programas ocupacionais e governanca documental.`,
        },
        {
          q: `Quando vale sair da leitura e falar com a SERMST?`,
          a: `Quando a empresa ja está vendo atraso, insegurança no RH, risco de multa ou dificuldade para saber qual próximo passo técnico precisa entrar primeiro.`,
        },
      ];
    case 'saúde':
      return [
        {
          q: `Quando esse tema de saúde ocupacional vira prioridade para o RH?`,
          a: `Quando ele começa a afetar afastamento, contratação, produtividade, triagem ocupacional ou tomada de decisão sobre exames e programas obrigatórios.`,
        },
        {
          q: `Isso muda algo no PCMSO ou no exame ocupacional?`,
          a: `Pode mudar, porque varios temas de saúde ocupacional exigem leitura coerente dentro do programa médico e do acompanhamento clínico da empresa.`,
        },
        {
          q: `Como esse assunto se conecta ao eSocial?`,
          a: `Ele pode influenciar a qualidade das informações ocupacionais, a coerência dos exames e a segurança do fluxo documental que sustenta os eventos da empresa.`,
        },
        {
          q: `Quais sinais mostram que esse tema ja está gerando exposição para a empresa?`,
          a: `Atraso de admissão, dúvida recorrente do RH, exame sem critério claro, aumento de retrabalho e insegurança sobré o que deve ou não ser documentado são sinais comuns.`,
        },
        {
          q: `Quando vale transformar essa dúvida em conversa comercial com a SERMST?`,
          a: `Quando a empresa precisa sair da explicação geral e organizar um fluxo real de exame, programa ocupacional ou rotina documental para não carregar risco oculto.`,
        },
      ];
    case 'dicionario':
      return [
        {
          q: `Onde esse termo aparece na rotina real da empresa?`,
          a: `Ele costuma aparecer em admissão, exame ocupacional, programas de SST, laudos, eSocial ou conversas entre RH, segurança do trabalho e lideranca operacional.`,
        },
        {
          q: `Como esse conceito se conecta com eSocial, PGR ou PCMSO?`,
          a: `Mesmo quando parece apenas teórico, o termo normalmente influencia leitura de risco, estrutura documental ou coerência da informação ocupacional.`,
        },
        {
          q: `O que o RH costuma confundir sobre ${topicLower}?`,
          a: `A confusão mais comum e tratar o termo como algo isolado, quando ele geralmente faz parte de um fluxo maior de exame, documento, risco e responsabilidade da empresa.`,
        },
        {
          q: `Quando esse assunto deixa de ser teoria e vira acao prática?`,
          a: `Quando impacta prazo, contratação, exame, programa ocupacional, auditoria ou cria dúvida sobré o que a empresa deve comprovar diante de fiscalização.`,
        },
        {
          q: `A SERMST ajuda a revisar ${topicLower} na prática?`,
          a: `Sim. Quando o termo aparece ligado a rotina ocupacional ou documental, a equipe ajuda a traduzir o conceito em acao técnica e fluxo aplicavel para a empresa.`,
        },
      ];
    case 'article':
      return [
        {
          q: `Como esse tema impacta a rotina da empresa?`,
          a: `O impacto normalmente aparece em previsibilidade operacional, clareza documental e segurança para tomar decisão sem improviso.`,
        },
        {
          q: `Esse assunto pode gerar risco jurídico ou retrabalho?`,
          a: `Sim. Quando a empresa interpreta o tema de forma superficial, o problema costuma aparecer depois em auditoria, eSocial, afastamento ou atraso de rotina.`,
        },
        {
          q: `Quais sinais mostram que esse tema já merece atenção comercial ou técnica?`,
          a: `Dificuldade recorrente no RH, dúvida sobre obrigatoriedade, falha de documentação e urgência frequente são sinais de que vale aprofundar o caso.`,
        },
        {
          q: `Qual é o primeiro passo para organizar esse tema na prática?`,
          a: `Entender o contexto da empresa, os cargos envolvidos, os riscos da operação é o que já existe hoje em termos de documento, exame ou procedimento.`,
        },
        {
          q: `Quando vale falar com a SERMST sobre esse assunto?`,
          a: `Quando a leitura já não basta e a empresa precisa de tradução técnica para uma decisão prática, com impacto em prazo, risco ou fluxo interno.`,
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
