/**
 * MOVIMIENTO — scroll suave (Lenis) + animaciones de scroll (GSAP ScrollTrigger)
 * ---------------------------------------------------------------------------
 * Las animaciones se activan con atributos en el HTML, así los componentes
 * solo «declaran» qué quieren y aquí está toda la lógica:
 *
 *   data-fit                 → el texto ocupa todo el ancho de su contenedor
 *   data-reveal              → aparece al entrar en pantalla
 *   data-speed="0.2"         → parallax vertical (capas a distinta velocidad)
 *   data-parallax-img        → la foto se mueve dentro de su marco
 *   data-peso                → la palabra gana peso y anchura con el scroll
 *   data-hero                → la foto de portada se encoge y deja la firma flotando
 *   data-statement           → sección fijada en la que las palabras van cambiando
 *   data-horizontal          → sección fijada que se recorre en horizontal
 *   data-crece               → una miniatura se expande hasta pantalla completa
 *   data-encoge              → una imagen a sangre se reduce al hacer scroll
 *   data-desliza="-1|1"      → texto que se desplaza en horizontal con el scroll
 *
 * Con «prefers-reduced-motion» no se anima nada: todo queda estático y legible.
 */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;
let mm: gsap.MatchMedia | null = null;
let control: AbortController | null = null;
let tickerFn: ((time: number) => void) | null = null;

const $$ = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  Array.from(root.querySelectorAll<T & Element>(sel)) as unknown as T[];

/* ------------------------------------------------------------------ */
/* Ajustar titulares al ancho disponible                               */
/* ------------------------------------------------------------------ */
function ajustaTextos() {
  for (const el of $$<HTMLElement>('[data-fit]')) {
    const contenedor = el.parentElement;
    if (!contenedor) continue;
    const ratio = parseFloat(el.dataset.fit || '1') || 1;
    const maxTxt = el.dataset.fitMax || '';
    const max = maxTxt.endsWith('vh')
      ? (window.innerHeight * parseFloat(maxTxt)) / 100
      : parseFloat(maxTxt) || Infinity;
    const medir = el.dataset.fitMedir; // «900,125»: mide con el texto en su versión más ancha
    const prev = { w: el.style.getPropertyValue('--wght'), d: el.style.getPropertyValue('--wdth') };
    if (medir) {
      const [w, d] = medir.split(',');
      el.style.setProperty('--wght', w);
      el.style.setProperty('--wdth', d);
    }
    el.style.fontSize = '100px';
    const ancho = el.scrollWidth;
    const cs = getComputedStyle(contenedor);
    const interior = contenedor.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
    const disponible = interior * ratio;
    if (ancho > 0) el.style.fontSize = Math.min(max, (100 * disponible) / ancho) + 'px';
    if (medir) {
      prev.w ? el.style.setProperty('--wght', prev.w) : el.style.removeProperty('--wght');
      prev.d ? el.style.setProperty('--wdth', prev.d) : el.style.removeProperty('--wdth');
    }
  }
}

