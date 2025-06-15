import styles from "./GetToKnowMe.module.css";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";

export default function GetToKnowMe() {
  const projects = [
    {
      thumb: "/images/testytestytest.png",
      title: "MDAware Demo App",
      desc: "Demo app for patient message classification models",
      link: "https://google.com",
    },
    {
      thumb: "/images/testytestytest.png",
      title: "blah blah",
      desc: "blah blah blah blah",
      link: "https://google.com",
    },
    {
      thumb: "/images/testytestytest.png",
      title: "Blah",
      desc: "blah blah blah blah",
      link: "https://google.com",
    },
  ];

  const avatars = [
    "/images/avatars/joe_baby_1.png",
    "/images/avatars/joe_baby_2.png",
    "/images/avatars/joe_baby_3.png",
    "/images/avatars/joe_baby_4.png",
    "/images/avatars/joe_baby_5.png",
  ];

  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIdx((i) => (i + 1) % avatars.length);
    }, 1500);

    return () => clearInterval(timer);
  }, [avatars.length]);

  return (
    <div className={styles.container}>
      {/* <div className={`${styles.personalImage} ${styles.box}`}>
        <div className={styles.boxLineTop} />
        <div className={styles.boxLineRight} />
        <div className={styles.boxLineBottom} />
        <div className={styles.boxLineLeft} />

        <img
          src="/images/joe_macdougall_portrait.PNG"
          alt="Personal visual for selected tab"
          className={styles.personalImageTag}
        />
      </div> */}
      <div className={styles.intro}>
        <a
          href="/resume/MacDougall_Resume.pdf"
          download
          className={styles.resumeLink}
        >
          Download Resume
        </a>
        <div className={styles.nameRow}>
          <h1 className={styles.greeting}>👋 Hi, I’m&nbsp;</h1>
          <h1 className={styles.highlight}>Joe</h1>
          <h1 className={styles.greeting}>&nbsp;👋</h1>
        </div>
        <motion.img
          key={avatars[idx]}
          src={avatars[idx]}
          alt="Joe MacDougall Avatar"
          className={styles.avatar}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        />
      </div>

      <div className={styles.rightColumn}>
        {/* Project Highlights */}
        {/* <div className={styles.projectsSection}>
          <h1>Project Highlights:</h1>
          <div className={styles.projectsGrid}>
            {projects.map((p) => (
              <a
                key={p.title}
                href={p.link}
                className={styles.projectCard}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={p.thumb}
                  alt={p.title}
                  className={styles.projectImage}
                />
                <div className={styles.projectInfo}>
                  <div className={styles.projectTitle}>{p.title}</div>
                  <div className={styles.projectDesc}>{p.desc}</div>
                </div>
              </a>
            ))}
          </div>
        </div> */}
        {/* Personal Description */}
        <div className={styles.descSection}>
          <h1 className={styles.descText}>I build&nbsp;</h1>
          <h1 className={styles.descTextHighlight}>websites,</h1>
          <h1 className={styles.descText}>&nbsp;develop&nbsp;</h1>
          <h1 className={styles.descTextHighlight}>mobile apps,</h1>
          <h1 className={styles.descText}>&nbsp;teach&nbsp;</h1>
          <h1 className={styles.descTextHighlight}>CS theory,</h1>
          <h1 className={styles.descText}>&nbsp;and so much more!</h1>
        </div>
      </div>
    </div>
  );
}
