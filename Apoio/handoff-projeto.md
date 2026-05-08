# Handoff — Redesign SERMST (estado atual)

Documento atualizado em **2026-05-05**. Este é o ponto de checkpoint do redesign do site sermst.com.br (WordPress → Next.js). Funciona como contrato do que está pronto, do que falta e da ordem em que tocar antes do go-live.

---

## TL;DR — onde estamos

A **fundação do projeto está pronta**. Home reescrita com voz de marca, formulário de captura funcional, página institucional completa (`/quem-somos`), blockbuster de SEO migrado (`/rh/funcao-encarregado`), 90+ redirects 301 protegendo o tráfego conquistado e sitemap atualizado. **Falta** migrar 12 das 13 páginas blockbuster, criar conteúdo das 10 NRs, configurar variáveis de ambiente para produção e validar tudo antes da virada de DNS.

**O que NÃO dá para subir hoje:** os redirects apontam para destinos que ainda usam template genérico (não 404, mas conteúdo raso). Para go-live decente, completar os blockbusters da seção [O que falta](#o-que-falta).

---

## O que foi entregue nesta sessão

### 1. Inventário e plano

- [`Apoio/inventario-migracao.md`](inventario-migracao.md) — inventário completo do site WordPress atual com dados reais do Google Search Console (16 meses, 1.740 cliques, 438k impressões, 150 URLs, 42 com cliques). Inclui mapa de migração, decisões e insights.
- Estratégia consolidada: tudo que tem tráfego B2B vai para Next, DR Exames / particular / convênio → home, geo-bairro → cidade.

### 2. Redirects 301 (`sermst-web/next.config.ts`)

- 90+ redirects mapeando o WordPress antigo para as rotas novas
- Cobertura completa de hubs (`/saude-ocupacional/*`, `/seguranca-do-trabalho/*`)
- Guias `/medicina-do-trabalho/*` e `/exames/*` mapeados para `/saude`, `/rh` ou `/servicos`
- Geo-bairro (Pinheiros, Liberdade, Vila Mariana) → `/servicos/exame-admissional-expresso/sao-paulo`
- DR Exames, particulares, convênio, DETRAN → `/`
- Tags, categorias, autor do WP → `/`
- `/lp-aso/` → `/contato` (preserva Google Ads existente)

### 3. Home (`src/app/page.tsx`)

- Headline reescrito: **"SST não é custo. É blindagem do seu patrimônio."**
- Sub-headline com voz "dono para dono" + foco em empresa familiar
- CTA principal mudou de "Solicitar atendimento" para **"Solicitar diagnóstico gratuito"**
- Adicionada **seção de Objeções Respondidas** (4 objeções típicas do ICP Carlos Eduardo: "minha consultoria já resolve", "nunca tive problema", "é só burocracia", "custa caro")
- Adicionada **seção de Garantia / "falamos de dono para dono"**
- Estrutura visual mantida (parallax, KPIs, regional cards)

### 4. Página `/quem-somos` (`src/app/quem-somos/page.tsx`)

- Substituída de placeholder para página institucional completa
- Hero "40 anos protegendo o patrimônio de quem leva o negócio a sério"
- Manifesto baseado em `Apoio/quem somos.txt` e `Apoio/voz da marca_.txt`
- Grid de diferenciais (+40 anos, +3.000 empresas, +500 clínicas, laboratório próprio, equipe multidisciplinar)
- Bloco "para quem é a SERMST" sticky com ICP do `Apoio/Perfil do Cliente Ideal.txt`
- CTA final para diagnóstico gratuito

### 5. Form de captura de lead

- Componente cliente: `src/components/forms/lead-form.tsx`
  - Campos: nome, empresa, e-mail, telefone, porte (4 faixas), demanda (7 opções), mensagem
  - Honeypot anti-spam (`name="website"` invisível)
  - Estados: idle, submitting, success, error
  - Feedback visual completo (animações, ícones)
- Route handler: `src/app/api/lead/route.ts`
  - Validação de campos obrigatórios e formato de e-mail
  - Log estruturado no console (visível no painel da Vercel)
  - Webhook opcional via `LEAD_WEBHOOK_URL` (CRM, Make, Zapier, n8n)
  - E-mail de notificação opcional via Resend (`RESEND_API_KEY` + `LEAD_NOTIFY_EMAIL`)
- Integrado em `/contato` substituindo o bloco de explicação textual

### 6. Página blockbuster `/rh/funcao-encarregado`

- Migra a URL com 346 cliques + 125k impressões em 16 meses
- Conteúdo completo: o que é, responsabilidades, perfil ideal, 4 erros comuns, ponto cego de SST, FAQ
- **CTA reorientado para gestor** (não candidato a vaga): bloco lateral "Você gerencia encarregados? A SST dele está em dia?"
- Bloco lateral com riscos reais de não ter SST documentado
- Cross-links para `/rh/o-que-um-gerente-faz`, `/rh/quando-demitir-funcionario`, `/rh/multa-esocial-s2220`

### 7. Hub Normas (`/normas/[slug]`)

Adicionadas 10 entries em `normasKnown` (template existente):
- nr-01-pgr-atualizada
- nr-10-eletricidade
- nr-13-vasos-de-pressao
- nr-15-insalubridade
- nr-16-periculosidade
- nr-17-ergonomia
- nr-18-construcao-civil (24 cliques no antigo)
- nr-35-trabalho-em-altura (28 cliques no antigo)
- ppp-eletronico
- pgrs-residuos

Cada uma renderiza com título, descrição, sidebar de serviços relacionados e CTA de diagnóstico. **O conteúdo ainda é raso** — precisa expandir para virar blockbuster próprio (ver pendências).

### 8. Hub RH (`/rh/[slug]`)

Adicionadas 7 entries em `rhDoresSEO`:
- o-que-um-gerente-faz
- quando-demitir-funcionario
- carta-demissao
- carta-recomendacao
- lista-cnae-brasil
- evitar-processos-trabalhistas
- treinamento-gerentes

Renderizam pelo template existente. **Conteúdo precisa ser expandido** para virar páginas blockbuster próprias.

### 9. Hub Saúde (`/saude/[slug]`)

Adicionadas 4 entries em `saudeSEO`:
- o-que-e-saude-ocupacional
- exame-demissional-guia
- o-que-sao-epis
- gestao-sst

### 10. Sitemap atualizado (`src/app/sitemap.ts`)

- Inclui `/quem-somos`
- Lê dinamicamente `saudeSEO`, `rhDoresSEO`, `dicionarioSEO`, `normasKnown`
- Adiciona `/rh/funcao-encarregado` como rota estática especial
- Não depende mais de listas hard-coded

### 11. Menu de navegação (`src/app/layout.tsx`)

- Substituído "A Clínica" por "Quem Somos"
- Adicionado "Contato" no menu desktop
- Mobile menu também atualizado

---

## Blockbusters migrados nesta sessão (atualização 2026-05-05)

Foram criadas **13 páginas blockbuster** com conteúdo único de 1.500-2.500 palavras, FAQ, CTA reorientado e cross-links. Cada uma usa o template `<BlockbusterArticle>` em `src/components/sections/blockbuster-article.tsx` para garantir consistência visual e facilidade de manutenção.

### Páginas blockbuster prontas

| Página | Cliques GSC | Path | Status |
|---|---:|---|---|
| Função Encarregado | 346 | `/rh/funcao-encarregado` | ✅ Pronta |
| O que um gerente faz | 76 | `/rh/o-que-um-gerente-faz` | ✅ Pronta |
| NR-01 atualizada (PGR) | 50 | `/normas/nr-01-pgr-atualizada` | ✅ Pronta |
| NR-35 (trabalho em altura) | 28 | `/normas/nr-35-trabalho-em-altura` | ✅ Pronta |
| Lista CNAE Brasil | 27 | `/rh/lista-cnae-brasil` | ✅ Pronta |
| NR-18 (construção civil) | 24 | `/normas/nr-18-construcao-civil` | ✅ Pronta |
| Carta de demissão | 9 (18k imp) | `/rh/carta-demissao` | ✅ Pronta |
| O que são EPIs | 5 (18k imp) | `/saude/o-que-sao-epis` | ✅ Pronta |
| O que é saúde ocupacional | 4 | `/saude/o-que-e-saude-ocupacional` | ✅ Pronta |
| Gestão de SST | 4 | `/saude/gestao-sst` | ✅ Pronta |
| Quando demitir | 4 | `/rh/quando-demitir-funcionario` | ✅ Pronta |
| Exame demissional guia | alta imp | `/saude/exame-demissional-guia` | ✅ Pronta |
| Evitar processos trabalhistas | 1 (oportunidade) | `/rh/evitar-processos-trabalhistas` | ✅ Pronta |

Todas têm copy original em voz "dono para dono" + CTA reorientado para gestor (não consumidor de conteúdo).

## Revisão de design e SEO (sessão 2026-05-05)

**Problema crítico encontrado e corrigido:** vários textos meta-SEO ("conteúdo para SEO", "intenção de busca", "relevância orgânica", "conversão", "rankear melhor") estavam **visíveis no body das páginas** — seriam vistos pelo público. Vazaram de copy interno para texto público.

**Páginas com texto meta-SEO removido/reescrito:**
- `/` (home) — parágrafo "responder à intenção de busca"
- `/contato` — parágrafo sobre "intenção de busca" e "peça de conversão"
- `/solucoes` — parágrafo "Em SEO, isso fortalece a camada semântica"
- `/rh` — "Em SEO, isso ajuda a SERMST a responder buscas"
- `/dicionario` — eyebrow "Conteúdo útil para SEO e conversão"
- `/dicionario/[slug]` — parágrafo "Em SEO, páginas de glossário..."
- `/rh/[slug]` — parágrafo "Esse tipo de conteúdo ajuda em duas frentes... relevância orgânica..."
- `/saude` e `/saude/[slug]` — eyebrows e copy revisados
- `/servicos/[servico]` — heading "Conteúdo relevante para SEO e conversão" → "Para quem é este serviço"
- `/servicos/[servico]/[regiao]` — heading "Como essa página ajuda no SEO local" → "O que muda quando a empresa centraliza com a SERMST"
- `/blog` — placeholder "motor de SEO dinâmico" substituído por hub funcional com links para Saúde, RH e Dicionário
- `lib/seo-copy.ts` — removidos parágrafos com metadiscurso ("Em termos de SEO", "Para SEO local", "rankear melhor", "página de alta performance"). Afeta as ~80 páginas geo-SEO geradas dinamicamente.

**Acentuação corrigida em:** home, /quem-somos, /contato, /solucoes, /dicionario, /saude, /rh, /servicos (índice + dinâmico). Strings comuns como "decisao", "conversao", "intencao", "Sao Paulo" agora estão acentuadas no copy visível. Os arquivos `route.ts`, `next.config.ts` e `lead-form.tsx` mantêm-se sem acento por convenção do linter (decisão da equipe).

**Sistema de design padronizado em `globals.css`:**

```css
.btn-primary    — CTA primário (rosa, sombra, lift no hover)
.btn-outline    — CTA secundário (borda, fill no hover, scale active)
.btn-ghost      — terciário (sem borda, hover sutil)
.btn-nav-cta    — header/topbar (compacto)
.btn-whatsapp   — verde WhatsApp consistente
.card-clean     — card branco com hover-lift
.card-dark      — card escuro destaque
.link-underline — link com sublinhado animado
.eyebrow        — pré-cabeçalho (label rosa uppercase)
```

**Acessibilidade adicionada:**
- `:focus-visible` com ring rosa em todo elemento focável (navegação por teclado)
- `prefers-reduced-motion` respeitado (desliga animações de quem pediu redução de movimento — exigência WCAG)
- Estados `:active` em botões (feedback tátil melhor)

**Pendências cosméticas que não cabem nesta sessão:**
- Refator: substituir as classes inline gigantes nos CTAs por `.btn-primary`/`.btn-outline` (centenas de ocorrências, melhor fazer aos poucos)
- Logo colorido `logo-cor.png` ainda não está aplicado no header sticky (substituir um dos brancos)
- Performance da home pode ser otimizada movendo `'use client'` da página inteira para wrappers só dos blocos com Framer Motion

## NRs e guides RH — todos migrados com conteúdo único

Foram criadas mais 9 páginas usando o `<BlockbusterArticle>` como template:

| Página | Path | Status |
|---|---|---|
| NR-15 Insalubridade | `/normas/nr-15-insalubridade` | ✅ Pronta |
| NR-16 Periculosidade | `/normas/nr-16-periculosidade` | ✅ Pronta |
| NR-10 Eletricidade | `/normas/nr-10-eletricidade` | ✅ Pronta |
| NR-17 Ergonomia / AET | `/normas/nr-17-ergonomia` | ✅ Pronta |
| NR-13 Caldeiras e Vasos | `/normas/nr-13-vasos-de-pressao` | ✅ Pronta |
| PPP eletrônico (S-2240) | `/normas/ppp-eletronico` | ✅ Pronta |
| PGRS — Resíduos | `/normas/pgrs-residuos` | ✅ Pronta |
| Carta de recomendação | `/rh/carta-recomendacao` | ✅ Pronta |
| Treinamento de gerentes | `/rh/treinamento-gerentes` | ✅ Pronta |

**Total geral de páginas blockbuster com conteúdo único: 22.** Todas usando o template `<BlockbusterArticle>` com voz da marca, FAQ, CTA reorientado e cross-links internos. O fallback `/normas/[slug]` e `/rh/[slug]` continua existindo para qualquer slug não previsto, mas todos os destinos dos redirects 301 agora têm página dedicada com conteúdo real.

### Configuração de produção

- **Variáveis de ambiente** a configurar no Vercel (ou host escolhido):
  - `LEAD_NOTIFY_EMAIL` — destinatário das notificações de lead (sugestão: `comercial@sermst.com.br`)
  - `LEAD_WEBHOOK_URL` — opcional, URL do CRM/Make/Zapier/n8n para receber leads em tempo real
  - `RESEND_API_KEY` — opcional, para enviar e-mail diretamente (alternativa: deixar webhook fazer o envio)
- **Conta Resend criada** — se for usar Resend, criar conta, validar domínio sermst.com.br e gerar API key.
- **Conta de host** — Vercel é o caminho natural para Next.js 16. Conectar repo Git e deploy é automático.

### Antes do go-live (validações críticas)

1. **Lista de URLs de destino dos Google Ads atuais.** Sem isso, anúncios podem cair em 404 e queimar budget no dia da virada. Pedir lista para quem gerencia a conta.
2. **Confirmar redirects funcionando.** Após deploy, testar 5-10 URLs antigas no navegador e verificar que retornam 301 + chegam no destino certo.
3. **Verificar canônicas.** Cada página nova tem `alternates: { canonical: ... }` apontando para `https://sermst.com.br/...`. Confirmar que não há canônica apontando para domínio diferente.
4. **Submeter sitemap novo no GSC.** Após go-live: `https://sermst.com.br/sitemap.xml` precisa ser ressubmetido no GSC com a propriedade já correta.
5. **Configurar Google Analytics 4 e Meta Pixel.** Adicionar no `layout.tsx` antes do go-live.
6. **Lighthouse mobile.** Meta: 90+ em performance. A home tem `'use client'` e Framer Motion, pode pesar — talvez splittar componentes animados.

### Cosmético / nice-to-have

- Acentuação inconsistente em vários lugares ("Sao Paulo" vs "São Paulo", "experiencia", "rapidez"). Buscar e corrigir global.
- Top bar tem dois logos brancos lado a lado (top bar + header sticky); aplicar `logo-cor.png` no header sticky.
- `/blog` tem placeholder no projeto novo, mas o redirect `/blog → /saude` cobre — pode deletar a pasta `/blog` para evitar confusão futura.
- `/exames-clinicos/colesterol-total-e-fracoes-soro` e similares B2C estão redirecionando para home; considerar criar página `/410-gone` técnica que retorne 410 explícito (Google deindexa mais rápido).

---

## Como rodar localmente

```bash
cd "C:\Users\Felipe.Sannino\Desktop\Site SERMST\sermst-web"
npm install
npm run dev
```

Abre em `http://localhost:3000`. Para testar o form de lead localmente, o log do POST aparece no terminal onde o `npm run dev` está rodando.

## Como subir para a Vercel

1. Criar repositório Git da pasta `sermst-web/` (não da pasta-pai `Site SERMST/`).
2. `vercel.com/new` → conectar o repo → deploy.
3. Configurar as variáveis de ambiente no painel do projeto.
4. Conectar o domínio `sermst.com.br` apontando os DNS para Vercel.
5. **Antes da virada de DNS**: rodar deploy preview e validar os redirects, formulário e canônicas.

---

## Decisões registradas

- **DR Exames** — sub-marca inativada, não migra nada. Confirmado pelo Felipe.
- **Geo-bairro** — não vamos criar matriz de bairro no Next. As 3 páginas existentes (Pinheiros, Liberdade, Vila Mariana, total 120 cliques/16m) ganham 301 para `/servicos/exame-admissional-expresso/sao-paulo`. Perda aceitável.
- **Voz da marca** — "dono para dono", baseado em `Apoio/voz da marca_.txt`. Aplicada em home, /quem-somos e /rh/funcao-encarregado.
- **ICP primário** — Carlos Eduardo: sócio-diretor de empresa familiar, 42 anos, com medo de perder o patrimônio. Documentado em `Apoio/Perfil do Cliente Ideal.txt`.
- **Tese de máquina de leads** — todos os CTAs principais apontam para `/contato` (form), não para WhatsApp avulso. WhatsApp continua disponível mas como segundo canal.

---

## Próxima sessão — sugestão de ordem

1. Migrar conteúdo completo do blockbuster #2 (`/rh/o-que-um-gerente-faz`) — 76 cliques, oportunidade direta. Usar `/rh/funcao-encarregado` como template.
2. Migrar blockbuster #3 (`/normas/nr-01-pgr-atualizada`) — 50 cliques, técnico mas converte gestor de PGR.
3. Configurar `LEAD_NOTIFY_EMAIL` e `LEAD_WEBHOOK_URL` para começar a receber leads de teste.
4. Subir deploy preview na Vercel e validar redirects.
5. Repetir migração para os blockbusters #4 a #12.

Cada blockbuster bem feito vale ~40-100 visitas/mês. Em conjunto, são as ~600 visitas/mês que vão sustentar a entrada da máquina de leads.
