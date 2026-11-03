# Portfolio · Yaiza Kimbao

Web personal de Yaiza Ibáñez (Yaiza Kimbao), en español y en inglés.
Hecha con **Astro** y con las animaciones en **GSAP + ScrollTrigger + Lenis**.

> Este README está pensado para que puedas mantener la web sin saber programar.
> Casi todo lo que vas a querer cambiar está en **textos (`.ts`)**, **proyectos (`.md`)** o **fotos (carpetas)**.

---

## Mapa rápido: ¿dónde se cambia cada cosa?

| Quiero cambiar…                         | Archivo                                              |
| --------------------------------------- | ---------------------------------------------------- |
| Un proyecto (textos, color, galería)    | `src/content/proyectos/es/<proyecto>.md` (+ `en/`)   |
| Las fotos                               | `src/assets/proyectos/<proyecto>/` y `src/assets/personal/` |
| Textos generales en español             | `src/i18n/es.ts`                                     |
| Textos generales en inglés              | `src/i18n/en.ts`                                     |
| Email, LinkedIn, Instagram, CV          | `src/i18n/comun.ts`                                  |
| El CV en PDF                            | `public/cv/`                                         |
| Colores, tipografías, tamaños           | `src/styles/tokens.css`                              |
| Las 3 direcciones de diseño propuestas  | `PROPUESTAS.md`                                      |

---

## 1. Cómo añadir, editar o quitar un proyecto

Cada proyecto tiene **un archivo por idioma, con el mismo nombre**:

```
src/content/proyectos/es/acero.md   ← textos en español + datos compartidos
src/content/proyectos/en/acero.md   ← solo textos en inglés
```

El nombre del archivo (`acero`) es la dirección de la página: `/es/proyectos/acero/` y `/en/projects/acero/`.

**Editar:** abre el `.md` y cambia el texto. La parte de arriba, entre las dos líneas `---`, son los datos (título, color…). Debajo va el texto del caso, con sus cuatro secciones (`## Reto`, `## Enfoque estratégico`…). Cada `##` es una sección numerada en la web.

**Datos que se escriben una sola vez (solo en el archivo español):**
`anio`, `disciplinas`, `color`, `colorTexto`, `orden`, `destacado`, `vertical` y `galeria`. El inglés los coge solo.

**Añadir uno nuevo:**
1. Copia `src/content/proyectos/es/_plantilla-proyecto.md`, pega la copia en la misma carpeta y renómbrala sin el guion bajo, por ejemplo `mi-proyecto.md`.
2. Haz lo mismo con `src/content/proyectos/en/_plantilla-proyecto.md` → `mi-proyecto.md`.
3. Crea la carpeta `src/assets/proyectos/mi-proyecto/` y mete ahí las fotos.
4. Listo: aparece en «Trabajo» y, si pones `destacado: true`, en el carrusel de la home.

> Si no creas la versión inglesa, la web en inglés muestra el texto en español con un aviso, sin romperse.

**Quitar:** borra los dos `.md` (es y en) y su carpeta de fotos.

**Ordenar:** cambia el número `orden` (1 = primero).

**Disciplinas disponibles para los filtros:** `branding`, `estrategia`, `motion`, `digital`, `moda`.

## 2. Cómo editar los textos en español e inglés

- `src/i18n/es.ts` → todos los textos generales en español: statement de la home, bio, trayectoria, herramientas, idiomas, menú, botones, filtros y pie.
- `src/i18n/en.ts` → lo mismo en inglés, con la misma estructura.
- Los textos de cada proyecto están en su `.md` (ver punto 1).

Cambia solo lo que está **entre comillas**. Si borras una coma o una comilla, la web no compilará: Vercel te avisará y la versión anterior seguirá publicada.

## 3. Cómo poner mis fotos

No hay que tocar código: **guarda la foto con el nombre exacto en su carpeta**. Valen `.jpg`, `.png`, `.webp` o `.avif`. Mientras una foto no existe, la web muestra un recuadro del color del proyecto con su nombre y su ruta.

Cada carpeta tiene un `LEEME.txt` con su lista. Resumen:

### Fotos personales — `src/assets/personal/`

| Archivo               | Proporción | Tamaño recomendado | Dónde sale                         |
| --------------------- | ---------- | ------------------ | ---------------------------------- |
| `portada-flores.jpg`  | 3:2        | 2800 × 1870 px     | Portada de la home (a sangre)      |
| `flores-02.jpg`       | 4:5        | 1200 × 1500 px     | Capa flotante «Rigor & Mirada»     |
| `retrato.jpg`         | 4:5        | 1600 × 2000 px     | Sobre mí                           |
| `contacto-flores.jpg` | 3:4        | 1500 × 2000 px     | Contacto                           |

### Fotos de cada proyecto — `src/assets/proyectos/<proyecto>/`

Todas las carpetas llevan `portada.jpg`: **3:2, mínimo 2400 × 1600 px**. Se usa recortada en la tarjeta (4:3 o 3:4), en la lista y a pantalla completa en la cabecera del caso, así que deja el motivo principal centrado.

La **primera foto de la galería** se expande a pantalla completa con el scroll: elige una potente y horizontal.

