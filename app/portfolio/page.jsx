"use client";
import { ArrowRight, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProjectCard from "../_components/Projects/ProjectCard";

export default function Portfolio() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects?exclude=1");
        if (!res.ok) throw new Error("Failed to fetch projects");

        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (loading)
    return (
      <div className="flex flex-col items-center gap-10 justify-center h-screen">
        <p className=" mt-32 text-center">Chargement des projets en cours...</p>{" "}
        <LoaderCircle size={56} className=" animate-spin text-free_yellow" />
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <div className="  mt-24 mx-6 md:mx-20 lg:mx-32 pb-20 ">
      <div className="text-txt_black dark:text-white flex flex-col  sm:items-start gap-3 mb-6 md:mb-12">
        <div className=" flex items-end gap-1 h-16 ">
          <h2 className="font-poppins text-3xl pb-1 font-semibold md:text-[4rem] ">
            Portfolio
          </h2>
          <span className="mb-[0.72rem] md:mb-0 w-3 h-3 md:h-4 md:w-4  rounded-full bg-free_yellow "></span>
        </div>
        <div className="text-[1rem] md:text-[1.07rem]">
          <p className=" pt-0 sm:px-0 md:pt-4 leading-7 ">
            Découvrez une sélection de mes projets réalisés en tant que
            freelance et au cours de ma formation, où j'ai conçu et développé
            des applications robustes et élégantes.
          </p>
          <div className="flex flex-col sm:flex-row gap-1 ">
            <p className="flex  gap-1 ">
              Pour découvrir davantage de projets, visitez mon
            </p>
            <Link
              href={"https://github.com/MarionbDev"}
              target="_blank"
              className="flex hover:font-extrabold font-semibold"
            >
              GitHub
              <ArrowRight
                size={20}
                className=" -rotate-45 hover:font-extrabold "
              />
            </Link>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-6 lg:gap-x-14">
          {projects.map((project, index) => (
            <ProjectCard key={`${project.id}-${index}`} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
