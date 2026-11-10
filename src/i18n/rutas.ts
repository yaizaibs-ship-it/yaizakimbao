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

/** Antepone la carpeta donde está publicada la web (p. ej. /yaizakimbao) */
export function conBase(ruta: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return base + (ruta.startsWith('/') ? ruta : '/' + ruta);
}

/** Construye una URL: url('en', 'proyecto', 'fauves') → /en/projects/fauves/ */
export function url(lang: Idioma, clave: ClaveRuta, slug?: string): string {
  const base = RUTAS[clave][lang];
  const partes = [lang, base, slug].filter(Boolean);
  return conBase('/' + partes.join('/') + '/');
}

export function otroIdioma(lang: Idioma): Idioma {
  return lang === 'es' ? 'en' : 'es';
}
