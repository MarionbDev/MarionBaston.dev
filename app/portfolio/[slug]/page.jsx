import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ArrowLeftCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { createSlug } from "@/utils/slug";

export default async function ProjectPage({ params }) {
  const { slug } = await params;

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/projects`);
  const allProjects = await res.json();

  const project = allProjects.find((p) => createSlug(p.title) === slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="font-poppins text-txt_black dark:text-white mt-32 mx-4 lg:mx-20 flex flex-col gap-8 pb-32">
      <Link href={"/portfolio"} className="w-8">
        <ArrowLeftCircleIcon size={36} color="#8300e9" />
      </Link>
      <div className="flex flex-col gap-8 md:gap-12 mx-4 md:mx-32">
        <div>
          <div className="flex  items-end gap-1 h-16 mb-6  ">
            <h1 className="text-txt_black dark:text-white text-3xl pb-1 font-semibold sm:text-[2rem] md:text-[2.3rem] lg:text-[3rem]  ">
              {project.title}
            </h1>
            <span className="title-point mb-[0.62rem] md:mb-[0.25rem]  w-3 h-3  md:w-4 md:h-4 rounded-full bg-purple "></span>
          </div>
          <h2 className="md:text-lg ">{project.description}</h2>
        </div>
        {project.picture_mockup?.length > 0 && (
          <ul className="flex justify-center items-center gap-8 my-8">
            <li>
              <Image
                src={project.picture_mockup?.[1].image.src}
                alt={project.picture_mockup?.[1].title}
                width={900}
                height={600}
                className="w-[28rem]"
              />{" "}
            </li>
            <li>
              <Image
                src={project.picture_mockup?.[0].image.src}
                alt={project.picture_mockup?.[0].title}
                width={900}
                height={600}
                className="w-[9rem]"
              />
            </li>
          </ul>
        )}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h3 className="text-lg">🚀 Context & Objectif</h3>
            <p className=" text-sm sm:text-base leading-7">
              {project.context}
            </p>{" "}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className=" text-lg">🔑 Fonctionnalités Clés </h3>
            <p className="text-sm sm:text-base">✅ Côté utilisateur :</p>

            <ul className=" flex flex-col  text-sm sm:text-base leading-7 list-disc ml-5">
              {project.project_steps?.[0]?.functionalities?.[0]?.user?.map(
                (item, index) => (
                  <li key={`${index}-${item.title}`}>{item.title}</li>
                )
              )}
            </ul>

            {project.project_steps?.[0]?.functionalities?.[0]?.admin?.length >
              0 && (
              <div className="flex flex-col gap-2">
                <p className="mt-4 text-sm sm:text-base ">
                  ✅ Côté administrateur :
                </p>
                <ul className=" flex flex-col gap-2 text-sm sm:text-base leading-7 list-disc ml-5">
                  {project.project_steps?.[0]?.functionalities?.[0]?.admin?.map(
                    (item, index) => (
                      <li key={`${index}-${item.title}`}>{item.title}</li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg">⚡Challenges & Solutions</h3>
            <ul className=" flex flex-col gap-3 text-sm sm:text-base leading-7">
              {project.project_steps?.[1]?.challenges?.map((item, index) => (
                <li key={`${index}-${item.title}`}>{item.title}</li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-lg">📈 Résultats & Impact</h3>
            <ul className=" flex flex-col gap-3 text-sm sm:text-base leading-7">
              {project.project_steps?.[2]?.result?.map((item, index) => (
                <li key={`${index}-${item.title}`}>{item.title}</li>
              ))}
            </ul>{" "}
          </div>
          <ul className="flex justify-center flex-wrap gap-2 md:gap-4 my-8">
            {project.technos.map((techno, index) => (
              <li
                key={`${index}-${techno.title}}`}
                className=" border-2 border-purple text-purple dark:text-white text-sm sm:text-base  px-4 py-1 rounded-3xl"
              >
                {techno.title.charAt(0).toUpperCase() +
                  techno.title.slice(1).toLowerCase()}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex justify-center">
          <ScrollArea className="flex flex-col w-[18rem] h-[12rem]  md:px-3 sm:w-[25rem] sm:h-[18rem]  md:w-[50rem]  md:h-[25rem]  rounded-lg md:rounded-t-xl  shadow-sm shadow-purple/40  dark:bg-purple/10 sm:mb-5">
            <ul className=" h-[11rem] sm:h-[18rem]  md:h-[24rem] flex w-max m-1 md:pt-4 md:pl-4 gap-6  md:space-x-4   ">
              {project.picture_website
                ? project.picture_website.map((picture, index) => (
                    <li
                      key={`${index}-${picture.image}`}
                      className=" flex flex-col items-start justify-center"
                    >
                      <figure className="shrink-0 w-[17rem] sm:w-[24rem]  md:w-[40rem] ">
                        <div className=" flex justify-start rounded-md ">
                          <Image
                            src={picture.image}
                            alt="photo du projet"
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
                className="hover:underline  text-[#5179ef]"
              >
                {project.website_url}
              </Link>
            </p>
          ) : null}
          <div className="flex  ">
            <p className="font-semibold mr-2 ">Liens : </p>
            {project.github_url ? (
              <p>
                <Link
                  href={`${project.github_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#5179ef] mr-4"
                >
                  GitHub
                </Link>
              </p>
            ) : null}
            {project.video_url ? (
              <p>
                <Link
                  href={`${project.video_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-[#5179ef]"
                >
                  YouTube
                </Link>
              </p>
            ) : null}{" "}
          </div>
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
