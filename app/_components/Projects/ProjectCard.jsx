import {
  Card,
  // CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Link from "next/link";

export default function ProjectCard({ project }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
        <div className="flex gap-3">
          <Badge variant="secondary">{project.time}</Badge>
          <Badge variant="secondary">{project.soloTeam}</Badge>
        </div>
      </CardHeader>

      <CardFooter className="flex justify-end gap-5">
        {project.github_url ? (
          <Button asChild>
            <Link href={project.github_url} target="_blank">
              View GitHub <ExternalLink size="16" />
            </Link>
          </Button>
        ) : null}
        {project.website_url ? (
          <Button asChild>
            <Link href={project.website_url} target="_blank">
              View GitHub <ExternalLink size="16" />
            </Link>
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
}
