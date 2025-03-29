import { motion } from "framer-motion";
import Image from "next/image";
import ampoule from "./../../public/ampoule.png";
import cible from "./../../public/cible.jpg";
import equipe from "./../../public/equipe.jpg";
import puzzle from "./../../public/puzzle.png";

export default function SoftSkills() {
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
          <div className=" flex flex-col  mb-16 mt-24 ">
            <h2 className="text-txt_black dark:text-white font-semibold text-2xl lg:text-[2.4rem] text-center">
              Mes Points Forts
            </h2>
            <span className="wave-skills relative after:w-[15%] flex justify-center mt-2 "></span>
          </div>
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
            <div className="bg-gradient-card  font-poppins shadow-sm shadow-purple  rounded-xl w-[22rem] md:w-[24rem] lg:w-[22rem] xl:w-[18rem] px-6 py-6  gap-4 sm:gap-6 flex flex-col ">
              <div className="flex flex-col items-center gap-8">
                <div className="flex flex-col">
                  <h2 className="text-xl text-center  font-semibold">
                    Adaptabilité
                  </h2>
                  <span className="wave-skills relative flex justify-center "></span>
                </div>
                <Image
                  src={puzzle}
                  width={150}
                  height={150}
                  alt="illustration de la section soft skills"
                  className=" rounded-full dark:brightness-75 h-32 w-32 md:w-28 md:h-28"
                />
              </div>
              <p className="py-6 text-[1rem] md:text-[1.07rem] text-center leading-7">
                Capacité à m'adapter rapidement aux nouvelles technologies et
                aux changements.{" "}
              </p>
            </div>{" "}
            <div className="bg-gradient-card  font-poppins shadow-sm shadow-purple  rounded-xl w-[22rem] md:w-[24rem] lg:w-[22rem] xl:w-[18rem] px-6 py-6 gap-4 sm:gap-6 flex flex-col ">
              <div className="flex flex-col items-center gap-8">
                <div className="flex flex-col">
                  <h2 className="text-xl text-center  font-semibold">
                    Curiosité
                  </h2>
                  <span className="wave-skills relative flex justify-center "></span>
                </div>
                <Image
                  src={ampoule}
                  width={150}
                  height={150}
                  alt="illustration de la section soft skills"
                  className=" rounded-full dark:brightness-75 h-32 w-32 md:w-28 md:h-28"
                />
              </div>
              <p className="py-6 text-[1rem] md:text-[1.07rem] text-center leading-7">
                {" "}
                Envie d'apprendre et d'explorer de nouveaux concepts en
                permanence.
              </p>
            </div>
            <div className="bg-gradient-card  font-poppins shadow-sm shadow-purple  rounded-xl w-[22rem] md:w-[24rem] lg:w-[22rem] xl:w-[18rem] px-6 py-6 gap-4 sm:gap-6 flex flex-col ">
              <div className="flex flex-col items-center gap-8">
                <div className="flex flex-col">
                  <h2 className="text-xl text-center  font-semibold">
                    Esprit d'équipe
                  </h2>
                  <span className="wave-skills relative flex justify-center "></span>
                </div>
                <Image
                  src={equipe}
                  width={150}
                  height={150}
                  alt="illustration de la section soft skills"
                  className=" rounded-full dark:brightness-75 h-32 w-32 md:w-28 md:h-28"
                />
              </div>
              <p className="py-6 text-[1rem] md:text-[1.07rem] text-center leading-7">
                Capacité à travailler efficacement en équipe et à favoriser une
                collaboration harmonieuse.
              </p>
            </div>
            <div className="bg-gradient-card  font-poppins shadow-sm shadow-purple  rounded-xl w-[22rem] md:w-[24rem] lg:w-[22rem] xl:w-[18rem] px-6 py-6 gap-4 sm:gap-6 flex flex-col ">
              <div className="flex flex-col items-center gap-8">
                <div className="flex flex-col">
                  <h2 className="text-xl text-center  font-semibold">
                    Motivation
                  </h2>
                  <span className="wave-skills relative flex justify-center "></span>
                </div>
                <Image
                  src={cible}
                  width={150}
                  height={150}
                  alt="illustration de la section soft skills"
                  className=" rounded-full dark:brightness-75 h-32 w-32 md:w-28 md:h-28 "
                />
              </div>
              <p className="py-6 text-[1rem] md:text-[1.07rem] text-center leading-7">
                Grande motivation à relever de nouveaux défis et à atteindre des
                objectifs avec engagement et détermination.{" "}
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
}
