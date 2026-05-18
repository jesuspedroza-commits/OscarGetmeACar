/* global React */

// =================================================================
// BENEFITS — three large feature cards.
// =================================================================
const benStyles = {
  wrap: { background: '#fff', borderTop: '1px solid var(--line-1)', borderBottom: '1px solid var(--line-1)' },
  inner: { maxWidth: 1240, margin: '0 auto', padding: '88px 32px 96px' },
  header: { maxWidth: 720, marginBottom: 56 },
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
  lead: { fontSize: 18, lineHeight: 1.55, color: 'var(--oscar-ink-2)', margin: 0, maxWidth: 620 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 },
  card: {
    background: '#fff', border: '1px solid var(--line-1)', borderRadius: 'var(--radius-xl)',
    padding: '32px 32px 36px',
    display: 'flex', flexDirection: 'column', gap: 18,
    boxShadow: 'var(--shadow-1)',
    transition: 'all 240ms var(--ease-out)',
    position: 'relative', overflow: 'hidden',
  },
  iconCirc: {
    width: 60, height: 60, borderRadius: '50%',
    border: '1.5px solid var(--oscar-navy)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: 'var(--oscar-navy)',
  },
  bigNum: {
    fontFamily: 'var(--font-display)',
    fontSize: 38, lineHeight: 1, letterSpacing: '-0.02em', fontWeight: 800,
    color: 'var(--oscar-blue)', margin: '4px 0 4px',
  },
  cardH: {
    fontFamily: 'var(--font-display)', fontSize: 22, lineHeight: 1.2,
    letterSpacing: '-0.01em', fontWeight: 700, color: 'var(--oscar-navy)', margin: 0,
  },
  cardP: { fontSize: 15, lineHeight: 1.55, color: 'var(--oscar-ink-2)', margin: 0 },
  detailList: { listStyle: 'none', padding: 0, margin: '8px 0 0', display: 'flex', flexDirection: 'column', gap: 8 },
  detail: { display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 14, color: 'var(--oscar-ink-2)', fontWeight: 500 },
};

function Benefits({ copy }) {
  return (
    <section id="beneficios" style={benStyles.wrap}>
      <div style={benStyles.inner} className="os-section-pad">
        <div style={benStyles.header}>
          <div style={benStyles.overline}>
            <span className="os-rule"></span> {copy.overline}
          </div>
          <h2 style={benStyles.h2} className="os-h2">{copy.h2}</h2>
          <p style={benStyles.lead}>{copy.lead}</p>
        </div>

        <div style={benStyles.grid} className="os-grid-3">
          {copy.items.map((it, i) => (
            <article key={i} style={benStyles.card}
              onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-2)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              <span style={benStyles.iconCirc}>
                <i data-lucide={it.icon} style={{ width: 28, height: 28, strokeWidth: 1.75 }}></i>
              </span>
              <div>
                <div style={benStyles.bigNum}>{it.stat}</div>
                <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--oscar-ink-3)', fontWeight: 600 }}>{it.statLabel}</div>
              </div>
              <h3 style={benStyles.cardH}>{it.title}</h3>
              <p style={benStyles.cardP}>{it.body}</p>
              <ul style={benStyles.detailList}>
                {it.details.map((d, j) => (
                  <li key={j} style={benStyles.detail}>
                    <i data-lucide="check" style={{ width: 16, height: 16, color: 'var(--oscar-blue)', strokeWidth: 2.5, flexShrink: 0, marginTop: 3 }}></i>
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

window.Benefits = Benefits;
