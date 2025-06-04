import styles from "./WorkExperienceTimelineItem.module.css";

export default function WorkExperienceTimelineItem({ data }) {
  return (
    <div className={styles.timelineItem}>
      <div className={styles.timelineItemContent}>
        <span
          className={styles.tag}
          style={{ background: data.category.color }}
        >
          {data.category.tag}
        </span>
        <time>{data.date}</time>
        {data.text.map((sentence, idx) => (
          <p key={idx}>{sentence}</p>
        ))}
        {data.link && (
          <a href={data.link.url} target="_blank" rel="noopener noreferrer">
            {data.link.text}
          </a>
        )}

        {data.skills && data.skills.length > 0 && (
          <div className={styles.timelineItemTechSkills}>
            <ul>
              {data.skills.map(({ skill, inline, skillLink }, idx) => (
                <li
                  key={idx}
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

        <span className={styles.circle} />
      </div>
    </div>
  );
}
