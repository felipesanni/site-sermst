# Auditoria SEO — sermst.com.br
**Data:** Maio 2026 | **Escopo:** Full site audit

---

## Sumário Executivo

O site da SERMST tem uma **base técnica sólida**: sitemap dinâmico, canonicals em todas as páginas, structured data (MedicalOrganization + LocalBusiness + FAQPage), arquitetura em Next.js App Router com SSR, geo-pages para toda a Grande SP e um volume expressivo de conteúdo informacional nos hubs /saude, /rh e /normas.

O ponto mais forte é a estratégia de conteúdo B2B: os artigos do hub de saúde e as páginas de NR são tecnicamente mais densos que a maioria dos concorrentes diretos em SP, o que favorece ranqueamento em buscas de cauda longa (NR-18, PCMSO, LTCAT, etc.).

**As três prioridades de maior impacto imediato:**
1. Corrigir as 4 meta descriptions que estão acima de 160 caracteres (serão truncadas no SERP)
2. Criar a página de preços/transparência de valores — o concorrente SSO usa isso como principal isca de conversão
3. Popular o blog com artigos reais — a URL /blog existe e está no sitemap, mas não tem conteúdo

**Avaliação geral:** base forte, execution gaps específicos e correíveis em semanas.

---

## 1. Oportunidades de Palavras-Chave

| Palavra-chave | Dificuldade est. | Oportunidade | Posição atual | Intenção | Formato ideal |
|---|---|---|---|---|---|
| exame admissional São Paulo | Alta | **Alta** | — | Transacional | Landing page /saude/clinica-exame-admissional-sao-paulo |
| medicina do trabalho empresa SP | Alta | **Alta** | — | Comercial | Homepage / Soluções |
| PCMSO obrigatório | Média | **Alta** | — | Informacional | /saude/pcmso-programa-controle-medico ✓ (existente) |
| PGR empresa | Média | **Alta** | — | Comercial | /servicos/pgr |
| eSocial SST S-2220 S-2240 | Média | **Alta** | — | Informacional | /rh hub ✓ (existente) |
| NR-01 PGR atualizado 2024 | Média | **Alta** | — | Informacional | /normas/nr-01-pgr-atualizada ✓ (existente) |
| LTCAT laudo ambiental | Baixa | **Alta** | — | Comercial | /servicos/ltcat |
| insalubridade adicional laudo | Baixa | **Alta** | — | Informacional+Comercial | /normas/nr-15-insalubridade ✓ |
| medicina do trabalho ABC paulista | Baixa | **Alta** | — | Local/Transacional | Geo-pages existentes |
| NR-05 CIPA obrigatório | Baixa | **Alta** | — | Informacional | **Página ausente** |
| NR-33 espaço confinado | Baixa | **Alta** | — | Informacional | **Página ausente** |
| NR-12 máquinas equipamentos | Baixa | **Alta** | — | Informacional | **Página ausente** |
| treinamento NR-35 altura | Baixa | **Média** | — | Transacional | /treinamentos/nr-35-trabalho-em-altura ✓ |
| treinamento NR-10 elétrica | Baixa | **Média** | — | Transacional | /treinamentos/nr-10-seguranca-eletrica ✓ |
| ASO atestado saúde ocupacional | Baixa | **Média** | — | Informacional | /saude/aso-atestado-saude-ocupacional ✓ |
| ergonomia NR-17 AET empresa | Baixa | **Média** | — | Informacional | /normas/nr-17-ergonomia ✓ |
| clínica medicina trabalho sem agendamento SP | Baixa | **Média** | — | Transacional | Destaque ausente no copy |
| PPP eletrônico prazo | Baixa | **Média** | — | Informacional | /normas/ppp-eletronico ✓ |
| como evitar multa eSocial | Baixa | **Média** | — | Informacional | /rh hub ✓ |
| laudo técnico insalubridade custo | Baixa | **Média** | — | Comercial | **Página ausente (pricing)** |
| grau de risco CNAE empresa | Baixa | **Média** | — | Informacional | /rh/calculadora-cnae-grau-de-risco ✓ |
| medicina do trabalho construção civil SP | Baixa | **Média** | — | Local | /normas/nr-18-construcao-civil + geo pages |
| NR-06 EPI empresa obrigações | Baixa | **Baixa** | — | Informacional | **Página ausente** |
| consultoria SST São Paulo | Alta | **Baixa** | — | Comercial | Concorrência alta, ROI incerto |

