/* global React */
const { useState: useStateModal } = React;

const modalStyles = {
  scrim: {
    position: 'fixed', inset: 0, background: 'rgba(15, 27, 45, 0.55)',
    backdropFilter: 'blur(4px)', zIndex: 100,
    display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24,
    animation: 'oscarFadeIn 240ms var(--ease-out)',
  },
  dialog: {
    background: '#fff', borderRadius: 'var(--radius-xl)', padding: '36px 36px 32px',
    width: '100%', maxWidth: 480, boxShadow: 'var(--shadow-4)', position: 'relative',
    animation: 'oscarSlideUp 280ms var(--ease-out)',
  },
  close: {
    position: 'absolute', top: 16, right: 16, background: 'transparent', border: 'none',
    cursor: 'pointer', color: 'var(--fg-3)', display: 'flex', alignItems: 'center',
    justifyContent: 'center', width: 32, height: 32, borderRadius: 8, transition: 'all 180ms var(--ease-out)',
  },
  overline: { fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--oscar-blue)', fontWeight: 600, marginBottom: 12 },
  title: { fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 800, letterSpacing: '-0.015em', lineHeight: 1.1, color: 'var(--oscar-navy)', margin: '0 0 8px' },
  sub: { fontSize: 14, color: 'var(--fg-3)', lineHeight: 1.5, margin: '0 0 24px' },
  field: { display: 'flex', flexDirection: 'column', gap: 6, marginBottom: 14 },
  label: { fontSize: 13, fontWeight: 600, color: 'var(--fg-1)' },
  input: {
    border: '1px solid var(--line-2)', background: '#fff', borderRadius: 10, padding: '11px 14px',
    fontFamily: 'inherit', fontSize: 14, color: 'var(--fg-1)', outline: 'none', transition: 'all 180ms var(--ease-out)',
  },
  inputFocus: { borderColor: 'var(--oscar-blue)', boxShadow: '0 0 0 4px rgba(45,90,140,.18)' },
  select: { border: '1px solid var(--line-2)', background: '#fff', borderRadius: 10, padding: '11px 14px', fontFamily: 'inherit', fontSize: 14, color: 'var(--fg-1)', cursor: 'pointer' },
  help: { fontSize: 12, color: 'var(--fg-3)' },
  submit: {
    background: 'var(--oscar-blue)', color: '#fff', border: 'none', borderRadius: 'var(--radius-md)',
    padding: '13px 22px', fontSize: 15, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
    width: '100%', marginTop: 10, transition: 'all 180ms var(--ease-out)',
  },
  fineprint: { fontSize: 11, color: 'var(--fg-3)', textAlign: 'center', marginTop: 14 },
  successWrap: { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '8px 0 8px' },
  successCirc: {
    width: 64, height: 64, borderRadius: '50%', background: 'var(--oscar-success-bg)',
    color: 'var(--oscar-success)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
  },
};

function TalkModal({ open, onClose }) {
  const [focus, setFocus] = useStateModal('');
  const [submitted, setSubmitted] = useStateModal(false);
  const [form, setForm] = useStateModal({ name: '', phone: '', budget: '$250–$350/mo' });

  if (!open) return null;

  const set = (k, v) => setForm({ ...form, [k]: v });
  const submit = (e) => { e.preventDefault(); setSubmitted(true); };
  const reset = () => { setSubmitted(false); setForm({ name: '', phone: '', budget: '$250–$350/mo' }); onClose(); };

  return (
    <div style={modalStyles.scrim} onClick={reset}>
      <form style={modalStyles.dialog} onClick={(e) => e.stopPropagation()} onSubmit={submit}>
        <button type="button" style={modalStyles.close} onClick={reset}
          onMouseEnter={(e) => e.currentTarget.style.background = 'var(--bg-3)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}>
          <i data-lucide="x" style={{width: 18, height: 18}}></i>
        </button>
        {submitted ? (
          <div style={modalStyles.successWrap}>
            <div style={modalStyles.successCirc}>
              <i data-lucide="check" style={{width: 32, height: 32, strokeWidth: 2.5}}></i>
            </div>
            <div style={modalStyles.overline}>Got it</div>
            <h2 style={modalStyles.title}>Oscar will reach out within one business day.</h2>
            <p style={modalStyles.sub}>No spam, no hard sells. Just a real conversation about what fits your budget.</p>
            <button type="button" style={modalStyles.submit} onClick={reset}>Close</button>
          </div>
        ) : (
          <>
            <div style={modalStyles.overline}>Talk to Oscar</div>
            <h2 style={modalStyles.title}>Tell us a little about you.</h2>
            <p style={modalStyles.sub}>We'll text you back to set up a no-pressure call. Takes 30 seconds.</p>
            <div style={modalStyles.field}>
              <label style={modalStyles.label} htmlFor="nm">Full name</label>
              <input id="nm" required style={{...modalStyles.input, ...(focus === 'nm' ? modalStyles.inputFocus : {})}}
                value={form.name} placeholder="Carlos Ramírez"
                onChange={(e) => set('name', e.target.value)}
                onFocus={() => setFocus('nm')} onBlur={() => setFocus('')} />
            </div>
            <div style={modalStyles.field}>
              <label style={modalStyles.label} htmlFor="ph">Phone</label>
              <input id="ph" required style={{...modalStyles.input, ...(focus === 'ph' ? modalStyles.inputFocus : {})}}
                value={form.phone} placeholder="(407) 555-0198"
                onChange={(e) => set('phone', e.target.value)}
                onFocus={() => setFocus('ph')} onBlur={() => setFocus('')} />
              <div style={modalStyles.help}>We'll only text. No spam.</div>
            </div>
            <div style={modalStyles.field}>
              <label style={modalStyles.label} htmlFor="bg">Comfortable monthly budget</label>
              <select id="bg" style={modalStyles.select} value={form.budget} onChange={(e) => set('budget', e.target.value)}>
                <option>Under $250/mo</option>
                <option>$250–$350/mo</option>
                <option>$350–$450/mo</option>
                <option>$450–$600/mo</option>
                <option>I'm not sure yet</option>
              </select>
            </div>
            <button type="submit" style={modalStyles.submit}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--oscar-blue-500)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'var(--oscar-blue)'}>
              Get my options
            </button>
            <p style={modalStyles.fineprint}>By submitting you agree to be contacted by Oscar. Nothing more.</p>
          </>
        )}
      </form>
    </div>
  );
}
window.TalkModal = TalkModal;
