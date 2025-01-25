export default async function handler(req, res) {
  try {
    const sideProjectsResponse = await fetch(
      "http://localhost:3000/api/projects/projectsSide"
    );

    const sideProjects = await sideProjectsResponse.json();

    const proProjectsResponse = await fetch(
      "http://localhost:3000/api/projects/projectsPro"
    );
    const proProjects = await proProjectsResponse.json();

    const trainingProjectsResponse = await fetch(
      "http://localhost:3000/api/projects/projectsTraining"
    );
    const trainingProjects = await trainingProjectsResponse.json();

    // Filtrer les projets de formation (IDs 3 et 5 uniquement)
    const filteredTrainingProjects = trainingProjects.filter((project) =>
      [3, 5].includes(project.id)
    );

    // Combiner tous les projets
    const allProjects = [
      ...proProjects,
      ...sideProjects,
      ...filteredTrainingProjects,
    ];

    res.status(200).json(allProjects);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching projects" });
  }
}
