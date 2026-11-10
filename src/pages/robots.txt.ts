import type { APIRoute } from 'astro';
import { conBase } from '../i18n';

// robots.txt con la dirección del mapa del sitio (se adapta solo al dominio y a la carpeta)
export const GET: APIRoute = ({ site }) => {
  const mapa = new URL(conBase('/sitemap-index.xml'), site ?? 'https://example.com').href;
  return new Response(`User-agent: *\nAllow: /\n\nSitemap: ${mapa}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
