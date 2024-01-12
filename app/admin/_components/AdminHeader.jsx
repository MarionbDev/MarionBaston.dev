"use client";

import Link from "next/link";
import UserDropdown from "./UserDropdown";
import { ModeToggle } from "@/app/_components/ModeToggle";

export default function AdminHeader() {
  return (
    <nav className="p-4 border-b border-purple flex justify-between">
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
      <ul className=" flex items-center gap-2">
        <ModeToggle />
        <UserDropdown />
      </ul>
    </nav>
  );
}
