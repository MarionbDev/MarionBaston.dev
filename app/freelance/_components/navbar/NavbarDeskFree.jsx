"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import logo from "../../../../public/m_logo.png";
import logo from "./logo-bw.png";

export default function NavbarDeskFree() {
  const pathname = usePathname();

  const hideNavbarOn = ["/developpeuse-web-freelance"];

  if (hideNavbarOn.includes(pathname)) return null;

  return (
    <div className="flex justify-center">
      <div
        className="  navbar flex text-base justify-between items-center mt-6 rounded-3xl border-[1px] border-free_grey w-3/4 px-4 sm:px-6 h-16 fixed z-50
          shadow-purple/10 shadow-md 
          text-txt_black dark:text-white
          bg-bg_white dark:bg-[#181616] "
      >
        <div className="  ml-4">
          {/* <ModeToggle /> */}
          <Image
            src={logo}
            width={512}
            height={512}
            alt="logo du site"
            className="w-10 h-10"
          />
        </div>
        <nav aria-labelledby="navigation-menu" className="">
          <ul className=" flex gap-4 lg:gap-6 items-center font-medium  ">
            <li className="">
              <Link
                href="/freelance"
                aria-label="accueil"
                className="nav-link "
              >
                Accueil
                <span className="underline-nav"></span>
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
            <li className="">
              <Link
                href="/freelance/#offres"
                aria-label="offres"
                className="nav-link"
              >
                Offres<span className="underline-nav"></span>
              </Link>
            </li>

            <Link
              href={"/freelance/contact"}
              aria-label="me contacter"
              className=" font-bold rounded-lg px-4 py-2 bg-free_yellow text-txt_black shadow-inner shadow-free_grey hover:bg-free_grey duration-300 border-[1px] border-white hover:text-txt_black hover:border-txt_black  ease-in-out"
            >
              Demandez un devis
            </Link>
          </ul>
        </nav>
      </div>
    </div>
  );
}
