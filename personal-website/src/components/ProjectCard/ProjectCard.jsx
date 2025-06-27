import {useState} from "react";
import PropTypes from "prop-types";
import { FaGithub, FaVideo } from "react-icons/fa"; // or react-icons/fa
import styles from "./ProjectCard.module.css";

export default function ProjectCard({
  title,
  descriptionPreview,
  descriptionReadMore,
  imageUrl,
  repoUrl,
  demoUrl,
  starred,
  onClick,
}) {
  const stop = (e) => e.stopPropagation();
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`${styles.card} ${starred ? styles.starred : ""}`}
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onClick()}
    >
      {starred && <div className={styles.star}>★</div>}

      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>

        <p className={styles.description}>
          {descriptionPreview}
          {descriptionReadMore && expanded && (
            <span>
              {" "}{descriptionReadMore}
            </span>
          )}
          {descriptionReadMore && (
            <button
              className={styles.readMore}
              onClick={(e) => {
                stop(e);
                setExpanded((v) => !v);
              }}
            >
              {expanded ? "Show less" : "Read more"}
            </button>
          )}
        </p>

        <div className={styles.icons}>
          {repoUrl && (
            <a href={repoUrl} target="_blank" rel="noopener noreferrer" onClick={stop}>
              <FaGithub />
            </a>
          )}
          {demoUrl && (
            <a href={demoUrl} target="_blank" rel="noopener noreferrer" onClick={stop}>
              <FaVideo />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

ProjectCard.propTypes = {
  title:       PropTypes.string.isRequired,
  descriptionPreview: PropTypes.string.isRequired,
  descriptionReadMore: PropTypes.string,
  imageUrl:    PropTypes.string.isRequired,
  repoUrl:     PropTypes.string,
  demoUrl:     PropTypes.string,
  starred:     PropTypes.bool,
  onClick:     PropTypes.func.isRequired,
};
