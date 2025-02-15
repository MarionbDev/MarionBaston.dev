import AboutMe from "./_components/AboutMe";
import ContactPage from "./_components/contactForm/ContactPage";
import Footer from "./_components/Footer";
import BestProjectsPage from "./_components/Projects/BestProjectsPage";
import SkillsAndTech from "./_components/Skills&tech";

export default function Home() {
  return (
    <div className=" text-txt_black dark:text-white ">
      <div id="home" className=" mx-2 pt-48 sm:pt-20 lg:pt-0 ">
        <AboutMe />
      </div>{" "}
      <div id="portfolio" className=" px-6 md:px-28 md:pb-[6rem] pt-20 ">
        <BestProjectsPage />
      </div>
      <div id="skills" className="px-6 md:px-28 md:pb-[6rem] pt-20 ">
        <SkillsAndTech />
      </div>
      <div id="me-contacter" className=" pb-20 pt-20">
        <ContactPage />
      </div>
    </div>
  );
}
