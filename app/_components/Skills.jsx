import Image from "next/image";
import react from "../../public/logos/react.png";
import javascript from "../../public/logos/javascript.png";
import node from "../../public/logos/node.png";
import express from "../../public/logos/express1.png";
import mysql from "../../public/logos/mysql.png";
import git from "../../public/logos/git.png";
import github from "../../public/logos/gitHub1.png";
import tailwind from "../../public/logos/tailwind.png";

export default function Skills() {
  return (
    <div className="text flex flex-col items-center justify-center py-6 bg-gradient-to-t from-[#FFFFFF] via-[#e9cfe9c0] to-[#FFFFFF]">
      {" "}
      <div className="w-3/4">
        <p className="text-xl font-bold text-center sm:text-3xl w-72 mb-12 border-b-2 pb-2 border-purple ">
          Mes compétences
        </p>
        <div className="grid grid-cols-5 gap-y-10 gap-x-10  ">
          <div className="flex justify-center items-center ">
            <Image src={react} alt="logo react" width={120} height={120} />
          </div>
          <div className="flex justify-center items-center   ">
            <Image
              src={javascript}
              alt="logo javascript"
              width={100}
              height={100}
            />
          </div>
          <div className="flex justify-center items-center  ">
            <Image src={node} alt="logo node" width={130} height={130} />
          </div>
          <div className="flex justify-center items-center ">
            <Image src={express} alt="logo express" width={140} height={140} />
          </div>
          <div className="flex justify-center items-center   pb-5">
            <Image src={mysql} alt="log mySql" width={600} height={600} />
          </div>
          <div className="flex justify-center items-center col-start-1 col-span-2 ">
            <div className=" flex justify-center items-center ">
              <Image src={git} alt="logo git" width={140} height={140} />
            </div>
          </div>
          <div className="flex justify-center items-center col-start-3 row-start-2">
            <div className=" flex justify-center items-center ">
              <Image src={github} alt="logo github" width={180} height={180} />
            </div>
          </div>
          <div className="flex justify-center items-center col-start-4 col-span-2 row-start-2">
            <div className=" flex justify-center items-center ">
              <Image
                src={tailwind}
                alt="logo taimwind"
                width={120}
                height={120}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
