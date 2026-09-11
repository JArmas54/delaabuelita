// LANDING 02 · TRADICIÓN FOLKLÓRICA
// Uses the full brand palette together — navy field, lime + red-orange accents,
// cream paper. Bold display type, decorative bands, energetic. Feels like the can
// designs amplified across the page.

const { useState: useStateFolklore } = React;

// Real, shareable URL fragments per page — so a link to #productos opens the
// products page directly and the browser back button works.
const FOLK_HASHES = { home: 'inicio', about: 'nosotros', products: 'productos', wholesale: 'distribuidores', contact: 'contacto' };
const FOLK_PAGE_BY_HASH = Object.fromEntries(Object.entries(FOLK_HASHES).map(([k, v]) => [v, k]));
function folkPageFromHash() {
  const h = (window.location.hash || '').replace(/^#/, '');
  return FOLK_PAGE_BY_HASH[h] || 'home';
}

function LandingFolklore() {
  const [lang, setLang] = useLang('es');
  const [page, setPage] = useStateFolklore(folkPageFromHash);
  const [contactStatus, setContactStatus] = useStateFolklore('idle'); // idle | sending | ok | error

  // Keep page state and the URL hash in sync, both directions.
  React.useEffect(() => {
    const onHash = () => setPage(folkPageFromHash());
    window.addEventListener('hashchange', onHash);
    return () => window.removeEventListener('hashchange', onHash);
  }, []);
  const goTo = (key) => {
    const next = `#${FOLK_HASHES[key]}`;
    if (window.location.hash !== next) window.location.hash = next;
    else setPage(key);
  };

  // Reset scroll when changing page.
  React.useEffect(() => {window.scrollTo({ top: 0, behavior: 'instant' });}, [page]);

  const C = {
    navy: BRAND.navy,
    navyDeep: BRAND.navyDeep,
    red: BRAND.redOrange,
    lime: BRAND.lime,
    cream: BRAND.cream,
    paper: BRAND.paper,
    white: '#FFFFFF'
  };

  const display = '"Bricolage Grotesque", "DM Sans", system-ui, sans-serif';
  const sans = '"DM Sans", system-ui, sans-serif';
  const script = '"Caveat", cursive';

  const heroRef = useRef(null);
  const heroParallax = useParallax(heroRef, 0.1);

  const nav = COPY.nav;
  const navItems = [
  { key: 'home', n: nav.home },
  { key: 'about', n: nav.about },
  { key: 'products', n: nav.products },
  { key: 'wholesale', n: nav.wholesale },
  { key: 'contact', n: nav.contact }];


  // Decorative band — now an animated right-to-left marquee with a subtle
  // gradient and a hover color-shift on the flavor text.
  const Strip = ({ bg, fg, text }) => {
    const bg2 = bg === C.red ? BRAND.redDeep : bg === C.lime ? BRAND.limeDeep : bg;
    const hoverFg = bg === C.lime ? C.red : C.lime;
    return <Marquee bg={bg} bg2={bg2} fg={fg} hoverFg={hoverFg} text={text} fontFamily={display} />;
  };

  return (
    <div style={{
      width: '100%', minHeight: '100%',
      background: C.cream, color: C.navyDeep,
      fontFamily: sans, position: 'relative', overflow: 'hidden'
    }}>
      {/* NAV */}
      <header style={{
        position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '24px 56px',
        background: C.cream, borderBottom: `4px solid ${C.navy}`
      }}>
        <BrandLogo height={58} />
        <nav style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {navItems.map((item) =>
          <a key={item.key} href={`#${FOLK_HASHES[item.key]}`}
          style={{
            color: page === item.key ? C.white : C.navyDeep,
            background: page === item.key ? C.navy : 'transparent',
            textDecoration: 'none',
            fontFamily: display, fontSize: '0.85rem', fontWeight: 700,
            letterSpacing: '0.06em', textTransform: 'uppercase',
            padding: '10px 18px', borderRadius: 999,
            cursor: 'pointer'
          }}>{t(item.n.es, item.n.en, lang)}</a>
          )}
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <LangToggle lang={lang} setLang={setLang}
          bg={C.cream} fg={C.navyDeep}
          activeBg={C.red} activeFg={C.white}
          border={`${C.navyDeep}33`} />
        </div>
      </header>

      {/* Top repeating strip — orange band like on horchata can */}
      {page === 'home' && <React.Fragment>
      <Strip bg={C.red} fg={C.white} text={t('HORCHATA CON CANELA', 'CINNAMON HORCHATA', lang)} />

      {/* HERO — navy field with display type and the can photo */}
      <section ref={heroRef} style={{
            background: C.navy, color: C.white,
            padding: '90px 56px 110px',
            position: 'relative', overflow: 'hidden'
          }}>
        {/* bubble pattern — subtle parallax on scroll */}
        <div style={{
              position: 'absolute', inset: '-10% -10% -10% -10%',
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06) 24%, transparent 25%)`,
              backgroundSize: '60px 60px',
              opacity: 0.7,
              pointerEvents: 'none',
              transform: `translateY(${heroParallax}px)`
            }} />
        <HeroBubbles count={18} color="rgba(255,255,255,0.32)" />
        <div style={{
              display: 'grid', gridTemplateColumns: '1.15fr 0.85fr',
              gap: 40, position: 'relative', alignItems: 'center'
            }}>
          <div>
            <Reveal delay={0} y={24}>
            <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 12,
                  background: C.lime, color: C.navyDeep,
                  padding: '8px 16px', borderRadius: 999,
                  fontFamily: display, fontWeight: 700, fontSize: 16,
                  letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 28
                }}>
              ✦ {t(COPY.heroKicker.es, COPY.heroKicker.en, lang)}
            </div>
            </Reveal>
            <Reveal delay={120} y={28}>
            <h1 style={{
                  fontFamily: display, fontWeight: 800, fontSize: 'clamp(3rem, 8vw, 6rem)',
                  lineHeight: 0.88, margin: 0, letterSpacing: '-0.02em',
                  textTransform: 'uppercase'
                }}>
              <span style={{ color: C.white }}>{t('Tradición', 'Tradition', lang)}</span><br />
              <span style={{ color: C.red, display: 'inline-block', transform: 'rotate(-1deg)' }}>{t('hecha', 'in a', lang)}</span>{' '}
              <span style={{ color: C.lime }}>{t('bebida', 'can', lang)}</span>
            </h1>
            </Reveal>
            <Reveal delay={220} y={24}>
            <p style={{
                  fontFamily: sans, fontSize: 'clamp(1.1rem, 1.4vw, 1.25rem)', lineHeight: 1.7, maxWidth: 460,
                  opacity: 0.9, marginTop: 32, marginBottom: 36
                }}>{t(COPY.heroLead.es, COPY.heroLead.en, lang)}</p>
            </Reveal>
            <Reveal delay={320} y={20}>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => goTo('products')} style={{
                    background: C.red, color: C.white, border: 0,
                    padding: '18px 30px', borderRadius: 999,
                    fontFamily: display, fontWeight: 700, fontSize: 16,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    cursor: 'pointer', transition: 'transform 200ms ease, box-shadow 200ms ease',
                    display: 'inline-flex', alignItems: 'center', gap: 10
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 14px 26px -12px rgba(0,0,0,0.5)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}>
                {t(COPY.heroCtaPrimary.es, COPY.heroCtaPrimary.en, lang)} {Icon.arrow(16, C.white)}
              </button>
              <button onClick={() => goTo('wholesale')} style={{
                    background: 'transparent', color: C.white,
                    border: `2px solid ${C.white}`,
                    padding: '16px 28px', borderRadius: 999,
                    fontFamily: display, fontWeight: 700, fontSize: 16,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    cursor: 'pointer', transition: 'background 200ms ease, color 200ms ease'
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = C.white; e.currentTarget.style.color = C.navyDeep; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.white; }}>{t(COPY.heroCtaSecondary.es, COPY.heroCtaSecondary.en, lang)}</button>
            </div>
            </Reveal>
          </div>
          <Reveal delay={180} y={30}>
          <div style={{ position: 'relative' }}>
            {/* Decorative star shapes */}
            <svg width="120" height="120" viewBox="0 0 120 120" style={{ position: 'absolute', top: -10, right: -20, transform: 'rotate(15deg)' }}>
              <path d="M60 5 L70 50 L115 60 L70 70 L60 115 L50 70 L5 60 L50 50 Z" fill={C.lime} />
            </svg>
            <svg width="80" height="80" viewBox="0 0 80 80" style={{ position: 'absolute', bottom: -20, left: -30, transform: 'rotate(-10deg)' }}>
              <path d="M40 3 L48 32 L77 40 L48 48 L40 77 L32 48 L3 40 L32 32 Z" fill={C.red} />
            </svg>
            <div style={{
                  background: C.cream, borderRadius: 24,
                  padding: 20, transform: 'rotate(2deg)',
                  boxShadow: '0 24px 50px -20px rgba(0,0,0,0.4)'
                }}>
              <img src="assets/hero-cans-hg.webp" alt="Latas de Horchata con Canela y Guanábana De La Abuelita, bebidas artesanales en lata de 330ml, El Salvador"
                  style={{ width: '100%', height: 540, objectFit: 'cover', borderRadius: 14, display: 'block' }} />
              <div style={{
                    fontFamily: display, fontSize: '0.85rem', fontWeight: 700,
                    letterSpacing: '0.18em', textAlign: 'center',
                    color: C.navyDeep, marginTop: 14, textTransform: 'uppercase'
                  }}>
                {t('2 sabores · 330 ml · Centroamérica', '2 flavors · 330 ml · Central America', lang)}
              </div>
            </div>
          </div>
          </Reveal>
        </div>
      </section>

      {/* Bottom repeating strip — lime band */}
      <Strip bg={C.lime} fg={C.navyDeep} text={t('JUGO DE GUANÁBANA', 'SOURSOP JUICE', lang)} />

      {/* HISTORIA — cream with big script */}
      <Reveal y={36}>
      <section style={{
            padding: '110px 56px',
            display: 'grid', gridTemplateColumns: '0.45fr 0.55fr', gap: 80,
            alignItems: 'center', position: 'relative'
          }}>
        <div style={{ position: 'relative' }}>
          <div style={{
                position: 'absolute', top: 20, left: 20, right: -20, bottom: -20,
                background: C.lime, borderRadius: 20
              }} />
          <div style={{
                position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
                background: C.red, borderRadius: 20, transform: 'translate(10px, -10px)'
              }} />
          <div style={{
                position: 'relative', zIndex: 1,
                background: C.cream, borderRadius: 20,
                border: `4px solid ${C.navyDeep}`,
                aspectRatio: '4 / 5',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                padding: '8% 12%'
              }}>
            <img src="assets/logo.png" alt="De La Abuelita"
                style={{ width: '100%', height: 'auto', maxHeight: '100%', objectFit: 'contain', display: 'block' }} />
          </div>
        </div>
        <div>
          <div style={{
                fontFamily: display, fontSize: '0.85rem', fontWeight: 700,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: C.red, marginBottom: 18
              }}>
            ✦ {t('Nuestra historia', 'Our story', lang)}
          </div>
          <h2 style={{
                fontFamily: display, fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.04,
                fontWeight: 800, margin: 0, textTransform: 'uppercase',
                letterSpacing: '-0.02em', color: C.navyDeep
              }}>
            {t('De la cocina', 'From the kitchen', lang)}<br />
            <span style={{ color: C.red }}>{t('a la ciudad', 'to the city', lang)}</span>,<br />
            <span style={{ color: C.lime }}>{t('al país', 'to the country', lang)}</span>.
          </h2>
          <p style={{ fontFamily: sans, fontSize: 'clamp(1.1rem, 1.4vw, 1.25rem)', lineHeight: 1.7, maxWidth: 950, marginTop: 28, color: `${C.navyDeep}cc`, whiteSpace: 'pre-line', textAlign: 'left' }}>
            {t(COPY.story1.es, COPY.story1.en, lang)}
          </p>
          <p style={{ fontFamily: sans, fontSize: 'clamp(1.1rem, 1.4vw, 1.25rem)', lineHeight: 1.7, maxWidth: 950, marginTop: 18, color: `${C.navyDeep}cc`, textAlign: 'left' }}>
            {t(COPY.story2.es, COPY.story2.en, lang)}
          </p>

          {/* Animated stats */}
          <div style={{ display: 'flex', gap: 32, flexWrap: 'wrap', marginTop: 44, paddingTop: 36, borderTop: `2px solid ${C.navyDeep}22` }}>
            {COPY.stats.map((s, i) => (
              <div key={i}>
                <div style={{ fontFamily: display, fontWeight: 800, fontSize: 'clamp(2.4rem, 4vw, 3.4rem)', color: i === 1 ? C.red : C.navyDeep, lineHeight: 1 }}>
                  <AnimatedCounter end={s.end} suffix={s.suffix} />
                </div>
                <div style={{ fontFamily: sans, fontSize: '0.95rem', fontWeight: 600, letterSpacing: '0.04em', color: `${C.navyDeep}99`, marginTop: 6 }}>
                  {t(s.es, s.en, lang)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </Reveal>

      {/* MINI TIMELINE \u2014 hitos de la empresa */}
      <Reveal y={32}>
      <section style={{ background: C.navyDeep, color: C.white, padding: '80px 56px', borderTop: `6px solid ${C.red}` }}>
        <div style={{
              fontFamily: display, fontSize: '0.85rem', fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: C.lime, marginBottom: 40, textAlign: 'center'
            }}>✦ {t('LÍNEA DE TIEMPO', 'TIMELINE', lang)} ✦</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24, position: 'relative' }}>
          <div style={{ position: 'absolute', top: 9, left: '12.5%', right: '12.5%', height: 3, background: `${C.white}22` }} />
          {[
            { y: '1985', es: 'La cocina de la abuelita', en: 'Grandma\u2019s kitchen' },
            { y: '2010', es: 'La receta pasa de generaci\u00f3n', en: 'The recipe passes on' },
            { y: '2024', es: 'Primera lata', en: 'First can produced' },
            { y: t('Hoy', 'Today', lang), es: 'Toda Centroam\u00e9rica', en: 'All of Central America' },
          ].map((m, i) => (
            <div key={i} style={{ position: 'relative', paddingTop: 30, textAlign: 'center' }}>
              <div style={{
                position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
                width: 18, height: 18, borderRadius: '50%', background: C.lime, border: `3px solid ${C.navyDeep}`
              }} />
              <div style={{ fontFamily: display, fontWeight: 800, fontSize: '1.4rem', color: C.lime }}>{m.y}</div>
              <div style={{ fontFamily: sans, fontSize: '0.95rem', lineHeight: 1.5, opacity: 0.85, marginTop: 8 }}>{t(m.es, m.en, lang)}</div>
            </div>
          ))}
        </div>
      </section>
      </Reveal>

      {/* PRODUCTOS — two big panels, one navy/orange (horchata), one lime (guanabana) */}
      <Reveal y={36}>
      <section style={{ position: 'relative' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', padding: '20px 56px 60px', background: C.cream }}>
          <div style={{
                fontFamily: display, fontSize: '0.85rem', fontWeight: 700,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: C.red, marginBottom: 14
              }}>
            ✦ {t('LA CARTA', 'THE LINEUP', lang)} ✦
          </div>
          <h2 style={{
                fontFamily: display, fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800,
                textTransform: 'uppercase', margin: 0, letterSpacing: '-0.02em',
                color: C.navyDeep, lineHeight: 0.9
              }}>
            {t('Dos sabores.', 'Two flavors.', lang)} <span style={{ color: C.red }}>{t('Un origen.', 'One origin.', lang)}</span>
          </h2>
        </div>

        {/* Horchata block */}
        <div style={{
              background: C.navy, color: C.white,
              padding: '80px 56px', position: 'relative', overflow: 'hidden',
              borderTop: `8px solid ${C.red}`
            }}>
          <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.05) 30%, transparent 31%)`,
                backgroundSize: '50px 50px'
              }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', position: 'relative' }}>
            <div>
              <span style={{
                    fontFamily: display, fontWeight: 700,
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    background: C.red, color: C.white, padding: '8px 16px', borderRadius: 999, fontSize: "0.85rem"
                  }}>{t('SABOR 01', 'FLAVOR 01', lang)} · 330ML</span>
              <h3 style={{
                    fontFamily: display, fontWeight: 800, fontSize: 'clamp(3rem, 8vw, 6rem)',
                    lineHeight: 0.88, margin: '24px 0 0', textTransform: 'uppercase',
                    letterSpacing: '-0.02em'
                  }}>
                {t('Horchata', 'Horchata', lang)}<br />
                <span style={{ color: C.red, fontSize: 'clamp(1.6rem, 4vw, 2.6rem)', fontStyle: 'italic', textTransform: 'lowercase' }}>{t('con canela', 'with cinnamon', lang)}</span>
              </h3>
              <p style={{ fontFamily: sans, lineHeight: 1.7, maxWidth: 480, marginTop: 24, opacity: 0.9, fontSize: 'clamp(1.1rem, 1.4vw, 1.25rem)' }}>
                {t(COPY.products[0].desc.es, COPY.products[0].desc.en, lang)}
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 24 }}>
                {(lang === 'en' ? COPY.products[0].notesEn : COPY.products[0].notes).map((n, i) =>
                    <span key={i} style={{
                      fontFamily: display, fontSize: '0.8rem', fontWeight: 700,
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      border: `2px solid ${C.white}`, padding: '8px 14px', borderRadius: 999
                    }}>{n}</span>
                    )}
              </div>
              <a href={`${LINKS.whatsapp}?text=${encodeURIComponent(t('Hola, quiero pedir Horchata con Canela', 'Hi, I\'d like to order Cinnamon Horchata', lang))}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  marginTop: 28, display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: C.lime, color: C.navyDeep, textDecoration: 'none',
                  padding: '16px 26px', borderRadius: 999,
                  fontFamily: display, fontWeight: 700, fontSize: 16,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  transition: 'transform 200ms ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}>
                {t('Pedir Ahora', 'Order Now', lang)} {Icon.whatsapp(16, C.navyDeep)}
              </a>
              <a href="/horchata-en-lata/"
                style={{
                  marginTop: 28, marginLeft: 16, display: 'inline-flex', alignItems: 'center', gap: 6,
                  color: C.white, textDecoration: 'underline', textUnderlineOffset: 4,
                  fontFamily: sans, fontWeight: 600, fontSize: 15
                }}>
                {t('Ver ficha completa', 'See full details', lang)} →
              </a>
            </div>
            <div className="dla-lift-card" style={{ position: 'relative' }}>
              <span style={{
                position: 'absolute', top: 16, right: 16, zIndex: 2,
                background: C.red, color: C.white,
                fontFamily: display, fontWeight: 800, fontSize: '0.8rem',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '8px 16px', borderRadius: 999,
                boxShadow: '0 8px 16px -6px rgba(0,0,0,0.4)'
              }}>★ {t('FAVORITO', 'FAVORITE', lang)}</span>
              <img src="assets/horchata-can-w.webp" alt="Lata de Horchata con Canela De La Abuelita 330ml"
                  style={{ width: '100%', height: 480, objectFit: 'contain', borderRadius: 20, display: 'block', border: `4px solid ${C.white}`, background: '#ffffff' }} />
            </div>
          </div>
        </div>

        {/* Guanabana block */}
        <div style={{
              background: C.lime, color: C.navyDeep,
              padding: '80px 56px', position: 'relative', overflow: 'hidden',
              borderTop: `8px solid ${C.navyDeep}`
            }}>
          <div style={{
                position: 'absolute', inset: 0,
                backgroundImage: `radial-gradient(circle, rgba(0,0,0,0.05) 30%, transparent 31%)`,
                backgroundSize: '50px 50px'
              }} />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center', position: 'relative' }}>
            <div className="dla-lift-card" style={{ position: 'relative', order: 0 }}>
              <span style={{
                position: 'absolute', top: 16, left: 16, zIndex: 2,
                background: C.navyDeep, color: C.white,
                fontFamily: display, fontWeight: 800, fontSize: '0.8rem',
                letterSpacing: '0.12em', textTransform: 'uppercase',
                padding: '8px 16px', borderRadius: 999,
                boxShadow: '0 8px 16px -6px rgba(0,0,0,0.3)'
              }}>✦ {t('NUEVO', 'NEW', lang)}</span>
              <img src="assets/guanabana-can-w.webp" alt="Lata de jugo de Guanábana De La Abuelita 330ml"
                  style={{ width: '100%', height: 480, objectFit: 'contain', borderRadius: 20, display: 'block', border: `4px solid ${C.navyDeep}`, background: '#ffffff' }} />
            </div>
            <div>
              <span style={{
                    fontFamily: display, fontWeight: 700,
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    background: C.navyDeep, color: C.white, padding: '8px 16px', borderRadius: 999, fontSize: "0.85rem"
                  }}>{t('SABOR 02', 'FLAVOR 02', lang)} · 330ML</span>
              <h3 style={{
                    fontFamily: display, fontWeight: 800, fontSize: 'clamp(3rem, 8vw, 6rem)',
                    lineHeight: 0.88, margin: '24px 0 0', textTransform: 'uppercase',
                    letterSpacing: '-0.02em'
                  }}>
                {t('Guaná', 'Sour', lang)}<br />
                <span>{t('bana', 'sop', lang)}</span>
              </h3>
              <p style={{ fontFamily: sans, lineHeight: 1.7, maxWidth: 480, marginTop: 24, opacity: 0.85, textAlign: "left", fontSize: 'clamp(1.1rem, 1.4vw, 1.25rem)' }}>
                {t(COPY.products[1].desc.es, COPY.products[1].desc.en, lang)}
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 24 }}>
                {(lang === 'en' ? COPY.products[1].notesEn : COPY.products[1].notes).map((n, i) =>
                    <span key={i} style={{
                      fontFamily: display, fontSize: '0.8rem', fontWeight: 700,
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      border: `2px solid ${C.navyDeep}`, padding: '8px 14px', borderRadius: 999
                    }}>{n}</span>
                    )}
              </div>
              <a href={`${LINKS.whatsapp}?text=${encodeURIComponent(t('Hola, quiero pedir Guanábana', 'Hi, I\'d like to order Soursop', lang))}`}
                target="_blank" rel="noopener noreferrer"
                style={{
                  marginTop: 28, display: 'inline-flex', alignItems: 'center', gap: 10,
                  background: C.navyDeep, color: C.white, textDecoration: 'none',
                  padding: '16px 26px', borderRadius: 999,
                  fontFamily: display, fontWeight: 700, fontSize: 16,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  transition: 'transform 200ms ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}>
                {t('Pedir Ahora', 'Order Now', lang)} {Icon.whatsapp(16, C.white)}
              </a>
              <a href="/guanabana-en-lata/"
                style={{
                  marginTop: 28, marginLeft: 16, display: 'inline-flex', alignItems: 'center', gap: 6,
                  color: C.navyDeep, textDecoration: 'underline', textUnderlineOffset: 4,
                  fontFamily: sans, fontWeight: 600, fontSize: 15
                }}>
                {t('Ver ficha completa', 'See full details', lang)} →
              </a>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      {/* POR QUÉ ELEGIRNOS */}
      <Reveal y={32}>
      <section style={{ background: C.cream, padding: '100px 56px' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{
                fontFamily: display, fontSize: '0.85rem', fontWeight: 700,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: C.red, marginBottom: 14
              }}>✦ {t('LO QUE NOS DISTINGUE', 'WHAT SETS US APART', lang)} ✦</div>
          <h2 style={{
                fontFamily: display, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', fontWeight: 800,
                textTransform: 'uppercase', margin: 0, letterSpacing: '-0.02em',
                color: C.navyDeep, lineHeight: 0.95
              }}>{t(COPY.whyUsTitle.es, COPY.whyUsTitle.en, lang)}</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {COPY.whyUs.map((w, i) => (
            <div key={i} style={{
              background: C.white, borderRadius: 20, padding: '36px 26px',
              border: `2px solid ${C.navyDeep}22`, textAlign: 'center',
              display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16
            }}>
              <div style={{
                width: 64, height: 64, borderRadius: '50%',
                background: i % 2 === 0 ? C.lime : C.red,
                display: 'flex', alignItems: 'center', justifyContent: 'center'
              }}>{Icon[w.icon](30, i % 2 === 0 ? C.navyDeep : C.white)}</div>
              <h3 style={{ fontFamily: display, fontSize: '1.2rem', fontWeight: 800, margin: 0, color: C.navyDeep, textTransform: 'uppercase' }}>
                {t(w.es, w.en, lang)}
              </h3>
              <p style={{ fontFamily: sans, fontSize: '0.95rem', lineHeight: 1.6, margin: 0, color: `${C.navyDeep}99` }}>
                {t(w.esBody, w.enBody, lang)}
              </p>
            </div>
          ))}
        </div>
      </section>
      </Reveal>

      <Strip bg={C.navy} fg={C.white} text={t('CON INGREDIENTES NATURALES', 'WITH NATURAL INGREDIENTS', lang)} />

      {/* DISTRIBUIDORES — cream with bold cards */}
      <Reveal y={36}>
      <section style={{
            background: C.cream, padding: '110px 56px'
          }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.55fr 0.45fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{
                  fontFamily: display, fontSize: '0.85rem', fontWeight: 700,
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: C.red, marginBottom: 18
                }}>
              ✦ {t('PARA TU NEGOCIO', 'FOR YOUR BUSINESS', lang)}
            </div>
            <h2 style={{
                  fontFamily: display, fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800,
                  textTransform: 'uppercase', margin: 0, letterSpacing: '-0.02em',
                  color: C.navyDeep, lineHeight: 1.04, maxWidth: 600
                }}>
              {t('Llevamos', 'We bring')},<br />
              <span style={{ color: C.red }}>{t('nuestra receta', 'our recipe', lang)}</span>{' '}
              <span style={{ color: C.lime, background: C.navyDeep, padding: '0 18px' }}>{t('a tu negocio', 'to your business', lang)}</span>
            </h2>
            <p style={{ fontFamily: sans, lineHeight: 1.7, maxWidth: 520, marginTop: 28, color: `${C.navyDeep}cc`, fontSize: 'clamp(1.1rem, 1.4vw, 1.25rem)' }}>
              {t(COPY.wholesaleLead.es, COPY.wholesaleLead.en, lang)}
            </p>
            <button onClick={() => goTo('contact')} style={{
                  marginTop: 32,
                  background: C.navyDeep, color: C.white, border: 0,
                  padding: '18px 30px', borderRadius: 999,
                  fontFamily: display, fontWeight: 700,
                  letterSpacing: '0.08em', textTransform: 'uppercase',
                  cursor: 'pointer',
                  display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: "18px"
                }}>
              {t('Soy distribuidor', 'I\u2019m a distributor', lang)} {Icon.arrow(16, C.white)}
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
            {COPY.wholesalePoints.map((p, i) => {
                  const tones = [
                  { bg: C.navyDeep, fg: C.white, accent: C.red, border: C.navyDeep },
                  { bg: C.red, fg: C.white, accent: C.lime, border: C.navyDeep },
                  { bg: C.lime, fg: C.navyDeep, accent: C.navyDeep, border: C.navyDeep },
                  { bg: C.white, fg: C.navyDeep, accent: C.red, border: C.navyDeep }][
                  i];
                  return (
                    <div key={i} style={{
                      background: tones.bg, color: tones.fg,
                      borderRadius: 18, padding: '28px 24px',
                      border: tones.border ? `2px solid ${tones.border}` : 'none',
                      minHeight: 180, display: 'flex', flexDirection: 'column', justifyContent: 'space-between'
                    }}>
                  <div style={{
                        width: 38, height: 38, borderRadius: '50%',
                        background: tones.accent, color: tones.bg === tones.accent ? tones.fg : tones.bg === C.lime ? C.white : C.white,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: display, fontWeight: 800, fontSize: 16
                      }}>{String(i + 1).padStart(2, '0')}</div>
                  <div style={{ fontFamily: display, fontWeight: 700, lineHeight: 1.3, marginTop: 24, fontSize: 'clamp(1.1rem, 1.4vw, 1.35rem)' }}>
                    {t(p.es, p.en, lang)}
                  </div>
                </div>);

                })}
          </div>
        </div>
      </section>
      </Reveal>

      {/* CONTACTO — red panel with big phone numbers */}
      <Reveal y={36}>
      <section style={{
            background: C.red, color: C.white,
            padding: '90px 56px',
            borderTop: `8px solid ${C.lime}`
          }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.5fr 0.5fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{
                  fontFamily: display, fontSize: '0.85rem', fontWeight: 700,
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: C.lime, marginBottom: 18
                }}>
              ✦ {t('Contacto', 'Contact', lang)}
            </div>
            <h2 style={{
                  fontFamily: display, fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800,
                  textTransform: 'uppercase', margin: 0,
                  letterSpacing: '-0.02em', lineHeight: 0.9
                }}>
              {t('Envíanos', 'Drop us')}<br />
              <span style={{ color: C.navyDeep }}>{t('un mensaje', 'a line', lang)}</span>.
            </h2>
            <p style={{ fontFamily: sans, lineHeight: 1.7, maxWidth: 460, marginTop: 28, opacity: 0.95, fontSize: 'clamp(1.1rem, 1.4vw, 1.25rem)' }}>
              {t(COPY.contactLead.es, COPY.contactLead.en, lang)}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
                { icon: Icon.whatsapp, label: 'WhatsApp', value: COPY.whatsappLines[0].label, bg: C.lime, fg: C.navyDeep, href: COPY.whatsappLines[0].href },
                { icon: Icon.whatsapp, label: 'WhatsApp', value: COPY.whatsappLines[1].label, bg: C.lime, fg: C.navyDeep, href: COPY.whatsappLines[1].href },
                { icon: Icon.phone, label: t('Teléfono', 'Phone', lang), value: COPY.whatsappLines[0].label, bg: C.navyDeep, fg: C.white, href: LINKS.phone },
                { icon: Icon.phone, label: t('Teléfono', 'Phone', lang), value: COPY.whatsappLines[1].label, bg: C.navyDeep, fg: C.white, href: LINKS.phone2 },
                { icon: Icon.mail, label: t('Correo', 'Email', lang), value: COPY.email, bg: C.white, fg: C.navyDeep, href: LINKS.email }].
                map((row, i) =>
                <a key={i} href={row.href} target={row.href.startsWith('http') ? '_blank' : undefined} rel={row.href.startsWith('http') ? 'noopener noreferrer' : undefined} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '26px 28px',
                  background: row.bg, color: row.fg, borderRadius: 18,
                  textDecoration: 'none'
                }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                  {row.icon(28, row.fg)}
                  <div>
                    <div style={{ fontFamily: display, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.7, fontSize: "0.85rem" }}>
                      {row.label}
                    </div>
                    <div style={{ fontFamily: display, fontSize: 30, fontWeight: 800, marginTop: 4 }}>{row.value}</div>
                  </div>
                </div>
                {Icon.arrow(20, row.fg)}
              </a>
                )}
            <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
              {[{ I: Icon.instagram, href: LINKS.instagram }, { I: Icon.facebook, href: LINKS.facebook }, { I: Icon.tiktok, href: LINKS.tiktok }].filter((s) => s.href).map((s, i) =>
                  <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                    width: 56, height: 56, borderRadius: 16,
                    background: 'rgba(255,255,255,0.15)',
                    border: `2px solid rgba(255,255,255,0.4)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textDecoration: 'none', color: C.white
                  }}>{s.I(22, C.white)}</a>
                  )}
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      {/* CONTACTO — formulario completo */}
      <Reveal y={32}>
      <section style={{ background: C.cream, padding: '100px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.55fr 0.45fr', gap: 60 }}>
          <div>
            <div style={{
                  fontFamily: display, fontSize: '0.85rem', fontWeight: 700,
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: C.red, marginBottom: 18
                }}>✦ {t('FORMULARIO', 'FORM', lang)}</div>
            <h2 style={{
                  fontFamily: display, fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: 800,
                  textTransform: 'uppercase', margin: 0, letterSpacing: '-0.02em',
                  color: C.navyDeep, lineHeight: 0.95
                }}>{t('Contános qué necesitás.', 'Tell us what you need.', lang)}</h2>
            <form method="POST" action="https://formspree.io/f/mgojnwor" onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target;
                const data = new FormData(form);
                setContactStatus('sending');
                try {
                  const res = await fetch('https://formspree.io/f/mgojnwor', {
                    method: 'POST', body: data, headers: { Accept: 'application/json' }
                  });
                  if (res.ok) { setContactStatus('ok'); form.reset(); } else { setContactStatus('error'); }
                } catch (err) { setContactStatus('error'); }
              }} style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
              <input type="hidden" name="_subject" value="Contacto web — De La Abuelita" />
              <FolkField name="nombre" label={t('Nombre', 'Name', lang)} placeholder={t('Tu nombre', 'Your name', lang)} required />
              <FolkField name="correo" label={t('Correo', 'Email', lang)} placeholder="hola@ejemplo.com" type="email" required />
              <div style={{ gridColumn: '1 / -1' }}>
                <FolkField name="mensaje" label={t('Mensaje', 'Message', lang)} placeholder={t('Contános en qué podemos ayudarte.', 'Tell us how we can help.', lang)} textarea required />
              </div>
              <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
                <button type="submit" disabled={contactStatus === 'sending'} style={{
                    background: C.navyDeep, color: C.white, border: 0,
                    padding: '18px 30px', borderRadius: 999,
                    fontFamily: display, fontWeight: 700, fontSize: 16,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    cursor: contactStatus === 'sending' ? 'wait' : 'pointer', opacity: contactStatus === 'sending' ? 0.7 : 1,
                    display: 'inline-flex', alignItems: 'center', gap: 10,
                    transition: 'transform 200ms ease'
                  }}
                  onMouseEnter={(e) => { if (contactStatus !== 'sending') e.currentTarget.style.transform = 'translateY(-3px)'; }}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'none'}>
                  {contactStatus === 'sending' ? t('Enviando…', 'Sending…', lang) : t('Enviar mensaje', 'Send message', lang)} {Icon.arrow(16, C.white)}
                </button>
                <span style={{ fontFamily: sans, fontSize: 16, color:
                    contactStatus === 'ok' ? '#2f7d32' : contactStatus === 'error' ? C.red : `${C.navyDeep}99` }}>
                  {contactStatus === 'ok'
                    ? t('¡Gracias! Tu mensaje fue enviado.', 'Thanks! Your message was sent.', lang)
                    : contactStatus === 'error'
                    ? t('No se pudo enviar. Intentá de nuevo o escribinos por WhatsApp.', 'Couldn’t send. Try again or reach us on WhatsApp.', lang)
                    : t('Respondemos en 24 h hábiles.', 'We reply within 24h.', lang)}
                </span>
              </div>
            </form>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{
                background: C.navy, borderRadius: 24, padding: '48px 40px',
                color: C.white, textAlign: 'center', transform: 'rotate(-1.5deg)',
                boxShadow: '0 24px 50px -20px rgba(0,0,0,0.3)'
              }}>
              <div style={{ fontFamily: display, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.lime, fontSize: '0.85rem' }}>
                {t('Respuesta rápida', 'Quick reply', lang)}
              </div>
              <div style={{ fontFamily: display, fontWeight: 800, fontSize: '1.6rem', marginTop: 10 }}>
                {t('Te respondemos en 24h', 'We reply within 24h', lang)}
              </div>
            </div>
          </div>
        </div>
      </section>
      </Reveal>
      </React.Fragment>}

      {page === 'about' && <PageNosotros lang={lang} />}
      {page === 'products' && <PageProductos lang={lang} />}
      {page === 'wholesale' && <PageDistribuidores lang={lang} />}
      {page === 'contact' && <PageContacto lang={lang} />}

      {/* FOOTER */}
      <footer style={{
        background: C.navyDeep, color: C.cream,
        padding: '64px 56px 32px',
        fontFamily: display
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', gap: 40,
          paddingBottom: 40, borderBottom: `1px solid ${C.cream}22`
        }}>
          <div>
            <div style={{ background: C.cream, borderRadius: 16, padding: '10px 16px', display: 'inline-flex' }}>
              <BrandLogo height={72} />
            </div>
            <p style={{ fontFamily: sans, fontSize: 15, lineHeight: 1.6, opacity: 0.75, marginTop: 18, maxWidth: 280, textTransform: 'none', letterSpacing: 'normal', fontWeight: 400 }}>
              {t(COPY.slogan.es, COPY.slogan.en, lang)} · {t(COPY.origin.es, COPY.origin.en, lang)}
            </p>
            <div style={{ display: 'flex', gap: 10, marginTop: 22 }}>
              {[{ I: Icon.instagram, href: LINKS.instagram }, { I: Icon.facebook, href: LINKS.facebook }, { I: Icon.tiktok, href: LINKS.tiktok }].filter((s) => s.href).map((s, i) =>
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" style={{
                  width: 42, height: 42, borderRadius: 12,
                  background: 'rgba(255,255,255,0.08)',
                  border: `1px solid rgba(255,255,255,0.2)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  textDecoration: 'none', color: C.cream, transition: 'background 200ms ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = C.red}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}>{s.I(18, C.cream)}</a>
                )}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.lime, marginBottom: 16 }}>
              {t('Mapa del sitio', 'Sitemap', lang)}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {navItems.map((item) => (
                <a key={item.key} href={`#${FOLK_HASHES[item.key]}`} style={{
                  color: C.cream, opacity: 0.8, textDecoration: 'none', fontSize: 15,
                  textTransform: 'none', letterSpacing: 'normal', fontWeight: 500
                }}>{t(item.n.es, item.n.en, lang)}</a>
              ))}
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.lime, marginBottom: 16 }}>
              {t('Productos', 'Products', lang)}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <a href="#productos" style={{ color: C.cream, opacity: 0.8, textDecoration: 'none', fontSize: 15, textTransform: 'none', letterSpacing: 'normal', fontWeight: 500 }}>{t('Horchata con Canela', 'Cinnamon Horchata', lang)}</a>
              <a href="#productos" style={{ color: C.cream, opacity: 0.8, textDecoration: 'none', fontSize: 15, textTransform: 'none', letterSpacing: 'normal', fontWeight: 500 }}>{t('Guanábana', 'Soursop', lang)}</a>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.lime, marginBottom: 16 }}>
              {t('Contacto', 'Contact', lang)}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, fontSize: 15, opacity: 0.8, fontWeight: 500 }}>
              {COPY.whatsappLines.map((w, i) => (
                <a key={i} href={w.href} target="_blank" rel="noopener noreferrer" style={{ color: C.cream, textDecoration: 'none' }}>{w.label}</a>
              ))}
              <a href={LINKS.email} style={{ color: C.cream, textDecoration: 'none' }}>{COPY.email}</a>
            </div>
          </div>
        </div>
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          fontSize: 14, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
          paddingTop: 28, opacity: 0.65, flexWrap: 'wrap', gap: 12
        }}>
          <span>© 2026 De La Abuelita</span>
          <span style={{ color: C.lime }}>{t('Tradición hecha bebida', 'Tradition in a can', lang)}</span>
          <span>{t('Centroamérica', 'Central America', lang)}</span>
        </div>
      </footer>

      <FloatingWhatsApp href={`${LINKS.whatsapp}?text=${encodeURIComponent(t('Hola, quiero hacer un pedido', 'Hi, I\'d like to place an order', lang))}`} />
    </div>);

}

window.LandingFolklore = LandingFolklore;
