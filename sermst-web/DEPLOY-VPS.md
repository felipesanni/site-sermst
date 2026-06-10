# Deploy no VPS — Next.js Standalone

## Por que os chunks JS retornam `text/html`

Com `output: 'standalone'`, o `next build` gera:

```
.next/
  standalone/        ← servidor Node.js minificado
    server.js        ← entry point
    .next/           ← SÓ o necessário para SSR
  static/            ← arquivos estáticos (JS, CSS, imagens)
```

**O problema**: `.next/standalone/.next/static/` NÃO existe automaticamente.
Precisa ser copiado manualmente. Sem isso, qualquer request para
`/_next/static/chunks/*.js` retorna uma página HTML 404 → MIME error.

---

## Script de deploy (rodar no VPS após git pull)

Salve como `/home/deploy/deploy-sermst.sh` e dê permissão com `chmod +x`:

```bash
#!/bin/bash
set -e

APP_DIR="/home/sermst/sermst-web"   # ajuste para seu caminho

echo "📦 Instalando dependências..."
cd "$APP_DIR"
npm ci --omit=dev

echo "🔨 Building..."
npm run build

echo "📁 Copiando arquivos estáticos (passo crítico para standalone)..."
cp -r .next/static  .next/standalone/.next/static
cp -r public        .next/standalone/public

echo "🔁 Reiniciando servidor..."
pm2 restart sermst-web || pm2 start .next/standalone/server.js \
  --name sermst-web \
  --env production

echo "✅ Deploy concluído!"
```

---

## Configuração do Nginx

```nginx
server {
    listen 80;
    server_name sermst.com.br www.sermst.com.br;

    # ── Arquivos estáticos: servir direto com cache imutável ──────────────
    # Crucial: evita que o Node.js sirva esses arquivos e previne MIME errors
    location /_next/static/ {
        alias /home/sermst/sermst-web/.next/standalone/.next/static/;
        expires 1y;
        add_header Cache-Control "public, max-age=31536000, immutable";
        access_log off;
    }

    # ── Arquivos públicos (imagens, favicon, robots.txt) ──────────────────
    location / {
        try_files $uri @nextjs;
    }

    location @nextjs {
        proxy_pass         http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade     $http_upgrade;
        proxy_set_header   Connection  'upgrade';
        proxy_set_header   Host        $host;
        proxy_set_header   X-Real-IP   $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}
```

> Depois do nginx, rode: `sudo nginx -t && sudo systemctl reload nginx`

---

## Checklist pós-deploy

- [ ] `/_next/static/chunks/` retorna 200 com `Content-Type: application/javascript`
- [ ] Nenhum erro de MIME no console do DevTools
- [ ] Textos com acentos corretos (São Paulo, liberação, etc.)
- [ ] Redirecionamentos 301 funcionando (`/sermst` → `/quem-somos`)

---

## Verificação rápida via curl

```bash
# Deve retornar: Content-Type: application/javascript
curl -I https://sermst.com.br/_next/static/chunks/main-app.js

# Deve retornar: 301 → /quem-somos
curl -I https://sermst.com.br/sermst
```
