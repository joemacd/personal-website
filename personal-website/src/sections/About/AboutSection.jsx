import styles from "./AboutSection.module.css";

import React, { useRef, useState } from "react";

import Typewriter from "typewriter-effect";

import GetToKnowMe from "./AboutTabs/GetToKnowMe/GetToKnowMe";
import WorkExperience from "./AboutTabs/WorkExperience/WorkExperience";
import Education from "./AboutTabs/Education/Education";
import InterestsAndSkills from "./AboutTabs/InterestsAndSkills/InterestsAndSkills";

export default function AboutSection() {
  const panels = [
    {
      title: "Get to Know Me",
      text: "yap",
    },
    {
      title: "Work Experience",
      text: "Currently a BSE in Computer Science at UPenn (Class of ’27).",
    },
    {
      title: "Education",
      text: "yap",
    },
    {
      title: "Interests & Skills",
      text: "dummy text.",
    },
  ];

  const dogBubbles = [
    {
      title: "*Woof Woof*",
      text: "I'm Scruffy, Joe's dog (and sometimes debugger). Please click on any section below to learn more!",
    },
    {
      title: "*Woof Bark*",
      text: "Joe has worked on a variety of projects: from his university's mobile app to hospital message routing systems to lane detection software for small racecars.",
    },
    {
      title: "*Bark Bark*",
      text: "Joe moved away to Philadelphia to pursue higher education at the University of Pennsylvania. Here, he is looking to graduate in 2027 with a Bachelor's and Master's in CS and minors in Mathematics, Psychology, and Data Science.",
    },
    {
      title: "*Bark Woof*",
      text: "Joe enjoys a variety of topics including: Fullstack Development, CS theory, ML & Embedded Systems, Low-Level Programming, and so much more. Though, his favorite activity has to be spending time with his dog.",
    },
  ];

  const [dogState, setDogState] = useState("sit");
  const [dogX, setDogX] = useState(0);
  const [direction, setDirection] = useState(1); //1 is facing right, -1 is facing left

  const [selectedPanel, setSelectedPanel] = useState(0);

  const panelRefs = [useRef(), useRef(), useRef(), useRef()];

  const MOUTH_X = 32;

  const handlePetTheDog = () => {
    if (dogState == "run") return;

    setDogState("wag");

    setTimeout(() => {
      setDogState("sit");
    }, 1200);
  };

  const handlePanelClick = (index) => {
    const panel = panelRefs[index].current;
    if (!panel) return;
    if (dogState != "sit") return;

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

    setSelectedPanel(index);

    setTimeout(() => {
      setDogState("sit");
    }, 1500);
  };

  const mouthOffset = 32 * 3;
  const bubbleLeft = direction === 1 ? mouthOffset : mouthOffset - 48 * 3;

  return (
    <div style={{ background: " #8ee0f2" }}>
      <section id="about" className={styles.about}>
        {/* the dog */}
        <div
          className={styles.dogWrapper}
          style={{ transform: `translateX(${dogX}px)` }}
        >
          <div
            role="img"
            aria-label="Dog"
            className={
              dogState === "run"
                ? styles.dog_running
                : dogState === "wag"
                ? styles.dog_wag_tail
                : styles.dog_sit
            }
            style={{
              transform: `scaleX(${direction * 3}) scaleY(3)`,
              ...(dogState === "sit" ? { cursor: "pointer" } : {}),
            }}
            onClick={() => handlePetTheDog()}
          />

          {/* only when sitting, show the bubble */}
          {(dogState === "sit" || dogState === "wag") && (
            <div
              className={styles.bubble}
              data-direction={direction}
              style={
                direction === 1
                  ? { left: `${MOUTH_X}px` }
                  : { right: `${MOUTH_X}px` }
              }
            >
              <strong style={{ fontSize: 15 }}>
                {dogBubbles[selectedPanel].title}
              </strong>
              <Typewriter
                options={{
                  strings: [dogBubbles[selectedPanel].text],
                  autoStart: true,
                  delay: 35,
                  loop: true,
                  pauseFor: 60000,
                }}
              />
            </div>
          )}
        </div>

        <div className={styles.panels}>
          {panels.map((p, i) => (
            <div
              key={p.title}
              ref={panelRefs[i]}
              className={
                `${styles.panel}` +
                (selectedPanel === i ? ` ${styles.selected}` : "")
              }
              onClick={() => handlePanelClick(i)}
            >
              <h2>{p.title}</h2>
              {/* {panels[selectedPanel].title == p.title && <p>{p.text}</p>} */}
            </div>
          ))}
        </div>
      </section>
      <div className={styles.popupContainer}>
        {selectedPanel === 0 && <GetToKnowMe />}
        {selectedPanel === 1 && <WorkExperience />}
        {selectedPanel === 2 && <Education />}
        {selectedPanel === 3 && <InterestsAndSkills />}
      </div>
    </div>
  );
}
