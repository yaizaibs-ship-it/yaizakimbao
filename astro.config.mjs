// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// [PENDIENTE] Cuando tengas dominio, cambia esta URL (ver README → «Conectar mi dominio»).
const SITE = 'https://yaizakimbao.vercel.app';

export default defineConfig({
  site: SITE,
  trailingSlash: 'always',
  i18n: {
    locales: ['es', 'en'],
    defaultLocale: 'es',
    routing: {
      prefixDefaultLocale: true,
      // La raíz «/» la gestiona src/pages/index.astro (recuerda el idioma elegido)
      redirectToDefaultLocale: false,
    },
  },
  integrations: [
    sitemap({
      filter: (page) => page !== `${SITE}/`,
    }),
  ],
});