| Proyecto                | galeria-01 | galeria-02 | galeria-03 | galeria-04   | galeria-05   | galeria-06 |
| ----------------------- | ---------- | ---------- | ---------- | ------------ | ------------ | ---------- |
| `head-butt-barcelona`   | 16:9       | 4:5        | 4:5        | 16:9 (ancha) | 1:1          | 4:5        |
| `acero`                 | 16:9       | 4:5        | 4:5        | 16:9 (ancha) | 1:1          | —          |
| `fauves`                | 16:9       | 4:5        | 4:5        | 16:9 (ancha) | 4:5          | 4:5        |
| `tierra-bobal`          | 16:9       | 4:5        | 4:5        | 16:9 (ancha) | 1:1          | 4:5        |
| `club-bayer`            | 16:9       | 3:4        | 3:4        | 3:4          | 16:9 (ancha) | —          |
| `farline`               | 16:9       | 9:16       | 9:16       | 4:5          | 4:5          | —          |
| `alegre-design`         | 16:9       | 9:16       | 4:5        | 16:9 (ancha) | —            | —          |
| `kimbao-999`            | 16:9       | 4:5        | 4:5        | 1:1          | 16:9 (ancha) | —          |

**Tamaños en píxeles:** lado largo de **2400 px** (las anchas y las 16:9, **3000 px**). Exporta en JPG calidad 80–85; la web genera sola las versiones ligeras para móvil.

**¿Quieres más o menos fotos?** Edita la lista `galeria:` del `.md` en español (y `galeriaAlt:` en el inglés, que son las descripciones de cada foto en inglés).

## 4. Cómo cambiar textos, enlaces, colores y tipografías

- **Email, LinkedIn, Instagram y ruta del CV:** `src/i18n/comun.ts`.
- **CV:** sustituye `public/cv/cv-yaiza-ibanez-es.pdf` y `public/cv/cv-yaiza-ibanez-en.pdf` por los tuyos, con el mismo nombre. Los actuales son provisionales, generados a partir de tus textos.
- **Colores, tipografías y tamaños:** `src/styles/tokens.css`. Todo está en variables con comentarios: `--color-firma` (magenta), `--color-fondo`, `--font-sans`, `--font-firma`, `--t-base`…
- **Color de cada proyecto:** `color` y `colorTexto` en su `.md` en español.
- **Cambiar de tipografía:** las fuentes se instalan como paquetes (`@fontsource…`). Para usar otra, instala su paquete de [Fontsource](https://fontsource.org), cámbialo en la primera línea de `src/layouts/Base.astro` y pon su nombre en `--font-sans` o `--font-firma`.
- **Imagen al compartir en redes:** `public/og-default.png` (1200 × 630). Cada caso usa automáticamente su `portada.jpg`.

## 5. Cómo editar desde la web de GitHub, sin instalar nada

1. Entra en tu repositorio en github.com.
2. Navega hasta el archivo (por ejemplo `src/i18n/es.ts`) y pulsa el lápiz ✏️ («Edit this file»).
3. Haz el cambio y pulsa **Commit changes** con una frase que lo describa («Cambio la bio»).
4. Vercel publica la web sola en uno o dos minutos.

**Subir fotos desde GitHub:** entra en la carpeta (por ejemplo `src/assets/proyectos/acero/`), pulsa **Add file → Upload files**, arrastra las fotos con su nombre exacto y pulsa **Commit changes**.

> Truco: pulsa la tecla `.` dentro del repositorio y se abre un editor completo en el navegador (github.dev) para cambiar varios archivos a la vez.

## 6. Cómo ver la web en tu ordenador

Necesitas [Node.js](https://nodejs.org) versión 22.23 o superior (la LTS más reciente vale).

```bash
npm install      # solo la primera vez
npm run dev      # abre http://localhost:4321 y se actualiza al guardar
npm run build    # genera la web final en /dist (lo mismo que hace Vercel)
```

## 7. Cómo publicar en Vercel y conectar tu dominio

**Publicar (una sola vez):**
1. Crea una cuenta en [vercel.com](https://vercel.com) con tu cuenta de GitHub.
2. **Add New → Project** → elige este repositorio → **Import**.
3. Vercel detecta Astro solo. No toques nada y pulsa **Deploy**.
4. A partir de ahí, cada cambio que subas a GitHub se publica automáticamente.

**Conectar tu dominio:**
1. En Vercel: **Project → Settings → Domains → Add** y escribe tu dominio (por ejemplo `yaizakimbao.com`).
2. Vercel te dará unos registros DNS (normalmente un registro `A` y un `CNAME` para `www`). Cópialos en el panel de tu proveedor de dominio (GoDaddy, Namecheap, IONOS…).
3. Cambia la URL en `astro.config.mjs` (`const SITE = …`) y en `public/robots.txt` por la de tu dominio. Así el sitemap y las etiquetas para Google apuntan bien.

---

## Cómo está construida (para quien programe)

- `src/pages/` — rutas. Son envoltorios finos: `es/trabajo.astro` y `en/work.astro` usan la misma vista con distinto `lang`.
- `src/views/` — el diseño de cada página (`Inicio`, `Trabajo`, `Sobre`, `Contacto`, `Caso`).
- `src/components/` — `Cabecera`, `Pie`, `Tarjeta` y `Foto` (imagen o placeholder automático).
- `src/lib/proyectos.ts` — combina los datos compartidos (es) con los textos de cada idioma y aplica la vuelta al español si falta una traducción.
- `src/scripts/movimiento.ts` — Lenis + ScrollTrigger. Las animaciones se declaran con atributos `data-*` en el HTML (`data-hero`, `data-statement`, `data-horizontal`, `data-crece`, `data-encoge`, `data-peso`, `data-speed`, `data-reveal`, `data-fit`…). Está documentado al principio del archivo.
- Las transiciones entre páginas usan View Transitions (`<ClientRouter />`): la portada de la tarjeta crece hasta la cabecera del caso (`transition:name="portada-<slug>"`).
- Con `prefers-reduced-motion` no se inicia ni Lenis ni GSAP: todo queda estático y el carrusel pasa a scroll horizontal nativo.
- El idioma elegido se guarda en `localStorage` y la raíz `/` redirige a él (`src/pages/index.astro`).
- CMS visual: ver `cms/README.md`.
