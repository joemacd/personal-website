import styles from "./InterestsAndSkills.module.css";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiPandas,
  SiTensorflow,
  SiOpencv,
  SiAndroidstudio,
  SiXcode,
  SiKotlin,
  SiSwift,
  SiAwsamplify,
  SiAmazoncognito,
  SiAmazonec2,
  SiAwslambda,
  SiC,
  SiOcaml,
  // SiAsterisk,
} from "react-icons/si";
import {
  FaNodeJs,
  FaJava,
  FaPython,
  FaDatabase,
  FaGit,
  FaAws,
} from "react-icons/fa";

const skillsData = [
  {
    category: "Languages",
    skills: [
      { name: "Java", Icon: FaJava },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "C", Icon: SiC },
      { name: "Python", Icon: FaPython },
      { name: "Kotlin", Icon: SiKotlin },
      { name: "Swift", Icon: SiSwift },
      { name: "OCaml", Icon: SiOcaml },
      { name: "SQL", Icon: FaDatabase },
    ],
  },
  {
    category: "Web & Backend",
    skills: [
      { name: "React", Icon: SiReact },
      { name: "Node.js", Icon: FaNodeJs },
      { name: "GraphQL", Icon: SiGraphql },
    ],
  },
  {
    category: "Data & ML",
    skills: [
      { name: "TensorFlow", Icon: SiTensorflow },
      { name: "Pandas", Icon: SiPandas },
      { name: "OpenCV", Icon: SiOpencv },
    ],
  },
  {
    category: "Cloud (AWS)",
    skills: [
      { name: "Amplify", Icon: SiAwsamplify },
      { name: "Cognito", Icon: SiAmazoncognito },
      { name: "Lambda", Icon: SiAwslambda },
      { name: "EC2", Icon: SiAmazonec2 },
      { name: "Chime SDK", Icon: FaAws },
      { name: "Bedrock", Icon: FaAws },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Git", Icon: FaGit },
      { name: "Android Studio", Icon: SiAndroidstudio },
      { name: "Xcode", Icon: SiXcode },
    ],
  },
];

export default function InterestsAndSkills() {
  return (
    <div className={styles.container}>
      {skillsData.map(({ category, skills }, catIdx) => (
        <section
          key={category}
          className={`${styles.section} ${styles.fadeUp}`}
          style={{ animationDelay: `${catIdx * 0.2}s` }}
        >
          <h2
            className={`${styles.heading} ${styles.fadeUp}`}
            style={{ animationDelay: `${catIdx * 0.2 + 0.1}s` }}
          >
            {category}
          </h2>
          <div className={styles.grid}>
            {skills.map(({ name, Icon }, skillIdx) => (
              <div
                key={name}
                className={`${styles.card} ${styles.fadeUp}`}
                style={{
                  animationDelay: `${catIdx * 0.2 + 0.2 + skillIdx * 0.05}s`,
                }}
              >
                <Icon className={styles.icon} />
                <span className={styles.label}>{name}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
