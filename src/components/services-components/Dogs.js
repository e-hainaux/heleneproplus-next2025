import Image from "next/image";
import styles from "../../styles/Modal.module.css";

import dogPic from "../../../public/images/dog.png";

function Chiens() {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.content}>
        <div className={styles.animalSection}>
          <div className={styles.animalImg}>
            <Image className={styles.objectFit} src={dogPic} alt="Chien" />
          </div>

          <div className={styles.txtContainer}>
            <h1>CHIENS</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              ac ligula eget mi ullamcorper viverra. Duis sagittis lacus eget
              eros ultricies, ac ultricies nisi tincidunt. Nunc accumsan, risus
              sed aliquam placerat, sapien arcu sodales tellus, eu tincidunt
              nisi nisl nec lectus. Nam eget eros eu dui tincidunt tristique.
              Sed euismod, nisi eget feugiat pretium, tellus lectus tincidunt
              risus, in pulvinar enim eros eget quam. Fusce aliquam neque sit
              amet felis lacinia, ac ultricies nisi tristique.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chiens;
