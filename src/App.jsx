import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/contact"; 
import Footer from "./components/Footer";

function App() {
  return (
    <div style={{ fontFamily: "var(--font-body)", background: "var(--navy)", color: "var(--white)", position: "relative", zIndex: 1 }}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;