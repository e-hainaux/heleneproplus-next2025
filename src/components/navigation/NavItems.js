"use client";

import styles from "../../styles/MainNavBar.module.css";
import NavItem from "./NavItem";
import { menuLinks, menuConfig } from "../../app/config/menuConfig";

/**
 * Composant qui affiche une liste d'éléments de navigation
 * @param {Object} props - Propriétés du composant
 * @param {Function} props.isActive - Fonction qui détermine si un lien est actif
 * @param {boolean} props.isMobile - Indique si le menu est affiché en version mobile
 * @param {Function} props.onItemClick - Fonction à exécuter lors du clic sur un élément (optionnel)
 * @param {string} props.className - Classe CSS supplémentaire pour la liste
 */
function NavItems({ isActive, isMobile = false, onItemClick, className = "" }) {
  return (
    <ul
      className={`${
        isMobile ? styles.mobileMenuItems : styles.menuItems
      } ${className}`}
    >
      {menuLinks.map((link, index) => (
        <NavItem
          key={link.href}
          href={link.href}
          label={link.label}
          isActive={isActive(link.href)}
          style={
            isMobile
              ? {
                  transitionDelay: `${
                    menuConfig.transitionDelayBase * (index + 1)
                  }s`,
                }
              : {}
          }
          onClick={onItemClick}
        />
      ))}
    </ul>
  );
}

export default NavItems;
