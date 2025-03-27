import React from "react";
import styles from "../styles/Footer.module.css";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.mainContainer}>
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
