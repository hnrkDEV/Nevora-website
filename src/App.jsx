import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Home from "./components/Home";
import About from "./components/About";
import BackgroundGlow from "./components/BackgroundGlow"; // ← novo fundo contínuo

function App() {
  return (
    <LanguageProvider>
      {/* === FUNDO GLOBAL === */}
      <BackgroundGlow />

      {/* === CONTEÚDO DO SITE === */}
      <Header />
      <Hero />
      <Home />
      <About />
    </LanguageProvider>
  );
}

export default App;
