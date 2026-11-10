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
  /** Archivos del CV dentro de /public/cv/ */
  cv: {
    es: conBase('/cv/cv-yaiza-ibanez-es.pdf'),
    en: conBase('/cv/cv-yaiza-ibanez-en.pdf'),
  },
};
