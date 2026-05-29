// Declaração global do GTM dataLayer — elimina a necessidade de (window as any)
interface Window {
  dataLayer: Record<string, unknown>[];
}
