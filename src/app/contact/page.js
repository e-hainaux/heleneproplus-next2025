"use client";

import React, { useState, useEffect } from "react";
import styles from "../../styles/Contact.module.css";

import ReCAPTCHA from "react-google-recaptcha";
import { useFormSubmit } from "../hooks/useFormSubmit";

function Contact() {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;
  const { submitForm, isLoading, error, success } = useFormSubmit();

  const [token, setToken] = useState(null);
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [commentaire, setCommentaire] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let timeoutId;
    if (showSuccessPopup) {
      timeoutId = setTimeout(() => {
        setShowSuccessPopup(false);
      }, 3000);
    }
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, [showSuccessPopup]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setIsSubmitting(false);

    if (!prenom || !nom || (!email && !telephone)) {
      setErrorMessage(
        "Les champs prénom, nom et au moins un moyen de contact (email ou téléphone) sont obligatoires."
      );
      return;
    }

    const prenomRegex = /^[A-Za-zÀ-ÿ]+([-\s][A-Za-zÀ-ÿ]+)*$/;
    const nomRegex = /^[A-Za-zÀ-ÿ]+([-\s][A-Za-zÀ-ÿ]+)*$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telephoneRegex = /^(0|\+33|0033)[1-9]([-. ]?[0-9]{2}){4}$/;

    if (!prenomRegex.test(prenom) || prenom.length > 20) {
      setErrorMessage(
        "Le prénom doit contenir uniquement des lettres, espaces ou tirets (pour les prénoms composés) et faire maximum 20 caractères."
      );
      return;
    }

    if (!nomRegex.test(nom) || prenom.length > 20) {
      setErrorMessage(
        "Le nom doit contenir uniquement des lettres, espaces ou tirets (pour les prénoms composés) et faire maximum 30 caractères."
      );
      return;
    }

    if (email && !emailRegex.test(email)) {
      setErrorMessage(
        "L'adresse mail doit correspondre au format adresse@site.extension."
      );
      return;
    }

    if (telephone && !telephoneRegex.test(telephone)) {
      setErrorMessage(
        "Le numéro de téléphone doit utiliser uniquement des chiffres et correspondre à un numéro de portable ou de fixe français."
      );
      return;
    }

    const cleanedCommentaire = commentaire.replace(/(<([^>]+)>)/gi, "");

    const formData = {
      token,
      prenom,
      nom,
      email,
      telephone,
      commentaire: cleanedCommentaire,
    };

    setIsSubmitting(true);

    const result = await submitForm("/form/send-email", formData);

    setIsSubmitting(false);

    if (result.success) {
      setSuccessMessage("Votre formulaire a été soumis avec succès.");
      setShowSuccessPopup(true);

      setPrenom("");
      setNom("");
      setEmail("");
      setTelephone("");
      setCommentaire("");
      setToken(null);
    } else {
      setErrorMessage(
        "Erreur lors de l'envoi du formulaire. Veuillez réessayer."
      );
    }
  };

  return (
    <div
      className={`${styles.mainContainer} ${
        showSuccessPopup ? styles.hasPopup : ""
      }`}
    >
      <div className={styles.content}>
        <h1>CONTACT / DEVIS GRATUIT</h1>
        <div className={styles.txtContainer}>
          <p>
            Pour toute demande, veuillez remplir le formulaire suivant en
            précisant au moins une adresse mail ou un numéro de téléphone :{" "}
          </p>
        </div>
        <div className={styles.formulaireContainer}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="prenom">Prénom</label>
              <input
                type="text"
                id="prenom"
                value={prenom}
                onChange={(e) => setPrenom(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="nom">Nom</label>
              <input
                type="text"
                id="nom"
                value={nom}
                onChange={(e) => setNom(e.target.value)}
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">Adresse mail</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="telephone">Numéro de téléphone</label>
              <input
                type="tel"
                id="telephone"
                value={telephone}
                onChange={(e) => setTelephone(e.target.value)}
                className={styles.input}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="commentaire">Commentaire</label>
              <textarea
                id="commentaire"
                value={commentaire}
                onChange={(e) => setCommentaire(e.target.value)}
                className={styles.textarea}
              ></textarea>
            </div>

            {errorMessage && (
              <div className={styles.errorMessage}>{errorMessage}</div>
            )}

            <div className={styles.btnContainer}>
              <ReCAPTCHA
                sitekey={siteKey}
                onChange={(value) => setToken(value)}
              />
              <button
                disabled={!token || isSubmitting}
                type="submit"
                className={`${styles.button} ${
                  isSubmitting ? styles.loading : ""
                }`}
              >
                {isSubmitting ? (
                  <div className={styles.loadingSpinner}></div>
                ) : (
                  "Envoyer"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>

      {showSuccessPopup && (
        <div className={styles.successPopupContainer}>
          <div className={styles.successPopup}>
            <div className={styles.successIcon}>✓</div>
            <div className={styles.successMessage}>{successMessage}</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Contact;
