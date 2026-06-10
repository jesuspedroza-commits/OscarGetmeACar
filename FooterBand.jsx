/* global React */

const bandStyles = {
  band: { background: 'linear-gradient(135deg, #1E3A5F 0%, #264A78 100%)', color: '#fff', padding: '64px 0 0', position: 'relative', overflow: 'hidden' },
  bandStripes: {
    position: 'absolute', inset: 0, opacity: .6, pointerEvents: 'none',
    backgroundImage:
      'linear-gradient(115deg, transparent 12%, rgba(255,255,255,.04) 12.2%, rgba(255,255,255,.04) 12.4%, transparent 12.4%),' +
      'linear-gradient(115deg, transparent 38%, rgba(255,255,255,.05) 38.2%, rgba(255,255,255,.05) 38.4%, transparent 38.4%),' +
      'linear-gradient(115deg, transparent 64%, rgba(255,255,255,.04) 64.2%, rgba(255,255,255,.04) 64.4%, transparent 64.4%),' +
      'linear-gradient(115deg, transparent 86%, rgba(255,255,255,.03) 86.2%, rgba(255,255,255,.03) 86.4%, transparent 86.4%)',
  },
  inner: { maxWidth: 1240, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 2 },
  head: { display: 'flex', alignItems: 'baseline', gap: 28, marginBottom: 44, flexWrap: 'wrap' },
  shopTitle: { fontFamily: 'var(--font-display)', fontSize: 44, lineHeight: 1, letterSpacing: '-0.02em', fontWeight: 800, color: '#fff', margin: 0 },
  shopAccent: { color: '#6B95C2' },
  rule: { flex: 1, height: 1, background: 'rgba(255,255,255,.18)', minWidth: 80, alignSelf: 'center' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 36, paddingBottom: 56 },
  cell: { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 16 },
  iconCirc: { width: 64, height: 64, borderRadius: '50%', border: '1.5px solid rgba(255,255,255,.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff' },
  cellHead: { fontSize: 14, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#fff', margin: 0 },
  cellSub: { fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6B95C2', margin: 0 },
  contactStrip: {
    border: '1px solid rgba(255,255,255,.18)', borderRadius: 'var(--radius-xl)',
    padding: '18px 28px', display: 'grid', gridTemplateColumns: '1fr 1px 1fr',
    gap: 20, alignItems: 'center', marginBottom: 48,
  },
  contactCell: { display: 'flex', alignItems: 'center', gap: 14, justifyContent: 'center' },
  contactDot: { width: 32, height: 32, borderRadius: '50%', background: '#fff', color: 'var(--oscar-navy)', display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 'none' },
  contactText: { fontSize: 15, fontWeight: 600, color: '#fff' },
  contactSep: { width: 1, height: 30, background: 'rgba(255,255,255,.18)' },
  bottomBar: { background: 'rgba(0,0,0,.18)', padding: '20px 0', position: 'relative', zIndex: 2 },
  bottomInner: { maxWidth: 1240, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, color: '#B8CCDF' },
  bottomLeft: { display: 'flex', alignItems: 'center', gap: 14, fontSize: 13 },
  bottomRight: { fontSize: 12, letterSpacing: '0.06em' },
};

const cells = [
  { icon: 'car', head: 'Quality Used Cars', sub: 'You Can Trust' },
  { icon: 'calendar-check', head: 'Smooth Process', sub: 'Zero Stress' },
  { icon: 'key-round', head: 'Great Cars', sub: 'Better Experience' },
  { icon: 'handshake', head: 'Personalized Service', sub: 'Ready to Help' },
];

function FooterBand() {
  return (
    <>
      <section style={bandStyles.band}>
        <div style={bandStyles.bandStripes}></div>
        <div style={bandStyles.inner}>
          <div style={bandStyles.head}>
            <h2 style={bandStyles.shopTitle}>Shop with <span style={bandStyles.shopAccent}>Oscar</span> today.</h2>
            <div style={bandStyles.rule}></div>
          </div>
          <div style={bandStyles.grid}>
            {cells.map((c, i) => (
              <div key={i} style={bandStyles.cell}>
                <span style={bandStyles.iconCirc}>
                  <i data-lucide={c.icon} style={{width: 28, height: 28, strokeWidth: 1.5}}></i>
                </span>
                <div>
                  <h3 style={bandStyles.cellHead}>{c.head}.</h3>
                  <p style={bandStyles.cellSub}>{c.sub}.</p>
                </div>
              </div>
            ))}
          </div>
          <div style={bandStyles.contactStrip}>
            <div style={bandStyles.contactCell}>
              <span style={bandStyles.contactDot}><i data-lucide="map-pin" style={{width: 16, height: 16}}></i></span>
              <span style={bandStyles.contactText}>Florida</span>
            </div>
            <div style={bandStyles.contactSep}></div>
            <div style={bandStyles.contactCell}>
              <span style={bandStyles.contactDot}><i data-lucide="phone" style={{width: 16, height: 16}}></i></span>
              <span style={bandStyles.contactText}>Call today · (407) 555&#8209;0198</span>
            </div>
          </div>
        </div>
      </section>
      <div style={bandStyles.bottomBar}>
        <div style={bandStyles.bottomInner}>
          <div style={bandStyles.bottomLeft}>
            <img src="assets/logo-symbol-transparent.png" alt="" style={{height: 22, filter: 'brightness(0) invert(1)'}} />
            <span style={{letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 11, fontWeight: 600}}>
              Honest options. Forward movement.
            </span>
          </div>
          <div style={bandStyles.bottomRight}>© 2026 Oscar Get me a Car · Florida</div>
        </div>
      </div>
    </>
  );
}
window.FooterBand = FooterBand;
