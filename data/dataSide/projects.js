import gitPng from "@/public/assets/logos/git.png";
import javascriptPng from "@/public/assets/logos/javascript.png";
import nextPng from "@/public/assets/logos/next.png";
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
    description: "Galerie de portraits au crayon graphite",
    time: "1 mois, évolutif",
    client: "",
    project_type: "Projet personnel, présenté au Titre professionnel",
    context:
      "Dans le cadre de ma formation et passionnée par le dessin au crayon graphite, j’ai décidé de créer mon propre site. Cette plateforme permet de gérer une galerie de dessins tout en offrant des fonctionnalités interactives aux utilisateurs. Projet présenté au Titre Professionnel de Développeur web et web mobile (RNCP, niveau 5)",
    project_steps: [
      {
        functionalities: [
          {
            user: [
              { title: "Galerie des portraits." },

              {
                title:
                  "Consultation des portraits : Accès à une galerie de dessins avec possibilité de filtrer les oeuvres.",
              },

              {
                title:
                  "Interaction avec les portraits : Laisser des commentaires sous chaque portrait.",
              },

              {
                title:
                  "Authentification et gestion du profil : Inscription, connexion sécurisée, modification des informations personnelles (profil et mot de passe)",
              },
              {
                title:
                  "FAQ intégrée : Réponses aux question courantes sur le site et son fonctionnement.",
              },
              {
                title:
                  "Interface fluide et responsive : Expérience utilisateur optimisée pour une navigation agréable sur tous les types d'écrans.",
              },
            ],
            admin: [
              {
                title:
                  "Gestion des utilisateurs : Consultation, suppression des utilisateurs inscrits.",
              },
              {
                title:
                  "Modération des commentaires : Suppression des commentaires inappropriés.",
              },

              {
                title:
                  "Ajout et gestion des portraits : Ajout, modification et suppression des dessins avec toutes les informations associées.",
              },
              {
                title:
                  "Navigation dédiée à l'administration : Menu spécifique pour accéder aux fonctionnalités de gestion du site.",
              },
            ],
          },
        ],
      },
      {
        challenges: [
          {
            title:
              "Sécurisation des accès : Authentification robuste via JWT et MySQL, protection des routes sensibles",
          },
          {
            title:
              "Expérience utilisateur fluide : Interface responsive et intuitive pour faciliter la navigation",
          },
          {
            title:
              "Modification efficace : Mise en place d'outils d'administration permettant de gérer les interactions sur le site.",
          },
        ],
      },
      {
        result: [
          {
            title:
              "Un site intuitif permettant aux utilisateurs de découvrir et d'interagir avec une galerie de portraits de manière fluide.",
          },
          {
            title:
              "Une gestion simplifiée du contenu via une interface administrateur sécurisée, offrant un contrôle total sur les utilisateurs, commentaires et dessins.",
          },
        ],
      },
    ],

    technos: [
      { title: "javascript" },
      { title: "react.js" },
      { title: "node.js" },
      { title: "express" },
      { title: "yup" },
      { title: "mySQL" },
      { title: "tailwindCSS" },
      { title: "git" },
      { title: "figma" },
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
