import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const cards = [
    {
      title: "Process Automation & Integrations",
      desc: "We connect your internal tools and systems, automating workflows that save time and reduce manual errors.",
      value: "Saves hours of manual work and increases productivity.",
    },
    {
      title: "Technical Consulting & Code Review",
      desc: "We analyze and optimize your existing code to improve performance, security, and scalability.",
      value: "Confidence, stability, and continuous improvement.",
    },
    {
      title: "Dashboards & Data Visualization",
      desc: "We transform complex data into clear, interactive dashboards that drive strategic decisions.",
      value: "Faster, data-driven decisions.",
    },
    {
      title: "Rapid Prototyping / MVP",
      desc: "We develop functional prototypes or MVPs to validate ideas quickly, saving time and money.",
      value: "Quick validation and investor-ready prototypes.",
    },
    {
      title: "Growth Tech Packages",
      desc: "Strategic bundles combining automation, dashboards, and reporting — ready-to-scale solutions.",
      value: "A complete system that accelerates growth.",
    },
    {
      title: "Mobile Applications Development",
      desc: "We design and develop high-performance mobile apps for iOS and Android — built with modern frameworks and seamless UX.",
      value:
        "Reach your audience anywhere, with apps that combine design, performance, and scalability.",
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center py-20 px-6 md:px-20 text-gray-100 z-20 -mt-32">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-light mb-16 text-white/90 tracking-wide text-center"
      >
        Nevora Labs{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00fff0] to-[#00bfa6]">
          Premium Services
        </span>
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full max-w-7xl mb-24">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{
              boxShadow: "0 0 40px 8px rgba(0,255,240,0.15)",
              borderColor: "rgba(0,255,240,0.6)",
            }}
            className="relative bg-white/5 border border-white/10 rounded-3xl backdrop-blur-xl p-8 text-left 
                       hover:bg-white/[0.07] transition-all duration-200 ease-out"
          >
            <div className="flex flex-col h-full justify-between">
              <div>
                <h3 className="text-2xl font-semibold text-[#00fff0] mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-3">
                  {card.desc}
                </p>
                <p className="text-sm text-[#00bfa6] italic">{card.value}</p>
              </div>
            </div>
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              whileHover={{
                background:
                  "radial-gradient(circle at center, rgba(0,255,240,0.15) 0%, rgba(0,255,240,0) 70%)",
              }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            />
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-3xl text-center mb-20"
      >
        <h3 className="text-3xl md:text-4xl font-light text-white/90 mb-6">
          “We build digital systems that work like living organisms, smart,
          adaptive, and built to grow.”
        </h3>
        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
          From automations to analytics, every project we create is designed to
          evolve with your business, fast, elegant, and reliable.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="flex flex-wrap justify-center gap-6 mb-24"
      >
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="px-8 py-3 rounded-full bg-linear-to-r from-[#00fff0] to-[#00bfa6] text-black font-medium shadow-lg hover:shadow-[0_0_25px_#00fff0b3] transition-all"
        >
          View Projects
        </motion.a>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="px-8 py-3 rounded-full border border-[#00fff0]/50 text-[#00fff0] font-medium hover:bg-[#00fff0]/10 transition-all"
        >
          Contact Us
        </motion.a>
      </motion.div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 w-full max-w-5xl text-center mb-1">
        {[
          { value: "50+", label: "Projects Delivered" },
          { value: "8+", label: "Tech Stacks" },
          { value: "10k+", label: "Lines of Code" },
          { value: "100%", label: "Client Satisfaction" },
        ].map((metric, i) => (
          <motion.div
            key={i}
            whileHover={{
              boxShadow: "0 0 25px rgba(0,255,240,0.25)",
              borderColor: "rgba(0,255,240,0.6)",
            }}
            transition={{ duration: 0.25 }}
            className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl transition-all duration-200"
          >
            <h4 className="text-4xl font-semibold text-[#00fff0] mb-2">
              {metric.value}
            </h4>
            <p className="text-gray-400 text-sm">{metric.label}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}
