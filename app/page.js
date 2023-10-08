import Navbar from "./_components/Navbar";
import AboutMe from "./_components/AboutMe";
import Skills from "./_components/Skills";
import Footer from "./_components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProfessionalProject from "./_components/Projects/ProfessionalProject";
import SideProject from "./_components/Projects/SideProject";
import TrainingProject from "./_components/Projects/TrainingProject";
// import WhoIsMarion from "./_components/WhoIsMarion";
// import Contact from "./_components/Contact";

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
            <TabsList className="grid grid-cols-4  mb-8 w-fit mx-auto gap-6">
              <TabsTrigger value="side-project">Side Project</TabsTrigger>
              <TabsTrigger value="training">Training</TabsTrigger>
              <TabsTrigger value="professional">Professional</TabsTrigger>
              <TabsTrigger value="other">Other</TabsTrigger>
            </TabsList>
            <div className="w-3/4 mx-auto">
              <TabsContent value="side-project">
                <SideProject />
              </TabsContent>
              <TabsContent value="training">
                <TrainingProject />
              </TabsContent>
              <TabsContent value="professional">
                <ProfessionalProject />
              </TabsContent>
              <TabsContent value="other"></TabsContent>
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
