import es from './es';
import en from './en';
import type { Idioma } from './rutas';

export const textos = { es, en };

export function t(lang: Idioma) {
  return textos[lang];
}

export * from './rutas';
