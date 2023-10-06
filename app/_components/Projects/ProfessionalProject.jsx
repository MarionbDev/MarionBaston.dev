import ProjectCard from "./ProjectCard";

const projects = [];

export default function ProfessionalProject() {
  return projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));
}
