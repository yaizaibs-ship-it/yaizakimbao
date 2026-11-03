---
# =====================================================================
# PLANTILLA DE PROYECTO (ESPAÑOL)
# 1. Copia este archivo en esta misma carpeta y renómbralo sin el «_»,
#    usando el nombre que quieras en la URL: por ejemplo «mi-proyecto.md»
#    → la página será /es/proyectos/mi-proyecto/
# 2. Crea la carpeta de fotos: src/assets/proyectos/mi-proyecto/
# 3. Crea también la versión inglesa con el MISMO nombre en ../en/
#    (si no la creas, la web en inglés mostrará este texto en español).
# Las líneas que empiezan por # son comentarios: puedes borrarlas.
# =====================================================================

titulo: "Nombre del proyecto"
descripcion: "Una o dos frases que resumen el proyecto (se ven en la lista y en Google)."
cliente: "Cliente o «Marca propia»"
rol: "Qué hiciste tú"
portadaAlt: "Descripción de la foto de portada"
enlaces:
  - texto: "Web del proyecto"
    url: "https://..."

# --- Datos compartidos: SOLO aquí, en el archivo español ---
anio: "2026"
disciplinas: ["branding"]   # elige entre: branding, estrategia, motion, digital, moda
color: "#e5007e"            # color de acento del caso
colorTexto: "#ffffff"       # color del texto sobre el acento (#ffffff o #0e0d0c)
orden: 9                    # posición en las listas (1 = primero)
destacado: false            # true = sale en el carrusel de la home
vertical: false             # true = tarjeta alta en el carrusel
videos:                     # opcional: pega el enlace de TikTok, YouTube o Vimeo
  - url: "https://www.tiktok.com/@usuario/video/123"
    titulo: "Texto bajo el vídeo"
galeria:
  # La primera foto se expande a pantalla completa al hacer scroll.
  - archivo: "galeria-01"   # = src/assets/proyectos/mi-proyecto/galeria-01.jpg
    proporcion: "16:9"
    alt: "Qué se ve en la foto"
  - archivo: "galeria-02"
    proporcion: "4:5"
    alt: "Qué se ve en la foto"
  - archivo: "galeria-03"
    proporcion: "16:9"
    alt: "Qué se ve en la foto"
    ancha: true             # ocupa todo el ancho
---

## Reto

Cuál era el problema o el encargo.

## Enfoque estratégico

Cómo lo pensaste: público, objetivos, concepto.

## Solución visual

Qué diseñaste y por qué.

## Resultados e impacto

Datos, aprendizajes, reconocimiento. Si aún no los tienes, escribe [PENDIENTE].
