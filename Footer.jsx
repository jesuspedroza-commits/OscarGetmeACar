/* global React */

// =================================================================
// FOOTER - slim, under the dark CTA band.
// =================================================================
const footerStyles = {
  band: {
    background: '#0F1B2D', color: '#fff',
    padding: '28px 0', borderTop: '1px solid rgba(255,255,255,.08)',
  },
  inner: {
    maxWidth: 1240, margin: '0 auto', padding: '0 32px',
    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
    gap: 24, flexWrap: 'wrap',
  },
  left: { display: 'flex', alignItems: 'center', gap: 18, color: '#B8CCDF' },
  logoImg: { height: 28, filter: 'brightness(0) invert(1)', opacity: 0.9 },
  sig: { letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: 11, fontWeight: 600 },
  mid: { display: 'flex', alignItems: 'center', gap: 28, color: '#B8CCDF', fontSize: 13 },
  midLink: { color: '#B8CCDF', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 8, fontWeight: 500 },
  right: { fontSize: 12, letterSpacing: '0.04em', color: '#8FA4BC' },
};

function Footer({ copy }) {
  return (
    <footer style={footerStyles.band}>
      <div style={footerStyles.inner} className="os-section-pad">
        <div style={footerStyles.left}>
          <img src="assets/logo-horizontal-transparent.png" alt="Oscar" style={footerStyles.logoImg} />
          <span style={footerStyles.sig}>{copy.sig}</span>
        </div>
        <div style={footerStyles.mid} className="os-footer-mid">
          <a href="tel:+14075550198" style={footerStyles.midLink}>
            <i data-lucide="phone" style={{ width: 14, height: 14 }}></i>
            (407) 555-0198
          </a>
          <a href="mailto:hola@oscargetmeacar.com" style={footerStyles.midLink}>
            <i data-lucide="mail" style={{ width: 14, height: 14 }}></i>
            hola@oscargetmeacar.com
          </a>
          <span style={{ ...footerStyles.midLink, cursor: 'default' }}>
            <i data-lucide="map-pin" style={{ width: 14, height: 14 }}></i>
            Florida
          </span>
        </div>
        <div style={footerStyles.right}>{copy.copyright}</div>
      </div>
    </footer>
  );
}

window.Footer = Footer;
