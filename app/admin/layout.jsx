"use client";

import { useState, useEffect } from "react";
import AdminHeader from "./_components/AdminHeader";
import { redirect } from "next/navigation";
import { getIsAuthenticated } from "./middlewares/withAuth";
import { Loader } from "lucide-react";

export default function AdminLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAuth = getIsAuthenticated();
    setLoading(false);

    if (!isAuth) {
      redirect("/");
    }
  }, []);

  if (loading) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <Loader size={50} className=" animate-spin" />
      </div>
    );
  }

  return (
    <div>
      <AdminHeader />
      {children}
    </div>
  );
}
