import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/AboutUs/AboutUs";
import Work from "./components/Work/Work";
import Skills from "./Skills/Skills";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  return (
    <div className="bg-gray-50 text-gray-800">
      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <main>
        <section id="home">
          <Home />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="work">
          <Work />
        </section>
        <section id="skills">
          <Skills />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
