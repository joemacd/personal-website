import styles from "./AboutSection.module.css";

import React, { useRef, useState, useEffect } from "react";

import Typewriter from "typewriter-effect";

import GetToKnowMe from "./AboutTabs/GetToKnowMe/GetToKnowMe";
import WorkExperience from "./AboutTabs/WorkExperience/WorkExperience";
import Education from "./AboutTabs/Education/Education";
import InterestsAndSkills from "./AboutTabs/InterestsAndSkills/InterestsAndSkills";

export default function AboutSection() {
  const panels = [
    {
      title: "Get to Know Me",
      text: "",
    },
    {
      title: "Work Experience",
      text: "",
    },
    {
      title: "Education",
      text: "",
    },
    {
      title: "Interests & Skills",
      text: "",
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
      text: "Joe currently attends the University of Pennsylvania. He will graduate in 2027 with a Bachelor's and Master's in CS and minors in Mathematics, Psychology, and Data Science.",
    },
    {
      title: "*Bark Woof*",
      text: "Apart from walking his dog, Joe enjoys a variety of topics including: Fullstack Development, CS theory, ML & Embedded Systems, and so much more.",
    },
  ];

  const [dogState, setDogState] = useState("sit");
  const [dogX, setDogX] = useState(0);
  const [direction, setDirection] = useState(1); //1 is facing right, -1 is facing left

  const [selectedPanel, setSelectedPanel] = useState(0);

  const [isBubbleHidden, setIsBubbleHidden] = useState(false);

  /*
   *Handle dog scale according to the width of the screen
   */
  const [dogScale, setDogScale] = useState(getScaleForWidth(window.innerWidth));
  function getScaleForWidth(width) {
    if (width < 480) {
      return 1.5;
    } else if (width < 768) {
      return 2.0;
    } else {
      return 2.5;
    }
  }
  useEffect(() => {
    function handleResize() {
      setDogScale(getScaleForWidth(window.innerWidth));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

    //bubble appears regardless on new nav click
    setIsBubbleHidden(false);

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
    <div
      style={{
        background: "#8ee0f2",
        minHeight: "85vh",
        paddingBottom: "10px",
        paddingTop: "10px",
      }}
    >
      <div className={styles.popupContainer}>
        {selectedPanel === 0 && <GetToKnowMe />}
        {selectedPanel === 1 && <WorkExperience />}
        {selectedPanel === 2 && <Education />}
        {selectedPanel === 3 && <InterestsAndSkills />}
      </div>
      <div className={styles.stickyNav}>
        <div className={styles.stickyInner}>
          <section id="about" className={styles.about}>
            <div
              style={{
                position: "relative",
                background: "#ffffff",
                height: "5rem",
                width: "100%",
              }}
            />
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
                  transform: `scaleX(${
                    direction * dogScale
                  }) scaleY(${dogScale})`,
                  ...(dogState === "sit" ? { cursor: "pointer" } : {}),
                }}
                onClick={() => handlePetTheDog()}
              />

              {/* only when sitting, show the bubble */}

              {(dogState === "sit" || dogState === "wag") && (
                <div
                  className={styles.bubble}
                  onClick={() => setIsBubbleHidden(!isBubbleHidden)}
                  data-direction={direction}
                  style={
                    direction === 1
                      ? window.innerWidth < 768
                        ? { left: `${MOUTH_X - 100}px` }
                        : { left: `${MOUTH_X}px` }
                      : { left: `${MOUTH_X - 48}px` }
                  }
                >
                  <strong style={{ fontSize: 15 }}>
                    {dogBubbles[selectedPanel].title}
                  </strong>
                  {!isBubbleHidden && (
                    <Typewriter
                      options={{
                        strings: [dogBubbles[selectedPanel].text],
                        autoStart: true,
                        delay: 32,
                        loop: true,
                        pauseFor: 60000,
                      }}
                    />
                  )}
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
        </div>
      </div>
    </div>
  );
}
