import supabase from "@/lib/database";

export const getBio = async (formData) => {
  try {
    console.log("Updating bio with data:", formData);
    const { data, error } = await supabase.from("bio").select("*");

    if (error) {
      throw new Error(error.message);
    }

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const insertBio = async (formData) => {
  try {
    const { data, error } = await supabase
      .from("bio")
      .insert([
        {
          title_business: formData.title_business,
          description_part1: formData.description_part1,
          description_part2: formData.description_part2,
          description_part3: formData.description_part3,
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

export const updateBio = async (formData, userId) => {
  console.log("formData updateBio:", formData);
  console.log("userId:", userId);
  try {
    const { data, error } = await supabase
      .from("bio")
      .update({
        title_business: formData.title_business,
        description_part1: formData.description_part1,
        description_part2: formData.description_part2,
        description_part3: formData.description_part3,
      })
      .eq("user_id", userId)
      .select();

    console.log("UpdateBio response:", data);

    if (error) {
      // console.error("UpdateBio error:", error);
      throw new Error(`error updating data : ${error.message}`);
    }
    return data;
  } catch (error) {
    console.error("UpdateBio catch error:", error);
    throw new Error(`error updating data : ${error.message}`);
  }
};

export const deleteBio = async (bioId) => {
  try {
    const { data, error } = await supabase.from("bio").delete().eq("id", bioId);

    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
