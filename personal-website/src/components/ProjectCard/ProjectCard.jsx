import PropTypes from "prop-types";
import styles from "./ProjectCard.module.css";

export default function ProjectCard({
  title,
  imageUrl,
  repoUrl,
  demoUrl,
  starred,
  onClick,
}) {
  return (
    <div
      className={styles.card}
      starred={starred ? "true" : undefined}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") onClick();
      }}
    >
      {starred && <div className={styles.star}>★</div>}
      <div className={styles.overlay}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.links}>
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              onClick={(e) => {
                e.stopPropagation(); //stops modal from popping up
              }}
            >
              View Code
            </a>
          )}
          {demoUrl && (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              onClick={(e) => {
                e.stopPropagation(); //stops modal from popping up
              }}
            >
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  repoUrl: PropTypes.string,
  demoUrl: PropTypes.string,
  starred: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
