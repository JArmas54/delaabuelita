// Shared bits used across the three landing variations.
// - useLang: ES/EN toggle state (per-artboard).
// - t(es, en, lang): tiny string picker.
// - Placeholder: striped placeholder with monospace label for real assets to drop in.
// - LogoMark: a generic "logo aquí" round mark (each variation styles its own).

const { useState, useEffect, useRef } = React;

function useLang(initial = 'es') {
  const [lang, setLang] = useState(initial);
  return [lang, setLang];
}

function t(es, en, lang) {
  return lang === 'en' ? en : es;
}

// Striped placeholder — for product cans, photos, logos the user will drop in.
function Placeholder({
  label = 'imagen',
  ratio = '1 / 1',
  bg = '#e9e3d6',
  stripe = 'rgba(0,0,0,0.06)',
  fg = 'rgba(40,30,20,0.55)',
  radius = 0,
  width = '100%',
  height,
  style = {},
}) {
  const base = {
    width,
    aspectRatio: height ? undefined : ratio,
    height,
    borderRadius: radius,
    background: `repeating-linear-gradient(135deg, ${bg} 0 14px, ${stripe} 14px 28px)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: fg,
    fontFamily: 'ui-monospace, SFMono-Regular, Menlo, monospace',
    fontSize: 16,
    letterSpacing: '0.05em',
    textTransform: 'uppercase',
    textAlign: 'center',
    padding: '12px',
    position: 'relative',
    overflow: 'hidden',
    ...style,
  };
  return (
    <div style={base}>
      <span style={{ background: bg, padding: '4px 10px', border: `1px dashed ${fg}`, borderRadius: 2 }}>
        {label}
      </span>
    </div>
  );
}

// Tiny inline lang toggle, themed per variation via props.
function LangToggle({ lang, setLang, bg, fg, activeBg, activeFg, border }) {
  const cellBase = {
    border: 0,
    background: 'transparent',
    cursor: 'pointer',
    padding: '6px 12px',
    fontFamily: 'inherit',
    fontWeight: 600,
    fontSize: 16,
    letterSpacing: '0.12em',
    color: fg,
    borderRadius: 999,
  };
  const active = { background: activeBg, color: activeFg };
  return (
    <div style={{
      display: 'inline-flex',
      padding: 3,
      background: bg,
      border: `1px solid ${border}`,
      borderRadius: 999,
    }}>
      <button style={{ ...cellBase, ...(lang === 'es' ? active : {}) }} onClick={() => setLang('es')}>ES</button>
      <button style={{ ...cellBase, ...(lang === 'en' ? active : {}) }} onClick={() => setLang('en')}>EN</button>
    </div>
  );
}

// A tiny set of inline SVG icons used across variations (no emoji, no AI-slop iconography).
const Icon = {
  whatsapp: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21l1.65-4.5A8.5 8.5 0 1 1 8.5 20l-5.5 1z" />
      <path d="M8.5 9c.4 1 1.2 2.3 2.4 3.4 1.2 1.1 2.6 1.8 3.6 2.1.5.2 1 .1 1.4-.3l.6-.6c.3-.3.8-.4 1.2-.2l1.4.7c.4.2.6.7.5 1.1-.3 1.2-1.5 2-2.8 1.9-2.3-.1-4.6-1.4-6.4-3.2-1.8-1.8-3.1-4.1-3.2-6.4-.1-1.3.7-2.5 1.9-2.8.4-.1.9.1 1.1.5l.7 1.4c.2.4.1.9-.2 1.2l-.6.6c-.4.4-.5.9-.3 1.4z" fill={color} stroke="none" />
    </svg>
  ),
  phone: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 4h3l2 5-2.5 1.5a11 11 0 0 0 6 6L15 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  ),
  mail: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  ),
  instagram: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill={color} />
    </svg>
  ),
  facebook: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
      <path d="M13.5 22v-8h2.7l.4-3.2h-3.1V8.8c0-.9.3-1.6 1.6-1.6h1.6V4.3c-.3 0-1.3-.1-2.5-.1-2.4 0-4.1 1.5-4.1 4.2v2.4H7.5V14h2.6v8h3.4z"/>
    </svg>
  ),
  tiktok: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} stroke="none">
      <path d="M16.5 3c.3 1.9 1.4 3.4 3.5 3.7v2.6c-1.3 0-2.5-.3-3.6-.9v6.2c0 3.3-2.7 5.9-6 5.9s-5.9-2.7-5.9-5.9c0-3.2 2.6-5.9 5.9-5.9.3 0 .6 0 .9.1v2.7c-.3-.1-.6-.1-.9-.1-1.7 0-3.1 1.4-3.1 3.2 0 1.7 1.4 3.1 3.1 3.1s3.2-1.3 3.2-3.1V3h2.9z"/>
    </svg>
  ),
  arrow: (size = 18, color = 'currentColor') => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  ),
};

// Common copy used in all three variations (kept here for parallelism).
const COPY = {
  brand: 'De La Abuelita',
  slogan: { es: 'Tradición hecha bebida', en: 'Tradition, in a can' },
  origin: { es: 'Hecho en El Salvador', en: 'Made in El Salvador' },
  size: '330 ml',
  nav: {
    home:    { es: 'Inicio',        en: 'Home' },
    about:   { es: 'Nosotros',      en: 'About' },
    products:{ es: 'Productos',     en: 'Products' },
    wholesale:{ es: 'Distribuidores', en: 'Wholesale' },
    contact: { es: 'Contacto',      en: 'Contact' },
  },
  heroKicker: { es: 'Bebidas artesanales', en: 'Artisan beverages' },
  heroLead: {
    es: 'La receta de la abuelita, ahora en lata. Lista para llevar, lista para servir, lista para todos.',
    en: 'Grandma\u2019s recipe, now in a can. Ready to grab, ready to serve, ready for everyone.',
  },
  heroCtaPrimary: { es: 'Probar nuestros sabores', en: 'Taste our flavors' },
  heroCtaSecondary:{ es: 'Pedidos por mayor', en: 'Wholesale orders' },

  // Products
  products: [
    {
      key: 'horchata',
      name: { es: 'Horchata con Canela', en: 'Cinnamon Horchata' },
      tagline: { es: 'El sabor de las sobremesas', en: 'The taste of long afternoons' },
      desc: {
        es: 'Leche, Arroz tostado, Maní, Cacao y un puñito de canela. Como en casa, pero a donde sea que vayas.',
        en: 'Milk, toasted rice, peanut, cocoa and a pinch of cinnamon. Just like home — wherever you go.',
      },
      notes: ['Leche', 'Arroz', 'Canela', 'Mani', 'Cacao', 'Y mucho amor'],
      notesEn: ['Milk', 'Rice', 'Cinnamon', 'Peanut', 'Cocoa', 'And lots of love'],
    },
    {
      key: 'guanabana',
      name: { es: 'Guanábana', en: 'Soursop' },
      tagline: { es: 'Cremosa, tropical, fresquita', en: 'Creamy, tropical, ice-cold' },
      desc: {
        es: 'Pulpa de guanábana fresca, batida hasta quedar suavecita. Como si la guanábana cayera directo del árbol a tu vaso.',
        en: 'Fresh soursop pulp, blended till silky. The closest thing to a Salvadoran patio in a can.',
      },
      notes: ['Guanábana', 'Agua', 'Azúcar', 'Y mucho amor'],
      notesEn: ['Soursop', 'Water', 'Sugar', 'And lots of love'],
    },
  ],

  storyTitle: { es: 'La historia', en: 'Our story' },
  story1: {
    es: 'La abuelita se caracterizaba por hacer las mejores bebidas saludables, utilizando ingredientes de calidad y frutas de temporada que proporcionaban un sabor inigualable que hasta el día de hoy nos siguen acompañando.\n\nNuestra horchata inicio en la cocina de mi abuelita: con su comal de barro, tostando con fuego de leña, el arroz, el chocolate, la canela y cada uno de los ingredientes que le dan el sabor y olor tradicional a la horchata salvadoreña.\n\nTostando despacio los granos, el olor salía de la cocina hasta llegar a las casas de los vecinos, que siempre buscaban una excusa para visitar la casa de la abuelita, para pedir un vaso de horchata fría.\n\nEn el patio de la casa de la abuelita, todos los veranos esperábamos con alegría las guanábanas, que se caracterizan por su textura suave, olor agradable y sabor tropical.\n\nLos jugos de guanábana que nos daba la abuelita eran los mas esperados para refrescarnos.',
    en: 'Grandma was known for making the best wholesome drinks, using quality ingredients and seasonal fruit that gave them an unmatched flavor that is still with us today.\n\nOur horchata began in grandma\u2019s kitchen: with her clay comal, toasting over a wood fire the rice, the chocolate, the cinnamon and every ingredient that gives Salvadoran horchata its traditional taste and aroma.\n\nAs the grains toasted slowly, the scent drifted out of the kitchen all the way to the neighbors\u2019 houses, and they always found an excuse to drop by grandma\u2019s for a glass of cold horchata.\n\nIn grandma\u2019s backyard, every summer we waited eagerly for the guanábanas, prized for their soft texture, lovely aroma and tropical flavor.\n\nThe guanábana juices grandma made were the ones we longed for most to cool us down.',
  },
  story2: {
    es: 'Hoy las enlatamos para que ese mismo sabor llegue a más mesas convirtiendo una tradición en bebidas, presentes en supermercados, restaurantes y tiendas sin perder ni un gramo de tradición.',
    en: 'Today we can them so that same taste reaches more tables, turning a tradition into beverages found in supermarkets, restaurants and stores without losing a single ounce of tradition.',
  },

  wholesaleTitle: { es: 'Para tu negocio', en: 'For your business' },
  wholesaleLead: {
    es: 'Distribuimos a supermercados, restaurantes y tiendas en todo El Salvador. Pedidos por caja, condiciones especiales para mayoristas.',
    en: 'We distribute to supermarkets, restaurants and stores across El Salvador. Case orders, wholesale pricing and direct delivery.',
  },
  wholesalePoints: [
    { es: 'Caja de 24 latas', en: 'Case of 24 cans' },
    { es: 'Entrega en todo el país', en: 'Nationwide delivery' },
    { es: 'Precios mayoristas', en: 'Wholesale pricing' },
    { es: 'Sabores deliciosos', en: 'Delicious flavors' },
  ],

  contactTitle: { es: 'Hablemos', en: 'Let\u2019s talk' },
  contactLead: {
    es: 'Escribinos por WhatsApp para pedidos rápidos o por correo para acuerdos comerciales.',
    en: 'Message us on WhatsApp for quick orders, or email us for commercial agreements.',
  },
  phone: '+503 6977-2988 / +503 6820-7796',
  whatsapp: '+503 6977-2988 / +503 6820-7796',
  email: 'servicioalcliente@delaabuelita.com',
};

// Brand palette derived directly from the can artwork files.
const BRAND = {
  navy:      '#1D3D84',   // horchata field (sampled from artwork)
  navyDeep:  '#172E63',   // logo navy (deeper)
  navyInk:   '#0E1F47',
  redOrange: '#E5471D',   // horchata accent band
  redDeep:   '#C73A14',
  lime:      '#9ECA3A',   // guanabana accent
  limeDeep:  '#7CA325',
  cream:     '#F4ECD7',   // soursop cream field
  paper:     '#FAF3DE',
  bone:      '#EEE6D2',
  white:     '#FFFFFF',
};

// Real brand logo asset path. Use <BrandLogo /> wherever a logo is needed.
function BrandLogo({ height = 56, style = {}, alt = 'De La Abuelita' }) {
  return (
    <img src="assets/logo.png" alt={alt} style={{ height, width: 'auto', display: 'block', ...style }} />
  );
}

// Brand wordmark lockup — replicates the typographic part of the existing logo
// (script "De la" + bold "ABUELITA" + tagline). The user's full illustrated
// logo with the abuelita head drops into the round slot above.
function LogoLockup({ color = BRAND.navy, size = 1, withMark = true, markBg = '#fff', tagline = true }) {
  const s = (n) => n * size;
  return (
    <div style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', color, lineHeight: 1, gap: s(2) }}>
      {withMark && (
        <div style={{
          width: s(64), height: s(64), borderRadius: '50%',
          background: markBg,
          border: `${s(1.5)}px solid ${color}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          marginBottom: s(4),
          position: 'relative',
        }}>
          {/* Stylized abuelita silhouette — round bun + glasses + collar */}
          <svg width={s(46)} height={s(46)} viewBox="0 0 46 46" fill="none">
            <circle cx="23" cy="14" r="3.5" stroke={color} strokeWidth="1.6"/>
            <path d="M14 24c0-5 4-9 9-9s9 4 9 9" stroke={color} strokeWidth="1.6" fill="none"/>
            <circle cx="19.5" cy="22" r="2.4" stroke={color} strokeWidth="1.4" fill={markBg}/>
            <circle cx="26.5" cy="22" r="2.4" stroke={color} strokeWidth="1.4" fill={markBg}/>
            <path d="M22 22.5h2" stroke={color} strokeWidth="1.4"/>
            <path d="M19 27.5q4 2 8 0" stroke={color} strokeWidth="1.4" fill="none" strokeLinecap="round"/>
            <path d="M11 40c2-6 6-9 12-9s10 3 12 9" stroke={color} strokeWidth="1.6" fill="none" strokeLinecap="round"/>
          </svg>
        </div>
      )}
      <div style={{ fontFamily: '"Caveat", cursive', fontSize: s(22), fontWeight: 600, marginBottom: s(-2), letterSpacing: '0.01em' }}>De la</div>
      <div style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: s(26), fontWeight: 800, letterSpacing: '0.08em' }}>ABUELITA</div>
      {tagline && (
        <div style={{
          fontFamily: '"DM Sans", system-ui, sans-serif',
          fontSize: s(8.5), fontWeight: 500,
          letterSpacing: '0.18em', marginTop: s(4),
          textTransform: 'lowercase', opacity: 0.85,
          borderTop: `1px solid ${color}`, paddingTop: s(3),
          width: s(110), textAlign: 'center',
        }}>
          Tradición hecha bebida
        </div>
      )}
    </div>
  );
}

