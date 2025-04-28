import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Vd from "./components/Vd";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      offset: 120, // Adjust scroll offset if needed
    });
  }, []);

  return (
    <>
      <Navbar />

      {/* All sections rendered on the same page for smooth scroll */}
      <main>
        <Home />
        <About />
        <Skills />
        <Vd />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default App;
