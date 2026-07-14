# Cluster Empresario - Governanca Editorial e SEO

Data: 2026-07-08  
Projeto: `sermst-web`  
Hub principal: `/empresario`

## Objetivo do cluster

Captar buscas de topo e topo/meio de funil feitas por empresarios que ainda nao entraram pelo universo de SST, mas ja vivem dores de operacao, contratacao, regularizacao, documentos e risco. O papel do cluster nao e falar de empreendedorismo generico. E puxar o empresario real para a descoberta de obrigacoes que depois se conectam de forma natural a RH, eSocial, exames, PCMSO, PGR e servicos da SERMST.

## Regras do cluster

- Falar com empresa em operacao, nao com curioso.
- Todo conteudo precisa ter ponte explicita para funcionario, rotina, documento, fiscalizacao ou risco.
- O texto precisa soar humano, explicativo e concreto. Nada de copy inflada para SEO.
- O hub `/empresario` captura descoberta. Os hubs `/rh` e `/saude` aprofundam. As paginas de `/servicos` convertem.
- Nao geo-otimizar em excesso as URLs do cluster. O cluster e nacional na intencao. O componente local entra nas pontes comerciais e nos exemplos de atendimento em Sao Paulo.
- `llms.txt` deve manter o hub e as principais URLs listadas para facilitar descoberta por agentes e buscadores baseados em IA.

## Validacao de demanda

Leitura feita com Ubersuggest em 2026-07-08, focando Brasil e termos empresariais amplos:

| Universo | Indicacao de volume | Dificuldade SEO | Leitura |
|---|---:|---:|---|
| `cnpj consulta` / `cnpj receita federal consulta` | 673k / 550k | 42 / 51 | Muito amplo. Serve como universo semantico, mas nao devemos disputar a consulta pura. |
| `nota fiscal mei` / `mei nota fiscal` | 368k / 368k | 37 / 35 | Forte porta de entrada para MEI em transicao e crescimento. |
| `nota fiscal eletrônica` | 550k | 53 | Amplo demais para captacao direta. Melhor como contexto semantico. |
| `simples nacional consulta` / `consulta optantes` | 301k / 110k | 50 / 15 | Demanda enorme, mas a pagina deve fugir da intencao de consulta e atacar interpretacao/obrigacao. |
| `alvara de funcionamento` | 18.1k | 35 | Boa pauta de topo com ponte forte para regularizacao real. |
| `folha de pagamento` | 27.1k | 35 | Boa pauta de meio quando o angulo e "folha nao basta". |
| `vigilancia sanitaria` | 33.1k | 52 | Forte para setores sensiveis, desde que o texto fuja do juridico puro. |

Leitura estrategica:

- Vale a pena produzir o cluster.
- O ganho nao esta em vencer a head term mais transacional ou utilitaria.
- O ganho esta em capturar a duvida de interpretacao do empresario e redirecionar a jornada para obrigacoes reais.

## Arquitetura editorial

Blocos do hub:

1. `Regularizacao`
2. `Contratacao e equipe`
3. `Documentos e rotina`
4. `Fiscalizacao e risco`

Fluxo:

1. Topo: o empresario entra por CNPJ, nota, Simples, alvara, vigilancia.
2. Topo/Meio: percebe que o problema nao e so fiscal ou cadastral.
3. Meio: entra em primeiro funcionario, documentos, folha, fiscalizacao.
4. Fundo: chega em RH, Saude e servicos.

## Matriz das 12 paginas

### 1. `/empresario/cnpj-ativo-significa-empresa-regularizada`

- Palavra-chave principal: `cnpj ativo significa empresa regularizada`
- Secundarias: `empresa regularizada`, `cnpj ativo empresa regular`, `como saber se a empresa esta regularizada`
- Intencao: informacional ampla com transicao para regularizacao operacional
- Estagio: topo/meio
- Ponte principal: risco pelo CNAE, PCMSO, eSocial
- CTA principal: `/rh/calculadora-cnae-grau-de-risco`
- Anti-canibalizacao: nao disputar `cnpj consulta`, `receita federal cnpj`, `consulta cnpj`
- Observacao editorial: a pagina nao deve ensinar a consultar CNPJ; deve explicar por que o resultado da consulta nao encerra a analise

### 2. `/empresario/nota-fiscal-mei-nao-significa-empresa-regularizada`

- Palavra-chave principal: `nota fiscal mei`
- Secundarias: `mei nota fiscal`, `emitir nota fiscal mei`, `mei empresa regularizada`
- Intencao: informacional ampla com ponte para crescimento e primeiro funcionario
- Estagio: topo/meio
- Ponte principal: exame admissional, DIR, PCMSO
- CTA principal: `/saude/clinica-exame-admissional-sao-paulo`
- Anti-canibalizacao: nao disputar tutoriais de emissao de nota ou regras fiscais de NFS-e
- Observacao editorial: a pagina deve falar da virada do MEI que cresceu e ja nao opera como negocio individual

### 3. `/empresario/simples-nacional-nao-elimina-obrigacoes-da-empresa`

