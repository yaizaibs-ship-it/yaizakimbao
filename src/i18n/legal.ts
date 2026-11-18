/**
 * TEXTOS LEGALES: Política de cookies, Política de privacidad y Aviso legal.
 * - Cada sección: título + párrafos (y una lista opcional).
 * - Se puede usar <strong> y <a href="…"> dentro de los textos.
 * - {nombre}, {firma}, {email}, {nif}, {domicilio} y {ga} se rellenan solos
 *   con los datos de src/i18n/comun.ts.
 * - {cookies}, {privacidad} y {avisoLegal} se cambian por el enlace a esa página.
 */
import type { Idioma } from './rutas';

export type Seccion = { titulo: string; parrafos?: string[]; lista?: string[]; tabla?: string[][] };
export type PaginaLegal = { titulo: string; entradilla: string; secciones: Seccion[] };
export type ClaveLegal = 'cookies' | 'privacidad' | 'avisoLegal';

const es: Record<ClaveLegal, PaginaLegal> & { actualizado: string; cambiarCookies: string } = {
  actualizado: 'Última actualización',
  cambiarCookies: 'Cambiar mi elección de cookies',

  cookies: {
    titulo: 'Política de cookies',
    entradilla: 'Qué cookies usa esta web, para qué sirven y cómo puedes aceptarlas, rechazarlas o cambiar de opinión.',
    secciones: [
      {
        titulo: 'Qué son las cookies',
        parrafos: [
          'Las cookies son pequeños archivos que una web guarda en tu navegador para recordar información sobre tu visita. Algunas son necesarias para que la web funcione y otras sirven, por ejemplo, para medir cuánta gente la visita.',
        ],
      },
      {
        titulo: 'Quién es responsable',
        parrafos: ['{nombre} ({firma}), titular de esta web. Puedes escribirme a <a href="mailto:{email}">{email}</a>.'],
      },
      {
        titulo: 'Qué cookies uso',
        parrafos: [
          '<strong>Necesarias (sin consentimiento).</strong> La web guarda en tu navegador el idioma que eliges y tu respuesta al aviso de cookies, para no volver a preguntarte. No sirven para identificarte ni se envían a nadie.',
          '<strong>Analíticas (solo si pulsas «Aceptar»).</strong> Uso Google Analytics, de Google Ireland Limited, para saber cuántas personas visitan la web, qué páginas ven y desde dónde llegan. La información es estadística: no la uso para identificarte ni para hacer publicidad. Si pulsas «Rechazar», no se instalan.',
        ],
        tabla: [
          ['Cookie', 'De quién', 'Para qué', 'Duración'],
          ['_ga', 'Google Analytics', 'Distinguir visitas de personas diferentes', '2 años'],
          ['_ga_{ga}', 'Google Analytics', 'Recordar el estado de tu visita', '2 años'],
        ],
      },
      {
        titulo: 'Contenido de otras webs',
        parrafos: [
          'En algunos proyectos hay vídeos de TikTok, YouTube o Vimeo. He configurado YouTube y Vimeo en su modo más respetuoso con la privacidad, pero estas plataformas pueden guardar sus propias cookies si reproduces el vídeo. Se rigen por sus propias políticas de cookies.',
        ],
      },
      {
        titulo: 'Transferencias fuera de la Unión Europea',
        parrafos: [
          'Google puede tratar algunos datos en Estados Unidos. Google LLC está adherida al Marco de Privacidad de Datos UE-EE. UU., que la Comisión Europea reconoce como garantía adecuada. Tienes más información en la <a href="https://policies.google.com/privacy?hl=es" target="_blank" rel="noopener">política de privacidad de Google</a>.',
        ],
      },
      {
        titulo: 'Cómo aceptar, rechazar o cambiar de opinión',
        parrafos: [
          'La primera vez que entras te pregunto con un aviso en el que puedes aceptar o rechazar con un solo clic. Puedes cambiar tu elección cuando quieras con el botón de abajo o con el enlace «Configurar cookies» del pie de cualquier página.',
          'También puedes borrar o bloquear las cookies desde la configuración de tu navegador (Chrome, Safari, Firefox, Edge…). Si bloqueas todas, la web seguirá funcionando.',
        ],
      },
      {
        titulo: 'Más información',
        parrafos: ['Para saber cómo trato los datos personales en general, consulta la {privacidad}.'],
      },
    ],
  },

  privacidad: {
    titulo: 'Política de privacidad',
    entradilla: 'Qué datos recojo cuando me escribes, para qué los uso y qué derechos tienes.',
    secciones: [
      {
        titulo: 'Responsable',
        lista: [
          '<strong>Nombre:</strong> {nombre} ({firma})',
          '<strong>Email:</strong> <a href="mailto:{email}">{email}</a>',
        ],
      },
      {
        titulo: 'Qué datos recojo',
        parrafos: [
          'Solo los que tú me das al escribirme, por el formulario de contacto o por email: nombre, email, empresa y web (si los pones), el tipo de proyecto, presupuesto y plazo que eliges, y tu mensaje.',
          'Si aceptas las cookies analíticas, Google Analytics recoge además datos estadísticos de navegación. Lo explico en la {cookies}.',
        ],
      },
      {
        titulo: 'Para qué los uso',
        lista: [
          'Responder a tu mensaje y, si lo pides, preparar una propuesta o presupuesto.',
          'Si llegamos a trabajar juntos, gestionar el proyecto y la facturación.',
        ],
        parrafos: ['No envío publicidad, no vendo ni cedo tus datos a nadie y no tomo decisiones automáticas con ellos.'],
      },
      {
        titulo: 'Base legal',
        parrafos: [
          'Tu consentimiento, que das al marcar la casilla del formulario o al escribirme. Si me pides un presupuesto, también la aplicación de medidas previas a un posible contrato. Puedes retirar tu consentimiento cuando quieras.',
        ],
      },
      {
        titulo: 'Cuánto tiempo los guardo',
        parrafos: [
          'El tiempo necesario para responderte. Si no llegamos a trabajar juntos, los borro como máximo un año después de nuestro último contacto. Si trabajamos juntos, los guardo durante el proyecto y los años que exige la ley a efectos fiscales.',
        ],
      },
      {
        titulo: 'Quién más interviene',
        parrafos: ['Para que la web y el correo funcionen uso estos servicios, que solo tratan los datos siguiendo mis instrucciones:'],
        lista: [
          '<strong>Web3Forms</strong>: envía a mi correo lo que escribes en el formulario.',
          '<strong>Google (Gmail)</strong>: donde recibo y guardo los mensajes.',
          '<strong>GitHub Pages</strong>: aloja la web. Como cualquier servidor, registra datos técnicos de la visita, como la dirección IP.',
          '<strong>Google Analytics</strong>: solo si aceptas las cookies analíticas.',
        ],
      },
      {
        titulo: 'Transferencias fuera de la Unión Europea',
        parrafos: [
          'Algunos de estos servicios pueden tratar datos en Estados Unidos. Lo hacen con las garantías que exige el RGPD, como el Marco de Privacidad de Datos UE-EE. UU. o las cláusulas contractuales tipo de la Comisión Europea.',
        ],
      },
      {
        titulo: 'Tus derechos',
        parrafos: [
          'Puedes pedirme en cualquier momento acceder a tus datos, corregirlos, borrarlos, oponerte a que los use, limitar su uso o recibirlos en un archivo (portabilidad). Escríbeme a <a href="mailto:{email}">{email}</a> y te responderé en menos de un mes.',
          'Si crees que no he tratado bien tus datos, puedes reclamar ante la <a href="https://www.aepd.es" target="_blank" rel="noopener">Agencia Española de Protección de Datos</a>.',
        ],
      },
    ],
  },

  avisoLegal: {
    titulo: 'Aviso legal',
    entradilla: 'Quién está detrás de esta web y las condiciones para usarla.',
    secciones: [
      {
        titulo: 'Titular de la web',
        lista: [
          '<strong>Nombre:</strong> {nombre} ({firma})',
          '<strong>NIF:</strong> {nif}',
          '<strong>Domicilio:</strong> {domicilio}',
          '<strong>Email:</strong> <a href="mailto:{email}">{email}</a>',
        ],
      },
      {
        titulo: 'Para qué es esta web',
        parrafos: [
          'Es mi portfolio profesional como diseñadora visual y estratega de comunicación. Muestra mi trabajo y permite contactar conmigo para nuevos proyectos.',
        ],
      },
      {
        titulo: 'Propiedad intelectual',
        parrafos: [
          'El diseño, los textos, las imágenes y el código de esta web son míos, salvo que se indique otra cosa. Los trabajos para clientes se muestran como portfolio, y las marcas y logotipos pertenecen a sus dueños.',
          'Puedes compartir enlaces a la web, pero no copiar, reproducir ni usar su contenido con fines comerciales sin mi permiso por escrito.',
        ],
      },
      {
        titulo: 'Enlaces a otras webs',
        parrafos: [
          'Esta web enlaza a otras páginas (clientes, redes sociales, plataformas de vídeo). No me hago responsable de su contenido ni de cómo tratan tus datos.',
        ],
      },
      {
        titulo: 'Responsabilidad',
        parrafos: [
          'Intento que la información de la web sea correcta y esté al día, pero puede contener errores. No me hago responsable de los daños que pueda causar un uso indebido de la web.',
        ],
      },
      {
        titulo: 'Datos personales y cookies',
        parrafos: ['Lo explico en la {privacidad} y en la {cookies}.'],
      },
      {
        titulo: 'Ley aplicable',
        parrafos: ['Esta web se rige por la legislación española.'],
      },
    ],
  },
};

