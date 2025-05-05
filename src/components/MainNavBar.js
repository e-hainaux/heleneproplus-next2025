"use client";

import { useState } from "react";
import styles from "../styles/MainNavBar.module.css";
import Image from "next/image";
import Link from "next/link";

import useIsMobile from "../app/hooks/useIsMobile";
import useActiveNavigation from "../app/hooks/useActiveNavigation";
import { menuConfig } from "../app/config/menuConfig";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

function MainNavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile(menuConfig.mobileBreakpoint);
  const isActive = useActiveNavigation();

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
        {/* Logo */}
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

        {/* Affichage conditionnel du menu selon la taille de l'écran */}
        {isMobile ? (
          <MobileMenu
            isOpen={isMobileMenuOpen}
            toggleMenu={toggleMobileMenu}
            isActive={isActive}
          />
        ) : (
          <DesktopMenu isActive={isActive} />
        )}
      </div>
    </nav>
  );
}

export default MainNavBar;
