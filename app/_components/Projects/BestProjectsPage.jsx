"use client";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import BestProjects from "./BestProjects";

export default function BestProjectsPage() {
  return (
    <div className="tracking-wide ">
      <div className="  flex flex-col items-center sm:items-start md:gap-3 mb-6 md:mb-12  ">
        <div className=" flex justify-start  w-full items-end gap-1 h-16  ">
          <h2 className="font-poppins text-3xl md:pb-1 font-semibold md:text-[3.5rem] ">
            Portfolio
          </h2>
          <span className="mb-[0.46rem] sm:mb-0 w-3 h-3 rounded-full bg-purple "></span>
        </div>
        <div className="flex flex-col md:flex-row w-full md:items-center pt-2 md:pt-8">
          <p className="font-poppins   md:px-0 text-[1rem]">
            Découvrez la diversité de mes expériences en développement web !
          </p>
          <div className=" flex">
            <Link
              href={"/portfolio"}
              className="  text-purple md:dark:text-purple_dark md:ml-2 "
            >
              Voir plus
            </Link>
            <ArrowRight size={20} className=" text-purple -rotate-45 mb-1" />
          </div>
        </div>
      </div>
      <div className=" px-10 ">
        <div className="flex flex-col items-center lg:flex-row lg:justify-center lg:items-start lg:flex-wrap lg:gap-x-10 lg:gap-y-14 ">
          <BestProjects />
        </div>
      </div>
    </div>
  );
}
