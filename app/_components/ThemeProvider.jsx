"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeProvider({ children, ...props }) {
  const [mounted, setMounted] = useState(false);

  // On ne montre le composant tant que la page n'est pas montée
  useEffect(() => {
    setMounted(true); // Le composant est monté, donc on peut afficher l'UI
  }, []);

  if (!mounted) {
    return null; // Retourne rien tant que la page n'est pas montée
  }
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
