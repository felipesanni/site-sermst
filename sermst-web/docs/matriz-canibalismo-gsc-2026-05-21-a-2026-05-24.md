# Matriz de Canibalismo SEO

Periodo analisado: 2026-05-21 a 2026-05-24
Fonte: Google Search Console da propriedade `https://sermst.com.br/`
Objetivo: definir, por tema, qual URL deve vencer e quais URLs devem sair da disputa.

## Leitura rapida

- O novo site ja mostra sinais bons em `encarregado`, `gerente`, `NR-18`, `ASO`, `PCMSO` e `demissional`.
- O principal problema nao e falta de conteudo. E coexistencia entre URL canonica nova, URL com acento, URL legada de WordPress e, em alguns casos, homepage/landing capturando a mesma intencao.
- Em varios casos o redirect ja existe em [next.config.ts](/C:/Users/Felipe.Sannino/Desktop/Site%20SERMST/sermst-web/next.config.ts), mas o GSC ainda mostra a URL antiga recebendo impressao. Isso indica consolidacao ainda incompleta do Google ou links internos/externos ainda apontando para o legado.

## Matriz

| Tema | Evidencia GSC | URL que deve vencer | URLs em conflito | Decisao |
|---|---:|---|---|---|
| `exame admissional` | 1.951 impressoes | `/servicos/exame-admissional-expresso/sao-paulo` | `/exames/como-funciona-o-exame-admissional/`, `/medicina-do-trabalho/exame-admissional-perto-de-mim/`, `/`, `/sao-paulo/...` | Consolidar toda intencao transacional e local na pagina de servico. Manter guias apenas se forem informacionais e nao disputarem a head term. |
| `encarregado` | 471 impressoes, 1 clique | `/rh/funcao-encarregado` | `/rh/fun%C3%A7%C3%A3o-encarregado`, `/exames/funcao-encarregado-responsabilidades-e-perfil-ideal/` | Canonica unica em `/rh/funcao-encarregado`. Remover qualquer link interno para variante com acento. Garantir 301 funcionando para o slug acentuado e para o legado `/exames/`. |
| `gerente` | 467 impressoes | `/rh/o-que-um-gerente-faz` | `/exames/o-que-um-gerente-faz-funcoes-responsabilidades/`, `/medicina-do-trabalho/o-que-um-gerente-faz-funcoes-habilidades-e-impacto-nas-empresas/` | RH deve ser a dona do tema. O resto deve apenas redirecionar. Nao criar nova pagina para `gerente`. |
| `exame admissional perto de mim` | 75 impressoes | `/servicos/exame-admissional-expresso/sao-paulo` | `/`, `/medicina-do-trabalho/exame-admissional-perto-de-mim/` | Homepage nao deve competir por essa busca. Reforcar internal links e title/copy da pagina de servico. |
| `NR-18` | 35 impressoes | `/normas/nr-18-construcao-civil` | `/seguranca-do-trabalho/nr-18-guia-completo/` | A URL de normas deve vencer. O redirect ja existe; validar deploy e remover links para o legado. |
| `PCMSO` | 24 impressoes | `/saude/pcmso-programa-controle-medico` | `/normas/o-que-e-nr-07` | Separar intencao: `NR-07` para norma; `PCMSO` para o programa. Hoje a norma esta capturando a head term `pcmso`. |
| `ASO` | 23 impressoes | `/dicionario/o-que-e-aso` | `/saude/aso-atestado-saude-ocupacional`, `/medicina-do-trabalho/aso-tudo-o-que-voce-precisa-saber...` | Definir se `ASO` sera dicionario ou guia de saude. Minha recomendacao: dicionario vence `o que e ASO`; saude vence termos operacionais como `aso vencido`, `atestado de saude ocupacional`. |
| `exame demissional` | 21 impressoes | `/saude/exame-demissional-guia` | `/exames/como-funciona-exame-demissional/`, `/medicina-do-trabalho/como-funciona-o-exame-demissional...` | A URL de saude deve vencer. Legados devem so redirecionar. |
| `NR-7` | 20 impressoes | `/normas/o-que-e-nr-07` | `/medicina-do-trabalho/nr-07-tudo-o-que-voce-precisa-saber...` | Consolidar na pagina de norma. Nao criar nova URL para `NR-7`. |
| `gestao de sst` | 14 impressoes | `/saude/gestao-sst` | `/exames/gestao-de-sst-o-guia-completo-para-empresas-que-buscam-seguranca/` | Consolidar em `/saude/gestao-sst`. |
| `contato / Largo do Paissandu` | 19 impressoes | `/contato` | `/contato/` | Padronizar trailing slash/canonical e garantir uma unica versao interna. |

## Decisao por cluster

### 1. Admissional

Pagina vencedora:
- `/servicos/exame-admissional-expresso/sao-paulo`

Paginas que devem parar de disputar:
- `/exames/como-funciona-o-exame-admissional/`
- `/medicina-do-trabalho/exame-admissional-perto-de-mim/`
- `/sao-paulo/onde-realizar-exame-admissional-na-liberdade-sao-paulo/`
- `/sao-paulo/pinheiros/clinica-para-exame-admissional-em-pinheiros/`
- homepage para termos como `clinica de exame admissional`, `onde fazer exame admissional`, `aso perto de mim`

