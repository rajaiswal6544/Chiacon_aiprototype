const CAPABILITIES = [
  {
    icon: '🎯',
    title: 'AI Strategy Consulting',
    desc: 'Structured roadmaps that connect AI investments to business objectives and measurable KPIs.',
  },
  {
    icon: '⚙️',
    title: 'Intelligent Process Automation',
    desc: 'End-to-end automation of high-volume manual workflows using AI and RPA technologies.',
  },
  {
    icon: '📊',
    title: 'Predictive Analytics',
    desc: 'Machine learning models that convert historical data into forward-looking operational insight.',
  },
  {
    icon: '📋',
    title: 'AI-Powered Reporting',
    desc: 'Automated, dynamic reporting pipelines that reduce manual effort and increase data accuracy.',
  },
  {
    icon: '🔗',
    title: 'Enterprise AI Integration',
    desc: 'Seamless embedding of AI capabilities into existing ERP, CRM, and data platforms.',
  },
];

export default function About() {
  return (
    <section className="about" id="about" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <p className="section-label">What We Do</p>
            <h2 className="section-title" id="about-heading">Chiacon's AI Capability</h2>
            <p>
              Chiacon is an enterprise AI consulting firm that works with organisations
              to build practical, scalable AI solutions. We begin with a structured AI
              readiness assessment, aligning technology investments with business
              strategy before a single line of code is written.
            </p>
            <p>
              Our engagements span the full AI delivery lifecycle — from use-case
              identification and data architecture, through model development and
              integration, to change management and performance monitoring. We work
              across FMCG, Oil &amp; Gas, Healthcare, Financial Services, Retail, and
              Manufacturing sectors.
            </p>
            <p>
              Every engagement is grounded in business outcomes: reduced costs,
              faster decisions, and competitive advantage that endures beyond the
              initial deployment.
            </p>
          </div>

          <div className="capability-list" aria-label="Key AI capabilities">
            {CAPABILITIES.map((cap) => (
              <div className="capability-item" key={cap.title}>
                <span className="icon">{cap.icon}</span>
                <div>
                  <strong>{cap.title}</strong>
                  <span>{cap.desc}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
