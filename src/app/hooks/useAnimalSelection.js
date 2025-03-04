"use client";

import { useState } from "react";

export function useAnimalSelection() {
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  const handleAnimalSelection = (animal) => {
    setSelectedAnimal(animal);
  };

  const resetAnimalSelection = () => {
    setSelectedAnimal(null);
  };

  return {
    selectedAnimal,
    handleAnimalSelection,
    resetAnimalSelection,
  };
}
