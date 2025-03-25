"use client";

import { useState, useEffect } from "react";
import styles from "../styles/MainNavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

function MainNavBar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Vérifier la taille de l'écran initialement et lors du redimensionnement
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Nettoyer l'écouteur d'événements
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
          </div>
        )}
      </div>
    </nav>
  );
}

// Fonction pour générer les éléments de menu
function renderMenuItems(isActive, isMobile) {
  const menuLinks = [
    { href: "/pet-services", label: "Prestations" },
    { href: "/pricing", label: "Tarifs" },
    { href: "/contact", label: "Contact" },
    { href: "/about", label: "À propos" },
  ];

  return menuLinks.map((link, index) => (
    <li
      key={link.href}
      className={`${styles.menuItem} ${
        isActive(link.href) ? styles.active : ""
      }`}
      style={
        isMobile
          ? {
              transitionDelay: `${0.1 * (index + 1)}s`,
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
