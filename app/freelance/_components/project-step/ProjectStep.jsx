import ProjectCardStep from "./CardProjectStep";

export default function ProjectStepFree() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <div className=" flex items-end gap-1 h-16 mb-10 ">
          <h1 className=" text-xl md:text-[2rem] text-txt_black font-semibold px-1">
            Votre projet étape par étape
          </h1>{" "}
          <span className="mb-[0.72rem] md:mb-0 w-3 h-3 md:h-4 md:w-4  rounded-full bg-free_yellow "></span>
        </div>
        <p className="text-[1rem] md:text-[1.07rem] text-pretty leading-7">
          Un accompagnement structuré, du premier échange jusqu’à la mise en
          ligne, pour vous assurer un site web efficace et optimisé.
        </p>
      </div>
      <section className="flex flex-col gap-6 items-center mt-8">
        <ProjectCardStep
          numberChk={1}
          numberStep="01"
          title="Analyse de vos besoins"
          description="On prend le temps d’échanger pour bien comprendre votre vision. Un petit formulaire vient compléter la discussion pour cadrer le projet."
        />
        <ProjectCardStep
          numberChk={2}
          numberStep="02"
          title="Conception d'une solution adaptée"
          description="Je construis avec vous une stratégie unique : chaque section raconte votre histoire, valorise votre image et motive vos visiteurs à agir."
        />
        <ProjectCardStep
          numberChk={3}
          numberStep="03"
          title="Création de maquettes"
          description="Un aperçu concret du site avant sa création, afin que tout soit clair et validé ensemble."
        />
        <ProjectCardStep
          numberChk={4}
          numberStep="04"
          title="Développement & Optimisation"
          description="Derrière le design, un code performant pour offrir une expérience fluide à vos visiteurs"
        />
        <ProjectCardStep
          numberChk={5}
          numberStep="05"
          title="Mise en ligne & accompagnement"
          description="Nous réalisons ensemble la mise en ligne : vous gardez la maîtrise de votre site, tout en étant accompagné pas à pas pour sa prise en main."
        />
        <div className=" border-t-[1px] border-x-[1px]  border-b-[3px] rounded-3xl p-4  gap-2 max-w-[800px] w-full">
          <p className="text-pretty pl-2 font-semibold text-[1.1rem]">
            + Suivi continu
          </p>
          <p className="text-pretty pl-2">
            Vous suivez l’évolution de votre site en temps réel grâce à un accès
            à une version temporaire et à des points réguliers tout au long du
            projet
          </p>
        </div>
      </section>
    </>
  );
}
