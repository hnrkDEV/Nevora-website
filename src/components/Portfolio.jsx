import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

export default function Portfolio() {
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(390); 
  const projectsLength = projects.length;

  const infiniteProjects = [...projects, ...projects, ...projects];

  useEffect(() => {
    const updateSize = () => {
      if (cardRef.current) {
        const width = cardRef.current.offsetWidth + 40;
        setCardWidth(width);
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    setIndex(projectsLength);
  }, []);

  const next = () => setIndex((prev) => prev + 1);
  const prev = () => setIndex((prev) => prev - 1);

  useEffect(() => {
    if (index >= projectsLength * 2) {
      setTimeout(() => setIndex(projectsLength), 50);
    }
    if (index <= projectsLength - 1) {
      setTimeout(() => setIndex(projectsLength * 2 - 1), 50);
    }
  }, [index]);
  const handleDragEnd = (_, info) => {
    if (info.offset.x < -40) next();
    if (info.offset.x > 40) prev();
  };

  return (
    <section
      id="portfolio"
      className="relative w-full flex flex-col items-center py-40 text-gray-100 overflow-hidden"
    >
      <h2 className="text-4xl md:text-5xl font-light text-center">
        Our{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-[#00fff0] to-[#00bfa6]">
          Projects
        </span>
      </h2>

      <p className="text-gray-400 text-center max-w-2xl mt-6 mb-16 leading-relaxed">
        A showcase of modern platforms, dashboards, automations and interfaces
        crafted with engineering and premium UI.
      </p>

      <button
        onClick={prev}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-30
                 bg-white/5 border border-white/10 backdrop-blur-xl 
                 w-12 h-12 rounded-full justify-center items-center hover:bg-white/10 transition"
      >
        ←
      </button>

      <button
        onClick={next}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-30
                 bg-white/5 border border-white/10 backdrop-blur-xl 
                 w-12 h-12 rounded-full justify-center items-center hover:bg-white/10 transition"
      >
        →
      </button>

      {/* SLIDER */}
      <div className="w-full overflow-hidden px-4 md:px-10 select-none relative">
        <motion.div
          className="flex gap-10"
          animate={{ x: -index * cardWidth }}
          transition={{ duration: 0.45, ease: "easeInOut" }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.15}
          onDragEnd={handleDragEnd}
        >
          {infiniteProjects.map((p, i) => (
            <motion.div
              ref={i === 0 ? cardRef : null}
              key={i}
              whileHover={{
                y: -10,
                boxShadow: "0 0 30px rgba(0,255,240,0.15)",
              }}
              className="min-w-[85vw] sm:min-w-[350px] max-w-[350px] 
                         bg-white/5 backdrop-blur-xl border border-white/10 
                         rounded-3xl overflow-hidden"
            >
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={p.image}
                  className="w-full h-full object-cover opacity-80"
                  alt={p.title}
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#00fff0] mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-gray-300 mb-4">{p.desc}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {p.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs bg-white/10 border border-white/10 
                                 rounded-full text-gray-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#"
                  className="block px-6 py-2 text-center rounded-full border border-[#00fff0]/40 
                             text-[#00fff0] hover:bg-[#00fff0]/10 transition"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

const projects = [
  {
    title: "Rhally — HR Platform",
    desc: "A complete HR ecosystem with attendance, onboarding, benefits, and recruitment modules.",
    image: "/projects/rhally.png",
    tech: ["React", "Node.js", "MySQL"],
  },
  {
    title: "MaisRH — Recruitment Portal",
    desc: "Modern job portal with dashboards, candidate area and business management.",
    image: "/projects/maisrh.png",
    tech: ["React", "Express", "PostgreSQL"],
  },
  {
    title: "Nevora Landing Page",
    desc: "High-end landing inspired by Webflow, modern motion and premium UI.",
    image: "/projects/nevora.png",
    tech: ["React", "AOS", "Framer Motion"],
  },
  {
    title: "EcoDashboard — Analytics",
    desc: "Real-time analytics dashboard with interactive charts and KPI insights.",
    image: "/projects/ecodashboard.png",
    tech: ["React", "Recharts", "Node.js"],
  },
  {
    title: "Consulta SERPRO",
    desc: "Secure system integrating government operations with SERPRO APIs.",
    image: "/projects/serpro.png",
    tech: ["Django", "Celery", "PostgreSQL"],
  },
  {
    title: "IASSEPE Intranet",
    desc: "Corporate intranet for communication, events and systems integration.",
    image: "/projects/intranet.png",
    tech: ["React", "Node.js", "JWT"],
  },
  {
    title: "Nevora AI Assistant",
    desc: "AI solution for automated workflows and organizational knowledge.",
    image: "/projects/assistant.png",
    tech: ["Python", "OpenAI", "FastAPI"],
  },
  {
    title: "GGP Mentoria",
    desc: "Platform for mentorship, personal branding and content management.",
    image: "/projects/ggp.png",
    tech: ["React", "Tailwind", "AOS"],
  },
  {
    title: "COFASMI Green System",
    desc: "System to manage harvests, cooperatives and food distribution.",
    image: "/projects/cofasmi.png",
    tech: ["React", "Node.js", "MySQL"],
  },
];
