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
        className=" border-[1px] rounded-full border-black/20  dark:shadow-inner dark:shadow-free_yellow hover:bg-free_yellow/30 w-9 h-9 duration-300 ease-in-out "
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
