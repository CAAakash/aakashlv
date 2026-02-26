type CaseStudy = {
  title: string;
  oneLiner: string;
  problem: string;
  approach: string[];
  solution: string[];
  outcome: string[];
};

type SectionBlock = {
  id: "startup" | "deloitte" | "life";
  label: string;
  subtitle: string;
  intro: string;
  cases: CaseStudy[];
};

const PROFILE = {
  name: "Aakash L V",
  title: "Chartered Accountant",
  location: "Chennai, Tamil Nadu, India",
  email: "aakashvijayakumar026@gmail.com",
  phone: "+91 6382061126",
 
};

const HIGHLIGHTS = [
  "Deputy Manager, Deloitte Haskins & Sells LLP (Audit & Assurance)",
  "On-field lead experience across statutory audits, ICFR reporting, and process-heavy engagements",
  "Built finance/compliance software products as a CA transitioning into product & technology execution",
  "Combines domain depth (audit/accounting/controls) with hands-on building capability",
];

const SECTIONS: SectionBlock[] = [
  {
    id: "startup",
    label: "Startup",
    subtitle: "Building under uncertainty, converting domain pain into product opportunities",
    intro:
      "Focus area: translating finance/audit process friction into productizable systems while learning and executing in parallel.",
    cases: [
      {
        title: "Learning Tech as a non-technical founder to build finance software",
        oneLiner:
          "Converted domain knowledge into execution leverage by learning and shipping in parallel.",
        problem:
          "Needed to build finance/compliance software quickly enough to test the market, despite not coming from a formal software engineering background.",
        approach: [
          "Started from domain workflows (what finance/audit teams actually do) before technology choices.",
          "Learned while building instead of delaying execution until ‘complete technical readiness’.",
          "Prioritized MVP workflows with immediate user value: onboarding, tracking, evidence-oriented processes.",
          "Used iterative development and feedback loops instead of over-designing architecture upfront.",
        ],
        solution: [
          "Built functional MVP-grade product modules using modern web stack components (frontend, backend, database).",
          "Created a repeatable build cycle: map workflow → implement → test → refine.",
          "Reduced dependency on external developers and increased prototyping speed.",
        ],
        outcome: [
          "Shipped finance/compliance product features faster",
          "Established a domain + tech execution edge",
          "Improved speed of experimentation and learning",
        ],
      },
    {
  title: "Solving GTM and Channel in AccEase by building Outbound AI agent",
  oneLiner:
    "Built structured outbound experimentation to identify repeatable ICP, messaging, and distribution channels for enterprise audit automation.",

  problem:
    "Early traction existed but growth was inconsistent due to unclear ICP segmentation, non-repeatable outreach, and lack of validated acquisition channels for internal audit/compliance buyers.",

  approach: [
    "Designed outbound system targeting CFOs, Internal Audit Heads, and Compliance leaders across listed and large private companies.",
    "Ran structured LinkedIn/email outreach experiments with tracked messaging variations.",
    "Mapped responses against role, industry, company size, and pain category to identify patterns.",
    "Used GTM feedback loops to refine positioning around concrete operational pain rather than generic compliance value propositions.",
  ],

  solution: [
    "Built AI-assisted outbound workflows to scale personalized outreach while maintaining relevance.",
    "Narrowed ICP toward organizations with active ICFR or audit transformation initiatives.",
    "Shifted positioning toward measurable workflow efficiency (evidence collection, control tracking, audit readiness).",
    "Established repeatable outreach and follow-up playbook instead of ad-hoc founder-driven sales.",
  ],

  outcome: [
    "Clearer ICP definition and buying persona understanding.",
    "Improved response quality from senior stakeholders.",
    "Validated distribution path for enterprise conversations.",
  ],
},
    ],
  },
  {
    id: "deloitte",
    label: "Deloitte",
    subtitle: "High-stakes execution in audit, ICFR , reporting, and compliance environments",
    intro:
      "Focus area: dependable execution under deadlines, technical accounting rigor, and multi-stakeholder coordination.",
    cases: [
      {
        title: "Led audit / ICFR audit execution for complex entities under deadlines",
        oneLiner:
          "Structured sequencing, risk prioritization and stakeholder movement in deadline-driven environments.",
        problem:
          "Large enterprises required multi-process audit and ICFR execution with heavy evidence flows, multiple stakeholders and limited tolerance for execution gaps within tight timelines.",
        approach: [
          "Took ownership of on-field execution.",
          "Prioritized high-risk items early to reduce end-stage surprises.",
          "Used process walkthroughs and risk assessment to create clarity before testing.",
          "Maintained disciplined follow-up and stakeholder alignment across teams.",
        ],
        solution: [
          "Delivered structured execution across complex audit.",
          "We achieved an informal Deloitte-wide benchmark by archiving a listed-company audit file post–board meeting significantly faster compared to typical timelines observed across other listed-company audits.",
          "Reduced deadline pressure by front-loading dependencies and risks.",
          "Built operational trust through reliable execution quality under pressure.",
        ],
        outcome: [
          "Consistent delivery in high-pressure environments",
          "Strong ownership reputation",
          "Better risk-aware execution sequencing",
        ],
      },
      {
        title: "Handled Ind AS transition limited review independently",
        oneLiner:
          "Applied technical accounting judgment with review-ready documentation discipline.",
        problem:
          "Interim condensed Ind AS transition financial statements required high technical understanding and confidence in judgment under review scrutiny.",
        approach: [
          "Applied accounting standards systematically rather than ad-hoc treatment decisions.",
          "Structured work around review expectations.",
          "Maintained accuracy-first execution while controlling timelines.",
        ],
        solution: [
          "Completed the limited review independently with review-ready support.",
          "Ensured accounting conclusions were documented and defensible.",
          "Balanced rigor and speed in technically sensitive work.",
        ],
        outcome: [
          "Demonstrated technical accounting depth",
          "Independent execution capability",
          "High documentation quality",
        ],
      },
    ],
  },
  {
    id: "life",
    label: "Life",
    subtitle: "Personal systems design for focus, regulation, and long-horizon execution",
    intro:
      "Focus area: designing sustainable systems for thinking, recovery, and high-agency execution.",
    cases: [
    {
  title: "Solving Linear, Defined Functions to Non-Linear, Multi-Variable Startup Systems",

  oneLiner:
    "Designed and operationalized a ‘Slope’ framework to navigate non-linear startup execution with measurable daily leverage.",

  problem:
    "Most prior environments (exams, audit deliverables, corporate work) were linear, clear inputs, defined outputs, predictable evaluation. Startup building introduced non-linear dynamics: uncertain feedback loops, delayed rewards, multi-variable dependencies (product, distribution, capital, energy), and no predefined scoring system.",

  approach: [
    "Recognized that startup progress depends on direction and rate of movement (trajectory), not isolated effort.",
    "Defined ‘Slope’ as a daily leverage metric measuring whether actions increased probability of product-market and channel-market fit.",
    "Assigned higher weight to high-leverage actions (customer outreach, real feedback loops, product iteration).",
    "Penalized low-leverage busyness and reward-seeking activity.",
    "Reviewed slope daily to ensure compounding direction rather than emotional volatility.",
  ],

  solution: [
    "Built a personal scoring system prioritizing actions that directly removed core constraints (customer conversations, product refinement from feedback).",
    "Shifted focus from intensity to gradient, optimizing for consistent upward trajectory.",
    "Created a feedback-driven execution loop instead of outcome-dependent motivation.",
  ],

  outcome: [
    "Clear visibility into whether each day increased startup odds.",
    "Reduced illusion of productivity.",
    "Improved bias toward high-leverage execution.",
  ],
}, 
    ],
  },
];

