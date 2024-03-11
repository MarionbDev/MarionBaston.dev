"use client";

import { ModeToggle } from "@/app/_components/ModeToggle";
import useSession from "@/app/hooks/useSession";
import Link from "next/link";
import UserDropdown from "./UserDropdown";

export default function AdminHeader() {
  const { user } = useSession();

  return (
    <nav className="p-4 border-b border-purple flex flex-col">
      <div className="flex justify-between my-2">
        <p>Bienvenue {user ? user.email : "Utilisateur non connecté"} </p>
        <ul className=" flex items-center gap-2">
          <ModeToggle />
          <UserDropdown />
        </ul>
      </div>

      <ul className="font-lato flex gap-10 items-center font-medium  ">
        <li className="transition hover:scale-110 duration-300 ">
          <Link href="/admin" aria-label="dashboard">
            Dashboard
          </Link>
        </li>
        <li className="transition hover:scale-110 duration-300 ">
          <Link href="/admin/projects" aria-label="mes projets">
            Projets
          </Link>
        </li>
        <li className="transition hover:scale-110 duration-300 ">
          <Link href="/admin/cv" aria-label="CV">
            CV
          </Link>
        </li>
      </ul>
    </nav>
  );
}
