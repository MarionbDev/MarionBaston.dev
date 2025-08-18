import { ArrowUpRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "../../../../components/ui/card";
import CustomLink from "../CustomLink";

export default function OffresFree() {
  return (
    <>
      <section className="flex  flex-col gap-6  ">
        <div className=" flex items-end gap-1 h-16 mb-10 ">
          <h1 className=" text-xl md:text-[2rem] text-txt_black font-semibold px-1">
            Offres
          </h1>{" "}
          <span className="mb-[0.72rem] md:mb-0 w-3 h-3 md:h-4 md:w-4  rounded-full bg-free_yellow "></span>
        </div>
        <p className="text-[1rem] md:text-[1.07rem] text-pretty leading-7 ">
          Choisissez la formule qui correspond à votre projet et lancez votre
          site rapidement, avec un accompagnement complet à chaque étape.
        </p>
      </section>
      <section className="flex justify-center flex-col md:items-stretch items-center flex-wrap md:flex-row gap-4 md:gap-20 mt-8">
        <Card className="w-[350px]  flex flex-col justify-between pb-4  border-free_yellow border-2 ">
          <div>
            <CardHeader className="flex flex-col items-center gap-4 ">
              <h2 className="text-[1.4rem] mb-6 font-semibold text-txt_black text-center ">
                Intégration
              </h2>
              <p className=" text-pretty">
                Vous avez déjà une maquette ? Transformez votre design en site
                fonctionnel et responsive.
              </p>
            </CardHeader>
            <CardContent className=" border-t-[1px]  border-free_yellow w-[85%] px-6 pt-6 mx-auto">
              <ul className=" list-disc">
                <li>Intégration au pixel près</li>
                <li>Design responsive & accessible</li>
                <li>SEO de base</li>
                <li>Animation & interactions simples</li>
                <li>Formation personnalisée</li>
                <li>2 mois de maintenance inclus</li>
              </ul>
            </CardContent>
          </div>
          <div className="w-full  flex justify-center ">
            <CustomLink href="/freelance/contact" className="flex gap-2">
              Passer à l'action <ArrowUpRight size={18} />
            </CustomLink>
          </div>
        </Card>
        <Card className="w-[350px] pb-4  border-free_yellow border-2 ">
          <CardHeader className="flex flex-col items-center gap-4 ">
            <h2 className="text-[1.4rem] font-semibold text-txt_black text-center">
              Site Web clé en main (Landing Page / Vitrine)
            </h2>
            <p>
              Un site sur-mesure pour attirer, convaincre et convertir vos
              visiteurs.
            </p>
          </CardHeader>
          <CardContent className="border-t-[1px] mt-4  border-free_yellow w-[85%] px-6 pt-6 mx-auto">
            <ul className=" list-disc">
              <li>
                Landing Page : 1 page centrée sur un objectif précis (conversion
                rapide)
              </li>
              <li>
                Site vitrine : 3 à 5 pages pour présenter votre activité de
                manière complète
              </li>
              <li>Design sur-mesure</li>
              <li>Responsive et accessible</li>
              <li>SEO optimisé</li>
              <li>Animation et interactions personnalisées</li>
              <li>Formation personnalisée</li>
              <li>2 mois de maintenance inclus</li>
            </ul>
          </CardContent>
          <div className="w-full flex justify-center ">
            <CustomLink href="/freelance/contact" className="flex gap-2">
              Passer à l'action <ArrowUpRight size={18} />
            </CustomLink>{" "}
          </div>
        </Card>
        <Card className="w-[350px]  flex flex-col justify-between pb-4 border-free_yellow border-2 ">
          <div>
            <CardHeader className="flex flex-col items-center gap-4 ">
              <h2 className="text-[1.4rem] font-semibold text-txt_black text-center">
                Site Web Sur-mesure Avancé
              </h2>
              <p>Pour des projets plus complexes ou spécifiques</p>
            </CardHeader>
            <CardContent className="border-t-[1px] mt-5 border-free_yellow w-[85%] px-6 pt-6 mx-auto">
              <ul className=" list-disc">
                <li>Design 100% personnalisé</li>
                <li>Pages et fonctionnalités sur-mesure</li>
                <li>Responsive et accessible</li>
                <li>SEO et performances optimisés</li>
                <li>Animation et interactions personnalisées</li>
                <li>Formation personnalisée</li>
                <li>2 mois de maintenance inclus</li>
              </ul>
            </CardContent>
          </div>
          <div className="w-full flex justify-center ">
            <CustomLink href="/freelance/contact" className="flex gap-2">
              Passer à l'action <ArrowUpRight size={18} />
            </CustomLink>
          </div>
        </Card>
      </section>
    </>
  );
}
