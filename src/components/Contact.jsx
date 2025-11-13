import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="w-full px-6 md:px-20 py-32 text-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="flex flex-col gap-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl font-light leading-snug"
          >
            Let's build something
            <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00fff0] to-[#00bfa6]">
              {" "}
              amazing together.
            </span>
          </motion.h2>

          <p className="text-gray-400 leading-relaxed max-w-md">
            Whether you need a modern website, a complete system, or a perfect
            prototype — we're here to turn your ideas into high-quality digital
            experiences.
          </p>

          <div className="flex gap-5 mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              className="text-gray-400 hover:text-[#00fff0] text-2xl transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-gray-400 hover:text-[#00fff0] text-2xl transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              className="text-gray-400 hover:text-[#00fff0] text-2xl transition"
            >
              <FaGithub />
            </a>
          </div>

          <a
            href="https://wa.me/5581999999999"
            target="_blank"
            className="flex items-center gap-3 w-fit mt-4 
                       bg-[#00bfa6]/20 border border-[#00bfa6]/30 backdrop-blur-lg 
                       text-[#00fff0] px-6 py-3 rounded-full hover:bg-[#00bfa6]/30 
                       transition shadow-lg shadow-[#00fff0]/5"
          >
            <FaWhatsapp className="text-2xl" />
            Contact us on WhatsApp
          </a>
        </div>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 
                     rounded-3xl p-10 flex flex-col gap-6 shadow-xl"
        >
          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm">Your Name</label>
            <input
              type="text"
              className="bg-white/5 border border-white/20 rounded-xl p-3 
                         text-gray-100 focus:outline-none focus:border-[#00fff0]
                         transition"
              placeholder="John Doe"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              className="bg-white/5 border border-white/20 rounded-xl p-3 
                         text-gray-100 focus:outline-none focus:border-[#00bfa6]
                         transition"
              placeholder="john@email.com"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-gray-300 text-sm">Message</label>
            <textarea
              rows="5"
              className="bg-white/5 border border-white/20 rounded-xl p-3 
                         text-gray-100 focus:outline-none focus:border-[#00fff0]
                         transition resize-none"
              placeholder="Tell us more about your project..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="mt-4 bg-linear-to-r from-[#00fff0] to-[#00bfa6] 
                       text-gray-900 font-semibold rounded-full px-6 py-3 
                       hover:opacity-90 transition shadow-xl"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </section>
  );
}
