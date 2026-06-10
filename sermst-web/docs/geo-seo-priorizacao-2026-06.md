# Priorizacao Geo SEO - SERMST

Data: 2026-06-09

Objetivo: definir onde vale investir em conteudo local realmente unico, sem expandir o padrao doorway e sem tentar diferenciar artificialmente todas as combinacoes servico x cidade ao mesmo tempo.

## Leitura executiva

Nem todo servico da SERMST merece uma estrategia geo do mesmo tamanho.

Hoje, os sinais do projeto apontam que a intencao local/comercial e mais forte em:

- exame admissional
- exame toxicologico
- audiometria ocupacional

Ja os servicos mais documentais e tecnicos tendem a funcionar melhor por tema, setor, dor operacional ou obrigacao legal do que por cidade:

- PCMSO
- PGR
- LTCAT
- gestao eSocial SST
- pericia trabalhista

Conclusao pratica:

- manter todas as paginas atuais no ar
- parar de tratar todas como prioridade igual
- investir conteudo unico real nas paginas geo com chance organica e comercial mais alta
- usar o restante como pagina de suporte, sem ampliar agora

## Como a priorizacao foi definida

Critrios usados:

1. Intencao de busca local/transacional do servico
2. Historico do projeto e sinais locais ja registrados em auditorias e migracao
3. Aderencia do servico ao perfil economico das cidades ja mapeadas em `src/lib/data/seo-content.ts`
4. Potencial de diferenciacao real sem virar troca superficial de cidade

## Onda 1: paginas geo para investir primeiro

Estas sao as paginas com maior chance de justificar conteudo local realmente unico.

### 1. Exame admissional

Investir primeiro em:

- `/servicos/exame-admissional-expresso/sao-paulo`
- `/servicos/exame-admissional-expresso/guarulhos`
- `/servicos/exame-admissional-expresso/santo-andre`
- `/servicos/exame-admissional-expresso/sao-bernardo`
- `/servicos/exame-admissional-expresso/osasco`

Angulo unico por cidade:

- Sao Paulo
  - centro de decisao
  - alta rotatividade
  - acesso ao Centro
  - empresas que precisam liberar ASO sem travar onboarding
- Guarulhos
  - logistica, aeroporto, distribuicao, transportadoras
  - volume de admissoes em operacao
  - urgencia de contratacao em escala
- Santo Andre
  - industria historica do ABC
  - admissao para linha de producao
  - complementar com audiometria e exames ocupacionais
- Sao Bernardo
  - montadoras, autopecas e metalurgia
  - perfil de admissao com risco ocupacional mais tecnico
  - fluxo admissional ligado a exigencia de laudos e exames complementares
- Osasco
  - e-commerce, varejo e servicos
  - contratacao rapida
  - ganho de velocidade para RH

O que precisa ser exclusivo nestas paginas:

- hero local
- intro local
- 2 secoes com dor operacional da cidade
- FAQ local
- CTA com razao local para contato

### 2. Exame toxicologico

Investir primeiro em:

- `/servicos/exame-toxicologico-clt/sao-paulo`
- `/servicos/exame-toxicologico-clt/guarulhos`
- `/servicos/exame-toxicologico-clt/osasco`
- `/servicos/exame-toxicologico-clt/barueri`

Angulo unico por cidade:

- Sao Paulo
  - Centro
  - pessoa fisica + empresa
  - CNH C, D e E
  - busca "perto de mim"
- Guarulhos
  - transportadoras, aeroporto, operadores logisticos
  - motorista profissional
  - admissao em volume
- Osasco
  - e-commerce, distribuicao, ultima milha
  - contratacao rapida para operacao
  - necessidade de previsibilidade de prazo
- Barueri
  - grupos empresariais e operacoes centralizadas
  - RH mais estruturado
  - demanda por fluxo organizado e previsibilidade

O que precisa ser exclusivo nestas paginas:

- diferenca entre empresa e pessoa fisica quando fizer sentido
- contexto logistico real da cidade
- argumento de prazo e operacao
- CTA especifico para RH/logistica

### 3. Audiometria ocupacional

Investir primeiro em:

- `/servicos/audiometria-ocupacional-clinica/sao-paulo`
- `/servicos/audiometria-ocupacional-clinica/santo-andre`
- `/servicos/audiometria-ocupacional-clinica/sao-bernardo`
- `/servicos/audiometria-ocupacional-clinica/diadema`

Angulo unico por cidade:

- Sao Paulo
  - busca local por clinica de audiometria
  - centro e facilidade de acesso
  - audiometria tonal + fluxo ASO
- Santo Andre
  - industria, automotivo, metal mecanico
  - ruido ocupacional e monitoramento auditivo
- Sao Bernardo
  - montadoras e linha de producao
  - periocidade e consistencia tecnica do exame
- Diadema
  - quimico, farmaceutico, metal mecanico
  - ambiente com exposicoes fisicas e exigencia de controle serio

O que precisa ser exclusivo nestas paginas:

- setores com maior exposicao a ruido
- porque a audiometria entra ali
- argumento de monitoramento e passivo ocupacional
- FAQ local sobre repouso auditivo e fluxo

## Onda 2: geo apenas seletivo

Estas paginas podem ter geo, mas nao devem receber o mesmo nivel de investimento agora.

### Exames complementares

Candidatas:

- Sao Paulo
- Santo Andre
- Sao Bernardo

Motivo:

- ajuda no fluxo admissional e ocupacional
- mas a busca tende a ser mais complementar do que principal

### Treinamentos

Candidata principal:

- Sao Paulo

Motivo:

- a busca costuma vir mais por NR especifica do que por cidade
- melhor reforcar paginas de treinamento e normas do que abrir geos fortes em massa

## Servicos que nao devem priorizar geo agora

Para estes servicos, o melhor caminho e criar paginas por setor, obrigacao ou dor.

### PCMSO

Melhor por:

- PCMSO para construcao civil
- PCMSO para transportadora
- PCMSO para industria
- PCMSO para empresa de servicos

### PGR

Melhor por:

- PGR para construcao civil
- PGR para industria
- PGR para logisticas
- PGR para clinicas e servicos de saude

### LTCAT

Melhor por:

- LTCAT para aposentadoria especial
- LTCAT para industria com ruido
- LTCAT para empresa com agentes quimicos
- diferenca entre LTCAT, PGR e laudo de insalubridade

### Gestao eSocial SST

Melhor por:

- atraso no S-2220
- atraso no S-2240
- eSocial SST travado
- empresa sem rotina de SST no eSocial

### Pericia trabalhista

Melhor por:

- insalubridade
- periculosidade
- doenca ocupacional
- acidente do trabalho

## Modelo de conteudo unico real

Para nao virar doorway, as paginas da Onda 1 precisam mudar de substancia, nao so de cidade.

Cada pagina priorizada deve ter:

1. Abertura local real
- mencionar tipo de operacao predominante
- explicar por que aquele servico faz sentido naquele polo

2. Dor local especifica
- o que normalmente trava o RH ou a operacao naquela cidade

3. Bloco de contexto economico
- usar os dados ja mapeados em `localidades`

4. FAQ local
- perguntas que facam sentido para aquele mercado

5. CTA local
- motivo concreto para falar com a SERMST

## Ordem recomendada de execucao

### Etapa 1

- reforcar `exame-admissional-expresso/sao-paulo`
- reforcar `exame-toxicologico-clt/sao-paulo`
- reforcar `audiometria-ocupacional-clinica/sao-paulo`

### Etapa 2

- `exame-admissional-expresso/guarulhos`
- `exame-admissional-expresso/santo-andre`
- `exame-toxicologico-clt/guarulhos`
- `audiometria-ocupacional-clinica/sao-bernardo`

### Etapa 3

- `exame-admissional-expresso/osasco`
- `exame-toxicologico-clt/osasco`
- `audiometria-ocupacional-clinica/diadema`
- `exame-toxicologico-clt/barueri`

## Regra de governanca

Antes de criar ou fortalecer qualquer geo page nova, validar:

- existe intencao local clara para esse servico?
- existe angulo unico real para essa cidade?
- existe linkagem interna suficiente?
- existe satelite informacional que empurre para a pagina principal?

Se a resposta for "nao" para 2 ou mais pontos, o conteudo deve nascer como pagina por setor/dor, nao como pagina geo.