Acao:
- manter 301 de todas as legadas
- revisar links internos que ainda apontem para guias antigos
- evitar criar novas paginas topo de funil para `exame admissional` enquanto a consolidacao nao estabilizar

### 2. Encarregado

Pagina vencedora:
- `/rh/funcao-encarregado`

Paginas que devem sair da disputa:
- `/rh/fun%C3%A7%C3%A3o-encarregado`
- `/exames/funcao-encarregado-responsabilidades-e-perfil-ideal/`
- `/medicina-do-trabalho/funcao-do-encarregado-responsabilidades-competencias-e-impacto-no-ambiente-de-trabalho/`

Acao:
- este e o cluster mais urgente porque ja tem clique e muito volume inicial no novo site
- validar que a versao com acento esta 301 de fato em producao
- garantir que sitemap, breadcrumbs, cards e links internos usem so `/rh/funcao-encarregado`

### 3. Gerente

Pagina vencedora:
- `/rh/o-que-um-gerente-faz`

Paginas que devem sair da disputa:
- `/exames/o-que-um-gerente-faz-funcoes-responsabilidades/`
- `/medicina-do-trabalho/o-que-um-gerente-faz-funcoes-habilidades-e-impacto-nas-empresas/`

Acao:
- manter RH como dono do tema
- evitar qualquer nova pagina parecida com `funcao de gerente`, `o que e gerente`, `o que faz um gerente`

### 4. NR-18

Pagina vencedora:
- `/normas/nr-18-construcao-civil`

Pagina em conflito:
- `/seguranca-do-trabalho/nr-18-guia-completo/`

Acao:
- o redirect ja existe
- o GSC ainda mostra o legado com mais impressoes que a nova URL para varias consultas
- revisar se ha links internos herdados, backlinks principais ou canonicals antigos sustentando a URL legada

### 5. NR-07 / PCMSO

Separacao recomendada:
- `NR-07`, `nr 7`, `o que e nr 7`, `norma regulamentadora 7` -> `/normas/o-que-e-nr-07`
- `PCMSO`, `pcmso o que e`, `programa de controle medico` -> `/saude/pcmso-programa-controle-medico`

Problema atual:
- a pagina de norma esta capturando `pcmso`
- a pagina de saude ainda nao assumiu a head term

Acao:
- nao abrir pagina nova
- reforcar a pagina de `PCMSo` com title, h1, anchors internos e links contextuais a partir da pagina de NR-07

### 6. ASO

Separacao recomendada:
- definicao base `o que e aso`, `significado de aso` -> `/dicionario/o-que-e-aso`
- uso operacional `aso vencido`, `atestado de saude ocupacional`, `quando emitir aso` -> `/saude/aso-atestado-saude-ocupacional`

Paginas antigas em conflito:
- `/medicina-do-trabalho/aso-tudo-o-que-voce-precisa-saber-sobre-o-atestado-de-saude-ocupacional/`
- `/medicina-do-trabalho/tudo-sobre-o-aso-admissional-garantindo-a-saude-e-seguranca-no-trabalho/`

Acao:
- manter duas paginas so se a intencao estiver realmente separada
- se quiser simplificar, escolher uma pagina so como dona de `ASO`

### 7. Demissional

Pagina vencedora:
- `/saude/exame-demissional-guia`

Paginas que devem sair:
- `/exames/como-funciona-exame-demissional/`
- `/medicina-do-trabalho/como-funciona-o-exame-demissional-guia-completo-e-estrategico/`

Acao:
- o redirect ja existe
- o GSC ainda mostra legado com impressoes relevantes

## Temas em que NAO abrir nova pagina agora

- exame admissional
- exame admissional perto de mim
- encarregado
- gerente
- NR-18
- NR-07
- PCMSO
- ASO
- exame demissional
- gestao de SST

## Temas que ainda podem virar nova frente depois da limpeza

- `LTCAT`
- `CAT acidente de trabalho`
- `riscos psicossociais`

Esses tres ainda fazem sentido, mas so depois que os clusters acima estiverem consolidados para nao somar mais ruido ao site.

## Ordem recomendada de execucao

1. Corrigir canibalismo por slug/redirect:
   - `/rh/fun%C3%A7%C3%A3o-encarregado` -> `/rh/funcao-encarregado`
   - `/contato/` vs `/contato`

2. Consolidar legados com maior disputa inicial:
   - `encarregado`
   - `gerente`
   - `exame admissional`
   - `exame demissional`

3. Separar intencao entre norma e guia:
   - `NR-07` vs `PCMSO`
   - `ASO` dicionario vs saude

4. So depois criar novos blocos topo de funil:
   - `LTCAT`
   - `CAT`
   - `riscos psicossociais`

## Proximo passo prático

Transformar esta matriz em plano tecnico dentro do site:
- revisar redirects existentes e lacunas
- revisar canonicals
- revisar links internos e cards dos hubs
- revisar titles/H1 das paginas vencedoras para bater melhor na query-alvo
