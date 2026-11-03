/**
 * TEXTS IN ENGLISH
 * Same structure as es.ts. Change any English text here.
 */
import type { Textos } from './es';

const en: Textos = {
  meta: {
    tituloSitio: 'Yaiza Kimbao — Visual Designer',
    descripcion:
      'Portfolio of Yaiza Ibáñez (Yaiza Kimbao): branding, communication strategy and content in motion. Barcelona — Utiel-Requena, Spain.',
    locale: 'en_US',
  },

  ui: {
    saltar: 'Skip to content',
    nav: { inicio: 'Home', trabajo: 'Work', sobre: 'About', contacto: 'Contact' },
    disponible: 'Available for projects',
    escribeme: 'Get in touch',
    menu: 'Menu',
    cerrar: 'Close',
    idioma: 'Language',
    cambiarIdioma: 'View this page in English',
    scroll: 'Scroll to explore',
    verProyecto: 'View project',
    verTodo: 'See all work',
    proyectos: 'projects',
    filtrar: 'Filter by discipline',
    todo: 'All',
    disciplinas: {
      branding: 'Branding',
      estrategia: 'Strategy',
      motion: 'Motion',
      digital: 'Digital / UX',
      moda: 'Fashion',
    },
    ficha: { anio: 'Year', cliente: 'Client', rol: 'Role', disciplinas: 'Disciplines', enlaces: 'Links' },
    galeria: 'Gallery',
    siguiente: 'Next project',
    descargarCV: 'Download CV (PDF)',
    volverArriba: 'Back to top',
    soloEspanol: 'This project has not been translated yet, so it is shown in Spanish.',
  },

  inicio: {
    etiquetas: ['Visual Designer', 'Communication strategy', 'Portfolio 2026', 'Barcelona — Utiel-Requena'],
    statementIntro: 'I make brands that make sense, feel right and move.',
    palabras: [
      {
        palabra: 'Brand',
        texto: 'Solid visual identities: logo, system, brand book and applications, from the label to the shop floor.',
      },
      {
        palabra: 'Strategy',
        texto: 'Communication built around goals: paid and organic campaigns, newsletters, A/B testing and metrics.',
      },
      {
        palabra: 'Motion',
        texto: 'Content made for the screen: motion graphics, video, photography and AI-generated imagery.',
      },
    ],
    trabajoTitulo: 'Work',
    perfil: {
      izquierda: 'Agency rigour',
      derecha: 'A point of view',
      listaIzquierda: ['Data-driven design', 'Paid & organic', 'UX/UI', 'Newsletters', 'SEO / SEM'],
      listaDerecha: ['Fashion', 'Upcycling', 'Football culture', 'Craft', 'Flowers'],
      texto:
        'I come from agencies —VML The Cocktail, Alegre Design— and I run my own brands: HEAD BUTT BARCELONA and KIMBAO 999. I work with data and with instinct, and I don’t see a conflict between the two.',
    },
  },

  sobre: {
    titulo: 'About',
    entradilla:
      'I’m Yaiza Ibáñez, and I sign my work as Yaiza Kimbao. Visual designer and communication strategist specialising in branding and visual communication.',
    bio: [
      'My background spans graphic design, video production, photography, AI image generation, digital product and marketing. I take a holistic approach: building strong visual identities and creative strategies that serve each project’s goals.',
      'I’m driven by innovation and constant learning, bringing new tools and trends into my work to sharpen visual impact and user experience.',
    ],
    trayectoriaTitulo: 'Experience',
    trayectoria: [
      {
        fecha: 'Present',
        puesto: 'Communication & design',
        lugar: 'Mancomunidad del Interior Tierra del Vino',
        texto: 'Tierra Bobal tourism brand and the Adapt@+T programme: campaigns, social media, newsletters, signage and infographics.',
      },
      {
        fecha: 'Own projects',
        puesto: 'Founder',
        lugar: 'HEAD BUTT BARCELONA · KIMBAO 999',
        texto: 'A vintage football-culture clothing brand with a shop in Barcelona’s Gothic Quarter, and an upcycling, fashion and sewing label.',
      },
      {
        fecha: 'Oct 2024 — Mar 2025',
        puesto: 'Data Driven Designer',
        lugar: 'VML The Cocktail',
        texto: 'Paid and organic campaigns, social media, motion, UX/UI and newsletters for Club Bayer, Farline and Welnia.',
      },
      {
        fecha: 'Mar — Aug 2024',
        puesto: 'Graphic designer, marketing & communication',
        lugar: 'Alegre Design',
        texto: 'Social media, newsletters and website; art direction for photo and video; Meta, LinkedIn and Google Ads campaigns; SEO/SEM and Analytics.',
      },
      {
        fecha: 'Nov 2022 — Mar 2023',
        puesto: 'Graphic design intern',
        lugar: 'Globaldit',
        texto: 'Campaigns for digital and print media, and 3D pieces.',
      },
    ],
    herramientasTitulo: 'Tools',
    herramientas: ['Photoshop', 'Illustrator', 'InDesign', 'After Effects', 'Premiere', 'Figma', 'Firefly', 'Shopify', 'HTML / CSS / JS', 'AI workflows'],
    idiomasTitulo: 'Languages',
    idiomas: [
      { idioma: 'Spanish', nivel: 'Native' },
      { idioma: 'English', nivel: 'B2' },
      { idioma: 'Italian', nivel: 'B2' },
      { idioma: 'Valencian', nivel: 'B1' },
    ],
  },

  contacto: {
    titulo: 'Contact',
    texto: 'Got a brand to build, a campaign to launch or something to stitch together? Let’s talk.',
    redes: 'Social',
  },

  pie: {
    cinta: [
      ['Say', 'hola!'],
      ['Say', 'ciao!'],
      ['Say', 'hello!'],
    ],
    lugar: 'Barcelona — Utiel-Requena, Spain',
  },
};

export default en;
