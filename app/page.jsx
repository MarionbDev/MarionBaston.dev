"use client";
import AboutMe from "./_components/AboutMe";
import ContactPage from "./_components/contactForm/ContactPage";
import BestProjectsPage from "./_components/Projects/BestProjectsPage";
import SkillsAndTech from "./_components/Skills&tech";
import Stacks from "./_components/Stacks";

export default function Home() {
  return (
    <div className=" text-txt_black dark:text-white ">
      <div id="home" className=" mx-2 sm:mx-6 pt-28 sm:pt-20 lg:pt-32 xl:pt-0 ">
        <AboutMe />
      </div>{" "}
      <div
        id="portfolio"
        className=" px-6 sm:px-14 md:px-24 md:pb-[6rem] pt-20 lg:mt-16 xl:mt-0  "
      >
        <BestProjectsPage />
      </div>
      <div id="skills" className="px-6 sm:px-14 md:px-28 md:pb-[6rem] pt-20 ">
        <SkillsAndTech />
      </div>
      <div id="stacks" className="px-6 sm:px-14 md:px-28 md:pb-[6rem] pt-20 ">
        <Stacks />
      </div>
      <div id="me-contacter" className=" pb-20 pt-20">
        <ContactPage />
      </div>
    </div>
  );
}
