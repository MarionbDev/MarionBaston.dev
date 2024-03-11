// dashboard.jsx
"use client";

import { getBio } from "@/lib/api/bio";
import { getProject } from "@/lib/api/project";
import { getTechno } from "@/lib/api/technos";

import { useEffect, useState } from "react";

function DashboardAdmin() {
  const [projects, setProjects] = useState([]);
  const [technos, setTechnos] = useState([]);
  const [bioUser, setBioUser] = useState([]);

  const [loading, setLoading] = useState(true);

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

  const totalProjects = projects.length;

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

  const totalTechnos = technos.length;

  const allBio = async () => {
    try {
      const data = await getBio();
      console.log("bioUser data:", data);

      if (data) {
        setBioUser(data);
      } else {
        console.error("Error fetching bioUser");
      }
    } catch (error) {
      console.error(`Error fetching bioUser: ${error.message}`);
    }
  };

  

  useEffect(() => {
    console.log("Inside useEffect");

    allProjects();
    allTechnos();
    allBio();
  }, []);

  return (
    <div className=" m-12">
      <div className="grid grid-cols-3 gap-6 ">
        <div className=" border p-4">
          <p className="mb-4">Mes projets :</p>
          <div className="flex justify-center items-center">
            <div>{totalProjects}</div>
          </div>
        </div>
        <div className=" border p-4">
          <p className="mb-4">Diaporama des projets</p>
        </div>
        <div className=" border p-4">
          <p className="mb-4">Mes Technos :</p>
          <div className="flex justify-center items-center">
            <div>{totalTechnos}</div>
          </div>
        </div>

        <div className=" border p-4">
          <p className="mb-4">
            Mes collaborations "Freelance, Team ou autres ..."
          </p>
          <div className="flex justify-center items-center"></div>
        </div>
        <div className=" border p-4">
          <p className="mb-4">Mon CV</p>
        </div>
      </div>
      <div className="mt-10">
        <div className=" border p-4">
          <p>Ma bio</p>
          <div>
            <ul>
              {bioUser.map((bio) => (
                <li key={bio.id} className="flex flex-col gap-2">
                  <p>{bio.title_business}</p>
                  <p>{bio.description_part1}</p>
                  <p>{bio.description_part2}</p>
                  <p>{bio.description_part3}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashboardAdmin;
