import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const { t, toggleLang, lang } = useLanguage();

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-carbon text-snow text-center px-4 overflow-hidden">
      {/* Imagem de fundo - esquerda */}
      <motion.img
        src="hero-img-3.png"
        alt=""
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute hidden inset-0 w-full h-full object-contain object-left -left-60 z-0 md:block"
      />

      {/* Imagem de fundo - direita */}
      <motion.img
        src="hero-img-2.png"
        alt=""
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 0.25, scale: 1 }}
        transition={{ duration: 1 }}
        className="absolute hidden inset-0 w-full h-full object-contain object-right z-0 md:block"
      />

      {/* Fade inferior para suavizar a transição */}
      <div className="absolute bottom-0 left-0 w-full h-108 bg-linear-to-b from-transparent to-black z-10 pointer-events-none"></div>

      {/* Headline */}
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-7xl md:text-7xl font-bold tracking-tight max-w-3xl leading-tight"
      >
        {t("home.hero.title")}
      </motion.h1>

      <TypeAnimation
        key={lang}
        sequence={[t("home.hero.text-animation"), 2000]}
        speed={50}
        repeat={Infinity}
        className="text-5xl whitespace-pre-line md:text-6xl font-normal tracking-tight max-w-3xl leading-tight"
      />

      {/* Subtítulo */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-fog mt-6 max-w-xl text-lg"
      >
        {t("home.hero.subtitle")}
      </motion.p>

      {/* Botão principal */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="mt-10 bg-white text-carbon font-semibold px-8 py-3 rounded-2xl hover:border-solid hover:border-amber-50 hover:border delay-75 transition cursor-pointer z-100 hover:scale-105 hover:bg-transparent hover:text-white"
      >
        {t("home.hero.cta")}
      </motion.button>
    </section>
  );
}
