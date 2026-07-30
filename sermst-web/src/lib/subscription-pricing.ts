export type SubscriptionPlanId = 'base' | 'essencial' | 'total';

export const subscriptionPricing = {
  base: {
    name: 'Plano Base',
    minimum: 159,
    monthlyPerAdditionalEmployee: 7,
  },
  essencial: {
    name: 'Plano Essencial',
    minimum: 199,
    monthlyPerAdditionalEmployee: 13,
  },
  total: {
    name: 'Plano Gestão Total',
    minimum: 239,
    monthlyPerAdditionalEmployee: 15,
  },
} as const satisfies Record<
  SubscriptionPlanId,
  {
    name: string;
    minimum: number;
    monthlyPerAdditionalEmployee: number;
  }
>;

export function calculateSubscriptionMonthly(
  planId: SubscriptionPlanId,
  employees: number,
) {
  const normalizedEmployees = Math.min(
    Math.max(Math.round(Number.isFinite(employees) ? employees : 1), 1),
    99,
  );
  const plan = subscriptionPricing[planId];

  return (
    plan.minimum +
    (normalizedEmployees - 1) * plan.monthlyPerAdditionalEmployee
  );
}
