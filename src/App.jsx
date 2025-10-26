import { LanguageProvider } from "./context/LanguageContext";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/about";

function App() {
  return (
    <>
      <LanguageProvider>
        <Header />
        <Hero />
        <Home />
        <About />
      </LanguageProvider>
    </>
  );
}

export default App;
