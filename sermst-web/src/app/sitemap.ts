import { MetadataRoute } from "next";
import { servicosSEO, localidades, saudeSEO, rhDoresSEO, dicionarioSEO } from "@/lib/data/seo-content";
import { trainingsData } from "@/lib/data/treinamentos-data";
import { siteImages } from "@/lib/site-images";
import { normasKnown } from "./normas/[slug]/page";

const BASE_URL = "https://sermst.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // ── Páginas estáticas ─────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
      images: [
        `${BASE_URL}${siteImages.home.heroClinic.src}`,
        `${BASE_URL}${siteImages.home.ownerPortrait.src}`,
        `${BASE_URL}${siteImages.home.medicalStructure.src}`,
        `${BASE_URL}${siteImages.home.clinicOperations.src}`,
        `${BASE_URL}${siteImages.home.occupationalLab.src}`,
        `${BASE_URL}${siteImages.home.clinicalService.src}`,
      ],
    },
    {
      url: `${BASE_URL}/quem-somos`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${BASE_URL}${siteImages.institutional.corporateHealthHero.src}`],
    },
    {
      url: `${BASE_URL}/a-clinica`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [
        `${BASE_URL}${siteImages.institutional.corporateHealthHero.src}`,
        `${BASE_URL}${siteImages.institutional.operationTeam.src}`,
      ],
    },
    { url: `${BASE_URL}/contato`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/solucoes`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/saude`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/saude/clinica-exame-admissional-sao-paulo`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/saude/onde-fazer-exame-toxicologico-sao-paulo`, lastModified: now, changeFrequency: "monthly", priority: 0.72 },
    { url: `${BASE_URL}/saude/valor-exame-toxicologico-cnh`, lastModified: now, changeFrequency: "monthly", priority: 0.72 },
    { url: `${BASE_URL}/rh`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/normas`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/dicionario`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ];

  // ── Páginas base de servicos ──────────────────────────────────────────────
  const servicoBasePages: MetadataRoute.Sitemap = Object.keys(servicosSEO).map((servico) => ({
    url: `${BASE_URL}/servicos/${servico}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // ── Páginas geo-SEO ───────────────────────────────────────────────────────
  const geoPages: MetadataRoute.Sitemap = Object.keys(servicosSEO).flatMap((servico) =>
    localidades.map((localidade) => ({
      url: `${BASE_URL}/servicos/${servico}/${localidade.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: localidade.isHub ? 0.9 : 0.75,
    }))
  );

  // ── Treinamentos ──────────────────────────────────────────────────────────
  const treinamentoPages: MetadataRoute.Sitemap = trainingsData.map((treinamento) => ({
    url: `${BASE_URL}/treinamentos/${treinamento.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  // ── Hub de Saúde Ocupacional ─────────────────────────────────────────────
  // Slugs already declared with higher priority in saúdeStaticPages — exclude from dynamic list
  const saúdeStaticSlugs = new Set([
    "pcmso-programa-controle-medico",
    "medicina-do-trabalho-guia",
    "aso-atestado-saude-ocupacional",
    "gestao-sst",
    "insalubridade-o-que-e-adicional",
  ]);
  const saudePages: MetadataRoute.Sitemap = Object.keys(saudeSEO)
    .filter((slug) => !saúdeStaticSlugs.has(slug))
    .map((slug) => ({
      url: `${BASE_URL}/saude/${slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    }));

  // ── Hub RH/DP ─────────────────────────────────────────────────────────────
  // Slugs already declared with higher priority in rhStaticPages — exclude from dynamic list
  const rhStaticSlugs = new Set([
    "lista-cnae-brasil",
    "evitar-processos-trabalhistas",
    "carta-demissao",
    "carta-recomendacao",
    "treinamento-gerentes",
  ]);
  const rhSlugs = ["funcao-encarregado", ...Object.keys(rhDoresSEO)].filter(
    (slug) => !rhStaticSlugs.has(slug)
  );
  const rhPages: MetadataRoute.Sitemap = rhSlugs.map((slug) => ({
    url: `${BASE_URL}/rh/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ── Dicionário SST ────────────────────────────────────────────────────────
  const dicionarioPages: MetadataRoute.Sitemap = Object.keys(dicionarioSEO).map((slug) => ({
    url: `${BASE_URL}/dicionario/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.55,
  }));

  // ── Normas regulamentadoras ───────────────────────────────────────────────
  const normasPages: MetadataRoute.Sitemap = Object.keys(normasKnown).map((slug) => ({
    url: `${BASE_URL}/normas/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ── Páginas RH estáticas (fora do rhDoresSEO) ───────────────────────────────
  const rhStaticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/rh/calculadora-cnae-grau-de-risco`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/rh/lista-cnae-brasil`,              lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    { url: `${BASE_URL}/rh/domicilio-eletronico-trabalhista-det`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/rh/declaracao-inexistencia-risco-dir`,    lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/rh/lei-15377-2026-vacinacao-hpv-exames-preventivos`, lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/rh/evitar-processos-trabalhistas`,  lastModified: now, changeFrequency: "monthly", priority: 0.70 },
    { url: `${BASE_URL}/rh/carta-demissao`,                 lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE_URL}/rh/carta-recomendacao`,             lastModified: now, changeFrequency: "monthly", priority: 0.60 },
    { url: `${BASE_URL}/rh/treinamento-gerentes`,           lastModified: now, changeFrequency: "monthly", priority: 0.60 },
  ];

  // ── Páginas Saúde estáticas (fora do saúdeSEO) ──────────────────────────────
  const saúdeStaticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/saude/pcmso-programa-controle-medico`,      lastModified: now, changeFrequency: "monthly", priority: 0.80 },
    { url: `${BASE_URL}/saude/medicina-do-trabalho-guia`,           lastModified: now, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/saude/aso-atestado-saude-ocupacional`,      lastModified: now, changeFrequency: "monthly", priority: 0.70 },
    { url: `${BASE_URL}/saude/gestao-sst`,                          lastModified: now, changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE_URL}/saude/insalubridade-o-que-e-adicional`,     lastModified: now, changeFrequency: "monthly", priority: 0.78 },
  ];

  // ── Páginas de equipe e institucionais ──────────────────────────────────────
  const equipePages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/equipe/felipe-sannino`,    lastModified: now, changeFrequency: "yearly",  priority: 0.70 },
    { url: `${BASE_URL}/equipe/luiz-cesar-sannino`,lastModified: now, changeFrequency: "yearly",  priority: 0.70 },
    { url: `${BASE_URL}/blog`,                     lastModified: now, changeFrequency: "weekly",  priority: 0.60 },
  ];

  return [
    ...staticPages,
    ...servicoBasePages,
    ...geoPages,
    ...treinamentoPages,
    ...saudePages,
    ...saúdeStaticPages,
    ...rhPages,
    ...rhStaticPages,
    ...dicionarioPages,
    ...normasPages,
    ...equipePages,
  ];
}
