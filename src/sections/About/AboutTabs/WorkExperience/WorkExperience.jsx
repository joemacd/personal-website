import { useState } from "react";

import styles from "./WorkExperience.module.css";
import WorkExperienceTimeline from "../../../../components/WorkExperienceTimeline/Timeline/WorkExperienceTimeline";
import WorkExperienceCard from "../../../../components/WorkExperienceCard/WorkExperienceCard";
import { workExperienceData } from "../../../../data/workExperienceData";

export default function WorkExperience() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section className={styles.container}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${
            activeTab === "experience" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("experience")}
        >
          Work Experience
        </button>
        <button
          className={`${styles.tab} ${
            activeTab === "timeline" ? styles.activeTab : ""
          }`}
          onClick={() => setActiveTab("timeline")}
        >
          Contribution Timeline
        </button>
      </div>

      {activeTab === "experience" && (
        <div className={styles.cards}>
          {workExperienceData.map((position) => (
            <WorkExperienceCard
              key={`${position.company}-${position.period}`}
              position={position}
            />
          ))}
        </div>
      )}

      {activeTab === "timeline" && (
        <div className={styles.timelineContainer}>
          <WorkExperienceTimeline />
        </div>
      )}
    </section>
  );
}
