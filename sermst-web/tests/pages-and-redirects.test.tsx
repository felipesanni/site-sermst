import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import nextConfig from '../next.config';
import HomePage from '@/app/page';
import ContatoPage from '@/app/contato/page';
import CalculadoraCnaePage from '@/app/rh/calculadora-cnae-grau-de-risco/page';
import ExamePeriodicoPage from '@/app/saude/importancia-do-exame-periodico/page';

describe('paginas principais', () => {
  it('renderiza a home com a proposta central do negocio', () => {
    render(<HomePage />);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/SST/i);
    expect(screen.getByRole('link', { name: /Solicitar/i })).toBeInTheDocument();
  });

  it('renderiza a pagina de contato com formulario e CTA da calculadora', () => {
    render(<ContatoPage />);

    expect(
      screen.getByText(/Fale com a SERMST para regularizar SST/i),
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Usar Calculadora de Risco/i })).toBeInTheDocument();
  });

  it('renderiza a pagina da calculadora com a promessa da ferramenta', () => {
    render(<CalculadoraCnaePage />);

    expect(screen.getByText(/Sua empresa/i)).toBeInTheDocument();
    expect(screen.getByText(/Digite o CNPJ e descubra/i)).toBeInTheDocument();
  });

  it('renderiza a pagina de exame periodico com resposta direta e FAQ', () => {
    render(<ExamePeriodicoPage />);

    expect(
      screen.getByRole('heading', {
        name: /O que é o exame periódico ocupacional e para que serve/i,
      }),
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Resposta direta/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Neste artigo/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /Perguntas frequentes/i })).toBeInTheDocument();
  });
});

describe('redirects criticos', () => {
  it('preserva destinos importantes de SEO e campanha', async () => {
    const redirects = await nextConfig.redirects?.();

    expect(redirects).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          source: '/lp-aso',
          destination: '/contato',
          permanent: true,
        }),
        expect.objectContaining({
          source: '/servicos/exame-admissional',
          destination: '/servicos/exame-admissional-expresso/sao-paulo',
          permanent: true,
        }),
        expect.objectContaining({
          source: '/medicina-do-trabalho/exame-admissional-perto-de-mim',
          destination: '/servicos/exame-admissional-expresso/sao-paulo',
          permanent: true,
        }),
        expect.objectContaining({
          source: '/exames/como-funciona-o-exame-admissional/',
          destination: '/exames/como-funciona-o-exame-admissional',
          permanent: true,
        }),
        expect.objectContaining({
          source: '/exames/funcao-encarregado-responsabilidades-e-perfil-ideal/',
          destination: '/rh/funcao-encarregado',
          permanent: true,
        }),
        expect.objectContaining({
          source: '/medicina-do-trabalho/nr-1-atualizada/',
          destination: '/normas/nr-01-pgr-atualizada',
          permanent: true,
        }),
      ]),
    );
  });
});
