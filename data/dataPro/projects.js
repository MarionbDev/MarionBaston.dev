import Activity from "@/public/assets/le_plessis_aux_lys/activity.png";
import Admin from "@/public/assets/le_plessis_aux_lys/admin.png";
import ContactForm from "@/public/assets/le_plessis_aux_lys/contactForm.png";
import Gallery from "@/public/assets/le_plessis_aux_lys/gallery.png";
import Gite from "@/public/assets/le_plessis_aux_lys/gite.png";
import Gite1 from "@/public/assets/le_plessis_aux_lys/gite1.png";
import Home from "@/public/assets/le_plessis_aux_lys/home.png";
import MockupMobile from "@/public/assets/le_plessis_aux_lys/mobile-mockup.png";
import MockupPc from "@/public/assets/le_plessis_aux_lys/mockup-pc.png";

const professionalProjects = [
  {
    id: 1,
    type: "pro",
    date: "2024-12",
    title: "Le Plessis aux Lys",
    description:
      "Site permettant aux visiteurs de découvrir les Gîtes et Chambres d'Hôtes, tout en explorant les activités touristiques disponibles dans la région.",
    time: "",
    context:
      "Développement d'un site web permettant aux visiteurs de découvrir différents hébergements avec leurs tarifs et disponibilités, ainsi que les activités à faire dans la région. L'objectif était d'offir une présentation claire et attrayante des offres, tout en permettant au client de gérer facilement le contenu via une interface d'administration.",
    soloTeam: null,
    client: "Le Plessis Aux Lys",
    project_steps: [
      {
        functionalities: [
          {
            user: [
              {
                title:
                  "Consultation des hébergements : Détails complets des hébergements (descriptions, photos, tarifs et disponibilités).",
              },
              {
                title:
                  "Découverte des activités locales : Mise en avant des activités touristiques à proximité.",
              },
              { title: "Galerie photo du domaine." },
              {
                title:
                  "Formulaire de contact : Permet aux visiteurs de prendre contact facilement.",
              },
              {
                title:
                  "Localisation du domaine sur Google Maps : Sur la page d'accueil, les utilisateurs peuvent visualiser l'emplacement du domaine des gîtes et chambres d'hôtes via une carte Google Maps interactive, nécessitant l'acceptation des cookies pour afficher la carte.",
              },

              {
                title:
                  "Interface fluide et responsive pour une navigation agréable.",
              },
            ],
            admin: [
              {
                title:
                  "Authentification sécurisée : Utilisation de Supabase Auth pour une gestion d'accès sécurisée.",
              },
              {
                title:
                  "Tableaux de bord de gestion : Pour les hébergements (descriptions, tarifs, disponibilités, photos), les activités locales et la galerie photo. ",
              },
              {
                title:
                  "Modification des informations personnelles : Interface permettant de mettre à jour les information (email, mot de passe).",
              },
            ],
          },
        ],
      },
      {
        challenges: [
          {
            title:
              "Gestion dynamique des hébergements : Mise en place d'un système permettant une synchronisation fluide et une actualisation en temps réeel des données d'hébergement et des activités touristiques locales.",
          },
          {
            title:
              "Sécurisation de l'accès administration : Intégration d'une authentification robuste avec Supabase Auth et mise en place de protection de routes pour sécruriser l'accès à l'interface d'administration.",
          },
          {
            title:
              "Expérience utilisateur optimisée : Design épuré, fluide et responsive pour garantir une navigation rapide et agréable sur le site.",
          },
          {
            tite: "Conformité et transparence : Mise en place d'une bannière de cookies pour obtenir le consentement des utilisateurs avant l'affichage de la carte Google Maps, afin de respecter les normes de confidentialité et collecte de données.",
          },
        ],
      },
      {
        result: [
          {
            title:
              "Un site intuitif et moderne pour présenter efficacement les offres d'hébergement et les activités locales",
          },
          {
            title:
              "Une gestion simplifiée du contenu via une interface administrateur accessible et sécurisée",
          },
          {
            title:
              "Déploiement performant: le site a été déployé rapidement et de manière performante grâce à Vercel, assurant une bonne expérience utilisateur.",
          },
        ],
      },
    ],
    technos: [
      { title: "typescript" },
      { title: "next.js" },
      { title: "tailwindCSS" },
      { title: "supabase" },
      { title: "supabase Auth" },
      { title: "Zod" },
      { title: "resend" },
      { title: "vercel" },
    ],
    github_url: "https://github.com/MarionbDev/Le-Plessis-Aux-Lys",
    website_url: "www.le-plessis-aux-lys.fr",
    picture_mockup: [
      { title: "présentation mobile", image: MockupMobile },
      { title: "présentation PC", image: MockupPc },
    ],

    picture_website: [
      {
        title: "",
        image: Home,
      },
      {
        title: "",
        image: Gite,
      },
      {
        title: "",
        image: Gite1,
      },
      {
        title: "",
        image: Gallery,
      },
      {
        title: "",
        image: Activity,
      },
      {
        title: "",
        image: ContactForm,
      },
      {
        title: "",
        image: Admin,
      },
    ],
  },
];

export default professionalProjects;
