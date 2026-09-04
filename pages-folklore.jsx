// SUB-PAGES for the Folklore landing: Nosotros, Productos, Distribuidores, Contacto.
// Each page reuses the brand palette + display type + decorative strips.

const FOLK = {
  navy: BRAND.navy,
  navyDeep: BRAND.navyDeep,
  red: BRAND.redOrange,
  lime: BRAND.lime,
  cream: BRAND.cream,
  paper: BRAND.paper,
  white: '#FFFFFF'
};
const FOLK_DISPLAY = '"Bricolage Grotesque", "DM Sans", system-ui, sans-serif';
const FOLK_SANS = '"DM Sans", system-ui, sans-serif';

// ────────────────────────────────────────────────────────────
// Shared bits used by all sub-pages
// ────────────────────────────────────────────────────────────

function FolkStrip({ bg, fg, text }) {
  return <Marquee bg={bg} fg={fg} text={text} fontFamily={FOLK_DISPLAY} />;
}

function CentralAmericaMap() {
  const C = FOLK;
  const land = 'rgba(255,255,255,0.13)';
  const stroke = 'rgba(255,255,255,0.45)';
  const label = 'rgba(255,255,255,0.78)';
  const countries = [
  { name: 'Guatemala', d: 'M42.7,162 L43.7,142.5 L58.5,111.5 L100.3,111.2 L100.3,72.6 L82.6,72.6 L82.6,53.7 L142.1,53.7 L141.8,117.4 L149.8,123.7 L171.4,122.7 L141.5,161 L135.4,165.9 L111.2,182.4 L74.9,182.4 L42.7,162 Z', lx: 88, ly: 132 },
  { name: 'Belice', d: 'M141.8,53.7 L169.2,32 L175.6,45.5 L170.1,62.7 L172.4,84.1 L151.5,117.1 L141.8,117.4 L141.8,53.7 Z', lx: 218, ly: 56, leader: [192, 62, 165, 68] },
  { name: 'Honduras', d: 'M135.4,165.9 L141.5,161 L171.4,122.7 L181.4,118.8 L244.8,117.1 L297.9,119.7 L334.9,146.8 L318.5,154.1 L304.3,166.6 L269.6,184.8 L231.9,187.4 L220.3,202.9 L200,213.5 L188.5,199.9 L184.9,199.3 L162.7,184.8 L135.4,165.9 Z', lx: 240, ly: 150 },
  { name: 'Nicaragua', d: 'M188.8,213.5 L200,213.5 L220.3,202.9 L231.9,187.4 L269.6,184.8 L304.3,166.6 L318.5,154.1 L335.5,147.1 L323.6,212.8 L318.8,232.6 L318.5,258 L310.7,280.5 L278.6,280.5 L252.8,276.2 L220.3,253.1 L188.8,213.5 Z', lx: 273, ly: 224 },
  { name: 'Costa Rica', d: 'M252.8,276.2 L278.6,280.5 L310.7,280.5 L318.5,285.4 L341.6,324.3 L344.9,329 L342,342.5 L338.1,346.5 L318.8,343.2 L318.1,357.3 L286.6,323.4 L268.9,312.5 L246.4,300.3 L254.1,313.5 L271.2,308.5 L252.8,276.2 Z', lx: 263, ly: 296, leader: [290, 300, 305, 305] },
  { name: 'Panamá', d: 'M342,342.5 L344.9,329 L365.5,343.2 L391.2,348.1 L420.2,324.3 L452.3,324.3 L484.5,330 L521.5,355.7 L526.4,356 L508.7,376.2 L494.2,369.6 L452.3,403.5 L429.8,404.2 L420.8,397.6 L439.5,376.2 L420.2,373.8 L394.4,387.7 L371.9,367.9 L344.5,376.2 L338.1,346.5 L342,342.5 Z', lx: 455, ly: 348 }];

  // distribution points (red dots) on partner countries
  const dots = [[95, 150], [255, 155], [278, 235], [300, 305], [455, 360]];
  return (
    <svg viewBox="0 0 560 470" style={{ width: '100%', maxWidth: 460, height: 'auto', display: 'block' }} role="img" aria-label="Mapa de Centroamérica">
      {/* sea dot texture */}
      <defs>
        <pattern id="seaDots" width="22" height="22" patternUnits="userSpaceOnUse">
          <circle cx="3" cy="3" r="1.4" fill="rgba(255,255,255,0.06)" />
        </pattern>
      </defs>
      <rect x="0" y="0" width="560" height="470" fill="url(#seaDots)" />
      {countries.map((c, i) =>
      <path key={i} d={c.d} fill={land} stroke={stroke} strokeWidth="2" strokeLinejoin="round" />
      )}
      {/* El Salvador highlighted */}
      <path d="M111.2,182.4 L135.4,165.9 L162.7,184.8 L184.9,199.3 L188.8,206.9 L162.7,207.5 L130.5,198 L111.2,182.4 Z" fill={C.lime} stroke={C.navyDeep} strokeWidth="2.5" strokeLinejoin="round" />
      {/* distribution dots */}
      {dots.map((p, i) =>
      <g key={i}>
        <circle cx={p[0]} cy={p[1]} r="6.5" fill={C.red} />
        <circle cx={p[0]} cy={p[1]} r="2.4" fill={C.white} />
      </g>
      )}
      {/* country labels */}
      {countries.map((c, i) =>
      <g key={i}>
        {c.leader && <line x1={c.leader[0]} y1={c.leader[1]} x2={c.leader[2]} y2={c.leader[3]} stroke={label} strokeWidth="1" />}
        <text x={c.lx} y={c.ly} textAnchor="middle" fontFamily={FOLK_DISPLAY} fontSize="16" fontWeight="700" letterSpacing="0.5" fill={label} style={{ textTransform: 'uppercase' }}>{c.name}</text>
      </g>
      )}
      {/* El Salvador marker + label */}
      <line x1="148" y1="193" x2="112" y2="272" stroke={C.lime} strokeWidth="1.5" />
      <circle cx="148" cy="190" r="5" fill={C.navyDeep} />
      <text x="108" y="290" textAnchor="middle" fontFamily={FOLK_DISPLAY} fontSize="18" fontWeight="800" letterSpacing="0.5" fill={C.lime} style={{ textTransform: 'uppercase' }}>El Salvador</text>
      <text x="108" y="310" textAnchor="middle" fontFamily={FOLK_SANS} fontSize="16" fill={label}>Aquí nace la receta</text>
    </svg>);

}

