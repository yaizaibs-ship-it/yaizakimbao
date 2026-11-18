/**
 * TEXTS IN ENGLISH
 * Same structure as es.ts. Change any English text here.
 */
import type { Textos } from './es';

const en: Textos = {
  meta: {
    tituloSitio: 'Yaiza Kimbao — Visual Designer: branding, campaigns & motion',
    descripcion:
      'Yaiza Kimbao, visual designer and communication strategist in Spain. Branding, campaigns, social media and motion for local businesses, brands and agencies.',
    locale: 'en_US',
    paginas: {
      trabajo: {
        titulo: 'Branding, campaign and motion projects',
        descripcion: 'Work by Yaiza Kimbao: brand identities, brandbooks, campaigns, social media and motion for fashion, tourism and culture brands.',
      },
      sobre: {
        titulo: 'About — Visual designer and strategist',
        descripcion: 'I’m Yaiza Ibáñez (Yaiza Kimbao): a visual designer with agency rigour and brands of my own. Background, tools, languages and CV.',
      },
      contacto: {
        titulo: 'Contact — Tell me about your project',
        descripcion: 'A brand to build, a campaign to launch or something to sew? Tell me in five steps and I’ll get back to you personally.',
      },
    },
    error404: {
      titulo: 'This page has gone on holiday',
      texto: 'Or it never existed. Come on in, everything else is where you left it.',
      volver: 'Back to home',
    },
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
    indice: 'Index',
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
    videos: 'Videos',
    verEn: 'Watch on',
    siguiente: 'Next project',
    descargarCV: 'Download CV (PDF)',
    volverArriba: 'Back to top',
    soloEspanol: 'This project has not been translated yet, so it is shown in Spanish.',
    cuentame: 'Tell me about your project',
    casoCta: 'Shall we make something like this for your brand?',
    enProceso: 'Work in progress',
    proximamente: 'Coming soon',
    wipTexto: 'I’m putting the finishing touches to this project. Come back soon or, if you can’t wait, ask me and I’ll show you.',
    wipVolver: 'See all work',
  },

  inicio: {
    etiquetas: ['Visual Designer', 'Branding · Strategy · Motion', 'Portfolio 2026', 'Spain'],
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
    trabajoTitulo: 'Selected work',
    queHago: 'What I do',
    indice: [
      { clave: 'trabajo', titulo: 'Work', enlace: 'See all projects' },
      { clave: 'sobre', titulo: 'About', enlace: 'Find out more about me' },
      { clave: 'contacto', titulo: 'Contact', enlace: 'Let’s talk' },
    ],
    perfil: {
      izquierda: 'Agency rigour',
      derecha: 'A point of view',
      listaIzquierda: ['Data-driven design', 'Paid & organic', 'UX/UI', 'Newsletters', 'SEO / SEM'],
      listaDerecha: ['Fashion', 'Upcycling', 'Football culture', 'Craft', 'Flowers'],
      texto:
        'I come from agencies (VML The Cocktail, Versión Digital, Alegre Design) and run two brands of my own: HEAD BUTT BARCELONA and KIMBAO 999. Data to decide, hands for everything else. Yes, I sew my own bags too.',
    },

    servicios: {
      etiqueta: 'Who for',
      titulo: 'Who are you?',
      intro: 'Tell me where you’re coming from and I’ll tell you what I can cook up for you. No agency fluff, all the agency rigour.',
      nota: 'Notes',
      abrir: 'See what I can do',
      cerrar: 'Close',
      perfiles: [
        {
          clave: 'local',
          titulo: 'I’m a local business',
          resumen: 'Winery, rural stay, shop, restaurant… and you want people to notice.',
          lista: [
            'A logo and identity people recognise in town and beyond.',
            'Social media with a plan: templates, calendar and monthly content.',
            'A simple website you can update yourself.',
            'Photos and videos of what you do, no posing.',
            'Campaigns for your big dates: harvest, fairs, high season.',
          ],
        },
        {
          clave: 'marca',
          titulo: 'I’m a brand',
          resumen: 'You have a product and an audience, and want the brand to live up to them.',
          lista: [
            'A full identity and brandbook that holds up anywhere.',
            'Paid and organic campaigns measured with data, not guesswork.',
            'Social content, motion and video.',
            'Newsletters and A/B tests to learn what works.',
            'Art direction for photo and video.',
          ],
        },
        {
          clave: 'agencia',
          titulo: 'I’m an agency',
          resumen: 'You need an extra pair of hands (and a head) for a project or a season.',
          lista: [
            'Freelance support for busy peaks.',
            'Design, motion and social content.',
            'Newsletters and data-driven pieces.',
            'I fit into your system, tools and way of working.',
          ],
        },
      ],
    },

    marcas: {
      etiqueta: 'Who with',
      titulo: 'Brands I’ve worked with',
      nota: 'I’ve worked or collaborated with all of them. Some of that creative work is confidential, so not everything is in the portfolio: if you’d like to know more, just ask.',
    },
  },

  sobre: {
    titulo: 'About',
    entradilla:
      'I’m Yaiza Ibáñez, though I sign my work as Yaiza Kimbao. Visual designer and communication strategist: I make brands, and I make them move.',
    bio: [
      'I move between graphic design, video, photography, AI, digital product and marketing: tools for one idea, giving every brand a solid identity and a strategy that makes it work.',
      'I learn fast and try everything new: if it sharpens the visual impact or the experience of whoever is on the other side, it ends up in how I work.',
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
        texto: 'Club Bayer: newsletters for several markets, A/B tests and click and engagement analysis. Farline: paid and organic Instagram content, posts and stories. Also Welnia: social media, motion and UX/UI.',
      },
      {
        fecha: 'Mar — Aug 2024',
        puesto: 'Graphic designer, marketing & communication',
        lugar: 'Alegre Design',
        texto: 'Social media, newsletters and a UX/UI redesign of the WordPress website; art direction for photo and video; Meta, LinkedIn and Google Ads campaigns; SEO/SEM and Analytics.',
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
    otrasVias: 'Rather write to me without a form?',
    formulario: {
      titulo: 'Tell me about your project',
      paso: 'Step',
      de: 'of',
      atras: '← Back',
      siguiente: 'Next →',
      enviar: 'Send',
      enviando: 'Sending…',
      perfil: {
        pregunta: 'Who are you?',
        opciones: [
          { valor: 'local', texto: 'A local business' },
          { valor: 'marca', texto: 'A brand' },
          { valor: 'agencia', texto: 'An agency' },
          { valor: 'otro', texto: 'Something else' },
        ],
      },
      necesidad: {
        pregunta: 'What do you need?',
        opciones: {
          local: ['A new brand or a refresh', 'Social media and monthly content', 'A website', 'A campaign or an event', 'Something else (tell me at the end)'],
          marca: ['Identity or rebranding', 'A one-off campaign', 'Monthly content and social media', 'Newsletters and email', 'Something else (tell me at the end)'],
          agencia: ['Support for a one-off project', 'Ongoing collaboration', 'Something else (tell me at the end)'],
          otro: ['Graphic design', 'Content and social media', 'A website', 'Something else (tell me at the end)'],
        },
      },
      presupuesto: {
        pregunta: 'What’s your budget?',
        opciones: ['Under €500', '€500 – 1,500', '€1,500 – 3,000', 'Over €3,000', 'Not sure yet'],
      },
      urgencia: {
        pregunta: 'When for?',
        opciones: ['As soon as possible', 'In the next few weeks', 'In the next few months', 'Just exploring'],
      },
      datos: {
        pregunta: 'Last bit: who you are and what you have in mind',
        mensaje: 'Tell me about the project',
        mensajeAyuda: 'What you want to achieve, what you already have, anything that helps.',
        nombre: 'Name',
        email: 'Email',
        empresa: 'Company or brand (optional)',
        web: 'Website or Instagram (optional)',
        privacidad: 'I agree that Yaiza Ibáñez may use this data only to reply to me. It is not shared with anyone and I can ask for it to be deleted at any time by writing to yaizakimbao@gmail.com.',
      },
      obligatorio: 'This field is required',
      elige: 'Pick an option to continue',
      exito: 'Got it! I’ll be in touch very soon.',
      exitoCorreo: 'Your email app has opened with everything filled in: just hit send.',
      error: 'Something went wrong. Write to me directly at yaizakimbao@gmail.com.',
      asunto: 'New project from the website',
    },
  },

  pie: {
    cinta: [
      ['Say', 'hola!'],
      ['Say', 'ciao!'],
      ['Say', 'hello!'],
    ],
    letsCreate: 'Let’s create.',
    lugar: 'Spain',
    frase: 'Brand design, strategy and content for brands that want to move.',
    escribeme: 'Write to me',
    descarga: 'Download',
    hechaPorMi: 'I designed and built this site myself.',
    quieresUna: 'Want one just as cool?',
    quieresUnaHover: 'Drop me a line and let’s make it',
    asuntoWeb: 'I want a website like yours',
    comoLaHice: 'How I made it',
  },
};

export default en;
