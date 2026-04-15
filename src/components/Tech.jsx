import { useEffect, useRef, useState } from "react";
import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";

const Tech = () => {
  const containerRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setInView(true);
      },
      { rootMargin: "160px 0px", threshold: 0.06 }
    );

    observer.observe(root);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-row flex-wrap justify-center gap-10 min-h-[7rem]"
    >
      {technologies.map((technology) => (
        <div className="w-28 h-28" key={technology.name}>
          {inView ? (
            <BallCanvas icon={technology.icon} />
          ) : (
            <div
              className="w-full h-full rounded-full bg-tertiary/30 animate-pulse"
              aria-hidden
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "")