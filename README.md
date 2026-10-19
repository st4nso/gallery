# STANSO — portfólio principal / v0.4

Modos: **CAMPO + ÍNDICE**.

Nesta versão:
- preview do CAMPO corrigido: fechar e “abrir projeto” são interativos;
- imagem do preview usa `contain`, sem recorte forçado;
- HERO, imagem do CAMPO e galeria são controlados separadamente;
- créditos completos conhecidos foram adicionados aos projetos;
- SENTINEL@404 entrou no site;
- projetos secundários/arquivo agora aparecem como miniaturas no CAMPO;
- região sutil de AO VIVO / EVENTOS / BACKSTAGE foi criada;
- textos de SCROLL foram centralizados em `src/data/scroll.ts`;
- textos, créditos, seleção fotográfica e posição no mapa ficam concentrados em `src/data/projects.ts`;
- imagens de publicação/processo de SCROLL também podem ser trocadas em `src/data/scroll.ts`.

Leia **EDITAR_SITE.md** antes de mexer nas fotos ou textos.

## Rodar

```bash
npm install
npm run dev
```

Abra o endereço mostrado pelo Astro, normalmente `http://localhost:4321/`.
