/**
 * TEXTOS EN ESPAÑOL
 * Cambia aquí cualquier texto de la web en español.
 * El archivo en.ts tiene exactamente la misma estructura en inglés.
 */
const es = {
  meta: {
    tituloSitio: 'Yaiza Kimbao — Visual Designer',
    descripcion:
      'Portfolio de Yaiza Ibáñez (Yaiza Kimbao): branding, estrategia de comunicación y contenido en movimiento. Barcelona — Utiel-Requena.',
    locale: 'es_ES',
  },

  ui: {
    saltar: 'Saltar al contenido',
    nav: { inicio: 'Inicio', trabajo: 'Trabajo', sobre: 'Sobre mí', contacto: 'Contacto' },
    disponible: 'Disponible para proyectos',
    escribeme: 'Escríbeme',
    menu: 'Menú',
    cerrar: 'Cerrar',
    idioma: 'Idioma',
    cambiarIdioma: 'Ver esta página en español',
    scroll: 'Scroll para explorar',
    verProyecto: 'Ver proyecto',
    verTodo: 'Ver todo el trabajo',
    proyectos: 'proyectos',
    filtrar: 'Filtrar por disciplina',
    todo: 'Todo',
    disciplinas: {
      branding: 'Branding',
      estrategia: 'Estrategia',
      motion: 'Motion',
      digital: 'Digital / UX',
      moda: 'Moda',
    },
    ficha: { anio: 'Año', cliente: 'Cliente', rol: 'Rol', disciplinas: 'Disciplinas', enlaces: 'Enlaces' },
    galeria: 'Galería',
    siguiente: 'Siguiente proyecto',
    descargarCV: 'Descargar CV (PDF)',
    volverArriba: 'Volver arriba',
    soloEspanol: 'Este proyecto todavía no está traducido; se muestra en español.',
  },

  inicio: {
    etiquetas: ['Visual Designer', 'Estrategia de comunicación', 'Portfolio 2026', 'Barcelona — Utiel-Requena'],
    statementIntro: 'Hago marcas que se entienden, se sienten y se mueven.',
    palabras: [
      {
        palabra: 'Marca',
        texto: 'Identidades visuales sólidas: logo, sistema, brandbook y aplicaciones, de la etiqueta a la tienda.',
      },
      {
        palabra: 'Estrategia',
        texto: 'Comunicación alineada con objetivos: campañas paid y orgánicas, newsletters, A/B testing y métricas.',
      },
      {
        palabra: 'Movimiento',
        texto: 'Contenido que vive en pantalla: motion graphics, vídeo, fotografía e imagen generada con IA.',
      },
    ],
    trabajoTitulo: 'Trabajo',
    perfil: {
      izquierda: 'Rigor de agencia',
      derecha: 'Mirada propia',
      listaIzquierda: ['Data driven design', 'Paid & orgánico', 'UX/UI', 'Newsletters', 'SEO / SEM'],
      listaDerecha: ['Moda', 'Upcycling', 'Cultura futbolera', 'Artesanía', 'Flores'],
      texto:
        'Vengo de agencia —VML The Cocktail, Alegre Design— y llevo mis propias marcas: HEAD BUTT BARCELONA y KIMBAO 999. Trabajo con datos y con intuición, y no veo contradicción entre ambas.',
    },
  },

  sobre: {
    titulo: 'Sobre mí',
    entradilla:
      'Soy Yaiza Ibáñez y firmo como Yaiza Kimbao. Visual Designer y estratega de comunicación especializada en branding y comunicación visual.',
    bio: [
      'Tengo experiencia en diseño gráfico, producción de vídeo, fotografía, generación con IA, producto digital y marketing. Mi enfoque es integral: construyo identidades visuales sólidas y estrategias creativas alineadas con los objetivos de cada proyecto.',
      'Me mueve la innovación y el aprendizaje continuo: aplico nuevas tecnologías y tendencias para mejorar el impacto visual y la experiencia de usuario.',
    ],
    trayectoriaTitulo: 'Trayectoria',
    trayectoria: [
      {
        fecha: 'Actualidad',
        puesto: 'Comunicación y diseño',
        lugar: 'Mancomunidad del Interior Tierra del Vino',
        texto: 'Marca turística Tierra Bobal y programa Adapt@+T: campañas, redes, newsletters, paneles e infografías.',
      },
      {
        fecha: 'Proyecto propio',
        puesto: 'Fundadora',
        lugar: 'HEAD BUTT BARCELONA · KIMBAO 999',
        texto: 'Ropa vintage de cultura futbolera con tienda en el Barri Gòtic, y una marca de upcycling, moda y costura.',
      },
      {
        fecha: 'Oct 2024 — Mar 2025',
        puesto: 'Data Driven Designer',
        lugar: 'VML The Cocktail',
        texto: 'Campañas paid y orgánicas, redes, motion, UX/UI y newsletters para Club Bayer, Farline y Welnia.',
      },
      {
        fecha: 'Mar — Ago 2024',
        puesto: 'Diseñadora gráfica, marketing y comunicación',
        lugar: 'Alegre Design',
        texto: 'Redes, newsletters y web; dirección de arte en foto y vídeo; campañas en Meta, LinkedIn y Google Ads; SEO/SEM y Analytics.',
      },
      {
        fecha: 'Nov 2022 — Mar 2023',
        puesto: 'Becaria de diseño gráfico',
        lugar: 'Globaldit',
        texto: 'Campañas para medios digitales y físicos, y piezas en 3D.',
      },
    ],
    herramientasTitulo: 'Herramientas',
    herramientas: ['Photoshop', 'Illustrator', 'InDesign', 'After Effects', 'Premiere', 'Figma', 'Firefly', 'Shopify', 'HTML / CSS / JS', 'Flujos con IA'],
    idiomasTitulo: 'Idiomas',
    idiomas: [
      { idioma: 'Español', nivel: 'Nativo' },
      { idioma: 'Inglés', nivel: 'B2' },
      { idioma: 'Italiano', nivel: 'B2' },
      { idioma: 'Valenciano', nivel: 'B1' },
    ],
  },

  contacto: {
    titulo: 'Contacto',
    texto: '¿Tienes una marca que construir, una campaña que lanzar o algo que coser? Hablemos.',
    redes: 'Redes',
  },

  pie: {
    cinta: [
      ['Say', 'hola!'],
      ['Say', 'ciao!'],
      ['Say', 'hello!'],
    ],
    lugar: 'Barcelona — Utiel-Requena',
  },
};

export default es;
export type Textos = typeof es;
