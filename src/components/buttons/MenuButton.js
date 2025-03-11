import React, { useState } from "react";
import { FaCirclePlus } from "react-icons/fa6";
import styles from "../../styles/MenuButton.module.css";

const MenuButton = ({ isOpen, onClick }) => {
  return (
    <button
      className={`${styles.menuButton} ${isOpen ? styles.rotated : ""}`}
      onClick={onClick}
      aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
    >
      <FaCirclePlus size={32} style={{ color: "#617b7b" }} />
    </button>
  );
};

export default MenuButton;