// Decorative shapes used across variations (no AI-slop, just brand-derived blobs).
function BlobBottom({ color, height = 120 }) {
  return (
    <svg width="100%" height={height} viewBox="0 0 1280 120" preserveAspectRatio="none" style={{ display: 'block' }}>
      <path d="M0 60 Q 320 0 640 60 T 1280 60 L 1280 120 L 0 120 Z" fill={color} />
    </svg>
  );
}
function BlobTop({ color, height = 120 }) {
  return (
    <svg width="100%" height={height} viewBox="0 0 1280 120" preserveAspectRatio="none" style={{ display: 'block' }}>
      <path d="M0 0 L 1280 0 L 1280 60 Q 960 120 640 60 T 0 60 Z" fill={color} />
    </svg>
  );
}

// ── Motion: inject keyframes once ─────────────────────────────
(function injectMotionStyles() {
  if (typeof document === 'undefined' || document.getElementById('dla-motion')) return;
  const el = document.createElement('style');
  el.id = 'dla-motion';
  el.textContent = `
    @keyframes dla-marquee-scroll { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    .dla-marquee-track { display: flex; width: max-content; will-change: transform;
      animation-name: dla-marquee-scroll; animation-timing-function: linear; animation-iteration-count: infinite; }
    .dla-marquee:hover .dla-marquee-track { animation-play-state: paused; }
    @keyframes dla-reveal-in { from { opacity: 0; transform: translateY(32px); } to { opacity: 1; transform: none; } }
    .dla-reveal { opacity: 0; }
    .dla-reveal.dla-revealed { animation: dla-reveal-in 700ms cubic-bezier(.2,.7,.2,1) both; }
    @media (prefers-reduced-motion: reduce) {
      .dla-marquee-track { animation: none !important; }
      .dla-reveal { opacity: 1 !important; }
      .dla-reveal.dla-revealed { animation: none !important; }
    }
  `;
  document.head.appendChild(el);
})();

