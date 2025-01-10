"use client";

import { useEffect, useState } from "react";

import AboutMe from "./_components/AboutMe";
import Footer from "./_components/Footer";
import MyServices from "./_components/MyServices";
import Navbar from "./_components/Navbar";
import NavbarMobile from "./_components/NavbarMobile";
import ProjectPage from "./_components/Projects/ProjectPage";
import Skills from "./_components/Skills";

export default function Home() {
  // const { isVisible } = useScroll();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scroll(0, 0);
    }

    // Simulating the loading of data for AboutMe
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Adjust the time as needed
  }, []);

  return (
    <div className=" text-txt_black">
      <div className="flex  ">
        <Navbar className="navbar" />
      </div>
      <div>
        <NavbarMobile className="navbar-mobile" />
      </div>
      <div id="aboutme" className=" md:pb-4    ">
        <div id="aboutme" className="md:pb-8 mx-2 ">
          <AboutMe />
        </div>
      </div>{" "}
      <div
        id="projects"
        className=" flex flex-col items-center justify-center pt-6 md:pt-16 md:pb-20 px-6"
      >
        <ProjectPage />
      </div>
      <div
        id="skills"
        className="dark:bg-dark_black  pt-16 md:pb-[4rem] px-6  "
      >
        <Skills />
      </div>
      <div
        id="myservices"
        className="dark:bg-dark_black  px-6  pt-16 pb-10 md:pb-[6rem]"
      >
        <MyServices />
      </div>{" "}
      <Footer />
    </div>
  );
}
