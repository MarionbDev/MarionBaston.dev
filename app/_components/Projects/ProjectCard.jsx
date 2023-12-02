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
import * as React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useState, useEffect } from "react";

const isMobileScreen = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth <= 768;
  }
  return false; // Gérer le cas où window n'est pas défini (par exemple, lors du rendu côté serveur)
};

export default function ProjectCard({ project }) {
  const [isMobile, setIsMobile] = useState(isMobileScreen());

  // Mettez à jour isMobile lorsqu'il y a un changement de taille d'écran
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(isMobileScreen());
    };

    // Ajoutez un écouteur d'événements pour la gestion du redimensionnement
    window.addEventListener("resize", handleResize);

    // Nettoyez l'écouteur d'événements lors du démontage du composant
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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

      <CardContent className="flex flex-col-reverse  max-w-screen-xl md:justify-between">
        <div className="flex flex-col items-center md:items-start">
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
        {project.picture_website ? (
          <ScrollArea className="w-[17rem] h-72  md:w-full md:h-full md:whitespace-nowrap rounded-lg md:rounded-t-xl border-purple/10 border-2 py-2 md:px-2 dark:bg-purple/10 mb-6">
            <ul className="flex flex-col md:flex-row md:w-max p-2 md:space-x-4 md:p-4 gap-2 md:gap-0 ">
              {project.picture_website
                ? project.picture_website.map((picture) => (
                    <li
                      key={picture.title}
                      className=" flex flex-col justify-center  items-center md:items-start border-2 p-2"
                    >
                      <figure className="shrink-0 ">
                        <div className=" flex justify-center   rounded-md ">
                          <Image
                            src={picture.image}
                            alt={picture.image}
                            className=" md:w-full   "
                            width={500}
                            height={600}
                          />
                        </div>
                        <figcaption className="pt-2 mb-4 md:mb-0 text-[8px] md:text-xs text-muted-foreground">
                          <span className="font-semibold text-foreground">
                            {picture.title}
                          </span>
                        </figcaption>
                      </figure>
                    </li>
                  ))
                : null}
            </ul>
            <ScrollBar
              orientation={isMobile ? "vertical" : "horizontal"}
              className="  dark:bg-purple/30  bg-purple/80 border-none h-3"
            />
          </ScrollArea>
        ) : null}
      </CardContent>

      <CardFooter className="flex justify-center md:justify-end gap-2">
        {project.video_url ? (
          <Button
            asChild
            className="dark:shadow-purple/80 dark:shadow-inner dark:bg-purple/30 bg-purple/80   rounded-xl text-xs sm:text-sm text-white  dark:hover:bg-pale_pink/20 hover:bg-[#baa8bbc0] "
          >
            <Link href={project.video_url} target="_blank">
              View video <ExternalLink size="16" className="ml-2" />
            </Link>
          </Button>
        ) : null}
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
