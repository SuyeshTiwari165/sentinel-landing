import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Pipeline from "./components/Pipeline.jsx";
import ScanTypes from "./components/ScanTypes.jsx";
import Reveal from "./components/Reveal.jsx";
import { Reports, Trust, FinalCta, Footer } from "./components/Sections.jsx";

// Where the Sentinel app's sign-in page lives. Set VITE_APP_URL when the app is hosted elsewhere.
const APP_URL = import.meta.env.VITE_APP_URL ?? "http://localhost:5173/login";

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav appUrl={APP_URL} />
      <main id="main">
        <Hero appUrl={APP_URL} />

        <section className="section" id="how" aria-labelledby="how-title">
          <Reveal>
            <h2 id="how-title">How a scan works</h2>
            <p className="section-lede">Four steps, each one checked before the next begins.</p>
          </Reveal>
          <Reveal>
            <Pipeline />
          </Reveal>
        </section>

        <section className="section" id="scans" aria-labelledby="scans-title">
          <Reveal>
            <h2 id="scans-title">Four kinds of scan</h2>
            <p className="section-lede">Each scan type runs only the tools it needs, and only after the checks it requires.</p>
          </Reveal>
          <Reveal>
            <ScanTypes />
          </Reveal>
        </section>

        <Reports appUrl={APP_URL} />
        <Trust />
        <FinalCta appUrl={APP_URL} />
      </main>
      <Footer />
    </>
  );
}
