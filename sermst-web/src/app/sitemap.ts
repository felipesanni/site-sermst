import { MetadataRoute } from "next";
import { servicosSEO, localidades, rhDoresSEO, dicionarioSEO, empresarioSEO } from "@/lib/data/seo-content";
import { trainingsData } from "@/lib/data/treinamentos-data";
import { siteImages } from "@/lib/site-images";
import { normasKnown } from "./normas/[slug]/page";

const BASE_URL = "https://sermst.com.br";
const SEO_REVISION_DATE = "2026-07-13";

function getAccurateLastModified(url: string): string | undefined {
  const revisedPages = new Set([
    BASE_URL,
    `${BASE_URL}/servicos`,
    `${BASE_URL}/normas`,
    `${BASE_URL}/normas/o-que-e-nr-07`,
    `${BASE_URL}/saude`,
    `${BASE_URL}/saude/exame-demissional`,
    `${BASE_URL}/saude/exame-periodico-ocupacional`,
    `${BASE_URL}/saude/exame-retorno-ao-trabalho`,
    `${BASE_URL}/saude/espirometria-ocupacional`,
    `${BASE_URL}/saude/eletrocardiograma-ocupacional`,
    `${BASE_URL}/saude/avaliacao-psicossocial-ocupacional`,
    `${BASE_URL}/saude/acuidade-visual-ocupacional`,
    `${BASE_URL}/saude/o-que-e-saude-ocupacional`,
    `${BASE_URL}/saude/validade-aso-admissional`,
    `${BASE_URL}/rh/carta-demissao`,
    `${BASE_URL}/rh/quando-demitir-funcionario`,
  ]);

  if (
    revisedPages.has(url) ||
    url.startsWith(`${BASE_URL}/servicos/exame-admissional-expresso`) ||
    url === `${BASE_URL}/empresario` ||
    url.startsWith(`${BASE_URL}/empresario/`)
  ) {
    return SEO_REVISION_DATE;
  }

  return undefined;
}

