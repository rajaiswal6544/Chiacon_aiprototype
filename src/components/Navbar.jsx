export default function Navbar() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <nav className="navbar" role="navigation" aria-label="Main navigation">
      <div className="container navbar-inner">
        <a className="nav-brand" href="#" aria-label="Chiacon home">
          <div className="nav-logo-mark"><span>Ch</span></div>
          <span className="nav-name">Chiacon</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about'); }}>Capabilities</a></li>
          <li><a href="#use-cases" onClick={(e) => { e.preventDefault(); scrollTo('use-cases'); }}>Use Cases</a></li>
          <li>
            <a
              href="#ai-demo"
              className="btn-nav"
              onClick={(e) => { e.preventDefault(); scrollTo('ai-demo'); }}
            >
              Try AI Demo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