---

## 2. Problemas On-Page

| Página | Problema | Severidade | Correção |
|---|---|---|---|
| /contato | Meta description tem `"orcamento"` sem cedilha | **Critical** | Trocar por `"orçamento"` |
| /normas/nr-01-pgr-atualizada | Meta description 229 caracteres (limite: 160) — truncada no SERP | **Critical** | Reduzir para ≤ 155ch |
| /normas/nr-01-pgr-atualizada | Typo: `"sobré o que mudou"` na meta description | **Critical** | Corrigir para `"sobre o que mudou"` |
| /quem-somos | Meta description 213 caracteres — truncada no SERP | **High** | Reduzir para ≤ 155ch |
| /saude/pcmso-programa-controle-medico | Meta description 166 caracteres | **High** | Reduzir para ≤ 155ch |
| Homepage (`/`) | Title 64 caracteres (ideal ≤ 60ch) | **Medium** | Encurtar ligeiramente |
| /normas/nr-17-ergonomia | Title 64 caracteres | **Medium** | Encurtar ligeiramente |
| /rh | Title 64 caracteres | **Medium** | Encurtar ligeiramente |
| /servicos | Title "Exames e Laudos Ocupacionais | SERMST" (37ch) — muito genérico, sem "São Paulo" | **Medium** | Adicionar localização e intenção |
| /solucoes | Title "Soluções de SST para Empresas | SERMST" (38ch) — curto e sem localização | **Medium** | Expandir com keyword + local |
| /saude (hub) | Title com "Hub de Saúde SST" — "Hub" não é termo de busca real | **Medium** | Remover "Hub", usar termo de busca |
| /normas/nr-18-construcao-civil | Title 62 caracteres (borderline) | **Low** | Monitorar; OK se estável |
| Todas as service pages dinâmicas | Schema.org Service ausente em /servicos/[slug] | **Medium** | Adicionar Service schema nos templates |
| Páginas de normas, saúde, rh | BreadcrumbList schema ausente | **Low** | Adicionar para melhorar rich results |
| /blog | Página indexada no sitemap, mas sem conteúdo real — risco de "thin content" | **Medium** | Popular com artigos ou adicionar noindex temporariamente |

---

## 3. Análise de Lacunas de Conteúdo

### NR pages ausentes com tráfego relevante

O concorrente CONAME cobre um número maior de normas. As seguintes NRs têm volume de busca e ausência de cobertura no site:

| Conteúdo | Por que importa | Formato recomendado | Prioridade | Esforço |
|---|---|---|---|---|
| NR-05 / CIPA | Obrigatória para empresas com ≥50 funcionários; busca "CIPA obrigatório" tem alto volume; site já tem treinamento NR-05 mas sem página de norma | Página de norma (padrão BlockbusterArticle) | **Alta** | Meio-dia |
| NR-33 Espaço Confinado | Treinamento já existe; usuário que busca a norma não encontra a SERMST | Página de norma | **Alta** | Meio-dia |
| NR-12 Máquinas e Equipamentos | Setor industrial, alta sinistralidade, SERMST atende esse público | Página de norma | **Média** | Meio-dia |
| NR-06 EPIs | Consultada por RH e DP; fácil de ranquear (baixa concorrência de qualidade) | Página de norma simples | **Média** | Meio-dia |
| NR-09 / GHE / riscos ambientais | PPRA foi substituído pelo PGR, mas buscas de NR-09 persistem | Artigo explicativo com redirecionamento de conceito | **Média** | Rápido |

### Páginas de conversão ausentes

| Conteúdo | Por que importa | Formato | Prioridade | Esforço |
|---|---|---|---|---|
| Página de preços / tabela de valores | SSO captura busca "exame admissional preço SP" com preço destacado no title tag; SERMST não tem equivalente | Landing page transparente com faixa de valores e CTA | **Alta** | Meio-dia |
| "Como funciona" / Processo para novos clientes | Empresas que nunca contrataram SST terceirizado têm dúvida processual; cobre estágio de consideração do funil | Página de processo (etapas visuais) | **Alta** | Meio-dia |
| Página de depoimentos / casos | Nenhuma prova social estruturada no site; concorrentes usam isso para conversão | Página dedicada com 6–10 depoimentos reais | **Alta** | Depende de coleta |
| Comparativo PGR vs PPRA | Busca de quem transitou da norma antiga; oportunidade de posicionar autoridade técnica | Artigo explicativo | **Média** | Rápido (2h) |
| Guia de admissão sem gargalo para RH | Long-tail específica para departamentos de RH que travam o onboarding | Artigo guia | **Média** | Meio-dia |
| Calculadora / estimativa de custo de não-conformidade | A calculadora de multas já existe (/rh); mas uma calculadora de ROI de SST terceirizado seria diferenciadora | Ferramenta interativa | **Baixa** | Multi-dia |

