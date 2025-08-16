"use client";

import { motion } from "framer-motion";
import MySkills from "./MySkills";
import SoftSkills from "./SoftSkills";

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
              <span className=" mb-[0.48rem] sm:mb-[0.1rem] w-3 h-3 rounded-full bg-free_yellow "></span>
            </div>
            <p className=" font-poppins pt-2 md:pt-8 mb-12 md:mb-24 text-[1rem] md:text-[1.1rem] text-pretty leading-7">
              J'ai acquis des compétences en développement frontend et backend ,
              me permettant de concevoir des applications modernes, performantes
              et adaptées aux besoins des utilisateurs. Toujours en quête
              d'amélioration, j'aime explorer de nouvelles technologies et
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
          <SoftSkills />
        </motion.div>
      </motion.section>
    </div>
  );
}
