import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import type { EmpresarioJourney } from '@/lib/data/empresario-journey';

interface EmpresarioNextStepProps {
  currentTitle: string;
  journey: EmpresarioJourney;
}

export function EmpresarioNextStep({ currentTitle, journey }: EmpresarioNextStepProps) {
  return (
    <section
      aria-labelledby="proximo-passo-empresa"
      className="border-t border-slate-200 bg-slate-50 px-6 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-[1280px]">
        <div className="mb-10 max-w-3xl">
          <span className="kicker">Próximo passo</span>
          <h2
            id="proximo-passo-empresa"
            className="text-3xl font-black leading-tight text-brand-900 md:text-5xl"
          >
            Agora leve a informação para a rotina da empresa
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">
            Você já entendeu o conceito. Continue pela análise mais próxima da sua situação e,
            quando a necessidade estiver clara, veja a forma de organizar.
          </p>
        </div>

        <ol className="grid gap-5 lg:grid-cols-3">
          <li className="rounded-[1.75rem] border border-dashed border-slate-300 bg-white p-7">
            <div className="mb-6 flex items-center justify-between gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-sm font-black text-emerald-700">
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-emerald-700">
                Você está aqui
              </span>
            </div>
            <p className="text-xs font-black uppercase tracking-[0.15em] text-slate-400">
              1. Entenda
            </p>
            <h3 className="mt-3 text-xl font-black leading-snug text-brand-900">
              {currentTitle}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Conceito, diferenças, cuidados e fontes oficiais reunidos nesta leitura.
            </p>
          </li>

          <li className="rounded-[1.75rem] border-2 border-accent-pink bg-white p-7 shadow-[0_18px_45px_-28px_rgba(227,27,69,0.65)]">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-accent-pink text-sm font-black text-white">
              2
            </div>
            <p className="text-xs font-black uppercase tracking-[0.15em] text-accent-pink">
              Avalie o impacto
            </p>
            <h3 className="mt-3 text-2xl font-black leading-snug text-brand-900">
              {journey.awareness.title}
            </h3>
            <p className="mt-4 leading-relaxed text-slate-600">
              {journey.awareness.description}
            </p>
            <Link
              href={journey.awareness.href}
              className="mt-6 inline-flex items-center gap-2 font-black text-accent-pink hover:underline"
            >
              {journey.awareness.label}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </li>

          <li className="rounded-[1.75rem] bg-brand-900 p-7 text-white shadow-[0_20px_50px_-28px_rgba(11,19,60,0.75)]">
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-sm font-black text-white">
              3
            </div>
            <p className="text-xs font-black uppercase tracking-[0.15em] text-accent-pink">
              Organize a solução
            </p>
            <h3 className="mt-3 text-2xl font-black leading-snug text-white">
              {journey.conversion.title}
            </h3>
            <p className="mt-4 leading-relaxed text-slate-300">
              {journey.conversion.description}
            </p>
            <Link
              href={journey.conversion.href}
              className="mt-6 inline-flex items-center gap-2 font-black text-white hover:text-accent-pink"
            >
              {journey.conversion.label}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Link>
          </li>
        </ol>
      </div>
    </section>
  );
}