### Funil e clusters de tópicos

O site cobre bem o estágio de **consciência** (artigos técnicos de normas e saúde) e tem boas páginas de **decisão** (serviços, contato). O estágio de **consideração** está fraco — faltam comparativos, estudos de caso, páginas "como funciona" e prova social.

---

## 4. Checklist Técnico

| Item | Status | Detalhe |
|---|---|---|
| HTTPS | ✅ Pass | Cloudflare + Vercel |
| Sitemap XML | ✅ Pass | Dinâmico via sitemap.ts; cobre todas as rotas incluindo geo-pages |
| Robots.txt | ✅ Pass | robots.ts correto; bloqueia /cdn-cgi/ (Cloudflare) |
| Canonical tags | ✅ Pass | Presentes em todas as páginas |
| Noindex usage | ✅ Pass | Apenas /guia (intencionalmente privado) e 404 |
| Structured data — Organização | ✅ Pass | MedicalOrganization + LocalBusiness no layout global |
| Structured data — FAQ | ✅ Pass | FAQPage na homepage e páginas de artigos |
| Structured data — Service | ⚠️ Warning | Ausente nas service pages /servicos/[slug] |
| Structured data — Breadcrumb | ⚠️ Warning | Ausente; oportunidade de rich result |
| Open Graph / meta social | ✅ Pass | OG tags em todas as páginas; imagem og-cover.jpg corrigida |
| URL structure | ✅ Pass | Clean slugs sem acentos; redirects para URLs legadas do WP |
| Image alt texts | ✅ Pass | alt via site-images.ts; textos descritivos |
| Mobile-friendliness | ✅ Pass | Next.js responsive por padrão |
| Core Web Vitals (estimado) | ✅ Pass | Next.js App Router com SSR/SSG; Cloudflare CDN |
| Redirect chains | ✅ Pass | Redirects 301 declarados no next.config.ts |
| Thin content — /blog | ❌ Fail | /blog está no sitemap mas tem zero artigos reais (apenas links para hubs) |
| Meta descriptions — comprimento | ❌ Fail | 4 páginas acima de 160ch (ver seção 2) |
| Title tags — comprimento | ⚠️ Warning | 5 páginas acima de 60ch |
| Typos em meta descriptions | ❌ Fail | "orcamento" (sem ç) em /contato; "sobré" em /nr-01 |
| UTF-8 / charset headers | ✅ Pass | charset=utf-8 em todos os headers HTTP e API routes |
| BOM nos arquivos fonte | ✅ Pass | 75 arquivos .ts/.tsx verificados — nenhum BOM |

---

## 5. Comparação com Concorrentes

Os três principais concorrentes identificados no mercado de SST B2B em São Paulo:

- **SSO** (sso.com.br) — líder em volume, posicionamento price-first (R$50 admissional)
- **CONAME** (coname.med.br) — similaridade de escopo, "quase 4 décadas", centro SP
- **LICO** (licomedicinadotrabalho.com) — serviços completos, eSocial, presença digital limitada

| Dimensão | SERMST | SSO | CONAME | Vencedor |
|---|---|---|---|---|
| Profundidade do conteúdo | Alto (artigos técnicos densos) | Médio (blog de entrada, foco em preço) | Baixo-Médio (pages finas) | **SERMST** |
| Geo-pages | Alto (+50 páginas /servicos/[slug]/[regiao]) | Baixo | Baixo | **SERMST** |
| Cobertura de NRs | Médio (8 NRs) | Baixo | Médio | Empate |
| Transparência de preço | Ausente | Alto (R$50 destacado) | Baixo | **SSO** |
| Prova social / depoimentos | Ausente | Médio | Ausente | **SSO** |
| Posicionamento de marca | Premium / patrimônio | Volume / custo | Genérico | **SERMST** |
| Structured data | Alto (MedOrg + FAQ) | Baixo | Baixo | **SERMST** |
| Blog / conteúdo ativo | Vazio | Médio (artigos de blog ativos) | Baixo | **SSO** |
| Treinamentos NR dedicados | Alto (10 treinamentos) | Baixo | Baixo | **SERMST** |
| SERP features (FAQ, rich) | Médio | Baixo | Baixo | **SERMST** |

