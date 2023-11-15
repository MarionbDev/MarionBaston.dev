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
    <Card className=" shadow-[#3b0764]/10 shadow-md">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
        <div className="flex gap-3">
          <Badge variant="secondary">{project.time}</Badge>
          {project.soloTeam ? (
            <Badge variant="secondary">{project.soloTeam}</Badge>
          ) : null}
        </div>
      </CardHeader>

      <CardContent className="flex  justify-between">
        <div className="flex flex-col">
          <ul
            aria-label="liste des technologies utilisées"
            className="flex items-start gap-3 "
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
                  />
                </li>
              ))}
          </ul>
          <ul
            aria-label="les étapes du projets"
            className=" text-sm pt-6 pl-4 list-disc "
          >
            {project.project_steps &&
              project.project_steps.map((step) => (
                <li key={step.step_description}>{step.step_description}</li>
              ))}
          </ul>
        </div>
        <div>
          {project.video_url ? (
            <Link href={project.video_url}>
              <iframe
                width="360"
                height="215"
                src={project.video_url}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </Link>
          ) : null}
        </div>

        {project.picture_website ? (
          <div className=" border-purple/10 border-2 ">
            <Image
              width="420"
              height="375"
              src={project.picture_website}
              title={project.picture_website}
              alt={project.picture_website}
              className=" max-w-fit "
            />
          </div>
        ) : null}
      </CardContent>

      <CardFooter className="flex justify-end gap-5">
        {project.website_url ? (
          <Button asChild>
            <Link href={project.website_url} target="_blank">
              View website <ExternalLink size="16" />
            </Link>
          </Button>
        ) : null}
        {project.github_url ? (
          <Button asChild>
            <Link href={project.github_url} target="_blank">
              View GitHub <ExternalLink size="16" />
            </Link>
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
}
