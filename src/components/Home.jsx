import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

export default function Home() {
  const { t, toggleLang, lang } = useLanguage();

  return (
    <section className="static min-h-screen flex flex-col p-30 items-center bg-[#0d0d0d] text-gray-100 text-center px-4">
      <motion.div>
        <p>teste</p>
      </motion.div>
    </section>
  );
}
