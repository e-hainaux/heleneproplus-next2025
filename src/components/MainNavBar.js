"use client";

import { useState } from "react";
import styles from "../styles/MainNavBar.module.css";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import GoogleReviews from "./buttons/GoogleReviews";
import useIsMobile from "../app/hooks/useIsMobile";
import { menuLinks, menuConfig } from "../app/config/menuConfig";
import MobileMenu from "./MobileMenu";

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

        {/* Menu mobile - affiché uniquement sur mobile */}
        {isMobile && (
          <MobileMenu
            isOpen={isMobileMenuOpen}
            toggleMenu={toggleMobileMenu}
            isActive={isActive}
          />
        )}

        {/* Menu desktop - affiché uniquement sur desktop */}
        {!isMobile && (
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
        )}
      </div>
    </nav>
  );
}

export default MainNavBar;
