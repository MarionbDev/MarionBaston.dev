export async function GET(req) {
  try {
    const url = new URL(req.url);
    const filter = url.searchParams.get("filter") === "true";
    const exclude = url.searchParams.get("exclude");

    const sideProjectsResponse = await fetch(
      "http://localhost:3000/api/projects/projectsSide"
    );
    console.log("side :", sideProjectsResponse);
    const sideProjects = await sideProjectsResponse.json();

    const proProjectsResponse = await fetch(
      "http://localhost:3000/api/projects/projectsPro"
    );
    const proProjects = await proProjectsResponse.json();

    const trainingProjectsResponse = await fetch(
      "http://localhost:3000/api/projects/projectsTraining"
    );
    const trainingProjects = await trainingProjectsResponse.json();

    const filteredTrainingProjects = filter
      ? trainingProjects.filter((project) => [5].includes(project.id))
      : trainingProjects;

    const filteredProProjects = filter
      ? proProjects.filter((project) => [1].includes(project.id))
      : proProjects;

    const filteredSideProjects = exclude
      ? sideProjects.filter((project) => project.id == parseInt(exclude))
      : sideProjects;

    // Combiner tous les projets
    const allProjects = [
      ...filteredProProjects,
      ...filteredSideProjects,
      ...filteredTrainingProjects,
    ];

    // Réponse combinée en JSON
    return new Response(JSON.stringify(allProjects), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Permet toutes les origines
        "Access-Control-Allow-Methods": "GET, POST, OPTIONS", // Autorise certaines méthodes
      },
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ message: "Error fetching projects" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
