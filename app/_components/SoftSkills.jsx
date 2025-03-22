import softSkills from "@/public/images/softSkills.png";
import { motion } from "framer-motion";
import Image from "next/image";

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
          <div className=" flex flex-col  mb-20 mt-24 ">
            <h2 className="text-txt_black dark:text-white font-semibold text-lg lg:text-[2.4rem] text-center">
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
            <div className="bg-gradient-card  font-poppins shadow-sm shadow-purple  rounded-xl w-[22rem] md:w-[24rem] lg:w-[22rem] xl:w-[18rem] sm:px-6 sm:py-4 py-2 gap-1 sm:gap-4 flex flex-col ">
              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col">
                  <h2 className="text-lg text-center  font-semibold">
                    Adaptabilité
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
              <p className="text-[1rem] text-center leading-7">
                Capacité à m'adapter rapidement aux nouvelles technologies et
                aux changements.{" "}
              </p>
            </div>{" "}
            <div className="bg-gradient-card  font-poppins shadow-sm shadow-purple  rounded-xl w-[22rem] md:w-[24rem] lg:w-[22rem] xl:w-[18rem] sm:px-6 sm:py-4 py-2 gap-1 sm:gap-4 flex flex-col ">
              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col">
                  <h2 className="text-lg text-center  font-semibold">
                    Créativité
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
              <p className="text-[1rem] text-center leading-7">
                Aptitude à concevoir des solutions innovantes et à adopter une
                approche créative pour résoudre les problèmes.
              </p>
            </div>
            <div className="bg-gradient-card  font-poppins shadow-sm shadow-purple  rounded-xl w-[22rem] md:w-[24rem] lg:w-[22rem] xl:w-[18rem] sm:px-6 sm:py-4 py-2 gap-1 sm:gap-4 flex flex-col ">
              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col">
                  <h2 className="text-lg text-center  font-semibold">
                    Esprit d'équipe, Collaboration
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
              <p className="text-[1rem] text-center leading-7">
                Capacité à travailler efficacement en équipe et à favoriser une
                collaboration harmonieuse.
              </p>
            </div>
            <div className="bg-gradient-card  font-poppins shadow-sm shadow-purple  rounded-xl w-[22rem] md:w-[24rem] lg:w-[22rem] xl:w-[18rem] sm:px-6 sm:py-4 py-2 gap-1 sm:gap-4 flex flex-col ">
              <div className="flex flex-col items-center gap-6">
                <div className="flex flex-col">
                  <h2 className="text-lg text-center  font-semibold">
                    Motivation
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
              <p className="text-[1rem] text-center leading-7">
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
