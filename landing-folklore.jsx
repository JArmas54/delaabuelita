// LANDING 02 · TRADICIÓN FOLKLÓRICA
// Uses the full brand palette together — navy field, lime + red-orange accents,
// cream paper. Bold display type, decorative bands, energetic. Feels like the can
// designs amplified across the page.

const { useState: useStateFolklore } = React;

function LandingFolklore() {
  const [lang, setLang] = useLang('es');
  const [page, setPage] = useStateFolklore('home');

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

  const nav = COPY.nav;
  const navItems = [
  { key: 'home', n: nav.home },
  { key: 'about', n: nav.about },
  { key: 'products', n: nav.products },
  { key: 'wholesale', n: nav.wholesale },
  { key: 'contact', n: nav.contact }];


  // Decorative band — now an animated right-to-left marquee.
  const Strip = ({ bg, fg, text }) => <Marquee bg={bg} fg={fg} text={text} fontFamily={display} />;

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
          <a key={item.key} href="#"
          onClick={(e) => {e.preventDefault();setPage(item.key);}}
          style={{
            color: page === item.key ? C.white : C.navyDeep,
            background: page === item.key ? C.navy : 'transparent',
            textDecoration: 'none',
            fontFamily: display, fontSize: 16, fontWeight: 700,
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
      <Reveal y={36}>
      <section style={{
            background: C.navy, color: C.white,
            padding: '90px 56px 110px',
            position: 'relative', overflow: 'hidden'
          }}>
        {/* bubble pattern */}
        <div style={{
              position: 'absolute', inset: 0,
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06) 24%, transparent 25%)`,
              backgroundSize: '60px 60px',
              opacity: 0.7,
              pointerEvents: 'none'
            }} />
        <div style={{
              display: 'grid', gridTemplateColumns: '1.15fr 0.85fr',
              gap: 40, position: 'relative', alignItems: 'center'
            }}>
          <div>
            <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 12,
                  background: C.lime, color: C.navyDeep,
                  padding: '8px 16px', borderRadius: 999,
                  fontFamily: display, fontWeight: 700, fontSize: 16,
                  letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 28
                }}>
              ✦ {t(COPY.heroKicker.es, COPY.heroKicker.en, lang)}
            </div>
            <h1 style={{
                  fontFamily: display, fontWeight: 800, fontSize: 132,
                  lineHeight: 0.88, margin: 0, letterSpacing: '-0.02em',
                  textTransform: 'uppercase'
                }}>
              <span style={{ color: C.white }}>{t('Tradición', 'Tradition', lang)}</span><br />
              <span style={{ color: C.red, display: 'inline-block', transform: 'rotate(-1deg)' }}>{t('hecha', 'in a', lang)}</span>{' '}
              <span style={{ color: C.lime }}>{t('bebida', 'can', lang)}</span>
            </h1>
            <p style={{
                  fontFamily: sans, fontSize: 19, lineHeight: 1.55, maxWidth: 460,
                  opacity: 0.9, marginTop: 32, marginBottom: 36
                }}>{t(COPY.heroLead.es, COPY.heroLead.en, lang)}</p>
            <div style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
              <button style={{
                    background: C.red, color: C.white, border: 0,
                    padding: '18px 30px', borderRadius: 999,
                    fontFamily: display, fontWeight: 700, fontSize: 16,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    cursor: 'pointer',
                    display: 'inline-flex', alignItems: 'center', gap: 10
                  }}>
                {t(COPY.heroCtaPrimary.es, COPY.heroCtaPrimary.en, lang)} {Icon.arrow(16, C.white)}
              </button>
              <button style={{
                    background: 'transparent', color: C.white,
                    border: `2px solid ${C.white}`,
                    padding: '16px 28px', borderRadius: 999,
                    fontFamily: display, fontWeight: 700, fontSize: 16,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    cursor: 'pointer'
                  }}>{t(COPY.heroCtaSecondary.es, COPY.heroCtaSecondary.en, lang)}</button>
            </div>
          </div>
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
              <img src="assets/hero-cans-hg.webp" alt=""
                  style={{ width: '100%', height: 540, objectFit: 'cover', borderRadius: 14, display: 'block' }} />
              <div style={{
                    fontFamily: display, fontSize: 16, fontWeight: 700,
                    letterSpacing: '0.18em', textAlign: 'center',
                    color: C.navyDeep, marginTop: 14, textTransform: 'uppercase'
                  }}>
                {t('2 sabores · 330 ml · Centroamérica', '2 flavors · 330 ml · Central America', lang)}
              </div>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

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
                fontFamily: display, fontSize: 16, fontWeight: 700,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: C.red, marginBottom: 18
              }}>
            ✦ {t('Nuestra historia', 'Our story', lang)}
          </div>
          <h2 style={{
                fontFamily: display, fontSize: 88, lineHeight: 1.04,
                fontWeight: 800, margin: 0, textTransform: 'uppercase',
                letterSpacing: '-0.02em', color: C.navyDeep
              }}>
            {t('De la cocina', 'From the kitchen', lang)}<br />
            <span style={{ color: C.red }}>{t('a la ciudad', 'to the city', lang)}</span>,<br />
            <span style={{ color: C.lime }}>{t('al país', 'to the country', lang)}</span>.
          </h2>
          <p style={{ fontFamily: sans, fontSize: 26, lineHeight: 1.5, maxWidth: 950, marginTop: 28, color: `${C.navyDeep}cc`, whiteSpace: 'pre-line', textAlign: 'justify' }}>
            {t(COPY.story1.es, COPY.story1.en, lang)}
          </p>
          <p style={{ fontFamily: sans, fontSize: 26, lineHeight: 1.5, maxWidth: 950, marginTop: 18, color: `${C.navyDeep}cc`, textAlign: 'justify' }}>
            {t(COPY.story2.es, COPY.story2.en, lang)}
          </p>
        </div>
      </section>
      </Reveal>

      {/* PRODUCTOS — two big panels, one navy/orange (horchata), one lime (guanabana) */}
      <Reveal y={36}>
      <section style={{ position: 'relative' }}>
        {/* Section header */}
        <div style={{ textAlign: 'center', padding: '20px 56px 60px', background: C.cream }}>
          <div style={{
                fontFamily: display, fontSize: 16, fontWeight: 700,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: C.red, marginBottom: 14
              }}>
            ✦ {t('LA CARTA', 'THE LINEUP', lang)} ✦
          </div>
          <h2 style={{
                fontFamily: display, fontSize: 96, fontWeight: 800,
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
                    background: C.red, color: C.white, padding: '8px 16px', borderRadius: 999, fontSize: "18px"
                  }}>{t('SABOR 01', 'FLAVOR 01', lang)} · 330ML</span>
              <h3 style={{
                    fontFamily: display, fontWeight: 800, fontSize: 120,
                    lineHeight: 0.88, margin: '24px 0 0', textTransform: 'uppercase',
                    letterSpacing: '-0.02em'
                  }}>
                {t('Horchata', 'Horchata', lang)}<br />
                <span style={{ color: C.red, fontSize: 64, fontStyle: 'italic', textTransform: 'lowercase' }}>{t('con canela', 'with cinnamon', lang)}</span>
              </h3>
              <p style={{ fontFamily: sans, lineHeight: 1.55, maxWidth: 480, marginTop: 24, opacity: 0.9, fontSize: "26px" }}>
                {t(COPY.products[0].desc.es, COPY.products[0].desc.en, lang)}
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 24 }}>
                {(lang === 'en' ? COPY.products[0].notesEn : COPY.products[0].notes).map((n, i) =>
                    <span key={i} style={{
                      fontFamily: display, fontSize: 16, fontWeight: 700,
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      border: `2px solid ${C.white}`, padding: '8px 14px', borderRadius: 999
                    }}>{n}</span>
                    )}
              </div>
            </div>
            <div style={{ position: 'relative' }}>
              <img src="assets/horchata-can-w.webp" alt=""
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
            <div style={{ position: 'relative', order: 0 }}>
              <img src="assets/guanabana-can-w.webp" alt=""
                  style={{ width: '100%', height: 480, objectFit: 'contain', borderRadius: 20, display: 'block', border: `4px solid ${C.navyDeep}`, background: '#ffffff' }} />
            </div>
            <div>
              <span style={{
                    fontFamily: display, fontWeight: 700,
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    background: C.navyDeep, color: C.white, padding: '8px 16px', borderRadius: 999, fontSize: "18px"
                  }}>{t('SABOR 02', 'FLAVOR 02', lang)} · 330ML</span>
              <h3 style={{
                    fontFamily: display, fontWeight: 800, fontSize: 120,
                    lineHeight: 0.88, margin: '24px 0 0', textTransform: 'uppercase',
                    letterSpacing: '-0.02em'
                  }}>
                {t('Guaná', 'Sour', lang)}<br />
                <span>{t('bana', 'sop', lang)}</span>
              </h3>
              <p style={{ fontFamily: sans, lineHeight: 1.55, maxWidth: 480, marginTop: 24, opacity: 0.85, textAlign: "left", fontSize: "26px" }}>
                {t(COPY.products[1].desc.es, COPY.products[1].desc.en, lang)}
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginTop: 24 }}>
                {(lang === 'en' ? COPY.products[1].notesEn : COPY.products[1].notes).map((n, i) =>
                    <span key={i} style={{
                      fontFamily: display, fontSize: 16, fontWeight: 700,
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      border: `2px solid ${C.navyDeep}`, padding: '8px 14px', borderRadius: 999
                    }}>{n}</span>
                    )}
              </div>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      {/* DISTRIBUIDORES — cream with bold cards */}
      <Reveal y={36}>
      <section style={{
            background: C.cream, padding: '110px 56px'
          }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.55fr 0.45fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div style={{
                  fontFamily: display, fontSize: 16, fontWeight: 700,
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: C.red, marginBottom: 18
                }}>
              ✦ {t('PARA TU NEGOCIO', 'FOR YOUR BUSINESS', lang)}
            </div>
            <h2 style={{
                  fontFamily: display, fontSize: 88, fontWeight: 800,
                  textTransform: 'uppercase', margin: 0, letterSpacing: '-0.02em',
                  color: C.navyDeep, lineHeight: 1.04, maxWidth: 600, width: "600px"
                }}>
              {t('Llevamos', 'We bring')},<br />
              <span style={{ color: C.red }}>{t('nuestra receta', 'our recipe', lang)}</span>{' '}
              <span style={{ color: C.lime, background: C.navyDeep, padding: '0 18px' }}>{t('a tu negocio', 'to your business', lang)}</span>.
            </h2>
            <p style={{ fontFamily: sans, lineHeight: 1.6, maxWidth: 520, marginTop: 28, color: `${C.navyDeep}cc`, fontSize: "26px" }}>
              {t(COPY.wholesaleLead.es, COPY.wholesaleLead.en, lang)}
            </p>
            <button style={{
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
                  { bg: C.navyDeep, fg: C.white, accent: C.red },
                  { bg: C.red, fg: C.white, accent: C.lime },
                  { bg: C.lime, fg: C.navyDeep, accent: C.navyDeep },
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
                  <div style={{ fontFamily: display, fontWeight: 700, lineHeight: 1.1, marginTop: 24, fontSize: "32px" }}>
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
                  fontFamily: display, fontSize: 16, fontWeight: 700,
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: C.lime, marginBottom: 18
                }}>
              ✦ {t('Contacto', 'Contact', lang)}
            </div>
            <h2 style={{
                  fontFamily: display, fontSize: 110, fontWeight: 800,
                  textTransform: 'uppercase', margin: 0,
                  letterSpacing: '-0.02em', lineHeight: 0.9
                }}>
              {t('Envíanos', 'Drop us')}<br />
              <span style={{ color: C.navyDeep }}>{t('un mensaje', 'a line', lang)}</span>.
            </h2>
            <p style={{ fontFamily: sans, lineHeight: 1.6, maxWidth: 460, marginTop: 28, opacity: 0.95, fontSize: "26px" }}>
              {t(COPY.contactLead.es, COPY.contactLead.en, lang)}
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
                { icon: Icon.whatsapp, label: 'WhatsApp', value: COPY.whatsapp, bg: C.lime, fg: C.navyDeep },
                { icon: Icon.phone, label: t('Teléfono', 'Phone', lang), value: COPY.phone, bg: C.navyDeep, fg: C.white },
                { icon: Icon.mail, label: t('Correo', 'Email', lang), value: COPY.email, bg: C.white, fg: C.navyDeep }].
                map((row, i) =>
                <a key={i} href="#" style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '26px 28px',
                  background: row.bg, color: row.fg, borderRadius: 18,
                  textDecoration: 'none'
                }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                  {row.icon(28, row.fg)}
                  <div>
                    <div style={{ fontFamily: display, fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.7, fontSize: "18px" }}>
                      {row.label}
                    </div>
                    <div style={{ fontFamily: display, fontSize: 30, fontWeight: 800, marginTop: 4 }}>{row.value}</div>
                  </div>
                </div>
                {Icon.arrow(20, row.fg)}
              </a>
                )}
            <div style={{ display: 'flex', gap: 10, marginTop: 8 }}>
              {[Icon.instagram, Icon.facebook, Icon.tiktok].map((I, i) =>
                  <a key={i} href="#" style={{
                    width: 56, height: 56, borderRadius: 16,
                    background: 'rgba(255,255,255,0.15)',
                    border: `2px solid rgba(255,255,255,0.4)`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textDecoration: 'none', color: C.white
                  }}>{I(22, C.white)}</a>
                  )}
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
        padding: '32px 56px',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        fontFamily: display, fontSize: 16, fontWeight: 600,
        letterSpacing: '0.12em', textTransform: 'uppercase'
      }}>
        <span style={{ fontSize: "16px" }}>© 2026 De La Abuelita</span>
        <span style={{ color: C.lime, fontSize: "16px" }}>{t('Tradición hecha bebida', 'Tradition in a can', lang)}</span>
        <span style={{ fontSize: "16px" }}>{t('Centroamérica', 'Central America', lang)}</span>
      </footer>
    </div>);

}

window.LandingFolklore = LandingFolklore;