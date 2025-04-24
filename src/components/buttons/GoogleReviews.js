import Link from "next/link";
import { FaStar } from "react-icons/fa";
import styles from "../../styles/GoogleReviews.module.css";

const GoogleReviews = () => {
  return (
    <Link
      href="https://www.google.com/maps?cid=2065669827376634611"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      <FaStar className={styles.star} />
      <span className={styles.text}>Avis Google</span>
    </Link>
  );
};

export default GoogleReviews;
