"use client";

import { useState } from "react";

import AboutMe from "./_components/AboutMe";
import ContactPage from "./_components/contactForm/ContactPage";
import Footer from "./_components/Footer";
import MyServices from "./_components/MyServices";
import BestProjects from "./_components/Projects/BestProjects";
import Skills from "./_components/Skills";

export default function Home() {
  // const { isVisible } = useScroll();
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     window.scroll(0, 0);
  //   }

  //   // Simulating the loading of data for AboutMe
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 2000); // Adjust the time as needed
  // }, []);

  return (
    <div className=" text-txt_black">
      <div id="home" className=" mx-2 ">
        <AboutMe />
      </div>{" "}
      <div id="projects" className=" px-28 pb-[6rem] pt-20">
        <BestProjects />
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
