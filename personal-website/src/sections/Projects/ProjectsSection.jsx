import { useState, useCallback } from "react";
import styles from "./ProjectSection.module.css";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

import { projects } from "../../data/projects";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = useCallback((proj) => {
    setSelectedProject(proj);
  }, []);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.columns}>
        {projects.map((p) => (
          <ProjectCard
            key={p.titleCard.title}
            {...p.titleCard}
            onClick={() => handleCardClick(p)}
          />
        ))}
      </div>
    </section>
  );
}
