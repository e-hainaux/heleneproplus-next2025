import React from "react";
import styles from "../styles/Footer.module.css";
import { FaInstagram, FaFacebook } from "react-icons/fa";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.mainContainer}>
      <div className={styles.socialContainer}>
        <p className={styles.footerParagraph}>Suivez-moi !</p>
        <div className={styles.socialLinks}>
          <a
            href="https://www.instagram.com/heleneproplus/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className={styles.instagram}
          >
            <svg width="0" height="0">
              <linearGradient
                id="instagram-gradient"
                x1="100%"
                y1="100%"
                x2="0%"
                y2="0%"
              >
                <stop stopColor="#f09433" offset="0%" />
                <stop stopColor="#e6683c" offset="25%" />
                <stop stopColor="#dc2743" offset="50%" />
                <stop stopColor="#cc2366" offset="75%" />
                <stop stopColor="#bc1888" offset="100%" />
              </linearGradient>
            </svg>
            <FaInstagram size={30} />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61560574860171"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className={styles.facebook}
          >
            <FaFacebook size={30} />
          </a>
        </div>
      </div>
      <div className={styles.credits}>
        <p>
          ©2025{" "}
          <Link legacyBehavior href="https://www.ehweb.fr" passHref>
            <a target="_blank" rel="noopener noreferrer">
              ehweb.fr
            </a>
          </Link>
        </p>
        <p className={styles.dash}>-</p>
        <Link
          href=""
          target="_blank"
          rel="noopener noreferrer"
          className={styles.linkTOS}
        >
          Mentions légales
        </Link>
      </div>
    </footer>
  );
}
