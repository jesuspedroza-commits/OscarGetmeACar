/* global React */
const { useState: useStateHero } = React;

// =================================================================
// HERO — split panel: headline + trust strip on the left, lead form right.
// =================================================================
const heroStyles = {
  wrap: { position: 'relative', maxWidth: 1240, margin: '0 auto', padding: '32px 32px 48px' },
  panel: {
    position: 'relative',
    borderRadius: 'var(--radius-2xl)',
    overflow: 'hidden',
    minHeight: 620,
    display: 'grid',
    gridTemplateColumns: '6fr 5fr',
    background: '#0F1B2D',
    boxShadow: 'var(--shadow-3)',
  },
  left: {
    position: 'relative',
    padding: '72px 56px 48px',
    color: '#fff',
    display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
    zIndex: 2,
  },
  overline: {
    fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase',
    color: '#B8CCDF', fontWeight: 600, marginBottom: 22,
    display: 'inline-flex', alignItems: 'center', gap: 12,
  },
  h1: {
    fontFamily: 'var(--font-display)',
    fontSize: 60, lineHeight: 1.02, letterSpacing: '-0.025em', fontWeight: 800,
    color: '#fff', margin: '0 0 22px', textWrap: 'balance', maxWidth: 560,
  },
  h1Accent: { color: '#9AB6D5' },
  sub: { fontSize: 18, lineHeight: 1.5, color: '#DCE6F1', margin: '0 0 36px', maxWidth: 480 },
  trustRow: {
    display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 24,
    marginTop: 'auto', paddingTop: 32,
    borderTop: '1px solid rgba(255,255,255,.14)',
  },
  trustCell: { display: 'flex', alignItems: 'center', gap: 12, color: '#fff' },
  trustNum: {
    fontFamily: 'var(--font-display)',
    fontSize: 30, fontWeight: 800, lineHeight: 1,
    letterSpacing: '-0.02em', color: '#fff',
  },
  trustLabel: {
    fontSize: 11, letterSpacing: '0.1em', textTransform: 'uppercase',
    color: '#B8CCDF', fontWeight: 600, lineHeight: 1.3,
  },
  trustDivider: { width: 1, height: 34, background: 'rgba(255,255,255,.16)' },

  right: {
    position: 'relative',
    padding: '56px 56px',
    background: '#FAFAFA',
    display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18,
  },
  rightHead: {
    fontFamily: 'var(--font-display)',
    fontSize: 24, lineHeight: 1.15, fontWeight: 700,
    color: 'var(--oscar-navy)', margin: 0, letterSpacing: '-0.01em',
  },
  rightSub: { fontSize: 14, color: 'var(--oscar-ink-3)', margin: '6px 0 18px', lineHeight: 1.5 },
  formGrid: { display: 'grid', gap: 12 },
  submit: {
    background: 'var(--oscar-blue)', color: '#fff',
    border: 'none', borderRadius: 'var(--radius-md)',
    padding: '15px 22px', fontSize: 15, fontWeight: 700,
    cursor: 'pointer', transition: 'all 180ms var(--ease-out)', marginTop: 6,
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
  },
  microcopy: {
    fontSize: 12, color: 'var(--oscar-ink-3)', margin: '14px 0 0', lineHeight: 1.55,
    display: 'inline-flex', alignItems: 'center', gap: 8,
  },
  successWrap: {
    display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
    gap: 14, animation: 'oscarSlideUp 420ms var(--ease-out) both',
  },
  successIconCirc: {
    width: 56, height: 56, borderRadius: '50%',
    background: 'var(--oscar-success-bg)', color: 'var(--oscar-success)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    border: '1.5px solid var(--oscar-success)',
  },
};

