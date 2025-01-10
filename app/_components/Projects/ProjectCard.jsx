import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { ChevronRight, CircleArrowOutUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <>
      <Card className="font-poppins flex flex-col items-center sm:block  w-[36rem] border-none shadow-none ">
        <CardHeader>
          {project.picture_website ? (
            <div className=" mx-auto">
              <ScrollArea className="flex flex-col w-[18rem] h-[12rem]  md:px-3  sm:w-[31rem] sm:h-[8rem] md:h-[18rem]  rounded-lg md:rounded-t-xl border-purple/10 border-2   dark:bg-purple/10 sm:mb-5">
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
                            {/* <figcaption className="pt-2  md:mb-0 text-[8px] md:text-xs flex flex-wrap w-[16rem] sm:w-[40rem]">
                              <span className="font-semibold">
                                {picture.title}
                              </span>
                            </figcaption> */}
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
          <CardTitle className="flex items-center gap-4 text-xl text-center sm:text-left lg:text-2xl text-purple font-semibold">
            {project.title}
            <Link href={`/portfolio/${project.type}/${project.id}`}>
              <CircleArrowOutUpRight size={18} />
            </Link>
          </CardTitle>
          {/* <div className="flex gap-3">
            <Badge variant="secondary" className=" text-xs sm:text-[9px]">
              {project.time}
            </Badge>
            {project.soloTeam ? (
              <Badge variant="secondary" className="text-xs sm:text-[9px]">
                {project.soloTeam}
              </Badge>
            ) : null}
          </div> */}
        </CardHeader>
        <CardContent className="flex flex-col-reverse max-w-screen-xl  text-[1rem]">
          {/* <div className="flex flex-col items-center md:items-start">
            <ul
              aria-label="liste des technologies utilisées"
              className=" dark:bg-purple/20  py-2  px-3 rounded-xl w-fit flex items-start gap-3  "
            >
              {project.technos &&
                project.technos.map((techno) => (
                  <li
                    key={techno.title}
                    className="border-2 rounded-3xl py-1 px-3 text-xs sm:text-[9px]"
                  >
                    {techno.title}
                  </li>
                ))}
            </ul>
          </div>{" "} */}

          {project.description}
        </CardContent>
        {/* <CardFooter className="flex justify-center flex-wrap gap-3 sm:justify-end sm:gap-6 ">
          <DialogStepProject project={project} />
          <div className="flex justify-center flex-wrap  md:justify-end  gap-2">
            {project.video_url ? (
              <Button
                asChild
                role="button"
                className="dark:shadow-purple/80 dark:shadow-inner dark:bg-purple/30 bg-purple/80   rounded-xl text-xs sm:text-sm text-white  dark:hover:bg-pale_pink/20 hover:bg-[#baa8bbc0] "
              >
                <Link
                  href={project.video_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir video <ExternalLink size="16" className="ml-2" />
                </Link>
              </Button>
            ) : null}
            {project.website_url ? (
              <Button
                asChild
                role="button"
                className="dark:shadow-purple/80 dark:shadow-inner dark:bg-purple/30 bg-purple/80 rounded-xl text-xs sm:text-sm text-white  dark:hover:bg-pale_pink/20 hover:bg-[#baa8bbc0]  "
              >
                <Link
                  href={project.website_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir website <ExternalLink size="16" className="ml-2" />
                </Link>
              </Button>
            ) : null}
            {project.github_url ? (
              <Button
                asChild
                role="button"
                className="dark:shadow-purple/80 dark:shadow-inner dark:bg-purple/30 bg-purple/80   rounded-xl text-xs sm:text-sm text-white  dark:hover:bg-pale_pink/20 hover:bg-[#baa8bbc0] "
              >
                <Link
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Voir GitHub <ExternalLink size="16" className="ml-2" />
                </Link>
              </Button>
            ) : null}{" "}
          </div>
        </CardFooter> */}
      </Card>
    </>
  );
}
