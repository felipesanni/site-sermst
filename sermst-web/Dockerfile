# ─────────────────────────────────────────────────────────────────────────────
# Dockerfile — SERMST Web (Next.js 16 Standalone)
# Otimizado para Easypanel + Hetzner VPS
#
# IMPORTANTE: o passo crítico é o COPY de .next/static dentro do standalone.
# Sem ele, todos os chunks JS retornam 404 HTML → MIME type error no browser.
# ─────────────────────────────────────────────────────────────────────────────

# ── Estágio 1: dependências ───────────────────────────────────────────────────
FROM node:22-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --omit=dev --ignore-scripts

# ── Estágio 2: build ──────────────────────────────────────────────────────────
FROM node:22-alpine AS builder
WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
ENV NODE_ENV=production

RUN npm run build

# ── Estágio 3: imagem de produção ─────────────────────────────────────────────
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# Arquivos públicos (favicon, imagens, robots.txt, etc.)
COPY --from=builder /app/public ./public

# Servidor standalone gerado pelo Next.js
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./

# ⚠️  PASSO CRÍTICO — sem isso os chunks JS retornam 404 → MIME error
# O standalone NÃO inclui o static automaticamente
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
