import styles from "./Sections.module.css";

import React, { useRef, useState } from "react";

export default function AboutSection() {
  const panels = [
    {
      title: "Get to Know Me:",
      text: "yap",
    },
    {
      title: "Education:",
      text: "Currently a BSE in Computer Science at UPenn (Class of ’27).",
    },
    {
      title: "Interests/Skills:",
      text: "yap",
    },
    {
      title: "title:",
      text: "dummy text.",
    },
  ];

  const dogBubbles = [
    {
      title: "*Woof Woof*",
      text: "I'm Scruffy, Joe's dog!",
    },
    {
      title: "Bark Bark",
      text: "Joe moved away to Philadelphia to pursue a degree in CS at the University of Pennsylvania.",
    },
    {
      title: "Bark Woof",
      text: "Joe enjoys a variety of CS topics including: frontend design, yada yada",
    },
    {
      title: "Woof Bark",
      text: "bob",
    },
  ];

  const [dogState, setDogState] = useState("sit");
  const [dogX, setDogX] = useState(0);
  const [direction, setDirection] = useState(1); //1 is facing right, -1 is facing left

  const [selectedPanel, setSelectedPanel] = useState(0);

  const panelRefs = [useRef(), useRef(), useRef(), useRef()];

  const MOUTH_X = 32;

  const handlePanelClick = (index) => {
    const panel = panelRefs[index].current;
    if (!panel) return;

    //compute distance from the left edge of the .about container
    const containerLeft = panel.parentElement.getBoundingClientRect().left;
    const targetLeft = panel.getBoundingClientRect().left;
    const offsetX = targetLeft - containerLeft;

    if (dogX == offsetX) return; //if we click the same panel then no extra movement

    //flip direction based on where we're going (i.e., where scruffy is walking)
    setDirection((prevX) => (offsetX >= dogX ? 1 : -1));

    //start running
    setDogState("run");
    requestAnimationFrame(() => {
      setDogX(offsetX);
    });

    setTimeout(() => {
      setDogState("sit");
      setSelectedPanel(index);
    }, 1200);
  };

  const mouthOffset = 32 * 3;
  const bubbleLeft = direction === 1 ? mouthOffset : mouthOffset - 48 * 3;

  return (
    <section id="about" className={styles.about}>
      {/* the dog */}
      <div
        className={styles.dogWrapper}
        style={{ transform: `translateX(${dogX}px)` }}
      >
        <div
          role="img"
          aria-label="Dog"
          className={dogState === "run" ? styles.dog_running : styles.dog_sit}
          style={{
            transform: `scaleX(${direction * 3})
                      scaleY(3)`,
          }}
        />

        {/* only when sitting, show the bubble */}
        {dogState === "sit" && (
          <div
            className={styles.bubble}
            data-direction={direction}
            style={
              direction === 1
                ? { left: `${MOUTH_X}px` }
                : { right: `${MOUTH_X}px` }
            }
          >
            <strong>{dogBubbles[selectedPanel].title}</strong>
            <p>{dogBubbles[selectedPanel].text}</p>
          </div>
        )}
      </div>

      <div className={styles.panels}>
        {panels.map((p, i) => (
          <div
            key={p.title}
            ref={panelRefs[i]}
            className={styles.panel}
            onClick={() => handlePanelClick(i)}
          >
            <h2>{p.title}</h2>
            <p>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
