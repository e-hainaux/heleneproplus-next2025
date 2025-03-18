import { useState } from "react";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export function useFormSubmit() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const submitForm = async (endpoint, data) => {
    setIsLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du formulaire");
      }

      setSuccess(true);
      return { success: true };
    } catch (error) {
      setError(error.message);
      console.error("Erreur lors de l'envoi du formulaire:", error);
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  return { submitForm, isLoading, error, success };
}
