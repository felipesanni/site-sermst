import type { NextConfig } from "next";

/**
 * SERMST - Configuracao Next.js
 *
 * Os redirects 301 abaixo preservam o SEO conquistado no site WordPress antigo.
 * Fonte: Google Search Console (16 meses) - 42 URLs com cliques + URLs com alta
 * impressao. Mapeamento documentado em Apoio/inventario-migracao.md.
 *
 * Regras:
 * - Tudo que tem trafego B2B vai para o equivalente novo (saude/rh/servicos/normas)
 * - DR Exames, particular, convenio e DETRAN -> home (escopo fora do B2B)
 * - Tags, categorias e author do WP -> home
 * - Geo-bairro (3 paginas, 120 cliques) -> /servicos/exame-admissional-expresso/sao-paulo
 *
 * IMPORTANTE: Antes do go-live, validar que /lp-aso (destino dos Google Ads atuais)
 * esta coberta para nao queimar budget de anuncios em 404.
 */

const securityHeaders = [
  { key: 'X-DNS-Prefetch-Control', value: 'on' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net",
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      "font-src 'self' https://fonts.gstatic.com",
      "img-src 'self' data: blob: https:",
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://hooks.zapier.com",
      "frame-src 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join('; '),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },

  async redirects() {
    return [
      { source: "/sao-paulo/pinheiros/clinica-para-exame-admissional-em-pinheiros", destination: "/servicos/exame-admissional-expresso/sao-paulo", permanent: true },
      { source: "/sao-paulo/onde-realizar-exame-admissional-na-liberdade-sao-paulo", destination: "/servicos/exame-admissional-expresso/sao-paulo", permanent: true },
      { source: "/sao-paulo/exame-admissional-na-vila-mariana", destination: "/servicos/exame-admissional-expresso/sao-paulo", permanent: true },
      { source: "/sermst", destination: "/quem-somos", permanent: true },
      { source: "/missao-visao-e-valores", destination: "/quem-somos", permanent: true },
      { source: "/saude-ocupacional", destination: "/saude", permanent: true },
      { source: "/seguranca-do-trabalho", destination: "/servicos", permanent: true },
      { source: "/exames-ocupacionais", destination: "/servicos", permanent: true },
      { source: "/treinamentos", destination: "/servicos/treinamentos-nrs-cipa-brigada/sao-paulo", permanent: true },
      { source: "/esocial-sst", destination: "/servicos/gestao-esocial-s2220-s2240/sao-paulo", permanent: true },
      { source: "/clinicas-credenciadas", destination: "/a-clinica", permanent: true },
      { source: "/lp-aso", destination: "/contato", permanent: true },
      { source: "/saude-ocupacional/exames-ocupacionais", destination: "/servicos/exame-admissional-expresso/sao-paulo", permanent: true },
      { source: "/saude-ocupacional/exames-complementares", destination: "/servicos/exames-complementares-laboratoriais/sao-paulo", permanent: true },
      { source: "/saude-ocupacional/pcmso-nr-07", destination: "/servicos/pcmso-nr07-programa/sao-paulo", permanent: true },
      { source: "/seguranca-do-trabalho/prg-nr01-programa-geral-de-riscos", destination: "/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo", permanent: true },
      { source: "/seguranca-do-trabalho/ltcat-nr-15", destination: "/servicos/ltcat-laudo-tecnico-previdenciario/sao-paulo", permanent: true },
      { source: "/seguranca-do-trabalho/cipa-nr-05", destination: "/servicos/treinamentos-nrs-cipa-brigada/sao-paulo", permanent: true },
      { source: "/seguranca-do-trabalho/pericia-judiciaria-assistente", destination: "/servicos/pericia-trabalhista-assistente-tecnico/sao-paulo", permanent: true },
      { source: "/seguranca-do-trabalho/laudo-pgr-para-construcao-civil", destination: "/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo", permanent: true },
      { source: "/seguranca-do-trabalho/vasos-de-pressao-nr-13", destination: "/normas/nr-13-vasos-de-pressao", permanent: true },
      { source: "/seguranca-do-trabalho/insalubridade-nr-15", destination: "/normas/nr-15-insalubridade", permanent: true },
      { source: "/seguranca-do-trabalho/periculosidade-nr-16", destination: "/normas/nr-16-periculosidade", permanent: true },
      { source: "/seguranca-do-trabalho/ergonomia-nr-17", destination: "/normas/nr-17-ergonomia", permanent: true },
      { source: "/seguranca-do-trabalho/eletricidade-nr-10-e-nbr-5419", destination: "/normas/nr-10-eletricidade", permanent: true },
      { source: "/seguranca-do-trabalho/nr-18-guia-completo", destination: "/normas/nr-18-construcao-civil", permanent: true },
      { source: "/seguranca-do-trabalho/nr-35-e-nr-18", destination: "/normas/nr-35-trabalho-em-altura", permanent: true },
      { source: "/seguranca-do-trabalho/ppp-portaria-3-214-78-do-mte", destination: "/normas/ppp-eletronico", permanent: true },
      { source: "/seguranca-do-trabalho/pgrs-prgss", destination: "/normas/pgrs-residuos", permanent: true },
      { source: "/medicina-do-trabalho/exame-admissional-perto-de-mim", destination: "/servicos/exame-admissional-expresso/sao-paulo", permanent: true },
      { source: "/medicina-do-trabalho/o-que-e-saude-ocupacional-um-guia-completo", destination: "/saude/o-que-e-saude-ocupacional", permanent: true },
      { source: "/medicina-do-trabalho/exame-pcmso-tudo-o-que-voce-precisa-saber-sobre-o-controle-de-saude-ocupacional", destination: "/servicos/pcmso-nr07-programa/sao-paulo", permanent: true },
      { source: "/medicina-do-trabalho/aso-tudo-o-que-voce-precisa-saber-sobre-o-atestado-de-saude-ocupacional", destination: "/dicionario/o-que-e-aso", permanent: true },
      { source: "/medicina-do-trabalho/tudo-sobre-o-aso-admissional-garantindo-a-saude-e-seguranca-no-trabalho", destination: "/dicionario/o-que-e-aso", permanent: true },
      { source: "/medicina-do-trabalho/como-funciona-o-exame-demissional-guia-completo-e-estrategico", destination: "/saude/exame-demissional-guia", permanent: true },
      { source: "/medicina-do-trabalho/funcao-do-encarregado-responsabilidades-competencias-e-impacto-no-ambiente-de-trabalho", destination: "/rh/funcao-encarregado", permanent: true },
      { source: "/medicina-do-trabalho/lista-cnae-brasil-o-guia-completo-para-empresas-e-empreendedores", destination: "/rh/lista-cnae-brasil", permanent: true },
      { source: "/medicina-do-trabalho/o-que-um-gerente-faz-funcoes-habilidades-e-impacto-nas-empresas", destination: "/rh/o-que-um-gerente-faz", permanent: true },
      { source: "/medicina-do-trabalho/como-fazer-uma-carta-de-recomendacao-guia-completo-e-pratico", destination: "/rh/carta-recomendacao", permanent: true },
      { source: "/medicina-do-trabalho/como-fazer-uma-carta-de-demissao-guia-completo-para-profissionais", destination: "/rh/carta-demissao", permanent: true },
      { source: "/medicina-do-trabalho/gestao-de-sst-a-chave-para-um-ambiente-de-trabalho-seguro-e-saudavel", destination: "/saude/gestao-sst", permanent: true },
      { source: "/medicina-do-trabalho/esocial-sst-mudou", destination: "/rh/multa-esocial-s2220", permanent: true },
      { source: "/medicina-do-trabalho/como-funciona-o-exame-admissional-tudo-o-que-voce-precisa-saber", destination: "/servicos/exame-admissional-expresso/sao-paulo", permanent: true },
      { source: "/medicina-do-trabalho/nr-07-tudo-o-que-voce-precisa-saber-sobre-o-controle-medico-de-saude-ocupacional", destination: "/servicos/pcmso-nr07-programa/sao-paulo", permanent: true },
      { source: "/medicina-do-trabalho/nr-1-atualizada", destination: "/normas/nr-01-pgr-atualizada", permanent: true },
      { source: "/uncategorized/nr-1-atualizada", destination: "/normas/nr-01-pgr-atualizada", permanent: true },
      { source: "/exames/funcao-encarregado-responsabilidades-e-perfil-ideal", destination: "/rh/funcao-encarregado", permanent: true },
      { source: "/exames/o-que-um-gerente-faz-funcoes-responsabilidades", destination: "/rh/o-que-um-gerente-faz", permanent: true },
      { source: "/exames/como-funciona-o-exame-admissional", destination: "/servicos/exame-admissional-expresso/sao-paulo", permanent: true },
      { source: "/exames/como-funciona-exame-demissional", destination: "/saude/exame-demissional-guia", permanent: true },
      { source: "/exames/como-fazer-uma-carta-de-demissao", destination: "/rh/carta-demissao", permanent: true },
      { source: "/exames/quando-demitir-um-funcionario-guia-completo-para-gestores", destination: "/rh/quando-demitir-funcionario", permanent: true },
      { source: "/exames/como-evitar-processos-trabalhistas-guia-completo-para-empresas-e-rh", destination: "/rh/evitar-processos-trabalhistas", permanent: true },
      { source: "/exames/como-treinar-gerentes-guia-completo-para-desenvolver-lideres-de-alto-desempenho", destination: "/rh/treinamento-gerentes", permanent: true },
      { source: "/exames/o-que-sao-epis-entenda-os-equipamentos-de-protecao", destination: "/saude/o-que-sao-epis", permanent: true },
      { source: "/exames/onde-fazer-exame-admissional", destination: "/servicos/exame-admissional-expresso/sao-paulo", permanent: true },
      { source: "/exames/gestao-de-sst-o-guia-completo-para-empresas-que-buscam-seguranca", destination: "/saude/gestao-sst", permanent: true },
      { source: "/exames/exame-toxicologico-guia-completo-para-motoristas-e-empresas", destination: "/servicos/exame-toxicologico-clt/sao-paulo", permanent: true },
      { source: "/exames/audiometria-ocupacional", destination: "/servicos/audiometria-ocupacional-clinica/sao-paulo", permanent: true },
      { source: "/exames/nr07-guia-completo-da-norma-regulamentadora-no-7", destination: "/servicos/pcmso-nr07-programa/sao-paulo", permanent: true },
      { source: "/exames/exame-toxicologico-o-que-voce-precisa-saber", destination: "/servicos/exame-toxicologico-clt/sao-paulo", permanent: true },
      { source: "/exames/pcmso-tudo-o-que-voce-precisa-saber-sobre-o-programa-de-controle-medico", destination: "/servicos/pcmso-nr07-programa/sao-paulo", permanent: true },
      { source: "/exames-clinicos/eletrocardiograma-de-alta-resolucao", destination: "/servicos/exames-complementares-laboratoriais/sao-paulo", permanent: true },
      { source: "/exames-clinicos/polissonografia", destination: "/servicos/exames-complementares-laboratoriais/sao-paulo", permanent: true },
      { source: "/exames-clinicos/audiometria", destination: "/servicos/audiometria-ocupacional-clinica/sao-paulo", permanent: true },
      { source: "/exames-clinicos/espirometria", destination: "/servicos/exames-complementares-laboratoriais/sao-paulo", permanent: true },
      { source: "/exames-clinicos/eletroencefalograma", destination: "/servicos/exames-complementares-laboratoriais/sao-paulo", permanent: true },
      { source: "/exames-clinicos/holter-e-mapa-de-24-horas", destination: "/servicos/exames-complementares-laboratoriais/sao-paulo", permanent: true },
      { source: "/exames-laboratoriais/exame-toxicologico-ocupacional", destination: "/servicos/exame-toxicologico-clt/sao-paulo", permanent: true },
      { source: "/exames-laboratoriais/contraprova-toxicologicos", destination: "/servicos/exame-toxicologico-clt/sao-paulo", permanent: true },
      { source: "/servicos/exames-admissionais", destination: "/servicos/exame-admissional-expresso/sao-paulo", permanent: true },
      { source: "/servicos/exame-admissional", destination: "/servicos/exame-admissional-expresso/sao-paulo", permanent: true },
      { source: "/blog", destination: "/saude", permanent: true },
      { source: "/blog/cipa-como-implementar-na-minha-empresa-2", destination: "/servicos/treinamentos-nrs-cipa-brigada/sao-paulo", permanent: true },
      { source: "/blog/seguranca-do-trabalho-o-que-e-cipa", destination: "/servicos/treinamentos-nrs-cipa-brigada/sao-paulo", permanent: true },
      { source: "/blog/o-perfil-profissiografico-ppp-agora-sera-digital", destination: "/normas/ppp-eletronico", permanent: true },
      { source: "/blog/a-partir-de-que-dia-as-movimentacoes-de-sst-aparecem-no-ppp-eletronico", destination: "/normas/ppp-eletronico", permanent: true },
      { source: "/blog/o-esocial-sst-ja-e-obrigatorio-sua-empresa-esta-preparada", destination: "/servicos/gestao-esocial-s2220-s2240/sao-paulo", permanent: true },
      { source: "/blog/saude-ocupacional-o-que-e-o-esocial", destination: "/servicos/gestao-esocial-s2220-s2240/sao-paulo", permanent: true },
      { source: "/blog/esocial-sst-obrigatorio-a-partir-de-janeiro-de-2022", destination: "/servicos/gestao-esocial-s2220-s2240/sao-paulo", permanent: true },
      { source: "/blog/esocial-conheca-a-nossa-proposta", destination: "/servicos/gestao-esocial-s2220-s2240/sao-paulo", permanent: true },
      { source: "/blog/conheca-o-pacote-de-solucoes-esocial-da-sermst", destination: "/servicos/gestao-esocial-s2220-s2240/sao-paulo", permanent: true },
      { source: "/blog/esocial-periodo-de-adaptacao-era-para-adaptar", destination: "/servicos/gestao-esocial-s2220-s2240/sao-paulo", permanent: true },
      { source: "/blog/e-social-o-prazo-esta-no-fim", destination: "/servicos/gestao-esocial-s2220-s2240/sao-paulo", permanent: true },
      { source: "/blog/saude-ocupacional-o-que-fazer-quando-trabalhadores-insistem-em-nao-utilizar-os-epis", destination: "/saude/o-que-sao-epis", permanent: true },
      { source: "/blog/saude-ocupacional-descumprimento-das-normas-pode-causar-multas-e-impasses-trabalhistas", destination: "/rh/multa-esocial-s2220", permanent: true },
      { source: "/blog/seguranca-do-trabalho-documentacoes-legais", destination: "/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo", permanent: true },
      { source: "/blog/seguranca-do-trabalho-a-relacao-com-a-medicina-do-trabalho", destination: "/saude/gestao-sst", permanent: true },
      { source: "/blog/podcast-ao-vivo-com-a-participacao-de-luiz-cesar-sannino", destination: "/quem-somos", permanent: true },
      { source: "/blog/conheca-os-principais-exames-e-avaliacoes-realizados-pela-sermst", destination: "/servicos", permanent: true },
      { source: "/dr-exames", destination: "/", permanent: true },
      { source: "/exames-realizados-pela-dr-exames", destination: "/", permanent: true },
      { source: "/exames-particulares", destination: "/", permanent: true },
      { source: "/exames-convenios", destination: "/", permanent: true },
      { source: "/atendimento-a-convenios", destination: "/", permanent: true },
      { source: "/exames-clinicos/colesterol-total-e-fracoes-soro", destination: "/", permanent: true },
      { source: "/exames-laboratoriais/hemograma-sangue-total", destination: "/", permanent: true },
      { source: "/exames-laboratoriais/exame-de-urina-primeiro-jato", destination: "/", permanent: true },
      { source: "/exames-laboratoriais/exame-toxicologico-detran", destination: "/", permanent: true },
      { source: "/blog/voce-passou-em-um-concurso-publico-agende-seu-exame-toxicologico", destination: "/", permanent: true },
      { source: "/category/sao-paulo/:bairro*", destination: "/servicos/exame-admissional-expresso/sao-paulo", permanent: true },
      { source: "/blog/page/:n*", destination: "/saude", permanent: true },
      { source: "/tag/:slug*", destination: "/", permanent: true },
      { source: "/category/:slug*", destination: "/", permanent: true },
      { source: "/author/:slug*", destination: "/", permanent: true },
      { source: "/home/attachment/:slug*", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
