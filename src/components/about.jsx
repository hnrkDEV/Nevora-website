import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center py-40 px-6 md:px-20 text-gray-100 z-20 bg-gradient-to-b from-[#020202] via-[#050606] to-[#0a0a0a]"
    >
      {/* === CONTEÚDO PRINCIPAL === */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-24 w-full max-w-7xl">
        {/* === TEXTO === */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-left"
        >
          {/* --- TÍTULO --- */}
          <h2 className="text-4xl md:text-5xl font-light mb-8 leading-snug tracking-tight">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00fff0] to-[#00bfa6] font-semibold">
              Nevora Labs
            </span>
            <br />
            <span className="text-white/90 font-light">
              Engineering Digital Futures
            </span>
          </h2>

          {/* --- PARÁGRAFOS --- */}
          <div className="space-y-6 text-gray-400 text-base leading-relaxed max-w-xl">
            <p>
              Nevora is a technology company specializing in the development of
              web and mobile applications, modern interfaces, and digital
              solutions. We combine design, innovation, and software engineering
              to turn ideas into real, high-performance products.
            </p>
            <p>
              From concept to final delivery, we craft intuitive, secure, and
              scalable experiences — offering integrations, automations, and
              consulting that raise the digital standard of companies and
              professionals worldwide.
            </p>
          </div>

          {/* --- BOTÕES --- */}
          <div className="flex flex-wrap gap-6 mt-10">
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="px-8 py-3 rounded-full bg-linear-to-r from-[#00fff0] to-[#00bfa6] text-black font-medium shadow-lg hover:shadow-[0_0_25px_#00fff0b3] transition-all"
            >
              Explore Services
            </motion.a>

            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="px-8 py-3 rounded-full border border-[#00fff0]/50 text-[#00fff0] font-medium hover:bg-[#00fff0]/10 transition-all"
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>

        {/* === VÍDEO === */}
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
            className="rounded-3xl border border-white/10 object-cover w-full max-w-[700px] aspect-video shadow-[0_0_40px_rgba(0,0,0,0.6)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
