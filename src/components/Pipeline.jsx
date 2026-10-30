import { useState } from "react";

const STEPS = [
  {
    title: "Declare the scope",
    text: "Name the domain, host, IP or network you are allowed to test, and which scan types may run on it.",
    detail: "Nothing starts until a grant covers the exact target and scan type. Grants expire, and you can revoke them at any time.",
  },
  {
    title: "Prove ownership",
    text: "For public targets, add a DNS record or a file that shows you control the site. Internal networks use an agent instead.",
    detail: "Web and vulnerability scans need a verified claim on the domain. Private addresses can't be verified over the internet, so they use the agent and your attestation.",
  },
  {
    title: "Run the scan",
    text: "Open-source scanners run in locked-down containers, one step at a time, in an order fixed by an approved playbook.",
    detail: "The AI chooses only the next step from the playbook's list. Tools and flags come from fixed allow-lists, so it can't run a tool or a flag that isn't on them.",
  },
  {
    title: "Read the report",
    text: "Findings are de-duplicated and ranked, with the evidence beside each one and a plain summary.",
    detail: "Priority combines severity, known-exploited status and exploit likelihood. The same report exports as JSON, HTML or PDF.",
  },
];

export default function Pipeline() {
  const [active, setActive] = useState(0);
  const current = STEPS[active];

  return (
    <div className="pipeline">
      <ol className="pipeline-steps" aria-label="Scan steps">
        {STEPS.map((s, i) => (
          <li key={s.title}>
            <button
              type="button"
              className={`pipeline-step ${i === active ? "on" : ""}`}
              aria-pressed={i === active}
              onClick={() => setActive(i)}
            >
              <span className="pipeline-n">{String(i + 1).padStart(2, "0")}</span>
              <span className="pipeline-title">{s.title}</span>
            </button>
          </li>
        ))}
      </ol>
      <div className="pipeline-detail" key={active}>
        <h3>{current.title}</h3>
        <p>{current.text}</p>
        <p className="pipeline-more">{current.detail}</p>
      </div>
    </div>
  );
}
