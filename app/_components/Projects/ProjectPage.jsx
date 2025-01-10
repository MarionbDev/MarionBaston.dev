import sideProjects from "./allProjects/SideProject";
import trainingProjects from "./allProjects/TrainingProject";
import ProjectCard from "./ProjectCard";

export default function ProjectPage() {
  // Fusionner les projets
  const allProjects = [...sideProjects, ...trainingProjects];

  // Filtrer les projets par ID et type
  const selectedProjects = allProjects.filter(
    (project) =>
      (project.type === "side" && [1, 2].includes(project.id)) ||
      (project.type === "training" && [1, 2].includes(project.id))
  );

  return (
    <div>
      <div className=" ">
        <div className="flex flex-col items-center sm:items-start gap-3 mb-6 md:mb-12 ">
          <div className=" flex items-end gap-1 h-16 ">
            <h2 className="font-poppins text-2xl pb-1 font-semibold md:text-[4rem] ">
              Portfolio
            </h2>
            <span className=" w-4 h-4 rounded-full bg-purple"></span>
          </div>
          <p className="font-lato pt-0 px-8 sm:px-0 md:pt-4 text-sm sm:text-lg ">
            Découvrez la diversité de mes expériences en développement web !
          </p>
        </div>
        <div className="">
          <div className="flex flex-wrap gap-10 justify-center ">
            {selectedProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
