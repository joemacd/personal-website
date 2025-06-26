import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./GetToKnowMe.module.css";

export default function GetToKnowMe() {
  const avatars = [
    "/images/avatars/joe_baby_1.png",
    "/images/avatars/joe_baby_2.png",
    "/images/avatars/joe_baby_3.png",
    "/images/avatars/joe_baby_4.png",
    "/images/avatars/joe_baby_5.png",
  ];
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setIdx((i) => (i + 1) % avatars.length),
      1500
    );
    return () => clearInterval(timer);
  }, [avatars.length]);

  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.avatarWrapper}>
          <AnimatePresence>
            <motion.img
              key={avatars[idx]}
              src={avatars[idx]}
              alt="Baby Joe"
              className={styles.avatar}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>

        <div className={styles.info}>
          <h1 className={styles.name}>Hi, I'm Joe!</h1>
          <h2 className={styles.subtitle}>I'm a Junior Studying CS@Penn</h2>
          <p className={styles.tagline}>
            I enjoy learning new things and applying my knowledge to engineer unique solutions to relevant problems! Currently looking for opportunities in tech, finance, and more.
          </p>
          <a
            href="/resume/MacDougall_Resume.pdf"
            download
            className={styles.cta}
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
