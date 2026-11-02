export type ScrollImageMedia = {
  type: 'image';
  src: string;
  alt: string;
};

export type ScrollVideoMedia = {
  type: 'video';
  src: string;
  label: string;
  autoplay: boolean;
  loop: boolean;
  muted: boolean;
  controls: boolean;
};

export type ScrollMedia =
  | ScrollImageMedia
  | ScrollVideoMedia;

export type ScrollPhysicalMedia = {
  src: string;
  alt: string;
  layout: 'closed' | 'open' | 'detail';
};


export const scrollContent = {

  /*
  ========================================================
  ABERTURA
  ========================================================
  */

  title:
    'SCROLL',

  subtitle:
    'desejo e visualidade na cultura algorítmica',

  period:
    '2025—2026',

  opening: `
Scroll investiga o que acontece com a fotografia de moda quando produzir, editar, distribuir e consumir imagens passam a fazer parte do mesmo fluxo.

Desenvolvido ao longo de um ano, o projeto parte da fotografia como construção para discutir pós-fotografia, iconofagia, circulação, programação da visibilidade e encenação.

A questão não é descobrir se uma imagem é verdadeira ou falsa, mas observar como ela produz sentido, desejo e formas de olhar.
  `.trim(),


  /*
  ========================================================
  01 — PESQUISA
  ========================================================
  */

  research: {

    intro: `
A pesquisa parte da fotografia como construção para observar como sua relação com verdade, circulação e desejo se transforma na cultura digital.

Mais do que localizar o momento em que a imagem passou a ser manipulada, interessa compreender o que muda quando seus mecanismos se tornam evidentes e quando as imagens deixam de depender apenas de quem as procura para circular em fluxos contínuos e programados.
    `.trim(),

    chapters: [

      {
        number:
          '01',

        title:
          'Do daguerreótipo ao pixel',

        text: `
A fotografia nunca foi uma operação neutra. Enquadramento, pose, cenário, iluminação, tempo e seleção sempre atravessaram aquilo que a imagem apresenta como realidade.

A digitalização não inaugura a construção fotográfica, mas amplia sua maleabilidade e torna seus mecanismos ainda mais visíveis para quem produz e consome imagens.
        `.trim()
      },

      {
        number:
          '02',

        title:
          'Pós-fotografia',

        text: `
A transformação não está apenas no aparelho fotográfico, mas na condição da imagem.

Ela passa a funcionar como arquivo mutável, replicável, editável e redistribuído em velocidade contínua. A pós-fotografia não significa o desaparecimento da fotografia anterior, mas a intensificação de tensões que já existiam nela.
        `.trim()
      },

      {
        number:
          '03',

        title:
          'Circulação e iconofagia',

        text: `
A circulação deixa de ser apenas o caminho percorrido por uma imagem depois de pronta e passa a interferir em sua própria produção.

Imagens se alimentam de repertórios anteriores, retornam reorganizadas e o corpo também passa a ser transformado em imagem para entrar nesse circuito.
        `.trim()
      },

      {
        number:
          '04',

        title:
          'A imagem procura o espectador',

        text: `
Nas plataformas digitais, a visibilidade deixa de depender apenas da decisão individual de procurar uma imagem.

Sistemas automatizados selecionam, priorizam e ordenam conteúdos segundo padrões de comportamento, retenção e engajamento. O espectador continua olhando, mas seu campo de visão já chega parcialmente organizado.
        `.trim()
      },

      {
        number:
          '05',

        title:
          'Fotografia de moda e encenação',

        text: `
A fotografia de moda evidencia seu caráter construído.

Corpo, roupa, cenário, pose, styling e luz são organizados para produzir uma situação. Reconhecer esse mecanismo não elimina sua sedução: o espectador pode conhecer a construção e ainda assim desejar a imagem, o produto ou o universo que ela propõe.
        `.trim()
      }

    ],

    statement:
      'Revelar o mecanismo não destrói a sedução.'

  },


  /*
  ========================================================
  02 — EDITORIAIS
  ========================================================
  */

  editorials: {

    intro: `
Os quatro editoriais não ilustram capítulos da pesquisa.

Cada um testa uma condição diferente da imagem contemporânea e, juntos, formam o corpo visual de Scroll.
    `.trim(),

    items: [

      {
        slug:
          'nomofobia',

        title:
          'NOMOFOBIA',

        text: `
Imagem como sintoma, monitoramento e dependência. A linguagem hospitalar transforma ansiedade, hiperconectividade e vigilância em uma situação de diagnóstico.
        `.trim()
      },

      {
        slug:
          'plt',

        title:
          'PLT',

        text: `
A roupa é deslocada de sua superfície acabada para suas estruturas de construção. Moldes e processos normalmente invisíveis passam a constituir o próprio vestuário e a própria imagem.
        `.trim()
      },

      {
        slug:
          'feed',

        title:
          'FEED',

        text: `
O still deixa de existir apenas como apresentação comercial e passa a ser pensado como imagem já preparada para postagem, circulação e consumo.
        `.trim()
      },

      {
        slug:
          'irl',

        title:
          'IRL',

        text: `
O fotógrafo assume a posição de observador enquanto o personagem atravessa a cidade absorvido pelo celular. Vigilância, distração e imagem passam a fazer parte da mesma narrativa.
        `.trim()
      }

    ]

  },


  /*
  ========================================================
  03 — PROCESSO
  ========================================================
  */

  process: {

    intro: `
O desenvolvimento de Scroll aconteceu de forma acumulativa. Moodboards, modelagem, roupas e objetos autorais, testes gráficos, materiais, registros de bastidores, impressos e vídeos fazem parte do mesmo processo, sem uma separação rígida entre pesquisa, produção e imagem final.
    `.trim(),

    media: [

      {
        type:
          'image',

        src:
          '/images/scroll/processo/estudo-pre-banca.png',

        alt:
          'Estudo inicial de Scroll'
      },

      {
        type:
          'image',

        src:
          '/images/scroll/processo/moodboard-nomofobia.png',

        alt:
          'Moodboard de Nomofobia'
      },

      {
        type:
          'image',

        src:
          '/images/scroll/processo/processo-set.png',

        alt:
          'Registros de processo e bastidores'
      },

      {
        type:
          'image',

        src:
          '/images/scroll/processo/moodboard-plt.png',

        alt:
          'Moodboard de PLT'
      },

      {
        type:
          'image',

        src:
          '/images/scroll/processo/diagramacao-inicial.png',

        alt:
          'Teste inicial de diagramação da monografia'
      },

      {
        type:
          'image',

        src:
          '/images/scroll/objetos/acessorios-bolsa-board.png',

        alt:
          'Desenvolvimento de acessórios e bolsa'
      },

      {
        type:
          'image',

        src:
          '/images/scroll/objetos/bolsas-finais.png',

        alt:
          'Bolsas desenvolvidas durante Scroll'
      },

      {
        type:
          'image',

        src:
          '/images/scroll/processo/lookbook-1.png',

        alt:
          'Estudo de looks e variações de modelagem'
      },

      {
        type:
          'image',

        src:
          '/images/scroll/processo/lookbook-2.png',

        alt:
          'Estudo de looks, proporções e acessórios'
      },

      {
        type:
          'image',

        src:
          '/images/scroll/processo/moodboard-nomofobia-cena3.png',

        alt:
          'Referências visuais e ilustração para Nomofobia'
      },

      {
        type:
          'image',

        src:
          '/images/scroll/processo/diagramacao-scroll-referencias.png',

        alt:
          'Referências de diagramação e interface para Scroll'
      },

      {
        type:
          'video',

        src:
          '/videos/scroll/caderno-processo.mp4',

        label:
          'CADERNO DE PROCESSO',

        autoplay:
          true,

        loop:
          true,

        muted:
          true,

        controls:
          true
      },

      {
        type:
          'video',

        src:
          '/videos/scroll/cartao-scroll-impressa.mp4',

        label:
          'CARTÕES DE VISITA ',

        autoplay:
          false,

        loop:
          false,

        muted:
          true,

        controls:
          true
      }

    ] as ScrollMedia[]

  },


  /*
  ========================================================
  04 — PUBLICAÇÃO
  ========================================================
  */

  publication: {

    intro: `
A publicação reúne pesquisa, fotografia e projeto gráfico dentro de uma mesma estrutura editorial.

Scroll foi desenvolvida aproximando a materialidade da publicação impressa de códigos presentes na circulação digital. Interfaces, stories, anúncios, sequências verticais e diferentes ritmos de leitura atravessam as páginas sem transformar a revista em uma simples reprodução da tela.

Os quatro editoriais coexistem dentro desse sistema e utilizam a publicação como espaço de circulação entre imagem, produto, corpo e narrativa. Importante ressaltar que as imagens da publicação são únicas. A pós-produção e montagem das imagens foram propositalmente imaginadas de formas diferentes para o ambiente digital e o material impresso, evidenciando a possibilidade de manipulação de imagem na fotografia digital.
    `.trim(),


    /*
    ======================================================
    REVISTA FÍSICA

    Faz parte diretamente de PUBLICAÇÃO.
    Não possui título próprio.
    ======================================================
    */

    physical: {

      specs:
        '16 × 25,5 CM / GRAMPO SUPERIOR / ABERTURA VERTICAL',

      media: [

        {
          src:
            '/images/scroll/mockups/revista-fechada.jpeg',

          alt:
            'Revista Scroll fechada vista de cima',

          layout:
            'closed'
        },

        
      ] as ScrollPhysicalMedia[]

    },


    /*
    ======================================================
    PÁGINAS / PUBLICAÇÃO
    ======================================================
    */

    media: [

      {
        type:
          'image',

        src:
          '/images/scroll/processo/tipografia-scroll.png',

        alt:
          'Estudo de formato e tipografia da revista Scroll'
      },

      {
        type:
          'image',

        src:
          '/images/scroll/publicacao/capa-scroll.jpg',

        alt:
          'Capa da revista Scroll'
      },

      {
        type:
          'image',

        src:
          '/images/scroll/publicacao/carta-editor.jpg',

        alt:
          'Carta do editor da revista Scroll'
      },

      {
        type:
          'image',

        src:
          '/images/scroll/publicacao/nomofobia-abertura.jpg',

        alt:
          'Abertura do editorial Nomofobia na revista Scroll'
      },

      {
        type:
          'image',

        src:
          '/images/scroll/publicacao/nomofobia-dual.jpg',

        alt:
          'Páginas do editorial Nomofobia'
      },

      {
        type:
          'image',

        src:
          '/images/scroll/publicacao/story-nomofobia.jpg',

        alt:
          'Página de Nomofobia inspirada em linguagem de story'
      },

      {
        type:
          'image',

        src:
          '/images/scroll/publicacao/plt.jpg',

        alt:
          'Páginas do editorial PLT na revista Scroll'
      },

      {
        type:
          'video',

        src:
          '/videos/scroll/folheando-plt.mp4',

        label:
          'SCROLL / PLT / FOLHEAMENTO',

        autoplay:
          false,

        loop:
          true,

        muted:
          true,

        controls:
          true
      },

      {
        type:
          'image',

        src:
          '/images/scroll/publicacao/feed-patrocinado.jpg',

        alt:
          'Página do editorial Feed construída como conteúdo patrocinado'
      },

      {
        type:
          'image',

        src:
          '/images/scroll/publicacao/irl-abertura.jpg',

        alt:
          'Abertura do editorial IRL na revista Scroll'
      }

    ] as ScrollMedia[]

  },


  /*
  ========================================================
  05 — CRÉDITOS
  ========================================================
  */

  credits: {

    intro:
      'Scroll foi desenvolvido como projeto de pesquisa, imagem e publicação para o Trabalho de Graduação Interdisciplinar pela Faculdade Santa Marcelina na conclusão do bacharelado em Moda',

    project: [

      {
        label:
          'Concepção e pesquisa',

        value:
          'Lucas Stanso'
      },

      {
        label:
          'Direção de imagem',

        value:
          'Lucas Stanso'
      },

      {
        label:
          'Design editorial',

        value:
          'Lucas Stanso'
      },

      {
        label:
          'Orientação',

        value:
          'Prof. Esp. Marcio Banfi e Prof. Dr. João Marcos da Silva'
      }

    ],

    editorials: [

      {
        title:
          'NOMOFOBIA',

        slug:
          'nomofobia'
      },

      {
        title:
          'PLT',

        slug:
          'plt'
      },

      {
        title:
          'FEED',

        slug:
          'feed'
      },

      {
        title:
          'IRL',

        slug:
          'irl'
      }

    ]

  }

};