import PropTypes from "prop-types";
import styles from "./ProjectSkills.module.css";

export default function ProjectSkills({ skills }) {
  return (
    <div className={styles.card} role="button" tabIndex={0}>
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
  onClick: PropTypes.func.isRequired,
};
