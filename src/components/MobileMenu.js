"use client";

import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import styles from "../styles/MainNavBar.module.css";
import GoogleReviews from "./buttons/GoogleReviews";
import { menuLinks, menuConfig } from "../app/config/menuConfig";

/**
 * Composant pour le menu mobile qui inclut l'icône burger et l'overlay
 * @param {Object} props - Propriétés du composant
 * @param {boolean} props.isOpen - État d'ouverture du menu
 * @param {Function} props.toggleMenu - Fonction pour basculer l'état du menu
 * @param {Function} props.isActive - Fonction pour déterminer si un lien est actif
 */
function MobileMenu({ isOpen, toggleMenu, isActive }) {
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
        <ul className={styles.mobileMenuItems}>
          {menuLinks.map((link, index) => (
            <li
              key={link.href}
              className={`${styles.menuItem} ${
                isActive(link.href) ? styles.active : ""
              }`}
              style={{
                transitionDelay: `${
                  menuConfig.transitionDelayBase * (index + 1)
                }s`,
              }}
            >
              <Link
                href={link.href}
                className={styles.menuLink}
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <GoogleReviews />
      </div>
    </>
  );
}

export default MobileMenu;