/* ------------------------------------------------------------------ */
/* Interacciones que no dependen del movimiento                        */
/* ------------------------------------------------------------------ */
function interacciones(signal: AbortSignal) {
  // Recordar idioma elegido
  for (const a of $$<HTMLAnchorElement>('[data-cambiar-idioma]')) {
    a.addEventListener(
      'click',
      () => {
        try { localStorage.setItem('idioma', a.dataset.cambiarIdioma || 'es'); } catch {}
      },
      { signal },
    );
  }

  // Menú móvil
  const boton = document.querySelector<HTMLButtonElement>('[data-abrir-menu]');
  const menu = document.querySelector<HTMLElement>('[data-menu-movil]');
  if (boton && menu) {
    const abrir = (si: boolean) => {
      menu.hidden = !si;
      boton.setAttribute('aria-expanded', String(si));
      boton.querySelector<HTMLElement>('[data-texto-abrir]')!.hidden = si;
      boton.querySelector<HTMLElement>('[data-texto-cerrar]')!.hidden = !si;
      si ? lenis?.stop() : lenis?.start();
      document.documentElement.style.overflow = si ? 'hidden' : '';
      if (si) menu.querySelector<HTMLElement>('a')?.focus();
    };
    boton.addEventListener('click', () => abrir(Boolean(menu.hidden)), { signal });
    document.addEventListener('keydown', (e) => e.key === 'Escape' && menu.hidden === false && (abrir(false), boton.focus()), { signal });
    menu.addEventListener('click', (e) => (e.target as HTMLElement).closest('a') && abrir(false), { signal });
  }

  // Volver arriba
  for (const a of $$('[data-arriba]')) {
    a.addEventListener(
      'click',
      (e) => {
        e.preventDefault();
        lenis ? lenis.scrollTo(0) : window.scrollTo({ top: 0 });
        document.querySelector<HTMLElement>('.logo')?.focus({ preventScroll: true });
      },
      { signal },
    );
  }

  // Filtros de la página Trabajo
  const filtros = document.querySelector<HTMLElement>('[data-filtros]');
  if (filtros) {
    const items = $$<HTMLElement>('[data-disciplinas]');
    const cuenta = document.querySelector<HTMLElement>('[data-cuenta]');
    filtros.addEventListener(
      'click',
      (e) => {
        const b = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-filtro]');
        if (!b) return;
        const valor = b.dataset.filtro!;
        for (const o of $$<HTMLButtonElement>('[data-filtro]', filtros)) o.setAttribute('aria-pressed', String(o === b));
        let n = 0;
        for (const it of items) {
          const ok = valor === 'todo' || (it.dataset.disciplinas || '').split(' ').includes(valor);
          it.hidden = !ok;
          if (ok) n++;
        }
        if (cuenta) cuenta.textContent = String(n).padStart(2, '0');
        ScrollTrigger.refresh();
      },
      { signal },
    );
  }

  // Vista previa flotante en la lista de trabajo (solo con ratón)
  const lista = document.querySelector<HTMLElement>('[data-lista-trabajo]');
  const preview = document.querySelector<HTMLElement>('[data-preview]');
  if (lista && preview && matchMedia('(hover: hover) and (pointer: fine)').matches) {
    const x = gsap.quickTo(preview, 'x', { duration: 0.6, ease: 'power3' });
    const y = gsap.quickTo(preview, 'y', { duration: 0.6, ease: 'power3' });
    lista.addEventListener('pointermove', (e) => { x(e.clientX); y(e.clientY); }, { signal });
    for (const fila of $$<HTMLElement>('[data-fila]', lista)) {
      fila.addEventListener(
        'pointerenter',
        () => {
          const img = fila.querySelector('[data-fila-img]');
          if (img) {
            preview.innerHTML = img.innerHTML;
            // evita nombres de transición duplicados
            preview.querySelectorAll('[data-astro-transition-scope]').forEach((n) => n.removeAttribute('data-astro-transition-scope'));
          }
          preview.classList.add('visible');
        },
        { signal },
      );
      fila.addEventListener('pointerleave', () => preview.classList.remove('visible'), { signal });
    }
  }
}

