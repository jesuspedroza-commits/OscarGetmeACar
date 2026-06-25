/* global React */

const heroStyles = {
  wrap: { position: 'relative', maxWidth: 1240, margin: '0 auto', padding: '40px 32px 64px' },
  panel: {
    position: 'relative', borderRadius: 'var(--radius-2xl)', overflow: 'hidden',
    minHeight: 520, display: 'grid', gridTemplateColumns: '5fr 7fr', background: '#0F1B2D',
  },
  left: {
    padding: '64px 56px 56px', color: '#fff', display: 'flex', flexDirection: 'column',
    justifyContent: 'space-between', position: 'relative', zIndex: 2,
    background: 'linear-gradient(135deg, #1E3A5F 0%, #264A78 100%)',
  },
  overline: {
    fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B8CCDF',
    fontWeight: 600, marginBottom: 18, display: 'inline-flex', alignItems: 'center', gap: 10,
  },
  rule: { width: 28, height: 2, background: '#3E72A8', display: 'inline-block' },
  h1: {
    fontFamily: 'var(--font-display)', fontSize: 64, lineHeight: 1.02, letterSpacing: '-0.025em',
    fontWeight: 800, color: '#fff', margin: '0 0 22px', textWrap: 'balance',
  },
  sub: { fontSize: 18, lineHeight: 1.5, color: '#DCE6F1', margin: '0 0 36px', maxWidth: 420 },
  ctaRow: { display: 'flex', alignItems: 'center', gap: 14 },
  primary: {
    background: '#fff', color: '#1E3A5F', border: 'none', borderRadius: 'var(--radius-md)',
    padding: '14px 22px', fontSize: 15, fontWeight: 700, cursor: 'pointer',
    fontFamily: 'inherit', transition: 'all 180ms var(--ease-out)',
  },
  ghost: {
    background: 'transparent', color: '#fff', border: '1.5px solid rgba(255,255,255,.32)',
    borderRadius: 'var(--radius-md)', padding: '12.5px 20px', fontSize: 15, fontWeight: 600,
    cursor: 'pointer', fontFamily: 'inherit', transition: 'all 180ms var(--ease-out)',
  },
  footTagline: {
    display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 12, letterSpacing: '0.08em',
    color: '#B8CCDF', textTransform: 'uppercase', fontWeight: 600, marginTop: 40,
  },
  pinDot: {
    width: 26, height: 26, borderRadius: '50%', background: '#2D5A8C',
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
  },
  right: {
    position: 'relative',
    background:
      'linear-gradient(180deg, rgba(15,27,45,0) 30%, rgba(15,27,45,.55) 100%),' +
      'linear-gradient(135deg, #5A6577 0%, #1E3A5F 70%, #0F1B2D 100%)',
  },
  rightStripes: {
    position: 'absolute', inset: 0,
    backgroundImage:
      'linear-gradient(115deg, transparent 28%, rgba(255,255,255,.04) 28.2%, rgba(255,255,255,.04) 28.4%, transparent 28.4%),' +
      'linear-gradient(115deg, transparent 48%, rgba(255,255,255,.05) 48.2%, rgba(255,255,255,.05) 48.4%, transparent 48.4%),' +
      'linear-gradient(115deg, transparent 68%, rgba(255,255,255,.04) 68.2%, rgba(255,255,255,.04) 68.4%, transparent 68.4%)',
  },
  placeholderTag: {
    position: 'absolute', bottom: 18, right: 22, fontFamily: 'var(--font-mono)',
    fontSize: 10, letterSpacing: '.08em', color: 'rgba(255,255,255,.45)', textTransform: 'uppercase',
  },
};

function Hero({ onCta }) {
  return (
    <section style={heroStyles.wrap}>
      <div style={heroStyles.panel}>
        <div style={heroStyles.left}>
          <div>
            <div style={heroStyles.overline}><span style={heroStyles.rule}></span> Clear options. Confident next steps.</div>
            <h1 style={heroStyles.h1}>Your journey<br/>forward<br/>starts here.</h1>
            <p style={heroStyles.sub}>Quality vehicles. Flexible financing. Real people who treat you like a neighbor: not a lead.</p>
            <div style={heroStyles.ctaRow}>
              <button style={heroStyles.primary} onClick={onCta}>View Inventory</button>
              <button style={heroStyles.ghost} onClick={onCta}>Talk to Oscar</button>
            </div>
          </div>
          <div style={heroStyles.footTagline}>
            <span style={heroStyles.pinDot}>
              <i data-lucide="map-pin" style={{width: 13, height: 13, color: '#fff'}}></i>
            </span>
            Florida · Trusted Car Vendor
          </div>
        </div>
        <div style={heroStyles.right}>
          <div style={heroStyles.rightStripes}></div>
          <div style={heroStyles.placeholderTag}>Hero photo · dark car · Florida palms · cool grade</div>
        </div>
      </div>
    </section>
  );
}
window.Hero = Hero;
