import professionalProjects from "@/app/_components/Projects/allProjects/ProfessionalProject";
import sideProjects from "@/app/_components/Projects/allProjects/SideProject";
import trainingProjects from "@/app/_components/Projects/allProjects/TrainingProject";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { createSlug } from "@/utils/slug";
import { ArrowLeftCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  // Récupérer tous les projets
  const allProjects = [
    ...sideProjects,
    ...trainingProjects,
    ...professionalProjects,
  ];

  // Trouver le projet correspondant au slug
  const project = allProjects.find((proj) => createSlug(proj.title) === slug);

  if (!project) {
    return <div>Projet introuvable.</div>;
  }

  return (
    <div className="font-poppins text-txt_black dark:text-white mt-32 mx-12 lg:mx-20 flex flex-col gap-8 pb-32">
      <Link href={"/portfolio"} className="w-8">
        <ArrowLeftCircleIcon size={28} color="#8300e9" />
      </Link>
      <div className="flex flex-col gap-8 md:gap-12 mx-4 md:mx-20">
        <div className="flex  items-end gap-1 h-16  ">
          <h1 className="text-black dark:text-white text-3xl pb-1 font-semibold md:text-[3rem] lg:text-[4rem] ">
            {project.title}
          </h1>
          <span className="mb-[0.62rem] md:mb-1 lg:mb-0  w-3 h-3 md:w-4 md:h-4 rounded-full bg-purple"></span>
        </div>
        <p className=" text-sm sm:text-base">{project.description}</p>
        <ul className=" flex flex-col gap-3 text-sm sm:text-base">
          {project.project_steps.map((step, index) => (
            <li key={`${index}-${step.step_description}`}>
              {step.step_description}
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap gap-2 md:gap-4 ">
          {project.technos.map((techno, index) => (
            <li
              key={`${index}-${techno.title}}`}
              className=" border-2 border-purple text-purple dark:text-white text-sm sm:text-base  px-4 py-1 rounded-3xl"
            >
              {techno.title}
            </li>
          ))}
        </ul>
        <div className="flex justify-center">
          <ScrollArea className="flex flex-col w-[18rem] h-[12rem]  md:px-3 sm:w-[25rem] sm:h-[18rem]  md:w-[50rem]  md:h-[25rem]  rounded-lg md:rounded-t-xl  shadow-sm shadow-purple/40  dark:bg-purple/10 sm:mb-5">
            <ul className=" h-[11rem] sm:h-[18rem]  md:h-[24rem] flex w-max m-1 md:pt-4 md:pl-4 gap-6  md:space-x-4   ">
              {project.picture_website
                ? project.picture_website.map((picture, index) => (
                    <li
                      key={`${index}-${picture.image}`}
                      className=" flex flex-col items-start justify-center"
                    >
                      <figure className="shrink-0 w-[17rem] sm:w-[24rem]  md:w-[35rem] ">
                        <div className=" flex justify-start rounded-md ">
                          <Image
                            src={picture.image}
                            alt={`Photo du projet - ${picture.image}`}
                            width={900}
                            height={400}
                            className="   border-2  bg-black/10 "
                          />
                        </div>
                        <figcaption className="pt-2  md:mb-0 text-[8px] md:text-xs flex flex-wrap w-[16rem] sm:w-[40rem]">
                          <span className="font-semibold">{picture.title}</span>
                        </figcaption>
                      </figure>
                    </li>
                  ))
                : null}
            </ul>{" "}
            <ScrollBar
              orientation="horizontal"
              className="  dark:bg-purple/30  bg-purple/80 border-none h-3"
            />{" "}
          </ScrollArea>
        </div>

        <div className="text-sm sm:text-base flex flex-col gap-2">
          {project.client ? (
            <p className="  font-medium">
              <span className=" font-semibold pr-2 "> Client : </span>
              {project.client}
            </p>
          ) : null}
          {project.website_url ? (
            <p>
              <span className=" font-semibold pr-2">Site : </span>
              <Link
                href={`https://${project.website_url}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {project.website_url}{" "}
              </Link>
            </p>
          ) : null}
          {project.date ? (
            <p>
              <span className=" font-semibold pr-2">Date : </span>
              {project.date}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
}