function Hero({ copy, heroPhotoUrl, headlineKey = 'perfect', onSubmitLead }) {
  const [form, setForm] = useStateHero({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useStateHero({});
  const [submitted, setSubmitted] = useStateHero(false);

  // re-validate / clear errors when lang flips
  React.useEffect(() => { setErrors({}); }, [copy]);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = copy.form.errors.name;
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = copy.form.errors.email;
    if (form.phone.replace(/\D/g, '').length < 10) e.phone = copy.form.errors.phone;
    return e;
  }
  function handleSubmit(ev) {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      setSubmitted(true);
      onSubmitLead && onSubmitLead(form);
    }
  }
  function formatPhone(v) {
    const d = v.replace(/\D/g, '').slice(0, 10);
    if (d.length < 4) return d;
    if (d.length < 7) return `(${d.slice(0,3)}) ${d.slice(3)}`;
    return `(${d.slice(0,3)}) ${d.slice(3,6)}-${d.slice(6)}`;
  }

  const [line1, line2] = copy.headlines[headlineKey] || copy.headlines.perfect;
  const firstName = form.name.trim().split(' ')[0] || '';

  return (
    <section id="top" style={heroStyles.wrap}>
      <div style={heroStyles.panel}>
        {/* photo background on the left half */}
        <div style={{ position: 'absolute', inset: 0, gridColumn: '1 / 2' }}>
          <div className="os-hero-photo" style={{
            backgroundImage: `url("${heroPhotoUrl}")`,
            width: '60%',
          }}></div>
          <div className="os-pattern-stripes" style={{ width: '60%', opacity: .7 }}></div>
        </div>

        {/* left content */}
        <div style={heroStyles.left} className="os-hero-left">
          <div className="os-fade-up" key={`hero-left-${copy.overline}-${headlineKey}`}>
            <div style={heroStyles.overline}>
              <span className="os-rule-light"></span>
              {copy.overline}
            </div>
            <h1 style={heroStyles.h1} className="os-h1">
              {line1}<br/><span style={heroStyles.h1Accent}>{line2}</span>
            </h1>
            <p style={heroStyles.sub}>{copy.sub}</p>
          </div>

          <div style={heroStyles.trustRow} className="os-fade-up-d2">
            <div style={heroStyles.trustCell}>
              <div>
                <div style={heroStyles.trustNum}>
                  {copy.trust.families.num}
                  <span style={{ color: '#9AB6D5' }}>{copy.trust.families.suffix}</span>
                </div>
                <div style={heroStyles.trustLabel}>{copy.trust.families.label}</div>
              </div>
            </div>
            <div style={heroStyles.trustDivider}></div>
            <div style={heroStyles.trustCell}>
              <div>
                <div style={heroStyles.trustNum}>
                  {copy.trust.rating.num}
                  <span style={{ color: '#9AB6D5', fontSize: 22, marginLeft: 4 }}>{copy.trust.rating.suffix}</span>
                </div>
                <div style={heroStyles.trustLabel}>{copy.trust.rating.label}</div>
              </div>
            </div>
            <div style={heroStyles.trustDivider}></div>
            <div style={heroStyles.trustCell}>
              <div>
                <div style={heroStyles.trustNum}>
                  {copy.trust.experience.num}
                  <span style={{ color: '#9AB6D5' }}>{copy.trust.experience.suffix}</span>
                </div>
                <div style={heroStyles.trustLabel}>{copy.trust.experience.label}</div>
              </div>
            </div>
          </div>
        </div>

        {/* right (form) cell */}
        <div style={heroStyles.right} className="os-hero-form-cell os-fade-up-d1">
          {!submitted ? (
            <>
              <div>
                <div style={{ fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--oscar-blue)', fontWeight: 700, marginBottom: 10, display: 'inline-flex', alignItems: 'center', gap: 10 }}>
                  <span className="os-rule"></span> {copy.form.overline}
                </div>
                <h2 style={heroStyles.rightHead}>{copy.form.head}</h2>
                <p style={heroStyles.rightSub}>{copy.form.sub}</p>
              </div>

              <form style={heroStyles.formGrid} onSubmit={handleSubmit} noValidate>
                <div className="os-field">
                  <input type="text" id="name" placeholder=" " value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    aria-invalid={!!errors.name} autoComplete="given-name" />
                  <label htmlFor="name">{copy.form.name}</label>
                  {errors.name && <span className="err">{errors.name}</span>}
                </div>
                <div className="os-field">
                  <input type="email" id="email" placeholder=" " value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    aria-invalid={!!errors.email} autoComplete="email" />
                  <label htmlFor="email">{copy.form.email}</label>
                  {errors.email && <span className="err">{errors.email}</span>}
                </div>
                <div className="os-field">
                  <input type="tel" id="phone" placeholder=" " value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: formatPhone(e.target.value) })}
                    aria-invalid={!!errors.phone} autoComplete="tel" />
                  <label htmlFor="phone">{copy.form.phone}</label>
                  {errors.phone && <span className="err">{errors.phone}</span>}
                </div>

                <button type="submit" style={heroStyles.submit}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--oscar-blue-500)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--oscar-blue)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  {copy.form.submit}
                  <i data-lucide="arrow-right" style={{ width: 18, height: 18, strokeWidth: 2.25 }}></i>
                </button>

                <p style={heroStyles.microcopy}>
                  <i data-lucide="lock" style={{ width: 13, height: 13, color: 'var(--oscar-ink-3)' }}></i>
                  {copy.form.microcopy}
                </p>
              </form>
            </>
          ) : (
            <div style={heroStyles.successWrap}>
              <div style={heroStyles.successIconCirc}>
                <i data-lucide="check" style={{ width: 28, height: 28, strokeWidth: 2.5 }}></i>
              </div>
              <h2 style={heroStyles.rightHead}>{copy.form.successHead.replace('{name}', firstName)}</h2>
              <p style={{ ...heroStyles.rightSub, margin: 0 }}>{copy.form.successBody}</p>
              <a href="#beneficios" className="os-link-arrow" style={{ marginTop: 8 }}>
                {copy.form.successLink}
                <i data-lucide="arrow-down" style={{ width: 16, height: 16 }}></i>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
