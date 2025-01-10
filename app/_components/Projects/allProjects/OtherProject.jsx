import ProjectCard from "./ProjectCard";

const projects = [];

export default function OtherProject() {
  return projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));
}
