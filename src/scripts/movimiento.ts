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
 *   data-split="letras|palabras" → el texto se revela letra a letra / palabra a palabra
 *   data-cursor="Ver"        → el cursor se convierte en un círculo con ese texto
 *
 * Además: el fondo pasa de blanco a negro al hacer scroll (temaOscuro),
 * hay un cursor propio y una intro con contador en la primera visita.
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

/* ------------------------------------------------------------------ */
/* Cada página nueva empieza arriba del todo                           */
/* (salvo al volver con «atrás» o si el enlace lleva un #ancla)        */
/* ------------------------------------------------------------------ */
let ultimaNavegacion = '';
if (typeof document !== 'undefined') {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  document.addEventListener('astro:before-preparation', (e) => {
    ultimaNavegacion = (e as Event & { navigationType?: string }).navigationType || '';
  });
}
function esVueltaAtras() {
  if (ultimaNavegacion) return ultimaNavegacion === 'traverse';
  const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
  return nav?.type === 'back_forward';
}
function alPrincipio() {
  if (location.hash || esVueltaAtras()) return;
  window.scrollTo(0, 0);
  lenis?.scrollTo(0, { immediate: true, force: true });
  // Si la web está dentro de un visor (iframe), sube también el visor
  if (window.top !== window) {
    try { document.getElementById('top')?.scrollIntoView({ block: 'start' }); } catch {}
  }
}

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
        document.querySelector<HTMLElement>('.sello')?.focus({ preventScroll: true });
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
/* Fondo blanco → negro al hacer scroll                                */
/* ------------------------------------------------------------------ */
// Los colores de cada tema están en global.css (body.oscuro) y el navegador hace
// la transición por su cuenta: más ligero que cambiarlos fotograma a fotograma.
// La barra del navegador del móvil acompaña al fondo (claro u oscuro)
function colorBarraMovil(oscuro: boolean) {
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', oscuro ? '#0b0b0a' : '#f4f1ec');
}

function temaOscuro() {
  const cambia = (oscuro: boolean) => {
    document.body.classList.toggle('oscuro', oscuro);
    colorBarraMovil(oscuro);
  };
  // Al bajar algo más de media pantalla, la web pasa a negro (y vuelve a blanco arriba del todo)
  ScrollTrigger.create({
    trigger: document.body,
    start: () => `top+=${window.innerHeight * 0.6} top`,
    invalidateOnRefresh: true,
    onEnter: () => cambia(true),
    onLeaveBack: () => cambia(false),
  });
}

function reseteaTema() {
  document.body.classList.remove('oscuro');
  colorBarraMovil(false);
}

/* ------------------------------------------------------------------ */
/* Dividir texto en letras o palabras para revelarlo                   */
/* ------------------------------------------------------------------ */
function divide(el: HTMLElement) {
  if (el.dataset.splitHecho) return;
  const modo = el.dataset.split || 'palabras';
  const texto = el.textContent || '';
  el.setAttribute('aria-label', texto.trim());
  const piezas = modo === 'letras' ? Array.from(texto) : texto.split(/(\s+)/);
  el.innerHTML = piezas
    .map((t) => (/^\s+$/.test(t) ? (modo === 'letras' ? '<span class="sp-esp"> </span>' : ' ') : `<span class="sp" aria-hidden="true"><span class="sp-i">${t.replace(/</g, '&lt;')}</span></span>`))
    .join('');
  el.dataset.splitHecho = '1';
}

function textos() {
  for (const el of $$<HTMLElement>('[data-split]')) {
    divide(el);
    const piezas = el.querySelectorAll('.sp-i');
    const letras = el.dataset.split === 'letras';
    gsap.fromTo(
      piezas,
      { yPercent: 115, rotate: letras ? 6 : 2 },
      {
        yPercent: 0,
        rotate: 0,
        duration: letras ? 0.8 : 0.9,
        ease: 'expo.out',
        stagger: letras ? 0.02 : 0.018,
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      },
    );
  }
}

