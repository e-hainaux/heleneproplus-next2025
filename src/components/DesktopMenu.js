"use client";

import styles from "../styles/MainNavBar.module.css";
import GoogleReviews from "./buttons/GoogleReviews";
import NavItems from "./navigation/NavItems";

/**
 * Composant pour le menu de navigation sur les écrans desktop
 * @param {Object} props - Propriétés du composant
 * @param {Function} props.isActive - Fonction pour déterminer si un lien est actif
 */
function DesktopMenu({ isActive }) {
  return (
    <div className={styles.menuContainer}>
      <NavItems isActive={isActive} isMobile={false} />
      <GoogleReviews />
    </div>
  );
}

export default DesktopMenu;
