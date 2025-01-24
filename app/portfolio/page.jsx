import { ArrowRight } from "lucide-react";
import Link from "next/link";
import professionalProjects from "../_components/Projects/allProjects/ProfessionalProject";
import sideProjects from "../_components/Projects/allProjects/SideProject";
import trainingProjects from "../_components/Projects/allProjects/TrainingProject";
import ProjectCard from "../_components/Projects/ProjectCard";

export default function Portfolio() {
  const allProjects = [
    ...sideProjects,
    ...trainingProjects,
    ...professionalProjects,
  ];

  // Filtrer les projets par ID et type
  const selectedProProjects = allProjects.filter(
    (project) => project.type === "pro" && [1].includes(project.id)
  );

  const selectedProjects = allProjects.filter(
    (project) =>
      (project.type === "side" && [1].includes(project.id)) ||
      (project.type === "training" && [2, 3, 4, 5].includes(project.id))
  );

  // Trier les projets par date (du plus récent au plus ancien)
  const sortedProProjects = selectedProProjects.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const sortedProjects = selectedProjects.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="sm:w-10/12  mt-24 px-6 md:mx-20 lg:mx-32 ">
      <div className="text-txt_black dark:text-white flex flex-col  sm:items-start gap-3 mb-6 md:mb-12">
        <div className=" flex items-end gap-1 h-16 ">
          <h2 className="font-poppins text-3xl pb-1 font-semibold md:text-[4rem] ">
            Portfolio
          </h2>
          <span className="mb-[0.72rem] md:mb-0 w-3 h-3 md:h-4 md:w-4  rounded-full bg-purple "></span>
        </div>
        <div>
          <p className=" pt-0 sm:px-0 md:pt-4 text-sm sm:text-lg ">
            Découvrez une sélection de mes projets réalisés en tant que
            freelance et au cours de ma formation, où j'ai conçu et développé
            des applications robustes et élégantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-1 text-sm sm:text-lg">
            <p className="flex  gap-1 ">
              Pour découvrir davantage de projets, visitez mon
            </p>
            <Link
              href={"https://github.com/MarionbDev"}
              target="_blank"
              className="flex text-purple font-semibold"
            >
              GitHub
              <ArrowRight size={20} className=" -rotate-45 text-purple " />
            </Link>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 ">
          {sortedProProjects.map((project, index) => (
            <ProjectCard key={`${index}-${project.id}`} project={project} />
          ))}
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {sortedProjects.map((project, index) => (
            <ProjectCard key={` ${index}-${project.id}`} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