/* ------------------------------------------------------------------ */
/* Cursor propio                                                       */
/* ------------------------------------------------------------------ */
function cursor(signal: AbortSignal) {
  const c = document.querySelector<HTMLElement>('[data-cursor-el]');
  if (!c || !matchMedia('(hover: hover) and (pointer: fine)').matches) return;
  const etiqueta = c.querySelector<HTMLElement>('[data-cursor-texto]')!;
  document.documentElement.classList.add('cursor-propio');
  const x = gsap.quickTo(c, 'x', { duration: 0.12, ease: 'power3' });
  const y = gsap.quickTo(c, 'y', { duration: 0.12, ease: 'power3' });
  window.addEventListener('pointermove', (e) => { x(e.clientX); y(e.clientY); c.classList.add('visible'); }, { signal });
  document.addEventListener('pointerleave', () => c.classList.remove('visible'), { signal });
  document.addEventListener(
    'pointerover',
    (e) => {
      const t = e.target as HTMLElement;
      const ver = t.closest<HTMLElement>('[data-cursor]');
      const enlace = t.closest('a, button, [role="button"]');
      c.classList.toggle('grande', Boolean(ver));
      c.classList.toggle('enlace', !ver && Boolean(enlace));
      etiqueta.textContent = ver ? ver.dataset.cursor || '' : '';
    },
    { signal },
  );
}

/* ------------------------------------------------------------------ */
/* Intro con contador (solo la primera visita de la sesión)            */
/* ------------------------------------------------------------------ */
function intro(): Promise<void> {
  const root = document.documentElement;
  const el = document.querySelector<HTMLElement>('[data-intro]');
  if (!root.classList.contains('con-intro') || !el) return Promise.resolve();
  const num = el.querySelector<HTMLElement>('[data-intro-num]')!;
  const contador = { v: 0 };
  return new Promise((ok) => {
    gsap.timeline({
      onComplete: () => {
        root.classList.remove('con-intro');
        try { sessionStorage.setItem('intro-vista', '1'); } catch {}
        ok();
      },
    })
      .to(contador, { v: 100, duration: 0.75, ease: 'power2.out', onUpdate: () => { num.textContent = String(Math.round(contador.v)).padStart(3, '0'); } })
      .fromTo(el.querySelector('[data-intro-firma]'), { clipPath: 'inset(0 100% 0 0)' }, { clipPath: 'inset(0 0% 0 0)', duration: 0.7, ease: 'power3.out' }, 0)
      .to(el, { yPercent: -100, duration: 0.6, ease: 'expo.inOut' }, '+=0.05');
  });
}

/* ------------------------------------------------------------------ */
/* Animaciones de scroll                                               */
/* ------------------------------------------------------------------ */
/** Las secciones que fijan la pantalla deben calcularse de arriba abajo:
 *  cuanto más arriba está en la página, mayor prioridad. */
function prioridad(el: HTMLElement) {
  const fijadas = $$<HTMLElement>('[data-crece], [data-horizontal]');
  return fijadas.length - fijadas.indexOf(el);
}

