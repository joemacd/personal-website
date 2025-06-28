import styles from "./WorkExperienceTimeline.module.css";

import WorkExperienceTimelineItem from "../TimelineItem/WorkExperienceTimelineItem";
import { timelineData } from "../../../data/timelineData";

export default function WorkExperienceTimeline() {
  return (
    <>
      {timelineData.length > 0 && (
        <div className={styles.timelineContainer}>
          {timelineData.map((data, idx) => (
            <WorkExperienceTimelineItem data={data} key={idx} idx={idx} />
          ))}
        </div>
      )}
    </>
  );
}
