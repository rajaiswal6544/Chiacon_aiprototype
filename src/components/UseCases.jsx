const USE_CASES = [
  {
    industry: 'FMCG',
    title: 'Automated Reporting & Demand Forecasting',
    problem:
      'Manual consolidation of sales and inventory data was consuming significant analyst capacity, and forecast accuracy remained poor due to reliance on static spreadsheet models.',
    solution:
      'Machine learning forecasting engine integrated with POS data, combined with an automated weekly reporting pipeline to replace manual processes entirely.',
    outcome:
      '25–35% improvement in forecast accuracy. 80% reduction in manual reporting effort. Faster response to demand signals.',
  },
  {
    industry: 'Oil & Gas',
    title: 'Predictive Equipment Maintenance',
    problem:
      'Unplanned equipment failures were causing costly production downtime and reactive maintenance cycles, with no early-warning visibility across field assets.',
    solution:
      'Predictive maintenance models applied to IoT sensor streams, flagging anomalies and projecting failure windows to enable proactive maintenance interventions.',
    outcome:
      '20–30% reduction in unplanned downtime. 15% decrease in maintenance cost. Improved asset lifespan and HSE performance.',
  },
  {
    industry: 'Healthcare',
    title: 'Medical Claims Processing Automation',
    problem:
      'High volumes of medical claims required manual review, leading to processing backlogs, delayed reimbursements, and elevated administrative overhead.',
    solution:
      'NLP-powered document extraction and triage engine to automate eligibility checks, route complex claims, and flag exceptions for human review.',
    outcome:
      '50–60% reduction in processing time. 30% lower admin cost. Improved accuracy and regulatory compliance across claims workflows.',
  },
];

export default function UseCases() {
  return (
    <section className="use-cases" id="use-cases" aria-labelledby="use-cases-heading">
      <div className="container">
        <p className="section-label">Industry Applications</p>
        <h2 className="section-title" id="use-cases-heading">AI Use Cases in Practice</h2>
        <p className="section-sub">
          The following examples illustrate how Chiacon identifies and applies AI to
          real enterprise challenges across sectors.
        </p>

        <div className="cards-grid">
          {USE_CASES.map((uc) => (
            <article className="card" key={uc.industry} aria-label={`${uc.industry} use case`}>
              <p className="card-industry">{uc.industry}</p>
              <h3>{uc.title}</h3>
              <div className="card-row">
                <label>Business Problem</label>
                <p>{uc.problem}</p>
              </div>
              <div className="card-row">
                <label>AI Solution</label>
                <p>{uc.solution}</p>
              </div>
              <div className="card-outcome">
                <label>Expected Business Outcome</label>
                <p>{uc.outcome}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
