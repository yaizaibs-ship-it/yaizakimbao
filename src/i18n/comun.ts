import { conBase } from './rutas';

/**
 * Datos de contacto y enlaces: son iguales en los dos idiomas,
 * así que viven aquí una sola vez.
 */
export const CONTACTO = {
  nombre: 'Yaiza Ibáñez',
  firma: 'Yaiza Kimbao',
  email: 'yaizakimbao@gmail.com',
  linkedin: 'https://www.linkedin.com/in/yaizakimbao/',
  instagram: 'https://www.instagram.com/yaizakimbao/',
  /** Archivos del CV dentro de /public/cv/ */
  cv: {
    es: conBase('/cv/cv-yaiza-ibanez-es.pdf'),
    en: conBase('/cv/cv-yaiza-ibanez-en.pdf'),
  },
};

/**
 * FORMULARIO DE CONTACTO (Web3Forms, gratis)
 * Pega aquí la clave («Access Key») que Web3Forms te manda al correo.
 * Mientras esté vacía, el formulario abre el correo de quien escribe
 * con todo rellenado, así que nunca se pierde un mensaje.
 */
export const FORMULARIO = {
  claveWeb3Forms: 'e97eb8b1-b279-49ca-8d34-e591e2b030d3',
};

/**
 * MARCAS CON LAS QUE HE TRABAJADO (muro de la home)
 * - nombre: cómo se ve escrito si no hay logo
 * - web: enlace (déjalo en '' si no hay o no quieres enlazar)
 * - caso: slug de un proyecto de la web; si lo tiene, enlaza al caso en vez de a la web
 * - logo: para poner el logo, sube el archivo a src/assets/marcas/ con el
 *   mismo nombre que «clave» (p. ej. src/assets/marcas/cofares.svg o .png).
 *   Se pinta en el color del texto (negro / blanco) para que todos combinen.
 */
export const MARCAS: { clave: string; nombre: string; web: string; caso?: string }[] = [
  { clave: 'tierra-del-vino', nombre: 'Mancomunidad del Interior Tierra del Vino', web: 'https://www.tierradelvino.es' },
  { clave: 'tierra-bobal', nombre: 'Tierra Bobal', web: 'https://tierrabobal.es' },
  { clave: 'creaturisme', nombre: 'Creaturisme', web: 'https://creaturisme.comunitatvalenciana.com' },
  { clave: 'head-butt', nombre: 'HEAD BUTT BARCELONA', web: '', caso: 'head-butt-barcelona' },
  { clave: 'kimbao-999', nombre: 'KIMBAO 999', web: '', caso: 'kimbao-999' },
  { clave: 'vml', nombre: 'VML The Cocktail', web: 'https://www.vml.com' },
  { clave: 'club-bayer', nombre: 'Club Bayer', web: 'https://www.bayer.com/es-es/espana/areas-de-negocio/consumer-health' },
  { clave: 'farline', nombre: 'Farline', web: 'https://www.cofares.es' },
  { clave: 'aposan', nombre: 'Aposán', web: 'https://www.cofares.es' },
  { clave: 'cofares', nombre: 'Cofares', web: 'https://www.cofares.es' },
  { clave: 'alegre-design', nombre: 'Alegre Design', web: 'https://alegredesign.com' },
  { clave: 'version-digital', nombre: 'Versión Digital', web: 'https://versiondigital.es' },
  { clave: 'royal-opera-house', nombre: 'Royal Opera House', web: 'https://www.roh.org.uk' },
];