- Palavra-chave principal: `simples nacional`
- Secundarias: `obrigacoes da empresa simples nacional`, `simples nacional funcionario`, `empresa simples nacional obrigacoes`
- Intencao: informacional ampla sobre enquadramento com ponte para obrigacoes empresariais
- Estagio: topo/meio
- Ponte principal: RH, ASO, PGR
- CTA principal: `/rh`
- Anti-canibalizacao: nao disputar `simples nacional consulta`, `consulta optantes`, `simples nacional receita`
- Observacao editorial: a tese e "simplifica imposto, nao elimina responsabilidade operacional"

### 4. `/empresario/alvara-de-funcionamento-nao-basta`

- Palavra-chave principal: `alvara de funcionamento`
- Secundarias: `empresa regularizada alvara`, `alvara empresa regular`, `o que manter em dia na empresa`
- Intencao: informacional ampla sobre licenca e regularizacao complementar
- Estagio: topo/meio
- Ponte principal: DET, admissional, servico de admissao
- CTA principal: `/rh/domicilio-eletronico-trabalhista-det`
- Anti-canibalizacao: nao disputar emissao de alvara, consulta municipal ou guias de prefeitura
- Observacao editorial: deixar claro que licenca de funcionamento nao cobre equipe, exame, evento e prova documental

### 5. `/empresario/folha-de-pagamento-nao-e-a-unica-obrigacao`

- Palavra-chave principal: `folha de pagamento`
- Secundarias: `obrigacoes de quem tem funcionario`, `empresa com funcionario obrigacoes`, `folha de pagamento nao basta`
- Intencao: informacional de meio com foco em rotina alem do payroll
- Estagio: meio
- Ponte principal: ASO, eSocial SST, multa S-2220
- CTA principal: `/servicos/gestao-esocial-s2220-s2240/sao-paulo`
- Anti-canibalizacao: nao disputar paginas de calculo de folha ou software de folha
- Observacao editorial: o assunto central nao e folha em si; e o que fica fora dela

### 6. `/empresario/vigilancia-sanitaria-e-documentos-da-empresa`

- Palavra-chave principal: `vigilancia sanitaria`
- Secundarias: `documentos da empresa`, `empresa pequena vigilancia sanitaria`, `restaurante clinica salao documentos`
- Intencao: informacional ampla por segmento com transicao para risco operacional
- Estagio: topo/meio
- Ponte principal: risco pelo CNAE, PGR, medicina do trabalho
- CTA principal: `/rh/calculadora-cnae-grau-de-risco`
- Anti-canibalizacao: nao disputar conteudo juridico puro sobre licenca sanitaria
- Observacao editorial: dar exemplos concretos de restaurante, clinica, salao e padaria

### 7. `/empresario/empresa-pequena-com-funcionario-quais-obrigacoes`

- Palavra-chave principal: `empresa pequena com funcionario`
- Secundarias: `empresa pequena obrigacoes`, `empresa pequena funcionario obrigacoes`, `quais obrigacoes empresa pequena tem`
- Intencao: informacional de meio para empresario com dor concreta
- Estagio: meio
- Ponte principal: admissional, DIR, PCMSO
- CTA principal: `/saude/clinica-exame-admissional-sao-paulo`
- Anti-canibalizacao: esta URL deve ser a dona do tema empresa pequena + funcionario
- Observacao editorial: falar do porte pequeno sem infantilizar a obrigacao

### 8. `/empresario/primeiro-funcionario-o-que-muda-na-pratica`

- Palavra-chave principal: `primeiro funcionario`
- Secundarias: `contratei meu primeiro funcionario`, `o que muda ao contratar primeiro funcionario`, `primeira contratacao empresa`
- Intencao: informacional de meio com forte intencao de acao
- Estagio: meio
- Ponte principal: admissional expresso, ASO, hub RH
- CTA principal: `/servicos/exame-admissional-expresso/sao-paulo`
- Anti-canibalizacao: esta e a URL principal da virada da primeira contratacao
- Observacao editorial: usar linguagem de dono de empresa que precisa contratar rapido sem errar

### 9. `/empresario/documentos-obrigatorios-empresa-com-funcionarios`

- Palavra-chave principal: `documentos obrigatorios para empresa com funcionarios`
- Secundarias: `empresa com funcionarios documentos`, `checklist empresa com funcionario`, `documentos trabalhistas e ocupacionais empresa`
- Intencao: informacional de meio em formato checklist
- Estagio: meio
- Ponte principal: PCMSO, PGR, falhas no eSocial
- CTA principal: `/saude/pcmso-programa-controle-medico`
- Anti-canibalizacao: esta pagina e a dona do tema documental; a pagina 12 e a sintese do cluster, nao a lista detalhada
- Observacao editorial: escrever em tom de mapa operacional, nao de lista fria

### 10. `/empresario/contador-cuida-de-tudo`

- Palavra-chave principal: `o contador cuida de tudo`
- Secundarias: `contador cuida de tudo empresa`, `responsabilidade da empresa e do contador`, `contador e obrigacoes trabalhistas`
- Intencao: informacional de meio para alinhar responsabilidade operacional
- Estagio: topo/meio
- Ponte principal: gestao de SST, eSocial, responsabilidades internas
- CTA principal: `/saude/gestao-sst`
- Anti-canibalizacao: nao disputar conteudo de escritorio contabil ou landing de contabilidade
- Observacao editorial: o tom precisa ser didatico, nao acusatorio

