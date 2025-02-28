"use client";

import backend from "@/public/images/backend.png";
import softSkills from "@/public/images/softSkills.png";
import splash from "@/public/images/splash.jpeg";
import tools from "@/public/images/tools.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import MySkills from "./MySkills";

export default function SkillsAndTech() {
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
  return (
    <div className="tracking-wide ">
      <div>
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
            <div className=" flex justify-start w-full items-end gap-1 h-16  ">
              <h2 className="font-poppins text-3xl md:pb-1 font-semibold md:text-[3.5rem] ">
                Compétences
              </h2>
              <span className=" mb-[0.48rem] sm:mb-[0.1rem] w-3 h-3 rounded-full bg-purple "></span>
            </div>
            <p className=" font-poppins pt-2 md:pt-8 mb-12 md:mb-24 text-[1rem] md:text-[1.1rem] text-pretty">
              J'ai acquis des compétences en développement{" "}
              <span className=" font-bold text-[1.2rem] text-purple dark:text-[#d29aec]">
                frontend
              </span>{" "}
              et{" "}
              <span className=" font-bold text-[1.2rem] text-purple dark:text-[#d29aec]">
                backend
              </span>
              , me permettant de concevoir des applications modernes,
              performantes et adaptées aux besoins des utilisateurs. Toujours en
              quête d'amélioration, j'aime explorer de nouvelles technologies et
              bonnes pratiques pour optimiser mes projets. <br /> Je continue de
              développer mes compétences en travaillant sur des projets variés,
              incluant des collaborations en freelance.
            </p>
          </motion.div>
        </motion.section>
      </div>
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
          <MySkills />
        </motion.div>
      </motion.section>

      <div className=" mt-10 md:mt-20   ">
        <div className="flex flex-col justify-center items-center  md:items-stretch   md:flex-row  md:flex-wrap   gap-6 md:gap-10  ">
          <div className="font-poppins   border-2 border-purple/50  shadow-md  dark:shadow-purple rounded-xl w-[22rem] md:w-[30rem] 2xl:w-[18rem] px-2 sm:px-6 py-2 sm:py-4 gap-1 sm:gap-4 flex flex-col  ">
            <div className="flex flex-col items-center  gap-6  ">
              <div className="flex flex-col">
                <h2 className="text-lg text-center  font-semibold">FRONTEND</h2>
                <span className="wave-skills relative flex justify-center "></span>
              </div>
              <Image
                src={splash}
                width={150}
                alt="ilustration de la section frontend"
                className=" rounded-full dark:h-24 dark:w-24 dark:sm:w-36 dark:sm:h-36 dark:brightness-75 mt-6 sm:mt-0"
              />
            </div>
            <ul className=" text-[1rem] text-center mt-6 sm:mt-4 leading-7 ">
              <li>JavaScript / TypeScript</li>
              <li>React, Next</li>
              <li>Shadcn/ui</li>
              <li>Tailwind</li>
              <li>Responsive design</li>
            </ul>
          </div>
          <div className="font-poppins border-2 border-purple/50  shadow-md  dark:shadow-purple rounded-xl w-[22rem] md:w-[30rem] 2xl:w-[18rem]  px-2 sm:px-6 sm:py-4 py-2 gap-1 sm:gap-4 flex flex-col ">
            <div className="flex flex-col items-center  gap-6">
              <div className="flex flex-col">
                <h2 className="text-lg text-center  font-semibold">BACKEND</h2>
                <span className="wave-skills relative flex justify-center "></span>
              </div>
              <Image
                src={backend}
                width={150}
                height={150}
                alt="illustration de la section backend"
                className=" rounded-full dark:h-24 dark:w-24  dark:sm:w-40 dark:sm:h-40 dark:brightness-75"
              />
            </div>

            <ul className="text-[1rem] text-center leading-7">
              <li>Node.js, Express.js</li>
              <li>MySql, Supabase</li>
              <li>API</li>
            </ul>
          </div>

          <div className="font-poppins border-2 border-purple/50  shadow-md  dark:shadow-purple rounded-xl w-[22rem] md:w-[30rem] 2xl:w-[18rem] sm:px-6 sm:py-4 py-2 gap-1 sm:gap-4 flex flex-col ">
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col">
                <h2 className="text-lg text-center  font-semibold">OUTILS</h2>
                <span className="wave-skills relative flex justify-center "></span>
              </div>
              <Image
                src={tools}
                width={150}
                height={150}
                alt="illustration de le section outils"
                className=" rounded-full dark:h-24 dark:w-24  dark:sm:w-36 dark:sm:h-36 dark:brightness-75 "
              />
            </div>
            <ul className=" text-[1rem] text-center leading-7 mt-4">
              <li>Git, GitHub</li>
              <li>VS Code</li>
              <li>Figma</li>
              <li>VERCEL</li>
            </ul>
          </div>
          <div className="font-poppins border-2 border-purple/50  shadow-md  dark:shadow-purple rounded-xl w-[22rem] md:w-[30rem] 2xl:w-[18rem] sm:px-6 sm:py-4 py-2 gap-1 sm:gap-4 flex flex-col ">
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col">
                <h2 className="text-lg text-center  font-semibold">
                  SOFT SKILLS
                </h2>
                <span className="wave-skills relative flex justify-center "></span>
              </div>
              <Image
                src={softSkills}
                width={150}
                height={150}
                alt="illustration de la section soft skills"
                className=" rounded-full dark:h-24 dark:w-24  dark:sm:w-40 dark:sm:h-40 dark:brightness-75 "
              />
            </div>
            <ul className="text-[1rem] text-center leading-7">
              <li>Communication efficace</li>
              <li>Résolution de problème</li>
              <li>Créativité</li>
              <li>Orientation client</li>
              <li>Adaptabilité</li>
              <li>Collaboration / Esprit d'équipe</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
