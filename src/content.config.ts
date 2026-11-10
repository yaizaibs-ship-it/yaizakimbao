/**
 * ESQUEMA DE LOS PROYECTOS
 * ------------------------------------------------------------------
 * Cada proyecto tiene un archivo .md por idioma, con el MISMO nombre:
 *   src/content/proyectos/es/fauves.md
 *   src/content/proyectos/en/fauves.md
 *
 * El nombre del archivo es el «slug» (la URL): /es/proyectos/fauves/
 *
 * Los datos que NO cambian con el idioma (color, orden, año, disciplinas,
 * galería…) se escriben SOLO en el archivo español. El inglés los hereda.
 * En el archivo inglés solo van los textos traducidos.
 *
 * Los archivos que empiezan por «_» (como la plantilla) se ignoran.
 */
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const DISCIPLINAS = ['branding', 'estrategia', 'motion', 'digital', 'moda'] as const;

const enlace = z.object({
  texto: z.string(),
  url: z.string(),
});

const imagenGaleria = z.object({
  /** Nombre del archivo sin extensión, p. ej. «galeria-01» */
  archivo: z.string(),
  /** Proporción: «16:9», «4:5», «1:1», «3:4», «4:3»… */
  proporcion: z.string().default('4:5'),
  /** Texto alternativo (descripción de la foto para lectores de pantalla) */
  alt: z.string().default(''),
  /** «ancha» ocupa todo el ancho de la galería */
  ancha: z.boolean().optional(),
});

/** Vídeos de redes integrados en el caso (TikTok, YouTube o Vimeo) */
const video = z.object({
  /** Pega aquí el enlace completo del vídeo */
  url: z.url(),
  /** Texto que acompaña al vídeo (opcional) */
  titulo: z.string().optional(),
});

/** Bloques de trabajo con título y mosaico de piezas (cartelería, redes, web…) */
const pieza = z.object({
  /** Nombre del archivo sin extensión */
  archivo: z.string(),
  proporcion: z.string(),
  alt: z.string().default(''),
  /** Ancho en el mosaico: completo, dostercios, mitad, tercio o cuarto */
  tamano: z.enum(['completo', 'dostercios', 'mitad', 'tercio', 'cuarto']).default('mitad'),
});
const bloque = z.object({
  titulo: z.string(),
  texto: z.string().optional(),
  piezas: z.array(pieza),
});
const bloqueTexto = z.object({
  titulo: z.string(),
  texto: z.string().optional(),
  alts: z.array(z.string()).optional(),
});

const proyectos = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/proyectos' }),
  schema: z.object({
    // ---- Textos (en cada idioma) ----
    titulo: z.string(),
    descripcion: z.string(),
    cliente: z.string().optional(),
    rol: z.string().optional(),
    portadaAlt: z.string().optional(),
    /** Textos alternativos traducidos de la galería, en el mismo orden */
    galeriaAlt: z.array(z.string()).optional(),
    /** Enlaces (el texto se puede traducir; si falta, se usan los del español) */
    enlaces: z.array(enlace).optional(),

    // ---- Datos compartidos (solo en el archivo español) ----
    anio: z.union([z.string(), z.number()]).optional(),
    disciplinas: z.array(z.enum(DISCIPLINAS)).optional(),
    /** Color de acento del caso (fondo de la cabecera y placeholders) */
    color: z.string().optional(),
    /** Color del texto encima del acento: normalmente #ffffff o #0e0d0c */
    colorTexto: z.string().optional(),
    orden: z.number().optional(),
    destacado: z.boolean().optional(),
    /** Qué parte de la portada se ve al recortarla: «center», «right», «70% 40%»… */
    portadaPosicion: z.string().optional(),
    /** Tarjeta vertical (más alta) en el carrusel de la home */
    vertical: z.boolean().optional(),
    galeria: z.array(imagenGaleria).optional(),
    videos: z.array(video).optional(),
    bloques: z.array(bloque).optional(),
    /** Traducción de los bloques, en el mismo orden (solo en el archivo inglés) */
    bloquesTexto: z.array(bloqueTexto).optional(),
    /** Textos traducidos de los vídeos, en el mismo orden (solo en el archivo inglés) */
    videosTitulo: z.array(z.string()).optional(),
  }),
});

export const collections = { proyectos };
