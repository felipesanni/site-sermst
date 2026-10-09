import { beforeEach, describe, expect, it } from 'vitest';
import { dispatchSubscriptionLeadEvents } from '@/lib/subscription-conversion';

describe('subscription conversion events', () => {
  beforeEach(() => {
    window.sessionStorage.clear();
    window.dataLayer = [];
  });

  it('emits one event for a CRM-confirmed lead without IDs or personal data', () => {
    const input = {
      flow: 'commercial' as const,
      submissionId: 'sermst_request_1',
      planId: 'essencial',
      employees: 12,
      crmConfirmed: true,
      crmId: 'crm-real-123',
    };

    const first = dispatchSubscriptionLeadEvents(input);
    const duplicate = dispatchSubscriptionLeadEvents(input);

    expect(first).toEqual({ confirmedDispatched: true, deliveryAcceptedDispatched: false });
    expect(duplicate).toEqual({ confirmedDispatched: false, deliveryAcceptedDispatched: false });
    expect(window.dataLayer).toEqual([
      {
        event: 'subscription_lead_confirmed',
        flow: 'commercial',
        plan_id: 'essencial',
        employees: 12,
      },
    ]);
    expect(JSON.stringify(window.dataLayer)).not.toContain('crm-real-123');
    expect(JSON.stringify(window.dataLayer)).not.toContain('sermst_request_1');
  });

  it('deduplicates the same CRM confirmation across callbacks', () => {
    const base = {
      flow: 'commercial' as const,
      planId: 'total',
      employees: 100,
      crmConfirmed: true,
      crmId: 'crm-real-shared',
    };

    dispatchSubscriptionLeadEvents({ ...base, submissionId: 'sermst_first' });
    dispatchSubscriptionLeadEvents({ ...base, submissionId: 'sermst_second' });

    expect(window.dataLayer?.filter(item => item.event === 'subscription_lead_confirmed')).toHaveLength(1);
  });

  it('records accepted delivery as an interaction, not a CRM lead conversion', () => {
    const result = dispatchSubscriptionLeadEvents({
      flow: 'commercial',
      submissionId: 'sermst_delivery_only',
      planId: 'essencial',
      employees: 100,
      crmConfirmed: false,
    });

    expect(result).toEqual({ confirmedDispatched: false, deliveryAcceptedDispatched: true });
    expect(window.dataLayer?.map(item => item.event)).toEqual([
      'subscription_lead_delivery_accepted',
    ]);
  });
});