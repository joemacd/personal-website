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
        {data.text.map((sentence) => (
          <p>{sentence}</p>
        ))}
        {data.link && (
          <a href={data.link.url} target="_blank" rel="noopener noreferrer">
            {data.link.text}
          </a>
        )}
        <span className={styles.circle} />
      </div>
    </div>
  );
}
