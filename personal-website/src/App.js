import React from "react";
import { useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import ProjectsSection from "./sections/ProjectsSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <>
      <Header active={activeSection} onNavClick={setActiveSection} />

      <main className="content">
        {activeSection === "projects" && <ProjectsSection />}
        {activeSection === "about" && <AboutSection />}
        {activeSection === "contact" && <ContactSection />}
      </main>

      <Footer />
    </>
  );
}

export default App;
