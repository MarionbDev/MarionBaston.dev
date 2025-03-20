"use client";

import { usePathname } from "next/navigation";
import { createContext, useContext } from "react";

const PathnameContext = createContext(null);

// Fournit pathname à toute l'application
export function PathnameProvider({ children }) {
  const pathname = usePathname();
  return (
    <PathnameContext.Provider value={pathname}>
      {children}
    </PathnameContext.Provider>
  );
}

// Hook pour accéder au pathname
export function useCurrentPathname() {
  return useContext(PathnameContext);
}
