import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const { t, toggleLang, lang } = useLanguage();
  const navbarItens = t("navbar.navs", { returnObjects: true });
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* === HEADER FLUTUANTE E CENTRAL === */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 
          flex items-center justify-between gap-6
          px-8 py-3 rounded-full 
          backdrop-blur-xl bg-white/10 border border-white/20 shadow-[0_0_25px_rgba(255,255,255,0.08)]
          text-snow"
      >
        {/* === LOGO === */}
        <div className="flex items-center gap-2">
          <motion.img
            src="nevora-logo.png"
            alt="Nevora"
            className="w-7 h-7"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          />
          <motion.span
            className="font-light text-snow"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >

          </motion.span>
        </div>

        {/* === NAV DESKTOP === */}
        <nav className="hidden md:flex gap-6 text-sm font-light tracking-wide">
          {navbarItens.map((item, i) => (
            <a
              key={i}
              href="#"
              className="relative group text-snow transition-all duration-300"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-[#00fff0] to-[#00bfa6] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </a>
          ))}
        </nav>

        {/* === BOTÃO DE IDIOMA (DESKTOP) === */}
        <motion.button
          onClick={toggleLang}
          className="hidden md:block text-sm border border-white/30 px-3 py-1 rounded-full hover:bg-white/10 hover:text-white transition-all"
        >
          {lang === "en" ? "PT" : "EN"}
        </motion.button>

        {/* === BOTÃO MOBILE === */}
        <button
          className="md:hidden p-2 text-snow"
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <XMarkIcon className="w-6 h-6" />
          ) : (
            <Bars3Icon className="w-6 h-6" />
          )}
        </button>
      </motion.header>

      {/* === MENU MOBILE === */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 w-[90%] max-w-sm backdrop-blur-lg bg-white/10 border border-white/10 rounded-3xl shadow-lg md:hidden z-40"
          >
            <ul className="flex flex-col items-center py-4 space-y-4 text-sm font-light text-snow">
              {navbarItens.map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-[#00fff0] transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <button
                onClick={toggleLang}
                className="text-sm border border-white/30 px-3 py-1 rounded-full hover:bg-white/10"
              >
                {lang === "en" ? "PT" : "EN"}
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
