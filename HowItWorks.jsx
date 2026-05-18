/* global React */

// =================================================================
// HOW IT WORKS — three-step process strip.
// =================================================================
const stepStyles = {
  wrap: { background: '#fff', borderTop: '1px solid var(--line-1)' },
  inner: { maxWidth: 1240, margin: '0 auto', padding: '88px 32px 96px' },
  header: { textAlign: 'center', maxWidth: 720, margin: '0 auto 56px' },
  overline: {
    fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase',
    color: 'var(--oscar-blue)', fontWeight: 700, marginBottom: 16,
    display: 'inline-flex', alignItems: 'center', gap: 12, justifyContent: 'center',
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontSize: 44, lineHeight: 1.08, letterSpacing: '-0.02em', fontWeight: 800,
    color: 'var(--oscar-navy)', margin: '0 0 16px', textWrap: 'balance',
  },
  lead: { fontSize: 17, lineHeight: 1.55, color: 'var(--oscar-ink-2)', margin: 0 },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, position: 'relative' },
  step: {
    padding: '36px 32px',
    display: 'flex', flexDirection: 'column', gap: 14,
    borderRight: '1px solid var(--line-1)',
    position: 'relative',
  },
  stepLast: { borderRight: 'none' },
  num: {
    fontFamily: 'var(--font-display)',
    fontSize: 14, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase',
    color: 'var(--oscar-blue)',
    display: 'inline-flex', alignItems: 'center', gap: 12,
  },
  numDot: {
    width: 28, height: 28, borderRadius: '50%',
    background: 'var(--oscar-blue)', color: '#fff',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'var(--font-display)', fontSize: 13, fontWeight: 800,
  },
  stepH: {
    fontFamily: 'var(--font-display)', fontSize: 22, lineHeight: 1.2,
    letterSpacing: '-0.01em', fontWeight: 700, color: 'var(--oscar-navy)', margin: 0,
  },
  stepP: { fontSize: 15, lineHeight: 1.55, color: 'var(--oscar-ink-2)', margin: 0 },
  stepMeta: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    fontSize: 12, color: 'var(--oscar-ink-3)', fontWeight: 600,
    paddingTop: 8,
  },
};

function HowItWorks({ copy }) {
  return (
    <section id="preguntas" style={stepStyles.wrap}>
      <div style={stepStyles.inner} className="os-section-pad">
        <div style={stepStyles.header}>
          <div style={stepStyles.overline}>
            <span className="os-rule"></span> {copy.overline} <span className="os-rule"></span>
          </div>
          <h2 style={stepStyles.h2} className="os-h2">{copy.h2}</h2>
          <p style={stepStyles.lead}>{copy.lead}</p>
        </div>
        <div style={{ ...stepStyles.grid, border: '1px solid var(--line-1)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', background: '#fff' }} className="os-grid-3">
          {copy.steps.map((s, i) => (
            <div key={i} className="os-step-item" style={{ ...stepStyles.step, ...(i === copy.steps.length - 1 ? stepStyles.stepLast : {}) }}>
              <div style={stepStyles.num}>
                <span style={stepStyles.numDot}>{s.n}</span>
                <i data-lucide={s.icon} style={{ width: 18, height: 18, color: 'var(--oscar-navy)', marginLeft: 4 }}></i>
              </div>
              <h3 style={stepStyles.stepH}>{s.h}</h3>
              <p style={stepStyles.stepP}>{s.p}</p>
              <div style={stepStyles.stepMeta}>
                <i data-lucide="clock" style={{ width: 13, height: 13 }}></i>
                {s.meta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.HowItWorks = HowItWorks;
