export default function MyServices() {
  return (
    <div className="flex flex-col  justify-center tracking-wide ">
      <div className=" flex justify-start w-full items-end gap-1 h-16  ">
        <h2 className="font-poppins text-3xl pb-1 font-semibold md:text-[3.5rem]  ">
          Mes Services
        </h2>
        <span className=" mb-[0.69rem]  sm:mb-0 w-3 h-3 rounded-full bg-purple "></span>
      </div>
      <p className="font-poppins pt-2 md:pt-8 mb-12 md:mb-24 text-[1rem] ">
        Je vous offre une solution web sur-mesure, en alliant des interfaces
        utilisateurs modernes et responsives (frontend) aux fonctionnalités
        puissantes et sécurisées (backend), pour garantir la performance, la
        sécurité et l’évolutivité de votre site.{" "}
      </p>
      <div className="flex flex-col items-center md:justify-center ">
        <div className="font-poppins flex flex-wrap justify-center  gap-14 lg:gap-28">
          <div className="dark:bg-purple/10 dark:shadow-purple/50 shadow-purple/40 shadow-sm  rounded-xl w-[22rem] h-[27rem]  sm:w-[30rem] md:h-[25rem] xl:px-8 py-8 gap-6 px-4 ">
            <div className="flex flex-col ">
              <h2 className=" text-purple dark:text-white font-semibold text-base lg:text-lg text-center">
                DEVELOPPEMENT WEB FRONTEND
              </h2>
              <span className="wave-services relative flex justify-center "></span>
            </div>

            <div className=" tracking-tight text-[1rem]">
              <p className="  mt-8">
                Je développe l'interface visible de votre site web à partir
                d'une maquette.
              </p>
              <ul className="  mt-4 list-disc pl-4 gap-1 flex flex-col">
                <li>
                  Conception d'interfaces utilisateur interactives et intuitives
                </li>
                <li>
                  Accessibilité et amélioration de l'expérience utilisateur (UX)
                </li>
                <li>Optimisation SEO pour un meilleur référencement</li>
                <li>
                  Création de site web adaptatifs (responsive) pour une
                  compatibilité optimale avec tous les écrans (mobiles,
                  tablettes, ordinateurs)
                </li>
              </ul>
            </div>
          </div>
          <div className="dark:bg-purple/10 dark:shadow-purple/50 shadow-purple/40 shadow-sm  rounded-xl w-[22rem] h-[27rem]  sm:w-[30rem] md:h-[25rem] xl:px-8 py-8 gap-6 px-4 ">
            <div className="flex flex-col ">
              <h2 className=" text-purple dark:text-white font-semibold text-base lg:text-lg text-center">
                DEVELOPPEMENT WEB BACKEND
              </h2>
              <span className="wave-services relative flex justify-center "></span>
            </div>
            <div className="  tracking-tight text-[1rem]">
              <p className=" mt-8">
                Je réponds aux besoins techniques du projet en développant
                toutes les fonctionnalités invisibles nécessaires au bon
                fonctionnement de l'interface.
              </p>
              <ul className="mt-4 list-disc pl-4 gap-2 flex flex-col">
                <li>
                  Mise en place de mesures de sécurité pour protéger les
                  utilisateurs et leurs données
                </li>
                <li>
                  Garantie de la performance, de l'évolutivité et de la
                  fiabilité des applications backend
                </li>
                <li>
                  Automatisation des processus avec l'intégration continu et le
                  déploiement continu (CI/CD)
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
