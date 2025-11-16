import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";

export default function Portfolio() {
  const { t } = useLanguage();

  const projects = t("portfolio.projects", { returnObjects: true });

  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(390);

  const projectsLength = projects.length;
  const infiniteProjects = [...projects, ...projects, ...projects];

  useEffect(() => {
    const updateSize = () => {
      if (cardRef.current) {
        const width = cardRef.current.offsetWidth + 40;
        setCardWidth(width);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    setIndex(projectsLength);
  }, [projectsLength]);

  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => prev - 1);

  useEffect(() => {
    if (index >= projectsLength * 2) {
      setTimeout(() => setIndex(projectsLength), 50);
    }
    if (index <= projectsLength - 1) {
      setTimeout(() => setIndex(projectsLength * 2 - 1), 50);
    }
  }, [index, projectsLength]);

  const handleDragEnd = (_, info) => {
    if (info.offset.x < -40) next();
    if (info.offset.x > 40) prev();
  };

  return (
    <section
      id="portfolio"
      className="relative w-full flex flex-col items-center py-40 text-gray-100 overflow-hidden"
    >
      {/* TITLE */}
      <h2 className="text-4xl md:text-5xl font-light text-center">
        {t("portfolio.title")}{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00fff0] to-[#00bfa6]">
          {t("portfolio.highlight")}
        </span>
      </h2>

      <p className="text-gray-400 text-center max-w-2xl mt-6 mb-16 leading-relaxed">
        {t("portfolio.subtitle")}
      </p>

      {/* CONTROLS */}
      <button
        onClick={prev}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-30
                 bg-white/5 border border-white/10 backdrop-blur-xl 
                 w-12 h-12 rounded-full justify-center items-center hover:bg-white/10 transition"
      >
        ←
      </button>

      <button
        onClick={next}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-30
                 bg-white/5 border border-white/10 backdrop-blur-xl 
                 w-12 h-12 rounded-full justify-center items-center hover:bg-white/10 transition"
      >
        →
      </button>

      {/* SLIDER */}
      <div className="w-full overflow-hidden px-4 md:px-10 select-none relative pt-10">
        <motion.div
          className="flex gap-10"
          animate={{ x: -index * cardWidth }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
        >
          {infiniteProjects.map((p, i) => (
            <motion.div
              ref={i === 0 ? cardRef : null}
              key={i}
              whileHover={{
                y: -10,
                boxShadow: "0 0 30px rgba(0,255,240,0.15)"
              }}
              className="min-w-[85vw] sm:min-w-[350px] max-w-[350px] 
                         bg-white/5 backdrop-blur-xl border border-white/10 
                         rounded-3xl overflow-hidden"
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={p.image}
                  className="w-full h-full object-cover opacity-80"
                  alt={p.title}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#00fff0] mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-white/10 border border-white/10 
                                 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="block px-6 py-2 text-center rounded-full border border-[#00fff0]/40 
                             text-[#00fff0] hover:bg-[#00fff0]/10 transition"
                >
                  {t("portfolio.button")}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
