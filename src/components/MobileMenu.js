"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../styles/MainNavBar.module.css";
import GoogleReviews from "./buttons/GoogleReviews";
import NavItems from "./navigation/NavItems";

/**
 * Composant pour le menu mobile qui inclut l'icône burger et l'overlay
 * @param {Object} props - Propriétés du composant
 * @param {boolean} props.isOpen - État d'ouverture du menu
 * @param {Function} props.toggleMenu - Fonction pour basculer l'état du menu
 * @param {Function} props.isActive - Fonction pour déterminer si un lien est actif
 */
function MobileMenu({ isOpen, toggleMenu, isActive }) {
  // Fonction pour fermer le menu après avoir cliqué sur un lien
  const handleLinkClick = () => {
    toggleMenu();
  };

  return (
    <>
      {/* Icône de menu burger */}
      <div className={styles.burgerMenu} onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>

      {/* Overlay du menu mobile */}
      <div
        className={`${styles.mobileMenuOverlay} ${isOpen ? styles.active : ""}`}
      >
        <NavItems
          isActive={isActive}
          isMobile={true}
          onItemClick={handleLinkClick}
        />
        <GoogleReviews />
      </div>
    </>
  );
}

export default MobileMenu;
