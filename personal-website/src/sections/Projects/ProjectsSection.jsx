import { useState, useCallback } from "react";
import styles from "./ProjectSection.module.css";

import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ProjectDescription from "../../components/ProjectDescription/ProjectDescription";
import ProjectSkills from "../../components/ProjectSkills/ProjectSkills";

import Modal from "../../components/Modal/Modal";

import { projects } from "../../data/projects";

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = useCallback((proj) => {
    setSelectedProject(proj);
  }, []);

  return (
    <section id="projects" className={styles.section}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.columns}>
        <div className={styles.column}>
          {projects.map((p) => (
            <ProjectCard
              key={p.titleCard.title}
              {...p.titleCard}
              onClick={() => handleCardClick(p)}
            />
          ))}
        </div>
        <div className={styles.column}>
          {projects.map((p) => (
            <ProjectDescription
              key={p.titleCard.title}
              {...p.descriptionCard}
            />
          ))}
        </div>
        <div className={styles.column}>
          {projects.map((p) => (
            <ProjectSkills key={p.titleCard.title} {...p.skillsCard} />
          ))}
        </div>
      </div>
      {/* {selectedProject && (
        <Modal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )} */}
    </section>
  );
}
