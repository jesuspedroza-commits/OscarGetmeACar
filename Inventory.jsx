/* global React */
const { useState: useStateInv } = React;

const invStyles = {
  wrap: { maxWidth: 1240, margin: '0 auto', padding: '40px 32px 64px' },
  header: { display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 28, flexWrap: 'wrap', gap: 16 },
  titleBlock: { display: 'flex', flexDirection: 'column', gap: 12 },
  overline: { fontSize: 12, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--oscar-blue)', fontWeight: 600 },
  ruleRow: { display: 'flex', alignItems: 'center', gap: 14 },
  rule: { width: 36, height: 2, background: 'var(--oscar-navy)' },
  h2: { fontFamily: 'var(--font-display)', fontSize: 40, lineHeight: 1.08, letterSpacing: '-0.02em', fontWeight: 800, color: 'var(--oscar-navy)', margin: 0 },
  chips: { display: 'flex', gap: 8, flexWrap: 'wrap', marginTop: 8 },
  chip: {
    fontSize: 13, fontWeight: 500, padding: '7px 14px', borderRadius: 8,
    background: 'var(--bg-3)', color: 'var(--fg-1)', border: '1px solid transparent',
    cursor: 'pointer', fontFamily: 'inherit', transition: 'all 180ms var(--ease-out)',
  },
  chipActive: { background: 'var(--oscar-blue-100)', color: 'var(--oscar-navy)', borderColor: 'var(--oscar-blue-200)' },
  grid: { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 },
  card: {
    background: '#fff', border: '1px solid var(--line-1)', borderRadius: 'var(--radius-lg)',
    overflow: 'hidden', boxShadow: 'var(--shadow-1)', cursor: 'pointer', transition: 'all 240ms var(--ease-out)',
  },
  photoBase: { aspectRatio: '16 / 10', position: 'relative', display: 'flex', alignItems: 'flex-end', padding: 12 },
  badge: { background: 'rgba(30,58,95,.92)', color: '#fff', fontSize: 11, fontWeight: 600, padding: '5px 10px', borderRadius: 999, letterSpacing: '0.04em' },
  body: { padding: '14px 16px 16px' },
  yr: { fontSize: 11, color: 'var(--fg-3)', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 4 },
  nm: { fontSize: 18, color: 'var(--oscar-navy)', fontWeight: 700, letterSpacing: '-0.005em', margin: '0 0 8px' },
  specs: { display: 'flex', gap: 10, fontSize: 12, color: 'var(--fg-3)', marginBottom: 14 },
  priceRow: { display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', borderTop: '1px solid var(--line-1)', paddingTop: 12 },
  mo: { fontSize: 22, fontWeight: 800, color: 'var(--oscar-navy)', lineHeight: 1, fontFamily: 'var(--font-display)' },
  moUnit: { fontWeight: 500, fontSize: 13, color: 'var(--fg-3)' },
  total: { fontSize: 11, color: 'var(--fg-3)', marginTop: 4 },
  view: { background: 'var(--oscar-blue)', color: '#fff', fontSize: 12, fontWeight: 600, padding: '8px 14px', borderRadius: 8 },
};

const vehicles = [
  { yr: '2021', name: 'Toyota Camry LE', mi: '42k', tx: 'Auto', type: 'Sedan', mo: 289, total: 16400, badge: 'Carfax verified', tone: ['#B8CCDF', '#6B95C2'] },
  { yr: '2022', name: 'Honda CR-V EX', mi: '28k', tx: 'AWD', type: 'SUV', mo: 372, total: 21200, badge: 'Low miles', tone: ['#DCE6F1', '#3E72A8'] },
  { yr: '2020', name: 'Ford F-150 XLT', mi: '58k', tx: 'Auto', type: 'Truck', mo: 418, total: 24800, badge: 'Local trade-in', tone: ['#5A6577', '#2A3445'] },
  { yr: '2019', name: 'Hyundai Elantra SEL', mi: '64k', tx: 'Auto', type: 'Sedan', mo: 212, total: 11400, badge: 'Under $250/mo', tone: ['#E6E9ED', '#8A93A1'] },
  { yr: '2022', name: 'Kia Sorento LX', mi: '34k', tx: 'AWD', type: 'SUV', mo: 389, total: 22600, badge: 'Family-ready', tone: ['#DCE6F1', '#264A78'] },
  { yr: '2021', name: 'Chevy Equinox LT', mi: '46k', tx: 'AWD', type: 'SUV', mo: 318, total: 18900, badge: '1-owner', tone: ['#B8CCDF', '#1E3A5F'] },
];

function Inventory() {
  const [filter, setFilter] = useStateInv('All vehicles');
  const chips = ['All vehicles', 'SUV', 'Sedan', 'Truck', 'Under $300/mo', 'Under $20k'];
  return (
    <section style={invStyles.wrap}>
      <div style={invStyles.header}>
        <div style={invStyles.titleBlock}>
          <span style={invStyles.overline}>Available now</span>
          <div style={invStyles.ruleRow}><span style={invStyles.rule}></span></div>
          <h2 style={invStyles.h2}>Find a car that fits your budget.</h2>
          <div style={invStyles.chips}>
            {chips.map(c => (
              <button key={c} onClick={() => setFilter(c)}
                style={{ ...invStyles.chip, ...(filter === c ? invStyles.chipActive : {}) }}>
                {c}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div style={invStyles.grid}>
        {vehicles.map((v, i) => (
          <div key={i} style={invStyles.card}
            onMouseEnter={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-3)'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'var(--shadow-1)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            <div style={{
              ...invStyles.photoBase,
              background:
                'linear-gradient(180deg, rgba(30,58,95,.06) 0%, rgba(30,58,95,.32) 100%),' +
                'linear-gradient(135deg, ' + v.tone[0] + ' 0%, ' + v.tone[1] + ' 100%)',
            }}>
              <span style={invStyles.badge}>{v.badge}</span>
            </div>
            <div style={invStyles.body}>
              <div style={invStyles.yr}>{v.yr}</div>
              <h3 style={invStyles.nm}>{v.name}</h3>
              <div style={invStyles.specs}>
                <span>{v.mi} mi</span><span>·</span><span>{v.tx}</span><span>·</span><span>{v.type}</span>
              </div>
              <div style={invStyles.priceRow}>
                <div>
                  <div style={invStyles.mo}>${v.mo}<span style={invStyles.moUnit}>/mo</span></div>
                  <div style={invStyles.total}>${v.total.toLocaleString()} · 72mo · Est.</div>
                </div>
                <div style={invStyles.view}>View</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
window.Inventory = Inventory;
