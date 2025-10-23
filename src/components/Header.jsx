import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

export default function Header() {
  const { t, toggleLang, lang } = useLanguage();
  const navbarItens = t("navbar.navs", { returnObjects: true });
  const [open, setOpen] = useState(false);

  return (
    <header className="flex text-snow backdrop-blur-md items-center justify-between px-6 py-3 md:px-10 shadow-sm z-100 fixed w-screen">
      {/* Logo */}
      <div className="flex flex-row text-center justify-center items-center gap-2">
        {" "}
        <motion.img
          src="nevora-logo.png"
          alt="Nevora"
          className="w-8 h-8"
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        />
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Nevora
        </motion.p>
      </div>

      {/* Navegação - visível apenas em telas médias pra cima */}
      <motion.nav
        className="hidden md:flex gap-6 text-sm font-medium"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {navbarItens.map((item, i) => (
          <a
            key={i}
            href="#"
            className="relative group transition-colors text-snow"
          >
            {item}
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-gray-500 to-white shadow-[0_0_8px_rgba(251,191,36,0.5)] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
          </a>
        ))}
      </motion.nav>
      {/* Botão de idioma */}
      <motion.button
        onClick={toggleLang}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-sm border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-100 hover:text-gray-800 hover:cursor-pointer hidden md:block"
      >
        {lang === "en" ? "PT" : "EN"}
      </motion.button>

      {/* Botão mobile */}
      <button
        className="md:hidden p-2 text-carbon z-10"
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      {/* Menu Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute opacity-100 top-14 left-0 w-full bg-carbon border-t border-gray-100 shadow-md md:hidden"
          >
            <ul className="flex flex-col items-center py-4 space-y-3 text-sm font-medium">
              {navbarItens.map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="text-carbon hover:text-fog transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <button
                onClick={toggleLang}
                className="text-sm border border-gray-300 px-3 py-1 rounded-full hover:bg-gray-100 cursor-pointer"
              >
                {lang === "en" ? "PT" : "EN"}
              </button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
