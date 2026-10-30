import ScopeGate from "./ScopeGate.jsx";

export default function Hero({ appUrl }) {
  return (
    <section className="hero" id="top">
      <div className="hero-copy">
        <p className="field-label">Form SN-01 / Scope</p>
        <h1>Scan only what you are allowed to scan.</h1>
        <p className="lede">
          Sentinel runs proven open-source scanners, and refuses to start until scope, ownership and
          authorization are on record.
        </p>
        <div className="hero-actions">
          <a className="button-link" href={appUrl}>Start a scan</a>
          <a className="button-link secondary" href="#how">How it works</a>
        </div>
      </div>
      <div className="hero-form">
        <ScopeGate />
      </div>
    </section>
  );
}
