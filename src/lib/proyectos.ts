/**
 * Carga los proyectos de un idioma combinando:
 *  - los datos compartidos del archivo español (color, orden, galería…)
 *  - los textos del idioma pedido (si existen; si no, se usa el español)
 */
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Idioma } from '../i18n/rutas';

type Entrada = CollectionEntry<'proyectos'>;

export interface Proyecto {
  slug: string;
  lang: Idioma;
  /** true si este idioma no tiene archivo propio y se muestra el español */
  sinTraducir: boolean;
  entrada: Entrada; // para renderizar el cuerpo markdown
  titulo: string;
  descripcion: string;
  cliente?: string;
  rol?: string;
  portadaAlt: string;
  anio?: string;
  disciplinas: NonNullable<Entrada['data']['disciplinas']>;
  color: string;
  colorTexto: string;
  orden: number;
  destacado: boolean;
  vertical: boolean;
  enlaces: { texto: string; url: string }[];
  galeria: { archivo: string; proporcion: string; alt: string; ancha?: boolean }[];
}

function separa(id: string) {
  const [lang, ...resto] = id.split('/');
  return { lang: lang as Idioma, slug: resto.join('/') };
}

export async function getProyectos(lang: Idioma): Promise<Proyecto[]> {
  const todas = await getCollection('proyectos');
  const porIdioma = { es: new Map<string, Entrada>(), en: new Map<string, Entrada>() };
  for (const e of todas) {
    const { lang: l, slug } = separa(e.id);
    if (l in porIdioma) porIdioma[l].set(slug, e);
  }

  const lista: Proyecto[] = [];
  for (const [slug, base] of porIdioma.es) {
    const propia = porIdioma[lang].get(slug);
    const texto = propia ?? base;
    const d = base.data;
    const tx = texto.data;
    const galeria = (d.galeria ?? []).map((g, i) => ({
      ...g,
      alt: (lang !== 'es' && tx.galeriaAlt?.[i]) || g.alt,
    }));
    lista.push({
      slug,
      lang,
      sinTraducir: !propia,
      entrada: texto,
      titulo: tx.titulo,
      descripcion: tx.descripcion,
      cliente: tx.cliente ?? d.cliente,
      rol: tx.rol ?? d.rol,
      portadaAlt: tx.portadaAlt ?? d.portadaAlt ?? tx.titulo,
      anio: d.anio !== undefined ? String(d.anio) : undefined,
      disciplinas: d.disciplinas ?? [],
      color: d.color ?? '#e5007e',
      colorTexto: d.colorTexto ?? '#ffffff',
      orden: d.orden ?? 999,
      destacado: d.destacado ?? false,
      vertical: d.vertical ?? false,
      enlaces: tx.enlaces ?? d.enlaces ?? [],
      galeria,
    });
  }
  return lista.sort((a, b) => a.orden - b.orden);
}

/** Proyectos que existen en español pero no tienen archivo inglés */
export async function proyectosSinTraducir(): Promise<string[]> {
  return (await getProyectos('en')).filter((p) => p.sinTraducir).map((p) => p.slug);
}
