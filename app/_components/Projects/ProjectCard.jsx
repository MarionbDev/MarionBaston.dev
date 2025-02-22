import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { createSlug } from "@/utils/slug";
import { ChevronLeft, ChevronRight, CircleArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <>
      <Card className="font-poppins text-txt_black dark:text-white flex flex-col items-center sm:block  max-w-[36rem] border-none shadow-none ">
        <CardHeader>
          {project.picture_website ? (
            <div className=" mx-auto flex items-center">
              <ChevronLeft
                color="#c6ccd5"
                className="md:hidden dark:opacity-50  "
              />
              <ScrollArea className="bg-gradient-card flex flex-col justify-center w-[18rem] h-[11rem]  md:px-3  md:w-[31rem] md:h-[18rem]  rounded-lg md:rounded-t-xl dark:bg-purple/40  sm:mb-5">
                <ul className=" h-[10rem]  md:h-[16.5rem] flex w-max m-1 pl-1 md:pl-0 gap-6  md:space-x-4   ">
                  {project.picture_website
                    ? project.picture_website.map((picture, index) => (
                        <li
                          key={`${index}-${picture.title}`}
                          className=" flex flex-col items-start justify-center "
                        >
                          <figure className="shrink-0 w-[17rem] md:w-[29rem] ">
                            <div className=" flex justify-start rounded-md ">
                              <Image
                                src={picture.image}
                                alt={`Photo du projet - ${picture.image}`}
                                width={900}
                                height={400}
                                className="border-2 border-black/10"
                              />
                            </div>
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
              <ChevronRight
                color="#c6ccd5"
                className="md:hidden dark:opacity-50"
              />
            </div>
          ) : null}{" "}
          <CardTitle className="flex items-center text-xl text-center sm:text-left lg:text-2xl text-purple md:dark:text-purple_dark font-semibold pt-3 mx-4 md:mx-0 ">
            <Link
              href={`/portfolio/${createSlug(project.title)}`}
              className="name-gradient flex gap-2 items-center "
            >
              {project.title}
              <CircleArrowOutUpRight
                size={18}
                color="#8300e9 "
                className="mb-2"
              />
            </Link>
          </CardTitle>
          <p className="mx-4 md:mx-0 text-[16px]">{project.description}</p>
          <p className="mx-4 md:mx-0  max-w-screen-xl leading-7 text-[16px] ">
            {project.context}
          </p>
        </CardHeader>
      </Card>
    </>
  );
}
