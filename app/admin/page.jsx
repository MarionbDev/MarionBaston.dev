// dashboard.jsx
"use client";

import { getProject } from "@/lib/api/project";
import { useEffect, useState } from "react";
import ProjectsList from "./projects/_components/Projects";
import { getTechno } from "@/lib/api/technos";

function DashboardAdmin() {
  console.log("Projects in Dashboard:");

  const [projects, setProjects] = useState([]);
  const [technos, setTechnos] = useState([]);

  const allProjects = async () => {
    try {
      const data = await getProject();
      console.log("Projects data:", data);
      if (data) {
        setProjects(data);
      } else {
        console.error("Error fetching projects");
      }
    } catch (error) {
      console.error(`Error fetching projects: ${error.message}`);
    }
  };

  const allTechnos = async () => {
    try {
      const data = await getTechno();
      console.log("Technos data:", data);

      if (data) {
        setTechnos(data);
      } else {
        console.error("Error fetching projects");
      }
    } catch (error) {
      console.error(`Error fetching projects: ${error.message}`);
    }
  };

  useEffect(() => {
    // console.log("Inside useEffect");
    allProjects();
    allTechnos();
  }, []);

  return (
    <div>
      <h2 className="mb-10">Dashboard</h2>
      <div className="grid grid-cols-3 gap-6 ">
        <div className=" border p-4">
          <p className="mb-4">Mes projets</p>
          <div>
            <ul className=" flex flex-col gap-2">
              {projects.map((project) => (
                <li key={project.id} className="flex flex-col ">
                  <p>{project.title}</p>
                </li>
                // faire un lien de "mes projets" vers le menu "projets", le faire pour chaque partie de la page
              ))}
            </ul>
          </div>
        </div>
        <div className=" border p-4">
          <p>Diaporama des projets</p>
        </div>
        <div className=" border p-4">
          <p>Mes Technos</p>
          <div>
            <ul>
              {technos.map((techno) => (
                <li key={techno.id} className="flex gap-2">
                  <p>{techno.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className=" border p-4">
          <p>Mes collaborations "Freelance, Team ou autres ..."</p>
        </div>
        <div className=" border p-4">
          <p>Mon CV</p>
        </div>
      </div>
    </div>
  );
}

export default DashboardAdmin;
