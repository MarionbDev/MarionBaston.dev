import projectsSide from "@/data/dataSide/projects";

export async function GET(request) {
  try {
    return new Response(JSON.stringify(projectsSide), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des projets:", error);
    return new Response(
      JSON.stringify({ message: "Erreur interne du serveur" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
