import supabase from "@/lib/database";

export const getTechno = async () => {
  try {
    const { data, error } = await supabase.from("techno").select("*");
    console.log(data);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const insertTechno = async (formData) => {
  try {
    const { data, error } = await supabase
      .from("techno")
      .insert([
        {
          title: formData.title,
          image_url: formData.image_url,
        },
      ])
      .select();
    if (error) {
      throw new Error(`error inserting data : ${error.message}`);
    }

    return data;
  } catch (error) {
    throw new Error(`error inserting data : ${error.message}`);
  }
};

export const deleteTechno = async (technoId) => {
  try {
    const { data, error } = await supabase
      .from("techno")
      .delete()
      .eq("id", technoId);

    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
