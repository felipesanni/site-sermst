# Diretrizes para busca generativa e citações

Revisão técnica realizada em 13 de julho de 2026 com base apenas em documentação oficial dos provedores.

## Resumo prático

GEO não é um protocolo único. Google e Bing afirmam que os fundamentos continuam sendo os mesmos da busca orgânica: rastreamento, indexação, canonicals, links, clareza, originalidade, autoridade e conteúdo atualizado. OpenAI, Anthropic, Perplexity e Apple acrescentam controles próprios de acesso no `robots.txt`.

O site da SERMST mantém o conteúdo público aberto para busca, citações e acessos iniciados pelo usuário. APIs e rotas técnicas continuam bloqueadas.

## Matriz de rastreamento

| Ecossistema | Busca e citação | Acesso solicitado pelo usuário | Treinamento ou outro uso | Situação no projeto |
| --- | --- | --- | --- | --- |
| Google | Googlebot | Não há agente separado documentado para esse fim | Google-Extended | Permitidos. A participação na busca generativa depende do Googlebot e do Search Console. |
| Bing e Copilot | Bingbot e índice do Bing | Não há agente separado documentado para esse fim | Controles de snippet e cache são tratados nas diretrizes do Bing | Bingbot permitido, sitemap referenciado e IndexNow preparado. |
| OpenAI | OAI-SearchBot | ChatGPT-User | GPTBot | Permitidos de forma independente. |
| Anthropic | Claude-SearchBot | Claude-User | ClaudeBot | Permitidos de forma independente. |
| Perplexity | PerplexityBot | Perplexity-User | O PerplexityBot não é usado para treinar modelos fundacionais | Permitidos. |
| Apple | Applebot | Applebot também atende respostas atuais em produtos Apple | Applebot-Extended | Permitidos. `nosnippet` não é usado nas páginas públicas. |

Permitir um agente de treinamento não aumenta, por si só, a chance de citação. Os agentes de busca são os controles relevantes para descoberta nas plataformas que fazem essa separação.

## Implementações aplicadas

- `robots.txt` explicita os agentes atuais de busca, uso por pessoa e treinamento.
- Metadados permitem indexação e snippets completos. Não há `noarchive`, `nocache`, `nosnippet` ou `data-nosnippet` no conteúdo que deve ser citado.
- O sitemap publica somente URLs canônicas e usa `lastmod` apenas quando houve revisão real.
- O `robots.txt` aponta para o sitemap canônico.
- Canonicals, redirecionamentos permanentes e links internos reduzem ambiguidade e duplicidade.
- Artigos exibem autoria, data de revisão, fontes e próximo passo do funil.
- HTML semântico, botões reais, rótulos e navegação acessível melhoram o uso por pessoas e agentes de navegador.
- A chave do IndexNow está no diretório público. O comando `npm run indexnow:submit` valida a chave publicada, lê o sitemap de produção e envia somente URLs com o `lastmod` mais recente. A variável `INDEXNOW_SINCE=AAAA-MM-DD` permite informar outra data de corte.
- O `llms.txt` continua como índice auxiliar. Ele não substitui `robots.txt`, sitemap, canonicals ou metadados.

## Painéis externos que precisam ser conferidos

### Google Search Console

- Confirmar `Configurações > IA generativa na Pesquisa > Incluir` quando o controle beta estiver disponível.
- Acompanhar o relatório de desempenho de IA generativa quando ele aparecer para a propriedade.

### Bing Webmaster Tools

- Confirmar a leitura do sitemap e verificar erros no Site Explorer e na inspeção de URL.
- Conferir as submissões na área do IndexNow depois do primeiro envio em produção.
- Acompanhar `AI Performance`, em prévia pública, para citações, páginas citadas e consultas de grounding.
- Manter os dados locais da SERMST atualizados no Bing Places for Business.
- A chave privada da API do Bing Webmaster Tools não deve ser usada como chave pública do IndexNow. O projeto mantém essas duas funções separadas.

## O que não foi implementado

- Não foi criado schema de GEO, porque Google e Bing não documentam um tipo especial para busca generativa.
- Não foram criadas páginas em escala para variações de perguntas. Isso aumentaria duplicidade e reduziria clareza.
- WebMCP continua em acesso antecipado e não é uma API estável para produção.
- `data-nosnippet`, `noarchive` e `nocache` não foram usados porque limitariam o conteúdo disponível para snippets, respostas e citações.
- Não há diretriz oficial da OpenAI ou da Anthropic que transforme `llms.txt` em requisito de inclusão na busca.

## Fontes oficiais

- Google: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- Google Search Console: https://support.google.com/webmasters/answer/16908024
- Bing Webmaster Guidelines: https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a
- Bing AI Performance: https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview
- Bing e IndexNow: https://www.bing.com/indexnow/getstarted
- Protocolo IndexNow: https://www.indexnow.org/documentation
- OpenAI: https://developers.openai.com/api/docs/bots
- Anthropic: https://support.anthropic.com/en/articles/8896518-does-anthropic-crawl-data-from-the-web-and-how-can-site-owners-block-the-crawler
- Perplexity: https://docs.perplexity.ai/docs/resources/perplexity-crawlers
- Apple: https://support.apple.com/en-us/119829
