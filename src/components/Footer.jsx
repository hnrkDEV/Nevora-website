import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="w-full mt-32 border-t border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

        {/* LOGO & DESCRIPTION */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <img src="/nevora-logo.png" className="w-10 h-10" alt="Nevora" />
            <span className="text-xl font-semibold tracking-wide">Nevora</span>
          </div>

          <p className="text-gray-400 leading-relaxed text-sm max-w-xs">
            {t("footer.description")}
          </p>

          {/* SOCIAL ICONS */}
          <div className="flex gap-5 mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              className="text-gray-400 hover:text-[#00fff0] text-xl transition"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              className="text-gray-400 hover:text-[#00fff0] text-xl transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              className="text-gray-400 hover:text-[#00fff0] text-xl transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>

        {/* NAVIGATION */}
        <div className="flex flex-col md:items-center">
          <h4 className="text-gray-300 font-medium mb-4 tracking-wide">
            {t("footer.navigation")}
          </h4>

          <ul className="flex flex-col gap-3 text-gray-400 text-sm">
            <li>
              <a href="#home" className="hover:text-[#00fff0] transition">
                {t("footer.navLinks.home")}
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-[#00fff0] transition">
                {t("footer.navLinks.about")}
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-[#00fff0] transition">
                {t("footer.navLinks.services")}
              </a>
            </li>
            <li>
              <a href="#portfolio" className="hover:text-[#00fff0] transition">
                {t("footer.navLinks.portfolio")}
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#00fff0] transition">
                {t("footer.navLinks.contact")}
              </a>
            </li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col md:items-end">
          <h4 className="text-gray-300 font-medium mb-4 tracking-wide text-left">
            {t("footer.talkTitle")}
          </h4>

          <p className="text-gray-400 text-sm max-w-xs mb-4">
            {t("footer.talkDescription")}
          </p>

          <a
            href="https://wa.me/5581999999999"
            target="_blank"
            className="px-5 py-2 rounded-full text-[#00fff0] border border-[#00fff0]/40 
                       hover:bg-[#00fff0]/10 transition text-sm"
          >
            {t("footer.whatsapp")}
          </a>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="w-full text-center py-6 text-gray-500 text-xs border-t border-white/10">
        © {new Date().getFullYear()} Nevora — {t("footer.rights")}
      </div>
    </footer>
  );
}
