import React from "react";
import styles from "./App.css";
import { useState } from "react";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import ProjectsSection from "./sections/Projects/ProjectsSection";
import AboutSection from "./sections/About/AboutSection";
import ContactSection from "./sections/Contact/ContactSection";

function App() {
  const [activeSection, setActiveSection] = useState("about");

  return (
    <>
      <Header active={activeSection} onNavClick={setActiveSection} />

      <main className={styles.content}>
        {activeSection === "projects" && <ProjectsSection />}
        {activeSection === "about" && <AboutSection />}
        {activeSection === "contact" && <ContactSection />}
      </main>

      {activeSection !== "about" && <Footer />}
    </>
  );
}

export default App;
