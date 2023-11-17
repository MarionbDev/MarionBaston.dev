"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "./_components/Navbar";
import AboutMe from "./_components/AboutMe";
import Skills from "./_components/Skills";
import Footer from "./_components/Footer";
import ProfessionalProject from "./_components/Projects/ProfessionalProject";
import SideProject from "./_components/Projects/SideProject";
import TrainingProject from "./_components/Projects/TrainingProject";
import OtherProject from "./_components/Projects/OtherProject";
import Image from "next/image";
import portfolio from "../app/_components/Projects/assets/portfolio_miniature.png";
import serenity from "../app/_components/Projects/assets/serenity_miniature.png";
import drawingandco from "../app/_components/Projects/assets/drawingandco_miniature.png";
import Link from "next/link";
import { useScroll } from "./_components/ScrollContext";

export default function Home() {
  const { isVisible } = useScroll();
  console.log("isVisible", isVisible);
  return (
    <div className=" mx-auto ">
      <Navbar />
      <div id="aboutme" className=" md:pb-24 ">
        <AboutMe />
      </div>
      <div
        id="projects"
        className="text flex flex-col items-center justify-center pt-16 md:pb-20"
      >
        <div className=" mx-5 md:w-3/4 ">
          <div className="flex flex-col gap-3 mb-6 md:mb-12 ">
            <h2
              className={`text-md font-bold md:text-3xl w-full text-start  border-b-2 sm:pb-2  border-[#3b0764]/50 ${
                isVisible ? "scrollingText.visible" : "scrollingText"
              }`}
              style={{ transitionDuration: isVisible ? "1s" : "0s" }}
            >
              Mes projets
            </h2>
            <p
              className={`pt-0 md:pt-4 text-sm sm:text-base ${
                isVisible ? "scrollingText.visible" : "scrollingText"
              }`}
              style={{
                transitionDuration: isVisible ? "1s" : "0s",
                transitionDelay: isVisible ? "1s" : "0s",
              }}
            >
              Plongez dans mon portfolio pour découvrir la diversité de mes
              expériences en développement web !
            </p>
          </div>
          <div className="mb-12 md:mb-28 flex items-center flex-col">
            <p
              className={`mb-2 md:mb-12 font-semibold text-base md:text-xl ${
                isVisible ? "scrollingText.visible" : "scrollingText"
              }`}
              style={{
                transitionDuration: isVisible ? "1s" : "0s",
                transitionDelay: isVisible ? "1.5s" : "0s",
              }}
            >
              Top 3 Projets Fullstacks
            </p>
            <ul
              className={`flex flex-col md:flex-row gap-4 justify-center ${
                isVisible ? "scrollingText.visible" : "scrollingText"
              }`}
              style={{
                transitionDuration: isVisible ? "1s" : "0s",
                transitionDelay: isVisible ? "2s" : "0s",
              }}
            >
              <li className="transition  hover:scale-150 hover:translate-x-100">
                <Link href="#top_perso">
                  <Image src={drawingandco} width={400} />
                </Link>
              </li>
              <li className="transition  hover:scale-150 ">
                <Link href="#top_perso">
                  <Image src={portfolio} width={400} />
                </Link>
              </li>
              <li className="transition  hover:scale-150 hover:translate-x-100">
                <Link href="#top_training">
                  <Image src={serenity} width={400} />
                </Link>
              </li>
            </ul>
          </div>
          <Tabs defaultValue="side-project">
            <TabsList
              aria-label="naviguez entre les onglets avec les flèches"
              className={` flex  mb-8 w-fit  mx-auto gap-2 text-[#0f0505]/70 ${
                isVisible ? "scrollingText.visible" : "scrollingText"
              }`}
              style={{
                transitionDuration: isVisible ? "1s" : "0s",
                transitionDelay: isVisible ? "2s" : "0s",
              }}
            >
              {SideProject && SideProject().length > 0 ? (
                <TabsTrigger
                  id="top_perso"
                  value="side-project"
                  aria-controls="projets-personnels"
                  className=" hover:bg-white hover:text-[#ffffff]  hover:font-bold hover:bg-purple  hover:rounded-full "
                >
                  Side-project
                </TabsTrigger>
              ) : null}
              {TrainingProject && TrainingProject().length > 0 ? (
                <TabsTrigger
                  id="top_training"
                  value="training"
                  aria-controls="projets-formations"
                  className=" hover:bg-white hover:text-[#ffffff]  hover:font-bold hover:bg-purple  hover:rounded-full "
                >
                  Formations
                </TabsTrigger>
              ) : null}
              {ProfessionalProject && ProfessionalProject().length > 0 ? (
                <TabsTrigger
                  value="professional"
                  aria-controls="projets-professionnels"
                  className=" hover:bg-white hover:text-[#ffffff]  hover:font-bold hover:bg-purple  hover:rounded-full"
                >
                  Professionnels
                </TabsTrigger>
              ) : null}
              {OtherProject && OtherProject().length > 0 ? (
                <TabsTrigger
                  value="other"
                  aria-controls="projets-autres"
                  className=" hover:bg-white hover:text-[#ffffff]  hover:font-bold hover:bg-purple  hover:rounded-full "
                >
                  Autres
                </TabsTrigger>
              ) : null}
            </TabsList>
            <div
              className={`md:w-3/4 mx-auto  ${
                isVisible ? "scrollingText.visible" : "scrollingText"
              }`}
              style={{
                transitionDuration: isVisible ? "1.2s" : "0s",
                transitionDelay: isVisible ? "3s" : "0s",
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
      <div id="skills" className=" pt-16 pb-[80rem]">
        <Skills />
      </div>
      <Footer />
    </div>
  );
}
