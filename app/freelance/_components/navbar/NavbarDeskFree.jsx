"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarDeskFree() {
  const pathname = usePathname();

  const hideNavbarOn = ["/developpeuse-web-freelance"];

  if (hideNavbarOn.includes(pathname)) return null;

  return (
    <div className="navbar flex text-base justify-between items-center  w-full pr-3 lg:pr-6  h-14 fixed top-0 z-50  shadow-purple/10 shadow-md text-txt_black dark:text-white ">
      <div className="  ml-4">{/* <ModeToggle /> */}</div>
      <nav aria-labelledby="navigation-menu" className=" flex justify-between">
        <ul className="font-lato flex gap-4 lg:gap-6 items-center font-medium  ">
          <li className="">
            <Link href="/#home" aria-label="Accueil" className="nav-link">
              Bienvenue<span className="underline-nav"></span>
            </Link>
          </li>
          <li className="">
            <Link href="/home" aria-label="accueil" className="nav-link">
              Accueil<span className="underline-nav"></span>
            </Link>
          </li>

          <li className="">
            <Link href="/services" aria-label="serices" className="nav-link">
              Services<span className="underline-nav"></span>
            </Link>
          </li>

          <li>
            <Link
              href={"/#me-contacter"}
              aria-label="me contacter"
              className="nav-link"
            >
              Demandez un devis<span className="underline-nav"></span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
