import { useEffect } from "react";
import Header from "./assets/components/Header";
import Info from "./assets/components/Info";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";
import Skills from "./assets/components/Skills";
import Contact from "./assets/components/Contact";
import Footer from "./assets/components/Footer";
import Project from "./assets/components/Project";
import About from "./assets/components/About";
import EducationSection from "./assets/components/EducationSection";
import ExperienceSection from "./assets/components/ExperienceSection";

function App() {
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return (
    <div className="app-container fade-in">
      <div className="header">
        <Header />
      </div>

      <div className="Info-container">
        <Info />
      </div>
      <About />
      <ExperienceSection />
      <Project />
      <Skills />
      <EducationSection />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
