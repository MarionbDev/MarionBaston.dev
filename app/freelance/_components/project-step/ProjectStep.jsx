import Image from "next/image";
import Search from "../../images/search.svg";
import ProjectCardStep from "./CardProjectStep";

export default function ProjectStepFree() {
  return (
    <>
      <div className="flex flex-col gap-8">
        <h1 className="bg-free_yellow w-fit text-xl md:text-[2rem] font-semibold px-1">
          Votre projet étape par étape
        </h1>
        <p className="">
          Un accompagnement structuré, du premier échange jusqu’à la mise en
          ligne, pour vous assurer un site web efficace et optimisé.
        </p>
      </div>
      <section className="flex flex-col gap-6 items-center">
        <ProjectCardStep
          numberChk={1}
          numberStep="01"
          title="Analyse de vos besoins"
          description="Compréhension de votre projet et de vos objectifs"
        />
        <ProjectCardStep
          numberChk={2}
          numberStep="02"
          title="Proposition d'une solution adaptée"
          description="Présentation d'une stratégie sur mesure"
        />
        <ProjectCardStep
          numberChk={3}
          numberStep="03"
          title="Création de maquettes"
          description="Visualisation du design avant le développement"
        />
        <ProjectCardStep
          numberChk={4}
          numberStep="04"
          title="Développement et Optimisation"
          description="Conception du site avec un code performant"
        />
        <ProjectCardStep
          numberChk={5}
          numberStep="05"
          title="Mise en ligne"
          description="Livraison et accompagnement pour la prise en main"
        />
        <div className=" border-t-[2px] border-x-[2px] border-t-[#442c74]  border-x-[#442c74]  border-b-4 rounded-3xl p-4  gap-2 max-w-[800px] w-full">
          <Image
            src={Search}
            width={40}
            height={40}
            alt="icone de recherche"
            className="float-left mr-4"
          />
          <p className="text-pretty pl-2">
            Vous suivez l’évolution de votre site en temps réel grâce à un accès
            à une version temporaire et des points réguliers tout au long du
            projet
          </p>
        </div>
      </section>
    </>
  );
}
