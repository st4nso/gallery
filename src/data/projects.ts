export type Motion =
  | 'still'
  | 'drift-a'
  | 'drift-b'
  | 'drift-c'
  | 'float';

export type GalleryLayout =
  | 'full'
  | 'wide'
  | 'medium-left'
  | 'medium-right'
  | 'small-left'
  | 'small-right'
  | 'pair-left'
  | 'pair-right';

export type ProjectCredit = {
  label: string;
  value: string;
};

export type FieldSettings = {
  x: number;
  y: number;
  width: number;
  imageHeight?: number;
  fit?: 'cover' | 'contain';
  objectPosition?: string;
  opacity?: number;
  z?: number;
};

export type Project = {
  slug: string;
  title: string;
  year: string;
  type: string;

  roles: string[];
  categories: string[];

  description: string;

  hero?: string;

  /*
  Projetos como ARQUIVO P&B podem usar
  uma imagem diferente a cada visita.
  */
  randomHero?: boolean;

  fieldImage?: string;
  fieldVideo?: string;

  gallery: string[];

  videos?: string[];

  credits: ProjectCredit[];

  editorialIntro?: string;

  galleryLayout?: GalleryLayout[];

  nextProject?: string;

  relation?: 'scroll';

  zone?:
    | 'scroll'
    | 'music'
    | 'live'
    | 'archive';

  motion?: Motion;

  field?: FieldSettings;
};


const legacy = (
  folder: string,
  file: string
) => {

  const encodedFolder =
    folder
      .split('/')
      .map(encodeURIComponent)
      .join('/');


  const encodedFile =
    file
      .split('/')
      .map(encodeURIComponent)
      .join('/');


  return (
    `https://raw.githubusercontent.com/`
    +
    `st4nso/portifolio/main/`
    +
    `src/assets/ensaios/`
    +
    `${encodedFolder}/${encodedFile}`
  );

};



