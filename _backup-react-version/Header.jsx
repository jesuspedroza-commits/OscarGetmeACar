/* global React */
const { useState } = React;

const headerStyles = {
  bar: {
    position: 'sticky', top: 0, zIndex: 30,
    background: 'rgba(255,255,255,.92)',
    backdropFilter: 'saturate(140%) blur(10px)',
    WebkitBackdropFilter: 'saturate(140%) blur(10px)',
    borderBottom: '1px solid var(--line-1)',
  },
  inner: {
    maxWidth: 1240, margin: '0 auto', padding: '14px 32px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 32,
  },
  logoLink: { display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' },
  logoImg: { height: 36, display: 'block' },
  nav: { display: 'flex', alignItems: 'center', gap: 28 },
  navLink: { fontSize: 14, fontWeight: 500, color: 'var(--fg-2)', textDecoration: 'none', transition: 'color 180ms var(--ease-out)', cursor: 'pointer' },
  navLinkActive: { color: 'var(--oscar-navy)', fontWeight: 600 },
  cta: {
    background: 'var(--oscar-blue)', color: '#fff', border: 'none',
    borderRadius: 'var(--radius-md)', padding: '11px 20px', fontSize: 14, fontWeight: 600,
    cursor: 'pointer', fontFamily: 'inherit', letterSpacing: '-0.005em',
    transition: 'all 180ms var(--ease-out)',
  },
};

function Header({ active = 'inventory', onCta, onNav }) {
  const items = [
    { id: 'inventory', label: 'Inventory' },
    { id: 'financing', label: 'Financing' },
    { id: 'about', label: 'About Us' },
    { id: 'resources', label: 'Resources' },
    { id: 'contact', label: 'Contact' },
  ];
  return (
    <header style={headerStyles.bar}>
      <div style={headerStyles.inner}>
        <a style={headerStyles.logoLink} href="#" onClick={(e) => { e.preventDefault(); onNav && onNav('home'); }}>
          <img src="assets/logo-horizontal-transparent.png" alt="Oscar Get me a Car" style={headerStyles.logoImg} />
        </a>
        <nav style={headerStyles.nav}>
          {items.map(it => (
            <a key={it.id} href="#"
               style={{ ...headerStyles.navLink, ...(active === it.id ? headerStyles.navLinkActive : {}) }}
               onClick={(e) => { e.preventDefault(); onNav && onNav(it.id); }}>
              {it.label}
            </a>
          ))}
        </nav>
        <button style={headerStyles.cta} onClick={onCta}
          onMouseEnter={(e) => e.currentTarget.style.background = 'var(--oscar-blue-500)'}
          onMouseLeave={(e) => e.currentTarget.style.background = 'var(--oscar-blue)'}>
          Get Started
        </button>
      </div>
    </header>
  );
}
window.Header = Header;
