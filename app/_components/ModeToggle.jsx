"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react"; // Utilisation de useState et useEffect
import { Button } from "../../components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false); // Vérification du montage

  useEffect(() => {
    setMounted(true); // Une fois monté, on change l'état
  }, []);

  if (!mounted) return null; // N'affiche rien avant le montage

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      size="icon"
      aria-label={`Toggle ${theme === "light" ? "Dark" : "Light"} theme`}
      onClick={toggleTheme}
      className=" border-2 rounded-full"
    >
      {theme === "dark" ? (
        <Sun className="h-[1.2rem] w-[1.2rem]" />
      ) : (
        <Moon className="h-[1.2rem] w-[1.2rem]" />
      )}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
