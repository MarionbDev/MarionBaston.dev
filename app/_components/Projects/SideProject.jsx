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
import picturePortfolio from "./assets/portfolio_miniature.png";
import pictureDrawingandco from "./assets/drawingandco_miniature.png";

const projects = [
  {
    id: 1,
    title: "Drawing And Co",
    time: "1 mois, évolutif",
    description:
      "Plateforme de gestion d'une galerie de dessins avec des fonctionnalités interactives pour les utilisateurs",
    soloTeam: null,
    project_steps: [
      {
        step_description: "Projet présenté au Titre Professionnel",
      },
      {
        step_description:
          "Conception et maquettage d’une interface utilisateur web dynamique, responsive",
      },
      {
        step_description: "Intégration du Back-end",
      },
      {
        step_description:
          "Paramètres : Connexion / inscription pour User et Admin, sécurisation des formulaires, gestion de la galerie, des utilisateurs et des commentaires (CRUD)",
      },
    ],
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
    picture_website: pictureDrawingandco,
  },
  {
    id: 2,
    title: "Marion Baston",
    description: "Mon portfolio",
    time: "3 semaines, évolutif",
    soloTeam: null,
    project_steps: [
      {
        step_description: "Mes premiers pas avec Next.js",
      },
      {
        step_description:
          "Conception et maquettage d’une interface utilisateur web dynamique, responsive",
      },
    ],
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
    website_url: "https://marionbaston.fr",
    picture_website: picturePortfolio,
  },
];

export default function SideProject() {
  return projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));
}
