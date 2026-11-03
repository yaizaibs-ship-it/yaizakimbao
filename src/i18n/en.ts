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
    disponible: 'Available for new projects',
    escribeme: 'Get in touch',
    menu: 'Menu',
    cerrar: 'Close',
    idioma: 'Language',
    cambiarIdioma: 'View this page in English',
    scroll: 'Keep scrolling',
    ver: 'View',
    verProyecto: 'View project',
    verTodo: 'All work',
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
    etiquetas: ['Visual Designer', 'Branding · Strategy · Motion', 'Portfolio 2026', 'Barcelona — Utiel-Requena'],
    statementIntro: 'I design brands with a point, tell them with strategy and set them in motion.',
    palabras: [
      {
        palabra: 'Brand',
        texto: 'Identities with character: logo, system and brand book that hold up on a swing tag and in a shop window alike.',
      },
      {
        palabra: 'Strategy',
        texto: 'Every piece has a job to do. Paid and organic campaigns, newsletters, A/B tests and data to decide.',
      },
      {
        palabra: 'Motion',
        texto: 'Motion, video, photography and AI so the brand never sits still on screen.',
      },
    ],
    trabajoTitulo: 'Work',
    perfil: {
      izquierda: 'Agency rigour',
      derecha: 'A point of view',
      listaIzquierda: ['Data-driven design', 'Paid & organic', 'UX/UI', 'Newsletters', 'SEO / SEM'],
      listaDerecha: ['Fashion', 'Upcycling', 'Football culture', 'Craft', 'Flowers'],
      texto:
        'I come from agencies —VML The Cocktail, Alegre Design— and I run my own brands: HEAD BUTT BARCELONA and KIMBAO 999. I measure like a data designer and make things like someone who sews her own bags.',
    },
  },

  sobre: {
    titulo: 'About',
    entradilla:
      'I’m Yaiza Ibáñez, though I sign my work as Yaiza Kimbao. Visual designer and communication strategist: I make brands, and I make them move.',
    bio: [
      'I move between graphic design, video, photography, AI, digital product and marketing. I don’t see them as separate disciplines but as tools for one idea: giving every brand a solid identity and a strategy that makes it work.',
      'I learn fast and try everything new. If a tool or a trend sharpens the visual impact or the experience of whoever is on the other side, it ends up in how I work.',
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
    texto: 'A brand to build, a campaign to launch or something to stitch together? Drop me a line.',
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
