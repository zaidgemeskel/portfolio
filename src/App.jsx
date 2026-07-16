import "./styles/globals.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Journey from "./components/Journey/Journey";
import Skills from "./components/Skills/Skills";
import Achievements from "./components/Achievements/Achievements";
import Projects from "./components/Projects/Projects";
import Learning from "./components/Learning/Learning";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import ScrollProgress from "./components/ScrollProgress/ScrollProgress";
import BackToTop from "./components/BackToTop/BackToTop";

function App() {
  return (
    <div className="App">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Achievements />
      <Projects />
      <Learning />
      <Contact />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
