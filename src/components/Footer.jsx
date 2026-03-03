export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <div className="footer-inner">
          <div className="footer-brand">
            <div className="footer-logo-mark"><span>Ch</span></div>
            <span className="footer-brand-name">Chiacon</span>
          </div>
          <p className="footer-copy">© 2026 Chiacon. Enterprise AI Consulting.</p>
          <nav className="footer-links" aria-label="Footer navigation">
            <a href="#about">Capabilities</a>
            <a href="#use-cases">Use Cases</a>
            <a href="#ai-demo">AI Demo</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
