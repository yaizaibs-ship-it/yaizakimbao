import { readdirSync, readFileSync } from 'node:fs';
// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

/**
 * DÓNDE SE PUBLICA LA WEB
 * Ahora: GitHub Pages → https://yaizaibs-ship-it.github.io/yaizakimbao/
 * (estos valores los pone el archivo .github/workflows/publicar.yml)
 *
 * Cuando compres tu dominio: en publicar.yml cambia SITE por tu dominio
 * (https://yaizakimbao.com) y BASE por «/». Ver README → «Conectar mi dominio».
 */
const SITE = process.env.SITE || 'https://yaizaibs-ship-it.github.io';
const BASE = process.env.BASE || '/';

// Casos marcados como «Work in progress»: fuera del sitemap
const enProceso = readdirSync(new URL('./src/content/proyectos/es/', import.meta.url))
  .filter((f) => f.endsWith('.md') && /^enProceso:\s*true/m.test(readFileSync(new URL(`./src/content/proyectos/es/${f}`, import.meta.url), 'utf8')))
  .map((f) => f.replace(/\.md$/, ''));

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'always',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: true,
      // La raíz la gestiona src/pages/index.astro (recuerda el idioma elegido)
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      // la página raíz solo redirige al idioma: no va en el sitemap
      // ni los casos «Work in progress» (enProceso: true)
      filter: (page) => /\/(es|en)\//.test(page) && !enProceso.some((slug) => page.includes(`/${slug}/`)),
    }),
  ],
});
