import backend from "@/public/images/backend.png";
import softSkills from "@/public/images/softSkills.png";
import splash from "@/public/images/splash.jpeg";
import tools from "@/public/images/tools.jpg";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Stacks() {
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
    <>
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
          <div className=" flex items-end gap-1 h-16 mb-6 md:mb-20 ">
            <h2 className="font-poppins text-3xl pb-1 font-semibold md:text-[4rem] ">
              Stack
            </h2>
            <span className="mb-[0.72rem] md:mb-0 w-3 h-3 md:h-4 md:w-4  rounded-full bg-purple "></span>
          </div>{" "}
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
          <div className="  flex flex-col justify-center items-center  md:items-stretch    md:flex-row  md:flex-wrap xl:flex-nowrap gap-6 md:gap-10   ">
            <div className="bg-gradient-card  font-poppins  shadow-sm shadow-purple  rounded-xl w-[22rem] md:w-[24rem] lg:w-[22rem] xl:w-[18rem] px-2 sm:px-6 py-2 sm:py-4 gap-1 sm:gap-4 lg:gap-x-8 flex flex-col  ">
              <div className="flex flex-col items-center  gap-6  ">
                <div className="flex flex-col">
                  <h2 className="text-lg text-center  font-semibold">
                    FRONTEND
                  </h2>
                  <span className="wave-skills relative flex justify-center "></span>
                </div>
                <Image
                  src={splash}
                  width={150}
                  alt="ilustration de la section frontend"
                  className=" rounded-full dark:h-24 dark:w-24 dark:sm:w-36 dark:sm:h-36 dark:brightness-75 mt-6 sm:mt-0"
                />
              </div>
              <ul className="text-[1rem] text-center mt-6 sm:mt-4 leading-7 ">
                <li>JavaScript, TypeScript</li>
                <li>React, Next</li>
                <li>Shadcn/ui</li>
                <li>TailwindCss</li>
                <li>Responsive design</li>
              </ul>
            </div>
            <div className="bg-gradient-card  font-poppins shadow-sm shadow-purple  rounded-xl w-[22rem] md:w-[24rem] lg:w-[22rem] xl:w-[18rem]  px-2 sm:px-6 sm:py-4 py-2 gap-1 sm:gap-4 flex flex-col ">
              <div className="flex flex-col items-center  gap-6">
                <div className="flex flex-col">
                  <h2 className="text-lg text-center  font-semibold">
                    BACKEND
                  </h2>
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
                <li>Vitest, Jest</li>
                <li>Zod, Joi</li>
              </ul>
            </div>

            <div className="bg-gradient-card  font-poppins shadow-sm shadow-purple  rounded-xl w-[22rem] md:w-[24rem] lg:w-[22rem] xl:w-[18rem] sm:px-6 sm:py-4 py-2 gap-1 sm:gap-4 flex flex-col ">
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
                <li>Resend</li>
                <li>Vercel</li>
                <li>VS Code</li>
                <li>Figma</li>
              </ul>
            </div>
            <div className="bg-gradient-card  font-poppins shadow-sm shadow-purple  rounded-xl w-[22rem] md:w-[24rem] lg:w-[22rem] xl:w-[18rem] sm:px-6 sm:py-4 py-2 gap-1 sm:gap-4 flex flex-col ">
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
        </motion.div>
      </motion.section>
    </>
  );
}
