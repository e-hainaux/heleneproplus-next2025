"use client";

import styles from "../styles/MainNavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function MainNavBar() {
  const pathname = usePathname();

  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname === path) return true;
    return false;
  };

  return (
    <nav className={styles.mainContainer}>
      <div className={styles.navContent}>
        <Link href="/" className={styles.logoContainer}>
          <Image
            className={styles.logo}
            src="/globe.svg"
            alt="Logo"
            width={192}
            height={192}
          />
        </Link>
        <div className={styles.menuContainer}>
          <ul className={styles.menuItems}>
            <li
              className={`${styles.menuItem} ${
                isActive("/contact") ? styles.active : ""
              }`}
            >
              <Link href="/contact" className={styles.menuLink}>
                Contact
              </Link>
            </li>
            <li
              className={`${styles.menuItem} ${
                isActive("/pet-services") ? styles.active : ""
              }`}
            >
              <Link href="/pet-services" className={styles.menuLink}>
                Prestations
              </Link>
            </li>
            <li
              className={`${styles.menuItem} ${
                isActive("/about") ? styles.active : ""
              }`}
            >
              <Link href="/about" className={styles.menuLink}>
                À propos
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MainNavBar;
