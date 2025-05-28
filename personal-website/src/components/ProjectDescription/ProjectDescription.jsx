import PropTypes from "prop-types";
import styles from "./ProjectDescription.module.css";

export default function ProjectDescription({
  title,
  description,
  imageUrl,
  repoUrl,
  demoUrl,
  onClick,
}) {
  return (
    <div
      className={styles.card}
      style={{ backgroundImage: `url(${imageUrl})` }}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") onClick();
      }}
    >
      <div className={styles.overlay}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
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

ProjectDescription.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  repoUrl: PropTypes.string,
  demoUrl: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};
