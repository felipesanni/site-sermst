'use client';

import { useState } from 'react';
import { ArrowRight, Calendar, CheckCircle2, ShieldAlert, Users } from 'lucide-react';
import { FadeIn } from '../ui/fade-in';

interface PenaltyCalculatorProps {
  localidade: string;
}

type EventType = 'S2220' | 'S2240';

const BASES = {
  S2220: {
    min: 402.53,
    label: 'S-2220 (monitoramento de saúde)',
    headline: 'ASO não enviado ou rotina médica fora de controle',
  },
  S2240: {
    min: 3115.0,
    label: 'S-2240 (condicoes ambientais e riscos)',
    headline: 'Risco ambiental sem lastro técnico ou evento inconsistente',
  },
} as const;

export function PenaltyCalculator({ localidade }: PenaltyCalculatorProps) {
  const [employees, setEmployees] = useState(5);
  const [monthsDelay, setMonthsDelay] = useState(2);
  const [eventType, setEventType] = useState<EventType>('S2220');
  const totalPenalty = employees * BASES[eventType].min * (1 + monthsDelay * 0.05);

  const urgencyText =
    eventType === 'S2220'
      ? 'Quando o ASO atrasa, a admissão trava, o RH perde tempo e o passivo cresce em silencio.'
      : 'Quando o risco não esta bem documentado, o problema não fica so no evento. Ele contamina laudo, eSocial e defesa futura.';

  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <FadeIn direction="right">
            <div>
              <span className="mb-6 inline-block rounded-full bg-brand-900/10 px-4 py-1.5 text-[10px] font-black uppercase tracking-[0.2em] text-brand-900">
                Simulador de risco eSocial
              </span>
              <h2 className="mb-4 text-4xl font-black leading-[0.95] tracking-tighter text-brand-900 md:text-5xl">
                Descubra o tamanho do risco
                <br />
                <span className="font-serif italic text-accent-pink">antes que ele vire multa</span>
                <span className="block font-sans not-italic text-brand-900">em {localidade}</span>
              </h2>
              <p className="mb-8 max-w-2xl text-lg leading-relaxed text-slate-600 md:text-xl">
                Use a simulacao para visualizar quanto a empresa pode estar expondo em atraso de SST. Não é cálculo jurídico definitivo, mas é um bom choque de realidade para decidir mais rápido.
              </p>

              <div className="mb-10 flex gap-4">
                <button
                  onClick={() => setEventType('S2220')}
                  className={`flex-1 rounded-2xl border-2 px-6 py-4 text-sm font-black uppercase transition-all ${
                    eventType === 'S2220'
                      ? 'border-brand-900 bg-brand-900 text-white shadow-lg'
                      : 'border-slate-100 bg-white text-slate-400 hover:border-brand-900'
                  }`}
                >
                  Multa S-2220
                </button>
                <button
                  onClick={() => setEventType('S2240')}
                  className={`flex-1 rounded-2xl border-2 px-6 py-4 text-sm font-black uppercase transition-all ${
                    eventType === 'S2240'
                      ? 'border-brand-900 bg-brand-900 text-white shadow-lg'
                      : 'border-slate-100 bg-white text-slate-400 hover:border-brand-900'
                  }`}
                >
                  Multa S-2240
                </button>
              </div>

              <div className="rounded-[2.5rem] border border-slate-100 bg-slate-50 p-8 shadow-inner">
                <p className="mb-6 text-lg font-semibold text-brand-900">{BASES[eventType].headline}</p>
                <p className="mb-8 leading-relaxed text-slate-600">{urgencyText}</p>

                <div className="space-y-8">
                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <label className="flex items-center gap-2 text-sm font-black uppercase text-brand-900">
                        <Users className="h-4 w-4" /> Funcionários afetados
                      </label>
                      <span className="rounded-lg bg-brand-900 px-4 py-1 text-lg font-black text-white">
                        {employees}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="100"
                      value={employees}
                      onChange={(e) => setEmployees(Number(e.target.value))}
                      className="h-3 w-full cursor-pointer appearance-none rounded-lg bg-brand-900/20 accent-brand-900"
                    />
                  </div>

                  <div>
                    <div className="mb-4 flex items-center justify-between">
                      <label className="flex items-center gap-2 text-sm font-black uppercase text-brand-900">
                        <Calendar className="h-4 w-4" /> Período de atraso (meses)
                      </label>
                      <span className="rounded-lg bg-brand-900 px-4 py-1 text-lg font-black text-white">
                        {monthsDelay}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="12"
                      value={monthsDelay}
                      onChange={(e) => setMonthsDelay(Number(e.target.value))}
                      className="h-3 w-full cursor-pointer appearance-none rounded-lg bg-brand-900/20 accent-brand-900"
                    />
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={0.2}>
            <div className="group relative">
              <div className="absolute -inset-4 rounded-[3.5rem] bg-gradient-to-r from-accent-pink to-brand-900 opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40" />
              <div className="relative overflow-hidden rounded-[3.5rem] border border-white/10 bg-brand-900 p-12 text-white shadow-2xl">
                <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-accent-pink/30 bg-accent-pink/20 px-4 py-2">
                  <ShieldAlert className="h-5 w-5 text-accent-pink" />
                  <span className="text-[10px] font-black uppercase tracking-widest">Estimativa de exposicao {eventType}</span>
                </div>

                <div className="mb-10">
                  <span className="mb-2 block font-bold text-slate-400">Risco financeiro estimado</span>
                  <div className="flex items-baseline gap-2 text-5xl font-black leading-none text-white md:text-7xl">
                    <span className="text-2xl leading-none text-accent-pink">R$</span>
                    {totalPenalty.toLocaleString('pt-BR', {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </div>
                </div>

                <div className="mb-10 space-y-4 border-t border-white/10 pt-8">
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="h-2 w-2 rounded-full bg-accent-pink" />
                    <p className="text-sm font-medium">Base legal: {BASES[eventType].label}</p>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="h-2 w-2 rounded-full bg-accent-pink" />
                    <p className="text-sm font-medium">Quanto mais atraso, maior o efeito composto sobre a operação</p>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="h-2 w-2 rounded-full bg-accent-pink" />
                    <p className="text-sm font-medium">A exposicao real pode subir com reincidência, fiscalização e inconsistencias técnicas</p>
                  </div>
                </div>

                <a
                  href={`https://wa.me/5511915146447?text=Quero regularizar o evento ${eventType} em ${localidade} e reduzir a exposicao estimada de R$ ${totalPenalty.toFixed(2)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-safe-lg group/btn flex w-full rounded-2xl py-6 text-xl font-black"
                  onClick={() => {
                    if (typeof window !== 'undefined') {
                      window.dataLayer = window.dataLayer || [];
                      window.dataLayer.push({
                        event: 'calculator_whatsapp_click',
                        event_type: eventType,
                        localidade: localidade,
                        employees: employees,
                        months_delay: monthsDelay,
                        penalty_value: Math.round(totalPenalty),
                      });
                    }
                  }}
                >
                  Quero reduzir esse risco
                  <ArrowRight className="h-6 w-6 transition-transform group-hover/btn:translate-x-2" />
                </a>

                <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
                  <p className="mb-3 text-sm font-bold uppercase tracking-widest text-accent-pink">
                    Melhor uso desta simulacao
                  </p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-pink" />
                      Priorizar o problema antes que ele vire urgencia jurídica.
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-pink" />
                      Dar contexto comercial para o RH e para a diretoria.
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-pink" />
                      Mostrar senioridade técnica para convencer a diretoria a agir antes da autuação.
                    </li>
                  </ul>
                </div>

                <p className="mt-6 text-center text-[10px] font-bold uppercase tracking-widest leading-relaxed text-slate-500">
                  *Estimativa ilustrativa com base em valores mínimos de referência.
                  <br />
                  Pode variar conforme gravidade, reincidência e contexto da fiscalização.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
