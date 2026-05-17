/* global React */
const { useState: useStateCTA } = React;

// =================================================================
// CLOSING CTA — dark band with second lead form.
// Takes ctaCopy + formLabels (reused from hero.form for name/email/phone).
// =================================================================
const ctaStyles = {
  wrap: {
    position: 'relative',
    background: 'linear-gradient(135deg, #0F1B2D 0%, #1E3A5F 40%, #264A78 100%)',
    color: '#fff', overflow: 'hidden',
  },
  inner: {
    maxWidth: 1240, margin: '0 auto', padding: '88px 32px 96px',
    position: 'relative', zIndex: 2,
    display: 'grid', gridTemplateColumns: '5fr 6fr', gap: 56, alignItems: 'center',
  },
  overline: {
    fontSize: 12, letterSpacing: '0.16em', textTransform: 'uppercase',
    color: '#9AB6D5', fontWeight: 700, marginBottom: 16,
    display: 'inline-flex', alignItems: 'center', gap: 12,
  },
  h2: {
    fontFamily: 'var(--font-display)',
    fontSize: 46, lineHeight: 1.05, letterSpacing: '-0.025em', fontWeight: 800,
    color: '#fff', margin: '0 0 18px', textWrap: 'balance',
  },
  lead: { fontSize: 17, lineHeight: 1.55, color: '#DCE6F1', margin: '0 0 24px', maxWidth: 440 },
  badges: { display: 'flex', flexWrap: 'wrap', gap: 10, marginTop: 8 },
  badge: {
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '8px 14px',
    background: 'rgba(255,255,255,.06)',
    border: '1px solid rgba(255,255,255,.18)',
    borderRadius: 'var(--radius-pill)',
    fontSize: 13, color: '#DCE6F1', fontWeight: 500,
  },

  card: {
    background: '#fff', borderRadius: 'var(--radius-xl)',
    padding: '36px 36px 32px',
    boxShadow: '0 20px 50px rgba(0,0,0,.25)',
    display: 'flex', flexDirection: 'column', gap: 14,
  },
  cardHead: {
    fontFamily: 'var(--font-display)', fontSize: 22, lineHeight: 1.2,
    fontWeight: 700, color: 'var(--oscar-navy)', margin: 0, letterSpacing: '-0.01em',
  },
  cardSub: { fontSize: 14, color: 'var(--oscar-ink-3)', margin: '4px 0 8px' },
  formGrid: { display: 'grid', gap: 12 },
  submit: {
    background: 'var(--oscar-navy)', color: '#fff',
    border: 'none', borderRadius: 'var(--radius-md)',
    padding: '15px 22px', fontSize: 15, fontWeight: 700,
    cursor: 'pointer', transition: 'all 180ms var(--ease-out)', marginTop: 4,
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 10,
  },
  microcopy: {
    fontSize: 12, color: 'var(--oscar-ink-3)', margin: '6px 0 0',
    display: 'inline-flex', alignItems: 'center', gap: 8,
  },
  success: {
    display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
    gap: 12, animation: 'oscarSlideUp 420ms var(--ease-out) both',
  },
  successIcon: {
    width: 56, height: 56, borderRadius: '50%',
    background: 'var(--oscar-success-bg)', color: 'var(--oscar-success)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    border: '1.5px solid var(--oscar-success)',
  },
};

function ClosingCTA({ copy, formLabels, onSubmitLead }) {
  const [form, setForm] = useStateCTA({ name: '', email: '', phone: '' });
  const [errors, setErrors] = useStateCTA({});
  const [submitted, setSubmitted] = useStateCTA(false);

  React.useEffect(() => { setErrors({}); }, [copy]);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = formLabels.errors.name;
    if (!/^\S+@\S+\.\S+$/.test(form.email)) e.email = formLabels.errors.email;
    if (form.phone.replace(/\D/g, '').length < 10) e.phone = formLabels.errors.phone;
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
  const firstName = form.name.trim().split(' ')[0] || '';

  return (
    <section id="contacto" style={ctaStyles.wrap}>
      <div className="os-pattern-stripes"></div>
      <div style={ctaStyles.inner} className="os-section-pad os-cta-grid">
        <div>
          <div style={ctaStyles.overline}>
            <span className="os-rule-light"></span> {copy.overline}
          </div>
          <h2 style={ctaStyles.h2} className="os-h2">
            {copy.h2line1} <br/>{copy.h2line2}
          </h2>
          <p style={ctaStyles.lead}>{copy.lead}</p>
          <div style={ctaStyles.badges}>
            {copy.badges.map((b, i) => (
              <span key={i} style={ctaStyles.badge}>
                <i data-lucide={b.icon} style={{ width: 14, height: 14, color: '#9AB6D5' }}></i>
                {b.text}
              </span>
            ))}
          </div>
        </div>

        <div style={ctaStyles.card}>
          {!submitted ? (
            <>
              <div>
                <h3 style={ctaStyles.cardHead}>{copy.card.head}</h3>
                <p style={ctaStyles.cardSub}>{copy.card.sub}</p>
              </div>
              <form style={ctaStyles.formGrid} onSubmit={handleSubmit} noValidate>
                <div className="os-field">
                  <input type="text" id="cta-name" placeholder=" " value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    aria-invalid={!!errors.name} autoComplete="given-name" />
                  <label htmlFor="cta-name">{formLabels.name}</label>
                  {errors.name && <span className="err">{errors.name}</span>}
                </div>
                <div className="os-field">
                  <input type="email" id="cta-email" placeholder=" " value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    aria-invalid={!!errors.email} autoComplete="email" />
                  <label htmlFor="cta-email">{formLabels.email}</label>
                  {errors.email && <span className="err">{errors.email}</span>}
                </div>
                <div className="os-field">
                  <input type="tel" id="cta-phone" placeholder=" " value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: formatPhone(e.target.value) })}
                    aria-invalid={!!errors.phone} autoComplete="tel" />
                  <label htmlFor="cta-phone">{formLabels.phone}</label>
                  {errors.phone && <span className="err">{errors.phone}</span>}
                </div>
                <button type="submit" style={ctaStyles.submit}
                  onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--oscar-navy-700)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--oscar-navy)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                  {copy.card.submit}
                  <i data-lucide="arrow-right" style={{ width: 18, height: 18, strokeWidth: 2.25 }}></i>
                </button>
                <p style={ctaStyles.microcopy}>
                  <i data-lucide="lock" style={{ width: 13, height: 13 }}></i>
                  {copy.card.microcopy}
                </p>
              </form>
            </>
          ) : (
            <div style={ctaStyles.success}>
              <div style={ctaStyles.successIcon}>
                <i data-lucide="check" style={{ width: 28, height: 28, strokeWidth: 2.5 }}></i>
              </div>
              <h3 style={ctaStyles.cardHead}>{copy.card.successHead.replace('{name}', firstName)}</h3>
              <p style={{ ...ctaStyles.cardSub, margin: 0 }}>{copy.card.successBody}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

window.ClosingCTA = ClosingCTA;
