type BreadcrumbItem = {
  name: string;
  item?: string; // URL — omitir no último item (página atual)
};

/**
 * Renderiza o JSON-LD BreadcrumbList para Google rich snippets.
 * Uso: <BreadcrumbJsonLd items={[{ name: 'Início', item: 'https://sermst.com.br' }, ...]} />
 */
export function BreadcrumbJsonLd({ items }: { items: BreadcrumbItem[] }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      ...(crumb.item ? { item: crumb.item } : {}),
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
