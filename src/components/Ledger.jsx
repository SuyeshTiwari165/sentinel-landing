import Reveal from "./Reveal.jsx";

// A section laid out like a form: a field label in a left rail, the content on the right.
// The label names what the section is about, so the rail is the only structure on the page.
export default function Ledger({ id, label, title, lede, children }) {
  return (
    <section className="ledger" id={id} aria-labelledby={`${id}-title`}>
      <Reveal className="ledger-rail">
        <p className="field-label">{label}</p>
      </Reveal>
      <div className="ledger-body">
        <Reveal>
          <h2 id={`${id}-title`}>{title}</h2>
          {lede && <p className="ledger-lede">{lede}</p>}
        </Reveal>
        {children}
      </div>
    </section>
  );
}