export const projects: Project[] = [

  /*
  =========================================================
  SCROLL
  =========================================================
  */

  {
    slug: 'scroll',

    title: 'SCROLL',

    year: '2025—2026',

    type:
      'Pesquisa / publicação / fotografia de moda',

    roles: [
      'Pesquisa',
      'Direção de arte',
      'Fotografia',
      'Styling',
      'Edição',
      'Design editorial'
    ],

    categories: [
      'direção de arte',
      'fotografia',
      'styling',
      'edição',
      'design editorial'
    ],

    description:
      'Scroll: desejo e visualidade na cultura algorítmica. Pesquisa desenvolvida ao longo de um ano articulando fotografia de moda, pós-fotografia, circulação de imagens, iconofagia, desejo, encenação e sistemas contemporâneos de visibilidade.',

    gallery: [],

    credits: [
      {
        label: 'Concepção e pesquisa',
        value: 'Lucas Stanso'
      },

      {
        label: 'Direção de imagem',
        value: 'Lucas Stanso'
      },

      {
        label: 'Design editorial',
        value: 'Lucas Stanso'
      },

      {
        label: 'Orientação',
        value:
          'Prof. Esp. Marcio Banfi e Prof. Dr. João Marcos da Silva'
      }
    ],

    motion: 'still',

    zone: 'scroll'
  },



  /*
  =========================================================
  NOMOFOBIA
  =========================================================
  */

  {
    slug: 'nomofobia',

    title: 'NOMOFOBIA',

    year: '2026',

    type: 'Editorial',

    roles: [
      'Fotografia',
      'Direção de arte',
      'Styling',
      'Edição'
    ],

    categories: [
      'fotografia',
      'direção de arte',
      'styling',
      'edição'
    ],

    description:
      'NOMOFOBIA aproxima hiperconectividade, dependência tecnológica e linguagem clínica. O corpo fotografado aparece simultaneamente como paciente, superfície de observação e interface.',

    editorialIntro:
      'NOMOFOBIA parte da hiperconectividade e da dependência das telas para construir uma situação de diagnóstico. A linguagem hospitalar transforma o corpo em paciente, produto e interface, enquanto dispositivos, monitoramento e encenação aproximam cuidado, controle e consumo de imagem.',

    hero:
      '/gallery/images/nomofobia/nomofobia-1.jpg',

    fieldImage:
      '/gallery/images/nomofobia/nomofobia-3.jpg',

    gallery: [
      '/gallery/images/nomofobia/nomofobia-2.jpg',
      '/gallery/images/nomofobia/nomofobia-3.jpg',
      '/gallery/images/nomofobia/nomofobia-4.jpg',
      '/gallery/images/nomofobia/nomofobia-5.jpg',
      '/gallery/images/nomofobia/nomofobia-6.jpg',
      '/gallery/images/nomofobia/nomofobia-7.jpg',
      '/gallery/images/nomofobia/nomofobia-8.jpg',
      '/gallery/images/nomofobia/nomofobia-9.jpg',
      '/gallery/images/nomofobia/nomofobia-10.webp',
      '/gallery/images/nomofobia/nomofobia-11.jpg',
      '/gallery/images/nomofobia/nomofobia-12.jpg',
      '/gallery/images/nomofobia/nomofobia-13.jpg'
    ],

    galleryLayout: [
      'wide',
      'medium-left',
      'small-right',
      'medium-right',
      'wide',
      'pair-left',
      'pair-right',
      'full',
      'medium-right',
      'medium-left',
      'medium-right',
      'wide'
    ],

    nextProject: 'plt',

    credits: [
      {
        label: 'Direção de arte',
        value: 'Lucas Stanso'
      },

      {
        label: 'Fotografia',
        value: 'Lucas Stanso e Nuriê Ross'
      },

      {
        label: 'Styling',
        value: 'Lucas Stanso e Gika Corbane'
      },

      {
        label: 'Edição de moda',
        value: 'Lucas Stanso e Phel'
      },

      {
        label: 'Iluminação',
        value: 'Nuriê Ross'
      },

      {
        label: 'Modelos',
        value: 'Blue Sanders e Helena Bohn'
      },

      {
        label: 'MUA',
        value: 'Mimi de Maria'
      },

      {
        label: 'Edição',
        value: 'Lucas Stanso'
      },

      {
        label: 'Confecção de roupas',
        value: 'Lucas Stanso e Phel'
      },

      {
        label: 'Parceiros',
        value:
          'Pandora’s Box e Acervo Utimura'
      },

      {
        label: 'Agradecimentos',
        value:
          'Isaque Rovari e Renato Almeida'
      }
    ],

    relation: 'scroll',

    motion: 'still',

    field: {
      x: 140,
      y: 160,

      width: 455,

      imageHeight: 540,

      fit: 'cover',

      objectPosition:
        'center center',

      opacity: 1,

      z: 8
    },

    zone: 'scroll'
  },



  /*
  =========================================================
  PLT
  =========================================================
  */

  {
    slug: 'plt',

    title: 'PLT',

    year: '2026',

    type: 'Editorial',

    roles: [
      'Fotografia',
      'Direção de arte',
      'Styling',
      'Edição'
    ],

    categories: [
      'fotografia',
      'direção de arte',
      'styling',
      'edição'
    ],

    description:
      'PLT desloca o olhar da superfície final da roupa para sua estrutura construtiva. Moldes de papel, volumes e processos normalmente invisíveis passam a constituir o próprio vestuário.',

    editorialIntro:
      'PLT parte da modelagem como linguagem visual. O editorial aproxima roupa, molde e experimento para construir silhuetas entre o vestível e o protótipo. Papel kraft, fita, impressão e volume aparecem como matéria de imagem e como estrutura de moda.',

    hero:
      '/gallery/images/plt/IMG_0131.jpg',

    fieldImage:
      '/gallery/images/plt/IMG_0131.jpg',

    gallery: [
      '/gallery/images/plt/IMG_0119.jpg',
      '/gallery/images/plt/IMG_0006_1.jpg',
      '/gallery/images/plt/IMG_0099.jpg',
      '/gallery/images/plt/IMG_0090.jpg',
      '/gallery/images/plt/IMG_0024.jpg',
      '/gallery/images/plt/IMG_0060.jpg',
      '/gallery/images/plt/IMG_0031-2.jpg'
    ],

    galleryLayout: [
      'wide',
      'medium-left',
      'small-right',
      'wide',
      'pair-left',
      'pair-right',
      'wide'
    ],

    nextProject: 'feed',

    credits: [
      {
        label: 'Direção de arte',
        value: 'Lucas Stanso'
      },

      {
        label: 'Fotografia e edição',
        value: 'Lucas Stanso'
      },

      {
        label: 'Styling',
        value: 'Lucas Stanso'
      },

      {
        label: 'Assistência de styling',
        value: 'Phel e Renato Almeida'
      },

      {
        label: 'Iluminação',
        value: 'Lucas Stanso'
      },

      {
        label: 'Modelo',
        value: 'Julia Maestri'
      },

      {
        label: 'MUA',
        value: 'Mimi de Maria'
      },

      {
        label: 'Confecção',
        value:
          'Lucas Stanso, Phel e Renato Almeida'
      }
    ],

    relation: 'scroll',

    motion: 'drift-a',

    field: {
      x: 760,
      y: 1080,

      width: 255,

      imageHeight: 335,

      fit: 'cover',

      objectPosition:
        'center center',

      opacity: 0.95,

      z: 7
    },

    zone: 'scroll'
  },



  /*
  =========================================================
  FEED
  =========================================================
  */

  {
    slug: 'feed',

    title: 'FEED',

    year: '2026',

    type: 'Still / Editorial',

    roles: [
      'Fotografia',
      'Direção de arte',
      'Edição'
    ],

    categories: [
      'fotografia',
      'direção de arte',
      'edição'
    ],

    description:
      'Partindo da estética do still fotográfico, FEED observa a transformação do produto em conteúdo visual destinado à circulação, ao engajamento e à produção de desejo.',

    hero:
      '/gallery/images/feed/_M2A9658-Editar-Editar.jpg',

    fieldImage:
      '/gallery/images/feed/_M2A9689.jpg',

    gallery: [
      '/gallery/images/feed/_M2A9708.jpg',
      '/gallery/images/feed/_M2A9685.jpg',
      '/gallery/images/feed/_M2A9677-Editar.jpg',
      '/gallery/images/feed/_M2A9689.jpg',
      '/gallery/images/feed/_M2A9623.jpg',
      '/gallery/images/feed/_M2A9647.jpg',
      '/gallery/images/feed/_M2A9696.jpg',
      '/gallery/images/feed/_M2A9680.jpg'
    ],

    nextProject: 'irl',

    credits: [
      {
        label: 'Direção de arte',
        value: 'Lucas Stanso'
      },

      {
        label: 'Fotografia e edição',
        value: 'Lucas Stanso'
      },

      {
        label: 'Iluminação',
        value:
          'Nuriê Ross e Gabrielle Scibor'
      },

      {
        label: 'Sapato',
        value: 'Lucca Reboredo'
      },

      {
        label: 'Bolsa',
        value: 'Laura Menezes'
      }
    ],

    relation: 'scroll',

    motion: 'drift-b',

    field: {
      x: 1680,
      y: 780,

      width: 260,

      imageHeight: 360,

      fit: 'cover',

      objectPosition:
        'center center',

      opacity: 0.96,

      z: 7
    },

    zone: 'scroll'
  },



  /*
  =========================================================
  IRL
  =========================================================
  */

  {
    slug: 'irl',

    title: 'IRL',

    year: '2026',

    type: 'Editorial',

    roles: [
      'Fotografia',
      'Direção de arte',
      'Styling',
      'Edição'
    ],

    categories: [
      'fotografia',
      'direção de arte',
      'styling',
      'edição'
    ],

    description:
      'IRL trabalha a posição simultânea de observador e observado. A câmera acompanha um personagem pela cidade enquanto sua atenção permanece capturada pela tela.',

    hero:
      legacy(
        'irl',
        'foto10.jpg'
      ),

    fieldImage:
      legacy(
        'irl',
        'foto3.jpg'
      ),

    /*
    foto10 é hero e não se repete.
    */

    gallery: [
      legacy('irl', 'foto11.jpg'),
      legacy('irl', 'foto14.jpg'),
      legacy('irl', 'foto15.jpg'),
      legacy('irl', 'foto17.jpg'),
      legacy('irl', 'foto18.jpg'),
      legacy('irl', 'foto19.jpg'),
      legacy('irl', 'foto3.jpg'),
      legacy('irl', 'foto4.jpg'),
      legacy('irl', 'foto5.jpg'),
      legacy('irl', 'foto9.jpg')
    ],

    nextProject:
      'nomofobia',

    credits: [
      {
        label: 'Direção de arte',
        value: 'Lucas Stanso'
      },

      {
        label: 'Fotografia e edição',
        value: 'Lucas Stanso'
      },

      {
        label: 'Styling',
        value:
          'Lucas Stanso e Raphael Nunes'
      },

      {
        label: 'Modelo',
        value:
          'Kim Zambelli Terra'
      },

      {
        label: 'Ilustração / MUA',
        value: 'Mimi de Maria'
      },

      {
        label: 'Serigrafia',
        value:
          'Lucas Stanso e Fernando Rocha — Fresh Lab Atelier'
      },

      {
        label:
          'Confecção de acessórios',

        value:
          'Lucas Stanso, Renato Almeida e Laura Menezes'
      },

      {
        label:
          'Confecção de roupas',

        value:
          'Lucas Stanso, Khel Sued, Phel e Renato Almeida'
      }
    ],

    relation: 'scroll',

    motion: 'drift-c',

    field: {
      x: 1950,
      y: 1160,

      width: 195,

      imageHeight: 255,

      fit: 'cover',

      opacity: 0.82,

      z: 5
    },

    zone: 'scroll'
  },



  /*
  =========================================================
  SEM DOC
  =========================================================
  */

  {
    slug: 'sem-doc',

    title: 'SEM DOC',

    year: '2026',

    type:
      'Fotografia / Música',

    roles: [
      'Fotografia'
    ],

    categories: [
      'fotografia'
    ],

    description:
      'Fotografias promocionais para Sem Doc, de Viken.',

    hero:
      legacy(
        'sem doc',
        'foto1.jpg'
      ),

    fieldImage:
      legacy(
        'sem doc',
        'foto3.jpg'
      ),

    gallery: [
      legacy('sem doc', 'foto1.jpg'),
      legacy('sem doc', 'foto10.jpg'),
      legacy('sem doc', 'foto2.jpg'),
      legacy('sem doc', 'foto3.jpg'),
      legacy('sem doc', 'foto4.jpg'),
      legacy('sem doc', 'foto5.jpg'),
      legacy('sem doc', 'foto6.jpg'),
      legacy('sem doc', 'foto7.jpg'),
      legacy('sem doc', 'foto9.jpg')
    ],

    credits: [
      {
        label: 'Fotografia',
        value: 'Lucas Stanso'
      },

      {
        label: 'Modelos',
        value: 'Viken e Isla'
      },

      {
        label: 'Produção executiva',
        value: 'Renato Almeida'
      },

      {
        label: 'Styling',
        value: 'Renato Almeida'
      }
    ],

    motion: 'still',

    field: {
      x: 1300,
      y: 130,

      width: 225,

      imageHeight: 275,

      fit: 'cover',

      opacity: 0.98,

      z: 7
    },

    zone: 'music'
  },



  /*
  =========================================================
  MEMÓRIAS DE MARTE
  =========================================================
  */

  {
    slug: 'memorias-de-marte',

    title:
      'MEMÓRIAS DE MARTE',

    year: '2026',

    type:
      'Fotografia / Música',

    roles: [
      'Fotografia',
      'Edição'
    ],

    categories: [
      'fotografia',
      'edição'
    ],

    description:
      'Fotografias para Memórias de Marte, do artista Stef.',

    hero:
      '/gallery/images/steff/foto-20.jpg',

    fieldImage:
      '/gallery/images/steff/foto-20.jpg',

    /*
    foto-20 é hero.
    Não se repete na galeria.
    */

    gallery: [
      '/gallery/images/steff/foto-1.jpg',
      '/gallery/images/steff/foto-2.jpg',
      '/gallery/images/steff/foto-3.jpg',

      '/gallery/images/steff/foto-5.jpg',
      '/gallery/images/steff/foto-6.jpg',
      '/gallery/images/steff/foto-7.jpg',
      '/gallery/images/steff/foto-8.jpg',
      '/gallery/images/steff/foto-9.jpg',

      '/gallery/images/steff/foto-10.jpg',
      '/gallery/images/steff/foto-11.jpg',
      '/gallery/images/steff/foto-12.jpg',
      '/gallery/images/steff/foto-13.jpg',
      '/gallery/images/steff/foto-14.jpg',
      '/gallery/images/steff/foto-15.jpg',
      '/gallery/images/steff/foto-16.jpg',
      '/gallery/images/steff/foto-17.jpg',
      '/gallery/images/steff/foto-18.jpg',
      '/gallery/images/steff/foto-19.jpg',

      '/gallery/images/steff/foto-21.jpg',
      '/gallery/images/steff/foto-22.jpg',
      '/gallery/images/steff/foto-23.jpg',
      '/gallery/images/steff/foto-24.jpg'
    ],

    credits: [
      {
        label:
          'Fotografia e edição',

        value:
          'Lucas Stanso'
      },

      {
        label: 'Realização',
        value: 'Stef'
      },

      {
        label: 'Direção',
        value: 'Isabella Gomez'
      },

      {
        label: 'Styling',
        value:
          'Renato Almeida e Guilherme Martins'
      },

      {
        label: 'Visualizer',
        value:
          'Jefferson Jukovski'
      }
    ],

    motion: 'drift-a',

    field: {
      x: 1580,
      y: 220,

      width: 230,

      imageHeight: 170,

      fit: 'cover',

      objectPosition:
        'center center',

      opacity: 1,

      z: 6
    },

    zone: 'music'
  },



  /*
  =========================================================
  NUNCA MAIS DO MESMO
  =========================================================
  */

  {
    slug:
      'nunca-mais-do-mesmo',

    title:
      'NUNCA MAIS DO MESMO',

    year: '2026',

    type:
      'Fotografia / Música',

    roles: [
      'Fotografia',
      'Edição'
    ],

    categories: [
      'fotografia',
      'edição'
    ],

    description:
      'Fotografias para Nunca Mais do Mesmo, projeto de Ths com Stef.',

    hero:
      '/gallery/images/ths & stef/foto-11.jpg',

    fieldImage:
      '/gallery/images/ths & stef/foto-11.jpg',

    /*
    foto-11 é hero.
    foto-14 não existe.
    */

    gallery: [
      '/gallery/images/ths & stef/foto-1.jpg',
      '/gallery/images/ths & stef/foto-2.jpg',
      '/gallery/images/ths & stef/foto-3.jpg',
      '/gallery/images/ths & stef/foto-4.jpg',
      '/gallery/images/ths & stef/foto-5.jpg',
      '/gallery/images/ths & stef/foto-6.jpg',
      '/gallery/images/ths & stef/foto-7.jpg',
      '/gallery/images/ths & stef/foto-8.jpg',
      '/gallery/images/ths & stef/foto-9.jpg',
      '/gallery/images/ths & stef/foto-10.jpg',

      '/gallery/images/ths & stef/foto-12.jpg',
      '/gallery/images/ths & stef/foto-13.jpg',

      '/gallery/images/ths & stef/foto-15.jpg',
      '/gallery/images/ths & stef/foto-16.jpg',
      '/gallery/images/ths & stef/foto-17.jpg',
      '/gallery/images/ths & stef/foto-18.jpg'
    ],

    credits: [
      {
        label:
          'Fotografia e edição',

        value:
          'Lucas Stanso'
      },

      {
        label: 'Styling',

        value:
          'Renato Almeida e Guilherme Martins'
      },

      {
        label:
          'Realização e direção',

        value: 'Ths'
      },

      {
        label: 'Modelos',
        value: 'Stef e Ths'
      }
    ],

    motion: 'drift-b',

    field: {
      x: 1600,
      y: 1450,

      width: 205,

      imageHeight: 265,

      fit: 'cover',

      objectPosition:
        'center center',

      opacity: 1,

      z: 5
    },

    zone: 'music'
  },



  /*
  =========================================================
  I’M SO PROUD OF U
  =========================================================
  */

  {
    slug:
      'im-so-proud-of-u',

    title:
      'I’M SO PROUD OF U',

    year: '2026',

    type:
      'Styling / Artwork',

    roles: [
      'Styling',
      'Direção criativa / arte'
    ],

    categories: [
      'styling',
      'direção de arte'
    ],

    description:
      'Styling e desenvolvimento visual para I’M SO PROUD OF U, de Kweller.',

    hero:
      '/gallery/images/external/kweller-spotify.webp',

    fieldImage:
      '/gallery/images/kweller/foto kira.jpeg',

    gallery: [
      '/gallery/images/external/kweller-spotify.webp'
    ],

    credits: [
      {
        label:
          'Direção criativa / arte',

        value:
          'Lucas Stanso'
      },

      {
        label: 'Styling',
        value: 'Lucas Stanso'
      },

      {
        label:
          'Assistência de styling',

        value:
          'Renato Almeida e Heron Santos'
      },

      {
        label: 'Fotografia',
        value: 'Kira'
      },

      {
        label: 'Realização',
        value: 'Navii Ent'
      },

      {
        label: 'Visualizer',
        value: 'prodbydyh'
      }
    ],

    motion: 'float',

    field: {
      x: 2370,
      y: 400,

      width: 135,

      imageHeight: 165,

      fit: 'cover',

      objectPosition:
        'center center',

      opacity: 0.67,

      z: 2
    },

    zone: 'music'
  },



  /*
  =========================================================
  SENTINEL
  =========================================================
  */

  {
    slug: 'sentinel',

    title: 'SENTINEL@404',

    year: '2025',

    type: 'Editorial',

    roles: [
      'Fotografia',
      'Edição'
    ],

    categories: [
      'fotografia',
      'edição'
    ],

    description:
      'Editorial desenvolvido para o projeto de conclusão de Gika Corbane, articulando cultura digital, ciberespaço e referências de Serial Experiments Lain.',

    hero:
      legacy(
        'sentinel',
        'IMG_5018.JPG'
      ),

    fieldImage:
      legacy(
        'sentinel',
        'IMG_5019 limiar.jpg'
      ),

    /*
    IMG_5018 é hero.
    Não se repete.
    */

    gallery: [
      legacy(
        'sentinel',
        'IMG_5019 limiar.jpg'
      ),

      legacy(
        'sentinel',
        'IMG_5281.JPG'
      ),

      legacy(
        'sentinel',
        'IMG_5371.JPG'
      ),

      legacy(
        'sentinel',
        'IMG_5472.JPG'
      )
    ],

    credits: [
      {
        label: 'Fotografia',
        value: 'Lucas Stanso'
      },

      {
        label: 'Direção',
        value:
          'Gika Corbane e Pedro Fanazaro'
      },

      {
        label: 'Styling',
        value: 'Gika Corbane'
      },

      {
        label: 'Modelo',
        value: 'Gika Corbane'
      },

      {
        label: 'Beauty',
        value: 'Laura Menezes'
      },

      {
        label: 'Cenografia',
        value: 'Nuriê Ross'
      },

      {
        label: 'Vídeo',
        value: 'Pedro Fanazaro'
      }
    ],

    motion: 'float',

    field: {
      x: 2185,
      y: 1110,

      width: 155,

      imageHeight: 205,

      fit: 'cover',

      opacity: 0.76,

      z: 4
    },

    zone: 'archive'
  },



  /*
  =========================================================
  DJ SMOKE
  =========================================================
  */

  {
    slug: 'dj-smoke',

    title: 'DJ SMOKE',

    year: '2025',

    type:
      'Fotografia / Música',

    roles: [
      'Fotografia',
      'Styling'
    ],

    categories: [
      'fotografia',
      'styling'
    ],

    description:
      'Retrato e imagem de artista.',

    hero:
      '/gallery/images/smoke/foto10.jpg',

    fieldImage:
      '/gallery/images/smoke/foto7.jpg',

    /*
    foto10 é hero.
    Não se repete na galeria.
    */

    gallery: [
      '/gallery/images/smoke/foto2.jpg',
      '/gallery/images/smoke/foto8.jpg',
      '/gallery/images/smoke/foto12.jpg',
      '/gallery/images/smoke/foto11.jpg',
      '/gallery/images/smoke/foto5.jpg',
      '/gallery/images/smoke/foto15.jpg',
      '/gallery/images/smoke/foto13.jpg',
      '/gallery/images/smoke/foto16.jpg',
      '/gallery/images/smoke/foto17.jpg',
      '/gallery/images/smoke/foto21.jpg',
      '/gallery/images/smoke/foto20.jpg',
      '/gallery/images/smoke/foto23.jpg',
      '/gallery/images/smoke/foto24.jpg',
      '/gallery/images/smoke/foto25.jpg',
      '/gallery/images/smoke/foto7.jpg'
    ],

    credits: [
      {
        label: 'Fotografia',
        value: 'Lucas Stanso'
      },

      {
        label: 'Artista',
        value: 'DJ Smoke'
      },

      {
        label:
          'Produção de moda',

        value:
          'Renato Almeida'
      },

      {
        label: 'Styling',
        value: 'Lucas Stanso'
      }
    ],

    motion: 'drift-b',

    field: {
      x: 2510,
      y: 715,

      width: 118,

      imageHeight: 155,

      fit: 'cover',

      opacity: 0.7,

      z: 2
    },

    zone: 'live'
  },



  /*
  =========================================================
  RADIO CLUB
  =========================================================
  */

  {
    slug: 'radio-club',

    title: 'RADIO CLUB',

    year: '2022',

    type:
      'Backstage / Desfile',

    roles: [
      'Fotografia'
    ],

    categories: [
      'fotografia'
    ],

    description:
      'Cobertura de backstage do desfile da Radio Club, realizado no Fórum da Faculdade Santa Marcelina em 2022.',

    hero:
      '/gallery/images/radio_club/radio16.jpg',

    fieldImage:
      '/gallery/images/radio_club/radio16.jpg',

    /*
    radio16 é hero.
    Não se repete.
    */

    gallery: [
      '/gallery/images/radio_club/radio19.jpg',
      '/gallery/images/radio_club/radio20.jpg',
      '/gallery/images/radio_club/radio22.jpg',
      '/gallery/images/radio_club/radio24.jpg',
      '/gallery/images/radio_club/radio15.jpg',
      '/gallery/images/radio_club/radio3_r.jpg',
      '/gallery/images/radio_club/radio4.jpg',
      '/gallery/images/radio_club/radio5.jpg',
      '/gallery/images/radio_club/radio8.jpg',
      '/gallery/images/radio_club/radio13.jpg',
      '/gallery/images/radio_club/radio11.jpg'
    ],

    nextProject:
      'crystalline',

    credits: [
      {
        label: 'Fotografia',
        value: 'Lucas Stanso'
      },

      {
        label: 'Marca',
        value: 'Radio Club'
      },

      {
        label: 'Estilista',
        value: 'Gabriel Berloffa'
      },

      {
        label: 'Styling',
        value: 'Phel Nunes'
      }
    ],

    motion: 'drift-c',

    field: {
      x: 2355,
      y: 900,

      width: 110,

      imageHeight: 145,

      fit: 'cover',

      objectPosition:
        'center center',

      opacity: 0.67,

      z: 2
    },

    zone: 'live'
  },



  /*
  =========================================================
  ARQUIVO P&B
  =========================================================
  */

  {
    slug: 'arquivo-pb',

    title: 'ARQUIVO P&B',

    year: '2024—2026',

    type:
      'Arquivo fotográfico / seleção',

    roles: [
      'Fotografia'
    ],

    categories: [
      'fotografia'
    ],

    description:
      'Seleção de fotografias em preto e branco produzidas em diferentes contextos entre 2024 e 2026, incluindo backstage, eventos, retratos, registros pessoais e trabalhos diversos. Reunidas fora de suas séries originais, as imagens formam um arquivo visual atravessado por contraste, gesto e presença.',

    /*
    Não existe uma hero fixa.

    O CAMPO escolhe uma imagem aleatória no navegador.
    A página do projeto também fará isso quando
    atualizarmos [slug].astro.
    */

    randomHero: true,

    gallery: [
      '/gallery/images/galeria-pb/foto-1.jpg',
      '/gallery/images/galeria-pb/foto-2.jpg',
      '/gallery/images/galeria-pb/foto-3.jpg',
      '/gallery/images/galeria-pb/foto-4.jpg',
      '/gallery/images/galeria-pb/foto-5.jpg',
      '/gallery/images/galeria-pb/foto-6.jpg',
      '/gallery/images/galeria-pb/foto-7.jpg',
      '/gallery/images/galeria-pb/foto-8.jpg',
      '/gallery/images/galeria-pb/foto-9.jpg',
      '/gallery/images/galeria-pb/foto-10.jpg',

      '/gallery/images/galeria-pb/foto-11.jpg',
      '/gallery/images/galeria-pb/foto-12.jpg',
      '/gallery/images/galeria-pb/foto-13.jpg',
      '/gallery/images/galeria-pb/foto-14.jpg',
      '/gallery/images/galeria-pb/foto-15.jpg',
      '/gallery/images/galeria-pb/foto-16.jpg',
      '/gallery/images/galeria-pb/foto-17.jpg',
      '/gallery/images/galeria-pb/foto-18.jpg',
      '/gallery/images/galeria-pb/foto-19.jpg',
      '/gallery/images/galeria-pb/foto-20.jpg',

      '/gallery/images/galeria-pb/foto-21.jpg',
      '/gallery/images/galeria-pb/foto-22.jpg',
      '/gallery/images/galeria-pb/foto-23.jpg',
      '/gallery/images/galeria-pb/foto-24.jpg',
      '/gallery/images/galeria-pb/foto-25.jpg',
      '/gallery/images/galeria-pb/foto-26.jpg',
      '/gallery/images/galeria-pb/foto-27.jpg',
      '/gallery/images/galeria-pb/foto-28.jpg',
      '/gallery/images/galeria-pb/foto-29.jpg',
      '/gallery/images/galeria-pb/foto-30.jpg',

      '/gallery/images/galeria-pb/foto-31.jpg',
      '/gallery/images/galeria-pb/foto-32.jpg',
      '/gallery/images/galeria-pb/foto-33.jpg',
      '/gallery/images/galeria-pb/foto-34.jpg',
      '/gallery/images/galeria-pb/foto-35.jpg',
      '/gallery/images/galeria-pb/foto-36.jpg',
      '/gallery/images/galeria-pb/foto-37.jpg',
      '/gallery/images/galeria-pb/foto-38.jpg',
      '/gallery/images/galeria-pb/foto-39.jpg',
      '/gallery/images/galeria-pb/foto-40.jpg',

      '/gallery/images/galeria-pb/foto-41.jpg',
      '/gallery/images/galeria-pb/foto-42.jpg',
      '/gallery/images/galeria-pb/foto-43.jpg',
      '/gallery/images/galeria-pb/foto-44.jpg',
      '/gallery/images/galeria-pb/foto-45.jpg',
      '/gallery/images/galeria-pb/foto-46.jpg',
      '/gallery/images/galeria-pb/foto-47.jpg',
      '/gallery/images/galeria-pb/foto-48.jpg',
      '/gallery/images/galeria-pb/foto-49.jpg',
      '/gallery/images/galeria-pb/foto-50.jpg',

      '/gallery/images/galeria-pb/foto-51.jpg',
      '/gallery/images/galeria-pb/foto-52.jpg'
    ],

    credits: [
      {
        label: 'Fotografia',
        value: 'Lucas Stanso'
      }
    ],

    motion: 'float',

    field: {
      x: 310,
      y: 1450,

      width: 165,

      imageHeight: 215,

      fit: 'cover',

      objectPosition:
        'center center',

      opacity: 1,

      z: 3
    },

    zone: 'archive'
  },



  /*
  =========================================================
  CRySTALINE
  =========================================================
  */

  {
    slug: 'crystalline',

    title: 'CRySTALINE',

    year: '2024',

    type: 'Editorial',

    roles: [
      'Fotografia',
      'Edição'
    ],

    categories: [
      'fotografia',
      'edição'
    ],

    description:
      'Editorial desenvolvido a partir da música MC Brinquedo vs Björk & Omar Souleyman — Pau na Crystalline.',

    hero:
      '/gallery/images/cristal/foto1.jpg',

    fieldImage:
      '/gallery/images/cristal/foto2-2.jpg',

    gallery: [
      '/gallery/images/cristal/foto2-2.jpg',
      '/gallery/images/cristal/foto3.jpg',
      '/gallery/images/cristal/foto5.jpg',
      '/gallery/images/cristal/foto4.jpg',
      '/gallery/images/cristal/foto8.jpg'
    ],

    credits: [
      {
        label: 'Direção de arte',
        value: 'Malu Gomes'
      },

      {
        label: 'Styling',
        value:
          'Malu Abdala e Mauricio Mesquita'
      },

      {
        label: 'Fotografia',
        value: 'Lucas Stanso'
      },

      {
        label: 'Modelos',
        value: 'Ibiã e Malu Gomes'
      }
    ],

    motion: 'float',

    field: {
      x: 2480,
      y: 1510,

      width: 105,

      imageHeight: 135,

      fit: 'cover',

      objectPosition:
        'center center',

      opacity: 0.54,

      z: 1
    },

    zone: 'archive'
  },



  /*
  =========================================================
  PALATO
  =========================================================
  */

  {
    slug: 'palato',

    title: 'PALATO',

    year: '2024',

    type: 'Editorial',

    roles: [
      'Fotografia',
      'Edição'
    ],

    categories: [
      'fotografia',
      'edição'
    ],

    description:
      'Exploração visual em moda construída a partir da ideia de sabores. Produzido para a revista acadêmica Dish.',

    hero:
      '/gallery/images/palato/palato0.jpg',

    fieldImage:
      '/gallery/images/palato/palato9.jpg',

    gallery: [
      '/gallery/images/palato/palato1.jpg',
      '/gallery/images/palato/palato4.jpg',
      '/gallery/images/palato/palato5.jpg',
      '/gallery/images/palato/palato9.jpg'
    ],

    credits: [
      {
        label: 'Fotografia',
        value: 'Lucas Stanso'
      },

      {
        label: 'Direção',
        value:
          'Lukas Pereira e Malu Abdala'
      },

      {
        label: 'Styling',
        value:
          'Lukas Pereira e Malu Abdala'
      },

      {
        label: 'Modelos',
        value: 'Gabriel e Giulia'
      }
    ],

    motion: 'drift-b',

    field: {
      x: 2250,
      y: 1590,

      width: 95,

      imageHeight: 125,

      fit: 'cover',

      objectPosition:
        'center center',

      opacity: 0.48,

      z: 1
    },

    zone: 'archive'
  }

];



export const projectBySlug = (
  slug: string
) =>

  projects.find(
    (project) =>
      project.slug === slug
  );



export const scrollChildren =
  projects.filter(
    (project) =>
      project.relation === 'scroll'
  );