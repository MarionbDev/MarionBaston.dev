import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    title: "To-Do-List",
    description:
      "Permettre de mieux anticiper les tâches prioritaires ou secondaires",
    time: "3 semaines",
    soloTeam: "En groupe",
    github_url: "https://github.com/MarionbDev/Projet-1_TodoList",
    website_url: null,
  },
  {
    id: 2,
    title: "UNIVERSE",
    description: "Moteur de recherche musicale et écoute de la radio",
    time: "1 mois",
    soloTeam: "En groupe",
    github_url: "https://github.com/MarionbDev/Pojet-2_UniVerse",
    website_url: "https://universe.laloupe-1.wilders.dev/",
  },
  {
    id: 3,
    title: "SERENITY",
    description:
      "Application web permettant d'accompagner les patients dans leur prise en charge à l'hôpital",
    time: "2 mois",
    soloTeam: "En groupe",
    github_url: "https://github.com/MarionbDev/Projet-3_Serenity",
    website_url: null,
  },
];

export default function FormationProject() {
  return projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));
}
