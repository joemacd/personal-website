import styles from "./Header.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const socials = [
  {
    name: "GitHub",
    url: "https://github.com/joemacd",
    Icon: FaGithub,
    brand: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/joseph-m-macdougall",
    Icon: FaLinkedin,
    brand: "linkedin",
  },
  {
    name: "Email",
    url: "mailto:joe.m.macdougall@gmail.com",
    Icon: FaEnvelope,
    brand: "gmail",
  },
];

const locations = [
  { city: "Philadelphia", state: "PA" },
  { city: "Denver", state: "CO" },
];

export default function Header({ active, onNavClick }) {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.namesocialslocationheader}>
          {/* Name/Header */}
          <h1 className={styles.logo}>Joseph&nbsp;MacDougall</h1>

          {/* Socials */}
          <ul className={styles.socialList}>
            {socials.map(({ name, url, Icon, brand }) => (
              <li key={name}>
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={name}
                  title={name}
                  className={styles[brand]}
                >
                  <Icon className={styles.icon} />
                </a>
              </li>
            ))}
          </ul>

          {/* Location */}
          <div className={styles.locationsList}>
            {locations.map(({ city, state }) => (
              <div className={styles.locationCell} key={city + state}>
                <FaMapMarkerAlt className={styles.locationIcon} />
                <div className={styles.locationText}>
                  <span className={styles.city}>{city}</span>
                  <span className={styles.state}>, {state}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Site Navigation */}
        <nav className={styles.nav}>
          {["about", "projects", "contact"].map((section) => (
            <button
              key={section}
              onClick={() => onNavClick(section)}
              className={
                active === section
                  ? `${styles.navLink} ${styles.active}`
                  : styles.navLink
              }
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
