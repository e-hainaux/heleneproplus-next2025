"use client";

import React, { useEffect } from "react";
import styles from "../styles/PetsMenu.module.css";
import MenuButton from "./buttons/MenuButton";
import Image from "next/image";

import dogPic from "../../public/images/dog.png";
import catPic from "../../public/images/cat.png";
import exoticPic from "../../public/images/exoGlobalPicto.png";
import horsePic from "../../public/images/horse.gif";
import chickenPic from "../../public/images/chicken.png";

function PetsMenu({ onAnimalSelect, onMenuToggle, isOpen }) {
  const handleImageClick = (animal) => {
    console.log(`Vous avez cliqué sur l'image de ${animal}.`);

    if (onAnimalSelect) {
      onAnimalSelect(animal);
    }
    onMenuToggle(false); // Utiliser onMenuToggle au lieu de setIsMenuOpen
  };

  const handleMenuButtonClick = (e) => {
    e.stopPropagation(); // Empêche la propagation du clic
    onMenuToggle(!isOpen); // Utiliser la fonction passée en prop pour inverser l'état
  };

  // Fermer le menu si on clique en dehors
  const handleOutsideClick = (e) => {
    if (
      isOpen && // Utiliser isOpen au lieu de isMenuOpen
      !e.target.closest(`.${styles.mainContainer}`) &&
      !e.target.closest(`.${styles.menuButton}`)
    ) {
      onMenuToggle(false); // Utiliser onMenuToggle au lieu de setIsMenuOpen
    }
  };

  useEffect(() => {
    // Ajouter l'event listener pour les clics en dehors
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isOpen]); // Dépendance mise à jour pour utiliser isOpen

  return (
    <div className={`${styles.mainContainer} ${isOpen ? styles.open : ""}`}>
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
      <MenuButton isOpen={isOpen} onClick={handleMenuButtonClick} />
    </div>
  );
}

export default PetsMenu;
