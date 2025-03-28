"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../../../public/m_logo.png";

export default function NavbarDeskFree() {
  const pathname = usePathname();

  const hideNavbarOn = ["/developpeuse-web-freelance"];

  if (hideNavbarOn.includes(pathname)) return null;

  return (
    <div className="navbar flex text-base justify-between items-center  w-full pr-3  h-14 fixed top-0 z-50  shadow-purple/10 shadow-md text-txt_black dark:text-white ">
      <div className="  ml-4">
        {/* <ModeToggle /> */}
        <Image
          src={logo}
          width={512}
          height={512}
          alt="logo du site"
          className="w-9 h-9"
        />
      </div>
      <nav aria-labelledby="navigation-menu" className=" flex justify-between">
        <ul className=" flex gap-4 lg:gap-6 items-center font-medium  ">
          <li className="">
            <Link href="/freelance" aria-label="accueil" className="nav-link">
              Accueil<span className="underline-nav"></span>
            </Link>
          </li>

          <li className="">
            <Link
              href="/freelance/#services"
              aria-label="serices"
              className="nav-link"
            >
              Services<span className="underline-nav"></span>
            </Link>
          </li>
        </ul>
      </nav>

      <Link
        href={"/#me-contacter"}
        aria-label="me contacter"
        className="font-medium bg-free_yellow rounded-full px-3 py-1 shadow-inner shadow-free_grey border-2 border-free_yellow hover:bg-free_grey duration-300 "
      >
        Demandez un devis<span className="underline-nav"></span>
      </Link>
    </div>
  );
}
