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

// import SERENITY
import ser_add_doc_2 from "./assets/serenity/ser_add_doc_2.png";
import ser_add_doc from "./assets/serenity/ser_add_doc.png";
import ser_add_doctor from "./assets/serenity/ser_add_doctor.png";
import ser_add_patient from "./assets/serenity/ser_add_patient.png";
import ser_all_pro from "./assets/serenity/ser_all_pro.png";
import ser_doc_patient from "./assets/serenity/ser_doc_patient.png";
import ser_home_2 from "./assets/serenity/ser_home_2.png";
import ser_home_doctor from "./assets/serenity/ser_home_doctor.png";
import ser_home_patient from "./assets/serenity/ser_home_patient.png";
import ser_home from "./assets/serenity/ser_home.png";
import ser_intervention from "./assets/serenity/ser_intervention.png";
import ser_list_doctor from "./assets/serenity/ser_list_doctor.png";
import ser_list_pro from "./assets/serenity/ser_list_pro.png";
import ser_pro from "./assets/serenity/ser_pro.png";
import ser_profil_patient_patient from "./assets/serenity/ser_profil_patient_patient.png";
import ser_profil_patient from "./assets/serenity/ser_profil_patient.png";
import ser_relax_patient from "./assets/serenity/ser_relax_patient.png";
import ser_todolist from "./assets/serenity/ser_todolist.png";
import ser_profil_doc from "./assets/serenity/ser_profil_doc.png";
import ser_change_password from "./assets/serenity/ser_change_pass.png";

// import R_Amazing
import ram_add from "./assets/r_amazing/r_am_add.png";
import ram_chat from "./assets/r_amazing/r_am_chat.png";
import ram_chat_1 from "./assets/r_amazing/r_am_chat_1.png";
import ram_chat_2 from "./assets/r_amazing/r_am_chat_2.png";
import ram_connect from "./assets/r_amazing/r_am_connect.png";
import ram_details from "./assets/r_amazing/r_am_details_mobile.png";
import ram_faq from "./assets/r_amazing/r_am_faq.png";
import ram_mobile from "./assets/r_amazing/r_am_mobile.png";
import ram_newUser from "./assets/r_amazing/r_am_new_user.png";
import ram_notValid from "./assets/r_amazing/r_am_not_valid.png";
import ram_valid from "./assets/r_amazing/r_am_valid.png";
import ram_search_marq from "./assets/r_amazing/r_am_search_marque.png";
import ram_search_model from "./assets/r_amazing/r_am_search_model.png";
import ram_search from "./assets/r_amazing/r_am_search.png";

// import Holitrip
import holi_contact from "./assets/holitrip/holitrip_contact.png";
import holi_home_2 from "./assets/holitrip/holitrip_home_2.png";
import holi_home from "./assets/holitrip/holitrip_home.png";
import holi_moonboard_2 from "./assets/holitrip/holitrip_moonboard_2.png";
import holi_moonboard from "./assets/holitrip/holitrip_moonboard.png";
import holi_radio from "./assets/holitrip/holitrip_radio.png";
import holi_responsive from "./assets/holitrip/holitrip_responsive.png";
import holi_roadtirp from "./assets/holitrip/holitrip_roadtrip.png";
import holi_roadtirp_2 from "./assets/holitrip/holitrip_roadtrip_2.png";
import holi_search_city_2 from "./assets/holitrip/holitrip_search_city_2.png";
import holi_search_city from "./assets/holitrip/holitrip_search_city.png";
import holi_search from "./assets/holitrip/holitrip_search.png";

