// import supabase from "@/lib/database";
// import { useEffect, useState } from "react";

// export default function useSession() {
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchSession = async () => {
//       setLoading(true);
//       try {
//         const { data, error } = await supabase.auth.getSession();
//         if (error) {
//           throw error;
//         }
//         setUser(data?.session?.user || null);
//       } catch (error) {
//         console.error(error);
//         setError(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchSession();
//   }, []);

//   const refreshSession = async () => {
//     setLoading(true);
//     try {
//       const { data, error } = await supabase.auth.refreshSession();
//       if (error) {
//         throw error;
//       }
//       setUser(data?.session?.user || null);
//     } catch (error) {
//       console.error(error);
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return {
//     user,
//     loading,
//     error,
//     refreshSession,
//   };
// }
import supabase from "@/lib/database"; // Assurez-vous que ce chemin est correct
import { useEffect, useState } from "react";

export default function useSession() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [accessToken, setAccessToken] = useState();

  useEffect(() => {
    const fetchSession = async () => {
      setLoading(true);
      try {
        // Récupérer la session actuelle
        const { data: sessionData, error } = await supabase.auth.getSession();
        if (error) {
          throw error;
        }
        const { session } = sessionData;
        setUser(session?.user || null);
        const token = session?.access_token || null;
        setAccessToken(token);

        if (token) {
          localStorage.setItem("authToken", token);
          // console.log("Token saved to localStorage:", token);
        } else {
          localStorage.removeItem("authToken");
          // console.log("Token removed from localStorage");
        }
      } catch (error) {
        console.error("Error fetching session:", error);
        setError({ message: error.message });
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, []);

  const refreshSession = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.auth.refreshSession();
      if (error) {
        throw error;
      }
      const { session } = data;
      setUser(session?.user || null);
      const token = session?.access_token || null;
      setAccessToken(token);

      if (token) {
        localStorage.setItem("authToken", token);
        // console.log("Token refreshed and saved to localStorage:", token);
      } else {
        localStorage.removeItem("authToken");
        // console.log("Token removed from localStorage");
      }

      // console.log(
      //   "Current localStorage after refresh:",
      //   localStorage.getItem("authToken"),
      // );
    } catch (error) {
      console.error("Error refreshing session:", error);
      setError({ message: error.message });
    } finally {
      setLoading(false);
    }
  };

  return { user, loading, error, refreshSession, accessToken };
}
