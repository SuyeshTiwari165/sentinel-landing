import { useState } from "react";

const STEPS = [
  {
    title: "Declare the scope",
    text: "Name the domain, host, IP or network you are allowed to test, and which scan types may run on it.",
    detail: "Nothing starts until a grant covers the exact target and scan type. Grants expire, and you can revoke them at any time.",
  },
  {
    title: "Pass the gate",
    text: "Before any tool runs, Sentinel checks that a grant covers the target and scan type. Internal networks also need your own agent online.",
    detail: "The check runs when you submit and again just before the first tool starts. Private addresses are never scanned from the server; they go through the agent on your network.",
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
