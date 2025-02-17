"use client";

import { Download } from "lucide-react";
import Link from "next/link";
import { Button } from "../../components/ui/button";

export default function MyBackground() {
  const downloadCV = () => {
    const imageUrl = "/images/cv.pdf";
    window.open(imageUrl, "_blank");
  };
  return (
    <div className="flex flex-col items-center">
      <div className=" font-poppins text-txt_black dark:text-white mt-24 mx-6 md:mx-20 lg:mx-32 max-w-[70rem] pb-32 ">
        <div className=" flex items-end gap-1 h-16 mb-10 ">
          <h1 className="font-poppins text-3xl pb-1 font-semibold md:text-[4rem] ">
            Parcours
          </h1>
          <span className="mb-[0.72rem] md:mb-0 w-3 h-3 md:h-4 md:w-4  rounded-full bg-purple "></span>
        </div>
        <p className="text-[1rem] ">
          Mon parcours a commencé dans un tout autre domaine. Avec un Bac en
          comptabilité et un BTS en gestion, j’ai évolué pendant plusieurs
          années dans la grande distribution, où j’ai développé des compétences
          en organisation, en coordination et en relation client. Ma passion
          pour la création et la technologie m’a naturellement conduite vers le
          développement web.
        </p>

        <div className="lg:mx-20 mt-6">
          <div className="flex flex-col gap-4">
            <h2 className="mt-6 text-[1.2rem] md:text-[1.3rem]">
              ✨ Une reconversion motivée par la passion
            </h2>
            <p>
              En 2023, j’ai décidé de franchir le cap et de me former
              sérieusement en intégrant la Wild Code School. Cette formation
              diplômante - au Titre professionnel RNCP "Développeur Web et web
              mobile" de niveau 5 - m’a permis d’acquérir des bases solides en
              développement frontend et backend. Depuis, je n’ai cessé
              d’expérimenter, apprendre et relever de nouveaux défis à travers
              des projets personnels, du freelancing et des hackathons.
            </p>
            <p>
              💡 Actuellement, je suis toujours en poste dans la grande
              distribution, je développe également des projets web en freelance,
              tout en recherchant une opportunité en entreprise.
            </p>
            <div className="flex flex-col gap-1">
              <p>Pourquoi le web ?</p>
              <p>
                Ce qui m’anime dans ce métier, c’est la créativité, l’innovation
                et la possibilité de toujours apprendre. J’adore transformer des
                idées en applications concrètes et optimiser des solutions pour
                offrir la meilleure expérience utilisateur.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-4">
            <h2 className="mt-6 text-[1.2rem] md:text-[1.3rem]">
              🔁 De la grande distribution au développement web : un parcours
              complémentaire
            </h2>
            <p>
              Passer au développement web n'est pas un simple changement de
              carrière, mais une évolution logique où je combine :
            </p>

            <ul className="flex flex-col gap-2">
              <li>
                <p>✅ Gestion et organisation → Gestion de projet web</p>
                <p>
                  Planifier des opérations marketing et gérer des stocks m’a
                  appris la rigueur et la gestion des priorités. Aujourd’hui,
                  j’applique ces compétences à la gestion de projets web, en
                  respectant les deadlines et les bonnes pratiques de
                  développement.
                </p>
              </li>
              <li>
                <p>
                  ✅ Relation client et gestion des plaintes → Expérience
                  utilisateur et satisfaction client
                </p>
                <p>
                  Comprendre les attentes des clients et proposer des solutions
                  adaptées fait partie de mon approche. Désormais, je mets cette
                  capacité au service de l’UX/UI, en développant des interfaces
                  intuitives et accessibles.
                </p>
              </li>
              <li>
                <p>
                  ✅ Anticipation des besoins et gestion des fournisseurs →
                  Développement agile et optimisation des performances
                </p>
                <p>
                  Dans la grande distribution, il faut savoir anticiper les
                  demandes et gérer les imprévus. En développement web, cette
                  approche me permet d’optimiser mon code, d’améliorer les
                  performances et de proposer des solutions évolutives et
                  scalables.
                </p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <h2 className="mt-6 text-[1.2rem] md:text-[1.3rem]">
              🚀 Développement Web : un nouvel horizon, mais des valeurs
              inchangées
            </h2>
            <p>
              Ma transition vers le développement web n’est pas un simple
              changement de carrière, mais une évolution naturelle qui me permet
              de combiner :
            </p>
            <ul>
              <li>
                <span className="text-purple">✔</span> Rigueur et organisation
              </li>
              <li>
                <span className="text-purple ">✔</span> Esprit d’équipe et
                communication
              </li>
              <li>
                <span className="text-purple">✔</span> Résolution de problèmes
                et créativité
              </li>
              <li>
                <span className="text-purple">✔</span> Recherche constante
                d’optimisation et d’amélioration
              </li>
            </ul>
            <p>
              Aujourd’hui, en tant que développeuse, je mets à profit cette
              double expertise pour créer des applications performantes et
              adaptées aux besoins des utilisateurs.
            </p>
            <p>
              Récemment, j’ai eu l’opportunité de développer mon premier projet
              en freelance pour un client{" "}
              <Link href={"https:/www.le-plessis-aux-lys.fr"} target="_blank">
                "Le Plessis aux Lys"
              </Link>
              , site de Gîtes et Chambres d'Hôtes, ce qui m’a permis d’appliquer
              mes compétences dans un cadre professionnel et de mieux comprendre
              les besoins réels d’un projet digital.
            </p>
            <p>
              💡Mon objectif ? Apporter mes compétences en développement web à
              une équipe engagée, en contribuant activement à la conception et à
              l’optimisation d’applications performantes et innovantes.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <h2 className="mt-6 text-[1.2rem] md:text-[1.3rem]">
              💫 Mes autres passions
            </h2>
            <p>
              Dès que j'ai un moment, je m'évade à travers d'autres activités
              qui me stimulent tout autant.
            </p>
            <p>
              🎨 Je suis passionnée par le dessin de portraits au crayon
              graphite, un art qui me permet d'exprimer ma créativité, mon souci
              du détail et ma patience. Retrouvez mes dessins dans mon projet
              "Drawing And Co".
            </p>
            <p>
              🎶 La musique fait partie de mon quotidien et m’accompagne dans
              tous les moments de la vie. Je suis une véritable autodidacte !
              Piano, guitare.... J’aime aussi découvrir de nouveaux styles
              musicaux et assister à des concerts. La musique, sous toutes ses
              formes, est une source d’émotions et d’inspiration au quotidien.
            </p>
            <p>
              🏃 Le sport fait partie de mon équilibre : il m'apporte à la fois
              énergie, discipline et bien-être. J'aime la sensation de liberté
              et de dépassement de soi dans la course à pied et le CrossFit. Que
              ce soit pour me défouler, relever de nouveaux défis ou simplement
              prendre un bol d'air frais.
            </p>
            <p>
              ✨ Entre le sport, la musique ou le dessin, ces passions me
              permettent de m'exprimer et nourrissent ma persévérence au
              quotidien.
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <Button
            onClick={downloadCV}
            role="button"
            aria-label="Télécharger mon CV"
            className="flex  items-center justify-center bg-purple dark:bg-purple/80 hover:bg-purple/60  dark:hover:bg-purple_dark dark:hover:text-white  dark:shadow-inner rounded-xl text-[#ffffff] text-[0.9rem] text-center p-2   w-full sm:w-[16rem]"
          >
            <Download id="download-cv" alt="icône de téléchargement  " />
            <p className="flex gap-1">
              <span className="hidden md:flex">Téléchargez mon</span> CV
            </p>
          </Button>
        </div>
      </div>
    </div>
  );
}
