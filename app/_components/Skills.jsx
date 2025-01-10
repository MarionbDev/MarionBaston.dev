"use client";

import backend from "@/public/images/backend.png";
import softSkills from "@/public/images/softSkills.png";
import splash from "@/public/images/splash.jpeg";
import tools from "@/public/images/tools.jpg";
import Image from "next/image";

export default function Skills() {
  return (
    <div className="tracking-wide">
      <div className=" flex items-end gap-1 h-16 mb-24 ">
        <h2 className="font-poppins text-2xl pb-1 font-semibold md:text-[3.5rem] ">
          Mes Compétences
        </h2>
        <span className=" w-4 h-4 rounded-full bg-purple"></span>
      </div>
      <div className="flex flex-col items-center mt-2 ">
        <div className="flex flex-col  items-stretch   md:flex-row  md:flex-wrap justify-center  lg:flex-nowrap lg:flex-row gap-6 lg:gap-8 xl:justify-around  ">
          <div className="font-poppins dark:bg-purple/10 dark:shadow-purple/50 shadow-purple/40 shadow-md rounded-xl border-none  w-[18rem]  px-2 sm:px-6 py-2 sm:py-4 gap-1 sm:gap-4 flex flex-col ">
            <div className="flex flex-col items-center  gap-4 ">
              <div className="flex flex-col">
                <h2 className="text-lg text-center  font-semibold">FRONTEND</h2>
                <span className=" w-full h-[0.1rem] rounded-full bg-purple/70"></span>{" "}
              </div>
              <Image
                src={splash}
                width={150}
                alt="image représenter un tâche de peinture"
                className=" rounded-full dark:h-24 dark:w-24 dark:sm:w-40 dark:sm:h-40 dark:brightness-75 mt-6"
              />
            </div>
            <ul className=" text-[1rem] text-center lg:text-[1rem] mt-6 ">
              <li>JavaScript / TypeScript</li>
              <li>React, Next</li>
              <li>Shadcn/ui</li>
              <li>Tailwind</li>
              <li>Responsive design</li>
              <li>API REST</li>
            </ul>
          </div>
          <div className="font-poppins dark:bg-purple/10 dark:shadow-purple/50 shadow-purple/40 shadow-md rounded-xl border-none w-72   px-2 sm:px-6 sm:py-4 py-2 gap-1 sm:gap-4 flex flex-col ">
            <div className="flex flex-col items-center  gap-4">
              <div className="flex flex-col">
                <h2 className="text-lg text-center  font-semibold">BACKEND</h2>
                <span className=" w-full h-[0.1rem] rounded-full bg-purple/70"></span>{" "}
              </div>
              <Image
                src={backend}
                width={150}
                height={150}
                alt="image représentant un engrenage"
                className=" rounded-full dark:h-24 dark:w-24  dark:sm:w-40 dark:sm:h-40 dark:brightness-75"
              />
            </div>

            <ul className="text-[1rem] text-center lg:text-[1rem] ">
              <li>Node.js, Express.js</li>
              <li>MySql, Supabase</li>
              <li>API</li>
            </ul>
          </div>

          <div className="font-poppins dark:bg-purple/10 dark:shadow-purple/50 shadow-purple/40 shadow-md rounded-xl border-none w-72 xl:w-72  sm:px-6 sm:py-4 py-2 gap-1 sm:gap-4 flex flex-col ">
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col">
                <h2 className="text-lg text-center  font-semibold">OUTILS</h2>
                <span className=" w-full h-[0.1rem] rounded-full bg-purple/70"></span>{" "}
              </div>{" "}
              <Image
                src={tools}
                width={150}
                height={150}
                alt="image représentant des outils et un pc"
                className=" rounded-full dark:h-24 dark:w-24  dark:sm:w-40 dark:sm:h-40 dark:brightness-75 "
              />
            </div>
            <ul className=" text-[1rem] text-center lg:text-[1rem] ">
              <li>Git, GitHub</li>
              <li>VS Code</li>
              <li>Figma</li>
              <li>VERCEL</li>
            </ul>
          </div>
          <div className="font-poppins dark:bg-purple/10 dark:shadow-purple/50 shadow-purple/40 shadow-md rounded-xl border-none w-72 xl:w-72  sm:px-6 sm:py-4 py-2 gap-1 sm:gap-4 flex flex-col ">
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col">
                <h2 className="text-lg text-center  font-semibold">
                  SOFT SKILLS
                </h2>
                <span className=" w-full h-[0.1rem] rounded-full bg-purple/70"></span>{" "}
              </div>
              <Image
                src={softSkills}
                width={150}
                height={150}
                alt="image représentant des outils et un pc"
                className=" rounded-full dark:h-24 dark:w-24  dark:sm:w-40 dark:sm:h-40 dark:brightness-75 "
              />
            </div>
            <ul className="text-[1rem] text-center lg:text-[1rem] ">
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
