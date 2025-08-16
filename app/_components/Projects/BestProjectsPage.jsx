"use client";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import BestProjects from "./BestProjects";

export default function BestProjectsPage() {
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
      <div className="flex flex-col items-center sm:items-start md:gap-3 mb-6 md:mb-12  ">
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
            <div className=" flex justify-start  w-full items-end gap-1 h-16  ">
              {" "}
              <h2 className="font-poppins text-3xl md:pb-1 font-semibold md:text-[3.5rem] ">
                Portfolio
              </h2>
              <span className="mb-[0.46rem] sm:mb-0 w-3 h-3 rounded-full bg-free_yellow "></span>
            </div>{" "}
            <div className="flex flex-col lg:flex-row w-full  pt-2 md:pt-8">
              <p className="font-poppins   md:px-0 text-[1rem]">
                Découvrez la diversité de mes expériences en développement web !
              </p>
              <div className=" flex gap-1 ">
                <Link
                  href={"/portfolio"}
                  className="  hover:font-bold  md:ml-2 "
                >
                  Voir plus
                </Link>
                <ArrowRight size={26} className=" hover:font-bold -rotate-45" />
              </div>
            </div>
          </motion.div>
        </motion.section>{" "}
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
          <div className=" px-10 ">
            <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start lg:flex-wrap gap-y-6 lg:gap-x-10 lg:gap-y-14 ">
              <BestProjects />
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}
