import PropTypes from "prop-types";
import styles from "./ProjectSkills.module.css";

export default function ProjectSkills({ skills, starred }) {
  return (
    <div
      className={styles.card}
      starred={starred ? "true" : undefined}
      role="button"
      tabIndex={0}
    >
      {skills.map((skill) => (
        <i className={`ci ${skill.inline} ci-sm`}></i>
      ))}
    </div>
  );
}

ProjectSkills.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  repoUrl: PropTypes.string,
  demoUrl: PropTypes.string,
  starred: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};
