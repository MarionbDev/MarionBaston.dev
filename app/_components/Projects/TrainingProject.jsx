import ProjectCard from "./ProjectCard";
import javascriptPng from "./assets/logos/javascript.png";
import cssPng from "./assets/logos/css.png";
import htmlPng from "./assets/logos/html.png";
import gitPng from "./assets/logos/git.png";
import reactPng from "./assets/logos/react.png";
import tailwindPng from "./assets/logos/tailwind.png";
import scrumPng from "./assets/logos/agileScrum.png";
import nodePng from "./assets/logos/node.png";
import expressPng from "./assets/logos/express.png";
import mysqlPng from "./assets/logos/mysql.png";
import figmaPng from "./assets/logos/figma.png";

const projects = [
  {
    id: 1,
    title: "To-Do-List",
    description:
      "Application web permettant de mieux anticiper les tâches prioritaires ou secondaires",
    time: "3 semaines",
    soloTeam: "En groupe",
    technos: [
      {
        title: "javascript",
        photo_url: javascriptPng,
      },
      {
        title: "css",
        photo_url: cssPng,
      },
      {
        title: "htmlPng",
        photo_url: htmlPng,
      },
      {
        title: "gitPng",
        photo_url: gitPng,
      },
    ],
    github_url: "https://github.com/MarionbDev/Projet-1_TodoList",
    website_url: null,
  },
  {
    id: 2,
    title: "UNIVERSE",
    description: "Moteur de recherche musicale et écoute de la radio",
    project_steps: [
      {
        step_description:
          "Conception et maquettage d’une interface utilisateur web dynamique",
      },
      {
        step_description: "Intégration de deux API externe",
      },
    ],
    time: "1 mois",
    soloTeam: "En groupe",
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
        title: "tailwindPng",
        photo_url: tailwindPng,
      },
      {
        title: "gitPng",
        photo_url: gitPng,
      },
      {
        title: "scrumPng",
        photo_url: scrumPng,
      },
      {
        title: "figmaPng",
        photo_url: figmaPng,
      },
    ],
    github_url: "https://github.com/MarionbDev/Pojet-2_UniVerse",
    website_url: "https://universe.laloupe-1.wilders.dev/",
    video_url: "https://www.youtube.com/embed/ejvyu_qcY-I?si=uLxe2-_7YtkAX961",
  },
  {
    id: 3,
    title: "HoliTrip (hackathon)",
    description:
      "Application web proposant divers itinéraires pour des road trips",
    time: "24 heures",
    soloTeam: "En groupe",
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
        title: "tailwindPng",
        photo_url: tailwindPng,
      },
      {
        title: "gitPng",
        photo_url: gitPng,
      },
    ],
    github_url: "https://github.com/MarionbDev/Hackathon-HoliTrip",
    website_url: null,
  },
  {
    id: 4,
    title: "R-AMazing-Phone-Pricer (hackathon)",
    description:
      "Outil de classification des smartphones selon différents critères",
    time: "48 heures",
    soloTeam: "En groupe (Finaliste)",
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
    github_url:
      "https://github.com/MarionbDev/Hackathon-R-AMazing-Phone-Pricer-Ding-Dong-",
    website_url: null,
  },
  {
    id: 5,
    title: "SERENITY",
    description:
      "Application web accompagnant les patients dans leurs prises en charge à l’hôpital  / développement d’un dashbord “Praticien”",
    time: "2 mois",
    soloTeam: "En groupe",
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
        title: "scrumPng",
        photo_url: scrumPng,
      },
    ],
    github_url: "https://github.com/MarionbDev/Projet-3_Serenity",
    website_url: null,
  },
];

function compareProjectsById(a, b) {
  const idA = parseInt(a.id);
  const idB = parseInt(b.id);

  if (idA < idB) {
    return 1;
  }
  if (idA > idB) {
    return -1;
  }
  return 0;
}

export default function TrainingProject() {
  const sortedProjects = projects.slice().sort(compareProjectsById);

  return sortedProjects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));
}
