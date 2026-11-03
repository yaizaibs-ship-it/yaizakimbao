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
      filter: (page) => /\/(es|en)\//.test(page),
    }),
  ],
});
