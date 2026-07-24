import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { apps } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const AppCard = ({ index, name, description, url, tags, badge }) => {
  const external = /^https?:\/\//i.test(url);
  const inner = (
    <Tilt
      options={{ max: 18, scale: 1.02, speed: 450 }}
      className="bg-tertiary p-6 rounded-2xl h-full border border-white/5 hover:border-[#915eff]/40 transition-colors"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-black-100 text-2xl shadow-card">
          {badge || "🚀"}
        </div>
        <span className="text-[12px] font-semibold uppercase tracking-wider text-[#915eff]">
          {external ? "Abrir →" : "Ver →"}
        </span>
      </div>
      <h3 className="mt-5 text-white font-bold text-[24px]">{name}</h3>
      <p className="mt-2 text-secondary text-[14px] leading-relaxed">{description}</p>
      {tags?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[12px] px-2.5 py-1 rounded-full bg-black-100 text-secondary"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Tilt>
  );

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.15, 0.6)} className="h-full">
      {external ? (
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#915eff] rounded-2xl"
        >
          {inner}
        </a>
      ) : (
        <Link
          to={url}
          className="block h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#915eff] rounded-2xl"
        >
          {inner}
        </Link>
      )}
    </motion.div>
  );
};

const Apps = () => {
  return (
    <div className="relative z-0 bg-primary min-h-screen">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <section className={`${styles.padding} max-w-7xl mx-auto pt-28 pb-10`}>
          <motion.div variants={textVariant()} initial="hidden" animate="show">
            <p className={styles.sectionSubText}>Productos en vivo</p>
            <h1 className={`${styles.heroHeadText} text-white`}>
              Mis <span className="text-[#915eff]">Apps</span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 max-w-2xl`}>
              Herramientas y productos que construí y mantengo. Entrá, probá y
              contame qué te falta.
            </p>
          </motion.div>
        </section>
      </div>

      <section className={`${styles.padding} max-w-7xl mx-auto pb-24`}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {apps.map((app, index) => (
            <AppCard key={app.name} index={index} {...app} />
          ))}
        </div>

        <div className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between rounded-2xl bg-tertiary/80 border border-white/5 p-6">
          <div>
            <p className="text-white font-semibold text-lg">¿Querés ver mi trayectoria?</p>
            <p className="text-secondary text-sm mt-1">
              Experiencia, proyectos cliente y contacto están en Portfolio.
            </p>
          </div>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center rounded-xl bg-[#915eff] px-5 py-3 text-white font-semibold hover:opacity-90 transition"
          >
            Ir a Portfolio
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Apps;
