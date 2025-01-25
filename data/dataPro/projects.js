import HomePlessis from "@/public/images/leplessis.png";

const professionalProjects = [
  {
    id: 1,
    type: "pro",
    date: "2024-12",
    title: "Le Plessis aux Lys",
    time: "",
    description:
      "Site vitrine pour des gîtes et chambres d'hôtes, permettant aux clients de découvrir les hébergements et activités proposées.",
    soloTeam: null,
    client: "Le Plessis Aux Lys",
    project_steps: [
      {
        step_description:
          "Création et conception d'une maquette pour une interface utilisateur web dynamique et responsive",
      },
    ],
    technos: [{ title: "typescript" }, { title: "next.js" }],
    github_url: "https://github.com/MarionbDev/Le-Plessis-Aux-Lys",
    website_url: "www.le-plessis-aux-lys.fr",
    picture_website: [
      {
        title: "Interface public : Accueil",
        image: HomePlessis,
      },
    ],
  },
];

export default professionalProjects;
