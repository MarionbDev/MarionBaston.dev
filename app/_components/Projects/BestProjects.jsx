import { ArrowRight } from "lucide-react";
import Link from "next/link";
import professionalProjects from "./allProjects/ProfessionalProject";
import sideProjects from "./allProjects/SideProject";
import trainingProjects from "./allProjects/TrainingProject";
import ProjectCard from "./ProjectCard";

export default function BestProjects() {
  // Fusionner les projets
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
      (project.type === "training" && [5].includes(project.id))
  );

  // Trier les projets par date (du plus récent au plus ancien)
  const sortedProProjects = selectedProProjects.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const sortedProjects = selectedProjects.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <div className="tracking-wide ">
      <div className="flex flex-col items-center sm:items-start gap-3 mb-6 md:mb-12  ">
        <div className=" flex items-end gap-1 h-16  ">
          <h2 className="font-poppins text-2xl pb-1 font-semibold md:text-[3.5rem] ">
            Portfolio
          </h2>
          <span className=" w-4 h-4 rounded-full bg-purple "></span>
        </div>
        <div className="flex items-center pt-8">
          <p className="font-poppins pt-0 px-8 sm:px-0 text-sm sm:text-lg ">
            Découvrez la diversité de mes expériences en développement web !
          </p>
          <Link href={"/portfolio"} className="  text-purple ml-2 ">
            Voir plus
          </Link>
          <ArrowRight size={20} className=" text-purple -rotate-45 mb-1" />
        </div>
      </div>
      <div className=" px-10 ">
        <div className="flex flex-wrap gap-x-10 gap-y-14 ">
          {sortedProProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}{" "}
          {sortedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
