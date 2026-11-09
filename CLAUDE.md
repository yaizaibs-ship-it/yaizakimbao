# Portfolio Yaiza Kimbao — contexto para Claude

Este archivo resume el proyecto para que cualquier conversación nueva con Claude pueda continuar el trabajo sin repetir explicaciones. Mantenlo al día cuando cambie algo importante.

## Quién y para qué
- **Yaiza Ibáñez**, firma como **Yaiza Kimbao**. Visual Designer y estratega de comunicación (branding, campañas, redes, motion, moda, upcycling). Entre Barcelona y Utiel-Requena.
- Web personal bilingüe (ES por defecto / EN) para conseguir proyectos y clientes.
- Yaiza **no programa** y **no puede instalar git ni nada en su ordenador**: edita desde la web de GitHub o pide los cambios a Claude. Respuestas en español, claras y sin jerga.

## Dónde está
- Repositorio: https://github.com/yaizaibs-ship-it/yaizakimbao (rama `main`).
- Web publicada (GitHub Pages): https://yaizaibs-ship-it.github.io/yaizakimbao/
- Cada push a `main` publica sola con `.github/workflows/publicar.yml` (`SITE` y `BASE` definidos ahí; ahora `BASE: /yaizakimbao`).
- Pendiente: comprar dominio propio → cambiar `SITE`/`BASE` en el workflow, añadir `public/CNAME` y DNS (pasos en README).

## Cómo está hecha
- **Astro 7 + TypeScript**, **GSAP + ScrollTrigger + Lenis**. Sin frameworks de UI.
- Tipografía única **Geist** (peso 500, tracking negativo), estilo inspirado en fuegocaminaconmigo.com. Acento **magenta #e5007e**. Fondo blanco roto que pasa a **negro** al hacer scroll.
- Variables de estilo: `src/styles/tokens.css`. Textos generales: `src/i18n/es.ts` y `en.ts`. Contacto/CV: `src/i18n/comun.ts`.
- Rutas con base: usar siempre `url()` / `conBase()` de `src/i18n/rutas.ts` (la web vive en una subcarpeta).
- Animaciones declaradas con atributos `data-*` y programadas en `src/scripts/movimiento.ts` (documentado arriba del archivo). Las secciones fijadas usan `refreshPriority` para calcularse en orden.
- Home (`src/views/Inicio.astro`): nombre a todo el ancho → flores que crecen a pantalla completa → cita → statement fijado (Marca/Estrategia/Movimiento) → carrusel horizontal de destacados → índice gigante → pie con cinta «Say hola!».

## Proyectos (casos)
Un `.md` por idioma en `src/content/proyectos/es|en/<slug>.md`; los datos compartidos (color, orden, galería, vídeos, bloques) solo en el español; el inglés lleva textos y `galeriaAlt` / `videosTitulo` / `bloquesTexto`. Imágenes en `src/assets/proyectos/<slug>/`; si falta una, sale un placeholder.

Recursos disponibles en un caso:
- `galeria`: la primera imagen crece a pantalla completa; las demás van en rejilla (`ancha: true` = todo el ancho; las muy verticales van de tres en tres).
- `videos`: enlaces de TikTok, YouTube o Vimeo.
- `bloques`: secciones con título, texto y mosaico de piezas (`tamano`: completo, dostercios, mitad, tercio, cuarto).
- `portadaPosicion`: encuadre de la portada al recortarla.

Estado:
| Caso | Estado |
|---|---|
| HEAD BUTT BARCELONA | Completo (brandbook). Falta: resultados, fotos de tienda/aplicaciones, animación del logo |
| KIMBAO 999 | Completo (campaña, logo, stories, TikTok). Falta: resultados |
| FAUVES | Completo (brandbook). Falta: año, aclarar si fue académico, resultados |
| Día de Tierra Bobal (`tierra-bobal`) | Completo con 4 bloques en mosaico. Falta: resultados; se pueden añadir campaña «Huele a Tierra Bobal», paneles e infografías como bloques nuevos |
| ACEROº, Club Bayer, Farline, Alegre Design | Solo texto y placeholders: esperan material de Yaiza |

Otros pendientes: URLs de LinkedIn e Instagram en `comun.ts`; CV definitivos en `public/cv/`; posible nueva portada de la home (imagen o vídeo de flores generado con IA).

## Cómo trabajar
1. Clonar, `npm ci`, hacer el cambio, `npx astro check` y `npx astro build`.
2. Revisar con capturas (Playwright) en escritorio 1440×900 y móvil 390×844 antes de publicar; enseñar capturas a Yaiza.
3. Commit en español, push a `main` y esperar a que el workflow «Publicar web» termine en verde.
4. No inventar datos: lo desconocido va como `[PENDIENTE]`; traducciones dudosas como `[REVISAR]`.
5. No publicar imágenes de terceros (moodboards, referencias) sin confirmarlo con Yaiza.