const projects = [
  {
    id: 1,
    title: "TodoList",
    description:
      "Application web permettant de mieux anticiper les tâches prioritaires ou secondaires en fournissant un moyen simple de gérer les listes de tâches.",
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
          "Déplacement des tâches en fonction de leur avancement",
      },
      {
        step_description: "Possibilité de supprimer des tâches à tout moment",
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
    description:
      "Moteur de recherche musicale et radio en ligne. Le projet comprend une interface dynamique pour la recherche d'artistes, d'albums et de titres, ainsi qu'une liste de recommandations.",
    project_steps: [
      {
        step_description:
          "Collaboration sur la création et la conception d'une maquette pour une interface utilisateur web dynamique",
      },
      {
        step_description:
          "Intégration de deux API externes pour récupérer les métadonnées et obtenir des recommandations. ",
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
    website_url: null,
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
    title: "HoliTrip",
    description:
      "Plateforme proposant divers itinéraires de road trips avec la possibilité de rechercher des centres d'intérêt par ville (monuments, parcs, jardins, etc.). Le projet a été développé lors d'un hackathon.",
    time: "24 heures",
    soloTeam: "En groupe",
    project_steps: [
      {
        step_description:
          "Collaboration sur la création et la conception d'une maquette pour une interface utilisateur web dynamique",
      },
      {
        step_description:
          "Intégration de deux API externes pour récupérer les métadonnées",
      },
      {
        step_description: "Recherche par ville",
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
    picture_website: [
      {
        title: "Interface principale",
        image: holi_home,
      },
      {
        title: "Interface principale, suite",
        image: holi_home_2,
      },
      {
        title: "Itinéraires proposés pour une semaine, pour un pays ",
        image: holi_moonboard,
      },
      {
        title: "Itinéraires proposés pour une semaine, pour un pays, suite",
        image: holi_moonboard_2,
      },
      {
        title: "Visites proposées pour un itinéraire",
        image: holi_roadtirp,
      },
      {
        title: "Visites proposées pour un itinéraire, suite",
        image: holi_roadtirp_2,
      },
      {
        title: "Interface de recherche",
        image: holi_search,
      },
      {
        title:
          "Recherche des centres d'intérêt par ville (monuments, parcs, jardins...)",
        image: holi_search_city,
      },
      {
        title: "Détails d'un centre d'intérêt",
        image: holi_search_city_2,
      },
      {
        title: "Interface de recherche de radio",
        image: holi_radio,
      },
      {
        title: "Interface de contact",
        image: holi_contact,
      },
      {
        title: "Interface mobile et tablette",
        image: holi_responsive,
      },
    ],
  },
  {
    id: 4,
    title: "R-AMazing-Phone-Pricer, prototype pour Emmaüs Connect. ",
    description:
      "Outil de classification des smartphones selon différents critères. Le projet a été développé lors d'un hackathon",
    time: "48 heures",
    soloTeam: "En groupe (Finaliste)",
    project_steps: [
      {
        step_description:
          "Collaboration sur la création et la conception d'une maquette pour une interface utilisateur web dynamique",
      },
      {
        step_description: "Création et gestion des API avec Express.js",
      },
      {
        step_description:
          "Mise en place de la connexion à la base de données MySQL pour stocker de manière persistante les données relatives aux smartphones, aux utilisateurs et au Chat.",
      },
      {
        step_description:
          "Mise en place d'une logique serveur robuste pour garantir le bon fonctionnement des différentes fonctionnalités.",
      },
      {
        step_description:
          "Fonctionnalités : Connexion / inscription (utilisateur, administrateur). Gestion des utilisateurs, des smartphones, du Chat ...",
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
    picture_website: [
      {
        title: "Interface de connexion",
        image: ram_connect,
      },
      {
        title: "Interface d'enregistrement d'un nouvelle utilisateur",
        image: ram_newUser,
      },
      {
        title: "Interface de recherche de mobile",
        image: ram_search,
      },
      {
        title: "Interface de recherche de mobile par marque",
        image: ram_search_marq,
      },
      {
        title: "Interface de recherche de mobile par modèle",
        image: ram_search_model,
      },
      {
        title: "Détails d'un mobile",
        image: ram_details,
      },
      {
        title: "Mobile éligible à la reprise",
        image: ram_valid,
      },
      {
        title: "Mobile non éligible à la reprise",
        image: ram_notValid,
      },
      {
        title: "Ajout d'un mobile à la liste",
        image: ram_add,
      },
      {
        title: "Chat permettant de communiquer entre utilisateurs",
        image: ram_chat,
      },
      {
        title: "Chat ( utilisateur 'Martin')",
        image: ram_chat_1,
      },
      {
        title: "Chat (utilisateur 'Marion')",
        image: ram_chat_2,
      },
      {
        title: "FAQ concernant l'utilisation de l'application",
        image: ram_faq,
      },
      {
        title: "Interface mobile",
        image: ram_mobile,
      },
    ],
  },
  {
    id: 5,
    title: "SERENITY",
    description:
      "Application web accompagnant les patients dans leurs prises en charge à l’hôpital, avec un dashboard dédié aux praticiens. Les fonctionnalités incluent la gestion des utilisateurs, des interventions, des spécialités, ainsi que la possibilité d'ajouter des documents..",
    time: "2 mois",
    soloTeam: "En groupe",
    project_steps: [
      {
        step_description:
          "Collaboration sur la création et la conception d'une maquette pour une interface utilisateur web dynamique",
      },
      {
        step_description: "Création et gestion des API avec Express.js",
      },
      {
        step_description:
          "Mise en place de la connexion à la base de données MySQL pour stocker de manière persistante les données relatives aux patients, aux praticiens, aux interventions, à l'envoi d'un mail automatique à un nouvel utilisateur pour changer son mot de passe suite à la création de son compte...",
      },
      {
        step_description:
          "Mise en place d'une logique serveur robuste pour garantir le bon fonctionnement des différentes fonctionnalités.",
      },
      {
        step_description:
          "Fonctionnalités : Connexion / inscription (patient, praticien et administrateur). Gestion des utilisateurs, des interventions...",
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
    website_url: null,
    video_url: "https://www.youtube.com/embed/hkXG27X0awo?si=8rrnQmRJbKX54qI1",
    picture_website: [
      {
        title: "Interface principale",
        image: ser_home_2,
      },
      {
        title: "Interface de connexion",
        image: ser_home,
      },
      {
        title: "Interface principale : Praticien",
        image: ser_home_doctor,
      },
      {
        title:
          "Praticien : Liste de tous les praticiens excerçant au sein de la structure",
        image: ser_list_doctor,
      },
      {
        title: "Praticien : Profil d'un praticien",
        image: ser_profil_doc,
      },
      {
        title:
          "Praticien : Ajout d'un praticien (seul l'administrateur y est autorisé)",
        image: ser_add_doctor,
      },
      {
        title: "Praticien : Ajout d'un patient",
        image: ser_add_patient,
      },
      {
        title:
          "Interface pour changer son mot de passe (lien reçu automatiquement via boîte mail, suite à la création d'un utilisateur)",
        image: ser_change_password,
      },
      {
        title: "Praticien : Profil d'un patient",
        image: ser_profil_patient,
      },
      {
        title: "Praticien : Ajout d'une intervention",
        image: ser_intervention,
      },
      {
        title: "Praticien : Ajout d'un document à transmettre au patient",
        image: ser_add_doc,
      },
      {
        title:
          "Praticien : Ajout d'un document à transmettre au patient, suite",
        image: ser_add_doc_2,
      },
      {
        title: "  Praticien : Liste des professionnelles de santé",
        image: ser_pro,
      },
      {
        title: "Interface principale : Patient",
        image: ser_home_patient,
      },
      {
        title: "Patient : Documents envoyés par le praticien",
        image: ser_doc_patient,
      },
      {
        title: "Patient : Profil du patient",
        image: ser_profil_patient_patient,
      },
      {
        title: "Patient : Vidéo de relaxation",
        image: ser_relax_patient,
      },
      {
        title: "  Patient : Liste des professionnelles de santé",
        image: ser_list_pro,
      },
      {
        title: "Patient : Liste des professionnelles de santé, suite",
        image: ser_all_pro,
      },
      {
        title: "Patient : Checklist",
        image: ser_todolist,
      },
    ],
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
