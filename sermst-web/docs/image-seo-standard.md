# Padrão de SEO para Imagens

Este projeto deve tratar imagens como parte do SEO da página, não apenas como acabamento visual.

## 1. Nome do arquivo

Sempre usar:

- minúsculas
- palavras separadas por hífen
- sem acentos
- sem espaços
- com contexto semântico real

Exemplos bons:

- `sermst-clinica-ocupacional-sao-paulo.jpg`
- `sermst-laboratorio-ocupacional-sao-paulo.jpg`
- `sermst-hero-clinica-ocupacional.jpg`

Exemplos ruins:

- `foto1.jpg`
- `clinica2.jpg`
- `IMG_4488.png`

## 2. Texto alternativo (`alt`)

O `alt` deve:

- descrever a imagem com linguagem natural
- refletir o contexto da página
- ser específico
- evitar repetição mecânica de keyword

Exemplos bons:

- `Recepção da clínica ocupacional da SERMST em São Paulo`
- `Laboratório ocupacional da SERMST com estrutura para exames complementares`

Exemplos ruins:

- `imagem`
- `foto da empresa`
- `medicina do trabalho medicina do trabalho sao paulo`

## 3. Quando usar `alt=""`

Usar `alt=""` somente quando a imagem for puramente decorativa e a página já comunicar a mesma informação por texto.

## 4. Tamanho e carregamento

- imagens grandes devem ser comprimidas antes de entrar no projeto
- preferir largura final compatível com o uso real
- usar `sizes` quando a imagem estiver com `fill`
- usar `priority` apenas nas imagens críticas acima da dobra

## 5. Centralização

Sempre que a imagem for recorrente ou institucional, cadastrar em:

- `src/lib/site-images.ts`

Isso ajuda a manter:

- caminho padronizado
- `alt` consistente
- reaproveitamento
- integração com sitemap

## 6. Sitemap

As imagens mais relevantes das páginas principais devem ser incluídas no sitemap para reforçar descoberta por mecanismos de busca.

## 7. Regra prática para novos assets

Antes de subir qualquer imagem nova, validar:

1. O nome do arquivo está semântico?
2. O peso está adequado para web?
3. O `alt` descreve a cena no contexto da página?
4. A imagem merece entrar em `src/lib/site-images.ts`?
5. A página precisa expor essa imagem no sitemap?