/* ------------------------------------------------------------------ */
/* Animaciones de scroll                                               */
/* ------------------------------------------------------------------ */
function animaciones(esMovil: boolean) {
  // --- Aparecer al entrar ---
  const reveal = $$<HTMLElement>('[data-reveal]');
  if (reveal.length) {
    gsap.set(reveal, { autoAlpha: 0, y: 40 });
    ScrollTrigger.batch(reveal, {
      start: 'top 92%',
      once: true,
      onEnter: (lote) =>
        gsap.to(lote, { autoAlpha: 1, y: 0, duration: 1.1, ease: 'expo.out', stagger: 0.07, clearProps: 'transform' }),
    });
  }

  // --- Parallax por capas ---
  for (const el of $$<HTMLElement>('[data-speed]')) {
    const v = parseFloat(el.dataset.speed || '0') * (esMovil ? 0.5 : 1);
    gsap.fromTo(
      el,
      { y: () => v * 160 },
      { y: () => -v * 160, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true, invalidateOnRefresh: true } },
    );
  }

  // --- Fotos que se mueven dentro de su marco (fuera de carruseles horizontales) ---
  for (const img of $$<HTMLElement>('[data-parallax-img]')) {
    if (img.closest('[data-horizontal]')) continue;
    gsap.fromTo(
      img,
      { yPercent: -6 },
      { yPercent: 6, ease: 'none', scrollTrigger: { trigger: img.parentElement, start: 'top bottom', end: 'bottom top', scrub: true } },
    );
  }

  // --- Palabras que ganan peso y anchura ---
  for (const el of $$<HTMLElement>('[data-peso]')) {
    gsap.fromTo(
      el,
      { '--wght': 150, '--wdth': 70 },
      { '--wght': 900, '--wdth': 125, ease: 'none', scrollTrigger: { trigger: el, start: 'top 95%', end: 'top 35%', scrub: true } },
    );
  }

  // --- Texto que se desplaza en horizontal ---
  for (const el of $$<HTMLElement>('[data-desliza]')) {
    const dir = parseFloat(el.dataset.desliza || '1');
    gsap.fromTo(
      el,
      { xPercent: -6 * dir },
      { xPercent: 6 * dir, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom top', scrub: true } },
    );
  }

  // --- Portada de la home: la foto se encoge y deja la firma flotando ---
  for (const hero of $$<HTMLElement>('[data-hero]')) {
    const media = hero.querySelector('[data-hero-media]');
    const img = hero.querySelector('[data-hero-img]');
    const firma = hero.querySelector('[data-hero-firma]');
    const etiquetas = hero.querySelectorAll('[data-hero-etiqueta]');
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom bottom', scrub: true },
    });
    tl.fromTo(media, { clipPath: 'inset(0% 0% 0% 0%)' }, { clipPath: esMovil ? 'inset(22% 10% 22% 10%)' : 'inset(16% 31% 16% 31%)' }, 0)
      .fromTo(img, { scale: 1.25 }, { scale: 1 }, 0)
      .fromTo(firma, { scale: 1, yPercent: 0 }, { scale: esMovil ? 0.8 : 0.62, yPercent: -10 }, 0)
      .to(etiquetas, { autoAlpha: 0, duration: 0.3 }, 0.55);
  }

  // --- Statement fijado: las palabras van cambiando ---
  for (const st of $$<HTMLElement>('[data-statement]')) {
    const palabras = $$<HTMLElement>('[data-palabra]', st);
    const textos = $$<HTMLElement>('[data-palabra-texto]', st);
    const contador = st.querySelector<HTMLElement>('[data-contador]');
    const n = palabras.length;
    gsap.set(palabras, { autoAlpha: 0 });
    gsap.set(textos, { autoAlpha: 0, y: 20 });
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: {
        trigger: st,
        start: 'top top',
        end: 'bottom bottom',
        scrub: true,
        onUpdate: (self) => {
          if (contador) contador.textContent = String(Math.min(n, Math.floor(self.progress * n) + 1)).padStart(2, '0');
        },
      },
    });
    palabras.forEach((p, i) => {
      const t0 = i * 3;
      // entra (0.9) → se queda legible (1.5) → sale (0.6)
      tl.fromTo(p, { autoAlpha: 0, yPercent: 35, '--wght': 120, '--wdth': 62 }, { autoAlpha: 1, yPercent: 0, '--wght': 900, '--wdth': 125, duration: 0.9 }, t0)
        .to(textos[i], { autoAlpha: 1, y: 0, duration: 0.4 }, t0 + 0.5);
      if (i < n - 1) {
        tl.to(p, { autoAlpha: 0, yPercent: -35, '--wght': 120, '--wdth': 62, duration: 0.6 }, t0 + 2.4)
          .to(textos[i], { autoAlpha: 0, y: -20, duration: 0.4 }, t0 + 2.4);
      } else {
        tl.to({}, { duration: 1 }); // pausa final
      }
    });
  }

  // --- Sección horizontal (patrón «WORK») ---
  for (const sec of $$<HTMLElement>('[data-horizontal]')) {
    const pin = sec.querySelector<HTMLElement>('[data-horizontal-pin]')!;
    const contenido = sec.querySelector<HTMLElement>('[data-horizontal-contenido]')!;
    const titulo = sec.querySelector<HTMLElement>('[data-horizontal-titulo]');
    const pista = sec.querySelector<HTMLElement>('[data-horizontal-pista]')!;
    sec.classList.add('activo');
    const cabecera = () => (esMovil ? 64 : 88);
    const subida = () => (titulo ? Math.max(0, titulo.offsetHeight - cabecera() + 8) : 0);
    const recorrido = () => Math.max(0, pista.scrollWidth - window.innerWidth);

    ScrollTrigger.create({ trigger: sec, pin, start: 'top top', end: () => '+=' + (subida() + recorrido()), invalidateOnRefresh: true });
    if (titulo) {
      gsap.to(contenido, { y: () => -subida(), ease: 'none', scrollTrigger: { trigger: sec, start: 'top top', end: () => '+=' + subida(), scrub: true, invalidateOnRefresh: true } });
      gsap.to(titulo, { autoAlpha: 0, ease: 'none', scrollTrigger: { trigger: sec, start: 'top top', end: () => '+=' + subida() * 0.9, scrub: true, invalidateOnRefresh: true } });
    }
    const mueve = gsap.to(pista, {
      x: () => -recorrido(),
      ease: 'none',
      scrollTrigger: { trigger: sec, start: () => 'top top-=' + subida(), end: () => '+=' + recorrido(), scrub: true, invalidateOnRefresh: true },
    });
    for (const img of $$<HTMLElement>('[data-parallax-img]', pista)) {
      gsap.fromTo(
        img,
        { xPercent: -7 },
        { xPercent: 7, ease: 'none', scrollTrigger: { trigger: img.parentElement, containerAnimation: mueve, start: 'left right', end: 'right left', scrub: true } },
      );
    }
  }

  // --- Miniatura que crece hasta pantalla completa ---
  for (const el of $$<HTMLElement>('[data-crece]')) {
    const media = el.querySelector('[data-crece-media]');
    const pie = el.querySelector('[data-crece-pie]');
    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      scrollTrigger: { trigger: el, start: 'top top', end: '+=120%', pin: true, scrub: true },
    });
    tl.fromTo(media, { clipPath: esMovil ? 'inset(28% 18% 28% 18%)' : 'inset(26% 34% 26% 34%)' }, { clipPath: 'inset(0% 0% 0% 0%)' }, 0);
    if (pie) tl.fromTo(pie, { autoAlpha: 1 }, { autoAlpha: 0, duration: 0.3 }, 0);
  }

  // --- Imagen a sangre que se reduce y deja paso al texto ---
  for (const el of $$<HTMLElement>('[data-encoge]')) {
    const img = el.querySelector('[data-encoge-img]');
    gsap.timeline({ defaults: { ease: 'none' }, scrollTrigger: { trigger: el, start: 'top top', end: 'bottom top', scrub: true } })
      .fromTo(el, { clipPath: 'inset(0% 0% 0% 0%)' }, { clipPath: esMovil ? 'inset(0% 4% 18% 4%)' : 'inset(0% 6% 28% 6%)' }, 0)
      .fromTo(img, { scale: 1, yPercent: 0 }, { scale: 1.12, yPercent: 10 }, 0);
  }
}