const en: typeof es = {
  actualizado: 'Last updated',
  cambiarCookies: 'Change my cookie choice',

  cookies: {
    titulo: 'Cookie policy',
    entradilla: 'Which cookies this site uses, what they are for and how to accept them, decline them or change your mind.',
    secciones: [
      {
        titulo: 'What cookies are',
        parrafos: [
          'Cookies are small files a website stores in your browser to remember information about your visit. Some are needed for the site to work; others are used, for example, to measure how many people visit it.',
        ],
      },
      {
        titulo: 'Who is responsible',
        parrafos: ['{nombre} ({firma}), owner of this website. You can write to me at <a href="mailto:{email}">{email}</a>.'],
      },
      {
        titulo: 'Cookies I use',
        parrafos: [
          '<strong>Necessary (no consent needed).</strong> The site stores the language you choose and your answer to the cookie notice in your browser, so it does not ask you again. They do not identify you and are not sent to anyone.',
          '<strong>Analytics (only if you click “Accept”).</strong> I use Google Analytics, by Google Ireland Limited, to see how many people visit the site, which pages they view and where they come from. The information is statistical: I do not use it to identify you or for advertising. If you click “Decline”, they are not set.',
        ],
        tabla: [
          ['Cookie', 'Provider', 'Purpose', 'Duration'],
          ['_ga', 'Google Analytics', 'Tell different visitors apart', '2 years'],
          ['_ga_{ga}', 'Google Analytics', 'Keep the state of your visit', '2 years'],
        ],
      },
      {
        titulo: 'Content from other sites',
        parrafos: [
          'Some projects include videos from TikTok, YouTube or Vimeo. YouTube and Vimeo are set to their most privacy-friendly mode, but these platforms may store their own cookies if you play a video. Their own cookie policies apply.',
        ],
      },
      {
        titulo: 'Transfers outside the European Union',
        parrafos: [
          'Google may process some data in the United States. Google LLC participates in the EU-US Data Privacy Framework, which the European Commission recognises as an adequate safeguard. More information in <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener">Google’s privacy policy</a>.',
        ],
      },
      {
        titulo: 'How to accept, decline or change your mind',
        parrafos: [
          'On your first visit a notice lets you accept or decline with a single click. You can change your choice at any time with the button below or the “Cookie settings” link in the footer of every page.',
          'You can also delete or block cookies in your browser settings (Chrome, Safari, Firefox, Edge…). If you block them all, the site will still work.',
        ],
      },
      {
        titulo: 'More information',
        parrafos: ['To see how I handle personal data in general, read the {privacidad}.'],
      },
    ],
  },

  privacidad: {
    titulo: 'Privacy policy',
    entradilla: 'What data I collect when you write to me, what I use it for and what your rights are.',
    secciones: [
      {
        titulo: 'Data controller',
        lista: [
          '<strong>Name:</strong> {nombre} ({firma})',
          '<strong>Email:</strong> <a href="mailto:{email}">{email}</a>',
        ],
      },
      {
        titulo: 'What data I collect',
        parrafos: [
          'Only what you give me when you write to me, through the contact form or by email: name, email, company and website (if you add them), the type of project, budget and timing you choose, and your message.',
          'If you accept analytics cookies, Google Analytics also collects statistical browsing data. See the {cookies}.',
        ],
      },
      {
        titulo: 'What I use it for',
        lista: [
          'To reply to your message and, if you ask, prepare a proposal or quote.',
          'If we end up working together, to manage the project and invoicing.',
        ],
        parrafos: ['I do not send advertising, I do not sell or share your data with anyone, and I do not make automated decisions with it.'],
      },
      {
        titulo: 'Legal basis',
        parrafos: [
          'Your consent, given by ticking the box on the form or by writing to me. If you ask for a quote, also taking steps prior to a possible contract. You can withdraw your consent at any time.',
        ],
      },
      {
        titulo: 'How long I keep it',
        parrafos: [
          'As long as needed to reply to you. If we do not end up working together, I delete it at most one year after our last contact. If we do, I keep it for the project and for the years required by tax law.',
        ],
      },
      {
        titulo: 'Who else is involved',
        parrafos: ['To run the site and email I use these services, which only process data following my instructions:'],
        lista: [
          '<strong>Web3Forms</strong>: sends what you write in the form to my email.',
          '<strong>Google (Gmail)</strong>: where I receive and keep messages.',
          '<strong>GitHub Pages</strong>: hosts the site. Like any server, it logs technical visit data such as your IP address.',
          '<strong>Google Analytics</strong>: only if you accept analytics cookies.',
        ],
      },
      {
        titulo: 'Transfers outside the European Union',
        parrafos: [
          'Some of these services may process data in the United States. They do so with the safeguards required by the GDPR, such as the EU-US Data Privacy Framework or the European Commission’s standard contractual clauses.',
        ],
      },
      {
        titulo: 'Your rights',
        parrafos: [
          'You can ask me at any time to access, correct or delete your data, object to its use, restrict its use or receive it in a file (portability). Write to me at <a href="mailto:{email}">{email}</a> and I will reply within a month.',
          'If you think I have not handled your data properly, you can complain to the <a href="https://www.aepd.es/en" target="_blank" rel="noopener">Spanish Data Protection Agency (AEPD)</a>.',
        ],
      },
    ],
  },

  avisoLegal: {
    titulo: 'Legal notice',
    entradilla: 'Who is behind this website and the terms for using it.',
    secciones: [
      {
        titulo: 'Website owner',
        lista: [
          '<strong>Name:</strong> {nombre} ({firma})',
          '<strong>Tax ID (NIF):</strong> {nif}',
          '<strong>Address:</strong> {domicilio}',
          '<strong>Email:</strong> <a href="mailto:{email}">{email}</a>',
        ],
      },
      {
        titulo: 'What this site is for',
        parrafos: [
          'It is my professional portfolio as a visual designer and communication strategist. It shows my work and lets you contact me about new projects.',
        ],
      },
      {
        titulo: 'Intellectual property',
        parrafos: [
          'The design, texts, images and code of this site are mine unless stated otherwise. Client work is shown as portfolio, and brands and logos belong to their owners.',
          'You may share links to the site, but you may not copy, reproduce or use its content commercially without my written permission.',
        ],
      },
      {
        titulo: 'Links to other sites',
        parrafos: [
          'This site links to other pages (clients, social networks, video platforms). I am not responsible for their content or for how they handle your data.',
        ],
      },
      {
        titulo: 'Liability',
        parrafos: [
          'I try to keep the information on this site accurate and up to date, but it may contain errors. I am not responsible for damage caused by misuse of the site.',
        ],
      },
      {
        titulo: 'Personal data and cookies',
        parrafos: ['See the {privacidad} and the {cookies}.'],
      },
      {
        titulo: 'Applicable law',
        parrafos: ['This website is governed by Spanish law.'],
      },
    ],
  },
};

export const LEGALES: Record<Idioma, typeof es> = { es, en };
