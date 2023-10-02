export default function About() {
  return (
    <div className="text flex flex-col items-center justify-center pt-16 sm:py-48  bg-pale_pink ">
      <div className="w-3/4">
        <p className="text-md sm:text-2xl mb-3 ">Bonjour, je suis</p>
        <p className="text-purple font-semibold text-2xl sm:text-6xl mb-2">
          Marion Baston
        </p>
        <p className="text-xl font-semibold sm:text-4xl mb-10">
          Développeuse Web Junior
        </p>
        <div className="sm:text-xl leading-8 ">
          <p>
            Passionnée de développement web et autodidacte, j'ai acquis des
            compétences durant ma formation de{" "}
            <span className="text-purple sm:text-2xl font-medium">
              "Développeur web et web mobile"
            </span>{" "}
            à la Wild Code School, en Juillet 2023. Formation validée par
            l'obtention du titre en Septembre 2023.
            <p>
              Je suis résolument engagée dans une démarche d'amélioration
              continue, cherchant toujours à progresser davantage.
            </p>
          </p>
          <p className="mt-5">
            Mes objectifs de développement sont orientés vers l'accessibilité et
            l'optimisation pour les moteurs de recherche (SEO). Je suis
            déterminée à concevoir des expériences web inclusives et à créer des
            sites internet qui offrent une excellente expérience utilisateur
            pour tous, tout en veillant à ce qu'ils soient bien positionnés sur
            les moteurs de recherche pour atteindre un public plus large.
          </p>
          <p>
            J'apprécie le travail en équipe, le souci du détail et la qualité du
            code.
          </p>
        </div>
      </div>
    </div>
  );
}
