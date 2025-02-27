import styles from "../styles/MainNavBar.module.css";
import Image from "next/image";

function MainNavBar({ onNavigate, currentPage }) {
  return (
    <nav className={styles.mainContainer}>
      <div className={styles.navContent}>
        <div
          className={styles.logoContainer}
          onClick={() => onNavigate("welcome")}
        >
          <Image
            className={styles.logo}
            src="/globe.svg"
            alt="Logo"
            width={192}
            height={192}
          />
        </div>
        <div className={styles.menuContainer}>
          <ul className={styles.menuItems}>
            <li
              className={`${styles.menuItem} ${
                currentPage === "contact" ? styles.active : ""
              }`}
              onClick={() => onNavigate("contact")}
            >
              Contact
            </li>
            <li
              className={`${styles.menuItem} ${
                currentPage === "services" ? styles.active : ""
              }`}
              onClick={() => onNavigate("services")}
            >
              Services
            </li>
            <li
              className={`${styles.menuItem} ${
                currentPage === "about" ? styles.active : ""
              }`}
              onClick={() => onNavigate("about")}
            >
              À propos
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNavBar;
