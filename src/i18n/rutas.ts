/**
 * Rutas de la web en cada idioma.
 * Si cambias una ruta aquí, cambia también el nombre de la carpeta/archivo en src/pages.
 */
export const IDIOMAS = ['es', 'en'] as const;
export type Idioma = (typeof IDIOMAS)[number];
export const IDIOMA_POR_DEFECTO: Idioma = 'es';

export const RUTAS = {
  inicio: { es: '', en: '' },
  trabajo: { es: 'trabajo', en: 'work' },
  sobre: { es: 'sobre-mi', en: 'about' },
  contacto: { es: 'contacto', en: 'contact' },
  proyecto: { es: 'proyectos', en: 'projects' },
} as const;

export type ClaveRuta = keyof typeof RUTAS;

/** Construye una URL: url('en', 'proyecto', 'acero') → /en/projects/acero/ */
export function url(lang: Idioma, clave: ClaveRuta, slug?: string): string {
  const base = RUTAS[clave][lang];
  const partes = [lang, base, slug].filter(Boolean);
  return '/' + partes.join('/') + '/';
}

export function otroIdioma(lang: Idioma): Idioma {
  return lang === 'es' ? 'en' : 'es';
}
