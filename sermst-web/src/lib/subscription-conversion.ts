export type SubscriptionConversionFlow = 'commercial' | 'plan';

type DispatchSubscriptionLeadEventsInput = {
  flow: SubscriptionConversionFlow;
  submissionId: string;
  planId: string;
  employees: number;
  crmConfirmed: boolean;
  crmId?: string;
};

type DispatchSubscriptionLeadEventsResult = {
  confirmedDispatched: boolean;
  deliveryAcceptedDispatched: boolean;
};

const SESSION_EVENT_PREFIX = 'sermst:subscription:event:';
const memoryEventKeys = new Set<string>();

function claimEventOnce(eventKey: string): boolean {
  const key = SESSION_EVENT_PREFIX + eventKey;

  try {
    if (window.sessionStorage.getItem(key)) return false;
    window.sessionStorage.setItem(key, '1');
    return true;
  } catch {
    if (memoryEventKeys.has(key)) return false;
    memoryEventKeys.add(key);
    return true;
  }
}

export function dispatchSubscriptionLeadEvents(
  input: DispatchSubscriptionLeadEventsInput,
): DispatchSubscriptionLeadEventsResult {
  if (typeof window === 'undefined') {
    return { confirmedDispatched: false, deliveryAcceptedDispatched: false };
  }

  window.dataLayer = window.dataLayer || [];
  if (input.crmConfirmed) {
    const crmId = input.crmId?.trim() || '';
    const confirmedDispatched = claimEventOnce('confirmed:' + (crmId || input.submissionId));

    if (confirmedDispatched) {
      window.dataLayer.push({
        event: 'subscription_lead_confirmed',
        flow: input.flow,
        plan_id: input.planId,
        employees: input.employees,
      });
    }

    return { confirmedDispatched, deliveryAcceptedDispatched: false };
  }

  const deliveryAcceptedDispatched = claimEventOnce('accepted:' + input.submissionId);
  if (deliveryAcceptedDispatched) {
    window.dataLayer.push({
      event: 'subscription_lead_delivery_accepted',
      flow: input.flow,
      plan_id: input.planId,
      employees: input.employees,
    });
  }

  return { confirmedDispatched: false, deliveryAcceptedDispatched };
}