// Cream card holding the brand logo — used in the aside slot on navy banners
// so the navy logo reads against the dark background.
function LogoBadge() {
  return (
    <div style={{
      background: FOLK.cream, borderRadius: 28, padding: '56px 40px',
      transform: 'rotate(-2deg)', boxShadow: '0 24px 50px -20px rgba(0,0,0,0.45)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%', maxWidth: 440
    }}>
      <BrandLogo style={{ width: '100%', height: 'auto', maxWidth: 380, margin: '0 auto' }} />
    </div>);
}

function PageBanner({ kicker, accentDot, accent, children, lead, media, aside, asideAlign = 'center', wideAside = false }) {
  const C = FOLK;
  const twoCol = media || aside;
  return (
    <section style={{
      background: C.navy, color: C.white,
      padding: '90px 56px 110px',
      position: 'relative', overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle at 50% 50%, rgba(255,255,255,0.06) 24%, transparent 25%)`,
        backgroundSize: '60px 60px', opacity: 0.7, pointerEvents: 'none'
      }} />
      {!twoCol &&
      <svg width="120" height="120" viewBox="0 0 120 120" style={{ position: 'absolute', top: 40, right: 60, transform: 'rotate(15deg)' }}>
        <path d="M60 5 L70 50 L115 60 L70 70 L60 115 L50 70 L5 60 L50 50 Z" fill={accent || C.lime} />
      </svg>
      }
      <Reveal style={{
        position: 'relative',
        maxWidth: twoCol ? 'none' : 1000,
        display: twoCol ? 'grid' : 'block',
        gridTemplateColumns: twoCol ? aside ? wideAside ? '1fr 1fr' : 'minmax(0, 1fr) minmax(300px, 440px)' : wideAside ? '1fr 1fr' : '1fr 0.9fr' : undefined,
        gap: twoCol ? 48 : 0, alignItems: asideAlign === 'end' ? 'end' : 'center'
      }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 12,
            background: accentDot || C.lime, color: C.navyDeep,
            padding: '8px 16px', borderRadius: 999,
            fontFamily: FOLK_DISPLAY, fontWeight: 700,
            letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: 28, fontSize: "0.85rem"
          }}>✦ {kicker}</div>
          <h1 style={{
            fontFamily: FOLK_DISPLAY, fontWeight: 800, fontSize: 'clamp(3rem, 8vw, 6rem)',
            lineHeight: 0.88, margin: 0, letterSpacing: '-0.02em',
            textTransform: 'uppercase'
          }}>{children}</h1>
          {lead &&
          <p style={{
            fontFamily: FOLK_SANS, lineHeight: 1.7, maxWidth: 600,
            opacity: 0.9, marginTop: 32, fontSize: 'clamp(1.1rem, 1.4vw, 1.25rem)'
          }}>{lead}</p>
          }
        </div>
        {aside &&
        <div style={{ display: 'flex', alignItems: asideAlign === 'end' ? 'flex-end' : 'center', justifyContent: 'center', height: '100%', position: 'relative' }}>
          {aside}
        </div>
        }
        {media &&
        <div style={{ position: 'relative', justifySelf: 'center', width: '100%', maxWidth: 440 }}>
          <svg width="100" height="100" viewBox="0 0 120 120" style={{ position: 'absolute', top: -22, left: -26, transform: 'rotate(-12deg)', zIndex: 2 }}>
            <path d="M60 5 L70 50 L115 60 L70 70 L60 115 L50 70 L5 60 L50 50 Z" fill={accent || C.lime} />
          </svg>
          <div style={{
            background: C.cream, borderRadius: 24, padding: 16,
            transform: 'rotate(2deg)', boxShadow: '0 24px 50px -20px rgba(0,0,0,0.45)'
          }}>
            <img src={media} alt=""
            style={{ height: 'auto', display: 'block', borderRadius: 14, width: "100%" }} />
          </div>
        </div>
        }
      </Reveal>
    </section>);

}

// ────────────────────────────────────────────────────────────
// NOSOTROS
// ────────────────────────────────────────────────────────────

function PageNosotros({ lang }) {
  const C = FOLK;
  const display = FOLK_DISPLAY;
  const sans = FOLK_SANS;

  const milestones = [
  {
    year: '1985',
    title: t('La cocina', 'The kitchen', lang),
    body: t(
      'Todo empezó con un perol grande, arroz tostándose despacio y los vecinos llegando con sus jarras.',
      'It all started with a big pot, slow-toasted rice and neighbors arriving with their pitchers.',
      lang
    ),
    bg: C.cream, fg: C.navyDeep
  },
  {
    year: '2010',
    title: t('La receta', 'The recipe', lang),
    body: t(
      'La receta pasa de generación en generación. Lo que era casero se convierte en un pequeño negocio local.',
      'The recipe passes from hand to hand. What was homemade becomes a small neighborhood business.',
      lang
    ),
    bg: C.lime, fg: C.navyDeep
  },
  {
    year: '2024',
    title: t('La lata', 'The can', lang),
    body: t(
      'Enlatamos sin sacrificar ni un gramo de sabor. La misma receta, ahora lista para llevar.',
      'We can it without sacrificing an ounce of flavor. Same recipe, now ready to go.',
      lang
    ),
    bg: C.red, fg: C.white
  },
  {
    year: t('hoy', 'today', lang),
    title: t('La región', 'The region', lang),
    body: t(
      'Hoy llegamos a supermercados, restaurantes y tiendas en toda Centroamérica.',
      'Today we reach supermarkets, restaurants and stores across Central America.',
      lang
    ),
    bg: C.navyDeep, fg: C.white
  }];


  const values = [
  {
    title: t('Recetas reales', 'Real recipes', lang),
    body: t(
      'Sin atajos. Sin saborizantes raros. Solo lo que la abuelita usaría.',
      'No shortcuts. No weird flavorings. Only what grandma would use.',
      lang
    )
  },
  {
    title: t('Hecho a mano', 'Handmade', lang),
    body: t(
      'Cada batch se prueba antes de salir sino sabe a tradición no lo enlatamos.',
      'Every batch is tasted before it ships. If we wouldn\u2019t drink it, we don\u2019t can it.',
      lang
    )
  },
  {
    title: t('Fácil para tomar', 'Ready to drink', lang),
    body: t(
      'Lista de tomar, lista de llevar, lista para degustar.',
      'We work with local producers and distribute across Central America.',
      lang
    )
  }];


  return (
    <>
      <FolkStrip bg={C.red} fg={C.white} text={t('NUESTRA HISTORIA', 'OUR STORY', lang)} />

      <PageBanner
        kicker={t('Nosotros', 'About us', lang)}
        accentDot={C.lime}
        accent={C.red}
        aside={<LogoBadge />}
        wideAside
        lead={t(
          'Empezamos donde todos los buenos sabores empiezan: en una cocina, con paciencia y con gente que se queda hasta repetir.',
          'We started where every good flavor starts: in a kitchen, with patience and people who stay for seconds.',
          lang
        )}>
        
        <span style={{ color: C.white }}>{t('La receta', 'The recipe', lang)}</span><br />
        <span style={{ color: C.red, display: 'inline-block', transform: 'rotate(-1deg)' }}>{t('de', 'of', lang)}</span>{' '}
        <span style={{ color: C.lime }}>{t('mi abuelita', 'my grandma', lang)}.</span>
      </PageBanner>

      <FolkStrip bg={C.lime} fg={C.navyDeep} text={t('TRADICIÓN HECHA BEBIDA', 'TRADITION IN A CAN', lang)} />

      {/* TIMELINE */}
      <Reveal>
      <section style={{ background: C.cream, padding: '110px 56px' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{
              fontFamily: display, fontSize: '0.85rem', fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: C.red, marginBottom: 14
            }}>✦ {t('DE LA COCINA AL PAÍS', 'FROM KITCHEN TO COUNTRY', lang)} ✦</div>
          <h2 style={{
              fontFamily: display, fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800,
              textTransform: 'uppercase', margin: 0, letterSpacing: '-0.02em',
              color: C.navyDeep, lineHeight: 0.92
            }}>
            {t('Cinco décadas.', 'Five decades.', lang)}{' '}
            <span style={{ color: C.red }}>{t('Una receta.', 'One recipe.', lang)}</span>
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {milestones.map((m, i) =>
            <div key={i} style={{
              background: m.bg, color: m.fg, borderRadius: 24,
              padding: '40px 36px', border: `4px solid ${C.navyDeep}`,
              minHeight: 260, display: 'flex', flexDirection: 'column'
            }}>
              <div style={{
                fontFamily: display, fontWeight: 700,
                letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.7, fontSize: "0.85rem"
              }}>{m.year}</div>
              <h3 style={{
                fontFamily: display, fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', lineHeight: 1, fontWeight: 800,
                margin: '14px 0 18px', textTransform: 'uppercase', letterSpacing: '-0.02em'
              }}>{m.title}</h3>
              <p style={{ fontFamily: sans, lineHeight: 1.7, margin: 0, fontSize: 'clamp(1.1rem, 1.4vw, 1.25rem)' }}>{m.body}</p>
            </div>
            )}
        </div>
      </section>
      </Reveal>

      {/* VALUES */}
      <Reveal>
      <section style={{ background: C.navy, color: C.white, padding: '110px 56px', borderTop: `8px solid ${C.red}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.42fr 0.58fr', gap: 60, alignItems: 'flex-start' }}>
          <div>
            <div style={{
                fontFamily: display, fontWeight: 700,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: C.lime, marginBottom: 18, fontSize: "0.85rem"
              }}>✦ {t('NUESTRA RECETA', 'OUR RECIPE', lang)}</div>
            <h2 style={{
                fontFamily: display, fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800,
                textTransform: 'uppercase', margin: 0, letterSpacing: '-0.02em',
                lineHeight: 0.9
              }}>
              {t('Lo que nos', 'What')}<br />
              <span style={{ color: C.lime }}>{t('Mueve.', 'moves us.', lang)}</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            {values.map((v, i) =>
              <div key={i} style={{
                background: 'rgba(255,255,255,0.06)', borderRadius: 16,
                padding: '28px 30px', borderLeft: `6px solid ${C.lime}`
              }}>
                <div style={{
                  fontFamily: display, fontWeight: 700,
                  letterSpacing: '0.22em', textTransform: 'uppercase',
                  color: C.lime, marginBottom: 8, fontSize: "0.85rem"
                }}>0{i + 1}</div>
                <h3 style={{ fontFamily: display, fontSize: 'clamp(1.5rem, 2.2vw, 1.9rem)', fontWeight: 800, margin: 0, textTransform: 'uppercase', letterSpacing: '-0.01em' }}>{v.title}</h3>
                <p style={{ fontFamily: sans, lineHeight: 1.7, margin: '10px 0 0', opacity: 0.85, fontSize: 'clamp(1.1rem, 1.4vw, 1.25rem)' }}>{v.body}</p>
              </div>
              )}
          </div>
        </div>
      </section>
      </Reveal>
    </>);

}

// ────────────────────────────────────────────────────────────
// PRODUCTOS
// ────────────────────────────────────────────────────────────

function ProductDetail({ lang, product, image, side, theme }) {
  const C = FOLK;
  const display = FOLK_DISPLAY;
  const sans = FOLK_SANS;

  const imgBlock =
  <div style={{ position: 'relative', minWidth: 0 }}>
      <img src={image} alt=""
    style={{
      width: '100%', height: 560, objectFit: 'contain',
      borderRadius: 24, display: 'block',
      border: `4px solid ${theme.border}`, background: '#ffffff'
    }} />
    </div>;


  const textBlock =
  <div>
      <span style={{
      fontFamily: display, fontWeight: 700,
      letterSpacing: '0.2em', textTransform: 'uppercase',
      background: theme.badgeBg, color: theme.badgeFg, padding: '8px 16px', borderRadius: 999, fontSize: "0.85rem"
    }}>{product.kicker} · 330ML</span>
      <h2 style={{
      fontFamily: display, fontWeight: 800, fontSize: 'clamp(3rem, 8vw, 6rem)',
      lineHeight: 0.88, margin: '24px 0 0', textTransform: 'uppercase',
      letterSpacing: '-0.02em', color: theme.headlineFg
    }}>
        {product.titleA}<br />
        <span style={{
        color: theme.headlineAccent,
        fontStyle: 'italic', textTransform: 'lowercase', fontSize: 'clamp(1.6rem, 4vw, 2.6rem)',
        ...(product.titleBStyle || {})
      }}>{product.titleB}</span>
      </h2>
      <p style={{
      fontFamily: sans, lineHeight: 1.7, maxWidth: 480,
      marginTop: 24, color: theme.bodyFg, opacity: 0.9, fontSize: 'clamp(1.1rem, 1.4vw, 1.25rem)'
    }}>{product.desc}</p>

      <div style={{ marginTop: 28 }}>
        <div style={{
        fontFamily: display, fontSize: '0.85rem', fontWeight: 700,
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: theme.eyebrow, marginBottom: 12
      }}>{t('Ingredientes', 'Ingredients', lang)}</div>
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
          {product.notes.map((n, i) =>
        <span key={i} style={{
          fontFamily: display, fontSize: '0.8rem', fontWeight: 700,
          letterSpacing: '0.12em', textTransform: 'uppercase',
          border: `2px solid ${theme.chip}`, color: theme.headlineFg,
          padding: '8px 14px', borderRadius: 999
        }}>{n}</span>
        )}
        </div>
      </div>

      <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
        {product.specs.map((s, i) =>
      <div key={i} style={{
        background: theme.specBg, color: theme.specFg, borderRadius: 14,
        padding: '18px 18px', border: `2px solid ${theme.specBorder}`
      }}>
            <div style={{ fontFamily: display, fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.7 }}>{s.label}</div>
            <div style={{ fontFamily: display, fontSize: 22, fontWeight: 800, marginTop: 6 }}>{s.value}</div>
          </div>
      )}
      </div>
    </div>;


  return (
    <div style={{
      background: theme.bg, color: theme.headlineFg,
      padding: '90px 56px', position: 'relative', overflow: 'hidden',
      borderTop: `8px solid ${theme.borderTop}`
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `radial-gradient(circle, ${theme.dotColor} 30%, transparent 31%)`,
        backgroundSize: '50px 50px'
      }} />
      <Reveal style={{
        position: 'relative',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center'
      }}>
        {side === 'left' ? <>{imgBlock}{textBlock}</> : <>{textBlock}{imgBlock}</>}
      </Reveal>
    </div>);

}

function PageProductos({ lang }) {
  const C = FOLK;
  const display = FOLK_DISPLAY;
  const sans = FOLK_SANS;

  const horchata = {
    kicker: t('SABOR 01', 'FLAVOR 01', lang),
    titleA: t('Horchata', 'Horchata', lang),
    titleB: t('con canela', 'with cinnamon', lang),
    desc: t(COPY.products[0].desc.es, COPY.products[0].desc.en, lang),
    notes: lang === 'en' ? COPY.products[0].notesEn : COPY.products[0].notes,
    specs: [
    { label: t('Volumen', 'Volume', lang), value: '330 ml' },
    { label: t('Calorías', 'Calories', lang), value: '128 kcal' },
    { label: t('Servir', 'Serve', lang), value: t('Bien frío', 'Ice-cold', lang) }]

  };

  const guanabana = {
    kicker: t('SABOR 02', 'FLAVOR 02', lang),
    titleA: t('Guaná', 'Sour', lang),
    titleB: t('bana', 'sop', lang),
    titleBStyle: { fontStyle: 'normal', textTransform: 'uppercase', fontSize: 'clamp(3rem, 8vw, 6rem)', color: C.navyDeep },
    desc: t(COPY.products[1].desc.es, COPY.products[1].desc.en, lang),
    notes: lang === 'en' ? COPY.products[1].notesEn : COPY.products[1].notes,
    specs: [
    { label: t('Volumen', 'Volume', lang), value: '330 ml' },
    { label: t('Calorías', 'Calories', lang), value: '142 kcal' },
    { label: t('Servir', 'Serve', lang), value: t('Bien frío', 'Ice-cold', lang) }]

  };

  const horchataTheme = {
    bg: C.navy, headlineFg: C.white, bodyFg: C.white,
    headlineAccent: C.red, badgeBg: C.red, badgeFg: C.white,
    eyebrow: C.lime, chip: C.white,
    specBg: 'rgba(255,255,255,0.06)', specFg: C.white, specBorder: 'rgba(255,255,255,0.2)',
    border: C.white, borderTop: C.red, dotColor: 'rgba(255,255,255,0.05)'
  };
  const guanabanaTheme = {
    bg: C.lime, headlineFg: C.navyDeep, bodyFg: C.navyDeep,
    headlineAccent: C.navyDeep, badgeBg: C.navyDeep, badgeFg: C.white,
    eyebrow: C.red, chip: C.navyDeep,
    specBg: 'rgba(0,0,0,0.05)', specFg: C.navyDeep, specBorder: `${C.navyDeep}33`,
    border: C.navyDeep, borderTop: C.navyDeep, dotColor: 'rgba(0,0,0,0.05)'
  };

  return (
    <>
      <FolkStrip bg={C.red} fg={C.white} text={t('NUESTROS SABORES', 'OUR FLAVORS', lang)} />

      <PageBanner
        kicker={t('Productos', 'Products', lang)}
        media="assets/latas-hielo-crop.png"
        wideAside
        lead={t(
          'Dos sabores, una receta. Hechos con ingredientes reales y enlatados para llegar a donde vayan.',
          'Two flavors, one recipe. Made with real ingredients and canned to arrive cold wherever they go.',
          lang
        )}>
        
        <span style={{ color: C.white }}>{t('Dos sabores.', 'Two flavors.', lang)}</span><br />
        <span style={{ color: C.lime }}>{t('Un origen.', 'One origin.', lang)}</span>
      </PageBanner>

      <FolkStrip bg={C.lime} fg={C.navyDeep} text={t('330 ML · CON INGREDIENTES NATURALES', '330 ML · WITH NATURAL INGREDIENTS', lang)} />

      <ProductDetail lang={lang} product={horchata} image="assets/horchata-can-w.png" side="right" theme={horchataTheme} />
      <ProductDetail lang={lang} product={guanabana} image="assets/guanabana-can-w.png" side="left" theme={guanabanaTheme} />

      {/* COMING SOON */}
      <Reveal>
      <section style={{ background: C.cream, padding: '110px 56px' }}>
        <div style={{ textAlign: 'center' }}>
          <div style={{
              fontFamily: display, fontSize: '0.85rem', fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: C.red, marginBottom: 14
            }}>✦ {t('PRÓXIMAMENTE', 'COMING SOON', lang)} ✦</div>
          <h2 style={{
              fontFamily: display, fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800,
              textTransform: 'uppercase', margin: 0, letterSpacing: '-0.02em',
              color: C.navyDeep, lineHeight: 0.92
            }}>
            {t('Más recetas', 'More recipes', lang)}<br />
            <span style={{ color: C.red }}>{t('en camino.', 'on the way.', lang)}</span>
          </h2>
        </div>
      </section>
      </Reveal>
    </>);

}

// ────────────────────────────────────────────────────────────
// DISTRIBUIDORES
// ────────────────────────────────────────────────────────────

function PageDistribuidores({ lang }) {
  const C = FOLK;
  const display = FOLK_DISPLAY;
  const sans = FOLK_SANS;

  const steps = [
  { n: '01', t: t('Contactanos', 'Get in touch', lang), b: t('Mándanos un mensaje con tu negocio, ubicación y cuántas cajas necesitás.', 'Send us a message with your business, location and how many cases you need.', lang) },
  { n: '02', t: t('Cotización', 'Quote', lang), b: t('Te respondemos con condiciones, precios mayoristas y tiempo de entrega.', 'We reply with terms, wholesale pricing and delivery times.', lang) },
  { n: '03', t: t('Entrega', 'Delivery', lang), b: t('Coordinamos entrega directa a tu local o bodega. Sin intermediarios.', 'We coordinate direct delivery to your venue or warehouse. No middlemen.', lang) }];


  const tiers = [
  {
    tag: t('TIENDA', 'RETAIL', lang),
    title: t('Caja chica', 'Starter case', lang),
    qty: '24',
    qtyLabel: t('latas / caja', 'cans / case', lang),
    lines: [
    t('Mínimo 5 cajas', 'Minimum 5 cases', lang),
    t('2 sabores a elegir', '2 flavors to choose', lang),
    t('Entrega 5–7 días', 'Delivery 5–7 days', lang)],

    bg: C.cream, fg: C.navyDeep, accent: C.red
  },
  {
    tag: t('NEGOCIO', 'BUSINESS', lang),
    title: t('Caja mayor', 'Wholesale case', lang),
    qty: '1,200',
    qtyLabel: t('latas / pack', 'cans / pack', lang),
    lines: [
    t('Precio preferencial', 'Preferred pricing', lang),
    t('Mix libre de sabores', 'Free flavor mix', lang),
    t('Entrega 3 días', 'Delivery 3 days', lang),
    t('Material POP incluido', 'POP material included', lang)],

    bg: C.red, fg: C.white, accent: C.lime,
    featured: true
  },
  {
    tag: t('CADENA', 'CHAIN', lang),
    title: t('Por palet', 'By pallet', lang),
    qty: '3,600',
    qtyLabel: t('latas / palet', 'cans / pallet', lang),
    lines: [
    t('Contrato anual', 'Annual contract', lang),
    t('Logística dedicada', 'Dedicated logistics', lang),
    t('Co-branding disponible', 'Co-branding available', lang)],

    bg: C.navyDeep, fg: C.white, accent: C.lime
  }];


  return (
    <>
      <FolkStrip bg={C.red} fg={C.white} text={t('PARA TU NEGOCIO', 'FOR YOUR BUSINESS', lang)} />

      <PageBanner
        kicker={t('Distribuidores', 'Wholesale', lang)}
        accentDot={C.red}
        accent={C.lime}
        aside={<CentralAmericaMap />}
        lead={t(
          'Distribuimos a supermercados, restaurantes y tiendas en toda Centroamérica. Pedidos por caja, condiciones para mayoristas y entrega directa.',
          'We distribute to supermarkets, restaurants and stores across Central America. Case orders, wholesale terms and direct delivery.',
          lang
        )}>
        
        <span style={{ color: C.white }}>{t('Llevamos', 'We bring')},</span><br />
        <span style={{ color: C.red }}>{t('nuestra receta', 'our recipe', lang)}</span>{' '}
        <span style={{ color: C.lime }}>{t('a tu negocio', 'to your business', lang)}.</span>
      </PageBanner>

      <FolkStrip bg={C.lime} fg={C.navyDeep} text={t('PEDIDOS POR MAYOR', 'WHOLESALE ORDERS', lang)} />

      {/* TIERS */}
      <Reveal>
      <section style={{ background: C.cream, padding: '110px 56px' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div style={{
              fontFamily: display, fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: C.red, marginBottom: 14, fontSize: "0.85rem"
            }}>✦ {t('TRES MANERAS DE PEDIR', 'THREE WAYS TO ORDER', lang)} ✦</div>
          <h2 style={{
              fontFamily: display, fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800,
              textTransform: 'uppercase', margin: 0, letterSpacing: '-0.02em',
              color: C.navyDeep, lineHeight: 0.92
            }}>
            {t('Elegí tu', 'Pick your', lang)}{' '}
            <span style={{ color: C.red, background: C.navyDeep, padding: '0 18px' }}>{t('caja', 'case', lang)}</span>.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {tiers.map((tier, i) =>
            <div key={i} style={{
              background: tier.bg, color: tier.fg, borderRadius: 24,
              padding: '36px 32px', border: `4px solid ${C.navyDeep}`,
              transform: tier.featured ? 'translateY(-12px)' : 'none',
              boxShadow: tier.featured ? '0 24px 40px -20px rgba(0,0,0,0.35)' : 'none',
              display: 'flex', flexDirection: 'column', gap: 18
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ ...{
                    fontFamily: display, fontWeight: 800,
                    letterSpacing: '0.2em', textTransform: 'uppercase',
                    background: tier.accent, color: tier.bg === tier.accent ? tier.fg : C.navyDeep,
                    padding: '6px 12px', borderRadius: 999, fontSize: "0.85rem"
                  }, background: "rgb(229, 71, 29)" }}>{tier.tag}</span>
                {tier.featured &&
                <span style={{
                  fontFamily: display, fontSize: 16, fontWeight: 800,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: tier.fg, opacity: 0.85
                }}>{t('★ Popular', '★ Popular', lang)}</span>
                }
              </div>
              <div>
                <div style={{
                  fontFamily: display, fontSize: 'clamp(3.5rem, 6vw, 5rem)', fontWeight: 800,
                  lineHeight: 1, letterSpacing: '-0.04em'
                }}>{tier.qty}</div>
                <div style={{
                  fontFamily: display, fontWeight: 700,
                  letterSpacing: '0.2em', textTransform: 'uppercase', opacity: 0.7, marginTop: 4, fontSize: "0.85rem"
                }}>{tier.qtyLabel}</div>
              </div>
              <h3 style={{
                fontFamily: display, fontSize: 'clamp(1.6rem, 2.4vw, 2rem)', fontWeight: 800,
                margin: 0, textTransform: 'uppercase', letterSpacing: '-0.02em'
              }}>{tier.title}</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>
                {tier.lines.map((line, j) =>
                <li key={j} style={{
                  fontFamily: sans, lineHeight: 1.4,
                  display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: "0.85rem"
                }}>
                    <span style={{ color: tier.accent, fontFamily: display, fontWeight: 800 }}>✦</span>
                    {line}
                  </li>
                )}
              </ul>
              <button onClick={() => window.open(LINKS.whatsapp, '_blank', 'noopener')} style={{
                marginTop: 'auto',
                background: tier.bg === C.cream ? C.navyDeep : C.white,
                color: tier.bg === C.cream ? C.white : C.navyDeep,
                border: 0, padding: '14px 22px', borderRadius: 999,
                fontFamily: display, fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: "0.85rem"
              }}>{t('Cotizar', 'Get quote', lang)} {Icon.arrow(14, tier.bg === C.cream ? C.white : C.navyDeep)}</button>
            </div>
            )}
        </div>
      </section>
      </Reveal>

      {/* HOW IT WORKS */}
      <Reveal>
      <section style={{ background: C.navy, color: C.white, padding: '110px 56px', borderTop: `8px solid ${C.lime}` }}>
        <div style={{
            fontFamily: display, fontSize: '0.85rem', fontWeight: 700,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: C.lime, marginBottom: 18
          }}>✦ {t('CÓMO FUNCIONA', 'HOW IT WORKS', lang)}</div>
        <h2 style={{
            fontFamily: display, fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800,
            textTransform: 'uppercase', margin: 0, letterSpacing: '-0.02em',
            lineHeight: 0.9, marginBottom: 50
          }}>
          {t('Tres pasos.', 'Three steps.', lang)}{' '}
          <span style={{ color: C.lime }}>{t('Sin vueltas.', 'No fuss.', lang)}</span>
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {steps.map((s, i) =>
            <div key={i} style={{
              borderTop: `4px solid ${C.lime}`, paddingTop: 24
            }}>
              <div style={{
                fontFamily: display, fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 800,
                color: C.lime, lineHeight: 0.9, letterSpacing: '-0.04em'
              }}>{s.n}</div>
              <h3 style={{ fontFamily: display, fontSize: 'clamp(1.6rem, 2.4vw, 2rem)', fontWeight: 800, margin: '16px 0 12px', textTransform: 'uppercase', letterSpacing: '-0.02em' }}>{s.t}</h3>
              <p style={{ fontFamily: sans, lineHeight: 1.7, margin: 0, opacity: 0.85, fontSize: 'clamp(1.1rem, 1.4vw, 1.25rem)' }}>{s.b}</p>
            </div>
            )}
        </div>
      </section>
      </Reveal>

      {/* COVERAGE */}
      <Reveal>
      <section style={{ background: C.lime, color: C.navyDeep, padding: '90px 56px', borderTop: `8px solid ${C.navyDeep}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.45fr 0.55fr', gap: 60, alignItems: 'center' }}>
          <h2 style={{
              fontFamily: display, fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800,
              textTransform: 'uppercase', margin: 0, letterSpacing: '-0.02em',
              lineHeight: 0.9
            }}>
            {t('Cubrimos', 'We cover', lang)}<br />
            <span style={{ color: C.red }}>{t('Centroamérica', 'Central America', lang)}.</span>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 12 }}>
            {['El Salvador', 'Guatemala', 'Honduras', 'Nicaragua', 'Costa Rica', 'Panamá'].map((country, i) =>
              <div key={i} style={{
                background: C.navyDeep, color: C.white, borderRadius: 12,
                padding: '18px 22px',
                fontFamily: display, fontSize: '0.95rem', fontWeight: 700,
                letterSpacing: '0.06em', textTransform: 'uppercase',
                display: 'flex', alignItems: 'center', justifyContent: 'space-between'
              }}>
                {country}
                <span style={{ color: C.lime, fontSize: 16 }}>●</span>
              </div>
              )}
          </div>
        </div>
      </section>
      </Reveal>
    </>);

}

// ────────────────────────────────────────────────────────────
// CONTACTO
// ────────────────────────────────────────────────────────────

// Paste your real Formspree form ID here (create the form at formspree.io using
// servicioalcliente@delaabuelita.com). It looks like: https://formspree.io/f/abcdwxyz
const FORMSPREE_ENDPOINT = 'https://formspree.io/f/mgojnwor';

function PageContacto({ lang }) {
  const C = FOLK;
  const display = FOLK_DISPLAY;
  const sans = FOLK_SANS;
  const [status, setStatus] = React.useState('idle'); // idle | sending | ok | error

  const channels = [
  { icon: Icon.whatsapp, label: 'WhatsApp', value: COPY.whatsappLines[0].label, bg: C.lime, fg: C.navyDeep, href: COPY.whatsappLines[0].href, sub: t('Pedidos rápidos · lun–vie', 'Quick orders · Mon–Fri', lang) },
  { icon: Icon.whatsapp, label: 'WhatsApp', value: COPY.whatsappLines[1].label, bg: C.white, fg: C.navyDeep, href: COPY.whatsappLines[1].href, sub: t('Línea alterna · lun–vie', 'Alternate line · Mon–Fri', lang) },
  { icon: Icon.phone, label: t('Teléfono', 'Phone', lang), value: COPY.whatsappLines[0].label, bg: C.navyDeep, fg: C.white, href: LINKS.phone, sub: t('8:00 – 17:00', '8:00 – 17:00', lang) },
  { icon: Icon.mail, label: t('Correo', 'Email', lang), value: COPY.email, bg: C.white, fg: C.navyDeep, href: LINKS.email, sub: t('Acuerdos comerciales', 'Commercial agreements', lang) }];


  return (
    <>
      <FolkStrip bg={C.red} fg={C.white} text={t('HABLEMOS', 'LET\u2019S TALK', lang)} />

      <PageBanner
        kicker={t('Contacto', 'Contact', lang)}
        accentDot={C.lime}
        accent={C.red}
        aside={<LogoBadge />}
        wideAside
        lead={t(
          'Escribinos por WhatsApp para pedidos rápidos o por correo para acuerdos comerciales. Te respondemos el mismo día.',
          'Message us on WhatsApp for quick orders, or email us for commercial agreements. We reply same-day.',
          lang
        )}>
        
        <span style={{ color: C.white }}>{t('Mandanos', 'Drop us', lang)}</span><br />
        <span style={{ color: C.lime }}>{t('un mensaje', 'a line', lang)}.</span>
      </PageBanner>

      <FolkStrip bg={C.lime} fg={C.navyDeep} text={t('SERVICIO AL CLIENTE', 'CUSTOMER SERVICE', lang)} />

      {/* CHANNELS */}
      <Reveal>
      <section style={{ background: C.red, color: C.white, padding: '90px 56px', borderTop: `8px solid ${C.lime}` }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.4fr 0.6fr', gap: 60, alignItems: 'flex-start' }}>
          <div>
            <div style={{
                fontFamily: display, fontSize: '0.85rem', fontWeight: 700,
                letterSpacing: '0.22em', textTransform: 'uppercase',
                color: C.lime, marginBottom: 18
              }}>✦ {t('CUATRO CANALES', 'FOUR CHANNELS', lang)}</div>
            <h2 style={{
                fontFamily: display, fontSize: 'clamp(3rem, 8vw, 6rem)', fontWeight: 800,
                textTransform: 'uppercase', margin: 0, letterSpacing: '-0.02em',
                lineHeight: 0.9
              }}>
              {t('Elegí', 'Pick', lang)}<br />
              <span style={{ color: C.navyDeep }}>{t('por dónde', 'your channel', lang)}.</span>
            </h2>
            <div style={{ display: 'flex', gap: 10, marginTop: 32 }}>
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
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {channels.map((row, i) =>
              <a key={i} href={row.href} target={row.href.startsWith('http') ? '_blank' : undefined} rel={row.href.startsWith('http') ? 'noopener noreferrer' : undefined} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '24px 28px', background: row.bg, color: row.fg, borderRadius: 18,
                textDecoration: 'none'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
                  {row.icon(28, row.fg)}
                  <div>
                    <div style={{ fontFamily: display, fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: 0.7 }}>{row.label}</div>
                    <div style={{ fontFamily: display, fontSize: 28, fontWeight: 800, marginTop: 4 }}>{row.value}</div>
                    <div style={{ fontFamily: sans, fontSize: 16, marginTop: 4, opacity: 0.7 }}>{row.sub}</div>
                  </div>
                </div>
                {Icon.arrow(20, row.fg)}
              </a>
              )}
          </div>
        </div>
      </section>
      </Reveal>

      {/* FORM + INFO */}
      <Reveal>
      <section style={{ background: C.cream, padding: '110px 56px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '0.6fr 0.4fr', gap: 60 }}>
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
              }}>{t('Contanos qué necesitás.', 'Tell us what you need.', lang)}</h2>

            <form method="POST" action={FORMSPREE_ENDPOINT} onSubmit={async (e) => {
                e.preventDefault();
                const form = e.target;
                const data = new FormData(form);
                data.set('_replyto', (data.get('correo') || '').toString());
                setStatus('sending');
                try {
                  const res = await fetch(FORMSPREE_ENDPOINT, {
                    method: 'POST',
                    body: data,
                    headers: { Accept: 'application/json' }
                  });
                  if (res.ok) {
                    setStatus('ok');
                    form.reset();
                  } else {
                    setStatus('error');
                  }
                } catch (err) {
                  setStatus('error');
                }
              }} style={{
                marginTop: 32, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16
              }}>
              <input type="hidden" name="_subject" value="Contacto web — De La Abuelita" />
              <FolkField name="nombre" label={t('Nombre', 'Name', lang)} placeholder={t('Tu nombre', 'Your name', lang)} required />
              <FolkField name="negocio" label={t('Negocio', 'Business', lang)} placeholder={t('Tu negocio', 'Your business', lang)} />
              <FolkField name="correo" label={t('Correo', 'Email', lang)} placeholder="hola@ejemplo.com" type="email" required />
              <FolkField name="telefono" label={t('Teléfono', 'Phone', lang)} placeholder="+503 0000-0000" />
              <div style={{ gridColumn: '1 / -1' }}>
                <FolkField
                    name="mensaje"
                    label={t('Mensaje', 'Message', lang)}
                    placeholder={t('Contanos qué buscás, cuántas cajas y dónde estás.', 'Tell us what you need, how many cases and where you are.', lang)}
                    textarea required />
                
              </div>
              <div style={{ gridColumn: '1 / -1', display: 'flex', alignItems: 'center', gap: 16 }}>
                <button type="submit" disabled={status === 'sending'} style={{
                    background: C.navyDeep, color: C.white, border: 0,
                    padding: '18px 30px', borderRadius: 999,
                    fontFamily: display, fontWeight: 700, fontSize: 16,
                    letterSpacing: '0.08em', textTransform: 'uppercase',
                    cursor: status === 'sending' ? 'wait' : 'pointer', opacity: status === 'sending' ? 0.7 : 1,
                    display: 'inline-flex', alignItems: 'center', gap: 10
                  }}>
                  {status === 'sending' ? t('Enviando…', 'Sending…', lang) : t('Enviar mensaje', 'Send message', lang)} {Icon.arrow(16, C.white)}
                </button>
                <span style={{ fontFamily: sans, fontSize: 16, color:
                    status === 'ok' ? '#2f7d32' : status === 'error' ? C.red : `${C.navyDeep}99` }}>
                  {status === 'ok'
                    ? t('¡Gracias! Tu mensaje fue enviado.', 'Thanks! Your message was sent.', lang)
                    : status === 'error'
                    ? t('No se pudo enviar. Intentá de nuevo o escribínos por WhatsApp.', 'Couldn’t send. Try again or reach us on WhatsApp.', lang)
                    : t('Respondemos en 24 h hábiles.', 'We reply within 24h.', lang)}
                </span>
              </div>
            </form>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <InfoCard
                title={t('Horario', 'Hours', lang)}
                rows={[
                { k: t('Lun–Vie', 'Mon–Fri', lang), v: '8:00 – 17:00' },
                { k: t('Sábado', 'Saturday', lang), v: '9:00 – 13:00' },
                { k: t('Domingo', 'Sunday', lang), v: t('Cerrado', 'Closed', lang) }]
                }
                bg={C.navyDeep} fg={C.white} accent={C.lime} />
            
            <InfoCard
                title={t('Oficinas', 'Offices', lang)}
                rows={[
                { k: t('Bodega', 'Warehouse', lang), v: 'San Salvador, SV' },
                { k: t('Ventas', 'Sales', lang), v: 'El Salvador . Guatemala' }]
                }
                bg={C.lime} fg={C.navyDeep} accent={C.red} />
            
            <div style={{
                background: C.red, color: C.white, borderRadius: 18,
                padding: '24px 26px', border: `2px solid ${C.navyDeep}`
              }}>
              <div style={{ fontFamily: display, fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: 0.85 }}>
                {t('Prensa', 'Press', lang)}
              </div>
              <div style={{ fontFamily: display, fontSize: 22, fontWeight: 800, marginTop: 6 }}>Hola@delaabuelita.com

              </div>
            </div>
          </div>
        </div>
      </section>
      </Reveal>
    </>);

}

function FolkField({ label, placeholder, type = 'text', textarea = false, name, required = false }) {
  const C = FOLK;
  const display = FOLK_DISPLAY;
  const sans = FOLK_SANS;
  const baseStyle = {
    width: '100%', padding: '16px 18px',
    border: `2px solid ${C.navyDeep}`,
    borderRadius: 14, background: C.white, color: C.navyDeep,
    fontFamily: sans, fontSize: 16, outline: 'none',
    resize: textarea ? 'vertical' : 'none',
    minHeight: textarea ? 140 : undefined
  };
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <span style={{
        fontFamily: display, fontSize: '0.85rem', fontWeight: 700,
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: C.navyDeep
      }}>{label}</span>
      {textarea ?
      <textarea name={name} required={required} placeholder={placeholder} style={baseStyle} /> :
      <input name={name} required={required} type={type} placeholder={placeholder} style={baseStyle} />}
    </label>);

}

function InfoCard({ title, rows, bg, fg, accent }) {
  const display = FOLK_DISPLAY;
  const sans = FOLK_SANS;
  return (
    <div style={{
      background: bg, color: fg, borderRadius: 18, padding: '24px 26px',
      border: `2px solid ${FOLK.navyDeep}`
    }}>
      <div style={{
        fontFamily: display, fontSize: '0.85rem', fontWeight: 700,
        letterSpacing: '0.22em', textTransform: 'uppercase',
        color: accent, marginBottom: 12
      }}>✦ {title}</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {rows.map((r, i) =>
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontFamily: sans, fontSize: 16, opacity: 0.75 }}>{r.k}</span>
            <span style={{ fontFamily: display, fontSize: 16, fontWeight: 700 }}>{r.v}</span>
          </div>
        )}
      </div>
    </div>);

}

window.PageNosotros = PageNosotros;
window.PageProductos = PageProductos;
window.PageDistribuidores = PageDistribuidores;
window.PageContacto = PageContacto;
window.FolkField = FolkField;