// dashboard.jsx
"use client";
import { useEffect, useState } from "react";
import supabase from "@/lib/database";
import { getProject } from "@/lib/api/project";

function Dashboard() {
  const [formData, setFormData] = useState({ title: "", description: "" });
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectData = await getProject();
        setProjects(projectData || []);
      } catch (error) {
        console.error("Error fetching projects:", error.message);
      }
    };

    fetchProjects();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Utilisez Supabase pour insérer des données dans votre table
      const { data, error, response } = await supabase
        .from("project")
        .insert([formData]);

      if (error) {
        console.error(
          "Erreur lors de l'insertion dans la base de données :",
          error.message
        );
      } else {
        console.log("Données insérées avec succès :", response);
        // Réinitialisez le formulaire ou effectuez toute autre action nécessaire
        setFormData({ title: "", description: "" });
      }
    } catch (error) {
      console.error("Erreur inattendue :", error.message);
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <ul>
        {projects.map((project) => (
          <li key={project.id} className="flex">
            <p>{project.title}</p>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <label>
          Titre:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Description:
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Ajouter Projet</button>
      </form>
    </div>
  );
}

export default Dashboard;
