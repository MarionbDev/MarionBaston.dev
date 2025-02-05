import expressPng from "@/public/assets/logos/express.png";
import figmaPng from "@/public/assets/logos/figma.png";
import gitPng from "@/public/assets/logos/git.png";
import javascriptPng from "@/public/assets/logos/javascript.png";
import mysqlPng from "@/public/assets/logos/mysql.png";
import nextPng from "@/public/assets/logos/next.png";
import nodePng from "@/public/assets/logos/node.png";
import reactPng from "@/public/assets/logos/react.png";
import tailwindPng from "@/public/assets/logos/tailwind.png";
// import drawing_and_co
import auth from "@/public/assets/drawing_and_co/auth.png";
import auth_admin_admin from "@/public/assets/drawing_and_co/auth_admin_admin.png";
import auth_admin_drawing from "@/public/assets/drawing_and_co/auth_admin_drawing.png";
import auth_admin_navbar from "@/public/assets/drawing_and_co/auth_admin_navbar.png";
import auth_drawing from "@/public/assets/drawing_and_co/auth_drawing.png";
import auth_gallery from "@/public/assets/drawing_and_co/auth_gallery.png";
import auth_navbar from "@/public/assets/drawing_and_co/auth_navbar.png";
import auth_password_update from "@/public/assets/drawing_and_co/auth_password_update.png";
import auth_profile from "@/public/assets/drawing_and_co/auth_profile.png";
import auth_profile_update from "@/public/assets/drawing_and_co/auth_profile_update.png";
import faq from "@/public/assets/drawing_and_co/faq.png";
import gallery from "@/public/assets/drawing_and_co/gallery.png";
import navbar from "@/public/assets/drawing_and_co/navbar.png";
import new_auth from "@/public/assets/drawing_and_co/new_auth.png";
import mobile_1 from "@/public/assets/drawing_and_co/responsive/mobile.png";
import mobile_2 from "@/public/assets/drawing_and_co/responsive/mobile_1.png";
import tablette from "@/public/assets/drawing_and_co/responsive/tablette.png";
//import portfolio
import portfolioEmail from "@/public/assets/portfolio_email.png";
import portfolioLogin from "@/public/assets/portfolio_login.png";
import portfolio from "@/public/assets/portfolio_marion.png";
import portfolioPassword from "@/public/assets/portfolio_password.png";
import portfolioProfile from "@/public/assets/portfolio_profile.png";

const sideProjects = [
  {
    id: 1,
    type: "side",
    date: "2023-06",
    title: "Drawing And Co",
    time: "1 mois, évolutif",
    description:
      "Je suis passionnée de dessins au crayon graphite, j'ai décidé de créer mon site. Il s'agit d'une plateforme de gestion d'une galerie de dessins avec des fonctionnalités interactives pour les utilisateurs",
    soloTeam: null,
    project_steps: [
      {
        step_description:
          "Projet présenté au Titre Professionnel Développeur web et web mobile (RNCP, niveau 5) ",
      },
      {
        step_description:
          "Création et conception d'une maquette pour une interface utilisateur web dynamique et responsive",
      },
      {
        step_description:
          "Mise en place de la connexion à la base de données MySQL pour stocker de manière persistante les données relatives aux utilisateurs, aux dessins, aux commentaires...",
      },
      {
        step_description:
          "Mise en place d'une logique serveur robuste pour garantir le bon fonctionnement des différentes fonctionnalités telles que la gestion des utilisateurs, la gestion de la galerie de dessins, et la gestion des commentaires avec les opérations CRUD (Create, Read, Update, Delete). Les utilisateurs, qu'ils soient simples utilisateurs ou administrateurs, peuvent se connecter ou s'inscrire. Les formulaires sont sécurisés pour assurer la protection des données.",
      },
      {
        step_description:
          "Fonctionnalités : Connexion / inscription d'un utilisateur, naviguer à travers la galerie de dessins, les utilisateurs peuvent ajouter ou supprimer des commentaires sur les dessins. L'administrateur à des fonctions supplémentaires : la gestion des utilisateurs et de la galerie. Un système de FAQ est intégré pour fournir des informations utiles aux utilisateurs. L'application est conçue pour être responsive.",
      },
      {
        step_description: "A venir : la mise en production du site",
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
    type: "side",
    date: "2023-10-01",
    title: "Marion Baston",
    description: "",
    time: "3 semaines, évolutif",
    soloTeam: null,
    client: "projet perso ",
    project_steps: [
      {
        step_description: "Mes premiers pas avec Next.js",
      },
      {
        step_description:
          "Conception et maquettage d’une interface utilisateur web dynamique, responsive",
      },
      {
        step_description: "Création d'une interface d'administration",
      },
      {
        step_description:
          "Intégration de Supabase pour développer l'interface d'administration avec connexion utilisateur ",
      },
      {
        step_description:
          "Fonctionnalités : Connexion, gestion du mot de passe (modification du mot de passe et modification des informations de l'utilisateur)",
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
    website_url: null,
    video_url: null,
    picture_website: [
      {
        title: null,
        image: portfolio,
      },
      {
        title: "Interface de connexion administrateur",
        image: portfolioLogin,
      },
      {
        title: "Profil administrateur",
        image: portfolioProfile,
      },
      {
        title: "Changement de l'email administrateur",
        image: portfolioEmail,
      },
      {
        title: "Changement du mot de passe administrateur",
        image: portfolioPassword,
      },
    ],
  },
];

export default sideProjects;
