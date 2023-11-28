import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <Card className=" dark:bg-purple/10 dark:shadow-purple/50 shadow-purple/40 shadow-md rounded-xl border-none mx-4 ">
      <CardHeader className=" mb-2 sm:mb-0">
        <CardTitle className="font-roboto text-xl text-center sm:text-left lg:text-2xl text-purple font-semibold">
          {project.title}
        </CardTitle>
        <CardDescription className="font-lato text-base">
          {project.description}
        </CardDescription>
        <div className="flex gap-3">
          <Badge variant="secondary" className=" text-xs sm:text-[9px]">
            {project.time}
          </Badge>
          {project.soloTeam ? (
            <Badge variant="secondary" className="text-xs sm:text-[9px]">
              {project.soloTeam}
            </Badge>
          ) : null}
        </div>
      </CardHeader>

      <CardContent className="flex flex-col-reverse  xl:flex-row md:justify-between">
        <div className="flex flex-col">
          <ul
            aria-label="liste des technologies utilisées"
            className="dark:bg-purple/20  py-2  px-3 rounded-xl w-fit flex items-start gap-3  "
          >
            {project.technos &&
              project.technos.map((techno) => (
                <li key={techno.title}>
                  <Image
                    key={techno.title}
                    width="24"
                    height="24"
                    src={techno.photo_url}
                    title={techno.title}
                    alt={techno.title}
                    className="w-5 sm:w-6"
                  />
                </li>
              ))}
          </ul>
          <ul
            aria-label="les étapes du projets"
            className=" text-sm md:text-sm pt-6 pl-4 list-disc "
          >
            {project.project_steps &&
              project.project_steps.map((step) => (
                <li key={step.step_description}>{step.step_description}</li>
              ))}
          </ul>
        </div>
        <div className="mb-6 ">
          {project.video_url ? (
            <Link href={project.video_url} className="flex justify-center">
              <iframe
                width="360"
                height="215"
                src={project.video_url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                className=" w-10/12 h-fit md:w-auto md:h-auto shadow-md shadow-[#3f2f5565] "
              ></iframe>
            </Link>
          ) : null}
        </div>

        {project.picture_website ? (
          <div className=" flex justify-center ">
            <Image
              width="420"
              height="375"
              src={project.picture_website}
              title={project.picture_website}
              alt={project.picture_website}
              className="  shadow-md shadow-[#3f2f5565]  xl:max-w-fit  "
            />
          </div>
        ) : null}
      </CardContent>

      <CardFooter className="flex justify-end gap-2">
        {project.website_url ? (
          <Button
            asChild
            className="dark:shadow-purple/80 dark:shadow-inner dark:bg-purple/30 bg-purple/80 rounded-xl text-xs sm:text-sm text-white  dark:hover:bg-pale_pink/20 hover:bg-[#baa8bbc0]  "
          >
            <Link href={project.website_url} target="_blank">
              View website <ExternalLink size="16" />
            </Link>
          </Button>
        ) : null}
        {project.github_url ? (
          <Button
            asChild
            className="dark:shadow-purple/80 dark:shadow-inner dark:bg-purple/30 bg-purple/80   rounded-xl text-xs sm:text-sm text-white  dark:hover:bg-pale_pink/20 hover:bg-[#baa8bbc0] "
          >
            <Link href={project.github_url} target="_blank">
              View GitHub <ExternalLink size="16" className="ml-2" />
            </Link>
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
}
