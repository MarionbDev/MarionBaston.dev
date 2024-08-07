"use client";

import { Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useSession from "../hooks/useSession";
import AdminHeader from "./_components/AdminHeader";

export default function AdminLayout({ children }) {
  // const [loading, setLoading] = useState(true);

  const router = useRouter();

  const { user, error, refreshSession, loading } = useSession();

  useEffect(() => {
    if (!loading && !user) {
      router.replace("/");
    }
  }, [user, loading, router]);

  // console.log("user layout", user);

  // useEffect(() => {
  //   console.log("Refreshing session...");
  //   refreshSession();
  // }, []);

  if (loading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <Loader size={50} className=" animate-spin" />
      </div>
    );
  }

  if (error) {
    return <p>Une erreur s'est produite : {error.message}</p>;
  }

  return (
    <div>
      <AdminHeader />
      {children}
    </div>
  );
}
