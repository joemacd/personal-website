import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import styles from "./Modal.module.css";

export default function Modal({ project, onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div className={styles.overlay} onClick={handleOverlayClick}>
      <div className={styles.modal}>
        <button
          className={styles.closeBtn}
          onClick={onClose}
          aria-label="Close"
        >
          <FaTimes />
        </button>

        <h2 className={styles.title}>{project.title}</h2>
        <img
          src={project.imageUrl}
          alt={project.title}
          className={styles.image}
        />
        <p className={styles.description}>
          {project.longDescription || project.description}
        </p>

        <div className={styles.links}>
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
              View Code
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    description: PropTypes.string,
    longDescription: PropTypes.string,
    repoUrl: PropTypes.string,
    demoUrl: PropTypes.string,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
