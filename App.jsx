/* global React, Header, Hero, ValueRow, Inventory, FooterBand, TalkModal */
const { useState: useStateApp, useEffect: useEffectApp } = React;

function App() {
  const [modalOpen, setModalOpen] = useStateApp(false);
  const [active, setActive] = useStateApp('inventory');

  useEffectApp(() => {
    if (window.lucide && window.lucide.createIcons) window.lucide.createIcons();
  });

  return (
    <>
      <Header active={active} onCta={() => setModalOpen(true)} onNav={setActive} />
      <main>
        <Hero onCta={() => setModalOpen(true)} />
        <ValueRow />
        <Inventory />
      </main>
      <FooterBand />
      <TalkModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
