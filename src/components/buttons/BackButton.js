import React from "react";
import styles from "../../styles/BackButton.module.css";
import { FaChevronLeft } from "react-icons/fa";

const BackButton = ({ onClose }) => {
  return (
    <button className={styles.backButton} onClick={onClose}>
      <FaChevronLeft size={32} style={{ color: "whitesmoke" }} />
    </button>
  );
};

export default BackButton;
