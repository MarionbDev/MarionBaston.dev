import supabase from "@/lib/database";
import { getType } from "./types";

export const getProject = async () => {
  try {
    const { data, error } = await supabase.from("project").select(`
    id,
    title,
    description,
    time,
    website_url,
    github_url,
    type_list (*)
  
  `);

    // console.log(data);
    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const insertProject = async (formData) => {
  try {
    // Récupérer la liste des types
    const typesList = await getType();

    // Récupérer le type correspondant au titre sélectionné
    const selectedType = typesList.find(
      (type) => type.title === formData.type_list
    );

    if (!selectedType) {
      throw new Error(`Type not found for title: ${formData.type_list}`);
    }

    const typeId = selectedType.id;

    const { data, error } = await supabase
      .from("project")
      .insert([
        {
          title: formData.title,
          description: formData.description,
          type_id: typeId,
          time: formData.time,
          website_url: formData.website_url,
          github_url: formData.github_url,
          video_url: formData.video_url,
        },
      ])
      .select();
    if (error) {
      throw new Error(`error inserting data : ${error.message}`);
    }

    // const projectId = data[0].id;

    // await addTechnosToProject(projectId, formData.technos);

    return data;
  } catch (error) {
    throw new Error(`error inserting data : ${error.message}`);
  }
};

export const deleteProject = async (projectId) => {
  try {
    const { data, error } = await supabase
      .from("project")
      .delete()
      .eq("id", projectId);

    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

// export const addTechnosToProject = async (projectId, technos) => {
//   try {
//     if (Array.isArray(technos)) {
//       const data = technos.map((technoId) => ({
//         project_id: projectId,
//         techno_id: technoId,
//       }));

//       await supabase
//         .from("project_techno")
//         .upsert(data, { onConflict: ["project_id", "techno_id"] });
//     }
//   } catch (error) {
//     throw new Error(`Error adding technos to project: ${error.message}`);
//   }
// };
