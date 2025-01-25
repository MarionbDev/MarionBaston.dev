export async function GET({ params }) {
  try {
    const { slug } = params;

    if (!slug) {
      return new Response(JSON.stringify({ message: "Slug manquant" }), {
        status: 400, // Retourne un mauvais paramètre
        headers: { "Content-Type": "application/json" },
      });
    }

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

    const allProjects = [...proProjects, ...sideProjects, ...trainingProjects];

    const project = allProjects.find((proj) => proj.slug === slug);

    if (!project) {
      return new Response(JSON.stringify({ message: "Project not found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify(project), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ message: "Error fetching project" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
