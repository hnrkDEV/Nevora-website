import { useLanguage } from "../context/LanguageContext";
import { easeOut, motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section className="relative flex items-center justify-between min-h-screen bg-black/70 overflow-hidden px-10">
      <div className="absolute w-[400px] h-[400px] bg-linear-to-tr from-black via-stone-800/80 to-stone-600/0 rounded-full blur-[120px] top-20 left-10"></div>
      <div className="absolute w-[500px] h-[500px] bg-linear-to-bl from-stone-900/90 via-stone-900/60 to-stone-600/0 rounded-full blur-[140px] bottom-10 right-20"></div>

      {/* ======== TEXTO GIGANTE AO FUNDO ======== */}
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute text-[18vw] font-saira font-extrabold tracking-widest text-white/15 leading-none uppercase left-0 top-100 -translate-y-1/2 select-none"
      >
        NEVORA <br /> LABS
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
        className="absolute bottom-8 max-w-150 z-30"
      >
        <div className="relative overflow-hidden backdrop-blur-2xl bg-white/5 border border-white/20 rounded-3xl p-8 shadow-[0_0_25px_rgba(255,255,255,0.08)] hover:bg-white/10 duration-700 md:w-160">
          {/* Reflexo animado */}
          <motion.div
            animate={{ x: ["-150%", "150%"] }}
            transition={{
              repeat: Infinity,
              duration: 6,
              ease: "linear",
            }}
            className="absolute inset-0 w-[60%] bg-linear-to-r from-transparent via-white/5 to-transparent skew-x-12"
          ></motion.div>
          <TypeAnimation
            key={lang}
            sequence={[t("home.hero.text-animation"), 1000]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "24px", display: "inline-block" }}
            repeat={Infinity}
            loop
            className="font-rajdhani"
          />

          <p className="font-rajdhani text-xl text-white/40 max-w-100 leading-relaxed relative z-10">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
            impedit eos sit vel. Nulla placeat porro maxime dicta alias! Esse
          </p>
        </div>
      </motion.div>

      {/* ======== PERSONAGEM ALIEN NO CENTRO ======== */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-20 flex flex-col items-center ml-180 -mb-65"
      >
        <motion.img
          src="/hero-character.png"
          alt="Alien"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="w-[420px] md:w-[620px]"
        />

        <motion.button
          initial={{ opacity: 0, y: -180 }}
          animate={{ opacity: 1, y: -200 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="bg-transparent mb-20 border ml-20 border-amber-50 text-white font-normal max-w-100 px-3 py-3 rounded-xl 
         cursor-pointer z-30 hover:text-black/80 hover:bg-white hover:transition hover:delay-100 hover:backdrop-blur-lg"
        >
          {t("home.hero.cta")}
        </motion.button>
      </motion.div>

      {/* ======== VÍDEO VERTICAL À DIREITA ======== */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 hidden md:flex flex-col items-center justify-center"
      >
        <div className="w-60 h-[420px] overflow-hidden rounded-2xl border border-white/10 shadow-lg">
          <video
            src="/alien-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover select-none pointer-events-none"
            controls={false}
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
          />
        </div>
        <button className="mt-4 text-sm text-snow border border-white/30 px-4 py-2 rounded-full hover:bg-white hover:text-black transition">
          {t("home.hero.navigate")}
        </button>
        <p className="font-orbitron text-white/50 mt-3 text-center whitespace-break-spaces">
          {t("home.hero.check-prices")}
        </p>
      </motion.div>

      {/* ======== BACKGROUND DE VIDRO ======== */}
      <div className="absolute inset-0 backdrop-blur-[1px] bg-white/2 z-0"></div>
    </section>
  );
}
