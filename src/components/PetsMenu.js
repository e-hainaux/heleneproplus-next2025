"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/PetsMenu.module.css";
import MenuButton from "./buttons/MenuButton";
import Image from "next/image";

import dogPic from "../../public/images/dog.png";
import catPic from "../../public/images/cat.png";
import exoticPic from "../../public/images/exoGlobalPicto.png";
import horsePic from "../../public/images/horse.gif";
import chickenPic from "../../public/images/chicken.png";

function PetsMenu({ onAnimalSelect }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleImageClick = (animal) => {
    console.log(`Vous avez cliqué sur l'image de ${animal}.`);

    if (onAnimalSelect) {
      onAnimalSelect(animal);
    }
  };

  const handleMenuButtonClick = (e) => {
    e.stopPropagation(); // Empêche la propagation du clic
    setIsMenuOpen(!isMenuOpen);
  };

  // Fermer le menu si on clique en dehors
  const handleOutsideClick = (e) => {
    if (
      isMenuOpen &&
      !e.target.closest(`.${styles.mainContainer}`) &&
      !e.target.closest(`.${styles.menuButton}`)
    ) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    // Ajouter l'event listener pour les clics en dehors
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isMenuOpen]);

  return (
    <div className={`${styles.mainContainer} ${isMenuOpen ? styles.open : ""}`}>
      <button
        onClick={() => handleImageClick("cat")}
        className={styles.imageButton}
      >
        <div className={styles.chats}>
          <Image className={styles.objectFitCat} src={catPic} alt="Cat icon" />
          <span className={styles.buttonText}>Chats</span>
        </div>
      </button>
      <button
        onClick={() => handleImageClick("dog")}
        className={styles.imageButton}
      >
        <div className={styles.chiens}>
          <Image className={styles.objectFitDog} src={dogPic} alt="Dog icon" />
          <span className={styles.buttonText}>Chiens</span>
        </div>
      </button>

      <button
        onClick={() => handleImageClick("exotic")}
        className={styles.imageButton}
      >
        <div className={styles.nac}>
          <Image
            className={styles.objectFitGroup}
            src={exoticPic}
            alt="Mixed exotic pets icon"
          />
          <span className={styles.buttonText}>N.A.C.</span>
        </div>
      </button>
      <button
        onClick={() => handleImageClick("chicken")}
        className={styles.imageButton}
      >
        <div className={styles.bassecour}>
          <Image
            className={styles.objectFitRescaled}
            src={chickenPic}
            alt="Farmyard pets icon"
          />
          <span className={styles.buttonText}>Basse-cour</span>
        </div>
      </button>

      <button
        onClick={() => handleImageClick("horse")}
        className={styles.imageButton}
      >
        <div className={styles.horses}>
          <Image
            className={styles.objectFitHorse}
            src={horsePic}
            alt="Cat icon"
          />
          <span className={styles.buttonText}>Équidés</span>
        </div>
      </button>
      <MenuButton isOpen={isMenuOpen} onClick={handleMenuButtonClick} />
    </div>
  );
}

export default PetsMenu;
