import ProjectCard from "./ProjectCard";
import javascriptPng from "./assets/logos/javascript.png";
import gitPng from "./assets/logos/git.png";
import reactPng from "./assets/logos/react.png";
import tailwindPng from "./assets/logos/tailwind.png";
import nodePng from "./assets/logos/node.png";
import expressPng from "./assets/logos/express.png";
import mysqlPng from "./assets/logos/mysql.png";
import figmaPng from "./assets/logos/figma.png";
import nextPng from "./assets/logos/next.png";

const projects = [
  {
    id: 1,
    title: "Drawing And Co",
    time: "1 mois, en évolution",
    description:
      "Plateforme de gestion d'une galerie de dessins avec des fonctionnalités interactives pour les utilisateurs",
    soloTeam: null,
    technos: [
      {
        title: "javascript",
        photo_url: javascriptPng,
      },
      {
        title: "react",
        photo_url: reactPng,
      },
      {
        title: "node",
        photo_url: nodePng,
      },
      {
        title: "express",
        photo_url: expressPng,
      },
      {
        title: "mysql",
        photo_url: mysqlPng,
      },
      {
        title: "tailwindPng",
        photo_url: tailwindPng,
      },
      {
        title: "gitPng",
        photo_url: gitPng,
      },
      {
        title: "figmaPng",
        photo_url: figmaPng,
      },
    ],
    github_url: "https://github.com/MarionbDev/Drawing_And_Co",
    website_url: null,
  },
  {
    id: 2,
    title: "Marion Baston",
    description: "Mon portfolio",
    time: "3 semaines",
    soloTeam: null,
    technos: [
      {
        title: "javascript",
        photo_url: javascriptPng,
      },
      {
        title: "next",
        photo_url: nextPng,
      },
      {
        title: "tailwind",
        photo_url: tailwindPng,
      },
      {
        title: "git",
        photo_url: gitPng,
      },
    ],
    github_url: "https://github.com/MarionbDev/Portfolio",
    website_url: null,
  },
];

export default function SideProject() {
  return projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));
}
