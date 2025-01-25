import professionalProjects from "@/lib/dataPro/projects";

export async function GET(request) {
  try {
    return new Response(JSON.stringify(professionalProjects), {
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
