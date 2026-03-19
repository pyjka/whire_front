const productPillars = [
  {
    title: "Programmable Payment Rails",
    description:
      "Embed charging, settlement, and payout logic directly into agent workflows with reliable, auditable orchestration."
  },
  {
    title: "Built For Autonomous Commerce",
    description:
      "Support AI agents that negotiate, transact, and reconcile in real time without fragile human approval chains."
  },
  {
    title: "Operator-Level Visibility",
    description:
      "Track payment state, routing confidence, and exceptions from a single control plane designed for finance and ops teams."
  }
];

const highlights = [
  "Intent-aware authorization",
  "Ledger-ready reconciliation",
  "Risk controls for agents",
  "Global payout orchestration"
];

const metrics = [
  { value: "24/7", label: "Always-on transaction automation" },
  { value: "<150ms", label: "Infrastructure response target" },
  { value: "1 API", label: "Unified payments control surface" }
];

export default function Home() {
  return (
    <main className="landing-page">
      <section className="hero-shell">
        <nav className="topbar">
          <div className="brand-mark">
            <span className="brand-dot" />
            <span>Whire</span>
          </div>
          <div className="topbar-links">
            <a href="#platform">Platform</a>
            <a href="#benefits">Why Whire</a>
            <a href="#contact">Contact</a>
          </div>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Agentic AI payment infrastructure</p>
            <h1>Give intelligent agents the rails to move money safely.</h1>
            <p className="hero-text">
              Whire helps modern product teams build AI-native payment
              experiences with programmable transaction flows, resilient
              settlement, and finance-grade observability.
            </p>

            <div className="hero-actions">
              <a className="primary-button" href="mailto:hello@whire.ai">
                Book a demo
              </a>
              <a className="secondary-button" href="#platform">
                Explore platform
              </a>
            </div>

            <ul className="highlight-list" aria-label="Key capabilities">
              {highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="hero-panel">
            <div className="panel-card glass-card">
              <div className="panel-header">
                <span className="panel-chip">Live orchestration</span>
                <span className="panel-status">Stable</span>
              </div>

              <div className="payment-flow">
                <div>
                  <p className="label">Agent intent</p>
                  <strong>Collect usage-based payment</strong>
                </div>
                <span className="flow-line" />
                <div>
                  <p className="label">Whire decisioning</p>
                  <strong>Authorize, route, settle, log</strong>
                </div>
                <span className="flow-line" />
                <div>
                  <p className="label">Business outcome</p>
                  <strong>Funds reconciled in one ledger</strong>
                </div>
              </div>
            </div>

            <div className="metrics-grid">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" id="platform">
        <div className="section-heading">
          <p className="eyebrow">A platform for autonomous transactions</p>
          <h2>From agent intent to settled funds, in one infrastructure layer.</h2>
        </div>

        <div className="pillar-grid">
          {productPillars.map((pillar) => (
            <article key={pillar.title} className="pillar-card">
              <div className="pillar-icon" aria-hidden="true">
                <span />
              </div>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="content-section emphasis-section" id="benefits">
        <div className="emphasis-copy">
          <p className="eyebrow">Why teams choose Whire</p>
          <h2>Infrastructure that understands how AI products transact.</h2>
          <p>
            Traditional payments stacks were built for forms and checkout
            buttons. Whire is designed for agent-driven actions, multi-step
            flows, and transaction intelligence that needs to react in real
            time.
          </p>
        </div>

        <div className="benefit-stack">
          <div className="benefit-card">
            <span>01</span>
            <div>
              <h3>Reduce payment friction</h3>
              <p>
                Replace brittle handoffs with API-native controls that AI
                agents can use securely and predictably.
              </p>
            </div>
          </div>
          <div className="benefit-card">
            <span>02</span>
            <div>
              <h3>Ship faster with fewer systems</h3>
              <p>
                Consolidate routing, authorization logic, and reconciliation
                into a single platform surface.
              </p>
            </div>
          </div>
          <div className="benefit-card">
            <span>03</span>
            <div>
              <h3>Operate with confidence</h3>
              <p>
                Give finance, risk, and product teams shared visibility into
                every transaction state change.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section" id="contact">
        <div>
          <p className="eyebrow">Launch the payments layer for your agents</p>
          <h2>Build the next generation of AI commerce on Whire.</h2>
        </div>
        <a className="primary-button" href="mailto:hello@whire.ai">
          Start the conversation
        </a>
      </section>
    </main>
  );
}
