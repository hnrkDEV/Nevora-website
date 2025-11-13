import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-white px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-6xl font-light leading-tight max-w-5xl"
      >
        We craft digital experiences that blend design, innovation, and code 
        turning ideas into something that feels alive.
      </motion.h1>

      <p className="mt-6 text-gray-400 text-lg max-w-xl">
        Building the future, one creative line at a time.
      </p>

      <motion.a
        href="#projects"
        whileHover={{ scale: 1.05 }}
        className="mt-8 bg-linear-to-r from-[#00fff0] to-[#00bfa6] text-black font-medium px-8 py-3 rounded-full shadow-lg hover:shadow-[0_0_20px_#00fff0b3] transition-all"
      >
        View Projects
      </motion.a>
    </section>
  );
}
