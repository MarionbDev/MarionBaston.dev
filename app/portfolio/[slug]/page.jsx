import sideProjects from "@/app/_components/Projects/allProjects/SideProject";
import trainingProjects from "@/app/_components/Projects/allProjects/TrainingProject";
import { createSlug } from "@/utils/slug";

export async function generateStaticParams() {
  const allProjects = [...sideProjects, ...trainingProjects];

  return allProjects.map((project) => ({
    slug: createSlug(project.title),
  }));
}

export default function ProjectPage({ params }) {
  const { slug } = params;

  // Récupérer tous les projets
  const allProjects = [...sideProjects, ...trainingProjects];
  const project = allProjects.find((proj) => createSlug(proj.title) === slug);

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
