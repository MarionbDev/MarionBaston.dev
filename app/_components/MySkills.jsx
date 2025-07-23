import { Check } from "lucide-react";

export default function MySkills() {
  return (
    <div className="">
      <div className="  font-poppins flex flex-wrap justify-center sm:justify-start gap-14 lg:gap-22">
        <div className="bg-gradient-card rounded-md  px-4 py-8 gap-6 mx-auto max-w-[36rem]">
          <div className="flex flex-col ">
            <h2 className=" text-txt_black dark:text-white font-semibold text-lg lg:text-xl text-center">
              DEVELOPPEMENT WEB FRONTEND
            </h2>
            <span className="wave-skills relative flex justify-center "></span>
          </div>

          <div className="  text-[1rem] md:text-[1.07rem]  leading-7 text-pretty">
            <p className="  mt-8 text-pretty">
              Je développe l'interface visible d'un site web à partir d'une
              maquette, en garantissant une expérience utilisateur fluide et
              engageante.
            </p>
            <ul className="  mt-4 gap-2 flex flex-col">
              <li className="flex gap-1 items-start md:ml-4 ">
                <Check
                  size={20}
                  color="#8300e9"
                  className="mt-1 flex-shrink-0"
                />
                Conception d'interfaces utilisateur interactives et intuitives
              </li>
              <li className="flex gap-1 items-start md:ml-4 ">
                <Check
                  size={20}
                  color="#8300e9"
                  className="mt-1 flex-shrink-0"
                />
                Accessibilité et amélioration de l'expérience utilisateur (UX)
              </li>
              <li className="flex gap-1 items-start md:ml-4 ">
                {" "}
                <Check
                  size={20}
                  color="#8300e9"
                  className="mt-1 flex-shrink-0"
                />{" "}
                Optimisation SEO pour un meilleur référencement
              </li>
              <li className="flex gap-1 items-start md:ml-4 ">
                <Check
                  size={20}
                  color="#8300e9"
                  className="mt-1 flex-shrink-0"
                />
                Développement responsive pour une compatibilité optimale sur
                tous les écrans
              </li>
              <li className="flex gap-1 items-start md:ml-4 ">
                <Check
                  size={20}
                  color="#8300e9"
                  className="mt-1 flex-shrink-0"
                />{" "}
                Optimisation des performances (chargement rapide, animations
                fluides, lazy loading...)
              </li>
              <li className="flex gap-1 items-start md:ml-4 ">
                <Check
                  size={20}
                  color="#8300e9"
                  className="mt-1 flex-shrink-0"
                />
                Intégration d'API et gestion des états (React, Context API,
                etc...)
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-gradient-card rounded-md px-4 py-8 gap-6 mx-auto max-w-[36rem] ">
          <div className=" flex flex-col ">
            <h2 className=" text-txt_black dark:text-white font-semibold text-lg lg:text-xl text-center">
              DEVELOPPEMENT WEB BACKEND
            </h2>
            <span className="wave-skills relative flex justify-center "></span>
          </div>
          <div className="   text-[1rem] md:text-[1.07rem] leading-7 text-pretty">
            <p className=" mt-8">
              Je conçois et mets en place l'architecture backend d'un projet
              afin d'assurer sa fiabilité, sa sécurité et sa scalabilité.
            </p>
            <ul className="mt-4 gap-2 flex flex-col">
              <li className="flex gap-1 items-start md:ml-4 ">
                <Check
                  size={20}
                  color="#8300e9"
                  className="mt-1 flex-shrink-0"
                />
                Développement de fonctionnalités robustes et sécurisées
              </li>
              <li className="flex gap-1 items-start md:ml-4 ">
                <Check
                  size={20}
                  color="#8300e9"
                  className="mt-1 flex-shrink-0"
                />{" "}
                Gestion et structuration des bases de données
              </li>
              <li className="flex gap-1 items-start md:ml-4 ">
                <Check
                  size={20}
                  color="#8300e9"
                  className="mt-1 flex-shrink-0"
                />{" "}
                Création et gestion d'API pour la communication frontend-backend
              </li>
              <li className="flex gap-1 items-start md:ml-4 ">
                <Check size={20} color="#8300e9" className="mt-1 " />
                Authentification et gestion des utilisateurs{" "}
              </li>
              <li className="flex gap-1 items-start md:ml-4 ">
                <Check
                  size={20}
                  color="#8300e9"
                  className="mt-1 flex-shrink-0"
                />
                Mise en place de mesures de sécurité pour protéger les données
                (CORS, Hashing, Validation des entrées...)
              </li>
              <li className="flex gap-1 items-start md:ml-4 ">
                <Check
                  size={20}
                  color="#8300e9"
                  className="mt-1 flex-shrink-0"
                />{" "}
                Optimisation des performances backend (mise en cache, requêtes
                optimisées, gestion de la charge...)
              </li>
              <li className="flex gap-1 items-start md:ml-4 ">
                <Check
                  size={20}
                  color="#8300e9"
                  className="mt-1 flex-shrink-0"
                />
                Déploiement et maintenance des applications avec CI/CD
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
