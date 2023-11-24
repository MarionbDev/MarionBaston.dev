"use client";

import Image from "next/image";
import splash from "../../public/images/splash.jpeg";
import roue from "../../public/images/roue.jpg";
import tools from "../../public/images/tools.jpg";

export default function Skills() {
  return (
    <div className="flex flex-col items-center justify-centers ">
      <div className="w-3/4">
        <h2 className=" text-xl font-bold  sm:text-3xl w-full text-start mb-20 border-b-2 pb-2 border-purple ">
          Mes compétences
        </h2>

        <div className="flex justify-around ">
          <div className=" shadow-purple/40 shadow-md  w-64 px-6 py-4 gap-8 flex flex-col ">
            <div className="flex flex-col items-center  gap-4 ">
              <h2 className="  lg:text-lg text-center mb-4">FRONTEND</h2>
              <Image src={splash} width={150} alt="image" />
            </div>
            <ul className=" lg:text-base mt-7">
              <li>Javascript</li>
              <li>React, Next</li>
              <li>Shadcn/ui</li>
              <li>Tailwind</li>
              <li>Responsive design</li>
              <li>API REST</li>
            </ul>
          </div>
          <div className=" shadow-purple/40 shadow-md w-64  px-6 py-4 gap-8 flex flex-col ">
            <div className="flex flex-col items-center gap-4">
              <h2 className="lg:text-lg text-center ">BACKEND</h2>
              <Image src={roue} width={150} height={150} alt="image" />
            </div>

            <ul className=" lg:text-base">
              <li>Node.js, Express.js</li>
              <li>MySql, Supabase</li>
              <li>API : CRUD, Queries, Validations </li>
            </ul>
          </div>
          <div className=" shadow-purple/40 shadow-md w-64 px-6 py-4 gap-8 flex flex-col ">
            <div className="flex flex-col items-center gap-4">
              <h2 className="lg:text-lg text-center ">OUTILS</h2>
              <Image src={tools} width={150} height={150} alt="image" />
            </div>
            <ul className=" lg:text-base ">
              <li>Git, GitHub</li>
              <li>VS Code</li>
              <li>Figma</li>
              <li>VERCEL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
