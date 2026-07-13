// Declaração global do GTM dataLayer, sem necessidade de (window as any)
interface Window {
  dataLayer: Record<string, unknown>[];
  fbq?: (...args: unknown[]) => void;
}
