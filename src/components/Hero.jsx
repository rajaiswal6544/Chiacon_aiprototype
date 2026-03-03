export default function Hero() {
  const scrollToDemo = (e) => {
    e.preventDefault();
    document.getElementById('ai-demo')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const scrollToAbout = (e) => {
    e.preventDefault();
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="hero" id="home" aria-labelledby="hero-heading">
      <div className="container">
        <div className="hero-inner">
          <span className="hero-label">Enterprise AI Consulting</span>
          <h1 id="hero-heading">
            Enterprise AI Strategy &amp;<br />Intelligent Automation
          </h1>
          <p>
            Chiacon helps businesses identify, design, and implement AI-driven solutions
            to improve efficiency, accelerate decision-making, and deliver measurable
            operational performance gains — from strategy through to deployment.
          </p>
          <div className="hero-actions">
            <a href="#ai-demo" className="btn-primary" onClick={scrollToDemo}>Try AI Demo</a>
            <a href="#about" className="btn-secondary" onClick={scrollToAbout}>Our Capabilities</a>
          </div>
        </div>
      </div>
    </section>
  );
}
