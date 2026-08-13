import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { PartnerEarningsSimulator } from '@/app/parcerias/comerciais/partner-earnings-simulator';

describe('PartnerEarningsSimulator', () => {
  it('simula ganhos por volume sem exigir quantidade minima', async () => {
    const user = userEvent.setup();

    render(<PartnerEarningsSimulator />);

    expect(screen.queryByLabelText(/Plano vendido/i)).not.toBeInTheDocument();
    expect(screen.queryByLabelText(/Funcionários por empresa/i)).not.toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /20 contratos/i,
      }),
    ).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getAllByText('R$ 6.174,00')).toHaveLength(2);
    expect(screen.queryByRole('button', { name: /5 contratos/i })).not.toBeInTheDocument();
    expect(
      screen.getByText('Você ganha desde o primeiro contrato'),
    ).toBeInTheDocument();

    await user.click(
      screen.getByRole('button', {
        name: /40 contratos/i,
      }),
    );

    expect(
      screen.getByRole('button', {
        name: /40 contratos/i,
      }),
    ).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getAllByText('R$ 12.348,00')).toHaveLength(2);
  });
});
