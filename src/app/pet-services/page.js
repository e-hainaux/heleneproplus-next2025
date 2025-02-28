import React from "react";
import styles from "../../styles/PetServices.module.css";
import PetsMenu from "../../components/PetsMenu";

function Services() {
  return (
    <div className={styles.mainContainer}>
      <PetsMenu />

      <h1>Nos Services</h1>
      <p>Contenu de la page Services à venir...</p>
    </div>
  );
}

export default Services;
