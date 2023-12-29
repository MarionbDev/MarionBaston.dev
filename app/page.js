"use client";

import { useScroll } from "./_components/ScrollContext";
import { useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "./_components/Navbar";
import AboutMe from "./_components/AboutMe";
import Skills from "./_components/Skills";
import Footer from "./_components/Footer";
import ProfessionalProject from "./_components/Projects/ProfessionalProject";
import SideProject from "./_components/Projects/SideProject";
import TrainingProject from "./_components/Projects/TrainingProject";
import OtherProject from "./_components/Projects/OtherProject";
import MyServices from "./_components/MyServices";
import NavbarMobile from "./_components/NavbarMobile";

export default function Home() {
  const { isVisible } = useScroll();

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.scroll(0, 0);
    }
  }, []);

  return (
    <div className="dark:bg-dark_black  ">
      <div className="flex">
        <Navbar className="navbar" />
      </div>
      <div>
        <NavbarMobile className="navbar-mobile" />
      </div>
      <div id="aboutme" className=" md:pb-14  mx-2  ">
        <AboutMe />
      </div>
      <div
        id="projects"
        className="flex flex-col items-center justify-center pt-6 md:pt-20 md:pb-20 px-6"
      >
        <div className="sm:w-10/12  ">
          <div className="flex flex-col items-center sm:items-start gap-3 mb-6 md:mb-12 ">
            <h2
              className={`font-roboto  text-2xl font-semibold md:text-4xl w-4/5 sm:w-full  text-center lg:text-start  border-b-2 pb-4 sm:pb-2  border-purple ${
                isVisible ? "scrollingText.visible" : "scrollingText"
              }`}
              style={{ transitionDuration: isVisible ? "0.5s" : "0s" }}
            >
              Mes projets
            </h2>
            <p
              className={`font-lato pt-0 px-8 sm:px-0 md:pt-4 text-sm sm:text-lg ${
                isVisible ? "scrollingText.visible" : "scrollingText"
              }`}
              style={{
                transitionDuration: isVisible ? "0.5s" : "0s",
                transitionDelay: isVisible ? "0.6s" : "0s",
              }}
            >
              Plongez dans mon portfolio pour découvrir la diversité de mes
              expériences en développement web !
            </p>
          </div>
          <Tabs defaultValue="side-project">
            <TabsList
              aria-label="naviguez entre les onglets avec les flèches"
              className={` flex mb-8 h-8 w-fit mx-auto gap-2 text-[#0f0505]/70 shadow-xl px-4 py-6 md:py-6 rounded-xl dark:bg-purple/10 dark:shadow-purple/30 dark:shadow-inner ${
                isVisible ? "scrollingText.visible" : "scrollingText"
              }`}
              style={{
                transitionDuration: isVisible ? "0.7s" : "0s",
                transitionDelay: isVisible ? "0.6s" : "0s",
              }}
            >
              {SideProject && SideProject().length > 0 ? (
                <TabsTrigger
                  id="top_perso"
                  value="side-project"
                  aria-controls="projets-personnels"
                  className="font-lato text-sm md:text-base dark:text-white   hover:text-[#ffffff]   hover:bg-[#baa8bbc0] rounded-xl   "
                >
                  <p>Side-projects</p>
                </TabsTrigger>
              ) : null}

              {TrainingProject && TrainingProject().length > 0 ? (
                <TabsTrigger
                  id="top_training"
                  value="training"
                  aria-controls="projets-formations"
                  className="font-lato  text-sm md:text-base  dark:text-white   hover:text-[#ffffff]  hover:bg-[#baa8bbc0] rounded-xl  "
                >
                  Formations
                </TabsTrigger>
              ) : null}

              {ProfessionalProject && ProfessionalProject().length > 0 ? (
                <TabsTrigger
                  value="professional"
                  aria-controls="projets-professionnels"
                  className="font-lato text-sm md:text-base  dark:text-white   hover:text-[#ffffff]  hover:bg-[#baa8bbc0] rounded-lg"
                >
                  Professionnels
                </TabsTrigger>
              ) : null}

              {OtherProject && OtherProject().length > 0 ? (
                <TabsTrigger
                  value="other"
                  aria-controls="projets-autres"
                  className="font-lato text-sm md:text-base  dark:text-white  hover:text-[#ffffff]  hover:bg-[#baa8bbc0] rounded-lg "
                >
                  Autres
                </TabsTrigger>
              ) : null}
            </TabsList>
            <div
              className={`md:w-full lg:w-3/4 mx-auto  w-11/12  ${
                isVisible ? "scrollingText.visible" : "scrollingText"
              }`}
              style={{
                transitionDuration: isVisible ? "1.2s" : "0s",
                transitionDelay: isVisible ? "1s" : "0s",
              }}
            >
              <TabsContent value="side-project" id="projets-personnels">
                <SideProject />
              </TabsContent>
              <TabsContent value="training" id="projets-formations">
                <TrainingProject />
              </TabsContent>
              <TabsContent value="professional" id="projets-professionnels">
                <ProfessionalProject />
              </TabsContent>
              <TabsContent value="other" id="projets-autres">
                <OtherProject />
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
      <div id="skills" className=" pt-16 md:pb-[4rem] px-6 mx-6 ">
        <Skills />
      </div>
      <div id="myservices" className="px-6 mx-6  pt-16 pb-10 md:pb-[10rem]">
        <MyServices />
      </div>
      <Footer />
    </div>
  );
}
