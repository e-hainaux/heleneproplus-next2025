"use client";

import { usePathname } from "next/navigation";

/**
 * Hook pour déterminer si un lien est actif selon le chemin actuel.
 * @returns {function(string): boolean}
 */
export default function useActiveNavigation() {
  const pathname = usePathname();

  return function isActive(path) {
    if (path === "/" && pathname === "/") return true;
    if (path !== "/" && pathname === path) return true;
    return false;
  };
}
