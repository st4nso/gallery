# Como editar o site STANSO

Este site foi organizado para você conseguir trocar **imagem principal, imagem do CAMPO, seleção da galeria, ordem das fotos, textos e créditos** sem mexer no layout.

## 1. O arquivo mais importante: `src/data/projects.ts`

Quase tudo de cada projeto fica neste arquivo.

Procure pelo projeto, por exemplo:

```ts
{
  slug: 'plt',
  title: 'PLT',
  year: '2026',

  hero: '/images/plt/foto9.webp',
  fieldImage: '/images/plt/foto9.webp',

  gallery: [
    '/images/plt/foto4.webp',
    '/images/plt/foto1.webp',
    '/images/plt/foto6.webp',
  ],

  description: 'Texto do projeto...',

  credits: [
    { label: 'Fotografia', value: 'Lucas Stanso' },
    // etc.
  ],

  field: {
    x: 360,
    y: 1160,
    width: 310,
    imageHeight: 430,
    fit: 'cover'
  },
}
```

### Trocar a imagem principal / HERO

Altere apenas:

```ts
hero: '/images/plt/NOVA-FOTO.jpg',
```

A imagem `hero` aparece:
- como imagem principal da página do projeto;
- no preview que abre ao clicar no projeto dentro do CAMPO.

### Trocar apenas a imagem do mapa / CAMPO

Altere:

```ts
fieldImage: '/images/plt/NOVA-CAPA-DO-MAPA.jpg',
```

Assim você pode usar uma foto no mapa e outra foto como hero da página.

### Remover fotos que você não quer na seleção

Dentro de `gallery`, simplesmente APAGUE a linha da foto.

Antes:

```ts
gallery: [
  '/images/plt/foto4.webp',
  '/images/plt/foto1.webp',
  '/images/plt/foto6.webp',
],
```

Depois:

```ts
gallery: [
  '/images/plt/foto4.webp',
  '/images/plt/foto6.webp',
],
```

### Alterar a ordem das fotos

A ordem da lista é a ordem da galeria. Basta mover as linhas.

### Adicionar uma nova foto

1. Coloque o arquivo na pasta do projeto, por exemplo:
   `public/images/plt/minha-foto-nova.jpg`
2. Adicione na lista:

```ts
'/images/plt/minha-foto-nova.jpg',
```

Não é necessário converter para WebP. JPG, JPEG, PNG e WebP funcionam.

---

## 2. Trocar arquivos por versões em alta qualidade

As imagens locais ficam em:

```text
public/images/
```

Exemplo:

```text
public/images/nomofobia/foto1.webp
public/images/plt/foto9.webp
public/images/feed/foto13.webp
```

### Método mais fácil

Se a nova imagem tiver **o mesmo nome e a mesma extensão**, basta substituir o arquivo.

Exemplo: substitua

```text
public/images/plt/foto9.webp
```

por uma versão melhor também chamada `foto9.webp`.

Nenhuma linha de código precisa mudar.

### Se o nome mudar

Coloque o novo arquivo na pasta e atualize o caminho em `projects.ts`.

Alguns projetos mais antigos ainda estão temporariamente puxando imagens do repositório antigo do GitHub. Você vai reconhecer caminhos que começam com `gh(...)`. Quando tiver as versões finais em alta, o ideal é trazê-las para `public/images/NOME-DO-PROJETO/` e trocar os caminhos no arquivo.

---

## 3. Alterar textos dos projetos

Os textos curtos de cada projeto ficam em:

```text
src/data/projects.ts
```

Procure:

```ts
description: '...'
```

Você pode reescrever livremente o conteúdo entre aspas.

---

## 4. Alterar textos de SCROLL

Como SCROLL é muito maior, os textos dele foram separados em:

```text
src/data/scroll.ts
```

Ali ficam:
- texto de abertura;
- introdução da pesquisa;
- textos dos quatro capítulos;
- trecho central/tese;
- textos da publicação;
- textos dos quatro editoriais dentro de Scroll;
- texto do processo;
- seleção das imagens de publicação e processo.

Ou seja: para corrigir frases de Scroll, comece por `src/data/scroll.ts`, não pelo HTML da página.

---

## 5. Alterar créditos

No projeto em `projects.ts`, procure:

```ts
credits: [
  { label: 'Fotografia', value: 'Nome' },
  { label: 'Styling', value: 'Nome' },
]
```

Para acrescentar alguém:

```ts
{ label: 'Assistência', value: 'Nome da pessoa' },
```

Para corrigir um nome, mude apenas o valor.

---

## 6. Mudar tamanho e posição de um projeto no CAMPO

Cada projeto tem algo parecido com:

```ts
field: {
  x: 1700,
  y: 1270,
  width: 220,
  imageHeight: 300,
  fit: 'cover',
  opacity: .9
}
```

- `x`: posição horizontal;
- `y`: posição vertical;
- `width`: largura da miniatura;
- `imageHeight`: altura da miniatura;
- `opacity`: presença visual, de `0` a `1`;
- `fit: 'cover'`: a imagem preenche o quadro e pode cortar bordas;
- `fit: 'contain'`: mostra a imagem inteira dentro do quadro;
- `objectPosition`: permite escolher qual parte da foto fica priorizada quando `cover` é usado.

Exemplo:

```ts
field: {
  x: 2200,
  y: 500,
  width: 120,
  imageHeight: 160,
  fit: 'cover',
  objectPosition: 'center top',
  opacity: .65
}
```

Isso é útil para deixar trabalhos secundários quase como pequenos achados no mapa.

---

## 7. Adicionar um novo projeto

Duplique um bloco completo dentro do array `projects` em:

```text
src/data/projects.ts
```

Troque:
- `slug` — endereço, sem espaço;
- `title`;
- `year`;
- `roles`;
- `hero`;
- `fieldImage`;
- `gallery`;
- `description`;
- `credits`;
- `field`.

Exemplo futuro para shows:

```ts
{
  slug: 'ao-vivo',
  title: 'AO VIVO',
  year: '2025—2026',
  roles: ['fotografia', 'ao vivo', 'eventos'],
  type: 'arquivo',
  hero: '/images/ao-vivo/show01.jpg',
  fieldImage: '/images/ao-vivo/show01.jpg',
  gallery: [
    '/images/ao-vivo/show02.jpg',
    '/images/ao-vivo/show03.jpg',
  ],
  description: 'Seleção de fotografia de shows e eventos.',
  credits: [
    { label: 'Fotografia', value: 'Lucas Stanso' },
  ],
  layout: 'documentary',
  field: {
    x: 2250,
    y: 650,
    width: 150,
    imageHeight: 210,
    fit: 'cover',
    opacity: .7,
  },
},
```

Automaticamente ele entra no ÍNDICE e, se tiver `field` + `fieldImage`, também entra no CAMPO.

---

## 8. Onde estão as páginas e o visual

Só mexa nestes arquivos quando quiser alterar comportamento ou layout:

```text
src/pages/campo.astro
src/pages/indice.astro
src/pages/projetos/[slug].astro
src/styles/global.css
```

Para trocar fotos, textos, créditos e seleção, você normalmente NÃO precisa tocar neles.

---

## 9. Ver as alterações

Com o terminal aberto na pasta do site:

```bash
npm run dev
```

Salve o arquivo editado. O Astro normalmente atualiza o navegador sozinho.
