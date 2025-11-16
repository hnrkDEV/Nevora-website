import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function About() {
  const { t } = useLanguage();
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center py-10 px-6 md:px-20 
                 text-gray-100 z-20 min-h-screen"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-24 w-full max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left"
        >
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-snug tracking-tight">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00fff0] to-[#00bfa6] font-semibold">
              {t("home.about.titleHighlight")}
            </span>
            <br />
            <span className="text-white/90 font-light w-fit">
              {t("home.about.title")}
            </span>
          </h2>

          <div className="space-y-6 text-gray-400 text-base leading-relaxed max-w-xl whitespace-pre-line">
            <p>
              {t("home.about.paragraphs")}
            </p>
          </div>

          <div className="flex flex-wrap gap-6 mt-10">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="px-8 py-3 rounded-full bg-linear-to-r from-[#00fff0] to-[#00bfa6] text-black 
                         font-medium shadow-lg hover:shadow-[0_0_25px_#00fff0b3] transition-all"
            >
              {t("home.about.ctaPrimary")}
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="px-8 py-3 rounded-full border border-[#00fff0]/50 text-[#00fff0] font-medium 
                         hover:bg-[#00fff0]/10 transition-all"
            >
              {t("home.about.ctaSecondary")}
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1 w-full flex justify-center items-center relative"
        >
          <video
            src="/videos/innovation.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="rounded-3xl border border-white/10 object-cover w-full max-w-[700px] aspect-video 
                       shadow-[0_0_40px_rgba(0,0,0,0.6)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
