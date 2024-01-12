import supabase from "@/lib/database";

export const getProject = async () => {
  try {
    const { data, error } = await supabase.from("project").select("*");

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
    const { data, error } = await supabase
      .from("project")
      .insert([{ title: formData.title, description: formData.description }])
      .select();
    if (error) {
      throw new Error(`error inserting data : ${error.message}`);
    }
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
