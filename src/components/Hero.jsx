import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const { t, lang } = useLanguage();

  return (
    <>
      {/* Fundo fixo */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src="background.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Camada de vidro (glassmorphism) */}
      <div className="fixed inset-0 -z-5 backdrop-blur-lg bg-white/5" />

      {/* Conteúdo fixo centralizado */}
      <div className="fixed inset-0 flex flex-col items-center justify-center text-snow text-center px-6 pointer-events-none">
        <div className="pointer-events-auto max-w-5xl mx-auto">
          {/* Título */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <TypeAnimation
              key={lang}
              sequence={[t("home.hero.text-animation"), 2000]}
              speed={50}
              repeat={Infinity}
              className="text-4xl md:text-6xl font-normal tracking-tight leading-tight text-white whitespace-pre-line"
            />
          </motion.div>

          {/* Subtítulo */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-fog mt-6 text-lg md:text-xl max-w-3xl mx-auto"
          >
            {t("home.hero.subtitle")}
          </motion.p>

          {/* Botão principal */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-10 bg-transparent border border-amber-50 text-snow font-semibold px-8 py-3 rounded-2xl 
            hover:border-amber-50 hover:bg-white hover:text-black transition cursor-pointer"
          >
            {t("home.hero.cta")}
          </motion.button>
        </div>
      </div>

      {/* Espaço fantasma para scroll */}
      <section className="h-screen"></section>
    </>
  );
}
