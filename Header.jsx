/* global React */

// =================================================================
// HEADER — sticky, glass, logo + nav + lang toggle + CTA
// =================================================================
const headerStyles = {
  bar: {
    position: 'sticky', top: 0, zIndex: 40,
    background: 'rgba(255,255,255,.92)',
    backdropFilter: 'saturate(140%) blur(12px)',
    WebkitBackdropFilter: 'saturate(140%) blur(12px)',
    borderBottom: '1px solid var(--line-1)',
  },
  inner: {
    maxWidth: 1240, margin: '0 auto', padding: '14px 32px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32,
  },
  logoLink: { display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' },
  logoImg: { height: 36, display: 'block' },
  nav: { display: 'flex', alignItems: 'center', gap: 30 },
  navLink: {
    fontSize: 14, fontWeight: 500,
    color: 'var(--fg-2)', textDecoration: 'none',
    transition: 'color 180ms var(--ease-out)', cursor: 'pointer',
  },
  right: { display: 'flex', alignItems: 'center', gap: 14 },
  langBtn: {
    display: 'inline-flex', alignItems: 'center', gap: 6,
    padding: '8px 12px',
    background: '#fff',
    border: '1px solid var(--line-2)',
    borderRadius: 'var(--radius-md)',
    fontSize: 13, fontWeight: 700,
    color: 'var(--oscar-navy)',
    cursor: 'pointer',
    transition: 'all 180ms var(--ease-out)',
    letterSpacing: '0.04em',
  },
  langBtnLabel: { fontSize: 12, fontWeight: 700, letterSpacing: '0.06em' },
  phone: {
    display: 'flex', alignItems: 'center', gap: 8,
    color: 'var(--oscar-navy)', fontSize: 14, fontWeight: 600, textDecoration: 'none',
  },
  cta: {
    background: 'var(--oscar-navy)', color: '#fff',
    border: 'none', borderRadius: 'var(--radius-md)',
    padding: '11px 20px', fontSize: 14, fontWeight: 600,
    cursor: 'pointer', letterSpacing: '-0.005em',
    transition: 'all 180ms var(--ease-out)',
  },
};

function Header({ copy, lang, onToggleLang, onCta }) {
  const items = [
    { id: 'beneficios',  label: copy.whyOscar },
    { id: 'testimonios', label: copy.testimonials },
    { id: 'preguntas',   label: copy.how },
    { id: 'contacto',    label: copy.contact },
  ];
  return (
    <header style={headerStyles.bar}>
      <div style={headerStyles.inner} className="os-header-inner">
        <a style={headerStyles.logoLink} href="#top">
          <img src="assets/logo-horizontal-transparent.png" alt="Oscar Get me a Car" style={headerStyles.logoImg} />
        </a>
        <nav style={headerStyles.nav} className="os-nav-links">
          {items.map(it => (
            <a key={it.id} href={`#${it.id}`} style={headerStyles.navLink}
              onMouseEnter={(e) => e.currentTarget.style.color = 'var(--oscar-navy)'}
              onMouseLeave={(e) => e.currentTarget.style.color = 'var(--fg-2)'}>
              {it.label}
            </a>
          ))}
        </nav>
        <div style={headerStyles.right}>
          <button
            type="button"
            onClick={onToggleLang}
            aria-label={copy.langToggleAria}
            title={copy.langToggleAria}
            style={headerStyles.langBtn}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--oscar-navy)'; e.currentTarget.style.background = 'var(--bg-3)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--line-2)'; e.currentTarget.style.background = '#fff'; }}>
            <i data-lucide="languages" style={{ width: 14, height: 14, strokeWidth: 2 }}></i>
            <span style={headerStyles.langBtnLabel}>{copy.langToggleLabel}</span>
          </button>
          <a href="tel:+14075550198" style={headerStyles.phone} className="os-nav-phone">
            <i data-lucide="phone" style={{ width: 16, height: 16, strokeWidth: 2 }}></i>
            (407) 555-0198
          </a>
          <button style={headerStyles.cta} onClick={onCta}
            onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--oscar-navy-700)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--oscar-navy)'; e.currentTarget.style.transform = 'translateY(0)'; }}>
            {copy.ctaButton}
          </button>
        </div>
      </div>
    </header>
  );
}

window.Header = Header;
