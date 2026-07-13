# Diretrizes do Google para busca com IA generativa

Revisão técnica realizada em 13 de julho de 2026 com base no guia oficial do Google Search para recursos generativos.

Fontes oficiais:

- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- https://developers.google.com/search/docs/appearance/ai-features
- https://support.google.com/webmasters/answer/16908024
- https://support.google.com/webmasters/answer/16984139
- https://web.dev/articles/ai-agent-site-ux

## O que está implementado no site

| Diretriz | Implementação |
| --- | --- |
| Páginas indexáveis e elegíveis a snippets | Metadados globais permitem indexação, acompanhamento de links e prévias completas para o Googlebot. |
| Rastreamento | Googlebot pode acessar o conteúdo público. Apenas APIs e rotas técnicas ficam bloqueadas. |
| Estrutura técnica clara | Conteúdo principal é renderizado no servidor ou gerado como HTML estático. |
| Descoberta de páginas | Sitemap canônico, links internos rastreáveis e redirecionamentos permanentes para URLs antigas. |
| Redução de duplicidade | Canonicals por rota, domínio sem `www` e sitemap apenas com URLs canônicas. |
| Conteúdo organizado | H1 único, seções com H2/H3, resposta curta, listas, perguntas frequentes e próximos passos. |
| Conteúdo confiável | Datas de revisão visíveis, autoria institucional, fontes oficiais visíveis e citações no JSON-LD. |
| Dados estruturados coerentes | Organization, LocalBusiness, WebSite, Service, Article, CollectionPage, ItemList, FAQPage e BreadcrumbList de acordo com o conteúdo visível. |
| Entidade local | Endereço, telefone, horário, mapa, área atendida, especialidades e perfis oficiais reunidos na entidade SERMST. |
| Experiência para agentes | Links e botões semânticos, rótulos associados aos campos e menu móvel com estado, nome e ação explícitos. |
| Experiência de página | Layout responsivo, imagens com dimensões conhecidas, foco visível e respeito à preferência por menos movimento. |
| Conteúdo visual | Imagens originais ou institucionais são usadas quando ajudam o assunto. Não são adicionadas imagens genéricas apenas para cumprir uma regra. |

## Recursos externos em teste

### Controle de IA generativa no Search Console

O Google informa que a opção padrão é incluir o site. Quando o recurso estiver disponível para a propriedade, conferir em `Configurações > IA generativa na Pesquisa` se a opção de inclusão continua ativa.

### Relatório de desempenho de IA generativa

O relatório ainda está sendo liberado para um grupo limitado de propriedades. Quando aparecer, acompanhar impressões por página, país e dispositivo. Ele não mostra consultas.

### WebMCP

O WebMCP está em acesso antecipado e exige participação no programa do Chrome. Não há API estável que deva ser enviada para produção neste momento. A base semântica e acessível do site já prepara formulários e ações para agentes de navegador.

## Itens que não se aplicam

- Merchant Center, Business Agent e Universal Commerce Protocol são voltados a catálogos e transações de comércio eletrônico. Os serviços B2B da SERMST não formam um catálogo varejista.
- O Google Search declara que ignora `llms.txt`. O arquivo da SERMST é mantido apenas como índice auxiliar para outros sistemas que decidam utilizá-lo.
- Não existe schema especial de GEO ou de AI Overviews. Dados estruturados continuam sendo usados para entendimento e resultados enriquecidos compatíveis, sempre de acordo com o texto visível.
