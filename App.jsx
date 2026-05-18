/* global React, ReactDOM, COPY, Header, Hero, Benefits, HowItWorks, Testimonials, ClosingCTA, Footer, TweaksPanel, useTweaks, TweakSection, TweakSelect */

const { useEffect: useEffectApp, useState: useStateApp } = React;

const HERO_PHOTOS = {
  dark_sedan: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=1800&q=80&auto=format&fit=crop',
  silver_suv: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1800&q=80&auto=format&fit=crop',
  truck:      'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1800&q=80&auto=format&fit=crop',
};

const SUPPORTED_LANGS = ['en', 'es'];
const DEFAULT_LANG = 'en';

function App() {
  // Language is preference-state, not design-state - kept in localStorage so a
  // refresh remembers what the visitor picked.
  const [lang, setLang] = useStateApp(() => {
    try {
      const v = localStorage.getItem('oscar-lang');
      return SUPPORTED_LANGS.includes(v) ? v : DEFAULT_LANG;
    } catch { return DEFAULT_LANG; }
  });
  useEffectApp(() => {
    try { localStorage.setItem('oscar-lang', lang); } catch {}
    document.documentElement.lang = lang;
  }, [lang]);

  const copy = COPY[lang] || COPY[DEFAULT_LANG];

  const [t, setTweak] = useTweaks(/*EDITMODE-BEGIN*/{
    "headline": "perfect",
    "heroPhoto": "dark_sedan"
  }/*EDITMODE-END*/);

  // Re-render Lucide icons on every React update so newly-mounted <i> tags fill in.
  useEffectApp(() => {
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
  });

  function handleLead(payload) {
    console.log('[Oscar] new lead:', payload, '(lang=' + lang + ')');
  }

  function toggleLang() {
    setLang((cur) => (cur === 'en' ? 'es' : 'en'));
  }

  return (
    <>
      <Header
        copy={copy.nav}
        lang={lang}
        onToggleLang={toggleLang}
        onCta={() => {
          const el = document.getElementById('contacto');
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }} />
      <main>
        <Hero
          copy={copy.hero}
          heroPhotoUrl={HERO_PHOTOS[t.heroPhoto] || HERO_PHOTOS.dark_sedan}
          headlineKey={t.headline}
          onSubmitLead={handleLead} />
        <Benefits copy={copy.benefits} />
        <HowItWorks copy={copy.how} />
        <Testimonials copy={copy.testimonials} />
        <ClosingCTA copy={copy.cta} formLabels={copy.hero.form} onSubmitLead={handleLead} />
      </main>
      <Footer copy={copy.footer} />

      <TweaksPanel title={copy.tweaks.title}>
        <TweakSection label={copy.tweaks.heroSection} />
        <TweakSelect label={copy.tweaks.headlineLabel} value={t.headline}
          options={copy.tweaks.headlineOpts}
          onChange={(v) => setTweak('headline', v)} />
        <TweakSelect label={copy.tweaks.photoLabel} value={t.heroPhoto}
          options={copy.tweaks.photoOpts}
          onChange={(v) => setTweak('heroPhoto', v)} />
      </TweaksPanel>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
