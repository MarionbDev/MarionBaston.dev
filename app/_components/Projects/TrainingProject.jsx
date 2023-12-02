import ProjectCard from "./ProjectCard";
import javascriptPng from "./assets/logos/javascript.png";
import cssPng from "./assets/logos/css.png";
import htmlPng from "./assets/logos/html.png";
import gitPng from "./assets/logos/git.png";
import reactPng from "./assets/logos/react.png";
import tailwindPng from "./assets/logos/tailwind.png";
import nodePng from "./assets/logos/node.png";
import expressPng from "./assets/logos/express.png";
import mysqlPng from "./assets/logos/mysql.png";
import figmaPng from "./assets/logos/figma.png";

//import TodoList
import pc_form from "./assets/todoList/pc_form.png";
import pc_home_todo from "./assets/todoList/pc_home.png";
import pc_tasks from "./assets/todoList/pc_tasks.png";
import responsive_home from "./assets/todoList/responsive_home.png";

// import UNIVERSE
import pc_artist_album from "./assets/universe/pc_artist_album.png";
import pc_home_2 from "./assets/universe/pc_home_2.png";
import pc_home_light from "./assets/universe/pc_home_light.png";
import pc_home from "./assets/universe/pc_home.png";
import pc_radio from "./assets/universe/pc_radio.png";
import pc_recommandation from "./assets/universe/pc_recommandation.png";
import pc_search_album from "./assets/universe/pc_search_album.png";
import pc_search_artist from "./assets/universe/pc_search_artist.png";
import pc_search_title from "./assets/universe/pc_search_titre.png";
import pc_search from "./assets/universe/pc_search.png";
import pc_title from "./assets/universe/pc_titre.png";
import mobile_universe from "./assets/universe/mobile.png";

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
    picture_website: [
      {
        title: "Interface principale",
        image: pc_home_todo,
      },
      {
        title: "Formulaire d'enregistrement des tâches",
        image: pc_form,
      },
      {
        title: "Interface avec toutes les tâches enregistrées",
        image: pc_tasks,
      },
      {
        title: "Interface mobile et tablette",
        image: responsive_home,
      },
    ],
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
      {
        step_description: "Recherche par artiste / titre / album",
      },
      {
        step_description:
          "Liste de recommandations par artiste / album / titre ",
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
        title: "figmaPng",
        photo_url: figmaPng,
      },
    ],
    github_url: "https://github.com/MarionbDev/Pojet-2_UniVerse",
    website_url: "https://universe.laloupe-1.wilders.dev/",
    video_url: "https://www.youtube.com/embed/yUwg8c1jHKY?si=gPwaA4SfyVVUoMoI",
    picture_website: [
      {
        title: "Interface principale",
        image: pc_home,
      },
      {
        title: "Interface principale, suite",
        image: pc_home_2,
      },
      {
        title: "Interface principale 'Light Mode' ",
        image: pc_home_light,
      },
      {
        title: "Interface de recherche",
        image: pc_search,
      },
      {
        title: "Recherche par artiste",
        image: pc_search_artist,
      },
      {
        title: "Recherche par album",
        image: pc_search_album,
      },
      {
        title: "Recherche par titre",
        image: pc_search_title,
      },
      {
        title: "Interface d'un artiste",
        image: pc_artist_album,
      },
      {
        title: "Interface d'un artiste, suite",
        image: pc_recommandation,
      },
      {
        title: "Interface d'un titre pour un artiste",
        image: pc_title,
      },
      {
        title: "Interface de recherche de radio",
        image: pc_radio,
      },
      {
        title: "Interface mobile",
        image: mobile_universe,
      },
    ],
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
    ],
    github_url: "https://github.com/MarionbDev/Projet-3_Serenity",
    website_url: "https://serenity.laloupe-1.wilders.dev/",
    video_url: "https://www.youtube.com/embed/hkXG27X0awo?si=8rrnQmRJbKX54qI1",
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
