import type { ImageMetadata } from 'astro';

const archivos = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/**/*.{jpg,jpeg,png,webp,avif,JPG,JPEG,PNG,WEBP,AVIF}',
  { eager: true },
);

/** Devuelve la imagen src/assets/<carpeta>/<archivo>.(jpg|png|…) o undefined si aún no existe */
export function buscaImagen(carpeta: string, archivo: string): ImageMetadata | undefined {
  const prefijo = `/src/assets/${carpeta}/${archivo}.`;
  const clave = Object.keys(archivos).find((k) => k.startsWith(prefijo));
  return clave ? archivos[clave].default : undefined;
}
