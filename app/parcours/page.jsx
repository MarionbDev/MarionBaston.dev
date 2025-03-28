"use client";

import { motion } from "framer-motion";
import { Download, MessagesSquare } from "lucide-react";
import Link from "next/link";
import { Button } from "../../components/ui/button";

export default function MyBackground() {
  const downloadCV = () => {
    const imageUrl = "/images/cv.pdf";
    window.open(imageUrl, "_blank");
  };

  const sectionTitle = {
    hide: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.2,
      },
    },
  };
  const sectionText = {
    hide: {
      opacity: 0,
      y: 100,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        delay: 0.4,
      },
    },
  };

  return (
    <div className="flex flex-col items-center text-[1rem] md:text-[1.07rem]">
      <div className=" font-poppins text-txt_black dark:text-white mt-24 mx-6 sm:mx-20 lg:mx-32 max-w-[70rem]  ">
        <div className=" flex items-end gap-1 h-16 mb-10 ">
          <h1 className="font-poppins text-3xl pb-1 font-semibold md:text-[4rem] ">
            Parcours
          </h1>
          <span className="mb-[0.72rem] md:mb-0 w-3 h-3 md:h-4 md:w-4  rounded-full bg-purple "></span>
        </div>

        <p className=" text-pretty leading-7">
          Mon parcours a commencé dans un tout autre domaine. Avec un Bac en
          comptabilité et un BTS en gestion, j’ai évolué pendant plusieurs
          années dans la grande distribution, où j’ai développé des compétences
          en organisation, en coordination et en relation client. Ma passion
          pour la création et la technologie m’a naturellement conduite vers le
          développement web.
        </p>

        <div className="lg:mx-20 mt-6">
          <motion.section
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={sectionTitle}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="mt-20 text-[1.3rem] md:text-[1.5rem] mb-[1rem]">
                ✨ Une reconversion motivée par la passion
              </h2>
            </motion.div>
          </motion.section>
          <motion.section
            initial="hide"
            whileInView="show"
            exit="hide"
            variants={sectionText}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col gap-4">
                <p className="text-pretty leading-7">
                  En 2023, j’ai décidé de franchir le cap et de me former
                  sérieusement en intégrant la
                  <span className="font-semibold"> Wild Code School</span>.
                  Cette formation diplômante - au{" "}
                  <span className="font-semibold">
                    Titre professionnel RNCP "Développeur Web et web mobile"
                  </span>{" "}
                  de niveau 5 - m’a permis d’acquérir des bases solides en
                  développement frontend et backend. Depuis, je n’ai cessé
                  d’expérimenter, apprendre et relever de nouveaux défis à
                  travers des projets personnels, du freelancing et des
                  hackathons.
                </p>

                <p className="text-pretty leading-7">
                  💡 Actuellement, je suis toujours en poste dans la grande
                  distribution, je développe également des projets web en
                  freelance, tout en recherchant une opportunité en entreprise.
                </p>
                <div className="flex flex-col gap-1">
                  <p>Pourquoi le web ?</p>
                  <p className="text-pretty leading-7">
                    Ce qui m’anime dans ce métier, c’est la{" "}
                    <span className="font-semibold"> créativité</span>, l’
                    <span className="font-semibold">innovation</span> et la{" "}
                    <span className="font-semibold">
                      possibilité de toujours apprendre
                    </span>
                    . J’adore transformer des idées en applications concrètes et
                    optimiser des solutions pour offrir la meilleure expérience
                    utilisateur.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.section>

          <div className="flex flex-col gap-4 mt-28">
            <motion.section
              initial="hide"
              whileInView="show"
              exit="hide"
              variants={sectionTitle}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="mt-6 text-[1.3rem] md:text-[1.5rem] mb-4">
                  🔁 De la grande distribution au développement web : un
                  parcours complémentaire
                </h2>
              </motion.div>
            </motion.section>
            <motion.section
              initial="hide"
              whileInView="show"
              exit="hide"
              variants={sectionText}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-pretty leading-7">
                  Passer au développement web n'est pas un simple changement de
                  carrière, mais une évolution logique où je combine :
                </p>

                <ul className="flex flex-col gap-4 mt-4 text-pretty leading-7">
                  <li>
                    <p>✅ Gestion et organisation → Gestion de projet web</p>
                    <p>
                      Planifier des opérations marketing et gérer des stocks m’a
                      appris la rigueur et la gestion des priorités.
                      Aujourd’hui, j’applique ces compétences à la gestion de
                      projets web, en respectant les deadlines et les bonnes
                      pratiques de développement.
                    </p>
                  </li>
                  <li>
                    <p>
                      ✅ Relation client et gestion des plaintes → Expérience
                      utilisateur et satisfaction client
                    </p>
                    <p>
                      Comprendre les attentes des clients et proposer des
                      solutions adaptées fait partie de mon approche. Désormais,
                      je mets cette capacité au service de l’UX/UI, en
                      développant des interfaces intuitives et accessibles.
                    </p>
                  </li>
                  <li>
                    <p>
                      ✅ Anticipation des besoins et gestion des fournisseurs →
                      Développement agile et optimisation des performances
                    </p>
                    <p>
                      Dans la grande distribution, il faut savoir anticiper les
                      demandes et gérer les imprévus. En développement web,
                      cette approche me permet d’optimiser mon code, d’améliorer
                      les performances et de proposer des solutions évolutives
                      et scalables.
                    </p>
                  </li>
                </ul>
              </motion.div>
            </motion.section>
          </div>
          <div className="flex flex-col gap-4 mt-28">
            <motion.section
              initial="hide"
              whileInView="show"
              exit="hide"
              variants={sectionTitle}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="mt-6 text-[1.3rem] md:text-[1.5rem] mb-4">
                  🚀 Développement Web : un nouvel horizon, mais des valeurs
                  inchangées
                </h2>
              </motion.div>
            </motion.section>
            <motion.section
              initial="hide"
              whileInView="show"
              exit="hide"
              variants={sectionText}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <p className="text-pretty leading-7">
                  Ma transition vers le développement web n’est pas un simple
                  changement de carrière, mais une évolution naturelle qui me
                  permet de combiner :
                </p>
                <ul className="text-pretty leading-7 flex flex-col gap-2 py-2">
                  <li>
                    <span className="text-purple">✔</span> Rigueur et
                    organisation
                  </li>
                  <li>
                    <span className="text-purple ">✔</span> Esprit d’équipe et
                    communication
                  </li>
                  <li>
                    <span className="text-purple">✔</span> Résolution de
                    problèmes et créativité
                  </li>
                  <li>
                    <span className="text-purple">✔</span> Recherche constante
                    d’optimisation et d’amélioration
                  </li>
                </ul>
                <div className="flex flex-col gap-4 mt-2">
                  <p className="text-pretty leading-7">
                    Aujourd’hui, en tant que développeuse, je mets à profit
                    cette double expertise pour créer des applications
                    performantes et adaptées aux besoins des utilisateurs.
                  </p>
                  <p className="text-pretty leading-7">
                    Récemment, j’ai eu l’opportunité de développer mon premier
                    projet en freelance pour un client{" "}
                    <Link
                      href={"https:/www.le-plessis-aux-lys.fr"}
                      target="_blank"
                      className="italic "
                    >
                      "Le Plessis aux Lys"
                    </Link>
                    , site de Gîtes et Chambres d'Hôtes,{" "}
                    <span className=" underline-offset-2 underline">
                      ce qui m’a permis d’appliquer mes compétences dans un
                      cadre professionnel
                    </span>{" "}
                    et de mieux comprendre les bsoins réels d’un projet digital.
                  </p>
                  <p className="text-pretty leading-7">
                    💡Mon objectif ? Apporter mes compétences en développement
                    web à une équipe engagée, en contribuant activement à la
                    conception et à l’optimisation d’applications performantes
                    et innovantes.
                  </p>
                </div>
              </motion.div>
            </motion.section>
          </div>
          <div className="flex flex-col gap-4 mt-28 text-pretty leading-7 ">
            <motion.section
              initial="hide"
              whileInView="show"
              exit="hide"
              variants={sectionTitle}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="mt-6 text-[1.3rem] md:text-[1.5rem] mb-4">
                  💫 Mes autres passions
                </h2>
              </motion.div>
            </motion.section>
            <motion.section
              initial="hide"
              whileInView="show"
              exit="hide"
              variants={sectionText}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex flex-col gap-4">
                  <p className="">
                    Dès que j'ai un moment, je m'évade à travers d'autres
                    activités qui me stimulent tout autant.
                  </p>
                  <p>
                    🎨 Je suis passionnée par le{" "}
                    <span className="font-semibold">dessin</span> de portraits
                    au crayon graphite, un art qui me permet d'exprimer ma
                    créativité, mon souci du détail et ma patience. Retrouvez
                    mes dessins dans mon projet "Drawing And Co".
                  </p>
                  <p>
                    🎶 La <span className="font-semibold">musique</span> fait
                    partie de mon quotidien et m’accompagne dans tous les
                    moments de la vie. Je suis une véritable autodidacte !
                    Piano, guitare.... J’aime aussi découvrir de nouveaux styles
                    musicaux et assister à des concerts. La musique, sous toutes
                    ses formes, est une source d’émotions et d’inspiration au
                    quotidien.
                  </p>
                  <p>
                    🏃 Le <span className="font-semibold">sport</span> fait
                    partie de mon équilibre : il m'apporte à la fois énergie,
                    discipline et bien-être. J'aime la sensation de liberté et
                    de dépassement de soi dans la course à pied et le CrossFit.
                    Que ce soit pour me défouler, relever de nouveaux défis ou
                    simplement prendre un bol d'air frais.
                  </p>
                  <p>
                    ✨ Entre le sport, la musique ou le dessin, ces passions me
                    permettent de m'exprimer et nourrissent ma persévérence au
                    quotidien.
                  </p>
                </div>
              </motion.div>
            </motion.section>
          </div>
        </div>
        <motion.section
          initial="hide"
          whileInView="show"
          exit="hide"
          variants={sectionTitle}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-col items-center md:flex-row md:justify-center my-32 gap-10 text-[1rem] md:text-[1.07rem]">
              <Link
                href={"/#me-contacter"}
                aria-label="M'envoyer un email"
                className="flex  items-center justify-center border-purple border-2 bg-purple rounded-full py-1 px-4 shadow-inner shadow-free_grey hover:bg-purple/10 hover:text-free_purple dark:text-free_grey duration-300  text-[#ffffff] text-[1rem] md:text-[1.07rem] text-center p-2   w-full sm:w-[16rem]"
              >
                <MessagesSquare
                  size="22"
                  id="contact-me header"
                  className=" w-16 md:w-8  "
                />
                Discutons ensemble !
              </Link>

              <Button
                onClick={downloadCV}
                role="button"
                aria-label="Télécharger mon CV"
                className="  border-purple/40 hover:border-purple  dark:hover:border-purple_dark p-2 gap-2 text-[1rem] md:text-[1.07rem]  text-purple dark:hover:text-free_grey border-purple border-2   rounded-full py-1 px-4 shadow-inner shadow-free_grey hover:bg-purple/10 duration-300 dark:text-free_grey"
              >
                <Download id="download-cv" alt="icône de téléchargement  " />
                <p className="flex gap-1">
                  <span className="hidden md:flex">Téléchargez mon</span> CV
                </p>
              </Button>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
