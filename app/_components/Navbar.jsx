"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../public/logo-bw.png";
import { ModeToggle } from "./ModeToggle";

export default function Navbar() {
  const pathname = usePathname();

  const hideNavbarOn = ["/developpeuse-web-freelance"];

  if (hideNavbarOn.includes(pathname)) return null;

  return (
    <div className="navbar flex text-base justify-between items-center  w-full pr-4   h-14 fixed top-0 z-50 shadow-white dark:shadow-white/10 shadow-md text-txt_black dark:text-white ">
      <div className=" flex gap-2 ml-4">
        <ModeToggle />
      </div>
      <nav
        aria-labelledby="navigation-menu"
        className=" flex justify-between gap-8"
      >
        <Image
          src={logo}
          width={512}
          height={512}
          alt="logo du site"
          className="h-10 w-10 dark:bg-free_yellow rounded-full p-[1px]"
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
        className="text-black  bg-free_yellow shadow-inner shadow-free_grey text-center px-4 py-2 rounded-full hover:bg-free_grey hover:text-txt_black border-[1px] border-white hover:border-txt_black transition-colors duration-300 ease-in-out  dark:hover:bg-free_grey "
      >
        Contactez-moi
      </Link>
    </div>
  );
}
