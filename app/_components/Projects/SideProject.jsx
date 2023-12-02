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
// import drawing_and_co
import auth_admin_admin from "./assets/drawing_and_co/auth_admin_admin.png";
import auth_admin_navbar from "./assets/drawing_and_co/auth_admin_navbar.png";
import auth_admin_drawing from "./assets/drawing_and_co/auth_admin_drawing.png";
import auth_gallery from "./assets/drawing_and_co/auth_gallery.png";
import auth_password_update from "./assets/drawing_and_co/auth_password_update.png";
import auth_profile_update from "./assets/drawing_and_co/auth_profile_update.png";
import auth_profile from "./assets/drawing_and_co/auth_profile.png";
import auth from "./assets/drawing_and_co/auth.png";
import faq from "./assets/drawing_and_co/faq.png";
import gallery from "./assets/drawing_and_co/gallery.png";
import navbar from "./assets/drawing_and_co/navbar.png";
import new_auth from "./assets/drawing_and_co/new_auth.png";
import auth_navbar from "./assets/drawing_and_co/auth_navbar.png";
import auth_drawing from "./assets/drawing_and_co/auth_drawing.png";
import mobile_1 from "./assets/drawing_and_co/responsive/mobile.png";
import tablette from "./assets/drawing_and_co/responsive/tablette.png";
import mobile_2 from "./assets/drawing_and_co/responsive/mobile_1.png";
//import portfolio
import portfolio from "./assets/portfolio_2.png";

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
    video_url: null,
    picture_website: [
      {
        title: "Interface public : Accueil",
        image: gallery,
      },
      {
        title: "Interface public : Barre de navigation",
        image: navbar,
      },
      {
        title: "Inscription utilisateur",
        image: new_auth,
      },
      {
        title: "Connexion utilisateur/administrateur",
        image: auth,
      },
      {
        title: "Interface  utilisateur : Menu de navigation",
        image: auth_navbar,
      },
      {
        title: "Interface utilisateur/administrateur : Accueil",
        image: auth_gallery,
      },
      {
        title:
          "Interface utilisateur : Ajouter/supprimer un commentaire pour un dessin ",
        image: auth_drawing,
      },
      {
        title: "Interface utilisateur/administrateur : Gestion du profil ",
        image: auth_profile,
      },
      {
        title: "Interface utilisateur/administrateur : Mise à jour du profil",
        image: auth_profile_update,
      },
      {
        title: "Interface utilisateur/administrateur : Gestion du mot de passe",
        image: auth_password_update,
      },
      {
        title: "Interface administrateur : Menu de navigation",
        image: auth_admin_navbar,
      },
      {
        title:
          "Interface administrateur : Gestion des utilisateurs et de la galerie",
        image: auth_admin_admin,
      },
      {
        title:
          "Interface administrateur : Gestion des commentaires d'un dessin ",
        image: auth_admin_drawing,
      },
      {
        title: "FAQ",
        image: faq,
      },
      {
        title: "Responsive mobile",
        image: mobile_1,
      },
      {
        title: "Responsive mobile",
        image: mobile_2,
      },
      {
        title: "Responsive tablette",
        image: tablette,
      },
    ],
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
    video_url: null,
    picture_website: [
      {
        title: null,
        image: portfolio,
      },
    ],
  },
];

export default function SideProject() {
  return projects.map((project) => (
    <ProjectCard key={project.id} project={project} />
  ));
}
