import supabase from "@/lib/database";

export const getType = async () => {
  try {
    const { data, error } = await supabase.from("type_list").select("*");
    // console.log(data);
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const insertType = async (formData) => {
  try {
    const { data, error } = await supabase
      .from("type_list")
      .insert([
        {
          title: formData.title,
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

export const deleteType = async (typeId) => {
  try {
    const { data, error } = await supabase
      .from("type_list")
      .delete()
      .eq("id", typeId);

    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
