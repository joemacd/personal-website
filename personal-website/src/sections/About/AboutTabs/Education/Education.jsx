import styles from "./Education.module.css";
import { classesList } from "../../../../data/classesList";

export default function Education() {
  const educationInfo = {
    school: "University of Pennsylvania",
    degree:
      "Bachelor's of Science in Engineering in Computer and Information Science | 3.94",
    minors: ["Mathematics", "Data Science", "Psychology"],
    period: "2023 – 2027",
    degree2:
      "Master's of Science in Engineering in Computer and Information Science | 4.0",
    period2: "2025 - 2027",
  };

  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.school}>{educationInfo.school}</h2>
        <p className={styles.degree}>{educationInfo.degree}</p>
        <p className={styles.minors}>
          Minors: {educationInfo.minors.join(", ")}
        </p>
        <span className={styles.period}>{educationInfo.period}</span>
        <p className={styles.degree}>{educationInfo.degree2}</p>
        <span className={styles.period}>{educationInfo.period2}</span>
      </div>

      <div className={styles.classesSection}>
        <h3 className={styles.sectionTitle}>Relevant Coursework</h3>
        <div className={styles.grid}>
          {classesList.map((cls, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.cardHeader}>
                <h4 className={styles.classTitle}>{cls.title}</h4>
                <span className={styles.grade}>{cls.grade}</span>
              </div>
              <p className={styles.classDesc}>{cls.description}</p>
              <ul className={styles.skillList}>
                {cls.skills.map((skill, i) => (
                  <li key={i} className={styles.skillItem}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
