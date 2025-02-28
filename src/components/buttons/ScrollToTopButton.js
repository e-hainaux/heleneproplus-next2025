import React, { useState, useEffect } from "react";
import { FaChevronCircleUp } from "react-icons/fa";
import styles from "../../styles/ScrollToTopButton.module.css";

const ScrollToTopButton = ({ containerRef }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (containerRef.current) {
        // console.log("Je scrolle !");
        // console.log("scrollTop valeur : " + containerRef.current.scrollTop);
        const scrollTop = containerRef.current.scrollTop;
        setIsVisible(scrollTop > 0);
      }
    };

    containerRef.current.addEventListener("scroll", toggleVisibility);

    return () => {
      containerRef.current.removeEventListener("scroll", toggleVisibility);
    };
  }, [containerRef]);

  const scrollToTop = () => {
    if (containerRef.current) {
      containerRef.current.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className={`${styles.scrollToTop} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
    >
      <FaChevronCircleUp
        size={32}
        style={{
          color: "#617b7b",
        }}
      />
    </div>
  );
};

export default ScrollToTopButton;
