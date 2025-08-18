import CustomLink from "./CustomLink";

export default function AboutMeFree() {
  return (
    <div>
      <div className=" flex items-end gap-1 h-16 mb-10 ">
        <h1 className=" text-xl md:text-[2rem]  text-txt_black font-semibold px-1">
          A propos de moi
        </h1>
        <span className="mb-[0.72rem] md:mb-0 w-3 h-3 md:h-4 md:w-4  rounded-full bg-free_yellow "></span>
      </div>
      <div className="flex flex-col justify-center gap-2 w-[80%] mx-auto text-[1rem] md:text-[1.07rem] text-pretty leading-7">
        <div>
          <p>
            Je suis Marion, développeuse web. J’accompagne{" "}
            <span className=" font-semibold">
              artisans, commerçants et entrepreneurs
            </span>{" "}
            pour créer des sites performants et modernes, pensés pour attirer
            vos visiteurs et les transformer en clients.
          </p>
          <p>
            Mon approche repose sur{" "}
            <span className=" font-semibold">
              l’échange, le conseil et un suivi personnalisé
            </span>
            , pour que vous soyez guidé à chaque étape tout en gardant le
            contrôle de votre projet. Chaque site que je réalise est
            <span className=" font-semibold">
              {" "}
              clair, agréable à utiliser et pensé pour vos visiteurs.
            </span>
          </p>
          <p>
            Je peux aussi vous aider à
            <span className=" font-semibold">
              {" "}
              améliorer votre visibilité sur les réseaux sociaux
            </span>
            , pour mettre en valeur votre activité et toucher plus de clients.
          </p>
          <p>
            Et j’adore{" "}
            <span className=" font-semibold">
              faire en sorte que chaque site raconte sa propre histoire
            </span>
            , avec sa personnalité et son style uniques.
          </p>
        </div>
        <CustomLink href="/freelance/contact" className="w-fit mx-auto mt-20 ">
          Discutons de votre projet
        </CustomLink>
      </div>
    </div>
  );
}
