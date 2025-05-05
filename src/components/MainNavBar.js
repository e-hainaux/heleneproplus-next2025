"use client";

import { useState } from "react";
import styles from "../styles/MainNavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";
import GoogleReviews from "./buttons/GoogleReviews";
import useIsMobile from "../app/hooks/useIsMobile";
import { menuLinks, menuConfig } from "../app/config/menuConfig";

function MainNavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isMobile = useIsMobile(menuConfig.mobileBreakpoint);

  const isActive = (path) => {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname === path) return true;
    return false;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`${styles.mainContainer} ${
        isMobileMenuOpen && isMobile ? styles.expandedMobile : ""
      }`}
    >
      <div className={styles.navContent}>
        <Link
          href="/"
          className={styles.logoContainer}
          onClick={closeMobileMenu}
        >
          <Image
            className={styles.logo}
            src="/images/HeleneProPlusBasicLogo.png"
            alt="Logo"
            width={400}
            height={400}
          />
        </Link>

        {/* Burger Menu Icon - visible uniquement sur mobile */}
        {isMobile && (
          <div className={styles.burgerMenu} onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        )}

        {/* Menu Desktop - caché uniquement sur mobile */}
        {!isMobile && (
          <div className={styles.menuContainer}>
            <ul className={styles.menuItems}>
              {renderMenuItems(isActive, false)}
            </ul>
            <GoogleReviews />
          </div>
        )}

        {/* Menu Mobile - visible uniquement sur mobile */}
        {isMobile && (
          <div
            className={`${styles.mobileMenuOverlay} ${
              isMobileMenuOpen ? styles.active : ""
            }`}
          >
            <ul className={styles.mobileMenuItems}>
              {renderMenuItems(isActive, true)}
            </ul>
            <GoogleReviews />
          </div>
        )}
      </div>
    </nav>
  );
}

// Fonction pour générer les éléments de menu
function renderMenuItems(isActive, isMobile) {
  return menuLinks.map((link, index) => (
    <li
      key={link.href}
      className={`${styles.menuItem} ${
        isActive(link.href) ? styles.active : ""
      }`}
      style={
        isMobile
          ? {
              transitionDelay: `${
                menuConfig.transitionDelayBase * (index + 1)
              }s`,
            }
          : {}
      }
    >
      <Link
        href={link.href}
        className={styles.menuLink}
        onClick={
          isMobile
            ? () => {
                // Fermer le menu mobile après un clic
                document.querySelector(`.${styles.burgerMenu}`)?.click();
              }
            : undefined
        }
      >
        {link.label}
      </Link>
    </li>
  ));
}

export default MainNavBar;
