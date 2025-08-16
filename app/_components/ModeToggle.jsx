"use client";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <Button
        size="icon"
        aria-label={`Toggle ${theme === "light" ? "Dark" : "Light"} theme`}
        onClick={toggleTheme}
        className=" border-2 rounded-full border-black/30 md:border-black/50 dark:shadow-inner dark:shadow-white hover:border-white w-9 h-9 "
      >
        {theme === "dark" ? (
          <Sun color="#f3f3f3 " className="h-[1.1rem] w-[1.1rem] " />
        ) : (
          <Moon color="#4e525a " className="h-[1.1rem] w-[1.1rem] " />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </>
  );
}
