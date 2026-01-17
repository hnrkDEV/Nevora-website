import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

const NEON = "#A855F7";

export default function About() {
  const { t } = useLanguage();

  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center
                 py-24 px-6 md:px-20 text-gray-100 z-20 min-h-screen"
    >
      <div
        className="flex flex-col md:flex-row items-center justify-between
                   gap-24 w-full max-w-7xl"
      >
        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-8
                         leading-snug tracking-tight">
            <span
              className="text-transparent bg-clip-text font-semibold"
              style={{
                backgroundImage: `linear-gradient(90deg, ${NEON}, ${NEON})`,
              }}
            >
              {t("home.about.titleHighlight")}
            </span>
            <br />
            <span className="text-white/90 font-light">
              {t("home.about.title")}
            </span>
          </h2>

          <div
            className="space-y-6 text-gray-400
                       text-base leading-relaxed max-w-xl
                       whitespace-pre-line"
          >
            <p>{t("home.about.paragraphs")}</p>
          </div>

          {/* Botões */}
          <div className="flex flex-wrap gap-6 mt-12">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="px-8 py-3 rounded-full font-medium text-black"
              style={{
                background: NEON,
                boxShadow: `0 0 30px ${NEON}88`,
              }}
            >
              {t("home.about.ctaPrimary")}
            </motion.a>

            <motion.a
              href="#portfolio"
              whileHover={{
                scale: 1.05,
                boxShadow: `0 0 25px ${NEON}66`,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="px-8 py-3 rounded-full font-medium border"
              style={{
                borderColor: `${NEON}77`,
                color: NEON,
              }}
            >
              {t("home.about.ctaSecondary")}
            </motion.a>
          </div>
        </motion.div>

        {/* Imagem */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center"
        >
          <img
            src="/about-img.png"
            alt="Sobre mim"
            className="w-full max-w-md rounded-2xl"
          />
        </motion.div>
      </div>
    </section>
  );
}
