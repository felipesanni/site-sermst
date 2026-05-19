'use client';

import { FormEvent, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Script from 'next/script';
import { AlertCircle, CheckCircle2, Loader2 } from 'lucide-react';

type Status = 'idle' | 'submitting' | 'success' | 'error';

type AttributionSnapshot = {
  page: string;
  referrer: string;
  capturedAt: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  utm_term: string;
  gclid: string;
  fbclid: string;
  utm_id: string;
};

type StoredAttribution = {
  first: AttributionSnapshot;
  last: AttributionSnapshot;
};

const ATTRIBUTION_KEY = 'sermst_attribution_v1';
const FORM_STARTED_AT_KEY = 'sermst_form_started_at_v1';
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || '';

function buildSnapshot(): AttributionSnapshot {
  const params = new URLSearchParams(window.location.search);

  return {
    page: window.location.href,
    referrer: document.referrer || '',
    capturedAt: new Date().toISOString(),
    utm_source: params.get('utm_source') || '',
    utm_medium: params.get('utm_medium') || '',
    utm_campaign: params.get('utm_campaign') || '',
    utm_content: params.get('utm_content') || '',
    utm_term: params.get('utm_term') || '',
    gclid: params.get('gclid') || '',
    fbclid: params.get('fbclid') || '',
    utm_id: params.get('utm_id') || '',
  };
}

function hasAttributionSignal(snapshot: AttributionSnapshot) {
  return Boolean(
    snapshot.utm_source ||
      snapshot.utm_medium ||
      snapshot.utm_campaign ||
      snapshot.utm_content ||
      snapshot.utm_term ||
      snapshot.gclid ||
      snapshot.fbclid ||
      snapshot.utm_id,
  );
}

const dores = [
  { v: 'admissional', l: 'Preciso de exame admissional rápido' },
  { v: 'pcmso-pgr', l: 'Regularizar PCMSO, PGR ou LTCAT' },
  { v: 'esocial', l: 'eSocial SST travado ou com pendência' },
  { v: 'treinamento', l: 'Treinamentos NR / CIPA / brigada' },
  { v: 'perícia', l: 'Pericia trabalhista / assistente técnico' },
  { v: 'consultoria-completa', l: 'Trocar de consultoria atual' },
  { v: 'outro', l: 'Outro motivo' },
];

const portes = [
  { v: 'ate-20', l: 'Ate 20 funcionários' },
  { v: '21-100', l: 'De 21 a 100 funcionários' },
  { v: '101-500', l: 'De 101 a 500 funcionários' },
  { v: '500-mais', l: 'Mais de 500 funcionários' },
];

export function LeadForm() {
  const pathname = usePathname();
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');
  const [attribution, setAttribution] = useState<StoredAttribution | null>(null);
  const [turnstileToken, setTurnstileToken] = useState('');

  useEffect(() => {
    const current = buildSnapshot();
    const hasSignal = hasAttributionSignal(current);

    let next: StoredAttribution;

    try {
      const storedRaw = window.localStorage.getItem(ATTRIBUTION_KEY);
      const stored = storedRaw ? (JSON.parse(storedRaw) as StoredAttribution) : null;

      if (stored) {
        const shouldPromoteFirstTouch =
          hasSignal && !hasAttributionSignal(stored.first);

        next = {
          first: shouldPromoteFirstTouch ? current : stored.first,
          last: hasSignal
            ? current
            : {
                ...stored.last,
                page: window.location.href,
              },
        };
      } else {
        next = {
          first: current,
          last: current,
        };
      }
    } catch {
      next = {
        first: current,
        last: current,
      };
    }

    window.localStorage.setItem(ATTRIBUTION_KEY, JSON.stringify(next));
    if (!window.sessionStorage.getItem(FORM_STARTED_AT_KEY)) {
      window.sessionStorage.setItem(FORM_STARTED_AT_KEY, String(Date.now()));
    }
    setAttribution(next);
  }, []);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY) return;

    const syncWidget = () => {
      if (typeof window === 'undefined') return;
      const api = (window as Window & {
        turnstile?: {
          render: (selector: string, options: Record<string, unknown>) => string;
        };
      }).turnstile;

      if (!api) return;

      const container = document.getElementById('sermst-turnstile');
      if (!container || container.dataset.rendered === 'true') return;

      api.render('#sermst-turnstile', {
        sitekey: TURNSTILE_SITE_KEY,
        theme: 'light',
        callback: (token: string) => setTurnstileToken(token),
        'expired-callback': () => setTurnstileToken(''),
        'error-callback': () => setTurnstileToken(''),
      });

      container.dataset.rendered = 'true';
    };

    syncWidget();
    const timer = window.setInterval(syncWidget, 500);
    return () => window.clearInterval(timer);
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    setError('');

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const res = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || 'Não foi possível enviar.');
      }

      setStatus('success');
      (e.target as HTMLFormElement).reset();

      // Dispara evento de conversão para GTM → GA4 "Novo Lead" + Facebook Pixel
      if (typeof window !== 'undefined') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'sermst_lead_generated' });
      }
    } catch (err) {
      setStatus('error');
      setError(err instanceof Error ? err.message : 'Erro inesperado.');
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center lg:p-10">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="mb-3 text-2xl font-black text-brand-900">
          Recebemos sua mensagem.
        </h3>
        <p className="mx-auto mb-6 max-w-md leading-relaxed text-slate-700">
          Em breve a equipe comercial da SERMST entra em contato para entender porte, urgencia e operação antes de indicar o melhor caminho.
        </p>
        <p className="text-sm text-slate-500">
          Se for urgente, fale agora pelo WhatsApp:{' '}
          <a
            href={`https://wa.me/5511915146447?text=${encodeURIComponent('Olá! Acabei de preencher o formulário no site da SERMST (página: ' + pathname + ') e gostaria de falar com a equipe comercial.')}`}
            className="font-bold text-accent-pink underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            (11) 91514-6447
          </a>
        </p>
      </div>
    );
  }

  return (
    <>
      {TURNSTILE_SITE_KEY ? (
        <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit" strategy="afterInteractive" />
      ) : null}

      <form onSubmit={onSubmit} className="space-y-6 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
      <div>
        <span className="mb-3 block text-xs font-black uppercase tracking-[0.2em] text-accent-pink">
          Diagnóstico comercial
        </span>
        <h3 className="mb-2 text-2xl font-black leading-tight text-brand-900 md:text-3xl">
          Conte o cenário da empresa e a SERMST volta com clareza comercial e técnica
        </h3>
        <p className="text-sm leading-relaxed text-slate-600">
          Resposta da equipe comercial em ate 1 dia util. Se houver urgencia de admissão, eSocial travado ou risco de fiscalização, descreva isso no formulario.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="nome" className="mb-2 block text-sm font-bold text-brand-900">
            Seu nome
          </label>
          <input
            id="nome"
            name="nome"
            type="text"
            required
            autoComplete="name"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/20"
          />
        </div>
        <div>
          <label htmlFor="empresa" className="mb-2 block text-sm font-bold text-brand-900">
            Empresa
          </label>
          <input
            id="empresa"
            name="empresa"
            type="text"
            required
            autoComplete="organization"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/20"
          />
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-bold text-brand-900">
            E-mail corporativo
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/20"
          />
        </div>
        <div>
          <label htmlFor="telefone" className="mb-2 block text-sm font-bold text-brand-900">
            Telefone (com DDD)
          </label>
          <input
            id="telefone"
            name="telefone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(11) 91234-5678"
            className="w-full rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/20"
          />
        </div>
      </div>

      <div>
        <label htmlFor="porte" className="mb-2 block text-sm font-bold text-brand-900">
          Quantos funcionários a empresa tem?
        </label>
        <select
          id="porte"
          name="porte"
          required
          defaultValue=""
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/20"
        >
          <option value="" disabled>
            Selecione o porte
          </option>
          {portes.map((p) => (
            <option key={p.v} value={p.v}>
              {p.l}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="dor" className="mb-2 block text-sm font-bold text-brand-900">
          Qual e a principal demanda?
        </label>
        <select
          id="dor"
          name="dor"
          required
          defaultValue=""
          className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-slate-900 transition focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/20"
        >
          <option value="" disabled>
            Selecione a demanda principal
          </option>
          {dores.map((d) => (
            <option key={d.v} value={d.v}>
              {d.l}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="mensagem" className="mb-2 block text-sm font-bold text-brand-900">
          Conte o cenário (opcional)
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          placeholder="Ex.: Tenho 80 funcionários, PGR vencido, admissão parada e pendência no eSocial..."
          className="w-full resize-none rounded-xl border border-slate-300 px-4 py-3 text-slate-900 transition focus:border-accent-pink focus:outline-none focus:ring-2 focus:ring-accent-pink/20"
        />
      </div>

      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <input type="hidden" name="landing_page" value={attribution?.first.page || ''} />
      <input type="hidden" name="conversion_page" value={typeof window !== 'undefined' ? window.location.href : ''} />
      <input type="hidden" name="original_referrer" value={attribution?.first.referrer || ''} />
      <input type="hidden" name="form_started_at" value={typeof window !== 'undefined' ? window.sessionStorage.getItem(FORM_STARTED_AT_KEY) || '' : ''} />
      <input type="hidden" name="turnstile_token" value={turnstileToken} />
      <input type="hidden" name="utm_source" value={attribution?.last.utm_source || ''} />
      <input type="hidden" name="utm_medium" value={attribution?.last.utm_medium || ''} />
      <input type="hidden" name="utm_campaign" value={attribution?.last.utm_campaign || ''} />
      <input type="hidden" name="utm_content" value={attribution?.last.utm_content || ''} />
      <input type="hidden" name="utm_term" value={attribution?.last.utm_term || ''} />
      <input type="hidden" name="gclid" value={attribution?.last.gclid || ''} />
      <input type="hidden" name="fbclid" value={attribution?.last.fbclid || ''} />
      <input type="hidden" name="utm_id" value={attribution?.last.utm_id || ''} />
      <input type="hidden" name="utm_source_first" value={attribution?.first.utm_source || ''} />
      <input type="hidden" name="utm_medium_first" value={attribution?.first.utm_medium || ''} />
      <input type="hidden" name="utm_campaign_first" value={attribution?.first.utm_campaign || ''} />
      <input type="hidden" name="utm_content_first" value={attribution?.first.utm_content || ''} />
      <input type="hidden" name="utm_term_first" value={attribution?.first.utm_term || ''} />
      <input type="hidden" name="gclid_first" value={attribution?.first.gclid || ''} />
      <input type="hidden" name="fbclid_first" value={attribution?.first.fbclid || ''} />
      <input type="hidden" name="utm_id_first" value={attribution?.first.utm_id || ''} />
      <input type="hidden" name="attribution_first_captured_at" value={attribution?.first.capturedAt || ''} />
      <input type="hidden" name="attribution_last_captured_at" value={attribution?.last.capturedAt || ''} />

      {TURNSTILE_SITE_KEY ? (
        <div className="space-y-2">
          <div id="sermst-turnstile" className="min-h-[65px]" />
          <p className="text-xs text-slate-500">
            Esta etapa ajuda a proteger o formulário contra spam automatizado.
          </p>
        </div>
      ) : null}

      {status === 'error' && (
        <div className="flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />
          <p>
            <strong>Não conseguimos enviar.</strong> {error || 'Tente novamente em alguns instantes ou use o WhatsApp.'}
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="btn-primary-safe-lg flex w-full disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === 'submitting' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Enviando...
          </>
        ) : (
          'Solicitar orçamento gratuito'
        )}
      </button>
      </form>
    </>
  );
}
