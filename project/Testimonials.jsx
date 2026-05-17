/* global React */

// =================================================================
// TESTIMONIALS — featured + 3 small.
// =================================================================
const tStyles = {
  wrap: { background: 'var(--bg-2)', padding: '96px 0 96px' },
  inner: { maxWidth: 1240, margin: '0 auto', padding: '0 32px' },
  header: { display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 32, marginBottom: 48, flexWrap: 'wrap' },
  headLeft: { maxWidth: 620 },
  overline: {
    fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase',
    color: 'var(--oscar-blue)', fontWeight: 700, marginBottom: 16,
    display: 'inline-flex', alignItems: 'center', gap: 12,
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontSize: 44, lineHeight: 1.08, letterSpacing: '-0.02em', fontWeight: 800,
    color: 'var(--oscar-navy)', margin: '0 0 16px', textWrap: 'balance',
  },
  ratingStrip: {
    display: 'flex', alignItems: 'center', gap: 14,
    padding: '14px 20px',
    background: '#fff', border: '1px solid var(--line-1)', borderRadius: 'var(--radius-md)',
    boxShadow: 'var(--shadow-1)',
  },
  rNum: { fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 800, color: 'var(--oscar-navy)', lineHeight: 1, letterSpacing: '-0.02em' },
  rLabel: { fontSize: 12, color: 'var(--oscar-ink-3)', lineHeight: 1.3, letterSpacing: '0.04em', textTransform: 'uppercase', fontWeight: 600 },

  grid: { display: 'grid', gridTemplateColumns: '7fr 5fr', gap: 20 },
  featured: {
    position: 'relative',
    background: 'linear-gradient(135deg, #1E3A5F 0%, #264A78 100%)',
    color: '#fff',
    borderRadius: 'var(--radius-xl)',
    padding: '40px 40px 36px',
    overflow: 'hidden',
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    minHeight: 460,
  },
  featuredQuoteMark: {
    fontFamily: 'var(--font-display)',
    fontSize: 96, lineHeight: 0.6,
    color: '#6B95C2', fontWeight: 800, opacity: 0.65, marginBottom: 8,
  },
  featuredQuote: {
    fontFamily: 'var(--font-display)',
    fontSize: 28, lineHeight: 1.28, fontWeight: 600,
    color: '#fff', letterSpacing: '-0.01em',
    margin: '0 0 36px',
    textWrap: 'balance', maxWidth: 540,
  },
  featuredFoot: { display: 'flex', alignItems: 'center', gap: 16, position: 'relative', zIndex: 2 },
  fName: { fontSize: 16, fontWeight: 700, color: '#fff', margin: 0, lineHeight: 1.3 },
  fMeta: { fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#B8CCDF', fontWeight: 600, marginTop: 4 },

  smallCol: { display: 'flex', flexDirection: 'column', gap: 20 },
  smallCard: {
    background: '#fff',
    border: '1px solid var(--line-1)',
    borderRadius: 'var(--radius-xl)',
    padding: '24px 24px',
    boxShadow: 'var(--shadow-1)',
    flex: 1,
    display: 'flex', flexDirection: 'column', gap: 14,
    transition: 'all 240ms var(--ease-out)',
  },
  sQuote: { fontSize: 15, lineHeight: 1.55, color: 'var(--oscar-ink-2)', margin: 0, fontWeight: 500 },
  sFoot: { display: 'flex', alignItems: 'center', gap: 12, marginTop: 'auto', paddingTop: 8 },
  sName: { fontSize: 14, fontWeight: 700, color: 'var(--oscar-navy)', margin: 0, lineHeight: 1.3 },
  sMeta: { fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--oscar-ink-3)', fontWeight: 600, marginTop: 2 },
};

function StarsRow({ light }) {
  return (
    <div className="os-stars" style={{ color: light ? '#9AB6D5' : 'var(--oscar-blue)' }}>
      {[0,1,2,3,4].map(i => (
        <i key={i} data-lucide="star" style={{ width: 14, height: 14, fill: 'currentColor', strokeWidth: 0 }}></i>
      ))}
    </div>
  );
}

function Testimonials({ copy }) {
  const featured = copy.featured;
  return (
    <section id="testimonios" style={tStyles.wrap}>
      <div style={tStyles.inner} className="os-section-pad">
        <div style={tStyles.header}>
          <div style={tStyles.headLeft}>
            <div style={tStyles.overline}>
              <span className="os-rule"></span> {copy.overline}
            </div>
            <h2 style={tStyles.h2} className="os-h2">{copy.h2}</h2>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--oscar-ink-2)', margin: 0, maxWidth: 540 }}>
              {copy.lead}
            </p>
          </div>
          <div style={tStyles.ratingStrip}>
            <StarsRow />
            <div>
              <div style={tStyles.rNum}>{copy.rating.num}</div>
              <div style={tStyles.rLabel}>{copy.rating.label}</div>
            </div>
          </div>
        </div>

        <div style={tStyles.grid} className="os-testimonials-grid">
          <article style={tStyles.featured}>
            <div className="os-pattern-stripes"></div>
            <div style={{ position: 'relative', zIndex: 2 }}>
              <div style={tStyles.featuredQuoteMark}>"</div>
              <p style={tStyles.featuredQuote}>
                {featured.quoteBefore}
                <span style={{ color: '#9AB6D5' }}>{featured.quoteAccent}</span>
                {featured.quoteAfter}
              </p>
              <StarsRow light />
            </div>
            <div style={tStyles.featuredFoot}>
              <div className="os-avatar" style={{ backgroundImage: `url("${featured.photo}")`, width: 64, height: 64 }}></div>
              <div style={{ flex: 1 }}>
                <h4 style={tStyles.fName}>{featured.name}</h4>
                <div style={tStyles.fMeta}>{featured.meta}</div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 4, padding: '10px 14px', background: 'rgba(255,255,255,.08)', border: '1px solid rgba(255,255,255,.18)', borderRadius: 'var(--radius-md)' }}>
                <div style={{ fontSize: 11, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#B8CCDF', fontWeight: 600 }}>{featured.carLabel}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: '#fff' }}>{featured.carName}</div>
              </div>
            </div>
          </article>

          <div style={tStyles.smallCol}>
            {copy.small.map((t, i) => (
              <article key={i} style={tStyles.smallCard}
                onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-2)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <StarsRow />
                <p style={tStyles.sQuote}>{t.quote}</p>
                <div style={tStyles.sFoot}>
                  <div className="os-avatar" style={{ backgroundImage: `url("${t.photo}")`, width: 44, height: 44 }}></div>
                  <div>
                    <h4 style={tStyles.sName}>{t.name}</h4>
                    <div style={tStyles.sMeta}>{t.meta}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

window.Testimonials = Testimonials;
