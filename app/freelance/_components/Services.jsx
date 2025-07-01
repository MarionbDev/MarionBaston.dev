import Image from "next/image";
import { Card } from "../../../components/ui/card";
import refonte from "../images/maintenance.png";
import update from "../images/miseAjour.png";
import perf from "../images/performance.png";
import responsive from "../images/responsive.png";
import suivi from "../images/suivi.png";
import surMesure from "../images/sur-mesure.png";
import discussion from "./../images/discussion.png";
import CardServices from "./CardServices";
import CustomLink from "./CustomLink";

export default function ServicesFree() {
  return (
    <div className="flex flex-col justify-center gap-8 md:gap-10">
      <div className="flex flex-col gap-6">
        <h1 className=" bg-free_yellow w-fit text-xl md:text-[2rem] font-semibold px-1">
          Services
        </h1>
        <p className="text-[1rem] md:text-[1.07rem] ">
          Vous offir un site clé en main, conçu sur-mesure pour mettre en valeur
          votre activité, améliorer votre visibilité en ligne et attirer plus de
          clients. Chaque projet est pensé pour être rapide, optimisé pour le
          SEO et surtout simple à utiliser.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mx-auto xl:gap-10 3xl:mx-48">
        <CardServices
          title_1="Des site optimisés"
          title_2="et performants"
          classNameImage="w-[9rem] "
          bgColor=" bg-free_grey xl:bg-free_yellow "
          bgText="bg-free_yellow xl:bg-free_grey"
          colorText=" "
          image={perf}
        />
        <CardServices
          title_1="Un site responsive"
          title_2="& SEO friendly"
          classNameImage="w-[11rem]"
          bgColor=" bg-free_yellow xl:bg-free_grey"
          bgText="bg-free_grey xl:bg-free_yellow"
          image={responsive}
        />
        <CardServices
          title_1="Un site sur mesure"
          title_2="Adapté à vos besoins"
          classNameImage="w-[10rem] "
          bgColor=" bg-pale_yellow"
          bgText="bg-free_grey xl:bg-free_grey"
          image={surMesure}
        />
        <CardServices
          title_1="Refonte de"
          title_2="Site Web"
          classNameImage="w-[10rem] "
          bgColor=" bg-free_grey xl:bg-pale_yellow "
          bgText="bg-free_yellow xl:bg-free_grey"
          image={refonte}
        />
        <CardServices
          title_1="Maintenance"
          title_2="& Mise à jour"
          classNameImage="w-[11rem] sm:w-[13rem] md:translate-x-4 "
          bgColor=" bg-free_yellow"
          bgText="bg-free_grey "
          image={update}
        />
        <CardServices
          title_1="Analyse & suivi"
          title_2="des performances"
          classNameImage="w-[10rem] sm:w-[11rem] "
          bgColor=" bg-pale_yellow xl:bg-free_grey"
          bgText="bg-free_grey xl:bg-free_yellow"
          image={suivi}
        />
      </div>
      <Card className="relative flex flex-col-reverse items-center  lg:flex-row xl:justify-around xl:gap-20 px-6 md:px-16 xl:px-36 py-12 md:py-8 xl:py-4 2xl:py-0 border-none bg-free_grey text-[1rem] md:text-[1.07rem] shadow-md ">
        <div className=" flex flex-col justify-center gap-6 md:pr-28 lg:pr-20 xl:pr-16 2xl:pr-36 ">
          <h3 className="text-xl font-medium">Discutons de votre projet !</h3>

          <p className="text-pretty mt-6 md:mt-0">
            Besoin d’un site performant ou d’un accompagnement digital ?
            Parlons-en ! Je vous propose des solutions adaptées à vos besoins.
          </p>

          <CustomLink href="#me-contacter" className="w-fit mx-auto md:mx-0 ">
            Obtenez votre proposition gratuitement
          </CustomLink>
        </div>
        <Image
          src={discussion}
          width={300}
          height={300}
          alt="illustration discussion"
          className="absolute lg:relative right-2 sm:right-6 top-4 lg:top-0 xl:right-0 w-1/5 lg:w-2/6"
        />
      </Card>
    </div>
  );
}
