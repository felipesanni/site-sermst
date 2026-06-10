import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CnaeCalculator } from '@/components/sections/cnae-calculator';
import { cnaeData } from '@/lib/data/cnae-data';

const sampleEntry = cnaeData[0];

describe('CnaeCalculator', () => {
  beforeEach(() => {
    window.localStorage.clear();
    window.sessionStorage.clear();
    window.history.replaceState({}, '', '/rh/calculadora-cnae-grau-de-risco');
  });

  it('consulta o CNPJ, encontra o CNAE e mostra o enquadramento de NR-05', async () => {
    const user = userEvent.setup();
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(
      new Response(
        JSON.stringify({
          razaoSocial: 'Empresa da Calculadora',
          cnaeFiscal: sampleEntry.codigo,
          cnaeDescricao: sampleEntry.descricao,
        }),
        { status: 200 },
      ),
    );

    render(<CnaeCalculator />);

    await user.type(screen.getByPlaceholderText('00.000.000/0001-00'), '12345678000195');
    await user.type(screen.getByPlaceholderText('Ex: 28'), '100');

    expect(await screen.findByText('Empresa da Calculadora')).toBeInTheDocument();
    expect(screen.getByText(sampleEntry.descricao)).toBeInTheDocument();
    expect(screen.getByText(/CIPA obrigatória/i)).toBeInTheDocument();
    expect(screen.getAllByText(/100 empregados/i)).not.toHaveLength(0);
  });

  it('avisa quando nao consegue consultar o CNPJ', async () => {
    const user = userEvent.setup();
    vi.spyOn(globalThis, 'fetch').mockRejectedValue(new Error('network down'));

    render(<CnaeCalculator />);

    await user.type(screen.getByPlaceholderText('00.000.000/0001-00'), '12345678000195');

    await waitFor(() => {
      expect(
        screen.getByText(/Não foi possível consultar este CNPJ/i),
      ).toBeInTheDocument();
    });
  });
});
