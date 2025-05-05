"use client";

import Link from "next/link";
import styles from "../../styles/MainNavBar.module.css";

/**
 * Composant pour un élément individuel de navigation
 * @param {Object} props - Propriétés du composant
 * @param {string} props.href - URL de destination du lien
 * @param {string} props.label - Texte à afficher pour le lien
 * @param {boolean} props.isActive - Indique si le lien est actif
 * @param {Object} props.style - Styles supplémentaires à appliquer (comme les délais de transition)
 * @param {Function} props.onClick - Fonction à exécuter lors du clic (optionnel)
 */
function NavItem({ href, label, isActive, style = {}, onClick }) {
  return (
    <li
      className={`${styles.menuItem} ${isActive ? styles.active : ""}`}
      style={style}
    >
      <Link href={href} className={styles.menuLink} onClick={onClick}>
        {label}
      </Link>
    </li>
  );
}

export default NavItem;
