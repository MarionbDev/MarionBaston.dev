"use client";

import { useEffect, useState } from "react";

import AboutMe from "./_components/AboutMe";
import Footer from "./_components/Footer";
import MyServices from "./_components/MyServices";
import Navbar from "./_components/Navbar";
import NavbarMobile from "./_components/NavbarMobile";
import ProjectPage from "./_components/Projects/ProjectPage";
import Skills from "./_components/Skills";
import ContactPage from "./_components/contactForm/ContactPage";

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
      <div id="home" className=" mx-2 ">
        <AboutMe />
      </div>{" "}
      <div id="projects" className=" px-28 pb-[6rem] pt-20">
        <ProjectPage />
      </div>
      <div id="skills" className="px-28 pb-[6rem] pt-20 ">
        <Skills />
      </div>
      <div id="myservices" className="px-28 pb-[6rem] mt-16 pt-20">
        <MyServices />
      </div>
      <div id="contactPage" className=" pb-20">
        <ContactPage />
      </div>
      <Footer />
    </div>
  );
}
