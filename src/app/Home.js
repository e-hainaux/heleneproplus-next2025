import { useState } from "react";
import styles from "../styles/Home.module.css";
import MainNavBar from "../components/MainNavBar";
import Welcome from "../components/Welcome";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";

function Home() {
  const [currentPage, setCurrentPage] = useState("main");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Fonction pour afficher le composant correspondant à la page sélectionnée
  const renderContent = () => {
    switch (currentPage) {
      case "welcome":
        return <Welcome />;
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "contact":
        return <Contact />;
      default:
        return <Welcome />;
    }
  };

  return (
    <div className={styles.mainContainer}>
      <MainNavBar onNavigate={handlePageChange} currentPage={currentPage} />
      <div className={styles.contentContainer}>{renderContent()}</div>
    </div>
  );
}

export default Home;
