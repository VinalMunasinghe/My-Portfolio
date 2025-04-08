import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home/Home";
import About from "./components/Pages/About-us/AboutUs";
import Work from "./components/Pages/Work/Work";
import Contact from "./components/Pages/Contact/contact";
import Footer from "./components/Footer/footer";
import Skills from "./components/Pages/Skills/Skills";

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
