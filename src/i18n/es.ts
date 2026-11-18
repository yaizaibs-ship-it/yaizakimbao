/**
 * TEXTOS EN ESPAÑOL
 * Cambia aquí cualquier texto de la web en español.
 * El archivo en.ts tiene exactamente la misma estructura en inglés.
 */
const es = {
  meta: {
    tituloSitio: 'Yaiza Kimbao — Diseñadora visual: branding, campañas, motion',
    descripcion:
      'Yaiza Kimbao, diseñadora visual y estratega de comunicación en España. Branding, campañas, redes sociales y motion para negocios locales, marcas y agencias.',
    locale: 'es_ES',
    /** Título (pestaña y Google) y descripción de cada página. ≤60 y ≤160 caracteres */
    paginas: {
      trabajo: {
        titulo: 'Proyectos de branding, campañas y motion',
        descripcion: 'Proyectos de Yaiza Kimbao: identidades de marca, brandbooks, campañas, redes y motion para marcas de moda, turismo y cultura.',
      },
      sobre: {
        titulo: 'Sobre mí — Diseñadora visual y estratega',
        descripcion: 'Soy Yaiza Ibáñez (Yaiza Kimbao): diseñadora visual con rigor de agencia y marcas propias. Trayectoria, herramientas, idiomas y CV.',
      },
      contacto: {
        titulo: 'Contacto — Cuéntame tu proyecto',
        descripcion: '¿Una marca por construir, una campaña por lanzar o algo por coser? Cuéntamelo en cinco pasos y te respondo en persona.',
      },
    },
    /** Página de error 404 */
    error404: {
      titulo: 'Esta página se ha ido de vacaciones',
      texto: 'O nunca existió. Pasa, que lo demás sigue en su sitio.',
      volver: 'Volver al inicio',
    },
  },

  ui: {
    saltar: 'Saltar al contenido',
    nav: { inicio: 'Inicio', trabajo: 'Trabajo', sobre: 'Sobre mí', contacto: 'Contacto' },
    disponible: 'Disponible para nuevos proyectos',
    escribeme: 'Escríbeme',
    menu: 'Menú',
    cerrar: 'Cerrar',
    idioma: 'Idioma',
    cambiarIdioma: 'Ver esta página en español',
    scroll: 'Sigue bajando',
    ver: 'Ver',
    indice: 'Índice',
    verProyecto: 'Ver proyecto',
    verTodo: 'Todo el trabajo',
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
    videos: 'Vídeos',
    verEn: 'Ver en',
    siguiente: 'Siguiente proyecto',
    descargarCV: 'Descargar CV (PDF)',
    volverArriba: 'Volver arriba',
    soloEspanol: 'Este proyecto todavía no está traducido; se muestra en español.',
    /** Botón que se repite por toda la web y lleva al formulario */
    cuentame: 'Cuéntame tu proyecto',
    casoCta: '¿Hacemos algo así para tu marca?',
    enProceso: 'Work in progress',
    proximamente: 'Próximamente',
    wipTexto: 'Estoy dando los últimos retoques a este proyecto. Vuelve pronto o, si te puede la curiosidad, pregúntame y te lo enseño.',
    wipVolver: 'Ver todo el trabajo',
  },

  inicio: {
    etiquetas: ['Visual Designer', 'Branding · Estrategia · Motion', 'Portfolio 2026', 'España'],
    statementIntro: 'Diseño marcas con cabeza, las cuento con estrategia y las pongo en movimiento.',
    palabras: [
      {
        palabra: 'Marca',
        texto: 'Identidades con carácter: logo, sistema y brandbook que aguantan igual en una etiqueta que en un escaparate.',
      },
      {
        palabra: 'Estrategia',
        texto: 'Cada pieza responde a un objetivo. Campañas paid y orgánicas, newsletters, tests A/B y datos para decidir.',
      },
      {
        palabra: 'Movimiento',
        texto: 'Motion, vídeo, foto e IA para que la marca no se quede quieta en la pantalla.',
      },
    ],
    trabajoTitulo: 'Trabajo seleccionado',
    queHago: 'Qué hago',
    indice: [
      { clave: 'trabajo', titulo: 'Trabajo', enlace: 'Ver todos los proyectos' },
      { clave: 'sobre', titulo: 'Sobre mí', enlace: 'Descubre más sobre mí' },
      { clave: 'contacto', titulo: 'Contacto', enlace: 'Hablemos' },
    ],
    perfil: {
      izquierda: 'Rigor de agencia',
      derecha: 'Mirada propia',
      listaIzquierda: ['Data driven design', 'Paid & orgánico', 'UX/UI', 'Newsletters', 'SEO / SEM'],
      listaDerecha: ['Moda', 'Upcycling', 'Cultura futbolera', 'Artesanía', 'Flores'],
      texto:
        'Vengo de agencia (VML The Cocktail, Versión Digital, Alegre Design) y tengo dos marcas propias: HEAD BUTT BARCELONA y KIMBAO 999. Uso los datos para decidir y las manos para todo lo demás. Sí, también me coso los bolsos.',
    },

    /** Servicios según quién llega (tarjetas con notita desplegable) */
    servicios: {
      etiqueta: 'Para quién',
      titulo: '¿Quién eres?',
      intro: 'Dime desde dónde llegas y te cuento qué puedo maquinar para ti. Sin rollos de agencia, con rigor de agencia.',
      nota: 'Notas',
      abrir: 'Ver qué puedo hacer',
      cerrar: 'Cerrar',
      perfiles: [
        {
          clave: 'local',
          titulo: 'Soy un negocio local',
          resumen: 'Bodega, alojamiento, tienda, restaurante… con ganas de que se le vea.',
          lista: [
            'Logo e identidad que se reconozcan en tu pueblo y fuera de él.',
            'Redes con cabeza: plantillas, calendario y contenido cada mes.',
            'Una web sencilla que puedas actualizar tú.',
            'Fotos y vídeos de lo que haces, sin postureo.',
            'Campañas para tus fechas fuertes: vendimia, ferias, temporada alta.',
          ],
        },
        {
          clave: 'marca',
          titulo: 'Soy una marca',
          resumen: 'Tienes producto y público, y quieres que la marca esté a la altura.',
          lista: [
            'Identidad completa y brandbook que aguante cualquier soporte.',
            'Campañas paid y orgánicas medidas con datos, no a ojo.',
            'Contenido para redes, motion y vídeo.',
            'Newsletters y tests A/B para saber qué funciona.',
            'Dirección de arte en foto y vídeo.',
          ],
        },
        {
          clave: 'agencia',
          titulo: 'Soy una agencia',
          resumen: 'Necesitáis unas manos más (y una cabeza) para un proyecto o una temporada.',
          lista: [
            'Refuerzo freelance para picos de trabajo.',
            'Diseño, motion y contenido para redes.',
            'Newsletters y piezas data driven.',
            'Me adapto a vuestro sistema, herramientas y forma de trabajar.',
          ],
        },
      ],
    },

    /** Muro de marcas */
    marcas: {
      etiqueta: 'Con quién',
      titulo: 'Marcas con las que he trabajado',
      nota: 'Con todas he trabajado o colaborado. Parte de ese trabajo creativo es confidencial, así que no todo está en el portfolio: si quieres saber más, pregúntame.',
    },
  },

  sobre: {
    titulo: 'Sobre mí',
    entradilla:
      'Soy Yaiza Ibáñez, aunque firmo como Yaiza Kimbao. Visual designer y estratega de comunicación: hago marcas y las hago moverse.',
    bio: [
      'Me muevo entre el diseño gráfico, el vídeo, la fotografía, la IA, el producto digital y el marketing: herramientas de una misma idea, que cada marca tenga una identidad sólida y una estrategia que la haga funcionar.',
      'Aprendo rápido y pruebo todo lo nuevo: si mejora el impacto visual o la experiencia de quien está al otro lado, acaba en mi forma de trabajar.',
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
        texto: 'Club Bayer: newsletters para varios mercados, pruebas A/B y análisis de clics y engagement. Farline: contenido paid y orgánico para Instagram, posts y stories. También Welnia: redes, motion y UX/UI.',
      },
      {
        fecha: 'Mar — Ago 2024',
        puesto: 'Diseñadora gráfica, marketing y comunicación',
        lugar: 'Alegre Design',
        texto: 'Redes, newsletters y rediseño UX/UI de la web en WordPress; dirección de arte en foto y vídeo; campañas en Meta, LinkedIn y Google Ads; SEO/SEM y Analytics.',
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
    texto: '¿Una marca por construir, una campaña por lanzar o algo por coser? Cuéntamelo en cinco pasos y te respondo en persona.',
    redes: 'Redes',
    otrasVias: '¿Prefieres escribirme sin formulario?',
    formulario: {
      titulo: 'Cuéntame tu proyecto',
      paso: 'Paso',
      de: 'de',
      atras: '← Atrás',
      siguiente: 'Siguiente →',
      enviar: 'Enviar',
      enviando: 'Enviando…',
      perfil: {
        pregunta: '¿Quién eres?',
        opciones: [
          { valor: 'local', texto: 'Un negocio local' },
          { valor: 'marca', texto: 'Una marca' },
          { valor: 'agencia', texto: 'Una agencia' },
          { valor: 'otro', texto: 'Otra cosa' },
        ],
      },
      necesidad: {
        pregunta: '¿Qué necesitas?',
        opciones: {
          local: ['Una marca nueva o renovar la que tengo', 'Redes y contenido cada mes', 'Una web', 'Una campaña o un evento', 'Otra cosa (me lo cuentas al final)'],
          marca: ['Identidad o rebranding', 'Una campaña puntual', 'Contenido y redes cada mes', 'Newsletters y email', 'Otra cosa (me lo cuentas al final)'],
          agencia: ['Refuerzo para un proyecto puntual', 'Colaboración continua', 'Otra cosa (me lo cuentas al final)'],
          otro: ['Diseño gráfico', 'Contenido y redes', 'Una web', 'Otra cosa (me lo cuentas al final)'],
        },
      },
      presupuesto: {
        pregunta: '¿Con qué presupuesto cuentas?',
        opciones: ['Menos de 500 €', '500 – 1.500 €', '1.500 – 3.000 €', 'Más de 3.000 €', 'Aún no lo sé'],
      },
      urgencia: {
        pregunta: '¿Para cuándo?',
        opciones: ['Lo antes posible', 'En las próximas semanas', 'En los próximos meses', 'Solo estoy explorando'],
      },
      datos: {
        pregunta: 'Lo último: quién eres y qué tienes en mente',
        mensaje: 'Cuéntame el proyecto',
        mensajeAyuda: 'Qué quieres conseguir, qué tienes ya, cualquier cosa que me ayude.',
        nombre: 'Nombre',
        email: 'Email',
        empresa: 'Empresa o marca (opcional)',
        web: 'Web o Instagram (opcional)',
        privacidad: 'Acepto que Yaiza Ibáñez use estos datos solo para responderme. No se ceden a nadie y puedo pedir que se borren cuando quiera escribiendo a yaizakimbao@gmail.com.',
      },
      obligatorio: 'Este campo es obligatorio',
      elige: 'Elige una opción para seguir',
      exito: '¡Recibido! Te escribo muy pronto.',
      exitoCorreo: 'Se ha abierto tu correo con todo rellenado: solo te falta darle a enviar.',
      error: 'Algo ha fallado al enviar. Escríbeme directamente a yaizakimbao@gmail.com.',
      asunto: 'Nuevo proyecto desde la web',
    },
  },

  pie: {
    cinta: [
      ['Say', 'hola!'],
      ['Say', 'ciao!'],
      ['Say', 'hello!'],
    ],
    letsCreate: 'Let’s create.',
    lugar: 'España',
    frase: 'Diseño de marca, estrategia y contenido para marcas que quieren moverse.',
    escribeme: 'Escríbeme',
    descarga: 'Descargar',
    /** Línea «esta web la he hecho yo» (abajo del todo) */
    hechaPorMi: 'Esta web la he diseñado y programado yo.',
    quieresUna: '¿Quieres una igual de guay?',
    quieresUnaHover: 'Escríbeme y la hacemos',
    asuntoWeb: 'Quiero una web como la tuya',
    comoLaHice: 'Cómo la hice',
  },
};

export default es;
export type Textos = typeof es;
