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
      <div className=" pb-28">
        <AboutMe />
      </div>
      <div
        className="text flex flex-col items-center justify-center pt-18 pt-6 pb-20"
        id="projects"
      >
        <div className="w-3/4 ">
          <div className="flex flex-col gap-3 mb-16 ">
            <h2 className="text-xl font-bold sm:text-3xl w-44 text-center  border-b-2 pb-2 border-purple">
              Mes projets
            </h2>
            <p>
              Plongez dans mon portfolio pour découvrir la diversité de mes
              expériences en développement web !
            </p>
          </div>
          <Tabs defaultValue="side-project">
            <TabsList
              aria-label="naviguez entre les onglets avec les flèches"
              className="grid grid-cols-4  mb-8 w-fit mx-auto gap-6"
            >
              <TabsTrigger
                value="side-project"
                aria-controls="projets-personnels"
                tabIndex="0"
              >
                Personnels
              </TabsTrigger>

              <TabsTrigger
                value="training"
                aria-controls="projets-formations"
                tabIndex="1"
              >
                Formations
              </TabsTrigger>
              <TabsTrigger
                value="professional"
                aria-controls="projets-professionnels"
                tabIndex="2"
              >
                Professionnels
              </TabsTrigger>
              <TabsTrigger
                value="other"
                aria-controls="projets-autres"
                tabIndex="3"
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
      <div className="mt-12 pb-36">
        <Skills />
      </div>
      <Footer />
    </div>
  );
}
