import Image from "next/image";
import { Card, CardContent, CardHeader } from "../../../components/ui/card";
import deskMob from "./../images/desk_mob.png";

export default function ProjectsFree() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <h1 className="bg-free_yellow w-fit text-lg font-semibold px-1">
          Ils m'ont fait confiance
        </h1>
        <p>
          Un projet, une réussite ! Découvrez mon travail et les résultats
          obtenus.
        </p>
      </div>
      <Card className="flex flex-col md:flex-row-reverse bg-free_purple border-none text-free_grey">
        <CardHeader className="relative mx-auto w-fit md:w-4/8 xl:w-2/5 ">
          <span className="absolute z-0 inset-0 m-auto bg-free_yellow w-5/6 h-4/6 rounded-bl-[8rem] rounded-br-[5rem] rounded-tl-[4rem] rounded-tr-[8rem] -rotate-12"></span>
          <Image
            src={deskMob}
            width={500}
            height={300}
            alt=" photos du projet Le plessis aux Lys"
            className=" relative z-10 pt-4 md:pt-10"
          />
        </CardHeader>
        <CardContent className="text-pretty md:p-4 md:w-3/4 xl:w-2/4 sm:m-auto">
          Création d’un site web intuitif permettant aux visiteurs de découvrir
          facilement les hébergements, leurs tarifs et disponibilités, ainsi que
          les activités de la région. L’objectif : une présentation claire et
          attrayante des offres, avec une prise de contact simplifiée pour
          faciliter les réservations. Grâce à une interface d’administration
          intuitive, le client gère son contenu en toute autonomie et optimise
          sa visibilité pour attirer plus de visiteurs.
        </CardContent>
      </Card>
    </>
  );
}
