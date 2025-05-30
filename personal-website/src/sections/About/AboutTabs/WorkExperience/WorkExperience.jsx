import styles from "./WorkExperience.module.css";
import WorkExperienceTimeline from "../../../../components/WorkExperienceTimeline/Timeline/WorkExperienceTimeline";

export default function WorkExperience() {
  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Work Experience:</h2>
      <h2 className={styles.header}>Work Experience Timeline:</h2>
      <WorkExperienceTimeline />
    </section>
  );
}
