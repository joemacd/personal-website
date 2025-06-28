import styles from "./ProjectSection.module.css";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

import { projects } from "../../data/projects";

export default function ProjectsSection() {
  // const [selectedProject, setSelectedProject] = useState(null);

  // const handleCardClick = useCallback((proj) => {
  //   setSelectedProject(proj);
  // }, []);

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.columns}>
        {projects.map((p, idx) => (
          <div
            key={p.titleCard.title}
            className={styles.fadeUp}
            style={{ animationDelay: `${idx * 0.1}s` }}
          >
            <ProjectCard {...p.titleCard} />{" "}
            {/*onClick={() => handleCardClick(p)}*/}
          </div>
        ))}
      </div>
    </section>
  );
}
