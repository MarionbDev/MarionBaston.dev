"use client";

import Image from "next/image";
import splash from "../../public/images/splash.jpeg";
import roue from "../../public/images/roue.jpg";
import tools from "../../public/images/tools.jpg";

export default function Skills() {
  return (
    <div className="flex  justify-center ">
      <div className="w-3/4 sm:w-10/12">
        <h2 className=" text-xl font-bold  md:text-3xl sm:w-full text-center lg:text-start mb-10 sm:mb-20 border-b-2 pb-4 sm:pb-2 border-purple ">
          Mes compétences
        </h2>
        <div className="flex flex-col items-center mt-2 ">
          <div className="flex flex-col md:flex-row  md:flex-wrap justify-center  lg:flex-nowrap lg:flex-row gap-6 lg:gap-20 xl:justify-around  ">
            <div className=" shadow-purple/40 shadow-md  sm:w-64 px-2 sm:px-6 py-2 sm:py-4 gap-1 sm:gap-8 flex flex-col ">
              <div className="flex flex-col items-center  gap-4 ">
                <h2 className="  lg:text-lg text-center sm:mb-4">FRONTEND</h2>
                <Image src={splash} width={150} alt="image" />
              </div>
              <ul className=" text-sm text-center lg:text-base sm:mt-7 ">
                <li>Javascript</li>
                <li>React, Next</li>
                <li>Shadcn/ui</li>
                <li>Tailwind</li>
                <li>Responsive design</li>
                <li>API REST</li>
              </ul>
            </div>
            <div className=" shadow-purple/40 shadow-md sm:w-64 px-2 sm:px-6 sm:py-4 py-2 gap-1 sm:gap-8 flex flex-col ">
              <div className="flex flex-col items-center gap-4">
                <h2 className="lg:text-lg text-center ">BACKEND</h2>
                <Image src={roue} width={150} height={150} alt="image" />
              </div>

              <ul className="text-sm text-center lg:text-base ">
                <li>Node.js, Express.js</li>
                <li>MySql, Supabase</li>
                <li>API : CRUD, Queries, Validations </li>
              </ul>
            </div>
            <div className=" shadow-purple/40 shadow-md sm:w-64  sm:px-6 sm:py-4 py-2 gap-1 sm:gap-8 flex flex-col ">
              <div className="flex flex-col items-center gap-4">
                <h2 className="lg:text-lg text-center ">OUTILS</h2>
                <Image src={tools} width={150} height={150} alt="image" />
              </div>
              <ul className="text-sm text-center lg:text-base  ">
                <li>Git, GitHub</li>
                <li>VS Code</li>
                <li>Figma</li>
                <li>VERCEL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
