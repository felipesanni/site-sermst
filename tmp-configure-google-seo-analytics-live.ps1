$pluginRoot = 'C:\Users\Felipe.Sannino\plugins\google-seo-analytics-live'
$skillDir = Join-Path $pluginRoot 'skills\google-seo-analytics-live'
New-Item -ItemType Directory -Force -Path $skillDir | Out-Null

$pluginJson = @'
{
  "name": "google-seo-analytics-live",
  "version": "1.0.0",
  "description": "Integracao local do Codex para consultar ao vivo Search Console, Google Analytics 4 e Google Ads usando o projeto autenticado da SERMST.",
  "author": {
    "name": "Felipe Sannino",
    "email": "felipe@sermst.com.br",
    "url": "https://sermst.com.br"
  },
  "homepage": "https://sermst.com.br",
  "repository": "https://sermst.com.br",
  "license": "Proprietary",
  "keywords": [
    "seo",
    "search-console",
    "ga4",
    "google-ads",
    "analytics",
    "sermst"
  ],
  "skills": "./skills/",
  "interface": {
    "displayName": "Google SEO Analytics Live",
    "shortDescription": "Relatorios ao vivo de Search Console, GA4 e Google Ads.",
    "longDescription": "Usa o projeto local ja autenticado da SERMST para rodar relatorios consolidados e verificacoes de acesso em Search Console, Google Analytics 4 e Google Ads diretamente pelo Codex.",
    "developerName": "Felipe Sannino",
    "category": "Analytics",
    "capabilities": [
      "Interactive",
      "Read"
    ],
    "websiteURL": "https://sermst.com.br",
    "privacyPolicyURL": "https://sermst.com.br",
    "termsOfServiceURL": "https://sermst.com.br",
    "defaultPrompt": [
      "Rodar o relatorio consolidado de SEO e Analytics ao vivo.",
      "Verificar se o acesso a Search Console, GA4 e Google Ads continua ativo.",
      "Mostrar palavras-chave, paginas e canais com dados atualizados."
    ],
    "brandColor": "#111B57",
    "composerIcon": "./assets/icon.png",
    "logo": "./assets/logo.png",
    "screenshots": []
  }
}
'@
Set-Content -Path (Join-Path $pluginRoot '.codex-plugin\plugin.json') -Value $pluginJson -Encoding UTF8

$assetsDir = Join-Path $pluginRoot 'assets'
New-Item -ItemType Directory -Force -Path $assetsDir | Out-Null
Copy-Item -Force 'C:\Users\Felipe.Sannino\Desktop\Site SERMST\sermst-web\public\images\site\logo-sermst-mobile.png' (Join-Path $assetsDir 'icon.png')
Copy-Item -Force 'C:\Users\Felipe.Sannino\Desktop\Site SERMST\sermst-web\public\images\site\logo-sermst-mobile.png' (Join-Path $assetsDir 'logo.png')

$skillMd = @'
---
name: google-seo-analytics-live
description: Use when Codex needs live Search Console, GA4 or Google Ads data from the preconfigured SERMST integration project on this machine. Run the existing authenticated Python scripts from the external project and summarize the results in Portuguese with concrete SEO and traffic takeaways.
---

# Google SEO Analytics Live

## When to use
Use this skill whenever the user asks for live data from:
- Google Search Console
- Google Analytics 4
- Google Ads
- consolidated SEO and Analytics reports
- access validation for those Google properties

## Project location
Always use this external local project:

`C:\Users\Felipe.Sannino\.gemini\antigravity\scratch\seo-analytics-integration`

This project already contains:
- `venv\Scripts\python`
- `client_secret.json`
- `token.json`
- `get_seo_analytics_report.py`
- `check_all_access.py`
- `test_google_ads.py`

## Commands
### Consolidated report
Run:

`venv\Scripts\python get_seo_analytics_report.py`

### Full access check
Run:

`venv\Scripts\python check_all_access.py`

### Google Ads validation
Run:

`venv\Scripts\python test_google_ads.py`

## Execution rules
- Use `functions.shell_command`.
- Set the working directory to the integration project path.
- If the user asks for live data, prefer the consolidated report first.
- If a report fails because of authentication or Google access, run `check_all_access.py` next.
- Summarize the output in Portuguese, focusing on business meaning rather than dumping raw terminal text.
- When useful, call out:
  - top queries
  - top pages
  - CTR opportunities
  - organic vs paid mix
  - anomalies or access failures

## Output style
Keep the answer short and useful:
- what ran
- key numbers
- what matters
- next recommended action
'@
Set-Content -Path (Join-Path $skillDir 'SKILL.md') -Value $skillMd -Encoding UTF8

$marketplacePath = 'C:\Users\Felipe.Sannino\.agents\plugins\marketplace.json'
$marketplace = Get-Content -Raw -Path $marketplacePath | ConvertFrom-Json
$marketplace.name = 'felipe-local-plugins'
if (-not $marketplace.interface) {
  $marketplace | Add-Member -NotePropertyName interface -NotePropertyValue ([pscustomobject]@{})
}
$marketplace.interface.displayName = 'Felipe Local Plugins'
$marketplace | ConvertTo-Json -Depth 10 | Set-Content -Path $marketplacePath -Encoding UTF8
