import { useLanguage } from "../context/LanguageContext";
import { motion } from "framer-motion";

export default function Home() {
  const { t, toggleLang, lang } = useLanguage();

  return (
    <section className="relative min-h-screen flex flex-col p-30 items-center bg-zinc-950 text-gray-100 text-center px-4 z-20">
      <motion.div>
        <p>Home ficará aqui</p>
      </motion.div>
    </section>
  );
}
