import styles from "../styles/Welcome.module.css";

function Welcome() {
  return (
    <div className={styles.mainContainer}>
      <h1>Hélène Pet-sitting PRO +</h1>
      <h2>~ Un lien humain au service du bien-être animal ~</h2>
      <p>
        Garde d'animaux chez les propriétaires et autres services associés.
        <br />
        <br />
        Tous animaux.
        <br />
        <br />
        Un animal.. c'est une histoire qui commence avec vous et qui peut
        s'accompagner d'une rencontre qui permettra de ne jamais le laisser
        seul.
        <br />
        <br />
        Merci de prendre le temps de me découvrir et prendre connaissances de
        mes services.
        <br />
        <br />
      </p>
    </div>
  );
}

export default Welcome;
