/* global React */

const valueStyles = {
  wrap: { maxWidth: 1240, margin: '0 auto', padding: '24px 32px 56px' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 },
  tile: {
    background: '#fff', border: '1px solid var(--line-1)', borderRadius: 'var(--radius-lg)',
    padding: '28px 24px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
    gap: 18, boxShadow: 'var(--shadow-1)', transition: 'all 240ms var(--ease-out)',
  },
  iconCirc: {
    width: 56, height: 56, borderRadius: '50%', border: '1.5px solid var(--oscar-navy)',
    display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--oscar-navy)',
  },
  head: {
    fontSize: 15, fontWeight: 700, color: 'var(--oscar-navy)', letterSpacing: '0.04em',
    textTransform: 'uppercase', lineHeight: 1.25, margin: 0,
  },
  sub: { fontSize: 13, color: 'var(--oscar-blue)', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase', margin: 0 },
};

const items = [
  { icon: 'car', head: 'Quality used cars', sub: 'You can trust.' },
  { icon: 'calendar-check', head: 'Smooth process.', sub: 'Zero stress.' },
  { icon: 'key-round', head: 'Great cars.', sub: 'Better experience.' },
  { icon: 'handshake', head: 'Personalized service.', sub: 'Ready to help.' },
];

function ValueRow() {
  return (
    <section style={valueStyles.wrap}>
      <div style={valueStyles.grid}>
        {items.map((it, i) => (
          <div key={i} style={valueStyles.tile}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-2)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            <span style={valueStyles.iconCirc}>
              <i data-lucide={it.icon} style={{width: 26, height: 26, strokeWidth: 1.75}}></i>
            </span>
            <div>
              <h3 style={valueStyles.head}>{it.head}</h3>
              <h4 style={valueStyles.sub}>{it.sub}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.ValueRow = ValueRow;
