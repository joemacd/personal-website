import styles from "./InterestsAndSkills.module.css";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiGraphql,
  SiAndroidstudio,
  SiXcode,
  SiKotlin,
  SiSwift,
  SiAwsamplify,
  SiAmazoncognito,
  SiTensorflow,
  SiOpencv,
  SiC,
  SiOcaml,
  SiAsterisk,
  SiAmazonec2,
  SiAwslambda,
  SiPandas,
} from "react-icons/si";
import {
  FaNodeJs,
  FaJava,
  FaPython,
  FaDatabase,
  FaGit,
  FaMicrochip,
  FaAws,
} from "react-icons/fa";

const skillsData = [
  {
    category: "Web Development",
    skills: [
      { name: "React", Icon: SiReact },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "Node.js", Icon: FaNodeJs },
      { name: "GraphQL", Icon: SiGraphql },
    ],
  },
  {
    category: "Mobile Development",
    skills: [
      { name: "Android Studio", Icon: SiAndroidstudio },
      { name: "Xcode", Icon: SiXcode },
      { name: "Java", Icon: FaJava },
      { name: "Kotlin", Icon: SiKotlin },
      { name: "Swift", Icon: SiSwift },
    ],
  },
  {
    category: "AWS & Cloud",
    skills: [
      { name: "Amplify", Icon: SiAwsamplify },
      { name: "Chime SDK", Icon: FaAws },
      { name: "Cognito", Icon: SiAmazoncognito },
      { name: "Lambda", Icon: SiAwslambda },
      { name: "EC2", Icon: SiAmazonec2 },
      { name: "Nova Sonic", Icon: FaAws },
    ],
  },
  {
    category: "Data Science",
    skills: [
      { name: "Python", Icon: FaPython },
      { name: "Pandas", Icon: SiPandas },
      // { name: "Polars", Icon: FaDatabase },
      { name: "TensorFlow", Icon: SiTensorflow },
      { name: "Embedded ML", Icon: FaMicrochip },
      { name: "OpenCV", Icon: SiOpencv },
      { name: "SQL", Icon: FaDatabase },
    ],
  },
  {
    category: "Other Languages & Tools",
    skills: [
      { name: "Git", Icon: FaGit },
      { name: "C", Icon: SiC },
      { name: "OCaml", Icon: SiOcaml },
      { name: "Asterisk", Icon: SiAsterisk },
    ],
  },
];

export default function InterestsAndSkills() {
  return (
    <div className={styles.container}>
     {skillsData.map(({ category, skills }, catIdx) => (
        <section key={category} className={`${styles.section} ${styles.fadeUp}`}
          style={{ animationDelay: `${catIdx * 0.2}s` }}>
          <h2 className={`${styles.heading} ${styles.fadeUp}`}
            style={{ animationDelay: `${catIdx * 0.2 + 0.1}s` }}>{category}</h2>
          <div className={styles.grid}>
            {skills.map(({ name, Icon }, skillIdx) => (
              <div key={name} className={`${styles.card} ${styles.fadeUp}`}
                style={{
                  animationDelay: `${catIdx * 0.2 + 0.2 + skillIdx * 0.05}s`,
                }}>
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
