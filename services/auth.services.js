import supabase from "@/lib/database";
import { setIsAuthenticated } from "@/app/admin/middlewares/withAuth";

export const signInUser = async ({ email, password }) => {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    setIsAuthenticated(true);
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateUserEmail = async (newEmail, { email, password }) => {
  try {
    await signInUser({ email, password });
    const { data, error } = await supabase.auth.updateUser({
      email: newEmail,
    });
    if (error) throw error;
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateUserPassword = async (newPassword, { email, password }) => {
  try {
    await signInUser({ email, password });
    const { data, error } = await supabase.auth.updateUser({
      password: newPassword,
    });
    if (error) throw error;
    return data;
  } catch (error) {
    throw error;
  }
};

// A FAIRE ==>> mettre à jour les metadonnées user
// export const updateUserData = async (newPassword, { email, password }) => {
//   try {
//     await signInUser({ email, password });
//     const { data, error } = await supabase.auth.updateUser({
//       data: {}
//     });
//     if (error) throw error;
//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

export const signOutUser = async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    setIsAuthenticated(false);
  } catch (error) {
    throw error;
  }
};
