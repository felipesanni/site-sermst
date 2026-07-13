import type { Metadata } from 'next';
import Link from 'next/link';
import Script from 'next/script';
import { CheckCircle2 } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Solicitação Recebida | SERMST',
  description: 'Sua solicitação de plano SST foi recebida. A equipe da SERMST entrará em contato em até 24 horas úteis.',
  robots: { index: false, follow: false },
  alternates: {
    canonical: 'https://sermst.com.br/assinaturas/obrigado',
  },
};

export default function ObrigadoAssinaturasPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* GTM dataLayer push de conversão: dispara quando a URL é carregada */}
      <Script
        id="conversion-obrigado"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            window.dataLayer.push({
              event: 'subscription_lead_confirmed',
              page_type: 'obrigado_assinatura',
              conversion_source: 'assinaturas_form'
            });
          `,
        }}
      />

      <section className="relative overflow-hidden bg-brand-900 text-white">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 mx-auto max-w-[1280px] px-6 py-16 md:py-24 lg:px-8">
          <div className="max-w-3xl">
            <CheckCircle2 className="mb-6 h-12 w-12 text-accent-pink" aria-hidden="true" />
            <span className="mb-5 inline-block rounded-full border border-accent-pink/20 bg-accent-pink/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
              Solicitação recebida
            </span>
            <h1 className="h1-standard mb-5 text-white drop-shadow-[0_10px_25px_rgba(0,0,0,0.35)] md:mb-6">
              Recebemos sua solicitação de plano SST
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300 md:text-xl">
              Nossa equipe entrará em contato em até{' '}
              <strong className="text-white">24 horas úteis</strong> para confirmar os detalhes, tirar dúvidas e avançar com o contrato.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1280px] px-6 py-16 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">

          {/* Próximos passos */}
          <div className="surface-panel">
            <span className="kicker">O que acontece agora</span>
            <h2 className="mb-6 text-2xl font-black text-brand-900">Próximos passos</h2>
            <ol className="space-y-5">
              {[
                {
                  step: '1',
                  title: 'Confirmação em até 24h úteis',
                  desc: 'Um especialista da SERMST vai entrar em contato para confirmar o plano, o número de funcionários e os dados da empresa.',
                },
                {
                  step: '2',
                  title: 'Diagnóstico inicial',
                  desc: 'Antes de começar, a equipe técnica faz um levantamento rápido do que a empresa já tem: PGR, PCMSO, eSocial: para calibrar o plano.',
                },
                {
                  step: '3',
                  title: 'Contrato e início da operação',
                  desc: 'Com os dados confirmados, enviamos o contrato para assinatura digital e iniciamos a gestão de SST no prazo combinado.',
                },
              ].map((item) => (
                <li key={item.step} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-brand-900 text-sm font-black text-white">
                    {item.step}
                  </span>
                  <div>
                    <p className="font-black text-brand-900">{item.title}</p>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          {/* WhatsApp + links */}
          <div className="flex flex-col gap-6">
            <div className="surface-panel-muted">
              <span className="kicker">Prefere falar agora?</span>
              <h2 className="mb-3 text-2xl font-black text-brand-900">WhatsApp direto com a equipe</h2>
              <p className="mb-6 text-sm leading-relaxed text-slate-600">
                Se tiver urgência ou quiser confirmar o recebimento da solicitação, fale diretamente com o time comercial.
              </p>
              <a
                href="https://wa.me/5511915146447?text=Ol%C3%A1!%20Acabei%20de%20solicitar%20um%20plano%20de%20SST%20pelo%20site%20da%20SERMST%20e%20quero%20confirmar%20o%20recebimento."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp btn-whatsapp-solid flex w-full"
              >
                Confirmar pelo WhatsApp
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <p className="mb-4 text-sm font-black uppercase tracking-widest text-brand-900">
                Enquanto aguarda
              </p>
              <nav className="space-y-3" aria-label="Links úteis">
                {[
                  { href: '/assinaturas', label: 'Ver detalhes dos planos de SST' },
                  { href: '/saude/pcmso-programa-controle-medico', label: 'Como funciona o PCMSO' },
                  { href: '/rh/calculadora-cnae-grau-de-risco', label: 'Calculadora de risco por CNAE' },
                  { href: '/servicos/gestao-esocial-s2220-s2240', label: 'Gestão de eSocial SST' },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 text-sm font-semibold text-brand-900 transition-colors hover:text-accent-pink"
                  >
                    <span aria-hidden="true" className="text-accent-pink">→</span>
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
