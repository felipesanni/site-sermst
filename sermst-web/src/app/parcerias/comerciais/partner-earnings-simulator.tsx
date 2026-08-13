'use client';

import { useMemo, useState } from 'react';
import { BadgeCheck, Calculator, TrendingUp } from 'lucide-react';
import { calculateSubscriptionMonthly } from '@/lib/subscription-pricing';

const currency = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const automaticPlanMix = [
  { id: 'base' as const, weight: 0.35 },
  { id: 'essencial' as const, weight: 0.4 },
  { id: 'total' as const, weight: 0.25 },
];

const contractShortcuts = [10, 20, 30, 40];
const simulatedEmployeesPerClient = 20;

export function PartnerEarningsSimulator() {
  const [contracts, setContracts] = useState(20);

  const result = useMemo(() => {
    const averageMonthly = automaticPlanMix.reduce(
      (total, plan) =>
        total +
        calculateSubscriptionMonthly(plan.id, simulatedEmployeesPerClient) *
          plan.weight,
      0,
    );
    const firstPayment = averageMonthly * 0.5;
    const retentionPayment = averageMonthly * 0.25;

    return {
      perClient: firstPayment + retentionPayment,
      firstPaymentTotal: firstPayment * contracts,
      retentionPaymentTotal: retentionPayment * contracts,
      total: (firstPayment + retentionPayment) * contracts,
    };
  }, [contracts]);

  return (
    <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-xl shadow-brand-900/5">
      <div className="border-b border-slate-200 bg-brand-900 px-6 py-6 text-white md:px-8">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-accent-pink text-white">
            <Calculator className="h-6 w-6" aria-hidden="true" />
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-slate-300">
              Simulação de ganhos
            </p>
            <h3 className="mt-1 text-2xl font-black">
              Veja quanto cada volume de contratos pode gerar
            </h3>
          </div>
        </div>
      </div>

      <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-[0.88fr_1.12fr]">
        <div className="space-y-6">
          <div className="rounded-2xl border border-sky-200 bg-sky-50 p-4">
            <p className="text-sm font-black text-brand-900">
              A conta é automática
            </p>
            <p className="mt-1 text-sm leading-relaxed text-slate-600">
              Você escolhe apenas a quantidade de contratos. Os valores são
              exemplos calculados automaticamente com uma carteira variada de
              planos.
            </p>
          </div>

          <fieldset>
            <legend className="mb-3 text-sm font-black text-brand-900">
              Simule um volume de contratos
            </legend>
            <div className="grid grid-cols-2 gap-3">
              {contractShortcuts.map((amount) => {
                const active = contracts === amount;
                const projectedAmount = result.perClient * amount;
                return (
                  <button
                    key={amount}
                    type="button"
                    onClick={() => setContracts(amount)}
                    aria-pressed={active}
                    className={`rounded-2xl border px-4 py-4 text-left transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-pink focus-visible:ring-offset-2 ${
                      active
                        ? 'border-accent-pink bg-accent-pink text-white'
                        : 'border-slate-200 bg-slate-50 text-brand-900 hover:border-slate-300 hover:bg-slate-100'
                    }`}
                  >
                    <span className="block text-lg font-black">
                      {amount} contratos
                    </span>
                    <span
                      className={`mt-1 block text-sm font-bold ${
                        active ? 'text-white/85' : 'text-slate-500'
                      }`}
                    >
                      {currency.format(projectedAmount)}
                    </span>
                  </button>
                );
              })}
            </div>
          </fieldset>

          <div className="rounded-2xl border-l-4 border-accent-pink bg-brand-900 p-5 text-white">
            <p className="text-xl font-black">
              Seu ganho cresce com o seu volume.
            </p>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              Com mais contratos e uma equipe vendendo com você, o potencial
              continua crescendo.
            </p>
          </div>
        </div>

        <div className="flex flex-col rounded-[1.5rem] bg-slate-50 p-5 md:p-6">
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                50% da primeira mensalidade
              </p>
              <p className="mt-2 text-2xl font-black text-brand-900">
                {currency.format(result.firstPaymentTotal)}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                total para {contracts} contratos
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4">
              <p className="text-xs font-black uppercase tracking-[0.14em] text-slate-500">
                Aos 90 dias ativos
              </p>
              <p className="mt-2 text-2xl font-black text-brand-900">
                {currency.format(result.retentionPaymentTotal)}
              </p>
              <p className="mt-1 text-xs text-slate-500">
                total para {contracts} contratos
              </p>
            </div>
          </div>

          <div className="mt-3 rounded-2xl bg-brand-900 p-5 text-white">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-300">
                  Potencial das vendas simuladas
                </p>
                <p className="mt-1 text-4xl font-black">
                  {currency.format(result.total)}
                </p>
              </div>
              <TrendingUp
                className="h-7 w-7 shrink-0 text-accent-pink"
                aria-hidden="true"
              />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              50% da primeira mensalidade e mais 25% somados para o volume
              escolhido.
            </p>
          </div>

          <div className="mt-3 flex items-start gap-3 rounded-2xl border border-emerald-200 bg-emerald-50 p-4 text-emerald-900">
            <BadgeCheck
              className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600"
              aria-hidden="true"
            />
            <div>
              <p className="font-black">Você ganha desde o primeiro contrato</p>
              <p className="mt-1 text-sm leading-relaxed">
                Não existe quantidade mínima para receber. Com cinco ou mais
                contratos no mês, o acelerador pode aumentar ainda mais o
                ganho.
              </p>
            </div>
          </div>

          <p className="mt-auto pt-4 text-xs leading-relaxed text-slate-500">
            Simulação ilustrativa com base em uma carteira variada. O
            acelerador de volume não está incluído no total.
          </p>
        </div>
      </div>
    </div>
  );
}
