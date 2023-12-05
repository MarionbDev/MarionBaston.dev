"use client";

import { useEffect, useState, createContext, useContext } from "react";

const ScrollContext = createContext();

export const ScrollProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollingText = document.querySelector(".scrollingText");

      if (scrollingText) {
        const scrollingTextPosition = scrollingText.getBoundingClientRect().top;
        console.log("scrollingTextPosition:", scrollingTextPosition);
        console.log("window.innerHeight:", window.innerHeight);
        setIsVisible(scrollingTextPosition < window.innerHeight / 1.2);
      }
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const value = {
    isVisible,
    setIsVisible,
  };

  console.log("Context value:", value);

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
