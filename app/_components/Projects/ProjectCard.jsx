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
    <Card>
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

      <CardContent>
        <div className="flex gap-3">
          {project.technos &&
            project.technos.map((techno) => (
              <Image
                key={techno.title}
                width="24"
                height="24"
                src={techno.photo_url}
                title={techno.title}
                alt={techno.title}
              />
            ))}
        </div>
      </CardContent>

      <CardFooter className="flex justify-end gap-5">
        {project.website_url ? (
          <Button asChild className=" bg-[#9e689a] hover:bg-[#b370ae]/60">
            <Link href={project.website_url} target="_blank">
              View website <ExternalLink size="16" />
            </Link>
          </Button>
        ) : null}
        {project.github_url ? (
          <Button asChild className=" bg-[#9e689a] hover:bg-[#b370ae]/60">
            <Link href={project.github_url} target="_blank">
              View GitHub <ExternalLink size="16" />
            </Link>
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
}
