import React from "react";
import styles from "../../styles/ContactButton.module.css";

const ContactButton = ({ onClick }) => {
  return (
    <button disabled={false} className={styles.button} onClick={onClick}>
      Contact / Devis gratuit
    </button>
  );
};

export default ContactButton;