function animaciones(esMovil: boolean) {
  temaOscuro();
  textos();

  // --- La firma de la portada se «escribe» al cargar ---
  for (const f of $$<HTMLElement>('[data-hero-firma] [data-fit]')) {
    gsap.fromTo(f, { clipPath: 'inset(-20% 100% -20% 0)' }, { clipPath: 'inset(-20% -5% -20% 0)', duration: 1, ease: 'power3.out', delay: 0.1 });
  }
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
  for (const el of esMovil ? [] : $$<HTMLElement>('[data-peso]')) {
    gsap.fromTo(
      el,
      { '--wght': 200 },
      { '--wght': 600, ease: 'none', scrollTrigger: { trigger: el, start: 'top 95%', end: 'top 35%', scrub: true } },
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
      },
      onUpdate: () => {
        // cada palabra ocupa 3 unidades de la línea de tiempo
        if (contador) contador.textContent = String(Math.min(n, Math.floor(tl.time() / 3) + 1)).padStart(2, '0');
      },
    });
    palabras.forEach((p, i) => {
      const t0 = i * 3;
      // entra (0.9) → se queda legible (1.5) → sale (0.6)
      // en móvil sin cambio de peso: solo aparece y crece (más fluido)
      const pesoIn = esMovil ? {} : { '--wght': 150 };
      const pesoOut = esMovil ? {} : { '--wght': 550 };
      tl.fromTo(p, { autoAlpha: 0, yPercent: 35, scale: 0.85, ...pesoIn }, { autoAlpha: 1, yPercent: 0, scale: 1, ...pesoOut, duration: 0.9 }, t0)
        .to(textos[i], { autoAlpha: 1, y: 0, duration: 0.4 }, t0 + 0.5);
      if (i < n - 1) {
        tl.to(p, { autoAlpha: 0, yPercent: -35, scale: 1.08, ...pesoIn, duration: 0.6 }, t0 + 2.4)
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

    ScrollTrigger.create({ trigger: sec, pin, start: 'top top', end: () => '+=' + (subida() + recorrido()), invalidateOnRefresh: true, refreshPriority: prioridad(sec) });
    if (titulo) {
      gsap.to(contenido, { y: () => -subida(), ease: 'none', scrollTrigger: { trigger: sec, start: 'top top', end: () => '+=' + subida(), scrub: true, invalidateOnRefresh: true } });
      gsap.to(titulo, { autoAlpha: 0, ease: 'none', scrollTrigger: { trigger: sec, start: 'top top', end: () => '+=' + subida() * 0.9, scrub: true, invalidateOnRefresh: true } });
    }
    const barra = sec.querySelector<HTMLElement>('[data-horizontal-progreso]');
    const mueve = gsap.to(pista, {
      x: () => -recorrido(),
      ease: 'none',
      scrollTrigger: {
        trigger: sec,
        start: () => 'top top-=' + subida(),
        end: () => '+=' + recorrido(),
        scrub: true,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          if (barra) barra.style.transform = `scaleX(${self.progress})`;
        },
      },
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
      // refreshPriority: las secciones fijadas se calculan en el orden de la página
      scrollTrigger: { trigger: el, start: 'top top', end: '+=120%', pin: true, scrub: true, refreshPriority: prioridad(el) },
    });
    // data-crece-desde="8% 6% 8% 6%" permite empezar desde otro tamaño
    const desde = (esMovil ? el.dataset.creceDesdeMovil : el.dataset.creceDesde) || (esMovil ? '28% 18% 28% 18%' : '26% 34% 26% 34%');
    tl.fromTo(media, { clipPath: `inset(${desde})` }, { clipPath: 'inset(0% 0% 0% 0%)' }, 0);
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
  alPrincipio();
  interacciones(control.signal);

  const reducir = matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.documentElement.classList.toggle('con-movimiento', !reducir);

  // Cargar las tipografías antes de medir los titulares
  try {
    await Promise.all([
      document.fonts.load('500 100px "Geist Variable"', 'AZ'),
    ]);
    await document.fonts.ready;
  } catch {}
  ajustaTextos();
  window.addEventListener('resize', ajustaTextos, { signal: control.signal });
  // Las tipografías pueden terminar de cargar más tarde: reajustar entonces
  const reajusta = () => (lenis ? ScrollTrigger.refresh() : ajustaTextos());
  document.fonts?.addEventListener('loadingdone', reajusta, { signal: control.signal });
  window.addEventListener('load', reajusta, { once: true, signal: control.signal });

  if (reducir) {
    document.documentElement.classList.remove('con-intro', 'pre-anim');
    alPrincipio();
    ultimaNavegacion = '';
    return;
  }
  cursor(control.signal);
  await intro();

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

  // Recalcular cuando terminan de cargar las fotos. Si llegan varias seguidas,
  // se espera a que paren 150 ms y se recalcula una sola vez (evita tirones).
  let esperaFotos = 0;
  const recalculaTrasFotos = () => {
    clearTimeout(esperaFotos);
    esperaFotos = window.setTimeout(() => ScrollTrigger.refresh(), 150);
  };
  control.signal.addEventListener('abort', () => clearTimeout(esperaFotos));
  for (const img of $$<HTMLImageElement>('img')) {
    if (!img.complete) img.addEventListener('load', recalculaTrasFotos, { once: true, signal: control.signal });
  }
  ScrollTrigger.sort();
  ScrollTrigger.refresh();
  // Ya está todo preparado: se puede mostrar lo que estaba oculto esperando su animación
  document.documentElement.classList.remove('pre-anim');
  alPrincipio();
  ultimaNavegacion = '';
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
  document.documentElement.classList.remove('cursor-propio');
  reseteaTema();
}
