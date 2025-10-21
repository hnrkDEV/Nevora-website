import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

export default function Hero() {
  const { t, toggleLang, lang } = useLanguage();

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-snow text-carbon text-center px-4 overflow-hidden">
      {/* Imagem de fundo */}
      <motion.img
        src="hero-img.png"
        alt=""
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.1, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 w-full h-full object-contain object-center z-0"
      />
      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold tracking-tight max-w-3xl leading-tight"
      >
        {t("home.hero.title")}
      </motion.h1>

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-carbon mt-6 max-w-xl text-lg"
      >
        {t("home.hero.subtitle")}
      </motion.p>

      {/* Botão principal */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-10 bg-carbon text-fog font-semibold px-8 py-3 rounded-2xl hover:bg-gray-200 cursor-pointer z-1"
      >
        {t("home.hero.cta")}
      </motion.button>
    </section>
  );
}
