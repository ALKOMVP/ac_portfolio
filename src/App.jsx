import { lazy, Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Experience, Hero, Navbar } from "./components";

const Tech = lazy(() => import("./components/Tech"));
const Works = lazy(() => import("./components/Works"));
const Contact = lazy(() => import("./components/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));

const SectionFallback = () => (
  <div
    className="min-h-[200px] flex items-center justify-center py-16"
    aria-busy="true"
    aria-label="Cargando sección"
  >
    <span className="h-10 w-10 rounded-full border-2 border-secondary border-t-transparent animate-spin" />
  </div>
);

function App() {
  return (
    <Router>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <Experience />
        <Suspense fallback={<SectionFallback />}>
          <Tech />
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <Works />
        </Suspense>
        <div className="relative z-0">
          <Suspense fallback={<SectionFallback />}>
            <Contact />
            <StarsCanvas />
          </Suspense>
        </div>
      </div>
    </Router>
  );
}

export default App
