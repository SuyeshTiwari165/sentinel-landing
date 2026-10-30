import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import Ledger from "./components/Ledger.jsx";
import Pipeline from "./components/Pipeline.jsx";
import ScanTypes from "./components/ScanTypes.jsx";
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

        <Ledger
          id="how"
          label="Procedure"
          title="How a scan works"
          lede="Four steps, each one checked before the next begins."
        >
          <Pipeline />
        </Ledger>

        <Ledger
          id="scans"
          label="Scan types"
          title="Four kinds of scan"
          lede="Each scan type runs only the tools it needs, and only after the checks it requires."
        >
          <ScanTypes />
        </Ledger>

        <Reports appUrl={APP_URL} />
        <Trust />
        <FinalCta appUrl={APP_URL} />
      </main>
      <Footer />
    </>
  );
}