**Vantagem competitiva não explorada:** A SERMST tem a base técnica mais sofisticada do grupo, mas o SSO captura conversões de topo de funil com price-anchoring (R$50 no title tag). O gap de conversão da SERMST está no meio do funil — prova social e transparência de processo.

---

## 6. Plano de Ação Priorizado

### Correções imediatas — fazer esta semana

| Ação | Impacto | Esforço | Arquivo |
|---|---|---|---|
| **1. Corrigir typo "orcamento" → "orçamento"** na meta description do /contato | Alto (aparece direto no SERP) | 2min | `src/app/contato/page.tsx` |
| **2. Corrigir typo "sobré" → "sobre"** na meta description do /normas/nr-01 | Alto | 2min | `src/app/normas/nr-01-pgr-atualizada/page.tsx` |
| **3. Reduzir meta description do /normas/nr-01** de 229 → ≤155 caracteres | Alto | 15min | `src/app/normas/nr-01-pgr-atualizada/page.tsx` |
| **4. Reduzir meta description do /quem-somos** de 213 → ≤155 caracteres | Médio | 15min | `src/app/quem-somos/page.tsx` |
| **5. Reduzir meta description do /saude/pcmso** de 166 → ≤155 caracteres | Médio | 10min | `src/app/saude/pcmso-programa-controle-medico/page.tsx` |
| **6. Melhorar title de /servicos**: "Exames e Laudos Ocupacionais SP \| SERMST" → incluir "São Paulo" | Médio | 5min | `src/app/servicos/page.tsx` |
| **7. Adicionar noindex ao /blog** enquanto não tem artigos reais (evitar thin content) | Médio | 5min | `src/app/blog/page.tsx` |
| **8. Cloudflare: desabilitar Email Obfuscation** (cdn-cgi links quebrados identificados anteriormente) | Alto (UX + crawl) | 5min (Cloudflare dashboard) | — |

### Investimentos estratégicos — planejar para este trimestre

| Ação | Impacto esperado | Esforço | Dependências |
|---|---|---|---|
| **Criar página de preços/valores** transparente para exames, PCMSO e PGR | Alto — captura buscas "preço exame admissional SP" que hoje vão para SSO | 1 dia | Aprovação interna dos valores a publicar |
| **Criar NR-05/CIPA** (página de norma no padrão BlockbusterArticle) | Alto — treinamento já existe, norma não | Meio-dia | — |
| **Criar NR-33/Espaço Confinado** (idem) | Médio-Alto | Meio-dia | — |
| **Popular /blog com 4–6 artigos reais** (eSocial SST guia, custo de não-conformidade, como funciona admissão, CIPA passo-a-passo) | Alto — ativa a URL /blog no SERP e constrói link-building interno | Multi-dia | Decisão editorial |
| **Página "Como funciona"** para novos clientes (processo de onboarding SST) | Médio — fecha o funil de consideração | Meio-dia | — |
| **Adicionar depoimentos/casos reais** em página dedicada | Alto — diferencia de concorrentes que também não têm | Depende de coleta | Coleta de depoimentos de clientes |
| **Service schema** nas páginas /servicos/[slug] | Médio — rich results em buscas de serviço | 2h | Implementação técnica |
| **BreadcrumbList schema** nas páginas de artigos, normas e serviços | Baixo-Médio | 2h | Implementação técnica |
| **Criar NR-12 (Máquinas)** | Médio | Meio-dia | — |
| **Artigo: PGR vs PPRA** — oportunidade de long-tail de quem está migrando | Médio | 2h | — |

---

## Próximos passos sugeridos

Posso ajudar com qualquer um dos itens abaixo:

- **Aplicar agora as 8 correções imediatas** (items 1–7 acima — estimo 30 minutos de trabalho)
- **Redigir os briefs de conteúdo** para NR-05/CIPA e NR-33 no padrão dos artigos existentes
- **Criar o esqueleto da página de preços** com copy e estrutura
- **Redigir meta descriptions novas** para as 4 páginas com problema de comprimento
- **Aprofundar qualquer seção** deste relatório (técnica, conteúdo ou competitor)