const EXPERIENCE = [
  {
    org: "Deloitte Haskins & Sells LLP, Chennai",
    role: "Deputy Manager — Audit & Assurance",
    period: "Aug 2023 – Dec 2024",
    bullets: [
      "On-field lead for limited reviews, statutory audits, and ICFR reporting for large and complex entities.",
      "Handled interim condensed Ind AS transition financial statement limited review independently.",
      "Prepared group audit deliverables for Indian entity in collaboration with Deloitte Netherlands.",
      "Supported buyback and merger certificate assignments; executed compliance-sensitive tax audit work.",
    ],
  },
  {
    org: "Deloitte Haskins & Sells LLP, Chennai",
    role: "Article Assistant",
    period: "Mar 2020 – Mar 2023",
    bullets: [
      "Worked across statutory audit, group reporting engagements, and internal financial controls.",
      "Audit exposure across manufacturing, healthcare, and e-commerce sectors.",
      "Performed process understanding, testing support, and reporting documentation.",
      "Handled GAAP conversion and impairment-related work in select assignments.",
    ],
  },
];

export default function Page() {
  return (
    <>
      <main className="resume-page">
        <div className="shell">
          <header className="hero">
            <div className="hero-left">
              
              <h1>{PROFILE.name}</h1>
              <p className="role">{PROFILE.title}</p>
              

              <div className="contact-row">
                <span>{PROFILE.location}</span>
                <span>•</span>
                <a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
                <span>•</span>
                <a href={`tel:${PROFILE.phone}`}>{PROFILE.phone}</a>
              </div>
            </div>

            <aside className="hero-right">
            
            </aside>
          </header>


          <section className="split-section" id="problem-solving">
            <div className="section-head">
              <div>
                <h2>Problem Solving Case study</h2>
                <p>
                  Structured in 3 segments - Startup, Deloitte and Life. Each case is shown
                  in a expandable format with <strong>Problem</strong>,{" "}
                  <strong>Approach</strong>, and <strong>Solution</strong>. Everything is Hand Typed, No AI slop! I got my best learning at Case 1 - Life Domain
                </p>
              </div>
            </div>

            <div className="split-grid">
              {SECTIONS.map((section) => (
                <a key={section.id} href={`#${section.id}`} className="split-card">
                  <div className="split-top">
                    
                    
                  </div>
                  <h3>{section.label}</h3>
                  <span className="split-count">{section.cases.length} cases</span>
                  
                  <div className="split-link">View section →</div>
                </a>
              ))}
            </div>
          </section>

          {SECTIONS.map((section) => (
            <section key={section.id} id={section.id} className="domain-section">
              <div className="domain-header">
                <div>
                  <p className="eyebrow small">{section.label}</p>
                </div>
              </div>

              <div className="case-list">
                {section.cases.map((c, idx) => (
                  <details key={c.title} className="case-item">
                    <summary>
                      <div className="summary-left">
                        <span className="case-index">
                          {String(idx + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <h3>{c.title}</h3>
                          
                        </div>
                      </div>
                      <span className="summary-action">Open</span>
                    </summary>

                    <div className="case-body">
                      <div className="pane">
                        <p className="pane-label">Problem</p>
                        <p className="pane-text">{c.problem}</p>
                      </div>

                      <div className="pane">
                        <p className="pane-label">Approach</p>
                        <ul className="bullet-list">
                          {c.approach.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="pane">
                        <p className="pane-label">Solution</p>
                        <ul className="bullet-list">
                          {c.solution.map((item) => (
                            <li key={item}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="pane">
                        <p className="pane-label">Outcome</p>
                        <ul className="tag-list">
                          {c.outcome.map((o) => (
                            <li key={o}>{o}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </details>
                ))}
              </div>
            </section>
          ))}
          
        </div>
      </main>

      <style>{`
        :root{
          --bg: #f8fafc;
          --panel: #ffffff;
          --panel-2: #f9fbfd;
          --line: #e2e8f0;
          --line-2: #edf2f7;
          --text: #0f172a;
          --muted: #475569;
          --muted-2: #64748b;
          --chip: #eef2f7;
          --accent: #0f172a;
          --shadow: 0 8px 24px rgba(15, 23, 42, 0.04);
        }

        * { box-sizing: border-box; }
        html, body { margin: 0; padding: 0; }
        body {
          background: var(--bg);
          color: var(--text);
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;
        }

        .resume-page {
          min-height: 100vh;
          background:
            radial-gradient(circle at 10% 0%, rgba(148,163,184,.08), transparent 45%),
            radial-gradient(circle at 100% 20%, rgba(148,163,184,.06), transparent 35%),
            var(--bg);
        }

        .shell {
          max-width: 1100px;
          margin: 0 auto;
          padding: 28px 18px 40px;
        }

        .hero {
          display: grid;
          grid-template-columns: 1.2fr .8fr;
          gap: 18px;
          align-items: start;
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 22px;
          box-shadow: var(--shadow);
        }

        .eyebrow {
          margin: 0 0 8px;
          font-size: 11px;
          letter-spacing: .14em;
          text-transform: uppercase;
          color: var(--muted-2);
          font-weight: 700;
        }

        .eyebrow.small {
          margin-bottom: 6px;
          color: #64748b;
        }

        .hero h1 {
          margin: 0;
          font-size: clamp(28px, 4vw, 42px);
          line-height: 1.05;
          letter-spacing: -0.03em;
          font-weight: 700;
          color: var(--text);
        }

        .role {
          margin: 8px 0 0;
          color: var(--muted);
          font-size: 15px;
          font-weight: 500;
        }

        .summary {
          margin: 14px 0 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.7;
          max-width: 64ch;
        }

        .contact-row {
          margin-top: 14px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: center;
          color: var(--muted-2);
          font-size: 13px;
        }

        .contact-row a {
          color: var(--muted-2);
          text-decoration: none;
        }

        .contact-row a:hover { text-decoration: underline; }

        .hero-right {
          min-width: 0;
        }

        .meta-card {
          background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
          border: 1px solid var(--line);
          border-radius: 14px;
          padding: 14px;
        }

        .meta-label {
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: .12em;
          color: var(--muted-2);
          font-weight: 700;
        }

        .meta-value {
          margin-top: 8px;
          font-size: 18px;
          font-weight: 650;
          letter-spacing: -.02em;
          color: var(--text);
        }

        .meta-text {
          margin: 8px 0 0;
          color: var(--muted);
          line-height: 1.65;
          font-size: 13px;
        }

        .highlights,
        .split-section,
        .domain-section,
        .experience {
          margin-top: 16px;
          background: var(--panel);
          border: 1px solid var(--line);
          border-radius: 18px;
          padding: 18px;
          box-shadow: var(--shadow);
        }

        .highlights h2,
        .split-section h2,
        .domain-section h2,
        .experience h2 {
          margin: 0;
          font-size: 20px;
          letter-spacing: -.02em;
          font-weight: 650;
          color: var(--text);
        }

        .highlights ul {
          margin: 12px 0 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 10px;
        }

        .highlights li {
          position: relative;
          padding-left: 18px;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.6;
        }

        .highlights li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 9px;
          width: 6px;
          height: 6px;
          border-radius: 999px;
          background: #94a3b8;
        }

        .section-head p {
          margin: 8px 0 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.65;
          max-width: 75ch;
        }

        .split-grid {
          margin-top: 14px;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 12px;
        }

        .split-card {
          text-decoration: none;
          color: inherit;
          border: 1px solid var(--line);
          background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
          border-radius: 14px;
          padding: 14px;
          transition: transform .12s ease, box-shadow .12s ease, border-color .12s ease;
        }

        .split-card:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 18px rgba(15,23,42,.06);
          border-color: #cfd8e3;
        }

        .split-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
        }

        .split-chip {
          display: inline-flex;
          align-items: center;
          border-radius: 999px;
          background: var(--chip);
          color: #334155;
          border: 1px solid #e2e8f0;
          padding: 6px 10px;
          font-size: 12px;
          font-weight: 600;
        }

        .split-count {
          font-size: 12px;
          color: var(--muted-2);
          font-weight: 600;
        }

        .split-card h3 {
          margin: 12px 0 0;
          font-size: 18px;
          letter-spacing: -.02em;
          font-weight: 650;
          color: var(--text);
        }

        .split-card p {
          margin: 8px 0 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.6;
          min-height: 42px;
        }

        .split-link {
          margin-top: 12px;
          color: var(--muted-2);
          font-size: 12px;
          font-weight: 600;
          border-top: 1px solid var(--line-2);
          padding-top: 10px;
        }

        .domain-header {
          display: flex;
          justify-content: space-between;
          align-items: start;
          gap: 10px;
          margin-bottom: 10px;
        }

        .domain-intro {
          margin: 8px 0 0;
          color: var(--muted);
          font-size: 14px;
          line-height: 1.65;
          max-width: 76ch;
        }

        .case-list {
          display: grid;
          gap: 10px;
          margin-top: 10px;
        }

        .case-item {
          border: 1px solid var(--line);
          border-radius: 14px;
          background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
          overflow: hidden;
        }

        .case-item summary {
          list-style: none;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 12px;
          padding: 14px;
        }

        .case-item summary::-webkit-details-marker { display: none; }

        .case-item[open] {
          border-color: #cfd8e3;
          box-shadow: 0 8px 18px rgba(15,23,42,.05);
        }

        .summary-left {
          display: grid;
          grid-template-columns: 34px 1fr;
          gap: 12px;
          align-items: start;
          min-width: 0;
        }

        .case-index {
          width: 34px;
          height: 34px;
          border-radius: 10px;
          border: 1px solid var(--line);
          background: #f8fafc;
          display: grid;
          place-items: center;
          color: var(--muted-2);
          font-size: 12px;
          font-weight: 700;
        }

        .summary-left h3 {
          margin: 0;
          color: var(--text);
          font-size: 15px;
          line-height: 1.35;
          font-weight: 620;
          letter-spacing: -.01em;
        }

        .summary-left p {
          margin: 5px 0 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.55;
        }

        .summary-action {
          flex: 0 0 auto;
          color: var(--muted-2);
          font-size: 12px;
          font-weight: 600;
          border: 1px solid var(--line);
          background: #fff;
          padding: 6px 10px;
          border-radius: 999px;
        }

        .case-item[open] .summary-action::after {
          content: " (expanded)";
          color: #94a3b8;
        }

        .case-body {
          border-top: 1px solid var(--line-2);
          padding: 0 14px 14px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
        }

        .pane {
          margin-top: 12px;
          border: 1px solid var(--line);
          border-radius: 12px;
          padding: 12px;
          background: #fff;
        }

        .pane-label {
          margin: 0 0 8px;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: .12em;
          color: var(--muted-2);
          font-weight: 700;
        }

        .pane-text {
          margin: 0;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.65;
        }

        .bullet-list {
          margin: 0;
          padding: 0;
          list-style: none;
          display: grid;
          gap: 8px;
        }

        .bullet-list li {
          position: relative;
          padding-left: 16px;
          color: var(--muted);
          font-size: 13px;
          line-height: 1.6;
        }

        .bullet-list li::before {
          content: "";
          position: absolute;
          left: 0;
          top: 8px;
          width: 5px;
          height: 5px;
          border-radius: 999px;
          background: #94a3b8;
        }

        .tag-list {
          margin: 0;
          padding: 0;
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tag-list li {
          border: 1px solid var(--line);
          background: #f8fafc;
          color: #334155;
          border-radius: 999px;
          padding: 7px 10px;
          font-size: 12px;
          font-weight: 600;
        }

        .experience-list {
          margin-top: 12px;
          display: grid;
          gap: 10px;
        }

        .exp-card {
          border: 1px solid var(--line);
          background: linear-gradient(180deg, #ffffff 0%, #fbfdff 100%);
          border-radius: 14px;
          padding: 14px;
        }

        .exp-head {
          display: flex;
          justify-content: space-between;
          align-items: start;
          gap: 12px;
          margin-bottom: 10px;
        }

        .exp-card h3 {
          margin: 0;
          font-size: 15px;
          font-weight: 620;
          color: var(--text);
          letter-spacing: -.01em;
        }

        .exp-org {
          margin: 4px 0 0;
          color: var(--muted);
          font-size: 13px;
        }

        .exp-period {
          color: var(--muted-2);
          font-size: 12px;
          font-weight: 600;
          white-space: nowrap;
          border: 1px solid var(--line);
          background: #fff;
          border-radius: 999px;
          padding: 6px 10px;
        }

        .footer {
          margin-top: 16px;
          border: 1px solid var(--line);
          background: var(--panel);
          border-radius: 18px;
          padding: 16px 18px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          box-shadow: var(--shadow);
        }

        .footer-title {
          font-size: 14px;
          font-weight: 620;
          color: var(--text);
        }

        .footer-sub {
          margin-top: 3px;
          color: var(--muted-2);
          font-size: 12px;
        }

        .footer-contact {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          align-items: center;
          color: var(--muted-2);
          font-size: 12px;
        }

        .footer-contact a {
          color: var(--muted-2);
          text-decoration: none;
        }

        .footer-contact a:hover {
          text-decoration: underline;
        }

        @media (max-width: 900px) {
          .hero {
            grid-template-columns: 1fr;
          }

          .split-grid {
            grid-template-columns: 1fr;
          }

          .case-body {
            grid-template-columns: 1fr;
          }

          .footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }

        @media (max-width: 640px) {
          .shell {
            padding: 14px 12px 24px;
          }

          .hero,
          .highlights,
          .split-section,
          .domain-section,
          .experience,
          .footer {
            border-radius: 14px;
            padding: 14px;
          }

          .case-item summary {
            padding: 12px;
          }

          .summary-left {
            grid-template-columns: 28px 1fr;
            gap: 10px;
          }

          .case-index {
            width: 28px;
            height: 28px;
            border-radius: 8px;
            font-size: 11px;
          }

          .summary-action {
            display: none;
          }

          .exp-head {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }

          .contact-row {
            gap: 6px;
          }
        }
      `}</style>
    </>
  );
}