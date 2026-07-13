import type { FAQItem } from '@/lib/data/seo-content';

type FAQContext =
  | 'service'
  | 'service-local'
  | 'rh'
  | 'empresario'
  | 'saúde'
  | 'dicionario'
  | 'article';

interface FrequentFAQOptions {
  context: FAQContext;
  topic: string;
  localidade?: string;
  maxItems?: number;
}

function dedupeFaqs(items: FAQItem[]): FAQItem[] {
  const seen = new Set<string>();

  return items.filter((item) => {
    const key = item.q.trim().toLowerCase();
    if (!key || seen.has(key)) return false;

    seen.add(key);
    return true;
  });
}

export function buildFrequentFaqs(
  baseFaqs: FAQItem[],
  options: FrequentFAQOptions,
): FAQItem[] {
  const editorialFaqs = dedupeFaqs(baseFaqs);
  const maxItems = options.maxItems ?? editorialFaqs.length;

  return editorialFaqs.slice(0, maxItems);
}
