import sideProjects from "../_components/Projects/allProjects/SideProject";
import trainingProjects from "../_components/Projects/allProjects/TrainingProject";
import ProjectCard from "../_components/Projects/ProjectCard";

export default function Portfolio() {
  const allProjects = [...sideProjects, ...trainingProjects];

  return (
    <div>
      <div className="sm:w-10/12 ">
        <div className="flex flex-col items-center sm:items-start gap-3 mb-6 md:mb-12 ">
          <div className=" flex items-end gap-1 h-16 ">
            <h2 className="font-poppins text-txt_black  text-2xl pb-1 font-semibold md:text-[4rem] ">
              Portfolio
            </h2>
            <span className=" w-4 h-4 rounded-full bg-purple"></span>
          </div>
          <p className="text-txt_black  pt-0 px-8 sm:px-0 md:pt-4 text-sm sm:text-lg ">
            Découvrez la diversité de mes expériences en développement web !
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
