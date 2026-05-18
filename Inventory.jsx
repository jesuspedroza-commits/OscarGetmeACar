/* global React */

// =================================================================
// INVENTORY PREVIEW - "See what's out there" coming-soon section.
// =================================================================
const invStyles = {
  wrap: {
    background: 'var(--oscar-surface-3)',
    borderTop: '1px solid var(--line-1)',
    borderBottom: '1px solid var(--line-1)',
  },
  inner: { maxWidth: 1240, margin: '0 auto', padding: '88px 32px 80px' },
  overlineRow: {
    display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16, flexWrap: 'wrap',
  },
  overline: {
    fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase',
    color: 'var(--oscar-blue)', fontWeight: 700,
    display: 'inline-flex', alignItems: 'center', gap: 12,
  },
  comingSoonBadge: {
    display: 'inline-flex', alignItems: 'center', gap: 5,
    padding: '4px 12px',
    background: 'var(--oscar-blue-050)',
    border: '1px solid var(--oscar-blue-200)',
    borderRadius: 'var(--radius-pill)',
    fontSize: 11, fontWeight: 700, letterSpacing: '0.07em',
    color: 'var(--oscar-blue)', textTransform: 'uppercase',
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontSize: 44, lineHeight: 1.08, letterSpacing: '-0.02em', fontWeight: 800,
    color: 'var(--oscar-navy)', margin: '0 0 16px', textWrap: 'balance',
  },
  sub: {
    fontSize: 18, lineHeight: 1.55, color: 'var(--oscar-ink-2)',
    margin: '0 0 52px', maxWidth: 580,
  },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 },
  card: {
    background: '#fff',
    borderRadius: 'var(--radius-xl)',
    border: '1px solid var(--line-1)',
    boxShadow: 'var(--shadow-1)',
    overflow: 'hidden',
    display: 'flex', flexDirection: 'column',
    transition: 'all 240ms var(--ease-out)',
  },
  thumb: {
    height: 148,
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    position: 'relative', overflow: 'hidden',
  },
  cardBody: {
    padding: '20px 22px 24px',
    display: 'flex', flexDirection: 'column', gap: 8, flex: 1,
  },
  cardBadge: {
    display: 'inline-flex', alignItems: 'center',
    padding: '3px 10px', borderRadius: 'var(--radius-pill)',
    fontSize: 11, fontWeight: 700, letterSpacing: '0.06em',
    textTransform: 'uppercase', alignSelf: 'flex-start',
    marginBottom: 2,
  },
  cardTitle: {
    fontFamily: 'var(--font-display)',
    fontSize: 17, lineHeight: 1.25, fontWeight: 700,
    color: 'var(--oscar-navy)', margin: 0, letterSpacing: '-0.005em',
  },
  cardText: {
    fontSize: 14, lineHeight: 1.5, color: 'var(--oscar-ink-3)', margin: 0,
  },
  previewTag: {
    display: 'inline-flex', alignItems: 'center', gap: 5,
    fontSize: 11, color: 'var(--oscar-ink-4)', fontWeight: 600,
    letterSpacing: '0.06em', textTransform: 'uppercase',
    marginTop: 'auto', paddingTop: 14,
  },
  ctaBlock: {
    marginTop: 44,
    background: 'var(--oscar-blue-050)',
    border: '1px solid var(--oscar-blue-200)',
    borderRadius: 'var(--radius-xl)',
    padding: '26px 32px',
    display: 'flex', alignItems: 'center',
    justifyContent: 'space-between', gap: 20, flexWrap: 'wrap',
  },
  ctaBtn: {
    background: 'var(--oscar-navy)', color: '#fff',
    border: 'none', borderRadius: 'var(--radius-md)',
    padding: '13px 22px', fontSize: 15, fontWeight: 600,
    cursor: 'pointer', transition: 'all 180ms var(--ease-out)',
    display: 'inline-flex', alignItems: 'center', gap: 8,
    whiteSpace: 'nowrap', flexShrink: 0,
  },
};

const THUMBS = [
  'linear-gradient(135deg, #1E3A5F 0%, #2D5A8C 100%)',
  'linear-gradient(135deg, #122642 0%, #1E3A5F 100%)',
  'linear-gradient(135deg, #264A78 0%, #3E72A8 100%)',
  'linear-gradient(135deg, #1E3A5F 0%, #264A78 100%)',
];

const THUMB_ICONS = ['tag', 'sparkles', 'wallet', 'sliders-horizontal'];

const BADGE_COLORS = [
  { bg: '#FEF3E2', color: '#9A6B1F' },
  { bg: 'var(--oscar-blue-050)', color: 'var(--oscar-blue)' },
  { bg: 'var(--oscar-success-bg)', color: 'var(--oscar-success)' },
  { bg: 'var(--oscar-blue-100)', color: 'var(--oscar-navy)' },
];

function InventoryPreview({ copy, onCta }) {
  return (
    <section id="inventario" style={invStyles.wrap}>
      <div style={invStyles.inner} className="os-section-pad">

        <div style={{ maxWidth: 640 }}>
          <div style={invStyles.overlineRow}>
            <div style={invStyles.overline}>
              <span className="os-rule"></span> {copy.overline}
            </div>
            <span style={invStyles.comingSoonBadge}>
              <i data-lucide="clock" style={{ width: 11, height: 11 }}></i>
              {copy.comingSoon}
            </span>
          </div>
          <h2 style={invStyles.h2} className="os-h2">{copy.h2}</h2>
          <p style={invStyles.sub}>{copy.sub}</p>
        </div>

        <div style={invStyles.grid} className="os-inv-grid">
          {copy.cards.map((card, i) => (
            <article key={i} style={invStyles.card}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>

              <div style={{ ...invStyles.thumb, background: THUMBS[i] }}>
                <div className="os-pattern-stripes" style={{ opacity: 0.6 }}></div>
                <i data-lucide={THUMB_ICONS[i]} style={{ width: 48, height: 48, color: 'rgba(255,255,255,0.2)', strokeWidth: 1.25, position: 'relative', zIndex: 1 }}></i>
                <i data-lucide="car" style={{ width: 72, height: 72, color: 'rgba(255,255,255,0.07)', strokeWidth: 1, position: 'absolute', bottom: -8, right: -8, zIndex: 1 }}></i>
              </div>

              <div style={invStyles.cardBody}>
                <span style={{ ...invStyles.cardBadge, background: BADGE_COLORS[i].bg, color: BADGE_COLORS[i].color }}>
                  {card.badge}
                </span>
                <h3 style={invStyles.cardTitle}>{card.title}</h3>
                <p style={invStyles.cardText}>{card.text}</p>
                <div style={invStyles.previewTag}>
                  <i data-lucide="eye" style={{ width: 12, height: 12 }}></i>
                  {copy.previewLabel}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={invStyles.ctaBlock}>
          <div>
            <div style={{ fontSize: 17, fontWeight: 700, color: 'var(--oscar-navy)', fontFamily: 'var(--font-display)', letterSpacing: '-0.005em', marginBottom: 4 }}>
              {copy.ctaHead}
            </div>
            <div style={{ fontSize: 14, color: 'var(--oscar-ink-2)' }}>{copy.ctaSub}</div>
          </div>
          <button style={invStyles.ctaBtn} onClick={onCta}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--oscar-navy-700)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--oscar-navy)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            {copy.ctaBtn}
            <i data-lucide="arrow-right" style={{ width: 16, height: 16, strokeWidth: 2.25 }}></i>
          </button>
        </div>

      </div>
    </section>
  );
}

window.InventoryPreview = InventoryPreview;
