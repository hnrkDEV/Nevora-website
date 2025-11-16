import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="relative flex flex-col items-center justify-center min-h-screen text-gray-100 px-6 md:px-20 pt-32 pb-8 z-20"
    >
      <div className="max-w-4xl text-center flex flex-col items-center justify-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-6 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-sm text-gray-300"
        >
          {t("home.hero.title")}
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-6xl font-light tracking-tight leading-tight whitespace-pre-line"
        >
          {t("home.hero.subtitle1")}{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00fff0] to-[#00bfa6]">
            {t("home.hero.highlight")}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl leading-relaxed"
        >
          {t("home.hero.subtitle2")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
          className="flex flex-wrap gap-6 mt-6 justify-center"
        >
          <a
            href="#services"
            className="px-10 py-3 rounded-full bg-linear-to-r from-[#00fff0] to-[#00bfa6] text-black font-medium shadow-lg hover:shadow-[0_0_25px_#00fff0b3] transition-all"
          >
            {t("home.hero.cta")}
          </a>
          <a
            href="#projects"
            className="px-10 py-3 rounded-full border border-[#00fff0]/50 text-[#00fff0] font-medium hover:bg-[#00fff0]/10 transition-all"
          >
            {t("home.hero.secondaryCta")}
          </a>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2 }}
          className="absolute left-10 top-1/3 w-40 h-40 rounded-full border border-[#00fff0]/20"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 2, delay: 0.3 }}
          className="absolute right-20 top-1/4 w-56 h-56 rounded-full border border-[#00bfa6]/20"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.35 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute left-1/2 -translate-x-1/2 bottom-10 w-64 h-64 rounded-full border border-[#00fff0]/10"
        />
      </div>
    </section>
  );
}
