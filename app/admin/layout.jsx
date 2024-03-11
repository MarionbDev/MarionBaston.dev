"use client";

import { Loader } from "lucide-react";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import useSession from "../hooks/useSession";
import AdminHeader from "./_components/AdminHeader";
import { getIsAuthenticated } from "./middlewares/withAuth";

export default function AdminLayout({ children }) {
  const [loading, setLoading] = useState(true);

  const { user, error, refreshSession } = useSession();

  useEffect(() => {
    const isAuth = getIsAuthenticated();
    console.log("auth ?", isAuth);
    setLoading(false);

    if (!isAuth) {
      console.log("Redirecting to /");
      setTimeout(() => {
        redirect("/");
      }, 0);
    }
  }, []);
  console.log("user layout", user);

  useEffect(() => {
    console.log("Refreshing session...");
    refreshSession();
  }, []);

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
