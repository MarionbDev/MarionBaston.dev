import CardSupport from "./CardSupport";

export default function SupportFree() {
  return (
    <>
      <section className="flex flex-col gap-6">
        <div className=" flex items-end gap-1 h-16 mb-10 ">
          <h1 className="text-xl md:text-[2rem]  text-txt_black font-semibold px-1">
            Un accompagnement sur mesure
          </h1>{" "}
          <span className="mb-[0.72rem] md:mb-0 w-3 h-3 md:h-4 md:w-4  rounded-full bg-free_yellow "></span>
        </div>
        <p className="text-[1rem] md:text-[1.07rem] text-pretty leading-7 ">
          Même si le digital n’est pas votre terrain de jeu, je vous guide pas à
          pas pour un site efficace et facile à gérer.
        </p>
      </section>
      <section className="flex justify-around flex-col flex-wrap md:flex-row gap-10 mx-auto max-w-[82rem]  mt-8">
        <CardSupport
          title="Echange réguliers"
          description="Par mail, visioconférence ou téléphone : je m’adapte à vos préférences pour rester disponible à chaque étape."
        />
        <CardSupport
          title="Formation simplifiée"
          description="Des guides PDF et vidéos clairs pour que vous preniez rapidement en main votre site, en toute autonomie."
        />
        <CardSupport
          title="Conseils personnalisés"
          description="Des recommandations concrètes pour améliorer votre site et booster votre visibilité en ligne."
        />
      </section>
    </>
  );
}
