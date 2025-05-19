import { useState, useCallback } from "react";
import styles from "./Sections.module.css";

import ProjectCard from "../components/ProjectCard/ProjectCard";
import Modal from "../components/Modal/Modal";

import { projects } from "../data/projects";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = useCallback((proj) => {
    setSelectedProject(proj);
  }, []);

  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.projectGrid}>
        {projects.map((p) => (
          <ProjectCard
            key={p.title}
            {...p}
            onClick={() => handleCardClick(p)}
          />
        ))}
      </div>
      {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
