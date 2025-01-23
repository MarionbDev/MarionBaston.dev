import AboutMe from "./_components/AboutMe";
import ContactPage from "./_components/contactForm/ContactPage";
import Footer from "./_components/Footer";
import MyServices from "./_components/MyServices";
import BestProjects from "./_components/Projects/BestProjects";
import Skills from "./_components/Skills";

export default function Home() {
  return (
    <div className=" text-txt_black dark:text-white ">
      <div id="home" className=" mx-2 ">
        <AboutMe />
      </div>{" "}
      <div id="projects" className=" px-6 md:px-28 pb-[6rem]  md:pt-20">
        <BestProjects />
      </div>
      <div id="skills" className="px-6 md:px-28 pb-[6rem]  md:pt-20 ">
        <Skills />
      </div>
      <div id="myservices" className="px-6 md:px-28 pb-[6rem] mt-16  md:pt-20">
        <MyServices />
      </div>
      <div id="contactPage" className=" pb-20">
        <ContactPage />
      </div>
      <Footer />
    </div>
  );
}
