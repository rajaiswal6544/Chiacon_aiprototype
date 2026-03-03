import { useState, useRef } from 'react';

const API_URL = 'https://chiacon-aiprototype.onrender.com/api/generate';

const INDUSTRIES = [
  { value: 'general',       label: 'Select Industry (Optional)' },
  { value: 'fmcg',          label: 'FMCG & Consumer Goods' },
  { value: 'oilgas',        label: 'Oil & Gas' },
  { value: 'healthcare',    label: 'Healthcare & Life Sciences' },
  { value: 'finance',       label: 'Financial Services' },
  { value: 'retail',        label: 'Retail & E-Commerce' },
  { value: 'manufacturing', label: 'Manufacturing & Supply Chain' },
];

// ── Main component ───────────────────────────────────────────────────────────
export default function AiDemo() {
  const [problem,  setProblem]  = useState('');
  const [industry, setIndustry] = useState('general');
  const [loading,  setLoading]  = useState(false);
  const [result,   setResult]   = useState(null);   // parsed JSON from API
  const [error,    setError]    = useState('');
  const textareaRef = useRef(null);

  // ── API call ───────────────────────────────────────────────────────────────
  const handleGenerate = async () => {
    const trimmed = problem.trim();

    if (trimmed.length < 20) {
      textareaRef.current?.focus();
      textareaRef.current?.classList.add('input-error');
      setTimeout(() => textareaRef.current?.classList.remove('input-error'), 1800);
      return;
    }

    setLoading(true);
    setResult(null);
    setError('');

    const payload = {
      problem: trimmed,
      industry: industry !== 'general' ? industry : undefined
    };

    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || `Server error (${res.status})`);
      }

      setResult(data);
    } catch (err) {
      setError(err.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <section className="ai-demo" id="ai-demo" aria-labelledby="demo-heading">
      <div className="container">
        <p className="section-label">Interactive Demo</p>
        <h2 className="section-title" id="demo-heading">
          Generate AI Opportunities for Your Business
        </h2>
        <p className="section-sub">
          Describe a business challenge. Our AI engine will identify applicable
          strategies, opportunities, and expected outcomes relevant to your context.
        </p>

        <div className="demo-wrapper">
          {/* ── Input Panel ── */}
          <div className="demo-input-panel">
            <div className="panel-header"><h4>Describe Your Business Problem</h4></div>
            <div className="panel-body">

              <label className="field-label" htmlFor="industry-select">Industry Sector</label>
              <select
                id="industry-select"
                className="industry-select"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                aria-label="Select your industry"
              >
                {INDUSTRIES.map((opt) => (
                  <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))}
              </select>

              <label className="field-label" htmlFor="business-problem">Business Problem</label>
              <textarea
                id="business-problem"
                ref={textareaRef}
                className="problem-textarea"
                placeholder="e.g. We are struggling to accurately forecast product demand across our SKU portfolio. Our current process is manual, spreadsheet-based, and we frequently experience stock-outs or overstocking at distribution centres…"
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                aria-label="Describe your business problem"
              />

              <button
                className="btn-generate"
                onClick={handleGenerate}
                disabled={loading}
                aria-busy={loading}
              >
                {loading ? 'Generating…' : 'Generate Strategy'}
              </button>
            </div>
          </div>

          {/* ── Output Panel ── */}
          <div className="demo-output-panel" id="demo-output">
            <div className="panel-header"><h4>AI Strategy Output</h4></div>
            <div className="panel-body">

              {/* Placeholder */}
              {!loading && !result && !error && (
                <div className="output-placeholder">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none"
                    stroke="#94a3b8" strokeWidth="1.5" strokeLinecap="round"
                    strokeLinejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 8v4l3 3" />
                  </svg>
                  <p>Your AI strategy will appear here after you submit a business problem.</p>
                </div>
              )}

              {/* Spinner */}
              {loading && (
                <div className="spinner" aria-live="polite" aria-label="Generating strategy">
                  <div className="spinner-ring" />
                  <p>Analysing your input…</p>
                </div>
              )}

              {/* Error */}
              {error && (
                <div className="out-error" role="alert">{error}</div>
              )}

              {/* Result */}
              {result && (
                <div className="output-result" aria-live="polite">

                  {/* Problem Summary */}
                  <div className="output-section">
                    <h5>Problem Summary</h5>
                    <p>{result.summary}</p>
                  </div>

                  {/* AI Opportunities */}
                  {result.opportunities?.length > 0 && (
                    <div className="output-section">
                      <h5>AI Opportunities</h5>
                      <ul>
                        {result.opportunities.map((opp, i) => (
                          <li key={i}>
                            <strong>{opp.title}</strong>
                            {opp.description ? ` — ${opp.description}` : ''}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Expected Business Impact */}
                  {result.impact?.length > 0 && (
                    <div className="output-section">
                      <h5>Expected Business Impact</h5>
                      <div className="output-impact">
                        <ul>
                          {result.impact.map((item, i) => (
                            <li key={i}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                </div>
              )}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