### 11. `/empresario/fiscalizacao-empresa-o-que-podem-cobrar`

- Palavra-chave principal: `fiscalizacao na empresa`
- Secundarias: `o que fiscalizacao pode cobrar`, `fiscalizacao empresa funcionario`, `empresa o que pode ser cobrado alem de imposto`
- Intencao: informacional de meio orientada por risco e prova documental
- Estagio: meio
- Ponte principal: DET, CAT, PGR
- CTA principal: `/rh/domicilio-eletronico-trabalhista-det`
- Anti-canibalizacao: nao disputar conteudo tributario puro ou fiscal de nota/imposto
- Observacao editorial: transformar medo abstrato em itens concretos de exposicao

### 12. `/empresario/empresa-regularizada-com-funcionarios`

- Palavra-chave principal: `empresa regularizada com funcionarios`
- Secundarias: `checklist empresa regularizada`, `empresa com funcionarios regularizada`, `o que nao pode faltar empresa com funcionario`
- Intencao: informacional de sintese com alta capacidade de distribuicao interna
- Estagio: meio
- Ponte principal: hub RH, hub Saude, contato SERMST
- CTA principal: `/contato`
- Anti-canibalizacao: pagina de consolidacao; nao deve roubar `documentos obrigatorios`, `primeiro funcionario` ou `empresa pequena com funcionario`
- Observacao editorial: tratar como pagina sintese e nao como repeticao dos outros 11 textos

## Regras anti-canibalizacao

- `empresa pequena com funcionario` e `primeiro funcionario` nao podem prometer a mesma entrega. A primeira fala de obrigacoes por porte e realidade operacional. A segunda fala da transicao pratica da primeira contratacao.
- `documentos obrigatorios...` e a dona da intencao checklist documental. `empresa regularizada com funcionarios` e checklist sintese do cluster.
- `cnpj ativo`, `simples nacional`, `alvara` e `nota fiscal mei` devem sempre recusar a tentacao de virar tutorial de consulta, emissao ou enquadramento.
- `vigilancia sanitaria` deve ser setorial e operacional; se virar licenca pura, perde foco e abre disputa errada.
- `folha de pagamento` deve falar da camada que fica fora da folha, nao da folha em si.

## Geo SEO

- O hub e as 12 URLs devem permanecer sem cidade no slug.
- O componente local entra em:
  - CTAs para servicos em Sao Paulo
  - provas de atendimento da SERMST
  - links internos para paginas locais canonicamente vencedoras
- Nao transformar esse cluster em doorway local. A funcao dele e captar demanda nacional e entregar profundidade comercial local nas pontes.

## LLMs e discoverability

- Manter `/empresario` e as principais URLs em `public/llms.txt`.
- Usar titles e H1s claros, sem trocadilhos e sem excesso de formula pronta.
- Escrever respostas de FAQ em linguagem direta, porque agentes de IA tendem a extrair blocos curtos e objetivos.
- Evitar paragrafos inchados e repetitivos. O melhor texto para SEO aqui tambem e o melhor texto para leitura humana e resumo por LLM.

## Links internos prioritarios

- Hubs: `/rh`, `/saude`
- Servicos:
  - `/servicos/exame-admissional-expresso/sao-paulo`
  - `/servicos/pcmso-nr07-programa/sao-paulo`
  - `/servicos/pgr-nr01-gerenciamento-riscos/sao-paulo`
  - `/servicos/gestao-esocial-s2220-s2240/sao-paulo`
- Guias:
  - `/saude/pcmso-programa-controle-medico`
  - `/saude/aso-atestado-saude-ocupacional`
  - `/saude/clinica-exame-admissional-sao-paulo`
  - `/rh/calculadora-cnae-grau-de-risco`
  - `/rh/declaracao-inexistencia-risco-dir`
  - `/rh/domicilio-eletronico-trabalhista-det`

## Proximo passo de publicacao

1. Publicar primeiro as 6 paginas espinha dorsal:
   - `cnpj-ativo-significa-empresa-regularizada`
   - `nota-fiscal-mei-nao-significa-empresa-regularizada`
   - `simples-nacional-nao-elimina-obrigacoes-da-empresa`
   - `alvara-de-funcionamento-nao-basta`
   - `primeiro-funcionario-o-que-muda-na-pratica`
   - `documentos-obrigatorios-empresa-com-funcionarios`
2. Medir quais URLs puxam impressao e quais mais empurram clique para `/rh`, `/saude` e `/servicos`.
3. So depois reforcar as outras 6 com expansao de FAQs, exemplos setoriais e provas operacionais.

## Proximo passo de conteudo

Cada URL ja existe como pagina. O passo seguinte e transformar a base atual em texto final de publicacao, com:

- abertura mais especifica por pagina
- exemplos concretos por contexto empresarial
- blocos de checklist quando fizer sentido
- links internos com ancora coerente
- revisao final de ortografia, legibilidade e naturalidade
