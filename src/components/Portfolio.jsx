import { lazy, Suspense, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Experience, Hero } from "./index";

const Tech = lazy(() => import("./Tech"));
const Works = lazy(() => import("./Works"));
const Contact = lazy(() => import("./Contact"));
const StarsCanvas = lazy(() => import("./canvas/Stars"));

const SectionFallback = () => (
  <div
    className="min-h-[200px] flex items-center justify-center py-16"
    aria-busy="true"
    aria-label="Cargando sección"
  >
    <span className="h-10 w-10 rounded-full border-2 border-secondary border-t-transparent animate-spin" />
  </div>
);

/** Contenido que antes era el home: experience / projects / contact */
const Portfolio = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = hash.replace("#", "");
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => window.clearTimeout(t);
  }, [hash]);

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
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
  );
};

export default Portfolio;
