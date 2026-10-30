// Where the Sentinel app's sign-in page lives. Set VITE_APP_URL when the app is hosted elsewhere.
const APP_URL = import.meta.env.VITE_APP_URL ?? "http://localhost:5173/login";

const STEPS = [
  { n: "1", title: "Declare the scope", text: "Name the domain, host, IP or network you are allowed to test, and which kinds of scan you may run on it." },
  { n: "2", title: "Prove ownership", text: "For public targets, add a DNS record or a file that shows you control the site. Internal networks use an agent you install instead." },
  { n: "3", title: "Run the scan", text: "Sentinel runs open-source scanners in locked-down containers, in a fixed order. An AI only chooses the next step from an approved list." },
  { n: "4", title: "Read the report", text: "Findings are de-duplicated and ranked by severity, known-exploited status and exploit likelihood, with the evidence beside each one." },
];

const SCANS = [
  { title: "Passive recon", text: "Public records only: DNS, certificate transparency and WHOIS. Nothing touches the target." },
  { title: "Vulnerability assessment", text: "Port discovery, service detection, vulnerability templates and TLS checks." },
  { title: "Web application", text: "Crawling, technology detection, a web server scan and an OWASP ZAP pass, passive by default." },
  { title: "Internal network", text: "An agent on your network scans private ranges that no server on the internet can reach." },
];

export default function App() {
  return (
    <main className="landing">
      <section className="landing-hero">
        <p className="eyebrow">Authorized scanning, from start to report</p>
        <h1>Scan only what you are allowed to scan.</h1>
        <p className="lede">
          Sentinel runs proven open-source scanners, and refuses to start until scope, ownership and
          authorization are on record.
        </p>
        <div className="landing-actions">
          <a className="button-link" href={APP_URL}>Start a scan</a>
          <a className="button-link secondary" href="#how">How it works</a>
        </div>
      </section>

      <section className="landing-band" id="how">
        <h2>How a scan works</h2>
        <ol className="steps">
          {STEPS.map((s) => (
            <li key={s.n} className="step">
              <span className="step-n">{s.n}</span>
              <div>
                <strong>{s.title}</strong>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="landing-section">
        <h2>Four kinds of scan</h2>
        <ul className="scan-list">
          {SCANS.map((s) => (
            <li key={s.title} className="scan-row">
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="landing-band quiet">
        <h2>Authorization comes first</h2>
        <p>
          Every active scan needs a scope grant that you attest to, and a verified claim on the
          target. Private addresses can't be scanned from the server at all. Grants, report exports
          and ownership checks are written to an audit log.
        </p>
      </section>

      <section className="landing-cta">
        <h2>Ready when your authorization is.</h2>
        <a className="button-link" href={APP_URL}>Sign in or create an account</a>
      </section>
    </main>
  );
}
