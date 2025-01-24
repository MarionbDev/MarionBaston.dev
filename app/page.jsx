import AboutMe from "./_components/AboutMe";
import ContactPage from "./_components/contactForm/ContactPage";
import Footer from "./_components/Footer";
import MyServices from "./_components/MyServices";
import BestProjects from "./_components/Projects/BestProjects";
import Skills from "./_components/Skills";

export default function Home() {
  return (
    <div className=" text-txt_black dark:text-white ">
      <div id="home" className=" mx-2 pt-48 sm:pt-20 lg:pt-0 ">
        <AboutMe />
      </div>{" "}
      <div id="portfolio" className=" px-6 md:px-28 md:pb-[6rem] pt-20">
        <BestProjects />
      </div>
      <div id="mes-competences" className="px-6 md:px-28 md:pb-[6rem] pt-20 ">
        <Skills />
      </div>
      <div
        id="mes-services"
        className="px-6 md:px-28 md:pb-[6rem] mt-16  pt-20"
      >
        <MyServices />
      </div>
      <div id="me-contacter" className=" pb-20 pt-20">
        <ContactPage />
      </div>
      <Footer />
    </div>
  );
}
