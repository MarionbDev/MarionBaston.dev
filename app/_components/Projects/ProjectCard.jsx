import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { createSlug } from "@/utils/slug";
import { ChevronLeft, ChevronRight, CircleArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <>
      <Card className=" bg-gradient-card shadow-sm shadow-purple font-poppins text-txt_black dark:text-white flex flex-col items-center max-w-[25rem] border-none   ">
        <CardHeader className="p-3">
          {project.picture_website ? (
            <div className=" mx-auto flex items-center">
              <ChevronLeft
                color="#c6ccd5"
                className="md:hidden dark:opacity-50  "
              />
              <ScrollArea className="  dark:bg-none flex flex-col justify-center w-[18rem] h-[11rem] px-1  md:w-[22.5rem] md:h-[14rem]  rounded-lg md:rounded-t-xl    sm:mb-5">
                <ul className=" h-[10rem]  md:h-[12.6rem] flex w-max my-1 pl-1 md:pl-0 gap-6  md:space-x-4   ">
                  {project.picture_website
                    ? project.picture_website.map((picture, index) => (
                        <li
                          key={`${index}-${picture.title}`}
                          className=" flex flex-col items-start justify-center "
                        >
                          <figure className="shrink-0 w-[17rem] md:w-[22rem] ">
                            <div className=" flex justify-start rounded-md ">
                              <Image
                                src={picture.image}
                                alt={`Photo du projet - ${picture.image}`}
                                width={900}
                                height={400}
                                className=" border-2 border-black/10"
                              />
                            </div>
                          </figure>
                        </li>
                      ))
                    : null}
                </ul>{" "}
                <ScrollBar
                  orientation="horizontal"
                  className="   bg-[#ffe355] border-none h-2"
                />{" "}
              </ScrollArea>
              <ChevronRight
                color="#c6ccd5"
                className="md:hidden dark:opacity-50"
              />
            </div>
          ) : null}{" "}
          <CardTitle className="flex items-center text-xl text-center sm:text-left lg:text-2xl text-purple md:dark:text-purple_dark font-semibold pt-3 mx-4 md:mx-0 ">
            <Link
              href={`/portfolio/${createSlug(project.title)}`}
              className="dark:name-gradient flex gap-2 items-center "
            >
              {project.title}
              <CircleArrowOutUpRight
                size={19}
                className=" text-purple dark:text-free_yellow"
              />
            </Link>
          </CardTitle>
          <p className="mx-4 md:mx-0 text-[16px]">{project.project_type}</p>
          <p className="mx-4 md:mx-0 text-[16px]">{project.description}</p>
          <p className="mx-4 md:mx-0  max-w-screen-xl leading-7 text-[16px] text-pretty line-clamp-3 ">
            {project.context}
          </p>
        </CardHeader>
      </Card>
    </>
  );
}