/* ------------------------------------------------------------------ */
/* Ciclo de vida (se repite en cada página gracias a View Transitions) */
/* ------------------------------------------------------------------ */
export async function iniciar() {
  detener();
  control = new AbortController();
  interacciones(control.signal);

  const reducir = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.toggle('con-movimiento', !reducir);

  // Cargar las tipografías antes de medir los titulares
  try {
    await Promise.all([
      document.fonts.load('900 100px "Archivo Variable"', 'AZ'),
      document.fonts.load('100px "Pinyon Script"', 'Yk'),
    ]);
    await document.fonts.ready;
  } catch {}
  ajustaTextos();
  window.addEventListener('resize', ajustaTextos, { signal: control.signal });
  // Las tipografías pueden terminar de cargar más tarde: reajustar entonces
  const reajusta = () => (lenis ? ScrollTrigger.refresh() : ajustaTextos());
  document.fonts?.addEventListener('loadingdone', reajusta, { signal: control.signal });
  window.addEventListener('load', reajusta, { once: true, signal: control.signal });

  if (reducir) return;

  lenis = new Lenis({ lerp: 0.1, anchors: true, autoRaf: false });
  lenis.on('scroll', ScrollTrigger.update);
  tickerFn = (time: number) => lenis?.raf(time * 1000);
  gsap.ticker.add(tickerFn);
  gsap.ticker.lagSmoothing(0);

  ScrollTrigger.addEventListener('refreshInit', ajustaTextos);
  mm = gsap.matchMedia();
  mm.add({ movil: '(max-width: 860px)', escritorio: '(min-width: 861px)' }, (ctx) => {
    animaciones(Boolean(ctx.conditions?.movil));
  });

  // Recalcular cuando terminan de cargar las fotos
  for (const img of $$<HTMLImageElement>('img')) {
    if (!img.complete) img.addEventListener('load', () => ScrollTrigger.refresh(), { once: true, signal: control.signal });
  }
  ScrollTrigger.refresh();
}

export function detener() {
  control?.abort();
  control = null;
  ScrollTrigger.removeEventListener('refreshInit', ajustaTextos);
  mm?.revert();
  mm = null;
  ScrollTrigger.getAll().forEach((st) => st.kill());
  if (tickerFn) gsap.ticker.remove(tickerFn);
  tickerFn = null;
  lenis?.destroy();
  lenis = null;
  document.documentElement.style.overflow = '';
}
