"use client";

import React, { useState, useEffect } from "react";
import styles from "../styles/PetsMenu.module.css";
import MenuButton from "./buttons/MenuButton";
import Image from "next/image";
import Dogs from "../components/services-components/Dogs";
import Cats from "../components/services-components/Cats";
import FarmyardAnimals from "../components/services-components/FarmyardAnimals";
// import Chevaux from "./Chevaux.js";
// import Oiseaux from "./Oiseaux.js";
// import NAC from "./NAC.js";
import dogPic from "/dog.png";
import catPic from "../../public/images/cat.png";
import exoticPic from "/nacGlobalPicto.png";
import chickenPic from "/chicken.png";

function PetsMenu() {
  const [animalModal, setAnimalModal] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const handleImageClick = (animal) => {
    console.log(`Vous avez cliqué sur l'image de ${animal}.`);
    setAnimalModal(animal);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleMenuButtonClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 700);
    };

    handleResize(); // Check initial screen size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const renderModalContent = () => {
    switch (animalModal) {
      case "dog":
        return <Dogs onClose={handleCloseModal} />;
      case "cat":
        return <Cats onClose={handleCloseModal} />;
      case "chicken":
        return <FarmyardAnimals onClose={handleCloseModal} />;
      case "exotic":
        return <ExoticPets onClose={handleCloseModal} />;
      default:
        return null;
    }
  };

  return (
    <div className={`${styles.container} ${isMenuOpen ? styles.open : ""}`}>
      {isSmallScreen && (
        <MenuButton isOpen={isMenuOpen} onClick={handleMenuButtonClick} />
      )}
      <div
        className={`${styles.mainContainer} ${
          isMenuOpen || !isSmallScreen ? styles.open : ""
        }`}
      >
        <button
          onClick={() => handleImageClick("dog")}
          className={styles.imageButton}
        >
          <div className={styles.chiens}>
            <Image className={styles.objectFitDog} src={dogPic} />
            <span className={styles.buttonText}>Chiens</span>
          </div>
        </button>
        <button
          onClick={() => handleImageClick("cat")}
          className={styles.imageButton}
        >
          <div className={styles.chats}>
            <Image className={styles.objectFitCat} src={catPic} />
            <span className={styles.buttonText}>Chats</span>
          </div>
        </button>
        <button
          onClick={() => handleImageClick("exotic")}
          className={styles.imageButton}
        >
          <div className={styles.nac}>
            <Image className={styles.objectFitGroup} src={exoticPic} />
            <span className={styles.buttonText}>N.A.C.</span>
          </div>
        </button>
        <button
          onClick={() => handleImageClick("chicken")}
          className={styles.imageButton}
        >
          <div className={styles.bassecour}>
            <Image className={styles.objectFitRescaled} src={chickenPic} />
            <span className={styles.buttonText}>Basse-cour</span>
          </div>
        </button>
      </div>
      {isModalOpen && renderModalContent()}
    </div>
  );
}

export default PetsMenu;
