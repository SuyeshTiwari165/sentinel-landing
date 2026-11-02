import { useState } from "react";

const TYPES = [
  {
    id: "passive",
    name: "Passive recon",
    summary: "Public records only. Nothing touches the target.",
    tools: ["DNS records", "Subdomain discovery", "Certificate logs", "Domain registration", "Public mentions"],
    grant: "Scope grant",
  },
  {
    id: "va",
    name: "Vulnerability assessment",
    summary: "Find open services, identify them, and check them against known vulnerabilities.",
    tools: ["Port discovery", "Service and version detection", "Web service detection", "Known-vulnerability checks", "TLS configuration"],
    grant: "Scope grant",
  },
  {
    id: "web",
    name: "Web application",
    summary: "Crawl the site, fingerprint the stack, and test it. Attack tests run only at the aggressive level.",
    tools: ["Web service detection", "Firewall detection", "Site crawl", "Known-vulnerability checks", "Web server checks", "Application testing", "TLS configuration", "DNS records"],
    grant: "Scope grant",
  },
  {
    id: "internal",
    name: "Internal network",
    summary: "Scan private ranges from an agent on your own network, where no server on the internet can reach.",
    tools: ["Port discovery", "Service and version detection"],
    grant: "Internal grant and an online agent",
  },
];

export default function ScanTypes() {
  const [active, setActive] = useState("web");
  const current = TYPES.find((t) => t.id === active);

  return (
    <div className="scan-types">
      <div className="tabs" role="tablist" aria-label="Scan types">
        {TYPES.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={t.id === active}
            aria-controls="scan-panel"
            className={`tab ${t.id === active ? "on" : ""}`}
            onClick={() => setActive(t.id)}
          >
            {t.name}
          </button>
        ))}
      </div>
      <div className="tab-panel" id="scan-panel" role="tabpanel" aria-labelledby={`tab-${active}`}>
        <h3>{current.name}</h3>
        <p>{current.summary}</p>
        <p className="tab-meta"><strong>Needs:</strong> {current.grant}</p>
        <ul className="tool-list" aria-label="What it checks">
          {current.tools.map((tool) => (
            <li key={tool}>{tool}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
