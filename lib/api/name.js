// import supabase from "@/lib/database";

// export const getName = async () => {
//   try {
//     const { data, error } = await supabase.from("name").select("*");

//     console.log("getName", data);
//     if (error) {
//       throw new Error(error.message);
//     }

//     return data;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };

// export const updateName = async (formData, userId) => {
//   // console.log("formData updateNames:", formData);
//   // console.log("userId:", userId);
//   try {
//     const { data, error } = await supabase
//       .from("name")
//       .update({ firstname: formData.firstname, lastname: formData.lastname })
//       .eq("user_id", userId)
//       .select();

//     console.log("UpdateName response:", data);

//     if (error) {
//       // console.error("UpdateName error:", error);
//       throw new Error(`error updating data : ${error.message}`);
//     }
//     return data;
//   } catch (error) {
//     console.error("UpdateName catch error:", error);
//     throw new Error(`error updating data : ${error.message}`);
//   }
// };

// export const deleteName = async (nameId) => {
//   try {
//     const { data, error } = await supabase
//       .from("name")
//       .delete()
//       .eq("id", nameId);

//     if (error) {
//       throw new Error(error.message);
//     }
//     return data;
//   } catch (error) {
//     throw new Error(error.message);
//   }
// };
