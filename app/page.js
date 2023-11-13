import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Navbar from "./_components/Navbar";
import AboutMe from "./_components/AboutMe";
import Skills from "./_components/Skills";
import Footer from "./_components/Footer";
import ProfessionalProject from "./_components/Projects/ProfessionalProject";
import SideProject from "./_components/Projects/SideProject";
import TrainingProject from "./_components/Projects/TrainingProject";
import OtherProject from "./_components/Projects/OtherProject";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div id="aboutme" className=" pt-14 pb-24">
        <AboutMe />
      </div>
      <div
        id="projects"
        className="text flex flex-col items-center justify-center pt-16 pb-72"
      >
        <div className="w-3/4 ">
          <div className="flex flex-col gap-3 mb-20 ">
            <h2 className="text-xl font-bold sm:text-3xl w-full text-start  border-b-2 pb-2  border-[#3b0764]/50">
              Mes projets
            </h2>
            <p className="pt-4">
              Plongez dans mon portfolio pour découvrir la diversité de mes
              expériences en développement web !
            </p>
          </div>

          <div classname=""></div>

          <Tabs defaultValue="side-project">
            <TabsList
              aria-label="naviguez entre les onglets avec les flèches"
              className="grid grid-cols-4  mb-8 w-2/4 mx-auto gap-2 text-[#0f0505]/70 "
            >
              <TabsTrigger
                value="side-project"
                aria-controls="projets-personnels"
                className=" hover:bg-white hover:text-[#ffffff]  hover:font-bold hover:bg-purple  hover:rounded-full "
              >
                Personnels
              </TabsTrigger>

              <TabsTrigger
                value="training"
                aria-controls="projets-formations"
                className=" hover:bg-white hover:text-[#ffffff]  hover:font-bold hover:bg-purple  hover:rounded-full "
              >
                Formations
              </TabsTrigger>
              <TabsTrigger
                value="professional"
                aria-controls="projets-professionnels"
                className=" hover:bg-white hover:text-[#ffffff]  hover:font-bold hover:bg-purple  hover:rounded-full"
              >
                Professionnels
              </TabsTrigger>
              <TabsTrigger
                value="other"
                aria-controls="projets-autres"
                className=" hover:bg-white hover:text-[#ffffff]  hover:font-bold hover:bg-purple  hover:rounded-full "
              >
                Autres
              </TabsTrigger>
            </TabsList>
            <div className="w-3/4 mx-auto">
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
