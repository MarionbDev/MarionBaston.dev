// /app/portfolio/[type]/[id]/page.jsx

import sideProjects from "@/app/_components/Projects/allProjects/SideProject";
import trainingProjects from "@/app/_components/Projects/allProjects/TrainingProject";

export default function ProjectPage({ params }) {
  const { type, id } = params;

  // Récupérer le projet en fonction du type et de l'id
  const allProjects = [...sideProjects, ...trainingProjects];
  const project = allProjects.find(
    (proj) => proj.type === type && proj.id === parseInt(id)
  );

  if (!project) {
    return <div>Projet introuvable.</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <ul>
        {project.project_steps.map((step, index) => (
          <li key={index}>{step.step_description}</li>
        ))}
      </ul>
    </div>
  );
}