export default function sitemap(): MetadataRoute.Sitemap {
  // ── Páginas estáticas ─────────────────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
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
      changeFrequency: "monthly",
      priority: 0.8,
      images: [`${BASE_URL}${siteImages.institutional.corporateHealthHero.src}`],
    },
    {
      url: `${BASE_URL}/a-clinica`,
      changeFrequency: "monthly",
      priority: 0.7,
      images: [
        `${BASE_URL}${siteImages.institutional.corporateHealthHero.src}`,
        `${BASE_URL}${siteImages.institutional.operationTeam.src}`,
      ],
    },
    { url: `${BASE_URL}/contato`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/parcerias/contadores`, changeFrequency: "monthly", priority: 0.88 },
    {
      url: `${BASE_URL}/assinaturas`,
      changeFrequency: "weekly",
      priority: 0.88,
      images: [
        `${BASE_URL}${siteImages.home.clinicOperations.src}`,
        `${BASE_URL}${siteImages.home.occupationalLab.src}`,
      ],
    },
    { url: `${BASE_URL}/solucoes`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/servicos`, changeFrequency: "weekly", priority: 0.85 },
    { url: `${BASE_URL}/saude`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/exames/como-funciona-o-exame-admissional`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/saude/clinica-exame-admissional-sao-paulo`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/saude/onde-fazer-audiometria-ocupacional-sao-paulo`, changeFrequency: "monthly", priority: 0.72 },
    { url: `${BASE_URL}/saude/onde-fazer-exame-toxicologico-sao-paulo`, changeFrequency: "monthly", priority: 0.72 },
    { url: `${BASE_URL}/saude/valor-exame-toxicologico-cnh`, changeFrequency: "monthly", priority: 0.72 },
    { url: `${BASE_URL}/saude/doencas-ocupacionais`, changeFrequency: "monthly", priority: 0.78 },
    { url: `${BASE_URL}/saude/medico-do-trabalho`, changeFrequency: "monthly", priority: 0.76 },
    // ── BOFU cluster (pré-compra admissional) ─────────────────────────────
    { url: `${BASE_URL}/saude/valor-exame-admissional`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/saude/exame-admissional-precisa-de-jejum`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/saude/validade-aso-admissional`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/saude/empresa-pode-desistir-apos-exame-admissional`, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/saude/tabela-exames-admissionais-por-funcao`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/saude/exame-periodico-ocupacional`, changeFrequency: "monthly", priority: 0.82 },
    { url: `${BASE_URL}/saude/exame-retorno-ao-trabalho`, changeFrequency: "monthly", priority: 0.80 },
    { url: `${BASE_URL}/saude/espirometria-ocupacional`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/saude/avaliacao-psicossocial-ocupacional`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/saude/acuidade-visual-ocupacional`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/saude/eletrocardiograma-ocupacional`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/rh`, changeFrequency: "weekly", priority: 0.7 },
    { url: `${BASE_URL}/empresario`, changeFrequency: "weekly", priority: 0.72 },
    { url: `${BASE_URL}/normas`, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/normas/nr-06-epi`, changeFrequency: "monthly", priority: 0.82 },
    { url: `${BASE_URL}/normas/nr-37`, changeFrequency: "monthly", priority: 0.72 },
    { url: `${BASE_URL}/normas/dds`, changeFrequency: "monthly", priority: 0.74 },
    { url: `${BASE_URL}/normas/sesmt`, changeFrequency: "monthly", priority: 0.74 },
    { url: `${BASE_URL}/dicionario`, changeFrequency: "monthly", priority: 0.5 },
  ];

  // ── Páginas base de servicos ──────────────────────────────────────────────
  const servicoBasePages: MetadataRoute.Sitemap = Object.keys(servicosSEO).map((servico) => ({
    url: `${BASE_URL}/servicos/${servico}`,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // ── Páginas geo-SEO ───────────────────────────────────────────────────────
  const geoPages: MetadataRoute.Sitemap = Object.entries(servicosSEO).flatMap(([servico, data]) => {
    const allowedLocalSlugs = data.allowedLocalSlugs ?? localidades.map((localidade) => localidade.slug);

    return localidades
    .filter((localidade) => allowedLocalSlugs.includes(localidade.slug))
    .map((localidade) => ({
      url: `${BASE_URL}/servicos/${servico}/${localidade.slug}`,
      changeFrequency: "monthly" as const,
      priority: localidade.isHub ? 0.9 : 0.72,
    }));
  });

  // ── Treinamentos ──────────────────────────────────────────────────────────
  const treinamentoPages: MetadataRoute.Sitemap = trainingsData.map((treinamento) => ({
    url: `${BASE_URL}/treinamentos/${treinamento.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  // ── Saúde Ocupacional ─────────────────────────────────────────────
  // Artigos editoriais com páginas estáticas próprias. A URL antiga do exame
  // periódico não entra aqui porque redireciona para exame-periodico-ocupacional.
  const saudePages: MetadataRoute.Sitemap = [
    "o-que-e-saude-ocupacional",
    "exame-demissional",
    "o-que-sao-epis",
  ].map((slug) => ({
      url: `${BASE_URL}/saude/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.65,
  }));

  // ── Hub RH/DP ─────────────────────────────────────────────────────────────
  // Slugs already declared with higher priority in rhStaticPages: exclude from dynamic list
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
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const empresarioPages: MetadataRoute.Sitemap = Object.keys(empresarioSEO).map((slug) => ({
    url: `${BASE_URL}/empresario/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.68,
  }));

  // ── Dicionário SST ────────────────────────────────────────────────────────
  const dicionarioPages: MetadataRoute.Sitemap = Object.keys(dicionarioSEO).map((slug) => ({
    url: `${BASE_URL}/dicionario/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.55,
  }));

  // ── Normas regulamentadoras ───────────────────────────────────────────────
  const normasPages: MetadataRoute.Sitemap = Object.keys(normasKnown).map((slug) => ({
    url: `${BASE_URL}/normas/${slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // ── Páginas RH estáticas (fora do rhDoresSEO) ───────────────────────────────
  const rhStaticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/rh/calculadora-cnae-grau-de-risco`, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/rh/lista-cnae-brasil`,              changeFrequency: "monthly", priority: 0.80 },
    { url: `${BASE_URL}/rh/domicilio-eletronico-trabalhista-det`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/rh/declaracao-inexistencia-risco-dir`,    changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/rh/lei-15377-2026-vacinacao-hpv-exames-preventivos`, changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/rh/evitar-processos-trabalhistas`,  changeFrequency: "monthly", priority: 0.70 },
    { url: `${BASE_URL}/rh/o-que-um-gerente-faz`,           changeFrequency: "monthly", priority: 0.68 },
    { url: `${BASE_URL}/rh/quando-demitir-funcionario`,     changeFrequency: "monthly", priority: 0.68 },
    { url: `${BASE_URL}/rh/carta-demissao`,                 changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE_URL}/rh/carta-recomendacao`,             changeFrequency: "monthly", priority: 0.60 },
    { url: `${BASE_URL}/rh/treinamento-gerentes`,           changeFrequency: "monthly", priority: 0.60 },
  ];

  // ── Páginas Saúde estáticas (fora do saúdeSEO) ──────────────────────────────
  const saúdeStaticPages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/saude/pcmso-programa-controle-medico`,      changeFrequency: "monthly", priority: 0.80 },
    { url: `${BASE_URL}/saude/medicina-do-trabalho-guia`,           changeFrequency: "monthly", priority: 0.75 },
    { url: `${BASE_URL}/saude/aso-atestado-saude-ocupacional`,      changeFrequency: "monthly", priority: 0.70 },
    { url: `${BASE_URL}/saude/gestao-sst`,                          changeFrequency: "monthly", priority: 0.65 },
    { url: `${BASE_URL}/saude/insalubridade-o-que-e-adicional`,     changeFrequency: "monthly", priority: 0.78 },
    { url: `${BASE_URL}/saude/acidente-de-trabalho`,                changeFrequency: "monthly", priority: 0.78 },
    { url: `${BASE_URL}/saude/o-que-e-exame-toxicologico`,          changeFrequency: "monthly", priority: 0.75 },
  ];

  // ── Páginas de equipe e institucionais ──────────────────────────────────────
  const equipePages: MetadataRoute.Sitemap = [
    { url: `${BASE_URL}/equipe/felipe-sannino`,    changeFrequency: "yearly",  priority: 0.70 },
    { url: `${BASE_URL}/equipe/luiz-cesar-sannino`,changeFrequency: "yearly",  priority: 0.70 },
    { url: `${BASE_URL}/blog`,                     changeFrequency: "weekly",  priority: 0.60 },
  ];

  const entries: MetadataRoute.Sitemap = [
    ...staticPages,
    ...servicoBasePages,
    ...geoPages,
    ...treinamentoPages,
    ...saudePages,
    ...saúdeStaticPages,
    ...rhPages,
    ...rhStaticPages,
    ...empresarioPages,
    ...dicionarioPages,
    ...normasPages,
    ...equipePages,
  ];

  // Evita URLs repetidas e publica lastmod apenas quando há uma revisão real
  // de conteúdo ou snippet, sem simular atualização em todo o site.
  const uniqueEntries = Array.from(new Map(entries.map((entry) => [entry.url, entry])).values());

  return uniqueEntries.map((entry) => {
    const lastModified = getAccurateLastModified(entry.url);
    return lastModified ? { ...entry, lastModified } : entry;
  });
}
