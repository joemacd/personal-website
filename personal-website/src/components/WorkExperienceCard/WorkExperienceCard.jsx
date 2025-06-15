import styles from "./WorkExperienceCard.module.css";

export default function WorkExperienceCard({ position }) {
  const { company, role, period, location, summary, bullets, skills, link } =
    position;

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <div className={styles.company}>{company}</div>
        <div className={styles.role}>{role}</div>
      </div>

      <div className={styles.meta}>
        <span className={styles.period}>{period}</span>
        <span className={styles.location}>{location}</span>
      </div>

      <p className={styles.summary}>{summary}</p>

      <ul className={styles.bullets}>
        {bullets.map((text, idx) => (
          <li key={idx}>{text}</li>
        ))}
      </ul>

      {/* Skills badges */}
      {skills && skills.length > 0 && (
        <div className={styles.skillsSection}>
          <ul className={styles.skillList}>
            {skills.map(({ skill, inline, skillLink }, idx) => (
              <li
                key={idx}
                className={styles.skillItem}
                onClick={() => skillLink && window.open(skillLink, "_blank")}
                style={{ cursor: skillLink ? "pointer" : "default" }}
              >
                {inline && (
                  <i className={`ci ${inline} ci-sm ${styles.skillIcon}`}></i>
                )}
                <span className={styles.skillLabel}>{skill}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {link && (
        <a
          href={link}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more
        </a>
      )}
    </div>
  );
}
