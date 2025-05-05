"use client";

import Link from "next/link";
import styles from "../styles/MainNavBar.module.css";
import GoogleReviews from "./buttons/GoogleReviews";
import { menuLinks } from "../app/config/menuConfig";

/**
 * Composant pour le menu de navigation sur les écrans desktop
 * @param {Object} props - Propriétés du composant
 * @param {Function} props.isActive - Fonction pour déterminer si un lien est actif
 */
function DesktopMenu({ isActive }) {
  return (
    <div className={styles.menuContainer}>
      <ul className={styles.menuItems}>
        {menuLinks.map((link) => (
          <li
            key={link.href}
            className={`${styles.menuItem} ${
              isActive(link.href) ? styles.active : ""
            }`}
          >
            <Link href={link.href} className={styles.menuLink}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
      <GoogleReviews />
    </div>
  );
}

export default DesktopMenu;
