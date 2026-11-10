---
# Textos en español + datos compartidos (el inglés hereda los datos de aquí)
titulo: "Esta web"
descripcion: "Mi portfolio, diseñado y construido por mí: una web bilingüe con una sola tipografía, flores que crecen a pantalla completa y una marca que no se queda quieta."
cliente: "Marca propia"
rol: "Diseño, dirección de arte, animación y desarrollo web"
portadaAlt: "Inicio de la web: el nombre Yaiza Kimbao a todo el ancho sobre fondo blanco roto"

# --- Datos compartidos ---
anio: "2026"
disciplinas: ["digital", "motion", "branding"]  # branding, estrategia, motion, digital, moda
color: "#e5007e"
colorTexto: "#ffffff"
orden: 9
destacado: false  # true = aparece en el carrusel de la home
vertical: false
portadaPosicion: "top"

# Las imágenes son capturas de la propia web
galeria:
  - archivo: "galeria-01"
    proporcion: "8:5"
    alt: "Las flores de la portada ocupando toda la pantalla"

bloques:
  - etiqueta: "Acto 01 — Proceso"
    titulo: "Un portfolio que pueda tocar yo"
    cita: "Que se mueva como mis marcas y que no dependa de nadie para cambiarlo."
    texto: "Quería una web que enseñara el trabajo como un relato y no como una cuadrícula de miniaturas. Cada proyecto vive en un archivo de texto que puedo editar yo misma, en español y en inglés, y cada cambio se publica solo en unos minutos."
    piezas:
      - archivo: "home-inicio"
        proporcion: "8:5"
        tamano: "completo"
        alt: "Inicio de la web: el nombre a todo el ancho, la frase de presentación y las flores asomando"
        pie: "Inicio"
      - archivo: "cita"
        proporcion: "8:5"
        tamano: "completo"
        alt: "Sección oscura con la cita de presentación y la lista de disciplinas"
        pie: "Del blanco roto al negro"

  - etiqueta: "Acto 02 — Tipografía"
    titulo: "Una sola letra, a todo volumen"
    cita: "Marca. Estrategia. Movimiento."
    texto: "Toda la web usa una única familia, Geist, en peso 500 y con el espaciado entre letras apretado. La jerarquía sale solo del tamaño: desde etiquetas de 11 px hasta el nombre ocupando todo el ancho de la pantalla. El acento es un solo color, magenta #e5007e, sobre un blanco roto que pasa a negro al bajar."
    fondo: "#0e0d0c"
    colorTexto: "#f4f1ec"
    piezas:
      - archivo: "marca"
        proporcion: "8:5"
        tamano: "mitad"
        alt: "La palabra «Marca.» enorme sobre fondo negro"
        pie: "Marca."
      - archivo: "movimiento"
        proporcion: "8:5"
        tamano: "mitad"
        desfase: true
        alt: "La palabra «Movimiento.» enorme en gris sobre fondo negro"
        pie: "Movimiento."

  - etiqueta: "Acto 03 — Animaciones"
    titulo: "Que la marca no se quede quieta"
    cita: "Todo se mueve con el scroll, nada se mueve porque sí."
    texto: "Las flores crecen hasta llenar la pantalla, el fondo cambia de color, las palabras se quedan fijas mientras bajas, los proyectos pasan en horizontal y el pie despide con una cinta que dice hola en tres idiomas. Los detalles pequeños solo aparecen al pasar el ratón. Si el sistema pide menos movimiento, la web se queda quieta y se lee igual."
    fondo: "#e5007e"
    colorTexto: "#ffffff"
    piezas:
      - archivo: "flores-01"
        proporcion: "8:5"
        tamano: "mitad"
        alt: "Las flores empiezan a crecer bajo el nombre"
        pie: "Las flores crecen…"
      - archivo: "flores-02"
        proporcion: "8:5"
        tamano: "mitad"
        desfase: true
        alt: "Las flores casi a pantalla completa"
        pie: "…hasta llenarlo todo"
      - archivo: "carrusel"
        proporcion: "8:5"
        tamano: "completo"
        alt: "Carrusel horizontal de trabajo seleccionado con HEAD BUTT, FAUVES, Tierra Bobal y KIMBAO 999"
        pie: "Trabajo seleccionado, en horizontal"
      - archivo: "pie-hover"
        proporcion: "8:5"
        tamano: "completo"
        alt: "Pie de la web: al pasar el ratón, la pregunta sube y aparece «Escríbeme y la hacemos» en magenta"
        pie: "El pie, con el ratón encima"

  - etiqueta: "Acto 04 — En el móvil"
    titulo: "Pensada también para el pulgar"
    texto: "La misma historia, recolocada para una pantalla vertical: menú desplegable, textos que se ajustan al ancho y animaciones más ligeras."
    piezas:
      - { archivo: "movil-01", proporcion: "390:844", tamano: "cuarto", alt: "Inicio en el móvil", pie: "Inicio" }
      - { archivo: "movil-02", proporcion: "390:844", tamano: "cuarto", desfase: true, alt: "Las flores creciendo en el móvil", pie: "Flores" }
      - { archivo: "movil-03", proporcion: "390:844", tamano: "cuarto", alt: "La palabra «Marca.» en el móvil", pie: "Statement" }
      - { archivo: "movil-04", proporcion: "390:844", tamano: "cuarto", desfase: true, alt: "Pie de la web en el móvil", pie: "Pie" }
---

## Reto

Hacer un portfolio que sea, en sí mismo, una muestra de lo que hago: identidad, dirección de arte y movimiento. Y que pudiera mantenerlo yo, sin depender de nadie cada vez que termino un proyecto.

## Enfoque

Pocas piezas y muy bien escogidas: una tipografía, un color de acento y un ritmo de scroll que cuenta cada caso por actos. La web es bilingüe (español e inglés), rápida y se publica sola cada vez que cambio algo.

## Solución

- **Diseño:** blanco roto que pasa a negro, una sola familia tipográfica (Geist) y magenta #e5007e como firma.
- **Animación:** flores que crecen a pantalla completa, secciones fijadas, carrusel horizontal y detalles que solo aparecen al pasar el ratón.
- **Contenido:** cada proyecto es un archivo de texto con galería, vídeos y bloques en mosaico, en dos idiomas.
- **Técnica:** Astro, GSAP con ScrollTrigger y Lenis para el scroll suave. Publicada en GitHub Pages.

¿Quieres una web así para tu marca, tu bodega o tu proyecto? [Escríbeme](mailto:yaizakimbao@gmail.com?subject=Quiero%20una%20web%20como%20la%20tuya).

## Resultados e impacto

[PENDIENTE]
