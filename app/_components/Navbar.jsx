"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/m_logo.png";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const pathname = usePathname();

  const hideNavbarOn = ["/developpeuse-web-freelance"];

  if (hideNavbarOn.includes(pathname)) return null;

  return (
    <div className="navbar flex text-base justify-between items-center  w-full pr-4   h-14 fixed top-0 z-50  shadow-purple/10 shadow-md text-txt_black dark:text-white ">
      <div className=" flex gap-2 ml-4">
        <ModeToggle />
      </div>
      <nav
        aria-labelledby="navigation-menu"
        className=" flex justify-between gap-6"
      >
        <Image
          src={logo}
          width={512}
          height={512}
          alt="logo du site"
          className="h-9 w-9"
        />
        <ul className="font-lato flex gap-4 lg:gap-6 items-center font-medium  ">
          <li className="">
            <Link href="/#home" aria-label="Accueil" className="nav-link">
              Accueil<span className="underline-nav"></span>
            </Link>
          </li>
          <li className="">
            <Link
              href="/parcours"
              aria-label="mon parcours"
              className="nav-link"
            >
              Mon parcours<span className="underline-nav"></span>
            </Link>
          </li>

          <li className="">
            <Link
              href="/portfolio"
              aria-label="mes projets"
              className="nav-link"
            >
              Portfolio<span className="underline-nav"></span>
            </Link>
          </li>
          <li className="">
            <Link
              href="/#skills"
              aria-label="mes compétences"
              className="nav-link"
            >
              Compétences<span className="underline-nav"></span>
            </Link>
          </li>
          <li className="">
            <Link href="/#stacks" aria-label="ma stack" className="nav-link">
              Stacks<span className="underline-nav"></span>
            </Link>
          </li>
        </ul>
      </nav>

      <Link
        href={"/#me-contacter"}
        aria-label="me contacter"
        className="border-purple border-2 bg-purple text-white rounded-full py-1 px-4 shadow-inner shadow-free_grey hover:bg-purple/10 hover:text-free_purple dark:hover:text-free_grey duration-300  "
      >
        Contactez-moi
      </Link>
    </div>
  );
}
