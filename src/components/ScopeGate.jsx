import { useState } from "react";

// The same questions Sentinel asks before anything runs, in the same order. Simplified for a demo:
// the real checks live in the server (api/app/services/authorization.py).
const SCAN_TYPES = [
  { id: "passive", label: "Passive recon" },
  { id: "va", label: "Vulnerability assessment" },
  { id: "web", label: "Web application" },
  { id: "internal", label: "Internal network" },
];

const PRIVATE_IP = /^(10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|127\.|169\.254\.)/;
const IP = /^\d{1,3}(\.\d{1,3}){3}$/;

export function judge({ target, type, grant, ownership }) {
  const host = target.trim().toLowerCase();
  if (!host) return { ok: false, reason: "Enter a domain, host, IP or network to check." };
  if (type !== "internal" && PRIVATE_IP.test(host)) {
    return { ok: false, reason: "Private addresses can't be scanned from the server. Use an internal scan through an agent." };
  }
  if (type === "internal" && !PRIVATE_IP.test(host)) {
    return { ok: false, reason: "Internal scans cover private networks only." };
  }
  if (!IP.test(host) && !host.includes(".")) {
    return { ok: false, reason: "Single-label names like this are blocked. Use a fully qualified domain." };
  }
  if (!grant) {
    return { ok: false, reason: "No scope grant. Attest to the scope and scan types first." };
  }
  if ((type === "va" || type === "web") && !ownership) {
    return { ok: false, reason: "Ownership isn't verified. Prove control with a DNS record or a file on the site." };
  }
  if (type === "internal") {
    return { ok: true, reason: "Allowed, once an agent on that network is online. The grant and the agent are checked again before the scan runs." };
  }
  return { ok: true, reason: "Allowed. Sentinel would start the scan and record the grant in the audit log." };
}

export default function ScopeGate() {
  const [target, setTarget] = useState("example.com");
  const [type, setType] = useState("web");
  const [grant, setGrant] = useState(true);
  const [ownership, setOwnership] = useState(false);
  const result = judge({ target, type, grant, ownership });

  return (
    <div className="gate" aria-labelledby="gate-title">
      <p id="gate-title" className="gate-title">Try the gate</p>
      <label className="field">
        <span>Target</span>
        <input value={target} onChange={(e) => setTarget(e.target.value)} spellCheck={false} />
      </label>
      <fieldset className="chips">
        <legend>Scan type</legend>
        {SCAN_TYPES.map((t) => (
          <button
            key={t.id}
            type="button"
            className={`chip ${type === t.id ? "on" : ""}`}
            aria-pressed={type === t.id}
            onClick={() => setType(t.id)}
          >
            {t.label}
          </button>
        ))}
      </fieldset>
      <div className="toggles">
        <label className="toggle">
          <input type="checkbox" checked={grant} onChange={(e) => setGrant(e.target.checked)} />
          <span>Scope grant attested</span>
        </label>
        <label className="toggle">
          <input type="checkbox" checked={ownership} onChange={(e) => setOwnership(e.target.checked)} />
          <span>Ownership verified</span>
        </label>
      </div>
      <div className={`verdict ${result.ok ? "allow" : "deny"}`} role="status" aria-live="polite">
        <span className="verdict-badge">{result.ok ? "Allowed" : "Refused"}</span>
        <p>{result.reason}</p>
      </div>
    </div>
  );
}
