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
    title: "TodoList",
    description:
      "Application web permettant de mieux anticiper les tâches prioritaires ou secondaires",
    time: "3 semaines",
    soloTeam: "En groupe",
    project_steps: [
      {
        step_description: "Conception et maquettage de l'application web",
      },
      {
        step_description: "Creation d'un timer d'échéance personnalisé",
      },
      {
        step_description:
          "Déplacement d'une tâche en fonction de son avancement",
      },
      {
        step_description:
          "Suppression d'une/d'un ensemble de tâche à tout moment",
      },
    ],
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
    website_url: "https://marionbdev.github.io/Projet-1_TodoList/",
    video_url: "https://www.youtube.com/embed/Csi9pC6GqOk?si=FUWK4xFy9GHKDrQL",
  },
  {
    id: 2,
    title: "UNIVERSE",
    description: "Moteur de recherche musicale / Radio",
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
    video_url: "https://www.youtube.com/embed/yUwg8c1jHKY?si=gPwaA4SfyVVUoMoI",
  },
  {
    id: 3,
    title: "HoliTrip (hackathon)",
    description: "Plateforme proposant divers itinéraires de road trips",
    time: "24 heures",
    soloTeam: "En groupe",
    project_steps: [
      {
        step_description:
          "Conception et maquettage d’une interface utilisateur web dynamique",
      },
      {
        step_description: "Intégration de deux API externe",
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
    video_url: "https://www.youtube.com/embed/tDhZ-Yu5P7k?si=2LpzdN7ONtLxAOZK",
  },
  {
    id: 4,
    title: "R-AMazing-Phone-Pricer (hackathon)",
    description:
      "Outil de classification des smartphones selon différents critères",
    time: "48 heures",
    soloTeam: "En groupe (Finaliste)",
    project_steps: [
      {
        step_description:
          "Conception et maquettage d’une interface utilisateur web dynamique",
      },
      {
        step_description: "Intégration du Back-end",
      },
      {
        step_description:
          "Paramètres : Connexion / inscription pour User et Admin. Gestion des utilisateurs, des smartphones (CRUD), Chat ...",
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
    github_url:
      "https://github.com/MarionbDev/Hackathon-R-AMazing-Phone-Pricer-Ding-Dong-",
    website_url: null,
    video_url: "https://www.youtube.com/embed/H0U_xoGYP5c?si=v1nHy642Hr6nI7eo",
  },
  {
    id: 5,
    title: "SERENITY",
    description:
      "Application web accompagnant les patients dans leurs prises en charge à l’hôpital  / développement d’un dashbord “Praticien”",
    time: "2 mois",
    soloTeam: "En groupe",
    project_steps: [
      {
        step_description:
          "Conception d’une interface utilisateur web dynamique",
      },
      {
        step_description: "Intégration du Back-end",
      },
      {
        step_description:
          "Paramètres : Connexion / inscription pour Patient, Praticien et Admin. Gestion des utilisateurs, interventions, spécialités... (CRUD)",
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
