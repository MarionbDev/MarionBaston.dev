import { Card } from "../../../components/ui/card";
import refonte from "../images/maintenance.png";
import update from "../images/miseAjour.png";
import perf from "../images/performance.png";
import responsive from "../images/responsive.png";
import suivi from "../images/suivi.png";
import surMesure from "../images/sur-mesure.png";
import CardServices from "./CardServices";
import CustomLink from "./CustomLink";

export default function ServicesFree() {
  return (
    <div className="flex flex-col justify-center gap-8 md:gap-10">
      <div className="flex flex-col gap-2">
        <h1 className="bg-free_yellow w-fit text-lg font-semibold px-1">
          Services
        </h1>
        <p className="">
          Vous offir un site clé en main, conçu sur-mesure pour mettre en valeur
          votre activité, améliorer votre visibilité en ligne et attirer plus de
          clients. Chaque projet est pensé pour être rapide, optimisé pour le
          SEO et surtout simple à utiliser.
        </p>
      </div>
      <div className="flex flex-col justify-center sm:flex-row flex-wrap gap-4">
        <CardServices
          title_1="Des site optimisés"
          title_2="et performants"
          classNameImage="w-[9rem]"
          bgColor=" bg-free_grey "
          bgText="bg-free_yellow"
          image={perf}
        />
        <CardServices
          title_1="Un site responsive"
          title_2="& SEO friendly"
          classNameImage="w-[11rem]"
          bgColor=" bg-free_yellow"
          bgText="bg-free_grey"
          image={responsive}
        />
        <CardServices
          title_1="Un site sur mesure"
          title_2="Adapté à vos besoins"
          classNameImage="w-[10rem] "
          bgColor=" bg-free_purple"
          bgText="bg-free_grey"
          colorText="text-free_grey"
          image={surMesure}
        />
        <CardServices
          title_1="Refonte de"
          title_2="Site Web"
          classNameImage="w-[10rem] "
          bgColor=" bg-free_grey "
          bgText="bg-free_yellow"
          image={refonte}
        />
        <CardServices
          title_1="Maintenance"
          title_2="& Mise à jour"
          classNameImage="w-[11rem] "
          bgColor=" bg-free_yellow"
          bgText="bg-free_grey"
          image={update}
        />
        <CardServices
          title_1="Analyse & suivi"
          title_2="des performances"
          classNameImage="w-[10rem] "
          bgColor=" bg-free_purple"
          bgText="bg-free_grey"
          colorText="text-free_grey"
          image={suivi}
        />
      </div>
      <div>
        <Card className="flex flex-col justify-between gap-4 py-6 px-4 border-none bg-free_grey">
          <h3>Discutons de votre projet !</h3>
          <p>
            Besoin d’un site performant ou d’un accompagnement digital ?
            Parlons-en ! Je vous propose des solutions adaptées à vos besoins.
          </p>
          <CustomLink href="#me-contacter">
            Obtenez votre proposition gratuitement
          </CustomLink>
        </Card>
      </div>
    </div>
  );
}
