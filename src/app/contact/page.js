"use client";

import React, { useState } from "react";
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
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Vérification des champs obligatoires
    if (!prenom || !nom || (!email && !telephone)) {
      setMessage(
        "Les champs prénom, nom et au moins un moyen de contact (email ou téléphone) sont obligatoires."
      );
      return;
    }

    // Validation des champs avec des expressions régulières
    const prenomRegex = /^[A-Za-zÀ-ÿ-]{1,20}$/;
    const nomRegex = /^[A-Za-zÀ-ÿ\s-]{1,30}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const telephoneRegex = /^(0|\+33|0033)[1-9]([-. ]?[0-9]{2}){4}$/;

    if (!prenomRegex.test(prenom)) {
      setMessage(
        "Le prénom doit utiliser des lettres uniquement et contenir au maximum 20 caractères."
      );
      return;
    }

    if (!nomRegex.test(nom)) {
      setMessage(
        "Le nom doit utiliser des lettres uniquement et contenir au maximum 30 caractères."
      );
      return;
    }

    if (email && !emailRegex.test(email)) {
      setMessage(
        "L'adresse mail doit correspondre au format adresse@site.extension."
      );
      return;
    }

    if (telephone && !telephoneRegex.test(telephone)) {
      setMessage(
        "Le numéro de téléphone doit utiliser uniquement des chiffres et correspondre à un numéro de portable ou de fixe français."
      );
      return;
    }

    // Nettoyage du commentaire en supprimant tout le code HTML
    const cleanedCommentaire = commentaire.replace(/(<([^>]+)>)/gi, "");

    // Données à envoyer au backend
    const formData = {
      token,
      prenom,
      nom,
      email,
      telephone,
      commentaire: cleanedCommentaire,
    };

    const result = await submitForm("/form/send-email", formData);

    if (result.success) {
      setMessage("Votre formulaire a été soumis avec succès.");
      // Réinitialisation du formulaire
      setPrenom("");
      setNom("");
      setEmail("");
      setTelephone("");
      setCommentaire("");
      setToken(null);
    } else {
      setMessage("Erreur lors de l'envoi du formulaire. Veuillez réessayer.");
    }
  };
  return (
    <div className={styles.mainContainer}>
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
            <div className={styles.message}>{message}</div>
            <div className={styles.btnContainer}>
              <ReCAPTCHA
                sitekey={siteKey}
                onChange={(value) => setToken(value)}
              />
              <button disabled={!token} type="submit" className={styles.button}>
                Envoyer
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
