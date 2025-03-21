"use client";

import React, { useState } from "react";
import styles from "../../styles/PetServices.module.css";
import PetsMenu from "../../components/PetsMenu";
import { useAnimalSelection } from "../hooks/useAnimalSelection";

import dynamic from "next/dynamic";
import Horses from "@/components/services-components/Horses";

const Cats = dynamic(() => import("../../components/services-components/Cats"));
const Dogs = dynamic(() => import("../../components/services-components/Dogs"));
const ExoticPets = dynamic(() =>
  import("../../components/services-components/ExoticPets")
);
const FarmyardAnimals = dynamic(() =>
  import("../../components/services-components/FarmyardAnimals")
);

function Services() {
  const { selectedAnimal, handleAnimalSelection } = useAnimalSelection();
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const renderSelectedAnimalComponent = () => {
    switch (selectedAnimal) {
      case "cat":
        return <Cats />;
      case "dog":
        return <Dogs />;
      case "exotic":
        return <ExoticPets />;
      case "chicken":
        return <FarmyardAnimals />;
      case "horse":
        return <Horses />;
      default:
        return (
          <div className={styles.servicesWelcome}>
            <h1>Nos Services</h1>
            <p>Sélectionnez une catégorie d'animal dans le menu à gauche</p>
          </div>
        );
    }
  };

  return (
    <div className={styles.mainContainer}>
      <PetsMenu
        onAnimalSelect={handleAnimalSelection}
        onMenuToggle={setIsMenuOpen}
        isOpen={isMenuOpen}
      />

      <div
        className={`${styles.contentContainer} ${
          isMenuOpen ? styles.blurred : ""
        }`}
      >
        {renderSelectedAnimalComponent()}
      </div>
    </div>
  );
}

export default Services;
