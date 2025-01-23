import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { createSlug } from "@/utils/slug";
import { ChevronRight, CircleArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <>
      <Card className="font-poppins text-txt_black dark:text-white flex flex-col items-center sm:block  w-[36rem] border-none shadow-none ">
        <CardHeader>
          {project.picture_website ? (
            <div className=" mx-auto">
              <ScrollArea className="flex flex-col w-[18rem] h-[12rem]  md:px-3  sm:w-[31rem] sm:h-[8rem] md:h-[18rem]  rounded-lg md:rounded-t-xl  shadow-sm shadow-purple/40  dark:bg-purple/10 sm:mb-5">
                <ul className=" h-[11rem] sm:h-[17rem] md:h-[16.5rem] flex w-max m-1 md:pt-4 md:pl-4 gap-6  md:space-x-4   ">
                  {project.picture_website
                    ? project.picture_website.map((picture) => (
                        <li
                          key={picture.title}
                          className=" flex flex-col items-start justify-center"
                        >
                          <figure className="shrink-0 w-[27rem] ">
                            <div className=" flex justify-start rounded-md ">
                              <Image
                                src={picture.image}
                                alt={`Photo du projet - ${picture.image}`}
                                className="   "
                                width={900}
                                height={400}
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
              <div className=" flex justify-end w-full ">
                <div className="chevron-slide relative -top-28 -right-1 sm:-top-44  h-5 w-5">
                  <ChevronRight />
                </div>
              </div>
            </div>
          ) : null}{" "}
          <CardTitle className="flex items-center text-xl text-center sm:text-left lg:text-2xl text-purple font-semibold">
            <Link
              href={`/portfolio/${createSlug(project.title)}`}
              className="flex gap-3 items-center"
            >
              {project.title}
              <CircleArrowOutUpRight size={18} />
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent className=" max-w-screen-xl  text-[0.9rem]">
          {project.description}
        </CardContent>
      </Card>
    </>
  );
}
