import { LanguageProvider } from "./context/LanguageContext";
import Hero from "./components/Hero";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <>
      <LanguageProvider>
        <Header />
        <Hero />
        <Home />
      </LanguageProvider>
    </>
  );
}

export default App;
