"use client";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

export default function BestProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const res = await fetch("/api/projects?filter=true&exclude=1");
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
      <div className="flex flex-col items-center gap-10 justify-center">
        <p className=" text-center">Chargement des projets en cours...</p>{" "}
        <LoaderCircle size={56} color="#8300e9" className=" animate-spin" />
      </div>
    );
  if (error) return <p>{error}</p>;

  return (
    <div className="flex gap-6 3xl:gap-20 flex-wrap justify-center">
      {projects.map((project, index) => (
        <ProjectCard key={`${project.id}-${index}`} project={project} />
      ))}
    </div>
  );
}
