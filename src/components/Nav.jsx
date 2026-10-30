import { useState } from "react";

export default function Nav({ appUrl }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#top" onClick={close}>Sentinel</a>
        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="nav-links"
          onClick={() => setOpen((v) => !v)}
        >
          Menu
        </button>
        <nav id="nav-links" className={`nav-links ${open ? "open" : ""}`} aria-label="Primary">
          <a href="#how" onClick={close}>How it works</a>
          <a href="#scans" onClick={close}>Scan types</a>
          <a href="#reports" onClick={close}>Reports</a>
          <a href="#trust" onClick={close}>Trust</a>
          <a className="nav-cta" href={appUrl} onClick={close}>Sign in</a>
        </nav>
      </div>
    </header>
  );
}
