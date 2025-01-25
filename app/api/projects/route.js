export async function GET(req) {
  try {
    const url = new URL(req.url);
    const filter = url.searchParams.get("filter") === "true";
    const exclude = url.searchParams.get("exclude");

    const sideProjectsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/projects/projectsSide`
    );
    const sideProjects = await sideProjectsResponse.json();

    const proProjectsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/projects/projectsPro`
    );
    const proProjects = await proProjectsResponse.json();

    const trainingProjectsResponse = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/projects/projectsTraining`
    );
    const trainingProjects = await trainingProjectsResponse.json();

    const sortedTrainingProjects = trainingProjects.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);
      return dateB - dateA;
    });

    const filteredTrainingProjects = filter
      ? sortedTrainingProjects.filter((project) => [5].includes(project.id))
      : sortedTrainingProjects;

    const filteredProProjects = filter
      ? proProjects.filter((project) => [1].includes(project.id))
      : proProjects;

    const filteredSideProjects = exclude
      ? sideProjects.filter((project) => project.id == parseInt(exclude))
      : sideProjects;

    const allProjects = [
      ...filteredProProjects,
      ...filteredSideProjects,
      ...filteredTrainingProjects,
    ];

    return new Response(JSON.stringify(allProjects), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
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
