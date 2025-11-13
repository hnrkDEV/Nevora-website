import { LanguageProvider } from "./context/LanguageContext";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/Aboutt";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import BackgroundGlow from "./components/BackgroundGlow";

function App() {
  return (
    <LanguageProvider>
      <BackgroundGlow />
      <Header />
      <Home />
      <About />
      <Services />
      <Portfolio />
      <Contact/>
      <Footer/>
    </LanguageProvider>
  );
}

export default App;
