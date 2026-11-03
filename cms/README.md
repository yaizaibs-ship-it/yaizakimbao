# CMS visual (preparado, sin instalar)

La web ya separa contenido y código, así que conectar un CMS visual más adelante solo requiere configuración, no rehacer nada:

- Proyectos: archivos Markdown en `src/content/proyectos/es/` y `src/content/proyectos/en/`.
- Fotos de proyectos: `src/assets/proyectos/<slug>/`.
- Textos generales: `src/i18n/es.ts` y `src/i18n/en.ts` (son TypeScript; si quieres editarlos desde un CMS, el paso previo sería pasarlos a JSON).

## Opción A · Decap CMS (gratis, sin servidor)

1. Copia `decap-config.example.yml` a `public/admin/config.yml`.
2. Crea `public/admin/index.html` con el script de Decap (ver su documentación: https://decapcms.org/docs/install-decap-cms/).
3. Configura la autenticación con GitHub (en Vercel, con un proveedor OAuth).
4. Entrarás en `tudominio.com/admin/` para editar los proyectos con formularios.

## Opción B · TinaCMS (edición visual en la propia página)

Tina lee los mismos Markdown. Ejecuta `npx @tinacms/cli init` y define una colección «proyectos» con los campos del archivo `src/content.config.ts`. Necesita cuenta en tina.io para la versión en la nube.

En ambos casos los campos son los de la plantilla `src/content/proyectos/es/_plantilla-proyecto.md`.
