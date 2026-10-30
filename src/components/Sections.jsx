import Reveal from "./Reveal.jsx";

const REPORT_POINTS = [
  { title: "Ranked, not just listed", text: "Each finding carries a priority built from severity, known-exploited status and exploit likelihood." },
  { title: "One versioned document", text: "The report is built deterministically, so the same scan gives the same report every time." },
  { title: "Export anywhere", text: "Download JSON, a self-contained HTML page, or a PDF." },
  { title: "Share read-only", text: "Links use hashed tokens, can expire, count their views, and can be revoked at any time." },
  { title: "Scheduled email", text: "Send a report on a schedule to recipients you choose. Mail delivery is off until your operator turns it on." },
];

const TRUST_POINTS = [
  { title: "Private addresses stay private", text: "The server never scans or verifies private networks. Those scans run through an agent on your own network." },
  { title: "The AI orders steps, nothing more", text: "It picks the next step from an approved playbook. It can't choose a tool or a flag outside the fixed allow-lists." },
  { title: "Every grant is on record", text: "Grants, report exports and ownership checks are written to an audit log with the time and the address." },
  { title: "Built to resist abuse", text: "Sign-in, sharing, exports and ownership checks are rate limited, and failed sign-ins are counted per account." },
];

export function Reports({ appUrl }) {
  return (
    <section className="section" id="reports" aria-labelledby="reports-title">
      <Reveal>
        <h2 id="reports-title">Reports you can act on</h2>
        <p className="section-lede">Findings are ranked, explained and easy to share, without losing the evidence behind them.</p>
      </Reveal>
      <ul className="points">
        {REPORT_POINTS.map((p, i) => (
          <Reveal as="li" className="point" key={p.title} style={{ transitionDelay: `${i * 60}ms` }}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </Reveal>
        ))}
      </ul>
      <Reveal className="inline-cta">
        <a className="button-link secondary" href={appUrl}>Open a report</a>
      </Reveal>
    </section>
  );
}

export function Trust() {
  return (
    <section className="section trust" id="trust" aria-labelledby="trust-title">
      <Reveal>
        <h2 id="trust-title">Authorization comes first</h2>
        <p className="section-lede">Sentinel is built so that scanning someone else's systems without permission is hard to do by accident.</p>
      </Reveal>
      <ul className="points trust-points">
        {TRUST_POINTS.map((p, i) => (
          <Reveal as="li" className="point" key={p.title} style={{ transitionDelay: `${i * 60}ms` }}>
            <h3>{p.title}</h3>
            <p>{p.text}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export function FinalCta({ appUrl }) {
  return (
    <section className="final" aria-labelledby="final-title">
      <Reveal>
        <h2 id="final-title">Ready when your authorization is.</h2>
        <p className="section-lede">Sign in, add a scope grant, and start with a scan you are allowed to run.</p>
        <a className="button-link" href={appUrl}>Sign in or create an account</a>
      </Reveal>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <p>Sentinel. Authorized scanning for systems you own or are permitted to test.</p>
    </footer>
  );
}
