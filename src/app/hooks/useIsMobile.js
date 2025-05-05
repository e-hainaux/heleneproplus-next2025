import { useState, useEffect } from "react";

/**
 * @param {number} breakpoint - La largeur en pixels en dessous de laquelle l'écran est considéré comme mobile (768px par défaut)
 * @returns {boolean} - true si l'écran est considéré comme mobile, false sinon
 */
export function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= breakpoint);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, [breakpoint]);

  return isMobile;
}

export default useIsMobile;