// Seamless right-to-left scrolling band. Replaces the old static Strip/FolkStrip.
function Marquee({ bg, fg, text, speed = 26, fontFamily, dot = '●' }) {
  const ff = fontFamily || '"Bricolage Grotesque", "DM Sans", system-ui, sans-serif';
  const group = (
    <div style={{ display: 'flex' }} aria-hidden="true">
      {Array.from({ length: 8 }).map((_, i) => (
        <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 32, paddingRight: 32 }}>
          {text} <span style={{ opacity: 0.6 }}>{dot}</span>
        </span>
      ))}
    </div>
  );
  return (
    <div className="dla-marquee" style={{
      background: bg, color: fg, padding: '14px 0', overflow: 'hidden',
      fontFamily: ff, fontWeight: 800, fontSize: 18, letterSpacing: '0.18em',
      textTransform: 'uppercase', position: 'relative',
    }}>
      <div className="dla-marquee-track" style={{ animationDuration: `${speed}s` }}>
        {group}
        {group}
      </div>
    </div>
  );
}

// Scroll-reveal wrapper — fades + lifts content in when it enters the viewport.
// Uses a one-shot CSS animation (both fill) so the end state holds reliably
// across React re-renders and page navigation.
function Reveal({ children, delay = 0, y = 30, dur = 700, once = true, style = {} }) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let done = false;
    const inView = () => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return r.bottom > 0 && r.top < vh * 0.92;
    };
    const check = () => {
      if (done) return;
      if (inView()) { setShown(true); if (once) { done = true; cleanup(); } }
    };
    const t1 = requestAnimationFrame(check);
    const timers = [setTimeout(check, 80), setTimeout(check, 250), setTimeout(check, 600)];
    let io = null;
    if (typeof IntersectionObserver !== 'undefined') {
      io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { setShown(true); if (once) { done = true; cleanup(); } }
          else if (!once) { setShown(false); }
        });
      }, { threshold: 0, rootMargin: '0px 0px -10% 0px' });
      io.observe(el);
    } else { setShown(true); }
    const onScroll = () => check();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    window.addEventListener('load', onScroll);
    function cleanup() {
      cancelAnimationFrame(t1);
      timers.forEach(clearTimeout);
      if (io) io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      window.removeEventListener('load', onScroll);
    }
    return cleanup;
  }, [once]);
  // Safety net: if the entrance animation stalls (some browsers freeze a CSS
  // animation created right after a React commit), force the final visible state.
  useEffect(() => {
    if (!shown) return;
    const el = ref.current;
    if (!el) return;
    const id = setTimeout(() => {
      try {
        if (parseFloat(getComputedStyle(el).opacity) < 0.9) {
          el.style.animation = 'none';
          el.style.opacity = '1';
          el.style.transform = 'none';
        }
      } catch (e) {}
    }, 820);
    return () => clearTimeout(id);
  }, [shown]);
  return (
    <div ref={ref}
      className={'dla-reveal' + (shown ? ' dla-revealed' : '')}
      style={style}>
      {children}
    </div>
  );
}

Object.assign(window, { useLang, t, Placeholder, LangToggle, Icon, COPY, BRAND, BrandLogo, LogoLockup, BlobBottom, BlobTop, Marquee, Reveal });
