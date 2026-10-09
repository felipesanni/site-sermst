import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';
import ObrigadoAssinaturasPage from '@/app/assinaturas/obrigado/page';

describe('assinaturas thank-you page', () => {
  beforeEach(() => {
    window.dataLayer = [];
  });

  it('shows the receipt confirmation without generating a conversion on page load', () => {
    render(<ObrigadoAssinaturasPage />);

    expect(screen.getByRole('heading', { name: /recebemos sua solicitação de plano SST/i })).toBeInTheDocument();
    expect(window.dataLayer).toEqual([]);
  });
});
